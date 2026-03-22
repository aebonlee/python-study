# PyMaster - 개발 일지

## 2026-03-18 (Day 1) - 프로젝트 초기 구축

### 프로젝트 설정
- Git 리포지토리 초기화
- package.json 생성 (React 19.2 + Vite 7.3)
- Vite 설정 구성 (vite.config.js)
- index.html 기본 구조 (한국어, Google Fonts)
- favicon.svg 생성 (Python 로고 SVG)
- .gitignore 설정

### CSS 스타일 시스템 구축 (11개 파일)
- **base.css**: CSS 변수 시스템, 리셋, 버튼, 유틸리티
  - Python 테마 색상 (Blue #306998, Yellow #FFD43B)
  - 폰트: Noto Sans KR + JetBrains Mono
- **navbar.css**: 글라스모피즘 효과 고정 네비게이션
- **hero.css**: 히어로 섹션, 통계, 기능 그리드, 학습 경로 카드
- **footer.css**: 다크 그라디언트 푸터, 맨위로 버튼
- **course.css**: 레슨 카드, 레슨 상세 레이아웃, 사이드바 목차
- **badge.css**: 배지 카드, 티어별 스타일, 알림 팝업
- **quiz.css**: 퀴즈 카드, 문제 UI, 결과 화면, 스코어 서클
- **editor.css**: 코드 에디터, 툴바, 라인 넘버, 출력 패널
- **animations.css**: fadeInUp, fadeIn, scaleIn, slideInRight
- **dark-mode.css**: 전체 다크 모드 오버라이드
- **responsive.css**: 1024px, 768px, 480px 브레이크포인트

### 컴포넌트 개발 (7개)
- **Navbar.jsx**: 스크롤 감지, 드롭다운 메뉴, 진도 서클, 테마 토글, 모바일 메뉴
- **Footer.jsx**: 4열 그리드, GitHub 링크, 맨위로 버튼
- **CodeEditor.jsx**: Python 코드 실행 시뮬레이터
- **BadgeCard.jsx**: 획득/잠금 상태, 티어별 색상/글로우
- **LessonCard.jsx**: 아이콘, 완료 배지, 난이도 별, 시간/주제
- **ProgressBar.jsx**: 재사용 가능, 라벨/퍼센트/색상/사이즈 옵션
- **QuizComponent.jsx**: 타이머, 객관식, 해설, 점수 서클, 재도전

### Context 상태 관리 (3개)
- **ThemeContext.jsx**: light/dark 토글, localStorage, HTML data-theme
- **ProgressContext.jsx**: 레슨 완료, 퀴즈 점수, 코드 실행 수, 스트릭
- **BadgeContext.jsx**: 배지 조건 평가 엔진, 알림 시스템

### 페이지 개발 (5개)
- **Home.jsx**: 히어로, 통계, 기능, 학습 경로, 진도 현황, CTA
- **LevelPage.jsx**: 동적 레벨 페이지, 레슨 카드 그리드
- **LessonPage.jsx**: 사이드바 목차, 섹션 네비게이션, 코드 에디터, 이전/다음
- **BadgeCollection.jsx**: 티어별 그룹화, 통계 개요
- **QuizCenter.jsx**: 퀴즈 선택 그리드, 점수 표시

### 데이터 파일 (4개)
- **lessons.js**: 4단계 x 5~13 레슨 = 총 35개 레슨 정의
- **badges.js**: 4티어 25개 배지, 조건 시스템
- **quizzes.js**: 4개 퀴즈 x 10~13문제 = 48문제 (실제 Python 지식 기반)
- **lessonContents.js**: 각 레슨별 교육 섹션 (설명, 코드 예제, 예상 출력, 팁)

### 배포
- GitHub Pages 배포 (gh-pages 브랜치)
- GitHub Actions 워크플로우 설정
- 커스텀 도메인: python-study.dreamitbiz.com
- CNAME, 404.html SPA 리디렉트

### 기술적 결정사항
1. **클라이언트 사이드 코드 실행**: 백엔드 없이 간단한 Python 시뮬레이터 구현
2. **Context API**: Redux 대신 React Context 사용 (프로젝트 규모에 적합)
3. **CSS 모듈화**: CSS-in-JS 대신 순수 CSS 파일 분리 (성능 + 유지보수)
4. **localStorage**: 서버 DB 없이 브라우저 저장 (개인 학습용으로 충분)
5. **디자인 참조**: D:\koreatech 프로젝트의 글라스모피즘, 다크모드 패턴 적용

---

## 2026-03-18 (Day 1 후반) - 품질 개선 및 인프라

### 이모지 정리 → 컬러 통일 → Error Boundary
- 중복 이모지 6건 해결, Navbar 링크 수정
- Python Blue/Yellow 팔레트로 레벨 색상 통일
- ErrorBoundary.jsx 생성, React.lazy + Suspense 코드 스플리팅 적용

### OG 메타태그 + Supabase 설정
- index.html에 Open Graph 메타태그 추가
- sharp로 1200x630 OG 이미지 자동 생성
- Supabase 클라이언트 설정 (pymaster_ 접두사, localStorage fallback)

---

## 2026-03-18 (Day 1 심야) - 아이콘 시스템 교체 + 인증

### Font Awesome 6 아이콘 교체 (12개 파일 수정)
- **이모지 전면 제거**: 프로젝트 내 모든 이모지를 Font Awesome 6 아이콘으로 교체
- **index.html**: Font Awesome 6.5.1 CDN 추가
- **lessons.js**: 4개 레벨 + 27개 레슨 아이콘 → FA 클래스 (`fa-solid fa-seedling` 등)
- **badges.js**: 22개 배지 아이콘 → FA 클래스
- **모든 컴포넌트/페이지**: `{icon}` 텍스트 → `<i className={icon} />` 렌더링 변경
- **인라인 이모지**: 시간(⏱️→fa-clock), 주제(📋→fa-clipboard), 난이도(⭐→fa-star), 팁(💡→fa-lightbulb), 체크(✓→fa-check) 등 전부 교체
- **티어 메달**: 🥉🥈🥇💎 → fa-award/fa-gem + 인라인 컬러
- **FA 아이콘 컬러**: base.css에 `var(--primary)` (#306998) 적용, 다크모드 자동 대응

### Navbar 메뉴 구조 변경
- 기존: "학습 경로" 드롭다운 (기초/중급/고급/응용), "실습" 드롭다운 (NumPy/Pandas)
- 변경: **기초 | 중급 | 고급 | 응용 | NumPy | Pandas | 퀴즈 | 도장깨기** (1열 평탄 구조)
- 모든 드롭다운 제거, 개별 메뉴 항목으로 분리

### 카카오/구글 로그인 (Supabase Auth)
- **AuthContext.jsx**: Supabase Auth 기반 인증 상태 관리
  - `signInWithGoogle()`: Google OAuth 로그인
  - `signInWithKakao()`: Kakao OAuth 로그인
  - `signOut()`: 로그아웃
  - `onAuthStateChange` 리스너로 세션 자동 관리
- **Login.jsx**: 로그인 페이지 (`/login`)
  - Google 로그인 버튼 (Google 공식 색상 SVG)
  - Kakao 로그인 버튼 (카카오 노란색 #FEE500)
  - "로그인 없이 시작하기" 옵션
- **auth.css**: 로그인 카드 UI, Navbar 유저 메뉴, 다크모드 대응
- **Navbar.jsx**: 비로그인 시 "로그인" 버튼, 로그인 시 아바타 + 드롭다운 (이름/이메일/로그아웃)
- **App.jsx**: AuthProvider 추가, `/login` 라우트 추가
- **.env**: Supabase 프로젝트 URL/Key 설정 완료

### 기능 점검 결과 (업데이트)
| # | 기능 | 상태 |
|---|------|------|
| 1 | Error Boundary | 완료 |
| 2 | Lazy Loading | 완료 |
| 3 | Supabase 연동 | 완료 (클라이언트 + .env 설정) |
| 4 | 사용자 인증 | 완료 (Google/Kakao OAuth) |
| 5 | 학습 진도 추적 | 완료 (localStorage) |
| 6 | 로그인 페이지 | 완료 (/login) |
| 8 | 학습 현황 | 완료 (Home.jsx) |
| 9 | 배지 시스템 | 완료 (23개 배지) |
| 10 | Font Awesome 아이콘 | 완료 (이모지 전면 교체) |
| 11 | 학습 완료 버튼 | 완료 |
| 12 | 시험 성적 기록 | 완료 |
| 13 | Navbar 인증 UI | 완료 (로그인 버튼/아바타) |

---

## 2026-03-18 (Day 1 추가) - 응용 과정 확장

### Matplotlib/Seaborn, Scikit-learn, TensorFlow/PyTorch 과정 추가
- **lessons.js**: 응용 과정에 3개 새 레슨 추가 (총 30개 레슨)
  - `matplotlib-seaborn`: Matplotlib 기본 그래프, 막대/히스토그램, Seaborn 통계 시각화
  - `scikit-learn`: 머신러닝 기초, KNN/결정트리, 모델 평가 (정확도/정밀도/재현율/F1)
  - `tensorflow-pytorch`: 신경망 기초, TensorFlow/Keras Sequential 모델, PyTorch 학습 루프
- **lessonContents.js**: 각 레슨별 2~3개 섹션, 코드 예제, 실행 결과, 학습 팁
- **quizzes.js**: 응용 퀴즈에 8문제 추가 (총 48문제) - Matplotlib, Seaborn, Scikit-learn, TensorFlow, PyTorch
- **badges.js**: ML 마스터, 딥러닝 탐험가 배지 2개 추가 (총 25개 배지)

### Navbar 라이브러리 드롭다운
- NumPy + Pandas + 새 3개 레슨을 "라이브러리" 드롭다운으로 묶음
- 구조: 기초 | 중급 | 고급 | 응용 | 라이브러리▼ | 퀴즈 | 도장깨기

### Home 페이지 업데이트
- 히어로 설명: "데이터 분석, 머신러닝, 딥러닝까지"
- features: "데이터 과학" 항목으로 업데이트 (NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow)
- levelInfo.applied 설명 업데이트

---

## 2026-03-18 (Day 1 추가 2) - 표준 라이브러리 과정 확장

### os/sys, math/cmath, json, datetime 4개 레슨 추가
- **lessons.js**: 중급 과정에 4개 표준 라이브러리 레슨 추가 (중급 총 12개, 전체 34개)
  - `os-sys`: os.path, os.listdir, sys.argv, sys.path, 환경 변수
  - `math-cmath`: sqrt, pi, log, 삼각함수, 복소수, 극좌표
  - `json-module`: dumps/loads, dump/load, API 응답 처리
  - `datetime-module`: date, time, datetime, timedelta, strftime/strptime
- **lessonContents.js**: 각 레슨 2개 섹션, 코드 예제, 실행 결과, 학습 팁
- **Navbar.jsx**: 라이브러리 드롭다운에 os/sys, math, json, datetime 추가 (총 9개 항목)

---

## 2026-03-18 (Day 1 추가 3) - Turtle Graphics 과정 추가

### Turtle Graphics 레슨 추가
- **lessons.js**: 중급 과정에 turtle-graphics 레슨 추가 (중급 총 13개, 전체 35개)
  - `turtle-graphics`: forward, left/right, circle, color, fill, 정다각형, 별, 나선, 프랙탈
- **lessonContents.js**: 4개 섹션
  - 기본 명령어: forward, backward, left, right, speed
  - 도형 그리기: 정다각형, 별 그리기 반복문 활용
  - 색상과 채우기: color, fillcolor, begin_fill/end_fill, pensize
  - 재귀 프랙탈: 코흐 눈송이, 프랙탈 나무, 시에르핀스키 삼각형
- **Navbar.jsx**: 라이브러리 드롭다운에 turtle 추가 (총 10개 항목)

---

## 2026-03-18 (Day 1 추가 4) - input() 지원 + Turtle SVG 렌더러 + 카테고리화

### CodeEditor input() 함수 지원
- **CodeEditor.jsx**: input() 호출 자동 감지 (regex 기반 useMemo)
  - 코드 내 `input("프롬프트")` 패턴 감지 → 입력 패널 UI 표시
  - 사용자 입력값을 input() 호출에 대입하여 시뮬레이션 실행
  - `int(input(...))`, `float(input(...))` 변환 지원
  - Enter 키로 바로 실행, 취소/실행 버튼 제공
  - 에디터 툴바에 `input()` 뱃지 표시

### TurtleCanvas SVG 렌더러 (신규 컴포넌트)
- **TurtleCanvas.jsx**: Python turtle 명령어를 SVG로 시각화
  - `parseTurtleCommands()`: turtle 코드를 명령 배열로 파싱
  - `executeTurtleCommands()`: 명령을 실행하여 SVG 경로/도형 생성
  - **지원 명령어**: forward/fd, backward/bk, left/lt, right/rt, penup/pu, pendown/pd, goto, setx, sety, setheading/seth, home, circle, dot, pensize/width, pencolor, fillcolor, color, begin_fill, end_fill, speed, hideturtle/ht, showturtle/st
  - for 루프 + range() 지원, 함수 정의/호출 지원
  - SVG 그리드 배경, 원점 십자선, 터틀 화살표 표시
  - 확대/축소 컨트롤 (+/- 버튼, 1:1 리셋)
  - 20+ 색상 이름 → HEX 변환 맵
  - begin_fill/end_fill 폴리곤 채우기 지원
  - 뷰포트 자동 계산 (그림 영역에 맞게)

### Navbar 라이브러리 드롭다운 3카테고리 분류
- **Navbar.jsx**: 드롭다운 메뉴에 `{ type: 'header' }` 항목 추가
  - **기본 내장/표준 라이브러리**: os/sys, math/cmath, json, datetime
  - **교육용·그래픽 라이브러리**: Turtle
  - **데이터 분석·AI 라이브러리**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- **navbar.css**: `.dropdown-header` 스타일 (소문자 라벨, 구분선)

### 라이브러리 예제 대폭 확충
- **os-sys**: 3개 섹션 (기존 2 → +1 "os 모듈 실전 활용": os.walk, rename, remove, stat)
- **math-cmath**: 3개 섹션 (기존 2 → +1 "삼각함수와 기하 계산": 삼각함수 표, 피타고라스, 원 넓이, GCD/LCM)
- **json-module**: 3개 섹션 (기존 2 → +1 "JSON 고급 활용": 서점 데이터 처리)
- **datetime-module**: 3개 섹션 (기존 2 → +1 "datetime 실전 활용": D-Day, 나이 계산, 달력)
- **turtle-graphics**: 6개 섹션 (기존 4 → 완전 리라이트) - SVG 렌더러 호환 예제
  1. 정사각형 그리기, 2. 정다각형, 3. 별, 4. 무지개 나선, 5. 동심원/꽃 패턴, 6. 집 그리기
- **variables**: +1 섹션 "input() 함수로 입력받기" (인터랙티브 입력 예제)

### CSS 업데이트
- **editor.css**: 입력 패널 UI, Turtle 캔버스, 에디터 뱃지, 다크모드 오버라이드 추가
- **navbar.css**: 드롭다운 헤더 스타일 추가

### 빌드 결과
- LessonPage.js: 93KB → 107KB (+14KB, TurtleCanvas + 확충 예제)
- 빌드 성공, GitHub Pages 배포 완료

---

## 2026-03-18 (Day 1 추가 5) - 파이썬 학습 + 파이썬 실습 추가

### 파이썬 학습 (Python Learning) - 11개 레슨 추가
- **PythonLearning.jsx**: 허브 페이지 (11개 레슨 카드 그리드)
- **PythonLesson01~11.jsx**: 한국공학대학교 Python 강의 내용 기반 개별 레슨 페이지
  - 01: 파이썬 및 실습환경 안내 (컴퓨팅 사고, 설치, IDLE, VS Code)
  - 02: 입출력과 변수 (print, input, 변수, f-string)
  - 03: Data Type과 산술연산 (정수, 소수, 문자, 형변환, 연산자)
  - 04: 입력-처리-출력 개념 (PDC, IPO 구조 설계)
  - 05: Turtle과 함수(def) (Turtle 그래픽, 함수 정의)
  - 06: Flowgorithm 순서도 (논리적 사고, 순서도 그리기)
  - 07: IF 조건문 (if, elif, else, 비교/논리 연산자)
  - 08: While/For 반복문 (while, for, break, continue)
  - 09: 함수와 매개변수 (def, 매개변수, return)
  - 10: Try-Except 예외처리 (오류 유형, try-except-finally)
  - 11: 2차원, 3차원 리스트 (다차원 리스트, 정보 모델링)
- koreatech PythonWeek1~11 → PythonLesson01~11 리네이밍, 경로/네비게이션 재매핑

### 파이썬 실습 (Python Practice) - Pyodide 기반 실행
- **PythonPractice.jsx**: 브라우저 내 실제 Python 실행 페이지
  - 12단계 실습 탭 (2행 배치), 각 단계별 예제 사이드바
  - 코드 에디터 (라인 넘버, 복사, 다운로드)
  - 기본값/직접입력 모드 전환 (정규식 기반 자동 변환)
  - input() 대화형 입력 폼, Turtle SVG 출력
  - 지원불가 모듈 감지 (tkinter, matplotlib, pygame)
- **useCodeRunner.js**: Pyodide Web Worker 관리 훅
  - 싱글톤 Worker 패턴, 메시지 ID 기반 동시 요청
  - status: idle → loading → running → done/error
- **pyodide.worker.js**: Pyodide v0.27.0 CDN 로드
  - Python WASM 실행 환경
  - turtle 모의 구현 (~400줄): Turtle/Screen 클래스, SVG 생성
  - stdin 주입 (input() 지원), stdout/stderr 분리 캡처
- **pythonSteps/**: 13개 실습 데이터 파일
  - index.js: stepMeta (12단계 메타데이터) + stepLoaders (동적 임포트)
  - step1~10, stepAdvanced, stepAdvanced2: 예제 배열 (name, title, desc, code)

### Navbar 메뉴 업데이트
- 기존: 기초 | 중급 | 고급 | 응용 | 라이브러리▼ | 퀴즈 | 도장깨기
- 변경: **파이썬 학습** | 기초 | 중급 | 고급 | 응용 | 라이브러리▼ | **파이썬 실습** | 퀴즈 | 도장깨기

### CSS 추가
- **practice.css**: 실습 페이지 전체 스타일 (탭, 사이드바, 에디터, 출력, 다크모드, 반응형)
- **python-learning.css**: 학습 허브 + 레슨 상세 스타일 (카드 그리드, page-header, lesson-body, callout-box, code-block, lesson-table, exercise-box, lesson-nav, 다크모드, 반응형)
- **index.css**: 2개 CSS 임포트 추가 (총 14개)

### App.jsx 라우팅 업데이트
- 13개 Route 추가: /python-learning, /python-learning/01~11, /python-practice
- 모두 React.lazy + Suspense 적용
- 와일드카드 `/:level` 라우트 앞에 배치 (라우팅 충돌 방지)

### 빌드 결과
- 33개 파일 추가 (15,101줄), 빌드 성공
- PythonLesson 11개 각각 32~53KB 코드 스플리팅
- PythonPractice 12KB, step 데이터 각 2~22KB 개별 청크
- index.css: 60KB (CSS 14개), index.js: 439KB
- GitHub Pages 배포 완료

---

## 2026-03-19 (Day 2) - CSS 감사 및 수정

### CSS 감사 (3개 파일 병렬 점검)
- **python-learning.css**, **practice.css**, **base.css** 전수 감사
- JSX에서 사용하는 모든 className과 CSS 정의 대조 확인

### 발견 및 수정 사항

#### 누락 클래스 정의 (2건)
- **base.css**: `.section { padding: 40px 0; }` 추가
  - PythonLearning.jsx, PythonPractice.jsx 등에서 `<section className="section">` 사용 중이었으나 미정의
- **practice.css**: `.practice-output-content.has-error` 추가
  - PythonPractice.jsx에서 에러 상태 시 `has-error` 클래스 적용 중이었으나 미정의

#### 다크모드 보완 (27개 셀렉터)
- **python-learning.css** (16개 셀렉터 추가):
  - `.python-learning-page .page-header-section` 배경 다크 대응
  - `.python-table td` 보더, `.python-table tr:hover td` hover 배경
  - `.python-info-box.tip`, `.python-info-box.warning` 배경/보더 다크 대응
  - `.python-output-block` 배경 + `pre` 텍스트 컬러
  - `.python-lesson-section h2` 보더 다크 대응
  - `.python-lesson-nav` 보더 + `a` 호버 다크 대응
  - `.python-lesson-detail .page-header-section` 배경
  - `.python-lesson-detail .lesson-body h2` 보더
  - `.python-lesson-detail .lesson-nav` 보더
- **practice.css** (11개 셀렉터 추가):
  - `.practice-page .page-header-section` 배경 다크 대응
  - `.practice-example-sidebar`, `.practice-sidebar-header` 배경
  - `.practice-example-item.active`, `:hover` 배경
  - `.practice-step-runner`, `.practice-output-content` 배경
  - `.practice-output-content.has-error` 에러 배경
  - `.practice-stderr` 색상 (#DC2626 → #F87171 부드러운 빨강)
  - `.practice-toolbar`, `.practice-runner-empty` 배경/보더

#### 반응형 보완
- **python-learning.css**: 480px 브레이크포인트 추가
  - 허브 페이지: 헤더 패딩/폰트 축소, 카드 패딩 축소, 아이콘 축소
  - 레슨 콘텐츠: 패딩/폰트/테이블 축소
  - 레슨 상세: 헤더/본문 폰트 축소, callout 패딩 축소
- `.python-lesson-nav` 768px 반응형: 세로 스택, 버튼 가운데 정렬

### 빌드 결과
- CSS 총 63.41KB (기존 대비 +약 2KB)
- 빌드 성공, 커밋 d4189f7
- GitHub Pages 배포 완료

---

## 2026-03-19 (Day 2 후반) - turtle textinput 직접입력 + 실행결과 CSS 수정

### turtle.textinput() / numinput() 직접입력 기능
- **pyodide.worker.js**: turtle mock의 `textinput()`/`numinput()`이 stdin(`input()`)을 사용하도록 변경
  - 기존: `return 'test'` (더미값 반환)
  - 변경: `return input(prompt)` (stdin에서 읽기, EOFError 시 기본값)
  - 모듈-레벨 `textinput()`/`numinput()`도 `Screen()` 위임으로 변경
- **PythonPractice.jsx**: `generateInputVersion()` 정규식 확장
  - 기존: `input(` 패턴만 인식
  - 변경: `input(` + `turtle.textinput(` + `turtle.numinput(` + `screen.textinput(` 등 인식
- **PythonPractice.jsx**: `detectInputPrompts()` 확장
  - `textinput("title", "prompt")` → 두 번째 인자(prompt) 추출
  - 기존 `input()` 감지에 negative lookbehind 추가 (textinput/numinput 오탐 방지)
- **step5.js (drawshape)**: 변수명 `s` → `shape`으로 일관성 수정, 불필요한 경고 제거
- **step6.js (if3)**: "브라우저에서 실행 불가" 경고 → 설명 코멘트로 교체

### 실행결과 배경색/텍스트 수정
- **practice.css**: `.practice-stdout`/`.practice-stderr`에 `background: transparent; padding: 0; border-radius: 0` 추가
  - 원인: base.css의 전역 `pre { background: #1E293B }` 스타일이 실행결과 `<pre>` 태그에 적용되어 라이트 모드에서 어두운 배경 + 어두운 텍스트 = 보이지 않는 문제

### 상하단 여백 이중 적용 수정
- `.main-content`에 이미 `padding-top: var(--nav-height)`가 있으므로 중복 `margin-top` 제거:
  - `.practice-page .page-header-section`: margin-top 제거
  - `.python-learning-page .page-header-section`: margin-top 제거
  - `.python-lesson-detail`: margin-top 제거
- 페이지 헤더 패딩 축소: 60px → 40px (더 적절한 간격)
- 배경 gradient opacity 미세 조정 (0.06 → 0.08)

### 빌드 결과
- 빌드 성공, 커밋 aa65123
- GitHub Pages 배포 완료

---

## 2026-03-20 (Day 3) - 로그인 필수화 + 세션 관리 + 마이페이지 + 관리자 페이지

### 로그인 필수화 + 30분 세션 관리
- **AuthContext.jsx**: 30분 세션 타이머, 5분 전 경고 배너, 자동 로그아웃
  - `SESSION_DURATION = 30 * 60 * 1000`, localStorage 기반 만료 시각 저장
  - `extendSession()`: 30분 재설정
  - `showSessionWarning`: 남은 시간 5분 이하 시 상단 노란 배너
  - `isAdmin`: `ADMIN_EMAILS = ['aebon@kakao.com']` 체크
- **App.jsx**: `ProtectedRoute`, `AdminRoute` 컴포넌트 추가
  - `/login` 제외 모든 라우트를 `ProtectedRoute`로 래핑
  - `/admin` 라우트를 `AdminRoute`로 래핑
- **Login.jsx**: "로그인 없이 시작하기" 버튼 제거, "학습을 시작하려면 로그인이 필요합니다" 안내

### 마이페이지 (MyPage.jsx) — 신규
- 라우트: `/my`
- 프로필 카드: 아바타, 이름, 이메일, 로그인 방식 (Google/Kakao)
- 학습 통계: 완료 레슨/전체 레슨(진행률 바), 퀴즈 평균 점수, 코드 실행 수, 연속 학습일
- 획득 배지 목록: `BadgeCard` 재사용, 획득한 배지만 표시
- 퀴즈 성적표: 8개 퀴즈별 최고 점수, 통과 기준, 상태 테이블

### 관리자 페이지 (AdminPage.jsx) — 신규
- 라우트: `/admin` (관리자 이메일만 접근 가능)
- 사이트 통계: 총 레슨/퀴즈/문제/배지 수 (데이터 파일 기반)
- 콘텐츠 현황: 레벨별 레슨 수, 퀴즈별 문제 수/통과 기준/제한 시간 테이블
- 커뮤니티 관리: Supabase 최근 20개 게시글 목록, 삭제 기능 (확인/취소)

### Navbar 풍선 도움말 드롭다운
- 기존 hover 드롭다운 → 클릭 기반 풍선(balloon) 도움말 스타일
- 화살표 꼭지점 장식 포함
- 마이페이지 + 관리자(관리자만) + 로그아웃 메뉴
- 외부 클릭 시 닫힘 처리 (useRef + mousedown)

### CSS 추가/수정
- **auth.css**: 풍선 드롭다운 스타일 + 세션 경고 배너 + 다크모드
- **mypage.css** (신규): 프로필 카드, 통계 그리드, 배지 목록, 성적표 + 다크모드 + 반응형
- **admin.css** (신규): 대시보드, 통계 카드, 테이블, 커뮤니티 관리 + 다크모드 + 반응형
- **index.css**: mypage.css, admin.css import 추가 (총 16개 CSS)

### 빌드 결과
- 빌드 성공, GitHub Pages 배포 완료
- 신규 청크: MyPage (5.63KB), AdminPage (6.63KB)
- CSS: 96.34KB (기존 대비 +약 6KB)

---

## 2026-03-21 (Day 4) - 퀴즈 응시 기록 테이블

### 데이터 구조 변경 (ProgressContext.jsx)
- **quizScores 형식 변경**: `{ quizId: number }` → `{ quizId: { attempts: [{score, date}], bestScore } }`
- **migrateQuizScores()**: 기존 number 형식 자동 마이그레이션 (날짜 정보 없이 bestScore만 보존)
- **saveQuizScore()**: attempts 배열에 `{ score, date: ISO }` 추가, bestScore 갱신
- **getQuizBestScore(quizId)**: bestScore 반환 헬퍼
- **getQuizAttempts(quizId)**: attempts 배열 반환 헬퍼
- Supabase 동기화: bestScore만 전송 (DB 스키마 변경 없음)

### BadgeContext.jsx 호환성 수정
- `quizScores[id]` 직접 접근 → `getQuizBestScore(id)` / `?.bestScore` 사용
- quiz_passed, quiz_perfect, all_quizzes_passed/perfect, lib_quizzes_passed/perfect 모두 수정

### 퀴즈 센터 응시 기록 테이블 (QuizCenter.jsx)
- 카드 그리드 하단에 응시 기록 섹션 추가
- 7컬럼 테이블: 퀴즈 | 1회차 | 2회차 | 3회차 | 최종 상태 | 최초 응시일 | 최종 응시일
- 최근 3회 응시만 표시, 점수 색상 (통과=초록, 미통과=빨강)

### 마이페이지 퀴즈 테이블 확장 (MyPage.jsx)
- 기존 4컬럼 → 7컬럼 동일 구조로 확장
- 퀴즈 평균 점수 계산도 bestScore 기반으로 수정

### CSS 추가
- **quiz.css**: `.quiz-history-section`, `.quiz-history-table` + 다크모드/반응형
- **mypage.css**: `.quiz-attempt-cell`, `.quiz-attempt-score`, `.quiz-date-cell` 공통 스타일

### 빌드 결과
- 빌드 성공
- QuizCenter: 8.96KB, MyPage: 8.08KB
- CSS: 104.45KB

---

## 2026-03-21 (Day 4 후반) - 학생 개별 결과 + 동기화 수정 + 회원 관리 개선

### 관리자 학생 개별 결과 페이지 (AdminPage.jsx)
- 회원 관리 탭에서 **학생 이름 클릭 → 개인 결과 모달** 표시
- 모달 레이아웃: MyPage와 동일 구조
  - 프로필 카드 (아바타, 이름, 이메일, 로그인 방식)
  - 학습 통계 4종 (완료 레슨, 퀴즈 평균, 코드 실행 수, 연속 학습일)
  - 획득 배지 목록 (BadgeCard 재사용)
  - 퀴즈 성적표 (최근 3회차, 최초/최종 응시일)
- **Supabase 신규 테이블**: `pymaster_user_progress` — 학생 진행 데이터 통합 저장
- **ProgressContext.jsx**: Supabase 자동 동기화 추가 (즉시 + 2초 디바운스)
- **admin.css**: 모달 스타일 (`.student-modal-overlay`, `.student-modal`, 다크모드/반응형)

### 동기화 데이터 불일치 수정
- **문제**: 마이페이지(localStorage)와 관리자 모달(Supabase) 데이터가 불일치
- **원인 1**: 2초 디바운스로만 동기화 → 로그인 직후 데이터 누락
- **해결 1**: 로그인 시 **즉시 동기화** 추가
- **원인 2**: BadgeContext 별도 upsert → INSERT 시 빈 배열로 덮어씀
- **해결 2**: ProgressContext가 **localStorage 배지 읽어서 통합 전송**
- **원인 3**: 기존 quiz_scores 테이블 데이터를 모달이 안 읽음
- **해결 3**: `pymaster_user_progress` + `pymaster_quiz_scores` **두 테이블 동시 조회 후 병합**

### 회원 관리 테이블 컬럼 변경
- 기존: 아바타 / 이름 / 이메일 / 로그인 방식 / 마지막 접속
- 변경: **구분(순번) / 이름 / 이메일 / 로그인 방식 / 가입일 / 마지막 접속**
- admin.css: `.admin-member-num` 스타일 추가

### 빌드 결과
- 빌드 성공
- AdminPage: 16.24KB, CSS: 106.21KB
- 커밋 3건: 6889183, 9730abb, 9ef389d

---

## 2026-03-22 (Day 5) - 선생님 역할 시스템

### 핵심 변경: 역할 분리
- **기존**: `ADMIN_EMAILS = ['aebon@kakao.com', 'pch93472016@gmail.com']` → 둘 다 전체 관리자
- **변경**: `pch93472016@gmail.com`을 **선생님 역할**로 분리
  - `ADMIN_EMAILS = ['aebon@kakao.com']` — 전체 관리자
  - `TEACHER_EMAILS = ['pch93472016@gmail.com']` — 선생님 (담당 학생만)

### AuthContext.jsx
- `TEACHER_EMAILS` 배열 추가
- `isTeacher` boolean 계산 및 context value 노출

### App.jsx
- `TeacherPage` lazy import
- `TeacherRoute` 가드 컴포넌트 (`isTeacher` 체크, 미인증 → /login, 비선생님 → /)
- `/teacher` 라우트 등록

### Navbar.jsx
- `isTeacher` 디스트럭처링
- "선생님" 메뉴 링크 (`fa-chalkboard-user` 아이콘)

### TeacherPage.jsx (신규 - 18.65KB)
3개 탭 대시보드:
- **클래스 관리**: 클래스 생성 (이름 입력 → 6자리 영숫자 코드 자동 생성), 클래스 카드 목록 (코드 복사, 삭제)
- **학생 목록**: 클래스별 필터 드롭다운, 학생 테이블 (구분/이름/이메일/클래스/가입일), 클릭 → 학생 상세 모달
- **학습 통계**: 총 학생 수, 평균 퀴즈 점수, 평균 레슨 완료율, 클래스별 요약 테이블
- **학생 상세 모달**: AdminPage 모달 로직과 동일 (프로필/통계/배지/퀴즈 성적표)

### MyPage.jsx — 클래스 참여 기능 추가
- 프로필 카드 아래에 "내 클래스" 섹션 추가
- 6자리 코드 입력 (자동 대문자, maxLength=6) → 클래스 조회 → 참여
- 중복 참여 / 잘못된 코드 오류 처리
- 참여 중인 클래스 목록 (클래스명 + 선생님 이메일 + 탈퇴 버튼)

### Supabase 테이블 (수동 실행)
- `pymaster_classes` — 클래스 정보 (class_name, class_code, teacher_id, teacher_email)
- `pymaster_class_members` — 클래스 멤버 (class_id, student_id, joined_at)
- RLS: 선생님은 자기 클래스만 관리, 학생은 자기만 참여 가능

### teacher.css (신규)
- 클래스 생성 폼, 클래스 카드 그리드, 코드 표시 (모노스페이스, 24px), 복사 버튼
- 마이페이지 클래스 참여 UI (코드 입력, 클래스 목록)
- 다크모드 + 반응형 (768px, 480px)

### 빌드 결과
- 빌드 성공 (4.02초)
- TeacherPage.js: 18.65KB, MyPage.js: 11.32KB
- CSS: 112.52KB, index.js: 453.01KB
- 총 47개 청크
- GitHub Pages 배포 완료
- 커밋: 44fd4da

### 관리자 회원 목록 선생님 뱃지 표시
- **AdminPage.jsx**: `TEACHER_EMAILS` 배열 추가, 회원 목록에서 선생님 이메일 매칭 시 이름 옆에 보라색 "선생님" 뱃지 표시
- **admin.css**: `.admin-role-badge.teacher` 스타일 (보라색 뱃지 + 다크모드)
- 관리자가 회원 관리 탭에서 선생님 계정을 한눈에 식별 가능
- 커밋: 7d2ccd9
