import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson07() {
  const { t, lang } = useLanguage();
  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 7: IF Conditionals' : '7주차: IF 조건문'}</h1>
          <p>{lang === 'en' ? 'Conditional branching and logical decisions using if, elif, else' : 'if, elif, else를 활용한 조건 분기와 논리적 판단'}</p>
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
                    <li>Understand the concept of conditionals and why they are needed in programming</li>
                    <li>Write if, elif, and else statements correctly</li>
                    <li>Construct compound conditions using comparison and logical operators</li>
                    <li>Implement complex decision logic using nested conditionals</li>
                    <li>Design and write practical programs using conditionals</li>
                  </ul>
                </div>

                {/* ========== 1. What Are Conditionals? ========== */}
                <h2>1. What Are Conditionals?</h2>

                <h3>1-1. Controlling Program Flow</h3>
                <p>
                  Programs fundamentally execute line by line from top to bottom. This is called <strong>Sequential Structure</strong>.
                  However, solving real-world problems requires more than just sequential execution. There are 3 basic control structures for directing program flow.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Control Structure</th><th>Description</th><th>Keywords</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Sequential</strong></td><td>Execute commands from top to bottom in order</td><td>(default flow)</td></tr>
                    <tr><td><strong>Selection</strong></td><td>Choose which code to execute based on a condition</td><td>if, elif, else</td></tr>
                    <tr><td><strong>Repetition</strong></td><td>Execute specific code repeatedly</td><td>while, for</td></tr>
                  </tbody>
                </table>
                <p>
                  This week we will learn about <strong>Selection Structure</strong>, also known as <strong>Conditional Statements</strong>.
                  A conditional statement executes different code blocks depending on whether a given condition is True or False.
                </p>

                <h3>1-2. Why Do We Need Conditionals?</h3>
                <p>
                  Our daily lives are full of conditional decisions. "If it rains, take an umbrella," "If the test score is 60 or above, pass,"
                  "If the balance is sufficient, proceed with payment" -- all decisions are based on conditions.
                  The same applies in programming. Even the same program must produce different results depending on input values,
                  and this is exactly why conditionals are at the core of programming.
                </p>
                <p>
                  For example, in a login system, the conditional judgment "if the password is correct, login succeeds; otherwise, login fails" is essential.
                  Without conditionals, even such basic functionality cannot be implemented.
                </p>

                <h3>1-3. Boolean Logic</h3>
                <p>
                  The core of conditionals is <strong>Boolean</strong> values. Boolean is a data type with only two values: <code>True</code> and <code>False</code>.
                  This concept originated from Boolean Algebra created by the British mathematician <strong>George Boole (1815-1864)</strong>,
                  and it forms the foundation of modern computer science.
                </p>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.learningObjectives')}</h3>
                  <ul>
                    <li>조건문의 개념과 프로그래밍에서의 필요성을 이해한다</li>
                    <li>if, elif, else 구문을 올바르게 작성할 수 있다</li>
                    <li>비교 연산자와 논리 연산자를 활용하여 복합 조건을 구성할 수 있다</li>
                    <li>중첩 조건문을 사용하여 복잡한 판단 로직을 구현할 수 있다</li>
                    <li>조건문을 활용한 실전 프로그램을 설계하고 작성할 수 있다</li>
                  </ul>
                </div>

                {/* ========== 1. 조건문이란? ========== */}
                <h2>1. 조건문이란?</h2>

                <h3>1-1. 프로그램의 흐름 제어</h3>
                <p>
                  프로그램은 기본적으로 위에서 아래로 한 줄씩 순서대로 실행됩니다. 이것을 <strong>순차 구조(Sequential Structure)</strong>라고 합니다.
                  하지만 현실 세계의 문제를 해결하려면 단순히 순서대로 실행하는 것만으로는 부족합니다. 프로그램의 흐름을 제어하는 3가지 기본 구조가 있습니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>제어 구조</th><th>설명</th><th>키워드</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>순차 구조</strong></td><td>명령을 위에서 아래로 차례대로 실행</td><td>(기본 흐름)</td></tr>
                    <tr><td><strong>선택 구조</strong></td><td>조건에 따라 실행할 코드를 선택</td><td>if, elif, else</td></tr>
                    <tr><td><strong>반복 구조</strong></td><td>특정 코드를 반복하여 실행</td><td>while, for</td></tr>
                  </tbody>
                </table>
                <p>
                  이번 주차에서는 <strong>선택 구조</strong>, 즉 <strong>조건문(Conditional Statement)</strong>을 학습합니다.
                  조건문은 주어진 조건의 참(True) 또는 거짓(False) 여부에 따라 서로 다른 코드 블록을 실행하는 구문입니다.
                </p>

                <h3>1-2. 조건문의 필요성</h3>
                <p>
                  우리의 일상생활은 조건 판단으로 가득합니다. "비가 오면 우산을 가져간다", "시험 점수가 60점 이상이면 합격이다",
                  "잔액이 충분하면 결제를 진행한다" 등 모든 의사결정은 조건에 기반합니다.
                  프로그래밍에서도 마찬가지입니다. 동일한 프로그램이라도 입력값에 따라 다른 결과를 만들어내야 하며,
                  이것이 바로 조건문이 프로그래밍의 핵심인 이유입니다.
                </p>
                <p>
                  예를 들어, 로그인 시스템에서는 "비밀번호가 맞으면 로그인 성공, 틀리면 로그인 실패"라는 조건 판단이 반드시 필요합니다.
                  조건문 없이는 이러한 기본적인 기능조차 구현할 수 없습니다.
                </p>

                <h3>1-3. 불리언(Boolean) 논리</h3>
                <p>
                  조건문의 핵심은 <strong>불리언(Boolean)</strong> 값입니다. 불리언은 <code>True</code>(참)와 <code>False</code>(거짓),
                  오직 두 가지 값만 가지는 자료형입니다. 이 개념은 영국의 수학자 <strong>George Boole(1815-1864)</strong>이 창시한
                  불 대수(Boolean Algebra)에서 유래했으며, 현대 컴퓨터 과학의 근간이 됩니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Checking Boolean Values' : '불리언 값 확인'}</div>
              <pre><code>{`# 불리언 값은 True 또는 False (첫 글자 대문자)
print(type(True))   # <class 'bool'>
print(type(False))  # <class 'bool'>

# 비교 연산의 결과는 불리언 값
print(5 > 3)    # True
print(2 == 7)   # False
print(10 != 10) # False`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>1-4. Conditionals and Flowcharts</h3>
                <p>
                  In the flowcharts learned in Week 6, the <strong>diamond symbol</strong> represents a conditional decision.
                  You write the condition expression inside the diamond, and the flow branches into "Yes (True)" and "No (False)" directions.
                  This corresponds exactly to Python's if-else structure.
                </p>
              </>
            ) : (
              <>
                <h3>1-4. 조건문과 순서도의 관계</h3>
                <p>
                  6주차에서 학습한 순서도에서 <strong>다이아몬드(◇) 기호</strong>가 바로 조건 판단을 나타냅니다.
                  다이아몬드 안에 조건식을 쓰고, "Yes(참)" 방향과 "No(거짓)" 방향으로 흐름이 갈라집니다.
                  이것이 파이썬의 if-else 구조와 정확히 대응됩니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Flowchart and Conditional Correspondence' : '순서도와 조건문의 대응'}</div>
              <pre><code>{`# 순서도 다이아몬드: "score >= 60?"
#   → Yes(True):  "합격" 출력
#   → No(False):  "불합격" 출력
#
# 이것을 파이썬 코드로 표현하면:

score = int(input("점수를 입력하세요: "))

if score >= 60:      # ◇ 조건 판단
    print("합격")    # Yes 경로
else:
    print("불합격")  # No 경로`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 2. if Statement Basics ========== */}
                <h2>2. Basic if Statement Structure</h2>

                <h3>2-1. if Statement Syntax</h3>
                <p>
                  Python's if statement is the simplest form of conditional. When the condition is <code>True</code>, the indented code block executes;
                  when <code>False</code>, that block is skipped.
                </p>
              </>
            ) : (
              <>
                {/* ========== 2. if문 기본 구조 ========== */}
                <h2>2. if문 기본 구조</h2>

                <h3>2-1. if문의 문법</h3>
                <p>
                  파이썬의 if문은 가장 단순한 형태의 조건문입니다. 조건식이 <code>True</code>일 때만 들여쓰기된 코드 블록이 실행되고,
                  <code>False</code>이면 해당 블록을 건너뜁니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'if Statement Syntax' : 'if문 문법'}</div>
              <pre><code>{`if 조건식:
    실행할 코드1
    실행할 코드2
    ...

# 조건식이 True이면 → 들여쓰기된 코드 실행
# 조건식이 False이면 → 들여쓰기된 코드 건너뜀`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>2-2. Python's Indentation Rules</h3>
                <p>
                  Unlike other programming languages (C, Java, etc.) that use curly braces (<code>{'{}'}</code>),
                  Python uses <strong>indentation</strong> to define code blocks.
                  This is one of Python's most distinctive features.
                </p>
                <ul>
                  <li><strong>Standard:</strong> 4 spaces are recommended (PEP 8 Style Guide)</li>
                  <li>1 tab is also allowed, but mixing tabs and spaces will cause errors</li>
                  <li>All code within the same block must be indented at the same depth</li>
                </ul>

                <h3>2-3. IndentationError</h3>
                <p>
                  If indentation is incorrect, an <code>IndentationError</code> occurs. This is one of the most common errors beginners encounter.
                </p>
              </>
            ) : (
              <>
                <h3>2-2. 파이썬의 들여쓰기(Indentation) 규칙</h3>
                <p>
                  파이썬은 다른 프로그래밍 언어(C, Java 등)와 달리 중괄호(<code>{'{}'}</code>)를 사용하지 않고,
                  <strong>들여쓰기(Indentation)</strong>로 코드 블록을 구분합니다.
                  이것은 파이썬의 가장 큰 특징 중 하나입니다.
                </p>
                <ul>
                  <li><strong>표준:</strong> 공백(스페이스) 4칸을 권장합니다 (PEP 8 스타일 가이드)</li>
                  <li>탭(Tab) 1칸도 사용 가능하지만, 스페이스와 혼용하면 오류가 발생합니다</li>
                  <li>같은 블록 내의 코드는 반드시 동일한 깊이로 들여쓰기해야 합니다</li>
                </ul>

                <h3>2-3. 들여쓰기 오류(IndentationError)</h3>
                <p>
                  들여쓰기가 올바르지 않으면 <code>IndentationError</code>가 발생합니다. 이는 파이썬 초보자가 가장 자주 겪는 오류 중 하나입니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Indentation Error Examples' : '들여쓰기 오류 예시'}</div>
              <pre><code>{`# ✗ 잘못된 코드 - IndentationError 발생
age = 20
if age >= 18:
print("성인입니다.")    # 들여쓰기가 없음!

# ✗ 잘못된 코드 - 들여쓰기 불일치
if age >= 18:
    print("성인입니다.")
      print("투표 가능합니다.")  # 들여쓰기 깊이가 다름!`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>2-4. The Importance of the Colon (:)</h3>
                <p>
                  A <strong>colon (:)</strong> must always follow the if statement.
                  The colon tells Python "a code block starts here."
                  Omitting the colon causes a <code>SyntaxError</code>.
                </p>

                <h3>2-5. if Statement Examples</h3>
              </>
            ) : (
              <>
                <h3>2-4. 콜론(:)의 중요성</h3>
                <p>
                  if문 뒤에는 반드시 <strong>콜론(:)</strong>을 붙여야 합니다.
                  콜론은 "여기서부터 코드 블록이 시작된다"는 것을 파이썬에게 알려주는 기호입니다.
                  콜론을 빠뜨리면 <code>SyntaxError</code>가 발생합니다.
                </p>

                <h3>2-5. if문 예제</h3>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic if Example 1 - Adult Check' : '기본 if문 예제 1 - 성인 여부'}</div>
              <pre><code>{`age = 20

if age >= 18:
    print("성인입니다.")        # 조건이 True → 실행됨
    print("투표할 수 있습니다.") # 같은 블록 → 함께 실행됨

print("프로그램 종료")  # if 블록 밖 → 항상 실행됨`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic if Example 2 - Positive Number Check' : '기본 if문 예제 2 - 양수 판별'}</div>
              <pre><code>{`number = int(input("숫자를 입력하세요: "))

if number > 0:
    print(f"{number}은(는) 양수입니다.")

if number < 0:
    print(f"{number}은(는) 음수입니다.")

if number == 0:
    print("0을 입력했습니다.")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic if Example 3 - Understanding Block Scope' : '기본 if문 예제 3 - 블록 범위 이해'}</div>
              <pre><code>{`temperature = 35

if temperature >= 30:
    print("폭염 경보!")      # if 블록 내부 (조건 True일 때만)
    print("외출을 자제하세요.") # if 블록 내부 (조건 True일 때만)

print("오늘의 기온 안내였습니다.")  # if 블록 밖 (항상 실행)

# → 들여쓰기가 없는 줄부터는 if 블록 밖입니다.
# → if 블록의 범위는 들여쓰기로 결정됩니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 3. if-else ========== */}
                <h2>3. if-else Statement</h2>

                <h3>3-1. Choosing Between Two Cases</h3>
                <p>
                  With only an if statement, nothing happens when the condition is false. But in many cases, you need two paths:
                  "If the condition is true, do A; if false, do B." This is when you use <code>else</code>.
                </p>
              </>
            ) : (
              <>
                {/* ========== 3. if-else문 ========== */}
                <h2>3. if-else문</h2>

                <h3>3-1. 두 가지 경우 중 하나를 선택</h3>
                <p>
                  if문만으로는 조건이 거짓일 때 아무 일도 하지 않습니다. 하지만 많은 경우 "조건이 참이면 A를 하고,
                  거짓이면 B를 한다"처럼 두 가지 경로가 모두 필요합니다. 이때 <code>else</code>를 사용합니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'if-else Syntax' : 'if-else문 문법'}</div>
              <pre><code>{`if 조건식:
    조건이 True일 때 실행할 코드
else:
    조건이 False일 때 실행할 코드`}</code></pre>
            </div>

            {lang === 'en' ? (
              <p>
                <strong>How it works:</strong> First, the condition is evaluated. If it is <code>True</code>, the if block executes;
                if <code>False</code>, the else block executes. Exactly one of the two blocks will always run.
              </p>
            ) : (
              <p>
                <strong>동작 원리:</strong> 먼저 조건식을 평가합니다. 결과가 <code>True</code>이면 if 블록을 실행하고,
                <code>False</code>이면 else 블록을 실행합니다. 두 블록 중 반드시 하나만 실행됩니다.
              </p>
            )}

            {lang === 'en' ? (
              <h3>3-2. if-else Examples</h3>
            ) : (
              <h3>3-2. if-else문 예제</h3>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Pass/Fail Judgment' : '합격/불합격 판정'}</div>
              <pre><code>{`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("축하합니다! 합격입니다!")
    print("다음 단계로 진행합니다.")
else:
    print("아쉽지만 불합격입니다.")
    print("다음 기회에 다시 도전하세요.")

# 실행 예시:
# 점수를 입력하세요: 75
# 축하합니다! 합격입니다!
# 다음 단계로 진행합니다.`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Even/Odd Check' : '짝수/홀수 판별'}</div>
              <pre><code>{`num = int(input("정수를 입력하세요: "))

if num % 2 == 0:
    print(f"{num}은(는) 짝수입니다.")
else:
    print(f"{num}은(는) 홀수입니다.")

# num % 2 → num을 2로 나눈 나머지
# 나머지가 0이면 짝수, 아니면 홀수`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Positive/Negative Check' : '양수/음수 판별'}</div>
              <pre><code>{`num = float(input("숫자를 입력하세요: "))

if num >= 0:
    print(f"{num}은(는) 양수 또는 0입니다.")
else:
    print(f"{num}은(는) 음수입니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 4. if-elif-else ========== */}
                <h2>4. if-elif-else Statement</h2>

                <h3>4-1. Checking Multiple Conditions in Order</h3>
                <p>
                  Many real-world problems have more than two cases.
                  For example, grading scores as A, B, C, D, F requires 5 cases.
                  Use <code>elif</code> (short for else if) to check multiple conditions in order.
                </p>
              </>
            ) : (
              <>
                {/* ========== 4. if-elif-else문 ========== */}
                <h2>4. if-elif-else문</h2>

                <h3>4-1. 여러 조건을 순서대로 검사</h3>
                <p>
                  현실 세계의 많은 문제는 두 가지가 아니라 여러 가지 경우로 나뉩니다.
                  예를 들어 성적을 A, B, C, D, F로 나누려면 5가지 경우가 필요합니다.
                  이때 <code>elif</code>(else if의 줄임말)를 사용하여 여러 조건을 순서대로 검사합니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'if-elif-else Syntax' : 'if-elif-else문 문법'}</div>
              <pre><code>{`if 조건식1:
    조건식1이 True일 때 실행
elif 조건식2:
    조건식1은 False이고, 조건식2가 True일 때 실행
elif 조건식3:
    조건식1, 2 모두 False이고, 조건식3이 True일 때 실행
else:
    위의 모든 조건이 False일 때 실행 (선택사항)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>4-2. The Importance of Condition Order</h3>
                <p>
                  You can add as many <code>elif</code> blocks as needed, and <code>else</code> is optional.
                  Conditions are checked <strong>from top to bottom</strong>, and <strong>only the first True condition's block executes</strong>.
                  The remaining conditions are skipped. Therefore, the order of conditions is very important.
                </p>

                <h3>4-3. Grade Classification</h3>
              </>
            ) : (
              <>
                <h3>4-2. 조건 검사 순서의 중요성</h3>
                <p>
                  <code>elif</code>는 몇 개든 추가할 수 있으며, <code>else</code>는 선택사항입니다.
                  조건은 <strong>위에서 아래로 순서대로</strong> 검사되며, <strong>첫 번째로 True가 되는 조건의 블록만 실행</strong>됩니다.
                  나머지 조건은 검사하지 않고 건너뜁니다. 따라서 조건의 순서가 매우 중요합니다.
                </p>

                <h3>4-3. 성적 등급 판별</h3>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Grade Classification (A/B/C/D/F)' : '성적 등급 판별 (A/B/C/D/F)'}</div>
              <pre><code>{`score = int(input("점수를 입력하세요 (0~100): "))

# 조건을 위에서 아래로 검사: 첫 True에서 실행 후 종료
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"    # 여기 도달했다면 score < 90이 보장됨
elif score >= 70:
    grade = "C"    # 여기 도달했다면 score < 80이 보장됨
elif score >= 60:
    grade = "D"    # 여기 도달했다면 score < 70이 보장됨
else:
    grade = "F"    # score < 60

print(f"점수: {score}점, 등급: {grade}")

# 실행 예시:
# 점수를 입력하세요 (0~100): 85
# 점수: 85점, 등급: B`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>4-4. Fare Tier Calculation</h3>
            ) : (
              <h3>4-4. 요금 등급 계산</h3>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Fare by Age Group' : '나이에 따른 요금 등급'}</div>
              <pre><code>{`age = int(input("나이를 입력하세요: "))

if age < 0:
    print("잘못된 나이입니다.")
elif age <= 5:
    print("무료입니다.")           # 0~5세
elif age <= 13:
    print("어린이 요금: 500원")    # 6~13세
elif age <= 18:
    print("청소년 요금: 1,000원")  # 14~18세
elif age <= 64:
    print("성인 요금: 1,500원")    # 19~64세
else:
    print("경로 우대: 무료입니다.") # 65세 이상`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>4-5. Season Detection</h3>
            ) : (
              <h3>4-5. 계절 판별</h3>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Season by Month' : '월(month)로 계절 판별'}</div>
              <pre><code>{`month = int(input("월(1~12)을 입력하세요: "))

if month in [3, 4, 5]:
    season = "봄"
elif month in [6, 7, 8]:
    season = "여름"
elif month in [9, 10, 11]:
    season = "가을"
elif month in [12, 1, 2]:
    season = "겨울"
else:
    season = "잘못된 입력"

print(f"{month}월은 {season}입니다.")

# 실행 예시:
# 월(1~12)을 입력하세요: 7
# 7월은 여름입니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 5. Comparison Operators ========== */}
                <h2>5. Comparison Operators</h2>

                <h3>5-1. Comparison Operator Table</h3>
                <p>
                  Comparison operators compare two values and return <code>True</code> or <code>False</code>.
                  They are the most commonly used operators in conditionals.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>==</code></td><td>Equal</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>!=</code></td><td>Not equal</td><td><code>5 != 3</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>7 &gt; 3</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&lt;</code></td><td>Less than</td><td><code>2 &lt; 8</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&gt;=</code></td><td>Greater or equal</td><td><code>5 &gt;= 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&lt;=</code></td><td>Less or equal</td><td><code>3 &lt;= 2</code></td><td><code>False</code></td></tr>
                  </tbody>
                </table>

                <h3>5-2. == vs = Difference (Very Important!)</h3>
                <p>
                  This is one of the most common confusions for beginners. <code>=</code> is the <strong>assignment operator</strong> (stores a value in a variable),
                  and <code>==</code> is the <strong>comparison operator</strong> (checks if two values are equal). You must distinguish between these two.
                </p>
              </>
            ) : (
              <>
                {/* ========== 5. 비교 연산자 ========== */}
                <h2>5. 비교 연산자 (Comparison Operators)</h2>

                <h3>5-1. 비교 연산자 표</h3>
                <p>
                  비교 연산자는 두 값을 비교하여 <code>True</code> 또는 <code>False</code>를 반환합니다.
                  조건문에서 가장 많이 사용되는 연산자입니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>연산자</th><th>의미</th><th>예시</th><th>결과</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>==</code></td><td>같다 (equal)</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>!=</code></td><td>같지 않다 (not equal)</td><td><code>5 != 3</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&gt;</code></td><td>크다 (greater than)</td><td><code>7 &gt; 3</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&lt;</code></td><td>작다 (less than)</td><td><code>2 &lt; 8</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&gt;=</code></td><td>크거나 같다 (greater or equal)</td><td><code>5 &gt;= 5</code></td><td><code>True</code></td></tr>
                    <tr><td><code>&lt;=</code></td><td>작거나 같다 (less or equal)</td><td><code>3 &lt;= 2</code></td><td><code>False</code></td></tr>
                  </tbody>
                </table>

                <h3>5-2. == vs = 차이 (매우 중요!)</h3>
                <p>
                  초보자가 가장 자주 혼동하는 부분입니다. <code>=</code>는 <strong>대입 연산자</strong>(값을 변수에 저장)이고,
                  <code>==</code>는 <strong>비교 연산자</strong>(두 값이 같은지 비교)입니다. 이 둘을 반드시 구분해야 합니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '= (Assignment) vs == (Comparison)' : '= (대입) vs == (비교)'}</div>
              <pre><code>{`# = 는 대입 연산자: 오른쪽 값을 왼쪽 변수에 저장
x = 10          # x에 10을 저장
name = "홍길동"  # name에 "홍길동"을 저장

# == 는 비교 연산자: 두 값이 같은지 비교
print(x == 10)       # True (x의 값이 10과 같은가?)
print(x == 5)        # False
print(name == "홍길동")  # True

# ★ 흔한 실수: 조건문에서 =를 쓰면 오류!
# if x = 10:   ← SyntaxError 발생!
# if x == 10:  ← 올바른 코드`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>5-3. String Comparison</h3>
                <p>
                  Strings can also use comparison operators. <code>==</code> and <code>!=</code> compare whether string contents are identical,
                  while <code>&gt;</code>, <code>&lt;</code>, etc. compare in <strong>lexicographic order</strong>.
                  Lexicographic comparison is based on Unicode code values.
                </p>
              </>
            ) : (
              <>
                <h3>5-3. 문자열 비교</h3>
                <p>
                  문자열도 비교 연산자를 사용할 수 있습니다. <code>==</code>와 <code>!=</code>는 문자열의 내용이 동일한지 비교하고,
                  <code>&gt;</code>, <code>&lt;</code> 등은 <strong>사전순(lexicographic order)</strong>으로 비교합니다.
                  사전순 비교는 유니코드 코드값(문자 번호)을 기준으로 합니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'String Comparison Examples' : '문자열 비교 예제'}</div>
              <pre><code>{`# 문자열 동등 비교
print("hello" == "hello")  # True
print("hello" == "Hello")  # False (대소문자 구분!)
print("hello" != "world")  # True

# 사전순 비교 (유니코드 코드값 기준)
print("apple" < "banana")  # True (a < b)
print("abc" < "abd")       # True (세 번째 글자 c < d)
print("A" < "a")           # True (대문자가 소문자보다 앞)

# ord() 함수로 문자의 코드값 확인
print(ord("A"))  # 65
print(ord("a"))  # 97
print(ord("가")) # 44032`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>5-4. Comparison Operator Usage Examples</h3>
            ) : (
              <h3>5-4. 비교 연산자 활용 예제</h3>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Various Comparison Operator Usage' : '다양한 비교 연산자 활용'}</div>
              <pre><code>{`a = 10
b = 20
c = 10

print(a == c)   # True  (10 == 10)
print(a != b)   # True  (10 != 20)
print(a > b)    # False (10 > 20)
print(a < b)    # True  (10 < 20)
print(a >= c)   # True  (10 >= 10)
print(b <= a)   # False (20 <= 10)

# 비교 결과를 변수에 저장할 수도 있음
is_adult = (age >= 18)  # 불리언 값이 저장됨
print(is_adult)         # True 또는 False

# 파이썬은 연속 비교가 가능 (다른 언어에는 없는 기능!)
x = 15
print(10 < x < 20)     # True (10 < 15 < 20)
print(0 <= x <= 100)   # True (0 <= 15 <= 100)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 6. Logical Operators ========== */}
                <h2>6. Logical Operators</h2>

                <h3>6-1. Logical Operator Overview</h3>
                <p>
                  Logical operators are used to combine multiple conditions. They are essential for making complex judgments in conditionals.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Operator</th><th>Meaning</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>and</code></td><td>AND (logical conjunction)</td><td>True only when <strong>both conditions are True</strong></td></tr>
                    <tr><td><code>or</code></td><td>OR (logical disjunction)</td><td>True when <strong>at least one condition is True</strong></td></tr>
                    <tr><td><code>not</code></td><td>NOT (logical negation)</td><td>Reverses True to False and False to True</td></tr>
                  </tbody>
                </table>

                <h3>6-2. Truth Tables</h3>
                <p><strong>and operator truth table:</strong></p>
              </>
            ) : (
              <>
                {/* ========== 6. 논리 연산자 ========== */}
                <h2>6. 논리 연산자 (Logical Operators)</h2>

                <h3>6-1. 논리 연산자 개요</h3>
                <p>
                  논리 연산자는 여러 조건을 조합할 때 사용합니다. 조건문에서 복합적인 판단을 할 때 필수적입니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>연산자</th><th>의미</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>and</code></td><td>그리고 (논리곱)</td><td>두 조건이 <strong>모두 True</strong>일 때만 True</td></tr>
                    <tr><td><code>or</code></td><td>또는 (논리합)</td><td>두 조건 중 <strong>하나라도 True</strong>이면 True</td></tr>
                    <tr><td><code>not</code></td><td>아니다 (논리부정)</td><td>True를 False로, False를 True로 반전</td></tr>
                  </tbody>
                </table>

                <h3>6-2. 진리표 (Truth Table)</h3>
                <p><strong>and 연산자 진리표:</strong></p>
              </>
            )}

            {/* SHARED truth tables */}
            <table className="lesson-table">
              <thead>
                <tr><th>A</th><th>B</th><th>A and B</th></tr>
              </thead>
              <tbody>
                <tr><td>True</td><td>True</td><td><strong>True</strong></td></tr>
                <tr><td>True</td><td>False</td><td>False</td></tr>
                <tr><td>False</td><td>True</td><td>False</td></tr>
                <tr><td>False</td><td>False</td><td>False</td></tr>
              </tbody>
            </table>

            <p><strong>{lang === 'en' ? 'or operator truth table:' : 'or 연산자 진리표:'}</strong></p>
            <table className="lesson-table">
              <thead>
                <tr><th>A</th><th>B</th><th>A or B</th></tr>
              </thead>
              <tbody>
                <tr><td>True</td><td>True</td><td><strong>True</strong></td></tr>
                <tr><td>True</td><td>False</td><td><strong>True</strong></td></tr>
                <tr><td>False</td><td>True</td><td><strong>True</strong></td></tr>
                <tr><td>False</td><td>False</td><td>False</td></tr>
              </tbody>
            </table>

            <p><strong>{lang === 'en' ? 'not operator truth table:' : 'not 연산자 진리표:'}</strong></p>
            <table className="lesson-table">
              <thead>
                <tr><th>A</th><th>not A</th></tr>
              </thead>
              <tbody>
                <tr><td>True</td><td>False</td></tr>
                <tr><td>False</td><td>True</td></tr>
              </tbody>
            </table>

            {lang === 'en' ? (
              <>
                <h3>6-3. Short-circuit Evaluation</h3>
                <p>
                  Python performs <strong>short-circuit evaluation</strong> in logical operations.
                  That is, if the result is already determined, it does not evaluate the remaining conditions.
                </p>
                <ul>
                  <li><code>and</code>: If the first condition is <code>False</code>, it returns <code>False</code> without checking the second</li>
                  <li><code>or</code>: If the first condition is <code>True</code>, it returns <code>True</code> without checking the second</li>
                </ul>
              </>
            ) : (
              <>
                <h3>6-3. 단락 평가 (Short-circuit Evaluation)</h3>
                <p>
                  파이썬은 논리 연산에서 <strong>단락 평가(Short-circuit Evaluation)</strong>를 수행합니다.
                  즉, 결과가 이미 확정되면 나머지 조건을 평가하지 않습니다.
                </p>
                <ul>
                  <li><code>and</code>: 첫 번째 조건이 <code>False</code>이면 두 번째 조건을 확인하지 않고 바로 <code>False</code> 반환</li>
                  <li><code>or</code>: 첫 번째 조건이 <code>True</code>이면 두 번째 조건을 확인하지 않고 바로 <code>True</code> 반환</li>
                </ul>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Short-circuit Evaluation Example' : '단락 평가 예시'}</div>
              <pre><code>{`# and: 첫 번째가 False이면 두 번째는 확인하지 않음
x = 0
if x != 0 and (10 / x) > 2:  # x가 0이므로 첫 조건이 False
    print("조건 충족")         # → 10/x는 실행되지 않음 (0으로 나누기 방지!)
else:
    print("조건 미충족")

# or: 첫 번째가 True이면 두 번째는 확인하지 않음
has_ticket = True
if has_ticket or check_membership():  # has_ticket이 True
    print("입장 가능")  # → check_membership()은 호출되지 않음`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>6-4. Logical Operator Usage Examples</h3>
            ) : (
              <h3>6-4. 논리 연산자 활용 예제</h3>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Logical Operator Usage' : '논리 연산자 활용'}</div>
              <pre><code>{`# ── and: 두 조건 모두 만족 ──
age = 25
has_license = True

if age >= 18 and has_license:
    print("운전할 수 있습니다.")
else:
    print("운전할 수 없습니다.")

# ── or: 하나만 만족해도 ──
day = "토요일"
if day == "토요일" or day == "일요일":
    print("주말입니다! 쉬세요.")
else:
    print("평일입니다. 출근!")

# ── not: 반전 ──
is_raining = False
if not is_raining:
    print("산책하기 좋은 날입니다.")

# ── 범위 검사 (and 활용) ──
score = 85
if score >= 0 and score <= 100:
    print("유효한 점수입니다.")
else:
    print("잘못된 점수입니다.")

# 파이썬 스타일 범위 검사 (더 간결)
if 0 <= score <= 100:
    print("유효한 점수입니다.")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Compound Condition Example' : '복합 조건 예제'}</div>
              <pre><code>{`# 놀이공원 놀이기구 탑승 조건:
# 키 120cm 이상 AND (나이 8세 이상 OR 보호자 동반)
height = int(input("키(cm)를 입력하세요: "))
age = int(input("나이를 입력하세요: "))
with_guardian = input("보호자 동반입니까? (y/n): ") == "y"

if height >= 120 and (age >= 8 or with_guardian):
    print("탑승 가능합니다!")
else:
    print("탑승할 수 없습니다.")

# ★ 괄호를 사용하여 연산 우선순위를 명확히 합니다.
# and가 or보다 우선순위가 높으므로 괄호가 중요합니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 7. Membership Operators ========== */}
                <h2>7. Membership Operators</h2>
                <p>
                  Membership operators check whether a value is contained in a sequence (string, list, tuple, etc.).
                  They are very useful in conditionals.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Operator</th><th>Meaning</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>in</code></td><td>Is contained</td><td>True if value exists in the sequence</td></tr>
                    <tr><td><code>not in</code></td><td>Is not contained</td><td>True if value does not exist in the sequence</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                {/* ========== 7. 멤버십 연산자 ========== */}
                <h2>7. 멤버십 연산자 (Membership Operators)</h2>
                <p>
                  멤버십 연산자는 어떤 값이 시퀀스(문자열, 리스트, 튜플 등)에 포함되어 있는지 확인합니다.
                  조건문에서 매우 유용하게 사용됩니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>연산자</th><th>의미</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>in</code></td><td>포함되어 있다</td><td>값이 시퀀스에 존재하면 True</td></tr>
                    <tr><td><code>not in</code></td><td>포함되어 있지 않다</td><td>값이 시퀀스에 없으면 True</td></tr>
                  </tbody>
                </table>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Membership Operators - Strings' : '멤버십 연산자 - 문자열에서 사용'}</div>
              <pre><code>{`# 문자열에서 특정 문자/부분문자열 포함 여부
sentence = "파이썬은 재미있는 프로그래밍 언어입니다"

print("파이썬" in sentence)     # True
print("자바" in sentence)       # False
print("자바" not in sentence)   # True

# 조건문에서 활용
email = input("이메일을 입력하세요: ")
if "@" in email:
    print("유효한 이메일 형식입니다.")
else:
    print("이메일에 @가 포함되어야 합니다.")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Membership Operators - Lists' : '멤버십 연산자 - 리스트에서 사용'}</div>
              <pre><code>{`# 리스트에서 특정 값 포함 여부
fruits = ["사과", "바나나", "포도", "딸기"]

print("사과" in fruits)    # True
print("수박" in fruits)    # False

# 조건문에서 활용
user_input = input("좋아하는 과일: ")
if user_input in fruits:
    print(f"{user_input}이(가) 목록에 있습니다!")
else:
    print(f"{user_input}은(는) 목록에 없습니다.")

# 여러 값 중 하나인지 확인 (or 대신 in 사용)
color = input("신호등 색: ")

# 방법 1: or 사용 (길어짐)
# if color == "빨강" or color == "노랑" or color == "초록":

# 방법 2: in 사용 (간결!)
if color in ["빨강", "노랑", "초록"]:
    print("유효한 신호등 색입니다.")
else:
    print("잘못된 입력입니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 8. Nested Conditionals ========== */}
                <h2>8. Nested Conditionals (Nested if)</h2>

                <h3>8-1. Conditionals Inside Conditionals</h3>
                <p>
                  You can place conditionals inside other conditionals. This is called <strong>nested conditionals</strong>.
                  They are used when complex decision logic is needed, but deep nesting makes code hard to read,
                  so it is recommended to limit nesting to <strong>3 levels or fewer</strong>.
                </p>

                <h3>8-2. Movie Ticket Pricing</h3>
              </>
            ) : (
              <>
                {/* ========== 8. 중첩 조건문 ========== */}
                <h2>8. 중첩 조건문 (Nested if)</h2>

                <h3>8-1. 조건문 안에 조건문</h3>
                <p>
                  조건문 안에 또 다른 조건문을 넣을 수 있습니다. 이를 <strong>중첩 조건문</strong>이라고 합니다.
                  복잡한 판단 로직이 필요할 때 사용하지만, 중첩이 깊어지면 코드를 읽기 어려워지므로
                  일반적으로 <strong>3단계 이내</strong>로 제한하는 것을 권장합니다.
                </p>

                <h3>8-2. 영화 요금 계산</h3>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Nested Conditional - Movie Ticket Pricing' : '중첩 조건문 - 영화 요금 계산'}</div>
              <pre><code>{`# 영화 요금:
# - 어린이(12세 이하): 5,000원
# - 청소년(13~18세): 8,000원, 회원이면 6,000원
# - 성인(19세 이상): 12,000원, 회원이면 9,000원

age = int(input("나이를 입력하세요: "))
is_member = input("회원입니까? (y/n): ") == "y"

if age <= 12:
    price = 5000
    print(f"어린이 요금: {price:,}원")
elif age <= 18:
    if is_member:               # ← 중첩 조건문
        price = 6000
        print(f"청소년 회원 요금: {price:,}원")
    else:
        price = 8000
        print(f"청소년 일반 요금: {price:,}원")
else:
    if is_member:               # ← 중첩 조건문
        price = 9000
        print(f"성인 회원 요금: {price:,}원")
    else:
        price = 12000
        print(f"성인 일반 요금: {price:,}원")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>8-3. Login System</h3>
            ) : (
              <h3>8-3. 로그인 시스템</h3>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Nested Conditional - Login System' : '중첩 조건문 - 로그인 시스템'}</div>
              <pre><code>{`# 간단한 로그인 시스템
correct_id = "admin"
correct_pw = "1234"

user_id = input("아이디를 입력하세요: ")
user_pw = input("비밀번호를 입력하세요: ")

if user_id == correct_id:
    # 아이디가 맞으면 비밀번호 확인
    if user_pw == correct_pw:
        print("로그인 성공! 환영합니다.")
    else:
        print("비밀번호가 틀렸습니다.")
else:
    print("존재하지 않는 아이디입니다.")

# 실행 예시:
# 아이디를 입력하세요: admin
# 비밀번호를 입력하세요: 1234
# 로그인 성공! 환영합니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 9. Conditional Expression ========== */}
                <h2>9. Conditional Expression (Ternary Operator)</h2>
                <p>
                  Python provides a <strong>conditional expression</strong> that can express simple conditionals in a single line.
                  It corresponds to the ternary operator (<code>? :</code>) in other programming languages.
                </p>
              </>
            ) : (
              <>
                {/* ========== 9. 조건 표현식 ========== */}
                <h2>9. 조건 표현식 (삼항 연산자)</h2>
                <p>
                  파이썬은 간단한 조건문을 한 줄로 표현할 수 있는 <strong>조건 표현식(Conditional Expression)</strong>을 제공합니다.
                  다른 프로그래밍 언어의 삼항 연산자(<code>? :</code>)에 해당합니다.
                </p>
              </>
            )}

            {/* SHARED code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Conditional Expression Syntax' : '조건 표현식 문법'}</div>
              <pre><code>{`# 문법: 값1 if 조건 else 값2
# 조건이 True이면 값1, False이면 값2

# 예제 1: 합격/불합격
score = 85
result = "합격" if score >= 60 else "불합격"
print(result)  # 합격

# 예제 2: 짝수/홀수
num = 7
parity = "짝수" if num % 2 == 0 else "홀수"
print(f"{num}은(는) {parity}입니다.")  # 7은(는) 홀수입니다.

# 예제 3: 절대값 구하기
x = -5
abs_x = x if x >= 0 else -x
print(f"{x}의 절대값: {abs_x}")  # -5의 절대값: 5

# 예제 4: 최대값 구하기
a, b = 10, 20
maximum = a if a > b else b
print(f"최대값: {maximum}")  # 최대값: 20`}</code></pre>
            </div>

            {lang === 'en' ? (
              <p>
                Conditional expressions should only be used for simple conditions.
                For complex logic, using regular if-else statements is better for readability.
              </p>
            ) : (
              <p>
                조건 표현식은 간단한 조건에만 사용하는 것이 좋습니다.
                복잡한 로직은 일반 if-else문을 사용하는 것이 가독성에 더 좋습니다.
              </p>
            )}

            {lang === 'en' ? (
              <>
                {/* ========== 10. Comprehensive Practice ========== */}
                <h2>10. Comprehensive Practice Examples</h2>

                <h3>Example 1: Rock-Paper-Scissors Game</h3>
                <p>
                  <strong>Problem:</strong> The user plays rock-paper-scissors against the computer.
                  The computer chooses randomly, and the winner is determined.
                </p>
              </>
            ) : (
              <>
                {/* ========== 10. 종합 실습 예제 ========== */}
                <h2>10. 종합 실습 예제</h2>

                <h3>예제 1: 가위바위보 게임</h3>
                <p>
                  <strong>문제:</strong> 사용자와 컴퓨터가 가위바위보를 합니다.
                  컴퓨터는 랜덤으로 선택하고, 승패를 판정합니다.
                </p>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">PDC (Problem Definition Chart)</div>
              <pre><code>{`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 사용자 선택  │ 컴퓨터 랜덤선택 │ 컴퓨터 선택     │
│ (가위/바위/보)│ 승패 판정       │ 승/패/무승부    │
└──────────────┴─────────────────┴─────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Rock-Paper-Scissors Game Code' : '가위바위보 게임 코드'}</div>
              <pre><code>{`import random

# 선택지 리스트
choices = ["가위", "바위", "보"]

# 컴퓨터: 랜덤 선택
computer = random.choice(choices)

# 사용자: 입력
user = input("가위, 바위, 보 중 선택하세요: ")

# 입력 검증
if user not in choices:
    print("잘못된 입력입니다. 가위, 바위, 보 중 하나를 입력하세요.")
else:
    # 결과 출력
    print(f"\\n사용자: {user}")
    print(f"컴퓨터: {computer}")
    print("-" * 20)

    # 승패 판정
    if user == computer:
        print("무승부입니다!")
    elif (user == "가위" and computer == "보") or \\
         (user == "바위" and computer == "가위") or \\
         (user == "보" and computer == "바위"):
        print("축하합니다! 이겼습니다!")
    else:
        print("아쉽지만 졌습니다.")

# 실행 예시:
# 가위, 바위, 보 중 선택하세요: 바위
#
# 사용자: 바위
# 컴퓨터: 가위
# --------------------
# 축하합니다! 이겼습니다!`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 2: Leap Year Checker</h3>
                <p>
                  <strong>Problem:</strong> Enter a year and determine if it is a leap year.<br/>
                  <strong>Leap year rule:</strong> A year divisible by 4 but not by 100, or divisible by 400
                </p>
              </>
            ) : (
              <>
                <h3>예제 2: 윤년 판별기</h3>
                <p>
                  <strong>문제:</strong> 연도를 입력받아 윤년(Leap Year)인지 판별합니다.<br/>
                  <strong>윤년 조건:</strong> 4의 배수이면서 100의 배수가 아닌 해, 또는 400의 배수인 해
                </p>
              </>
            )}

            {/* SHARED code blocks */}
            <div className="code-block">
              <div className="code-header">PDC (Problem Definition Chart)</div>
              <pre><code>{`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 연도(year)   │ 윤년 조건 검사  │ 윤년 여부       │
│              │ 4의 배수 AND    │                 │
│              │ NOT 100의 배수  │                 │
│              │ OR 400의 배수   │                 │
└──────────────┴─────────────────┴─────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Leap Year Checker Code' : '윤년 판별기 코드'}</div>
              <pre><code>{`year = int(input("연도를 입력하세요: "))

# 방법 1: 한 줄 조건식
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year}년은 윤년입니다.")
else:
    print(f"{year}년은 평년입니다.")

# 방법 2: 중첩 조건문 (논리 흐름이 명확)
if year % 400 == 0:
    print(f"{year}년은 윤년입니다.")  # 400의 배수 → 윤년
elif year % 100 == 0:
    print(f"{year}년은 평년입니다.")  # 100의 배수 → 평년
elif year % 4 == 0:
    print(f"{year}년은 윤년입니다.")  # 4의 배수 → 윤년
else:
    print(f"{year}년은 평년입니다.")  # 나머지 → 평년

# 실행 예시:
# 연도를 입력하세요: 2024
# 2024년은 윤년입니다.
#
# 연도를 입력하세요: 1900
# 1900년은 평년입니다.   (100의 배수이지만 400의 배수가 아님)
#
# 연도를 입력하세요: 2000
# 2000년은 윤년입니다.   (400의 배수)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 3: Taxi Fare Calculator</h3>
                <p>
                  <strong>Problem:</strong> Calculate taxi fare based on travel distance and time of day.<br/>
                  <strong>Fare structure:</strong> Base fare 4,800 KRW (within 2km), then 1,000 KRW per additional km,
                  20% surcharge for late-night hours (22:00-06:00)
                </p>
              </>
            ) : (
              <>
                <h3>예제 3: 택시 요금 계산기</h3>
                <p>
                  <strong>문제:</strong> 이동 거리와 시간대를 입력받아 택시 요금을 계산합니다.<br/>
                  <strong>요금 기준:</strong> 기본요금 4,800원(2km 이내), 이후 km당 1,000원 추가,
                  심야(22시~06시)는 20% 할증
                </p>
              </>
            )}

            <div className="code-block">
              <div className="code-header">PDC (Problem Definition Chart)</div>
              <pre><code>{`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 거리(km)     │ 기본요금 계산   │ 총 요금         │
│ 시간(hour)   │ 추가요금 계산   │ (심야할증 표시) │
│              │ 심야할증 적용   │                 │
└──────────────┴─────────────────┴─────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Taxi Fare Calculator Code' : '택시 요금 계산기 코드'}</div>
              <pre><code>{`distance = float(input("이동 거리(km)를 입력하세요: "))
hour = int(input("현재 시각(0~23)을 입력하세요: "))

# 기본요금
base_fare = 4800  # 2km 이내 기본요금

# 거리에 따른 요금 계산
if distance <= 2:
    fare = base_fare
else:
    # 2km 초과분에 대해 km당 1,000원 추가
    extra = (distance - 2) * 1000
    fare = base_fare + extra

# 심야 할증 (22시~06시)
if hour >= 22 or hour < 6:
    fare = fare * 1.2  # 20% 할증
    print("(심야 할증이 적용되었습니다)")

# 결과 출력
print(f"\\n이동 거리: {distance}km")
print(f"시간대: {hour}시")
print(f"택시 요금: {int(fare):,}원")

# 실행 예시:
# 이동 거리(km)를 입력하세요: 5.5
# 현재 시각(0~23)을 입력하세요: 23
# (심야 할증이 적용되었습니다)
#
# 이동 거리: 5.5km
# 시간대: 23시
# 택시 요금: 9,960원`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>Example 4: BMI (Body Mass Index) Assessment</h3>
                <p>
                  <strong>Problem:</strong> Calculate BMI from height and weight, and determine obesity level.<br/>
                  <strong>BMI Formula:</strong> BMI = weight(kg) / height(m)<sup>2</sup>
                </p>
              </>
            ) : (
              <>
                <h3>예제 4: 체질량지수(BMI) 판정</h3>
                <p>
                  <strong>문제:</strong> 키와 체중을 입력받아 BMI를 계산하고 비만도를 판정합니다.<br/>
                  <strong>BMI 공식:</strong> BMI = 체중(kg) / 키(m)<sup>2</sup>
                </p>
              </>
            )}

            <div className="code-block">
              <div className="code-header">PDC (Problem Definition Chart)</div>
              <pre><code>{`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 키(cm)       │ cm → m 변환     │ BMI 수치        │
│ 체중(kg)     │ BMI 계산        │ 비만도 등급     │
│              │ 등급 판정       │                 │
└──────────────┴─────────────────┴─────────────────┘`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'BMI Assessment Program Code' : 'BMI 판정 프로그램 코드'}</div>
              <pre><code>{`# 입력
height_cm = float(input("키(cm)를 입력하세요: "))
weight = float(input("체중(kg)을 입력하세요: "))

# 처리
height_m = height_cm / 100  # cm를 m로 변환
bmi = weight / (height_m ** 2)  # BMI 계산

# BMI 등급 판정 (대한비만학회 기준)
if bmi < 18.5:
    grade = "저체중"
    advice = "영양 섭취에 신경쓰세요."
elif bmi < 23.0:
    grade = "정상"
    advice = "건강한 상태입니다!"
elif bmi < 25.0:
    grade = "과체중"
    advice = "적절한 운동을 권장합니다."
elif bmi < 30.0:
    grade = "비만"
    advice = "식이조절과 운동이 필요합니다."
else:
    grade = "고도비만"
    advice = "전문의 상담을 권장합니다."

# 출력
print(f"\\n{'='*30}")
print(f"키: {height_cm}cm, 체중: {weight}kg")
print(f"BMI: {bmi:.1f}")
print(f"판정: {grade}")
print(f"조언: {advice}")
print(f"{'='*30}")

# 실행 예시:
# 키(cm)를 입력하세요: 175
# 체중(kg)을 입력하세요: 70
#
# ==============================
# 키: 175.0cm, 체중: 70.0kg
# BMI: 22.9
# 판정: 정상
# 조언: 건강한 상태입니다!
# ==============================`}</code></pre>
            </div>

            {/* ========== Common Mistakes ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li>
                    <strong>Confusing = and ==:</strong> <code>if x = 10</code> is an assignment and causes an error.
                    Comparisons must use <code>if x == 10</code>.
                  </li>
                  <li>
                    <strong>Missing colon (:):</strong> Forgetting the colon after <code>if score &gt;= 60</code> causes
                    a <code>SyntaxError</code>.
                  </li>
                  <li>
                    <strong>Inconsistent indentation:</strong> Different indentation depths within the same block cause
                    an <code>IndentationError</code>.
                  </li>
                  <li>
                    <strong>Writing else if instead of elif:</strong> In Python, you must use <code>elif</code>,
                    not <code>else if</code>.
                  </li>
                  <li>
                    <strong>Wrong condition order:</strong> If you put a broad condition first, narrow conditions will never be reached.
                    Example: if <code>if score &gt;= 60</code> comes first, <code>elif score &gt;= 90</code> will never execute.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li>
                    <strong>= vs == 혼동:</strong> <code>if x = 10</code>은 대입문이므로 오류가 발생합니다.
                    비교는 반드시 <code>if x == 10</code>으로 써야 합니다.
                  </li>
                  <li>
                    <strong>콜론(:) 누락:</strong> <code>if score &gt;= 60</code> 뒤에 콜론을 빠뜨리면
                    <code>SyntaxError</code>가 발생합니다.
                  </li>
                  <li>
                    <strong>들여쓰기 불일치:</strong> 같은 블록 내에서 들여쓰기 깊이가 다르면
                    <code>IndentationError</code>가 발생합니다.
                  </li>
                  <li>
                    <strong>elif를 else if로 쓰는 실수:</strong> 파이썬에서는 <code>else if</code>가 아니라
                    반드시 <code>elif</code>로 써야 합니다.
                  </li>
                  <li>
                    <strong>조건 순서 오류:</strong> 넓은 범위의 조건을 먼저 쓰면 좁은 범위의 조건에 도달하지 못합니다.
                    예: <code>if score &gt;= 60</code>을 먼저 쓰면 <code>elif score &gt;= 90</code>은 절대 실행되지 않습니다.
                  </li>
                </ul>
              </div>
            )}

            {/* ========== Key Summary ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li><strong>Conditionals</strong> are selection structures that control program flow, executing different code based on true/false conditions</li>
                  <li><strong>if</strong> executes a block only when the condition is True; <strong>else</strong> specifies a block for when it is False</li>
                  <li><strong>elif</strong> checks multiple conditions in order, and only the first True condition's block executes</li>
                  <li><strong>Comparison operators</strong> (==, !=, &gt;, &lt;, &gt;=, &lt;=) compare two values and return True/False</li>
                  <li><strong>Logical operators</strong> (and, or, not) combine multiple conditions</li>
                  <li><strong>Membership operators</strong> (in, not in) check if a value is contained in a sequence</li>
                  <li><strong>Nested conditionals</strong> place conditionals inside conditionals; limit to 3 levels or fewer</li>
                  <li><strong>Conditional expressions</strong> (ternary operator) express simple conditions in a single line</li>
                  <li>Python uses <strong>indentation</strong> to define code blocks, and consistent indentation is crucial</li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li><strong>조건문</strong>은 프로그램의 흐름을 제어하는 선택 구조이며, 조건의 참/거짓에 따라 다른 코드를 실행한다</li>
                  <li><strong>if문</strong>은 조건이 True일 때만 블록을 실행하며, <strong>else</strong>는 False일 때 실행할 블록을 지정한다</li>
                  <li><strong>elif</strong>로 여러 조건을 순서대로 검사할 수 있으며, 첫 번째 True 조건의 블록만 실행된다</li>
                  <li><strong>비교 연산자</strong>(==, !=, &gt;, &lt;, &gt;=, &lt;=)는 두 값을 비교하여 True/False를 반환한다</li>
                  <li><strong>논리 연산자</strong>(and, or, not)로 여러 조건을 조합할 수 있다</li>
                  <li><strong>멤버십 연산자</strong>(in, not in)로 시퀀스 내 포함 여부를 확인할 수 있다</li>
                  <li><strong>중첩 조건문</strong>은 조건문 안에 조건문을 넣는 것이며, 3단계 이내로 제한하는 것을 권장한다</li>
                  <li><strong>조건 표현식</strong>(삼항 연산자)으로 간단한 조건을 한 줄로 표현할 수 있다</li>
                  <li>파이썬은 <strong>들여쓰기</strong>로 코드 블록을 구분하며, 일관된 들여쓰기가 매우 중요하다</li>
                </ul>
              </div>
            )}

            {/* ========== Exercises ========== */}
            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p><strong>Exercise 1: Detailed Grade Classification Program</strong></p>
                <p>
                  Write a program that receives a score (0-100) from the user and outputs a grade based on the following criteria.
                </p>
                <ul>
                  <li>A+ : 95 or above</li>
                  <li>A : 90 or above, below 95</li>
                  <li>B+ : 85 or above, below 90</li>
                  <li>B : 80 or above, below 85</li>
                  <li>C+ : 75 or above, below 80</li>
                  <li>C : 70 or above, below 75</li>
                  <li>D+ : 65 or above, below 70</li>
                  <li>D : 60 or above, below 65</li>
                  <li>F : below 60</li>
                </ul>
                <p>Display an error message for invalid scores (below 0 or above 100).</p>

                <p><strong>Exercise 2: Leap Year Detection Program</strong></p>
                <p>
                  Write a program that receives a year from the user and determines whether it is a leap year or common year.<br/>
                  Leap year rule: divisible by 4 but not by 100, or divisible by 400<br/>
                  Also display how many days February has in that year (leap year: 29 days, common year: 28 days).
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p><strong>과제 1: 세부 성적 등급 판정 프로그램</strong></p>
                <p>
                  사용자로부터 점수(0~100)를 입력받아 다음 기준에 따라 등급을 출력하는 프로그램을 작성하세요.
                </p>
                <ul>
                  <li>A+ : 95점 이상</li>
                  <li>A : 90점 이상 95점 미만</li>
                  <li>B+ : 85점 이상 90점 미만</li>
                  <li>B : 80점 이상 85점 미만</li>
                  <li>C+ : 75점 이상 80점 미만</li>
                  <li>C : 70점 이상 75점 미만</li>
                  <li>D+ : 65점 이상 70점 미만</li>
                  <li>D : 60점 이상 65점 미만</li>
                  <li>F : 60점 미만</li>
                </ul>
                <p>잘못된 점수(0 미만 또는 100 초과)를 입력하면 오류 메시지를 출력하세요.</p>

                <p><strong>과제 2: 윤년 판별 프로그램</strong></p>
                <p>
                  사용자로부터 연도를 입력받아 윤년인지 평년인지 판별하는 프로그램을 작성하세요.<br/>
                  윤년 조건: 4의 배수이면서 100의 배수가 아닌 해, 또는 400의 배수인 해<br/>
                  해당 연도의 2월이 몇 일인지도 함께 출력하세요 (윤년: 29일, 평년: 28일).
                </p>
              </div>
            )}

            {/* ========== Advanced Problems ========== */}
            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p><strong>Advanced 1: Number Guessing Game</strong></p>
                <p>
                  The computer picks a random number from 1 to 45.
                  Give the user 3 chances, and after each guess, provide a hint: "Higher" or "Lower."
                  If they guess correctly within 3 tries, print "Winner!"; otherwise, reveal the answer.<br/>
                  <em>Hint: Use <code>import random</code>, <code>random.randint(1, 45)</code></em>
                </p>

                <p><strong>Advanced 2: Simple ATM Program</strong></p>
                <p>
                  Set an initial balance of 50,000 KRW. Show the user a menu:
                  1) Check Balance, 2) Deposit, 3) Withdraw.
                  When depositing, add the amount; when withdrawing, check for insufficient funds before processing.
                  Include error handling for invalid menu inputs.
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p><strong>심화 1: 로또 번호 맞추기 게임</strong></p>
                <p>
                  1부터 45까지의 랜덤 숫자 하나를 컴퓨터가 정합니다.
                  사용자에게 3번의 기회를 주고, 매번 입력 후 "더 큽니다" 또는 "더 작습니다" 힌트를 제공합니다.
                  3회 안에 맞추면 "당첨!", 못 맞추면 정답을 공개합니다.<br/>
                  <em>힌트: <code>import random</code>, <code>random.randint(1, 45)</code> 사용</em>
                </p>

                <p><strong>심화 2: 간이 ATM 프로그램</strong></p>
                <p>
                  초기 잔액을 50,000원으로 설정합니다. 사용자에게 메뉴를 보여줍니다:
                  1) 잔액 조회, 2) 입금, 3) 출금.
                  입금 시 금액을 더하고, 출금 시 잔액 부족 여부를 확인한 후 처리합니다.
                  잘못된 메뉴 입력에 대한 오류 처리도 포함하세요.
                </p>
              </div>
            )}

            <div className="lesson-nav">
              <Link to="/python-learning/06" className="lesson-nav-btn prev">← 06: {lang === 'en' ? 'Flowcharts' : '순서도'}</Link>
              <Link to="/python-learning/08" className="lesson-nav-btn next">08: {lang === 'en' ? 'Loops' : '반복문'} →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
