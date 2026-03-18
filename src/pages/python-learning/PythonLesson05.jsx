import { Link } from 'react-router-dom';

const PythonLesson05 = () => (
  <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
    <section className="page-header">
      <div className="container">
        <h1>5주차: Turtle 그래픽과 함수(def)</h1>
        <p>Turtle 모듈로 그래픽 프로그래밍과 함수 추상화 학습</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>Turtle 모듈의 사용법을 이해하고 다양한 명령어를 활용할 수 있다</li>
              <li>Turtle을 이용하여 기본 도형(사각형, 삼각형, 원, 다각형)을 그릴 수 있다</li>
              <li>함수(def)의 정의와 호출 방법을 이해하고 직접 작성할 수 있다</li>
              <li>매개변수(Parameter)와 반환값(Return Value)의 개념을 이해한다</li>
              <li>추상화(Abstraction) 개념을 이해하고 함수를 통해 코드를 모듈화할 수 있다</li>
            </ul>
          </div>

          {/* ───────────────── 1. Turtle 그래픽이란? ───────────────── */}
          <h2>1. Turtle 그래픽이란?</h2>
          <p>
            <strong>Turtle 그래픽</strong>은 1967년 MIT의 <strong>Seymour Papert</strong> 교수가 개발한
            <strong>Logo 프로그래밍 언어</strong>에서 유래했습니다. 화면 위의 가상 거북이(Turtle)에게
            이동 명령을 내려 그림을 그리는 방식으로, 프로그래밍의 기본 개념을 시각적이고
            직관적으로 학습할 수 있도록 설계되었습니다.
          </p>
          <p>
            파이썬의 <code>turtle</code> 모듈은 기본 내장 모듈이므로 별도의 설치 없이 바로 사용할 수 있습니다.
            거북이를 움직이며 선을 그리고, 색상을 바꾸고, 도형을 채우는 등 다양한 그래픽 작업이 가능합니다.
          </p>

          <h3>좌표계 이해</h3>
          <p>
            Turtle 그래픽은 2차원 좌표계를 사용합니다. 화면의 중앙이 원점 <code>(0, 0)</code>이며,
            오른쪽이 x축 양의 방향, 위쪽이 y축 양의 방향입니다. 거북이는 처음에 원점에서
            오른쪽(동쪽)을 향해 놓여 있습니다. 각도는 도(degree) 단위를 사용하며,
            반시계 방향이 양의 각도입니다.
          </p>
          <div className="code-block">
            <div className="code-header">Turtle 좌표계</div>
            <pre><code>{`#              y축 (90°)
#               ↑
#               |
#  (-x) ←------+------→ (+x)  ... 0° (초기 방향)
#  (180°)       |
#               ↓
#            (270°)
#
# 중심: (0, 0)
# 거북이 초기 위치: (0, 0), 방향: 0° (오른쪽)`}</code></pre>
          </div>

          {/* ───────────────── 2. Turtle 기본 설정 ───────────────── */}
          <h2>2. Turtle 기본 설정</h2>
          <p>
            Turtle 프로그램을 시작하려면 먼저 <code>turtle</code> 모듈을 가져오고(import),
            화면과 거북이 객체를 설정해야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header">Turtle 기본 설정 코드</div>
            <pre><code>{`import turtle

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
turtle.done()        # 창을 닫지 않고 유지`}</code></pre>
          </div>

          {/* ───────────────── 3. 이동 명령어 상세 ───────────────── */}
          <h2>3. 이동 명령어 상세</h2>
          <p>
            Turtle 모듈에서 제공하는 주요 명령어를 기능별로 분류하면 다음과 같습니다.
            각 명령어의 축약형도 함께 익혀두면 코드를 간결하게 작성할 수 있습니다.
          </p>

          <h3>이동 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>축약형</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>forward(distance)</code></td><td><code>fd(distance)</code></td><td>현재 방향으로 distance 픽셀 전진</td></tr>
              <tr><td><code>backward(distance)</code></td><td><code>bk(distance)</code></td><td>현재 방향의 반대로 distance 픽셀 후진</td></tr>
              <tr><td><code>goto(x, y)</code></td><td><code>setpos(x, y)</code></td><td>좌표 (x, y)로 이동</td></tr>
              <tr><td><code>setx(x)</code></td><td>-</td><td>x 좌표만 변경</td></tr>
              <tr><td><code>sety(y)</code></td><td>-</td><td>y 좌표만 변경</td></tr>
              <tr><td><code>home()</code></td><td>-</td><td>원점 (0,0)으로 이동, 방향 0도로 초기화</td></tr>
            </tbody>
          </table>

          <h3>회전 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>축약형</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>left(angle)</code></td><td><code>lt(angle)</code></td><td>왼쪽(반시계 방향)으로 angle도 회전</td></tr>
              <tr><td><code>right(angle)</code></td><td><code>rt(angle)</code></td><td>오른쪽(시계 방향)으로 angle도 회전</td></tr>
              <tr><td><code>setheading(angle)</code></td><td><code>seth(angle)</code></td><td>절대 방향을 angle도로 설정</td></tr>
            </tbody>
          </table>

          <h3>펜 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>축약형</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>penup()</code></td><td><code>pu()</code></td><td>펜을 올림 (이동해도 선이 그려지지 않음)</td></tr>
              <tr><td><code>pendown()</code></td><td><code>pd()</code></td><td>펜을 내림 (이동하면 선이 그려짐)</td></tr>
              <tr><td><code>pensize(width)</code></td><td>-</td><td>펜 굵기 설정</td></tr>
              <tr><td><code>pencolor(color)</code></td><td>-</td><td>펜 색상 설정</td></tr>
            </tbody>
          </table>

          <h3>채우기 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>fillcolor(color)</code></td><td>채우기 색상 설정</td></tr>
              <tr><td><code>begin_fill()</code></td><td>채우기 시작 (이후 그리는 도형이 채워짐)</td></tr>
              <tr><td><code>end_fill()</code></td><td>채우기 종료 (도형 내부가 채워짐)</td></tr>
              <tr><td><code>color(pencolor, fillcolor)</code></td><td>펜 색상과 채우기 색상을 동시에 설정</td></tr>
            </tbody>
          </table>

          <h3>기타 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>축약형</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>circle(radius)</code></td><td>-</td><td>반지름 radius인 원 그리기</td></tr>
              <tr><td><code>circle(radius, extent)</code></td><td>-</td><td>호(arc) 그리기 (extent = 각도)</td></tr>
              <tr><td><code>dot(size)</code></td><td>-</td><td>현재 위치에 점 찍기</td></tr>
              <tr><td><code>stamp()</code></td><td>-</td><td>현재 위치에 거북이 도장 찍기</td></tr>
              <tr><td><code>clear()</code></td><td>-</td><td>그린 것을 모두 지우기 (위치 유지)</td></tr>
              <tr><td><code>reset()</code></td><td>-</td><td>모두 지우고 초기 상태로 복원</td></tr>
              <tr><td><code>hideturtle()</code></td><td><code>ht()</code></td><td>거북이 숨기기</td></tr>
              <tr><td><code>showturtle()</code></td><td><code>st()</code></td><td>거북이 보이기</td></tr>
              <tr><td><code>write(text)</code></td><td>-</td><td>현재 위치에 텍스트 출력</td></tr>
            </tbody>
          </table>

          <h3>정보 조회 명령어</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>명령어</th><th>설명</th><th>반환 예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>position()</code></td><td>현재 좌표 반환</td><td><code>(100.0, 50.0)</code></td></tr>
              <tr><td><code>heading()</code></td><td>현재 방향 반환 (도 단위)</td><td><code>90.0</code></td></tr>
              <tr><td><code>isdown()</code></td><td>펜이 내려져 있으면 True</td><td><code>True</code></td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">이동과 펜 명령어 사용 예제</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          {/* ───────────────── 4. 기본 도형 그리기 ───────────────── */}
          <h2>4. 기본 도형 그리기</h2>
          <p>
            도형을 그릴 때 핵심 원리는 <strong>외각의 합 = 360°</strong>입니다.
            정n각형을 그리려면 각 꼭짓점에서 <strong>360 / n</strong> 도씩 회전하면 됩니다.
          </p>

          <h3>직선 그리기</h3>
          <div className="code-block">
            <div className="code-header">직선 그리기</div>
            <pre><code>{`import turtle

t = turtle.Turtle()

# 단순 직선
t.forward(200)

# 대각선 (45도 방향)
t.penup()
t.home()
t.pendown()
t.left(45)
t.forward(150)

turtle.done()`}</code></pre>
          </div>

          <h3>사각형 그리기</h3>
          <div className="code-block">
            <div className="code-header">사각형 그리기 (반복문 활용)</div>
            <pre><code>{`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 사각형: 4번 반복 (전진 + 90도 회전) ──
# 외각 = 360 / 4 = 90도
for i in range(4):
    t.forward(100)  # 한 변의 길이: 100
    t.left(90)      # 왼쪽으로 90도 회전

turtle.done()`}</code></pre>
          </div>

          <h3>삼각형 그리기</h3>
          <div className="code-block">
            <div className="code-header">정삼각형 그리기</div>
            <pre><code>{`import turtle

t = turtle.Turtle()
t.speed(3)

# ── 정삼각형: 3번 반복 (전진 + 120도 회전) ──
# 외각 = 360 / 3 = 120도
for i in range(3):
    t.forward(100)  # 한 변의 길이: 100
    t.left(120)     # 왼쪽으로 120도 회전

turtle.done()`}</code></pre>
          </div>

          <h3>원 그리기</h3>
          <div className="code-block">
            <div className="code-header">원 그리기 (circle 명령)</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h3>다각형 그리기 (일반화)</h3>
          <div className="code-block">
            <div className="code-header">정다각형 일반화: 외각 = 360/n</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          {/* ───────────────── 5. 색상과 채우기 ───────────────── */}
          <h2>5. 색상과 채우기</h2>
          <p>
            Turtle에서 색상을 지정하는 방법은 두 가지입니다:
            (1) 색상 이름 문자열 (예: <code>"red"</code>, <code>"blue"</code>),
            (2) RGB 튜플 (예: <code>(1.0, 0, 0)</code>).
            RGB 모드에서 기본 범위는 0.0~1.0이지만, <code>colormode(255)</code>로 설정하면 0~255 범위를 사용할 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header">색상 지정 방법</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">도형 채우기 (begin_fill / end_fill)</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">무지개 색상 활용</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          {/* ───────────────── 6. 함수(def) 소개 ───────────────── */}
          <h2>6. 함수(def) 소개</h2>
          <p>
            <strong>함수(Function)</strong>란 특정 작업을 수행하는 <strong>재사용 가능한 코드 블록</strong>입니다.
            프로그래밍에서 가장 중요한 개념 중 하나이며, 코드의 중복을 줄이고 프로그램을 체계적으로 구조화하는 핵심 도구입니다.
          </p>

          <h3>추상화(Abstraction) 개념</h3>
          <p>
            <strong>추상화</strong>란 복잡한 내부 구현을 감추고,
            <strong>단순한 인터페이스</strong>만 노출하는 것을 의미합니다.
            예를 들어, 우리는 TV 리모컨의 버튼만 누르면 되고 내부 전자 회로를 알 필요가 없습니다.
            함수도 마찬가지로, 함수 내부의 복잡한 코드를 감추고 함수 이름만으로 기능을 호출할 수 있게 합니다.
          </p>

          <h3>함수의 장점</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>장점</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>코드 재사용</strong></td><td>한 번 정의하면 여러 곳에서 반복 호출할 수 있다</td></tr>
              <tr><td><strong>가독성 향상</strong></td><td>함수 이름으로 코드의 의미를 바로 파악할 수 있다</td></tr>
              <tr><td><strong>유지보수 용이</strong></td><td>수정이 필요하면 함수 하나만 고치면 된다</td></tr>
              <tr><td><strong>모듈화</strong></td><td>프로그램을 기능 단위로 분리하여 관리할 수 있다</td></tr>
            </tbody>
          </table>

          <h3>함수 정의 문법</h3>
          <div className="code-block">
            <div className="code-header">함수 정의와 호출 문법</div>
            <pre><code>{`# ═══════════════════════════════════════
# 함수 정의 문법
# ═══════════════════════════════════════
# def 함수이름(매개변수1, 매개변수2, ...):
#     """독스트링(선택): 함수 설명"""
#     실행할 코드
#     return 반환값  (선택)

# ═══════════════════════════════════════
# 함수 호출 문법
# ═══════════════════════════════════════
# 함수이름(인자1, 인자2, ...)`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">가장 단순한 함수</div>
            <pre><code>{`# ── 함수 정의 ────────────────────────
def greet():
    """인사를 출력하는 함수"""
    print("안녕하세요!")
    print("파이썬 함수를 배워봅시다!")

# ── 함수 호출 ────────────────────────
greet()    # "안녕하세요!" + "파이썬 함수를 배워봅시다!" 출력
greet()    # 같은 함수를 여러 번 호출 가능`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header">실행 결과</div>
            <pre><code>{`안녕하세요!
파이썬 함수를 배워봅시다!
안녕하세요!
파이썬 함수를 배워봅시다!`}</code></pre>
          </div>

          {/* ───────────────── 7. 매개변수와 인자 ───────────────── */}
          <h2>7. 매개변수(Parameter)와 인자(Argument)</h2>
          <p>
            <strong>매개변수(Parameter)</strong>는 함수를 정의할 때 괄호 안에 적는 변수명이고,
            <strong>인자(Argument)</strong>는 함수를 호출할 때 실제로 전달하는 값입니다.
          </p>

          <div className="code-block">
            <div className="code-header">매개변수가 있는 함수</div>
            <pre><code>{`# name은 '매개변수(Parameter)'
def greet_person(name):
    """이름을 받아 인사하는 함수"""
    print(f"안녕하세요, {name}님!")

# "홍길동"과 "김영희"는 '인자(Argument)'
greet_person("홍길동")   # 안녕하세요, 홍길동님!
greet_person("김영희")   # 안녕하세요, 김영희님!`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">여러 매개변수 사용</div>
            <pre><code>{`def add_numbers(a, b):
    """두 수를 더하여 결과를 출력하는 함수"""
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(3, 5)      # 3 + 5 = 8
add_numbers(100, 200)  # 100 + 200 = 300`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">기본값 매개변수 (Default Parameter)</div>
            <pre><code>{`def greet_with_title(name, title="님"):
    """호칭을 지정할 수 있는 인사 함수"""
    print(f"안녕하세요, {name}{title}!")

greet_with_title("홍길동")          # 안녕하세요, 홍길동님!
greet_with_title("김교수", " 교수님")  # 안녕하세요, 김교수 교수님!`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">반환값(return)이 있는 함수</div>
            <pre><code>{`def calculate_area(width, height):
    """사각형 넓이를 계산하여 반환하는 함수"""
    area = width * height
    return area  # 결과를 호출한 곳으로 돌려줌

# 반환값을 변수에 저장
result = calculate_area(5, 3)
print(f"넓이: {result}")  # 넓이: 15

# 반환값을 직접 활용
print(f"넓이: {calculate_area(10, 4)}")  # 넓이: 40`}</code></pre>
          </div>

          {/* ───────────────── 8. Turtle + 함수 결합 ───────────────── */}
          <h2>8. Turtle + 함수 결합</h2>
          <p>
            이제 Turtle 명령어와 함수를 결합하여, 도형 그리기를 함수로 모듈화해 봅시다.
            이것이 <strong>추상화</strong>의 실제 적용입니다. 복잡한 그리기 과정을
            함수 하나의 호출로 단순화할 수 있습니다.
          </p>

          <h3>draw_square(size) 함수</h3>
          <div className="code-block">
            <div className="code-header">사각형 그리기 함수</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h3>draw_triangle(size) 함수</h3>
          <div className="code-block">
            <div className="code-header">삼각형 그리기 함수</div>
            <pre><code>{`import turtle

t = turtle.Turtle()
t.speed(3)

def draw_triangle(size):
    """주어진 크기의 정삼각형을 그리는 함수"""
    for i in range(3):
        t.forward(size)
        t.left(120)

# 삼각형 그리기
draw_triangle(100)

turtle.done()`}</code></pre>
          </div>

          <h3>draw_polygon(sides, size) 일반화 함수</h3>
          <div className="code-block">
            <div className="code-header">다각형 일반화 함수</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h3>draw_star(size) 별 그리기 함수</h3>
          <div className="code-block">
            <div className="code-header">별 그리기 함수</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h3>함수 조합으로 집 그리기</h3>
          <div className="code-block">
            <div className="code-header">함수를 조합하여 집 그리기</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          {/* ───────────────── 9. 반복과 함수의 결합 ───────────────── */}
          <h2>9. 반복과 함수의 결합</h2>
          <p>
            반복문(for) 안에서 함수를 호출하면, 다양하고 아름다운 패턴을 만들 수 있습니다.
            위치와 방향을 바꿔가며 함수를 반복 호출하는 것이 핵심입니다.
          </p>

          <h3>나선(Spiral) 패턴</h3>
          <div className="code-block">
            <div className="code-header">나선 패턴 그리기</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <h3>원형 배치 패턴</h3>
          <div className="code-block">
            <div className="code-header">원형으로 사각형 배치하기</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">꽃 모양 패턴</div>
            <pre><code>{`import turtle

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

turtle.done()`}</code></pre>
          </div>

          {/* ───────────────── 핵심 정리 ───────────────── */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><strong>Turtle 모듈:</strong> 파이썬 내장 그래픽 모듈로, 거북이를 이동시켜 그림을 그린다</li>
              <li><strong>좌표계:</strong> 화면 중앙이 (0,0), 거북이 초기 방향은 오른쪽(0도)</li>
              <li><strong>정다각형 공식:</strong> 외각 = 360 / n (n은 변의 수)</li>
              <li><strong>채우기:</strong> <code>begin_fill()</code>과 <code>end_fill()</code> 사이에 도형을 그리면 내부가 채워진다</li>
              <li><strong>함수(def):</strong> 특정 작업을 재사용 가능한 코드 블록으로 묶는 것</li>
              <li><strong>매개변수:</strong> 함수 정의 시 사용하는 변수, <strong>인자:</strong> 함수 호출 시 전달하는 값</li>
              <li><strong>추상화:</strong> 복잡한 내부 구현을 감추고 단순한 인터페이스(함수 이름)로 사용</li>
              <li><strong>함수 + 반복:</strong> 반복문 안에서 함수를 호출하여 다양한 패턴을 생성할 수 있다</li>
            </ul>
          </div>

          {/* ───────────────── 실습 과제 ───────────────── */}
          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p><strong>과제 1: 집 그리기</strong></p>
            <p>
              Turtle을 활용하여 집을 그리세요.
              사각형(벽)과 삼각형(지붕)을 각각 함수로 정의하고 조합하세요.
              <br />조건: <code>draw_wall(size)</code>와 <code>draw_roof(size)</code> 함수를 반드시 정의하여 사용할 것
              <br />추가: 창문, 문, 굴뚝 등을 추가하면 가산점
            </p>
            <p><strong>과제 2: 올림픽 오륜기 그리기</strong></p>
            <p>
              올림픽 오륜기를 Turtle로 그리세요. 5개의 원(파랑, 노랑, 검정, 초록, 빨강)이
              서로 겹치도록 배치합니다.
              <br />조건: <code>draw_ring(x, y, color)</code> 함수를 정의하여 사용할 것
              <br />힌트: <code>penup()</code>으로 이동 후 <code>pendown()</code>으로 그리기, <code>pensize(5)</code> 이상 설정
            </p>
          </div>

          <div className="exercise-box">
            <h3>심화 문제</h3>
            <p><strong>심화 1: 나만의 그림 작품</strong></p>
            <p>
              Turtle을 활용하여 자유 주제의 그림 작품을 만드세요.
              <br />조건: 최소 3개 이상의 함수를 정의하여 사용할 것
              <br />예시: 도시 풍경, 우주, 정원, 바다 등
              <br />평가 기준: 함수 활용도, 창의성, 색상 활용
            </p>
            <p><strong>심화 2: 프랙탈 삼각형 그리기</strong></p>
            <p>
              시에르핀스키 삼각형(Sierpinski Triangle)을 재귀 함수로 구현하세요.
              <br />큰 삼각형 내부에 작은 삼각형들이 반복적으로 나타나는 프랙탈 도형입니다.
              <br />힌트: 함수가 자기 자신을 호출하는 <strong>재귀(Recursion)</strong> 개념을 활용합니다.
              <br />깊이(depth) 매개변수를 사용하여 반복 수준을 조절하세요.
            </p>
          </div>

          <div className="lesson-nav">
            <Link to="/python-learning/04" className="lesson-nav-btn prev">← 04: 입력-처리-출력</Link>
            <Link to="/python-learning/06" className="lesson-nav-btn next">06: 순서도 →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PythonLesson05;
