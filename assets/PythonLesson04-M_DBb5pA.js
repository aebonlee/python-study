import{j as e,L as s}from"./index-DU1JOTgP.js";const d=()=>e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"4주차: 입력-처리-출력 개념"}),e.jsx("p",{children:"PDC(Problem Definition Chart) 작성과 프로그램 설계"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"IPO(Input-Process-Output) 구조를 이해하고 프로그램의 기본 흐름을 설명할 수 있다"}),e.jsx("li",{children:"PDC(Problem Definition Chart) 작성법을 숙지하고 다양한 문제에 적용할 수 있다"}),e.jsx("li",{children:"PDC에서 파이썬 코드로 체계적으로 변환할 수 있다"}),e.jsx("li",{children:"코드 작성 전 프로그램 설계의 중요성을 이해하고 설계 능력을 기른다"})]})]}),e.jsx("h2",{children:"1. 프로그램이란 무엇인가?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"프로그램(Program)"}),"이란 컴퓨터에게 주어진 ",e.jsx("strong",{children:"명령(instruction)의 집합"}),"입니다. 우리가 일상에서 사용하는 카카오톡, 유튜브, 게임 등 모든 소프트웨어는 프로그램이며, 프로그래머가 특정 순서와 규칙에 따라 작성한 명령들로 구성되어 있습니다."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"프로그래밍(Programming)"}),"은 단순히 코드를 타이핑하는 행위가 아니라,",e.jsx("strong",{children:"문제를 분석하고 해결 방법을 설계하며 이를 코드로 구현하는 전 과정"}),"을 의미합니다. 좋은 프로그래머는 코딩 실력뿐 아니라 문제 해결 능력(Computational Thinking)을 갖추어야 합니다."]}),e.jsx("h3",{children:"좋은 프로그램의 조건"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"조건"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"정확성(Correctness)"})}),e.jsx("td",{children:"주어진 입력에 대해 올바른 출력을 생성해야 한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"효율성(Efficiency)"})}),e.jsx("td",{children:"최소한의 시간과 자원으로 작업을 수행해야 한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성(Readability)"})}),e.jsx("td",{children:"다른 사람이 읽고 이해하기 쉬워야 한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"유지보수성(Maintainability)"})}),e.jsx("td",{children:"수정과 확장이 용이해야 한다"})]})]})]}),e.jsx("h2",{children:"2. IPO(Input-Process-Output) 구조"}),e.jsxs("p",{children:["모든 프로그램은 근본적으로 ",e.jsx("strong",{children:"입력(Input) → 처리(Process) → 출력(Output)"}),"의 세 단계로 구성됩니다. 이것은 프로그래밍에서 가장 기본적이면서도 가장 중요한 개념입니다. 아무리 복잡한 프로그램이라도 이 IPO 구조를 기반으로 동작합니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단계"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"파이썬 함수"}),e.jsx("th",{children:"일상 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"입력(Input)"})}),e.jsx("td",{children:"사용자, 파일, 센서 등으로부터 데이터를 수집하는 단계"}),e.jsxs("td",{children:[e.jsx("code",{children:"input()"}),", 파일 읽기"]}),e.jsx("td",{children:"레시피의 재료 준비"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"처리(Process)"})}),e.jsx("td",{children:"데이터를 가공, 계산, 변환, 판단하는 단계"}),e.jsx("td",{children:"연산, 조건문, 반복문"}),e.jsx("td",{children:"재료를 조리하는 과정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"출력(Output)"})}),e.jsx("td",{children:"결과를 화면, 파일, 장치 등으로 전달하는 단계"}),e.jsxs("td",{children:[e.jsx("code",{children:"print()"}),", 파일 쓰기"]}),e.jsx("td",{children:"완성된 요리를 접시에 담기"})]})]})]}),e.jsx("h3",{children:"일상생활의 IPO 예시"}),e.jsx("p",{children:"IPO 구조는 컴퓨터 프로그램에만 국한되지 않습니다. 우리 주변의 많은 시스템이 IPO 구조로 설명됩니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"시스템"}),e.jsx("th",{children:"입력(Input)"}),e.jsx("th",{children:"처리(Process)"}),e.jsx("th",{children:"출력(Output)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"요리"}),e.jsx("td",{children:"재료, 레시피"}),e.jsx("td",{children:"씻기, 자르기, 볶기, 끓이기"}),e.jsx("td",{children:"완성된 음식"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"자판기"}),e.jsx("td",{children:"동전/지폐, 버튼 선택"}),e.jsx("td",{children:"금액 확인, 재고 확인, 음료 배출"}),e.jsx("td",{children:"음료수, 거스름돈"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ATM"}),e.jsx("td",{children:"카드, 비밀번호, 금액"}),e.jsx("td",{children:"인증, 잔액 확인, 출금 처리"}),e.jsx("td",{children:"현금, 영수증"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"세탁기"}),e.jsx("td",{children:"세탁물, 세제, 코스 선택"}),e.jsx("td",{children:"급수, 세탁, 헹굼, 탈수"}),e.jsx("td",{children:"깨끗한 세탁물"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"내비게이션"}),e.jsx("td",{children:"출발지, 목적지"}),e.jsx("td",{children:"경로 탐색, 교통 정보 분석"}),e.jsx("td",{children:"최적 경로, 도착 예정 시간"})]})]})]}),e.jsx("h3",{children:"가장 기본적인 IPO 프로그램"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"IPO 구조의 기본 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 가장 기본적인 IPO 프로그램
# ═══════════════════════════════════════

# ── Input (입력) ──────────────────────
name = input("이름을 입력하세요: ")
age = int(input("나이를 입력하세요: "))

# ── Process (처리) ────────────────────
birth_year = 2026 - age
greeting = f"안녕하세요, {name}님!"

# ── Output (출력) ─────────────────────
print(greeting)
print(f"당신은 {birth_year}년에 태어났습니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`이름을 입력하세요: 홍길동
나이를 입력하세요: 20
안녕하세요, 홍길동님!
당신은 2006년에 태어났습니다.`})})]}),e.jsx("h2",{children:"3. PDC(Problem Definition Chart)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"PDC(Problem Definition Chart)"}),"는 프로그램을 작성하기 전에 문제를 체계적으로 정의하는 도구입니다. PDC를 통해 문제의 입력, 처리 과정, 출력을 명확하게 정리하면, 코드 작성이 훨씬 수월해지고 논리적 오류를 줄일 수 있습니다."]}),e.jsx("p",{children:"PDC는 3개의 열(Column)으로 구성됩니다:"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"열"}),e.jsx("th",{children:"내용"}),e.jsx("th",{children:"작성 시 고려사항"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Input"})}),e.jsx("td",{children:"프로그램에 필요한 입력 데이터"}),e.jsx("td",{children:"변수명, 자료형, 입력 방법"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Process"})}),e.jsx("td",{children:"입력을 출력으로 변환하는 처리 과정"}),e.jsx("td",{children:"수식, 알고리즘, 처리 순서"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Output"})}),e.jsx("td",{children:"프로그램이 생성하는 결과"}),e.jsx("td",{children:"출력 형식, 단위, 소수점 자릿수"})]})]})]}),e.jsx("h3",{children:"PDC 작성 5단계"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단계"}),e.jsx("th",{children:"활동"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1단계"}),e.jsx("td",{children:"문제 이해"}),e.jsx("td",{children:"문제를 꼼꼼히 읽고 무엇을 구해야 하는지 파악한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2단계"}),e.jsx("td",{children:"출력 식별"}),e.jsx("td",{children:"최종적으로 무엇을 출력해야 하는지 먼저 결정한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3단계"}),e.jsx("td",{children:"입력 식별"}),e.jsx("td",{children:"출력을 만들기 위해 어떤 데이터가 필요한지 파악한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4단계"}),e.jsx("td",{children:"처리 과정 정의"}),e.jsx("td",{children:"입력을 출력으로 변환하는 수식이나 알고리즘을 정의한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5단계"}),e.jsx("td",{children:"검증"}),e.jsx("td",{children:"예시 데이터로 PDC가 올바른지 확인한다"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"PDC 작성 시 주의사항"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"출력을 먼저 생각하라:"})," 무엇을 구해야 하는지 먼저 정한 뒤, 그에 필요한 입력을 역으로 찾는다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"변수명을 명확하게:"})," width, height 같이 의미 있는 이름을 사용한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"처리 과정을 수식으로:"})," 자연어보다 수학적 수식으로 표현하는 것이 정확하다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"단위를 명시하라:"})," cm, kg, 원 등 단위를 함께 적는다"]})]})]}),e.jsx("h3",{children:"PDC 예시 1: 사각형 넓이 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 사각형 넓이"}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────────────────────────────────────────┐
│          Problem Definition Chart               │
│          사각형 넓이 계산                          │
├────────────┬─────────────────┬──────────────────┤
│   Input    │    Process      │     Output       │
├────────────┼─────────────────┼──────────────────┤
│ 가로(width)│ area = width    │ 넓이(area)       │
│ 세로(height)│       × height │                  │
└────────────┴─────────────────┴──────────────────┘`})})]}),e.jsx("h3",{children:"PDC 예시 2: 원의 넓이와 둘레 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 원의 넓이와 둘레"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────┐
│            Problem Definition Chart                  │
│            원의 넓이와 둘레 계산                        │
├────────────┬───────────────────┬─────────────────────┤
│   Input    │     Process       │      Output         │
├────────────┼───────────────────┼─────────────────────┤
│ 반지름(r)  │ area = 3.14159    │ 넓이(area)          │
│            │        × r × r   │ 둘레(circumference)  │
│            │ circumference     │                     │
│            │  = 2 × 3.14159   │                     │
│            │        × r       │                     │
└────────────┴───────────────────┴─────────────────────┘`})})]}),e.jsx("h3",{children:"PDC 예시 3: BMI 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - BMI(체질량지수) 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────┐
│            Problem Definition Chart                  │
│            BMI(체질량지수) 계산                        │
├──────────────┬──────────────────┬────────────────────┤
│    Input     │    Process       │     Output         │
├──────────────┼──────────────────┼────────────────────┤
│ 키(height_m) │ bmi = weight     │ BMI 수치(bmi)      │
│  (단위: m)   │   / (height_m    │                    │
│ 몸무게(weight)│     × height_m) │                    │
│  (단위: kg)  │                  │                    │
└──────────────┴──────────────────┴────────────────────┘`})})]}),e.jsx("h2",{children:"4. PDC에서 파이썬 코드로 변환하기"}),e.jsxs("p",{children:["PDC를 작성한 후에는 각 열을 파이썬 코드로 ",e.jsx("strong",{children:"체계적으로 변환"}),"할 수 있습니다. 변환 규칙은 매우 명확합니다:"]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"PDC 열"}),e.jsx("th",{children:"파이썬 변환"}),e.jsx("th",{children:"주요 함수/문법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Input"}),e.jsx("td",{children:"사용자 입력받기"}),e.jsxs("td",{children:[e.jsx("code",{children:"input()"}),", ",e.jsx("code",{children:"int()"}),", ",e.jsx("code",{children:"float()"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Process"}),e.jsx("td",{children:"계산/가공 수행"}),e.jsxs("td",{children:["산술연산자(",e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"}),", ",e.jsx("code",{children:"*"}),", ",e.jsx("code",{children:"/"}),"), 함수"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Output"}),e.jsx("td",{children:"결과 출력하기"}),e.jsxs("td",{children:[e.jsx("code",{children:"print()"}),", f-string"]})]})]})]}),e.jsx("h3",{children:"예제 1: 사각형 넓이 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC → 파이썬 코드: 사각형 넓이"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# PDC:
# Input   : 가로(width), 세로(height)
# Process : area = width × height
# Output  : 넓이(area)
# ═══════════════════════════════════════

# ── Input (입력) ──────────────────────
# float()로 형변환하여 소수점 입력도 처리
width = float(input("가로 길이를 입력하세요: "))
height = float(input("세로 길이를 입력하세요: "))

# ── Process (처리) ────────────────────
# PDC의 수식을 그대로 코드로 변환
area = width * height

# ── Output (출력) ─────────────────────
# f-string으로 결과를 보기 좋게 출력
print(f"가로: {width}, 세로: {height}")
print(f"사각형의 넓이: {area}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`가로 길이를 입력하세요: 5
세로 길이를 입력하세요: 3
가로: 5.0, 세로: 3.0
사각형의 넓이: 15.0`})})]}),e.jsx("h3",{children:"예제 2: 원의 넓이와 둘레 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC → 파이썬 코드: 원의 넓이와 둘레"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# PDC:
# Input   : 반지름(r)
# Process : area = π × r × r
#           circumference = 2 × π × r
# Output  : 넓이(area), 둘레(circumference)
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
radius = float(input("원의 반지름을 입력하세요: "))

# ── Process ───────────────────────────
PI = 3.14159  # 원주율 상수
area = PI * radius * radius           # 넓이 = π × r²
circumference = 2 * PI * radius       # 둘레 = 2 × π × r

# ── Output ────────────────────────────
print(f"반지름: {radius}")
print(f"원의 넓이: {area:.2f}")
print(f"원의 둘레: {circumference:.2f}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`원의 반지름을 입력하세요: 5
반지름: 5.0
원의 넓이: 78.54
원의 둘레: 31.42`})})]}),e.jsx("h3",{children:"예제 3: 삼각형 넓이 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────┐
│            Problem Definition Chart                  │
│            삼각형 넓이 계산                             │
├────────────┬───────────────────┬─────────────────────┤
│   Input    │     Process       │      Output         │
├────────────┼───────────────────┼─────────────────────┤
│ 밑변(base) │ area = base       │ 넓이(area)          │
│ 높이(height)│   × height / 2   │                     │
└────────────┴───────────────────┴─────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC → 파이썬 코드: 삼각형 넓이"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# PDC:
# Input   : 밑변(base), 높이(height)
# Process : area = base × height / 2
# Output  : 넓이(area)
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
base = float(input("밑변의 길이를 입력하세요: "))
height = float(input("높이를 입력하세요: "))

# ── Process ───────────────────────────
area = base * height / 2  # 삼각형 넓이 = 밑변 × 높이 ÷ 2

# ── Output ────────────────────────────
print(f"밑변: {base}, 높이: {height}")
print(f"삼각형의 넓이: {area}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`밑변의 길이를 입력하세요: 10
높이를 입력하세요: 6
밑변: 10.0, 높이: 6.0
삼각형의 넓이: 30.0`})})]}),e.jsx("h2",{children:"5. 실습 예제 - 다양한 PDC 활용"}),e.jsx("h3",{children:"예제 4: 온도 변환기 (섭씨 → 화씨)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 온도 변환"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────────┐
│              Problem Definition Chart                    │
│              섭씨 → 화씨 변환                               │
├──────────────┬────────────────────┬──────────────────────┤
│    Input     │     Process        │      Output          │
├──────────────┼────────────────────┼──────────────────────┤
│ 섭씨온도     │ fahrenheit         │ 화씨온도             │
│ (celsius)    │  = celsius × 9/5   │ (fahrenheit)         │
│              │    + 32            │                      │
└──────────────┴────────────────────┴──────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드: 온도 변환기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 온도 변환기 (섭씨 → 화씨)
# 공식: F = C × 9/5 + 32
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
celsius = float(input("섭씨 온도를 입력하세요: "))

# ── Process ───────────────────────────
fahrenheit = celsius * 9 / 5 + 32

# ── Output ────────────────────────────
print(f"{celsius}°C = {fahrenheit:.1f}°F")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`섭씨 온도를 입력하세요: 100
100.0°C = 212.0°F`})})]}),e.jsx("h3",{children:"예제 5: 할인 가격 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 할인 가격 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                할인 가격 계산                                   │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 원가(price)  │ discount = price     │ 할인금액(discount)      │
│ 할인율(rate) │   × rate / 100      │ 최종가격(final_price)    │
│  (단위: %)   │ final_price = price  │                        │
│              │   - discount         │                        │
└──────────────┴──────────────────────┴────────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드: 할인 가격 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 할인 가격 계산기
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
price = int(input("상품 가격을 입력하세요(원): "))
rate = int(input("할인율을 입력하세요(%): "))

# ── Process ───────────────────────────
discount = price * rate / 100        # 할인 금액
final_price = price - discount       # 최종 가격

# ── Output ────────────────────────────
print("=" * 30)
print(f"원래 가격:  {price:>10,}원")
print(f"할인율:     {rate:>9}%")
print(f"할인 금액:  {discount:>10,.0f}원")
print(f"최종 가격:  {final_price:>10,.0f}원")
print("=" * 30)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`상품 가격을 입력하세요(원): 50000
할인율을 입력하세요(%): 20
==============================
원래 가격:      50,000원
할인율:            20%
할인 금액:      10,000원
최종 가격:      40,000원
==============================`})})]}),e.jsx("h3",{children:"예제 6: 환율 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 환율 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                환율 계산기 (원화 → 달러)                        │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 원화(krw)    │ usd = krw / rate     │ 달러 금액(usd)          │
│ 환율(rate)   │                      │                        │
│ (1달러=?원)  │                      │                        │
└──────────────┴──────────────────────┴────────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드: 환율 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 환율 계산기 (원화 → 달러)
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
krw = int(input("한국 원화 금액을 입력하세요: "))
rate = float(input("환율을 입력하세요 (1달러 = ?원): "))

# ── Process ───────────────────────────
usd = krw / rate  # 원화를 달러로 변환

# ── Output ────────────────────────────
print(f"원화: {krw:,}원")
print(f"환율: 1{'$'} = {rate:,.0f}원")
print(f"달러: {'$'}{usd:,.2f}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`한국 원화 금액을 입력하세요: 1300000
환율을 입력하세요 (1달러 = ?원): 1300
원화: 1,300,000원
환율: 1$ = 1,300원
달러: $1,000.00`})})]}),e.jsx("h3",{children:"예제 7: 시간 변환기 (초 → 시:분:초)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 시간 변환"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                초 → 시:분:초 변환                               │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 전체초       │ hours = total_sec    │ 시(hours)              │
│ (total_sec)  │          // 3600    │ 분(minutes)             │
│              │ remainder = total_sec│ 초(seconds)            │
│              │          % 3600     │                        │
│              │ minutes = remainder  │                        │
│              │          // 60      │                        │
│              │ seconds = remainder  │                        │
│              │          % 60       │                        │
└──────────────┴──────────────────────┴────────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드: 시간 변환기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 시간 변환기 (초 → 시:분:초)
# 핵심: 정수 나눗셈(//)과 나머지(%) 연산 활용
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
total_sec = int(input("초를 입력하세요: "))

# ── Process ───────────────────────────
hours = total_sec // 3600        # 시간 = 전체초 ÷ 3600의 몫
remainder = total_sec % 3600     # 시간을 빼고 남은 초
minutes = remainder // 60        # 분 = 남은초 ÷ 60의 몫
seconds = remainder % 60         # 초 = 남은초 ÷ 60의 나머지

# ── Output ────────────────────────────
print(f"{total_sec}초 = {hours}시간 {minutes}분 {seconds}초")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`초를 입력하세요: 3725
3725초 = 1시간 2분 5초`})})]}),e.jsx("h3",{children:"예제 8: 평균 계산기 (3과목)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC - 3과목 평균 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                3과목 성적 평균 계산                              │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 국어(kor)    │ total = kor + eng    │ 총점(total)            │
│ 영어(eng)    │         + math       │ 평균(average)           │
│ 수학(math)   │ average = total / 3  │                        │
└──────────────┴──────────────────────┴────────────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드: 3과목 평균 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 3과목 성적 평균 계산기
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
print("=== 성적 입력 ===")
kor = int(input("국어 점수: "))
eng = int(input("영어 점수: "))
math = int(input("수학 점수: "))

# ── Process ───────────────────────────
total = kor + eng + math      # 총점 계산
average = total / 3            # 평균 계산

# ── Output ────────────────────────────
print("\\n=== 성적 결과 ===")
print(f"국어: {kor}점")
print(f"영어: {eng}점")
print(f"수학: {math}점")
print(f"총점: {total}점")
print(f"평균: {average:.1f}점")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`=== 성적 입력 ===
국어 점수: 95
영어 점수: 88
수학 점수: 92

=== 성적 결과 ===
국어: 95점
영어: 88점
수학: 92점
총점: 275점
평균: 91.7점`})})]}),e.jsx("h2",{children:"6. 프로그램 설계의 중요성"}),e.jsxs("p",{children:["많은 초보 프로그래머가 문제를 보자마자 바로 코드를 작성하려 합니다. 그러나 전문 프로그래머일수록 ",e.jsx("strong",{children:'"코드를 먼저 작성하지 말고, 설계를 먼저 하라"'}),"는 원칙을 철저히 따릅니다. 설계 없이 작성된 코드는 논리적 오류가 많고, 수정이 어려우며, 다른 사람이 이해하기 힘듭니다."]}),e.jsx("p",{children:"체계적인 프로그램 개발 과정은 다음과 같습니다:"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"프로그램 개발 과정"}),e.jsx("pre",{children:e.jsx("code",{children:`문제 이해
   ↓
PDC 작성 (입력/처리/출력 정의)
   ↓
순서도(Flowchart) 작성 (논리 흐름 시각화)
   ↓
의사코드(Pseudocode) 작성 (자연어로 알고리즘 기술)
   ↓
코드 작성 (프로그래밍 언어로 구현)
   ↓
테스트 및 디버깅 (오류 수정)`})})]}),e.jsx("h3",{children:"설계 도구 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"도구"}),e.jsx("th",{children:"형태"}),e.jsx("th",{children:"장점"}),e.jsx("th",{children:"단점"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PDC"})}),e.jsx("td",{children:"표(Table)"}),e.jsx("td",{children:"간단하고 빠르게 작성 가능"}),e.jsx("td",{children:"복잡한 논리 흐름 표현에 한계"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"순서도(Flowchart)"})}),e.jsx("td",{children:"다이어그램"}),e.jsx("td",{children:"논리 흐름을 시각적으로 명확히 표현"}),e.jsx("td",{children:"작성에 시간이 많이 소요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"의사코드(Pseudocode)"})}),e.jsx("td",{children:"텍스트"}),e.jsx("td",{children:"코드와 유사하여 변환이 쉬움"}),e.jsx("td",{children:"시각적 직관성이 떨어짐"})]})]})]}),e.jsx("h2",{children:"7. 의사코드(Pseudocode) 소개"}),e.jsxs("p",{children:[e.jsx("strong",{children:"의사코드(Pseudocode)"}),"란 프로그래밍 언어의 문법에 얽매이지 않고,",e.jsx("strong",{children:"자연어에 가까운 형태"}),"로 알고리즘을 기술하는 방법입니다. 특정 프로그래밍 언어에 종속되지 않아 누구나 이해할 수 있습니다."]}),e.jsx("h3",{children:"의사코드 작성 규칙"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"규칙"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"입력"}),e.jsx("td",{children:"READ 또는 INPUT 사용"}),e.jsx("td",{children:"READ width"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"출력"}),e.jsx("td",{children:"PRINT 또는 DISPLAY 사용"}),e.jsx("td",{children:"PRINT area"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"대입"}),e.jsx("td",{children:"= 또는 ← 사용"}),e.jsx("td",{children:"area = width × height"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"조건"}),e.jsx("td",{children:"IF-THEN-ELSE 사용"}),e.jsx("td",{children:"IF score >= 60 THEN ..."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"반복"}),e.jsx("td",{children:"WHILE 또는 FOR 사용"}),e.jsx("td",{children:"WHILE i <= N DO ..."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"들여쓰기"}),e.jsx("td",{children:"블록 구분에 사용"}),e.jsx("td",{children:"조건/반복 내부를 들여쓰기"})]})]})]}),e.jsx("h3",{children:"PDC와 의사코드 비교 예제: 사각형 넓이"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC 표현"}),e.jsx("pre",{children:e.jsx("code",{children:`Input   : width, height
Process : area = width × height
Output  : area`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"의사코드 표현"}),e.jsx("pre",{children:e.jsx("code",{children:`BEGIN
    READ width
    READ height
    area = width × height
    PRINT "사각형의 넓이:", area
END`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`width = float(input("가로: "))
height = float(input("세로: "))
area = width * height
print(f"사각형의 넓이: {area}")`})})]}),e.jsx("p",{children:"위 예제에서 볼 수 있듯이, PDC는 입력/처리/출력을 구분하여 정리하는 데 초점을 맞추고, 의사코드는 실행 순서를 자연어로 기술하는 데 초점을 맞춥니다. 두 도구를 함께 사용하면 프로그램 설계가 훨씬 체계적이 됩니다."}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IPO 구조:"})," 모든 프로그램은 입력(Input) → 처리(Process) → 출력(Output)으로 구성된다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PDC:"})," 프로그램 작성 전 Input, Process, Output을 표로 정리하는 설계 도구이다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PDC 변환 규칙:"})," Input → ",e.jsx("code",{children:"input()"}),", Process → 연산, Output → ",e.jsx("code",{children:"print()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"형변환:"})," ",e.jsx("code",{children:"input()"}),"의 결과는 항상 문자열이므로, 숫자 연산 시 ",e.jsx("code",{children:"int()"})," 또는 ",e.jsx("code",{children:"float()"}),"로 변환해야 한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"설계 먼저:"})," 코드를 바로 작성하지 말고 PDC → 순서도 → 의사코드 → 코드 순으로 개발한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"의사코드:"})," 자연어에 가까운 형태로 알고리즘을 기술하는 방법으로, 특정 언어에 종속되지 않는다"]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"자주 하는 실수"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"input() 형변환 누락:"})," ",e.jsx("code",{children:"input()"}),"은 항상 문자열(str)을 반환합니다. 숫자 연산을 하려면 반드시 ",e.jsx("code",{children:"int()"}),"나 ",e.jsx("code",{children:"float()"}),"로 감싸야 합니다.",e.jsx("br",{}),"예: ",e.jsx("code",{children:'age = int(input("나이: "))'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Process 없이 바로 출력:"})," 입력을 받자마자 바로 출력하면 처리 단계가 빠지게 됩니다. 반드시 입력 데이터를 가공하는 처리 과정을 거쳐야 합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"변수명과 출력 혼동:"})," ",e.jsx("code",{children:"print(area)"}),"는 변수 area의 값을 출력하고,",e.jsx("code",{children:'print("area")'}),'는 문자열 "area"를 출력합니다. 따옴표 유무에 주의하세요.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"PDC에서 처리 순서 무시:"})," 여러 처리 단계가 있을 때, 순서가 중요합니다. 예를 들어 할인 금액을 먼저 구한 뒤 최종 가격을 계산해야 합니다."]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsx("p",{children:e.jsx("strong",{children:"과제 1: 시간(분) → 시간/분 변환기"})}),e.jsxs("p",{children:['분(minutes) 단위의 시간을 입력받아 "○시간 ○분" 형태로 변환하여 출력하는 프로그램을 작성하세요.',e.jsx("br",{}),"먼저 PDC를 작성한 후 파이썬 코드로 구현하세요.",e.jsx("br",{}),"예) 입력: 135 → 출력: 2시간 15분",e.jsx("br",{}),"힌트: 정수 나눗셈(//)과 나머지(%) 연산을 활용합니다."]}),e.jsx("p",{children:e.jsx("strong",{children:"과제 2: 거스름돈 계산기"})}),e.jsxs("p",{children:["상품 가격과 지불 금액을 입력받아, 거스름돈을 지폐/동전 단위별로 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),"단위: 50000원, 10000원, 5000원, 1000원, 500원, 100원, 50원, 10원",e.jsx("br",{}),"예) 거스름돈 36740원 → 50000원: 0장, 10000원: 3장, 5000원: 1장, 1000원: 1장, 500원: 1개, 100원: 2개, 50원: 0개, 10원: 4개",e.jsx("br",{}),"힌트: 큰 단위부터 차례로 몫(//)과 나머지(%)를 구합니다."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"심화 문제"}),e.jsx("p",{children:e.jsx("strong",{children:"심화 1: 직사각형 대각선 길이 계산"})}),e.jsxs("p",{children:["직사각형의 가로와 세로를 입력받아 대각선의 길이를 계산하세요.",e.jsx("br",{}),"피타고라스 정리: 대각선 = √(가로² + 세로²)",e.jsx("br",{}),"힌트: ",e.jsx("code",{children:"import math"})," 후 ",e.jsx("code",{children:"math.sqrt()"})," 또는 ",e.jsx("code",{children:"** 0.5"}),"를 사용합니다.",e.jsx("br",{}),"PDC를 먼저 작성한 후 코드를 구현하세요."]}),e.jsx("p",{children:e.jsx("strong",{children:"심화 2: 택시 요금 계산기"})}),e.jsxs("p",{children:["이동 거리(km)를 입력받아 택시 요금을 계산하세요.",e.jsx("br",{}),"요금 체계: 기본요금 4,800원 (2km까지), 추가요금 km당 1,000원",e.jsx("br",{}),"예) 5km → 4,800 + (5-2) × 1,000 = 7,800원",e.jsx("br",{}),"PDC를 먼저 작성한 후 코드를 구현하세요.",e.jsx("br",{}),"(조건문은 아직 배우지 않았으므로, 2km 이상만 입력된다고 가정합니다)"]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/python-learning/03",className:"lesson-nav-btn prev",children:"← 03: Data Type"}),e.jsx(s,{to:"/python-learning/05",className:"lesson-nav-btn next",children:"05: Turtle →"})]})]})})})]});export{d as default};
