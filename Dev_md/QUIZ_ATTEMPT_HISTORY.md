# 퀴즈 응시 기록 테이블 구현

## 개요
퀴즈 점수 저장 방식을 단일 최고점수에서 응시 이력 기반으로 변경하고, 퀴즈 센터와 마이페이지에 응시 기록 테이블을 추가.

## 데이터 구조 변경

### 기존
```js
quizScores: { "basics": 85 }  // quizId → bestScore (number)
```

### 변경 후
```js
quizScores: {
  "basics": {
    attempts: [
      { score: 70, date: "2026-03-20T12:00:00Z" },
      { score: 85, date: "2026-03-21T14:30:00Z" }
    ],
    bestScore: 85
  }
}
```

## 마이그레이션
`loadProgress()` 시 `migrateQuizScores()` 함수가 자동 변환:
- `typeof value === 'number'` → `{ attempts: [], bestScore: value }`
- 기존 데이터는 날짜 정보가 없으므로 attempts 빈 배열로 보존
- 새 형식 데이터는 그대로 통과

## 수정 파일

### `src/contexts/ProgressContext.jsx`
- `migrateQuizScores()` 함수 추가 — 기존 데이터 자동 변환
- `saveQuizScore(quizId, score)` — attempts 배열에 `{ score, date }` 추가, bestScore 갱신
- `getQuizBestScore(quizId)` — bestScore 반환 (기존 코드 호환용)
- `getQuizAttempts(quizId)` — attempts 배열 반환
- Supabase 동기화: bestScore만 전송 (DB 스키마 변경 없음)

### `src/contexts/BadgeContext.jsx`
- `quizScores[id]` 직접 접근 → `getQuizBestScore(id)` / `?.bestScore` 사용으로 변경
- `all_quizzes_passed`, `all_quizzes_perfect` 등 조건도 `.bestScore` 참조

### `src/pages/QuizCenter.jsx`
- 퀴즈 카드: `quizScores[id]` → `getQuizBestScore(id)` 사용
- 응시 기록 테이블 섹션 추가 (카드 그리드 하단)

### `src/pages/MyPage.jsx`
- 퀴즈 성적표 4컬럼 → 7컬럼 확장
- 퀴즈 평균 점수 계산: `q.score` → `q.bestScore`

### `src/styles/quiz.css`
- `.quiz-history-section`, `.quiz-history-table` 스타일 추가
- 다크모드 + 반응형 대응

### `src/styles/mypage.css`
- `.quiz-attempt-cell`, `.quiz-attempt-score`, `.quiz-date-cell` 공통 스타일 추가

## 테이블 컬럼

| 퀴즈 | 1회차 | 2회차 | 3회차 | 최종 상태 | 최초 응시일 | 최종 응시일 |
|------|-------|-------|-------|----------|------------|------------|
| 퀴즈명 | 점수 | 점수 | 점수 | 통과/미통과 | YY.MM.DD | YY.MM.DD |

- 최근 3회 응시만 표시 (`attempts.slice(-3)`)
- 미응시 셀은 `-` 표시
- 점수는 통과 기준 이상이면 초록, 미만이면 빨강
- 날짜 형식: `YY.MM.DD`

## 호환성
- `QuizComponent.jsx`: `saveQuizScore(quizId, score)` 호출 인터페이스 동일 — 변경 불필요
- Supabase: bestScore만 전송하므로 DB 스키마 변경 불필요
- localStorage: 기존 데이터 자동 마이그레이션
