# CodeEditor Pyodide 마이그레이션 계획

## Context
현재 기초/중급/고급/응용 레슨 페이지의 `CodeEditor` 컴포넌트는 JavaScript eval 기반 `simulatePythonExecution()` 함수로 Python 코드를 시뮬레이션합니다. 이 방식은 print, 변수 대입, 간단한 for 루프 정도만 지원하며 실제 Python 동작과 차이가 큽니다. 반면 파이썬 실습 페이지는 Pyodide(WebAssembly Python)를 사용해 실제 Python을 실행합니다. 사용자가 두 페이지에서 동일한 실행 환경을 원하므로 CodeEditor를 Pyodide 기반으로 교체합니다.

## 변경 파일

### 1. `src/components/CodeEditor.jsx` - 주요 리팩토링
**삭제:**
- `simulatePythonExecution()` 함수 전체 (~170줄)
- `import TurtleCanvas from './TurtleCanvas'` (Pyodide worker가 SVG 생성)
- `isTurtleCode` useMemo를 badge 표시용으로만 유지
- `handleRunWithInputs()` 함수 (handleRun으로 통합)
- TurtleCanvas JSX 렌더링

**추가:**
- `import { useCodeRunner } from '../hooks/useCodeRunner'`
- `useCodeRunner()` 훅 사용 -> `{ status, output, errorMsg, runCode, resetOutput }`
- `inputValues`를 배열(`[]`)로 변경 (useCodeRunner가 배열 기대)
- `handleRun()` -> `runCode(code, inputValues)` 호출
- 출력 영역: `__TURTLE_SVG__` 마커 파싱 -> textOutput + svgHtml 분리
- 로딩 상태: status === 'loading' 시 "Python 로딩 중..." 표시
- 에러 표시: errorMsg를 별도 `<pre>` 로 출력

**출력 렌더링 패턴 (PythonPractice와 동일):**
```jsx
const SVG_MARKER = '__TURTLE_SVG__'
const hasSvg = output && output.includes(SVG_MARKER)
const textOutput = hasSvg ? output.substring(0, output.indexOf(SVG_MARKER)).trim() : output
const svgHtml = hasSvg ? output.substring(output.indexOf(SVG_MARKER) + SVG_MARKER.length).trim() : ''
```

### 2. `src/styles/editor.css` - CSS 추가
- `.editor-output-content` 래퍼 (배경색 관리)
- `.editor-output-content.has-error` 에러 배경
- `.output-content` 에 `background: transparent` (base.css pre 오버라이드 방지)
- `.editor-error` 에러 텍스트 색상
- `.editor-no-output` 빈 출력 스타일
- `.editor-turtle-svg` SVG 인라인 출력 스타일
- 다크모드 변형

### 3. 변경 불필요
- `LessonPage.jsx` - CodeEditor 호출부 변경 없음
- `lessonContents.js` - 데이터 구조 변경 없음
- `useCodeRunner.js` - 기존 훅 그대로 재사용
- `pyodide.worker.js` - 기존 워커 그대로 재사용

## 검증 방법
1. 기초 레슨 페이지에서 print 코드 실행 -> 정상 출력 확인
2. input() 있는 코드 -> 입력 패널 표시, 값 입력 후 실행 확인
3. turtle 코드 -> SVG 인라인 렌더링 확인
4. 에러 코드 -> 빨간색 에러 메시지 확인
5. 다크모드에서 출력 영역 정상 표시 확인
6. 빌드 & 배포 후 프로덕션 확인

## 구현 일자
- 2026-03-19 완료
