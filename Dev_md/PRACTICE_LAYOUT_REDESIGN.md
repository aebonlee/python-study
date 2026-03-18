# 파이썬 실습 페이지 — 뷰포트 레이아웃 재설계

## 구현일: 2026-03-19
## 관련 커밋: 5269a77 → 08ed112 → 8485c37 → d0bdfca → c06ee4d

---

## 1. 목표

파이썬 실습(PythonPractice) 페이지를 **뷰포트 내에 완전 고정**하여:
- 페이지 스크롤 없음 (세로/가로 모두)
- 스크롤바 UI 없음 (내부 컨텐츠는 마우스 휠/터치로 스크롤 가능)
- 에디터 영역 세로 공간 최대화
- 실행 결과가 에디터를 밀어올리지 않음
- 미니 푸터로 하단 마감

---

## 2. 레이아웃 구조 (Flex Chain)

```
.practice-page (height: 100vh - nav, flex-column, overflow: hidden)
 ├── .page-header-section (flex-shrink: 0)          ~48px
 ├── .section (flex: 1, min-height: 0)
 │    └── .container (height: 100%, flex-column)
 │         ├── .practice-step-tabs (flex-shrink: 0)  ~74px
 │         └── .practice-step-layout (flex: 1, min-height: 0)
 │              ├── .practice-example-sidebar (250px, flex-column)
 │              │    ├── .sidebar-header (flex-shrink: 0)
 │              │    └── .example-nav (flex: 1, overflow-y: auto)
 │              └── .practice-runner-panel (flex: 1)
 │                   └── .practice-step-runner (flex: 1, flex-column)
 │                        ├── .runner-header (flex-shrink: 0)    ~34px
 │                        ├── .mode-tabs (flex-shrink: 0)        ~34px (선택적)
 │                        ├── .editor-body (flex: 1 1 0)         ← 확장 영역
 │                        ├── .toolbar (flex-shrink: 0)          ~32px
 │                        └── .output (flex: 0 1 auto)           ≤140px
 └── .practice-mini-footer (flex-shrink: 0)          ~24px
```

---

## 3. 핵심 설계 원칙

### 3-1. flex chain 무결성
모든 레벨에서 `flex: 1; min-height: 0` 체인이 끊기지 않아야 에디터까지 높이가 전달됨.

### 3-2. 출력 영역: `flex: 0 1 auto` (에디터를 밀지 않음)
```css
/* 이전 (문제) */
.practice-output { flex-shrink: 0; max-height: 160px; }
/* → 출력이 160px 고정 차지, 에디터가 강제로 줄어듦 */

/* 이후 (수정) */
.practice-output { flex: 0 1 auto; max-height: 140px; overflow-y: auto; }
/* → 공간 부족 시 출력이 먼저 축소됨, 에디터 보호 */
```

### 3-3. 스크롤바 숨김 (기능은 유지)
```css
.practice-page ::-webkit-scrollbar { display: none; }
.practice-page * { scrollbar-width: none; -ms-overflow-style: none; }
```
적용 대상: 사이드바 파일 목록, 코드 에디터, 라인 넘버, 실행 결과

### 3-4. 글로벌 Footer 숨김 + 미니 Footer
```css
.main-content:has(.practice-page) + .footer { display: none; }
.main-content:has(.practice-page) { min-height: auto; }
```
CSS `:has()` 셀렉터로 실습 페이지에서만 전역 Footer를 숨기고, 내부에 24px 미니 푸터 배치.

---

## 4. 고정 영역 최소화

| 영역 | 최적화 전 | 최적화 후 | 절약 |
|------|----------|----------|------|
| 페이지 헤더 | ~81px | ~48px | -33px |
| 탭 영역 | ~100px | ~74px | -26px |
| 컨테이너 패딩 | 20px | 8px | -12px |
| 러너 헤더 | ~40px | ~34px | -6px |
| 모드 탭 | ~40px | ~34px | -6px |
| 툴바 | ~40px | ~32px | -8px |
| 출력 max | 160px | 140px | -20px |
| 미니 푸터 | ~28px | ~24px | -4px |
| **총 고정** | **~320px** | **~220px** | **~100px** |

900px 뷰포트 기준 (nav 72px 제외):
- 에디터 가용: 828 - 220 = **~608px** (출력 없을 때)
- 에디터 가용: 828 - 220 = **~468px** (출력 140px 표시 시)

---

## 5. 변경 파일

| 파일 | 변경 내용 |
|------|----------|
| `src/styles/practice.css` | 전면 재작성 — 뷰포트 레이아웃, 스크롤바 숨김, 패딩 최소화 |
| `src/pages/PythonPractice.jsx` | 미니 푸터 JSX 추가 |
| `src/components/layout/Footer.jsx` | GitHub 로고/링크 제거 |
| `src/styles/footer.css` | footer-links 스타일 제거, footer-bottom 중앙 정렬 |

---

## 6. 반응형 대응

- **≤1024px**: `height: auto`, 세로 스택 레이아웃, overflow auto
- **≤768px**: 탭/헤더 폰트 축소
- **≤480px**: 탭 라벨 숨김 (아이콘만)

---

## 7. 다크모드 대응

14개 다크모드 셀렉터 유지:
- 헤더, 탭, 사이드바, 러너, 에디터, 출력, 툴바, 미니 푸터 등 전체 영역
