import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson10() {
  const { t, lang } = useLanguage();
  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 10: Try-Except Exception Handling' : '10주차: Try-Except 예외처리'}</h1>
          <p>{lang === 'en' ? 'Types of errors, exception handling, and debugging techniques' : '오류의 종류와 예외처리, 디버깅 기법'}</p>
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
                    <li>Distinguish the 3 types of program errors (syntax errors, runtime errors, logic errors)</li>
                    <li>Identify the types and causes of major runtime exceptions in Python</li>
                    <li>Use <code>try-except</code> to handle exceptions and prevent abnormal program termination</li>
                    <li>Write complete exception handling structures using <code>else</code> and <code>finally</code></li>
                    <li>Develop safe programming habits and learn basic debugging techniques</li>
                  </ul>
                </div>

                {/* ========== 1. Understanding Program Errors ========== */}
                <h2>1. Understanding Program Errors</h2>

                <h3>1.1 Origin of the Term "Bug"</h3>
                <p>
                  In 1947, computer scientist <strong>Grace Hopper</strong> was investigating a malfunction
                  in Harvard University's Mark II computer when she discovered a <strong>moth</strong> stuck
                  in a relay contact. After this incident, program errors came to be called <strong>"bugs"</strong>,
                  and the process of finding and fixing errors became known as <strong>"debugging"</strong>.
                </p>

                <h3>1.2 Three Categories of Errors</h3>
                <p>Errors in programming are broadly classified into three categories.</p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>Category</th><th>Syntax Error</th><th>Runtime Error</th><th>Logic Error</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>When it occurs</strong></td><td>Code parsing stage</td><td>During execution</td><td>When checking results after execution</td></tr>
                    <tr><td><strong>Execution</strong></td><td>Does not run at all</td><td>Halts during execution</td><td>Runs normally (wrong result)</td></tr>
                    <tr><td><strong>Detection difficulty</strong></td><td>Easy (clear error message)</td><td>Moderate (error message exists)</td><td>Hard (no error message)</td></tr>
                    <tr><td><strong>Solution</strong></td><td>Fix syntax</td><td>Exception handling (try-except)</td><td>Testing, code review, debugging</td></tr>
                    <tr><td><strong>Example</strong></td><td>Missing parenthesis, missing colon</td><td>Division by zero, invalid type conversion</td><td>Printing only the sum instead of the average</td></tr>
                  </tbody>
                </table>

                {/* ========== 2. Syntax Errors ========== */}
                <h2>2. Syntax Errors in Detail</h2>
                <p>
                  <strong>Syntax errors</strong> are detected during the code parsing stage by the Python interpreter.
                  Since the code violates grammar rules, <strong>the program will not execute at all</strong>.
                  Fortunately, the error messages are clear, making them relatively easy to find and fix.
                </p>

                <h3>2.1 Common Syntax Errors</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Error Type</th><th>Incorrect Code</th><th>Correct Code</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Unclosed parenthesis</td><td><code>print("hello"</code></td><td><code>print("hello")</code></td></tr>
                    <tr><td>Missing colon (:)</td><td><code>if x &gt; 0</code></td><td><code>if x &gt; 0:</code></td></tr>
                    <tr><td>Indentation error</td><td><code>def f():\\nprint("hi")</code></td><td><code>def f():\\n    print("hi")</code></td></tr>
                    <tr><td>Invalid variable name</td><td><code>2name = "John"</code></td><td><code>name2 = "John"</code></td></tr>
                    <tr><td>Quote mismatch</td><td><code>print("hello')</code></td><td><code>print("hello")</code></td></tr>
                    <tr><td>Keyword typo</td><td><code>whille True:</code></td><td><code>while True:</code></td></tr>
                    <tr><td>Assignment operator error</td><td><code>if x = 5:</code></td><td><code>if x == 5:</code></td></tr>
                    <tr><td>Invalid string concatenation</td><td><code>print("Age: " + 20)</code></td><td><code>print("Age: " + str(20))</code></td></tr>
                  </tbody>
                </table>

                <h3>2.2 How to Read Error Messages</h3>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.learningObjectives')}</h3>
                  <ul>
                    <li>프로그램 오류의 3가지 유형(구문 오류, 런타임 오류, 논리 오류)을 구분한다</li>
                    <li>파이썬의 주요 런타임 예외(Exception)의 종류와 원인을 파악한다</li>
                    <li><code>try-except</code> 구문으로 예외를 처리하여 프로그램의 비정상 종료를 방지한다</li>
                    <li><code>else</code>와 <code>finally</code>를 활용한 완전한 예외처리 구조를 작성한다</li>
                    <li>안전한 프로그래밍 습관과 기본적인 디버깅 기법을 익힌다</li>
                  </ul>
                </div>

                {/* ========== 1. 프로그램 오류의 이해 ========== */}
                <h2>1. 프로그램 오류(Error)의 이해</h2>

                <h3>1.1 버그(Bug)의 유래</h3>
                <p>
                  1947년, 컴퓨터 과학자 <strong>그레이스 호퍼(Grace Hopper)</strong>가 하버드 대학의 Mark II 컴퓨터에서
                  오작동의 원인을 찾던 중 릴레이 접점에 끼어 있는 <strong>나방(moth)</strong>을 발견했습니다.
                  이 사건 이후로 프로그램의 오류를 <strong>"버그(bug)"</strong>,
                  오류를 찾아 수정하는 과정을 <strong>"디버깅(debugging)"</strong>이라 부르게 되었습니다.
                </p>

                <h3>1.2 오류의 3가지 분류</h3>
                <p>프로그래밍에서 발생하는 오류는 크게 세 가지로 분류됩니다.</p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>구분</th><th>구문 오류 (Syntax Error)</th><th>런타임 오류 (Runtime Error)</th><th>논리 오류 (Logic Error)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>발생 시점</strong></td><td>코드 분석(파싱) 단계</td><td>프로그램 실행 중</td><td>실행 완료 후 결과 확인 시</td></tr>
                    <tr><td><strong>실행 여부</strong></td><td>실행 자체가 안 됨</td><td>실행 중 중단됨</td><td>정상 실행됨 (결과만 틀림)</td></tr>
                    <tr><td><strong>발견 난이도</strong></td><td>쉬움 (에러 메시지 명확)</td><td>보통 (에러 메시지 있음)</td><td>어려움 (에러 메시지 없음)</td></tr>
                    <tr><td><strong>해결 방법</strong></td><td>문법 수정</td><td>예외처리 (try-except)</td><td>테스트, 코드 리뷰, 디버깅</td></tr>
                    <tr><td><strong>예시</strong></td><td>괄호 누락, 콜론 빠짐</td><td>0 나누기, 잘못된 형변환</td><td>평균 계산 시 합계만 출력</td></tr>
                  </tbody>
                </table>

                {/* ========== 2. 구문 오류 ========== */}
                <h2>2. 구문 오류 (Syntax Error) 상세</h2>
                <p>
                  <strong>구문 오류</strong>는 파이썬 인터프리터가 코드를 분석하는 단계에서 발견되는 오류입니다.
                  문법 규칙을 위반한 코드이므로 <strong>프로그램이 아예 실행되지 않습니다</strong>.
                  다행히 오류 메시지가 명확하여 비교적 쉽게 찾아 고칠 수 있습니다.
                </p>

                <h3>2.1 흔한 구문 오류 목록</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>오류 유형</th><th>잘못된 코드</th><th>올바른 코드</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>괄호 미닫기</td><td><code>print("hello"</code></td><td><code>print("hello")</code></td></tr>
                    <tr><td>콜론(:) 누락</td><td><code>if x &gt; 0</code></td><td><code>if x &gt; 0:</code></td></tr>
                    <tr><td>들여쓰기 오류</td><td><code>def f():\\nprint("hi")</code></td><td><code>def f():\\n    print("hi")</code></td></tr>
                    <tr><td>잘못된 변수명</td><td><code>2name = "홍길동"</code></td><td><code>name2 = "홍길동"</code></td></tr>
                    <tr><td>따옴표 불일치</td><td><code>print("hello')</code></td><td><code>print("hello")</code></td></tr>
                    <tr><td>키워드 오타</td><td><code>whille True:</code></td><td><code>while True:</code></td></tr>
                    <tr><td>대입 연산자 오류</td><td><code>if x = 5:</code></td><td><code>if x == 5:</code></td></tr>
                    <tr><td>잘못된 문자열 연결</td><td><code>print("나이: " + 20)</code></td><td><code>print("나이: " + str(20))</code></td></tr>
                  </tbody>
                </table>

                <h3>2.2 오류 메시지 읽는 법</h3>
              </>
            )}

            {/* SHARED: Error message reading code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Interpreting Error Messages' : '오류 메시지 해석'}</div>
              <pre><code>{`# 아래 코드를 실행하면:
# print("안녕하세요"

# 오류 메시지:
#   File "example.py", line 1     ← 파일명과 줄 번호
#     print("안녕하세요"           ← 문제가 있는 코드
#                       ^         ← 캐럿(^): 오류 위치
# SyntaxError: '(' was never closed  ← 오류 유형과 설명

# 해결: 닫는 괄호를 추가
print("안녕하세요")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 3. Runtime Errors (Exceptions) ========== */}
                <h2>3. Runtime Errors (Exceptions) in Detail</h2>

                <h3>3.1 What is an Exception?</h3>
                <p>
                  An <strong>exception</strong> is an <strong>error situation that occurs during execution</strong> even though the code is syntactically correct.
                  If an exception is not handled, the program will terminate abnormally.
                  In Python, you can use <code>try-except</code> to handle exceptions.
                </p>

                <h3>3.2 Major Exception Types</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Exception</th><th>Cause</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>ZeroDivisionError</code></td><td>Division by zero</td><td><code>10 / 0</code></td></tr>
                    <tr><td><code>ValueError</code></td><td>Invalid type conversion</td><td><code>int("abc")</code></td></tr>
                    <tr><td><code>TypeError</code></td><td>Invalid data type operation</td><td><code>"hello" + 5</code></td></tr>
                    <tr><td><code>NameError</code></td><td>Using an undefined variable</td><td><code>print(xyz)</code></td></tr>
                    <tr><td><code>IndexError</code></td><td>List index out of range</td><td><code>[1,2,3][5]</code></td></tr>
                    <tr><td><code>KeyError</code></td><td>Accessing a nonexistent dictionary key</td><td><code>{"{}"}.get vs direct access</code></td></tr>
                    <tr><td><code>FileNotFoundError</code></td><td>Opening a file that doesn't exist</td><td><code>open("nofile.txt")</code></td></tr>
                    <tr><td><code>AttributeError</code></td><td>Accessing a nonexistent attribute/method</td><td><code>"hello".push("!")</code></td></tr>
                    <tr><td><code>OverflowError</code></td><td>Numeric result too large</td><td><code>float(10 ** 400)</code></td></tr>
                    <tr><td><code>RecursionError</code></td><td>Maximum recursion depth exceeded</td><td>Infinite recursive function</td></tr>
                  </tbody>
                </table>

                <h3>3.3 Code Examples for Each Exception</h3>
              </>
            ) : (
              <>
                {/* ========== 3. 런타임 오류 (Exception) ========== */}
                <h2>3. 런타임 오류 (Exception) 상세</h2>

                <h3>3.1 예외(Exception)란?</h3>
                <p>
                  <strong>예외(Exception)</strong>란 문법적으로는 올바르지만 <strong>실행 중에 발생하는 오류 상황</strong>을 말합니다.
                  예외가 처리되지 않으면 프로그램이 비정상적으로 종료됩니다.
                  파이썬에서는 <code>try-except</code>를 사용하여 예외를 처리할 수 있습니다.
                </p>

                <h3>3.2 주요 예외 유형</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>예외</th><th>원인</th><th>발생 예시</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>ZeroDivisionError</code></td><td>0으로 나누기</td><td><code>10 / 0</code></td></tr>
                    <tr><td><code>ValueError</code></td><td>잘못된 값으로 형변환</td><td><code>int("abc")</code></td></tr>
                    <tr><td><code>TypeError</code></td><td>잘못된 자료형 연산</td><td><code>"hello" + 5</code></td></tr>
                    <tr><td><code>NameError</code></td><td>정의되지 않은 변수 사용</td><td><code>print(xyz)</code></td></tr>
                    <tr><td><code>IndexError</code></td><td>리스트 인덱스 범위 초과</td><td><code>[1,2,3][5]</code></td></tr>
                    <tr><td><code>KeyError</code></td><td>딕셔너리에 없는 키 접근</td><td><code>{"{}"}.get 대신 직접 접근</code></td></tr>
                    <tr><td><code>FileNotFoundError</code></td><td>존재하지 않는 파일 열기</td><td><code>open("없는파일.txt")</code></td></tr>
                    <tr><td><code>AttributeError</code></td><td>없는 속성/메서드 접근</td><td><code>"hello".push("!")</code></td></tr>
                    <tr><td><code>OverflowError</code></td><td>수치 연산 결과가 너무 큼</td><td><code>float(10 ** 400)</code></td></tr>
                    <tr><td><code>RecursionError</code></td><td>재귀 깊이 한계 초과</td><td>무한 재귀 함수</td></tr>
                  </tbody>
                </table>

                <h3>3.3 각 예외별 발생 코드 예시</h3>
              </>
            )}

            {/* SHARED: Exception examples code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Major Exception Examples' : '주요 예외 발생 예시'}</div>
              <pre><code>{`# 1. ZeroDivisionError: 0으로 나누기
# result = 10 / 0
# ZeroDivisionError: division by zero

# 2. ValueError: 잘못된 형변환
# num = int("hello")
# ValueError: invalid literal for int() with base 10: 'hello'

# 3. TypeError: 자료형 불일치 연산
# result = "나이: " + 20
# TypeError: can only concatenate str (not "int") to str

# 4. NameError: 정의되지 않은 변수
# print(undefined_variable)
# NameError: name 'undefined_variable' is not defined

# 5. IndexError: 인덱스 범위 초과
# numbers = [1, 2, 3]
# print(numbers[10])
# IndexError: list index out of range

# 6. KeyError: 존재하지 않는 딕셔너리 키
# student = {"name": "홍길동"}
# print(student["age"])
# KeyError: 'age'

# 7. FileNotFoundError: 파일을 찾을 수 없음
# f = open("없는파일.txt", "r")
# FileNotFoundError: [Errno 2] No such file or directory

# 8. AttributeError: 존재하지 않는 속성/메서드
# x = 10
# x.append(5)
# AttributeError: 'int' object has no attribute 'append'`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>3.4 Exception Hierarchy</h3>
                <p>
                  All exceptions in Python form a hierarchy.
                  <code>BaseException</code> sits at the top, and general exceptions inherit from <code>Exception</code>.
                </p>
              </>
            ) : (
              <>
                <h3>3.4 예외 계층 구조</h3>
                <p>
                  파이썬의 모든 예외는 계층 구조를 이루고 있습니다.
                  최상위에 <code>BaseException</code>이 있고, 일반적인 예외는 <code>Exception</code>을 상속합니다.
                </p>
              </>
            )}

            {/* SHARED: Exception hierarchy code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Exception Hierarchy (Key Parts)' : '예외 계층 구조 (주요 부분)'}</div>
              <pre><code>{`# BaseException
#  ├── KeyboardInterrupt    (Ctrl+C)
#  ├── SystemExit           (sys.exit())
#  └── Exception            (일반 예외의 부모)
#       ├── ValueError
#       ├── TypeError
#       ├── NameError
#       ├── IndexError
#       ├── KeyError
#       ├── ZeroDivisionError
#       ├── FileNotFoundError
#       ├── AttributeError
#       ├── OverflowError
#       └── RecursionError

# except Exception: 으로 대부분의 일반 예외를 잡을 수 있음
# 단, KeyboardInterrupt, SystemExit 등은 잡히지 않음`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 4. Logic Errors ========== */}
                <h2>4. Logic Errors</h2>
                <p>
                  A <strong>logic error</strong> occurs when a program runs normally but <strong>produces results different from what was expected</strong>.
                  Because no error message is generated, it is the <strong>most difficult type of error to find</strong>.
                </p>
              </>
            ) : (
              <>
                {/* ========== 4. 논리 오류 ========== */}
                <h2>4. 논리 오류 (Logic Error)</h2>
                <p>
                  <strong>논리 오류</strong>는 프로그램이 정상적으로 실행되지만 <strong>결과가 예상과 다른</strong> 경우입니다.
                  오류 메시지가 발생하지 않기 때문에 <strong>가장 찾기 어려운 오류</strong>입니다.
                </p>
              </>
            )}

            {/* SHARED: Logic error examples code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Logic Error Examples' : '논리 오류 예시'}</div>
              <pre><code>{`# 예시 1: 평균 계산 실수
scores = [80, 90, 85]

# 잘못된 코드: 괄호 없이 나누기
wrong_avg = sum(scores) / len(scores) + 1  # 의도: (합/개수)+1이 아님
# 실제 계산: (255/3) + 1 = 86.0 (덧셈이 의도치 않게 포함)

# 올바른 코드
correct_avg = sum(scores) / len(scores)  # 85.0

# 예시 2: 부등호 방향 오류
def is_adult(age):
    return age < 18   # 잘못됨! 18 미만이면 True (미성년자)
    # return age >= 18  # 올바른 코드

# 예시 3: off-by-one 오류 (경계값 실수)
# 1부터 10까지 합을 구하려는데
total = 0
for i in range(1, 10):   # range(1, 10)은 1~9! 10이 빠짐
    total += i
print(total)  # 45 (올바른 결과는 55)

# 올바른 코드
total = 0
for i in range(1, 11):   # range(1, 11)은 1~10
    total += i
print(total)  # 55`}</code></pre>
            </div>

            {lang === 'en' ? (
              <p>
                How to fix logic errors: Write <strong>test cases</strong>, use <strong>print debugging</strong> to check intermediate values,
                and perform <strong>code reviews</strong> for verification.
              </p>
            ) : (
              <p>
                논리 오류의 해결법: <strong>테스트 케이스</strong> 작성, <strong>print 디버깅</strong>으로 중간값 확인,
                <strong>코드 리뷰</strong>를 통한 검증이 필요합니다.
              </p>
            )}

            {lang === 'en' ? (
              <>
                {/* ========== 5. try-except Basic Structure ========== */}
                <h2>5. try-except Basic Structure</h2>

                <h3>5.1 Syntax</h3>
              </>
            ) : (
              <>
                {/* ========== 5. try-except 기본 구조 ========== */}
                <h2>5. try-except 기본 구조</h2>

                <h3>5.1 문법</h3>
              </>
            )}

            {/* SHARED: try-except basic syntax */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'try-except Basic Syntax' : 'try-except 기본 문법'}</div>
              <pre><code>{`try:
    # 오류가 발생할 수 있는 코드
    위험한_코드
except:
    # 오류가 발생했을 때 실행할 코드
    오류_처리_코드`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>5.2 How It Works</h3>
                <p>
                  <strong>1)</strong> The code in the <code>try</code> block is executed.<br/>
                  <strong>2)</strong> If there is <strong>no error</strong> &rarr; the <code>except</code> block is skipped and execution continues.<br/>
                  <strong>3)</strong> If an error <strong>occurs</strong> &rarr; the rest of the <code>try</code> block is skipped and the <code>except</code> block is executed.<br/>
                  <strong>4)</strong> In either case, code after the <code>except</code> block runs normally.
                </p>
              </>
            ) : (
              <>
                <h3>5.2 동작 원리</h3>
                <p>
                  <strong>1)</strong> <code>try</code> 블록의 코드를 실행합니다.<br/>
                  <strong>2)</strong> 오류가 <strong>없으면</strong> &rarr; <code>except</code> 블록을 건너뛰고 계속 진행합니다.<br/>
                  <strong>3)</strong> 오류가 <strong>발생하면</strong> &rarr; <code>try</code> 블록의 나머지 코드를 건너뛰고 <code>except</code> 블록을 실행합니다.<br/>
                  <strong>4)</strong> 어느 경우든 <code>except</code> 블록 이후의 코드는 정상적으로 실행됩니다.
                </p>
              </>
            )}

            {/* SHARED: try-except basic examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'try-except Basic Examples' : 'try-except 기본 예제'}</div>
              <pre><code>{`# 예제 1: 숫자 입력받기
try:
    num = int(input("숫자를 입력하세요: "))
    print(f"입력한 숫자: {num}")
except:
    print("숫자가 아닌 값을 입력했습니다.")

print("프로그램을 계속 진행합니다.")

# 예제 2: 나눗셈
try:
    a = 10
    b = 0
    result = a / b
    print(f"결과: {result}")
except:
    print("오류가 발생했습니다!")

print("프로그램이 정상 종료됩니다.")

# 예제 3: 리스트 인덱스 접근
try:
    numbers = [10, 20, 30]
    index = int(input("인덱스를 입력하세요 (0~2): "))
    print(f"numbers[{index}] = {numbers[index]}")
except:
    print("잘못된 접근입니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 6. Handling Specific Exceptions ========== */}
                <h2>6. Handling Specific Exceptions</h2>

                <h3>6.1 except ExceptionType</h3>
                <p>By handling only specific exception types, you can distinguish which error occurred and respond appropriately.</p>
              </>
            ) : (
              <>
                {/* ========== 6. 특정 예외 처리 ========== */}
                <h2>6. 특정 예외 처리</h2>

                <h3>6.1 except ExceptionType</h3>
                <p>특정 예외 유형만 처리하면 어떤 오류가 발생했는지 구분하여 적절한 대응이 가능합니다.</p>
              </>
            )}

            {/* SHARED: Specific exception handling code */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Handling Specific Exceptions' : '특정 예외 처리'}</div>
              <pre><code>{`try:
    a = int(input("분자: "))
    b = int(input("분모: "))
    result = a / b
    print(f"결과: {result:.2f}")
except ValueError:
    print("오류: 숫자를 입력해주세요.")
except ZeroDivisionError:
    print("오류: 0으로 나눌 수 없습니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>6.2 Grouping Multiple Exceptions</h3>
            ) : (
              <h3>6.2 여러 예외를 하나로 묶기</h3>
            )}

            {/* SHARED: Multiple exceptions in one except */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Multiple Exceptions in One except' : '여러 예외를 하나의 except로'}</div>
              <pre><code>{`try:
    num = int(input("숫자: "))
    result = 100 / num
    print(f"결과: {result}")
except (ValueError, ZeroDivisionError):
    print("올바른 숫자(0 제외)를 입력해주세요.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>6.3 Using Error Messages (as e)</h3>
                <p>Using the <code>except ExceptionType as e</code> form, you can store the error object in a variable and use its detailed message.</p>
              </>
            ) : (
              <>
                <h3>6.3 오류 메시지 활용 (as e)</h3>
                <p><code>except ExceptionType as e</code> 형태로 오류 객체를 변수에 받아 상세 메시지를 활용할 수 있습니다.</p>
              </>
            )}

            {/* SHARED: as e error message code */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Using Error Messages with as e' : 'as e로 오류 메시지 활용'}</div>
              <pre><code>{`try:
    num = int(input("숫자를 입력하세요: "))
    result = 100 / num
    print(f"100 / {num} = {result:.2f}")
except ValueError as e:
    print(f"ValueError 발생: {e}")
    # 예: ValueError 발생: invalid literal for int() with base 10: 'abc'
except ZeroDivisionError as e:
    print(f"ZeroDivisionError 발생: {e}")
    # 예: ZeroDivisionError 발생: division by zero
except Exception as e:
    print(f"예상치 못한 오류: {type(e).__name__}: {e}")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 7. else and finally ========== */}
                <h2>7. else and finally</h2>

                <h3>7.1 The else Block</h3>
                <p>
                  The <code>else</code> block executes when the <code>try</code> block completes <strong>without any errors</strong>.
                  It separates code that might raise an error from the follow-up processing when no error occurs.
                </p>

                <h3>7.2 The finally Block</h3>
                <p>
                  The <code>finally</code> block <strong>always executes regardless</strong> of whether an error occurred.
                  It is mainly used for <strong>resource cleanup</strong> such as closing files or disconnecting network connections.
                </p>

                <h3>7.3 Complete Structure: try-except-else-finally</h3>
              </>
            ) : (
              <>
                {/* ========== 7. else와 finally ========== */}
                <h2>7. else와 finally</h2>

                <h3>7.1 else 블록</h3>
                <p>
                  <code>else</code> 블록은 <code>try</code> 블록이 <strong>오류 없이 완료</strong>되었을 때 실행됩니다.
                  오류가 발생할 수 있는 코드와 오류 없을 때의 후속 처리를 분리할 수 있습니다.
                </p>

                <h3>7.2 finally 블록</h3>
                <p>
                  <code>finally</code> 블록은 오류 발생 여부에 <strong>관계없이 항상</strong> 실행됩니다.
                  파일 닫기, 네트워크 연결 해제 등 <strong>자원 정리(cleanup)</strong>에 주로 사용합니다.
                </p>

                <h3>7.3 완전한 구조: try-except-else-finally</h3>
              </>
            )}

            {/* SHARED: try-except-else-finally structure */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'try-except-else-finally Structure' : 'try-except-else-finally 구조'}</div>
              <pre><code>{`try:
    # 오류가 발생할 수 있는 코드
    위험한_코드
except ExceptionType:
    # 오류 발생 시 실행
    오류_처리
else:
    # 오류 없이 성공 시 실행
    성공_후속_처리
finally:
    # 오류 여부 관계없이 항상 실행
    자원_정리`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>7.4 Execution Order (4 Scenarios)</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Scenario</th><th>try</th><th>except</th><th>else</th><th>finally</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>No error</td><td>Executed</td><td>Skipped</td><td>Executed</td><td>Executed</td></tr>
                    <tr><td>Error (handled)</td><td>Halted</td><td>Executed</td><td>Skipped</td><td>Executed</td></tr>
                    <tr><td>Error (unhandled)</td><td>Halted</td><td>Skipped</td><td>Skipped</td><td>Executed, then error propagates</td></tr>
                    <tr><td>return in try</td><td>Executed</td><td>If applicable</td><td>If applicable</td><td>Executed (before return)</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h3>7.4 실행 순서 (4가지 시나리오)</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>시나리오</th><th>try</th><th>except</th><th>else</th><th>finally</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>오류 없음</td><td>실행</td><td>건너뜀</td><td>실행</td><td>실행</td></tr>
                    <tr><td>오류 발생 (처리됨)</td><td>중단</td><td>실행</td><td>건너뜀</td><td>실행</td></tr>
                    <tr><td>오류 발생 (미처리)</td><td>중단</td><td>건너뜀</td><td>건너뜀</td><td>실행 후 오류 전파</td></tr>
                    <tr><td>try에서 return</td><td>실행</td><td>해당 시</td><td>해당 시</td><td>실행 (return 전)</td></tr>
                  </tbody>
                </table>
              </>
            )}

            {/* SHARED: try-except-else-finally practical example */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'try-except-else-finally Practical Example' : 'try-except-else-finally 실전 예제'}</div>
              <pre><code>{`# 시나리오 1: 오류 없는 경우
print("=== 시나리오 1: 정상 입력 ===")
try:
    num = int("42")  # 정상 변환
    result = 100 / num
except ValueError:
    print("ValueError 발생!")
except ZeroDivisionError:
    print("ZeroDivisionError 발생!")
else:
    print(f"계산 성공: {result:.2f}")  # 이 줄 실행됨
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 계산 성공: 2.38
# 작업 완료 (항상 실행)

print()

# 시나리오 2: ValueError 발생
print("=== 시나리오 2: ValueError ===")
try:
    num = int("abc")  # ValueError 발생!
    result = 100 / num
except ValueError:
    print("숫자를 입력해주세요.")  # 이 줄 실행됨
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
else:
    print(f"계산 성공: {result:.2f}")
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 숫자를 입력해주세요.
# 작업 완료 (항상 실행)

print()

# 시나리오 3: ZeroDivisionError 발생
print("=== 시나리오 3: ZeroDivisionError ===")
try:
    num = int("0")   # 변환 성공
    result = 100 / num  # ZeroDivisionError 발생!
except ValueError:
    print("숫자를 입력해주세요.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")  # 이 줄 실행됨
else:
    print(f"계산 성공: {result:.2f}")
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 0으로 나눌 수 없습니다.
# 작업 완료 (항상 실행)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 8. Exception Handling Patterns ========== */}
                <h2>8. Exception Handling Patterns</h2>

                <h3>Pattern 1: Safe Integer Input</h3>
                <p>
                  A pattern that repeats until the user enters a valid integer.
                  It combines <code>while True</code> with <code>try-except</code>.
                </p>
              </>
            ) : (
              <>
                {/* ========== 8. 예외 처리 활용 패턴 ========== */}
                <h2>8. 예외 처리 활용 패턴</h2>

                <h3>패턴 1: 안전한 정수 입력 받기</h3>
                <p>
                  사용자에게 올바른 정수를 입력받을 때까지 반복하는 패턴입니다.
                  <code>while True</code>와 <code>try-except</code>를 조합합니다.
                </p>
              </>
            )}

            {/* SHARED: Safe integer input function */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Safe Integer Input Function' : '안전한 정수 입력 함수'}</div>
              <pre><code>{`def safe_int_input(prompt):
    """올바른 정수가 입력될 때까지 반복하여 받음"""
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("  오류: 올바른 정수를 입력해주세요.")

# 사용
age = safe_int_input("나이를 입력하세요: ")
print(f"입력한 나이: {age}")

# 범위 제한까지 포함한 버전
def safe_int_range(prompt, low, high):
    """low 이상 high 이하의 정수를 받음"""
    while True:
        try:
            value = int(input(prompt))
            if low <= value <= high:
                return value
            else:
                print(f"  오류: {low}~{high} 사이의 값을 입력해주세요.")
        except ValueError:
            print("  오류: 올바른 정수를 입력해주세요.")

# 사용
score = safe_int_range("점수 (0~100): ", 0, 100)
print(f"입력한 점수: {score}")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>Pattern 2: Safe Division Function</h3>
            ) : (
              <h3>패턴 2: 안전한 나눗셈 함수</h3>
            )}

            {/* SHARED: Safe division */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Safe Division' : '안전한 나눗셈'}</div>
              <pre><code>{`def safe_divide(a, b):
    """안전한 나눗셈: 오류 시 None 반환"""
    try:
        return a / b
    except ZeroDivisionError:
        print("  경고: 0으로 나눌 수 없습니다.")
        return None
    except TypeError:
        print("  경고: 숫자만 나눌 수 있습니다.")
        return None

# 테스트
print(safe_divide(10, 3))     # 3.333...
print(safe_divide(10, 0))     # 경고 메시지 + None
print(safe_divide("a", 3))   # 경고 메시지 + None`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>Pattern 3: Input Validation for Menu-Based Programs</h3>
            ) : (
              <h3>패턴 3: 메뉴 기반 프로그램의 입력 검증</h3>
            )}

            {/* SHARED: Menu choice input validation */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Menu Choice Input Validation' : '메뉴 선택 입력 검증'}</div>
              <pre><code>{`def get_menu_choice():
    """1~4 사이의 메뉴 번호를 안전하게 입력받음"""
    print("\\n===== 메뉴 =====")
    print("1. 더하기")
    print("2. 빼기")
    print("3. 곱하기")
    print("4. 나누기")
    print("0. 종료")
    print("================")

    while True:
        try:
            choice = int(input("메뉴를 선택하세요: "))
            if 0 <= choice <= 4:
                return choice
            else:
                print("  0~4 사이의 번호를 입력해주세요.")
        except ValueError:
            print("  숫자를 입력해주세요.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>Pattern 4: File Existence Check</h3>
            ) : (
              <h3>패턴 4: 파일 존재 여부 확인</h3>
            )}

            {/* SHARED: File open exception handling */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'File Open Exception Handling' : '파일 열기 예외처리'}</div>
              <pre><code>{`def read_file(filename):
    """파일 내용을 안전하게 읽어서 반환"""
    try:
        f = open(filename, "r", encoding="utf-8")
        content = f.read()
        f.close()
        return content
    except FileNotFoundError:
        print(f"  오류: '{filename}' 파일을 찾을 수 없습니다.")
        return None
    except PermissionError:
        print(f"  오류: '{filename}' 파일에 접근 권한이 없습니다.")
        return None

# 사용
content = read_file("data.txt")
if content is not None:
    print(f"파일 내용:\\n{content}")
else:
    print("파일을 읽지 못했습니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 9. Raising Exceptions with raise ========== */}
                <h2>9. Raising Exceptions with raise</h2>
                <p>
                  Using the <code>raise</code> keyword, a programmer can <strong>manually raise an exception</strong>.
                  This is useful for explicitly raising errors when invalid values are passed during input validation.
                </p>
              </>
            ) : (
              <>
                {/* ========== 9. raise로 예외 발생시키기 ========== */}
                <h2>9. raise로 예외 발생시키기</h2>
                <p>
                  <code>raise</code> 키워드를 사용하면 프로그래머가 <strong>직접 예외를 발생</strong>시킬 수 있습니다.
                  입력값 검증 등에서 잘못된 값이 들어왔을 때 명시적으로 오류를 일으킬 수 있습니다.
                </p>
              </>
            )}

            {/* SHARED: raise usage examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'raise Usage Examples' : 'raise 사용 예시'}</div>
              <pre><code>{`def set_age(age):
    """나이를 설정 (0~150 사이만 허용)"""
    if not isinstance(age, int):
        raise TypeError("나이는 정수여야 합니다.")
    if age < 0 or age > 150:
        raise ValueError(f"나이는 0~150 사이여야 합니다. (입력값: {age})")
    print(f"나이가 {age}으로 설정되었습니다.")

# 정상 호출
set_age(20)  # 나이가 20으로 설정되었습니다.

# 예외 발생
try:
    set_age(-5)
except ValueError as e:
    print(f"오류: {e}")
# 오류: 나이는 0~150 사이여야 합니다. (입력값: -5)

try:
    set_age("스물")
except TypeError as e:
    print(f"오류: {e}")
# 오류: 나이는 정수여야 합니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 10. Debugging Techniques ========== */}
                <h2>10. Debugging Techniques</h2>

                <h3>10.1 Print Debugging</h3>
                <p>The simplest debugging method: insert <code>print()</code> statements in the middle of code to track variable values and execution flow.</p>
              </>
            ) : (
              <>
                {/* ========== 10. 디버깅 기법 ========== */}
                <h2>10. 디버깅 기법</h2>

                <h3>10.1 print 디버깅</h3>
                <p>가장 간단한 디버깅 방법으로, 코드 중간에 <code>print()</code>를 삽입하여 변수의 값이나 실행 흐름을 추적합니다.</p>
              </>
            )}

            {/* SHARED: Print debugging example */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Print Debugging Example' : 'print 디버깅 예시'}</div>
              <pre><code>{`def calculate_average(scores):
    """점수 리스트의 평균을 계산"""
    print(f"[DEBUG] 입력된 scores: {scores}")  # 디버깅용
    total = 0
    for i, score in enumerate(scores):
        total += score
        print(f"[DEBUG] i={i}, score={score}, total={total}")  # 디버깅용
    average = total / len(scores)
    print(f"[DEBUG] 최종 average: {average}")  # 디버깅용
    return average

result = calculate_average([80, 90, 85])
print(f"평균: {result}")
# 디버깅이 완료되면 [DEBUG] print문을 제거합니다.`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>10.2 Binary Search Debugging</h3>
                <p>
                  When code is long, instead of checking line by line, you check the state at the <strong>midpoint of the code</strong>
                  and <strong>halve the error range</strong> progressively.
                </p>

                <h3>10.3 Rubber Duck Debugging</h3>
                <p>
                  A method where you <strong>explain the code line by line to someone (or a rubber duck)</strong> to find
                  logical errors. Explaining code verbally often helps you discover mistakes on your own.
                </p>

                <h3>10.4 VS Code Debugger</h3>
                <p>
                  Using VS Code's debugger, you can set <strong>breakpoints</strong>, execute code line by line,
                  and inspect variable values in real time. Access it from the "Run and Debug" menu in the left sidebar.
                </p>
              </>
            ) : (
              <>
                <h3>10.2 이진 탐색 디버깅</h3>
                <p>
                  코드가 길 때 전체를 한 줄씩 확인하는 대신, <strong>코드의 중간 지점</strong>에서 상태를 확인하고
                  오류 범위를 <strong>절반씩 줄여가는</strong> 방법입니다.
                </p>

                <h3>10.3 고무 오리 디버깅 (Rubber Duck Debugging)</h3>
                <p>
                  코드의 동작을 <strong>누군가(또는 고무 오리)에게 한 줄씩 설명</strong>하면서
                  논리적 오류를 찾는 방법입니다.
                  코드를 말로 설명하는 과정에서 잘못된 부분을 스스로 발견하게 되는 경우가 많습니다.
                </p>

                <h3>10.4 VS Code 디버거</h3>
                <p>
                  VS Code의 디버거를 사용하면 <strong>중단점(Breakpoint)</strong>을 설정하고 한 줄씩 실행하며
                  변수 값을 실시간으로 확인할 수 있습니다. 좌측 사이드바의 "실행 및 디버그" 메뉴에서 사용합니다.
                </p>
              </>
            )}

            {lang === 'en' ? (
              <>
                {/* ========== 11. Comprehensive Practice Examples ========== */}
                <h2>11. Comprehensive Practice Examples</h2>

                <h3>Example 1: Safe Calculator</h3>
              </>
            ) : (
              <>
                {/* ========== 11. 종합 실습 예제 ========== */}
                <h2>11. 종합 실습 예제</h2>

                <h3>예제 1: 안전한 계산기</h3>
              </>
            )}

            {/* SHARED: Calculator with exception handling */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Calculator with Exception Handling' : '예외처리가 포함된 사칙연산 계산기'}</div>
              <pre><code>{`def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("0으로 나눌 수 없습니다.")
    return a / b

def calculator():
    """예외처리가 포함된 계산기 프로그램"""
    operations = {1: ("덧셈", add), 2: ("뺄셈", subtract),
                  3: ("곱셈", multiply), 4: ("나눗셈", divide)}

    while True:
        print("\\n===== 계산기 =====")
        print("1. 덧셈  2. 뺄셈")
        print("3. 곱셈  4. 나눗셈")
        print("0. 종료")
        print("==================")

        try:
            choice = int(input("메뉴 선택: "))
        except ValueError:
            print("숫자를 입력해주세요.")
            continue

        if choice == 0:
            print("계산기를 종료합니다.")
            break

        if choice not in operations:
            print("1~4 사이의 번호를 선택해주세요.")
            continue

        try:
            a = float(input("첫 번째 수: "))
            b = float(input("두 번째 수: "))
            name, func = operations[choice]
            result = func(a, b)
            print(f"결과: {a} {name} {b} = {result}")
        except ValueError:
            print("올바른 숫자를 입력해주세요.")
        except ZeroDivisionError as e:
            print(f"오류: {e}")

calculator()`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>Example 2: Safe Grade Input Program</h3>
            ) : (
              <h3>예제 2: 안전한 성적 입력 프로그램</h3>
            )}

            {/* SHARED: Grade input program */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Grade Program with Range and Type Validation' : '범위 검증 + 형변환 검증이 포함된 성적 프로그램'}</div>
              <pre><code>{`def get_score(subject):
    """과목 점수를 안전하게 입력받음 (0~100)"""
    while True:
        try:
            score = int(input(f"  {subject} 점수 (0~100): "))
            if 0 <= score <= 100:
                return score
            else:
                print("    → 0~100 사이의 값을 입력해주세요.")
        except ValueError:
            print("    → 숫자를 입력해주세요.")

def get_grade(avg):
    """평균 점수에 따른 등급 반환"""
    if avg >= 90: return "A"
    elif avg >= 80: return "B"
    elif avg >= 70: return "C"
    elif avg >= 60: return "D"
    else: return "F"

# 메인 프로그램
subjects = ["국어", "영어", "수학"]
print("=== 성적 입력 프로그램 ===")

try:
    name = input("학생 이름: ")
    scores = []
    for subj in subjects:
        score = get_score(subj)
        scores.append(score)

    total = sum(scores)
    average = total / len(scores)
    grade = get_grade(average)

    print(f"\\n=== {name}의 성적표 ===")
    for i, subj in enumerate(subjects):
        print(f"  {subj}: {scores[i]}점")
    print(f"  합계: {total}점")
    print(f"  평균: {average:.1f}점")
    print(f"  등급: {grade}")
except KeyboardInterrupt:
    print("\\n입력이 취소되었습니다.")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>Example 3: Number Guessing Game (with Exception Handling)</h3>
            ) : (
              <h3>예제 3: 숫자 맞추기 게임 (예외처리 포함)</h3>
            )}

            {/* SHARED: Number guessing game */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Number Guessing Game' : '숫자 맞추기 게임'}</div>
              <pre><code>{`import random

def number_guessing_game():
    """1~100 사이 랜덤 숫자 맞추기 게임"""
    secret = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    print("=== 숫자 맞추기 게임 ===")
    print(f"1~100 사이의 숫자를 맞춰보세요! (최대 {max_attempts}회)")

    while attempts < max_attempts:
        try:
            guess = int(input(f"\\n[{attempts + 1}/{max_attempts}] 숫자 입력: "))

            if guess < 1 or guess > 100:
                print("  1~100 사이의 숫자를 입력해주세요.")
                continue

            attempts += 1

            if guess == secret:
                print(f"  정답입니다! {attempts}번 만에 맞추셨습니다!")
                return
            elif guess < secret:
                print("  더 큰 수입니다. ↑")
            else:
                print("  더 작은 수입니다. ↓")

        except ValueError:
            print("  숫자를 입력해주세요.")

    print(f"\\n아쉽습니다! 정답은 {secret}이었습니다.")

number_guessing_game()`}</code></pre>
            </div>

            {/* ========== Key Summary ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li>Errors are classified into 3 types: <strong>syntax errors</strong> (won't run), <strong>runtime errors</strong> (halts during execution), and <strong>logic errors</strong> (wrong results)</li>
                  <li>Runtime errors (exceptions) are handled with <code>try-except</code> to prevent abnormal program termination</li>
                  <li>Use <code>except ExceptionType</code> to handle specific exceptions, and <code>as e</code> to capture the error message</li>
                  <li><code>else</code> executes when there is no error; <code>finally</code> always executes</li>
                  <li>Use <code>raise</code> to manually raise exceptions for input validation</li>
                  <li>The <code>while True</code> + <code>try-except</code> combination is a core pattern for safe input</li>
                  <li>Use various debugging techniques: print debugging, binary search debugging, rubber duck debugging, etc.</li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li>오류는 <strong>구문 오류</strong>(실행 불가), <strong>런타임 오류</strong>(실행 중 중단), <strong>논리 오류</strong>(결과 틀림) 3가지로 분류된다</li>
                  <li>런타임 오류(예외)는 <code>try-except</code>로 처리하여 프로그램의 비정상 종료를 방지한다</li>
                  <li><code>except ExceptionType</code>으로 특정 예외만 처리하고, <code>as e</code>로 오류 메시지를 받을 수 있다</li>
                  <li><code>else</code>는 오류 없을 때, <code>finally</code>는 항상 실행된다</li>
                  <li><code>raise</code>로 직접 예외를 발생시켜 입력값을 검증할 수 있다</li>
                  <li><code>while True</code> + <code>try-except</code> 조합은 안전한 입력을 받는 핵심 패턴이다</li>
                  <li>print 디버깅, 이진 탐색 디버깅, 고무 오리 디버깅 등 다양한 디버깅 기법을 활용하자</li>
                </ul>
              </div>
            )}

            {/* ========== Common Mistakes ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li><strong>Overusing bare except:</strong> Catching all exceptions with <code>except:</code> can also catch <code>KeyboardInterrupt</code> and <code>SystemExit</code>, preventing program termination. Use <code>except Exception:</code> or specify particular exceptions instead</li>
                  <li><strong>Using only pass in except:</strong> Silently ignoring errors makes it hard to find the root cause. At minimum, log the error</li>
                  <li><strong>Too-broad try blocks:</strong> If there's too much code inside try, it's hard to identify which line caused the error. Only put error-prone code in try</li>
                  <li><strong>Not reading error messages:</strong> Python's error messages are very informative. Carefully read the exception type, line number, and description</li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li><strong>bare except 남용:</strong> <code>except:</code>로 모든 예외를 잡으면 <code>KeyboardInterrupt</code>나 <code>SystemExit</code>까지 잡혀 프로그램 종료가 안 될 수 있다. <code>except Exception:</code>을 사용하거나 특정 예외를 명시하자</li>
                  <li><strong>except에서 pass만 쓰기:</strong> 오류를 무시하면 문제의 원인을 찾기 어렵다. 최소한 오류 로그를 남기자</li>
                  <li><strong>너무 넓은 try 블록:</strong> try 안에 코드가 너무 많으면 어느 줄에서 오류가 발생했는지 파악하기 어렵다. 오류 가능한 코드만 try에 넣자</li>
                  <li><strong>오류 메시지를 읽지 않기:</strong> 파이썬의 오류 메시지는 매우 유용하다. 예외 유형, 발생 줄 번호, 설명을 꼼꼼히 읽자</li>
                </ul>
              </div>
            )}

            {/* ========== Exercises ========== */}
            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p>
                  <strong>Exercise 1: Score Input Program</strong><br/>
                  Write a program that takes a score (0-100) from the user and prints the grade.<br/>
                  - Display "Please enter a number" for non-numeric input<br/>
                  - Display "Please enter a value between 0 and 100" for out-of-range input<br/>
                  - Repeat until valid input is provided<br/><br/>
                  <strong>Exercise 2: Division of Two Numbers</strong><br/>
                  Write a program that takes two numbers and outputs the division result.<br/>
                  - Handle non-numeric input exceptions<br/>
                  - Handle division by zero exceptions<br/>
                  - Add a "Would you like to calculate again? (y/n)" feature
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p>
                  <strong>과제 1: 점수 입력 프로그램</strong><br/>
                  사용자로부터 점수(0~100)를 입력받아 등급을 출력하는 프로그램을 작성하세요.<br/>
                  - 숫자가 아닌 입력 시 "숫자를 입력해주세요" 메시지 출력<br/>
                  - 범위(0~100)를 벗어나면 "0~100 사이의 값을 입력해주세요" 메시지 출력<br/>
                  - 올바른 입력이 될 때까지 반복<br/><br/>
                  <strong>과제 2: 두 수의 나눗셈</strong><br/>
                  두 수를 입력받아 나눗셈 결과를 출력하는 프로그램을 작성하세요.<br/>
                  - 숫자가 아닌 입력 시 예외처리<br/>
                  - 0으로 나누기 예외처리<br/>
                  - "다시 계산하시겠습니까? (y/n)" 기능 추가
                </p>
              </div>
            )}

            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p>
                  <strong>Problem 1: Simple Banking System</strong><br/>
                  Write a simple banking program with balance check, deposit, and withdrawal features.<br/>
                  - Apply exception handling to all user inputs (number validation, range validation)<br/>
                  - Validate insufficient balance on withdrawal<br/>
                  - Prevent negative amount deposits/withdrawals<br/>
                  - Menu: 1. Check Balance, 2. Deposit, 3. Withdraw, 0. Exit
                </p>
                <p>
                  <strong>Problem 2: File Reading Simulation</strong><br/>
                  Write a program that takes a filename from the user and displays the file contents.<br/>
                  - Handle FileNotFoundError (when file doesn't exist)<br/>
                  - Handle PermissionError (when access is denied)<br/>
                  - Always display "File operation completed" using finally
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p>
                  <strong>문제 1: 간이 은행 시스템</strong><br/>
                  잔액 확인, 입금, 출금 기능을 가진 간이 은행 프로그램을 작성하세요.<br/>
                  - 모든 사용자 입력에 예외처리 적용 (숫자 검증, 범위 검증)<br/>
                  - 출금 시 잔액 부족 검증<br/>
                  - 음수 금액 입금/출금 방지<br/>
                  - 메뉴: 1.잔액확인, 2.입금, 3.출금, 0.종료
                </p>
                <p>
                  <strong>문제 2: 파일 읽기 시뮬레이션</strong><br/>
                  사용자에게 파일명을 입력받아 파일 내용을 출력하는 프로그램을 작성하세요.<br/>
                  - FileNotFoundError 처리 (파일이 없을 때)<br/>
                  - PermissionError 처리 (권한이 없을 때)<br/>
                  - finally로 "파일 작업 완료" 메시지 항상 출력
                </p>
              </div>
            )}

            <div className="lesson-nav">
              <Link to="/python-learning/09" className="lesson-nav-btn prev">← 09: {lang === 'en' ? 'Functions' : '함수'}</Link>
              <Link to="/python-learning/11" className="lesson-nav-btn next">11: {lang === 'en' ? 'Lists' : '리스트'} →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
