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
│   └── 404.html               # SPA 리디렉트
├── src/
│   ├── main.jsx               # React 엔트리 포인트
│   ├── App.jsx                # 라우터 + Provider + ErrorBoundary + Lazy
│   ├── index.css              # CSS 임포트 허브 (12개 CSS)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # 상단 네비게이션 (1열 메뉴 + 인증 UI)
│   │   │   └── Footer.jsx     # 하단 푸터
│   │   ├── ErrorBoundary.jsx  # 런타임 에러 복구 UI
│   │   ├── CodeEditor.jsx     # Python 코드 에디터
│   │   ├── BadgeCard.jsx      # 배지 카드 (FA 아이콘)
│   │   ├── LessonCard.jsx     # 레슨 카드 (FA 아이콘)
│   │   ├── ProgressBar.jsx    # 진도율 바
│   │   └── QuizComponent.jsx  # 퀴즈 컴포넌트
│   ├── config/
│   │   └── supabase.js        # Supabase 클라이언트 (pymaster_ 접두사)
│   ├── contexts/
│   │   ├── AuthContext.jsx    # 인증 상태 (Google/Kakao OAuth)
│   │   ├── ThemeContext.jsx    # 다크모드 상태
│   │   ├── ProgressContext.jsx # 학습 진도 상태
│   │   └── BadgeContext.jsx   # 배지 상태
│   ├── data/
│   │   ├── lessons.js         # 레슨 메타데이터 (FA 아이콘 클래스)
│   │   ├── lessonContents.js  # 레슨 교육 컨텐츠
│   │   ├── badges.js          # 배지 정의 (FA 아이콘 클래스)
│   │   └── quizzes.js         # 퀴즈 문제
│   ├── pages/
│   │   ├── Home.jsx           # 메인 페이지
│   │   ├── Login.jsx          # 로그인 페이지 (Google/Kakao)
│   │   ├── LevelPage.jsx      # 단계별 레슨 목록
│   │   ├── LessonPage.jsx     # 레슨 상세/학습
│   │   ├── BadgeCollection.jsx # 배지 컬렉션
│   │   └── QuizCenter.jsx     # 퀴즈 센터
│   └── styles/                # CSS 12개 파일
│       └── auth.css           # 로그인 페이지 + Navbar 인증 UI
└── Dev_md/                    # 개발 문서
```

## 상태 관리

### Context API 패턴
```
App
 └── ErrorBoundary (전역)
      └── ThemeProvider (테마 상태)
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
- **AuthContext**: Supabase OAuth 인증 (Google/Kakao), 유저 상태, 로그인/로그아웃
- **ThemeContext**: light/dark 테마 토글, HTML data-theme 속성 제어
- **ProgressContext**: 완료 레슨, 퀴즈 점수, 코드 실행 수, 스트릭 관리
- **BadgeContext**: 배지 조건 평가, 획득 알림, 배지 목록 관리

### 데이터 저장
| 키 | 용도 | 저장소 |
|----|------|--------|
| `pymaster-theme` | 테마 설정 | localStorage |
| `pymaster-progress` | 학습 진도 | localStorage (+Supabase 예정) |
| `pymaster-badges` | 획득 배지 | localStorage (+Supabase 예정) |
| Supabase Auth | 인증 세션 | Supabase (자동 관리) |

### Supabase 테이블 (접두사: pymaster_)
| 테이블 | 용도 |
|--------|------|
| `pymaster_users` | 사용자 정보 |
| `pymaster_progress` | 학습 진도 동기화 |
| `pymaster_badges` | 배지 획득 기록 |
| `pymaster_quiz_scores` | 퀴즈 점수 |
| `pymaster_streaks` | 연속 학습 기록 |

## 라우팅

| 경로 | 페이지 | 로딩 |
|------|--------|------|
| `/` | Home | lazy |
| `/login` | Login | lazy |
| `/:level` | LevelPage | lazy |
| `/:level/:lessonId` | LessonPage | lazy |
| `/badges` | BadgeCollection | lazy |
| `/quiz` | QuizCenter | lazy |
| `*` | 404 | inline |

## 아이콘 시스템

### Font Awesome 6.5.1
- CDN으로 로드 (`index.html`)
- 데이터 파일에서 `icon: 'fa-solid fa-seedling'` 형식으로 저장
- 렌더링: `<i className={icon} />`
- 색상: CSS에서 `var(--primary)` (#306998) 적용
- 다크모드: CSS 변수 기반 자동 전환

### Navbar 구조 (1열 평탄 메뉴)
```
기초 | 중급 | 고급 | 응용 | NumPy | Pandas | 퀴즈 | 도장깨기 | [진도] [테마] [로그인/아바타]
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

빌드 결과 (React.lazy + Suspense):
| 청크 | 크기 | 내용 |
|------|------|------|
| index.js | 433KB | React, Router, Contexts, Supabase |
| LessonPage.js | 49KB | 레슨 페이지 + 컨텐츠 |
| QuizCenter.js | 21KB | 퀴즈 센터 + 문제 데이터 |
| Home.js | 7KB | 홈 페이지 |
| BadgeCollection.js | 4KB | 배지 컬렉션 |
| LevelPage.js | 3KB | 레벨 페이지 |
| Login.js | 2KB | 로그인 페이지 |
