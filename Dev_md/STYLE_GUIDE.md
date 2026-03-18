# PyMaster - 스타일 가이드

## CSS 변수 시스템

### 색상
```css
--primary: #306998;          /* Python Blue */
--primary-dark: #1E4F72;     /* 어두운 파란 */
--primary-light: #4B8BBE;    /* 밝은 파란 */
--accent: #FFD43B;           /* Python Yellow */
--accent-dark: #F0C419;      /* 어두운 노란 */
--success: #10B981;          /* 성공/초록 */
--error: #EF4444;            /* 에러/빨강 */
--warning: #F59E0B;          /* 경고/주황 */
```

### 배경 & 텍스트
```css
/* 라이트 모드 */
--bg-white: #FFFFFF;
--bg-light: #F8FAFC;
--bg-medium: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-light: #94A3B8;

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
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
```

## 레벨별 색상
| 레벨 | 색상 | 용도 |
|------|------|------|
| 기초 | #10B981 | 카드, 헤더, 진도바 |
| 중급 | #3B82F6 | 카드, 헤더, 진도바 |
| 고급 | #8B5CF6 | 카드, 헤더, 진도바 |
| 응용 | #F59E0B | 카드, 헤더, 진도바 |

## 배지 티어 색상
| 티어 | 배경 | 글로우 |
|------|------|--------|
| 브론즈 | #CD7F32 | rgba(205,127,50,0.3) |
| 실버 | #C0C0C0 | rgba(192,192,192,0.3) |
| 골드 | #FFD700 | rgba(255,215,0,0.3) |
| 플래티넘 | #E5E4E2 | rgba(229,228,226,0.4) |

## 버튼 스타일
- `.btn-primary`: Python Blue 배경, 흰색 텍스트
- `.btn-secondary`: 투명 배경, 보더
- `.btn-accent`: Python Yellow 배경
- `.btn-sm`, `.btn-lg`: 크기 변형

## 글라스모피즘
```css
backdrop-filter: blur(16px) saturate(180%);
background: rgba(255, 255, 255, 0.75);
border: 1px solid rgba(255, 255, 255, 0.18);
```

## 반응형 브레이크포인트
```css
@media (max-width: 1024px) { /* 태블릿 */ }
@media (max-width: 768px)  { /* 모바일 */ }
@media (max-width: 480px)  { /* 소형 모바일 */ }
```

## 다크 모드
- `[data-theme="dark"]` 선택자로 오버라이드
- CSS 변수를 재정의하여 일괄 적용
- 글라스모피즘 효과도 다크 모드에 맞게 조정

## 애니메이션
- `fadeInUp`: 아래에서 위로 나타남 (카드 등)
- `fadeIn`: 서서히 나타남
- `scaleIn`: 작은 크기에서 커지며 나타남
- `slideInRight`: 오른쪽에서 슬라이드
- 기본 트랜지션: `all 0.2s ease`
