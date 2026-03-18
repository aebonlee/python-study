// === 7단계: 반복문 (While / For) ===
const step7 = [
  {
    name: 'forloop',
    title: 'for 루프 기본',
    desc: '리스트 순회 반복 출력',
    code: `# === for 루프 기본 ===
# 리스트의 각 요소를 하나씩 꺼내 반복합니다.

for i in [1, 2, 3, 4, 5]:       # 리스트의 요소를 순회
    print("방문을 환영합니다.")   # 5번 출력됨`
  },
  {
    name: 'forloop1',
    title: 'for 루프 변수 출력',
    desc: '반복 변수 i 값 출력',
    code: `# === for 루프 변수 출력 ===
# 반복 변수 i가 리스트의 각 값을 순서대로 갖습니다.

for i in [1, 2, 3, 4, 5]:
    print("i=", i)   # i가 1, 2, 3, 4, 5로 변화`
  },
  {
    name: 'forloop2',
    title: '9의 배수 출력',
    desc: 'for 루프로 구구단 일부',
    code: `# === 9의 배수 출력 ===
# for 루프로 9×1부터 9×5까지 출력합니다.

for i in [1, 2, 3, 4, 5]:
    print("9*", i, "=", 9 * i)  # 9×i 계산 결과 출력`
  },
  {
    name: 'range1',
    title: 'range() 기본',
    desc: 'range(5)로 5번 반복',
    code: `# === range() 기본 ===
# range(n)은 0부터 n-1까지의 숫자를 생성합니다.

for i in range(5):               # 0, 1, 2, 3, 4
    print("방문을 환영합니다!")    # 5번 반복 출력`
  },
  {
    name: 'range',
    title: 'range() 변형',
    desc: '시작·끝·증감 다양한 range()',
    code: `# === range() 변형 ===
# range(시작, 끝): 시작부터 끝-1까지
# range(시작, 끝, 증감): 증감값만큼 변화

for i in range(5, 10):           # 5, 6, 7, 8, 9
    print(f"변수 i의 값={i}")
print()

for i in range(1, 10, 3):       # 1, 4, 7 (3씩 증가)
    print(f"변수 i의 값={i}")
print()

for i in range(10, 7, -1):      # 10, 9, 8 (1씩 감소)
    print(f"변수 i의 값={i}")`
  },
  {
    name: 'while1',
    title: '1~10 합 (while)',
    desc: 'while 루프로 합산',
    code: `# === 1부터 10까지 합 (while) ===
# while 루프: 조건이 참인 동안 반복합니다.

count = 1    # 카운터 초기값
sum = 0      # 합계 초기값

while count <= 10:       # count가 10 이하인 동안 반복
    sum = sum + count    # 합계에 count 더하기
    count = count + 1    # count 1 증가

print("합계는", sum)     # 1+2+...+10 = 55`
  },
  {
    name: 'while2',
    title: '1~10 합 (while 변형)',
    desc: '동일 로직 while 변형',
    code: `# === 1부터 10까지 합 (while 변형) ===
# while1.py와 동일한 로직의 변형입니다.

count = 1
sum = 0

while count <= 10:
    sum = sum + count     # 누적 합산
    count = count + 1     # 카운터 증가

print("합계는", sum)      # 결과: 55`
  },
  {
    name: 'while3',
    title: 'while로 사각형 그리기',
    desc: 'while+turtle 사각형',
    code: `# === while로 사각형 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

i = 0
while i < 4:            # 4번 반복
    t.forward(100)      # 100픽셀 전진
    t.right(90)         # 오른쪽 90도 회전
    i = i + 1           # 카운터 증가

turtle.done()`
  },
  {
    name: 'inf_loop',
    title: '무한 루프 + break',
    desc: "'blue' 입력 시 탈출",
    code: `# === 무한 루프 + break ===
# while True는 무한 루프이며, break로 탈출합니다.

# 브라우저에서는 input()을 사용할 수 없으므로
# 시뮬레이션 데이터를 사용합니다.

lights = ["red", "green", "yellow", "blue"]  # 시뮬레이션 데이터

for light in lights:
    print(f"신호등 색상: {light}")
    if light == 'blue':     # 'blue'이면 탈출
        break

print('전진!!')`
  },
  {
    name: 'mtable',
    title: '구구단 출력',
    desc: 'for range(1,10) 구구단',
    code: `# === 구구단 출력 ===
# 입력한 단의 구구단을 출력합니다.

# dan = int(input("원하는 단은: "))
dan = 7  # 구구단 단 (직접 수정하여 테스트해보세요)

for i in range(1, 10, 1):      # 1부터 9까지 반복
    print(f"{dan}*{i}={dan*i}")  # f-string으로 포맷팅`
  },
  {
    name: 'mquiz',
    title: '랜덤 덧셈 퀴즈',
    desc: 'while True 반복 퀴즈',
    code: `# === 랜덤 덧셈 퀴즈 ===
# 랜덤 덧셈 문제를 풀어봅니다.
# 원래는 while True 무한 반복이지만, 3문제로 제한합니다.

import random

for _ in range(3):              # 3문제 출제
    x = random.randint(1, 100)  # 1~100 랜덤 정수
    y = random.randint(1, 100)

    answer = x + y              # 정답 자동 계산
    print(f"{x} + {y} = {answer}")

    if answer == x + y:
        print("잘했어요!!")
    else:
        print("다음번에는 잘할 수 있죠?")`
  },
  {
    name: 'login',
    title: '비밀번호 반복 입력',
    desc: '올바른 입력까지 while 반복',
    code: `# === 비밀번호 반복 입력 ===
# 올바른 비밀번호를 입력할 때까지 반복합니다.
# 브라우저에서는 input()을 사용할 수 없으므로 시뮬레이션합니다.

correct_password = "pythonisfun"

# 시뮬레이션: 비밀번호 시도 목록
attempts = ["hello", "python", "pythonisfun"]

for password in attempts:
    print(f"입력한 암호: {password}")
    if password == correct_password:
        print("로그인 성공")
        break
    else:
        print("틀렸습니다. 다시 입력하세요.")`
  },
  {
    name: 'guess',
    title: '숫자 맞추기 게임',
    desc: '1~100 높음/낮음 힌트',
    code: `# === 숫자 맞추기 게임 ===
# 1~100 사이의 랜덤 숫자를 맞추는 게임입니다.
# 브라우저에서는 input()을 사용할 수 없으므로 시뮬레이션합니다.

import random

answer = random.randint(1, 100)  # 정답: 1~100 랜덤
tries = 0

print("1부터 100 사이의 숫자를 맞추시오")
print(f"(정답 힌트: {answer})")   # 테스트용 힌트

# 시뮬레이션: 이진 탐색으로 맞추기
low, high = 1, 100
while True:
    guess = (low + high) // 2    # 중간값 추측
    tries += 1
    print(f"추측: {guess}")

    if guess < answer:
        print("낮음!")
        low = guess + 1
    elif guess > answer:
        print("높음!")
        high = guess - 1
    else:
        print(f"축하합니다! 시도횟수= {tries}")
        break`
  },
  {
    name: 'timer',
    title: '카운트다운 타이머',
    desc: 'for+sleep 카운트다운',
    code: `# === 카운트다운 타이머 ===
# time.sleep()으로 1초 간격 카운트다운합니다.
# [참고] winsound는 Windows 전용이므로 제외합니다.

import time

# seconds = int(input("초단위의 시간을 입력하시오: "))
seconds = 5  # 카운트다운 초 (직접 수정하여 테스트해보세요)

for i in range(seconds, 0, -1):    # 역순 반복
    print(f"{i}초 남았습니다.")
    time.sleep(1)                   # 1초 대기

print("시간 종료!")`
  },
  {
    name: 'encrypt',
    title: '문자 코드 암호화',
    desc: '코드값 +1로 암호문 생성',
    code: `# === 문자 코드 암호화 (시저 암호) ===
# 각 문자의 유니코드 값을 1씩 증가시켜 암호화합니다.

plain_text = "Love will find a way."  # 평문

encrypted_text = ""                    # 암호문 (빈 문자열로 시작)

for c in plain_text:                   # 평문의 모든 글자에 대해 반복
    x = ord(c)                         # 글자의 유니코드 값을 구함
    x = x + 1                          # 코드값을 1 증가
    cc = chr(x)                        # 증가된 코드값의 문자를 구함
    encrypted_text = encrypted_text + cc  # 암호문에 추가

print("평문:", plain_text)
print("암호문:", encrypted_text)`
  },
  {
    name: 'decrypt',
    title: '문자 코드 복호화',
    desc: '코드값 -1로 평문 복원',
    code: `# === 문자 코드 복호화 ===
# 암호문의 각 문자 코드값을 1 감소시켜 원래 문장을 복원합니다.

encrypted_text = "Mpwf!xjmm!gjoe!b!xbz/"  # 암호문

plain_text = ""                             # 복호화된 평문

for c in encrypted_text:                    # 암호문의 모든 글자에 대해 반복
    x = ord(c)                              # 글자의 유니코드 값
    x = x - 1                               # 코드값을 1 감소
    cc = chr(x)                             # 감소된 코드값의 문자
    plain_text = plain_text + cc            # 평문에 추가

print("암호문:", encrypted_text)
print("복호화:", plain_text)`
  },
  {
    name: 'count',
    title: '모음 개수 세기',
    desc: '문자열에서 a,e,i,o,u 카운트',
    code: `# === 모음 개수 세기 ===
# 문자열에서 영어 모음(a, e, i, o, u)의 개수를 셉니다.

def countVowel(string):
    """문자열에서 모음의 개수를 반환하는 함수"""
    count = 0
    for ch in string:                     # 문자열의 각 문자를 순회
        if ch in ['a', 'e', 'i', 'o', 'u']:  # 모음인지 확인
            count += 1                    # 모음이면 카운트 증가
    return count

# s = input("문자열을 입력하시오: ")
s = "Hello Python Programming"  # 문자열 (직접 수정하여 테스트해보세요)

n = countVowel(s)
print(f"입력 문자열: {s}")
print(f"모음의 개수는 {n}개입니다.")`
  },
  {
    name: 'remove_words',
    title: '단어 리스트 제거',
    desc: 'for 루프로 특정 단어 제거',
    code: `# === 단어 리스트 제거 ===
# 문자열에서 특정 단어를 제거합니다.

s = "You said some winds blow forever and I didn't understand"
list1 = s.split()  # 공백 기준으로 분리하여 리스트로 변환

remove_words = ['some', 'forever']  # 제거할 단어 목록

print("입력 문자열:")
print(s)
print("삭제 단어들:")
print(remove_words)

# 삭제 단어를 제외한 새 리스트 생성
result = [word for word in list1 if word not in remove_words]

print("삭제 후 남은 단어들:")
print(result)`
  },
  {
    name: 'lotto',
    title: '로또 번호 생성기',
    desc: '중복 없이 6개 번호 뽑기',
    code: `# === 로또 번호 생성기 ===
# 1~45 사이에서 중복 없이 6개의 번호를 뽑습니다.

import random

def getLotto():
    """중복 없는 6개의 로또 번호를 생성하는 함수"""
    numbers = []
    while len(numbers) < 6:                 # 6개가 될 때까지 반복
        n = random.randint(1, 45)           # 1~45 랜덤 정수
        if n not in numbers:                # 중복 검사
            numbers.append(n)               # 중복이 아니면 추가
    return numbers

print(f"생성된 로또번호: {getLotto()}")`
  },
];
export default step7;
