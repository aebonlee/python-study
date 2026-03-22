# PyMaster - 다국어(i18n) 구현 문서

## 개요

PyMaster 전체 사이트를 한국어/영어 이중 언어로 지원하도록 구현.
외부 라이브러리 없이 React Context API + localStorage 패턴으로 구현.

## 아키텍처

### 핵심 파일

| 파일 | 역할 |
|------|------|
| `src/contexts/LanguageContext.jsx` | 언어 상태 관리 (lang, t(), localizedField()) |
| `src/locales/ko.js` | 한국어 UI 문자열 (~500키) |
| `src/locales/en.js` | 영어 UI 문자열 (~500키) |

### Context API 구조

```
LanguageProvider (lang 상태)
 ├── t('key.subkey')         → UI 문자열 번역
 ├── localizedField(item, 'field')  → 데이터 필드 번역
 ├── lang                    → 현재 언어 ('ko' | 'en')
 └── setLang(lang)           → 언어 변경 + localStorage 저장
```

### Provider 순서 (App.jsx)

```
ErrorBoundary
 └── ThemeProvider
      └── LanguageProvider  ← 추가
           └── AuthProvider
                └── ProgressProvider
                     └── BadgeProvider
                          └── AppLayout
```

### localStorage 키

| 키 | 값 | 기본값 |
|----|-----|--------|
| `pymaster-lang` | `'ko'` \| `'en'` | `'ko'` |

## 번역 패턴

### 1. UI 문자열 → `t('key')` 함수

```jsx
const { t } = useLanguage();
<h1>{t('home.title')}</h1>
<p>{t('home.subtitle')}</p>
```

dot-notation으로 중첩 키 접근. 키가 없으면 키 문자열 그대로 반환 (fallback).

### 2. 데이터 필드 → `localizedField(item, 'field')` 헬퍼

```jsx
const { localizedField } = useLanguage();
// item = { title: '입출력', titleEn: 'I/O & Variables' }
<h3>{localizedField(item, 'title')}</h3>  // 영어 모드 → 'I/O & Variables'
```

`fieldEn` 패턴: 영어 모드에서 `item[field + 'En']`을 먼저 탐색, 없으면 `item[field]` 반환.

### 3. 교육 콘텐츠 → `lang` 분기

```jsx
const { lang } = useLanguage();

{lang === 'en' ? (
  <p>English content here...</p>
) : (
  <p>한국어 콘텐츠...</p>
)}
```

파이썬 학습 레슨(PythonLesson01~11)에서 사용.

### 4. 코드 예제 → `codeEn` / `expectedOutputEn` 필드

```jsx
// LessonPage.jsx — localizedField()로 코드/출력 번역
initialCode={localizedField(sections[activeSection], 'code')}
expectedOutput={localizedField(sections[activeSection], 'expectedOutput') || ''}

// QuizComponent.jsx — 직접 분기
<code>{lang === 'en' && q.codeEn ? q.codeEn : q.code}</code>
```

코드 내 한글 주석/문자열/데이터를 영어로 번역. 한글 없는 섹션은 `codeEn` 생략 → fallback.

## 로케일 키 네임스페이스

| 네임스페이스 | 용도 | 키 수 (약) |
|-------------|------|-----------|
| `nav` | Navbar 메뉴 라벨 | 25 |
| `home` | Home 페이지 | 30 |
| `login` | 로그인 페이지 | 10 |
| `mypage` | 마이페이지 | 40 |
| `admin` | 관리자 페이지 | 30 |
| `teacher` | 선생님 페이지 | 30 |
| `quiz` | 퀴즈 센터 | 25 |
| `badge` | 배지 시스템 | 15 |
| `cert` | 수료증 | 15 |
| `practice` | 파이썬 실습 | 25 |
| `pythonLearning` | 파이썬 학습 | 15 |
| `guide` | 사용설명서 | 50 |
| `community` | 커뮤니티 | 25 |
| `level` | 레벨/레슨 | 20 |
| `common` | 공통 (닫기, 확인, 에러 등) | 20 |
| `footer` | 푸터 | 10 |

## 데이터 파일 영어 필드

