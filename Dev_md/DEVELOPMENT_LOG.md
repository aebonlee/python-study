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
  - 라인 넘버, Tab/Ctrl+Enter 단축키
  - print, 변수, f-string, for/range 시뮬레이션
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
- **lessons.js**: 4단계 × 5~9 레슨 = 총 27개 레슨 정의
- **badges.js**: 4티어 23개 배지, 조건 시스템
- **quizzes.js**: 4개 퀴즈 × 10문제 = 40문제 (실제 Python 지식 기반)
- **lessonContents.js**: 각 레슨별 교육 섹션 (설명, 코드 예제, 예상 출력, 팁)

### 진입점
- **main.jsx**: ReactDOM.createRoot, StrictMode
- **App.jsx**: BrowserRouter, Provider 래핑, 라우트 정의
- **index.css**: 11개 CSS 파일 임포트

### 기술적 결정사항
1. **클라이언트 사이드 코드 실행**: 백엔드 없이 간단한 Python 시뮬레이터 구현
2. **Context API**: Redux 대신 React Context 사용 (프로젝트 규모에 적합)
3. **CSS 모듈화**: CSS-in-JS 대신 순수 CSS 파일 분리 (성능 + 유지보수)
4. **localStorage**: 서버 DB 없이 브라우저 저장 (개인 학습용으로 충분)
5. **디자인 참조**: D:\koreatech 프로젝트의 글라스모피즘, 다크모드 패턴 적용
