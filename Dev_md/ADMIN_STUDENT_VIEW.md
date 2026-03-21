# 관리자 학생 개별 결과 페이지 기능

## 개요

관리자(선생님/멘토)가 회원 관리 탭에서 학생 이름을 클릭하면,
해당 학생의 개인 결과 페이지를 모달로 확인할 수 있는 기능.

## 구현 일자: 2026-03-21

## 변경 파일

| 파일 | 변경 내용 |
|------|----------|
| `src/config/supabase.js` | `USER_PROGRESS` 테이블 이름 추가 |
| `src/contexts/ProgressContext.jsx` | 진행 데이터 Supabase 자동 동기화 (2초 디바운스) |
| `src/contexts/BadgeContext.jsx` | 획득 배지 Supabase 자동 동기화 (2.5초 디바운스) |
| `src/pages/AdminPage.jsx` | 학생 결과 모달 추가, 기존 펼침 행 → 모달 전환 |
| `src/styles/admin.css` | 학생 결과 모달 스타일 (다크모드/반응형 포함) |

## 동작 흐름

```
학생 학습 활동
  └→ localStorage 저장 (기존)
  └→ Supabase pymaster_user_progress 테이블 동기화 (신규)
       ├── completed_lessons (TEXT[])
       ├── code_runs (INTEGER)
       ├── streak_count / streak_last_date
       ├── earned_badges (TEXT[])
       └── quiz_data (JSONB) — 퀴즈별 attempts + bestScore

관리자 페이지 → 회원 관리 탭
  └→ 학생 행 클릭
       └→ pymaster_user_progress 에서 해당 학생 데이터 조회
            └→ 모달로 학생 개인 결과 페이지 표시
                 ├── 프로필 카드 (이름, 이메일, 아바타, 로그인 방식)
                 ├── 학습 통계 (완료 레슨, 퀴즈 평균, 코드 실행 수, 연속 학습일)
                 ├── 획득 배지 목록
                 └── 퀴즈 성적표 (최근 3회차 점수, 최종 상태, 응시일)
```

## Supabase 테이블 스키마

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

-- 모든 인증 사용자 읽기 허용 (관리자 조회용)
CREATE POLICY "Anyone authenticated can read progress"
  ON pymaster_user_progress FOR SELECT TO authenticated USING (true);

-- 자기 데이터만 쓰기
CREATE POLICY "Users can insert own progress"
  ON pymaster_user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON pymaster_user_progress FOR UPDATE USING (auth.uid() = user_id);
```

## quiz_data JSONB 구조

```json
{
  "basics": {
    "attempts": [
      { "score": 60, "date": "2026-03-20T10:30:00.000Z" },
      { "score": 80, "date": "2026-03-21T14:00:00.000Z" }
    ],
    "bestScore": 80
  },
  "intermediate": {
    "attempts": [
      { "score": 70, "date": "2026-03-21T15:00:00.000Z" }
    ],
    "bestScore": 70
  }
}
```

## 동기화 전략

- **쓰기 방향**: localStorage → Supabase (단방향)
- **타이밍**: state 변경 시 2~2.5초 디바운스 후 upsert
- **충돌 해결**: `onConflict: 'user_id'` — 마지막 쓰기 우선
- **ProgressContext**: completed_lessons, code_runs, streak, quiz_data 동기화
- **BadgeContext**: earned_badges 동기화 (별도 upsert, 같은 테이블)

## 모달 UI 구성

MyPage와 동일한 CSS 클래스 재사용:
- `.mypage-profile-card` — 프로필 카드
- `.mypage-stats-grid` — 학습 통계 4칸 그리드
- `.mypage-badge-grid` — 배지 그리드
- `.mypage-quiz-table` — 퀴즈 성적표 (7열: 퀴즈명, 1~3회차, 상태, 최초/최종 응시일)

모달 전용 클래스:
- `.student-modal-overlay` — 배경 오버레이 (backdrop-filter blur)
- `.student-modal` — 모달 본체 (max-width 900px, max-height 85vh)
- `.student-modal-close` — 닫기 버튼
