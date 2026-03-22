# 최근 변경 사항 — 2026-03-23

## 커밋 범위: cf3afdb → (현재)

---

## 1. 코드 예제 완전 영어화 (codeEn / expectedOutputEn)

### 배경
- 기존 i18n 작업으로 UI 텍스트(t() 함수), 레슨 콘텐츠(titleEn/contentEn/tipEn), 퀴즈 번역(questionEn/optionsEn/explanationEn)은 완료됨
- 그러나 `code` 필드(한글 주석, 한글 문자열, 한글 데이터)와 `expectedOutput` 필드(한글 출력 결과)는 미번역 상태
- 영어 모드에서 코드 에디터에 한글이 표시되는 문제 해결

### 구현 방식
- 기존 `localizedField()` 패턴 활용 — `titleEn`/`contentEn` 방식과 동일하게 `codeEn`, `expectedOutputEn` 필드 추가
- 한글이 없는 섹션(순수 영어 코드)은 `codeEn`/`expectedOutputEn` 생략 → localizedField fallback으로 원본 code 사용

### 컴포넌트 수정

#### LessonPage.jsx (2줄 수정)
```jsx
// Before:
initialCode={sections[activeSection].code}
expectedOutput={sections[activeSection].expectedOutput || ''}

// After:
initialCode={localizedField(sections[activeSection], 'code')}
expectedOutput={localizedField(sections[activeSection], 'expectedOutput') || ''}
```

#### QuizComponent.jsx (1줄 수정)
```jsx
// Before:
<code>{q.code}</code>

// After:
<code>{lang === 'en' && q.codeEn ? q.codeEn : q.code}</code>
```

### 데이터 파일 수정

#### lessonContents.js — 66 codeEn + 58 expectedOutputEn 추가

| 과정 | 레슨 범위 | codeEn | expectedOutputEn |
|------|-----------|--------|------------------|
| 기초 | hello-python ~ functions-basic (9개 레슨) | 20 | 13 |
| 중급/고급 | functions-advanced ~ typing-testing (13개 레슨) | 17 | 16 |
| 응용 | os-sys ~ tensorflow-pytorch (12개 레슨) | 29 | 29 |
| **합계** | **34개 레슨** | **66** | **58** |

번역 원칙:
- `# 한글 주석` → `# English comment`
- `"한글 문자열"` → `"English string"`
- `print(f"한글 {var}")` → `print(f"English {var}")`
- 한글 데이터 (`"이름": "김파이"`) → `"name": "Kim"`
- 변수명은 그대로 유지 (Python 코드 구조 동일)

#### quizzes.js — 4개 문제에 codeEn 추가

| 퀴즈 | 문제 | 변경 내용 |
|------|------|-----------|
| basics Q9 | f-string | `name = 'Python'`, optionsEn 업데이트 |
| intermediate Q2 | Dog 클래스 | `Dog("Buddy")`, optionsEn 업데이트 |
| intermediate Q3 | 리스트 컴프리헨션 | `# List of even numbers from 1-10` |
| intermediate Q5 | greet 함수 | `greet("Alice")`, optionsEn/explanationEn 업데이트 |

### 변경 파일

| 파일 | 변경 |
|------|------|
| `src/pages/LessonPage.jsx` | localizedField()로 code/expectedOutput 래핑 (2줄) |
| `src/components/QuizComponent.jsx` | codeEn 분기 추가 (1줄) |
| `src/data/lessonContents.js` | 66 codeEn + 58 expectedOutputEn 필드 추가 |
| `src/data/quizzes.js` | 4개 문제에 codeEn 추가 + optionsEn 수정 |

### 빌드 결과
- 빌드 성공 (153 modules, 6.38초)
- LessonPage.js: 163.79KB (codeEn/expectedOutputEn 데이터 포함)
- quizzes.js: 59.80KB
- 총 50개 청크
