# PyMaster - 라이브러리 퀴즈 & 배지 추가 계획

## 개요
퀴즈 센터에 라이브러리 관련 퀴즈 4개(40문제)를 추가하고, 도장깨기에 라이브러리 퀴즈 관련 배지 8개를 추가한다.

- **구현일**: 2026-03-19
- **변경 전**: 퀴즈 4개 (48문제), 배지 28개
- **변경 후**: 퀴즈 8개 (88문제), 배지 36개

---

## 1. 추가 퀴즈 4개 (각 10문제)

| 키 | 제목 | 범위 | 시간 | 통과 |
|---|---|---|---|---|
| `lib-standard` | 표준 라이브러리 퀴즈 | os/sys, math/cmath, json, datetime | 600초 | 70점 |
| `lib-turtle` | Turtle 그래픽 퀴즈 | turtle 모듈 전체 (기초~응용) | 600초 | 70점 |
| `lib-data` | 데이터 분석 퀴즈 | NumPy, Pandas, Matplotlib/Seaborn | 600초 | 70점 |
| `lib-ai` | AI/머신러닝 퀴즈 | Scikit-learn, TensorFlow, PyTorch | 600초 | 70점 |

### 문제 구성

#### lib-standard (10문제) — os/sys, math, json, datetime
1. os.path.join() 용도
2. sys.argv 의미
3. os.listdir() 결과 타입
4. math.sqrt(16) 결과
5. math.pi 값
6. cmath와 math 차이
7. json.dumps() vs json.dump()
8. json.loads() 반환 타입
9. datetime.now() 사용법
10. timedelta 연산

#### lib-turtle (10문제) — turtle 그래픽
1. forward/right로 사각형
2. circle() 매개변수
3. begin_fill/end_fill
4. penup/pendown 역할
5. speed(0) 의미
6. onscreenclick 이벤트
7. 별 그리기 회전 각도 (144도)
8. goto(x, y) 사용법
9. screen.setup() 매개변수
10. shape() 가능한 값

#### lib-data (10문제) — NumPy, Pandas, Matplotlib
1. np.linspace() vs np.arange()
2. np.reshape() 사용법
3. ndarray.dtype 의미
4. pd.Series vs pd.DataFrame
5. df.describe() 반환 정보
6. df.dropna() vs df.fillna()
7. df.merge() 매개변수
8. plt.subplot() 사용법
9. plt.savefig() 용도
10. sns.pairplot() 용도

#### lib-ai (10문제) — Scikit-learn, TensorFlow, PyTorch
1. 지도학습 vs 비지도학습
2. KNN 알고리즘 원리
3. DecisionTree 장점
4. confusion_matrix 해석
5. accuracy_score 계산법
6. Keras compile() 매개변수
7. optimizer 종류 (SGD, Adam)
8. loss function 선택 기준
9. epoch vs batch 차이
10. torch.tensor vs np.array 차이

---

## 2. 추가 배지 8개

### Bronze (1개)
| ID | 제목 | 아이콘 | 조건 |
|---|---|---|---|
| `lib-first-quiz` | 라이브러리 입문 | fa-solid fa-terminal | 표준 라이브러리 퀴즈 통과 |

### Silver (2개)
| ID | 제목 | 아이콘 | 조건 |
|---|---|---|---|
| `turtle-quiz` | 거북이 마스터 | fa-solid fa-pen-ruler | Turtle 퀴즈 통과 |
| `lib-data-quiz` | 데이터 분석 도전자 | fa-solid fa-chart-pie | 데이터 분석 퀴즈 통과 |

### Gold (3개)
| ID | 제목 | 아이콘 | 조건 |
|---|---|---|---|
| `lib-ai-quiz` | AI 탐험가 | fa-solid fa-brain | AI/ML 퀴즈 통과 |
| `lib-perfect-standard` | 표준 라이브러리 만점 | fa-solid fa-terminal | 표준 라이브러리 퀴즈 만점 |
| `lib-all-passed` | 라이브러리 정복자 | fa-solid fa-book-open | 라이브러리 퀴즈 4개 모두 통과 |

### Platinum (1개)
| ID | 제목 | 아이콘 | 조건 |
|---|---|---|---|
| `lib-all-perfect` | 라이브러리 퍼펙트 | fa-solid fa-award | 라이브러리 퀴즈 4개 모두 만점 |

---

## 3. 수정 파일 (4개)

### 3-1. `src/data/quizzes.js`
- `lib-standard`, `lib-turtle`, `lib-data`, `lib-ai` 4개 퀴즈 객체 추가
- 기존 `applied` 뒤에 배치

### 3-2. `src/data/lessons.js` → `levelInfo` 추가
- QuizCenter가 `levelInfo[quizId]`로 아이콘/색상을 참조
- 4개 퀴즈 키에 대한 levelInfo 항목 추가:

```javascript
'lib-standard': { title: '표준 라이브러리', icon: 'fa-solid fa-terminal', color: '#6366F1' },
'lib-turtle':   { title: 'Turtle 그래픽',   icon: 'fa-solid fa-pen-ruler', color: '#14B8A6' },
'lib-data':     { title: '데이터 분석',     icon: 'fa-solid fa-chart-pie', color: '#F59E0B' },
'lib-ai':       { title: 'AI/머신러닝',     icon: 'fa-solid fa-brain',     color: '#EC4899' },
```

### 3-3. `src/data/badges.js`
- 7개 새 배지 추가 (각 티어별 적절한 위치에 삽입)

### 3-4. `src/contexts/BadgeContext.jsx`
- `all_quizzes_passed` 조건: `>= 4` → `>= 8` (전체 퀴즈 8개)
- `all_quizzes_perfect` 조건: `>= 4` → `>= 8`
- 새 조건 타입 `lib_quizzes_passed`: 라이브러리 4개 퀴즈 모두 70점 이상
- 새 조건 타입 `lib_quizzes_perfect`: 라이브러리 4개 퀴즈 모두 만점

---

## 4. 검증 체크리스트

- [x] `npm run build` 성공
- [ ] 퀴즈 센터에 8개 카드 표시 (기존 4 + 신규 4)
- [ ] 각 라이브러리 퀴즈 시작/풀기/결과 정상 동작
- [ ] 도장깨기에 새 배지 표시 (잠금 상태)
- [ ] 라이브러리 퀴즈 통과 시 해당 배지 자동 획득 + 알림
- [ ] "퀴즈 챔피언" / "퍼펙트 마스터" 배지 조건이 8개 퀴즈 기준으로 동작
