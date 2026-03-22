import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson06() {
  const { t, lang } = useLanguage();

  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 6: Drawing Flowcharts with Flowgorithm' : '6주차: Flowgorithm 활용 순서도 그리기'}</h1>
          <p>{lang === 'en' ? 'Visualizing algorithms as flowcharts and converting them to code' : '알고리즘을 순서도로 시각화하고 코드로 변환하기'}</p>
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
                    <li>Explain the definition of an algorithm and its 5 conditions</li>
                    <li>Memorize the 8 basic flowchart symbols and use them correctly</li>
                    <li>Understand the 3 control structures (sequence, selection, iteration) and express them as flowcharts</li>
                    <li>Use the Flowgorithm tool to create and execute flowcharts</li>
                    <li>Convert flowcharts to Python code and Python code to flowcharts</li>
                  </ul>
                </div>

                {/* ───────────────── 1. What Is an Algorithm? ───────────────── */}
                <h2>1. What Is an Algorithm?</h2>
                <p>
                  An <strong>algorithm</strong> is a <strong>step-by-step procedure for solving a problem</strong>.
                  In computer science, an algorithm is a clear and finite series of instructions that transforms
                  a given input into the desired output. The name "algorithm" originates from the 9th-century
                  Persian mathematician Al-Khwarizmi.
                </p>

                <h3>5 Conditions of an Algorithm</h3>
                <p>
                  A valid algorithm must satisfy all of the following 5 conditions.
                  These criteria were established by computer scientist <strong>Donald Knuth</strong>.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Condition</th><th>English</th><th>Description</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Input</strong></td>
                      <td>Input</td>
                      <td>Must have 0 or more inputs</td>
                      <td>Input two numbers a, b</td>
                    </tr>
                    <tr>
                      <td><strong>Output</strong></td>
                      <td>Output</td>
                      <td>Must have 1 or more outputs</td>
                      <td>Output the sum result</td>
                    </tr>
                    <tr>
                      <td><strong>Definiteness</strong></td>
                      <td>Definiteness</td>
                      <td>Each step must be unambiguous and clear</td>
                      <td>"Add roughly" (X) → "Calculate a + b" (O)</td>
                    </tr>
                    <tr>
                      <td><strong>Finiteness</strong></td>
                      <td>Finiteness</td>
                      <td>Must terminate within a finite number of steps</td>
                      <td>An infinite loop is not an algorithm</td>
                    </tr>
                    <tr>
                      <td><strong>Effectiveness</strong></td>
                      <td>Effectiveness</td>
                      <td>Each step must be executable</td>
                      <td>Cannot include impossible operations</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Everyday Algorithm Examples</h3>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>학습 목표</h3>
                  <ul>
                    <li>알고리즘의 정의와 5가지 조건을 설명할 수 있다</li>
                    <li>순서도의 8가지 기본 기호를 암기하고 올바르게 사용할 수 있다</li>
                    <li>3가지 제어 구조(순차, 선택, 반복)를 이해하고 순서도로 표현할 수 있다</li>
                    <li>Flowgorithm 도구를 활용하여 순서도를 작성하고 실행할 수 있다</li>
                    <li>순서도를 파이썬 코드로, 파이썬 코드를 순서도로 변환할 수 있다</li>
                  </ul>
                </div>

                {/* ───────────────── 1. 알고리즘이란? ───────────────── */}
                <h2>1. 알고리즘(Algorithm)이란?</h2>
                <p>
                  <strong>알고리즘(Algorithm)</strong>이란 <strong>문제를 해결하기 위한 단계적 절차</strong>입니다.
                  컴퓨터 과학에서 알고리즘은 주어진 입력을 원하는 출력으로 변환하는 명확하고 유한한 일련의 명령입니다.
                  "알고리즘"이라는 이름은 9세기 페르시아 수학자 알-콰리즈미(Al-Khwarizmi)의 이름에서 유래했습니다.
                </p>

                <h3>알고리즘의 5가지 조건</h3>
                <p>
                  유효한 알고리즘이 되려면 다음 5가지 조건을 모두 만족해야 합니다.
                  이는 컴퓨터 과학자 <strong>Donald Knuth</strong>가 정립한 기준입니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>조건</th><th>영문</th><th>설명</th><th>예시</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>입력</strong></td>
                      <td>Input</td>
                      <td>0개 이상의 입력이 있어야 한다</td>
                      <td>두 수 a, b를 입력</td>
                    </tr>
                    <tr>
                      <td><strong>출력</strong></td>
                      <td>Output</td>
                      <td>1개 이상의 출력이 있어야 한다</td>
                      <td>합계 결과를 출력</td>
                    </tr>
                    <tr>
                      <td><strong>명확성</strong></td>
                      <td>Definiteness</td>
                      <td>각 단계가 모호하지 않고 명확해야 한다</td>
                      <td>"적당히 더하라" (X) → "a + b를 계산하라" (O)</td>
                    </tr>
                    <tr>
                      <td><strong>유한성</strong></td>
                      <td>Finiteness</td>
                      <td>유한한 단계 내에 반드시 종료해야 한다</td>
                      <td>무한 루프는 알고리즘이 아님</td>
                    </tr>
                    <tr>
                      <td><strong>효율성</strong></td>
                      <td>Effectiveness</td>
                      <td>각 단계가 실행 가능해야 한다</td>
                      <td>실현 불가능한 연산은 포함할 수 없음</td>
                    </tr>
                  </tbody>
                </table>

                <h3>일상생활 알고리즘 예시</h3>
              </>
            )}

            {/* SHARED code blocks: algorithm examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Algorithm Example 1: Cooking Ramen' : '알고리즘 예시 1: 라면 끓이기'}</div>
              <pre><code>{`1단계: 냄비에 물 550ml를 넣는다
2단계: 가스불을 켜고 물을 끓인다
3단계: 물이 끓으면 면과 스프를 넣는다
4단계: 4분 30초 동안 끓인다
5단계: 불을 끄고 그릇에 담는다
6단계: 완성!`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Algorithm Example 2: Finding a Book in the Library' : '알고리즘 예시 2: 도서관에서 책 찾기'}</div>
              <pre><code>{`1단계: 도서관 검색 시스템에 책 제목을 입력한다
2단계: 검색 결과에서 청구기호를 확인한다
3단계: 해당 서가로 이동한다
4단계: 청구기호 순서에 따라 책을 찾는다
5단계: 책이 있으면 → 대출한다
       책이 없으면 → 예약을 신청한다`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Algorithm Representation Methods</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Method</th><th>Characteristics</th><th>Advantages</th><th>Disadvantages</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Natural Language</strong></td><td>Described in everyday language</td><td>Anyone can understand</td><td>Can be ambiguous</td></tr>
                    <tr><td><strong>Flowchart</strong></td><td>Visualized with symbols and arrows</td><td>Logic flow is intuitive</td><td>Tedious to create</td></tr>
                    <tr><td><strong>Pseudocode</strong></td><td>Natural language close to code</td><td>Easy to convert to code</td><td>Lacks visual intuitiveness</td></tr>
                    <tr><td><strong>Programming Language</strong></td><td>Executable code</td><td>Can be run directly by computer</td><td>Requires knowledge of language syntax</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 2. What Is a Flowchart? ───────────────── */}
                <h2>2. What Is a Flowchart?</h2>
                <p>
                  A <strong>flowchart</strong> is a diagram that visualizes the logical flow of an algorithm using
                  <strong> standardized symbols</strong>. IBM standardized it in the 1960s for program documentation,
                  and it was later established as the ISO 5807 international standard.
                </p>

                <h3>Advantages of Flowcharts</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Advantage</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Visual Understanding</strong></td><td>Grasp the entire program flow at a glance</td></tr>
                    <tr><td><strong>Finding Logic Errors</strong></td><td>Discover logical errors before writing code</td></tr>
                    <tr><td><strong>Team Communication</strong></td><td>Share logic even with non-programmers</td></tr>
                    <tr><td><strong>Documentation</strong></td><td>Systematically record program structure</td></tr>
                    <tr><td><strong>Maintenance</strong></td><td>Easily understand structure when modifying the program later</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 3. Flowchart Symbols ───────────────── */}
                <h2>3. Flowchart Symbols</h2>
                <p>
                  Flowcharts use standardized symbols. Each symbol represents a specific type of operation,
                  and arrows (flow lines) connect them to show execution order.
                  The following 8 symbols must be memorized.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>Shape</th><th>Name</th><th>English</th><th>Purpose</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Oval (rounded rectangle)</td>
                      <td><strong>Terminal</strong></td>
                      <td>Terminal / Terminator</td>
                      <td>Start and end of program</td>
                      <td>"Start", "End"</td>
                    </tr>
                    <tr>
                      <td>Rectangle</td>
                      <td><strong>Process</strong></td>
                      <td>Process</td>
                      <td>Operations, assignments, data processing</td>
                      <td>"area = width * height"</td>
                    </tr>
                    <tr>
                      <td>Parallelogram</td>
                      <td><strong>Input/Output</strong></td>
                      <td>Input / Output</td>
                      <td>Data input or output</td>
                      <td>"Input width", "Output area"</td>
                    </tr>
                    <tr>
                      <td>Diamond</td>
                      <td><strong>Decision</strong></td>
                      <td>Decision</td>
                      <td>Conditional branching (Yes/No)</td>
                      <td>"score &gt;= 60?"</td>
                    </tr>
                    <tr>
                      <td>Arrow</td>
                      <td><strong>Flow Line</strong></td>
                      <td>Flow Line</td>
                      <td>Shows execution order and direction</td>
                      <td>Connects symbols</td>
                    </tr>
                    <tr>
                      <td>Circle</td>
                      <td><strong>Connector</strong></td>
                      <td>Connector</td>
                      <td>Connection point within a page</td>
                      <td>When splitting complex flowcharts</td>
                    </tr>
                    <tr>
                      <td>Hexagon</td>
                      <td><strong>Preparation</strong></td>
                      <td>Preparation</td>
                      <td>Initialization, loop variable setup</td>
                      <td>"i = 1", "sum = 0"</td>
                    </tr>
                    <tr>
                      <td>Double-bordered rectangle</td>
                      <td><strong>Subroutine</strong></td>
                      <td>Subroutine / Predefined Process</td>
                      <td>Call to a separately defined function</td>
                      <td>"Call calculate_area()"</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h3>알고리즘 표현 방법</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>표현 방법</th><th>특징</th><th>장점</th><th>단점</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>자연어</strong></td><td>일상 언어로 기술</td><td>누구나 이해 가능</td><td>모호할 수 있음</td></tr>
                    <tr><td><strong>순서도(Flowchart)</strong></td><td>기호와 화살표로 시각화</td><td>논리 흐름이 직관적</td><td>작성이 번거로움</td></tr>
                    <tr><td><strong>의사코드(Pseudocode)</strong></td><td>코드에 가까운 자연어</td><td>코드 변환이 쉬움</td><td>시각적 직관성 부족</td></tr>
                    <tr><td><strong>프로그래밍 언어</strong></td><td>실행 가능한 코드</td><td>컴퓨터가 직접 실행</td><td>언어 문법 지식 필요</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 2. 순서도란? ───────────────── */}
                <h2>2. 순서도(Flowchart)란?</h2>
                <p>
                  <strong>순서도(Flowchart)</strong>란 알고리즘의 논리적 흐름을 <strong>표준화된 기호</strong>로
                  시각화한 다이어그램입니다. 1960년대에 IBM에서 프로그램 문서화를 위해 표준화했으며,
                  이후 ISO 5807 국제 표준으로 제정되었습니다.
                </p>

                <h3>순서도의 장점</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>장점</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>시각적 이해</strong></td><td>프로그램의 전체 흐름을 한눈에 파악할 수 있다</td></tr>
                    <tr><td><strong>논리 오류 발견</strong></td><td>코드 작성 전에 논리적 오류를 미리 발견할 수 있다</td></tr>
                    <tr><td><strong>팀 의사소통</strong></td><td>프로그래머가 아닌 사람과도 로직을 공유할 수 있다</td></tr>
                    <tr><td><strong>문서화</strong></td><td>프로그램의 구조를 체계적으로 기록할 수 있다</td></tr>
                    <tr><td><strong>유지보수</strong></td><td>나중에 프로그램을 수정할 때 구조를 쉽게 파악할 수 있다</td></tr>
                  </tbody>
                </table>

                {/* ───────────────── 3. 순서도 기호 ───────────────── */}
                <h2>3. 순서도 기호</h2>
                <p>
                  순서도에는 표준화된 기호가 사용됩니다. 각 기호는 특정 유형의 작업을 나타내며,
                  화살표(흐름선)로 연결하여 실행 순서를 표현합니다.
                  다음 8가지 기호를 반드시 암기해야 합니다.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>기호 모양</th><th>이름</th><th>영문</th><th>용도</th><th>사용 예시</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>타원형 (둥근 사각형)</td>
                      <td><strong>단말</strong></td>
                      <td>Terminal / Terminator</td>
                      <td>프로그램의 시작과 끝</td>
                      <td>"시작", "끝"</td>
                    </tr>
                    <tr>
                      <td>직사각형</td>
                      <td><strong>처리</strong></td>
                      <td>Process</td>
                      <td>연산, 대입 등 데이터 처리</td>
                      <td>"area = width * height"</td>
                    </tr>
                    <tr>
                      <td>평행사변형</td>
                      <td><strong>입출력</strong></td>
                      <td>Input / Output</td>
                      <td>데이터 입력 또는 출력</td>
                      <td>"width 입력", "area 출력"</td>
                    </tr>
                    <tr>
                      <td>마름모</td>
                      <td><strong>판단</strong></td>
                      <td>Decision</td>
                      <td>조건 분기 (Yes/No)</td>
                      <td>"score &gt;= 60?"</td>
                    </tr>
                    <tr>
                      <td>화살표</td>
                      <td><strong>흐름선</strong></td>
                      <td>Flow Line</td>
                      <td>실행 순서와 방향 표시</td>
                      <td>기호와 기호를 연결</td>
                    </tr>
                    <tr>
                      <td>원</td>
                      <td><strong>연결자</strong></td>
                      <td>Connector</td>
                      <td>순서도 연결점 (페이지 내)</td>
                      <td>복잡한 순서도를 나눌 때</td>
                    </tr>
                    <tr>
                      <td>육각형</td>
                      <td><strong>준비</strong></td>
                      <td>Preparation</td>
                      <td>초기화, 반복 변수 설정</td>
                      <td>"i = 1", "sum = 0"</td>
                    </tr>
                    <tr>
                      <td>양변 이중선 직사각형</td>
                      <td><strong>서브루틴</strong></td>
                      <td>Subroutine / Predefined Process</td>
                      <td>별도로 정의된 함수 호출</td>
                      <td>"calculate_area() 호출"</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            {/* SHARED code block: flowchart symbols summary */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart Symbol Summary (Text Representation)' : '순서도 기호 요약 (텍스트 표현)'}</div>
              <pre><code>{`┌─────────┐
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
└─────────┘`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 4. 3 Control Structures ───────────────── */}
                <h2>4. The 3 Control Structures</h2>
                <p>
                  All programs are composed of combinations of the following <strong>3 control structures</strong>.
                  This is the core principle of <strong>Structured Programming</strong>,
                  based on the theorem proven by mathematicians Bohm and Jacopini in 1966 (Bohm-Jacopini Theorem).
                </p>

                <h3>(1) Sequence Structure</h3>
                <p>
                  The <strong>sequence structure</strong> is the most basic control structure, where commands are
                  executed <strong>in order from top to bottom</strong>. Each line is performed one after another
                  without any branching or looping.
                </p>
              </>
            ) : (
              <>
                {/* ───────────────── 4. 3가지 제어 구조 ───────────────── */}
                <h2>4. 3가지 제어 구조</h2>
                <p>
                  모든 프로그램은 다음 <strong>3가지 제어 구조</strong>의 조합으로 구성됩니다.
                  이것은 <strong>구조적 프로그래밍(Structured Programming)</strong>의 핵심 원리이며,
                  1966년 수학자 Bohm과 Jacopini가 증명한 정리(Bohm-Jacopini Theorem)에 기반합니다.
                </p>

                <h3>(1) 순차 구조 (Sequence)</h3>
                <p>
                  <strong>순차 구조</strong>는 가장 기본적인 제어 구조로, 명령을 <strong>위에서 아래로 순서대로</strong>
                  실행합니다. 별도의 분기나 반복 없이 한 줄씩 차례대로 수행됩니다.
                </p>
              </>
            )}

            {/* SHARED code blocks: sequence structure */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Sequence Structure Flowchart (Text Representation)' : '순차 구조 순서도 (텍스트 표현)'}</div>
              <pre><code>{`┌─────────┐
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
└─────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Sequence Structure → Python Code' : '순차 구조 → 파이썬 코드'}</div>
              <pre><code>{`# ── 순차 구조: 이름 입력 → 인사말 생성 → 출력 ──

# 입력
name = input("이름을 입력하세요: ")

# 처리
msg = "안녕하세요, " + name + "님!"

# 출력
print(msg)`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`이름을 입력하세요: 홍길동
안녕하세요, 홍길동님!`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>(2) Selection Structure</h3>
                <p>
                  The <strong>selection structure</strong> is a structure where the <strong>execution path varies based on a condition</strong>.
                  It uses the diamond (decision) symbol in flowcharts, performing different processing depending on whether
                  the condition is true or false.
                </p>

                <h4>Single Selection (if)</h4>
              </>
            ) : (
              <>
                <h3>(2) 선택 구조 (Selection)</h3>
                <p>
                  <strong>선택 구조</strong>는 <strong>조건에 따라 실행 경로가 달라지는</strong> 구조입니다.
                  순서도에서 마름모(판단) 기호를 사용하며, 조건의 참/거짓에 따라 서로 다른 처리를 수행합니다.
                </p>

                <h4>단일 선택 (if)</h4>
              </>
            )}

            {/* SHARED code blocks: selection structures */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Single Selection Flowchart' : '단일 선택 구조 순서도'}</div>
              <pre><code>{`┌─────────┐
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
└─────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Single Selection → Python Code' : '단일 선택 → 파이썬 코드'}</div>
              <pre><code>{`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")

print("프로그램을 종료합니다.")`}</code></pre>
            </div>

            <h4>{lang === 'en' ? 'Dual Selection (if-else)' : '이중 선택 (if-else)'}</h4>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Dual Selection Flowchart' : '이중 선택 구조 순서도'}</div>
              <pre><code>{`┌──────────┐
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
└──────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Dual Selection → Python Code' : '이중 선택 → 파이썬 코드'}</div>
              <pre><code>{`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("합격입니다!")
else:
    print("불합격입니다.")`}</code></pre>
            </div>

            <h4>{lang === 'en' ? 'Multiple Selection (if-elif-else)' : '다중 선택 (if-elif-else)'}</h4>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Multiple Selection Flowchart' : '다중 선택 구조 순서도'}</div>
              <pre><code>{`┌──────────┐
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
└──────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Multiple Selection → Python Code: Grade Classification' : '다중 선택 → 파이썬 코드: 성적 등급'}</div>
              <pre><code>{`# ── 성적 등급 판별 프로그램 ──

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
print(f"점수: {score}, 등급: {grade}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`점수를 입력하세요: 85
점수: 85, 등급: B`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>(3) Iteration Structure (Loop)</h3>
                <p>
                  The <strong>iteration structure</strong> <strong>repeats specific processing while a condition is true</strong>.
                  There are two types: pre-test loops (while) and count-based loops (for).
                </p>

                <h4>Pre-test Loop (while)</h4>
              </>
            ) : (
              <>
                <h3>(3) 반복 구조 (Iteration / Loop)</h3>
                <p>
                  <strong>반복 구조</strong>는 <strong>조건이 참인 동안 특정 처리를 반복</strong>하는 구조입니다.
                  반복 구조에는 사전 검사 반복(while)과 횟수 반복(for) 두 가지가 있습니다.
                </p>

                <h4>사전 검사 반복 (while)</h4>
              </>
            )}

            {/* SHARED code blocks: iteration structures */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'While Loop Flowchart' : 'while 반복 구조 순서도'}</div>
              <pre><code>{`┌──────────┐
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
     └──────→ (판단으로 돌아감)`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'While Loop → Python Code' : 'while 반복 → 파이썬 코드'}</div>
              <pre><code>{`# ── 1부터 5까지 출력 (while문) ──

i = 1            # 초기화
while i <= 5:    # 조건 검사
    print(f"반복 {i}번째")
    i = i + 1    # 증가

print("반복 종료")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`반복 1번째
반복 2번째
반복 3번째
반복 4번째
반복 5번째
반복 종료`}</code></pre>
            </div>

            <h4>{lang === 'en' ? 'Count-based Loop (for)' : '횟수 반복 (for)'}</h4>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'For Loop Flowchart' : 'for 반복 구조 순서도'}</div>
              <pre><code>{`┌──────────┐
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
     └──────→ (다음 i 값으로)`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'For Loop → Python Code' : 'for 반복 → 파이썬 코드'}</div>
              <pre><code>{`# ── 1부터 5까지 출력 (for문) ──

for i in range(1, 6):    # i = 1, 2, 3, 4, 5
    print(f"반복 {i}번째")

print("반복 종료")`}</code></pre>
            </div>

            <h4>{lang === 'en' ? 'Loop Example: Multiplication Table' : '반복 구조 예시: 구구단'}</h4>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Multiplication Table Flowchart' : '구구단 순서도'}</div>
              <pre><code>{`┌──────────┐
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
     └──────→ (판단으로)`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Multiplication Table → Python Code' : '구구단 → 파이썬 코드'}</div>
              <pre><code>{`# ── 구구단 출력 ──

dan = int(input("몇 단을 출력할까요? "))

print(f"\\n=== {dan}단 ===")
for i in range(1, 10):
    result = dan * i
    print(f"{dan} × {i} = {result}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`몇 단을 출력할까요? 7

=== 7단 ===
7 × 1 = 7
7 × 2 = 14
7 × 3 = 21
7 × 4 = 28
7 × 5 = 35
7 × 6 = 42
7 × 7 = 49
7 × 8 = 56
7 × 9 = 63`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 5. Introduction to Flowgorithm ───────────────── */}
                <h2>5. Introduction to Flowgorithm</h2>
                <p>
                  <strong>Flowgorithm</strong> is a free educational tool where you create flowcharts graphically
                  and the <strong>program runs automatically</strong>. It provides an intuitive understanding of
                  the relationship between flowcharts and programming, and is widely used in introductory
                  programming education worldwide.
                </p>

                <h3>Installation</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Step</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Step 1</td><td>Visit <a href="http://www.flowgorithm.org" target="_blank" rel="noopener noreferrer">flowgorithm.org</a></td></tr>
                    <tr><td>Step 2</td><td>Download the latest version from the Download menu</td></tr>
                    <tr><td>Step 3</td><td>Run the downloaded installer and proceed with installation</td></tr>
                    <tr><td>Step 4</td><td>Launch Flowgorithm after installation is complete</td></tr>
                  </tbody>
                </table>

                <h3>How to Use Flowgorithm</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Feature</th><th>How to Use</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Program Start/End</strong></td><td>"Main" start and "End" terminal symbols are automatically placed</td></tr>
                    <tr><td><strong>Adding Symbols</strong></td><td>Click on a flow line (arrow) to see the list of symbols to add</td></tr>
                    <tr><td><strong>Declaring Variables</strong></td><td>Add a Declare symbol → Specify variable name and type (Integer, Real, String, etc.)</td></tr>
                    <tr><td><strong>Assignment</strong></td><td>Add an Assign symbol → Assign a value or expression to a variable</td></tr>
                    <tr><td><strong>Input</strong></td><td>Add an Input symbol → Store user input into a variable</td></tr>
                    <tr><td><strong>Output</strong></td><td>Add an Output symbol → Specify the value or expression to output</td></tr>
                    <tr><td><strong>Condition</strong></td><td>Add an If symbol → Enter condition, add processing to True/False paths</td></tr>
                    <tr><td><strong>Loop</strong></td><td>Add a While or For symbol → Write loop condition and body</td></tr>
                    <tr><td><strong>Run</strong></td><td>Click the Play button in the menu bar → Execute the entire program</td></tr>
                    <tr><td><strong>Step Execution</strong></td><td>Click the Step button in the menu bar → Execute one step at a time (useful for debugging)</td></tr>
                    <tr><td><strong>Code Conversion</strong></td><td>Menu → Tools → Source Code Viewer → Select language (Python, etc.)</td></tr>
                  </tbody>
                </table>

                <h3>Flowgorithm Variable Types</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Flowgorithm Type</th><th>Description</th><th>Python Equivalent</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Integer</strong></td><td>Integer numbers</td><td><code>int</code></td><td>1, -5, 100</td></tr>
                    <tr><td><strong>Real</strong></td><td>Decimal numbers</td><td><code>float</code></td><td>3.14, -2.5</td></tr>
                    <tr><td><strong>String</strong></td><td>Text strings</td><td><code>str</code></td><td>"Hello", "Hi"</td></tr>
                    <tr><td><strong>Boolean</strong></td><td>Logical values (true/false)</td><td><code>bool</code></td><td>true, false</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                {/* ───────────────── 5. Flowgorithm 도구 소개 ───────────────── */}
                <h2>5. Flowgorithm 도구 소개</h2>
                <p>
                  <strong>Flowgorithm</strong>은 순서도를 그래픽으로 작성하면 <strong>자동으로 프로그램이 실행</strong>되는
                  무료 교육용 도구입니다. 순서도와 프로그래밍의 관계를 직관적으로 이해할 수 있어
                  전 세계 프로그래밍 입문 교육에서 널리 사용되고 있습니다.
                </p>

                <h3>설치 방법</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>단계</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1단계</td><td><a href="http://www.flowgorithm.org" target="_blank" rel="noopener noreferrer">flowgorithm.org</a> 접속</td></tr>
                    <tr><td>2단계</td><td>Download 메뉴에서 최신 버전 다운로드</td></tr>
                    <tr><td>3단계</td><td>다운로드한 설치 파일 실행 → 설치 진행</td></tr>
                    <tr><td>4단계</td><td>설치 완료 후 Flowgorithm 실행</td></tr>
                  </tbody>
                </table>

                <h3>Flowgorithm 사용 방법</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>기능</th><th>사용 방법</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>프로그램 시작/종료</strong></td><td>자동으로 "Main" 시작과 "End" 종료 기호가 배치됨</td></tr>
                    <tr><td><strong>기호 추가</strong></td><td>흐름선(화살표)을 클릭하면 추가할 기호 목록이 나타남</td></tr>
                    <tr><td><strong>변수 선언</strong></td><td>Declare 기호 추가 → 변수명과 타입(Integer, Real, String 등) 지정</td></tr>
                    <tr><td><strong>대입</strong></td><td>Assign 기호 추가 → 변수에 값 또는 수식 대입</td></tr>
                    <tr><td><strong>입력</strong></td><td>Input 기호 추가 → 변수에 사용자 입력값 저장</td></tr>
                    <tr><td><strong>출력</strong></td><td>Output 기호 추가 → 출력할 값이나 표현식 지정</td></tr>
                    <tr><td><strong>조건</strong></td><td>If 기호 추가 → 조건식 입력, True/False 분기 경로에 처리 추가</td></tr>
                    <tr><td><strong>반복</strong></td><td>While 또는 For 기호 추가 → 반복 조건과 본문 작성</td></tr>
                    <tr><td><strong>실행(Run)</strong></td><td>메뉴 바의 ▶ 버튼 클릭 → 전체 프로그램 실행</td></tr>
                    <tr><td><strong>단계별 실행(Step)</strong></td><td>메뉴 바의 ▶| 버튼 클릭 → 한 단계씩 실행 (디버깅에 유용)</td></tr>
                    <tr><td><strong>코드 변환</strong></td><td>메뉴 → Tools → Source Code Viewer → 언어 선택 (Python 등)</td></tr>
                  </tbody>
                </table>

                <h3>Flowgorithm의 변수형</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Flowgorithm 타입</th><th>설명</th><th>파이썬 대응</th><th>예시</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Integer</strong></td><td>정수</td><td><code>int</code></td><td>1, -5, 100</td></tr>
                    <tr><td><strong>Real</strong></td><td>실수 (소수점)</td><td><code>float</code></td><td>3.14, -2.5</td></tr>
                    <tr><td><strong>String</strong></td><td>문자열</td><td><code>str</code></td><td>"Hello", "안녕"</td></tr>
                    <tr><td><strong>Boolean</strong></td><td>논리값 (참/거짓)</td><td><code>bool</code></td><td>true, false</td></tr>
                  </tbody>
                </table>
              </>
            )}

            {lang === 'en' ? (
              <>
                {/* ───────────────── 6. Flowchart to Code Comprehensive Examples ───────────────── */}
                <h2>6. Flowchart to Code: Comprehensive Examples</h2>

                <h3>Example 1: Sum of Two Numbers (Sequence)</h3>
                <p><strong>Problem:</strong> Input two integers and output their sum.</p>
              </>
            ) : (
              <>
                {/* ───────────────── 6. 순서도 → 코드 변환 종합 예제 ───────────────── */}
                <h2>6. 순서도 → 코드 변환 종합 예제</h2>

                <h3>예제 1: 두 수의 합 (순차 구조)</h3>
                <p><strong>문제:</strong> 두 정수를 입력받아 합계를 출력하라.</p>
              </>
            )}

            {/* SHARED code blocks: example 1 */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart (Text Representation)' : '순서도 (텍스트 표현)'}</div>
              <pre><code>{`[시작]
  ↓
[입력: a]
  ↓
[입력: b]
  ↓
[처리: sum = a + b]
  ↓
[출력: sum]
  ↓
[끝]`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Sum of Two Numbers' : '파이썬 코드: 두 수의 합'}</div>
              <pre><code>{`# ═══════════════════════════════════════
# 예제 1: 두 수의 합 (순차 구조)
# ═══════════════════════════════════════

# 입력
a = int(input("첫 번째 정수: "))
b = int(input("두 번째 정수: "))

# 처리
total = a + b

# 출력
print(f"{a} + {b} = {total}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`첫 번째 정수: 15
두 번째 정수: 27
15 + 27 = 42`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 2: Even/Odd Check (Selection)</h3>
                <p><strong>Problem:</strong> Input an integer and determine whether it is even or odd.</p>
              </>
            ) : (
              <>
                <h3>예제 2: 짝수/홀수 판별 (선택 구조)</h3>
                <p><strong>문제:</strong> 정수를 입력받아 짝수인지 홀수인지 판별하라.</p>
              </>
            )}

            {/* SHARED code blocks: example 2 */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart (Text Representation)' : '순서도 (텍스트 표현)'}</div>
              <pre><code>{`[시작]
  ↓
[입력: num]
  ↓
<num % 2 == 0?>
  ├─ Yes → [출력: "짝수"]
  └─ No  → [출력: "홀수"]
  ↓
[끝]`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Even/Odd Check' : '파이썬 코드: 짝수/홀수 판별'}</div>
              <pre><code>{`# ═══════════════════════════════════════
# 예제 2: 짝수/홀수 판별 (선택 구조)
# 핵심: 나머지 연산(%) 활용
# ═══════════════════════════════════════

# 입력
num = int(input("정수를 입력하세요: "))

# 판단 + 출력
if num % 2 == 0:
    print(f"{num}은(는) 짝수입니다.")
else:
    print(f"{num}은(는) 홀수입니다.")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`정수를 입력하세요: 7
7은(는) 홀수입니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 3: Finding the Maximum (Selection)</h3>
                <p><strong>Problem:</strong> Input two numbers and output the larger one.</p>
              </>
            ) : (
              <>
                <h3>예제 3: 최대값 찾기 (선택 구조)</h3>
                <p><strong>문제:</strong> 두 수를 입력받아 더 큰 수를 출력하라.</p>
              </>
            )}

            {/* SHARED code blocks: example 3 */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart (Text Representation)' : '순서도 (텍스트 표현)'}</div>
              <pre><code>{`[시작]
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
[끝]`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Finding the Maximum' : '파이썬 코드: 최대값 찾기'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"두 수 중 최대값: {max_val}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`첫 번째 수: 42
두 번째 수: 78
두 수 중 최대값: 78`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 4: Sum from 1 to N (Loop)</h3>
                <p><strong>Problem:</strong> Input an integer N and find the sum from 1 to N.</p>
              </>
            ) : (
              <>
                <h3>예제 4: 1~N 합계 (반복 구조)</h3>
                <p><strong>문제:</strong> 정수 N을 입력받아 1부터 N까지의 합을 구하라.</p>
              </>
            )}

            {/* SHARED code blocks: example 4 */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart (Text Representation)' : '순서도 (텍스트 표현)'}</div>
              <pre><code>{`[시작]
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
           [끝]`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Sum 1~N (while version)' : '파이썬 코드: 1~N 합계 (while 버전)'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"1부터 {N}까지의 합: {total}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Sum 1~N (for version)' : '파이썬 코드: 1~N 합계 (for 버전)'}</div>
              <pre><code>{`# ── for문 버전 (더 간결한 파이썬 스타일) ──

N = int(input("N을 입력하세요: "))

total = 0
for i in range(1, N + 1):  # 1부터 N까지
    total = total + i

print(f"1부터 {N}까지의 합: {total}")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Execution Result' : '실행 결과'}</div>
              <pre><code>{`N을 입력하세요: 100
1부터 100까지의 합: 5050`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ───────────────── 7. Algorithm Design Practice ───────────────── */}
                <h2>7. Algorithm Design Practice</h2>
                <p>
                  A systematic problem-solving process is as follows. Repeated practice of this process
                  builds the ability to approach any problem logically.
                </p>
              </>
            ) : (
              <>
                {/* ───────────────── 7. 알고리즘 설계 연습 ───────────────── */}
                <h2>7. 알고리즘 설계 연습</h2>
                <p>
                  체계적인 문제 해결 과정은 다음과 같습니다. 이 과정을 반복적으로 연습하면
                  어떤 문제든 논리적으로 접근할 수 있는 능력이 길러집니다.
                </p>
              </>
            )}

            {/* SHARED code block: systematic process */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Systematic Problem-Solving Process' : '체계적 문제 해결 과정'}</div>
              <pre><code>{`1단계: 문제 분석   → 무엇을 구해야 하는지 파악
2단계: PDC 작성    → Input / Process / Output 정리
3단계: 순서도 작성  → 논리 흐름을 시각화
4단계: 코드 작성   → 프로그래밍 언어로 구현
5단계: 테스트      → 다양한 입력으로 검증`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Comprehensive Example: Finding the Maximum of Three Numbers</h3>
                <p><strong>Problem:</strong> Input three integers and output the largest one.</p>

                <p><strong>Step 1: Problem Analysis</strong></p>
                <p>We need to compare three numbers and find the largest. We use a pairwise comparison approach.</p>

                <p><strong>Step 2: Write PDC</strong></p>
              </>
            ) : (
              <>
                <h3>종합 예제: 세 수 중 최대값 찾기</h3>
                <p><strong>문제:</strong> 세 개의 정수를 입력받아 가장 큰 수를 출력하라.</p>

                <p><strong>1단계: 문제 분석</strong></p>
                <p>세 수를 비교하여 가장 큰 수를 찾아야 합니다. 두 수씩 비교하는 방법을 사용합니다.</p>

                <p><strong>2단계: PDC 작성</strong></p>
              </>
            )}

            {/* SHARED code blocks: comprehensive example */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'PDC - Maximum of Three Numbers' : 'PDC - 세 수 중 최대값'}</div>
              <pre><code>{`┌─────────────────────────────────────────────────────────────┐
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
└──────────────┴───────────────────────┴──────────────────────┘`}</code></pre>
            </div>

            <p><strong>{lang === 'en' ? 'Step 3: Flowchart' : '3단계: 순서도'}</strong></p>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart - Maximum of Three Numbers' : '순서도 - 세 수 중 최대값'}</div>
              <pre><code>{`[시작]
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
[끝]`}</code></pre>
            </div>

            <p><strong>{lang === 'en' ? 'Step 4: Python Code' : '4단계: 파이썬 코드'}</strong></p>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Python Code: Maximum of Three Numbers' : '파이썬 코드: 세 수 중 최대값'}</div>
              <pre><code>{`# ═══════════════════════════════════════
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
print(f"최대값: {max_val}")`}</code></pre>
            </div>

            <p><strong>{lang === 'en' ? 'Step 5: Testing' : '5단계: 테스트'}</strong></p>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Various Test Cases' : '다양한 테스트 케이스'}</div>
              <pre><code>{`# 테스트 1: 첫 번째가 최대
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
최대값: 30`}</code></pre>
            </div>

            {/* ───────────────── Key Summary ───────────────── */}
            {lang === 'en' ? (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.keySummary')}</h3>
                  <ul>
                    <li><strong>Algorithm:</strong> A step-by-step procedure for solving a problem, which must satisfy 5 conditions: input, output, definiteness, finiteness, and effectiveness</li>
                    <li><strong>Flowchart:</strong> A diagram that visualizes algorithms using standardized symbols</li>
                    <li><strong>8 Symbols:</strong> Terminal (oval), Process (rectangle), I/O (parallelogram), Decision (diamond), Flow line (arrow), Connector (circle), Preparation (hexagon), Subroutine (double-bordered rectangle)</li>
                    <li><strong>3 Control Structures:</strong> Sequence, Selection, Iteration -- all programs can be implemented using combinations of these three</li>
                    <li><strong>Sequence:</strong> Execute in order from top to bottom</li>
                    <li><strong>Selection:</strong> Branch based on conditions (if, if-else, if-elif-else)</li>
                    <li><strong>Iteration:</strong> Repeat while a condition is true (while, for)</li>
                    <li><strong>Flowgorithm:</strong> A free educational tool for creating and executing flowcharts graphically</li>
                    <li><strong>Design Process:</strong> Problem analysis → PDC → Flowchart → Code → Testing</li>
                  </ul>
                </div>

                {/* ───────────────── Exercises ───────────────── */}
                <div className="exercise-box">
                  <h3>{t('pythonLearning.exercises')}</h3>
                  <p><strong>Exercise 1: Two-Number Comparison Program</strong></p>
                  <p>
                    Create a flowchart in Flowgorithm for the following program, then convert it to Python code.
                    <br />"A program that inputs two numbers and outputs the larger number, smaller number, and their average"
                    <br />Submit both the flowchart file (.fprg) and Python code (.py).
                    <br />Hint: Use the decision (diamond) symbol to compare the two numbers.
                  </p>
                  <p><strong>Exercise 2: Sum of Multiples of 3</strong></p>
                  <p>
                    Write a program that finds the sum of all multiples of 3 from 1 to 100.
                    <br />First draw the flowchart, then implement it in Python code.
                    <br />Hint: Use the condition <code>if num % 3 == 0</code> inside a loop.
                    <br />Expected result: 3 + 6 + 9 + ... + 99 = 1683
                  </p>
                </div>

                <div className="exercise-box">
                  <h3>{t('pythonLearning.advancedProblems')}</h3>
                  <p><strong>Advanced 1: Prime Number Check</strong></p>
                  <p>
                    Write a program that inputs an integer N and determines if it is a prime number, both as a flowchart and code.
                    <br />Prime: A natural number greater than 1 that is only divisible by 1 and itself
                    <br />Flowchart hint: Loop from 2 to N-1 and check if N is divisible
                    <br />Example: 7 → "It is a prime number", 12 → "It is not a prime number"
                  </p>
                  <p><strong>Advanced 2: Full Multiplication Table</strong></p>
                  <p>
                    Write a program that outputs the complete multiplication table from 2 to 9, both as a flowchart and code.
                    <br />Flowchart hint: A nested loop structure is needed (outer: table number, inner: multiplier)
                    <br />In Flowgorithm, use nested While or nested For loops.
                    <br />Output format: "2 x 1 = 2" format with line breaks
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>핵심 정리</h3>
                  <ul>
                    <li><strong>알고리즘:</strong> 문제를 해결하기 위한 단계적 절차이며, 입력, 출력, 명확성, 유한성, 효율성 5가지 조건을 만족해야 한다</li>
                    <li><strong>순서도:</strong> 알고리즘을 표준화된 기호로 시각화한 다이어그램이다</li>
                    <li><strong>8가지 기호:</strong> 단말(타원), 처리(직사각형), 입출력(평행사변형), 판단(마름모), 흐름선(화살표), 연결자(원), 준비(육각형), 서브루틴(이중선 직사각형)</li>
                    <li><strong>3가지 제어 구조:</strong> 순차(Sequence), 선택(Selection), 반복(Iteration) - 이 세 가지의 조합으로 모든 프로그램을 구현할 수 있다</li>
                    <li><strong>순차:</strong> 위에서 아래로 순서대로 실행</li>
                    <li><strong>선택:</strong> 조건에 따라 분기 (if, if-else, if-elif-else)</li>
                    <li><strong>반복:</strong> 조건이 참인 동안 반복 실행 (while, for)</li>
                    <li><strong>Flowgorithm:</strong> 순서도를 그래픽으로 작성하고 실행할 수 있는 무료 교육용 도구이다</li>
                    <li><strong>설계 과정:</strong> 문제 분석 → PDC → 순서도 → 코드 → 테스트</li>
                  </ul>
                </div>

                {/* ───────────────── 실습 과제 ───────────────── */}
                <div className="exercise-box">
                  <h3>실습 과제</h3>
                  <p><strong>과제 1: 두 수 비교 프로그램</strong></p>
                  <p>
                    Flowgorithm으로 다음 프로그램의 순서도를 작성한 후, 파이썬 코드로 변환하세요.
                    <br />"두 수를 입력받아 큰 수, 작은 수, 평균을 출력하는 프로그램"
                    <br />순서도 파일(.fprg)과 파이썬 코드(.py)를 모두 제출하세요.
                    <br />힌트: 판단(마름모) 기호를 사용하여 두 수의 크기를 비교합니다.
                  </p>
                  <p><strong>과제 2: 3의 배수의 합</strong></p>
                  <p>
                    1부터 100까지의 정수 중에서 3의 배수의 합을 구하는 프로그램을 작성하세요.
                    <br />먼저 순서도를 그리고, 파이썬 코드로 구현하세요.
                    <br />힌트: 반복문 안에서 <code>if num % 3 == 0</code> 조건을 사용합니다.
                    <br />예상 결과: 3 + 6 + 9 + ... + 99 = 1683
                  </p>
                </div>

                <div className="exercise-box">
                  <h3>심화 문제</h3>
                  <p><strong>심화 1: 소수(Prime Number) 판별</strong></p>
                  <p>
                    정수 N을 입력받아 소수인지 판별하는 프로그램을 순서도와 코드로 작성하세요.
                    <br />소수: 1과 자기 자신으로만 나누어지는 1보다 큰 자연수
                    <br />순서도 힌트: 2부터 N-1까지 반복하며 나누어 떨어지는지 확인
                    <br />예시: 7 → "소수입니다", 12 → "소수가 아닙니다"
                  </p>
                  <p><strong>심화 2: 구구단 전체 출력</strong></p>
                  <p>
                    2단부터 9단까지 전체 구구단을 출력하는 프로그램을 순서도와 코드로 작성하세요.
                    <br />순서도 힌트: 이중 반복 구조가 필요합니다 (바깥: 단, 안쪽: 곱하는 수)
                    <br />Flowgorithm에서는 중첩 While 또는 중첩 For를 사용합니다.
                    <br />출력 형식: "2 x 1 = 2" 형태로 줄바꿈하여 출력
                  </p>
                </div>
              </>
            )}

            <div className="lesson-nav">
              <Link to="/python-learning/05" className="lesson-nav-btn prev">
                {lang === 'en' ? '← 05: Turtle' : '← 05: Turtle'}
              </Link>
              <Link to="/python-learning/07" className="lesson-nav-btn next">
                {lang === 'en' ? '07: IF Conditionals →' : '07: IF 조건문 →'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
