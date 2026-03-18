import { Link } from 'react-router-dom';

const PythonLesson08 = () => (
  <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
    <section className="page-header">
      <div className="container">
        <h1>8주차: While 조건반복, For 횟수반복</h1>
        <p>반복문으로 효율적인 프로그래밍과 패턴 출력</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>반복문의 개념과 프로그래밍에서의 필요성을 이해한다</li>
              <li>while문과 for문의 차이점을 이해하고 적절히 선택하여 사용할 수 있다</li>
              <li>range() 함수의 다양한 형태를 활용할 수 있다</li>
              <li>break와 continue로 반복문의 흐름을 제어할 수 있다</li>
              <li>중첩 반복문을 사용하여 구구단과 별 찍기 패턴을 구현할 수 있다</li>
            </ul>
          </div>

          {/* ========== 1. 반복문이란? ========== */}
          <h2>1. 반복문이란?</h2>

          <h3>1-1. 프로그램의 반복 구조</h3>
          <p>
            프로그램의 3가지 제어 구조(순차, 선택, 반복) 중 마지막인 <strong>반복 구조(Repetition Structure)</strong>를 학습합니다.
            반복문은 특정 조건이 만족되는 동안 또는 정해진 횟수만큼 코드 블록을 반복 실행하는 구문입니다.
          </p>

          <h3>1-2. 반복문이 없다면?</h3>
          <p>
            만약 "안녕하세요"를 100번 출력해야 한다고 가정합시다. 반복문이 없다면
            <code>print("안녕하세요")</code>를 100줄 복사해야 합니다.
            1000번이라면? 10000번이라면? 이것은 비효율적이며 유지보수도 불가능합니다.
            반복문을 사용하면 단 3줄로 해결할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header">반복문의 필요성</div>
            <pre><code>{`# 반복문 없이 5번 출력 (비효율적)
print("안녕하세요")  # 1번째
print("안녕하세요")  # 2번째
print("안녕하세요")  # 3번째
print("안녕하세요")  # 4번째
print("안녕하세요")  # 5번째

# 반복문으로 5번 출력 (효율적!)
for i in range(5):
    print("안녕하세요")

# 100번, 1000번도 숫자만 바꾸면 됩니다!
for i in range(1000):
    print("안녕하세요")`}</code></pre>
          </div>

          <h3>1-3. 반복문의 구성 요소</h3>
          <p>모든 반복문은 다음 4가지 요소로 구성됩니다:</p>
          <table className="lesson-table">
            <thead>
              <tr><th>구성 요소</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>초기화</strong></td><td>반복에 사용할 변수의 초기값 설정</td><td><code>i = 1</code></td></tr>
              <tr><td><strong>조건</strong></td><td>반복을 계속할지 결정하는 조건식</td><td><code>i &lt;= 10</code></td></tr>
              <tr><td><strong>본문</strong></td><td>반복적으로 실행할 코드</td><td><code>print(i)</code></td></tr>
              <tr><td><strong>갱신</strong></td><td>반복 변수를 변경 (조건을 변화시킴)</td><td><code>i += 1</code></td></tr>
            </tbody>
          </table>
          <p>
            <strong>주의:</strong> 갱신을 잊으면 조건이 영원히 True로 유지되어 <strong>무한 루프(Infinite Loop)</strong>에 빠집니다.
            무한 루프에 빠지면 프로그램이 끝나지 않으므로, 실행 중 <code>Ctrl + C</code>로 강제 종료해야 합니다.
          </p>

          <h3>1-4. while vs for 선택 기준</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>상황</th><th>권장 반복문</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr><td>반복 횟수가 미리 정해진 경우</td><td><code>for</code></td><td>range()로 간결하게 표현</td></tr>
              <tr><td>반복 횟수를 모르는 경우</td><td><code>while</code></td><td>조건으로 종료 시점 결정</td></tr>
              <tr><td>시퀀스 순회 (리스트, 문자열)</td><td><code>for</code></td><td>자동으로 요소를 하나씩 꺼냄</td></tr>
              <tr><td>사용자 입력 대기</td><td><code>while</code></td><td>언제 종료할지 알 수 없음</td></tr>
              <tr><td>무한 반복 필요</td><td><code>while True</code></td><td>break로 탈출 조건 설정</td></tr>
            </tbody>
          </table>

          {/* ========== 2. while문 ========== */}
          <h2>2. while문 (조건 반복)</h2>

          <h3>2-1. while문의 문법</h3>
          <p>
            <code>while</code>문은 조건식이 <code>True</code>인 동안 코드 블록을 반복 실행합니다.
            조건식이 <code>False</code>가 되면 반복이 종료됩니다.
          </p>
          <div className="code-block">
            <div className="code-header">while문 문법</div>
            <pre><code>{`# 기본 문법
while 조건식:
    반복할 코드
    ...

# 동작 원리:
# 1단계: 조건식 검사 → True이면 본문 실행
# 2단계: 본문 실행 완료 → 다시 조건식 검사
# 3단계: True이면 다시 본문 실행 (반복)
# ...
# N단계: 조건식이 False → 반복 종료, while 다음 코드로 이동`}</code></pre>
          </div>

          <h3>2-2. while문과 순서도</h3>
          <p>
            while문은 순서도에서 다이아몬드(판단) 기호와 흐름선의 되돌아감으로 표현됩니다.
            조건이 True이면 본문을 실행하고 다시 조건으로 돌아가며,
            False이면 반복을 빠져나갑니다.
          </p>

          <h3>2-3. while문 기본 예제</h3>
          <div className="code-block">
            <div className="code-header">예제 1: 1부터 5까지 출력</div>
            <pre><code>{`i = 1           # 초기화

while i <= 5:   # 조건: i가 5 이하인 동안
    print(i)    # 본문: i 출력
    i += 1      # 갱신: i를 1 증가

print("반복 종료")

# 실행 과정:
# i=1 → 1<=5? True → 1 출력 → i=2
# i=2 → 2<=5? True → 2 출력 → i=3
# i=3 → 3<=5? True → 3 출력 → i=4
# i=4 → 4<=5? True → 4 출력 → i=5
# i=5 → 5<=5? True → 5 출력 → i=6
# i=6 → 6<=5? False → 반복 종료`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header">예제 2: 1부터 100까지 합계</div>
            <pre><code>{`# 1 + 2 + 3 + ... + 100 = ?
total = 0  # 합계를 저장할 변수 (누적 변수)
i = 1      # 반복 변수

while i <= 100:
    total += i   # total = total + i
    i += 1       # i = i + 1

print(f"1부터 100까지의 합: {total}")  # 5050

# 가우스의 공식: n(n+1)/2 = 100*101/2 = 5050`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header">예제 3: 카운트다운</div>
            <pre><code>{`count = 10

print("카운트다운 시작!")
while count > 0:
    print(count, end="... ")
    count -= 1   # count = count - 1

print("\\n발사! 🚀")

# 출력: 카운트다운 시작!
# 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...
# 발사! 🚀`}</code></pre>
          </div>

          <h3>2-4. 사용자 입력 반복</h3>
          <div className="code-block">
            <div className="code-header">예제 4: 특정 값 입력 시 종료</div>
            <pre><code>{`# "quit"을 입력할 때까지 반복
print("메시지를 입력하세요 ('quit' 입력 시 종료)")

message = ""  # 초기값 설정

while message != "quit":
    message = input(">>> ")
    if message != "quit":
        print(f"입력한 메시지: {message}")

print("프로그램을 종료합니다.")

# 실행 예시:
# 메시지를 입력하세요 ('quit' 입력 시 종료)
# >>> 안녕하세요
# 입력한 메시지: 안녕하세요
# >>> 파이썬 공부중
# 입력한 메시지: 파이썬 공부중
# >>> quit
# 프로그램을 종료합니다.`}</code></pre>
          </div>

          <h3>2-5. 무한 루프와 while True</h3>
          <div className="code-block">
            <div className="code-header">예제 5: 비밀번호 맞추기 (3회 기회)</div>
            <pre><code>{`correct_pw = "python123"
max_attempts = 3
attempt = 0

print(f"비밀번호를 입력하세요 (최대 {max_attempts}회)")

while attempt < max_attempts:
    attempt += 1
    pw = input(f"[{attempt}/{max_attempts}] 비밀번호: ")

    if pw == correct_pw:
        print("로그인 성공!")
        break  # 반복 즉시 종료
    else:
        remaining = max_attempts - attempt
        if remaining > 0:
            print(f"틀렸습니다. {remaining}회 남음")
        else:
            print("모든 기회를 소진했습니다. 계정이 잠깁니다.")

# 실행 예시:
# 비밀번호를 입력하세요 (최대 3회)
# [1/3] 비밀번호: 1234
# 틀렸습니다. 2회 남음
# [2/3] 비밀번호: python123
# 로그인 성공!`}</code></pre>
          </div>

          <h3>2-6. 무한 루프 주의</h3>
          <div className="code-block">
            <div className="code-header">무한 루프의 원인과 해결</div>
            <pre><code>{`# ✗ 무한 루프 - 갱신을 잊은 경우
# i = 1
# while i <= 5:
#     print(i)
#     # i += 1 을 빼먹음! → i가 계속 1 → 무한 반복

# ✗ 무한 루프 - 조건이 항상 True인 경우
# while True:
#     print("멈출 수 없어요...")
#     # break가 없으면 영원히 반복!

# ✓ 올바른 while True 사용법 (break 필수)
while True:
    user = input("종료하려면 'q'를 입력: ")
    if user == "q":
        break       # 반복 탈출
    print(f"입력: {user}")

print("종료되었습니다.")`}</code></pre>
          </div>

          {/* ========== 3. for문 ========== */}
          <h2>3. for문 (횟수 반복)</h2>

          <h3>3-1. for문의 문법</h3>
          <p>
            <code>for</code>문은 시퀀스(순서가 있는 자료)의 요소를 하나씩 꺼내어 반복합니다.
            반복 횟수가 정해져 있거나, 시퀀스의 각 요소를 처리할 때 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">for문 문법</div>
            <pre><code>{`# 기본 문법
for 변수 in 시퀀스:
    반복할 코드
    ...

# 시퀀스: range(), 문자열, 리스트, 튜플 등
# 변수: 시퀀스에서 꺼낸 현재 요소가 저장되는 변수

# 동작 원리:
# 1. 시퀀스에서 첫 번째 요소를 꺼내 변수에 대입 → 본문 실행
# 2. 시퀀스에서 두 번째 요소를 꺼내 변수에 대입 → 본문 실행
# 3. ...
# N. 시퀀스의 마지막 요소까지 실행 → 반복 종료`}</code></pre>
          </div>

          <h3>3-2. range()와 함께 사용</h3>
          <div className="code-block">
            <div className="code-header">for문과 range() 기본</div>
            <pre><code>{`# range(n): 0부터 n-1까지
print("range(5):")
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
print()

# range(start, stop): start부터 stop-1까지
print("range(1, 6):")
for i in range(1, 6):
    print(i, end=" ")  # 1 2 3 4 5
print()

# range(start, stop, step): step 간격으로
print("range(0, 10, 2):")
for i in range(0, 10, 2):
    print(i, end=" ")  # 0 2 4 6 8
print()

# 역순: range(n, 0, -1)
print("range(5, 0, -1):")
for i in range(5, 0, -1):
    print(i, end=" ")  # 5 4 3 2 1
print()`}</code></pre>
          </div>

          <h3>3-3. 문자열 순회</h3>
          <div className="code-block">
            <div className="code-header">문자열을 for문으로 순회</div>
            <pre><code>{`# 문자열의 각 문자를 하나씩 출력
word = "Python"
for char in word:
    print(char, end=" ")
# P y t h o n

print()

# 문자열에서 모음 개수 세기
text = "Hello World"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"'{text}'에서 모음 개수: {count}개")  # 3개`}</code></pre>
          </div>

          <h3>3-4. 리스트 순회</h3>
          <div className="code-block">
            <div className="code-header">리스트를 for문으로 순회</div>
            <pre><code>{`# 리스트의 각 요소를 하나씩 처리
fruits = ["사과", "바나나", "포도", "딸기", "수박"]

for fruit in fruits:
    print(f"과일: {fruit}")

# 출력:
# 과일: 사과
# 과일: 바나나
# 과일: 포도
# 과일: 딸기
# 과일: 수박

# 숫자 리스트의 합계
numbers = [10, 20, 30, 40, 50]
total = 0

for num in numbers:
    total += num

print(f"합계: {total}")  # 150`}</code></pre>
          </div>

          {/* ========== 4. range() 함수 완전 정복 ========== */}
          <h2>4. range() 함수 완전 정복</h2>

          <h3>4-1. range()의 세 가지 형태</h3>
          <p>
            <code>range()</code> 함수는 연속된 정수 시퀀스를 생성합니다. for문에서 가장 많이 사용되는 함수입니다.
          </p>
          <table className="lesson-table">
            <thead>
              <tr><th>형태</th><th>설명</th><th>생성되는 값</th></tr>
            </thead>
            <tbody>
              <tr><td><code>range(5)</code></td><td>0부터 4까지</td><td>0, 1, 2, 3, 4</td></tr>
              <tr><td><code>range(1, 6)</code></td><td>1부터 5까지</td><td>1, 2, 3, 4, 5</td></tr>
              <tr><td><code>range(0, 10, 2)</code></td><td>0부터 8까지 2씩 증가</td><td>0, 2, 4, 6, 8</td></tr>
              <tr><td><code>range(10, 0, -1)</code></td><td>10부터 1까지 역순</td><td>10, 9, 8, ..., 2, 1</td></tr>
              <tr><td><code>range(10, 0, -2)</code></td><td>10부터 2까지 2씩 감소</td><td>10, 8, 6, 4, 2</td></tr>
              <tr><td><code>range(1, 1)</code></td><td>시작 == 끝</td><td>(빈 시퀀스, 아무것도 없음)</td></tr>
            </tbody>
          </table>

          <h3>4-2. range()의 중요한 특성</h3>
          <ul>
            <li><strong>끝값(stop)은 포함되지 않습니다:</strong> <code>range(1, 5)</code>는 1, 2, 3, 4 (5는 미포함)</li>
            <li><strong>정수만 사용 가능:</strong> <code>range(0.5, 5.5)</code>는 오류 (실수 불가)</li>
            <li><strong>메모리 효율:</strong> <code>range()</code>는 즉시 리스트를 생성하지 않고, 필요할 때 값을 하나씩 생성합니다 (지연 평가, Lazy Evaluation)</li>
            <li><code>list(range(...))</code>로 리스트로 변환할 수 있습니다</li>
          </ul>
          <div className="code-block">
            <div className="code-header">range()를 리스트로 변환</div>
            <pre><code>{`# range 객체 자체는 리스트가 아님
print(range(5))         # range(0, 5)
print(type(range(5)))   # <class 'range'>

# list()로 변환하면 내용을 확인 가능
print(list(range(5)))         # [0, 1, 2, 3, 4]
print(list(range(1, 6)))      # [1, 2, 3, 4, 5]
print(list(range(0, 10, 2)))  # [0, 2, 4, 6, 8]
print(list(range(10, 0, -1))) # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print(list(range(10, 0, -3))) # [10, 7, 4, 1]

# 메모리 효율 비교
# range(1000000) → 메모리 거의 안 씀 (range 객체 1개)
# list(range(1000000)) → 리스트 100만 개 생성 (메모리 많이 사용)`}</code></pre>
          </div>

          <h3>4-3. range() 활용 예제</h3>
          <div className="code-block">
            <div className="code-header">range() 다양한 활용</div>
            <pre><code>{`# 1부터 N까지의 합
n = 100
total = 0
for i in range(1, n + 1):  # 1부터 100까지
    total += i
print(f"1~{n} 합계: {total}")  # 5050

# 짝수만 출력
print("1~20 사이 짝수:", end=" ")
for i in range(2, 21, 2):  # 2부터 20까지, 2씩 증가
    print(i, end=" ")
print()  # 2 4 6 8 10 12 14 16 18 20

# 홀수만 출력
print("1~20 사이 홀수:", end=" ")
for i in range(1, 21, 2):  # 1부터 20까지, 2씩 증가
    print(i, end=" ")
print()  # 1 3 5 7 9 11 13 15 17 19

# 역순 카운트다운
for i in range(10, 0, -1):
    print(i, end=" ")
print("발사!")  # 10 9 8 7 6 5 4 3 2 1 발사!`}</code></pre>
          </div>

          {/* ========== 5. break와 continue ========== */}
          <h2>5. break와 continue</h2>

          <h3>5-1. break: 반복문 즉시 탈출</h3>
          <p>
            <code>break</code>는 반복문을 즉시 종료하고 반복문 바깥으로 빠져나갑니다.
            특정 조건에서 더 이상 반복할 필요가 없을 때 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">while에서 break</div>
            <pre><code>{`# 숫자 맞추기 게임
import random

secret = random.randint(1, 50)  # 1~50 사이 랜덤 숫자
attempts = 0

print("1~50 사이의 숫자를 맞춰보세요!")

while True:  # 무한 루프
    guess = int(input("추측: "))
    attempts += 1

    if guess == secret:
        print(f"정답입니다! {attempts}번 만에 맞추었습니다!")
        break   # ← 정답이면 반복 종료
    elif guess < secret:
        print("더 큰 수입니다. ↑")
    else:
        print("더 작은 수입니다. ↓")`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header">for에서 break</div>
            <pre><code>{`# 리스트에서 특정 값 찾기
numbers = [4, 7, 2, 9, 1, 8, 3, 6]
target = 9

for i, num in enumerate(numbers):
    if num == target:
        print(f"{target}을(를) 인덱스 {i}에서 찾았습니다!")
        break   # 찾으면 더 이상 검색할 필요 없음
else:
    # for-else: break 없이 정상 종료되면 실행
    print(f"{target}을(를) 찾지 못했습니다.")

# 출력: 9을(를) 인덱스 3에서 찾았습니다!`}</code></pre>
          </div>

          <h3>5-2. continue: 현재 반복 건너뛰기</h3>
          <p>
            <code>continue</code>는 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 넘어갑니다.
            특정 조건에서 코드 실행을 생략할 때 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">continue 예제</div>
            <pre><code>{`# 홀수만 출력 (짝수는 건너뛰기)
print("1~10 사이 홀수:")
for i in range(1, 11):
    if i % 2 == 0:
        continue    # 짝수이면 아래 코드를 건너뛰고 다음 반복
    print(i, end=" ")
print()  # 1 3 5 7 9

# 특정 값 제외하기
print("\\n3의 배수를 제외한 1~20:")
for i in range(1, 21):
    if i % 3 == 0:
        continue    # 3의 배수이면 건너뛰기
    print(i, end=" ")
print()  # 1 2 4 5 7 8 10 11 13 14 16 17 19 20`}</code></pre>
          </div>

          <h3>5-3. break vs continue 비교</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>구분</th><th>break</th><th>continue</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>동작</strong></td><td>반복문 전체를 즉시 종료</td><td>현재 반복만 건너뛰고 다음 반복으로</td></tr>
              <tr><td><strong>실행 위치</strong></td><td>반복문 바깥으로 이동</td><td>반복문의 조건 검사로 이동</td></tr>
              <tr><td><strong>사용 예</strong></td><td>원하는 값을 찾았을 때</td><td>특정 조건을 제외할 때</td></tr>
              <tr><td><strong>중첩 시</strong></td><td>가장 안쪽 반복문만 탈출</td><td>가장 안쪽 반복문의 현재 반복만 건너뜀</td></tr>
            </tbody>
          </table>
          <div className="code-block">
            <div className="code-header">break와 continue 비교 예제</div>
            <pre><code>{`# break: 5를 만나면 반복 완전 종료
print("break 예제:")
for i in range(1, 11):
    if i == 5:
        break
    print(i, end=" ")
print()  # 1 2 3 4 (5부터 출력 안됨, 반복 자체가 종료)

# continue: 5를 만나면 건너뛰고 계속
print("continue 예제:")
for i in range(1, 11):
    if i == 5:
        continue
    print(i, end=" ")
print()  # 1 2 3 4 6 7 8 9 10 (5만 빠지고 나머지는 출력)`}</code></pre>
          </div>

          <h3>5-4. 중첩 반복문에서의 break</h3>
          <p>
            <strong>중요:</strong> <code>break</code>는 가장 안쪽 반복문만 탈출합니다.
            바깥 반복문까지 종료하려면 별도의 플래그 변수나 함수를 사용해야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header">중첩 반복문에서 break</div>
            <pre><code>{`# break는 가장 안쪽 반복문만 종료
for i in range(1, 4):
    print(f"바깥 루프 i={i}")
    for j in range(1, 4):
        if j == 2:
            break   # 안쪽 for문만 종료
        print(f"  안쪽 루프 j={j}")

# 출력:
# 바깥 루프 i=1
#   안쪽 루프 j=1
# 바깥 루프 i=2
#   안쪽 루프 j=1
# 바깥 루프 i=3
#   안쪽 루프 j=1`}</code></pre>
          </div>

          {/* ========== 6. for-else와 while-else ========== */}
          <h2>6. for-else와 while-else</h2>
          <p>
            파이썬에는 다른 언어에 없는 독특한 문법인 <strong>반복문-else</strong> 구조가 있습니다.
            <code>else</code> 블록은 반복문이 <strong>break 없이 정상 종료</strong>되었을 때 실행됩니다.
            break로 종료된 경우에는 else 블록이 실행되지 않습니다.
          </p>
          <div className="code-block">
            <div className="code-header">소수 판별에서 for-else 활용</div>
            <pre><code>{`num = int(input("양의 정수를 입력하세요: "))

if num < 2:
    print(f"{num}은(는) 소수가 아닙니다.")
else:
    for i in range(2, num):
        if num % i == 0:
            print(f"{num}은(는) 소수가 아닙니다. ({i}로 나누어짐)")
            break
    else:
        # break 없이 for문이 끝남 = 나누어지는 수가 없음 = 소수
        print(f"{num}은(는) 소수입니다!")

# 실행 예시:
# 양의 정수를 입력하세요: 17
# 17은(는) 소수입니다!
#
# 양의 정수를 입력하세요: 12
# 12은(는) 소수가 아닙니다. (2로 나누어짐)`}</code></pre>
          </div>

          {/* ========== 7. 누적 패턴 ========== */}
          <h2>7. 누적(Accumulation) 패턴</h2>
          <p>
            반복문에서 가장 많이 사용되는 패턴 중 하나가 <strong>누적 패턴</strong>입니다.
            변수에 값을 계속 더하거나(합계), 횟수를 세거나(카운트), 최대/최소를 갱신하는 패턴입니다.
          </p>

          <h3>7-1. 합계 구하기 패턴</h3>
          <div className="code-block">
            <div className="code-header">합계 누적 패턴</div>
            <pre><code>{`# 패턴: total = 0 → 반복하며 total += 값
# 1부터 N까지 합
n = int(input("N을 입력하세요: "))

total = 0                  # ① 누적 변수 초기화 (0)
for i in range(1, n + 1):
    total += i             # ② 반복하며 누적

print(f"1~{n} 합계: {total}")  # ③ 결과 출력

# 사용자가 입력한 숫자들의 합
print("숫자를 입력하세요 (0 입력 시 종료)")
total = 0
while True:
    num = int(input("숫자: "))
    if num == 0:
        break
    total += num

print(f"입력한 숫자의 합: {total}")`}</code></pre>
          </div>

          <h3>7-2. 개수 세기 패턴</h3>
          <div className="code-block">
            <div className="code-header">카운트 패턴</div>
            <pre><code>{`# 패턴: count = 0 → 조건 만족 시 count += 1
# 1~100에서 3의 배수 개수
count = 0                    # ① 카운트 변수 초기화 (0)
for i in range(1, 101):
    if i % 3 == 0:
        count += 1           # ② 조건 만족 시 카운트

print(f"1~100에서 3의 배수 개수: {count}개")  # 33개

# 문자열에서 특정 문자 개수 세기
text = "프로그래밍은 재미있고 유용합니다"
target = "미"
count = 0

for char in text:
    if char == target:
        count += 1

print(f"'{text}'에서 '{target}'의 개수: {count}개")`}</code></pre>
          </div>

          <h3>7-3. 최대/최소 찾기 패턴</h3>
          <div className="code-block">
            <div className="code-header">최대값, 최소값 찾기</div>
            <pre><code>{`# 패턴: 첫 값으로 초기화 → 더 큰(작은) 값 발견 시 갱신
numbers = [45, 23, 78, 12, 91, 34, 67]

# 최대값 찾기
max_val = numbers[0]         # ① 첫 번째 값으로 초기화
for num in numbers:
    if num > max_val:
        max_val = num        # ② 더 큰 값 발견 시 갱신

print(f"최대값: {max_val}")  # 91

# 최소값 찾기
min_val = numbers[0]
for num in numbers:
    if num < min_val:
        min_val = num

print(f"최소값: {min_val}")  # 12`}</code></pre>
          </div>

          <h3>7-4. 문자열 누적 패턴</h3>
          <div className="code-block">
            <div className="code-header">문자열 누적</div>
            <pre><code>{`# 패턴: result = "" → 반복하며 result += 문자
# 문자열 뒤집기
original = "Python"
reversed_str = ""             # ① 빈 문자열로 초기화

for char in original:
    reversed_str = char + reversed_str  # ② 앞에 추가

print(f"원본: {original}")
print(f"뒤집기: {reversed_str}")  # nohtyP

# 문자열에서 모음 제거
text = "Hello World"
result = ""

for char in text:
    if char.lower() not in "aeiou":
        result += char

print(f"모음 제거: {result}")  # Hll Wrld`}</code></pre>
          </div>

          {/* ========== 8. 중첩 반복문 ========== */}
          <h2>8. 중첩 반복문 (Nested Loop)</h2>

          <h3>8-1. 이중 for문의 동작 원리</h3>
          <p>
            반복문 안에 또 다른 반복문을 넣는 것을 <strong>중첩 반복문</strong>이라고 합니다.
            바깥 반복문이 1번 실행될 때마다, 안쪽 반복문은 처음부터 끝까지 전체를 실행합니다.
          </p>
          <div className="code-block">
            <div className="code-header">이중 for문 동작 이해</div>
            <pre><code>{`# 바깥 루프가 1회 실행될 때, 안쪽 루프는 전체가 실행됨
for i in range(1, 4):       # 바깥: 1, 2, 3
    for j in range(1, 4):   # 안쪽: 1, 2, 3 (매번 처음부터)
        print(f"(i={i}, j={j})", end="  ")
    print()  # 바깥 루프 한 바퀴 끝 → 줄바꿈

# 출력:
# (i=1, j=1)  (i=1, j=2)  (i=1, j=3)
# (i=2, j=1)  (i=2, j=2)  (i=2, j=3)
# (i=3, j=1)  (i=3, j=2)  (i=3, j=3)
# → 총 3 x 3 = 9번 실행`}</code></pre>
          </div>

          <h3>8-2. 구구단 출력</h3>
          <div className="code-block">
            <div className="code-header">구구단 (2단~9단)</div>
            <pre><code>{`# 특정 단 출력
dan = 7
print(f"=== {dan}단 ===")
for i in range(1, 10):
    print(f"{dan} x {i} = {dan * i}")

print()

# 전체 구구단 (2단~9단)
for dan in range(2, 10):         # 바깥: 2단~9단
    print(f"--- {dan}단 ---")
    for i in range(1, 10):       # 안쪽: 1~9
        print(f"{dan} x {i} = {dan * i}")
    print()  # 단 사이 빈 줄`}</code></pre>
          </div>

          <h3>8-3. 별(*) 찍기 패턴</h3>
          <p>
            중첩 반복문의 대표적인 연습 문제가 별 찍기 패턴입니다.
            각 패턴은 바깥 루프(행)와 안쪽 루프(열)로 구성됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">패턴 1: 직각삼각형 (왼쪽 정렬)</div>
            <pre><code>{`# n = 5
# *
# **
# ***
# ****
# *****

n = 5
for i in range(1, n + 1):   # 행: 1~5
    for j in range(i):       # 열: i개만큼 * 출력
        print("*", end="")
    print()  # 줄바꿈

# 또는 간단하게:
for i in range(1, n + 1):
    print("*" * i)`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">패턴 2: 역직각삼각형</div>
            <pre><code>{`# n = 5
# *****
# ****
# ***
# **
# *

n = 5
for i in range(n, 0, -1):   # 행: 5~1 (역순)
    for j in range(i):       # 열: i개만큼 * 출력
        print("*", end="")
    print()

# 또는 간단하게:
for i in range(n, 0, -1):
    print("*" * i)`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">패턴 3: 피라미드 (가운데 정렬)</div>
            <pre><code>{`# n = 5
#     *        (공백4개, 별1개)
#    ***       (공백3개, 별3개)
#   *****      (공백2개, 별5개)
#  *******     (공백1개, 별7개)
# *********    (공백0개, 별9개)

n = 5
for i in range(1, n + 1):
    # 공백: (n - i)개
    # 별:   (2*i - 1)개
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)

# i=1: 공백4 + 별1   = "    *"
# i=2: 공백3 + 별3   = "   ***"
# i=3: 공백2 + 별5   = "  *****"
# i=4: 공백1 + 별7   = " *******"
# i=5: 공백0 + 별9   = "*********"`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">패턴 4: 역피라미드</div>
            <pre><code>{`# n = 5
# *********    (공백0개, 별9개)
#  *******     (공백1개, 별7개)
#   *****      (공백2개, 별5개)
#    ***       (공백3개, 별3개)
#     *        (공백4개, 별1개)

n = 5
for i in range(n, 0, -1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">패턴 5: 다이아몬드</div>
            <pre><code>{`# n = 5 (상단 높이)
#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

n = 5

# 상단 (피라미드)
for i in range(1, n + 1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)

# 하단 (역피라미드, 가운데 줄 제외)
for i in range(n - 1, 0, -1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)`}</code></pre>
          </div>

          {/* ========== 9. while vs for 비교 총정리 ========== */}
          <h2>9. while vs for 비교 총정리</h2>

          <table className="lesson-table">
            <thead>
              <tr><th>비교 항목</th><th>while문</th><th>for문</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>용도</strong></td><td>조건이 만족되는 동안 반복</td><td>정해진 횟수만큼 또는 시퀀스 순회</td></tr>
              <tr><td><strong>반복 횟수</strong></td><td>미리 알 수 없는 경우</td><td>미리 정해진 경우</td></tr>
              <tr><td><strong>종료 조건</strong></td><td>조건식이 False가 될 때</td><td>시퀀스의 모든 요소를 처리했을 때</td></tr>
              <tr><td><strong>무한 루프</strong></td><td>가능 (while True)</td><td>불가능 (시퀀스 길이로 제한)</td></tr>
              <tr><td><strong>초기화/갱신</strong></td><td>직접 작성해야 함</td><td>자동으로 처리됨</td></tr>
              <tr><td><strong>주의사항</strong></td><td>갱신 누락 시 무한 루프</td><td>range() 범위 설정 주의</td></tr>
              <tr><td><strong>대표 사용처</strong></td><td>입력 대기, 게임 루프, 검증</td><td>구구단, 리스트 처리, 횟수 반복</td></tr>
            </tbody>
          </table>

          <h3>같은 문제를 while과 for로 각각 구현</h3>
          <div className="code-block">
            <div className="code-header">1~10 합계: while vs for</div>
            <pre><code>{`# ── while문 버전 ──
total = 0
i = 1                # 초기화 (직접)
while i <= 10:       # 조건 (직접)
    total += i
    i += 1           # 갱신 (직접)
print(f"while 합계: {total}")  # 55

# ── for문 버전 ──
total = 0
for i in range(1, 11):  # 초기화 + 조건 + 갱신 (자동)
    total += i
print(f"for 합계: {total}")    # 55

# → for문이 더 간결하고, 무한 루프 위험이 없음
# → 횟수가 정해진 반복에는 for문이 적합!`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">사용자 입력 처리: while이 적합한 경우</div>
            <pre><code>{`# 이 문제는 while이 적합 (반복 횟수를 모름)
total = 0
count = 0

print("숫자를 입력하세요 (음수 입력 시 종료)")
while True:
    num = int(input("숫자: "))
    if num < 0:
        break
    total += num
    count += 1

if count > 0:
    avg = total / count
    print(f"\\n입력 개수: {count}개")
    print(f"합계: {total}")
    print(f"평균: {avg:.1f}")
else:
    print("입력된 숫자가 없습니다.")`}</code></pre>
          </div>

          {/* ========== 10. 종합 실습 예제 ========== */}
          <h2>10. 종합 실습 예제</h2>

          <h3>예제 1: 구구단 전체 출력 (가로 형태)</h3>
          <p>
            <strong>문제:</strong> 2단부터 9단까지 구구단을 가로 형태로 깔끔하게 출력합니다.
          </p>
          <div className="code-block">
            <div className="code-header">구구단 가로 출력</div>
            <pre><code>{`# 가로 형태 구구단 (2~9단을 나란히)
print("=" * 72)
print(" " * 25 + "< 구 구 단 >")
print("=" * 72)

for i in range(1, 10):           # 곱하는 수: 1~9
    for dan in range(2, 10):     # 단: 2~9
        print(f"{dan}x{i}={dan*i:2d}", end="  ")
    print()  # 한 줄 끝나면 줄바꿈

print("=" * 72)

# 출력 예시:
# ========================================================================
#                          < 구 구 단 >
# ========================================================================
# 2x1= 2  3x1= 3  4x1= 4  5x1= 5  6x1= 6  7x1= 7  8x1= 8  9x1= 9
# 2x2= 4  3x2= 6  4x2= 8  5x2=10  6x2=12  7x2=14  8x2=16  9x2=18
# ...
# 2x9=18  3x9=27  4x9=36  5x9=45  6x9=54  7x9=63  8x9=72  9x9=81
# ========================================================================`}</code></pre>
          </div>

          <h3>예제 2: 약수 구하기</h3>
          <p>
            <strong>문제:</strong> 사용자가 입력한 양의 정수의 모든 약수를 구하고, 약수의 개수와 합을 출력합니다.
          </p>
          <div className="code-block">
            <div className="code-header">약수 구하기 프로그램</div>
            <pre><code>{`num = int(input("양의 정수를 입력하세요: "))

divisors = []      # 약수를 저장할 리스트
count = 0          # 약수 개수
total = 0          # 약수 합계

for i in range(1, num + 1):
    if num % i == 0:       # i로 나누어 떨어지면 약수
        divisors.append(i)
        count += 1
        total += i

print(f"\\n{num}의 약수: {divisors}")
print(f"약수의 개수: {count}개")
print(f"약수의 합: {total}")

# 완전수 판별 (자기 자신을 제외한 약수의 합 == 자기 자신)
if total - num == num:
    print(f"{num}은(는) 완전수입니다!")

# 실행 예시:
# 양의 정수를 입력하세요: 28
#
# 28의 약수: [1, 2, 4, 7, 14, 28]
# 약수의 개수: 6개
# 약수의 합: 56
# 28은(는) 완전수입니다!`}</code></pre>
          </div>

          <h3>예제 3: 소수 판별 (에라토스테네스의 체)</h3>
          <p>
            <strong>문제:</strong> 2부터 N까지의 모든 소수를 구합니다.
            <strong>에라토스테네스의 체(Sieve of Eratosthenes)</strong>는 고대 그리스 수학자 에라토스테네스가
            고안한 효율적인 소수 판별 알고리즘입니다.
          </p>
          <p>
            <strong>원리:</strong> 2부터 시작하여 각 소수의 배수를 지워나가면, 남는 수가 모두 소수입니다.
          </p>
          <div className="code-block">
            <div className="code-header">에라토스테네스의 체</div>
            <pre><code>{`n = int(input("N을 입력하세요: "))

# 0~N까지의 소수 여부를 저장 (True=소수, False=소수 아님)
is_prime = [True] * (n + 1)
is_prime[0] = False  # 0은 소수가 아님
is_prime[1] = False  # 1은 소수가 아님

# 에라토스테네스의 체
for i in range(2, int(n ** 0.5) + 1):  # 2부터 √N까지
    if is_prime[i]:
        # i의 배수를 모두 False로 (소수 아님)
        for j in range(i * 2, n + 1, i):
            is_prime[j] = False

# 소수 목록 출력
primes = []
for i in range(2, n + 1):
    if is_prime[i]:
        primes.append(i)

print(f"\\n2~{n} 사이의 소수 ({len(primes)}개):")
print(primes)

# 실행 예시:
# N을 입력하세요: 50
#
# 2~50 사이의 소수 (15개):
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]`}</code></pre>
          </div>

          {/* ========== 11. 자주 하는 실수 ========== */}
          <div className="callout-box">
            <h3>자주 하는 실수</h3>
            <ul>
              <li>
                <strong>while문에서 변수 갱신 누락:</strong> <code>i += 1</code>을 잊으면 무한 루프에 빠집니다.
                while문을 작성할 때는 항상 반복 변수의 갱신을 확인하세요.
              </li>
              <li>
                <strong>range() 범위 오류 (Off-by-one Error):</strong> <code>range(1, 10)</code>은
                1~9까지이며 10은 포함되지 않습니다. 10을 포함하려면 <code>range(1, 11)</code>로 써야 합니다.
              </li>
              <li>
                <strong>for 변수를 반복문 내에서 변경:</strong> <code>for i in range(5)</code>에서
                반복문 본문 안에서 <code>i = 10</code>으로 변경해도 다음 반복에서 range()가
                제공하는 다음 값으로 덮어씌워집니다. for문의 반복 변수를 직접 수정하는 것은 의미가 없습니다.
              </li>
              <li>
                <strong>중첩 반복문 들여쓰기 혼동:</strong> 이중 for문에서 어떤 코드가 바깥 루프에 속하고
                어떤 코드가 안쪽 루프에 속하는지 들여쓰기를 정확히 맞춰야 합니다.
              </li>
            </ul>
          </div>

          {/* ========== 핵심 정리 ========== */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><strong>반복문</strong>은 코드를 반복 실행하는 제어 구조이며, 효율적인 프로그래밍의 핵심이다</li>
              <li><strong>while문</strong>은 조건이 True인 동안 반복하며, 반복 횟수를 모를 때 적합하다</li>
              <li><strong>for문</strong>은 시퀀스를 순회하며 반복하고, 반복 횟수가 정해진 경우에 적합하다</li>
              <li><strong>range(start, stop, step)</strong>은 연속된 정수 시퀀스를 생성하며, stop은 포함되지 않는다</li>
              <li><strong>break</strong>는 반복문을 즉시 종료하고, <strong>continue</strong>는 현재 반복만 건너뛴다</li>
              <li><strong>for-else/while-else</strong>에서 else는 break 없이 정상 종료되었을 때 실행된다</li>
              <li><strong>누적 패턴</strong>(합계, 카운트, 최대/최소, 문자열 누적)은 반복문에서 가장 자주 사용되는 패턴이다</li>
              <li><strong>중첩 반복문</strong>에서 바깥 루프 1회 실행 시 안쪽 루프 전체가 실행된다</li>
              <li>while문에서는 반복 변수 <strong>갱신을 반드시</strong> 포함해야 무한 루프를 방지한다</li>
            </ul>
          </div>

          {/* ========== 실습 과제 ========== */}
          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p><strong>과제 1: 구구단 전체 가로 형태 출력</strong></p>
            <p>
              2단부터 9단까지 구구단을 가로 형태로 출력하는 프로그램을 작성하세요.
              각 단이 열로 나란히 배치되도록 하며, 포맷을 깔끔하게 정렬하세요.
              (위 종합 실습 예제 1 참고)
            </p>

            <p><strong>과제 2: 다이아몬드 별 찍기</strong></p>
            <p>
              사용자로부터 높이(홀수)를 입력받아 다이아몬드 모양을 출력하세요.
              상단은 피라미드, 하단은 역피라미드로 구성됩니다.
              입력값이 짝수이면 1을 더하여 홀수로 변환 후 출력하세요.
            </p>
          </div>

          {/* ========== 심화 문제 ========== */}
          <div className="exercise-box">
            <h3>심화 문제</h3>
            <p><strong>심화 1: 소인수분해 프로그램</strong></p>
            <p>
              사용자로부터 2 이상의 양의 정수를 입력받아 소인수분해 결과를 출력하세요.<br/>
              예: 60을 입력하면 "60 = 2 x 2 x 3 x 5" 또는 "60 = 2^2 x 3 x 5"로 출력<br/>
              <em>힌트: 2부터 시작하여 나누어 떨어지면 그 수로 계속 나누고, 안 되면 다음 수로 넘어갑니다.</em>
            </p>

            <p><strong>심화 2: N x N 곱셈표 만들기</strong></p>
            <p>
              사용자로부터 N을 입력받아 N x N 곱셈표를 출력하세요.
              각 칸의 숫자가 정렬되도록 포맷을 맞추세요.<br/>
              예: N=5이면 1x1부터 5x5까지의 곱셈표를 표 형태로 출력<br/>
              <em>힌트: f-string의 자릿수 지정 <code>{'{'}f"{'{'}value:4d{'}'}"{'}'}</code>를 활용하세요.</em>
            </p>
          </div>

          <div className="lesson-nav">
            <Link to="/python-learning/07" className="lesson-nav-btn prev">← 07: IF 조건문</Link>
            <Link to="/python-learning/09" className="lesson-nav-btn next">09: 함수 →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PythonLesson08;
