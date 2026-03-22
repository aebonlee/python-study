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

## 4. 사용설명서 정적 페이지

### 배경
- 사이트 사용설명서를 커뮤니티 게시글이 아닌 정적 페이지로 전환
- `Dev_md/community_guide_post.sql` 삭제

### 변경 내용

#### Guide.jsx (신규)
- `/guide` 라우트, 정적 사용설명서 페이지
- 12개 섹션 카드: 로그인, 파이썬 학습, 단계별 과정, 라이브러리, 파이썬 실습, 퀴즈, 도장깨기, 마이페이지, 커뮤니티, 다크모드, 학습 진도, 선생님 안내
- FAQ 4개 (로그인 없이 사용, 모바일 이용, 학습 순서, 선생님 권한)
- `Link`로 관련 페이지 내부 링크 연결

#### guide.css (신규)
- `.guide-page`, `.guide-header` 레이아웃
- `.guide-section-card` 카드 (아이콘 + 제목 + 내용 + 링크)
- `.guide-faq` FAQ 스타일 (Q/A 뱃지)
- 다크모드 + 반응형 (768px)

#### 기존 파일 수정
- **App.jsx**: `Guide` lazy import + `/guide` 라우트 추가
- **Navbar.jsx**: navItems에 `{ to: '/guide', label: '사용설명서' }` 추가 (도장깨기 뒤, 커뮤니티 앞)
- **index.css**: `@import './styles/guide.css'` 추가 (총 18개 CSS)

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/pages/Guide.jsx` | 신규 — 사용설명서 정적 페이지 |
| `src/styles/guide.css` | 신규 — 사용설명서 스타일 |
| `src/App.jsx` | Guide lazy import + /guide 라우트 |
| `src/components/layout/Navbar.jsx` | 사용설명서 메뉴 추가 |
| `src/index.css` | guide.css import 추가 |
| `Dev_md/community_guide_post.sql` | 삭제 |

---

## 5. 퀴즈 객관식 항목 셔플 (답 암기 방지)

### 배경
- 퀴즈 재응시 시 선택지 순서가 동일하여 답 위치를 외워서 통과 가능
- 학습 효과를 높이기 위해 매 응시마다 선택지 순서 랜덤화

### 변경 내용

#### QuizComponent.jsx
- `shuffleOptions(options, correctIdx)`: Fisher-Yates 셔플 + 정답 인덱스 재매핑
- `createShuffledQuestions(questions)`: 전체 문제 옵션 셔플 배열 생성
- `shuffledQuestions` 상태로 관리, 최초 마운트 시 셔플
- "다시 도전하기" 클릭 시 `setShuffledQuestions()` 재호출로 매번 새 순서
- 문제 텍스트, 코드, 해설은 그대로 유지 — 선택지 순서만 변경
- 채점 정확도 유지: 셔플된 정답 인덱스로 비교

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/components/QuizComponent.jsx` | Fisher-Yates 셔플 함수 + shuffledQuestions 상태 |

---

## 6. README.md + 사이트 종합 평가 보고서

### README.md (프로젝트 루트)
- 프로젝트 소개, 주요 기능 6개 분류 (학습/실습/평가/사용자/커뮤니티/부가)
- 기술 스택 테이블 (11항목)
- 프로젝트 구조 트리
- 시작하기 (설치/실행/빌드/배포 명령어)
- 프로젝트 통계, Dev_md 문서 목록

### Dev_md/EVALUATION_REPORT.md (종합 평가)
- 12개 섹션: 프로젝트 개요, 기능 완성도, 기술 평가, UI/UX 평가, 성능, 보안, 코드 품질, 개발 프로세스, 종합 점수, 강점, 개선 권장 사항, 결론
- 종합 점수: **8.67/10** (가중 평균)
- 강점 8개, 개선 권장 사항 10개 (높음/중간/낮음 우선순위)

### 변경 파일
| 파일 | 변경 |
|------|------|
| `README.md` | 신규 — 프로젝트 README |
| `Dev_md/EVALUATION_REPORT.md` | 신규 — 사이트 종합 평가 보고서 |

---

## 7. 수료증 발급 기능

### 배경
- 기능 점검표에서 "예정" 상태였던 수료증 발급 기능을 구현
- 퀴즈 합격 + 레슨 완료 기반 4단계 수료증, Canvas API로 PNG 이미지 생성/다운로드

### 변경 내용

