// === 6단계: Turtle 그래픽 (응용) ===
const step6 = [
  {
    name: 'race',
    title: '토끼와 거북이 경주',
    desc: '두 turtle 랜덤 이동 경주',
    code: `# === 토끼와 거북이 경주 ===

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
export default step6;
