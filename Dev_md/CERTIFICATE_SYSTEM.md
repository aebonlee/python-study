# PyMaster - 수료증 발급 시스템

## 개요
퀴즈 합격 + 레슨 완료 기반 4단계 수료증 발급 기능. Canvas API로 PNG 이미지를 생성하여 다운로드할 수 있다.

## 수료증 등급 (4단계)

| 등급 | 명칭 | 조건 |
|------|------|------|
| Bronze | 입문자 수료증 | 기초 레슨 전체 완료 + 기초 퀴즈 합격(>=70) |
| Silver | 중급자 수료증 | 기초+중급 레슨 전체 완료 + 기초+중급 퀴즈 합격 |
| Gold | 고급자 수료증 | 기초+중급+고급 레슨 전체 완료 + 기초+중급+고급 퀴즈 합격 |
| Master | 마스터 수료증 | 전체 레슨 완료(100%) + 8개 퀴즈 전체 합격(>=70) |

## 자격 판별 로직

```javascript
const CERT_REQUIREMENTS = {
  bronze: {
    levels: ['basics'],
    quizzes: ['basics']
  },
  silver: {
    levels: ['basics', 'intermediate'],
    quizzes: ['basics', 'intermediate']
  },
  gold: {
    levels: ['basics', 'intermediate', 'advanced'],
    quizzes: ['basics', 'intermediate', 'advanced']
  },
  master: {
    levels: ['basics', 'intermediate', 'advanced', 'applied'],
    quizzes: ['basics', 'intermediate', 'advanced', 'applied',
              'lib-standard', 'lib-turtle', 'lib-data', 'lib-ai']
  }
}
```

- **레벨 완료 체크**: 해당 레벨의 모든 레슨이 `completedLessons` Set에 포함
- **퀴즈 합격 체크**: `getQuizBestScore(quizId) >= 70` (passingScore)

## 수료증 이미지 디자인 (Canvas API)

- 크기: 800x566 (A5 비율)
- 등급별 테두리/배경 색상:
  - Bronze: #CD7F32 (구리색)
  - Silver: #C0C0C0 (은색)
  - Gold: #FFD700 (금색)
  - Master: #306998 (Python Blue)
- Python 로고 색상 활용 (Blue #306998, Yellow #FFD43B)
- 포함 정보: 사용자 이름, 등급명, 발급일, 통계(레슨/퀴즈 점수/진행률)
- 더블 보더, 코너 장식, 장식 라인, 인장 등 디테일 포함

## 변경 파일

| 파일 | 변경 |
|------|------|
| `src/components/Certificate.jsx` | 신규 — Canvas API 수료증 이미지 생성 + PNG 다운로드 |
| `src/pages/MyPage.jsx` | 수료증 섹션 추가 (학습 통계 아래, 배지 위) |
| `src/styles/mypage.css` | 수료증 카드 그리드, 획득/잠금 상태, 다크모드, 반응형 |

## MyPage 수료증 UI

```
[학습 통계 그리드]          <- 기존
---
수료증                      <- 신규
[Bronze] [Silver] [Gold]  [Master]
 획득!    2/4     잠금      잠금
다운로드  진행중  0/6 조건  0/12 조건
---
[획득 배지]                 <- 기존
```

- 4개 등급 카드 가로 배치 (반응형: 2열)
- 획득한 등급: 초록 "획득!" 뱃지 + "보기 / 다운로드" 버튼
- 미획득 등급: 잠금 상태 + 진행률 바 + 남은 조건 태그
- 등급 카드 클릭 시 수료증 Canvas 미리보기 + PNG 다운로드 버튼 표시

## 다운로드 흐름

1. "보기 / 다운로드" 클릭 → Canvas에 수료증 렌더링
2. Canvas 미리보기가 카드 그리드 아래에 표시
3. "PNG 다운로드" 클릭 → `canvas.toDataURL('image/png')` → `<a download>` 트리거
4. 파일명: `PyMaster_{등급}_certificate.png`
