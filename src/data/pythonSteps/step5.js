// === 5단계: Turtle 그래픽 ===
// [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
// 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.
const step5 = [
  {
    name: 'drawrect',
    title: '사각형 그리기',
    desc: 'forward()와 right()로 정사각형',
    code: `# === 사각형 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()       # 거북이 객체 생성
t.shape("turtle")         # 모양을 거북이로 설정

# 사각형을 그리기 위해 4번 반복:
# 100픽셀 전진 → 오른쪽 90도 회전
t.forward(100)   # 첫 번째 변
t.right(90)      # 오른쪽 90도 회전
t.forward(100)   # 두 번째 변
t.right(90)
t.forward(100)   # 세 번째 변
t.right(90)
t.forward(100)   # 네 번째 변
t.right(90)

turtle.done()    # 창 유지`
  },
  {
    name: 'draw_cir',
    title: '원 3개 그리기',
    desc: 'circle()로 원 연속 그리기',
    code: `# === 원 3개 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

t.circle(50)     # 반지름 50의 원
t.circle(100)    # 반지름 100의 원
t.circle(150)    # 반지름 150의 원

turtle.done()`
  },
  {
    name: 'circle',
    title: '채운 원 그리기',
    desc: 'begin_fill/end_fill 색칠 원',
    code: `# === 채운 원 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

t.fillcolor("red")    # 채우기 색상: 빨강
t.begin_fill()        # 채우기 시작
t.circle(100)         # 반지름 100의 원
t.end_fill()          # 채우기 끝

turtle.done()`
  },
  {
    name: 'car',
    title: '자동차 그리기',
    desc: '사각형 몸체 + 원형 바퀴',
    code: `# === 자동차 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

# 자동차 몸체 (사각형)
t.fillcolor("blue")
t.begin_fill()
for _ in range(2):           # 2번 반복 (가로-세로)
    t.forward(200)           # 가로 200픽셀
    t.right(90)
    t.forward(50)            # 세로 50픽셀
    t.right(90)
t.end_fill()

# 왼쪽 바퀴 (원)
t.penup()                    # 펜 올리기 (이동 시 선 안 그림)
t.goto(50, -50)              # 왼쪽 바퀴 위치
t.pendown()                  # 펜 내리기
t.fillcolor("black")
t.begin_fill()
t.circle(20)                 # 반지름 20의 원
t.end_fill()

# 오른쪽 바퀴 (원)
t.penup()
t.goto(150, -50)             # 오른쪽 바퀴 위치
t.pendown()
t.fillcolor("black")
t.begin_fill()
t.circle(20)
t.end_fill()

turtle.done()`
  },
  {
    name: 'house',
    title: '집 모양 그리기',
    desc: '삼각형 지붕 + 사각형 몸체',
    code: `# === 집 모양 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

# 사각형 몸체
t.fillcolor("yellow")
t.begin_fill()
for _ in range(4):
    t.forward(100)
    t.right(90)
t.end_fill()

# 삼각형 지붕
t.fillcolor("red")
t.begin_fill()
t.left(60)               # 60도 왼쪽 회전
t.forward(100)            # 지붕 왼쪽 변
t.right(120)              # 120도 오른쪽 회전
t.forward(100)            # 지붕 오른쪽 변
t.end_fill()

turtle.done()`
  },
  {
    name: 'draw_rect',
    title: '함수로 사각형 세 개',
    desc: 'square() 함수 정의 후 호출',
    code: `# === 함수로 사각형 세 개 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

def square(size):
    """정사각형을 그리는 함수"""
    for _ in range(4):       # 4번 반복
        t.forward(size)      # size 만큼 전진
        t.right(90)          # 오른쪽 90도 회전

# 크기가 다른 사각형 3개 그리기
square(50)    # 작은 사각형
square(100)   # 중간 사각형
square(150)   # 큰 사각형

turtle.done()`
  },
  {
    name: 'drawshape',
    title: '도형 이름 입력 그리기',
    desc: 'textinput으로 도형 선택',
    code: `# === 도형 이름 입력 그리기 ===
import turtle
t = turtle.Turtle()
t.shape("turtle")

# shape = turtle.textinput("", "도형을 입력하시오(circle/square): ")
shape = "square"  # "circle" 또는 "square"

# 도형에 따라 다르게 그리기
if shape == "circle":
    t.circle(100)           # 원 그리기
elif shape == "square":
    for _ in range(4):      # 사각형 그리기
        t.forward(100)
        t.right(90)

turtle.done()`
  },
  {
    name: 'star',
    title: '별 모양 그리기',
    desc: '144도 회전으로 5각별',
    code: `# === 별 모양 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")
t.color("yellow")

# 5각별: 144도씩 회전하면 별 모양이 됩니다.
for _ in range(5):
    t.forward(200)    # 200픽셀 전진
    t.right(144)      # 오른쪽 144도 회전

turtle.done()`
  },
  {
    name: 'spiral',
    title: '나선형 그리기 (간단)',
    desc: '색상 변화 나선형',
    code: `# === 나선형 그리기 (간단) ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.speed(0)             # 최고 속도

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

for i in range(100):
    t.color(colors[i % 6])   # 6가지 색상 순환
    t.forward(i * 2)          # 점점 길게 전진
    t.right(91)               # 91도 회전 (나선 효과)

turtle.done()`
  },
  {
    name: 'spiral2',
    title: '나선형 그리기 (컬러)',
    desc: '검정 배경 6색 나선형',
    code: `# === 나선형 그리기 (컬러) ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

screen = turtle.Screen()
screen.bgcolor("black")       # 배경색: 검정

t = turtle.Turtle()
t.speed(0)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]

for i in range(200):
    t.pencolor(colors[i % 6])  # 6가지 색상 순환
    t.forward(i * 1.5)         # 점점 길게
    t.right(89)                # 89도 회전

turtle.done()`
  },
  {
    name: 'polygon_lab',
    title: 'N각형 그리기',
    desc: 'for 루프로 입력한 n각형',
    code: `# === N각형 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

# n = int(input("몇각형을 그릴까요? "))
n = 6  # 6각형 (직접 수정하여 테스트해보세요)

angle = 360 / n  # 외각 = 360 / 변의 수

for _ in range(n):
    t.forward(100)    # 100픽셀 전진
    t.right(angle)    # 외각만큼 회전

turtle.done()`
  },
  {
    name: 'olympic',
    title: '올림픽 오륜기',
    desc: '5색 원으로 올림픽 로고',
    code: `# === 올림픽 오륜기 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.speed(3)
t.width(5)             # 선 두께: 5

# 5개의 원 색상과 위치
colors = ["blue", "black", "red", "yellow", "green"]
positions = [(-120, 0), (0, 0), (120, 0), (-60, -60), (60, -60)]

for i in range(5):
    t.penup()
    t.goto(positions[i])   # 각 원의 위치로 이동
    t.pendown()
    t.color(colors[i])     # 색상 설정
    t.circle(50)           # 반지름 50의 원

turtle.done()`
  },
  {
    name: 'anim',
    title: '랜덤 색상 애니메이션',
    desc: '랜덤 색 동심원 반복',
    code: `# === 랜덤 색상 애니메이션 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

t = turtle.Turtle()
t.speed(0)

for i in range(50):
    # 랜덤 색상 생성 (R, G, B 각각 0~1)
    r = random.random()
    g = random.random()
    b = random.random()
    t.color(r, g, b)
    t.circle(i * 3)       # 점점 커지는 동심원
    t.right(15)           # 15도씩 회전

turtle.done()`
  },
  {
    name: 'ball_anim',
    title: '공 튀기기 애니메이션',
    desc: '중력·반발 물리 시뮬레이션',
    code: `# === 공 튀기기 애니메이션 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

screen = turtle.Screen()
screen.setup(600, 400)

ball = turtle.Turtle()
ball.shape("circle")
ball.color("red")
ball.penup()

# 물리 변수
x, y = 0, 150       # 초기 위치
vx, vy = 3, 0       # 속도 (x방향, y방향)
gravity = -0.5      # 중력 가속도
bounce = -0.8       # 반발 계수

for _ in range(200):
    vy += gravity           # 중력 적용
    x += vx                 # x 이동
    y += vy                 # y 이동

    if y < -180:            # 바닥에 닿으면 반발
        y = -180
        vy *= bounce

    if x > 280 or x < -280:  # 벽에 닿으면 반사
        vx *= -1

    ball.goto(x, y)

turtle.done()`
  },
  {
    name: 'race',
    title: '토끼와 거북이 경주',
    desc: '두 turtle 랜덤 이동 경주',
    code: `# === 토끼와 거북이 경주 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

screen = turtle.Screen()
screen.setup(600, 400)

# 토끼 (빨강)
rabbit = turtle.Turtle()
rabbit.shape("turtle")
rabbit.color("red")
rabbit.penup()
rabbit.goto(-250, 50)

# 거북이 (녹색)
tortoise = turtle.Turtle()
tortoise.shape("turtle")
tortoise.color("green")
tortoise.penup()
tortoise.goto(-250, -50)

# 경주 시작
for _ in range(100):
    rabbit.forward(random.randint(1, 10))    # 토끼: 1~10 랜덤 이동
    tortoise.forward(random.randint(1, 5))   # 거북이: 1~5 랜덤 이동

    if rabbit.xcor() >= 250:
        print("토끼 승리!")
        break
    if tortoise.xcor() >= 250:
        print("거북이 승리!")
        break

turtle.done()`
  },
  {
    name: 'randw',
    title: '거북이 랜덤 걷기',
    desc: '랜덤 거리·각도 이동',
    code: `# === 거북이 랜덤 걷기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

t = turtle.Turtle()
t.shape("turtle")
t.speed(0)

for _ in range(100):
    distance = random.randint(10, 50)   # 랜덤 거리 (10~50)
    angle = random.randint(-180, 180)   # 랜덤 각도 (-180~180)
    t.right(angle)
    t.forward(distance)

turtle.done()`
  },
  {
    name: 'randrect',
    title: '랜덤 사각형 30개',
    desc: '랜덤 위치·색상·크기',
    code: `# === 랜덤 사각형 30개 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

t = turtle.Turtle()
t.speed(0)

for _ in range(30):
    # 랜덤 위치
    x = random.randint(-200, 200)
    y = random.randint(-200, 200)
    # 랜덤 크기
    size = random.randint(20, 80)
    # 랜덤 색상
    r = random.random()
    g = random.random()
    b = random.random()

    t.penup()
    t.goto(x, y)
    t.pendown()
    t.fillcolor(r, g, b)
    t.begin_fill()
    for _ in range(4):         # 사각형 그리기
        t.forward(size)
        t.right(90)
    t.end_fill()

turtle.done()`
  },
  {
    name: 'click',
    title: '클릭 위치에 사각형',
    desc: 'onscreenclick 이벤트',
    code: `# === 클릭 위치에 사각형 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

t = turtle.Turtle()
t.speed(0)

def draw_square(x, y):
    """클릭한 위치에 사각형을 그리는 함수"""
    t.penup()
    t.goto(x, y)         # 클릭 위치로 이동
    t.pendown()
    for _ in range(4):
        t.forward(50)    # 50픽셀 사각형
        t.right(90)

screen = turtle.Screen()
screen.onscreenclick(draw_square)  # 클릭 이벤트 등록

turtle.done()`
  },
  {
    name: 'paint',
    title: '마우스로 선 그리기',
    desc: '클릭 이동 + 펜 Up/Down 키',
    code: `# === 마우스로 선 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

t = turtle.Turtle()
t.shape("turtle")

def move_to(x, y):
    """클릭한 위치로 거북이 이동"""
    t.goto(x, y)

def pen_up():
    """u 키: 펜 올리기 (선 안 그림)"""
    t.penup()

def pen_down():
    """d 키: 펜 내리기 (선 그림)"""
    t.pendown()

screen = turtle.Screen()
screen.onscreenclick(move_to)    # 클릭 → 이동
screen.onkey(pen_up, "u")        # u 키 → 펜 올리기
screen.onkey(pen_down, "d")      # d 키 → 펜 내리기
screen.listen()                   # 키보드 입력 대기

turtle.done()`
  },
  {
    name: 'robot',
    title: '키보드로 거북이 조종',
    desc: 'l/r 입력으로 방향 전환',
    code: `# === 키보드로 거북이 조종 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

# 명령어: l=왼쪽, r=오른쪽, f=전진, q=종료
print("명령어: l(왼쪽), r(오른쪽), f(전진), q(종료)")

# 아래는 터미널 입력 기반이므로 브라우저에서는 데모용입니다.
commands = ["f", "f", "r", "f", "f", "l", "f"]

for cmd in commands:
    if cmd == "l":
        t.left(90)        # 왼쪽 90도 회전
    elif cmd == "r":
        t.right(90)       # 오른쪽 90도 회전
    elif cmd == "f":
        t.forward(50)     # 50픽셀 전진
    elif cmd == "q":
        break

turtle.done()`
  },
  {
    name: 'maze',
    title: '도로 주행 게임',
    desc: '방향키로 turtle 조종',
    code: `# === 도로 주행 게임 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

screen = turtle.Screen()
t = turtle.Turtle()
t.shape("turtle")
t.speed(3)

def go_up():
    t.setheading(90)      # 위쪽
    t.forward(30)

def go_down():
    t.setheading(270)     # 아래쪽
    t.forward(30)

def go_left():
    t.setheading(180)     # 왼쪽
    t.forward(30)

def go_right():
    t.setheading(0)       # 오른쪽
    t.forward(30)

# 방향키 이벤트 바인딩
screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")
screen.listen()

turtle.done()`
  },
  {
    name: 'angry',
    title: '포물선 발사 게임',
    desc: '각도·속도 조절 후 발사',
    code: `# === 포물선 발사 게임 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import math

t = turtle.Turtle()
t.shape("circle")
t.color("red")
t.speed(0)

# angle = int(input("발사 각도(도): "))
angle = 45    # 발사 각도 (직접 수정하여 테스트해보세요)

# speed = int(input("발사 속도: "))
speed = 30    # 발사 속도

# 각도를 라디안으로 변환
rad = math.radians(angle)
vx = speed * math.cos(rad)   # x 방향 속도
vy = speed * math.sin(rad)   # y 방향 속도

gravity = 1.0                  # 중력
x, y = -200, -150             # 시작 위치

t.penup()
t.goto(x, y)
t.pendown()

# 포물선 이동
while y >= -150:
    x += vx
    vy -= gravity              # 중력 적용
    y += vy
    t.goto(x, y)

print(f"착지 지점: x = {x:.0f}")
turtle.done()`
  },
  {
    name: 'fractal',
    title: '프랙탈 나무',
    desc: '재귀 함수로 가지 그리기',
    code: `# === 프랙탈 나무 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

t = turtle.Turtle()
t.speed(0)
t.left(90)         # 위를 향하게 시작

def draw_tree(branch_len):
    """재귀 함수로 나무를 그립니다."""
    if branch_len > 5:                    # 가지 길이가 5보다 크면
        t.forward(branch_len)             # 전진
        t.right(20)                       # 오른쪽 가지
        draw_tree(branch_len - 15)        # 재귀 호출 (더 짧은 가지)
        t.left(40)                        # 왼쪽 가지
        draw_tree(branch_len - 15)        # 재귀 호출
        t.right(20)                       # 원래 방향 복원
        t.backward(branch_len)            # 뒤로 이동

t.penup()
t.goto(0, -200)
t.pendown()
draw_tree(80)       # 초기 가지 길이: 80

turtle.done()`
  },
  {
    name: 'draw_tree',
    title: '크리스마스 트리',
    desc: '함수 조합으로 트리 완성',
    code: `# === 크리스마스 트리 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

t = turtle.Turtle()
t.speed(3)

def draw_triangle(size, color):
    """삼각형을 그리는 함수"""
    t.fillcolor(color)
    t.begin_fill()
    for _ in range(3):
        t.forward(size)
        t.left(120)
    t.end_fill()

# 나무 (초록 삼각형 3개, 위로 갈수록 작게)
t.penup()
t.goto(-60, -100)
t.pendown()
draw_triangle(120, "darkgreen")   # 아래층

t.penup()
t.goto(-50, -40)
t.pendown()
draw_triangle(100, "green")       # 중간층

t.penup()
t.goto(-40, 20)
t.pendown()
draw_triangle(80, "lightgreen")   # 윗층

# 기둥 (갈색 사각형)
t.penup()
t.goto(-15, -100)
t.pendown()
t.fillcolor("brown")
t.begin_fill()
for _ in range(2):
    t.forward(30)
    t.right(90)
    t.forward(40)
    t.right(90)
t.end_fill()

turtle.done()`
  },
  {
    name: 'bar_graph',
    title: '막대 그래프 (turtle)',
    desc: 'drawBar() 함수로 그래프',
    code: `# === 막대 그래프 (turtle) ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle

t = turtle.Turtle()
t.speed(3)

def drawBar(height, color):
    """막대 하나를 그리는 함수"""
    t.fillcolor(color)
    t.begin_fill()
    t.left(90)
    t.forward(height)       # 높이만큼 위로
    t.right(90)
    t.forward(40)           # 막대 너비: 40
    t.right(90)
    t.forward(height)       # 아래로 복귀
    t.left(90)
    t.end_fill()

# 데이터와 색상
data = [120, 80, 150, 60, 100]
colors = ["red", "blue", "green", "orange", "purple"]

t.penup()
t.goto(-150, -100)
t.pendown()

for i in range(len(data)):
    drawBar(data[i], colors[i])
    t.forward(10)           # 막대 간 간격

turtle.done()`
  },
  {
    name: 'cookie',
    title: '과자 먹기 게임 (1개)',
    desc: '키보드로 강아지 이동해 과자 먹기',
    code: `# === 과자 먹기 게임 (1개) ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

screen = turtle.Screen()
screen.setup(400, 400)

# 강아지 (플레이어)
player = turtle.Turtle()
player.shape("turtle")
player.color("blue")
player.penup()

# 과자 (목표)
cookie = turtle.Turtle()
cookie.shape("circle")
cookie.color("red")
cookie.penup()
cookie.goto(random.randint(-180, 180), random.randint(-180, 180))

def go_up():
    player.setheading(90)
    player.forward(20)

def go_down():
    player.setheading(270)
    player.forward(20)

def go_left():
    player.setheading(180)
    player.forward(20)

def go_right():
    player.setheading(0)
    player.forward(20)

screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")
screen.listen()

turtle.done()`
  },
  {
    name: 'cookie2',
    title: '과자 먹기 게임 (다중)',
    desc: '과자 10개 먹기 + 점수판',
    code: `# === 과자 먹기 게임 (다중) ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
import random

screen = turtle.Screen()
screen.setup(400, 400)

player = turtle.Turtle()
player.shape("turtle")
player.color("blue")
player.penup()

score = 0
score_display = turtle.Turtle()
score_display.penup()
score_display.goto(0, 170)
score_display.write(f"점수: {score}", align="center", font=("Arial", 16, "bold"))

# 과자 10개 생성
cookies = []
for _ in range(10):
    c = turtle.Turtle()
    c.shape("circle")
    c.color("red")
    c.shapesize(0.5)
    c.penup()
    c.goto(random.randint(-180, 180), random.randint(-180, 180))
    cookies.append(c)

def check_collision():
    """과자와 충돌 체크"""
    global score
    for c in cookies:
        if player.distance(c) < 20:
            c.hideturtle()
            cookies.remove(c)
            score += 1
            score_display.clear()
            score_display.write(f"점수: {score}", align="center", font=("Arial", 16, "bold"))

def go_up():
    player.setheading(90)
    player.forward(20)
    check_collision()

def go_down():
    player.setheading(270)
    player.forward(20)
    check_collision()

def go_left():
    player.setheading(180)
    player.forward(20)
    check_collision()

def go_right():
    player.setheading(0)
    player.forward(20)
    check_collision()

screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")
screen.listen()

turtle.done()`
  },
];
export default step5;
