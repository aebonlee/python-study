# PyMaster - 아키텍처 문서

## 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | React | 19.2 |
| 빌드 도구 | Vite | 7.3 |
| 라우팅 | React Router DOM | 7.13 |
| 코드 하이라이팅 | PrismJS | 1.30 |
| 코드 에디터 | react-simple-code-editor | 0.14 |
| 언어 | JavaScript (JSX) | ES2022 |
| 스타일 | CSS Custom Properties | CSS3 |

## 프로젝트 구조

```
D:\python-study\
├── index.html                  # 진입점 HTML
├── package.json               # 의존성 관리
├── vite.config.js             # Vite 설정
├── public/
│   └── favicon.svg            # 파비콘 (Python 로고)
├── src/
│   ├── main.jsx               # React 엔트리 포인트
│   ├── App.jsx                # 라우터 및 Provider 래핑
│   ├── index.css              # CSS 임포트 허브
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # 상단 네비게이션
│   │   │   └── Footer.jsx     # 하단 푸터
│   │   ├── CodeEditor.jsx     # Python 코드 에디터
│   │   ├── BadgeCard.jsx      # 배지 카드
│   │   ├── LessonCard.jsx     # 레슨 카드
│   │   ├── ProgressBar.jsx    # 진도율 바
│   │   └── QuizComponent.jsx  # 퀴즈 컴포넌트
│   ├── contexts/
│   │   ├── ThemeContext.jsx    # 다크모드 상태
│   │   ├── ProgressContext.jsx # 학습 진도 상태
│   │   └── BadgeContext.jsx   # 배지 상태
│   ├── data/
│   │   ├── lessons.js         # 레슨 메타데이터
│   │   ├── lessonContents.js  # 레슨 교육 컨텐츠
│   │   ├── badges.js          # 배지 정의
│   │   └── quizzes.js         # 퀴즈 문제
│   ├── pages/
│   │   ├── Home.jsx           # 메인 페이지
│   │   ├── LevelPage.jsx      # 단계별 레슨 목록
│   │   ├── LessonPage.jsx     # 레슨 상세/학습
│   │   ├── BadgeCollection.jsx # 배지 컬렉션
│   │   └── QuizCenter.jsx     # 퀴즈 센터
│   └── styles/
│       ├── base.css           # 기본 스타일, CSS 변수
│       ├── navbar.css         # 네비게이션
│       ├── hero.css           # 히어로 & 메인 섹션
│       ├── footer.css         # 푸터
│       ├── course.css         # 과정/레슨 페이지
│       ├── badge.css          # 배지 시스템
│       ├── quiz.css           # 퀴즈 시스템
│       ├── editor.css         # 코드 에디터
│       ├── animations.css     # 애니메이션
│       ├── dark-mode.css      # 다크 모드
│       └── responsive.css     # 반응형
└── Dev_md/                    # 개발 문서
```

## 상태 관리

### Context API 패턴
```
App
 └── ThemeProvider (테마 상태)
      └── ProgressProvider (학습 진도)
           └── BadgeProvider (배지 시스템)
                └── Router + Pages
```

### 데이터 흐름
- **ThemeContext**: light/dark 테마 토글, HTML data-theme 속성 제어
- **ProgressContext**: 완료 레슨, 퀴즈 점수, 코드 실행 수, 스트릭 관리
- **BadgeContext**: 배지 조건 평가, 획득 알림, 배지 목록 관리

### 데이터 저장
- `pymaster-theme`: 테마 설정 (localStorage)
- `pymaster-progress`: 학습 진도 데이터 (localStorage)
- `pymaster-badges`: 획득 배지 목록 (localStorage)

## 라우팅

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | 메인 페이지 |
| `/:level` | LevelPage | 단계별 레슨 목록 |
| `/:level/:lessonId` | LessonPage | 레슨 학습 |
| `/badges` | BadgeCollection | 배지 컬렉션 |
| `/quiz` | QuizCenter | 퀴즈 센터 |
| `*` | 404 | 페이지 없음 |

## 디자인 시스템

### 색상 테마
- **Primary**: #306998 (Python Blue)
- **Accent**: #FFD43B (Python Yellow)
- **Success**: #10B981
- **Error**: #EF4444

### 레벨별 색상
- 기초: #10B981 (초록)
- 중급: #3B82F6 (파랑)
- 고급: #8B5CF6 (보라)
- 응용: #F59E0B (노랑)

### 반응형 브레이크포인트
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

### 폰트
- 본문: 'Noto Sans KR' (Google Fonts)
- 코드: 'JetBrains Mono' (Google Fonts)
