# PyMaster - 아키텍처 문서

## 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | React | 19.2 |
| 빌드 도구 | Vite | 7.3 |
| 라우팅 | React Router DOM | 7.13 |
| 아이콘 | Font Awesome | 6.5.1 (CDN) |
| 코드 하이라이팅 | PrismJS | 1.30 |
| 코드 에디터 | react-simple-code-editor | 0.14 |
| DB 클라이언트 | @supabase/supabase-js | 2.x |
| OG 이미지 생성 | sharp | (devDep) |
| 배포 | gh-pages | 6.3 |
| 언어 | JavaScript (JSX) | ES2022 |
| 스타일 | CSS Custom Properties | CSS3 |

## 프로젝트 구조

```
D:\python-study\
├── index.html                  # 진입점 HTML + OG 메타태그 + Font Awesome CDN
├── package.json               # 의존성 관리
├── vite.config.js             # Vite 설정
├── .env                       # Supabase 환경 변수 (gitignore)
├── .env.example               # 환경 변수 템플릿
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions 배포
├── scripts/
│   └── generate-og.mjs        # OG 이미지 생성 스크립트
├── public/
│   ├── favicon.svg            # 파비콘 (Python 로고)
│   ├── og-image.png           # OG 미리보기 이미지
│   ├── CNAME                  # 커스텀 도메인
│   ├── 404.html               # SPA 리디렉트
│   └── py/                    # Python 실습 에셋 (170+개)
│       ├── *.py               # Python 예제 파일 (다운로드용)
│       ├── *.txt, *.csv       # 데이터 파일
│       ├── *.GIF, *.gif, *.png # 이미지 리소스
│       └── img/               # 실행 결과 스크린샷 (27개 PNG)
├── src/
│   ├── main.jsx               # React 엔트리 포인트
│   ├── App.jsx                # 라우터 + Provider + ErrorBoundary + Lazy
│   ├── index.css              # CSS 임포트 허브 (18개 CSS)
│   ├── hooks/
│   │   └── useCodeRunner.js   # Pyodide Web Worker 실행 훅
│   ├── workers/
│   │   └── pyodide.worker.js  # Pyodide WASM Worker (turtle SVG 모의 포함)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # 상단 네비게이션 (1열 메뉴 + 인증 UI)
│   │   │   └── Footer.jsx     # 하단 푸터
│   │   ├── ErrorBoundary.jsx  # 런타임 에러 복구 UI
│   │   ├── CodeEditor.jsx     # Python 코드 에디터 (레슨용, input() 지원)
│   │   ├── PracticeEditor.jsx # Python 코드 에디터 (실습용, PrismJS 구문 강조)
│   │   ├── Certificate.jsx    # 수료증 이미지 생성 (Canvas API, 4단계)
│   │   ├── TurtleCanvas.jsx   # Turtle SVG 렌더러 (turtle 명령어 → SVG)
│   │   ├── BadgeCard.jsx      # 배지 카드 (FA 아이콘)
│   │   ├── LessonCard.jsx     # 레슨 카드 (FA 아이콘)
│   │   ├── ProgressBar.jsx    # 진도율 바
│   │   └── QuizComponent.jsx  # 퀴즈 컴포넌트
│   ├── config/
│   │   └── supabase.js        # Supabase 클라이언트 (pymaster_ 접두사)
│   ├── contexts/
│   │   ├── AuthContext.jsx     # 인증 + 세션 관리 + 관리자/선생님 판별
│   │   ├── ThemeContext.jsx    # 다크모드 상태
│   │   ├── LanguageContext.jsx # 다국어 상태 (ko/en) + t() + localizedField()
│   │   ├── ProgressContext.jsx # 학습 진도 상태
│   │   └── BadgeContext.jsx    # 배지 상태
│   ├── locales/
│   │   ├── ko.js              # 한국어 UI 문자열 (~500키)
│   │   └── en.js              # 영어 UI 문자열 (~500키)
│   ├── data/
│   │   ├── lessons.js         # 레슨 메타데이터 (FA 아이콘 클래스)
│   │   ├── lessonContents.js  # 레슨 교육 컨텐츠
│   │   ├── badges.js          # 배지 정의 (FA 아이콘 클래스)
│   │   ├── quizzes.js         # 퀴즈 문제
│   │   └── pythonSteps/       # 파이썬 실습 데이터 (14개 파일)
│   │       ├── index.js       # stepMeta + stepLoaders (동적 임포트)
│   │       ├── step1~10.js    # 단계별 실습 예제
│   │       ├── step5adv.js    # Turtle 심화 실습
│   │       ├── stepAdvanced.js  # 심화 1: GUI 기초 (tkinter)
│   │       └── stepAdvanced2.js # 심화 2: GUI 응용 & 그래프
│   ├── pages/
│   │   ├── Home.jsx           # 메인 페이지
│   │   ├── Login.jsx          # 로그인 페이지 (Google/Kakao, 필수)
│   │   ├── MyPage.jsx         # 마이페이지 (프로필/통계/배지/성적)
│   │   ├── AdminPage.jsx      # 관리자 페이지 (통계/콘텐츠/커뮤니티/회원관리)
│   │   ├── TeacherPage.jsx    # 선생님 페이지 (클래스 관리/학생 목록/학습 통계)
│   │   ├── Guide.jsx          # 사용설명서 정적 페이지 (12개 섹션 + FAQ)
│   │   ├── LevelPage.jsx      # 단계별 레슨 목록
│   │   ├── LessonPage.jsx     # 레슨 상세/학습
│   │   ├── BadgeCollection.jsx # 배지 컬렉션
│   │   ├── QuizCenter.jsx     # 퀴즈 센터
│   │   ├── PythonLearning.jsx # 파이썬 학습 허브 (11개 레슨 카드)
│   │   ├── PythonPractice.jsx # 파이썬 실습 (Pyodide 코드 러너)
│   │   └── python-learning/   # 파이썬 학습 개별 레슨 (11개)
│   │       ├── PythonLesson01.jsx  # 파이썬 및 실습환경 안내
│   │       ├── PythonLesson02.jsx  # 입출력과 변수
│   │       ├── PythonLesson03.jsx  # Data Type과 산술연산
│   │       ├── PythonLesson04.jsx  # 입력-처리-출력 개념
│   │       ├── PythonLesson05.jsx  # Turtle과 함수(def)
│   │       ├── PythonLesson06.jsx  # Flowgorithm 순서도
│   │       ├── PythonLesson07.jsx  # IF 조건문
│   │       ├── PythonLesson08.jsx  # While/For 반복문
│   │       ├── PythonLesson09.jsx  # 함수와 매개변수
│   │       ├── PythonLesson10.jsx  # Try-Except 예외처리
│   │       └── PythonLesson11.jsx  # 2차원, 3차원 리스트
│   └── styles/                # CSS 18개 파일
│       ├── auth.css           # 로그인 + 풍선 드롭다운 + 세션 경고
│       ├── mypage.css         # 마이페이지 스타일
│       ├── admin.css          # 관리자 페이지 + 학생 상세 모달 스타일
│       ├── teacher.css        # 선생님 페이지 + 클래스 참여 UI 스타일
│       ├── guide.css          # 사용설명서 페이지 스타일
│       ├── practice.css       # 파이썬 실습 페이지 스타일
│       └── python-learning.css # 파이썬 학습 허브 + 레슨 스타일
└── Dev_md/                    # 개발 문서
```

