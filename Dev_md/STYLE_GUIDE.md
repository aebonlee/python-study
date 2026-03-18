# PyMaster - 스타일 가이드

## CSS 변수 시스템

### 색상 (Python 팔레트 통일)
```css
--primary: #306998;          /* Python Blue (메인) */
--primary-dark: #1E4F72;     /* 어두운 파란 */
--primary-light: #4B8BBE;    /* 밝은 파란 */
--accent: #FFD43B;           /* Python Yellow */
--accent-dark: #E6B800;      /* 어두운 노란 */
--accent-light: #FFE873;     /* 밝은 노란 */
--success: #10B981;          /* 성공/초록 */
--error: #EF4444;            /* 에러/빨강 */
--warning: #F59E0B;          /* 경고/주황 */
--info: #3B82F6;             /* 정보/파랑 */
```

### 레벨별 색상 (Python 팔레트 파생)
```css
--level-basics: #4B8BBE;      /* Python Light Blue */
--level-intermediate: #306998; /* Python Blue */
--level-advanced: #1E4F72;     /* Python Dark Blue */
--level-applied: #D4A017;      /* Python Muted Gold */
```

> 모든 레벨 색상은 Python 공식 로고의 Blue/Yellow에서 파생됩니다.
> 추후 컬러셋 변경 시 CSS 변수만 수정하면 전체 적용됩니다.

### 배경 & 텍스트
```css
/* 라이트 모드 */
--bg-white: #FFFFFF;
--bg-light: #F7F9FC;
--bg-medium: #E8EDF2;
--text-primary: #111827;
--text-secondary: #4B5563;
--text-light: #5B6370;

/* 다크 모드 */
--bg-white: #111827;
--bg-light: #1F2937;
--bg-medium: #374151;
--text-primary: #F9FAFB;
--text-secondary: #D1D5DB;
--text-light: #9CA3AF;
```

### 크기 & 간격
```css
--nav-height: 72px;
--container-max: 1280px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 9999px;
```

## 아이콘 시스템 (Font Awesome 6)

### CDN
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

### 아이콘 색상 규칙
- **기본 색상**: `var(--primary)` (#306998) - 대부분의 아이콘
- **흰색 배경 위**: primary 색상 적용 (.feature-icon, .lesson-icon, .badge-icon)
- **컬러 배경 위**: 부모 색상 상속 (page-header, quiz-card-header)
- **특수 색상**: 팁 아이콘 = accent, 성공 아이콘 = success
- **다크모드**: CSS 변수 기반 자동 전환 (#4B8BBE)

### 레벨 아이콘
| 레벨 | FA 클래스 | 의미 |
|------|-----------|------|
| 기초 | `fa-solid fa-seedling` | 새싹 |
| 중급 | `fa-solid fa-rocket` | 로켓 |
| 고급 | `fa-solid fa-bolt` | 번개 |
| 응용 | `fa-solid fa-microscope` | 현미경 |

### 레슨 아이콘 (주요)
| 레슨 | FA 클래스 |
|------|-----------|
| Hello Python | `fa-solid fa-hand` |
| 변수 | `fa-solid fa-box` |
| 연산자 | `fa-solid fa-hashtag` |
| OOP | `fa-solid fa-cubes` |
| NumPy | `fa-solid fa-calculator` |
| Pandas | `fa-solid fa-table` |
| os/sys | `fa-solid fa-terminal` |
| math | `fa-solid fa-square-root-variable` |
| json | `fa-solid fa-code` |
| datetime | `fa-solid fa-calendar-days` |
| Matplotlib | `fa-solid fa-chart-pie` |
| Scikit-learn | `fa-solid fa-brain` |
| TensorFlow | `fa-solid fa-network-wired` |

### 배지 티어 아이콘
| 티어 | FA 클래스 | 색상 |
|------|-----------|------|
| 브론즈 | `fa-solid fa-award` | #CD7F32 |
| 실버 | `fa-solid fa-award` | #C0C0C0 |
| 골드 | `fa-solid fa-award` | #FFD700 |
| 플래티넘 | `fa-solid fa-gem` | #B9F2FF |

### 렌더링 패턴
```jsx
// 데이터 파일에서 클래스명으로 저장
{ icon: 'fa-solid fa-seedling' }

// 컴포넌트에서 <i> 태그로 렌더링
<i className={icon} />

// 인라인 아이콘
<i className="fa-solid fa-clock" /> 약 15분
```

## 버튼 스타일
- `.btn-primary`: Python Blue 그라디언트, 흰색 텍스트
- `.btn-secondary`: 투명 배경, 보더
- `.btn-accent`: Python Yellow 그라디언트
- `.btn-sm`, `.btn-lg`: 크기 변형

## 글라스모피즘
```css
backdrop-filter: blur(16px) saturate(180%);
background: rgba(255, 255, 255, 0.75);
border: 1px solid rgba(255, 255, 255, 0.18);
```

## 다크 모드
- `[data-theme="dark"]` 선택자로 오버라이드
- CSS 변수 재정의로 일괄 적용

## 애니메이션
- `fadeInUp`: 아래에서 위로 나타남 (카드)
- `fadeIn`: 서서히 나타남
- `scaleIn`: 작은 크기에서 커지며 나타남
- 기본 트랜지션: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

## 컬러셋 변경 방법
1. `src/styles/base.css`의 `:root` 변수 수정
2. `src/data/lessons.js`의 `levelInfo.color` 수정
3. 나머지는 CSS 변수를 참조하므로 자동 적용
