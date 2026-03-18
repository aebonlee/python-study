import { Link } from 'react-router-dom';

const PythonLesson09 = () => (
  <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
    <section className="page-header">
      <div className="container">
        <h1>9주차: 함수와 매개변수</h1>
        <p>함수 정의, 호출, 매개변수, 반환값과 변수 스코프</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>함수의 개념과 필요성을 이해한다</li>
              <li><code>def</code> 키워드로 사용자 정의 함수를 정의할 수 있다</li>
              <li>매개변수와 인자의 종류(위치, 기본값, 키워드, *args, **kwargs)를 구분하고 활용한다</li>
              <li><code>return</code>문을 사용하여 함수의 반환값을 처리한다</li>
              <li>변수 스코프(지역 변수, 전역 변수)를 이해하고 올바르게 사용한다</li>
            </ul>
          </div>

          {/* ========== 1. 함수란? ========== */}
          <h2>1. 함수(Function)란?</h2>

          <h3>1.1 수학에서의 함수</h3>
          <p>
            수학에서 함수(function)는 입력값(x)을 받아 일정한 규칙에 따라 출력값(y)을 내놓는 관계입니다.
            예를 들어 f(x) = x&sup2; + 1 이라는 함수가 있을 때, f(3) = 10 이 됩니다.
            <strong>입력 &rarr; 처리(규칙) &rarr; 출력</strong>이라는 기본 구조는 프로그래밍에서도 동일합니다.
          </p>

          <h3>1.2 프로그래밍에서의 함수</h3>
          <p>
            프로그래밍에서의 함수란 <strong>특정 작업을 수행하는 독립적인 코드 블록</strong>입니다.
            한 번 정의해두면 필요할 때마다 이름으로 호출하여 재사용할 수 있습니다.
            함수는 입력(매개변수)을 받아 처리한 뒤 결과(반환값)를 돌려줄 수 있고,
            입력이나 출력이 없는 함수도 존재합니다.
          </p>

          <h3>1.3 함수의 필요성</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>이유</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>코드 재사용</strong></td><td>같은 코드를 여러 번 작성할 필요 없이 호출만 하면 됨</td></tr>
              <tr><td><strong>모듈화</strong></td><td>복잡한 프로그램을 작은 단위로 나누어 관리할 수 있음</td></tr>
              <tr><td><strong>가독성 향상</strong></td><td>함수 이름만 보고도 어떤 작업을 하는지 파악 가능</td></tr>
              <tr><td><strong>유지보수 용이</strong></td><td>수정이 필요하면 함수 하나만 고치면 모든 호출부에 반영됨</td></tr>
              <tr><td><strong>협업 편의</strong></td><td>팀원 간 역할을 함수 단위로 분담할 수 있음</td></tr>
            </tbody>
          </table>

          <h3>1.4 DRY 원칙 (Don't Repeat Yourself)</h3>
          <p>
            소프트웨어 공학에서 <strong>DRY 원칙</strong>은 "같은 코드를 반복하지 말라"는 설계 원칙입니다.
            코드 중복은 버그 발생 확률을 높이고 유지보수를 어렵게 만듭니다.
            함수는 DRY 원칙을 실현하는 가장 기본적인 도구입니다.
          </p>

          <h3>1.5 함수 없이 vs 함수 사용 비교</h3>
          <div className="code-block">
            <div className="code-header">함수 없이: 같은 코드를 반복 작성</div>
            <pre><code>{`# 세 명의 학생에게 인사하기 - 함수 없이
print("=" * 30)
print("안녕하세요, 홍길동님!")
print("오늘도 좋은 하루 되세요!")
print("=" * 30)

print("=" * 30)
print("안녕하세요, 김철수님!")
print("오늘도 좋은 하루 되세요!")
print("=" * 30)

print("=" * 30)
print("안녕하세요, 이영희님!")
print("오늘도 좋은 하루 되세요!")
print("=" * 30)

# 문제점: 같은 패턴의 코드가 3번 반복됨
# 인사말을 수정하려면 3곳 모두 고쳐야 함`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">함수 사용: 한 번 정의하고 여러 번 호출</div>
            <pre><code>{`# 인사 함수 정의
def greet(name):
    print("=" * 30)
    print(f"안녕하세요, {name}님!")
    print("오늘도 좋은 하루 되세요!")
    print("=" * 30)

# 호출만 하면 됨
greet("홍길동")
greet("김철수")
greet("이영희")

# 장점: 코드가 간결하고, 수정 시 함수만 고치면 됨`}</code></pre>
          </div>

          {/* ========== 2. 내장 함수 ========== */}
          <h2>2. 내장 함수 (Built-in Functions)</h2>
          <p>
            파이썬은 별도의 정의 없이 바로 사용할 수 있는 <strong>내장 함수(Built-in Functions)</strong>를 제공합니다.
            지금까지 사용해왔던 <code>print()</code>, <code>input()</code>, <code>int()</code> 등이 모두 내장 함수입니다.
          </p>

          <table className="lesson-table">
            <thead>
              <tr><th>함수</th><th>설명</th><th>사용 예</th></tr>
            </thead>
            <tbody>
              <tr><td><code>print()</code></td><td>화면에 출력</td><td><code>print("Hello")</code></td></tr>
              <tr><td><code>input()</code></td><td>사용자 입력 받기</td><td><code>input("이름: ")</code></td></tr>
              <tr><td><code>len()</code></td><td>길이(요소 개수) 반환</td><td><code>len([1, 2, 3])</code> &rarr; 3</td></tr>
              <tr><td><code>type()</code></td><td>자료형 반환</td><td><code>type(42)</code> &rarr; int</td></tr>
              <tr><td><code>int()</code></td><td>정수로 변환</td><td><code>int("10")</code> &rarr; 10</td></tr>
              <tr><td><code>float()</code></td><td>실수로 변환</td><td><code>float("3.14")</code> &rarr; 3.14</td></tr>
              <tr><td><code>str()</code></td><td>문자열로 변환</td><td><code>str(100)</code> &rarr; "100"</td></tr>
              <tr><td><code>bool()</code></td><td>불리언으로 변환</td><td><code>bool(0)</code> &rarr; False</td></tr>
              <tr><td><code>abs()</code></td><td>절대값 반환</td><td><code>abs(-5)</code> &rarr; 5</td></tr>
              <tr><td><code>round()</code></td><td>반올림</td><td><code>round(3.7)</code> &rarr; 4</td></tr>
              <tr><td><code>max()</code></td><td>최대값 반환</td><td><code>max(1, 5, 3)</code> &rarr; 5</td></tr>
              <tr><td><code>min()</code></td><td>최소값 반환</td><td><code>min(1, 5, 3)</code> &rarr; 1</td></tr>
              <tr><td><code>sum()</code></td><td>합계 반환</td><td><code>sum([1, 2, 3])</code> &rarr; 6</td></tr>
              <tr><td><code>range()</code></td><td>정수 시퀀스 생성</td><td><code>range(1, 6)</code> &rarr; 1~5</td></tr>
              <tr><td><code>sorted()</code></td><td>정렬된 새 리스트 반환</td><td><code>sorted([3, 1, 2])</code> &rarr; [1, 2, 3]</td></tr>
              <tr><td><code>enumerate()</code></td><td>인덱스와 값 함께 반환</td><td><code>enumerate(["a", "b"])</code></td></tr>
              <tr><td><code>zip()</code></td><td>여러 시퀀스를 묶음</td><td><code>zip([1, 2], ["a", "b"])</code></td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">내장 함수 활용 예시</div>
            <pre><code>{`# 수치 관련 내장 함수
print(abs(-7))         # 7
print(round(3.14159, 2))  # 3.14
print(max(10, 20, 5))  # 20
print(min(10, 20, 5))  # 5
print(sum([1, 2, 3, 4, 5]))  # 15

# 형변환 내장 함수
print(int("42"))       # 42
print(float("3.14"))   # 3.14
print(str(100))        # "100"
print(bool(1))         # True
print(bool(0))         # False

# help() 함수로 도움말 확인
help(abs)  # abs 함수의 사용법 출력
help(len)  # len 함수의 사용법 출력`}</code></pre>
          </div>

          {/* ========== 3. 사용자 정의 함수 ========== */}
          <h2>3. 사용자 정의 함수 (User-defined Functions)</h2>

          <h3>3.1 함수 정의 문법</h3>
          <p>파이썬에서 함수는 <code>def</code> 키워드를 사용하여 정의합니다.</p>
          <div className="code-block">
            <div className="code-header">함수 정의 구조</div>
            <pre><code>{`def 함수명(매개변수1, 매개변수2, ...):
    """Docstring: 함수 설명 (선택)"""
    # 함수 본문 (들여쓰기 필수)
    실행할_코드
    return 반환값  # 선택`}</code></pre>
          </div>

          <h3>3.2 함수의 구성 요소</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>구성 요소</th><th>설명</th><th>필수 여부</th></tr>
            </thead>
            <tbody>
              <tr><td><code>def</code></td><td>함수 정의 시작 키워드</td><td>필수</td></tr>
              <tr><td>함수명</td><td>함수를 식별하는 이름</td><td>필수</td></tr>
              <tr><td>매개변수</td><td>함수에 전달할 입력값의 변수명</td><td>선택 (없을 수도 있음)</td></tr>
              <tr><td>콜론 <code>:</code></td><td>함수 헤더의 끝을 표시</td><td>필수</td></tr>
              <tr><td>함수 본문</td><td>들여쓰기된 실행 코드</td><td>필수</td></tr>
              <tr><td><code>return</code></td><td>결과값을 호출자에게 반환</td><td>선택</td></tr>
            </tbody>
          </table>

          <h3>3.3 함수 명명 규칙</h3>
          <ul>
            <li><strong>snake_case</strong> 사용: 단어를 밑줄(_)로 구분 (예: <code>calculate_average</code>, <code>get_user_name</code>)</li>
            <li><strong>동사로 시작</strong> 권장: 함수는 동작을 수행하므로 동사를 앞에 (예: <code>get_</code>, <code>set_</code>, <code>calculate_</code>, <code>is_</code>, <code>check_</code>)</li>
            <li><strong>의미 있는 이름</strong>: <code>f()</code>, <code>a()</code> 보다 <code>calculate_tax()</code>처럼 용도를 알 수 있게</li>
            <li>파이썬 예약어(if, for, while 등)는 함수명으로 사용 불가</li>
          </ul>

          <h3>3.4 함수 정의와 호출</h3>
          <div className="code-block">
            <div className="code-header">다양한 함수 정의와 호출 예시</div>
            <pre><code>{`# 예제 1: 매개변수 없는 인사말 함수
def say_hello():
    print("안녕하세요!")
    print("파이썬 프로그래밍에 오신 것을 환영합니다.")

say_hello()  # 함수 호출

# 예제 2: 매개변수가 있는 인사말 함수
def greet(name):
    print(f"안녕하세요, {name}님! 반갑습니다.")

greet("홍길동")  # 안녕하세요, 홍길동님! 반갑습니다.
greet("김철수")  # 안녕하세요, 김철수님! 반갑습니다.

# 예제 3: 두 수의 합을 출력하는 함수
def print_sum(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

print_sum(10, 20)  # 10 + 20 = 30
print_sum(3, 7)    # 3 + 7 = 10

# 예제 4: 구분선 출력 함수
def print_line(char="-", length=40):
    print(char * length)

print_line()          # ----------------------------------------
print_line("=", 30)   # ==============================
print_line("*")       # ****************************************`}</code></pre>
          </div>

          <p>
            <strong>중요:</strong> 함수는 반드시 <strong>호출하기 전에 정의</strong>되어 있어야 합니다.
            정의되지 않은 함수를 호출하면 <code>NameError</code>가 발생합니다.
          </p>

          <div className="code-block">
            <div className="code-header">함수 정의 위치 주의</div>
            <pre><code>{`# 잘못된 예: 정의 전에 호출
# say_goodbye()  # NameError: name 'say_goodbye' is not defined

def say_goodbye():
    print("안녕히 가세요!")

# 올바른 예: 정의 후에 호출
say_goodbye()  # 안녕히 가세요!`}</code></pre>
          </div>

          {/* ========== 4. 매개변수와 인자 ========== */}
          <h2>4. 매개변수(Parameter)와 인자(Argument)</h2>

          <h3>4.1 용어 구분</h3>
          <p>
            <strong>매개변수(Parameter)</strong>는 함수를 <strong>정의</strong>할 때 괄호 안에 선언하는 변수입니다.
            형식 매개변수(formal parameter)라고도 합니다.
          </p>
          <p>
            <strong>인자(Argument)</strong>는 함수를 <strong>호출</strong>할 때 실제로 전달하는 값입니다.
            실제 인자(actual argument)라고도 합니다.
          </p>

          <div className="code-block">
            <div className="code-header">매개변수 vs 인자</div>
            <pre><code>{`#       매개변수(parameter)
#          ↓
def greet(name):           # name은 매개변수
    print(f"안녕, {name}!")

greet("홍길동")             # "홍길동"은 인자(argument)
greet("김철수")             # "김철수"는 인자(argument)`}</code></pre>
          </div>

          <h3>4.2 매개변수 개수에 따른 함수</h3>
          <div className="code-block">
            <div className="code-header">매개변수 개수별 예시</div>
            <pre><code>{`# 매개변수가 없는 함수
def get_greeting():
    return "안녕하세요!"

# 매개변수가 1개인 함수
def square(x):
    return x ** 2

# 매개변수가 여러 개인 함수
def introduce(name, age, city):
    print(f"저는 {city}에 사는 {age}살 {name}입니다.")

# 호출
print(get_greeting())          # 안녕하세요!
print(square(5))               # 25
introduce("홍길동", 20, "천안")  # 저는 천안에 사는 20살 홍길동입니다.`}</code></pre>
          </div>

          {/* ========== 5. 매개변수의 종류 ========== */}
          <h2>5. 매개변수의 종류</h2>

          <h3>5.1 위치 매개변수 (Positional Parameter)</h3>
          <p>가장 기본적인 형태로, 호출 시 <strong>순서대로</strong> 인자가 대응됩니다.</p>
          <div className="code-block">
            <div className="code-header">위치 매개변수</div>
            <pre><code>{`def describe_pet(animal, name):
    print(f"나의 {animal}의 이름은 {name}입니다.")

describe_pet("고양이", "나비")   # 나의 고양이의 이름은 나비입니다.
describe_pet("나비", "고양이")   # 나의 나비의 이름은 고양이입니다. (순서가 바뀜!)

# 위치 매개변수는 순서가 중요합니다!`}</code></pre>
          </div>

          <h3>5.2 기본값 매개변수 (Default Parameter)</h3>
          <p>
            매개변수에 기본값을 지정하면 호출 시 해당 인자를 <strong>생략</strong>할 수 있습니다.
            생략하면 기본값이 사용됩니다.
          </p>
          <div className="code-block">
            <div className="code-header">기본값 매개변수</div>
            <pre><code>{`def power(base, exp=2):
    """base의 exp 거듭제곱을 반환 (기본: 제곱)"""
    return base ** exp

print(power(3))      # 9   (exp=2 기본값 사용)
print(power(3, 3))   # 27  (exp=3 전달)
print(power(2, 10))  # 1024

# 여러 기본값 매개변수
def make_coffee(size="중간", sugar=1, milk=True):
    print(f"커피: {size} 사이즈, 설탕 {sugar}개, 우유 {'O' if milk else 'X'}")

make_coffee()                        # 중간 사이즈, 설탕 1개, 우유 O
make_coffee("큰")                    # 큰 사이즈, 설탕 1개, 우유 O
make_coffee("작은", 0, False)        # 작은 사이즈, 설탕 0개, 우유 X`}</code></pre>
          </div>

          <p>
            <strong>주의:</strong> 기본값 매개변수는 반드시 <strong>위치 매개변수 뒤</strong>에 와야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header">기본값 매개변수 위치 규칙</div>
            <pre><code>{`# 올바른 예
def func(a, b, c=10):  # 기본값 매개변수가 뒤에
    pass

# 잘못된 예 - SyntaxError 발생!
# def func(a, b=10, c):  # 기본값 매개변수 뒤에 일반 매개변수 불가
#     pass`}</code></pre>
          </div>

          <h3>5.3 키워드 인자 (Keyword Argument)</h3>
          <p>함수 호출 시 <code>이름=값</code> 형태로 전달하면 순서에 상관없이 올바르게 대응됩니다.</p>
          <div className="code-block">
            <div className="code-header">키워드 인자</div>
            <pre><code>{`def describe_pet(animal, name):
    print(f"나의 {animal}의 이름은 {name}입니다.")

# 키워드 인자: 순서 무관
describe_pet(name="나비", animal="고양이")
# 출력: 나의 고양이의 이름은 나비입니다.

# 위치 인자와 키워드 인자 혼합
describe_pet("강아지", name="바둑이")
# 출력: 나의 강아지의 이름은 바둑이입니다.

# 주의: 위치 인자는 키워드 인자보다 앞에 와야 함
# describe_pet(animal="고양이", "나비")  # SyntaxError!`}</code></pre>
          </div>

          <h3>5.4 가변 위치 인자 (*args)</h3>
          <p>
            <code>*args</code>를 사용하면 <strong>개수가 정해지지 않은 여러 인자</strong>를 튜플(tuple) 형태로 받을 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">*args 사용</div>
            <pre><code>{`def add_all(*args):
    """전달된 모든 수의 합을 반환"""
    print(f"전달된 인자: {args}")  # 튜플로 출력
    return sum(args)

print(add_all(1, 2))           # 전달된 인자: (1, 2) → 3
print(add_all(1, 2, 3, 4, 5))  # 전달된 인자: (1, 2, 3, 4, 5) → 15

# 위치 매개변수와 *args 혼합
def greet_all(greeting, *names):
    for name in names:
        print(f"{greeting}, {name}님!")

greet_all("안녕하세요", "홍길동", "김철수", "이영희")
# 안녕하세요, 홍길동님!
# 안녕하세요, 김철수님!
# 안녕하세요, 이영희님!`}</code></pre>
          </div>

          <h3>5.5 가변 키워드 인자 (**kwargs)</h3>
          <p>
            <code>**kwargs</code>를 사용하면 <strong>이름=값 형태의 여러 인자</strong>를 딕셔너리(dict) 형태로 받을 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">**kwargs 사용</div>
            <pre><code>{`def print_info(**kwargs):
    """전달된 모든 키워드 인자를 출력"""
    print(f"전달된 인자: {kwargs}")  # 딕셔너리로 출력
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print_info(name="홍길동", age=20, city="천안")
# 전달된 인자: {'name': '홍길동', 'age': 20, 'city': '천안'}
#   name: 홍길동
#   age: 20
#   city: 천안`}</code></pre>
          </div>

          <h3>5.6 매개변수 순서 규칙</h3>
          <p>다양한 매개변수를 함께 사용할 때는 반드시 아래 순서를 지켜야 합니다.</p>
          <div className="code-block">
            <div className="code-header">매개변수 순서</div>
            <pre><code>{`# 올바른 순서: 위치 → 기본값 → *args → **kwargs
def func(a, b, c=10, *args, **kwargs):
    print(f"a={a}, b={b}, c={c}")
    print(f"args={args}")
    print(f"kwargs={kwargs}")

func(1, 2, 3, 4, 5, x=10, y=20)
# a=1, b=2, c=3
# args=(4, 5)
# kwargs={'x': 10, 'y': 20}`}</code></pre>
          </div>

          {/* ========== 6. 반환값 (return) ========== */}
          <h2>6. 반환값 (return)</h2>

          <h3>6.1 return문의 역할</h3>
          <p>
            <code>return</code>문은 함수의 <strong>실행을 종료</strong>하고 <strong>결과값을 호출자에게 돌려주는</strong> 역할을 합니다.
            return 이후의 코드는 실행되지 않습니다.
          </p>

          <h3>6.2 return이 없는 함수</h3>
          <p><code>return</code>이 없는 함수는 자동으로 <code>None</code>을 반환합니다.</p>
          <div className="code-block">
            <div className="code-header">return이 없는 함수</div>
            <pre><code>{`def say_hello(name):
    print(f"안녕하세요, {name}님!")
    # return이 없으므로 None 반환

result = say_hello("홍길동")  # 화면에 출력됨
print(f"반환값: {result}")     # 반환값: None
print(f"타입: {type(result)}") # 타입: <class 'NoneType'>`}</code></pre>
          </div>

          <h3>6.3 단일 값 반환</h3>
          <div className="code-block">
            <div className="code-header">단일 값 반환</div>
            <pre><code>{`def add(a, b):
    return a + b

def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# 반환값을 변수에 저장
total = add(10, 20)
grade = get_grade(85)
print(f"합계: {total}, 등급: {grade}")  # 합계: 30, 등급: B`}</code></pre>
          </div>

          <h3>6.4 여러 값 반환 (튜플 활용)</h3>
          <p>파이썬에서는 콤마(,)로 구분하여 여러 값을 동시에 반환할 수 있습니다. 실제로는 튜플로 반환됩니다.</p>
          <div className="code-block">
            <div className="code-header">여러 값 반환</div>
            <pre><code>{`def min_max(numbers):
    """리스트의 최소값과 최대값을 동시에 반환"""
    return min(numbers), max(numbers)

# 튜플 언패킹으로 받기
lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"최소: {lo}, 최대: {hi}")  # 최소: 1, 최대: 9

# 튜플로 받기
result = min_max([10, 20, 5, 30])
print(f"결과: {result}")  # 결과: (5, 30)

# 세 값 이상 반환
def get_stats(numbers):
    """리스트의 합계, 평균, 개수를 반환"""
    total = sum(numbers)
    count = len(numbers)
    average = total / count
    return total, average, count

s, a, c = get_stats([80, 90, 85, 95, 70])
print(f"합계: {s}, 평균: {a}, 개수: {c}")
# 합계: 420, 평균: 84.0, 개수: 5`}</code></pre>
          </div>

          <h3>6.5 조건부 return</h3>
          <div className="code-block">
            <div className="code-header">조건에 따라 다른 값 반환</div>
            <pre><code>{`def safe_divide(a, b):
    """안전한 나눗셈: 0으로 나누면 None 반환"""
    if b == 0:
        return None  # 조기 반환 (early return)
    return a / b

result = safe_divide(10, 3)
if result is not None:
    print(f"결과: {result:.2f}")  # 결과: 3.33

result = safe_divide(10, 0)
if result is None:
    print("0으로 나눌 수 없습니다.")`}</code></pre>
          </div>

          <h3>6.6 return vs print() 차이 (매우 중요)</h3>
          <p>
            초보자가 가장 혼동하는 부분입니다. <code>print()</code>는 화면에 출력만 하고,
            <code>return</code>은 값을 호출자에게 돌려줍니다.
          </p>
          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>print()</th><th>return</th></tr>
            </thead>
            <tbody>
              <tr><td>역할</td><td>화면에 출력</td><td>값을 호출자에게 반환</td></tr>
              <tr><td>변수 저장</td><td>불가능 (None 저장됨)</td><td>가능</td></tr>
              <tr><td>다른 연산에 사용</td><td>불가능</td><td>가능</td></tr>
              <tr><td>함수 종료</td><td>함수 계속 실행됨</td><td>함수 즉시 종료</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">return vs print() 비교</div>
            <pre><code>{`# print()를 사용한 함수 (잘못된 패턴)
def add_print(a, b):
    print(a + b)  # 화면에 출력만 함

result1 = add_print(3, 5)  # 화면에 8 출력
print(f"result1 = {result1}")  # result1 = None
# total = result1 + 10  # TypeError! None + 10 불가

# return을 사용한 함수 (올바른 패턴)
def add_return(a, b):
    return a + b  # 값을 반환

result2 = add_return(3, 5)  # 아무것도 출력 안 됨 (값만 반환)
print(f"result2 = {result2}")  # result2 = 8
total = result2 + 10  # 18 (다른 연산에 활용 가능)
print(f"total = {total}")      # total = 18`}</code></pre>
          </div>

          {/* ========== 7. 변수 스코프 ========== */}
          <h2>7. 변수 스코프 (Variable Scope)</h2>

          <h3>7.1 지역 변수 (Local Variable)</h3>
          <p>
            <strong>함수 내부</strong>에서 선언된 변수는 <strong>지역 변수</strong>로, 해당 함수 안에서만 접근할 수 있습니다.
            함수가 종료되면 지역 변수는 메모리에서 사라집니다.
          </p>
          <div className="code-block">
            <div className="code-header">지역 변수</div>
            <pre><code>{`def my_function():
    x = 10  # 지역 변수
    print(f"함수 내부 x: {x}")

my_function()       # 함수 내부 x: 10
# print(x)          # NameError! x는 함수 내부에서만 존재`}</code></pre>
          </div>

          <h3>7.2 전역 변수 (Global Variable)</h3>
          <p>
            <strong>함수 외부</strong>에서 선언된 변수는 <strong>전역 변수</strong>로, 프로그램 어디서든 접근할 수 있습니다.
            단, 함수 내부에서 전역 변수를 <strong>읽기</strong>는 가능하지만 <strong>수정</strong>하려면 <code>global</code> 키워드가 필요합니다.
          </p>
          <div className="code-block">
            <div className="code-header">전역 변수와 지역 변수</div>
            <pre><code>{`message = "전역 변수입니다"  # 전역 변수

def show_message():
    print(message)  # 전역 변수 읽기 가능

def change_message():
    message = "함수 내부에서 변경"  # 새로운 지역 변수 생성!
    print(f"함수 내부: {message}")

show_message()       # 전역 변수입니다
change_message()     # 함수 내부: 함수 내부에서 변경
print(message)       # 전역 변수입니다 (전역 변수는 변경 안 됨!)`}</code></pre>
          </div>

          <h3>7.3 global 키워드</h3>
          <p>
            함수 내에서 전역 변수를 수정하려면 <code>global</code> 키워드를 사용합니다.
            그러나 전역 변수의 남용은 코드의 복잡성을 높이므로 <strong>가급적 사용을 피하는 것이 좋습니다</strong>.
          </p>
          <div className="code-block">
            <div className="code-header">global 키워드</div>
            <pre><code>{`count = 0  # 전역 변수

def increment():
    global count  # 전역 변수를 사용하겠다고 선언
    count += 1
    print(f"count: {count}")

increment()  # count: 1
increment()  # count: 2
increment()  # count: 3
print(f"최종 count: {count}")  # 최종 count: 3

# 더 좋은 방법: return 활용
def increment_better(n):
    return n + 1

count2 = 0
count2 = increment_better(count2)  # 1
count2 = increment_better(count2)  # 2
print(f"count2: {count2}")  # count2: 2`}</code></pre>
          </div>

          <h3>7.4 LEGB 규칙</h3>
          <p>
            파이썬은 변수를 찾을 때 <strong>LEGB 규칙</strong> 순서로 탐색합니다.
          </p>
          <table className="lesson-table">
            <thead>
              <tr><th>순서</th><th>스코프</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong>L</strong>ocal (지역)</td><td>현재 함수 내부</td></tr>
              <tr><td>2</td><td><strong>E</strong>nclosing (감싸는)</td><td>바깥 함수 (중첩 함수일 때)</td></tr>
              <tr><td>3</td><td><strong>G</strong>lobal (전역)</td><td>모듈(파일) 최상위</td></tr>
              <tr><td>4</td><td><strong>B</strong>uilt-in (내장)</td><td>파이썬 내장 이름 (print, len 등)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">LEGB 규칙 예시</div>
            <pre><code>{`x = "전역"  # Global

def outer():
    x = "감싸는 함수"  # Enclosing

    def inner():
        x = "지역"  # Local
        print(f"inner: {x}")  # Local 변수 사용

    inner()
    print(f"outer: {x}")  # Enclosing 변수 사용

outer()
print(f"전역: {x}")  # Global 변수 사용

# 출력:
# inner: 지역
# outer: 감싸는 함수
# 전역: 전역`}</code></pre>
          </div>

          <h3>7.5 변수 스코프 관련 흔한 오류</h3>
          <div className="code-block">
            <div className="code-header">스코프 관련 오류 사례</div>
            <pre><code>{`# 오류 1: 함수 내에서 전역 변수 읽기 후 수정 시도
x = 10
def broken():
    # print(x)   # 이 줄이 있으면 아래 줄에서 오류!
    x = x + 1    # UnboundLocalError!
    # 파이썬은 함수 내에서 x에 대입하는 코드가 있으면
    # x를 지역 변수로 취급하기 때문

# 해결: global 사용 또는 매개변수/반환값 활용
def fixed(x):
    return x + 1

result = fixed(10)  # 11`}</code></pre>
          </div>

          {/* ========== 8. Docstring ========== */}
          <h2>8. Docstring (문서화 문자열)</h2>
          <p>
            Docstring은 함수의 기능, 매개변수, 반환값을 설명하는 <strong>문서화 문자열</strong>입니다.
            함수 본문의 첫 줄에 <code>"""설명"""</code> 형태로 작성하며,
            <code>help()</code> 함수로 확인할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">Docstring 작성법</div>
            <pre><code>{`def calculate_bmi(weight, height):
    """
    BMI(체질량지수)를 계산하여 반환합니다.

    매개변수:
        weight (float): 몸무게 (kg)
        height (float): 키 (m)

    반환값:
        float: BMI 수치

    사용 예:
        >>> calculate_bmi(70, 1.75)
        22.857142857142858
    """
    return weight / (height ** 2)

# Docstring 확인
help(calculate_bmi)

# 사용
bmi = calculate_bmi(70, 1.75)
print(f"BMI: {bmi:.1f}")  # BMI: 22.9`}</code></pre>
          </div>

          {/* ========== 9. 종합 실습 예제 ========== */}
          <h2>9. 종합 실습 예제</h2>

          <h3>예제 1: 사칙연산 함수 모음</h3>
          <div className="code-block">
            <div className="code-header">사칙연산 함수</div>
            <pre><code>{`def add(a, b):
    """두 수의 합을 반환"""
    return a + b

def subtract(a, b):
    """두 수의 차를 반환"""
    return a - b

def multiply(a, b):
    """두 수의 곱을 반환"""
    return a * b

def divide(a, b):
    """두 수의 나눗셈 결과를 반환 (0 나누기 방지)"""
    if b == 0:
        return "0으로 나눌 수 없습니다"
    return a / b

# 함수 호출 테스트
x, y = 10, 3
print(f"{x} + {y} = {add(x, y)}")        # 10 + 3 = 13
print(f"{x} - {y} = {subtract(x, y)}")   # 10 - 3 = 7
print(f"{x} × {y} = {multiply(x, y)}")   # 10 × 3 = 30
print(f"{x} ÷ {y} = {divide(x, y):.2f}") # 10 ÷ 3 = 3.33
print(f"{x} ÷ 0 = {divide(x, 0)}")       # 0으로 나눌 수 없습니다`}</code></pre>
          </div>

          <h3>예제 2: 온도 변환 함수</h3>
          <div className="code-block">
            <div className="code-header">온도 변환 함수</div>
            <pre><code>{`def celsius_to_fahrenheit(celsius):
    """섭씨를 화씨로 변환: F = C × 9/5 + 32"""
    return celsius * 9 / 5 + 32

def fahrenheit_to_celsius(fahrenheit):
    """화씨를 섭씨로 변환: C = (F - 32) × 5/9"""
    return (fahrenheit - 32) * 5 / 9

# 테스트
temps_c = [0, 20, 36.5, 100]
print("=== 섭씨 → 화씨 ===")
for c in temps_c:
    f = celsius_to_fahrenheit(c)
    print(f"  {c}°C = {f:.1f}°F")

temps_f = [32, 68, 97.7, 212]
print("\\n=== 화씨 → 섭씨 ===")
for f in temps_f:
    c = fahrenheit_to_celsius(f)
    print(f"  {f}°F = {c:.1f}°C")`}</code></pre>
          </div>

          <h3>예제 3: 성적 등급 함수</h3>
          <div className="code-block">
            <div className="code-header">성적 등급 판별 함수</div>
            <pre><code>{`def get_grade(score):
    """점수를 받아 등급 문자열을 반환"""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# 테스트
scores = [95, 82, 73, 64, 45]
for s in scores:
    grade = get_grade(s)
    print(f"  점수: {s} → 등급: {grade}")`}</code></pre>
          </div>

          <h3>예제 4: 소수 판별 함수</h3>
          <div className="code-block">
            <div className="code-header">소수(prime number) 판별 함수</div>
            <pre><code>{`def is_prime(n):
    """n이 소수이면 True, 아니면 False 반환"""
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False  # 나누어지면 소수가 아님
    return True

# 테스트: 1~30에서 소수 찾기
print("1~30 사이의 소수:")
primes = []
for num in range(1, 31):
    if is_prime(num):
        primes.append(num)
print(primes)
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`}</code></pre>
          </div>

          <h3>예제 5: 팩토리얼 함수 (반복문 활용)</h3>
          <div className="code-block">
            <div className="code-header">팩토리얼 함수</div>
            <pre><code>{`def factorial(n):
    """n! (n 팩토리얼)을 반복문으로 계산하여 반환"""
    if n < 0:
        return None  # 음수는 팩토리얼 없음
    result = 1
    for i in range(1, n + 1):
        result *= i  # result = result * i
    return result

# 테스트
for n in range(0, 8):
    print(f"  {n}! = {factorial(n)}")
# 0! = 1
# 1! = 1
# 2! = 2
# 3! = 6
# 4! = 24
# 5! = 120
# 6! = 720
# 7! = 5040`}</code></pre>
          </div>

          {/* ========== 10. 함수 설계 원칙 ========== */}
          <h2>10. 함수 설계 원칙</h2>
          <table className="lesson-table">
            <thead>
              <tr><th>원칙</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>단일 책임 원칙 (SRP)</strong></td><td>하나의 함수는 하나의 일만 수행하도록 설계</td></tr>
              <tr><td><strong>의미 있는 이름</strong></td><td>함수 이름만 보고 기능을 파악할 수 있도록 명명</td></tr>
              <tr><td><strong>적절한 매개변수 수</strong></td><td>매개변수는 3개 이하 권장, 많으면 딕셔너리나 객체로 묶기</td></tr>
              <tr><td><strong>부작용 최소화</strong></td><td>전역 변수 수정, 외부 상태 변경 등 부작용(Side Effect) 줄이기</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">좋은 함수 vs 나쁜 함수</div>
            <pre><code>{`# 나쁜 예: 하나의 함수가 너무 많은 일을 함
def process(data):
    # 데이터 검증 + 계산 + 출력을 모두 수행
    if not data:
        print("데이터 없음")
        return
    total = sum(data)
    avg = total / len(data)
    print(f"합계: {total}")
    print(f"평균: {avg}")

# 좋은 예: 각 함수가 하나의 역할만 수행
def validate_data(data):
    """데이터가 유효한지 검증"""
    return data is not None and len(data) > 0

def calculate_average(data):
    """평균을 계산하여 반환"""
    return sum(data) / len(data)

def display_stats(total, average):
    """통계를 화면에 출력"""
    print(f"합계: {total}")
    print(f"평균: {average}")`}</code></pre>
          </div>

          {/* ========== 핵심 정리 ========== */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><strong>함수</strong>는 <code>def 함수명(매개변수):</code>로 정의하고, <code>함수명(인자)</code>로 호출한다</li>
              <li><strong>매개변수</strong>는 함수 정의 시의 변수, <strong>인자</strong>는 호출 시 전달하는 값이다</li>
              <li>매개변수 종류: 위치, 기본값, 키워드, *args, **kwargs (순서대로 배치)</li>
              <li><strong>return</strong>은 값을 반환하고 함수를 종료한다. return이 없으면 <code>None</code>을 반환한다</li>
              <li><code>return</code>은 값을 돌려주고, <code>print()</code>는 화면에 출력만 한다 &mdash; 이 둘을 혼동하지 말 것</li>
              <li><strong>지역 변수</strong>는 함수 내부에서만, <strong>전역 변수</strong>는 어디서든 접근 가능하다</li>
              <li>변수 탐색 순서: LEGB (Local &rarr; Enclosing &rarr; Global &rarr; Built-in)</li>
              <li>Docstring(<code>"""..."""</code>)으로 함수를 문서화하는 습관을 기르자</li>
            </ul>
          </div>

          {/* ========== 자주 하는 실수 ========== */}
          <div className="callout-box">
            <h3>자주 하는 실수</h3>
            <ul>
              <li><strong>return 없이 print만 사용:</strong> 함수 안에서 <code>print()</code>만 쓰면 반환값은 <code>None</code>이 되어 다른 연산에 활용할 수 없다</li>
              <li><strong>함수 정의 전에 호출:</strong> 파이썬은 위에서 아래로 실행하므로 함수 정의가 호출보다 먼저 나와야 한다</li>
              <li><strong>매개변수 순서 혼동:</strong> 위치 인자의 순서를 잘못 전달하면 의도와 다른 결과가 나온다</li>
              <li><strong>지역/전역 변수 혼동:</strong> 함수 내부에서 같은 이름의 변수에 대입하면 전역 변수와 다른 새로운 지역 변수가 생성된다</li>
              <li><strong>기본값 매개변수 위치 오류:</strong> 기본값 매개변수는 반드시 일반 매개변수 뒤에 와야 한다</li>
            </ul>
          </div>

          {/* ========== 실습 과제 ========== */}
          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>다음 함수를 각각 작성하고 테스트 코드로 확인하세요.</p>
            <p>
              <strong>과제 1:</strong> <code>is_even(n)</code> &mdash; 정수 n을 받아 짝수이면 <code>True</code>, 홀수이면 <code>False</code>를 반환하는 함수<br/>
              <strong>과제 2:</strong> <code>grade(score)</code> &mdash; 점수(0~100)를 받아 등급 문자열("A", "B", "C", "D", "F")을 반환하는 함수<br/>
              <strong>과제 3:</strong> <code>circle_area(r)</code> &mdash; 반지름 r을 받아 원의 넓이(pi * r&sup2;)를 반환하는 함수 (pi = 3.14159 사용)
            </p>
          </div>

          <div className="exercise-box">
            <h3>심화 문제</h3>
            <p>
              <strong>문제 1: 간이 계산기</strong><br/>
              사칙연산 함수(add, subtract, multiply, divide)를 정의하고,
              사용자가 메뉴(1.덧셈, 2.뺄셈, 3.곱셈, 4.나눗셈, 0.종료)를 선택하여
              반복적으로 계산할 수 있는 프로그램을 작성하세요.
              0으로 나누기 예외도 처리하세요.
            </p>
            <p>
              <strong>문제 2: 피보나치 함수</strong><br/>
              <code>fibonacci(n)</code> 함수를 작성하세요.
              n번째 피보나치 수를 반환합니다. (0, 1, 1, 2, 3, 5, 8, 13, ...)
              반복문을 사용하여 구현하세요.
            </p>
          </div>

          <div className="lesson-nav">
            <Link to="/python-learning/08" className="lesson-nav-btn prev">← 08: 반복문</Link>
            <Link to="/python-learning/10" className="lesson-nav-btn next">10: Try-Except →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PythonLesson09;
