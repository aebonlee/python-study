# PyMaster - Supabase 설정 가이드

## 개요
- **접두사**: `pymaster_` (다른 프로젝트와 DB 공유 시 충돌 방지)
- **클라이언트**: `src/config/supabase.js`
- **인증 컨텍스트**: `src/contexts/AuthContext.jsx`
- **환경 변수**: `.env` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

## 1. Supabase 프로젝트 설정
1. https://supabase.com 에서 프로젝트 생성
2. Project URL과 anon/public key 확인
3. `.env` 파일 설정:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

## 2. 테이블 구조 (접두사: pymaster_)

### 현재 사용 중인 테이블

#### pymaster_users (사용자 정보)
```sql
CREATE TABLE pymaster_users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  provider TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pymaster_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read all" ON pymaster_users FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own" ON pymaster_users FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own" ON pymaster_users FOR UPDATE USING (auth.uid() = id);
```

#### pymaster_quiz_scores (퀴즈 최고 점수)
```sql
CREATE TABLE pymaster_quiz_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, quiz_id)
);

ALTER TABLE pymaster_quiz_scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read scores" ON pymaster_quiz_scores FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own scores" ON pymaster_quiz_scores FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own scores" ON pymaster_quiz_scores FOR UPDATE USING (auth.uid() = user_id);
```

#### pymaster_user_progress (학습 진행 데이터 통합)
```sql
CREATE TABLE pymaster_user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  completed_lessons TEXT[] DEFAULT '{}',
  code_runs INTEGER DEFAULT 0,
  streak_count INTEGER DEFAULT 0,
  streak_last_date TEXT,
  earned_badges TEXT[] DEFAULT '{}',
  quiz_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pymaster_user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone authenticated can read progress" ON pymaster_user_progress FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own progress" ON pymaster_user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON pymaster_user_progress FOR UPDATE USING (auth.uid() = user_id);
```

#### pymaster_community_posts (커뮤니티 게시글)
```sql
CREATE TABLE pymaster_community_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES auth.users,
  author_name TEXT,
  author_email TEXT,
  author_avatar TEXT,
  category TEXT DEFAULT 'free',
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_solved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### pymaster_community_comments (커뮤니티 댓글)
```sql
CREATE TABLE pymaster_community_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES pymaster_community_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users,
  author_name TEXT,
  author_avatar TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### pymaster_community_likes (커뮤니티 좋아요)
```sql
CREATE TABLE pymaster_community_likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES pymaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);
```

## 3. 클라이언트 테이블 매핑 (`src/config/supabase.js`)
```js
export const TABLES = {
  USERS: 'pymaster_users',
  PROGRESS: 'pymaster_progress',        // 미사용 (레거시)
  BADGES: 'pymaster_badges',            // 미사용 (레거시)
  QUIZ_SCORES: 'pymaster_quiz_scores',
  STREAKS: 'pymaster_streaks',          // 미사용 (레거시)
  USER_PROGRESS: 'pymaster_user_progress',  // 통합 진행 데이터
  COMMUNITY_POSTS: 'pymaster_community_posts',
  COMMUNITY_COMMENTS: 'pymaster_community_comments',
  COMMUNITY_LIKES: 'pymaster_community_likes',
}
```

## 4. 데이터 동기화 전략

### 현재 구현
| 데이터 | localStorage | Supabase | 동기화 방향 |
|--------|-------------|----------|-----------|
| 학습 진도 (completedLessons) | O | pymaster_user_progress | localStorage → DB |
| 퀴즈 점수 (bestScore) | O | pymaster_quiz_scores | localStorage → DB |
| 퀴즈 시도 이력 (attempts) | O | pymaster_user_progress.quiz_data | localStorage → DB |
| 코드 실행 수 | O | pymaster_user_progress | localStorage → DB |
| 연속 학습일 | O | pymaster_user_progress | localStorage → DB |
| 획득 배지 | O | pymaster_user_progress | localStorage → DB |

### 동기화 타이밍
- **로그인 시**: 즉시 동기화 (디바운스 없음)
- **이후 변경 시**: 2초 디바운스 후 동기화
- **방향**: 단방향 (localStorage → Supabase)
- **충돌 해결**: 마지막 쓰기 우선 (`onConflict: 'user_id'`)

## 5. OAuth 설정

### Google OAuth
1. Supabase Dashboard → Authentication → Providers → Google
2. Google Cloud Console에서 OAuth 2.0 클라이언트 생성
3. Authorized redirect URI: `https://[project-ref].supabase.co/auth/v1/callback`
4. Client ID와 Client Secret을 Supabase에 입력

### Kakao OAuth
1. Supabase Dashboard → Authentication → Providers → Kakao
2. Kakao Developers에서 앱 생성
3. Redirect URI: `https://[project-ref].supabase.co/auth/v1/callback`
4. REST API 키를 Supabase에 입력

## 6. 관리자 기능
- 관리자 이메일: `AuthContext.jsx`의 `ADMIN_EMAILS` 배열
- 관리자는 모든 사용자의 `pymaster_users`, `pymaster_user_progress`, `pymaster_quiz_scores` 조회 가능 (RLS SELECT 정책: `TO authenticated USING (true)`)
- 회원 관리 탭에서 학생 클릭 → `pymaster_user_progress` + `pymaster_quiz_scores` 병합 조회 → 개인 결과 모달 표시
