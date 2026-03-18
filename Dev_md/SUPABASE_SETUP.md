# PyMaster - Supabase 설정 가이드

## 개요
- **접두사**: `pymaster_` (다른 프로젝트와 DB 공유 시 충돌 방지)
- **클라이언트**: `src/config/supabase.js`
- **환경 변수**: `.env` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

## 1. Supabase 프로젝트 생성
1. https://supabase.com 에서 프로젝트 생성
2. Project URL과 anon/public key 확인
3. `.env` 파일 생성:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

## 2. 테이블 구조 (접두사: pymaster_)

### pymaster_users
```sql
CREATE TABLE pymaster_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### pymaster_progress
```sql
CREATE TABLE pymaster_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES pymaster_users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);
```

### pymaster_quiz_scores
```sql
CREATE TABLE pymaster_quiz_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES pymaster_users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT now()
);
```

### pymaster_badges
```sql
CREATE TABLE pymaster_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES pymaster_users(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, badge_id)
);
```

### pymaster_streaks
```sql
CREATE TABLE pymaster_streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES pymaster_users(id) ON DELETE CASCADE,
  streak_count INTEGER DEFAULT 0,
  last_active_date DATE,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);
```

## 3. RLS (Row Level Security)
```sql
-- 모든 테이블에 RLS 활성화
ALTER TABLE pymaster_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_quiz_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE pymaster_streaks ENABLE ROW LEVEL SECURITY;

-- 사용자 본인 데이터만 접근 가능
CREATE POLICY "Users can read own data" ON pymaster_users
  FOR SELECT USING (auth_id = auth.uid());

CREATE POLICY "Users can update own data" ON pymaster_users
  FOR UPDATE USING (auth_id = auth.uid());

-- 나머지 테이블도 동일 패턴
```

## 4. OAuth 설정 (예정)
- Google OAuth: Supabase Dashboard -> Authentication -> Providers
- Kakao OAuth: Supabase에서 직접 지원하지 않으므로 Custom Provider 또는 별도 구현

## 5. 클라이언트 사용 예시
```js
import { supabase, TABLES, isSupabaseEnabled } from '../config/supabase'

// Supabase가 설정된 경우에만 사용
if (isSupabaseEnabled()) {
  const { data, error } = await supabase
    .from(TABLES.PROGRESS)
    .select('*')
    .eq('user_id', userId)
}
```

## 6. 데이터 동기화 전략
1. 비로그인: localStorage만 사용 (현재 방식)
2. 로그인: localStorage + Supabase 양방향 동기화
3. 충돌 시: 최신 타임스탬프 기준으로 병합
