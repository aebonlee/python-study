// === 4단계: 입력-처리-출력 (IPO) ===
const step4 = [
  {
    name: 'caffe_lab',
    title: '카페 매출 계산기',
    desc: '메뉴별 판매량으로 총 매출 계산 (IPO 패턴)',
    code: `# === 카페 매출 계산기 (IPO 패턴) ===
# Input(입력) → Process(처리) → Output(출력) 패턴의 대표 예제입니다.

# === Input (입력) ===
# 메뉴별 판매 수량을 입력받습니다.
# americano = int(input("아메리카노 판매량: "))
americano = 30    # 아메리카노 판매량 (직접 수정하여 테스트해보세요)

# latte = int(input("라떼 판매량: "))
latte = 20        # 라떼 판매량

# mocha = int(input("모카 판매량: "))
mocha = 10        # 모카 판매량

# === Process (처리) ===
# 메뉴별 가격을 곱하여 매출을 계산합니다.
price_americano = 4000   # 아메리카노 가격 (원)
price_latte = 4500       # 라떼 가격 (원)
price_mocha = 5000       # 모카 가격 (원)

total = (americano * price_americano +
         latte * price_latte +
         mocha * price_mocha)  # 총 매출

# === Output (출력) ===
print(f"아메리카노: {americano}잔 × {price_americano}원 = {americano * price_americano}원")
print(f"라떼: {latte}잔 × {price_latte}원 = {latte * price_latte}원")
print(f"모카: {mocha}잔 × {price_mocha}원 = {mocha * price_mocha}원")
print(f"총 매출: {total}원")`
  },
  {
    name: 'atm_lab',
    title: 'ATM 거스름돈 계산기',
    desc: '금액으로 500원·100원 동전 개수 계산',
    code: `# === ATM 거스름돈 계산기 ===
# 금액을 500원, 100원 동전으로 바꾸는 프로그램입니다.

# amount = int(input("금액을 입력하시오: "))
amount = 2700  # 금액 (직접 수정하여 테스트해보세요)

# 500원 동전 개수 계산
coins_500 = amount // 500        # 500원 동전 개수
remaining = amount % 500          # 500원으로 바꾸고 남은 금액

# 100원 동전 개수 계산
coins_100 = remaining // 100     # 100원 동전 개수
remaining = remaining % 100       # 100원으로 바꾸고 남은 금액

print(f"입력 금액: {amount}원")
print(f"500원 동전: {coins_500}개")
print(f"100원 동전: {coins_100}개")
print(f"남은 금액: {remaining}원")`
  },
  {
    name: 'temp_lab',
    title: '화씨→섭씨 변환',
    desc: '온도 변환 IPO 패턴 프로그램',
    code: `# === 화씨 → 섭씨 변환 (IPO 패턴) ===
# Input: 화씨 온도 입력
# Process: 변환 공식 적용
# Output: 섭씨 온도 출력

# ftemp = int(input("화씨온도: "))
ftemp = 212  # 화씨 온도 (직접 수정하여 테스트해보세요)

# 화씨 → 섭씨 변환 공식: C = (F - 32) × 5/9
ctemp = (ftemp - 32.0) * 5.0 / 9.0

print(f"화씨 {ftemp}도 = 섭씨 {ctemp:.1f}도")`
  },
  {
    name: 'int_sum',
    title: '정수 합 출력',
    desc: '두 정수를 입력받아 합 출력 (기본 I/O)',
    code: `# === 정수 합 출력 (기본 I/O) ===
# 두 정수를 입력받아 합을 출력하는 기본 프로그램입니다.

# x = int(input("첫 번째 정수: "))
x = 5  # 첫 번째 정수 (직접 수정하여 테스트해보세요)

# y = int(input("두 번째 정수: "))
y = 3  # 두 번째 정수 (직접 수정하여 테스트해보세요)

print(f"{x} + {y} = {x + y}")`
  },
  {
    name: 'bmi',
    title: 'BMI 체질량 지수',
    desc: '키·몸무게로 BMI 계산 및 판정',
    code: `# === BMI 체질량 지수 계산기 ===
# Input: 키(cm), 몸무게(kg)
# Process: BMI = 몸무게 / (키m)²
# Output: BMI 수치 및 판정 결과

# === Input (입력) ===
# height = float(input("키(cm): "))
height = 175  # 키 (직접 수정하여 테스트해보세요)

# weight = float(input("몸무게(kg): "))
weight = 70   # 몸무게

# === Process (처리) ===
height_m = height / 100               # cm → m 변환
bmi = weight / (height_m ** 2)        # BMI 공식

if bmi < 18.5:
    result = "저체중"
elif bmi < 23:
    result = "정상"
elif bmi < 25:
    result = "과체중"
else:
    result = "비만"

# === Output (출력) ===
print(f"키: {height}cm, 몸무게: {weight}kg")
print(f"BMI: {bmi:.1f}")
print(f"판정: {result}")`
  },
  {
    name: 'discount',
    title: '할인 가격 계산기',
    desc: '정가·할인율로 최종 결제 금액 계산',
    code: `# === 할인 가격 계산기 ===
# Input: 정가, 할인율
# Process: 할인 금액 계산 후 최종 가격 산출
# Output: 할인 내역 및 최종 결제 금액

# === Input (입력) ===
# price = int(input("정가(원): "))
price = 48000     # 정가 (직접 수정하여 테스트해보세요)

# rate = int(input("할인율(%): "))
rate = 15         # 할인율

# === Process (처리) ===
discount = price * rate / 100         # 할인 금액
final = price - discount              # 최종 가격

# === Output (출력) ===
print("=" * 30)
print(f"정가:      {price:>8,}원")
print(f"할인율:        {rate}%")
print(f"할인 금액: {discount:>8,.0f}원")
print("-" * 30)
print(f"결제 금액: {final:>8,.0f}원")
print("=" * 30)`
  },
  {
    name: 'time_calc',
    title: '초 → 시분초 변환',
    desc: '입력 초를 시·분·초로 분리 출력',
    code: `# === 초 → 시분초 변환기 ===
# Input: 총 초(seconds)
# Process: 시, 분, 초로 분리
# Output: 변환 결과 출력

# === Input (입력) ===
# total_sec = int(input("초를 입력하세요: "))
total_sec = 3661  # 총 초 (직접 수정하여 테스트해보세요)

# === Process (처리) ===
hours = total_sec // 3600             # 시간
remaining = total_sec % 3600
minutes = remaining // 60             # 분
seconds = remaining % 60              # 초

# === Output (출력) ===
print(f"입력: {total_sec}초")
print(f"변환: {hours}시간 {minutes}분 {seconds}초")`
  },
  {
    name: 'score_avg',
    title: '시험 점수 평균',
    desc: '3과목 점수로 합계·평균·합격 판정',
    code: `# === 시험 점수 평균 계산기 ===
# Input: 3과목 점수
# Process: 합계, 평균, 합격 여부 판정
# Output: 성적표 출력

# === Input (입력) ===
# kor = int(input("국어 점수: "))
kor = 85    # 국어 (직접 수정하여 테스트해보세요)

# eng = int(input("영어 점수: "))
eng = 72    # 영어

# math = int(input("수학 점수: "))
math = 90   # 수학

# === Process (처리) ===
total = kor + eng + math              # 합계
avg = total / 3                       # 평균

if avg >= 60:
    status = "합격"
else:
    status = "불합격"

# === Output (출력) ===
print("=" * 25)
print("     [ 성적표 ]")
print("=" * 25)
print(f"  국어:  {kor}점")
print(f"  영어:  {eng}점")
print(f"  수학:  {math}점")
print("-" * 25)
print(f"  합계:  {total}점")
print(f"  평균:  {avg:.1f}점")
print(f"  결과:  {status}")
print("=" * 25)`
  },
];
export default step4;
