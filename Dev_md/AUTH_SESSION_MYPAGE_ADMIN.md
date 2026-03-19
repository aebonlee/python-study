# 로그인 필수화 + 세션 관리 + 마이페이지 + 관리자 페이지

## 구현 일자: 2026-03-20

---

## 1. 로그인 필수화 + 30분 세션 관리

### 변경 사항

#### AuthContext.jsx (수정)
- **30분 세션 타이머**: `SESSION_DURATION = 30 * 60 * 1000`
- **세션 만료 시각 저장**: `pymaster-session-expiry` localStorage 키
- **매초 타이머**: `setInterval`로 남은 시간 계산 (`sessionTimeLeft`)
- **자동 로그아웃**: 세션 만료 시 `signOut()` 자동 호출
- **연장 기능**: `extendSession()` — 30분 재설정
- **경고 배너**: 남은 시간 5분 이하 시 `showSessionWarning = true`
- **경고 UI**: Provider 내부에 상단 고정 노란색 배너 렌더링
- **관리자 판별**: `ADMIN_EMAILS = ['aebon@kakao.com']`
- **isAdmin 제공**: `ADMIN_EMAILS.includes(user?.email)`

#### App.jsx (수정)
- **ProtectedRoute**: `isAuthenticated` 체크, 미인증 시 `<Navigate to="/login" />`
- **AdminRoute**: `isAdmin` 체크, 비관리자 시 `<Navigate to="/" />`
- `/login` 제외 모든 Route를 `ProtectedRoute`로 래핑
- `/my` (MyPage), `/admin` (AdminPage) 라우트 추가

#### Login.jsx (수정)
- "로그인 없이 시작하기" 버튼/섹션 제거
- 안내 문구: "학습을 시작하려면 로그인이 필요합니다"

---

## 2. 마이페이지 (MyPage)

### 신규 파일: `src/pages/MyPage.jsx`
- 라우트: `/my`
- 4개 섹션:

#### 프로필 카드
- 아바타 이미지 (또는 이니셜 플레이스홀더)
- 이름, 이메일, 로그인 방식 (Google/Kakao) 표시

#### 학습 통계
- 완료 레슨 수 / 전체 레슨 수 (진행률 바)
- 퀴즈 평균 점수
- 코드 실행 수
- 연속 학습일 (streak)

#### 획득 배지
- `badges` 데이터에서 `earnedBadges`에 포함된 배지만 표시
- `BadgeCard` 컴포넌트 재사용

#### 퀴즈 성적표
- 8개 퀴즈별 최고 점수, 통과 기준, 상태 (통과/미통과/미응시)
- 테이블 형식

---

## 3. 관리자 페이지 (AdminPage)

### 신규 파일: `src/pages/AdminPage.jsx`
- 라우트: `/admin` (AdminRoute로 보호)
- 3개 섹션:

#### 사이트 통계
- 총 레슨 수, 총 퀴즈 수, 총 문제 수, 총 배지 수
- `lessons`, `quizzes`, `badges` 데이터 파일 기반 정적 통계

#### 콘텐츠 현황
- 레벨별 레슨 수 테이블 (아이콘 + 색상)
- 퀴즈별 문제 수, 통과 기준, 제한 시간 테이블

#### 커뮤니티 관리
- Supabase에서 최근 20개 게시글 조회
- 카테고리, 제목, 작성자, 작성일, 조회수 표시
- 삭제 기능 (확인/취소 단계)
- 새로고침 버튼

---

## 4. Navbar 풍선 도움말 드롭다운

### Navbar.jsx (수정)
- 기존 hover 드롭다운 → 클릭 기반 풍선(balloon) 도움말 드롭다운
- 화살표(arrow) 장식 포함
- 링크 목록:
  - 마이페이지 (`/my`)
  - 관리자 (`/admin`) — `isAdmin`일 때만 표시
  - 로그아웃
- 외부 클릭 시 닫힘 (useRef + mousedown 리스너)

---

## 5. CSS 추가/수정

### auth.css (수정)
- `.login-skip` 관련 스타일 유지 (하위 호환)
- `.login-footer p` margin-bottom 0으로 변경
- `.nav-user-balloon` — 풍선 도움말 스타일
- `.nav-balloon-arrow` — 화살표 꼭지점
- `.nav-balloon-links`, `.nav-balloon-link` — 메뉴 링크
- `.nav-balloon-logout` — 로그아웃 버튼
- `.session-warning` — 상단 고정 노란 경고 배너
- `.session-extend-btn` — 연장 버튼
- 다크모드 대응

### mypage.css (신규)
- 프로필 카드, 통계 그리드, 배지 목록, 성적표 스타일
- 4열 → 2열 → 1열 반응형
- 다크모드 대응

### admin.css (신규)
- 관리자 대시보드 레이아웃
- 통계 카드 (4열 그리드)
- 콘텐츠 테이블 (2열 그리드)
- 커뮤니티 관리 테이블
- 삭제 확인/취소 버튼
- 다크모드 + 반응형

### index.css (수정)
- `@import './styles/mypage.css'` 추가
- `@import './styles/admin.css'` 추가

---

## 수정/생성 파일 목록

| 파일 | 작업 |
|------|------|
| `src/contexts/AuthContext.jsx` | 수정 — 세션 타이머 + isAdmin |
| `src/App.jsx` | 수정 — ProtectedRoute + AdminRoute + 라우트 추가 |
| `src/pages/Login.jsx` | 수정 — skip 버튼 제거 |
| `src/pages/MyPage.jsx` | **신규** — 개인화 페이지 |
| `src/pages/AdminPage.jsx` | **신규** — 관리자 페이지 |
| `src/components/layout/Navbar.jsx` | 수정 — 풍선 도움말 드롭다운 |
| `src/styles/auth.css` | 수정 — 세션 경고 + 풍선 드롭다운 |
| `src/styles/mypage.css` | **신규** |
| `src/styles/admin.css` | **신규** |
| `src/index.css` | 수정 — CSS import 추가 |

---

## 동작 흐름

```
비로그인 사용자 → 모든 페이지 → /login 리디렉트
로그인 성공 → 세션 30분 시작 → 정상 사용
25분 경과 → 상단 노란 경고 배너 (남은 시간 표시)
연장 버튼 클릭 → 30분 재설정
30분 만료 → 자동 로그아웃 → /login 이동
아바타 클릭 → 풍선 드롭다운 (마이페이지, 관리자, 로그아웃)
```
