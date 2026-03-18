const t=[{name:"add",title:"두 정수의 합",desc:"기본 산술 연산 예제",code:`# === 두 정수의 합 ===
# 두 정수를 입력받아 합을 구합니다.

# x = int(input("첫 번째 정수를 입력하시오: "))
x = 10  # 첫 번째 정수 (직접 수정하여 테스트해보세요)

# y = int(input("두 번째 정수를 입력하시오: "))
y = 20  # 두 번째 정수 (직접 수정하여 테스트해보세요)

sum = x + y  # 두 수의 합
print(x, "과", y, "의 합은", sum, "입니다.")`},{name:"avg",title:"세 수의 평균",desc:"세 정수의 평균 계산",code:`# === 세 수의 평균 계산 ===
# 세 정수를 입력받아 평균을 구합니다.

# x = int(input("첫 번째 수를 입력하시오: "))
x = 80  # 첫 번째 수 (직접 수정하여 테스트해보세요)

# y = int(input("두 번째 수를 입력하시오: "))
y = 90  # 두 번째 수

# z = int(input("세 번째 수를 입력하시오: "))
z = 85  # 세 번째 수

avg = (x + y + z) / 3  # 평균 = 합계 / 개수
print("평균 =", avg)`},{name:"bmi",title:"BMI 계산기",desc:"** 연산자로 BMI 계산",code:`# === BMI(체질량지수) 계산기 ===
# BMI = 몸무게(kg) / 키(m)의 제곱

# weight = float(input("몸무게를 kg 단위로 입력하시오: "))
weight = 70.0  # 몸무게(kg) (직접 수정하여 테스트해보세요)

# height = float(input("키를 미터 단위로 입력하시오: "))
height = 1.75  # 키(m) (직접 수정하여 테스트해보세요)

bmi = weight / (height ** 2)  # ** 연산자: 거듭제곱
print("당신의 BMI=", bmi)`},{name:"power",title:"복리 계산",desc:"a*(1+r)**n 복리 공식",code:`# === 복리 계산 프로그램 ===
# 복리 공식: 최종금액 = 원금 × (1 + 이율)^기간

a = 1000   # 원금 (원)
r = 0.05   # 연이율 (5%)
n = 10     # 기간 (년)

# ** 연산자로 거듭제곱 계산
result = a * (1 + r) ** n
print(result)  # 10년 후 금액 출력`},{name:"mod",title:"나머지 연산",desc:"// 몫과 % 나머지 연산자",code:`# === 나머지 연산 프로그램 ===
# // 연산자: 정수 나눗셈(몫), % 연산자: 나머지

# p = int(input("분자를 입력하시오: "))
p = 17  # 분자 (직접 수정하여 테스트해보세요)

# q = int(input("분모를 입력하시오: "))
q = 5   # 분모 (직접 수정하여 테스트해보세요)

print("나눗셈의 몫=", p // q)      # 정수 나눗셈 (몫)
print("나눗셈의 나머지=", p % q)   # 나머지 연산

# number = int(input("정수를 입력하시오: "))
number = 7  # 홀짝 판별용 정수
print(number % 2)  # 0이면 짝수, 1이면 홀수

# 1000초를 분과 초로 변환
sec = 1000
min = 1000 // 60       # 분 계산 (몫)
remainder = 1000 % 60  # 초 계산 (나머지)
print(min, remainder)  # 16분 40초`},{name:"remainder1",title:"몫과 나머지 계산",desc:"입력값의 정수 나눗셈",code:`# === 몫과 나머지 계산 ===
# // 연산자: 정수 나눗셈(몫), % 연산자: 나머지

# p = int(input("분자를 입력하시오: "))
p = 23  # 분자 (직접 수정하여 테스트해보세요)

# q = int(input("분모를 입력하시오: "))
q = 7   # 분모 (직접 수정하여 테스트해보세요)

print("나눗셈의 몫=", p // q)      # 정수 나눗셈
print("나눗셈의 나머지=", p % q)   # 나머지`},{name:"remainder2",title:"1000초→분·초 변환",desc:"나머지 연산 실생활 응용",code:`# === 1000초 → 분/초 변환 ===
# 나머지 연산자를 실생활에 응용하는 예제입니다.

sec = 1000               # 전체 초
min = 1000 // 60          # 분으로 변환 (몫)
remainder = 1000 % 60     # 남은 초 (나머지)

print(min, "분", remainder, "초")  # 16분 40초`},{name:"comp",title:"복합 대입 연산자",desc:"+= -= 등 복합 연산자",code:`# === 복합 대입 연산자 ===
# += : 더한 후 대입, -= : 뺀 후 대입

x = 1000
print("초기값 x=", x)

x += 2    # x = x + 2 와 동일
print("x += 2 후의 x=", x)   # 1002

x -= 2    # x = x - 2 와 동일
print("x -= 2 후의 x=", x)   # 1000`},{name:"eqn",title:"2차 방정식의 근",desc:"판별식으로 실근 계산",code:`# === 2차 방정식의 근 구하기 ===
# ax² + bx + c = 0 의 실근을 계산합니다.
# 근의 공식: x = (-b ± √(b²-4ac)) / 2a

# a = float(input("a: "))
a = 1.0   # 계수 a (직접 수정하여 테스트해보세요)

# b = float(input("b: "))
b = -3.0  # 계수 b

# c = float(input("c: "))
c = 2.0   # 계수 c

r = b ** 2 - 4 * a * c  # 판별식 (Discriminant)

print("2개의 실근이 있는 경우만 계산할 수 있습니다.")
x1 = ((-b) + r ** 0.5) / (2 * a)  # 첫 번째 근
x2 = ((-b) - r ** 0.5) / (2 * a)  # 두 번째 근
print("2개의 실근:", x1, x2)`},{name:"math",title:"math 모듈 함수",desc:"pi, factorial, sqrt 등",code:`# === math 모듈 활용 ===
# math 모듈은 수학 함수와 상수를 제공합니다.

import math

# 원의 둘레 계산: 2πr
radius = 3
circ = 2 * math.pi * radius  # math.pi = 3.141592...
print("원의 둘레=", circ)

# 팩토리얼 계산: 7! = 5040
print("7!=", math.factorial(7))

# 두 실수가 거의 같은지 비교
print("6.999999999와 7의 비교=", math.isclose(6.999999999, 7))

# 자연 로그값 계산
print("log(3.4)=", math.log(3.4))

# 제곱근 계산
print("4의 제곱근=", math.sqrt(4.0))`},{name:"floateq",title:"부동소수점 비교",desc:"math.isclose() 안전 비교",code:`# === 부동소수점 비교 ===
# 실수(float) 계산은 미세한 오차가 발생할 수 있습니다.

import math

# 0.1 + 0.2는 정확히 0.3이 아닙니다!
a = 0.1 + 0.2
print("0.1 + 0.2 =", a)              # 0.30000000000000004
print(abs(a - 0.3) < 0.00000001)     # True (오차 범위 내에서 비교)

# math.isclose()로 안전하게 비교
print(math.isclose(3.14, 3.15))                 # False (차이가 큼)
print(math.isclose(3.141590003, 3.141590002))   # True (차이가 매우 작음)`},{name:"string",title:"문자열 연산 및 메서드",desc:"+, *, len(), split() 등",code:`# === 문자열 연산 및 메서드 ===
# 문자열에서 사용할 수 있는 다양한 연산과 메서드입니다.

print("Hello" + "World")         # 문자열 연결 (concatenation)
print("=" * 50)                  # 문자열 반복
print(len("Hello World"))        # 문자열 길이: 11

print('Hello' in "Hello World")  # 부분 문자열 포함 여부: True

text = " Hello World "
print(text.count("o"))    # 'o'가 나오는 횟수: 2
print(text.lower())       # 소문자로 변환
print(text.strip())       # 좌우 공백 제거
print(text.split())       # 공백 기준으로 분할 → 리스트`},{name:"slice",title:"문자열 슬라이싱",desc:"인덱스로 부분 문자열 추출",code:`# === 문자열 슬라이싱 ===
# s[시작:끝] → 시작 인덱스부터 끝 인덱스 직전까지 추출

s = "Monty Python"

# 인덱스: M=0, o=1, n=2, t=3, y=4, ' '=5, P=6, y=7, t=8, h=9, o=10, n=11
print(s[6:10])  # "Pyth" (인덱스 6~9)`},{name:"streq",title:"문자열 비교",desc:"==, < 연산자로 문자열 비교",code:`# === 문자열 비교 ===
# == : 같은지 비교, < > : 사전 순서(알파벳 순) 비교

s1 = "Audrey Hepburn"
s2 = "Audrey Hepburn"
print(s1 == s2)  # True (내용이 같음)

s1 = "Audrey Hepburn"
s2 = "Grace Kelly"
print(s1 < s2)   # True (A < G, 사전순 비교)`},{name:"quiz",title:"산수 퀴즈",desc:"덧셈·뺄셈 퀴즈 출제",code:`# === 산수 퀴즈 프로그램 ===
# 간단한 산수 문제를 풀어봅니다.

print("산수 퀴즈에 오신 것을 환영합니다.\\n")

# ans = int(input("2 + 5 = "))
ans = 7  # 2+5의 답 (직접 수정하여 테스트해보세요)
print("2 + 5 =", ans, "→", ans == 2 + 5)  # 정답 확인

# ans = int(input("7 - 6 = "))
ans = 1  # 7-6의 답
print("7 - 6 =", ans, "→", ans == 7 - 6)

# ans = int(input("2 ** 3 = "))
ans = 8  # 2**3의 답
print("2 ** 3 =", ans, "→", ans == 2 ** 3)`},{name:"quiz2",title:"파이썬 상식 퀴즈",desc:"파이썬 관련 문자열 퀴즈",code:`# === 파이썬 상식 퀴즈 ===
# 파이썬 관련 상식을 문자열 비교로 확인합니다.

# s = input("세상에서 가장 쉬운 프로그래밍 언어는? ")
s = "파이썬"  # 정답 (직접 수정하여 테스트해보세요)
print("Q: 세상에서 가장 쉬운 프로그래밍 언어는?", s, "→", s == "파이썬")

# s = input("파이썬에서 제곱 연산자는? ")
s = "**"  # 정답
print("Q: 파이썬에서 제곱 연산자는?", s, "→", s == "**")

# s = input("프로그래밍 언어에서 텍스트를 무엇이라고 부르는가? ")
s = "문자열"  # 정답
print("Q: 프로그래밍 언어에서 텍스트를 무엇이라고 부르는가?", s, "→", s == "문자열")`}];export{t as default};
