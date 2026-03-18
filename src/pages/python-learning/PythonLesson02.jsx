import { Link } from 'react-router-dom';

const PythonLesson02 = () => (
  <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
    <section className="page-header">
      <div className="container">
        <h1>2주차: 입출력과 변수</h1>
        <p>print(), input() 함수와 변수 활용</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>print() 함수의 다양한 매개변수(sep, end)를 활용하여 출력 형식을 제어한다.</li>
              <li>변수의 개념을 이해하고 올바른 명명 규칙(PEP 8)을 따른다.</li>
              <li>input() 함수를 사용하여 사용자 입력을 받고 형변환을 적용한다.</li>
              <li>문자열 포매팅 3가지 방법(%, format(), f-string)을 비교하고 활용한다.</li>
              <li>이스케이프 시퀀스를 이해하고 출력 형식을 세밀하게 제어한다.</li>
            </ul>
          </div>

          {/* ========== print() 함수 ========== */}
          <h2>1. 출력: print() 함수 완전 정복</h2>

          <h3>1.1 print() 함수의 문법</h3>
          <p>
            <code>print()</code>는 파이썬에서 가장 자주 사용하는 내장 함수로, 화면(표준 출력)에 값을 출력합니다.
            공식 문법은 다음과 같습니다.
          </p>
          <div className="code-block">
            <div className="code-header">print() 함수의 전체 문법</div>
            <pre><code>{`print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)

# *objects  : 출력할 값(들). 여러 개를 쉼표로 구분하여 전달 가능
# sep       : 여러 값 사이에 넣을 구분자 (기본값: 공백 ' ')
# end       : 출력 끝에 추가할 문자 (기본값: 줄바꿈 '\\n')
# file      : 출력 대상 (기본값: 화면, 파일로 변경 가능)
# flush     : 출력 버퍼를 즉시 비울지 여부`}</code></pre>
          </div>

          <h3>1.2 기본 출력</h3>
          <div className="code-block">
            <div className="code-header">기본 출력 예시</div>
            <pre><code>{`# 문자열 출력
print("안녕하세요, 파이썬!")

# 숫자 출력
print(42)
print(3.141592)

# 변수 출력
name = "홍길동"
age = 20
print(name)
print(age)

# 계산 결과 출력
print(10 + 20)        # 30
print(3 * 7)          # 21

# 빈 줄 출력
print()               # 아무것도 없이 줄바꿈만`}</code></pre>
          </div>

          <h3>1.3 여러 값 출력 (쉼표 구분)</h3>
          <p>
            <code>print()</code>에 여러 값을 쉼표(<code>,</code>)로 구분하여 전달하면
            각 값 사이에 <strong>자동으로 공백 한 칸</strong>이 삽입되어 출력됩니다.
          </p>
          <div className="code-block">
            <div className="code-header">여러 값 출력</div>
            <pre><code>{`# 여러 값을 쉼표로 구분
print("이름:", "홍길동")           # 이름: 홍길동
print("나이:", 20, "세")           # 나이: 20 세
print("합계:", 10 + 20 + 30)      # 합계: 60

# 다양한 자료형을 함께 출력 가능
print("점수는", 95, "점이고, 평균은", 87.5, "입니다.")
# 점수는 95 점이고, 평균은 87.5 입니다.`}</code></pre>
          </div>

          <h3>1.4 sep 매개변수: 구분자 변경</h3>
          <p>
            <code>sep</code> 매개변수를 사용하면 여러 값 사이의 구분자를 공백 대신 원하는 문자로 변경할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">sep 매개변수 활용</div>
            <pre><code>{`# 기본 구분자 (공백)
print("2025", "03", "01")              # 2025 03 01

# 구분자를 하이픈(-)으로 변경
print("2025", "03", "01", sep="-")     # 2025-03-01

# 구분자를 슬래시(/)로 변경
print("2025", "03", "01", sep="/")     # 2025/03/01

# 구분자를 빈 문자열로 (붙여서 출력)
print("010", "1234", "5678", sep="-")  # 010-1234-5678

# 구분자 없이 붙이기
print("P", "y", "t", "h", "o", "n", sep="")  # Python

# 구분자를 줄바꿈으로
print("사과", "바나나", "체리", sep="\\n")
# 사과
# 바나나
# 체리`}</code></pre>
          </div>

          <h3>1.5 end 매개변수: 줄바꿈 제어</h3>
          <p>
            기본적으로 <code>print()</code>는 출력 후 <strong>자동 줄바꿈(<code>\\n</code>)</strong>을 합니다.
            <code>end</code> 매개변수를 사용하면 줄바꿈 대신 다른 문자를 출력할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">end 매개변수 활용</div>
            <pre><code>{`# 기본 동작: 각 print()마다 줄바꿈
print("Hello")
print("World")
# Hello
# World

# end를 공백으로 변경: 줄바꿈 대신 공백
print("Hello", end=" ")
print("World")
# Hello World

# end를 빈 문자열로: 줄바꿈 없이 이어서 출력
print("A", end="")
print("B", end="")
print("C")
# ABC

# end를 특수 문자로
print("로딩 중", end="...")
print("완료!")
# 로딩 중...완료!

# sep과 end를 함께 사용
print("2025", "03", "01", sep="-", end=" (토)\\n")
# 2025-03-01 (토)`}</code></pre>
          </div>

          {/* ========== 이스케이프 시퀀스 ========== */}
          <h2>2. 이스케이프 시퀀스 (Escape Sequence)</h2>

          <h3>2.1 이스케이프 시퀀스란?</h3>
          <p>
            <strong>이스케이프 시퀀스</strong>는 역슬래시(<code>\\</code>)로 시작하는 특수 문자 조합으로,
            줄바꿈, 탭 등 화면에 직접 입력하기 어려운 특수한 동작을 표현합니다.
            문자열 안에서 사용되며, 출력 형식을 세밀하게 제어할 때 필수적입니다.
          </p>

          <h3>2.2 주요 이스케이프 시퀀스</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>이스케이프 시퀀스</th><th>의미</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>\\n</code></td><td>줄바꿈 (New Line)</td><td>다음 줄로 이동</td></tr>
              <tr><td><code>\\t</code></td><td>탭 (Tab)</td><td>탭 간격만큼 이동 (보통 4~8칸)</td></tr>
              <tr><td><code>\\\\</code></td><td>역슬래시</td><td>역슬래시 문자 자체를 출력</td></tr>
              <tr><td><code>\\'</code></td><td>작은따옴표</td><td>문자열 안에서 작은따옴표 출력</td></tr>
              <tr><td><code>\\"</code></td><td>큰따옴표</td><td>문자열 안에서 큰따옴표 출력</td></tr>
              <tr><td><code>\\r</code></td><td>캐리지 리턴</td><td>줄의 맨 앞으로 이동 (덮어쓰기)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">이스케이프 시퀀스 예시</div>
            <pre><code>{`# \\n: 줄바꿈
print("첫 번째 줄\\n두 번째 줄\\n세 번째 줄")
# 첫 번째 줄
# 두 번째 줄
# 세 번째 줄

# \\t: 탭
print("이름\\t나이\\t전공")
print("홍길동\\t20\\t컴퓨터공학")
print("김영희\\t21\\t전자공학")
# 이름    나이    전공
# 홍길동  20      컴퓨터공학
# 김영희  21      전자공학

# \\\\: 역슬래시 자체 출력
print("파일 경로: C:\\\\Users\\\\Documents\\\\file.py")
# 파일 경로: C:\\Users\\Documents\\file.py

# \\' 와 \\": 따옴표 출력
print('It\\'s Python!')           # It's Python!
print("He said \\"Hello\\"")       # He said "Hello"

# \\r: 캐리지 리턴 (줄 앞으로 이동하여 덮어쓰기)
print("ABCDE\\rXY")                # XYCDE`}</code></pre>
          </div>

          <h3>2.3 raw string (원시 문자열)</h3>
          <p>
            이스케이프 시퀀스를 무시하고 문자열을 있는 그대로 출력하고 싶을 때는
            문자열 앞에 <code>r</code> 또는 <code>R</code>을 붙여 <strong>raw string</strong>으로 만듭니다.
            파일 경로를 작성할 때 특히 유용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">raw string 예시</div>
            <pre><code>{`# 일반 문자열: 이스케이프 시퀀스가 해석됨
print("C:\\new_folder\\test")   # C: (줄바꿈) ew_folder (탭) est

# raw string: 이스케이프 시퀀스를 무시
print(r"C:\\new_folder\\test")  # C:\\new_folder\\test

# 파일 경로에 활용
path = r"C:\\Users\\student\\Documents\\homework.py"
print(path)  # C:\\Users\\student\\Documents\\homework.py`}</code></pre>
          </div>

          {/* ========== 변수 ========== */}
          <h2>3. 변수(Variable)의 이해</h2>

          <h3>3.1 변수란?</h3>
          <p>
            <strong>변수(Variable)</strong>는 데이터를 저장하는 <strong>메모리 공간에 붙인 이름</strong>입니다.
            프로그래밍에서 변수는 흔히 <strong>"이름표가 붙은 상자(Box)"</strong>에 비유합니다.
            상자 안에 값을 넣고, 이름표(변수명)를 통해 언제든지 그 값을 꺼내거나 변경할 수 있습니다.
          </p>
          <ul>
            <li><strong>상자</strong> = 메모리 공간 (데이터가 실제로 저장되는 곳)</li>
            <li><strong>이름표</strong> = 변수 이름 (사람이 기억하기 위한 식별자)</li>
            <li><strong>상자 안의 물건</strong> = 값 (정수, 문자열 등의 데이터)</li>
          </ul>

          <h3>3.2 동적 타이핑 (Dynamic Typing)</h3>
          <p>
            파이썬은 <strong>동적 타이핑(Dynamic Typing)</strong> 언어입니다.
            C나 Java처럼 변수를 선언할 때 자료형을 미리 지정할 필요 없이,
            값을 할당하면 자동으로 자료형이 결정됩니다.
            또한 같은 변수에 다른 자료형의 값을 언제든지 다시 할당할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">동적 타이핑 예시</div>
            <pre><code>{`# Java (정적 타이핑) - 자료형을 미리 선언해야 함
# int age = 20;
# String name = "홍길동";

# Python (동적 타이핑) - 자료형 선언 불필요
age = 20              # 정수(int)로 자동 결정
name = "홍길동"        # 문자열(str)로 자동 결정
height = 175.5        # 실수(float)로 자동 결정

print(type(age))      # <class 'int'>
print(type(name))     # <class 'str'>
print(type(height))   # <class 'float'>

# 같은 변수에 다른 자료형의 값 재할당 가능!
x = 100               # int
print(type(x))        # <class 'int'>
x = "백"              # str로 변경
print(type(x))        # <class 'str'>`}</code></pre>
          </div>

          <h3>3.3 변수에 값 할당과 재할당</h3>
          <div className="code-block">
            <div className="code-header">변수 할당과 재할당</div>
            <pre><code>{`# 변수에 값 할당 (= 대입 연산자)
student_name = "홍길동"
student_age = 20
gpa = 3.85

print(student_name)   # 홍길동
print(student_age)    # 20
print(gpa)            # 3.85

# 값 재할당 (변수의 값 변경)
student_age = 21      # 20 → 21로 변경
print(student_age)    # 21

# 변수를 이용한 계산
price = 15000
quantity = 3
total = price * quantity
print(total)          # 45000`}</code></pre>
          </div>

          <h3>3.4 id() 함수로 메모리 주소 확인</h3>
          <p>
            <code>id()</code> 함수를 사용하면 변수가 참조하는 객체의 <strong>메모리 주소(고유 식별자)</strong>를 확인할 수 있습니다.
            값이 변경되면 새로운 메모리 주소를 가리키게 됩니다.
          </p>
          <div className="code-block">
            <div className="code-header">id() 함수 활용</div>
            <pre><code>{`x = 10
print(id(x))      # 예: 140736123456 (메모리 주소)

x = 20
print(id(x))      # 다른 주소! 새로운 객체를 가리킴

# 같은 값을 가진 변수는 같은 객체를 참조할 수 있음
a = 100
b = 100
print(id(a))      # 같은 주소
print(id(b))      # 같은 주소 (파이썬의 정수 캐싱)
print(a is b)     # True`}</code></pre>
          </div>

          {/* ========== 변수 명명 규칙 ========== */}
          <h2>4. 변수 명명 규칙 (Naming Convention)</h2>

          <h3>4.1 기본 규칙</h3>
          <ul>
            <li><strong>허용 문자</strong>: 영문자(a-z, A-Z), 숫자(0-9), 밑줄(_). 한글도 사용 가능하나 권장하지 않습니다.</li>
            <li><strong>시작 문자</strong>: 반드시 영문자 또는 밑줄(_)로 시작해야 합니다. 숫자로 시작할 수 없습니다.</li>
            <li><strong>대소문자 구분</strong>: <code>name</code>, <code>Name</code>, <code>NAME</code>은 모두 다른 변수입니다.</li>
            <li><strong>예약어 사용 불가</strong>: 파이썬이 미리 정의한 키워드는 변수명으로 사용할 수 없습니다.</li>
            <li><strong>길이 제한 없음</strong>: 변수명의 길이에 제한은 없지만, 적절한 길이를 유지하는 것이 좋습니다.</li>
          </ul>

          <h3>4.2 파이썬 예약어 (Keywords)</h3>
          <p>
            다음은 파이썬이 문법적으로 사용하는 <strong>예약어(keyword)</strong>로, 변수명으로 사용할 수 없습니다.
          </p>
          <div className="code-block">
            <div className="code-header">파이썬 예약어 목록 확인</div>
            <pre><code>{`import keyword
print(keyword.kwlist)

# ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
#  'break', 'class', 'continue', 'def', 'del', 'elif', 'else',
#  'except', 'finally', 'for', 'from', 'global', 'if', 'import',
#  'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
#  'return', 'try', 'while', 'with', 'yield']`}</code></pre>
          </div>

          <h3>4.3 PEP 8 스타일 가이드</h3>
          <p>
            <strong>PEP 8</strong>은 파이썬 공식 코딩 스타일 가이드입니다.
            변수명은 <strong>snake_case</strong>(소문자와 밑줄 조합)를 사용하며, <strong>의미 있는 이름</strong>을 짓는 것이 중요합니다.
          </p>
          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>좋은 예시</th><th>나쁜 예시</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr><td>학생 이름</td><td><code>student_name</code></td><td><code>a</code>, <code>sn</code></td><td>의미를 알 수 없는 축약어</td></tr>
              <tr><td>총 점수</td><td><code>total_score</code></td><td><code>ts</code>, <code>x</code></td><td>무의미한 변수명</td></tr>
              <tr><td>최대값</td><td><code>max_value</code></td><td><code>MaxValue</code></td><td>파이썬은 snake_case 권장</td></tr>
              <tr><td>개수</td><td><code>item_count</code></td><td><code>n</code></td><td>맥락을 알기 어려움</td></tr>
              <tr><td>평균</td><td><code>average_grade</code></td><td><code>avg</code></td><td>지나친 축약 (avg는 허용 범위)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">올바른 변수명 vs 잘못된 변수명</div>
            <pre><code>{`# 올바른 변수명
student_name = "홍길동"
total_score = 285
average_grade = 95.0
is_passed = True
_private_var = "내부용"

# 잘못된 변수명 (오류 발생)
# 2nd_place = "김영희"     # SyntaxError: 숫자로 시작 불가
# my-name = "홍길동"       # SyntaxError: 하이픈(-) 사용 불가
# class = "A반"            # SyntaxError: 예약어 사용 불가
# total score = 100        # SyntaxError: 공백 사용 불가`}</code></pre>
          </div>

          {/* ========== 다중 할당과 값 교환 ========== */}
          <h2>5. 다중 할당과 값 교환</h2>

          <h3>5.1 다중 할당 (Multiple Assignment)</h3>
          <p>
            파이썬에서는 한 줄에 여러 변수에 값을 동시에 할당할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">다중 할당</div>
            <pre><code>{`# 여러 변수에 각각 다른 값 할당
a, b, c = 1, 2, 3
print(a, b, c)    # 1 2 3

# 여러 변수에 같은 값 할당
x = y = z = 0
print(x, y, z)    # 0 0 0

# 실용적인 예시
name, age, major = "홍길동", 20, "컴퓨터공학"
print(f"이름: {name}, 나이: {age}, 전공: {major}")
# 이름: 홍길동, 나이: 20, 전공: 컴퓨터공학`}</code></pre>
          </div>

          <h3>5.2 값 교환 (Swap)</h3>
          <p>
            다른 프로그래밍 언어에서는 두 변수의 값을 교환하려면 임시 변수(temp)가 필요합니다.
            하지만 파이썬에서는 <strong>한 줄로 간결하게</strong> 값을 교환할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">값 교환 (Swap)</div>
            <pre><code>{`# 다른 언어의 방식 (임시 변수 사용)
# a = 10
# b = 20
# temp = a
# a = b
# b = temp

# 파이썬의 간결한 방식
a = 10
b = 20
print(f"교환 전: a={a}, b={b}")  # 교환 전: a=10, b=20

a, b = b, a  # 한 줄로 값 교환!
print(f"교환 후: a={a}, b={b}")  # 교환 후: a=20, b=10

# 세 변수도 한 번에 교환 가능
x, y, z = 1, 2, 3
x, y, z = z, x, y
print(x, y, z)  # 3 1 2`}</code></pre>
          </div>

          {/* ========== input() 함수 ========== */}
          <h2>6. 입력: input() 함수</h2>

          <h3>6.1 input() 함수의 동작 원리</h3>
          <p>
            <code>input()</code> 함수는 사용자로부터 키보드 입력을 받는 함수입니다.
            프로그램 실행 중 <code>input()</code>을 만나면 사용자가 값을 입력할 때까지 <strong>대기</strong>하고,
            사용자가 Enter 키를 누르면 입력된 값을 <strong>문자열(str)</strong>로 반환합니다.
          </p>

          <div className="callout-box">
            <h3>중요: input()의 반환값은 항상 문자열(str)!</h3>
            <ul>
              <li>사용자가 숫자를 입력하더라도 <code>input()</code>은 항상 <strong>문자열(str)</strong>을 반환합니다.</li>
              <li>숫자 연산을 하려면 반드시 <code>int()</code> 또는 <code>float()</code>로 <strong>형변환</strong>해야 합니다.</li>
              <li>형변환 없이 연산하면 예상치 못한 결과나 오류가 발생합니다.</li>
            </ul>
          </div>

          <h3>6.2 문자열 입력</h3>
          <div className="code-block">
            <div className="code-header">문자열 입력</div>
            <pre><code>{`# 기본 입력 (프롬프트 메시지 없음)
data = input()
print(data)

# 프롬프트 메시지와 함께 입력
name = input("이름을 입력하세요: ")
print(f"안녕하세요, {name}님!")

# 입력값의 자료형 확인
value = input("아무 값이나 입력: ")
print(type(value))    # <class 'str'>  ← 항상 문자열!`}</code></pre>
          </div>

          <h3>6.3 정수 입력 (int 변환)</h3>
          <div className="code-block">
            <div className="code-header">정수 입력</div>
            <pre><code>{`# 잘못된 방법: 형변환 없이 사용
num = input("숫자 입력: ")    # "10" (문자열)
# result = num + 5            # TypeError! 문자열 + 정수 불가

# 올바른 방법: int()로 형변환
num = int(input("숫자 입력: "))    # 10 (정수)
result = num + 5
print(f"결과: {result}")            # 결과: 15

# 두 수 입력받아 합계 계산
a = int(input("첫 번째 숫자: "))
b = int(input("두 번째 숫자: "))
print(f"{a} + {b} = {a + b}")`}</code></pre>
          </div>

          <h3>6.4 실수 입력 (float 변환)</h3>
          <div className="code-block">
            <div className="code-header">실수 입력</div>
            <pre><code>{`# float()로 실수 변환
height = float(input("키를 입력하세요 (cm): "))
weight = float(input("몸무게를 입력하세요 (kg): "))

# BMI 계산 (키를 m로 변환)
height_m = height / 100
bmi = weight / (height_m ** 2)

print(f"BMI: {bmi:.2f}")`}</code></pre>
          </div>

          <h3>6.5 형변환 없이 사용 시 발생하는 오류</h3>
          <div className="code-block">
            <div className="code-header">주의: 형변환을 빼먹으면?</div>
            <pre><code>{`# 예시 1: 숫자 덧셈이 문자열 연결이 됨
num1 = input("첫 번째 수: ")   # "10" 입력
num2 = input("두 번째 수: ")   # "20" 입력
print(num1 + num2)              # "1020" (문자열 연결!)
# 원하는 결과: 30

# 올바른 코드
num1 = int(input("첫 번째 수: "))
num2 = int(input("두 번째 수: "))
print(num1 + num2)              # 30 (정수 덧셈)

# 예시 2: TypeError 발생
age = input("나이: ")           # "20" (문자열)
# next_year = age + 1           # TypeError: str + int 불가!
next_year = int(age) + 1        # 21 (올바른 방법)

# 예시 3: 정수가 아닌 값을 int()로 변환하면?
# num = int(input("숫자: "))    # "abc" 입력 시
# ValueError: invalid literal for int() with base 10: 'abc'`}</code></pre>
          </div>

          {/* ========== 문자열 포매팅 ========== */}
          <h2>7. 문자열 포매팅 (3가지 방법)</h2>
          <p>
            변수의 값을 문자열 안에 삽입하는 방법을 <strong>문자열 포매팅(String Formatting)</strong>이라고 합니다.
            파이썬에서는 3가지 방법을 지원합니다.
          </p>

          <h3>7.1 % 연산자 (옛 방식)</h3>
          <p>
            C 언어의 <code>printf</code>와 유사한 방식으로, 파이썬 2부터 사용된 가장 오래된 포매팅 방법입니다.
            <code>%s</code>(문자열), <code>%d</code>(정수), <code>%f</code>(실수) 등의 서식 지정자를 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">% 연산자 포매팅</div>
            <pre><code>{`name = "홍길동"
age = 20
gpa = 3.85

# %s: 문자열, %d: 정수, %f: 실수
print("이름: %s" % name)
print("나이: %d세" % age)
print("학점: %f" % gpa)          # 학점: 3.850000
print("학점: %.2f" % gpa)        # 학점: 3.85 (소수점 2자리)

# 여러 값: 튜플로 전달
print("이름: %s, 나이: %d세" % (name, age))

# 자릿수 지정
print("번호: %05d" % 42)         # 번호: 00042 (5자리, 0 채움)
print("값: %10.2f" % 3.14)       # 값:       3.14 (10자리)`}</code></pre>
          </div>

          <h3>7.2 str.format() 메서드</h3>
          <p>
            Python 2.6부터 도입된 방식으로, <code>{'{}'}</code> 자리표시자를 사용하여 값을 삽입합니다.
            인덱스나 이름으로 값을 지정할 수 있어 <code>%</code> 방식보다 유연합니다.
          </p>
          <div className="code-block">
            <div className="code-header">str.format() 메서드</div>
            <pre><code>{`name = "홍길동"
age = 20
gpa = 3.85

# 기본 사용 (순서대로)
print("이름: {}, 나이: {}세".format(name, age))

# 인덱스 지정
print("{0}님은 {1}세이며, {0}님의 학점은 {2}입니다.".format(name, age, gpa))

# 이름(키워드) 지정
print("이름: {n}, 나이: {a}세".format(n=name, a=age))

# 서식 지정
print("학점: {:.2f}".format(gpa))           # 학점: 3.85
print("번호: {:05d}".format(42))            # 번호: 00042
print("정렬: {:>10}".format("오른쪽"))       # 정렬:      오른쪽
print("정렬: {:<10}".format("왼쪽"))         # 정렬: 왼쪽
print("정렬: {:^10}".format("가운데"))       # 정렬:   가운데`}</code></pre>
          </div>

          <h3>7.3 f-string (권장, Python 3.6+)</h3>
          <p>
            <strong>f-string(formatted string literal)</strong>은 Python 3.6에서 도입된 가장 현대적이고 권장되는 방식입니다.
            문자열 앞에 <code>f</code>를 붙이고 중괄호 <code>{'{}'}</code> 안에 변수명이나 표현식을 직접 작성합니다.
            가독성이 뛰어나고 성능도 가장 우수합니다.
          </p>
          <div className="code-block">
            <div className="code-header">f-string 활용 (권장 방식)</div>
            <pre><code>{`name = "홍길동"
age = 20
gpa = 3.85

# 기본 사용
print(f"이름: {name}")
print(f"나이: {age}세")
print(f"내년 나이: {age + 1}세")    # 표현식 사용 가능!

# 소수점 자릿수 지정
print(f"학점: {gpa:.2f}")           # 학점: 3.85
print(f"학점: {gpa:.1f}")           # 학점: 3.9
pi = 3.141592653589793
print(f"원주율: {pi:.4f}")          # 원주율: 3.1416

# 정렬
print(f"{'이름':<10}{'점수':>10}")  # 이름              점수
print(f"{'홍길동':<10}{95:>10}")    # 홍길동              95
print(f"{'김영희':<10}{87:>10}")    # 김영희              87

# 천 단위 구분자
population = 51780000
print(f"인구: {population:,}명")    # 인구: 51,780,000명

# 퍼센트 표시
ratio = 0.856
print(f"비율: {ratio:.1%}")         # 비율: 85.6%

# 진법 변환
num = 255
print(f"10진수: {num}")             # 10진수: 255
print(f"2진수: {num:b}")            # 2진수: 11111111
print(f"8진수: {num:o}")            # 8진수: 377
print(f"16진수: {num:x}")           # 16진수: ff`}</code></pre>
          </div>

          <h3>7.4 3가지 방법 비교</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>% 연산자</th><th>str.format()</th><th>f-string</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>도입 시기</strong></td><td>Python 2 초기</td><td>Python 2.6</td><td>Python 3.6</td></tr>
              <tr><td><strong>문법</strong></td><td><code>"%s" % val</code></td><td><code>"{'{}'}".format(val)</code></td><td><code>f"{'{val}'}"</code></td></tr>
              <tr><td><strong>가독성</strong></td><td>보통</td><td>보통</td><td>매우 좋음</td></tr>
              <tr><td><strong>성능</strong></td><td>보통</td><td>보통</td><td>가장 빠름</td></tr>
              <tr><td><strong>표현식</strong></td><td>불가</td><td>제한적</td><td>자유롭게 사용</td></tr>
              <tr><td><strong>권장 여부</strong></td><td>레거시 코드</td><td>호환성 필요 시</td><td>신규 코드에 권장</td></tr>
            </tbody>
          </table>

          {/* ========== 종합 실습 ========== */}
          <h2>8. 종합 실습 예제</h2>

          <h3>8.1 자기소개 프로그램</h3>
          <div className="code-block">
            <div className="code-header">자기소개 프로그램</div>
            <pre><code>{`# 사용자 정보 입력
name = input("이름을 입력하세요: ")
department = input("학과를 입력하세요: ")
student_id = input("학번을 입력하세요: ")
hobby = input("취미를 입력하세요: ")

# 결과 출력 (f-string 활용)
print()
print("=" * 35)
print(f"{'자 기 소 개':^35}")
print("=" * 35)
print(f"  이름  : {name}")
print(f"  학과  : {department}")
print(f"  학번  : {student_id}")
print(f"  취미  : {hobby}")
print("=" * 35)
print(f"  {name}님, 반갑습니다!")
print("=" * 35)`}</code></pre>
          </div>

          <h3>8.2 간단 계산기</h3>
          <div className="code-block">
            <div className="code-header">간단 계산기</div>
            <pre><code>{`# 두 수 입력
num1 = float(input("첫 번째 숫자: "))
num2 = float(input("두 번째 숫자: "))

# 사칙연산 수행 및 결과 출력
print(f"\\n===== 계산 결과 =====")
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} × {num2} = {num1 * num2}")
if num2 != 0:
    print(f"{num1} ÷ {num2} = {num1 / num2:.2f}")
else:
    print("0으로 나눌 수 없습니다!")
print("=" * 22)`}</code></pre>
          </div>

          <h3>8.3 초를 분:초로 변환</h3>
          <div className="code-block">
            <div className="code-header">초 → 분:초 변환기</div>
            <pre><code>{`# 초 입력
total_seconds = int(input("초를 입력하세요: "))

# 분과 초 계산
minutes = total_seconds // 60     # 몫 = 분
seconds = total_seconds % 60      # 나머지 = 초

# 결과 출력
print(f"{total_seconds}초 = {minutes}분 {seconds}초")

# 실행 예시:
# 초를 입력하세요: 135
# 135초 = 2분 15초`}</code></pre>
          </div>

          {/* ========== 핵심 정리 ========== */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><code>print()</code> 함수의 <strong>sep</strong>으로 구분자를, <strong>end</strong>로 줄바꿈 여부를 제어한다.</li>
              <li>이스케이프 시퀀스(<code>\\n</code>, <code>\\t</code>, <code>\\\\</code> 등)로 특수 문자를 표현한다.</li>
              <li><strong>변수</strong>는 데이터를 저장하는 메모리 공간의 이름이며, 파이썬은 동적 타이핑을 지원한다.</li>
              <li>변수명은 <strong>snake_case</strong>, 의미 있는 이름, 영문자/밑줄로 시작해야 한다.</li>
              <li><code>input()</code>의 반환값은 <strong>항상 문자열</strong>이므로 숫자 연산 시 <code>int()</code>/<code>float()</code> 형변환 필수.</li>
              <li>문자열 포매팅은 <strong>f-string</strong>이 가장 권장되며, <code>f"{'{'}</code>변수<code>{'}'}"</code> 형태로 사용한다.</li>
              <li>파이썬의 <strong>다중 할당</strong>과 <strong>swap(a, b = b, a)</strong>은 코드를 간결하게 만들어 준다.</li>
            </ul>
          </div>

          {/* ========== 실습 과제 ========== */}
          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p><strong>과제 1.</strong> 사용자의 이름과 나이를 입력받아 다음과 같이 출력하는 프로그램을 작성하세요.</p>
            <div className="code-block">
              <div className="code-header">출력 예시</div>
              <pre><code>{`홍길동님은 20세이며, 태어난 해는 2006년입니다.`}</code></pre>
            </div>
            <p>힌트: 태어난 해 = 현재 연도 - 나이 + 1 (한국 나이 기준, 또는 - 나이)</p>
            <br/>
            <p><strong>과제 2.</strong> 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 결과를 출력하는 프로그램을 작성하세요.</p>
            <ul>
              <li>BMI = 몸무게(kg) / (키(m))²</li>
              <li>키는 cm 단위로 입력받아 m로 변환 필요</li>
              <li>BMI 결과는 소수점 둘째 자리까지 출력</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>심화 문제</h3>
            <p><strong>심화 1.</strong> 세 과목(국어, 영어, 수학)의 점수를 입력받아 다음 정보를 f-string으로 깔끔하게 출력하세요.</p>
            <ul>
              <li>각 과목 점수, 총점, 평균 (소수점 1자리)</li>
              <li>평균 기준 등급: 90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 60 미만 F</li>
              <li>표 형태로 정렬하여 출력 (f-string 정렬 기능 활용)</li>
            </ul>
            <p><strong>심화 2.</strong> 초(정수)를 입력받아 "O일 O시간 O분 O초" 형태로 변환하는 프로그램을 작성하세요.</p>
            <ul>
              <li>예: 100000초 → "1일 3시간 46분 40초"</li>
              <li>힌트: 1일 = 86400초, 1시간 = 3600초, 1분 = 60초</li>
              <li><code>//</code>(몫)과 <code>%</code>(나머지) 연산자 활용</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/python-learning/01" className="lesson-nav-btn prev">← 01: 실습환경</Link>
            <Link to="/python-learning/03" className="lesson-nav-btn next">03: Data Type →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PythonLesson02;
