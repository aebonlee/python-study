# 로그인 선택화 + 로그인 팝업 + 관리자 회원관리

**날짜:** 2026-03-21
**커밋 범위:** 15개 파일 수정, 999줄 추가

---

## 개요

기존에는 ProtectedRoute로 모든 페이지에 로그인을 강제했으나, 이번 업데이트로:
- 모든 페이지를 비로그인으로 열람 가능하도록 변경
- 인터랙티브 버튼 클릭 시 로그인 레이어 팝업 표시
- 관리자 페이지에 회원 관리 + 성적 조회 기능 추가

---

## 변경 내역

### Part 1: ProtectedRoute 제거

**파일:** `src/App.jsx`

- `ProtectedRoute` 컴포넌트 삭제
- 모든 Route에서 `<ProtectedRoute>` 래핑 제거 (23개 라우트)
- `AdminRoute`는 `/admin` 경로에만 유지 (관리자 보호)

### Part 2: 로그인 레이어 팝업 (AuthContext)

**파일:** `src/contexts/AuthContext.jsx`

- `showLoginModal` state 추가
- `requireAuth(callback)` 함수:
  - 로그인 상태 → 즉시 callback 실행
  - 미로그인 → `pendingActionRef`에 callback 저장 + 로그인 팝업 표시
- `dismissLoginModal()`: 팝업 닫기 + pendingAction 초기화
- `onAuthStateChange`에서 로그인 성공 시 `pendingActionRef` 자동 실행
- Provider 내부에 로그인 모달 JSX 렌더링:
  - 반투명 오버레이 (클릭 시 닫기)
  - 중앙 카드: 자물쇠 아이콘 + "로그인하고 계속하기" + Google/Kakao 버튼
  - 우상단 X 닫기 버튼
- `upsertUser()`: 로그인 시 `pymaster_users` 테이블에 사용자 정보 자동 저장

### Part 3: 로그인 모달 CSS

**파일:** `src/styles/auth.css`

- `.login-modal-overlay`: 고정 위치, 반투명 배경, z-index: 10001
- `.login-modal`: 중앙 카드, max-width 380px, 둥근 모서리
- `.login-modal-close`: 우상단 X 버튼
- `.login-modal-header`: 자물쇠 아이콘 + 제목 + 안내 문구
- `.login-modal-buttons`: Google/Kakao 버튼 (기존 `.login-btn` 재사용)
- `loginModalFadeIn` / `loginModalSlideUp` 진입 애니메이션
- 다크모드 대응

### Part 4: 인터랙티브 버튼에 requireAuth 적용

| 파일 | 적용 대상 |
|------|-----------|
| `src/pages/LessonPage.jsx` | "학습 완료" / "완료 취소" 버튼 |
| `src/components/QuizComponent.jsx` | "제출하기" 버튼 |
| `src/components/CodeEditor.jsx` | "실행" 버튼 |
| `src/pages/PythonPractice.jsx` | StepCodeRunner "실행" 버튼 |
| `src/pages/community/Community.jsx` | "글쓰기" 버튼 |
| `src/pages/community/CommunityPost.jsx` | 좋아요 버튼, 댓글 작성 |
| `src/pages/community/CommunityWrite.jsx` | 페이지 진입 시 로그인 유도 |

### Part 5: 마이페이지 비로그인 안내

**파일:** `src/pages/MyPage.jsx`, `src/styles/mypage.css`

- 미로그인 시 인라인 로그인 안내 카드 표시
- 자물쇠 아이콘 + 안내 문구 + Google/Kakao 로그인 버튼
- 다크모드 대응

### Part 6: Supabase 퀴즈 점수 동기화

**파일:** `src/contexts/ProgressContext.jsx`

- `saveQuizScore()`에서 로그인 사용자일 경우 `pymaster_quiz_scores` 테이블에 upsert
- `onConflict: 'user_id,quiz_id'`로 중복 방지
- localStorage 저장은 기존과 동일하게 유지 (비로그인 사용자 대응)

### Part 7: 관리자 회원 관리 + 성적 조회

**파일:** `src/pages/AdminPage.jsx`

- 기존 섹션 나열 → **4개 탭 네비게이션**으로 변경:
  1. 사이트 통계
  2. 콘텐츠 현황
  3. 커뮤니티 관리
  4. **회원 관리** (신규)
