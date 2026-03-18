# UI/UX 개선 4건 구현 문서

## 구현일: 2026-03-19

---

## 1. 코드 블록 스타일 통일 (CSS only)

### 변경 파일
- `src/styles/python-learning.css`

### 변경 내용
PythonLesson01-11에서 사용하는 `.code-block` CSS를 CodeEditor(`editor.css`)와 동일한 시각 스타일로 변경.

| 속성 | 변경 전 | 변경 후 |
|------|---------|---------|
| `.code-block` border | `1px solid var(--border-light)` | `2px solid var(--primary)` |
| `.code-header` bg | `#2d3748` (회색) | `var(--primary)` (파란색) |
| `.code-header` color | `#e2e8f0` | `white` |
| `.code-block pre` bg | `#1a202c` | `#0F172A` (editor 동일) |
| `.code-block pre` line-height | `1.6` | `1.7` |
| 다크모드 border | 기본 | `var(--primary-light)` |
| 다크모드 header | `#0F172A` | `var(--primary)` |
| 다크모드 pre bg | `#0d1117` | `#020617` |

---

## 2. 실습 소스창 출력 리셋

### 변경 파일
- `src/pages/LessonPage.jsx`

### 변경 내용
CodeEditor에 `key` prop 추가하여 섹션/레슨 변경 시 컴포넌트 리마운트로 상태(출력) 자동 초기화.

```jsx
<CodeEditor
  key={`${lessonId}-${activeSection}`}
  initialCode={sections[activeSection].code}
  ...
/>
```

---

## 3. 라이브러리 드롭다운 카테고리 배경색

### 변경 파일
- `src/components/layout/Navbar.jsx` - 카테고리 그룹 데이터 및 렌더링
- `src/styles/navbar.css` - 그룹별 배경색 스타일

### 변경 내용
- navItems에 `grouped: true` 플래그, 각 header에 `group` 필드 추가
- 렌더링 시 header를 기준으로 그룹별 `<div class="dropdown-group group-xxx">` 래퍼 생성
- 3개 카테고리 배경색:
  - `group-standard`: `rgba(48,105,152,0.04)` (파란 톤)
  - `group-education`: `rgba(255,212,59,0.06)` (노란 톤)
  - `group-data`: `rgba(16,185,129,0.04)` (초록 톤)

---

## 4. 학습 완료 취소 기능

### 변경 파일
- `src/contexts/ProgressContext.jsx` - `uncompleteLesson` 함수 추가
- `src/pages/LessonPage.jsx` - 완료 취소 버튼 UI
- `src/styles/course.css` - 완료 취소 버튼 스타일

### 변경 내용
- `uncompleteLesson(lessonId)`: completedLessons Set에서 해당 ID 삭제
- "완료됨" 텍스트 뱃지 -> "완료 취소" 클릭 가능한 버튼으로 변경
- 버튼 스타일: 초록 테두리, hover 시 빨간색으로 전환 (취소 의미 강조)

---

## 검증 항목
1. PythonLesson01 코드 블록: 파란 헤더 + 어두운 코드 영역
2. LessonPage 섹션 전환 시 CodeEditor 출력 리셋
3. 라이브러리 드롭다운 3개 카테고리 다른 배경색
4. "학습 완료" 후 "완료 취소" 버튼 표시, 클릭 시 완료 해제
5. 다크모드 정상 표시
6. 빌드 성공
