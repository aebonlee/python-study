import{b as i,j as e,L as n}from"./index-B_RlwKyc.js";function c(){const{t:r,lang:s}=i();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s==="en"?"Week 7: IF Conditionals":"7주차: IF 조건문"}),e.jsx("p",{children:s==="en"?"Conditional branching and logical decisions using if, elif, else":"if, elif, else를 활용한 조건 분기와 논리적 판단"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"Understand the concept of conditionals and why they are needed in programming"}),e.jsx("li",{children:"Write if, elif, and else statements correctly"}),e.jsx("li",{children:"Construct compound conditions using comparison and logical operators"}),e.jsx("li",{children:"Implement complex decision logic using nested conditionals"}),e.jsx("li",{children:"Design and write practical programs using conditionals"})]})]}),e.jsx("h2",{children:"1. What Are Conditionals?"}),e.jsx("h3",{children:"1-1. Controlling Program Flow"}),e.jsxs("p",{children:["Programs fundamentally execute line by line from top to bottom. This is called ",e.jsx("strong",{children:"Sequential Structure"}),". However, solving real-world problems requires more than just sequential execution. There are 3 basic control structures for directing program flow."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Control Structure"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Keywords"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Sequential"})}),e.jsx("td",{children:"Execute commands from top to bottom in order"}),e.jsx("td",{children:"(default flow)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Selection"})}),e.jsx("td",{children:"Choose which code to execute based on a condition"}),e.jsx("td",{children:"if, elif, else"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Repetition"})}),e.jsx("td",{children:"Execute specific code repeatedly"}),e.jsx("td",{children:"while, for"})]})]})]}),e.jsxs("p",{children:["This week we will learn about ",e.jsx("strong",{children:"Selection Structure"}),", also known as ",e.jsx("strong",{children:"Conditional Statements"}),". A conditional statement executes different code blocks depending on whether a given condition is True or False."]}),e.jsx("h3",{children:"1-2. Why Do We Need Conditionals?"}),e.jsx("p",{children:'Our daily lives are full of conditional decisions. "If it rains, take an umbrella," "If the test score is 60 or above, pass," "If the balance is sufficient, proceed with payment" -- all decisions are based on conditions. The same applies in programming. Even the same program must produce different results depending on input values, and this is exactly why conditionals are at the core of programming.'}),e.jsx("p",{children:'For example, in a login system, the conditional judgment "if the password is correct, login succeeds; otherwise, login fails" is essential. Without conditionals, even such basic functionality cannot be implemented.'}),e.jsx("h3",{children:"1-3. Boolean Logic"}),e.jsxs("p",{children:["The core of conditionals is ",e.jsx("strong",{children:"Boolean"})," values. Boolean is a data type with only two values: ",e.jsx("code",{children:"True"})," and ",e.jsx("code",{children:"False"}),". This concept originated from Boolean Algebra created by the British mathematician ",e.jsx("strong",{children:"George Boole (1815-1864)"}),", and it forms the foundation of modern computer science."]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.learningObjectives")}),e.jsxs("ul",{children:[e.jsx("li",{children:"조건문의 개념과 프로그래밍에서의 필요성을 이해한다"}),e.jsx("li",{children:"if, elif, else 구문을 올바르게 작성할 수 있다"}),e.jsx("li",{children:"비교 연산자와 논리 연산자를 활용하여 복합 조건을 구성할 수 있다"}),e.jsx("li",{children:"중첩 조건문을 사용하여 복잡한 판단 로직을 구현할 수 있다"}),e.jsx("li",{children:"조건문을 활용한 실전 프로그램을 설계하고 작성할 수 있다"})]})]}),e.jsx("h2",{children:"1. 조건문이란?"}),e.jsx("h3",{children:"1-1. 프로그램의 흐름 제어"}),e.jsxs("p",{children:["프로그램은 기본적으로 위에서 아래로 한 줄씩 순서대로 실행됩니다. 이것을 ",e.jsx("strong",{children:"순차 구조(Sequential Structure)"}),"라고 합니다. 하지만 현실 세계의 문제를 해결하려면 단순히 순서대로 실행하는 것만으로는 부족합니다. 프로그램의 흐름을 제어하는 3가지 기본 구조가 있습니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"제어 구조"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"키워드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"순차 구조"})}),e.jsx("td",{children:"명령을 위에서 아래로 차례대로 실행"}),e.jsx("td",{children:"(기본 흐름)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"선택 구조"})}),e.jsx("td",{children:"조건에 따라 실행할 코드를 선택"}),e.jsx("td",{children:"if, elif, else"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"반복 구조"})}),e.jsx("td",{children:"특정 코드를 반복하여 실행"}),e.jsx("td",{children:"while, for"})]})]})]}),e.jsxs("p",{children:["이번 주차에서는 ",e.jsx("strong",{children:"선택 구조"}),", 즉 ",e.jsx("strong",{children:"조건문(Conditional Statement)"}),"을 학습합니다. 조건문은 주어진 조건의 참(True) 또는 거짓(False) 여부에 따라 서로 다른 코드 블록을 실행하는 구문입니다."]}),e.jsx("h3",{children:"1-2. 조건문의 필요성"}),e.jsx("p",{children:'우리의 일상생활은 조건 판단으로 가득합니다. "비가 오면 우산을 가져간다", "시험 점수가 60점 이상이면 합격이다", "잔액이 충분하면 결제를 진행한다" 등 모든 의사결정은 조건에 기반합니다. 프로그래밍에서도 마찬가지입니다. 동일한 프로그램이라도 입력값에 따라 다른 결과를 만들어내야 하며, 이것이 바로 조건문이 프로그래밍의 핵심인 이유입니다.'}),e.jsx("p",{children:'예를 들어, 로그인 시스템에서는 "비밀번호가 맞으면 로그인 성공, 틀리면 로그인 실패"라는 조건 판단이 반드시 필요합니다. 조건문 없이는 이러한 기본적인 기능조차 구현할 수 없습니다.'}),e.jsx("h3",{children:"1-3. 불리언(Boolean) 논리"}),e.jsxs("p",{children:["조건문의 핵심은 ",e.jsx("strong",{children:"불리언(Boolean)"})," 값입니다. 불리언은 ",e.jsx("code",{children:"True"}),"(참)와 ",e.jsx("code",{children:"False"}),"(거짓), 오직 두 가지 값만 가지는 자료형입니다. 이 개념은 영국의 수학자 ",e.jsx("strong",{children:"George Boole(1815-1864)"}),"이 창시한 불 대수(Boolean Algebra)에서 유래했으며, 현대 컴퓨터 과학의 근간이 됩니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Checking Boolean Values":"불리언 값 확인"}),e.jsx("pre",{children:e.jsx("code",{children:`# 불리언 값은 True 또는 False (첫 글자 대문자)
print(type(True))   # <class 'bool'>
print(type(False))  # <class 'bool'>

# 비교 연산의 결과는 불리언 값
print(5 > 3)    # True
print(2 == 7)   # False
print(10 != 10) # False`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1-4. Conditionals and Flowcharts"}),e.jsxs("p",{children:["In the flowcharts learned in Week 6, the ",e.jsx("strong",{children:"diamond symbol"}),` represents a conditional decision. You write the condition expression inside the diamond, and the flow branches into "Yes (True)" and "No (False)" directions. This corresponds exactly to Python's if-else structure.`]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1-4. 조건문과 순서도의 관계"}),e.jsxs("p",{children:["6주차에서 학습한 순서도에서 ",e.jsx("strong",{children:"다이아몬드(◇) 기호"}),'가 바로 조건 판단을 나타냅니다. 다이아몬드 안에 조건식을 쓰고, "Yes(참)" 방향과 "No(거짓)" 방향으로 흐름이 갈라집니다. 이것이 파이썬의 if-else 구조와 정확히 대응됩니다.']})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Flowchart and Conditional Correspondence":"순서도와 조건문의 대응"}),e.jsx("pre",{children:e.jsx("code",{children:`# 순서도 다이아몬드: "score >= 60?"
#   → Yes(True):  "합격" 출력
#   → No(False):  "불합격" 출력
#
# 이것을 파이썬 코드로 표현하면:

score = int(input("점수를 입력하세요: "))

if score >= 60:      # ◇ 조건 판단
    print("합격")    # Yes 경로
else:
    print("불합격")  # No 경로`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. Basic if Statement Structure"}),e.jsx("h3",{children:"2-1. if Statement Syntax"}),e.jsxs("p",{children:["Python's if statement is the simplest form of conditional. When the condition is ",e.jsx("code",{children:"True"}),", the indented code block executes; when ",e.jsx("code",{children:"False"}),", that block is skipped."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"2. if문 기본 구조"}),e.jsx("h3",{children:"2-1. if문의 문법"}),e.jsxs("p",{children:["파이썬의 if문은 가장 단순한 형태의 조건문입니다. 조건식이 ",e.jsx("code",{children:"True"}),"일 때만 들여쓰기된 코드 블록이 실행되고,",e.jsx("code",{children:"False"}),"이면 해당 블록을 건너뜁니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"if Statement Syntax":"if문 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`if 조건식:
    실행할 코드1
    실행할 코드2
    ...

# 조건식이 True이면 → 들여쓰기된 코드 실행
# 조건식이 False이면 → 들여쓰기된 코드 건너뜀`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-2. Python's Indentation Rules"}),e.jsxs("p",{children:["Unlike other programming languages (C, Java, etc.) that use curly braces (",e.jsx("code",{children:"{}"}),"), Python uses ",e.jsx("strong",{children:"indentation"})," to define code blocks. This is one of Python's most distinctive features."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Standard:"})," 4 spaces are recommended (PEP 8 Style Guide)"]}),e.jsx("li",{children:"1 tab is also allowed, but mixing tabs and spaces will cause errors"}),e.jsx("li",{children:"All code within the same block must be indented at the same depth"})]}),e.jsx("h3",{children:"2-3. IndentationError"}),e.jsxs("p",{children:["If indentation is incorrect, an ",e.jsx("code",{children:"IndentationError"})," occurs. This is one of the most common errors beginners encounter."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-2. 파이썬의 들여쓰기(Indentation) 규칙"}),e.jsxs("p",{children:["파이썬은 다른 프로그래밍 언어(C, Java 등)와 달리 중괄호(",e.jsx("code",{children:"{}"}),")를 사용하지 않고,",e.jsx("strong",{children:"들여쓰기(Indentation)"}),"로 코드 블록을 구분합니다. 이것은 파이썬의 가장 큰 특징 중 하나입니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"표준:"})," 공백(스페이스) 4칸을 권장합니다 (PEP 8 스타일 가이드)"]}),e.jsx("li",{children:"탭(Tab) 1칸도 사용 가능하지만, 스페이스와 혼용하면 오류가 발생합니다"}),e.jsx("li",{children:"같은 블록 내의 코드는 반드시 동일한 깊이로 들여쓰기해야 합니다"})]}),e.jsx("h3",{children:"2-3. 들여쓰기 오류(IndentationError)"}),e.jsxs("p",{children:["들여쓰기가 올바르지 않으면 ",e.jsx("code",{children:"IndentationError"}),"가 발생합니다. 이는 파이썬 초보자가 가장 자주 겪는 오류 중 하나입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Indentation Error Examples":"들여쓰기 오류 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# ✗ 잘못된 코드 - IndentationError 발생
age = 20
if age >= 18:
print("성인입니다.")    # 들여쓰기가 없음!

# ✗ 잘못된 코드 - 들여쓰기 불일치
if age >= 18:
    print("성인입니다.")
      print("투표 가능합니다.")  # 들여쓰기 깊이가 다름!`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-4. The Importance of the Colon (:)"}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"colon (:)"}),' must always follow the if statement. The colon tells Python "a code block starts here." Omitting the colon causes a ',e.jsx("code",{children:"SyntaxError"}),"."]}),e.jsx("h3",{children:"2-5. if Statement Examples"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"2-4. 콜론(:)의 중요성"}),e.jsxs("p",{children:["if문 뒤에는 반드시 ",e.jsx("strong",{children:"콜론(:)"}),'을 붙여야 합니다. 콜론은 "여기서부터 코드 블록이 시작된다"는 것을 파이썬에게 알려주는 기호입니다. 콜론을 빠뜨리면 ',e.jsx("code",{children:"SyntaxError"}),"가 발생합니다."]}),e.jsx("h3",{children:"2-5. if문 예제"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Basic if Example 1 - Adult Check":"기본 if문 예제 1 - 성인 여부"}),e.jsx("pre",{children:e.jsx("code",{children:`age = 20

if age >= 18:
    print("성인입니다.")        # 조건이 True → 실행됨
    print("투표할 수 있습니다.") # 같은 블록 → 함께 실행됨

print("프로그램 종료")  # if 블록 밖 → 항상 실행됨`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Basic if Example 2 - Positive Number Check":"기본 if문 예제 2 - 양수 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`number = int(input("숫자를 입력하세요: "))

if number > 0:
    print(f"{number}은(는) 양수입니다.")

if number < 0:
    print(f"{number}은(는) 음수입니다.")

if number == 0:
    print("0을 입력했습니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Basic if Example 3 - Understanding Block Scope":"기본 if문 예제 3 - 블록 범위 이해"}),e.jsx("pre",{children:e.jsx("code",{children:`temperature = 35

if temperature >= 30:
    print("폭염 경보!")      # if 블록 내부 (조건 True일 때만)
    print("외출을 자제하세요.") # if 블록 내부 (조건 True일 때만)

print("오늘의 기온 안내였습니다.")  # if 블록 밖 (항상 실행)

# → 들여쓰기가 없는 줄부터는 if 블록 밖입니다.
# → if 블록의 범위는 들여쓰기로 결정됩니다.`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. if-else Statement"}),e.jsx("h3",{children:"3-1. Choosing Between Two Cases"}),e.jsxs("p",{children:['With only an if statement, nothing happens when the condition is false. But in many cases, you need two paths: "If the condition is true, do A; if false, do B." This is when you use ',e.jsx("code",{children:"else"}),"."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"3. if-else문"}),e.jsx("h3",{children:"3-1. 두 가지 경우 중 하나를 선택"}),e.jsxs("p",{children:['if문만으로는 조건이 거짓일 때 아무 일도 하지 않습니다. 하지만 많은 경우 "조건이 참이면 A를 하고, 거짓이면 B를 한다"처럼 두 가지 경로가 모두 필요합니다. 이때 ',e.jsx("code",{children:"else"}),"를 사용합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"if-else Syntax":"if-else문 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`if 조건식:
    조건이 True일 때 실행할 코드
else:
    조건이 False일 때 실행할 코드`})})]}),s==="en"?e.jsxs("p",{children:[e.jsx("strong",{children:"How it works:"})," First, the condition is evaluated. If it is ",e.jsx("code",{children:"True"}),", the if block executes; if ",e.jsx("code",{children:"False"}),", the else block executes. Exactly one of the two blocks will always run."]}):e.jsxs("p",{children:[e.jsx("strong",{children:"동작 원리:"})," 먼저 조건식을 평가합니다. 결과가 ",e.jsx("code",{children:"True"}),"이면 if 블록을 실행하고,",e.jsx("code",{children:"False"}),"이면 else 블록을 실행합니다. 두 블록 중 반드시 하나만 실행됩니다."]}),s==="en"?e.jsx("h3",{children:"3-2. if-else Examples"}):e.jsx("h3",{children:"3-2. if-else문 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Pass/Fail Judgment":"합격/불합격 판정"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수를 입력하세요: "))

if score >= 60:
    print("축하합니다! 합격입니다!")
    print("다음 단계로 진행합니다.")
else:
    print("아쉽지만 불합격입니다.")
    print("다음 기회에 다시 도전하세요.")

# 실행 예시:
# 점수를 입력하세요: 75
# 축하합니다! 합격입니다!
# 다음 단계로 진행합니다.`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Even/Odd Check":"짝수/홀수 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`num = int(input("정수를 입력하세요: "))

if num % 2 == 0:
    print(f"{num}은(는) 짝수입니다.")
else:
    print(f"{num}은(는) 홀수입니다.")

# num % 2 → num을 2로 나눈 나머지
# 나머지가 0이면 짝수, 아니면 홀수`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Positive/Negative Check":"양수/음수 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`num = float(input("숫자를 입력하세요: "))

if num >= 0:
    print(f"{num}은(는) 양수 또는 0입니다.")
else:
    print(f"{num}은(는) 음수입니다.")`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. if-elif-else Statement"}),e.jsx("h3",{children:"4-1. Checking Multiple Conditions in Order"}),e.jsxs("p",{children:["Many real-world problems have more than two cases. For example, grading scores as A, B, C, D, F requires 5 cases. Use ",e.jsx("code",{children:"elif"})," (short for else if) to check multiple conditions in order."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"4. if-elif-else문"}),e.jsx("h3",{children:"4-1. 여러 조건을 순서대로 검사"}),e.jsxs("p",{children:["현실 세계의 많은 문제는 두 가지가 아니라 여러 가지 경우로 나뉩니다. 예를 들어 성적을 A, B, C, D, F로 나누려면 5가지 경우가 필요합니다. 이때 ",e.jsx("code",{children:"elif"}),"(else if의 줄임말)를 사용하여 여러 조건을 순서대로 검사합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"if-elif-else Syntax":"if-elif-else문 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`if 조건식1:
    조건식1이 True일 때 실행
elif 조건식2:
    조건식1은 False이고, 조건식2가 True일 때 실행
elif 조건식3:
    조건식1, 2 모두 False이고, 조건식3이 True일 때 실행
else:
    위의 모든 조건이 False일 때 실행 (선택사항)`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"4-2. The Importance of Condition Order"}),e.jsxs("p",{children:["You can add as many ",e.jsx("code",{children:"elif"})," blocks as needed, and ",e.jsx("code",{children:"else"})," is optional. Conditions are checked ",e.jsx("strong",{children:"from top to bottom"}),", and ",e.jsx("strong",{children:"only the first True condition's block executes"}),". The remaining conditions are skipped. Therefore, the order of conditions is very important."]}),e.jsx("h3",{children:"4-3. Grade Classification"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"4-2. 조건 검사 순서의 중요성"}),e.jsxs("p",{children:[e.jsx("code",{children:"elif"}),"는 몇 개든 추가할 수 있으며, ",e.jsx("code",{children:"else"}),"는 선택사항입니다. 조건은 ",e.jsx("strong",{children:"위에서 아래로 순서대로"})," 검사되며, ",e.jsx("strong",{children:"첫 번째로 True가 되는 조건의 블록만 실행"}),"됩니다. 나머지 조건은 검사하지 않고 건너뜁니다. 따라서 조건의 순서가 매우 중요합니다."]}),e.jsx("h3",{children:"4-3. 성적 등급 판별"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Grade Classification (A/B/C/D/F)":"성적 등급 판별 (A/B/C/D/F)"}),e.jsx("pre",{children:e.jsx("code",{children:`score = int(input("점수를 입력하세요 (0~100): "))

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
# 점수: 85점, 등급: B`})})]}),s==="en"?e.jsx("h3",{children:"4-4. Fare Tier Calculation"}):e.jsx("h3",{children:"4-4. 요금 등급 계산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Fare by Age Group":"나이에 따른 요금 등급"}),e.jsx("pre",{children:e.jsx("code",{children:`age = int(input("나이를 입력하세요: "))

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
    print("경로 우대: 무료입니다.") # 65세 이상`})})]}),s==="en"?e.jsx("h3",{children:"4-5. Season Detection"}):e.jsx("h3",{children:"4-5. 계절 판별"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Season by Month":"월(month)로 계절 판별"}),e.jsx("pre",{children:e.jsx("code",{children:`month = int(input("월(1~12)을 입력하세요: "))

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
# 7월은 여름입니다.`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. Comparison Operators"}),e.jsx("h3",{children:"5-1. Comparison Operator Table"}),e.jsxs("p",{children:["Comparison operators compare two values and return ",e.jsx("code",{children:"True"})," or ",e.jsx("code",{children:"False"}),". They are the most commonly used operators in conditionals."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Result"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"=="})}),e.jsx("td",{children:"Equal"}),e.jsx("td",{children:e.jsx("code",{children:"5 == 5"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"!="})}),e.jsx("td",{children:"Not equal"}),e.jsx("td",{children:e.jsx("code",{children:"5 != 3"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:">"})}),e.jsx("td",{children:"Greater than"}),e.jsx("td",{children:e.jsx("code",{children:"7 > 3"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<"})}),e.jsx("td",{children:"Less than"}),e.jsx("td",{children:e.jsx("code",{children:"2 < 8"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:">="})}),e.jsx("td",{children:"Greater or equal"}),e.jsx("td",{children:e.jsx("code",{children:"5 >= 5"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<="})}),e.jsx("td",{children:"Less or equal"}),e.jsx("td",{children:e.jsx("code",{children:"3 <= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"False"})})]})]})]}),e.jsx("h3",{children:"5-2. == vs = Difference (Very Important!)"}),e.jsxs("p",{children:["This is one of the most common confusions for beginners. ",e.jsx("code",{children:"="})," is the ",e.jsx("strong",{children:"assignment operator"})," (stores a value in a variable), and ",e.jsx("code",{children:"=="})," is the ",e.jsx("strong",{children:"comparison operator"})," (checks if two values are equal). You must distinguish between these two."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"5. 비교 연산자 (Comparison Operators)"}),e.jsx("h3",{children:"5-1. 비교 연산자 표"}),e.jsxs("p",{children:["비교 연산자는 두 값을 비교하여 ",e.jsx("code",{children:"True"})," 또는 ",e.jsx("code",{children:"False"}),"를 반환합니다. 조건문에서 가장 많이 사용되는 연산자입니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"예시"}),e.jsx("th",{children:"결과"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"=="})}),e.jsx("td",{children:"같다 (equal)"}),e.jsx("td",{children:e.jsx("code",{children:"5 == 5"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"!="})}),e.jsx("td",{children:"같지 않다 (not equal)"}),e.jsx("td",{children:e.jsx("code",{children:"5 != 3"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:">"})}),e.jsx("td",{children:"크다 (greater than)"}),e.jsx("td",{children:e.jsx("code",{children:"7 > 3"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<"})}),e.jsx("td",{children:"작다 (less than)"}),e.jsx("td",{children:e.jsx("code",{children:"2 < 8"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:">="})}),e.jsx("td",{children:"크거나 같다 (greater or equal)"}),e.jsx("td",{children:e.jsx("code",{children:"5 >= 5"})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<="})}),e.jsx("td",{children:"작거나 같다 (less or equal)"}),e.jsx("td",{children:e.jsx("code",{children:"3 <= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"False"})})]})]})]}),e.jsx("h3",{children:"5-2. == vs = 차이 (매우 중요!)"}),e.jsxs("p",{children:["초보자가 가장 자주 혼동하는 부분입니다. ",e.jsx("code",{children:"="}),"는 ",e.jsx("strong",{children:"대입 연산자"}),"(값을 변수에 저장)이고,",e.jsx("code",{children:"=="}),"는 ",e.jsx("strong",{children:"비교 연산자"}),"(두 값이 같은지 비교)입니다. 이 둘을 반드시 구분해야 합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"= (Assignment) vs == (Comparison)":"= (대입) vs == (비교)"}),e.jsx("pre",{children:e.jsx("code",{children:`# = 는 대입 연산자: 오른쪽 값을 왼쪽 변수에 저장
x = 10          # x에 10을 저장
name = "홍길동"  # name에 "홍길동"을 저장

# == 는 비교 연산자: 두 값이 같은지 비교
print(x == 10)       # True (x의 값이 10과 같은가?)
print(x == 5)        # False
print(name == "홍길동")  # True

# ★ 흔한 실수: 조건문에서 =를 쓰면 오류!
# if x = 10:   ← SyntaxError 발생!
# if x == 10:  ← 올바른 코드`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-3. String Comparison"}),e.jsxs("p",{children:["Strings can also use comparison operators. ",e.jsx("code",{children:"=="})," and ",e.jsx("code",{children:"!="})," compare whether string contents are identical, while ",e.jsx("code",{children:">"}),", ",e.jsx("code",{children:"<"}),", etc. compare in ",e.jsx("strong",{children:"lexicographic order"}),". Lexicographic comparison is based on Unicode code values."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"5-3. 문자열 비교"}),e.jsxs("p",{children:["문자열도 비교 연산자를 사용할 수 있습니다. ",e.jsx("code",{children:"=="}),"와 ",e.jsx("code",{children:"!="}),"는 문자열의 내용이 동일한지 비교하고,",e.jsx("code",{children:">"}),", ",e.jsx("code",{children:"<"})," 등은 ",e.jsx("strong",{children:"사전순(lexicographic order)"}),"으로 비교합니다. 사전순 비교는 유니코드 코드값(문자 번호)을 기준으로 합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"String Comparison Examples":"문자열 비교 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 동등 비교
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
print(ord("가")) # 44032`})})]}),s==="en"?e.jsx("h3",{children:"5-4. Comparison Operator Usage Examples"}):e.jsx("h3",{children:"5-4. 비교 연산자 활용 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Various Comparison Operator Usage":"다양한 비교 연산자 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`a = 10
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
print(0 <= x <= 100)   # True (0 <= 15 <= 100)`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. Logical Operators"}),e.jsx("h3",{children:"6-1. Logical Operator Overview"}),e.jsx("p",{children:"Logical operators are used to combine multiple conditions. They are essential for making complex judgments in conditionals."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"and"})}),e.jsx("td",{children:"AND (logical conjunction)"}),e.jsxs("td",{children:["True only when ",e.jsx("strong",{children:"both conditions are True"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"or"})}),e.jsx("td",{children:"OR (logical disjunction)"}),e.jsxs("td",{children:["True when ",e.jsx("strong",{children:"at least one condition is True"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"not"})}),e.jsx("td",{children:"NOT (logical negation)"}),e.jsx("td",{children:"Reverses True to False and False to True"})]})]})]}),e.jsx("h3",{children:"6-2. Truth Tables"}),e.jsx("p",{children:e.jsx("strong",{children:"and operator truth table:"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"6. 논리 연산자 (Logical Operators)"}),e.jsx("h3",{children:"6-1. 논리 연산자 개요"}),e.jsx("p",{children:"논리 연산자는 여러 조건을 조합할 때 사용합니다. 조건문에서 복합적인 판단을 할 때 필수적입니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"and"})}),e.jsx("td",{children:"그리고 (논리곱)"}),e.jsxs("td",{children:["두 조건이 ",e.jsx("strong",{children:"모두 True"}),"일 때만 True"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"or"})}),e.jsx("td",{children:"또는 (논리합)"}),e.jsxs("td",{children:["두 조건 중 ",e.jsx("strong",{children:"하나라도 True"}),"이면 True"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"not"})}),e.jsx("td",{children:"아니다 (논리부정)"}),e.jsx("td",{children:"True를 False로, False를 True로 반전"})]})]})]}),e.jsx("h3",{children:"6-2. 진리표 (Truth Table)"}),e.jsx("p",{children:e.jsx("strong",{children:"and 연산자 진리표:"})})]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"A and B"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"True"}),e.jsx("td",{children:"True"}),e.jsx("td",{children:e.jsx("strong",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"True"}),e.jsx("td",{children:"False"}),e.jsx("td",{children:"False"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"False"}),e.jsx("td",{children:"True"}),e.jsx("td",{children:"False"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"False"}),e.jsx("td",{children:"False"}),e.jsx("td",{children:"False"})]})]})]}),e.jsx("p",{children:e.jsx("strong",{children:s==="en"?"or operator truth table:":"or 연산자 진리표:"})}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"A or B"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"True"}),e.jsx("td",{children:"True"}),e.jsx("td",{children:e.jsx("strong",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"True"}),e.jsx("td",{children:"False"}),e.jsx("td",{children:e.jsx("strong",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"False"}),e.jsx("td",{children:"True"}),e.jsx("td",{children:e.jsx("strong",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"False"}),e.jsx("td",{children:"False"}),e.jsx("td",{children:"False"})]})]})]}),e.jsx("p",{children:e.jsx("strong",{children:s==="en"?"not operator truth table:":"not 연산자 진리표:"})}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"A"}),e.jsx("th",{children:"not A"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"True"}),e.jsx("td",{children:"False"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"False"}),e.jsx("td",{children:"True"})]})]})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"6-3. Short-circuit Evaluation"}),e.jsxs("p",{children:["Python performs ",e.jsx("strong",{children:"short-circuit evaluation"})," in logical operations. That is, if the result is already determined, it does not evaluate the remaining conditions."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"and"}),": If the first condition is ",e.jsx("code",{children:"False"}),", it returns ",e.jsx("code",{children:"False"})," without checking the second"]}),e.jsxs("li",{children:[e.jsx("code",{children:"or"}),": If the first condition is ",e.jsx("code",{children:"True"}),", it returns ",e.jsx("code",{children:"True"})," without checking the second"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"6-3. 단락 평가 (Short-circuit Evaluation)"}),e.jsxs("p",{children:["파이썬은 논리 연산에서 ",e.jsx("strong",{children:"단락 평가(Short-circuit Evaluation)"}),"를 수행합니다. 즉, 결과가 이미 확정되면 나머지 조건을 평가하지 않습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"and"}),": 첫 번째 조건이 ",e.jsx("code",{children:"False"}),"이면 두 번째 조건을 확인하지 않고 바로 ",e.jsx("code",{children:"False"})," 반환"]}),e.jsxs("li",{children:[e.jsx("code",{children:"or"}),": 첫 번째 조건이 ",e.jsx("code",{children:"True"}),"이면 두 번째 조건을 확인하지 않고 바로 ",e.jsx("code",{children:"True"})," 반환"]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Short-circuit Evaluation Example":"단락 평가 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# and: 첫 번째가 False이면 두 번째는 확인하지 않음
x = 0
if x != 0 and (10 / x) > 2:  # x가 0이므로 첫 조건이 False
    print("조건 충족")         # → 10/x는 실행되지 않음 (0으로 나누기 방지!)
else:
    print("조건 미충족")

# or: 첫 번째가 True이면 두 번째는 확인하지 않음
has_ticket = True
if has_ticket or check_membership():  # has_ticket이 True
    print("입장 가능")  # → check_membership()은 호출되지 않음`})})]}),s==="en"?e.jsx("h3",{children:"6-4. Logical Operator Usage Examples"}):e.jsx("h3",{children:"6-4. 논리 연산자 활용 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Logical Operator Usage":"논리 연산자 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`# ── and: 두 조건 모두 만족 ──
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
    print("유효한 점수입니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Compound Condition Example":"복합 조건 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 놀이공원 놀이기구 탑승 조건:
# 키 120cm 이상 AND (나이 8세 이상 OR 보호자 동반)
height = int(input("키(cm)를 입력하세요: "))
age = int(input("나이를 입력하세요: "))
with_guardian = input("보호자 동반입니까? (y/n): ") == "y"

if height >= 120 and (age >= 8 or with_guardian):
    print("탑승 가능합니다!")
else:
    print("탑승할 수 없습니다.")

# ★ 괄호를 사용하여 연산 우선순위를 명확히 합니다.
# and가 or보다 우선순위가 높으므로 괄호가 중요합니다.`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. Membership Operators"}),e.jsx("p",{children:"Membership operators check whether a value is contained in a sequence (string, list, tuple, etc.). They are very useful in conditionals."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"in"})}),e.jsx("td",{children:"Is contained"}),e.jsx("td",{children:"True if value exists in the sequence"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"not in"})}),e.jsx("td",{children:"Is not contained"}),e.jsx("td",{children:"True if value does not exist in the sequence"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"7. 멤버십 연산자 (Membership Operators)"}),e.jsx("p",{children:"멤버십 연산자는 어떤 값이 시퀀스(문자열, 리스트, 튜플 등)에 포함되어 있는지 확인합니다. 조건문에서 매우 유용하게 사용됩니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"in"})}),e.jsx("td",{children:"포함되어 있다"}),e.jsx("td",{children:"값이 시퀀스에 존재하면 True"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"not in"})}),e.jsx("td",{children:"포함되어 있지 않다"}),e.jsx("td",{children:"값이 시퀀스에 없으면 True"})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Membership Operators - Strings":"멤버십 연산자 - 문자열에서 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열에서 특정 문자/부분문자열 포함 여부
sentence = "파이썬은 재미있는 프로그래밍 언어입니다"

print("파이썬" in sentence)     # True
print("자바" in sentence)       # False
print("자바" not in sentence)   # True

# 조건문에서 활용
email = input("이메일을 입력하세요: ")
if "@" in email:
    print("유효한 이메일 형식입니다.")
else:
    print("이메일에 @가 포함되어야 합니다.")`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Membership Operators - Lists":"멤버십 연산자 - 리스트에서 사용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 리스트에서 특정 값 포함 여부
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
    print("잘못된 입력입니다.")`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. Nested Conditionals (Nested if)"}),e.jsx("h3",{children:"8-1. Conditionals Inside Conditionals"}),e.jsxs("p",{children:["You can place conditionals inside other conditionals. This is called ",e.jsx("strong",{children:"nested conditionals"}),". They are used when complex decision logic is needed, but deep nesting makes code hard to read, so it is recommended to limit nesting to ",e.jsx("strong",{children:"3 levels or fewer"}),"."]}),e.jsx("h3",{children:"8-2. Movie Ticket Pricing"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"8. 중첩 조건문 (Nested if)"}),e.jsx("h3",{children:"8-1. 조건문 안에 조건문"}),e.jsxs("p",{children:["조건문 안에 또 다른 조건문을 넣을 수 있습니다. 이를 ",e.jsx("strong",{children:"중첩 조건문"}),"이라고 합니다. 복잡한 판단 로직이 필요할 때 사용하지만, 중첩이 깊어지면 코드를 읽기 어려워지므로 일반적으로 ",e.jsx("strong",{children:"3단계 이내"}),"로 제한하는 것을 권장합니다."]}),e.jsx("h3",{children:"8-2. 영화 요금 계산"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Nested Conditional - Movie Ticket Pricing":"중첩 조건문 - 영화 요금 계산"}),e.jsx("pre",{children:e.jsx("code",{children:`# 영화 요금:
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
        print(f"성인 일반 요금: {price:,}원")`})})]}),s==="en"?e.jsx("h3",{children:"8-3. Login System"}):e.jsx("h3",{children:"8-3. 로그인 시스템"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Nested Conditional - Login System":"중첩 조건문 - 로그인 시스템"}),e.jsx("pre",{children:e.jsx("code",{children:`# 간단한 로그인 시스템
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
# 로그인 성공! 환영합니다.`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. Conditional Expression (Ternary Operator)"}),e.jsxs("p",{children:["Python provides a ",e.jsx("strong",{children:"conditional expression"})," that can express simple conditionals in a single line. It corresponds to the ternary operator (",e.jsx("code",{children:"? :"}),") in other programming languages."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"9. 조건 표현식 (삼항 연산자)"}),e.jsxs("p",{children:["파이썬은 간단한 조건문을 한 줄로 표현할 수 있는 ",e.jsx("strong",{children:"조건 표현식(Conditional Expression)"}),"을 제공합니다. 다른 프로그래밍 언어의 삼항 연산자(",e.jsx("code",{children:"? :"}),")에 해당합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Conditional Expression Syntax":"조건 표현식 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문법: 값1 if 조건 else 값2
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
print(f"최대값: {maximum}")  # 최대값: 20`})})]}),s==="en"?e.jsx("p",{children:"Conditional expressions should only be used for simple conditions. For complex logic, using regular if-else statements is better for readability."}):e.jsx("p",{children:"조건 표현식은 간단한 조건에만 사용하는 것이 좋습니다. 복잡한 로직은 일반 if-else문을 사용하는 것이 가독성에 더 좋습니다."}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"10. Comprehensive Practice Examples"}),e.jsx("h3",{children:"Example 1: Rock-Paper-Scissors Game"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," The user plays rock-paper-scissors against the computer. The computer chooses randomly, and the winner is determined."]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"10. 종합 실습 예제"}),e.jsx("h3",{children:"예제 1: 가위바위보 게임"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 사용자와 컴퓨터가 가위바위보를 합니다. 컴퓨터는 랜덤으로 선택하고, 승패를 판정합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC (Problem Definition Chart)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 사용자 선택  │ 컴퓨터 랜덤선택 │ 컴퓨터 선택     │
│ (가위/바위/보)│ 승패 판정       │ 승/패/무승부    │
└──────────────┴─────────────────┴─────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Rock-Paper-Scissors Game Code":"가위바위보 게임 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`import random

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
# 축하합니다! 이겼습니다!`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 2: Leap Year Checker"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Enter a year and determine if it is a leap year.",e.jsx("br",{}),e.jsx("strong",{children:"Leap year rule:"})," A year divisible by 4 but not by 100, or divisible by 400"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 2: 윤년 판별기"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 연도를 입력받아 윤년(Leap Year)인지 판별합니다.",e.jsx("br",{}),e.jsx("strong",{children:"윤년 조건:"})," 4의 배수이면서 100의 배수가 아닌 해, 또는 400의 배수인 해"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC (Problem Definition Chart)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 연도(year)   │ 윤년 조건 검사  │ 윤년 여부       │
│              │ 4의 배수 AND    │                 │
│              │ NOT 100의 배수  │                 │
│              │ OR 400의 배수   │                 │
└──────────────┴─────────────────┴─────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Leap Year Checker Code":"윤년 판별기 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`year = int(input("연도를 입력하세요: "))

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
# 2000년은 윤년입니다.   (400의 배수)`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 3: Taxi Fare Calculator"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Calculate taxi fare based on travel distance and time of day.",e.jsx("br",{}),e.jsx("strong",{children:"Fare structure:"})," Base fare 4,800 KRW (within 2km), then 1,000 KRW per additional km, 20% surcharge for late-night hours (22:00-06:00)"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 3: 택시 요금 계산기"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 이동 거리와 시간대를 입력받아 택시 요금을 계산합니다.",e.jsx("br",{}),e.jsx("strong",{children:"요금 기준:"})," 기본요금 4,800원(2km 이내), 이후 km당 1,000원 추가, 심야(22시~06시)는 20% 할증"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC (Problem Definition Chart)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 거리(km)     │ 기본요금 계산   │ 총 요금         │
│ 시간(hour)   │ 추가요금 계산   │ (심야할증 표시) │
│              │ 심야할증 적용   │                 │
└──────────────┴─────────────────┴─────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Taxi Fare Calculator Code":"택시 요금 계산기 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`distance = float(input("이동 거리(km)를 입력하세요: "))
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
# 택시 요금: 9,960원`})})]}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Example 4: BMI (Body Mass Index) Assessment"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problem:"})," Calculate BMI from height and weight, and determine obesity level.",e.jsx("br",{}),e.jsx("strong",{children:"BMI Formula:"})," BMI = weight(kg) / height(m)",e.jsx("sup",{children:"2"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"예제 4: 체질량지수(BMI) 판정"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제:"})," 키와 체중을 입력받아 BMI를 계산하고 비만도를 판정합니다.",e.jsx("br",{}),e.jsx("strong",{children:"BMI 공식:"})," BMI = 체중(kg) / 키(m)",e.jsx("sup",{children:"2"})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PDC (Problem Definition Chart)"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────────────┐
│            Problem Definition Chart              │
├──────────────┬─────────────────┬─────────────────┤
│    Input     │    Process      │    Output       │
├──────────────┼─────────────────┼─────────────────┤
│ 키(cm)       │ cm → m 변환     │ BMI 수치        │
│ 체중(kg)     │ BMI 계산        │ 비만도 등급     │
│              │ 등급 판정       │                 │
└──────────────┴─────────────────┴─────────────────┘`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"BMI Assessment Program Code":"BMI 판정 프로그램 코드"}),e.jsx("pre",{children:e.jsx("code",{children:`# 입력
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
# ==============================`})})]}),s==="en"?e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.commonMistakes")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing = and ==:"})," ",e.jsx("code",{children:"if x = 10"})," is an assignment and causes an error. Comparisons must use ",e.jsx("code",{children:"if x == 10"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing colon (:):"})," Forgetting the colon after ",e.jsx("code",{children:"if score >= 60"})," causes a ",e.jsx("code",{children:"SyntaxError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inconsistent indentation:"})," Different indentation depths within the same block cause an ",e.jsx("code",{children:"IndentationError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Writing else if instead of elif:"})," In Python, you must use ",e.jsx("code",{children:"elif"}),", not ",e.jsx("code",{children:"else if"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Wrong condition order:"})," If you put a broad condition first, narrow conditions will never be reached. Example: if ",e.jsx("code",{children:"if score >= 60"})," comes first, ",e.jsx("code",{children:"elif score >= 90"})," will never execute."]})]})]}):e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.commonMistakes")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"= vs == 혼동:"})," ",e.jsx("code",{children:"if x = 10"}),"은 대입문이므로 오류가 발생합니다. 비교는 반드시 ",e.jsx("code",{children:"if x == 10"}),"으로 써야 합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"콜론(:) 누락:"})," ",e.jsx("code",{children:"if score >= 60"})," 뒤에 콜론을 빠뜨리면",e.jsx("code",{children:"SyntaxError"}),"가 발생합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"들여쓰기 불일치:"})," 같은 블록 내에서 들여쓰기 깊이가 다르면",e.jsx("code",{children:"IndentationError"}),"가 발생합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"elif를 else if로 쓰는 실수:"})," 파이썬에서는 ",e.jsx("code",{children:"else if"}),"가 아니라 반드시 ",e.jsx("code",{children:"elif"}),"로 써야 합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"조건 순서 오류:"})," 넓은 범위의 조건을 먼저 쓰면 좁은 범위의 조건에 도달하지 못합니다. 예: ",e.jsx("code",{children:"if score >= 60"}),"을 먼저 쓰면 ",e.jsx("code",{children:"elif score >= 90"}),"은 절대 실행되지 않습니다."]})]})]}),s==="en"?e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Conditionals"})," are selection structures that control program flow, executing different code based on true/false conditions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"if"})," executes a block only when the condition is True; ",e.jsx("strong",{children:"else"})," specifies a block for when it is False"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"elif"})," checks multiple conditions in order, and only the first True condition's block executes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Comparison operators"})," (==, !=, >, <, >=, <=) compare two values and return True/False"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Logical operators"})," (and, or, not) combine multiple conditions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membership operators"})," (in, not in) check if a value is contained in a sequence"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested conditionals"})," place conditionals inside conditionals; limit to 3 levels or fewer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conditional expressions"})," (ternary operator) express simple conditions in a single line"]}),e.jsxs("li",{children:["Python uses ",e.jsx("strong",{children:"indentation"})," to define code blocks, and consistent indentation is crucial"]})]})]}):e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:r("pythonLearning.keySummary")}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"조건문"}),"은 프로그램의 흐름을 제어하는 선택 구조이며, 조건의 참/거짓에 따라 다른 코드를 실행한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"if문"}),"은 조건이 True일 때만 블록을 실행하며, ",e.jsx("strong",{children:"else"}),"는 False일 때 실행할 블록을 지정한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"elif"}),"로 여러 조건을 순서대로 검사할 수 있으며, 첫 번째 True 조건의 블록만 실행된다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"비교 연산자"}),"(==, !=, >, <, >=, <=)는 두 값을 비교하여 True/False를 반환한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"논리 연산자"}),"(and, or, not)로 여러 조건을 조합할 수 있다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"멤버십 연산자"}),"(in, not in)로 시퀀스 내 포함 여부를 확인할 수 있다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"중첩 조건문"}),"은 조건문 안에 조건문을 넣는 것이며, 3단계 이내로 제한하는 것을 권장한다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"조건 표현식"}),"(삼항 연산자)으로 간단한 조건을 한 줄로 표현할 수 있다"]}),e.jsxs("li",{children:["파이썬은 ",e.jsx("strong",{children:"들여쓰기"}),"로 코드 블록을 구분하며, 일관된 들여쓰기가 매우 중요하다"]})]})]}),s==="en"?e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 1: Detailed Grade Classification Program"})}),e.jsx("p",{children:"Write a program that receives a score (0-100) from the user and outputs a grade based on the following criteria."}),e.jsxs("ul",{children:[e.jsx("li",{children:"A+ : 95 or above"}),e.jsx("li",{children:"A : 90 or above, below 95"}),e.jsx("li",{children:"B+ : 85 or above, below 90"}),e.jsx("li",{children:"B : 80 or above, below 85"}),e.jsx("li",{children:"C+ : 75 or above, below 80"}),e.jsx("li",{children:"C : 70 or above, below 75"}),e.jsx("li",{children:"D+ : 65 or above, below 70"}),e.jsx("li",{children:"D : 60 or above, below 65"}),e.jsx("li",{children:"F : below 60"})]}),e.jsx("p",{children:"Display an error message for invalid scores (below 0 or above 100)."}),e.jsx("p",{children:e.jsx("strong",{children:"Exercise 2: Leap Year Detection Program"})}),e.jsxs("p",{children:["Write a program that receives a year from the user and determines whether it is a leap year or common year.",e.jsx("br",{}),"Leap year rule: divisible by 4 but not by 100, or divisible by 400",e.jsx("br",{}),"Also display how many days February has in that year (leap year: 29 days, common year: 28 days)."]})]}):e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.exercises")}),e.jsx("p",{children:e.jsx("strong",{children:"과제 1: 세부 성적 등급 판정 프로그램"})}),e.jsx("p",{children:"사용자로부터 점수(0~100)를 입력받아 다음 기준에 따라 등급을 출력하는 프로그램을 작성하세요."}),e.jsxs("ul",{children:[e.jsx("li",{children:"A+ : 95점 이상"}),e.jsx("li",{children:"A : 90점 이상 95점 미만"}),e.jsx("li",{children:"B+ : 85점 이상 90점 미만"}),e.jsx("li",{children:"B : 80점 이상 85점 미만"}),e.jsx("li",{children:"C+ : 75점 이상 80점 미만"}),e.jsx("li",{children:"C : 70점 이상 75점 미만"}),e.jsx("li",{children:"D+ : 65점 이상 70점 미만"}),e.jsx("li",{children:"D : 60점 이상 65점 미만"}),e.jsx("li",{children:"F : 60점 미만"})]}),e.jsx("p",{children:"잘못된 점수(0 미만 또는 100 초과)를 입력하면 오류 메시지를 출력하세요."}),e.jsx("p",{children:e.jsx("strong",{children:"과제 2: 윤년 판별 프로그램"})}),e.jsxs("p",{children:["사용자로부터 연도를 입력받아 윤년인지 평년인지 판별하는 프로그램을 작성하세요.",e.jsx("br",{}),"윤년 조건: 4의 배수이면서 100의 배수가 아닌 해, 또는 400의 배수인 해",e.jsx("br",{}),"해당 연도의 2월이 몇 일인지도 함께 출력하세요 (윤년: 29일, 평년: 28일)."]})]}),s==="en"?e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 1: Number Guessing Game"})}),e.jsxs("p",{children:['The computer picks a random number from 1 to 45. Give the user 3 chances, and after each guess, provide a hint: "Higher" or "Lower." If they guess correctly within 3 tries, print "Winner!"; otherwise, reveal the answer.',e.jsx("br",{}),e.jsxs("em",{children:["Hint: Use ",e.jsx("code",{children:"import random"}),", ",e.jsx("code",{children:"random.randint(1, 45)"})]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Advanced 2: Simple ATM Program"})}),e.jsx("p",{children:"Set an initial balance of 50,000 KRW. Show the user a menu: 1) Check Balance, 2) Deposit, 3) Withdraw. When depositing, add the amount; when withdrawing, check for insufficient funds before processing. Include error handling for invalid menu inputs."})]}):e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:r("pythonLearning.advancedProblems")}),e.jsx("p",{children:e.jsx("strong",{children:"심화 1: 로또 번호 맞추기 게임"})}),e.jsxs("p",{children:['1부터 45까지의 랜덤 숫자 하나를 컴퓨터가 정합니다. 사용자에게 3번의 기회를 주고, 매번 입력 후 "더 큽니다" 또는 "더 작습니다" 힌트를 제공합니다. 3회 안에 맞추면 "당첨!", 못 맞추면 정답을 공개합니다.',e.jsx("br",{}),e.jsxs("em",{children:["힌트: ",e.jsx("code",{children:"import random"}),", ",e.jsx("code",{children:"random.randint(1, 45)"})," 사용"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"심화 2: 간이 ATM 프로그램"})}),e.jsx("p",{children:"초기 잔액을 50,000원으로 설정합니다. 사용자에게 메뉴를 보여줍니다: 1) 잔액 조회, 2) 입금, 3) 출금. 입금 시 금액을 더하고, 출금 시 잔액 부족 여부를 확인한 후 처리합니다. 잘못된 메뉴 입력에 대한 오류 처리도 포함하세요."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(n,{to:"/python-learning/06",className:"lesson-nav-btn prev",children:["← 06: ",s==="en"?"Flowcharts":"순서도"]}),e.jsxs(n,{to:"/python-learning/08",className:"lesson-nav-btn next",children:["08: ",s==="en"?"Loops":"반복문"," →"]})]})]})})})]})}export{c as default};
