# PyMaster - 파이썬 전문 학습 플랫폼

> 기초 문법부터 데이터 분석, 머신러닝, 딥러닝까지 — 체계적으로 파이썬을 정복하세요.

**배포 URL**: https://python-study.dreamitbiz.com/

## 주요 기능

### 학습 시스템
- **단계별 학습**: 기초(9) → 중급(13) → 고급(5) → 응용(8), 총 35개 레슨
- **파이썬 학습**: 한국공학대학교 Python 강의 기반 11개 레슨 (입출력, 자료형, 조건문, 반복문, 함수, 예외처리, 리스트)
- **라이브러리**: 표준 라이브러리(os/sys, math, json, datetime, Turtle) + 데이터 분석/AI(NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow)

### 실습 환경
- **파이썬 실습**: Pyodide(WebAssembly) 기반 브라우저 내 Python 실행 — 별도 설치 불필요
- **코드 에디터**: 라인 넘버, 구문 하이라이팅, input() 대화형 입력, Turtle SVG 렌더링
- **13단계 실습**: 기초부터 심화까지 단계별 예제 코드 제공

### 평가 시스템
- **퀴즈 센터**: 8개 퀴즈, 88문제, 타이머, 해설, 재응시 시 선택지 셔플
- **도장깨기**: 36개 배지 (브론즈/실버/골드/플래티넘), 자동 획득 평가
- **응시 기록**: 최근 3회 응시 이력, 최고 점수 기록

### 사용자 관리
- **인증**: Google/Kakao OAuth 로그인 (Supabase Auth)
- **마이페이지**: 학습 통계, 획득 배지, 퀴즈 성적표, 클래스 참여
- **역할 시스템**: 관리자 / 선생님 / 학생 (DB 기반 동적 역할)
  - 관리자: 전체 회원 관리, 역할 지정, 커뮤니티 관리
  - 선생님: 클래스 생성(6자리 코드), 학생 학습 현황 조회
  - 학생: 클래스 코드 입력으로 참여

### 커뮤니티
- Q&A, 자유게시판, 코드공유, 코드리뷰 4개 카테고리
- 게시글/댓글/좋아요, 태그 필터

### 부가 기능
- **다크모드**: 라이트/다크 테마 전환, 설정 유지
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 대응
- **사용설명서**: 12개 섹션 + FAQ 정적 가이드 페이지
- **학습 진도**: Navbar 원형 진도 표시, Supabase 자동 동기화
- **SNS 공유**: Open Graph 메타태그 (Kakao, Facebook, Twitter)

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 19.2 |
| 빌드 | Vite 7.3 |
| 라우팅 | React Router DOM 7.13 |
| 상태 관리 | React Context API (4개 Context) |
| 코드 실행 | Pyodide (Python WebAssembly) + Web Worker |
| DB/인증 | Supabase (PostgreSQL + OAuth) |
| 코드 에디터 | react-simple-code-editor + PrismJS |
| 아이콘 | Font Awesome 6.5.1 |
| 폰트 | Noto Sans KR + JetBrains Mono |
| 스타일 | CSS Custom Properties (18개 CSS 파일) |
| 배포 | GitHub Pages + 커스텀 도메인 |

## 프로젝트 구조

```
src/
├── App.jsx                    # 라우터 + Provider + ErrorBoundary
├── index.css                  # CSS 임포트 허브 (18개)
├── components/                # 재사용 컴포넌트 (9개)
│   ├── layout/                #   Navbar, Footer
│   ├── CodeEditor.jsx         #   Python 코드 에디터
│   ├── TurtleCanvas.jsx       #   Turtle SVG 렌더러
│   ├── QuizComponent.jsx      #   퀴즈 컴포넌트
│   └── ...
├── contexts/                  # 전역 상태 (4개)
│   ├── AuthContext.jsx        #   인증 + 세션 + 역할
│   ├── ThemeContext.jsx       #   다크모드
│   ├── ProgressContext.jsx    #   학습 진도 + Supabase 동기화
│   └── BadgeContext.jsx       #   배지 시스템
├── pages/                     # 페이지 (22개)
│   ├── Home.jsx               #   메인 페이지
│   ├── Guide.jsx              #   사용설명서
│   ├── PythonPractice.jsx     #   파이썬 실습 (Pyodide)
│   ├── QuizCenter.jsx         #   퀴즈 센터
│   ├── community/             #   커뮤니티 (목록/상세/작성)
│   ├── python-learning/       #   파이썬 학습 (11개 레슨)
│   └── ...
├── data/                      # 학습 데이터
│   ├── lessons.js             #   35개 레슨 메타데이터
│   ├── lessonContents.js      #   레슨 교육 콘텐츠
│   ├── quizzes.js             #   88문제 퀴즈 데이터
│   ├── badges.js              #   36개 배지 정의
│   └── pythonSteps/           #   실습 예제 (13단계)
├── styles/                    # CSS (18개 파일)
├── hooks/                     # 커스텀 훅
├── workers/                   # Web Worker (Pyodide)
└── config/                    # Supabase 클라이언트
```

## 시작하기

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/aebonlee/python-study.git
cd python-study

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 Supabase URL과 Anon Key 입력

# 개발 서버 실행
npm run dev
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 프로젝트 통계

| 항목 | 수치 |
|------|------|
| 페이지 | 22개 |
| 컴포넌트 | 9개 |
| CSS 파일 | 18개 |
| Context | 4개 |
| 학습 레슨 | 46개 (4단계 35 + 파이썬 학습 11) |
| 실습 예제 | 13단계 |
| 퀴즈 문제 | 88문제 (8개 퀴즈) |
| 배지 | 36개 (4티어) |
| Supabase 테이블 | 8개 |
| 빌드 사이즈 | index.js 453KB + CSS 117KB + 48 청크 |

## 개발 문서

`Dev_md/` 폴더에 상세 개발 문서가 포함되어 있습니다:

| 문서 | 내용 |
|------|------|
| `PROJECT_PLAN.md` | 프로젝트 계획서 |
| `ARCHITECTURE.md` | 아키텍처 문서 (기술 스택, 구조, 상태 관리, 라우팅) |
| `DEVELOPMENT_LOG.md` | 개발 일지 (Day 1~5 전체 기록) |
| `FEATURE_CHECKLIST.md` | 기능 점검 결과서 (35개 핵심 기능 + 25개 추가 개선) |
| `EVALUATION_REPORT.md` | 사이트 종합 평가 보고서 |
| `SUPABASE_SETUP.md` | Supabase 설정 가이드 (테이블 SQL, RLS, OAuth) |
| `DEPLOYMENT.md` | 배포 가이드 |
| `STYLE_GUIDE.md` | 스타일 가이드 |
| `RECENT_CHANGES_*.md` | 날짜별 변경 사항 |

## 라이선스

이 프로젝트는 교육 목적으로 개발되었습니다.
