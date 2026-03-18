# CodeEditor Pyodide 마이그레이션 + StepCodeRunner 통일

## Phase 1: Pyodide 마이그레이션 (2026-03-19)

### Context
기초/중급/고급/응용 레슨 페이지의 `CodeEditor` 컴포넌트가 JavaScript eval 기반
`simulatePythonExecution()` 함수로 Python을 시뮬레이션하고 있었음.
파이썬 실습 페이지는 Pyodide(WebAssembly Python)를 사용해 실제 Python을 실행.
두 페이지의 실행 환경을 통일하기 위해 CodeEditor를 Pyodide 기반으로 교체.

### 변경 내용
- `simulatePythonExecution()` 함수 전체 삭제 (~170줄)
- `useCodeRunner` 훅으로 교체 (Pyodide Worker 기반)
- `__TURTLE_SVG__` 마커 파싱으로 turtle SVG 인라인 렌더링
- `inputValues`를 배열로 변경

---

## Phase 2: StepCodeRunner 구조 통일 (2026-03-19)

### Context
Phase 1 후에도 CodeEditor와 PythonPractice의 StepCodeRunner가 시각적으로 달랐음.
사용자가 두 실행창의 완전한 통일을 요청.

### 변경 전후 비교

#### 이전 (독자적 디자인)
```
+-- 회색 툴바 (Python Editor | 힌트, 초기화, 실행) --+
|  코드 편집 영역                                     |
|  출력 결과                                          |
+-----------------------------------------------------+
```

#### 이후 (= PythonPractice StepCodeRunner)
```
+-- 파란 헤더 (Python Editor | 힌트) -----------------+
|  코드 편집 영역 (실행 중 비활성화)                    |
|  하단 툴바 (실행 | 초기화, 출력 지우기)               |
|  실행 결과 (정답!)                                   |
+-----------------------------------------------------+
```

### 상세 매칭 항목

| 항목 | CodeEditor (이전) | CodeEditor (이후 = Practice) |
|------|-------------------|------------------------------|
| 테두리 | 1px solid border-light | 2px solid primary |
| 헤더 배경 | bg-light (회색) | primary (파란색) |
| 헤더 텍스트 | 검정 | 흰색 |
| 실행 버튼 위치 | 상단 툴바 | 하단 툴바 |
| textarea | 항상 활성 | 실행 중 disabled |
| 출력 pre 클래스 | .output-content | .editor-stdout / .editor-stderr |
| 출력 제목 | "출력 결과" | "실행 결과" |
| 입력 폼 | 독자 패널 | form + .editor-input-form |
| turtle SVG | 독자 스타일 | practice-turtle-svg 동일 |
| 다크모드 | 부분 매칭 | practice.css 완전 매칭 |

### 변경 파일
1. `src/components/CodeEditor.jsx` - 전면 재작성
2. `src/styles/editor.css` - 전면 재작성 (practice.css 구조 미러링)
3. `src/styles/python-learning.css` - .code-block pre에 border-radius: 0 추가

### 변경 불필요
- `LessonPage.jsx` - CodeEditor 호출부 변경 없음
- `lessonContents.js` - 데이터 구조 변경 없음
- `useCodeRunner.js` - 기존 훅 그대로 재사용
- `pyodide.worker.js` - 기존 워커 그대로 재사용

---

## 레이아웃 수정 (2026-03-19)

### 3차 페이지 (LessonPage) 중앙정렬
- **원인**: `.lesson-layout`이 container(1280px) 안에서 260px+1fr 그리드 사용,
  content가 max-width: 800px이라 오른쪽에 빈 공간 남아 왼쪽 치우침
- **수정**: `course.css` .lesson-layout에 `max-width: 1160px; margin: 0 auto` 추가

### PythonLesson (01-11) 페이지 중앙정렬
- **원인**: course.css `.lesson-content { max-width: 800px }`가 PythonLesson
  section에도 적용되어 margin: 0 auto 없이 왼쪽 치우침
- **수정**: `python-learning.css` `.python-lesson-detail .lesson-content`에
  `max-width: none` 추가, .lesson-body의 margin: 0 auto가 정상 동작

### PythonLesson code-block 표시
- **수정**: `.python-lesson-detail .code-block pre`에 `border-radius: 0` 추가하여
  base.css `pre { border-radius: var(--radius-md) }` 오버라이드

## 검증
1. 기초 레슨 페이지에서 print 코드 실행 -> 정상 출력
2. input() 코드 -> 입력 폼 표시, 값 입력 후 실행
3. turtle 코드 -> SVG 인라인 렌더링
4. 에러 코드 -> 빨간색 에러 메시지
5. 다크모드에서 전체 정상 표시
6. LessonPage, PythonLesson 페이지 중앙정렬 확인
7. PythonPractice와 CodeEditor 실행창 시각적 동일 확인
