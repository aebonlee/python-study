-- ============================================================
-- PyMaster Community Schema
-- Supabase SQL - 게시글, 댓글, 좋아요
-- ============================================================

-- 1. 게시글 테이블
CREATE TABLE pymaster_community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name TEXT NOT NULL DEFAULT '',
  author_avatar TEXT DEFAULT '',
  category TEXT NOT NULL CHECK (category IN ('qna', 'free', 'code', 'review')),
  title TEXT NOT NULL CHECK (char_length(title) <= 200),
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_solved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. 댓글 테이블
CREATE TABLE pymaster_community_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES pymaster_community_posts(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name TEXT NOT NULL DEFAULT '',
  author_avatar TEXT DEFAULT '',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 좋아요 테이블
CREATE TABLE pymaster_community_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES pymaster_community_posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- ============================================================
-- 인덱스
-- ============================================================

-- 카테고리 + 최신순 정렬
CREATE INDEX pymaster_idx_posts_category_created ON pymaster_community_posts(category, created_at DESC);

-- 태그 검색 (GIN)
CREATE INDEX pymaster_idx_posts_tags ON pymaster_community_posts USING GIN(tags);

-- 풀텍스트 검색 (GIN)
CREATE INDEX pymaster_idx_posts_search ON pymaster_community_posts
  USING GIN(to_tsvector('simple', coalesce(title, '') || ' ' || coalesce(content, '')));

-- 댓글: post_id 기준 조회
CREATE INDEX pymaster_idx_comments_post ON pymaster_community_comments(post_id, created_at ASC);

-- 좋아요: post_id + user_id
CREATE INDEX pymaster_idx_likes_post_user ON pymaster_community_likes(post_id, user_id);

-- ============================================================
-- RLS (Row Level Security)
-- ============================================================

ALTER TABLE pymaster_community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_community_likes ENABLE ROW LEVEL SECURITY;

-- Posts: 누구나 읽기, 작성자만 쓰기/수정/삭제
CREATE POLICY "pymaster_posts_select" ON pymaster_community_posts FOR SELECT USING (true);
CREATE POLICY "pymaster_posts_insert" ON pymaster_community_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "pymaster_posts_update" ON pymaster_community_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "pymaster_posts_delete" ON pymaster_community_posts FOR DELETE USING (auth.uid() = author_id);

-- Comments: 누구나 읽기, 작성자만 쓰기/삭제
CREATE POLICY "pymaster_comments_select" ON pymaster_community_comments FOR SELECT USING (true);
CREATE POLICY "pymaster_comments_insert" ON pymaster_community_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "pymaster_comments_delete" ON pymaster_community_comments FOR DELETE USING (auth.uid() = author_id);

-- Likes: 누구나 읽기, 본인만 추가/삭제
CREATE POLICY "pymaster_likes_select" ON pymaster_community_likes FOR SELECT USING (true);
CREATE POLICY "pymaster_likes_insert" ON pymaster_community_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "pymaster_likes_delete" ON pymaster_community_likes FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- 트리거: like_count / comment_count 자동 동기화
-- ============================================================

-- 좋아요 카운트 동기화
CREATE OR REPLACE FUNCTION pymaster_sync_like_count() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE pymaster_community_posts SET like_count = like_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE pymaster_community_posts SET like_count = like_count - 1 WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER pymaster_trg_like_count
AFTER INSERT OR DELETE ON pymaster_community_likes
FOR EACH ROW EXECUTE FUNCTION pymaster_sync_like_count();

-- 댓글 카운트 동기화
CREATE OR REPLACE FUNCTION pymaster_sync_comment_count() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE pymaster_community_posts SET comment_count = comment_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE pymaster_community_posts SET comment_count = comment_count - 1 WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER pymaster_trg_comment_count
AFTER INSERT OR DELETE ON pymaster_community_comments
FOR EACH ROW EXECUTE FUNCTION pymaster_sync_comment_count();

-- ============================================================
-- RPC: 조회수 증가 (비로그인도 가능)
-- ============================================================

CREATE OR REPLACE FUNCTION pymaster_increment_view_count(p_post_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE pymaster_community_posts
  SET view_count = view_count + 1
  WHERE id = p_post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- updated_at 자동 갱신 트리거
-- ============================================================

CREATE OR REPLACE FUNCTION pymaster_update_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER pymaster_trg_posts_updated_at
BEFORE UPDATE ON pymaster_community_posts
FOR EACH ROW EXECUTE FUNCTION pymaster_update_updated_at();
