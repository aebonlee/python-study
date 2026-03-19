// === 5단계: Turtle 그래픽 (기초) ===
const step5 = [
  {
    name: 'drawrect',
    title: '사각형 그리기',
    desc: 'forward()와 right()로 정사각형',
    code: `# === 사각형 그리기 ===

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
];
export default step5;