#### Certificate.jsx (신규 컴포넌트)
- Canvas API 기반 수료증 이미지 생성
- `generateCertificate()`: 800x566 Canvas에 수료증 디자인 렌더링
- 4단계 수료증 등급별 디자인:
  - Bronze (#CD7F32): 입문자 수료증
  - Silver (#C0C0C0): 중급자 수료증
  - Gold (#FFD700): 고급자 수료증
  - Master (#306998): 마스터 수료증
- 더블 보더, 코너 장식, 장식 라인, 인장 등 디테일 요소
- PNG 다운로드: `canvas.toDataURL()` → `<a download>` 트리거

#### MyPage.jsx 수료증 섹션 추가
- 학습 통계 섹션과 배지 섹션 사이에 수료증 섹션 삽입
- `CERT_REQUIREMENTS`: 등급별 필수 레벨/퀴즈 조건 정의
- `checkCertificateEligibility()`: 자격 판별 함수
  - 레벨 완료: `lessons[level]`의 모든 레슨이 `completedLessons`에 포함
  - 퀴즈 합격: `getQuizBestScore(quizId) >= passingScore`
- 4개 등급 카드 그리드:
  - 획득: 초록 "획득!" 뱃지 + "보기 / 다운로드" 토글 버튼
  - 미획득: 잠금 + 진행률 바 + 남은 조건 태그
- Canvas 미리보기 영역 (토글)

#### mypage.css 수료증 스타일
- `.cert-grid`: 4열 그리드, 반응형 2열
- `.cert-card`: 등급별 보더/그림자 (earned/locked)
- `.cert-progress`: 진행률 바
- `.cert-missing-tag`: 남은 조건 태그
- `.cert-download-btn`: 다운로드 버튼
- 다크모드 + 반응형

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/components/Certificate.jsx` | 신규 — Canvas API 수료증 생성 + PNG 다운로드 |
| `src/pages/MyPage.jsx` | 수료증 섹션 추가 (자격 판별 + 카드 UI + Canvas 미리보기) |
| `src/styles/mypage.css` | 수료증 카드/진행률/다운로드 스타일 + 다크모드/반응형 |

---

## 8. 파이썬 실습 페이지 전면 개편 (koreatech 동기화)

### 배경
- `D:\koreatech` 프로젝트의 파이썬 실습 콘텐츠·에디터·스크린샷 기능을 python-study에 동기화
- 기존 textarea 에디터를 PrismJS 구문 강조 에디터로 교체
- 미지원 모듈 실행 시 결과 스크린샷 표시 기능 추가

### 변경 내용

#### 데이터 파일 동기화 (13개 단계)
- `step1.js` ~ `step10.js`, `step5adv.js`, `stepAdvanced.js`, `stepAdvanced2.js` koreatech에서 복사
- `step11.js` 삭제 (koreatech에서는 `step10.js`로 통합)
- `index.js` 매핑 업데이트: step 6 → `step5adv.js`, step 7 → `step6.js` ... (shifted)
- 예제에 `type` 필드 추가 (tkinter, matplotlib, webbrowser, gTTS 등)

#### PracticeEditor.jsx (신규 컴포넌트)
- `react-simple-code-editor` + PrismJS 기반 구문 강조 Python 에디터
- 라이트/다크 모드 GitHub 스타일 syntax 토큰 색상
- Lazy loading (`React.lazy + Suspense`)

#### PythonPractice.jsx 개편
- textarea → PracticeEditor 교체
- `example.type` 필드 우선 감지 → regex fallback
- `webbrowser`, `gTTS` 미지원 모듈 추가
- 미지원 모듈 감지 시 결과 스크린샷 (`/py/img/${name}.png`) 자동 표시
- 수정됨 뱃지 (`isModified`) 표시
- 단계별 안내 메시지 (turtle step 5/6, GUI step 98/99)
- `key={example.name}` on StepCodeRunner for proper remounting

#### public/py/ 에셋 복사
- Python 예제 파일 170+개 (`.py`, `.txt`, `.csv`, `.GIF`, `.gif`, `.png`)
- 실행 결과 스크린샷 27개 (`/py/img/*.png`)

#### practice.css 스타일 추가
- `.code-editor-wrapper`: PrismJS 에디터 래퍼 + focus 상태
- GitHub Light/Dark syntax token 색상 (comment, keyword, string, number, function, class-name, operator)
- `.practice-screenshot`, `.practice-screenshot-label`, `.practice-screenshot-img`: 스크린샷 표시
- `.practice-modified-badge`: 수정됨 뱃지
- `.practice-runner-empty-icon`, `.practice-runner-empty-notice`: 빈 상태 + 안내 메시지
- 다크모드 전체 대응

### 변경 파일
| 파일 | 변경 |
|------|------|
| `src/components/PracticeEditor.jsx` | 신규 — PrismJS 구문 강조 에디터 |
| `src/pages/PythonPractice.jsx` | 전면 개편 — 에디터/스크린샷/안내 메시지 |
| `src/data/pythonSteps/index.js` | 매핑 업데이트 |
| `src/data/pythonSteps/step1~10.js` | koreatech에서 동기화 |
| `src/data/pythonSteps/step5adv.js` | 신규 — Turtle 심화 |
| `src/data/pythonSteps/step11.js` | 삭제 |
| `src/data/pythonSteps/stepAdvanced.js` | koreatech에서 동기화 |
| `src/data/pythonSteps/stepAdvanced2.js` | koreatech에서 동기화 |
| `src/styles/practice.css` | 에디터/스크린샷/뱃지/안내 스타일 추가 |
| `public/py/` | 170+개 에셋 파일 복사 |

---

## 빌드 결과 (최종)
- CSS: 124.04KB
- index.js: 453.43KB
- PracticeEditor.js: 28.67KB
- PythonPractice.js: 13.69KB
- 단계 데이터: step1~10 + step5adv + stepAdvanced + stepAdvanced2 (총 13개 청크)
- MyPage.js: 18.01KB
- 총 50개 청크
- GitHub Pages 배포 완료
