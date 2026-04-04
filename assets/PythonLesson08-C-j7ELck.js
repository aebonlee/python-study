import{b as s,j as e,L as r}from"./index-Dlvhr3ve.js";function l(){const{t:i,lang:n}=s();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:n==="en"?"Week 8: While & For Loops":"8주차: While 조건반복, For 횟수반복"}),e.jsx("p",{children:n==="en"?"Efficient programming and pattern output with loops":"반복문으로 효율적인 프로그래밍과 패턴 출력"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[n==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"Understand the concept of loops and why they are needed in programming"}),e.jsx("li",{children:"Understand the differences between while and for loops and choose appropriately"}),e.jsx("li",{children:"Use the range() function in its various forms"}),e.jsx("li",{children:"Control loop flow with break and continue"}),e.jsx("li",{children:"Implement multiplication tables and star patterns using nested loops"})]})]}),e.jsx("h2",{children:"1. What Are Loops?"}),e.jsx("h3",{children:"1-1. Repetition Structure in Programs"}),e.jsxs("p",{children:["We now learn the last of the 3 control structures (sequential, selection, repetition): the ",e.jsx("strong",{children:"Repetition Structure"}),". A loop is a construct that repeatedly executes a code block while a certain condition is met or for a specified number of times."]}),e.jsx("h3",{children:"1-2. What If We Had No Loops?"}),e.jsxs("p",{children:['Suppose you need to print "Hello" 100 times. Without loops, you would have to copy',e.jsx("code",{children:'print("Hello")'})," 100 lines. What about 1000 times? 10000 times? This is inefficient and impossible to maintain. With a loop, you can solve it in just 3 lines."]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"반복문의 개념과 프로그래밍에서의 필요성을 이해한다"}),e.jsx("li",{children:"while문과 for문의 차이점을 이해하고 적절히 선택하여 사용할 수 있다"}),e.jsx("li",{children:"range() 함수의 다양한 형태를 활용할 수 있다"}),e.jsx("li",{children:"break와 continue로 반복문의 흐름을 제어할 수 있다"}),e.jsx("li",{children:"중첩 반복문을 사용하여 구구단과 별 찍기 패턴을 구현할 수 있다"})]})]}),e.jsx("h2",{children:"1. 반복문이란?"}),e.jsx("h3",{children:"1-1. 프로그램의 반복 구조"}),e.jsxs("p",{children:["프로그램의 3가지 제어 구조(순차, 선택, 반복) 중 마지막인 ",e.jsx("strong",{children:"반복 구조(Repetition Structure)"}),"를 학습합니다. 반복문은 특정 조건이 만족되는 동안 또는 정해진 횟수만큼 코드 블록을 반복 실행하는 구문입니다."]}),e.jsx("h3",{children:"1-2. 반복문이 없다면?"}),e.jsxs("p",{children:['만약 "안녕하세요"를 100번 출력해야 한다고 가정합시다. 반복문이 없다면',e.jsx("code",{children:'print("안녕하세요")'}),"를 100줄 복사해야 합니다. 1000번이라면? 10000번이라면? 이것은 비효율적이며 유지보수도 불가능합니다. 반복문을 사용하면 단 3줄로 해결할 수 있습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Why We Need Loops":"반복문의 필요성"}),e.jsx("pre",{children:e.jsx("code",{children:`# 반복문 없이 5번 출력 (비효율적)
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
    print("안녕하세요")`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1-3. Components of a Loop"}),e.jsx("p",{children:"Every loop consists of these 4 components:"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Initialization"})}),e.jsx("td",{children:"Set initial value for the loop variable"}),e.jsx("td",{children:e.jsx("code",{children:"i = 1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Condition"})}),e.jsx("td",{children:"Condition that determines whether to continue looping"}),e.jsx("td",{children:e.jsx("code",{children:"i <= 10"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Body"})}),e.jsx("td",{children:"Code to be executed repeatedly"}),e.jsx("td",{children:e.jsx("code",{children:"print(i)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Update"})}),e.jsx("td",{children:"Modify the loop variable (changes the condition)"}),e.jsx("td",{children:e.jsx("code",{children:"i += 1"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Caution:"})," If you forget the update, the condition stays True forever, resulting in an ",e.jsx("strong",{children:"infinite loop"}),". If stuck in an infinite loop, force quit with ",e.jsx("code",{children:"Ctrl + C"}),"."]}),e.jsx("h3",{children:"1-4. Choosing Between while and for"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Situation"}),e.jsx("th",{children:"Recommended Loop"}),e.jsx("th",{children:"Reason"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Number of iterations known in advance"}),e.jsx("td",{children:e.jsx("code",{children:"for"})}),e.jsx("td",{children:"Concise expression with range()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Number of iterations unknown"}),e.jsx("td",{children:e.jsx("code",{children:"while"})}),e.jsx("td",{children:"End point determined by condition"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversing a sequence (list, string)"}),e.jsx("td",{children:e.jsx("code",{children:"for"})}),e.jsx("td",{children:"Automatically extracts elements one by one"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Waiting for user input"}),e.jsx("td",{children:e.jsx("code",{children:"while"})}),e.jsx("td",{children:"Cannot predict when it will end"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Infinite loop needed"}),e.jsx("td",{children:e.jsx("code",{children:"while True"})}),e.jsx("td",{children:"Exit condition set with break"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1-3. 반복문의 구성 요소"}),e.jsx("p",{children:"모든 반복문은 다음 4가지 요소로 구성됩니다:"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구성 요소"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"초기화"})}),e.jsx("td",{children:"반복에 사용할 변수의 초기값 설정"}),e.jsx("td",{children:e.jsx("code",{children:"i = 1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"조건"})}),e.jsx("td",{children:"반복을 계속할지 결정하는 조건식"}),e.jsx("td",{children:e.jsx("code",{children:"i <= 10"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"본문"})}),e.jsx("td",{children:"반복적으로 실행할 코드"}),e.jsx("td",{children:e.jsx("code",{children:"print(i)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"갱신"})}),e.jsx("td",{children:"반복 변수를 변경 (조건을 변화시킴)"}),e.jsx("td",{children:e.jsx("code",{children:"i += 1"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"주의:"})," 갱신을 잊으면 조건이 영원히 True로 유지되어 ",e.jsx("strong",{children:"무한 루프(Infinite Loop)"}),"에 빠집니다. 무한 루프에 빠지면 프로그램이 끝나지 않으므로, 실행 중 ",e.jsx("code",{children:"Ctrl + C"}),"로 강제 종료해야 합니다."]}),e.jsx("h3",{children:"1-4. while vs for 선택 기준"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"상황"}),e.jsx("th",{children:"권장 반복문"}),e.jsx("th",{children:"이유"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"반복 횟수가 미리 정해진 경우"}),e.jsx("td",{children:e.jsx("code",{children:"for"})}),e.jsx("td",{children:"range()로 간결하게 표현"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"반복 횟수를 모르는 경우"}),e.jsx("td",{children:e.jsx("code",{children:"while"})}),e.jsx("td",{children:"조건으로 종료 시점 결정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"시퀀스 순회 (리스트, 문자열)"}),e.jsx("td",{children:e.jsx("code",{children:"for"})}),e.jsx("td",{children:"자동으로 요소를 하나씩 꺼냄"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"사용자 입력 대기"}),e.jsx("td",{children:e.jsx("code",{children:"while"})}),e.jsx("td",{children:"언제 종료할지 알 수 없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"무한 반복 필요"}),e.jsx("td",{children:e.jsx("code",{children:"while True"})}),e.jsx("td",{children:"break로 탈출 조건 설정"})]})]})]})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. while Loop (Conditional Repetition)"}),e.jsx("h3",{children:"2-1. while Loop Syntax"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"while"})," loop repeatedly executes a code block as long as the condition is ",e.jsx("code",{children:"True"}),". When the condition becomes ",e.jsx("code",{children:"False"}),", the loop terminates."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. while문 (조건 반복)"}),e.jsx("h3",{children:"2-1. while문의 문법"}),e.jsxs("p",{children:[e.jsx("code",{children:"while"}),"문은 조건식이 ",e.jsx("code",{children:"True"}),"인 동안 코드 블록을 반복 실행합니다. 조건식이 ",e.jsx("code",{children:"False"}),"가 되면 반복이 종료됩니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"while Loop Syntax":"while문 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 문법
while 조건식:
    반복할 코드
    ...

# 동작 원리:
# 1단계: 조건식 검사 → True이면 본문 실행
# 2단계: 본문 실행 완료 → 다시 조건식 검사
# 3단계: True이면 다시 본문 실행 (반복)
# ...
# N단계: 조건식이 False → 반복 종료, while 다음 코드로 이동`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-2. while Loop and Flowcharts"}),e.jsx("p",{children:"In flowcharts, a while loop is represented by a diamond (decision) symbol and a return arrow. If the condition is True, execute the body and return to the condition; if False, exit the loop."}),e.jsx("h3",{children:"2-3. Basic while Loop Examples"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-2. while문과 순서도"}),e.jsx("p",{children:"while문은 순서도에서 다이아몬드(판단) 기호와 흐름선의 되돌아감으로 표현됩니다. 조건이 True이면 본문을 실행하고 다시 조건으로 돌아가며, False이면 반복을 빠져나갑니다."}),e.jsx("h3",{children:"2-3. while문 기본 예제"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Example 1: Print 1 to 5":"예제 1: 1부터 5까지 출력"}),e.jsx("pre",{children:e.jsx("code",{children:`i = 1           # 초기화

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
# i=6 → 6<=5? False → 반복 종료`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Example 2: Sum from 1 to 100":"예제 2: 1부터 100까지 합계"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1 + 2 + 3 + ... + 100 = ?
total = 0  # 합계를 저장할 변수 (누적 변수)
i = 1      # 반복 변수

while i <= 100:
    total += i   # total = total + i
    i += 1       # i = i + 1

print(f"1부터 100까지의 합: {total}")  # 5050

# 가우스의 공식: n(n+1)/2 = 100*101/2 = 5050`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Example 3: Countdown":"예제 3: 카운트다운"}),e.jsx("pre",{children:e.jsx("code",{children:`count = 10

print("카운트다운 시작!")
while count > 0:
    print(count, end="... ")
    count -= 1   # count = count - 1

print("\\n발사! 🚀")

# 출력: 카운트다운 시작!
# 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...
# 발사! 🚀`})})]}),n==="en"?e.jsx("h3",{children:"2-4. Repeated User Input"}):e.jsx("h3",{children:"2-4. 사용자 입력 반복"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Example 4: Exit on Specific Input":"예제 4: 특정 값 입력 시 종료"}),e.jsx("pre",{children:e.jsx("code",{children:`# "quit"을 입력할 때까지 반복
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
# 프로그램을 종료합니다.`})})]}),n==="en"?e.jsx("h3",{children:"2-5. Infinite Loops and while True"}):e.jsx("h3",{children:"2-5. 무한 루프와 while True"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Example 5: Password Guessing (3 Attempts)":"예제 5: 비밀번호 맞추기 (3회 기회)"}),e.jsx("pre",{children:e.jsx("code",{children:`correct_pw = "python123"
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
# 로그인 성공!`})})]}),n==="en"?e.jsx("h3",{children:"2-6. Infinite Loop Caution"}):e.jsx("h3",{children:"2-6. 무한 루프 주의"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Infinite Loop Causes and Solutions":"무한 루프의 원인과 해결"}),e.jsx("pre",{children:e.jsx("code",{children:`# ✗ 무한 루프 - 갱신을 잊은 경우
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

print("종료되었습니다.")`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. for Loop (Count-based Repetition)"}),e.jsx("h3",{children:"3-1. for Loop Syntax"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"for"})," loop iterates through elements of a sequence one by one. It is used when the number of iterations is fixed or when processing each element of a sequence."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. for문 (횟수 반복)"}),e.jsx("h3",{children:"3-1. for문의 문법"}),e.jsxs("p",{children:[e.jsx("code",{children:"for"}),"문은 시퀀스(순서가 있는 자료)의 요소를 하나씩 꺼내어 반복합니다. 반복 횟수가 정해져 있거나, 시퀀스의 각 요소를 처리할 때 사용합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"for Loop Syntax":"for문 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 문법
for 변수 in 시퀀스:
    반복할 코드
    ...

# 시퀀스: range(), 문자열, 리스트, 튜플 등
# 변수: 시퀀스에서 꺼낸 현재 요소가 저장되는 변수

# 동작 원리:
# 1. 시퀀스에서 첫 번째 요소를 꺼내 변수에 대입 → 본문 실행
# 2. 시퀀스에서 두 번째 요소를 꺼내 변수에 대입 → 본문 실행
# 3. ...
# N. 시퀀스의 마지막 요소까지 실행 → 반복 종료`})})]}),n==="en"?e.jsx("h3",{children:"3-2. Using with range()"}):e.jsx("h3",{children:"3-2. range()와 함께 사용"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"for Loop with range() Basics":"for문과 range() 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# range(n): 0부터 n-1까지
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
print()`})})]}),n==="en"?e.jsx("h3",{children:"3-3. String Traversal"}):e.jsx("h3",{children:"3-3. 문자열 순회"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Traversing Strings with for":"문자열을 for문으로 순회"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열의 각 문자를 하나씩 출력
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

print(f"'{text}'에서 모음 개수: {count}개")  # 3개`})})]}),n==="en"?e.jsx("h3",{children:"3-4. List Traversal"}):e.jsx("h3",{children:"3-4. 리스트 순회"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Traversing Lists with for":"리스트를 for문으로 순회"}),e.jsx("pre",{children:e.jsx("code",{children:`# 리스트의 각 요소를 하나씩 처리
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

print(f"합계: {total}")  # 150`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. Mastering the range() Function"}),e.jsx("h3",{children:"4-1. Three Forms of range()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"range()"})," function generates a sequence of consecutive integers. It is the most commonly used function with for loops."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Generated Values"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(5)"})}),e.jsx("td",{children:"0 to 4"}),e.jsx("td",{children:"0, 1, 2, 3, 4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(1, 6)"})}),e.jsx("td",{children:"1 to 5"}),e.jsx("td",{children:"1, 2, 3, 4, 5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(0, 10, 2)"})}),e.jsx("td",{children:"0 to 8 by 2"}),e.jsx("td",{children:"0, 2, 4, 6, 8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(10, 0, -1)"})}),e.jsx("td",{children:"10 to 1 in reverse"}),e.jsx("td",{children:"10, 9, 8, ..., 2, 1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(10, 0, -2)"})}),e.jsx("td",{children:"10 to 2 by -2"}),e.jsx("td",{children:"10, 8, 6, 4, 2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(1, 1)"})}),e.jsx("td",{children:"start == stop"}),e.jsx("td",{children:"(empty sequence)"})]})]})]}),e.jsx("h3",{children:"4-2. Important Properties of range()"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"The stop value is excluded:"})," ",e.jsx("code",{children:"range(1, 5)"})," produces 1, 2, 3, 4 (5 is not included)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Only integers:"})," ",e.jsx("code",{children:"range(0.5, 5.5)"})," causes an error (no floats)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory efficient:"})," ",e.jsx("code",{children:"range()"})," does not create a list immediately; it generates values one at a time (Lazy Evaluation)"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"list(range(...))"})," to convert to a list"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. range() 함수 완전 정복"}),e.jsx("h3",{children:"4-1. range()의 세 가지 형태"}),e.jsxs("p",{children:[e.jsx("code",{children:"range()"})," 함수는 연속된 정수 시퀀스를 생성합니다. for문에서 가장 많이 사용되는 함수입니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"형태"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"생성되는 값"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(5)"})}),e.jsx("td",{children:"0부터 4까지"}),e.jsx("td",{children:"0, 1, 2, 3, 4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(1, 6)"})}),e.jsx("td",{children:"1부터 5까지"}),e.jsx("td",{children:"1, 2, 3, 4, 5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(0, 10, 2)"})}),e.jsx("td",{children:"0부터 8까지 2씩 증가"}),e.jsx("td",{children:"0, 2, 4, 6, 8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(10, 0, -1)"})}),e.jsx("td",{children:"10부터 1까지 역순"}),e.jsx("td",{children:"10, 9, 8, ..., 2, 1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(10, 0, -2)"})}),e.jsx("td",{children:"10부터 2까지 2씩 감소"}),e.jsx("td",{children:"10, 8, 6, 4, 2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"range(1, 1)"})}),e.jsx("td",{children:"시작 == 끝"}),e.jsx("td",{children:"(빈 시퀀스, 아무것도 없음)"})]})]})]}),e.jsx("h3",{children:"4-2. range()의 중요한 특성"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"끝값(stop)은 포함되지 않습니다:"})," ",e.jsx("code",{children:"range(1, 5)"}),"는 1, 2, 3, 4 (5는 미포함)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"정수만 사용 가능:"})," ",e.jsx("code",{children:"range(0.5, 5.5)"}),"는 오류 (실수 불가)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"메모리 효율:"})," ",e.jsx("code",{children:"range()"}),"는 즉시 리스트를 생성하지 않고, 필요할 때 값을 하나씩 생성합니다 (지연 평가, Lazy Evaluation)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"list(range(...))"}),"로 리스트로 변환할 수 있습니다"]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Converting range() to List":"range()를 리스트로 변환"}),e.jsx("pre",{children:e.jsx("code",{children:`# range 객체 자체는 리스트가 아님
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
# list(range(1000000)) → 리스트 100만 개 생성 (메모리 많이 사용)`})})]}),n==="en"?e.jsx("h3",{children:"4-3. range() Usage Examples"}):e.jsx("h3",{children:"4-3. range() 활용 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Various range() Applications":"range() 다양한 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1부터 N까지의 합
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
print("발사!")  # 10 9 8 7 6 5 4 3 2 1 발사!`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. break and continue"}),e.jsx("h3",{children:"5-1. break: Exit Loop Immediately"}),e.jsxs("p",{children:[e.jsx("code",{children:"break"})," immediately terminates the loop and jumps out. It is used when there is no need to continue looping under a specific condition."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. break와 continue"}),e.jsx("h3",{children:"5-1. break: 반복문 즉시 탈출"}),e.jsxs("p",{children:[e.jsx("code",{children:"break"}),"는 반복문을 즉시 종료하고 반복문 바깥으로 빠져나갑니다. 특정 조건에서 더 이상 반복할 필요가 없을 때 사용합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"break in while":"while에서 break"}),e.jsx("pre",{children:e.jsx("code",{children:`# 숫자 맞추기 게임
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
        print("더 작은 수입니다. ↓")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"break in for":"for에서 break"}),e.jsx("pre",{children:e.jsx("code",{children:`# 리스트에서 특정 값 찾기
numbers = [4, 7, 2, 9, 1, 8, 3, 6]
target = 9

for i, num in enumerate(numbers):
    if num == target:
        print(f"{target}을(를) 인덱스 {i}에서 찾았습니다!")
        break   # 찾으면 더 이상 검색할 필요 없음
else:
    # for-else: break 없이 정상 종료되면 실행
    print(f"{target}을(를) 찾지 못했습니다.")

# 출력: 9을(를) 인덱스 3에서 찾았습니다!`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-2. continue: Skip Current Iteration"}),e.jsxs("p",{children:[e.jsx("code",{children:"continue"})," skips the rest of the current iteration and moves to the next one. It is used to skip code execution under specific conditions."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-2. continue: 현재 반복 건너뛰기"}),e.jsxs("p",{children:[e.jsx("code",{children:"continue"}),"는 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 넘어갑니다. 특정 조건에서 코드 실행을 생략할 때 사용합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"continue Examples":"continue 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 홀수만 출력 (짝수는 건너뛰기)
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
print()  # 1 2 4 5 7 8 10 11 13 14 16 17 19 20`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-3. break vs continue Comparison"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"break"}),e.jsx("th",{children:"continue"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Action"})}),e.jsx("td",{children:"Immediately terminates the entire loop"}),e.jsx("td",{children:"Skips only the current iteration"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Execution point"})}),e.jsx("td",{children:"Moves to outside the loop"}),e.jsx("td",{children:"Moves to the loop's condition check"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Use case"})}),e.jsx("td",{children:"When the desired value is found"}),e.jsx("td",{children:"When excluding specific conditions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Nested loops"})}),e.jsx("td",{children:"Only exits the innermost loop"}),e.jsx("td",{children:"Only skips current iteration of innermost loop"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-3. break vs continue 비교"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"break"}),e.jsx("th",{children:"continue"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"동작"})}),e.jsx("td",{children:"반복문 전체를 즉시 종료"}),e.jsx("td",{children:"현재 반복만 건너뛰고 다음 반복으로"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실행 위치"})}),e.jsx("td",{children:"반복문 바깥으로 이동"}),e.jsx("td",{children:"반복문의 조건 검사로 이동"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용 예"})}),e.jsx("td",{children:"원하는 값을 찾았을 때"}),e.jsx("td",{children:"특정 조건을 제외할 때"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"중첩 시"})}),e.jsx("td",{children:"가장 안쪽 반복문만 탈출"}),e.jsx("td",{children:"가장 안쪽 반복문의 현재 반복만 건너뜀"})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"break and continue Comparison Example":"break와 continue 비교 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# break: 5를 만나면 반복 완전 종료
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
print()  # 1 2 3 4 6 7 8 9 10 (5만 빠지고 나머지는 출력)`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-4. break in Nested Loops"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Important:"})," ",e.jsx("code",{children:"break"})," only exits the innermost loop. To terminate outer loops, use a flag variable or a function."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-4. 중첩 반복문에서의 break"}),e.jsxs("p",{children:[e.jsx("strong",{children:"중요:"})," ",e.jsx("code",{children:"break"}),"는 가장 안쪽 반복문만 탈출합니다. 바깥 반복문까지 종료하려면 별도의 플래그 변수나 함수를 사용해야 합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"break in Nested Loops":"중첩 반복문에서 break"}),e.jsx("pre",{children:e.jsx("code",{children:`# break는 가장 안쪽 반복문만 종료
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
#   안쪽 루프 j=1`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. for-else and while-else"}),e.jsxs("p",{children:["Python has a unique syntax called ",e.jsx("strong",{children:"loop-else"})," not found in other languages. The ",e.jsx("code",{children:"else"})," block executes when the loop completes ",e.jsx("strong",{children:"without a break"}),". If the loop exits via break, the else block does not execute."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. for-else와 while-else"}),e.jsxs("p",{children:["파이썬에는 다른 언어에 없는 독특한 문법인 ",e.jsx("strong",{children:"반복문-else"})," 구조가 있습니다.",e.jsx("code",{children:"else"})," 블록은 반복문이 ",e.jsx("strong",{children:"break 없이 정상 종료"}),"되었을 때 실행됩니다. break로 종료된 경우에는 else 블록이 실행되지 않습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Prime Number Check with for-else":"소수 판별에서 for-else 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`num = int(input("양의 정수를 입력하세요: "))

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
# 12은(는) 소수가 아닙니다. (2로 나누어짐)`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. Accumulation Pattern"}),e.jsxs("p",{children:["One of the most commonly used patterns in loops is the ",e.jsx("strong",{children:"accumulation pattern"}),". It involves continuously adding values (sum), counting occurrences (count), or updating max/min values."]}),e.jsx("h3",{children:"7-1. Sum Pattern"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. 누적(Accumulation) 패턴"}),e.jsxs("p",{children:["반복문에서 가장 많이 사용되는 패턴 중 하나가 ",e.jsx("strong",{children:"누적 패턴"}),"입니다. 변수에 값을 계속 더하거나(합계), 횟수를 세거나(카운트), 최대/최소를 갱신하는 패턴입니다."]}),e.jsx("h3",{children:"7-1. 합계 구하기 패턴"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Sum Accumulation Pattern":"합계 누적 패턴"}),e.jsx("pre",{children:e.jsx("code",{children:`# 패턴: total = 0 → 반복하며 total += 값
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

print(f"입력한 숫자의 합: {total}")`})})]}),n==="en"?e.jsx("h3",{children:"7-2. Count Pattern"}):e.jsx("h3",{children:"7-2. 개수 세기 패턴"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Count Pattern":"카운트 패턴"}),e.jsx("pre",{children:e.jsx("code",{children:`# 패턴: count = 0 → 조건 만족 시 count += 1
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

print(f"'{text}'에서 '{target}'의 개수: {count}개")`})})]}),n==="en"?e.jsx("h3",{children:"7-3. Finding Max/Min Pattern"}):e.jsx("h3",{children:"7-3. 최대/최소 찾기 패턴"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Finding Max and Min Values":"최대값, 최소값 찾기"}),e.jsx("pre",{children:e.jsx("code",{children:`# 패턴: 첫 값으로 초기화 → 더 큰(작은) 값 발견 시 갱신
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

print(f"최소값: {min_val}")  # 12`})})]}),n==="en"?e.jsx("h3",{children:"7-4. String Accumulation Pattern"}):e.jsx("h3",{children:"7-4. 문자열 누적 패턴"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"String Accumulation":"문자열 누적"}),e.jsx("pre",{children:e.jsx("code",{children:`# 패턴: result = "" → 반복하며 result += 문자
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

print(f"모음 제거: {result}")  # Hll Wrld`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. Nested Loops"}),e.jsx("h3",{children:"8-1. How Double for Loops Work"}),e.jsxs("p",{children:["Placing a loop inside another loop is called a ",e.jsx("strong",{children:"nested loop"}),". Each time the outer loop executes once, the inner loop runs through its entire cycle."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. 중첩 반복문 (Nested Loop)"}),e.jsx("h3",{children:"8-1. 이중 for문의 동작 원리"}),e.jsxs("p",{children:["반복문 안에 또 다른 반복문을 넣는 것을 ",e.jsx("strong",{children:"중첩 반복문"}),"이라고 합니다. 바깥 반복문이 1번 실행될 때마다, 안쪽 반복문은 처음부터 끝까지 전체를 실행합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Understanding Double for Loop Behavior":"이중 for문 동작 이해"}),e.jsx("pre",{children:e.jsx("code",{children:`# 바깥 루프가 1회 실행될 때, 안쪽 루프는 전체가 실행됨
for i in range(1, 4):       # 바깥: 1, 2, 3
    for j in range(1, 4):   # 안쪽: 1, 2, 3 (매번 처음부터)
        print(f"(i={i}, j={j})", end="  ")
    print()  # 바깥 루프 한 바퀴 끝 → 줄바꿈

# 출력:
# (i=1, j=1)  (i=1, j=2)  (i=1, j=3)
# (i=2, j=1)  (i=2, j=2)  (i=2, j=3)
# (i=3, j=1)  (i=3, j=2)  (i=3, j=3)
# → 총 3 x 3 = 9번 실행`})})]}),n==="en"?e.jsx("h3",{children:"8-2. Multiplication Table Output"}):e.jsx("h3",{children:"8-2. 구구단 출력"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Multiplication Table (2x to 9x)":"구구단 (2단~9단)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 특정 단 출력
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
    print()  # 단 사이 빈 줄`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"8-3. Star (*) Patterns"}),e.jsx("p",{children:"Star printing patterns are classic nested loop exercises. Each pattern consists of an outer loop (rows) and an inner loop (columns)."})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"8-3. 별(*) 찍기 패턴"}),e.jsx("p",{children:"중첩 반복문의 대표적인 연습 문제가 별 찍기 패턴입니다. 각 패턴은 바깥 루프(행)와 안쪽 루프(열)로 구성됩니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Pattern 1: Right Triangle (Left-aligned)":"패턴 1: 직각삼각형 (왼쪽 정렬)"}),e.jsx("pre",{children:e.jsx("code",{children:`# n = 5
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
    print("*" * i)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Pattern 2: Inverted Triangle":"패턴 2: 역직각삼각형"}),e.jsx("pre",{children:e.jsx("code",{children:`# n = 5
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
    print("*" * i)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Pattern 3: Pyramid (Center-aligned)":"패턴 3: 피라미드 (가운데 정렬)"}),e.jsx("pre",{children:e.jsx("code",{children:`# n = 5
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
# i=5: 공백0 + 별9   = "*********"`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Pattern 4: Inverted Pyramid":"패턴 4: 역피라미드"}),e.jsx("pre",{children:e.jsx("code",{children:`# n = 5
# *********    (공백0개, 별9개)
#  *******     (공백1개, 별7개)
#   *****      (공백2개, 별5개)
#    ***       (공백3개, 별3개)
#     *        (공백4개, 별1개)

n = 5
for i in range(n, 0, -1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Pattern 5: Diamond":"패턴 5: 다이아몬드"}),e.jsx("pre",{children:e.jsx("code",{children:`# n = 5 (상단 높이)
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
    print(spaces + stars)`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. while vs for Complete Comparison"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"while loop"}),e.jsx("th",{children:"for loop"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Purpose"})}),e.jsx("td",{children:"Repeat while condition is satisfied"}),e.jsx("td",{children:"Fixed iterations or sequence traversal"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Iterations"})}),e.jsx("td",{children:"Unknown in advance"}),e.jsx("td",{children:"Predetermined"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Termination"})}),e.jsx("td",{children:"When condition becomes False"}),e.jsx("td",{children:"When all elements are processed"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Infinite loop"})}),e.jsx("td",{children:"Possible (while True)"}),e.jsx("td",{children:"Not possible (limited by sequence length)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Init/Update"})}),e.jsx("td",{children:"Must write manually"}),e.jsx("td",{children:"Handled automatically"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Caution"})}),e.jsx("td",{children:"Missing update causes infinite loop"}),e.jsx("td",{children:"Watch range() boundaries"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Typical uses"})}),e.jsx("td",{children:"Input waiting, game loops, validation"}),e.jsx("td",{children:"Multiplication tables, list processing"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. while vs for 비교 총정리"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"비교 항목"}),e.jsx("th",{children:"while문"}),e.jsx("th",{children:"for문"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"용도"})}),e.jsx("td",{children:"조건이 만족되는 동안 반복"}),e.jsx("td",{children:"정해진 횟수만큼 또는 시퀀스 순회"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"반복 횟수"})}),e.jsx("td",{children:"미리 알 수 없는 경우"}),e.jsx("td",{children:"미리 정해진 경우"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"종료 조건"})}),e.jsx("td",{children:"조건식이 False가 될 때"}),e.jsx("td",{children:"시퀀스의 모든 요소를 처리했을 때"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"무한 루프"})}),e.jsx("td",{children:"가능 (while True)"}),e.jsx("td",{children:"불가능 (시퀀스 길이로 제한)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"초기화/갱신"})}),e.jsx("td",{children:"직접 작성해야 함"}),e.jsx("td",{children:"자동으로 처리됨"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주의사항"})}),e.jsx("td",{children:"갱신 누락 시 무한 루프"}),e.jsx("td",{children:"range() 범위 설정 주의"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"대표 사용처"})}),e.jsx("td",{children:"입력 대기, 게임 루프, 검증"}),e.jsx("td",{children:"구구단, 리스트 처리, 횟수 반복"})]})]})]})]}),n==="en"?e.jsx("h3",{children:"Same Problem with while and for"}):e.jsx("h3",{children:"같은 문제를 while과 for로 각각 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Sum 1-10: while vs for":"1~10 합계: while vs for"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── while문 버전 ──
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
# → 횟수가 정해진 반복에는 for문이 적합!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"User Input: while is More Suitable":"사용자 입력 처리: while이 적합한 경우"}),e.jsx("pre",{children:e.jsx("code",{children:`# 이 문제는 while이 적합 (반복 횟수를 모름)
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
    print("입력된 숫자가 없습니다.")`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"10. Comprehensive Practice Examples"}),e.jsx("h3",{children:"Example 1: Full Multiplication Table (Horizontal)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Print the multiplication table from 2x to 9x in a horizontal format."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"10. 종합 실습 예제"}),e.jsx("h3",{children:"예제 1: 구구단 전체 출력 (가로 형태)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 2단부터 9단까지 구구단을 가로 형태로 깔끔하게 출력합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Horizontal Multiplication Table":"구구단 가로 출력"}),e.jsx("pre",{children:e.jsx("code",{children:`# 가로 형태 구구단 (2~9단을 나란히)
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
# ========================================================================`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 2: Finding Divisors"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Find all divisors of a positive integer entered by the user, and display the count and sum of divisors."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 2: 약수 구하기"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 사용자가 입력한 양의 정수의 모든 약수를 구하고, 약수의 개수와 합을 출력합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Divisor Finder Program":"약수 구하기 프로그램"}),e.jsx("pre",{children:e.jsx("code",{children:`num = int(input("양의 정수를 입력하세요: "))

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
# 28은(는) 완전수입니다!`})})]}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 3: Sieve of Eratosthenes"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Find all prime numbers from 2 to N. The ",e.jsx("strong",{children:"Sieve of Eratosthenes"})," is an efficient prime-finding algorithm devised by the ancient Greek mathematician Eratosthenes."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Principle:"})," Starting from 2, eliminate multiples of each prime. The remaining numbers are all prime."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 3: 소수 판별 (에라토스테네스의 체)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 2부터 N까지의 모든 소수를 구합니다.",e.jsx("strong",{children:"에라토스테네스의 체(Sieve of Eratosthenes)"}),"는 고대 그리스 수학자 에라토스테네스가 고안한 효율적인 소수 판별 알고리즘입니다."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"원리:"})," 2부터 시작하여 각 소수의 배수를 지워나가면, 남는 수가 모두 소수입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Sieve of Eratosthenes":"에라토스테네스의 체"}),e.jsx("pre",{children:e.jsx("code",{children:`n = int(input("N을 입력하세요: "))

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
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]`})})]}),n==="en"?e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.commonMistakes")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting variable update in while:"})," Omitting ",e.jsx("code",{children:"i += 1"})," causes an infinite loop. Always verify the loop variable update when writing while loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"range() Off-by-one Error:"})," ",e.jsx("code",{children:"range(1, 10)"})," goes from 1 to 9; 10 is not included. To include 10, use ",e.jsx("code",{children:"range(1, 11)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying for loop variable inside the loop:"})," In ",e.jsx("code",{children:"for i in range(5)"}),", even if you set ",e.jsx("code",{children:"i = 10"})," inside the loop, the next iteration will overwrite it with the next value from range(). Modifying the for variable directly is meaningless."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Indentation confusion in nested loops:"})," In double for loops, you must match indentation precisely to indicate which code belongs to the outer vs inner loop."]})]})]}):e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.commonMistakes")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"while문에서 변수 갱신 누락:"})," ",e.jsx("code",{children:"i += 1"}),"을 잊으면 무한 루프에 빠집니다. while문을 작성할 때는 항상 반복 변수의 갱신을 확인하세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"range() 범위 오류 (Off-by-one Error):"})," ",e.jsx("code",{children:"range(1, 10)"}),"은 1~9까지이며 10은 포함되지 않습니다. 10을 포함하려면 ",e.jsx("code",{children:"range(1, 11)"}),"로 써야 합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for 변수를 반복문 내에서 변경:"})," ",e.jsx("code",{children:"for i in range(5)"}),"에서 반복문 본문 안에서 ",e.jsx("code",{children:"i = 10"}),"으로 변경해도 다음 반복에서 range()가 제공하는 다음 값으로 덮어씌워집니다. for문의 반복 변수를 직접 수정하는 것은 의미가 없습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"중첩 반복문 들여쓰기 혼동:"})," 이중 for문에서 어떤 코드가 바깥 루프에 속하고 어떤 코드가 안쪽 루프에 속하는지 들여쓰기를 정확히 맞춰야 합니다."]})]})]}),n==="en"?e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Loops"})," are control structures for repeating code execution and are key to efficient programming"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while"})," repeats while the condition is True; suitable when the number of iterations is unknown"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for"})," iterates over a sequence; suitable when the number of iterations is predetermined"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"range(start, stop, step)"})," generates integer sequences; stop is not included"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"break"})," immediately terminates the loop; ",e.jsx("strong",{children:"continue"})," skips only the current iteration"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for-else/while-else"}),": the else block runs only when the loop completes without a break"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accumulation patterns"})," (sum, count, max/min, string) are the most frequently used loop patterns"]}),e.jsxs("li",{children:["In ",e.jsx("strong",{children:"nested loops"}),", one execution of the outer loop runs the entire inner loop"]}),e.jsxs("li",{children:["In while loops, you ",e.jsx("strong",{children:"must include variable updates"})," to prevent infinite loops"]})]})]}):e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:i("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"반복문"}),"은 코드를 반복 실행하는 제어 구조이며, 효율적인 프로그래밍의 핵심이다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while문"}),"은 조건이 True인 동안 반복하며, 반복 횟수를 모를 때 적합하다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for문"}),"은 시퀀스를 순회하며 반복하고, 반복 횟수가 정해진 경우에 적합하다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"range(start, stop, step)"}),"은 연속된 정수 시퀀스를 생성하며, stop은 포함되지 않는다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"break"}),"는 반복문을 즉시 종료하고, ",e.jsx("strong",{children:"continue"}),"는 현재 반복만 건너뛴다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for-else/while-else"}),"에서 else는 break 없이 정상 종료되었을 때 실행된다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"누적 패턴"}),"(합계, 카운트, 최대/최소, 문자열 누적)은 반복문에서 가장 자주 사용되는 패턴이다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"중첩 반복문"}),"에서 바깥 루프 1회 실행 시 안쪽 루프 전체가 실행된다"]}),e.jsxs("li",{children:["while문에서는 반복 변수 ",e.jsx("strong",{children:"갱신을 반드시"})," 포함해야 무한 루프를 방지한다"]})]})]}),n==="en"?e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:i("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 1: Full Horizontal Multiplication Table"})}),e.jsx("p",{children:"Write a program that prints the multiplication table from 2x to 9x in horizontal format. Each table should be arranged side by side in columns, with clean formatting. (Refer to Comprehensive Example 1 above)"}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 2: Diamond Star Pattern"})}),e.jsx("p",{children:"Receive an odd height number from the user and print a diamond shape. The top is a pyramid and the bottom is an inverted pyramid. If the input is even, add 1 to make it odd before printing."})]}):e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:i("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"과제 1: 구구단 전체 가로 형태 출력"})}),e.jsx("p",{children:"2단부터 9단까지 구구단을 가로 형태로 출력하는 프로그램을 작성하세요. 각 단이 열로 나란히 배치되도록 하며, 포맷을 깔끔하게 정렬하세요. (위 종합 실습 예제 1 참고)"}),e.jsx("p",{children:e.jsx("strong",{children:"과제 2: 다이아몬드 별 찍기"})}),e.jsx("p",{children:"사용자로부터 높이(홀수)를 입력받아 다이아몬드 모양을 출력하세요. 상단은 피라미드, 하단은 역피라미드로 구성됩니다. 입력값이 짝수이면 1을 더하여 홀수로 변환 후 출력하세요."})]}),n==="en"?e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:i("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 1: Prime Factorization Program"})}),e.jsxs("p",{children:["Receive a positive integer (2 or greater) from the user and output its prime factorization.",e.jsx("br",{}),'Example: Input 60 outputs "60 = 2 x 2 x 3 x 5" or "60 = 2^2 x 3 x 5"',e.jsx("br",{}),e.jsx("em",{children:"Hint: Starting from 2, if divisible, keep dividing by that number; otherwise move to the next."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 2: N x N Multiplication Table"})}),e.jsxs("p",{children:["Receive N from the user and print an N x N multiplication table. Format the numbers to align properly in each cell.",e.jsx("br",{}),"Example: For N=5, print a table from 1x1 to 5x5 in table format.",e.jsx("br",{}),e.jsxs("em",{children:["Hint: Use f-string width formatting ",e.jsxs("code",{children:["{",'f"',"{","value:4d","}",'"',"}"]}),"."]})]})]}):e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:i("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"심화 1: 소인수분해 프로그램"})}),e.jsxs("p",{children:["사용자로부터 2 이상의 양의 정수를 입력받아 소인수분해 결과를 출력하세요.",e.jsx("br",{}),'예: 60을 입력하면 "60 = 2 x 2 x 3 x 5" 또는 "60 = 2^2 x 3 x 5"로 출력',e.jsx("br",{}),e.jsx("em",{children:"힌트: 2부터 시작하여 나누어 떨어지면 그 수로 계속 나누고, 안 되면 다음 수로 넘어갑니다."})]}),e.jsx("p",{children:e.jsx("strong",{children:"심화 2: N x N 곱셈표 만들기"})}),e.jsxs("p",{children:["사용자로부터 N을 입력받아 N x N 곱셈표를 출력하세요. 각 칸의 숫자가 정렬되도록 포맷을 맞추세요.",e.jsx("br",{}),"예: N=5이면 1x1부터 5x5까지의 곱셈표를 표 형태로 출력",e.jsx("br",{}),e.jsxs("em",{children:["힌트: f-string의 자릿수 지정 ",e.jsxs("code",{children:["{",'f"',"{","value:4d","}",'"',"}"]}),"를 활용하세요."]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/python-learning/07",className:"lesson-nav-btn prev",children:["← 07: ",n==="en"?"IF Conditionals":"IF 조건문"]}),e.jsxs(r,{to:"/python-learning/09",className:"lesson-nav-btn next",children:["09: ",n==="en"?"Functions":"함수"," →"]})]})]})})})]})}export{l as default};