- 회원 관리 탭:
  - `pymaster_users` 테이블에서 전체 회원 목록 조회
  - 컬럼: 아바타, 이름, 이메일, 로그인 방식 (Google/Kakao), 마지막 접속
  - 회원 행 클릭 시 확장 → 해당 회원의 퀴즈 성적 표시
  - `pymaster_quiz_scores` 테이블에서 user_id로 조회
  - 퀴즈별: 점수, 통과/미통과 상태, 최종 응시일

### Part 8: 관리자 CSS

**파일:** `src/styles/admin.css`

- `.admin-tabs` / `.admin-tab`: 탭 네비게이션 스타일
- `.admin-member-row`: 클릭 가능한 회원 행 (hover/expanded 상태)
- `.admin-member-avatar`: 회원 아바타 (이미지/플레이스홀더)
- `.admin-provider-badge`: 로그인 방식 뱃지
- `.admin-member-scores`: 확장 영역 (성적 테이블)
- `.admin-scores-table`: 퀴즈 성적 테이블
- `.admin-score-status`: 통과/미통과 뱃지
- 다크모드 대응

---

## Supabase 설정 (수동)

아래 SQL을 Supabase Dashboard > SQL Editor에서 실행해야 합니다.

**파일:** `docs/supabase-setup.sql`

### 필요한 테이블

1. **`pymaster_users`** — 사용자 프로필 (로그인 시 자동 생성)
2. **`pymaster_quiz_scores`** — 퀴즈 점수 (퀴즈 제출 시 자동 저장)

### RLS 정책

| 테이블 | 정책 | 설명 |
|--------|------|------|
| `pymaster_users` | Users can read own data | 본인 데이터 조회 |
| `pymaster_users` | Admin can read all users | 관리자 전체 조회 |
| `pymaster_users` | Users can insert own data | 본인 데이터 삽입 |
| `pymaster_users` | Users can update own data | 본인 데이터 수정 |
| `pymaster_quiz_scores` | Users can read own scores | 본인 점수 조회 |
| `pymaster_quiz_scores` | Users can insert own scores | 본인 점수 삽입 |
| `pymaster_quiz_scores` | Users can update own scores | 본인 점수 수정 |
| `pymaster_quiz_scores` | Admin can read all scores | 관리자 전체 조회 |

---

## 수정 파일 목록

| 파일 | 작업 | 변경량 |
|------|------|--------|
| `src/App.jsx` | ProtectedRoute 제거 | -8줄 |
| `src/contexts/AuthContext.jsx` | requireAuth + 로그인 모달 + upsert | +80줄 |
| `src/contexts/ProgressContext.jsx` | Supabase 퀴즈 점수 동기화 | +22줄 |
| `src/pages/LessonPage.jsx` | requireAuth 적용 | +6줄 |
| `src/components/QuizComponent.jsx` | requireAuth 적용 | +4줄 |
| `src/components/CodeEditor.jsx` | requireAuth 적용 | +4줄 |
| `src/pages/PythonPractice.jsx` | requireAuth 적용 | +4줄 |
| `src/pages/MyPage.jsx` | 비로그인 안내 UI | +38줄 |
| `src/pages/community/Community.jsx` | requireAuth 적용 | +4줄 |
| `src/pages/community/CommunityPost.jsx` | requireAuth 적용 | +53줄 |
| `src/pages/community/CommunityWrite.jsx` | requireAuth 적용 | +8줄 |
| `src/pages/AdminPage.jsx` | 탭 UI + 회원 관리 | +500줄 |
| `src/styles/auth.css` | 로그인 모달 CSS | +116줄 |
| `src/styles/admin.css` | 탭 + 회원 관리 CSS | +268줄 |
| `src/styles/mypage.css` | 로그인 안내 CSS | +46줄 |
| `docs/supabase-setup.sql` | DB 설정 스크립트 | 신규 |

---

## 검증 체크리스트

- [x] `npm run build` 성공
- [ ] 비로그인 시 모든 페이지 정상 표시
- [ ] 학습완료/퀴즈제출/코드실행 버튼 → 로그인 팝업 표시
- [ ] 팝업에서 로그인 성공 → 원래 액션 자동 실행
- [ ] 로그인 후 30분 세션 + 5분 전 경고 유지
- [ ] `/admin` → 회원 관리 탭에서 전체 회원 목록 표시
- [ ] 회원 클릭 → 해당 회원의 퀴즈 성적 표시
- [ ] Supabase SQL 실행 후 테이블/RLS 정상 작동
