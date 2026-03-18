// === 6단계: IF 조건문 ===
const step6 = [
  {
    name: 'if1',
    title: '합격/불합격 판단',
    desc: '60점 기준 if-else',
    code: `# === 합격/불합격 판단 프로그램 ===
# if-else 문으로 60점 이상이면 합격, 아니면 불합격을 출력합니다.

# score = int(input("성적을 입력하시오: "))
score = 85  # 성적 값 (직접 수정하여 테스트해보세요)

if score >= 60:            # score가 60 이상이면
    print("합격입니다.")    # 합격 출력
else:                      # 그렇지 않으면
    print("불합격입니다.")  # 불합격 출력`
  },
  {
    name: 'if2',
    title: '홀수/짝수 판별',
    desc: '% 연산자로 판별',
    code: `# === 홀수/짝수 판별 프로그램 ===
# % 연산자(나머지)로 홀수/짝수를 구분합니다.

# num = int(input("정수를 입력하시오: "))
num = 7  # 정수 값 (직접 수정하여 테스트해보세요)

if num % 2 == 0:           # num을 2로 나눈 나머지가 0이면
    print("짝수입니다.")    # 짝수
else:                      # 그렇지 않으면
    print("홀수입니다.")    # 홀수`
  },
  {
    name: 'if3',
    title: 'turtle로 양수/음수 표시',
    desc: 'if 조건에 따라 turtle 이동',
    code: `# === turtle로 양수/음수 표시 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

t.penup()
t.goto(100, 100)
t.write("거북이가 여기로 오면 양수입니다.")  # 양수 위치 라벨
t.goto(100, 0)
t.write("거북이가 여기로 오면 0입니다.")     # 0 위치 라벨
t.goto(100, -100)
t.write("거북이가 여기로 오면 음수입니다.")  # 음수 위치 라벨

t.goto(0, 0)
t.pendown()

# n = int(turtle.textinput("", "숫자를 입력하시오: "))
n = 5  # 숫자 값 (직접 수정하여 테스트해보세요)

# 조건에 따라 거북이 이동
if n > 0:
    t.goto(100, 100)     # 양수 위치
if n == 0:
    t.goto(100, 0)       # 0 위치
if n < 0:
    t.goto(100, -100)    # 음수 위치

turtle.done()`
  },
  {
    name: 'if4',
    title: '양수/0/음수 (elif)',
    desc: 'elif 기본 패턴',
    code: `# === 양수/0/음수 판별 (elif) ===
# if-elif-else 패턴으로 세 가지 경우를 구분합니다.

# num = int(input("정수를 입력하시오: "))
num = -3  # 정수 값 (직접 수정하여 테스트해보세요)

if num > 0:                # 양수인 경우
    print("양수입니다.")
elif num == 0:             # 0인 경우
    print("0입니다.")
else:                      # 음수인 경우
    print("음수입니다.")`
  },
  {
    name: 'if5',
    title: '양수/0/음수 (중첩 if)',
    desc: '중첩 if 구조',
    code: `# === 양수/0/음수 판별 (중첩 if) ===
# if 안에 if를 넣는 중첩(nested) 구조입니다.

# num = int(input("정수를 입력하시오: "))
num = 0  # 정수 값 (직접 수정하여 테스트해보세요)

if num >= 0:               # 0 이상인 경우
    if num == 0:           # 그 중에서 0인 경우
        print("0입니다.")
    else:                  # 0이 아닌 양수
        print("양수입니다.")
else:                      # 0 미만 (음수)
    print("음수입니다.")`
  },
  {
    name: 'elif',
    title: '양수/0/음수 판별',
    desc: 'if-elif-else 기본 예제',
    code: `# === 양수/0/음수 판별 (if-elif-else) ===
# elif는 else if를 줄인 것으로, 여러 조건을 순차 검사합니다.

# num = int(input("정수를 입력하시오: "))
num = 10  # 정수 값 (직접 수정하여 테스트해보세요)

if num > 0:
    print("양수입니다.")
elif num == 0:
    print("0입니다.")
else:
    print("음수입니다.")`
  },
  {
    name: 'nested',
    title: '중첩 if 예제',
    desc: '중첩 if로 부호 판별',
    code: `# === 중첩 if 예제 ===
# 바깥 if에서 양수/음수를 나누고, 안쪽 if에서 0을 구분합니다.

# num = int(input("정수를 입력하시오: "))
num = -5  # 정수 값 (직접 수정하여 테스트해보세요)

if num >= 0:
    if num == 0:
        print("0입니다.")
    else:
        print("양수입니다.")
else:
    print("음수입니다.")`
  },
  {
    name: 'coin',
    title: '동전 던지기',
    desc: 'random으로 앞면/뒷면',
    code: `# === 동전 던지기 게임 ===
# random 모듈로 0 또는 1을 생성하여 앞면/뒷면을 결정합니다.

import random

print("동전 던지기 게임을 시작합니다.")

coin = random.randrange(2)  # 0 또는 1 랜덤 생성

if coin == 0:
    print("앞면입니다.")   # 0이면 앞면
else:
    print("뒷면입니다.")   # 1이면 뒷면

print("게임이 종료되었습니다.")`
  },
  {
    name: 'coin2',
    title: '이미지 동전 던지기',
    desc: 'turtle GIF로 시각적 동전',
    code: `# === 이미지 동전 던지기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.
# (front.gif, back.gif 이미지 파일이 같은 폴더에 필요합니다)

import turtle
import random

screen = turtle.Screen()
image1 = "front.gif"       # 앞면 이미지
image2 = "back.gif"        # 뒷면 이미지
screen.addshape(image1)    # 이미지를 turtle 모양으로 등록
screen.addshape(image2)

t1 = turtle.Turtle()
coin = random.randrange(2)  # 0 또는 1

if coin == 0:
    t1.shape(image1)        # 앞면 이미지 표시
    t1.stamp()
else:
    t1.shape(image2)        # 뒷면 이미지 표시
    t1.stamp()

turtle.done()`
  },
  {
    name: 'fgame',
    title: '페널티킥 수비 게임',
    desc: '랜덤 방향 vs 사용자 선택',
    code: `# === 페널티킥 수비 게임 ===
# 컴퓨터가 랜덤으로 방향을 선택하고, 사용자 선택과 비교합니다.

import random

options = ["왼쪽", "중앙", "오른쪽"]  # 선택지 목록
computer_choice = random.choice(options)  # 컴퓨터 랜덤 선택

# user_choice = input("어디를 수비하시겠어요?(왼쪽, 중앙, 오른쪽) ")
user_choice = "중앙"  # 수비 방향 (직접 수정하여 테스트해보세요)

print(f"컴퓨터의 킥 방향: {computer_choice}")
print(f"당신의 수비 방향: {user_choice}")

if computer_choice == user_choice:
    print("수비에 성공하셨습니다!")    # 같으면 수비 성공
else:
    print("페널티킥이 성공하였습니다.")  # 다르면 골`
  },
  {
    name: 'movie',
    title: '영화 관람 나이 제한',
    desc: '15세 이상 판별',
    code: `# === 영화 관람 나이 제한 ===
# 15세 이상만 관람할 수 있는 영화의 나이 검사를 합니다.

print("안녕하세요? 두근두근 영화관입니다.")

# age = int(input("나이를 입력하시오: "))
age = 17  # 나이 (직접 수정하여 테스트해보세요)

if age >= 15:
    print("본 영화를 보실 수 있습니다.")     # 15세 이상
else:
    print("본 영화를 보실 수 없습니다.")     # 15세 미만`
  },
  {
    name: 'command',
    title: '시스템 명령어 처리',
    desc: 'if-elif로 명령 분기',
    code: `# === 시스템 명령어 처리 ===
# if-elif-else로 명령어에 따라 다른 동작을 수행합니다.

import os

# command = input("명령을 입력하시오: ")
command = "cwd"  # 명령어 (직접 수정하여 테스트해보세요: "cwd" 또는 "shutdown")

if command == "shutdown":
    print("컴퓨터가 곧 종료됩니다.")
    # os.system("shutdown /s /t 1")  # 실제 종료 명령 (주의!)
elif command == "cwd":
    cwd = os.getcwd()              # 현재 작업 디렉토리 가져오기
    print("Current working directory:", cwd)
else:
    print("알수 없는 명령어입니다.")`
  },
  {
    name: 'sing',
    title: '종달새 노래 조건',
    desc: '시간·날씨 and 복합 조건',
    code: `# === 종달새 노래 조건 ===
# and 연산자로 여러 조건을 동시에 만족하는지 확인합니다.

import random

time = random.randint(1, 24)  # 랜덤 시각 (1~24)
print("좋은 아침입니다. 지금 시각은 " + str(time) + "시 입니다.")

sunny = random.choice([True, False])  # 화창한 날씨 여부

if sunny:
    print("현재 날씨가 화창합니다.")
else:
    print("현재 날씨가 화창하지 않습니다.")

# 복합 조건: 6시~9시 사이 AND 화창한 날씨일 때만 노래
if time >= 6 and time < 9 and sunny:
    print("종달새가 노래를 합니다.")
else:
    print("종달새가 노래를 하지 않습니다.")`
  },
  {
    name: 'leap',
    title: '윤년 판별',
    desc: '4, 100, 400 복합 논리 연산',
    code: `# === 윤년 판별 프로그램 ===
# 윤년 조건: (4의 배수 AND 100의 배수가 아님) OR 400의 배수

# year = int(input("연도를 입력하시오: "))
year = 2024  # 연도 (직접 수정하여 테스트해보세요)

if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print(year, "년은 윤년입니다.")
else:
    print(year, "년은 윤년이 아닙니다.")`
  },
  {
    name: 'for_teller',
    title: '미래 예언 프로그램',
    desc: '랜덤+if로 8가지 예언',
    code: `# === 미래 예언 프로그램 ===
# 랜덤 숫자와 if-elif로 8가지 예언을 출력합니다.

import random

# name = input("이름: ")
name = "김파이"  # 이름 (직접 수정하여 테스트해보세요)

# question = input("무엇에 대하여 알고 싶은가요? ")
question = "오늘의 운세"  # 질문

print(name + "님", "\\"", question, "\\"에 대하여 질문 주셨군요.")
print("운명의 주사위를 굴려볼께요...")

answers = random.randint(1, 8)  # 1~8 랜덤

if answers == 1:
    print("네, 확실합니다.")
elif answers == 2:
    print("전망이 좋은 거 같은 데요.")
elif answers == 3:
    print("믿으셔도 됩니다.")
elif answers == 4:
    print("글쎄요 아닌 거 같군요.")
elif answers == 5:
    print("한 점의 의심도 없이 맞습니다.")
elif answers == 6:
    print("그럼요, 명백히 올바른 선택을 했습니다.")
elif answers == 7:
    print("제 답변은 No입니다.")
else:
    print("나중에 다시 물어 보세요.")`
  },
];
export default step6;
