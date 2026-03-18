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