| 파일 | 추가된 영어 필드 |
|------|-----------------|
| `src/data/lessons.js` | `titleEn`, `descriptionEn` (35개 레슨 + levelInfo) |
| `src/data/badges.js` | `nameEn`, `descriptionEn` (36개 배지) |
| `src/data/quizzes.js` | `titleEn`, `descriptionEn`, 문제/선택지/해설 En 필드 (88문제), `codeEn` (4문제) |
| `src/data/lessonContents.js` | `titleEn`, `contentEn`, `tipEn` (76섹션), `codeEn` (66섹션), `expectedOutputEn` (58섹션) |
| `src/data/pythonSteps/index.js` | `titleEn` (이미 존재, 13개 step) |

## 수정 파일 목록 (총 ~45개)

### Phase 1: 기반 구조 (3개 신규 + 1개 수정)
- `src/contexts/LanguageContext.jsx` (신규)
- `src/locales/ko.js` (신규)
- `src/locales/en.js` (신규)
- `src/App.jsx` (LanguageProvider 추가)

### Phase 2: 레이아웃 (2개)
- `src/components/layout/Navbar.jsx` — 언어 토글 (🌐 아이콘), 메뉴 라벨
- `src/components/layout/Footer.jsx` — 저작권, 링크 텍스트

### Phase 3: 주요 페이지 (6개)
- `src/pages/Home.jsx`
- `src/pages/Login.jsx`
- `src/pages/MyPage.jsx`
- `src/pages/Guide.jsx`
- `src/pages/BadgeCollection.jsx`
- `src/pages/QuizCenter.jsx`

### Phase 4-5: 데이터 파일 (4개)
- `src/data/lessons.js`
- `src/data/badges.js`
- `src/data/quizzes.js`
- `src/data/pythonSteps/index.js` (확인만, 이미 titleEn 존재)

### Phase 6-8: 관리자/선생님/커뮤니티/공통 (10개)
- `src/pages/AdminPage.jsx`
- `src/pages/TeacherPage.jsx`
- `src/pages/Community.jsx`
- `src/pages/CommunityPost.jsx`
- `src/pages/CommunityWrite.jsx`
- `src/components/CodeEditor.jsx`
- `src/components/QuizComponent.jsx`
- `src/components/Certificate.jsx`
- `src/components/ErrorBoundary.jsx`
- `src/contexts/BadgeContext.jsx`

### Phase 9-10: 파이썬 학습/실습 (14개)
- `src/pages/PythonPractice.jsx`
- `src/pages/PythonLearning.jsx`
- `src/pages/python-learning/PythonLesson01.jsx` ~ `PythonLesson11.jsx` (11개)
- `src/pages/LevelPage.jsx`
- `src/pages/LessonPage.jsx`

## Navbar 언어 토글

- 위치: 다크모드 토글 옆 (fa-globe 아이콘)
- 클릭 시 ko ↔ en 전환
- `<html lang>` 속성 자동 설정
- 선택 언어 localStorage 저장 → 새로고침 후 유지

## 번역 원칙

1. **UI 라벨** → `t('key')` 함수로 번역
2. **데이터 필드** → `localizedField(item, 'field')` + `fieldEn` 패턴
3. **교육 콘텐츠** (레슨) → 컴포넌트 내 `lang === 'en'` 분기
4. **코드 예제** → `codeEn` + `expectedOutputEn` 필드 (한글 포함 코드만, 66+58개 섹션)
5. **Fallback**: 영어 키 없으면 한국어 표시

## 빌드 결과 (i18n 적용 후)

| 청크 | 크기 | 비고 |
|------|------|------|
| index.js | 499KB | +46KB (locale 파일 포함) |
| index.css | 125KB | 변동 미미 |
| PythonLesson03.js | 84KB | +31KB (영어 콘텐츠 추가) |
| PythonLesson07.js | 73KB | +23KB |
| PythonLesson01.js | 69KB | +31KB |
| PythonLesson09.js | 69KB | +25KB |
| PythonLesson04.js | 67KB | +20KB |
| PythonLesson06.js | 66KB | +22KB |
| PythonLesson08.js | 65KB | +21KB |
| PythonLesson10.js | 60KB | +22KB |
| PythonLesson05.js | 54KB | +19KB |
| PythonLesson02.js | 53KB | +18KB |
| PythonLesson11.js | 46KB | +14KB |
| 총 청크 수 | 50개 | 변동 없음 |
