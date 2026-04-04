// === 2단계: 입출력과 변수 ===
const step2 = [
  {
    name: 'string1',
    title: '이름 입력 후 인사 출력',
    desc: 'input()과 print() 기본 사용법',
    code: `# === 이름 입력 후 인사 출력 ===
# input() 함수로 사용자 입력을 받고, print()로 출력합니다.

# name = input("이름을 입력하시오: ")  # 원래는 사용자 입력
name = "홍길동"  # 이름 값 (직접 수정하여 테스트해보세요)

print(name, "씨, 안녕하세요?")           # 이름과 함께 인사 출력
print("파이썬에 오신 것을 환영합니다.")   # 환영 메시지 출력`
  },
  {
    name: 'chat',
    title: '대화형 입력 프로그램',
    desc: '이름과 나이를 입력받아 인삿말 출력',
    code: `# === 대화형 입력 프로그램 ===
# 이름과 나이를 입력받아 인사말을 출력합니다.

print('안녕하세요?')

# name = input('이름이 어떻게 되시나요? ')
name = "김파이"  # 이름 값 (직접 수정하여 테스트해보세요)

print('\\n만나서 반갑습니다.' + name + "씨")
print('이름의 길이는 다음과 같군요:' + str(len(name)))  # len()으로 문자열 길이 계산

# age = int(input("나이가 어떻게 되나요? "))
age = 20  # 나이 값 (직접 수정하여 테스트해보세요)

print("내년이면 " + str(age + 1) + "이 되시는군요.")  # 정수→문자열 변환 후 연결`
  },
  {
    name: 'var',
    title: '변수 타입 변경',
    desc: '동적 타입 변경(정수→실수→문자열)',
    code: `# === 변수의 동적 타입 변경 ===
# 파이썬은 동적 타입 언어로, 같은 변수에 다른 타입의 값을 저장할 수 있습니다.

x = 10               # 정수(int) 타입
print("x =", x)

x = 3.14             # 실수(float) 타입으로 변경
print("x =", x)

x = "Hello World!"   # 문자열(str) 타입으로 변경
print("x =", x)`
  },
  {
    name: 'type',
    title: '데이터 타입 확인',
    desc: 'type() 함수로 자료형 확인',
    code: `# === 데이터 타입 확인 프로그램 ===
# type() 함수는 값의 자료형(데이터 타입)을 반환합니다.

print(type("Hello World!"))  # <class 'str'>  → 문자열 타입
print(type(3.2))             # <class 'float'> → 실수 타입
print(type(17))              # <class 'int'>   → 정수 타입`
  },
  {
    name: 'sum',
    title: '두 변수의 합',
    desc: '변수에 값을 저장하고 합산',
    code: `# === 두 정수의 합 계산 ===
# input()으로 입력받은 문자열을 int()로 정수 변환합니다.

# t = input("정수를 입력하시오: ")
# x = int(t)
x = 10  # 첫 번째 정수 (직접 수정하여 테스트해보세요)

# t = input("정수를 입력하시오: ")
# y = int(t)
y = 20  # 두 번째 정수 (직접 수정하여 테스트해보세요)

print(x + y)  # 두 정수의 합 출력`
  },
  {
    name: 'sum1',
    title: '두 정수 합 (타입변환)',
    desc: 'int()로 입력값 변환 후 합산',
    code: `# === 두 변수의 합 (직접 대입) ===
# 변수에 값을 직접 저장하고 합산합니다.

x = 100              # 첫 번째 정수
y = 200              # 두 번째 정수
sum = x + y          # 합산 결과를 sum에 저장

print(x, "과", y, "의 합은", sum, "입니다.")  # 결과 출력`
  },
  {
    name: 'sum2',
    title: '두 정수 입력 후 합',
    desc: 'input()과 int() 조합 예제',
    code: `# === 두 정수 입력 후 합산 ===
# int(input())으로 사용자 입력을 정수로 변환합니다.

# x = int(input("첫 번째 정수를 입력하시오: "))
x = 15  # 첫 번째 정수 (직접 수정하여 테스트해보세요)

# y = int(input("두 번째 정수를 입력하시오: "))
y = 25  # 두 번째 정수 (직접 수정하여 테스트해보세요)

sum = x + y  # 합산
print(x, "과", y, "의 합은", sum, "입니다.")`
  },
  {
    name: 'fstring',
    title: 'f-string 형식 출력',
    desc: '상품 정보를 f-string으로 포맷팅',
    code: `# === f-string 형식 출력 ===
# f-string은 문자열 안에 {변수명}으로 값을 삽입하는 방법입니다.

price = 10000
print(f"상품의 가격은 {price}원입니다.")  # 변수를 문자열에 삽입

product = "coffee"   # 상품명
count = 3            # 수량
price = 10000        # 단가
print(f"상품 {product} {count}개의 가격은 {count*price}원입니다.")  # 수식도 가능

pi = 3.141592
print(f"원주율={pi:.2f}")  # :.2f → 소수점 둘째 자리까지 출력`
  },
  {
    name: 'initial',
    title: '이름 이니셜 추출',
    desc: '문자열 인덱싱으로 이니셜 조합',
    code: `# === 이름 이니셜 추출 ===
# 문자열 인덱싱([0])으로 첫 글자를 추출합니다.

# x = input("이름의 첫 번째 글자를 입력하시오: ")
x = "John"   # 첫 번째 이름 (직접 수정하여 테스트해보세요)

# y = input("이름의 두 번째 글자를 입력하시오: ")
y = "Paul"   # 두 번째 이름

# z = input("이름의 세 번째 글자를 입력하시오: ")
z = "Smith"  # 세 번째 이름

initial = x[0] + y[0] + z[0]  # 각 이름의 첫 글자를 추출하여 조합
print("\\n영어 이니셜은 " + initial + "입니다.")`
  },
  {
    name: 'journal',
    title: '스포츠 기사 자동 작성',
    desc: '입력값을 조합해 야구 기사 출력',
    code: `# === 스포츠 기사 자동 작성 프로그램 ===
# 사용자가 입력한 정보를 조합하여 야구 기사를 작성합니다.

# stadium = input("경기장은 어디입니까?")
stadium = "잠실야구장"  # 경기장 (직접 수정하여 테스트해보세요)

# winner = input("이긴팀은 어디입니까?")
winner = "한화"         # 이긴 팀

# loser = input("진팀은 어디입니까?")
loser = "삼성"          # 진 팀

# vip = input("우수선수는 누구입니까?")
vip = "김선수"          # 우수 선수

# score = input("스코어는 몇대몇입니까?")
score = "5대3"          # 점수

# 변수와 문자열을 연결하여 기사를 작성합니다.
print("")
print("===========================================")
print("오늘", stadium, "에서 야구 경기가 열렸습니다.")
print(winner, "과", loser, "은 치열한 공방전을 펼쳤습니다.")
print(vip, "이 맹활약을 하였습니다.")
print("결국", winner, "가", loser, "를", score, "로 이겼습니다.")
print("===========================================")`
  },
];
export default step2;
