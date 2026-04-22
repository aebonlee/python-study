import{b as i,j as e,L as r}from"./index-Hl1XUWna.js";function t(){const{t:s,lang:n}=i();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:n==="en"?"Week 2: I/O & Variables":"2주차: 입출력과 변수"}),e.jsx("p",{children:n==="en"?"print(), input() functions and variable usage":"print(), input() 함수와 변수 활용"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:s("pythonLearning.learningObjectives")}),n==="en"?e.jsxs("ul",{children:[e.jsx("li",{children:"Use the various parameters of print() (sep, end) to control output formatting."}),e.jsx("li",{children:"Understand the concept of variables and follow proper naming conventions (PEP 8)."}),e.jsx("li",{children:"Use the input() function to receive user input and apply type conversion."}),e.jsx("li",{children:"Compare and use 3 string formatting methods (%, format(), f-string)."}),e.jsx("li",{children:"Understand escape sequences and finely control output formatting."})]}):e.jsxs("ul",{children:[e.jsx("li",{children:"print() 함수의 다양한 매개변수(sep, end)를 활용하여 출력 형식을 제어한다."}),e.jsx("li",{children:"변수의 개념을 이해하고 올바른 명명 규칙(PEP 8)을 따른다."}),e.jsx("li",{children:"input() 함수를 사용하여 사용자 입력을 받고 형변환을 적용한다."}),e.jsx("li",{children:"문자열 포매팅 3가지 방법(%, format(), f-string)을 비교하고 활용한다."}),e.jsx("li",{children:"이스케이프 시퀀스를 이해하고 출력 형식을 세밀하게 제어한다."})]})]}),e.jsx("h2",{children:n==="en"?"1. Output: Mastering the print() Function":"1. 출력: print() 함수 완전 정복"}),e.jsx("h3",{children:n==="en"?"1.1 Syntax of print()":"1.1 print() 함수의 문법"}),n==="en"?e.jsxs("p",{children:[e.jsx("code",{children:"print()"})," is the most frequently used built-in function in Python, which outputs values to the screen (standard output). The official syntax is as follows."]}):e.jsxs("p",{children:[e.jsx("code",{children:"print()"}),"는 파이썬에서 가장 자주 사용하는 내장 함수로, 화면(표준 출력)에 값을 출력합니다. 공식 문법은 다음과 같습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Full syntax of print()":"print() 함수의 전체 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)

# *objects  : 출력할 값(들). 여러 개를 쉼표로 구분하여 전달 가능
# sep       : 여러 값 사이에 넣을 구분자 (기본값: 공백 ' ')
# end       : 출력 끝에 추가할 문자 (기본값: 줄바꿈 '\\n')
# file      : 출력 대상 (기본값: 화면, 파일로 변경 가능)
# flush     : 출력 버퍼를 즉시 비울지 여부`})})]}),e.jsx("h3",{children:n==="en"?"1.2 Basic Output":"1.2 기본 출력"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Basic output examples":"기본 출력 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 출력
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
print()               # 아무것도 없이 줄바꿈만`})})]}),e.jsx("h3",{children:n==="en"?"1.3 Outputting Multiple Values (Comma-separated)":"1.3 여러 값 출력 (쉼표 구분)"}),n==="en"?e.jsxs("p",{children:["When you pass multiple values separated by commas (",e.jsx("code",{children:","}),") to ",e.jsx("code",{children:"print()"}),",",e.jsx("strong",{children:"a space is automatically inserted"})," between each value."]}):e.jsxs("p",{children:[e.jsx("code",{children:"print()"}),"에 여러 값을 쉼표(",e.jsx("code",{children:","}),")로 구분하여 전달하면 각 값 사이에 ",e.jsx("strong",{children:"자동으로 공백 한 칸"}),"이 삽입되어 출력됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Outputting multiple values":"여러 값 출력"}),e.jsx("pre",{children:e.jsx("code",{children:`# 여러 값을 쉼표로 구분
print("이름:", "홍길동")           # 이름: 홍길동
print("나이:", 20, "세")           # 나이: 20 세
print("합계:", 10 + 20 + 30)      # 합계: 60

# 다양한 자료형을 함께 출력 가능
print("점수는", 95, "점이고, 평균은", 87.5, "입니다.")
# 점수는 95 점이고, 평균은 87.5 입니다.`})})]}),e.jsx("h3",{children:n==="en"?"1.4 sep Parameter: Changing the Separator":"1.4 sep 매개변수: 구분자 변경"}),n==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"sep"})," parameter allows you to change the separator between multiple values to any character instead of the default space."]}):e.jsxs("p",{children:[e.jsx("code",{children:"sep"})," 매개변수를 사용하면 여러 값 사이의 구분자를 공백 대신 원하는 문자로 변경할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Using the sep parameter":"sep 매개변수 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 구분자 (공백)
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
# 체리`})})]}),e.jsx("h3",{children:n==="en"?"1.5 end Parameter: Controlling Line Breaks":"1.5 end 매개변수: 줄바꿈 제어"}),n==="en"?e.jsxs("p",{children:["By default, ",e.jsx("code",{children:"print()"})," ",e.jsxs("strong",{children:["automatically adds a newline (",e.jsx("code",{children:"\\n"}),")"]})," after output. The ",e.jsx("code",{children:"end"})," parameter allows you to output a different character instead of a newline."]}):e.jsxs("p",{children:["기본적으로 ",e.jsx("code",{children:"print()"}),"는 출력 후 ",e.jsxs("strong",{children:["자동 줄바꿈(",e.jsx("code",{children:"\\\\n"}),")"]}),"을 합니다.",e.jsx("code",{children:"end"})," 매개변수를 사용하면 줄바꿈 대신 다른 문자를 출력할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Using the end parameter":"end 매개변수 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 동작: 각 print()마다 줄바꿈
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
# 2025-03-01 (토)`})})]}),e.jsx("h2",{children:n==="en"?"2. Escape Sequences":"2. 이스케이프 시퀀스 (Escape Sequence)"}),e.jsx("h3",{children:n==="en"?"2.1 What is an Escape Sequence?":"2.1 이스케이프 시퀀스란?"}),n==="en"?e.jsxs("p",{children:[e.jsx("strong",{children:"Escape sequences"})," are special character combinations that begin with a backslash (",e.jsx("code",{children:"\\\\"}),"), representing actions that are difficult to type directly on screen, such as newlines and tabs. They are used within strings and are essential for fine-tuning output formatting."]}):e.jsxs("p",{children:[e.jsx("strong",{children:"이스케이프 시퀀스"}),"는 역슬래시(",e.jsx("code",{children:"\\\\"}),")로 시작하는 특수 문자 조합으로, 줄바꿈, 탭 등 화면에 직접 입력하기 어려운 특수한 동작을 표현합니다. 문자열 안에서 사용되며, 출력 형식을 세밀하게 제어할 때 필수적입니다."]}),e.jsx("h3",{children:n==="en"?"2.2 Key Escape Sequences":"2.2 주요 이스케이프 시퀀스"}),n==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Escape Sequence"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\n"})}),e.jsx("td",{children:"New Line"}),e.jsx("td",{children:"Move to the next line"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\t"})}),e.jsx("td",{children:"Tab"}),e.jsx("td",{children:"Move by a tab width (usually 4-8 spaces)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\\\\\"})}),e.jsx("td",{children:"Backslash"}),e.jsx("td",{children:"Output the backslash character itself"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\'"})}),e.jsx("td",{children:"Single quote"}),e.jsx("td",{children:"Output a single quote inside a string"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'\\\\"'})}),e.jsx("td",{children:"Double quote"}),e.jsx("td",{children:"Output a double quote inside a string"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\r"})}),e.jsx("td",{children:"Carriage Return"}),e.jsx("td",{children:"Move to the beginning of the line (overwrite)"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"이스케이프 시퀀스"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\n"})}),e.jsx("td",{children:"줄바꿈 (New Line)"}),e.jsx("td",{children:"다음 줄로 이동"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\t"})}),e.jsx("td",{children:"탭 (Tab)"}),e.jsx("td",{children:"탭 간격만큼 이동 (보통 4~8칸)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\\\\\"})}),e.jsx("td",{children:"역슬래시"}),e.jsx("td",{children:"역슬래시 문자 자체를 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\'"})}),e.jsx("td",{children:"작은따옴표"}),e.jsx("td",{children:"문자열 안에서 작은따옴표 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'\\\\"'})}),e.jsx("td",{children:"큰따옴표"}),e.jsx("td",{children:"문자열 안에서 큰따옴표 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"\\\\r"})}),e.jsx("td",{children:"캐리지 리턴"}),e.jsx("td",{children:"줄의 맨 앞으로 이동 (덮어쓰기)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Escape sequence examples":"이스케이프 시퀀스 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# \\n: 줄바꿈
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
print("ABCDE\\rXY")                # XYCDE`})})]}),e.jsx("h3",{children:n==="en"?"2.3 Raw String":"2.3 raw string (원시 문자열)"}),n==="en"?e.jsxs("p",{children:["When you want to output a string as-is without interpreting escape sequences, prefix the string with ",e.jsx("code",{children:"r"})," or ",e.jsx("code",{children:"R"})," to make it a ",e.jsx("strong",{children:"raw string"}),". This is especially useful when writing file paths."]}):e.jsxs("p",{children:["이스케이프 시퀀스를 무시하고 문자열을 있는 그대로 출력하고 싶을 때는 문자열 앞에 ",e.jsx("code",{children:"r"})," 또는 ",e.jsx("code",{children:"R"}),"을 붙여 ",e.jsx("strong",{children:"raw string"}),"으로 만듭니다. 파일 경로를 작성할 때 특히 유용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Raw string examples":"raw string 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 일반 문자열: 이스케이프 시퀀스가 해석됨
print("C:\\new_folder\\test")   # C: (줄바꿈) ew_folder (탭) est

# raw string: 이스케이프 시퀀스를 무시
print(r"C:\\new_folder\\test")  # C:\\new_folder\\test

# 파일 경로에 활용
path = r"C:\\Users\\student\\Documents\\homework.py"
print(path)  # C:\\Users\\student\\Documents\\homework.py`})})]}),e.jsx("h2",{children:n==="en"?"3. Understanding Variables":"3. 변수(Variable)의 이해"}),e.jsx("h3",{children:n==="en"?"3.1 What is a Variable?":"3.1 변수란?"}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"variable"})," is a ",e.jsx("strong",{children:"name given to a memory location"})," that stores data. In programming, variables are often compared to ",e.jsx("strong",{children:'"labeled boxes."'}),"You put a value in a box and can retrieve or change that value at any time through the label (variable name)."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Box"})," = Memory space (where data is actually stored)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Label"})," = Variable name (identifier for human reference)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contents of the box"})," = Value (data such as integers, strings, etc.)"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"변수(Variable)"}),"는 데이터를 저장하는 ",e.jsx("strong",{children:"메모리 공간에 붙인 이름"}),"입니다. 프로그래밍에서 변수는 흔히 ",e.jsx("strong",{children:'"이름표가 붙은 상자(Box)"'}),"에 비유합니다. 상자 안에 값을 넣고, 이름표(변수명)를 통해 언제든지 그 값을 꺼내거나 변경할 수 있습니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"상자"})," = 메모리 공간 (데이터가 실제로 저장되는 곳)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"이름표"})," = 변수 이름 (사람이 기억하기 위한 식별자)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"상자 안의 물건"})," = 값 (정수, 문자열 등의 데이터)"]})]})]}),e.jsx("h3",{children:n==="en"?"3.2 Dynamic Typing":"3.2 동적 타이핑 (Dynamic Typing)"}),n==="en"?e.jsxs("p",{children:["Python is a ",e.jsx("strong",{children:"dynamically typed"})," language. Unlike C or Java, you don't need to specify a data type when declaring a variable; the type is automatically determined when a value is assigned. You can also reassign a value of a different type to the same variable at any time."]}):e.jsxs("p",{children:["파이썬은 ",e.jsx("strong",{children:"동적 타이핑(Dynamic Typing)"})," 언어입니다. C나 Java처럼 변수를 선언할 때 자료형을 미리 지정할 필요 없이, 값을 할당하면 자동으로 자료형이 결정됩니다. 또한 같은 변수에 다른 자료형의 값을 언제든지 다시 할당할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Dynamic typing example":"동적 타이핑 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# Java (정적 타이핑) - 자료형을 미리 선언해야 함
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
print(type(x))        # <class 'str'>`})})]}),e.jsx("h3",{children:n==="en"?"3.3 Variable Assignment and Reassignment":"3.3 변수에 값 할당과 재할당"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Variable assignment and reassignment":"변수 할당과 재할당"}),e.jsx("pre",{children:e.jsx("code",{children:`# 변수에 값 할당 (= 대입 연산자)
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
print(total)          # 45000`})})]}),e.jsx("h3",{children:n==="en"?"3.4 Checking Memory Address with id()":"3.4 id() 함수로 메모리 주소 확인"}),n==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"id()"})," function returns the ",e.jsx("strong",{children:"memory address (unique identifier)"})," of the object that a variable references. When the value changes, it points to a new memory address."]}):e.jsxs("p",{children:[e.jsx("code",{children:"id()"})," 함수를 사용하면 변수가 참조하는 객체의 ",e.jsx("strong",{children:"메모리 주소(고유 식별자)"}),"를 확인할 수 있습니다. 값이 변경되면 새로운 메모리 주소를 가리키게 됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Using the id() function":"id() 함수 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`x = 10
print(id(x))      # 예: 140736123456 (메모리 주소)

x = 20
print(id(x))      # 다른 주소! 새로운 객체를 가리킴

# 같은 값을 가진 변수는 같은 객체를 참조할 수 있음
a = 100
b = 100
print(id(a))      # 같은 주소
print(id(b))      # 같은 주소 (파이썬의 정수 캐싱)
print(a is b)     # True`})})]}),e.jsx("h2",{children:n==="en"?"4. Variable Naming Conventions":"4. 변수 명명 규칙 (Naming Convention)"}),e.jsx("h3",{children:n==="en"?"4.1 Basic Rules":"4.1 기본 규칙"}),n==="en"?e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Allowed characters"}),": Letters (a-z, A-Z), digits (0-9), underscore (_). Korean characters are technically allowed but not recommended."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Starting character"}),": Must start with a letter or underscore (_). Cannot start with a digit."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case sensitive"}),": ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"Name"}),", and ",e.jsx("code",{children:"NAME"})," are all different variables."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reserved words not allowed"}),": Python keywords cannot be used as variable names."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No length limit"}),": There is no limit on variable name length, but it's good to keep it reasonable."]})]}):e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"허용 문자"}),": 영문자(a-z, A-Z), 숫자(0-9), 밑줄(_). 한글도 사용 가능하나 권장하지 않습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"시작 문자"}),": 반드시 영문자 또는 밑줄(_)로 시작해야 합니다. 숫자로 시작할 수 없습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"대소문자 구분"}),": ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"Name"}),", ",e.jsx("code",{children:"NAME"}),"은 모두 다른 변수입니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"예약어 사용 불가"}),": 파이썬이 미리 정의한 키워드는 변수명으로 사용할 수 없습니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"길이 제한 없음"}),": 변수명의 길이에 제한은 없지만, 적절한 길이를 유지하는 것이 좋습니다."]})]}),e.jsx("h3",{children:n==="en"?"4.2 Python Keywords (Reserved Words)":"4.2 파이썬 예약어 (Keywords)"}),n==="en"?e.jsxs("p",{children:["The following are Python ",e.jsx("strong",{children:"keywords"})," used for syntax, which cannot be used as variable names."]}):e.jsxs("p",{children:["다음은 파이썬이 문법적으로 사용하는 ",e.jsx("strong",{children:"예약어(keyword)"}),"로, 변수명으로 사용할 수 없습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Python keywords list":"파이썬 예약어 목록 확인"}),e.jsx("pre",{children:e.jsx("code",{children:`import keyword
print(keyword.kwlist)

# ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
#  'break', 'class', 'continue', 'def', 'del', 'elif', 'else',
#  'except', 'finally', 'for', 'from', 'global', 'if', 'import',
#  'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
#  'return', 'try', 'while', 'with', 'yield']`})})]}),e.jsx("h3",{children:n==="en"?"4.3 PEP 8 Style Guide":"4.3 PEP 8 스타일 가이드"}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"PEP 8"})," is the official Python coding style guide. Variable names should use ",e.jsx("strong",{children:"snake_case"})," (lowercase with underscores), and giving ",e.jsx("strong",{children:"meaningful names"})," is important."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Good Example"}),e.jsx("th",{children:"Bad Example"}),e.jsx("th",{children:"Reason"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Student name"}),e.jsx("td",{children:e.jsx("code",{children:"student_name"})}),e.jsxs("td",{children:[e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"sn"})]}),e.jsx("td",{children:"Unreadable abbreviations"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total score"}),e.jsx("td",{children:e.jsx("code",{children:"total_score"})}),e.jsxs("td",{children:[e.jsx("code",{children:"ts"}),", ",e.jsx("code",{children:"x"})]}),e.jsx("td",{children:"Meaningless variable name"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Maximum value"}),e.jsx("td",{children:e.jsx("code",{children:"max_value"})}),e.jsx("td",{children:e.jsx("code",{children:"MaxValue"})}),e.jsx("td",{children:"Python recommends snake_case"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Count"}),e.jsx("td",{children:e.jsx("code",{children:"item_count"})}),e.jsx("td",{children:e.jsx("code",{children:"n"})}),e.jsx("td",{children:"Hard to understand context"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Average"}),e.jsx("td",{children:e.jsx("code",{children:"average_grade"})}),e.jsx("td",{children:e.jsx("code",{children:"avg"})}),e.jsx("td",{children:"Excessive abbreviation (avg is borderline acceptable)"})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"PEP 8"}),"은 파이썬 공식 코딩 스타일 가이드입니다. 변수명은 ",e.jsx("strong",{children:"snake_case"}),"(소문자와 밑줄 조합)를 사용하며, ",e.jsx("strong",{children:"의미 있는 이름"}),"을 짓는 것이 중요합니다."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"좋은 예시"}),e.jsx("th",{children:"나쁜 예시"}),e.jsx("th",{children:"이유"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"학생 이름"}),e.jsx("td",{children:e.jsx("code",{children:"student_name"})}),e.jsxs("td",{children:[e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"sn"})]}),e.jsx("td",{children:"의미를 알 수 없는 축약어"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"총 점수"}),e.jsx("td",{children:e.jsx("code",{children:"total_score"})}),e.jsxs("td",{children:[e.jsx("code",{children:"ts"}),", ",e.jsx("code",{children:"x"})]}),e.jsx("td",{children:"무의미한 변수명"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"최대값"}),e.jsx("td",{children:e.jsx("code",{children:"max_value"})}),e.jsx("td",{children:e.jsx("code",{children:"MaxValue"})}),e.jsx("td",{children:"파이썬은 snake_case 권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"개수"}),e.jsx("td",{children:e.jsx("code",{children:"item_count"})}),e.jsx("td",{children:e.jsx("code",{children:"n"})}),e.jsx("td",{children:"맥락을 알기 어려움"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"평균"}),e.jsx("td",{children:e.jsx("code",{children:"average_grade"})}),e.jsx("td",{children:e.jsx("code",{children:"avg"})}),e.jsx("td",{children:"지나친 축약 (avg는 허용 범위)"})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Valid vs invalid variable names":"올바른 변수명 vs 잘못된 변수명"}),e.jsx("pre",{children:e.jsx("code",{children:`# 올바른 변수명
student_name = "홍길동"
total_score = 285
average_grade = 95.0
is_passed = True
_private_var = "내부용"

# 잘못된 변수명 (오류 발생)
# 2nd_place = "김영희"     # SyntaxError: 숫자로 시작 불가
# my-name = "홍길동"       # SyntaxError: 하이픈(-) 사용 불가
# class = "A반"            # SyntaxError: 예약어 사용 불가
# total score = 100        # SyntaxError: 공백 사용 불가`})})]}),e.jsx("h2",{children:n==="en"?"5. Multiple Assignment and Value Swap":"5. 다중 할당과 값 교환"}),e.jsx("h3",{children:n==="en"?"5.1 Multiple Assignment":"5.1 다중 할당 (Multiple Assignment)"}),n==="en"?e.jsx("p",{children:"In Python, you can assign values to multiple variables simultaneously in a single line."}):e.jsx("p",{children:"파이썬에서는 한 줄에 여러 변수에 값을 동시에 할당할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Multiple assignment":"다중 할당"}),e.jsx("pre",{children:e.jsx("code",{children:`# 여러 변수에 각각 다른 값 할당
a, b, c = 1, 2, 3
print(a, b, c)    # 1 2 3

# 여러 변수에 같은 값 할당
x = y = z = 0
print(x, y, z)    # 0 0 0

# 실용적인 예시
name, age, major = "홍길동", 20, "컴퓨터공학"
print(f"이름: {name}, 나이: {age}, 전공: {major}")
# 이름: 홍길동, 나이: 20, 전공: 컴퓨터공학`})})]}),e.jsx("h3",{children:n==="en"?"5.2 Value Swap":"5.2 값 교환 (Swap)"}),n==="en"?e.jsxs("p",{children:["In other programming languages, swapping two variables requires a temporary variable (temp). However, in Python you can swap values ",e.jsx("strong",{children:"concisely in a single line"}),"."]}):e.jsxs("p",{children:["다른 프로그래밍 언어에서는 두 변수의 값을 교환하려면 임시 변수(temp)가 필요합니다. 하지만 파이썬에서는 ",e.jsx("strong",{children:"한 줄로 간결하게"})," 값을 교환할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Value swap":"값 교환 (Swap)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 다른 언어의 방식 (임시 변수 사용)
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
print(x, y, z)  # 3 1 2`})})]}),e.jsx("h2",{children:n==="en"?"6. Input: the input() Function":"6. 입력: input() 함수"}),e.jsx("h3",{children:n==="en"?"6.1 How input() Works":"6.1 input() 함수의 동작 원리"}),n==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"input()"})," function receives keyboard input from the user. When the program encounters ",e.jsx("code",{children:"input()"}),", it ",e.jsx("strong",{children:"waits"})," until the user enters a value, and when the user presses Enter, it returns the input as a ",e.jsx("strong",{children:"string (str)"}),"."]}):e.jsxs("p",{children:[e.jsx("code",{children:"input()"})," 함수는 사용자로부터 키보드 입력을 받는 함수입니다. 프로그램 실행 중 ",e.jsx("code",{children:"input()"}),"을 만나면 사용자가 값을 입력할 때까지 ",e.jsx("strong",{children:"대기"}),"하고, 사용자가 Enter 키를 누르면 입력된 값을 ",e.jsx("strong",{children:"문자열(str)"}),"로 반환합니다."]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n==="en"?"Important: input() always returns a string (str)!":"중요: input()의 반환값은 항상 문자열(str)!"}),n==="en"?e.jsxs("ul",{children:[e.jsxs("li",{children:["Even if the user enters a number, ",e.jsx("code",{children:"input()"})," always returns a ",e.jsx("strong",{children:"string (str)"}),"."]}),e.jsxs("li",{children:["To perform numeric operations, you must use ",e.jsx("code",{children:"int()"})," or ",e.jsx("code",{children:"float()"})," for ",e.jsx("strong",{children:"type conversion"}),"."]}),e.jsx("li",{children:"Operating without type conversion will cause unexpected results or errors."})]}):e.jsxs("ul",{children:[e.jsxs("li",{children:["사용자가 숫자를 입력하더라도 ",e.jsx("code",{children:"input()"}),"은 항상 ",e.jsx("strong",{children:"문자열(str)"}),"을 반환합니다."]}),e.jsxs("li",{children:["숫자 연산을 하려면 반드시 ",e.jsx("code",{children:"int()"})," 또는 ",e.jsx("code",{children:"float()"}),"로 ",e.jsx("strong",{children:"형변환"}),"해야 합니다."]}),e.jsx("li",{children:"형변환 없이 연산하면 예상치 못한 결과나 오류가 발생합니다."})]})]}),e.jsx("h3",{children:n==="en"?"6.2 String Input":"6.2 문자열 입력"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"String input":"문자열 입력"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 입력 (프롬프트 메시지 없음)
data = input()
print(data)

# 프롬프트 메시지와 함께 입력
name = input("이름을 입력하세요: ")
print(f"안녕하세요, {name}님!")

# 입력값의 자료형 확인
value = input("아무 값이나 입력: ")
print(type(value))    # <class 'str'>  ← 항상 문자열!`})})]}),e.jsx("h3",{children:n==="en"?"6.3 Integer Input (int conversion)":"6.3 정수 입력 (int 변환)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Integer input":"정수 입력"}),e.jsx("pre",{children:e.jsx("code",{children:`# 잘못된 방법: 형변환 없이 사용
num = input("숫자 입력: ")    # "10" (문자열)
# result = num + 5            # TypeError! 문자열 + 정수 불가

# 올바른 방법: int()로 형변환
num = int(input("숫자 입력: "))    # 10 (정수)
result = num + 5
print(f"결과: {result}")            # 결과: 15

# 두 수 입력받아 합계 계산
a = int(input("첫 번째 숫자: "))
b = int(input("두 번째 숫자: "))
print(f"{a} + {b} = {a + b}")`})})]}),e.jsx("h3",{children:n==="en"?"6.4 Float Input (float conversion)":"6.4 실수 입력 (float 변환)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Float input":"실수 입력"}),e.jsx("pre",{children:e.jsx("code",{children:`# float()로 실수 변환
height = float(input("키를 입력하세요 (cm): "))
weight = float(input("몸무게를 입력하세요 (kg): "))

# BMI 계산 (키를 m로 변환)
height_m = height / 100
bmi = weight / (height_m ** 2)

print(f"BMI: {bmi:.2f}")`})})]}),e.jsx("h3",{children:n==="en"?"6.5 Errors When Not Converting Types":"6.5 형변환 없이 사용 시 발생하는 오류"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Caution: What happens without type conversion?":"주의: 형변환을 빼먹으면?"}),e.jsx("pre",{children:e.jsx("code",{children:`# 예시 1: 숫자 덧셈이 문자열 연결이 됨
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
# ValueError: invalid literal for int() with base 10: 'abc'`})})]}),e.jsx("h2",{children:n==="en"?"7. String Formatting (3 Methods)":"7. 문자열 포매팅 (3가지 방법)"}),n==="en"?e.jsxs("p",{children:["The method of inserting variable values into a string is called ",e.jsx("strong",{children:"string formatting"}),". Python supports 3 different methods."]}):e.jsxs("p",{children:["변수의 값을 문자열 안에 삽입하는 방법을 ",e.jsx("strong",{children:"문자열 포매팅(String Formatting)"}),"이라고 합니다. 파이썬에서는 3가지 방법을 지원합니다."]}),e.jsx("h3",{children:n==="en"?"7.1 % Operator (Legacy Method)":"7.1 % 연산자 (옛 방식)"}),n==="en"?e.jsxs("p",{children:["Similar to C's ",e.jsx("code",{children:"printf"}),", this is the oldest formatting method used since Python 2. It uses format specifiers such as ",e.jsx("code",{children:"%s"})," (string), ",e.jsx("code",{children:"%d"})," (integer), ",e.jsx("code",{children:"%f"})," (float)."]}):e.jsxs("p",{children:["C 언어의 ",e.jsx("code",{children:"printf"}),"와 유사한 방식으로, 파이썬 2부터 사용된 가장 오래된 포매팅 방법입니다.",e.jsx("code",{children:"%s"}),"(문자열), ",e.jsx("code",{children:"%d"}),"(정수), ",e.jsx("code",{children:"%f"}),"(실수) 등의 서식 지정자를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"% operator formatting":"% 연산자 포매팅"}),e.jsx("pre",{children:e.jsx("code",{children:`name = "홍길동"
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
print("값: %10.2f" % 3.14)       # 값:       3.14 (10자리)`})})]}),e.jsx("h3",{children:n==="en"?"7.2 str.format() Method":"7.2 str.format() 메서드"}),n==="en"?e.jsxs("p",{children:["Introduced in Python 2.6, this method uses ",e.jsx("code",{children:"{}"})," placeholders to insert values. It is more flexible than the ",e.jsx("code",{children:"%"})," method as you can specify values by index or name."]}):e.jsxs("p",{children:["Python 2.6부터 도입된 방식으로, ",e.jsx("code",{children:"{}"})," 자리표시자를 사용하여 값을 삽입합니다. 인덱스나 이름으로 값을 지정할 수 있어 ",e.jsx("code",{children:"%"})," 방식보다 유연합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"str.format() method":"str.format() 메서드"}),e.jsx("pre",{children:e.jsx("code",{children:`name = "홍길동"
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
print("정렬: {:^10}".format("가운데"))       # 정렬:   가운데`})})]}),e.jsx("h3",{children:n==="en"?"7.3 f-string (Recommended, Python 3.6+)":"7.3 f-string (권장, Python 3.6+)"}),n==="en"?e.jsxs("p",{children:[e.jsx("strong",{children:"f-string (formatted string literal)"})," is the most modern and recommended method, introduced in Python 3.6. Prefix the string with ",e.jsx("code",{children:"f"})," and write variable names or expressions directly inside curly braces ",e.jsx("code",{children:"{}"}),". It has excellent readability and the best performance."]}):e.jsxs("p",{children:[e.jsx("strong",{children:"f-string(formatted string literal)"}),"은 Python 3.6에서 도입된 가장 현대적이고 권장되는 방식입니다. 문자열 앞에 ",e.jsx("code",{children:"f"}),"를 붙이고 중괄호 ",e.jsx("code",{children:"{}"})," 안에 변수명이나 표현식을 직접 작성합니다. 가독성이 뛰어나고 성능도 가장 우수합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"f-string usage (recommended)":"f-string 활용 (권장 방식)"}),e.jsx("pre",{children:e.jsx("code",{children:`name = "홍길동"
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
print(f"16진수: {num:x}")           # 16진수: ff`})})]}),e.jsx("h3",{children:n==="en"?"7.4 Comparison of 3 Methods":"7.4 3가지 방법 비교"}),n==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"% Operator"}),e.jsx("th",{children:"str.format()"}),e.jsx("th",{children:"f-string"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Introduced"})}),e.jsx("td",{children:"Early Python 2"}),e.jsx("td",{children:"Python 2.6"}),e.jsx("td",{children:"Python 3.6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Syntax"})}),e.jsx("td",{children:e.jsx("code",{children:'"%s" % val'})}),e.jsx("td",{children:e.jsxs("code",{children:['"',"{}",'".format(val)']})}),e.jsx("td",{children:e.jsxs("code",{children:['f"',"{val}",'"']})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Readability"})}),e.jsx("td",{children:"Average"}),e.jsx("td",{children:"Average"}),e.jsx("td",{children:"Excellent"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Performance"})}),e.jsx("td",{children:"Average"}),e.jsx("td",{children:"Average"}),e.jsx("td",{children:"Fastest"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Expressions"})}),e.jsx("td",{children:"Not supported"}),e.jsx("td",{children:"Limited"}),e.jsx("td",{children:"Freely usable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Recommended"})}),e.jsx("td",{children:"Legacy code"}),e.jsx("td",{children:"When compatibility needed"}),e.jsx("td",{children:"Recommended for new code"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"% 연산자"}),e.jsx("th",{children:"str.format()"}),e.jsx("th",{children:"f-string"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도입 시기"})}),e.jsx("td",{children:"Python 2 초기"}),e.jsx("td",{children:"Python 2.6"}),e.jsx("td",{children:"Python 3.6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문법"})}),e.jsx("td",{children:e.jsx("code",{children:'"%s" % val'})}),e.jsx("td",{children:e.jsxs("code",{children:['"',"{}",'".format(val)']})}),e.jsx("td",{children:e.jsxs("code",{children:['f"',"{val}",'"']})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성"})}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"매우 좋음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"성능"})}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"가장 빠름"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"표현식"})}),e.jsx("td",{children:"불가"}),e.jsx("td",{children:"제한적"}),e.jsx("td",{children:"자유롭게 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"권장 여부"})}),e.jsx("td",{children:"레거시 코드"}),e.jsx("td",{children:"호환성 필요 시"}),e.jsx("td",{children:"신규 코드에 권장"})]})]})]}),e.jsx("h2",{children:n==="en"?"8. Comprehensive Practice Examples":"8. 종합 실습 예제"}),e.jsx("h3",{children:n==="en"?"8.1 Self-Introduction Program":"8.1 자기소개 프로그램"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Self-introduction program":"자기소개 프로그램"}),e.jsx("pre",{children:e.jsx("code",{children:`# 사용자 정보 입력
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
print("=" * 35)`})})]}),e.jsx("h3",{children:n==="en"?"8.2 Simple Calculator":"8.2 간단 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Simple calculator":"간단 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`# 두 수 입력
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
print("=" * 22)`})})]}),e.jsx("h3",{children:n==="en"?"8.3 Seconds to Minutes:Seconds Converter":"8.3 초를 분:초로 변환"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:n==="en"?"Seconds to minutes:seconds converter":"초 → 분:초 변환기"}),e.jsx("pre",{children:e.jsx("code",{children:`# 초 입력
total_seconds = int(input("초를 입력하세요: "))

# 분과 초 계산
minutes = total_seconds // 60     # 몫 = 분
seconds = total_seconds % 60      # 나머지 = 초

# 결과 출력
print(f"{total_seconds}초 = {minutes}분 {seconds}초")

# 실행 예시:
# 초를 입력하세요: 135
# 135초 = 2분 15초`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:s("pythonLearning.keySummary")}),n==="en"?e.jsxs("ul",{children:[e.jsxs("li",{children:["The ",e.jsx("code",{children:"print()"})," function uses ",e.jsx("strong",{children:"sep"})," to control the separator and ",e.jsx("strong",{children:"end"})," to control line breaks."]}),e.jsxs("li",{children:["Escape sequences (",e.jsx("code",{children:"\\\\n"}),", ",e.jsx("code",{children:"\\\\t"}),", ",e.jsx("code",{children:"\\\\\\\\"}),", etc.) represent special characters."]}),e.jsxs("li",{children:["A ",e.jsx("strong",{children:"variable"})," is a name for a memory location that stores data; Python supports dynamic typing."]}),e.jsxs("li",{children:["Variable names should use ",e.jsx("strong",{children:"snake_case"}),", be meaningful, and start with a letter or underscore."]}),e.jsxs("li",{children:["The return value of ",e.jsx("code",{children:"input()"})," is ",e.jsx("strong",{children:"always a string"}),", so ",e.jsx("code",{children:"int()"}),"/",e.jsx("code",{children:"float()"})," conversion is required for numeric operations."]}),e.jsxs("li",{children:["For string formatting, ",e.jsx("strong",{children:"f-string"})," is most recommended, using the ",e.jsxs("code",{children:['f"',"{"]}),"variable",e.jsxs("code",{children:["}",'"']})," syntax."]}),e.jsxs("li",{children:["Python's ",e.jsx("strong",{children:"multiple assignment"})," and ",e.jsx("strong",{children:"swap (a, b = b, a)"})," make code more concise."]})]}):e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"print()"})," 함수의 ",e.jsx("strong",{children:"sep"}),"으로 구분자를, ",e.jsx("strong",{children:"end"}),"로 줄바꿈 여부를 제어한다."]}),e.jsxs("li",{children:["이스케이프 시퀀스(",e.jsx("code",{children:"\\\\n"}),", ",e.jsx("code",{children:"\\\\t"}),", ",e.jsx("code",{children:"\\\\\\\\"})," 등)로 특수 문자를 표현한다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"변수"}),"는 데이터를 저장하는 메모리 공간의 이름이며, 파이썬은 동적 타이핑을 지원한다."]}),e.jsxs("li",{children:["변수명은 ",e.jsx("strong",{children:"snake_case"}),", 의미 있는 이름, 영문자/밑줄로 시작해야 한다."]}),e.jsxs("li",{children:[e.jsx("code",{children:"input()"}),"의 반환값은 ",e.jsx("strong",{children:"항상 문자열"}),"이므로 숫자 연산 시 ",e.jsx("code",{children:"int()"}),"/",e.jsx("code",{children:"float()"})," 형변환 필수."]}),e.jsxs("li",{children:["문자열 포매팅은 ",e.jsx("strong",{children:"f-string"}),"이 가장 권장되며, ",e.jsxs("code",{children:['f"',"{"]}),"변수",e.jsxs("code",{children:["}",'"']})," 형태로 사용한다."]}),e.jsxs("li",{children:["파이썬의 ",e.jsx("strong",{children:"다중 할당"}),"과 ",e.jsx("strong",{children:"swap(a, b = b, a)"}),"은 코드를 간결하게 만들어 준다."]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:s("pythonLearning.exercises")}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Exercise 1."})," Write a program that takes the user's name and age as input and outputs the following."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Output example"}),e.jsx("pre",{children:e.jsx("code",{children:"홍길동님은 20세이며, 태어난 해는 2006년입니다."})})]}),e.jsx("p",{children:"Hint: Birth year = Current year - Age + 1 (Korean age basis, or - Age)"}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Exercise 2."})," Write a program that takes height (cm) and weight (kg) as input, calculates BMI, and outputs the result."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"BMI = Weight (kg) / (Height (m))^2"}),e.jsx("li",{children:"Height is entered in cm and needs to be converted to m"}),e.jsx("li",{children:"Display BMI result to two decimal places"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"과제 1."})," 사용자의 이름과 나이를 입력받아 다음과 같이 출력하는 프로그램을 작성하세요."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"출력 예시"}),e.jsx("pre",{children:e.jsx("code",{children:"홍길동님은 20세이며, 태어난 해는 2006년입니다."})})]}),e.jsx("p",{children:"힌트: 태어난 해 = 현재 연도 - 나이 + 1 (한국 나이 기준, 또는 - 나이)"}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"과제 2."})," 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 결과를 출력하는 프로그램을 작성하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"BMI = 몸무게(kg) / (키(m))²"}),e.jsx("li",{children:"키는 cm 단위로 입력받아 m로 변환 필요"}),e.jsx("li",{children:"BMI 결과는 소수점 둘째 자리까지 출력"})]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:s("pythonLearning.advancedProblems")}),n==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Advanced 1."})," Take three subject scores (Korean, English, Math) as input and output the following information neatly using f-strings."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Each subject score, total, average (1 decimal place)"}),e.jsx("li",{children:"Grade based on average: A for 90+, B for 80+, C for 70+, D for 60+, F for below 60"}),e.jsx("li",{children:"Output in table format using f-string alignment"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advanced 2."}),' Write a program that takes seconds (integer) as input and converts them to "X days X hours X minutes X seconds" format.']}),e.jsxs("ul",{children:[e.jsx("li",{children:'Example: 100000 seconds = "1 day 3 hours 46 minutes 40 seconds"'}),e.jsx("li",{children:"Hint: 1 day = 86400 seconds, 1 hour = 3600 seconds, 1 minute = 60 seconds"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"//"})," (quotient) and ",e.jsx("code",{children:"%"})," (remainder) operators"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"심화 1."})," 세 과목(국어, 영어, 수학)의 점수를 입력받아 다음 정보를 f-string으로 깔끔하게 출력하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"각 과목 점수, 총점, 평균 (소수점 1자리)"}),e.jsx("li",{children:"평균 기준 등급: 90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 60 미만 F"}),e.jsx("li",{children:"표 형태로 정렬하여 출력 (f-string 정렬 기능 활용)"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"심화 2."}),' 초(정수)를 입력받아 "O일 O시간 O분 O초" 형태로 변환하는 프로그램을 작성하세요.']}),e.jsxs("ul",{children:[e.jsx("li",{children:'예: 100000초 → "1일 3시간 46분 40초"'}),e.jsx("li",{children:"힌트: 1일 = 86400초, 1시간 = 3600초, 1분 = 60초"}),e.jsxs("li",{children:[e.jsx("code",{children:"//"}),"(몫)과 ",e.jsx("code",{children:"%"}),"(나머지) 연산자 활용"]})]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/python-learning/01",className:"lesson-nav-btn prev",children:["← ",n==="en"?"01: Setup":"01: 실습환경"]}),e.jsxs(r,{to:"/python-learning/03",className:"lesson-nav-btn next",children:[n==="en"?"03: Data Types":"03: Data Type"," →"]})]})]})})})]})}export{t as default};
