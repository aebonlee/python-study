# 최근 변경 사항 — 2026-03-19

## 커밋 범위: ee7303e ~ c06ee4d

---

## 1. CodeEditor Pyodide 마이그레이션 (ee7303e)

### 변경 내용
- CodeEditor를 자체 시뮬레이터 기반에서 **Pyodide 실제 실행** 기반으로 전환
- `useCodeRunner` 훅으로 Pyodide Web Worker 연동
- 기존 `simulateCode()` 로직 제거, 실제 Python 실행 결과 반환

### 변경 파일
- `src/components/CodeEditor.jsx` — Pyodide 기반 재작성

---

## 2. Pyodide Worker 패키지 자동 로드 (609c5a7)

### 변경 내용
- Pyodide Worker에서 numpy, pandas 등 패키지 자동 설치
- `micropip.install()` 활용, 코드 내 import 감지 시 자동 로드

### 변경 파일
- `public/pyodide.worker.js`

---

## 3. 레슨 페이지 중앙정렬 + 실행창 통일 (abbb3ec, 87a6d35)

### 변경 내용
- PythonLesson01~11 개별 레슨 페이지 중앙정렬
- CodeEditor 실행창 스타일을 PythonPractice와 통일

### 변경 파일
- `src/styles/python-learning.css`
- `src/pages/python-learning/PythonLesson01~11.jsx`

---

## 4. CodeEditor → StepCodeRunner 통일 (cb4eb62)

### 변경 내용
- LessonPage에서 사용하는 CodeEditor를 PythonPractice의 StepCodeRunner와 동일한 구조로 재설계
- 코드 에디터, 라인 넘버, 실행 결과, 입력 폼 등 UI 완전 통일

### 변경 파일
- `src/components/CodeEditor.jsx`
- `src/styles/editor.css`

---

## 5. 사이트 전체 컬러 통일 + 404 라우팅 (0d732ba)

### 변경 내용
- Python Blue(#306998)/Yellow(#FFD43B) 팔레트로 사이트 전체 컬러 재정리
- 404 페이지 와일드카드 라우트 수정
- 배지 아이콘 클래스 오류 수정

### 변경 파일
- `src/App.jsx`, `src/styles/base.css`, `src/data/badges.js`

---

## 6. UI/UX 개선 4건 (e24e895)

> 상세: [UI_UX_IMPROVEMENT_4.md](./UI_UX_IMPROVEMENT_4.md)

1. **코드 블록 스타일 통일**: `.code-block` CSS를 에디터 스타일과 매칭
2. **실습 출력 리셋**: CodeEditor에 `key` prop 추가 → 섹션 변경 시 리마운트
3. **라이브러리 드롭다운 카테고리 배경색**: 3개 그룹별 다른 배경색
4. **학습 완료 취소**: `uncompleteLesson()` 함수 + UI 버튼

---

## 7. Turtle 실습 2단계 분리 (b5a9d4e)

### 변경 내용
- 5단계 "Turtle 그래픽" 27개 예제를 2단계로 분리:
  - **5단계 Turtle 그래픽 (기초)**: 14개 예제 (사각형, 원, 자동차, 집, 별, 나선 등)
  - **6단계 Turtle 그래픽 (응용)**: 13개 예제 (프랙탈, 시계, 게임, 아트 등)
- 기존 6단계~10단계 → 7단계~11단계로 번호 재배치
- `shapesize()` Pyodide 미지원 호출 제거 (cookie2.py 버그 수정)

### 변경 파일
- `src/data/pythonSteps/step5.js` — 14개로 축소
- `src/data/pythonSteps/step6.js` — 신규 (13개 응용 예제)
- `src/data/pythonSteps/step7.js ~ step11.js` — 번호 재배치
- `src/data/pythonSteps/index.js` — stepMeta 13개 + stepLoaders 업데이트

---

## 8. 실습 탭 아이콘 제거 + 2행 레이아웃 (0f95d10)

### 변경 내용
- 실습 단계 탭에서 아이콘 제거 (텍스트만 표시)
- 기존 3행 → 2행 배치:
  - 1행: 1~6단계
  - 2행: 7~11단계 + 심화1, 심화2

### 변경 파일
- `src/pages/PythonPractice.jsx`
- `src/styles/practice.css`

---

## 9. 실습 페이지 뷰포트 레이아웃 재설계 (5269a77 → c06ee4d, 5개 커밋)

> 상세: [PRACTICE_LAYOUT_REDESIGN.md](./PRACTICE_LAYOUT_REDESIGN.md)

- 페이지 스크롤 완전 제거 (`height: calc(100vh - nav)`)
- 스크롤바 UI 숨김 (내부 스크롤 기능은 유지)
- 글로벌 Footer 숨김 + 미니 Footer 배치
- 에디터 영역 세로 공간 최대화 (~100px 추가 확보)
- `flex: 0 1 auto` 출력 영역 (에디터를 밀지 않음)

---

## 10. 푸터 GitHub 링크 제거 (d0bdfca)

### 변경 내용
- Footer에서 GitHub 로고 SVG 및 링크 삭제
- footer-bottom 중앙 정렬로 변경

### 변경 파일
- `src/components/layout/Footer.jsx`
- `src/styles/footer.css`

---

## 빌드 결과 (최종 c06ee4d)
- CSS: 66.19KB
- index.js: 438.54KB
- PythonPractice.js: 12.01KB
- 총 38개 청크, 빌드 3.21s
- GitHub Pages 자동 배포 완료