## 상태 관리

### Context API 패턴
```
App
 └── ErrorBoundary (전역)
      └── ThemeProvider (테마 상태)
           └── LanguageProvider (다국어 상태)
                └── AuthProvider (인증 상태)
                     └── ProgressProvider (학습 진도)
                          └── BadgeProvider (배지 시스템)
                               └── AppLayout
                               ├── Navbar (인증 UI 포함)
                               ├── ErrorBoundary (페이지별)
                               │    └── Suspense (lazy loading)
                               │         └── Pages (lazy)
                               └── Footer
```

### 데이터 흐름
- **AuthContext**: Supabase OAuth 인증 (Google/Kakao), 30분 세션 관리, isAdmin 판별, DB 기반 isTeacher (role 컬럼 조회)
- **ThemeContext**: light/dark 테마 토글, HTML data-theme 속성 제어
- **LanguageContext**: ko/en 언어 토글, t() 번역 함수, localizedField() 데이터 번역, HTML lang 속성 제어
- **ProgressContext**: 완료 레슨, 퀴즈 점수, 코드 실행 수, 스트릭 관리
- **BadgeContext**: 배지 조건 평가, 획득 알림, 배지 목록 관리

### 데이터 저장
| 키 | 용도 | 저장소 |
|----|------|--------|
| `pymaster-theme` | 테마 설정 | localStorage |
| `pymaster-lang` | 언어 설정 (ko/en) | localStorage |
| `pymaster-progress` | 학습 진도 | localStorage + Supabase 동기화 |
| `pymaster-badges` | 획득 배지 | localStorage + Supabase 동기화 |
| `pymaster-session-expiry` | 세션 만료 시각 | localStorage |
| Supabase Auth | 인증 세션 | Supabase (자동 관리) |

