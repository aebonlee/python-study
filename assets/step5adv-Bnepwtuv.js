const e=[{name:"spiral2",title:"나선형 그리기 (컬러)",desc:"검정 배경 6색 나선형",code:`# === 나선형 그리기 (컬러) ===
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

turtle.done()`},{name:"anim",title:"랜덤 색상 애니메이션",desc:"랜덤 색 동심원 반복",code:`# === 랜덤 색상 애니메이션 ===
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

turtle.done()`},{name:"ball_anim",title:"공 튀기기 애니메이션",desc:"중력·반발 물리 시뮬레이션",code:`# === 공 튀기기 애니메이션 ===
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

turtle.done()`},{name:"race",title:"토끼와 거북이 경주",desc:"두 turtle 랜덤 이동 경주",code:`# === 토끼와 거북이 경주 ===
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

turtle.done()`},{name:"click",title:"클릭 위치에 사각형",desc:"onscreenclick 이벤트",code:`# === 클릭 위치에 사각형 그리기 ===
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

turtle.done()`},{name:"paint",title:"마우스로 선 그리기",desc:"클릭 이동 + 펜 Up/Down 키",code:`# === 마우스로 선 그리기 ===
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

turtle.done()`},{name:"robot",title:"키보드로 거북이 조종",desc:"l/r 입력으로 방향 전환",code:`# === 키보드로 거북이 조종 ===
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

turtle.done()`},{name:"maze",title:"도로 주행 게임",desc:"방향키로 turtle 조종",code:`# === 도로 주행 게임 ===
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

turtle.done()`},{name:"angry",title:"포물선 발사 게임",desc:"각도·속도 조절 후 발사",code:`# === 포물선 발사 게임 ===
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
turtle.done()`},{name:"cookie",title:"과자 먹기 게임 (1개)",desc:"키보드로 강아지 이동해 과자 먹기",code:`# === 과자 먹기 게임 (1개) ===
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

turtle.done()`},{name:"cookie2",title:"과자 먹기 게임 (다중)",desc:"과자 10개 먹기 + 점수판",code:`# === 과자 먹기 게임 (다중) ===
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

turtle.done()`}];export{e as default};
