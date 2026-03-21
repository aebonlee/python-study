-- ============================================
-- PyMaster Supabase 테이블 설정 스크립트
-- ============================================
-- 실행 방법: Supabase Dashboard > SQL Editor에서 실행
--
-- 이 스크립트는 회원 관리 및 퀴즈 점수 동기화에 필요한
-- 테이블과 RLS 정책을 생성합니다.
-- ============================================

-- ─────────────────────────────────────────────
-- 1. pymaster_users 테이블
-- ─────────────────────────────────────────────
-- 로그인한 사용자의 프로필 정보를 저장합니다.
-- AuthContext에서 로그인 시 자동으로 upsert됩니다.

CREATE TABLE IF NOT EXISTS pymaster_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  provider TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- 2. pymaster_quiz_scores 테이블
-- ─────────────────────────────────────────────
-- 사용자별 퀴즈 점수를 저장합니다.
-- ProgressContext에서 퀴즈 제출 시 자동으로 upsert됩니다.

CREATE TABLE IF NOT EXISTS pymaster_quiz_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, quiz_id)
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_quiz_scores_user_id ON pymaster_quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_quiz_id ON pymaster_quiz_scores(quiz_id);

-- ─────────────────────────────────────────────
-- 3. RLS (Row Level Security) 설정
-- ─────────────────────────────────────────────

-- pymaster_users RLS
ALTER TABLE pymaster_users ENABLE ROW LEVEL SECURITY;

-- 기존 정책 삭제 (재실행 시 충돌 방지)
DROP POLICY IF EXISTS "Users can read own data" ON pymaster_users;
DROP POLICY IF EXISTS "Admin can read all users" ON pymaster_users;
DROP POLICY IF EXISTS "Users can insert own data" ON pymaster_users;
DROP POLICY IF EXISTS "Users can update own data" ON pymaster_users;

-- 사용자 본인 데이터 조회
CREATE POLICY "Users can read own data"
  ON pymaster_users FOR SELECT
  USING (auth.uid() = id);

-- 관리자 전체 조회 (aebon@kakao.com)
CREATE POLICY "Admin can read all users"
  ON pymaster_users FOR SELECT
  USING (auth.jwt() ->> 'email' = 'aebon@kakao.com');

-- 사용자 본인 데이터 삽입
CREATE POLICY "Users can insert own data"
  ON pymaster_users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 사용자 본인 데이터 수정
CREATE POLICY "Users can update own data"
  ON pymaster_users FOR UPDATE
  USING (auth.uid() = id);

-- pymaster_quiz_scores RLS
ALTER TABLE pymaster_quiz_scores ENABLE ROW LEVEL SECURITY;

-- 기존 정책 삭제 (재실행 시 충돌 방지)
DROP POLICY IF EXISTS "Users can read own scores" ON pymaster_quiz_scores;
DROP POLICY IF EXISTS "Users can insert own scores" ON pymaster_quiz_scores;
DROP POLICY IF EXISTS "Users can update own scores" ON pymaster_quiz_scores;
DROP POLICY IF EXISTS "Admin can read all scores" ON pymaster_quiz_scores;

-- 사용자 본인 점수 조회
CREATE POLICY "Users can read own scores"
  ON pymaster_quiz_scores FOR SELECT
  USING (auth.uid() = user_id);

-- 사용자 본인 점수 삽입
CREATE POLICY "Users can insert own scores"
  ON pymaster_quiz_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 사용자 본인 점수 수정
CREATE POLICY "Users can update own scores"
  ON pymaster_quiz_scores FOR UPDATE
  USING (auth.uid() = user_id);

-- 관리자 전체 점수 조회
CREATE POLICY "Admin can read all scores"
  ON pymaster_quiz_scores FOR SELECT
  USING (auth.jwt() ->> 'email' = 'aebon@kakao.com');