### Supabase 테이블 (접두사: pymaster_)
| 테이블 | 용도 |
|--------|------|
| `pymaster_users` | 사용자 정보 |
| `pymaster_quiz_scores` | 퀴즈 최고 점수 |
| `pymaster_user_progress` | 학습 진도 통합 동기화 (완료 레슨, 코드 실행 수, 스트릭, 배지, 퀴즈 시도 이력) |
| `pymaster_community_posts` | 커뮤니티 게시글 |
| `pymaster_community_comments` | 커뮤니티 댓글 |
| `pymaster_community_likes` | 커뮤니티 좋아요 |
| `pymaster_classes` | 선생님 클래스 (class_name, class_code, teacher_id) |
| `pymaster_class_members` | 클래스 멤버 (class_id, student_id, joined_at) |

## 라우팅

| 경로 | 페이지 | 로딩 |
|------|--------|------|
| `/` | Home | lazy |
| `/login` | Login | lazy |
| `/my` | MyPage | lazy |
| `/admin` | AdminPage | lazy (AdminRoute) |
| `/teacher` | TeacherPage | lazy (TeacherRoute) |
| `/python-learning` | PythonLearning | lazy |
| `/python-learning/01~11` | PythonLesson01~11 | lazy |
| `/python-practice` | PythonPractice | lazy |
| `/:level` | LevelPage | lazy |
| `/:level/:lessonId` | LessonPage | lazy |
| `/badges` | BadgeCollection | lazy |
| `/quiz` | QuizCenter | lazy |
| `/guide` | Guide | lazy |
| `*` | 404 | inline |

## 아이콘 시스템

