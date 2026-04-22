import{b as d,j as e,L as s}from"./index-Hl1XUWna.js";function l(){const{t:n,lang:r}=d();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:r==="en"?"Week 5: Turtle Graphics & Functions (def)":"5주차: Turtle 그래픽과 함수(def)"}),e.jsx("p",{children:r==="en"?"Learning graphic programming and function abstraction with the Turtle module":"Turtle 모듈로 그래픽 프로그래밍과 함수 추상화 학습"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[r==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"Understand how to use the Turtle module and utilize various commands"}),e.jsx("li",{children:"Draw basic shapes (squares, triangles, circles, polygons) using Turtle"}),e.jsx("li",{children:"Understand how to define and call functions (def) and write them independently"}),e.jsx("li",{children:"Understand the concepts of Parameters and Return Values"}),e.jsx("li",{children:"Understand the concept of Abstraction and modularize code using functions"})]})]}),e.jsx("h2",{children:"1. What Is Turtle Graphics?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Turtle Graphics"})," originated from the ",e.jsx("strong",{children:"Logo programming language"})," developed by Professor ",e.jsx("strong",{children:"Seymour Papert"})," at MIT in 1967. It works by giving movement commands to a virtual turtle on the screen to draw pictures, designed to teach fundamental programming concepts in a visual and intuitive way."]}),e.jsxs("p",{children:["Python's ",e.jsx("code",{children:"turtle"})," module is a built-in module, so it can be used immediately without any additional installation. You can draw lines by moving the turtle, change colors, fill shapes, and perform various graphic operations."]}),e.jsx("h3",{children:"Understanding the Coordinate System"}),e.jsxs("p",{children:["Turtle Graphics uses a 2D coordinate system. The center of the screen is the origin ",e.jsx("code",{children:"(0, 0)"}),", with the right being the positive x-axis direction and up being the positive y-axis direction. The turtle initially faces right (east) at the origin. Angles are in degrees, with counterclockwise being the positive direction."]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Turtle 모듈의 사용법을 이해하고 다양한 명령어를 활용할 수 있다"}),e.jsx("li",{children:"Turtle을 이용하여 기본 도형(사각형, 삼각형, 원, 다각형)을 그릴 수 있다"}),e.jsx("li",{children:"함수(def)의 정의와 호출 방법을 이해하고 직접 작성할 수 있다"}),e.jsx("li",{children:"매개변수(Parameter)와 반환값(Return Value)의 개념을 이해한다"}),e.jsx("li",{children:"추상화(Abstraction) 개념을 이해하고 함수를 통해 코드를 모듈화할 수 있다"})]})]}),e.jsx("h2",{children:"1. Turtle 그래픽이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Turtle 그래픽"}),"은 1967년 MIT의 ",e.jsx("strong",{children:"Seymour Papert"})," 교수가 개발한",e.jsx("strong",{children:"Logo 프로그래밍 언어"}),"에서 유래했습니다. 화면 위의 가상 거북이(Turtle)에게 이동 명령을 내려 그림을 그리는 방식으로, 프로그래밍의 기본 개념을 시각적이고 직관적으로 학습할 수 있도록 설계되었습니다."]}),e.jsxs("p",{children:["파이썬의 ",e.jsx("code",{children:"turtle"})," 모듈은 기본 내장 모듈이므로 별도의 설치 없이 바로 사용할 수 있습니다. 거북이를 움직이며 선을 그리고, 색상을 바꾸고, 도형을 채우는 등 다양한 그래픽 작업이 가능합니다."]}),e.jsx("h3",{children:"좌표계 이해"}),e.jsxs("p",{children:["Turtle 그래픽은 2차원 좌표계를 사용합니다. 화면의 중앙이 원점 ",e.jsx("code",{children:"(0, 0)"}),"이며, 오른쪽이 x축 양의 방향, 위쪽이 y축 양의 방향입니다. 거북이는 처음에 원점에서 오른쪽(동쪽)을 향해 놓여 있습니다. 각도는 도(degree) 단위를 사용하며, 반시계 방향이 양의 각도입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Turtle Coordinate System":"Turtle 좌표계"}),e.jsx("pre",{children:e.jsx("code",{children:`#              y축 (90°)
#               ↑
#               |
#  (-x) ←------+------→ (+x)  ... 0° (초기 방향)
#  (180°)       |
#               ↓
#            (270°)
#
# 중심: (0, 0)
# 거북이 초기 위치: (0, 0), 방향: 0° (오른쪽)`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. Turtle Basic Setup"}),e.jsxs("p",{children:["To start a Turtle program, you first need to import the ",e.jsx("code",{children:"turtle"})," module and set up the screen and turtle object."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. Turtle 기본 설정"}),e.jsxs("p",{children:["Turtle 프로그램을 시작하려면 먼저 ",e.jsx("code",{children:"turtle"})," 모듈을 가져오고(import), 화면과 거북이 객체를 설정해야 합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Turtle Basic Setup Code":"Turtle 기본 설정 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

# ── 화면(Screen) 설정 ────────────────
screen = turtle.Screen()          # 화면 객체 생성
screen.title("나의 Turtle 그래픽")  # 창 제목 설정
screen.bgcolor("white")           # 배경색 설정
screen.setup(800, 600)            # 창 크기 설정 (가로, 세로)

# ── 거북이(Turtle) 객체 생성 ─────────
t = turtle.Turtle()
t.shape("turtle")    # 모양: "arrow", "turtle", "circle", "square", "triangle"
t.speed(3)           # 속도: 1(느림) ~ 10(빠름), 0(가장 빠름)
t.pensize(2)         # 펜 굵기 설정
t.pencolor("black")  # 펜 색상 설정

# ── 그리기 명령 ──────────────────────
t.forward(100)       # 앞으로 100 픽셀 이동
t.left(90)           # 왼쪽으로 90도 회전
t.forward(50)        # 앞으로 50 픽셀 이동

# ── 프로그램 종료 대기 ───────────────
turtle.done()        # 창을 닫지 않고 유지`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. Movement Commands in Detail"}),e.jsx("p",{children:"The main commands provided by the Turtle module can be categorized by function as follows. Learning the shorthand for each command allows you to write more concise code."}),e.jsx("h3",{children:"Movement Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Shorthand"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"forward(distance)"})}),e.jsx("td",{children:e.jsx("code",{children:"fd(distance)"})}),e.jsx("td",{children:"Move forward by distance pixels in the current direction"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"backward(distance)"})}),e.jsx("td",{children:e.jsx("code",{children:"bk(distance)"})}),e.jsx("td",{children:"Move backward by distance pixels"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"goto(x, y)"})}),e.jsx("td",{children:e.jsx("code",{children:"setpos(x, y)"})}),e.jsx("td",{children:"Move to coordinates (x, y)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setx(x)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Change only the x coordinate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sety(y)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Change only the y coordinate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"home()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Move to origin (0,0) and reset heading to 0 degrees"})]})]})]}),e.jsx("h3",{children:"Rotation Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Shorthand"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"left(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"lt(angle)"})}),e.jsx("td",{children:"Rotate left (counterclockwise) by angle degrees"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"right(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"rt(angle)"})}),e.jsx("td",{children:"Rotate right (clockwise) by angle degrees"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setheading(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"seth(angle)"})}),e.jsx("td",{children:"Set absolute heading to angle degrees"})]})]})]}),e.jsx("h3",{children:"Pen Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Shorthand"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"penup()"})}),e.jsx("td",{children:e.jsx("code",{children:"pu()"})}),e.jsx("td",{children:"Lift the pen (moving won't draw lines)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pendown()"})}),e.jsx("td",{children:e.jsx("code",{children:"pd()"})}),e.jsx("td",{children:"Lower the pen (moving will draw lines)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pensize(width)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Set pen thickness"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pencolor(color)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Set pen color"})]})]})]}),e.jsx("h3",{children:"Fill Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fillcolor(color)"})}),e.jsx("td",{children:"Set fill color"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"begin_fill()"})}),e.jsx("td",{children:"Start filling (shapes drawn after this will be filled)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"end_fill()"})}),e.jsx("td",{children:"End filling (the shape interior gets filled)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"color(pencolor, fillcolor)"})}),e.jsx("td",{children:"Set pen and fill color simultaneously"})]})]})]}),e.jsx("h3",{children:"Other Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Shorthand"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circle(radius)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Draw a circle with the given radius"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circle(radius, extent)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Draw an arc (extent = angle in degrees)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dot(size)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Draw a dot at the current position"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stamp()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Stamp the turtle shape at current position"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Clear all drawings (position remains)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reset()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Clear all and restore initial state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hideturtle()"})}),e.jsx("td",{children:e.jsx("code",{children:"ht()"})}),e.jsx("td",{children:"Hide the turtle"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"showturtle()"})}),e.jsx("td",{children:e.jsx("code",{children:"st()"})}),e.jsx("td",{children:"Show the turtle"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"write(text)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Write text at current position"})]})]})]}),e.jsx("h3",{children:"Information Query Commands"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Command"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Return Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"position()"})}),e.jsx("td",{children:"Return current coordinates"}),e.jsx("td",{children:e.jsx("code",{children:"(100.0, 50.0)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"heading()"})}),e.jsx("td",{children:"Return current heading (in degrees)"}),e.jsx("td",{children:e.jsx("code",{children:"90.0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isdown()"})}),e.jsx("td",{children:"True if pen is down"}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. 이동 명령어 상세"}),e.jsx("p",{children:"Turtle 모듈에서 제공하는 주요 명령어를 기능별로 분류하면 다음과 같습니다. 각 명령어의 축약형도 함께 익혀두면 코드를 간결하게 작성할 수 있습니다."}),e.jsx("h3",{children:"이동 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"축약형"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"forward(distance)"})}),e.jsx("td",{children:e.jsx("code",{children:"fd(distance)"})}),e.jsx("td",{children:"현재 방향으로 distance 픽셀 전진"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"backward(distance)"})}),e.jsx("td",{children:e.jsx("code",{children:"bk(distance)"})}),e.jsx("td",{children:"현재 방향의 반대로 distance 픽셀 후진"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"goto(x, y)"})}),e.jsx("td",{children:e.jsx("code",{children:"setpos(x, y)"})}),e.jsx("td",{children:"좌표 (x, y)로 이동"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setx(x)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"x 좌표만 변경"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sety(y)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"y 좌표만 변경"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"home()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"원점 (0,0)으로 이동, 방향 0도로 초기화"})]})]})]}),e.jsx("h3",{children:"회전 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"축약형"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"left(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"lt(angle)"})}),e.jsx("td",{children:"왼쪽(반시계 방향)으로 angle도 회전"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"right(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"rt(angle)"})}),e.jsx("td",{children:"오른쪽(시계 방향)으로 angle도 회전"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setheading(angle)"})}),e.jsx("td",{children:e.jsx("code",{children:"seth(angle)"})}),e.jsx("td",{children:"절대 방향을 angle도로 설정"})]})]})]}),e.jsx("h3",{children:"펜 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"축약형"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"penup()"})}),e.jsx("td",{children:e.jsx("code",{children:"pu()"})}),e.jsx("td",{children:"펜을 올림 (이동해도 선이 그려지지 않음)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pendown()"})}),e.jsx("td",{children:e.jsx("code",{children:"pd()"})}),e.jsx("td",{children:"펜을 내림 (이동하면 선이 그려짐)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pensize(width)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"펜 굵기 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pencolor(color)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"펜 색상 설정"})]})]})]}),e.jsx("h3",{children:"채우기 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fillcolor(color)"})}),e.jsx("td",{children:"채우기 색상 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"begin_fill()"})}),e.jsx("td",{children:"채우기 시작 (이후 그리는 도형이 채워짐)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"end_fill()"})}),e.jsx("td",{children:"채우기 종료 (도형 내부가 채워짐)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"color(pencolor, fillcolor)"})}),e.jsx("td",{children:"펜 색상과 채우기 색상을 동시에 설정"})]})]})]}),e.jsx("h3",{children:"기타 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"축약형"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circle(radius)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"반지름 radius인 원 그리기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"circle(radius, extent)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"호(arc) 그리기 (extent = 각도)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dot(size)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"현재 위치에 점 찍기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stamp()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"현재 위치에 거북이 도장 찍기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"그린 것을 모두 지우기 (위치 유지)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reset()"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"모두 지우고 초기 상태로 복원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hideturtle()"})}),e.jsx("td",{children:e.jsx("code",{children:"ht()"})}),e.jsx("td",{children:"거북이 숨기기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"showturtle()"})}),e.jsx("td",{children:e.jsx("code",{children:"st()"})}),e.jsx("td",{children:"거북이 보이기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"write(text)"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"현재 위치에 텍스트 출력"})]})]})]}),e.jsx("h3",{children:"정보 조회 명령어"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"명령어"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"반환 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"position()"})}),e.jsx("td",{children:"현재 좌표 반환"}),e.jsx("td",{children:e.jsx("code",{children:"(100.0, 50.0)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"heading()"})}),e.jsx("td",{children:"현재 방향 반환 (도 단위)"}),e.jsx("td",{children:e.jsx("code",{children:"90.0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isdown()"})}),e.jsx("td",{children:"펜이 내려져 있으면 True"}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Movement and Pen Command Example":"이동과 펜 명령어 사용 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

# 전진, 후진
t.forward(100)   # 앞으로 100 이동
t.backward(50)   # 뒤로 50 이동

# 회전
t.left(90)       # 왼쪽 90도 회전
t.forward(80)    # 전진

# 펜 올리기/내리기 (이동만, 선 없이)
t.penup()        # 펜 올리기
t.goto(-100, 0)  # (-100, 0)으로 이동 (선 안 그려짐)
t.pendown()      # 펜 내리기
t.forward(50)    # 이제 선이 그려짐

# 정보 조회
print(t.position())  # 현재 위치 출력
print(t.heading())   # 현재 방향 출력

turtle.done()`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. Drawing Basic Shapes"}),e.jsxs("p",{children:["The key principle when drawing shapes is that the ",e.jsx("strong",{children:"sum of exterior angles = 360 degrees"}),". To draw a regular n-gon, rotate by ",e.jsx("strong",{children:"360 / n"})," degrees at each vertex."]}),e.jsx("h3",{children:"Drawing Lines"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. 기본 도형 그리기"}),e.jsxs("p",{children:["도형을 그릴 때 핵심 원리는 ",e.jsx("strong",{children:"외각의 합 = 360°"}),"입니다. 정n각형을 그리려면 각 꼭짓점에서 ",e.jsx("strong",{children:"360 / n"})," 도씩 회전하면 됩니다."]}),e.jsx("h3",{children:"직선 그리기"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Drawing Lines":"직선 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()

# 단순 직선
t.forward(200)

# 대각선 (45도 방향)
t.penup()
t.home()
t.pendown()
t.left(45)
t.forward(150)

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Drawing a Square":"사각형 그리기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Drawing a Square (using loops)":"사각형 그리기 (반복문 활용)"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 사각형: 4번 반복 (전진 + 90도 회전) ──
# 외각 = 360 / 4 = 90도
for i in range(4):
    t.forward(100)  # 한 변의 길이: 100
    t.left(90)      # 왼쪽으로 90도 회전

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Drawing a Triangle":"삼각형 그리기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Drawing an Equilateral Triangle":"정삼각형 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 정삼각형: 3번 반복 (전진 + 120도 회전) ──
# 외각 = 360 / 3 = 120도
for i in range(3):
    t.forward(100)  # 한 변의 길이: 100
    t.left(120)     # 왼쪽으로 120도 회전

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Drawing Circles":"원 그리기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Drawing Circles (circle command)":"원 그리기 (circle 명령)"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 원 그리기 ──
# circle(반지름): 거북이의 왼쪽에 원의 중심이 위치
t.circle(50)     # 반지름 50인 원

# 위치를 이동하여 다른 크기의 원 그리기
t.penup()
t.goto(150, 0)
t.pendown()
t.circle(80)     # 반지름 80인 원

# 반원 그리기 (extent 매개변수 활용)
t.penup()
t.goto(-150, 0)
t.pendown()
t.circle(60, 180)  # 반지름 60, 180도만 그리기 = 반원

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Drawing Polygons (Generalization)":"다각형 그리기 (일반화)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Regular Polygon Generalization: Exterior Angle = 360/n":"정다각형 일반화: 외각 = 360/n"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(5)

# ── 정다각형 그리기 공식 ──
# 정n각형: n번 반복, 매번 360/n 도 회전

# 오각형 (n=5)
angle = 360 / 5  # 외각 = 72도
for i in range(5):
    t.forward(80)
    t.left(angle)

# 위치 이동
t.penup()
t.goto(200, 0)
t.pendown()

# 육각형 (n=6)
angle = 360 / 6  # 외각 = 60도
for i in range(6):
    t.forward(60)
    t.left(angle)

# 위치 이동
t.penup()
t.goto(-200, 0)
t.pendown()

# 팔각형 (n=8)
angle = 360 / 8  # 외각 = 45도
for i in range(8):
    t.forward(50)
    t.left(angle)

turtle.done()`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. Colors and Filling"}),e.jsxs("p",{children:["There are two ways to specify colors in Turtle: (1) color name strings (e.g., ",e.jsx("code",{children:'"red"'}),", ",e.jsx("code",{children:'"blue"'}),"), (2) RGB tuples (e.g., ",e.jsx("code",{children:"(1.0, 0, 0)"}),"). In RGB mode, the default range is 0.0-1.0, but using ",e.jsx("code",{children:"colormode(255)"})," lets you use the 0-255 range."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. 색상과 채우기"}),e.jsxs("p",{children:["Turtle에서 색상을 지정하는 방법은 두 가지입니다: (1) 색상 이름 문자열 (예: ",e.jsx("code",{children:'"red"'}),", ",e.jsx("code",{children:'"blue"'}),"), (2) RGB 튜플 (예: ",e.jsx("code",{children:"(1.0, 0, 0)"}),"). RGB 모드에서 기본 범위는 0.0~1.0이지만, ",e.jsx("code",{children:"colormode(255)"}),"로 설정하면 0~255 범위를 사용할 수 있습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Color Specification Methods":"색상 지정 방법"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()

# 방법 1: 색상 이름 (문자열)
t.pencolor("red")
t.forward(100)

# 방법 2: RGB 튜플 (0.0 ~ 1.0 범위)
t.pencolor(0, 0, 1)  # 파란색
t.left(90)
t.forward(100)

# 방법 3: RGB 값 (0 ~ 255 범위)
turtle.colormode(255)       # 255 모드로 변경
t.pencolor(255, 165, 0)     # 주황색 (Orange)
t.left(90)
t.forward(100)

turtle.done()`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Shape Filling (begin_fill / end_fill)":"도형 채우기 (begin_fill / end_fill)"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 채워진 사각형 그리기 ──
t.fillcolor("skyblue")   # 채우기 색상 설정
t.begin_fill()           # 채우기 시작
for i in range(4):
    t.forward(100)
    t.left(90)
t.end_fill()             # 채우기 종료 → 도형 내부가 채워짐

# 위치 이동
t.penup()
t.goto(150, 0)
t.pendown()

# ── 채워진 원 그리기 ──
t.fillcolor("salmon")
t.begin_fill()
t.circle(50)
t.end_fill()

# 위치 이동
t.penup()
t.goto(-200, 0)
t.pendown()

# ── 채워진 삼각형 그리기 ──
t.color("darkgreen", "lightgreen")  # (펜색, 채우기색) 동시 설정
t.begin_fill()
for i in range(3):
    t.forward(120)
    t.left(120)
t.end_fill()

turtle.done()`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Rainbow Colors Example":"무지개 색상 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(3)

# 무지개 7색
colors = ["red", "orange", "yellow", "green",
          "blue", "navy", "purple"]

# 무지개 색상으로 원 그리기
for i in range(7):
    t.pencolor(colors[i])
    t.circle(50 + i * 15)  # 점점 커지는 원
    t.penup()
    t.sety(t.ycor() - 15)  # 아래로 이동
    t.pendown()

turtle.done()`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. Introduction to Functions (def)"}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"function"})," is a ",e.jsx("strong",{children:"reusable block of code"})," that performs a specific task. It is one of the most important concepts in programming, and a key tool for reducing code duplication and structuring programs systematically."]}),e.jsx("h3",{children:"The Concept of Abstraction"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Abstraction"})," means hiding the complex internal implementation and exposing only a ",e.jsx("strong",{children:"simple interface"}),". For example, we only need to press buttons on a TV remote without knowing the internal electronics. Functions work the same way -- they hide complex code inside and let you call functionality using just the function name."]}),e.jsx("h3",{children:"Advantages of Functions"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Advantage"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Code Reuse"})}),e.jsx("td",{children:"Define once, call multiple times from different places"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Improved Readability"})}),e.jsx("td",{children:"The function name immediately conveys the meaning of the code"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Easy Maintenance"})}),e.jsx("td",{children:"When changes are needed, just modify one function"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Modularization"})}),e.jsx("td",{children:"Separate the program into functional units for better management"})]})]})]}),e.jsx("h3",{children:"Function Definition Syntax"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. 함수(def) 소개"}),e.jsxs("p",{children:[e.jsx("strong",{children:"함수(Function)"}),"란 특정 작업을 수행하는 ",e.jsx("strong",{children:"재사용 가능한 코드 블록"}),"입니다. 프로그래밍에서 가장 중요한 개념 중 하나이며, 코드의 중복을 줄이고 프로그램을 체계적으로 구조화하는 핵심 도구입니다."]}),e.jsx("h3",{children:"추상화(Abstraction) 개념"}),e.jsxs("p",{children:[e.jsx("strong",{children:"추상화"}),"란 복잡한 내부 구현을 감추고,",e.jsx("strong",{children:"단순한 인터페이스"}),"만 노출하는 것을 의미합니다. 예를 들어, 우리는 TV 리모컨의 버튼만 누르면 되고 내부 전자 회로를 알 필요가 없습니다. 함수도 마찬가지로, 함수 내부의 복잡한 코드를 감추고 함수 이름만으로 기능을 호출할 수 있게 합니다."]}),e.jsx("h3",{children:"함수의 장점"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"장점"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 재사용"})}),e.jsx("td",{children:"한 번 정의하면 여러 곳에서 반복 호출할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성 향상"})}),e.jsx("td",{children:"함수 이름으로 코드의 의미를 바로 파악할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"유지보수 용이"})}),e.jsx("td",{children:"수정이 필요하면 함수 하나만 고치면 된다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"모듈화"})}),e.jsx("td",{children:"프로그램을 기능 단위로 분리하여 관리할 수 있다"})]})]})]}),e.jsx("h3",{children:"함수 정의 문법"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Function Definition and Call Syntax":"함수 정의와 호출 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 함수 정의 문법
# ═══════════════════════════════════════
# def 함수이름(매개변수1, 매개변수2, ...):
#     """독스트링(선택): 함수 설명"""
#     실행할 코드
#     return 반환값  (선택)

# ═══════════════════════════════════════
# 함수 호출 문법
# ═══════════════════════════════════════
# 함수이름(인자1, 인자2, ...)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"The Simplest Function":"가장 단순한 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 함수 정의 ────────────────────────
def greet():
    """인사를 출력하는 함수"""
    print("안녕하세요!")
    print("파이썬 함수를 배워봅시다!")

# ── 함수 호출 ────────────────────────
greet()    # "안녕하세요!" + "파이썬 함수를 배워봅시다!" 출력
greet()    # 같은 함수를 여러 번 호출 가능`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`안녕하세요!
파이썬 함수를 배워봅시다!
안녕하세요!
파이썬 함수를 배워봅시다!`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. Parameters and Arguments"}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"parameter"})," is a variable name written inside the parentheses when defining a function, while an ",e.jsx("strong",{children:"argument"})," is the actual value passed when calling the function."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. 매개변수(Parameter)와 인자(Argument)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"매개변수(Parameter)"}),"는 함수를 정의할 때 괄호 안에 적는 변수명이고,",e.jsx("strong",{children:"인자(Argument)"}),"는 함수를 호출할 때 실제로 전달하는 값입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Function with Parameters":"매개변수가 있는 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# name은 '매개변수(Parameter)'
def greet_person(name):
    """이름을 받아 인사하는 함수"""
    print(f"안녕하세요, {name}님!")

# "홍길동"과 "김영희"는 '인자(Argument)'
greet_person("홍길동")   # 안녕하세요, 홍길동님!
greet_person("김영희")   # 안녕하세요, 김영희님!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Multiple Parameters":"여러 매개변수 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`def add_numbers(a, b):
    """두 수를 더하여 결과를 출력하는 함수"""
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(3, 5)      # 3 + 5 = 8
add_numbers(100, 200)  # 100 + 200 = 300`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Default Parameter Values":"기본값 매개변수 (Default Parameter)"}),e.jsx("pre",{children:e.jsx("code",{children:`def greet_with_title(name, title="님"):
    """호칭을 지정할 수 있는 인사 함수"""
    print(f"안녕하세요, {name}{title}!")

greet_with_title("홍길동")          # 안녕하세요, 홍길동님!
greet_with_title("김교수", " 교수님")  # 안녕하세요, 김교수 교수님!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Function with Return Value":"반환값(return)이 있는 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`def calculate_area(width, height):
    """사각형 넓이를 계산하여 반환하는 함수"""
    area = width * height
    return area  # 결과를 호출한 곳으로 돌려줌

# 반환값을 변수에 저장
result = calculate_area(5, 3)
print(f"넓이: {result}")  # 넓이: 15

# 반환값을 직접 활용
print(f"넓이: {calculate_area(10, 4)}")  # 넓이: 40`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. Turtle + Functions Combined"}),e.jsxs("p",{children:["Now let's combine Turtle commands with functions to modularize shape drawing. This is the practical application of ",e.jsx("strong",{children:"abstraction"}),". Complex drawing processes can be simplified into a single function call."]}),e.jsx("h3",{children:"draw_square(size) Function"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. Turtle + 함수 결합"}),e.jsxs("p",{children:["이제 Turtle 명령어와 함수를 결합하여, 도형 그리기를 함수로 모듈화해 봅시다. 이것이 ",e.jsx("strong",{children:"추상화"}),"의 실제 적용입니다. 복잡한 그리기 과정을 함수 하나의 호출로 단순화할 수 있습니다."]}),e.jsx("h3",{children:"draw_square(size) 함수"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Square Drawing Function":"사각형 그리기 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

def draw_square(size):
    """주어진 크기의 정사각형을 그리는 함수"""
    for i in range(4):
        t.forward(size)
        t.left(90)

# 다양한 크기의 사각형 그리기
draw_square(50)    # 작은 사각형
draw_square(100)   # 중간 사각형
draw_square(150)   # 큰 사각형

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"draw_triangle(size) Function":"draw_triangle(size) 함수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Triangle Drawing Function":"삼각형 그리기 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

def draw_triangle(size):
    """주어진 크기의 정삼각형을 그리는 함수"""
    for i in range(3):
        t.forward(size)
        t.left(120)

# 삼각형 그리기
draw_triangle(100)

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"draw_polygon(sides, size) Generalized Function":"draw_polygon(sides, size) 일반화 함수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Generalized Polygon Function":"다각형 일반화 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(5)

def draw_polygon(sides, size):
    """정n각형을 그리는 범용 함수
    sides: 변의 수
    size: 한 변의 길이
    """
    angle = 360 / sides  # 외각 계산
    for i in range(sides):
        t.forward(size)
        t.left(angle)

# 이 하나의 함수로 모든 정다각형을 그릴 수 있다!
draw_polygon(3, 80)    # 삼각형

t.penup()
t.forward(120)
t.pendown()

draw_polygon(5, 60)    # 오각형

t.penup()
t.forward(120)
t.pendown()

draw_polygon(6, 50)    # 육각형

t.penup()
t.forward(120)
t.pendown()

draw_polygon(8, 40)    # 팔각형

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"draw_star(size) Star Drawing Function":"draw_star(size) 별 그리기 함수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Star Drawing Function":"별 그리기 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

def draw_star(size):
    """다섯 꼭짓점 별을 그리는 함수
    별의 각도: 각 꼭짓점에서 144도 회전
    """
    t.fillcolor("gold")
    t.begin_fill()
    for i in range(5):
        t.forward(size)
        t.right(144)    # 별은 144도 회전 (= 360/5 × 2)
    t.end_fill()

# 별 그리기
draw_star(100)

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Drawing a House by Combining Functions":"함수 조합으로 집 그리기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Drawing a House by Combining Functions":"함수를 조합하여 집 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(3)

def draw_square(size):
    """사각형(벽) 그리기"""
    t.fillcolor("lightyellow")
    t.begin_fill()
    for i in range(4):
        t.forward(size)
        t.left(90)
    t.end_fill()

def draw_triangle(size):
    """삼각형(지붕) 그리기"""
    t.fillcolor("brown")
    t.begin_fill()
    for i in range(3):
        t.forward(size)
        t.left(120)
    t.end_fill()

def draw_door(width, height):
    """문 그리기"""
    t.fillcolor("saddlebrown")
    t.begin_fill()
    for i in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

def draw_house():
    """집 전체를 그리는 함수 (함수 조합 활용)"""
    # 벽 그리기
    draw_square(150)

    # 지붕 그리기 (벽 위에 위치)
    t.left(90)
    t.forward(150)
    t.right(90)
    draw_triangle(150)

    # 문 그리기 (벽 중앙 하단에 위치)
    t.right(90)
    t.forward(150)
    t.left(90)
    t.forward(55)
    draw_door(40, 70)

# 집 그리기 실행
draw_house()
t.hideturtle()

turtle.done()`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. Combining Loops and Functions"}),e.jsx("p",{children:"Calling functions inside loops (for) can create diverse and beautiful patterns. The key is to repeatedly call functions while changing position and direction."}),e.jsx("h3",{children:"Spiral Pattern"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. 반복과 함수의 결합"}),e.jsx("p",{children:"반복문(for) 안에서 함수를 호출하면, 다양하고 아름다운 패턴을 만들 수 있습니다. 위치와 방향을 바꿔가며 함수를 반복 호출하는 것이 핵심입니다."}),e.jsx("h3",{children:"나선(Spiral) 패턴"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Spiral Pattern Drawing":"나선 패턴 그리기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(0)  # 최고 속도

def draw_spiral():
    """사각형 나선 패턴"""
    colors = ["red", "blue", "green", "orange",
              "purple", "cyan"]
    for i in range(60):
        t.pencolor(colors[i % 6])  # 색상 순환
        t.forward(i * 3)           # 점점 길어지는 변
        t.left(91)                 # 91도 회전 (90도가 아닌!)

draw_spiral()
t.hideturtle()

turtle.done()`})})]}),e.jsx("h3",{children:r==="en"?"Circular Arrangement Pattern":"원형 배치 패턴"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Arranging Squares in a Circle":"원형으로 사각형 배치하기"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(0)

def draw_square(size):
    """사각형 그리기 함수"""
    for i in range(4):
        t.forward(size)
        t.left(90)

def draw_circle_pattern():
    """사각형을 원형으로 배치하는 패턴"""
    colors = ["red", "orange", "yellow", "green",
              "blue", "purple"]
    for i in range(36):
        t.pencolor(colors[i % 6])
        draw_square(80)    # 사각형 그리기
        t.left(10)         # 10도씩 회전 (36 × 10 = 360)

draw_circle_pattern()
t.hideturtle()

turtle.done()`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:r==="en"?"Flower Pattern":"꽃 모양 패턴"}),e.jsx("pre",{children:e.jsx("code",{children:`import turtle

t = turtle.Turtle()
t.speed(0)

def draw_petal():
    """꽃잎 하나를 그리는 함수"""
    t.circle(60, 60)     # 호 그리기 (반지름 60, 60도)
    t.left(120)          # 방향 전환
    t.circle(60, 60)     # 반대쪽 호 그리기
    t.left(60)           # 원래 방향으로 복귀

def draw_flower(petals):
    """꽃잎 여러 개로 꽃 그리기"""
    t.color("deeppink", "pink")
    t.begin_fill()
    for i in range(petals):
        draw_petal()
        t.left(360 / petals)  # 꽃잎 간격
    t.end_fill()

draw_flower(6)  # 6장 꽃잎
t.hideturtle()

turtle.done()`})})]}),r==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Turtle Module:"})," A built-in Python graphics module that draws pictures by moving a turtle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Coordinate System:"})," Screen center is (0,0), turtle initially faces right (0 degrees)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regular Polygon Formula:"})," Exterior angle = 360 / n (n is the number of sides)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filling:"})," Drawing shapes between ",e.jsx("code",{children:"begin_fill()"})," and ",e.jsx("code",{children:"end_fill()"})," fills their interior"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functions (def):"})," Grouping specific tasks into reusable code blocks"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," Variables used when defining a function; ",e.jsx("strong",{children:"Arguments:"})," Values passed when calling a function"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Abstraction:"})," Hiding complex internal implementation behind a simple interface (function name)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functions + Loops:"})," Calling functions inside loops can generate diverse patterns"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:n("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 1: Draw a House"})}),e.jsxs("p",{children:["Draw a house using Turtle. Define a square (wall) and a triangle (roof) as separate functions and combine them.",e.jsx("br",{}),"Requirements: You must define and use ",e.jsx("code",{children:"draw_wall(size)"})," and ",e.jsx("code",{children:"draw_roof(size)"})," functions",e.jsx("br",{}),"Bonus: Adding windows, a door, a chimney, etc. earns extra credit"]}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 2: Draw the Olympic Rings"})}),e.jsxs("p",{children:["Draw the Olympic rings using Turtle. The 5 rings (blue, yellow, black, green, red) should overlap each other.",e.jsx("br",{}),"Requirements: Define and use a ",e.jsx("code",{children:"draw_ring(x, y, color)"})," function",e.jsx("br",{}),"Hint: Use ",e.jsx("code",{children:"penup()"})," to move, ",e.jsx("code",{children:"pendown()"})," to draw, set ",e.jsx("code",{children:"pensize(5)"})," or larger"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:n("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 1: Create Your Own Artwork"})}),e.jsxs("p",{children:["Create a free-theme artwork using Turtle.",e.jsx("br",{}),"Requirements: Define and use at least 3 functions",e.jsx("br",{}),"Examples: cityscape, space, garden, ocean, etc.",e.jsx("br",{}),"Evaluation criteria: function utilization, creativity, color usage"]}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 2: Fractal Triangle"})}),e.jsxs("p",{children:["Implement a Sierpinski Triangle using recursive functions.",e.jsx("br",{}),"It is a fractal shape where smaller triangles appear repeatedly inside a larger triangle.",e.jsx("br",{}),"Hint: Use the concept of ",e.jsx("strong",{children:"recursion"})," where a function calls itself.",e.jsx("br",{}),"Use a depth parameter to control the level of repetition."]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Turtle 모듈:"})," 파이썬 내장 그래픽 모듈로, 거북이를 이동시켜 그림을 그린다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"좌표계:"})," 화면 중앙이 (0,0), 거북이 초기 방향은 오른쪽(0도)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"정다각형 공식:"})," 외각 = 360 / n (n은 변의 수)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"채우기:"})," ",e.jsx("code",{children:"begin_fill()"}),"과 ",e.jsx("code",{children:"end_fill()"})," 사이에 도형을 그리면 내부가 채워진다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"함수(def):"})," 특정 작업을 재사용 가능한 코드 블록으로 묶는 것"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"매개변수:"})," 함수 정의 시 사용하는 변수, ",e.jsx("strong",{children:"인자:"})," 함수 호출 시 전달하는 값"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"추상화:"})," 복잡한 내부 구현을 감추고 단순한 인터페이스(함수 이름)로 사용"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"함수 + 반복:"})," 반복문 안에서 함수를 호출하여 다양한 패턴을 생성할 수 있다"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsx("p",{children:e.jsx("strong",{children:"과제 1: 집 그리기"})}),e.jsxs("p",{children:["Turtle을 활용하여 집을 그리세요. 사각형(벽)과 삼각형(지붕)을 각각 함수로 정의하고 조합하세요.",e.jsx("br",{}),"조건: ",e.jsx("code",{children:"draw_wall(size)"}),"와 ",e.jsx("code",{children:"draw_roof(size)"})," 함수를 반드시 정의하여 사용할 것",e.jsx("br",{}),"추가: 창문, 문, 굴뚝 등을 추가하면 가산점"]}),e.jsx("p",{children:e.jsx("strong",{children:"과제 2: 올림픽 오륜기 그리기"})}),e.jsxs("p",{children:["올림픽 오륜기를 Turtle로 그리세요. 5개의 원(파랑, 노랑, 검정, 초록, 빨강)이 서로 겹치도록 배치합니다.",e.jsx("br",{}),"조건: ",e.jsx("code",{children:"draw_ring(x, y, color)"})," 함수를 정의하여 사용할 것",e.jsx("br",{}),"힌트: ",e.jsx("code",{children:"penup()"}),"으로 이동 후 ",e.jsx("code",{children:"pendown()"}),"으로 그리기, ",e.jsx("code",{children:"pensize(5)"})," 이상 설정"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"심화 문제"}),e.jsx("p",{children:e.jsx("strong",{children:"심화 1: 나만의 그림 작품"})}),e.jsxs("p",{children:["Turtle을 활용하여 자유 주제의 그림 작품을 만드세요.",e.jsx("br",{}),"조건: 최소 3개 이상의 함수를 정의하여 사용할 것",e.jsx("br",{}),"예시: 도시 풍경, 우주, 정원, 바다 등",e.jsx("br",{}),"평가 기준: 함수 활용도, 창의성, 색상 활용"]}),e.jsx("p",{children:e.jsx("strong",{children:"심화 2: 프랙탈 삼각형 그리기"})}),e.jsxs("p",{children:["시에르핀스키 삼각형(Sierpinski Triangle)을 재귀 함수로 구현하세요.",e.jsx("br",{}),"큰 삼각형 내부에 작은 삼각형들이 반복적으로 나타나는 프랙탈 도형입니다.",e.jsx("br",{}),"힌트: 함수가 자기 자신을 호출하는 ",e.jsx("strong",{children:"재귀(Recursion)"})," 개념을 활용합니다.",e.jsx("br",{}),"깊이(depth) 매개변수를 사용하여 반복 수준을 조절하세요."]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python-learning/04",className:"lesson-nav-btn prev",children:r==="en"?"← 04: IPO Concept":"← 04: 입력-처리-출력"}),e.jsx(s,{to:"/python-learning/06",className:"lesson-nav-btn next",children:r==="en"?"06: Flowcharts →":"06: 순서도 →"})]})]})})})]})}export{l as default};
