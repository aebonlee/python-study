const t=[{name:"drawrect",title:"사각형 그리기",desc:"forward()와 right()로 정사각형",code:`# === 사각형 그리기 ===
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

turtle.done()    # 창 유지`},,{name:"draw_cir",title:"원 3개 그리기",desc:"circle()로 원 연속 그리기",code:`# === 원 3개 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

t.circle(50)     # 반지름 50의 원
t.circle(100)    # 반지름 100의 원
t.circle(150)    # 반지름 150의 원

turtle.done()`},,{name:"circle",title:"채운 원 그리기",desc:"begin_fill/end_fill 색칠 원",code:`# === 채운 원 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()

t.fillcolor("red")    # 채우기 색상: 빨강
t.begin_fill()        # 채우기 시작
t.circle(100)         # 반지름 100의 원
t.end_fill()          # 채우기 끝

turtle.done()`},,{name:"car",title:"자동차 그리기",desc:"사각형 몸체 + 원형 바퀴",code:`# === 자동차 그리기 ===
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

turtle.done()`},,{name:"house",title:"집 모양 그리기",desc:"삼각형 지붕 + 사각형 몸체",code:`# === 집 모양 그리기 ===
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

turtle.done()`},,{name:"draw_rect",title:"함수로 사각형 세 개",desc:"square() 함수 정의 후 호출",code:`# === 함수로 사각형 세 개 그리기 ===
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

turtle.done()`},,{name:"drawshape",title:"도형 이름 입력 그리기",desc:"textinput으로 도형 선택",code:`# === 도형 이름 입력 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")

# s = turtle.textinput("", "도형을 입력하시오: ")
# 브라우저 실행 불가이므로 코드만 확인하세요

# 도형에 따라 다르게 그리기
shape = "square"  # "circle" 또는 "square"

if shape == "circle":
    t.circle(100)           # 원 그리기
elif shape == "square":
    for _ in range(4):      # 사각형 그리기
        t.forward(100)
        t.right(90)

turtle.done()`},,{name:"star",title:"별 모양 그리기",desc:"144도 회전으로 5각별",code:`# === 별 모양 그리기 ===
# [주의] turtle 모듈은 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

import turtle
t = turtle.Turtle()
t.shape("turtle")
t.color("blue")

# 5각별: 144도씩 회전하면 별 모양이 됩니다.
for _ in range(5):
    t.forward(200)    # 200픽셀 전진
    t.right(144)      # 오른쪽 144도 회전

turtle.done()`},,{name:"spiral",title:"나선형 그리기 (간단)",desc:"색상 변화 나선형",code:`# === 나선형 그리기 (간단) ===
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

turtle.done()`},,{name:"polygon_lab",title:"N각형 그리기",desc:"for 루프로 입력한 n각형",code:`# === N각형 그리기 ===
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

turtle.done()`},,{name:"olympic",title:"올림픽 오륜기",desc:"5색 원으로 올림픽 로고",code:`# === 올림픽 오륜기 그리기 ===
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

turtle.done()`},,{name:"randw",title:"거북이 랜덤 걷기",desc:"랜덤 거리·각도 이동",code:`# === 거북이 랜덤 걷기 ===
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

turtle.done()`},,{name:"randrect",title:"랜덤 사각형 30개",desc:"랜덤 위치·색상·크기",code:`# === 랜덤 사각형 30개 ===
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

turtle.done()`},,{name:"fractal",title:"프랙탈 나무",desc:"재귀 함수로 가지 그리기",code:`# === 프랙탈 나무 ===
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

turtle.done()`},,{name:"draw_tree",title:"크리스마스 트리",desc:"함수 조합으로 트리 완성",code:`# === 크리스마스 트리 ===
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

turtle.done()`},,{name:"bar_graph",title:"막대 그래프 (turtle)",desc:"drawBar() 함수로 그래프",code:`# === 막대 그래프 (turtle) ===
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

turtle.done()`},,];export{t as default};