### Font Awesome 6.5.1
- CDN으로 로드 (`index.html`)
- 데이터 파일에서 `icon: 'fa-solid fa-seedling'` 형식으로 저장
- 렌더링: `<i className={icon} />`
- 색상: CSS에서 `var(--primary)` (#306998) 적용
- 다크모드: CSS 변수 기반 자동 전환

### Navbar 구조 (1열 + 라이브러리 드롭다운 3카테고리)
```
파이썬 학습 | 기초 | 중급 | 고급 | 응용 | 라이브러리▼ | 파이썬 실습 | 퀴즈 | 도장깨기 | 사용설명서 | 커뮤니티 | [진도] [테마] [언어🌐] [로그인/아바타]
                           └→ [기본 내장/표준 라이브러리]
                              os/sys / math/cmath / json / datetime
                              [교육용·그래픽 라이브러리]
                              Turtle
                              [데이터 분석·AI 라이브러리]
                              NumPy / Pandas / Matplotlib / Scikit-learn / TensorFlow
```

## 디자인 시스템

### 색상 테마 (Python 팔레트 통일)
- **Primary**: #306998 (Python Blue)
- **Primary Light**: #4B8BBE
- **Primary Dark**: #1E4F72
- **Accent**: #FFD43B (Python Yellow)
- **Accent Dark**: #D4A017

### 레벨별 색상 (Python 팔레트 파생)
- 기초: #4B8BBE (Python Light Blue)
- 중급: #306998 (Python Blue)
- 고급: #1E4F72 (Python Dark Blue)
- 응용: #D4A017 (Python Muted Gold)

### 반응형 브레이크포인트
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

### 폰트
- 본문: 'Noto Sans KR' (Google Fonts)
- 코드: 'JetBrains Mono' (Google Fonts)
- 아이콘: Font Awesome 6 (CDN)

## 코드 스플리팅

빌드 결과 (React.lazy + Suspense, 총 50개 청크):
| 청크 | 크기 | 내용 |
|------|------|------|
| index.js | 499KB | React, Router, Contexts, Supabase, Locales |
| index.css | 125KB | CSS 18개 파일 통합 |
| LessonPage.js | 91KB | 레슨 페이지 + 컨텐츠 + TurtleCanvas (35개 레슨) |
| PythonLesson03.js | 84KB | 파이썬 학습 03: Data Type (최대, 한/영) |
| PythonLesson07.js | 73KB | 파이썬 학습 07: IF 조건문 (한/영) |
| PythonLesson09.js | 69KB | 파이썬 학습 09: 함수 (한/영) |
| PythonLesson01.js | 69KB | 파이썬 학습 01: 실습환경 (한/영) |
| PythonLesson04.js | 67KB | 파이썬 학습 04: 입력-처리-출력 (한/영) |
| PythonLesson06.js | 66KB | 파이썬 학습 06: 순서도 (한/영) |
| PythonLesson08.js | 65KB | 파이썬 학습 08: 반복문 (한/영) |
| PythonLesson10.js | 60KB | 파이썬 학습 10: 예외처리 (한/영) |
| PythonLesson05.js | 54KB | 파이썬 학습 05: Turtle (한/영) |
| PythonLesson02.js | 53KB | 파이썬 학습 02: 입출력 (한/영) |
| PythonLesson11.js | 46KB | 파이썬 학습 11: 리스트 (한/영) |
| quizzes.js | 34KB | 퀴즈 데이터 (88문제, 한/영) |
| PracticeEditor.js | 29KB | PrismJS 구문 강조 에디터 (실습용) |
| TeacherPage.js | 19KB | 선생님 대시보드 (클래스/학생/통계) |
| MyPage.js | 18KB | 마이페이지 + 수료증 + 클래스 참여 |
| AdminPage.js | 17KB | 관리자 대시보드 + 학생 상세 모달 |
| pyodide.worker.js | 16KB | Pyodide WASM Worker |
| PythonPractice.js | 14KB | 파이썬 실습 페이지 |
| step5.js | 12KB | 파이썬 실습 step5: Turtle 기초 |
| stepAdvanced2.js | 12KB | 심화 2: GUI 응용 & 그래프 (15개) |
| step10.js | 11KB | 파이썬 실습 step10: 리스트/딕셔너리 |
| stepAdvanced.js | 10KB | 심화 1: GUI 기초 (12개) |
| step5adv.js | 10KB | Turtle 심화 실습 |
| step7.js | 10KB | 반복문 (While/For) |
| step6.js | 10KB | IF 조건문 |
| QuizCenter.js | 9KB | 퀴즈 센터 |
| step9.js | 9KB | 함수와 매개변수 |
| step8.js | 8KB | 반복문 |
| step3.js | 9KB | Data Type과 산술연산 |
| Home.js | 7KB | 홈 페이지 |
| step4.js | 7KB | IPO |
| Guide.js | 6KB | 사용설명서 |
| step2.js | 6KB | 입출력과 변수 |
| step1.js | 3KB | 파이썬 및 실습환경 |
| LevelPage.js | 3KB | 레벨 페이지 |
| PythonLearning.js | 3KB | 파이썬 학습 허브 |
| Login.js | 3KB | 로그인 페이지 |
| BadgeCollection.js | 3KB | 배지 컬렉션 |
