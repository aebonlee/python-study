const t=[{name:"caffe_lab",title:"카페 매출 계산기",desc:"메뉴별 판매량으로 총 매출 계산 (IPO 패턴)",code:`# === 카페 매출 계산기 (IPO 패턴) ===
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
print(f"총 매출: {total}원")`},{name:"atm_lab",title:"ATM 거스름돈 계산기",desc:"금액으로 500원·100원 동전 개수 계산",code:`# === ATM 거스름돈 계산기 ===
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
print(f"남은 금액: {remaining}원")`},{name:"temp_lab",title:"화씨→섭씨 변환",desc:"온도 변환 IPO 패턴 프로그램",code:`# === 화씨 → 섭씨 변환 (IPO 패턴) ===
# Input: 화씨 온도 입력
# Process: 변환 공식 적용
# Output: 섭씨 온도 출력

# ftemp = int(input("화씨온도: "))
ftemp = 212  # 화씨 온도 (직접 수정하여 테스트해보세요)

# 화씨 → 섭씨 변환 공식: C = (F - 32) × 5/9
ctemp = (ftemp - 32.0) * 5.0 / 9.0

print(f"화씨 {ftemp}도 = 섭씨 {ctemp:.1f}도")`},{name:"error",title:"정수 합 출력",desc:"두 정수를 입력받아 합 출력 (기본 I/O)",code:`# === 정수 합 출력 (기본 I/O) ===
# 두 정수를 입력받아 합을 출력하는 기본 프로그램입니다.

# x = int(input("첫 번째 정수: "))
x = 5  # 첫 번째 정수 (직접 수정하여 테스트해보세요)

# y = int(input("두 번째 정수: "))
y = 3  # 두 번째 정수 (직접 수정하여 테스트해보세요)

print(f"{x} + {y} = {x + y}")`}];export{t as default};
