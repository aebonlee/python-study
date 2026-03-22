# 최근 변경 사항 — 2026-03-22

## 커밋 범위: 9ef389d → (현재)

---

## 1. 선생님 역할 시스템 구현

### 배경
- 기존: `ADMIN_EMAILS = ['aebon@kakao.com', 'pch93472016@gmail.com']` — 두 이메일 모두 전체 관리자
- 변경: `pch93472016@gmail.com`을 선생님 역할로 분리, 담당 학생만 관리

### 변경 내용

#### 역할 분리 (AuthContext)
- `ADMIN_EMAILS`에서 `pch93472016@gmail.com` 제거
- `TEACHER_EMAILS` 배열 신설
- `isTeacher` boolean 계산 및 context value 노출

#### 라우팅 (App.jsx)
- `TeacherRoute` 가드 컴포넌트 추가 (`isTeacher` 체크)
- `/teacher` 라우트 → `TeacherPage` (lazy load)

#### Navbar 메뉴
- `isTeacher`일 때 "선생님" 메뉴 표시 (`fa-chalkboard-user` 아이콘)

#### TeacherPage (신규)
3개 탭 구성:
- **클래스 관리**: 클래스 생성 (이름 → 6자리 코드), 카드 목록 (코드 복사/삭제)
- **학생 목록**: 클래스별 필터, 학생 테이블, 클릭 → 상세 모달
- **학습 통계**: 총 학생 수, 평균 퀴즈/레슨, 클래스별 요약

#### MyPage 클래스 참여
- 프로필 카드 아래 "내 클래스" 섹션 추가
- 6자리 코드 입력 → 클래스 조회 → 참여 (중복/오류 처리)
- 참여 중인 클래스 목록 (클래스명 + 선생님 이메일 + 탈퇴)

#### Supabase 테이블 (수동 실행 필요)
- `pymaster_classes` — 클래스 정보 (id, class_name, class_code, teacher_id, teacher_email)
- `pymaster_class_members` — 클래스 멤버 (class_id, student_id, joined_at)
- RLS 정책: 선생님은 자기 클래스만 관리, 학생은 자기만 참여 가능

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/config/supabase.js` | TABLES에 CLASSES, CLASS_MEMBERS 추가 |
| `src/contexts/AuthContext.jsx` | TEACHER_EMAILS + isTeacher |
| `src/App.jsx` | TeacherRoute + /teacher 라우트 |
| `src/components/layout/Navbar.jsx` | 선생님 메뉴 링크 |
| `src/pages/TeacherPage.jsx` | 신규 — 선생님 대시보드 |
| `src/pages/MyPage.jsx` | 내 클래스 섹션 추가 |
| `src/styles/teacher.css` | 신규 — 선생님/클래스 UI 스타일 |
| `src/index.css` | teacher.css import |

---

## 2. 관리자 회원 목록 선생님 뱃지 표시 (7d2ccd9)

### 변경 내용
- 관리자 회원 관리 탭에서 선생님 계정 옆에 보라색 **선생님** 뱃지 표시
- `TEACHER_EMAILS` 배열로 이메일 매칭 → `<span className="admin-role-badge teacher">` 렌더링

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/pages/AdminPage.jsx` | `TEACHER_EMAILS` 상수 추가, 이름 셀에 선생님 뱃지 조건부 렌더링 |
| `src/styles/admin.css` | `.admin-role-badge`, `.admin-role-badge.teacher` 스타일 + 다크모드 |

---

## 3. 동적 역할 관리 시스템 (DB 기반)

### 배경
- 기존: `TEACHER_EMAILS` 하드코딩 배열로 선생님 판별
- 변경: `pymaster_users.role` 컬럼 기반, 관리자가 AdminPage에서 동적으로 역할 지정/해제

### 변경 내용

#### AuthContext.jsx
- `TEACHER_EMAILS` 배열 제거
- `userRole` 상태 추가 → DB에서 `role` 조회
- `isTeacher = userRole === 'teacher'`로 변경
- `upsertUser()` 내에서 role 조회 통합 → loading 안정성 확보

#### AdminPage.jsx
- `TEACHER_EMAILS` 상수 제거
- 회원 테이블에 "역할" 열 추가 (이메일과 로그인 방식 사이)
- 역할 토글 버튼: 학생(회색) ↔ 선생님(보라색)
- 관리자 계정: "관리자" 뱃지 표시, 토글 불가
- `supabase.rpc('set_user_role')` 호출, 로딩 중 비활성화

#### admin.css
- `.admin-role-toggle` 버튼 스타일 (teacher 보라색, student 회색)
- `.admin-role-badge.admin` 관리자 뱃지 스타일 (주황색)
- hover 효과 + 다크모드 대응

#### Supabase 변경 (수동 실행 필요)
- `pymaster_users`에 `role TEXT DEFAULT 'student'` 컬럼 추가
- `set_user_role` RPC 함수 생성 (관리자 전용)

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/contexts/AuthContext.jsx` | TEACHER_EMAILS 제거, userRole 상태 + DB 조회 |
| `src/pages/AdminPage.jsx` | 역할 열 + 토글 버튼 + RPC 호출 |
| `src/styles/admin.css` | 역할 토글 + 관리자 뱃지 스타일 |

---

## 빌드 결과 (최종)
- CSS: 112.82KB
- index.js: 453.01KB
- TeacherPage.js: 18.65KB
- AdminPage.js: 16.42KB
- MyPage.js: 11.32KB
- 총 47개 청크
- GitHub Pages 배포 완료
