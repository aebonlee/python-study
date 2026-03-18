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
- **lessons.js**: 4단계 x 5~9 레슨 = 총 27개 레슨 정의
- **badges.js**: 4티어 23개 배지, 조건 시스템
- **quizzes.js**: 4개 퀴즈 x 10문제 = 40문제 (실제 Python 지식 기반)
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

### 이모지 정리
- 중복 이모지 6건 해결
  - 📦 모듈 -> 📚 (변수와 중복)
  - 🔢 NumPy -> 🧮 (연산자와 중복)
  - 🔄 Pandas 가공 -> ⚗️ (반복문과 중복)
  - ⚡ 동시성 -> 🧵 (고급 레벨과 중복)
  - 🏆 데이터 프로젝트 -> 📈 (퀴즈 챔피언 배지와 중복)
  - 🔥 30일 챌린지 -> 🌟 (열정 학습자 배지와 중복)
- Navbar 잘못된 링크 수정 (data-visualization -> numpy-advanced)

### 컬러 통일
- Python Blue/Yellow 팔레트로 레벨 색상 통일
  - 기초: #4B8BBE, 중급: #306998, 고급: #1E4F72, 응용: #D4A017
- LessonCard.jsx 하드코딩 색상 제거 -> levelInfo 참조
- CSS 변수 업데이트 (--level-basics 등)

### Error Boundary + Lazy Loading
- **ErrorBoundary.jsx**: 런타임 에러 복구 UI (다시 시도/새로고침 버튼)
- **React.lazy + Suspense**: 5개 페이지 모두 코드 스플리팅 적용
- 빌드 최적화: 350KB 단일 -> 256KB 메인 + 개별 청크 분리

### OG 메타태그
- index.html에 Open Graph 메타태그 추가 (Kakao/SNS 공유 미리보기)
- sharp로 1200x630 OG 이미지 자동 생성 (scripts/generate-og.mjs)
- og:title, og:description, og:image, og:url, og:site_name, og:locale

### Supabase 설정
- @supabase/supabase-js 설치
- src/config/supabase.js 생성 (pymaster_ 접두사)
- .env.example 제공
- Supabase 미설정 시 localStorage fallback 지원

### 기능 점검 결과
| # | 기능 | 상태 |
|---|------|------|
| 1 | Error Boundary | 추가 완료 |
| 2 | Lazy Loading | 추가 완료 |
| 3 | Supabase 연동 | 클라이언트 설정 완료 |
| 4 | 사용자 인증 | Supabase 준비됨 (추후 활성화) |
| 5 | 학습 진도 추적 | localStorage 작동 중 |
| 8 | 학습 현황 | Home.jsx 진도 현황 섹션 |
| 9 | 배지 시스템 | 23개 배지 자동 평가 |
| 11 | 학습 완료 버튼 | LessonPage.jsx에 존재 |
| 12 | 시험 성적 기록 | ProgressContext에서 자동 저장 |
