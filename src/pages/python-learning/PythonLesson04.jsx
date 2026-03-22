import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson04() {
  const { t, lang } = useLanguage();

  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 4: Input-Process-Output Concept' : '4주차: 입력-처리-출력 개념'}</h1>
          <p>{lang === 'en' ? 'PDC (Problem Definition Chart) Writing and Program Design' : 'PDC(Problem Definition Chart) 작성과 프로그램 설계'}</p>
        </div>
      </section>
      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {lang === 'en' ? (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.learningObjectives')}</h3>
                  <ul>
                    <li>Understand the IPO (Input-Process-Output) structure and explain the basic flow of a program</li>
                    <li>Master how to write a PDC (Problem Definition Chart) and apply it to various problems</li>
                    <li>Systematically convert a PDC into Python code</li>
                    <li>Understand the importance of program design before coding and develop design skills</li>
                  </ul>
                </div>

                {/* ───────────────── 1. What Is a Program? ───────────────── */}
                <h2>1. What Is a Program?</h2>
                <p>
                  A <strong>program</strong> is a <strong>set of instructions</strong> given to a computer.
                  All the software we use daily — messaging apps, video platforms, games — are programs,
                  composed of instructions written by programmers in a specific order and following certain rules.
                </p>
                <p>
                  <strong>Programming</strong> is not simply the act of typing code; it refers to the
                  <strong> entire process of analyzing a problem, designing a solution, and implementing it as code</strong>.
                  A good programmer needs not only coding skills but also problem-solving ability (Computational Thinking).
                </p>

                <h3>Qualities of a Good Program</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Quality</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Correctness</strong></td><td>Must produce the correct output for the given input</td></tr>
                    <tr><td><strong>Efficiency</strong></td><td>Must perform tasks using minimal time and resources</td></tr>
                    <tr><td><strong>Readability</strong></td><td>Must be easy for others to read and understand</td></tr>
                    <tr><td><strong>Maintainability</strong></td><td>Must be easy to modify and extend</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 2. IPO Structure ───────────────── */}
                <h2>2. IPO (Input-Process-Output) Structure</h2>
                <p>
                  Every program fundamentally consists of three stages: <strong>Input → Process → Output</strong>.
                  This is the most basic yet most important concept in programming.
                  No matter how complex a program is, it operates based on this IPO structure.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>Stage</th><th>Description</th><th>Python Functions</th><th>Everyday Example</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Input</strong></td>
                      <td>Collecting data from users, files, sensors, etc.</td>
                      <td><code>input()</code>, file reading</td>
                      <td>Preparing ingredients for a recipe</td>
                    </tr>
                    <tr>
                      <td><strong>Process</strong></td>
                      <td>Transforming, calculating, converting, or evaluating data</td>
                      <td>Operations, conditionals, loops</td>
                      <td>Cooking the ingredients</td>
                    </tr>
                    <tr>
                      <td><strong>Output</strong></td>
                      <td>Delivering results to screen, file, device, etc.</td>
                      <td><code>print()</code>, file writing</td>
                      <td>Plating the finished dish</td>
                    </tr>
                  </tbody>
                </table>

                <h3>IPO Examples in Everyday Life</h3>
                <p>The IPO structure is not limited to computer programs. Many systems around us can be described using the IPO structure.</p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>System</th><th>Input</th><th>Process</th><th>Output</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Cooking</td><td>Ingredients, recipe</td><td>Washing, cutting, stir-frying, boiling</td><td>Finished dish</td></tr>
                    <tr><td>Vending Machine</td><td>Coins/bills, button selection</td><td>Verify amount, check stock, dispense</td><td>Beverage, change</td></tr>
                    <tr><td>ATM</td><td>Card, PIN, amount</td><td>Authentication, balance check, withdrawal</td><td>Cash, receipt</td></tr>
                    <tr><td>Washing Machine</td><td>Laundry, detergent, cycle selection</td><td>Fill water, wash, rinse, spin</td><td>Clean laundry</td></tr>
                    <tr><td>GPS Navigation</td><td>Origin, destination</td><td>Route search, traffic analysis</td><td>Optimal route, ETA</td></tr>
                  </tbody>
                </table>

                <h3>The Most Basic IPO Program</h3>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>학습 목표</h3>
                  <ul>
                    <li>IPO(Input-Process-Output) 구조를 이해하고 프로그램의 기본 흐름을 설명할 수 있다</li>
                    <li>PDC(Problem Definition Chart) 작성법을 숙지하고 다양한 문제에 적용할 수 있다</li>
                    <li>PDC에서 파이썬 코드로 체계적으로 변환할 수 있다</li>
                    <li>코드 작성 전 프로그램 설계의 중요성을 이해하고 설계 능력을 기른다</li>
                  </ul>
                </div>

                {/* ───────────────── 1. 프로그램이란 무엇인가? ───────────────── */}
                <h2>1. 프로그램이란 무엇인가?</h2>
                <p>
                  <strong>프로그램(Program)</strong>이란 컴퓨터에게 주어진 <strong>명령(instruction)의 집합</strong>입니다.
                  우리가 일상에서 사용하는 카카오톡, 유튜브, 게임 등 모든 소프트웨어는 프로그램이며,
                  프로그래머가 특정 순서와 규칙에 따라 작성한 명령들로 구성되어 있습니다.
                </p>
                <p>
                  <strong>프로그래밍(Programming)</strong>은 단순히 코드를 타이핑하는 행위가 아니라,
                  <strong>문제를 분석하고 해결 방법을 설계하며 이를 코드로 구현하는 전 과정</strong>을 의미합니다.
                  좋은 프로그래머는 코딩 실력뿐 아니라 문제 해결 능력(Computational Thinking)을 갖추어야 합니다.
                </p>

                <h3>좋은 프로그램의 조건</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>조건</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>정확성(Correctness)</strong></td><td>주어진 입력에 대해 올바른 출력을 생성해야 한다</td></tr>
                    <tr><td><strong>효율성(Efficiency)</strong></td><td>최소한의 시간과 자원으로 작업을 수행해야 한다</td></tr>
                    <tr><td><strong>가독성(Readability)</strong></td><td>다른 사람이 읽고 이해하기 쉬워야 한다</td></tr>
                    <tr><td><strong>유지보수성(Maintainability)</strong></td><td>수정과 확장이 용이해야 한다</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 2. IPO 구조 ───────────────── */}
                <h2>2. IPO(Input-Process-Output) 구조</h2>
                <p>
                  모든 프로그램은 근본적으로 <strong>입력(Input) → 처리(Process) → 출력(Output)</strong>의
                  세 단계로 구성됩니다. 이것은 프로그래밍에서 가장 기본적이면서도 가장 중요한 개념입니다.
                  아무리 복잡한 프로그램이라도 이 IPO 구조를 기반으로 동작합니다.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>단계</th><th>설명</th><th>파이썬 함수</th><th>일상 예시</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>입력(Input)</strong></td>
                      <td>사용자, 파일, 센서 등으로부터 데이터를 수집하는 단계</td>
                      <td><code>input()</code>, 파일 읽기</td>
                      <td>레시피의 재료 준비</td>
                    </tr>
                    <tr>
                      <td><strong>처리(Process)</strong></td>
                      <td>데이터를 가공, 계산, 변환, 판단하는 단계</td>
                      <td>연산, 조건문, 반복문</td>
                      <td>재료를 조리하는 과정</td>
                    </tr>
                    <tr>
                      <td><strong>출력(Output)</strong></td>
                      <td>결과를 화면, 파일, 장치 등으로 전달하는 단계</td>
                      <td><code>print()</code>, 파일 쓰기</td>
                      <td>완성된 요리를 접시에 담기</td>
                    </tr>
                  </tbody>
                </table>

                <h3>일상생활의 IPO 예시</h3>
                <p>IPO 구조는 컴퓨터 프로그램에만 국한되지 않습니다. 우리 주변의 많은 시스템이 IPO 구조로 설명됩니다.</p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>시스템</th><th>입력(Input)</th><th>처리(Process)</th><th>출력(Output)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>요리</td><td>재료, 레시피</td><td>씻기, 자르기, 볶기, 끓이기</td><td>완성된 음식</td></tr>
                    <tr><td>자판기</td><td>동전/지폐, 버튼 선택</td><td>금액 확인, 재고 확인, 음료 배출</td><td>음료수, 거스름돈</td></tr>
                    <tr><td>ATM</td><td>카드, 비밀번호, 금액</td><td>인증, 잔액 확인, 출금 처리</td><td>현금, 영수증</td></tr>
                    <tr><td>세탁기</td><td>세탁물, 세제, 코스 선택</td><td>급수, 세탁, 헹굼, 탈수</td><td>깨끗한 세탁물</td></tr>
                    <tr><td>내비게이션</td><td>출발지, 목적지</td><td>경로 탐색, 교통 정보 분석</td><td>최적 경로, 도착 예정 시간</td></tr>
                  </tbody>
                </table>

                <h3>가장 기본적인 IPO 프로그램</h3>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic IPO Structure Example' : 'IPO 구조의 기본 예제'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"당신은 {birth_year}년에 태어났습니다.")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`이름을 입력하세요: 홍길동
나이를 입력하세요: 20
안녕하세요, 홍길동님!
당신은 2006년에 태어났습니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 3. PDC ───────────────── */}
                <h2>3. PDC (Problem Definition Chart)</h2>
                <p>
                  A <strong>PDC (Problem Definition Chart)</strong> is a tool for systematically defining
                  a problem before writing a program. By clearly organizing the input, processing steps,
                  and output through a PDC, writing code becomes much easier and logical errors can be reduced.
                </p>
                <p>
                  A PDC is composed of 3 columns:
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Column</th><th>Content</th><th>Considerations</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Input</strong></td><td>Input data needed by the program</td><td>Variable names, data types, input methods</td></tr>
                    <tr><td><strong>Process</strong></td><td>Processing steps to convert input to output</td><td>Formulas, algorithms, processing order</td></tr>
                    <tr><td><strong>Output</strong></td><td>Results generated by the program</td><td>Output format, units, decimal places</td></tr>
                  </tbody>
                </table>

                <h3>5 Steps for Writing a PDC</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Step</th><th>Activity</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Step 1</td><td>Understand the Problem</td><td>Read the problem carefully and identify what needs to be found</td></tr>
                    <tr><td>Step 2</td><td>Identify Output</td><td>First determine what should ultimately be output</td></tr>
                    <tr><td>Step 3</td><td>Identify Input</td><td>Figure out what data is needed to produce the output</td></tr>
                    <tr><td>Step 4</td><td>Define Processing</td><td>Define the formulas or algorithms that convert input to output</td></tr>
                    <tr><td>Step 5</td><td>Verify</td><td>Confirm the PDC is correct using sample data</td></tr>
                  </tbody>
                </table>

                <div className="callout-box">
                  <h3>Tips for Writing a PDC</h3>
                  <ul>
                    <li><strong>Think about output first:</strong> Determine what needs to be calculated, then work backward to find the required input</li>
                    <li><strong>Use clear variable names:</strong> Use meaningful names like width, height</li>
                    <li><strong>Express processing as formulas:</strong> Mathematical expressions are more precise than natural language</li>
                    <li><strong>Specify units:</strong> Include units such as cm, kg, etc.</li>
                  </ul>
                </div>

                <h3>PDC Example 1: Rectangle Area Calculation</h3>
              </>
            ) : (
              <>
                {/* ───────────────── 3. PDC ───────────────── */}
                <h2>3. PDC(Problem Definition Chart)</h2>
                <p>
                  <strong>PDC(Problem Definition Chart)</strong>는 프로그램을 작성하기 전에
                  문제를 체계적으로 정의하는 도구입니다. PDC를 통해 문제의 입력, 처리 과정, 출력을
                  명확하게 정리하면, 코드 작성이 훨씬 수월해지고 논리적 오류를 줄일 수 있습니다.
                </p>
                <p>
                  PDC는 3개의 열(Column)으로 구성됩니다:
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>열</th><th>내용</th><th>작성 시 고려사항</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Input</strong></td><td>프로그램에 필요한 입력 데이터</td><td>변수명, 자료형, 입력 방법</td></tr>
                    <tr><td><strong>Process</strong></td><td>입력을 출력으로 변환하는 처리 과정</td><td>수식, 알고리즘, 처리 순서</td></tr>
                    <tr><td><strong>Output</strong></td><td>프로그램이 생성하는 결과</td><td>출력 형식, 단위, 소수점 자릿수</td></tr>
                  </tbody>
                </table>

                <h3>PDC 작성 5단계</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>단계</th><th>활동</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1단계</td><td>문제 이해</td><td>문제를 꼼꼼히 읽고 무엇을 구해야 하는지 파악한다</td></tr>
                    <tr><td>2단계</td><td>출력 식별</td><td>최종적으로 무엇을 출력해야 하는지 먼저 결정한다</td></tr>
                    <tr><td>3단계</td><td>입력 식별</td><td>출력을 만들기 위해 어떤 데이터가 필요한지 파악한다</td></tr>
                    <tr><td>4단계</td><td>처리 과정 정의</td><td>입력을 출력으로 변환하는 수식이나 알고리즘을 정의한다</td></tr>
                    <tr><td>5단계</td><td>검증</td><td>예시 데이터로 PDC가 올바른지 확인한다</td></tr>
                  </tbody>
                </table>

                <div className="callout-box">
                  <h3>PDC 작성 시 주의사항</h3>
                  <ul>
                    <li><strong>출력을 먼저 생각하라:</strong> 무엇을 구해야 하는지 먼저 정한 뒤, 그에 필요한 입력을 역으로 찾는다</li>
                    <li><strong>변수명을 명확하게:</strong> width, height 같이 의미 있는 이름을 사용한다</li>
                    <li><strong>처리 과정을 수식으로:</strong> 자연어보다 수학적 수식으로 표현하는 것이 정확하다</li>
                    <li><strong>단위를 명시하라:</strong> cm, kg, 원 등 단위를 함께 적는다</li>
                  </ul>
                </div>

                <h3>PDC 예시 1: 사각형 넓이 계산</h3>
              </>
            )}

            {/* SHARED code blocks: PDC examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Rectangle Area' : 'PDC - 사각형 넓이'}</div>
              <pre><code>{`┌─────────────────────────────────────────────────┐
│          Problem Definition Chart               │
│          사각형 넓이 계산                          │
├────────────┬─────────────────┬──────────────────┤
│   Input    │    Process      │     Output       │
├────────────┼─────────────────┼──────────────────┤
│ 가로(width)│ area = width    │ 넓이(area)       │
│ 세로(height)│       × height │                  │
└────────────┴─────────────────┴──────────────────┘`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'PDC Example 2: Area and Circumference of a Circle' : 'PDC 예시 2: 원의 넓이와 둘레 계산'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Circle Area and Circumference' : 'PDC - 원의 넓이와 둘레'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────┐
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
└────────────┴───────────────────┴─────────────────────┘`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'PDC Example 3: BMI Calculation' : 'PDC 예시 3: BMI 계산'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - BMI (Body Mass Index) Calculation' : 'PDC - BMI(체질량지수) 계산'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────┐
│            Problem Definition Chart                  │
│            BMI(체질량지수) 계산                        │
├──────────────┬──────────────────┬────────────────────┤
│    Input     │    Process       │     Output         │
├──────────────┼──────────────────┼────────────────────┤
│ 키(height_m) │ bmi = weight     │ BMI 수치(bmi)      │
│  (단위: m)   │   / (height_m    │                    │
│ 몸무게(weight)│     × height_m) │                    │
│  (단위: kg)  │                  │                    │
└──────────────┴──────────────────┴────────────────────┘`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 4. Converting PDC to Code ───────────────── */}
                <h2>4. Converting PDC to Python Code</h2>
                <p>
                  After writing a PDC, each column can be <strong>systematically converted</strong> to Python code.
                  The conversion rules are very straightforward:
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>PDC Column</th><th>Python Conversion</th><th>Key Functions / Syntax</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Input</td><td>Get user input</td><td><code>input()</code>, <code>int()</code>, <code>float()</code></td></tr>
                    <tr><td>Process</td><td>Perform calculations</td><td>Arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>), functions</td></tr>
                    <tr><td>Output</td><td>Display results</td><td><code>print()</code>, f-string</td></tr>
                  </tbody>
                </table>

                <h3>Example 1: Rectangle Area Calculation</h3>
              </>
            ) : (
              <>
                {/* ───────────────── 4. PDC에서 코드로 변환 ───────────────── */}
                <h2>4. PDC에서 파이썬 코드로 변환하기</h2>
                <p>
                  PDC를 작성한 후에는 각 열을 파이썬 코드로 <strong>체계적으로 변환</strong>할 수 있습니다.
                  변환 규칙은 매우 명확합니다:
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>PDC 열</th><th>파이썬 변환</th><th>주요 함수/문법</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Input</td><td>사용자 입력받기</td><td><code>input()</code>, <code>int()</code>, <code>float()</code></td></tr>
                    <tr><td>Process</td><td>계산/가공 수행</td><td>산술연산자(<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>), 함수</td></tr>
                    <tr><td>Output</td><td>결과 출력하기</td><td><code>print()</code>, f-string</td></tr>
                  </tbody>
                </table>

                <h3>예제 1: 사각형 넓이 계산</h3>
              </>
            )}

            {/* SHARED code blocks: Rectangle example */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC to Python: Rectangle Area' : 'PDC → 파이썬 코드: 사각형 넓이'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"사각형의 넓이: {area}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`가로 길이를 입력하세요: 5
세로 길이를 입력하세요: 3
가로: 5.0, 세로: 3.0
사각형의 넓이: 15.0`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 2: Circle Area and Circumference' : '예제 2: 원의 넓이와 둘레 계산'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC to Python: Circle Area and Circumference' : 'PDC → 파이썬 코드: 원의 넓이와 둘레'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"원의 둘레: {circumference:.2f}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`원의 반지름을 입력하세요: 5
반지름: 5.0
원의 넓이: 78.54
원의 둘레: 31.42`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 3: Triangle Area Calculation' : '예제 3: 삼각형 넓이 계산'}</h3>
            <div className="code-block">
              <div className="code-header">PDC</div>
              <pre><code>{`┌──────────────────────────────────────────────────────┐
│            Problem Definition Chart                  │
│            삼각형 넓이 계산                             │
├────────────┬───────────────────┬─────────────────────┤
│   Input    │     Process       │      Output         │
├────────────┼───────────────────┼─────────────────────┤
│ 밑변(base) │ area = base       │ 넓이(area)          │
│ 높이(height)│   × height / 2   │                     │
└────────────┴───────────────────┴─────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC to Python: Triangle Area' : 'PDC → 파이썬 코드: 삼각형 넓이'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"삼각형의 넓이: {area}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`밑변의 길이를 입력하세요: 10
높이를 입력하세요: 6
밑변: 10.0, 높이: 6.0
삼각형의 넓이: 30.0`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 5. Practice Examples ───────────────── */}
                <h2>5. Practice Examples - Various PDC Applications</h2>

                <h3>Example 4: Temperature Converter (Celsius to Fahrenheit)</h3>
              </>
            ) : (
              <>
                {/* ───────────────── 5. 실습 예제 ───────────────── */}
                <h2>5. 실습 예제 - 다양한 PDC 활용</h2>

                <h3>예제 4: 온도 변환기 (섭씨 → 화씨)</h3>
              </>
            )}

            {/* SHARED code blocks: Temperature converter */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Temperature Conversion' : 'PDC - 온도 변환'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────────┐
│              Problem Definition Chart                    │
│              섭씨 → 화씨 변환                               │
├──────────────┬────────────────────┬──────────────────────┤
│    Input     │     Process        │      Output          │
├──────────────┼────────────────────┼──────────────────────┤
│ 섭씨온도     │ fahrenheit         │ 화씨온도             │
│ (celsius)    │  = celsius × 9/5   │ (fahrenheit)         │
│              │    + 32            │                      │
└──────────────┴────────────────────┴──────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Temperature Converter' : '파이썬 코드: 온도 변환기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
# 온도 변환기 (섭씨 → 화씨)
# 공식: F = C × 9/5 + 32
# ═══════════════════════════════════════

# ── Input ─────────────────────────────
celsius = float(input("섭씨 온도를 입력하세요: "))

# ── Process ───────────────────────────
fahrenheit = celsius * 9 / 5 + 32

# ── Output ────────────────────────────
print(f"{celsius}°C = {fahrenheit:.1f}°F")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`섭씨 온도를 입력하세요: 100
100.0°C = 212.0°F`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 5: Discount Price Calculator' : '예제 5: 할인 가격 계산기'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Discount Calculation' : 'PDC - 할인 가격 계산'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                할인 가격 계산                                   │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 원가(price)  │ discount = price     │ 할인금액(discount)      │
│ 할인율(rate) │   × rate / 100      │ 최종가격(final_price)    │
│  (단위: %)   │ final_price = price  │                        │
│              │   - discount         │                        │
└──────────────┴──────────────────────┴────────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Discount Calculator' : '파이썬 코드: 할인 가격 계산기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print("=" * 30)`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`상품 가격을 입력하세요(원): 50000
할인율을 입력하세요(%): 20
==============================
원래 가격:      50,000원
할인율:            20%
할인 금액:      10,000원
최종 가격:      40,000원
==============================`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 6: Currency Converter' : '예제 6: 환율 계산기'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Currency Conversion' : 'PDC - 환율 계산'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                환율 계산기 (원화 → 달러)                        │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 원화(krw)    │ usd = krw / rate     │ 달러 금액(usd)          │
│ 환율(rate)   │                      │                        │
│ (1달러=?원)  │                      │                        │
└──────────────┴──────────────────────┴────────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Currency Converter' : '파이썬 코드: 환율 계산기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"달러: {'$'}{usd:,.2f}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`한국 원화 금액을 입력하세요: 1300000
환율을 입력하세요 (1달러 = ?원): 1300
원화: 1,300,000원
환율: 1$ = 1,300원
달러: $1,000.00`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 7: Time Converter (Seconds to H:M:S)' : '예제 7: 시간 변환기 (초 → 시:분:초)'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Time Conversion' : 'PDC - 시간 변환'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────────────┐
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
└──────────────┴──────────────────────┴────────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Time Converter' : '파이썬 코드: 시간 변환기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"{total_sec}초 = {hours}시간 {minutes}분 {seconds}초")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`초를 입력하세요: 3725
3725초 = 1시간 2분 5초`}</code></pre>
            </div>

            <h3>{lang === 'en' ? 'Example 8: Average Calculator (3 Subjects)' : '예제 8: 평균 계산기 (3과목)'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - 3-Subject Average' : 'PDC - 3과목 평균 계산'}</div>
              <pre><code>{`┌──────────────────────────────────────────────────────────────┐
│                Problem Definition Chart                      │
│                3과목 성적 평균 계산                              │
├──────────────┬──────────────────────┬────────────────────────┤
│    Input     │      Process         │       Output           │
├──────────────┼──────────────────────┼────────────────────────┤
│ 국어(kor)    │ total = kor + eng    │ 총점(total)            │
│ 영어(eng)    │         + math       │ 평균(average)           │
│ 수학(math)   │ average = total / 3  │                        │
└──────────────┴──────────────────────┴────────────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: 3-Subject Average' : '파이썬 코드: 3과목 평균 계산기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"평균: {average:.1f}점")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`=== 성적 입력 ===
국어 점수: 95
영어 점수: 88
수학 점수: 92

=== 성적 결과 ===
국어: 95점
영어: 88점
수학: 92점
총점: 275점
평균: 91.7점`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 6. Importance of Program Design ───────────────── */}
                <h2>6. Importance of Program Design</h2>
                <p>
                  Many beginner programmers try to write code immediately upon seeing a problem.
                  However, professional programmers strictly follow the principle of
                  <strong> "Don't write code first; design first."</strong> Code written without design
                  tends to have many logical errors, is difficult to modify, and hard for others to understand.
                </p>
                <p>
                  A systematic program development process is as follows:
                </p>
              </>
            ) : (
              <>
                {/* ───────────────── 6. 프로그램 설계의 중요성 ───────────────── */}
                <h2>6. 프로그램 설계의 중요성</h2>
                <p>
                  많은 초보 프로그래머가 문제를 보자마자 바로 코드를 작성하려 합니다.
                  그러나 전문 프로그래머일수록 <strong>"코드를 먼저 작성하지 말고, 설계를 먼저 하라"</strong>는
                  원칙을 철저히 따릅니다. 설계 없이 작성된 코드는 논리적 오류가 많고,
                  수정이 어려우며, 다른 사람이 이해하기 힘듭니다.
                </p>
                <p>
                  체계적인 프로그램 개발 과정은 다음과 같습니다:
                </p>
              </>
            )}

            {/* SHARED code block: Development process */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Program Development Process' : '프로그램 개발 과정'}</div>
              <pre><code>{`문제 이해
   ↓
PDC 작성 (입력/처리/출력 정의)
   ↓
순서도(Flowchart) 작성 (논리 흐름 시각화)
   ↓
의사코드(Pseudocode) 작성 (자연어로 알고리즘 기술)
   ↓
코드 작성 (프로그래밍 언어로 구현)
   ↓
테스트 및 디버깅 (오류 수정)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Comparison of Design Tools</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Tool</th><th>Format</th><th>Advantages</th><th>Disadvantages</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PDC</strong></td>
                      <td>Table</td>
                      <td>Simple and quick to write</td>
                      <td>Limited in expressing complex logic flows</td>
                    </tr>
                    <tr>
                      <td><strong>Flowchart</strong></td>
                      <td>Diagram</td>
                      <td>Visually represents logic flow clearly</td>
                      <td>Time-consuming to create</td>
                    </tr>
                    <tr>
                      <td><strong>Pseudocode</strong></td>
                      <td>Text</td>
                      <td>Similar to code, easy to convert</td>
                      <td>Lacks visual intuitiveness</td>
                    </tr>
                  </tbody>
                </table>

                {/* ───────────────── 7. Introduction to Pseudocode ───────────────── */}
                <h2>7. Introduction to Pseudocode</h2>
                <p>
                  <strong>Pseudocode</strong> is a method of describing algorithms in a form
                  <strong> close to natural language</strong>, without being bound by the syntax of any programming language.
                  Because it is not tied to a specific programming language, anyone can understand it.
                </p>

                <h3>Rules for Writing Pseudocode</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Rule</th><th>Description</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Input</td><td>Use READ or INPUT</td><td>READ width</td></tr>
                    <tr><td>Output</td><td>Use PRINT or DISPLAY</td><td>PRINT area</td></tr>
                    <tr><td>Assignment</td><td>Use = or &larr;</td><td>area = width x height</td></tr>
                    <tr><td>Condition</td><td>Use IF-THEN-ELSE</td><td>IF score &gt;= 60 THEN ...</td></tr>
                    <tr><td>Loop</td><td>Use WHILE or FOR</td><td>WHILE i &lt;= N DO ...</td></tr>
                    <tr><td>Indentation</td><td>Used to distinguish blocks</td><td>Indent contents inside conditions/loops</td></tr>
                  </tbody>
                </table>

                <h3>PDC vs. Pseudocode Comparison: Rectangle Area</h3>
              </>
            ) : (
              <>
                <h3>설계 도구 비교</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>도구</th><th>형태</th><th>장점</th><th>단점</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PDC</strong></td>
                      <td>표(Table)</td>
                      <td>간단하고 빠르게 작성 가능</td>
                      <td>복잡한 논리 흐름 표현에 한계</td>
                    </tr>
                    <tr>
                      <td><strong>순서도(Flowchart)</strong></td>
                      <td>다이어그램</td>
                      <td>논리 흐름을 시각적으로 명확히 표현</td>
                      <td>작성에 시간이 많이 소요</td>
                    </tr>
                    <tr>
                      <td><strong>의사코드(Pseudocode)</strong></td>
                      <td>텍스트</td>
                      <td>코드와 유사하여 변환이 쉬움</td>
                      <td>시각적 직관성이 떨어짐</td>
                    </tr>
                  </tbody>
                </table>

                {/* ───────────────── 7. 의사코드 소개 ───────────────── */}
                <h2>7. 의사코드(Pseudocode) 소개</h2>
                <p>
                  <strong>의사코드(Pseudocode)</strong>란 프로그래밍 언어의 문법에 얽매이지 않고,
                  <strong>자연어에 가까운 형태</strong>로 알고리즘을 기술하는 방법입니다.
                  특정 프로그래밍 언어에 종속되지 않아 누구나 이해할 수 있습니다.
                </p>

                <h3>의사코드 작성 규칙</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>규칙</th><th>설명</th><th>예시</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>입력</td><td>READ 또는 INPUT 사용</td><td>READ width</td></tr>
                    <tr><td>출력</td><td>PRINT 또는 DISPLAY 사용</td><td>PRINT area</td></tr>
                    <tr><td>대입</td><td>= 또는 ← 사용</td><td>area = width × height</td></tr>
                    <tr><td>조건</td><td>IF-THEN-ELSE 사용</td><td>IF score &gt;= 60 THEN ...</td></tr>
                    <tr><td>반복</td><td>WHILE 또는 FOR 사용</td><td>WHILE i &lt;= N DO ...</td></tr>
                    <tr><td>들여쓰기</td><td>블록 구분에 사용</td><td>조건/반복 내부를 들여쓰기</td></tr>
                  </tbody>
                </table>

                <h3>PDC와 의사코드 비교 예제: 사각형 넓이</h3>
              </>
            )}

            {/* SHARED code blocks: PDC vs Pseudocode */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC Representation' : 'PDC 표현'}</div>
              <pre><code>{`Input   : width, height
Process : area = width × height
Output  : area`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Pseudocode Representation' : '의사코드 표현'}</div>
              <pre><code>{`BEGIN
    READ width
    READ height
    area = width × height
    PRINT "사각형의 넓이:", area
END`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code' : '파이썬 코드'}</div>
              <pre><code>{`width = float(input("가로: "))
height = float(input("세로: "))
area = width * height
print(f"사각형의 넓이: {area}")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <p>
                  As shown in the example above, a PDC focuses on organizing input/process/output separately,
                  while pseudocode focuses on describing the execution order in natural language.
                  Using both tools together makes program design much more systematic.
                </p>

                {/* ───────────────── Key Summary ───────────────── */}
                <div className="callout-box">
                  <h3>{t('pythonLearning.keySummary')}</h3>
                  <ul>
                    <li><strong>IPO Structure:</strong> Every program consists of Input → Process → Output</li>
                    <li><strong>PDC:</strong> A design tool that organizes Input, Process, and Output in a table before writing a program</li>
                    <li><strong>PDC Conversion Rules:</strong> Input → <code>input()</code>, Process → operations, Output → <code>print()</code></li>
                    <li><strong>Type Conversion:</strong> The result of <code>input()</code> is always a string, so for numeric operations you must convert using <code>int()</code> or <code>float()</code></li>
                    <li><strong>Design First:</strong> Don't write code immediately; follow the order: PDC → Flowchart → Pseudocode → Code</li>
                    <li><strong>Pseudocode:</strong> A method of describing algorithms in a form close to natural language, not tied to any specific programming language</li>
                  </ul>
                </div>

                {/* ───────────────── Common Mistakes ───────────────── */}
                <div className="callout-box">
                  <h3>{t('pythonLearning.commonMistakes')}</h3>
                  <ul>
                    <li>
                      <strong>Forgetting to convert input() type:</strong> <code>input()</code> always returns a string (str).
                      To perform numeric operations, you must wrap it with <code>int()</code> or <code>float()</code>.
                      <br />Example: <code>age = int(input("Age: "))</code>
                    </li>
                    <li>
                      <strong>Outputting without processing:</strong> If you output immediately after receiving input, the processing step is missing.
                      You must always process the input data before outputting.
                    </li>
                    <li>
                      <strong>Confusing variable names and output:</strong> <code>print(area)</code> outputs the value of variable area,
                      while <code>print("area")</code> outputs the string "area". Pay attention to the use of quotes.
                    </li>
                    <li>
                      <strong>Ignoring processing order in PDC:</strong> When there are multiple processing steps, the order matters.
                      For example, the discount amount must be calculated before the final price.
                    </li>
                  </ul>
                </div>

                {/* ───────────────── Exercises ───────────────── */}
                <div className="exercise-box">
                  <h3>{t('pythonLearning.exercises')}</h3>
                  <p><strong>Exercise 1: Minutes to Hours/Minutes Converter</strong></p>
                  <p>
                    Write a program that takes minutes as input and converts it to "X hours Y minutes" format.
                    <br />First write a PDC, then implement it as Python code.
                    <br />Example: Input: 135 → Output: 2 hours 15 minutes
                    <br />Hint: Use integer division (//) and modulo (%) operators.
                  </p>
                  <p><strong>Exercise 2: Change Calculator</strong></p>
                  <p>
                    Write a program that takes the product price and payment amount as input, then outputs change broken down by denomination.
                    <br />Denominations: 50000, 10000, 5000, 1000, 500, 100, 50, 10 won
                    <br />Example: Change of 36,740 won → 50000: 0, 10000: 3, 5000: 1, 1000: 1, 500: 1, 100: 2, 50: 0, 10: 4
                    <br />Hint: Calculate quotient (//) and remainder (%) from the largest denomination down.
                  </p>
                </div>

                <div className="exercise-box">
                  <h3>{t('pythonLearning.advancedProblems')}</h3>
                  <p><strong>Advanced 1: Rectangle Diagonal Length</strong></p>
                  <p>
                    Input the width and height of a rectangle and calculate the diagonal length.
                    <br />Pythagorean theorem: diagonal = sqrt(width² + height²)
                    <br />Hint: Use <code>import math</code> then <code>math.sqrt()</code> or <code>** 0.5</code>.
                    <br />Write a PDC first, then implement the code.
                  </p>
                  <p><strong>Advanced 2: Taxi Fare Calculator</strong></p>
                  <p>
                    Input the travel distance (km) and calculate the taxi fare.
                    <br />Fare structure: Base fare 4,800 won (up to 2km), additional 1,000 won per km
                    <br />Example: 5km → 4,800 + (5-2) x 1,000 = 7,800 won
                    <br />Write a PDC first, then implement the code.
                    <br />(Since we haven't learned conditionals yet, assume input is always 2km or more)
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  위 예제에서 볼 수 있듯이, PDC는 입력/처리/출력을 구분하여 정리하는 데 초점을 맞추고,
                  의사코드는 실행 순서를 자연어로 기술하는 데 초점을 맞춥니다.
                  두 도구를 함께 사용하면 프로그램 설계가 훨씬 체계적이 됩니다.
                </p>

                {/* ───────────────── 핵심 정리 ───────────────── */}
                <div className="callout-box">
                  <h3>핵심 정리</h3>
                  <ul>
                    <li><strong>IPO 구조:</strong> 모든 프로그램은 입력(Input) → 처리(Process) → 출력(Output)으로 구성된다</li>
                    <li><strong>PDC:</strong> 프로그램 작성 전 Input, Process, Output을 표로 정리하는 설계 도구이다</li>
                    <li><strong>PDC 변환 규칙:</strong> Input → <code>input()</code>, Process → 연산, Output → <code>print()</code></li>
                    <li><strong>형변환:</strong> <code>input()</code>의 결과는 항상 문자열이므로, 숫자 연산 시 <code>int()</code> 또는 <code>float()</code>로 변환해야 한다</li>
                    <li><strong>설계 먼저:</strong> 코드를 바로 작성하지 말고 PDC → 순서도 → 의사코드 → 코드 순으로 개발한다</li>
                    <li><strong>의사코드:</strong> 자연어에 가까운 형태로 알고리즘을 기술하는 방법으로, 특정 언어에 종속되지 않는다</li>
                  </ul>
                </div>

                {/* ───────────────── 자주 하는 실수 ───────────────── */}
                <div className="callout-box">
                  <h3>자주 하는 실수</h3>
                  <ul>
                    <li>
                      <strong>input() 형변환 누락:</strong> <code>input()</code>은 항상 문자열(str)을 반환합니다.
                      숫자 연산을 하려면 반드시 <code>int()</code>나 <code>float()</code>로 감싸야 합니다.
                      <br />예: <code>age = int(input("나이: "))</code>
                    </li>
                    <li>
                      <strong>Process 없이 바로 출력:</strong> 입력을 받자마자 바로 출력하면 처리 단계가 빠지게 됩니다.
                      반드시 입력 데이터를 가공하는 처리 과정을 거쳐야 합니다.
                    </li>
                    <li>
                      <strong>변수명과 출력 혼동:</strong> <code>print(area)</code>는 변수 area의 값을 출력하고,
                      <code>print("area")</code>는 문자열 "area"를 출력합니다. 따옴표 유무에 주의하세요.
                    </li>
                    <li>
                      <strong>PDC에서 처리 순서 무시:</strong> 여러 처리 단계가 있을 때, 순서가 중요합니다.
                      예를 들어 할인 금액을 먼저 구한 뒤 최종 가격을 계산해야 합니다.
                    </li>
                  </ul>
                </div>

                {/* ───────────────── 실습 과제 ───────────────── */}
                <div className="exercise-box">
                  <h3>실습 과제</h3>
                  <p><strong>과제 1: 시간(분) → 시간/분 변환기</strong></p>
                  <p>
                    분(minutes) 단위의 시간을 입력받아 "○시간 ○분" 형태로 변환하여 출력하는 프로그램을 작성하세요.
                    <br />먼저 PDC를 작성한 후 파이썬 코드로 구현하세요.
                    <br />예) 입력: 135 → 출력: 2시간 15분
                    <br />힌트: 정수 나눗셈(//)과 나머지(%) 연산을 활용합니다.
                  </p>
                  <p><strong>과제 2: 거스름돈 계산기</strong></p>
                  <p>
                    상품 가격과 지불 금액을 입력받아, 거스름돈을 지폐/동전 단위별로 출력하는 프로그램을 작성하세요.
                    <br />단위: 50000원, 10000원, 5000원, 1000원, 500원, 100원, 50원, 10원
                    <br />예) 거스름돈 36740원 → 50000원: 0장, 10000원: 3장, 5000원: 1장, 1000원: 1장, 500원: 1개, 100원: 2개, 50원: 0개, 10원: 4개
                    <br />힌트: 큰 단위부터 차례로 몫(//)과 나머지(%)를 구합니다.
                  </p>
                </div>

                <div className="exercise-box">
                  <h3>심화 문제</h3>
                  <p><strong>심화 1: 직사각형 대각선 길이 계산</strong></p>
                  <p>
                    직사각형의 가로와 세로를 입력받아 대각선의 길이를 계산하세요.
                    <br />피타고라스 정리: 대각선 = √(가로² + 세로²)
                    <br />힌트: <code>import math</code> 후 <code>math.sqrt()</code> 또는 <code>** 0.5</code>를 사용합니다.
                    <br />PDC를 먼저 작성한 후 코드를 구현하세요.
                  </p>
                  <p><strong>심화 2: 택시 요금 계산기</strong></p>
                  <p>
                    이동 거리(km)를 입력받아 택시 요금을 계산하세요.
                    <br />요금 체계: 기본요금 4,800원 (2km까지), 추가요금 km당 1,000원
                    <br />예) 5km → 4,800 + (5-2) × 1,000 = 7,800원
                    <br />PDC를 먼저 작성한 후 코드를 구현하세요.
                    <br />(조건문은 아직 배우지 않았으므로, 2km 이상만 입력된다고 가정합니다)
                  </p>
                </div>
              </>
            )}

            <div className="lesson-nav">
              <Link to="/python-learning/03" className="lesson-nav-btn prev">
                {lang === 'en' ? '← 03: Data Type' : '← 03: Data Type'}
              </Link>
              <Link to="/python-learning/05" className="lesson-nav-btn next">
                {lang === 'en' ? '05: Turtle →' : '05: Turtle →'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
