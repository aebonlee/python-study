import{b as i,j as e,L as n}from"./index-2qF5436M.js";function l(){const{t:r,lang:s}=i();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s==="en"?"Week 6: Drawing Flowcharts with Flowgorithm":"6주차: Flowgorithm 활용 순서도 그리기"}),e.jsx("p",{children:s==="en"?"Visualizing algorithms as flowcharts and converting them to code":"알고리즘을 순서도로 시각화하고 코드로 변환하기"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"Explain the definition of an algorithm and its 5 conditions"}),e.jsx("li",{children:"Memorize the 8 basic flowchart symbols and use them correctly"}),e.jsx("li",{children:"Understand the 3 control structures (sequence, selection, iteration) and express them as flowcharts"}),e.jsx("li",{children:"Use the Flowgorithm tool to create and execute flowcharts"}),e.jsx("li",{children:"Convert flowcharts to Python code and Python code to flowcharts"})]})]}),e.jsx("h2",{children:"1. What Is an Algorithm?"}),e.jsxs("p",{children:["An ",e.jsx("strong",{children:"algorithm"})," is a ",e.jsx("strong",{children:"step-by-step procedure for solving a problem"}),'. In computer science, an algorithm is a clear and finite series of instructions that transforms a given input into the desired output. The name "algorithm" originates from the 9th-century Persian mathematician Al-Khwarizmi.']}),e.jsx("h3",{children:"5 Conditions of an Algorithm"}),e.jsxs("p",{children:["A valid algorithm must satisfy all of the following 5 conditions. These criteria were established by computer scientist ",e.jsx("strong",{children:"Donald Knuth"}),"."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Condition"}),e.jsx("th",{children:"English"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Input"})}),e.jsx("td",{children:"Input"}),e.jsx("td",{children:"Must have 0 or more inputs"}),e.jsx("td",{children:"Input two numbers a, b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Output"})}),e.jsx("td",{children:"Output"}),e.jsx("td",{children:"Must have 1 or more outputs"}),e.jsx("td",{children:"Output the sum result"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Definiteness"})}),e.jsx("td",{children:"Definiteness"}),e.jsx("td",{children:"Each step must be unambiguous and clear"}),e.jsx("td",{children:'"Add roughly" (X) → "Calculate a + b" (O)'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Finiteness"})}),e.jsx("td",{children:"Finiteness"}),e.jsx("td",{children:"Must terminate within a finite number of steps"}),e.jsx("td",{children:"An infinite loop is not an algorithm"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Effectiveness"})}),e.jsx("td",{children:"Effectiveness"}),e.jsx("td",{children:"Each step must be executable"}),e.jsx("td",{children:"Cannot include impossible operations"})]})]})]}),e.jsx("h3",{children:"Everyday Algorithm Examples"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"알고리즘의 정의와 5가지 조건을 설명할 수 있다"}),e.jsx("li",{children:"순서도의 8가지 기본 기호를 암기하고 올바르게 사용할 수 있다"}),e.jsx("li",{children:"3가지 제어 구조(순차, 선택, 반복)를 이해하고 순서도로 표현할 수 있다"}),e.jsx("li",{children:"Flowgorithm 도구를 활용하여 순서도를 작성하고 실행할 수 있다"}),e.jsx("li",{children:"순서도를 파이썬 코드로, 파이썬 코드를 순서도로 변환할 수 있다"})]})]}),e.jsx("h2",{children:"1. 알고리즘(Algorithm)이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"알고리즘(Algorithm)"}),"이란 ",e.jsx("strong",{children:"문제를 해결하기 위한 단계적 절차"}),'입니다. 컴퓨터 과학에서 알고리즘은 주어진 입력을 원하는 출력으로 변환하는 명확하고 유한한 일련의 명령입니다. "알고리즘"이라는 이름은 9세기 페르시아 수학자 알-콰리즈미(Al-Khwarizmi)의 이름에서 유래했습니다.']}),e.jsx("h3",{children:"알고리즘의 5가지 조건"}),e.jsxs("p",{children:["유효한 알고리즘이 되려면 다음 5가지 조건을 모두 만족해야 합니다. 이는 컴퓨터 과학자 ",e.jsx("strong",{children:"Donald Knuth"}),"가 정립한 기준입니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"조건"}),e.jsx("th",{children:"영문"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"입력"})}),e.jsx("td",{children:"Input"}),e.jsx("td",{children:"0개 이상의 입력이 있어야 한다"}),e.jsx("td",{children:"두 수 a, b를 입력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"출력"})}),e.jsx("td",{children:"Output"}),e.jsx("td",{children:"1개 이상의 출력이 있어야 한다"}),e.jsx("td",{children:"합계 결과를 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"명확성"})}),e.jsx("td",{children:"Definiteness"}),e.jsx("td",{children:"각 단계가 모호하지 않고 명확해야 한다"}),e.jsx("td",{children:'"적당히 더하라" (X) → "a + b를 계산하라" (O)'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"유한성"})}),e.jsx("td",{children:"Finiteness"}),e.jsx("td",{children:"유한한 단계 내에 반드시 종료해야 한다"}),e.jsx("td",{children:"무한 루프는 알고리즘이 아님"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"효율성"})}),e.jsx("td",{children:"Effectiveness"}),e.jsx("td",{children:"각 단계가 실행 가능해야 한다"}),e.jsx("td",{children:"실현 불가능한 연산은 포함할 수 없음"})]})]})]}),e.jsx("h3",{children:"일상생활 알고리즘 예시"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Algorithm Example 1: Cooking Ramen":"알고리즘 예시 1: 라면 끓이기"}),e.jsx("pre",{children:e.jsx("code",{children:`1단계: 냄비에 물 550ml를 넣는다
2단계: 가스불을 켜고 물을 끓인다
3단계: 물이 끓으면 면과 스프를 넣는다
4단계: 4분 30초 동안 끓인다
5단계: 불을 끄고 그릇에 담는다
6단계: 완성!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Algorithm Example 2: Finding a Book in the Library":"알고리즘 예시 2: 도서관에서 책 찾기"}),e.jsx("pre",{children:e.jsx("code",{children:`1단계: 도서관 검색 시스템에 책 제목을 입력한다
2단계: 검색 결과에서 청구기호를 확인한다
3단계: 해당 서가로 이동한다
4단계: 청구기호 순서에 따라 책을 찾는다
5단계: 책이 있으면 → 대출한다
       책이 없으면 → 예약을 신청한다`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Algorithm Representation Methods"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Characteristics"}),e.jsx("th",{children:"Advantages"}),e.jsx("th",{children:"Disadvantages"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Natural Language"})}),e.jsx("td",{children:"Described in everyday language"}),e.jsx("td",{children:"Anyone can understand"}),e.jsx("td",{children:"Can be ambiguous"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Flowchart"})}),e.jsx("td",{children:"Visualized with symbols and arrows"}),e.jsx("td",{children:"Logic flow is intuitive"}),e.jsx("td",{children:"Tedious to create"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Pseudocode"})}),e.jsx("td",{children:"Natural language close to code"}),e.jsx("td",{children:"Easy to convert to code"}),e.jsx("td",{children:"Lacks visual intuitiveness"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Programming Language"})}),e.jsx("td",{children:"Executable code"}),e.jsx("td",{children:"Can be run directly by computer"}),e.jsx("td",{children:"Requires knowledge of language syntax"})]})]})]}),e.jsx("h2",{children:"2. What Is a Flowchart?"}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"flowchart"})," is a diagram that visualizes the logical flow of an algorithm using",e.jsx("strong",{children:" standardized symbols"}),". IBM standardized it in the 1960s for program documentation, and it was later established as the ISO 5807 international standard."]}),e.jsx("h3",{children:"Advantages of Flowcharts"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Advantage"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Visual Understanding"})}),e.jsx("td",{children:"Grasp the entire program flow at a glance"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Finding Logic Errors"})}),e.jsx("td",{children:"Discover logical errors before writing code"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Team Communication"})}),e.jsx("td",{children:"Share logic even with non-programmers"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Documentation"})}),e.jsx("td",{children:"Systematically record program structure"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Maintenance"})}),e.jsx("td",{children:"Easily understand structure when modifying the program later"})]})]})]}),e.jsx("h2",{children:"3. Flowchart Symbols"}),e.jsx("p",{children:"Flowcharts use standardized symbols. Each symbol represents a specific type of operation, and arrows (flow lines) connect them to show execution order. The following 8 symbols must be memorized."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Shape"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"English"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Oval (rounded rectangle)"}),e.jsx("td",{children:e.jsx("strong",{children:"Terminal"})}),e.jsx("td",{children:"Terminal / Terminator"}),e.jsx("td",{children:"Start and end of program"}),e.jsx("td",{children:'"Start", "End"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Rectangle"}),e.jsx("td",{children:e.jsx("strong",{children:"Process"})}),e.jsx("td",{children:"Process"}),e.jsx("td",{children:"Operations, assignments, data processing"}),e.jsx("td",{children:'"area = width * height"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Parallelogram"}),e.jsx("td",{children:e.jsx("strong",{children:"Input/Output"})}),e.jsx("td",{children:"Input / Output"}),e.jsx("td",{children:"Data input or output"}),e.jsx("td",{children:'"Input width", "Output area"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Diamond"}),e.jsx("td",{children:e.jsx("strong",{children:"Decision"})}),e.jsx("td",{children:"Decision"}),e.jsx("td",{children:"Conditional branching (Yes/No)"}),e.jsx("td",{children:'"score >= 60?"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Arrow"}),e.jsx("td",{children:e.jsx("strong",{children:"Flow Line"})}),e.jsx("td",{children:"Flow Line"}),e.jsx("td",{children:"Shows execution order and direction"}),e.jsx("td",{children:"Connects symbols"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Circle"}),e.jsx("td",{children:e.jsx("strong",{children:"Connector"})}),e.jsx("td",{children:"Connector"}),e.jsx("td",{children:"Connection point within a page"}),e.jsx("td",{children:"When splitting complex flowcharts"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Hexagon"}),e.jsx("td",{children:e.jsx("strong",{children:"Preparation"})}),e.jsx("td",{children:"Preparation"}),e.jsx("td",{children:"Initialization, loop variable setup"}),e.jsx("td",{children:'"i = 1", "sum = 0"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Double-bordered rectangle"}),e.jsx("td",{children:e.jsx("strong",{children:"Subroutine"})}),e.jsx("td",{children:"Subroutine / Predefined Process"}),e.jsx("td",{children:"Call to a separately defined function"}),e.jsx("td",{children:'"Call calculate_area()"'})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"알고리즘 표현 방법"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"표현 방법"}),e.jsx("th",{children:"특징"}),e.jsx("th",{children:"장점"}),e.jsx("th",{children:"단점"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자연어"})}),e.jsx("td",{children:"일상 언어로 기술"}),e.jsx("td",{children:"누구나 이해 가능"}),e.jsx("td",{children:"모호할 수 있음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"순서도(Flowchart)"})}),e.jsx("td",{children:"기호와 화살표로 시각화"}),e.jsx("td",{children:"논리 흐름이 직관적"}),e.jsx("td",{children:"작성이 번거로움"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"의사코드(Pseudocode)"})}),e.jsx("td",{children:"코드에 가까운 자연어"}),e.jsx("td",{children:"코드 변환이 쉬움"}),e.jsx("td",{children:"시각적 직관성 부족"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"프로그래밍 언어"})}),e.jsx("td",{children:"실행 가능한 코드"}),e.jsx("td",{children:"컴퓨터가 직접 실행"}),e.jsx("td",{children:"언어 문법 지식 필요"})]})]})]}),e.jsx("h2",{children:"2. 순서도(Flowchart)란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"순서도(Flowchart)"}),"란 알고리즘의 논리적 흐름을 ",e.jsx("strong",{children:"표준화된 기호"}),"로 시각화한 다이어그램입니다. 1960년대에 IBM에서 프로그램 문서화를 위해 표준화했으며, 이후 ISO 5807 국제 표준으로 제정되었습니다."]}),e.jsx("h3",{children:"순서도의 장점"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"장점"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"시각적 이해"})}),e.jsx("td",{children:"프로그램의 전체 흐름을 한눈에 파악할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"논리 오류 발견"})}),e.jsx("td",{children:"코드 작성 전에 논리적 오류를 미리 발견할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"팀 의사소통"})}),e.jsx("td",{children:"프로그래머가 아닌 사람과도 로직을 공유할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문서화"})}),e.jsx("td",{children:"프로그램의 구조를 체계적으로 기록할 수 있다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"유지보수"})}),e.jsx("td",{children:"나중에 프로그램을 수정할 때 구조를 쉽게 파악할 수 있다"})]})]})]}),e.jsx("h2",{children:"3. 순서도 기호"}),e.jsx("p",{children:"순서도에는 표준화된 기호가 사용됩니다. 각 기호는 특정 유형의 작업을 나타내며, 화살표(흐름선)로 연결하여 실행 순서를 표현합니다. 다음 8가지 기호를 반드시 암기해야 합니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기호 모양"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"영문"}),e.jsx("th",{children:"용도"}),e.jsx("th",{children:"사용 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"타원형 (둥근 사각형)"}),e.jsx("td",{children:e.jsx("strong",{children:"단말"})}),e.jsx("td",{children:"Terminal / Terminator"}),e.jsx("td",{children:"프로그램의 시작과 끝"}),e.jsx("td",{children:'"시작", "끝"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"직사각형"}),e.jsx("td",{children:e.jsx("strong",{children:"처리"})}),e.jsx("td",{children:"Process"}),e.jsx("td",{children:"연산, 대입 등 데이터 처리"}),e.jsx("td",{children:'"area = width * height"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"평행사변형"}),e.jsx("td",{children:e.jsx("strong",{children:"입출력"})}),e.jsx("td",{children:"Input / Output"}),e.jsx("td",{children:"데이터 입력 또는 출력"}),e.jsx("td",{children:'"width 입력", "area 출력"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"마름모"}),e.jsx("td",{children:e.jsx("strong",{children:"판단"})}),e.jsx("td",{children:"Decision"}),e.jsx("td",{children:"조건 분기 (Yes/No)"}),e.jsx("td",{children:'"score >= 60?"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"화살표"}),e.jsx("td",{children:e.jsx("strong",{children:"흐름선"})}),e.jsx("td",{children:"Flow Line"}),e.jsx("td",{children:"실행 순서와 방향 표시"}),e.jsx("td",{children:"기호와 기호를 연결"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"원"}),e.jsx("td",{children:e.jsx("strong",{children:"연결자"})}),e.jsx("td",{children:"Connector"}),e.jsx("td",{children:"순서도 연결점 (페이지 내)"}),e.jsx("td",{children:"복잡한 순서도를 나눌 때"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"육각형"}),e.jsx("td",{children:e.jsx("strong",{children:"준비"})}),e.jsx("td",{children:"Preparation"}),e.jsx("td",{children:"초기화, 반복 변수 설정"}),e.jsx("td",{children:'"i = 1", "sum = 0"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"양변 이중선 직사각형"}),e.jsx("td",{children:e.jsx("strong",{children:"서브루틴"})}),e.jsx("td",{children:"Subroutine / Predefined Process"}),e.jsx("td",{children:"별도로 정의된 함수 호출"}),e.jsx("td",{children:'"calculate_area() 호출"'})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart Symbol Summary (Text Representation)":"순서도 기호 요약 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────┐
│  시작   │  ← 단말(Terminal): 타원형으로 시작/끝 표시
└────┬────┘
     ↓
╱‾‾‾‾‾‾‾‾╲
│ 입력: n  │  ← 입출력(I/O): 평행사변형
╲__________╱
     ↓
┌──────────┐
│ sum = 0  │  ← 처리(Process): 직사각형
└────┬─────┘
     ↓
    ╱╲
   ╱  ╲
  ╱ 조건 ╲    ← 판단(Decision): 마름모
  ╲  ?  ╱     → Yes / No 분기
   ╲  ╱
    ╲╱
     ↓
╱‾‾‾‾‾‾‾‾‾╲
│ 출력: sum │  ← 입출력(I/O)
╲___________╱
     ↓
┌─────────┐
│   끝    │  ← 단말(Terminal)
└─────────┘`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. The 3 Control Structures"}),e.jsxs("p",{children:["All programs are composed of combinations of the following ",e.jsx("strong",{children:"3 control structures"}),". This is the core principle of ",e.jsx("strong",{children:"Structured Programming"}),", based on the theorem proven by mathematicians Bohm and Jacopini in 1966 (Bohm-Jacopini Theorem)."]}),e.jsx("h3",{children:"(1) Sequence Structure"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"sequence structure"})," is the most basic control structure, where commands are executed ",e.jsx("strong",{children:"in order from top to bottom"}),". Each line is performed one after another without any branching or looping."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. 3가지 제어 구조"}),e.jsxs("p",{children:["모든 프로그램은 다음 ",e.jsx("strong",{children:"3가지 제어 구조"}),"의 조합으로 구성됩니다. 이것은 ",e.jsx("strong",{children:"구조적 프로그래밍(Structured Programming)"}),"의 핵심 원리이며, 1966년 수학자 Bohm과 Jacopini가 증명한 정리(Bohm-Jacopini Theorem)에 기반합니다."]}),e.jsx("h3",{children:"(1) 순차 구조 (Sequence)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"순차 구조"}),"는 가장 기본적인 제어 구조로, 명령을 ",e.jsx("strong",{children:"위에서 아래로 순서대로"}),"실행합니다. 별도의 분기나 반복 없이 한 줄씩 차례대로 수행됩니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Sequence Structure Flowchart (Text Representation)":"순차 구조 순서도 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────┐
│  시작   │
└────┬────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾╲
│ 입력: name  │
╲_____________╱
     ↓
┌──────────────────────┐
│ msg = "안녕, " + name │
└──────────┬───────────┘
           ↓
╱‾‾‾‾‾‾‾‾‾‾‾╲
│ 출력: msg   │
╲_____________╱
     ↓
┌─────────┐
│   끝    │
└─────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Sequence Structure → Python Code":"순차 구조 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 순차 구조: 이름 입력 → 인사말 생성 → 출력 ──

# 입력
name = input("이름을 입력하세요: ")

# 처리
msg = "안녕하세요, " + name + "님!"

# 출력
print(msg)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`이름을 입력하세요: 홍길동
안녕하세요, 홍길동님!`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"(2) Selection Structure"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"selection structure"})," is a structure where the ",e.jsx("strong",{children:"execution path varies based on a condition"}),". It uses the diamond (decision) symbol in flowcharts, performing different processing depending on whether the condition is true or false."]}),e.jsx("h4",{children:"Single Selection (if)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"(2) 선택 구조 (Selection)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"선택 구조"}),"는 ",e.jsx("strong",{children:"조건에 따라 실행 경로가 달라지는"})," 구조입니다. 순서도에서 마름모(판단) 기호를 사용하며, 조건의 참/거짓에 따라 서로 다른 처리를 수행합니다."]}),e.jsx("h4",{children:"단일 선택 (if)"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Single Selection Flowchart":"단일 선택 구조 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────┐
│  시작   │
└────┬────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾╲
│ 입력: score  │
╲______________╱
     ↓
    ╱╲
   ╱  ╲
  ╱score╲     Yes
  ╲>=60?╱ ─────────→ ╱‾‾‾‾‾‾‾‾‾‾‾╲
   ╲  ╱              │출력: "합격" │
    ╲╱               ╲_____________╱
     │ No                    │
     ├───────────────────────┘
     ↓
┌─────────┐
│   끝    │
└─────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Single Selection → Python Code":"단일 선택 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")

print("프로그램을 종료합니다.")`})})]}),e.jsx("h4",{children:s==="en"?"Dual Selection (if-else)":"이중 선택 (if-else)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Dual Selection Flowchart":"이중 선택 구조 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────┐
│   시작   │
└────┬─────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾╲
│ 입력: score  │
╲______________╱
     ↓
    ╱╲
   ╱  ╲
  ╱score╲
  ╲>=60?╱
   ╲  ╱
    ╲╱
   ╱  ╲
  Yes    No
  ↓      ↓
╱‾‾‾‾╲  ╱‾‾‾‾‾‾╲
│합격 │  │불합격  │
╲_____╱  ╲_______╱
  ↓         ↓
  └────┬────┘
       ↓
┌──────────┐
│    끝    │
└──────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Dual Selection → Python Code":"이중 선택 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`})})]}),e.jsx("h4",{children:s==="en"?"Multiple Selection (if-elif-else)":"다중 선택 (if-elif-else)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Multiple Selection Flowchart":"다중 선택 구조 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────┐
│   시작   │
└────┬─────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾╲
│ 입력: score  │
╲______________╱
     ↓
    ╱╲
   ╱  ╲         Yes
  ╱>=90?╲ ──────────→  grade = "A"
  ╲    ╱                    │
   ╲  ╱                     │
    ╲╱  No                  │
     ↓                      │
    ╱╲                      │
   ╱  ╲         Yes         │
  ╱>=80?╲ ──────────→  grade = "B"
  ╲    ╱                    │
   ╲  ╱                     │
    ╲╱  No                  │
     ↓                      │
    ╱╲                      │
   ╱  ╲         Yes         │
  ╱>=70?╲ ──────────→  grade = "C"
  ╲    ╱                    │
   ╲  ╱                     │
    ╲╱  No                  │
     ↓                      │
  grade = "F"               │
     │                      │
     ├──────────────────────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾‾╲
│ 출력: grade   │
╲_______________╱
     ↓
┌──────────┐
│    끝    │
└──────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Multiple Selection → Python Code: Grade Classification":"다중 선택 → 파이썬 코드: 성적 등급"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 성적 등급 판별 프로그램 ──

# 입력
score = int(input("점수를 입력하세요: "))

# 판단 (다중 선택)
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# 출력
print(f"점수: {score}, 등급: {grade}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`점수를 입력하세요: 85
점수: 85, 등급: B`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"(3) Iteration Structure (Loop)"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"iteration structure"})," ",e.jsx("strong",{children:"repeats specific processing while a condition is true"}),". There are two types: pre-test loops (while) and count-based loops (for)."]}),e.jsx("h4",{children:"Pre-test Loop (while)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"(3) 반복 구조 (Iteration / Loop)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"반복 구조"}),"는 ",e.jsx("strong",{children:"조건이 참인 동안 특정 처리를 반복"}),"하는 구조입니다. 반복 구조에는 사전 검사 반복(while)과 횟수 반복(for) 두 가지가 있습니다."]}),e.jsx("h4",{children:"사전 검사 반복 (while)"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"While Loop Flowchart":"while 반복 구조 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────┐
│   시작   │
└────┬─────┘
     ↓
┌──────────┐
│  i = 1   │  ← 초기화
└────┬─────┘
     ↓
    ╱╲
   ╱  ╲         No
  ╱i<=5?╲ ──────────→ ┌──────┐
  ╲    ╱               │  끝  │
   ╲  ╱                └──────┘
    ╲╱
     │ Yes
     ↓
╱‾‾‾‾‾‾‾‾‾‾╲
│ 출력: i    │
╲____________╱
     ↓
┌──────────┐
│ i = i + 1│  ← 증가
└────┬─────┘
     │
     └──────→ (판단으로 돌아감)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"While Loop → Python Code":"while 반복 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 1부터 5까지 출력 (while문) ──

i = 1            # 초기화
while i <= 5:    # 조건 검사
    print(f"반복 {i}번째")
    i = i + 1    # 증가

print("반복 종료")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`반복 1번째
반복 2번째
반복 3번째
반복 4번째
반복 5번째
반복 종료`})})]}),e.jsx("h4",{children:s==="en"?"Count-based Loop (for)":"횟수 반복 (for)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"For Loop Flowchart":"for 반복 구조 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────┐
│   시작   │
└────┬─────┘
     ↓
┌──────────────────┐
│ i를 1부터 5까지  │  ← 준비(Preparation) 기호 사용
│ 1씩 증가하며     │
└────┬─────────────┘
     ↓
    ╱╲
   ╱  ╲         No (범위 초과)
  ╱범위 ╲ ──────────→ ┌──────┐
  ╲내?  ╱              │  끝  │
   ╲  ╱                └──────┘
    ╲╱
     │ Yes
     ↓
╱‾‾‾‾‾‾‾‾‾‾╲
│ 출력: i    │
╲____________╱
     │
     └──────→ (다음 i 값으로)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"For Loop → Python Code":"for 반복 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 1부터 5까지 출력 (for문) ──

for i in range(1, 6):    # i = 1, 2, 3, 4, 5
    print(f"반복 {i}번째")

print("반복 종료")`})})]}),e.jsx("h4",{children:s==="en"?"Loop Example: Multiplication Table":"반복 구조 예시: 구구단"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Multiplication Table Flowchart":"구구단 순서도"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────┐
│   시작   │
└────┬─────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾╲
│ 입력: dan    │  (몇 단?)
╲______________╱
     ↓
┌──────────┐
│  i = 1   │
└────┬─────┘
     ↓
    ╱╲
   ╱  ╲         No
  ╱i<=9?╲ ──────────→ ┌──────┐
  ╲    ╱               │  끝  │
   ╲  ╱                └──────┘
    ╲╱
     │ Yes
     ↓
┌────────────────────┐
│result = dan × i    │
└────┬───────────────┘
     ↓
╱‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾╲
│출력: dan×i = result  │
╲_____________________╱
     ↓
┌──────────┐
│ i = i + 1│
└────┬─────┘
     └──────→ (판단으로)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Multiplication Table → Python Code":"구구단 → 파이썬 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── 구구단 출력 ──

dan = int(input("몇 단을 출력할까요? "))

print(f"\\n=== {dan}단 ===")
for i in range(1, 10):
    result = dan * i
    print(f"{dan} × {i} = {result}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`몇 단을 출력할까요? 7

=== 7단 ===
7 × 1 = 7
7 × 2 = 14
7 × 3 = 21
7 × 4 = 28
7 × 5 = 35
7 × 6 = 42
7 × 7 = 49
7 × 8 = 56
7 × 9 = 63`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. Introduction to Flowgorithm"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Flowgorithm"})," is a free educational tool where you create flowcharts graphically and the ",e.jsx("strong",{children:"program runs automatically"}),". It provides an intuitive understanding of the relationship between flowcharts and programming, and is widely used in introductory programming education worldwide."]}),e.jsx("h3",{children:"Installation"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Step"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Step 1"}),e.jsxs("td",{children:["Visit ",e.jsx("a",{href:"http://www.flowgorithm.org",target:"_blank",rel:"noopener noreferrer",children:"flowgorithm.org"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Step 2"}),e.jsx("td",{children:"Download the latest version from the Download menu"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Step 3"}),e.jsx("td",{children:"Run the downloaded installer and proceed with installation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Step 4"}),e.jsx("td",{children:"Launch Flowgorithm after installation is complete"})]})]})]}),e.jsx("h3",{children:"How to Use Flowgorithm"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"How to Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Program Start/End"})}),e.jsx("td",{children:'"Main" start and "End" terminal symbols are automatically placed'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Adding Symbols"})}),e.jsx("td",{children:"Click on a flow line (arrow) to see the list of symbols to add"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Declaring Variables"})}),e.jsx("td",{children:"Add a Declare symbol → Specify variable name and type (Integer, Real, String, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Assignment"})}),e.jsx("td",{children:"Add an Assign symbol → Assign a value or expression to a variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Input"})}),e.jsx("td",{children:"Add an Input symbol → Store user input into a variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Output"})}),e.jsx("td",{children:"Add an Output symbol → Specify the value or expression to output"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Condition"})}),e.jsx("td",{children:"Add an If symbol → Enter condition, add processing to True/False paths"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Loop"})}),e.jsx("td",{children:"Add a While or For symbol → Write loop condition and body"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Run"})}),e.jsx("td",{children:"Click the Play button in the menu bar → Execute the entire program"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Execution"})}),e.jsx("td",{children:"Click the Step button in the menu bar → Execute one step at a time (useful for debugging)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Code Conversion"})}),e.jsx("td",{children:"Menu → Tools → Source Code Viewer → Select language (Python, etc.)"})]})]})]}),e.jsx("h3",{children:"Flowgorithm Variable Types"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Flowgorithm Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Python Equivalent"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Integer"})}),e.jsx("td",{children:"Integer numbers"}),e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"1, -5, 100"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Real"})}),e.jsx("td",{children:"Decimal numbers"}),e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"3.14, -2.5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"String"})}),e.jsx("td",{children:"Text strings"}),e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:'"Hello", "Hi"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Boolean"})}),e.jsx("td",{children:"Logical values (true/false)"}),e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"true, false"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. Flowgorithm 도구 소개"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Flowgorithm"}),"은 순서도를 그래픽으로 작성하면 ",e.jsx("strong",{children:"자동으로 프로그램이 실행"}),"되는 무료 교육용 도구입니다. 순서도와 프로그래밍의 관계를 직관적으로 이해할 수 있어 전 세계 프로그래밍 입문 교육에서 널리 사용되고 있습니다."]}),e.jsx("h3",{children:"설치 방법"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단계"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1단계"}),e.jsxs("td",{children:[e.jsx("a",{href:"http://www.flowgorithm.org",target:"_blank",rel:"noopener noreferrer",children:"flowgorithm.org"})," 접속"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2단계"}),e.jsx("td",{children:"Download 메뉴에서 최신 버전 다운로드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3단계"}),e.jsx("td",{children:"다운로드한 설치 파일 실행 → 설치 진행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4단계"}),e.jsx("td",{children:"설치 완료 후 Flowgorithm 실행"})]})]})]}),e.jsx("h3",{children:"Flowgorithm 사용 방법"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"사용 방법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"프로그램 시작/종료"})}),e.jsx("td",{children:'자동으로 "Main" 시작과 "End" 종료 기호가 배치됨'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"기호 추가"})}),e.jsx("td",{children:"흐름선(화살표)을 클릭하면 추가할 기호 목록이 나타남"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"변수 선언"})}),e.jsx("td",{children:"Declare 기호 추가 → 변수명과 타입(Integer, Real, String 등) 지정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"대입"})}),e.jsx("td",{children:"Assign 기호 추가 → 변수에 값 또는 수식 대입"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"입력"})}),e.jsx("td",{children:"Input 기호 추가 → 변수에 사용자 입력값 저장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"출력"})}),e.jsx("td",{children:"Output 기호 추가 → 출력할 값이나 표현식 지정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"조건"})}),e.jsx("td",{children:"If 기호 추가 → 조건식 입력, True/False 분기 경로에 처리 추가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"반복"})}),e.jsx("td",{children:"While 또는 For 기호 추가 → 반복 조건과 본문 작성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실행(Run)"})}),e.jsx("td",{children:"메뉴 바의 ▶ 버튼 클릭 → 전체 프로그램 실행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"단계별 실행(Step)"})}),e.jsx("td",{children:"메뉴 바의 ▶| 버튼 클릭 → 한 단계씩 실행 (디버깅에 유용)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 변환"})}),e.jsx("td",{children:"메뉴 → Tools → Source Code Viewer → 언어 선택 (Python 등)"})]})]})]}),e.jsx("h3",{children:"Flowgorithm의 변수형"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Flowgorithm 타입"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"파이썬 대응"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Integer"})}),e.jsx("td",{children:"정수"}),e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"1, -5, 100"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Real"})}),e.jsx("td",{children:"실수 (소수점)"}),e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"3.14, -2.5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"String"})}),e.jsx("td",{children:"문자열"}),e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:'"Hello", "안녕"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Boolean"})}),e.jsx("td",{children:"논리값 (참/거짓)"}),e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"true, false"})]})]})]})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. Flowchart to Code: Comprehensive Examples"}),e.jsx("h3",{children:"Example 1: Sum of Two Numbers (Sequence)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Input two integers and output their sum."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. 순서도 → 코드 변환 종합 예제"}),e.jsx("h3",{children:"예제 1: 두 수의 합 (순차 구조)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 두 정수를 입력받아 합계를 출력하라."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart (Text Representation)":"순서도 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`[시작]
  ↓
[입력: a]
  ↓
[입력: b]
  ↓
[처리: sum = a + b]
  ↓
[출력: sum]
  ↓
[끝]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Sum of Two Numbers":"파이썬 코드: 두 수의 합"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 예제 1: 두 수의 합 (순차 구조)
# ═══════════════════════════════════════

# 입력
a = int(input("첫 번째 정수: "))
b = int(input("두 번째 정수: "))

# 처리
total = a + b

# 출력
print(f"{a} + {b} = {total}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`첫 번째 정수: 15
두 번째 정수: 27
15 + 27 = 42`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 2: Even/Odd Check (Selection)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Input an integer and determine whether it is even or odd."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 2: 짝수/홀수 판별 (선택 구조)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 정수를 입력받아 짝수인지 홀수인지 판별하라."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart (Text Representation)":"순서도 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`[시작]
  ↓
[입력: num]
  ↓
<num % 2 == 0?>
  ├─ Yes → [출력: "짝수"]
  └─ No  → [출력: "홀수"]
  ↓
[끝]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Even/Odd Check":"파이썬 코드: 짝수/홀수 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 예제 2: 짝수/홀수 판별 (선택 구조)
# 핵심: 나머지 연산(%) 활용
# ═══════════════════════════════════════

# 입력
num = int(input("정수를 입력하세요: "))

# 판단 + 출력
if num % 2 == 0:
    print(f"{num}은(는) 짝수입니다.")
else:
    print(f"{num}은(는) 홀수입니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`정수를 입력하세요: 7
7은(는) 홀수입니다.`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 3: Finding the Maximum (Selection)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Input two numbers and output the larger one."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 3: 최대값 찾기 (선택 구조)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 두 수를 입력받아 더 큰 수를 출력하라."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart (Text Representation)":"순서도 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`[시작]
  ↓
[입력: a]
  ↓
[입력: b]
  ↓
<a > b?>
  ├─ Yes → [처리: max_val = a]
  └─ No  → [처리: max_val = b]
  ↓
[출력: max_val]
  ↓
[끝]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Finding the Maximum":"파이썬 코드: 최대값 찾기"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 예제 3: 두 수 중 최대값 찾기 (선택 구조)
# ═══════════════════════════════════════

# 입력
a = int(input("첫 번째 수: "))
b = int(input("두 번째 수: "))

# 판단
if a > b:
    max_val = a
else:
    max_val = b

# 출력
print(f"두 수 중 최대값: {max_val}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`첫 번째 수: 42
두 번째 수: 78
두 수 중 최대값: 78`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 4: Sum from 1 to N (Loop)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Input an integer N and find the sum from 1 to N."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 4: 1~N 합계 (반복 구조)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 정수 N을 입력받아 1부터 N까지의 합을 구하라."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart (Text Representation)":"순서도 (텍스트 표현)"}),e.jsx("pre",{children:e.jsx("code",{children:`[시작]
  ↓
[입력: N]
  ↓
[처리: total = 0, i = 1]  ← 초기화
  ↓
<i <= N?>
  ├─ Yes → [처리: total = total + i]
  │          ↓
  │        [처리: i = i + 1]
  │          ↓
  │        (판단으로 돌아감)
  └─ No  → [출력: total]
              ↓
           [끝]`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Sum 1~N (while version)":"파이썬 코드: 1~N 합계 (while 버전)"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 예제 4: 1부터 N까지의 합 (반복 구조)
# ═══════════════════════════════════════

# 입력
N = int(input("N을 입력하세요: "))

# 초기화
total = 0
i = 1

# 반복 (while문)
while i <= N:
    total = total + i  # 누적 합산
    i = i + 1          # 카운터 증가

# 출력
print(f"1부터 {N}까지의 합: {total}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Sum 1~N (for version)":"파이썬 코드: 1~N 합계 (for 버전)"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── for문 버전 (더 간결한 파이썬 스타일) ──

N = int(input("N을 입력하세요: "))

total = 0
for i in range(1, N + 1):  # 1부터 N까지
    total = total + i

print(f"1부터 {N}까지의 합: {total}")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Execution Result":"실행 결과"}),e.jsx("pre",{children:e.jsx("code",{children:`N을 입력하세요: 100
1부터 100까지의 합: 5050`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. Algorithm Design Practice"}),e.jsx("p",{children:"A systematic problem-solving process is as follows. Repeated practice of this process builds the ability to approach any problem logically."})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. 알고리즘 설계 연습"}),e.jsx("p",{children:"체계적인 문제 해결 과정은 다음과 같습니다. 이 과정을 반복적으로 연습하면 어떤 문제든 논리적으로 접근할 수 있는 능력이 길러집니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Systematic Problem-Solving Process":"체계적 문제 해결 과정"}),e.jsx("pre",{children:e.jsx("code",{children:`1단계: 문제 분석   → 무엇을 구해야 하는지 파악
2단계: PDC 작성    → Input / Process / Output 정리
3단계: 순서도 작성  → 논리 흐름을 시각화
4단계: 코드 작성   → 프로그래밍 언어로 구현
5단계: 테스트      → 다양한 입력으로 검증`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Comprehensive Example: Finding the Maximum of Three Numbers"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Input three integers and output the largest one."]}),e.jsx("p",{children:e.jsx("strong",{children:"Step 1: Problem Analysis"})}),e.jsx("p",{children:"We need to compare three numbers and find the largest. We use a pairwise comparison approach."}),e.jsx("p",{children:e.jsx("strong",{children:"Step 2: Write PDC"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"종합 예제: 세 수 중 최대값 찾기"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 세 개의 정수를 입력받아 가장 큰 수를 출력하라."]}),e.jsx("p",{children:e.jsx("strong",{children:"1단계: 문제 분석"})}),e.jsx("p",{children:"세 수를 비교하여 가장 큰 수를 찾아야 합니다. 두 수씩 비교하는 방법을 사용합니다."}),e.jsx("p",{children:e.jsx("strong",{children:"2단계: PDC 작성"})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"PDC - Maximum of Three Numbers":"PDC - 세 수 중 최대값"}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                     │
│                세 수 중 최대값 찾기                            │
├──────────────┬───────────────────────┬──────────────────────┤
│    Input     │      Process          │      Output          │
├──────────────┼───────────────────────┼──────────────────────┤
│ 첫째 수(a)   │ max_val = a           │ 최대값(max_val)      │
│ 둘째 수(b)   │ if b > max_val:       │                      │
│ 셋째 수(c)   │   max_val = b         │                      │
│              │ if c > max_val:       │                      │
│              │   max_val = c         │                      │
└──────────────┴───────────────────────┴──────────────────────┘`})})]}),e.jsx("p",{children:e.jsx("strong",{children:s==="en"?"Step 3: Flowchart":"3단계: 순서도"})}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart - Maximum of Three Numbers":"순서도 - 세 수 중 최대값"}),e.jsx("pre",{children:e.jsx("code",{children:`[시작]
  ↓
[입력: a, b, c]
  ↓
[처리: max_val = a]  ← 일단 a를 최대값으로 설정
  ↓
<b > max_val?>
  ├─ Yes → [처리: max_val = b]
  └─ No  → (다음으로)
  ↓
<c > max_val?>
  ├─ Yes → [처리: max_val = c]
  └─ No  → (다음으로)
  ↓
[출력: max_val]
  ↓
[끝]`})})]}),e.jsx("p",{children:e.jsx("strong",{children:s==="en"?"Step 4: Python Code":"4단계: 파이썬 코드"})}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Python Code: Maximum of Three Numbers":"파이썬 코드: 세 수 중 최대값"}),e.jsx("pre",{children:e.jsx("code",{children:`# ═══════════════════════════════════════
# 세 수 중 최대값 찾기 (전체 설계 과정)
# ═══════════════════════════════════════

# ── Input ──
a = int(input("첫 번째 수: "))
b = int(input("두 번째 수: "))
c = int(input("세 번째 수: "))

# ── Process ──
# 일단 a를 최대값으로 가정
max_val = a

# b가 더 크면 max_val을 b로 변경
if b > max_val:
    max_val = b

# c가 더 크면 max_val을 c로 변경
if c > max_val:
    max_val = c

# ── Output ──
print(f"입력한 수: {a}, {b}, {c}")
print(f"최대값: {max_val}")`})})]}),e.jsx("p",{children:e.jsx("strong",{children:s==="en"?"Step 5: Testing":"5단계: 테스트"})}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Various Test Cases":"다양한 테스트 케이스"}),e.jsx("pre",{children:e.jsx("code",{children:`# 테스트 1: 첫 번째가 최대
첫 번째 수: 30
두 번째 수: 10
세 번째 수: 20
입력한 수: 30, 10, 20
최대값: 30

# 테스트 2: 두 번째가 최대
첫 번째 수: 5
두 번째 수: 99
세 번째 수: 50
입력한 수: 5, 99, 50
최대값: 99

# 테스트 3: 세 번째가 최대
첫 번째 수: 10
두 번째 수: 20
세 번째 수: 30
입력한 수: 10, 20, 30
최대값: 30`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Algorithm:"})," A step-by-step procedure for solving a problem, which must satisfy 5 conditions: input, output, definiteness, finiteness, and effectiveness"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flowchart:"})," A diagram that visualizes algorithms using standardized symbols"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"8 Symbols:"})," Terminal (oval), Process (rectangle), I/O (parallelogram), Decision (diamond), Flow line (arrow), Connector (circle), Preparation (hexagon), Subroutine (double-bordered rectangle)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"3 Control Structures:"})," Sequence, Selection, Iteration -- all programs can be implemented using combinations of these three"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sequence:"})," Execute in order from top to bottom"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Selection:"})," Branch based on conditions (if, if-else, if-elif-else)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration:"})," Repeat while a condition is true (while, for)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flowgorithm:"})," A free educational tool for creating and executing flowcharts graphically"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Design Process:"})," Problem analysis → PDC → Flowchart → Code → Testing"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 1: Two-Number Comparison Program"})}),e.jsxs("p",{children:["Create a flowchart in Flowgorithm for the following program, then convert it to Python code.",e.jsx("br",{}),'"A program that inputs two numbers and outputs the larger number, smaller number, and their average"',e.jsx("br",{}),"Submit both the flowchart file (.fprg) and Python code (.py).",e.jsx("br",{}),"Hint: Use the decision (diamond) symbol to compare the two numbers."]}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 2: Sum of Multiples of 3"})}),e.jsxs("p",{children:["Write a program that finds the sum of all multiples of 3 from 1 to 100.",e.jsx("br",{}),"First draw the flowchart, then implement it in Python code.",e.jsx("br",{}),"Hint: Use the condition ",e.jsx("code",{children:"if num % 3 == 0"})," inside a loop.",e.jsx("br",{}),"Expected result: 3 + 6 + 9 + ... + 99 = 1683"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 1: Prime Number Check"})}),e.jsxs("p",{children:["Write a program that inputs an integer N and determines if it is a prime number, both as a flowchart and code.",e.jsx("br",{}),"Prime: A natural number greater than 1 that is only divisible by 1 and itself",e.jsx("br",{}),"Flowchart hint: Loop from 2 to N-1 and check if N is divisible",e.jsx("br",{}),'Example: 7 → "It is a prime number", 12 → "It is not a prime number"']}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 2: Full Multiplication Table"})}),e.jsxs("p",{children:["Write a program that outputs the complete multiplication table from 2 to 9, both as a flowchart and code.",e.jsx("br",{}),"Flowchart hint: A nested loop structure is needed (outer: table number, inner: multiplier)",e.jsx("br",{}),"In Flowgorithm, use nested While or nested For loops.",e.jsx("br",{}),'Output format: "2 x 1 = 2" format with line breaks']})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"알고리즘:"})," 문제를 해결하기 위한 단계적 절차이며, 입력, 출력, 명확성, 유한성, 효율성 5가지 조건을 만족해야 한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"순서도:"})," 알고리즘을 표준화된 기호로 시각화한 다이어그램이다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"8가지 기호:"})," 단말(타원), 처리(직사각형), 입출력(평행사변형), 판단(마름모), 흐름선(화살표), 연결자(원), 준비(육각형), 서브루틴(이중선 직사각형)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"3가지 제어 구조:"})," 순차(Sequence), 선택(Selection), 반복(Iteration) - 이 세 가지의 조합으로 모든 프로그램을 구현할 수 있다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"순차:"})," 위에서 아래로 순서대로 실행"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"선택:"})," 조건에 따라 분기 (if, if-else, if-elif-else)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"반복:"})," 조건이 참인 동안 반복 실행 (while, for)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flowgorithm:"})," 순서도를 그래픽으로 작성하고 실행할 수 있는 무료 교육용 도구이다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"설계 과정:"})," 문제 분석 → PDC → 순서도 → 코드 → 테스트"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsx("p",{children:e.jsx("strong",{children:"과제 1: 두 수 비교 프로그램"})}),e.jsxs("p",{children:["Flowgorithm으로 다음 프로그램의 순서도를 작성한 후, 파이썬 코드로 변환하세요.",e.jsx("br",{}),'"두 수를 입력받아 큰 수, 작은 수, 평균을 출력하는 프로그램"',e.jsx("br",{}),"순서도 파일(.fprg)과 파이썬 코드(.py)를 모두 제출하세요.",e.jsx("br",{}),"힌트: 판단(마름모) 기호를 사용하여 두 수의 크기를 비교합니다."]}),e.jsx("p",{children:e.jsx("strong",{children:"과제 2: 3의 배수의 합"})}),e.jsxs("p",{children:["1부터 100까지의 정수 중에서 3의 배수의 합을 구하는 프로그램을 작성하세요.",e.jsx("br",{}),"먼저 순서도를 그리고, 파이썬 코드로 구현하세요.",e.jsx("br",{}),"힌트: 반복문 안에서 ",e.jsx("code",{children:"if num % 3 == 0"})," 조건을 사용합니다.",e.jsx("br",{}),"예상 결과: 3 + 6 + 9 + ... + 99 = 1683"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"심화 문제"}),e.jsx("p",{children:e.jsx("strong",{children:"심화 1: 소수(Prime Number) 판별"})}),e.jsxs("p",{children:["정수 N을 입력받아 소수인지 판별하는 프로그램을 순서도와 코드로 작성하세요.",e.jsx("br",{}),"소수: 1과 자기 자신으로만 나누어지는 1보다 큰 자연수",e.jsx("br",{}),"순서도 힌트: 2부터 N-1까지 반복하며 나누어 떨어지는지 확인",e.jsx("br",{}),'예시: 7 → "소수입니다", 12 → "소수가 아닙니다"']}),e.jsx("p",{children:e.jsx("strong",{children:"심화 2: 구구단 전체 출력"})}),e.jsxs("p",{children:["2단부터 9단까지 전체 구구단을 출력하는 프로그램을 순서도와 코드로 작성하세요.",e.jsx("br",{}),"순서도 힌트: 이중 반복 구조가 필요합니다 (바깥: 단, 안쪽: 곱하는 수)",e.jsx("br",{}),"Flowgorithm에서는 중첩 While 또는 중첩 For를 사용합니다.",e.jsx("br",{}),'출력 형식: "2 x 1 = 2" 형태로 줄바꿈하여 출력']})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(n,{to:"/python-learning/05",className:"lesson-nav-btn prev",children:"← 05: Turtle"}),e.jsx(n,{to:"/python-learning/07",className:"lesson-nav-btn next",children:s==="en"?"07: IF Conditionals →":"07: IF 조건문 →"})]})]})})})]})}export{l as default};
