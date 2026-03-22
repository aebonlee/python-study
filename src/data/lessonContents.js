export const lessonContents = {
  // ==================== 기초 과정 ====================
  'hello-python': {
    sections: [
      {
        title: 'print() 함수로 출력하기',
        titleEn: 'Printing with print()',
        content: `파이썬에서 가장 먼저 배우는 것은 화면에 텍스트를 출력하는 것입니다.\nprint() 함수를 사용하면 원하는 내용을 콘솔에 출력할 수 있습니다.\n\n문자열은 작은따옴표(\') 또는 큰따옴표(\")로 감싸서 표현합니다.`,
        contentEn: `The first thing you learn in Python is how to output text to the screen.\nUsing the print() function, you can display any content to the console.\n\nStrings are expressed by wrapping them in single quotes (\') or double quotes (\").`,
        code: '# 첫 번째 파이썬 프로그램!\nprint("Hello, Python!")\nprint(\'반갑습니다!\')',
        codeEn: '# My first Python program!\nprint("Hello, Python!")\nprint(\'Nice to meet you!\')',
        expectedOutput: 'Hello, Python!\n반갑습니다!',
        expectedOutputEn: 'Hello, Python!\nNice to meet you!',
        tip: 'print() 함수는 괄호 안의 내용을 콘솔에 출력합니다. 문자열은 따옴표로 감싸야 합니다.',
        tipEn: 'The print() function outputs the content inside the parentheses to the console. Strings must be wrapped in quotes.'
      },
      {
        title: '여러 값 출력하기',
        titleEn: 'Printing Multiple Values',
        content: `print() 함수에 여러 값을 쉼표로 구분하여 전달할 수 있습니다.\n기본적으로 각 값 사이에 공백이 추가됩니다.\n\nsep 매개변수로 구분자를, end 매개변수로 줄끝 문자를 변경할 수 있습니다.`,
        contentEn: `You can pass multiple values to the print() function, separated by commas.\nBy default, a space is added between each value.\n\nYou can change the separator with the sep parameter and the line ending character with the end parameter.`,
        code: 'print("이름:", "파이썬")\nprint("버전:", 3.12)\nprint("A", "B", "C", sep="-")\nprint("끝!", end=" 끝!")\nprint()',
        codeEn: 'print("Name:", "Python")\nprint("Version:", 3.12)\nprint("A", "B", "C", sep="-")\nprint("Done!", end=" Done!")\nprint()',
        expectedOutput: '이름: 파이썬\n버전: 3.12\nA-B-C\n끝! 끝!',
        expectedOutputEn: 'Name: Python\nVersion: 3.12\nA-B-C\nDone! Done!',
        tip: 'sep은 구분자(separator), end는 출력 끝에 붙는 문자를 지정합니다.',
        tipEn: 'sep specifies the separator between values, and end specifies the character appended at the end of the output.'
      },
      {
        title: '주석 작성하기',
        titleEn: 'Writing Comments',
        content: `주석은 코드에 설명을 추가하는 방법입니다.\n파이썬은 # 기호 뒤의 내용을 무시합니다.\n\n여러 줄 주석은 큰따옴표 세 개(\\"\\"\\"...\\"\\"\\"\\")를 사용합니다.`,
        contentEn: `Comments are a way to add explanations to your code.\nPython ignores everything after the # symbol.\n\nMulti-line comments use triple double quotes (\\"\\"\\"...\\"\\"\\"\\").`,
        code: '# 이것은 한 줄 주석입니다\nprint("주석은 실행되지 않습니다")  # 코드 옆에도 가능\n\n# 아래는 여러 줄 주석 예시\n"""\n이렇게 여러 줄에\n걸쳐서 주석을\n작성할 수 있습니다\n"""\nprint("프로그램 완료!")',
        codeEn: '# This is a single-line comment\nprint("Comments are not executed")  # Can also go next to code\n\n# Below is a multi-line comment example\n"""\nYou can write comments\nthat span multiple\nlines like this\n"""\nprint("Program complete!")',
        expectedOutput: '주석은 실행되지 않습니다\n프로그램 완료!',
        expectedOutputEn: 'Comments are not executed\nProgram complete!',
        tip: '좋은 주석은 "왜" 그렇게 했는지를 설명합니다. 코드 자체가 "무엇을" 하는지는 이미 보여주니까요.',
        tipEn: 'Good comments explain "why" something was done. The code itself already shows "what" it does.'
      }
    ]
  },

  'variables': {
    sections: [
      {
        title: '변수 선언과 할당',
        titleEn: 'Variable Declaration and Assignment',
        content: `변수는 데이터를 저장하는 이름표입니다.\n파이썬에서는 = 기호를 사용하여 변수에 값을 할당합니다.\n\n다른 언어와 달리 파이썬은 변수의 타입을 미리 선언할 필요가 없습니다.`,
        contentEn: `A variable is a label that stores data.\nIn Python, you use the = sign to assign a value to a variable.\n\nUnlike other languages, Python does not require you to declare the variable type in advance.`,
        code: '# 변수에 값 할당\nname = "파이썬"\nage = 30\npi = 3.14159\nis_fun = True\n\nprint(name)\nprint(age)\nprint(pi)\nprint(is_fun)',
        codeEn: '# Assigning values to variables\nname = "Python"\nage = 30\npi = 3.14159\nis_fun = True\n\nprint(name)\nprint(age)\nprint(pi)\nprint(is_fun)',
        expectedOutput: '파이썬\n30\n3.14159\nTrue',
        expectedOutputEn: 'Python\n30\n3.14159\nTrue',
        tip: '변수 이름은 영문자, 숫자, 밑줄(_)을 사용할 수 있으며, 숫자로 시작할 수 없습니다.',
        tipEn: 'Variable names can use letters, numbers, and underscores (_), but cannot start with a number.'
      },
      {
        title: '기본 자료형',
        titleEn: 'Basic Data Types',
        content: `파이썬의 기본 자료형은 다음과 같습니다:\n\n- int: 정수 (1, 42, -10)\n- float: 실수 (3.14, -0.5)\n- str: 문자열 ("Hello")\n- bool: 불리언 (True, False)\n- NoneType: 값이 없음 (None)\n\ntype() 함수로 변수의 자료형을 확인할 수 있습니다.`,
        contentEn: `Python's basic data types are as follows:\n\n- int: integers (1, 42, -10)\n- float: floating-point numbers (3.14, -0.5)\n- str: strings ("Hello")\n- bool: booleans (True, False)\n- NoneType: no value (None)\n\nYou can check a variable's data type using the type() function.`,
        code: 'x = 42\ny = 3.14\nz = "Hello"\nw = True\nn = None\n\nprint(type(x))\nprint(type(y))\nprint(type(z))\nprint(type(w))\nprint(type(n))',
        expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>\n<class 'NoneType'>",
        tip: '파이썬은 동적 타이핑 언어입니다. 같은 변수에 다른 타입의 값을 재할당할 수 있습니다.',
        tipEn: 'Python is a dynamically typed language. You can reassign a different type of value to the same variable.'
      },
      {
        title: '형 변환',
        titleEn: 'Type Conversion',
        content: `서로 다른 자료형 간 변환이 필요할 때 형 변환 함수를 사용합니다.\n\n- int(): 정수로 변환\n- float(): 실수로 변환\n- str(): 문자열로 변환\n- bool(): 불리언으로 변환`,
        contentEn: `When you need to convert between different data types, use type conversion functions.\n\n- int(): convert to integer\n- float(): convert to floating-point number\n- str(): convert to string\n- bool(): convert to boolean`,
        code: '# 형 변환 예제\nnum_str = "42"\nnum = int(num_str)\nprint(num + 8)\n\npi = 3.14\nprint(int(pi))\n\nresult = str(100)\nprint("점수: " + result)',
        codeEn: '# Type conversion example\nnum_str = "42"\nnum = int(num_str)\nprint(num + 8)\n\npi = 3.14\nprint(int(pi))\n\nresult = str(100)\nprint("Score: " + result)',
        expectedOutput: '50\n3\n점수: 100',
        expectedOutputEn: '50\n3\nScore: 100',
        tip: 'int()로 소수를 변환하면 소수점 이하가 버려집니다 (반올림이 아님).',
        tipEn: 'When converting a decimal with int(), the fractional part is truncated (not rounded).'
      },
      {
        title: 'input() 함수로 입력받기',
        titleEn: 'Getting Input with input()',
        content: `input() 함수는 사용자로부터 키보드 입력을 받습니다.\n항상 문자열(str)을 반환하므로, 숫자로 사용하려면 int()나 float()로 변환해야 합니다.\n\n형식: 변수 = input("프롬프트 메시지")\n\n아래 코드를 실행하면 입력 창이 나타납니다. 값을 입력해보세요!`,
        contentEn: `The input() function receives keyboard input from the user.\nIt always returns a string (str), so you need to convert it with int() or float() to use it as a number.\n\nFormat: variable = input("prompt message")\n\nWhen you run the code below, an input field will appear. Try entering a value!`,
        code: '# input() 함수 사용법\nname = input("이름을 입력하세요: ")\nage = int(input("나이를 입력하세요: "))\n\nprint(f"안녕하세요, {name}님!")\nprint(f"내년에 {age + 1}살이 되시네요!")',
        codeEn: '# How to use the input() function\nname = input("Enter your name: ")\nage = int(input("Enter your age: "))\n\nprint(f"Hello, {name}!")\nprint(f"You will be {age + 1} years old next year!")',
        expectedOutput: '안녕하세요, 파이썬님!\n내년에 21살이 되시네요!',
        expectedOutputEn: 'Hello, Python!\nYou will be 21 years old next year!',
        tip: 'input()은 항상 문자열을 반환합니다. 숫자 계산이 필요하면 int() 또는 float()로 변환하세요.',
        tipEn: 'input() always returns a string. If you need numerical calculations, convert it with int() or float().'
      }
    ]
  },

  'operators': {
    sections: [
      {
        title: '산술 연산자',
        titleEn: 'Arithmetic Operators',
        content: `파이썬의 산술 연산자로 수학 계산을 수행할 수 있습니다.\n\n+ 덧셈, - 뺄셈, * 곱셈, / 나눗셈\n// 정수 나눗셈, % 나머지, ** 거듭제곱`,
        contentEn: `You can perform mathematical calculations using Python's arithmetic operators.\n\n+ addition, - subtraction, * multiplication, / division\n// floor division, % modulus (remainder), ** exponentiation`,
        code: 'print(10 + 3)   # 덧셈\nprint(10 - 3)   # 뺄셈\nprint(10 * 3)   # 곱셈\nprint(10 / 3)   # 나눗셈\nprint(10 // 3)  # 정수 나눗셈\nprint(10 % 3)   # 나머지\nprint(2 ** 10)  # 거듭제곱',
        codeEn: 'print(10 + 3)   # Addition\nprint(10 - 3)   # Subtraction\nprint(10 * 3)   # Multiplication\nprint(10 / 3)   # Division\nprint(10 // 3)  # Floor division\nprint(10 % 3)   # Modulus\nprint(2 ** 10)  # Exponentiation',
        expectedOutput: '13\n7\n30\n3.3333333333333335\n3\n1\n1024',
        tip: '/ 는 항상 float을 반환하고, //는 정수 나눗셈(몫)을 반환합니다.',
        tipEn: '/ always returns a float, while // returns the floor division result (quotient).'
      },
      {
        title: '비교 및 논리 연산자',
        titleEn: 'Comparison and Logical Operators',
        content: `비교 연산자는 두 값을 비교하여 True 또는 False를 반환합니다.\n\n==  같다, != 다르다, > 크다, < 작다, >= 이상, <= 이하\n\n논리 연산자: and, or, not`,
        contentEn: `Comparison operators compare two values and return True or False.\n\n== equal to, != not equal to, > greater than, < less than, >= greater than or equal, <= less than or equal\n\nLogical operators: and, or, not`,
        code: 'x = 10\nprint(x > 5)\nprint(x == 10)\nprint(x != 5)\n\n# 논리 연산자\nprint(x > 5 and x < 20)\nprint(x > 100 or x == 10)\nprint(not x > 100)',
        codeEn: 'x = 10\nprint(x > 5)\nprint(x == 10)\nprint(x != 5)\n\n# Logical operators\nprint(x > 5 and x < 20)\nprint(x > 100 or x == 10)\nprint(not x > 100)',
        expectedOutput: 'True\nTrue\nTrue\nTrue\nTrue\nTrue',
        tip: '파이썬에서는 5 < x < 20처럼 연속 비교가 가능합니다!',
        tipEn: 'In Python, chained comparisons like 5 < x < 20 are supported!'
      }
    ]
  },

  'strings': {
    sections: [
      {
        title: '문자열 인덱싱과 슬라이싱',
        titleEn: 'String Indexing and Slicing',
        content: `문자열의 각 문자는 인덱스(위치 번호)로 접근할 수 있습니다.\n인덱스는 0부터 시작하며, 음수 인덱스는 뒤에서부터 셉니다.\n\n슬라이싱은 [시작:끝:간격] 형태로 부분 문자열을 추출합니다.`,
        contentEn: `Each character in a string can be accessed by its index (position number).\nIndexing starts at 0, and negative indices count from the end.\n\nSlicing extracts a substring using the format [start:end:step].`,
        code: 'text = "Python"\nprint(text[0])    # 첫 번째 문자\nprint(text[-1])   # 마지막 문자\nprint(text[0:3])  # 슬라이싱\nprint(text[::2])  # 2칸씩 건너뛰기\nprint(text[::-1]) # 뒤집기',
        codeEn: 'text = "Python"\nprint(text[0])    # First character\nprint(text[-1])   # Last character\nprint(text[0:3])  # Slicing\nprint(text[::2])  # Every 2nd character\nprint(text[::-1]) # Reverse',
        expectedOutput: 'P\nn\nPyt\nPto\nnohtyP',
        tip: '슬라이싱에서 끝 인덱스는 포함되지 않습니다. text[0:3]은 인덱스 0,1,2의 문자입니다.',
        tipEn: 'In slicing, the end index is not included. text[0:3] gives the characters at indices 0, 1, and 2.'
      },
      {
        title: 'f-string 포매팅',
        titleEn: 'f-string Formatting',
        content: `f-string은 파이썬 3.6+에서 도입된 문자열 포매팅 방법입니다.\n문자열 앞에 f를 붙이고, 중괄호 {} 안에 변수나 표현식을 넣습니다.\n\n서식 지정도 가능합니다: {값:서식}`,
        contentEn: `f-strings are a string formatting method introduced in Python 3.6+.\nPrefix the string with f, and place variables or expressions inside curly braces {}.\n\nFormat specifiers are also supported: {value:format}`,
        code: 'name = "파이썬"\nversion = 3.12\n\nprint(f"안녕, {name}!")\nprint(f"버전: {version}")\nprint(f"계산: {2 + 3 = }")\nprint(f"파이: {3.14159:.2f}")\nprint(f"이름: {name:>10}")',
        codeEn: 'name = "Python"\nversion = 3.12\n\nprint(f"Hello, {name}!")\nprint(f"Version: {version}")\nprint(f"Calculation: {2 + 3 = }")\nprint(f"Pi: {3.14159:.2f}")\nprint(f"Name: {name:>10}")',
        expectedOutput: '안녕, 파이썬!\n버전: 3.12\n계산: 2 + 3 = 5\n파이: 3.14\n이름:       파이썬',
        expectedOutputEn: 'Hello, Python!\nVersion: 3.12\nCalculation: 2 + 3 = 5\nPi: 3.14\nName:     Python',
        tip: 'f-string 안에서 표현식도 사용 가능합니다. {2+3}은 5로 치환됩니다.',
        tipEn: 'Expressions can also be used inside f-strings. {2+3} is replaced with 5.'
      },
      {
        title: '문자열 메서드',
        titleEn: 'String Methods',
        content: `파이썬 문자열은 다양한 내장 메서드를 제공합니다.\n\n주요 메서드: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,
        contentEn: `Python strings provide a variety of built-in methods.\n\nKey methods: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,
        code: 'text = "  Hello, Python World!  "\nprint(text.strip())\nprint(text.strip().upper())\nprint(text.strip().lower())\nprint(text.strip().split(", "))\nprint("-".join(["a", "b", "c"]))\nprint(text.count("l"))',
        expectedOutput: 'Hello, Python World!\nHELLO, PYTHON WORLD!\nhello, python world!\n[\'Hello\', \'Python World!\']\na-b-c\n3',
        tip: '문자열 메서드는 원본을 변경하지 않고 새 문자열을 반환합니다.',
        tipEn: 'String methods do not modify the original string; they return a new string.'
      }
    ]
  },

  'conditionals': {
    sections: [
      {
        title: 'if / elif / else',
        titleEn: 'if / elif / else',
        content: `조건문은 조건에 따라 다른 코드를 실행합니다.\nif 조건이 True이면 해당 블록을 실행하고, 아니면 elif나 else로 넘어갑니다.\n\n파이썬은 들여쓰기(인덴트)로 코드 블록을 구분합니다.`,
        contentEn: `Conditional statements execute different code depending on conditions.\nIf the if condition is True, its block is executed; otherwise, it moves on to elif or else.\n\nPython uses indentation to define code blocks.`,
        code: 'score = 85\n\nif score >= 90:\n    print("A학점")\nelif score >= 80:\n    print("B학점")\nelif score >= 70:\n    print("C학점")\nelse:\n    print("재수강")\n\nprint(f"점수: {score}점")',
        codeEn: 'score = 85\n\nif score >= 90:\n    print("Grade A")\nelif score >= 80:\n    print("Grade B")\nelif score >= 70:\n    print("Grade C")\nelse:\n    print("Retake")\n\nprint(f"Score: {score} points")',
        expectedOutput: 'B학점\n점수: 85점',
        expectedOutputEn: 'Grade B\nScore: 85 points',
        tip: '파이썬은 중괄호 대신 들여쓰기(보통 스페이스 4칸)로 블록을 구분합니다.',
        tipEn: 'Python uses indentation (usually 4 spaces) instead of curly braces to define blocks.'
      },
      {
        title: '조건 표현식 (삼항 연산자)',
        titleEn: 'Conditional Expression (Ternary Operator)',
        content: `파이썬의 삼항 연산자는 한 줄로 조건문을 작성할 수 있게 해줍니다.\n\n형식: 값1 if 조건 else 값2`,
        contentEn: `Python's ternary operator allows you to write a conditional statement in a single line.\n\nFormat: value1 if condition else value2`,
        code: 'age = 20\nstatus = "성인" if age >= 18 else "미성년"\nprint(f"나이: {age}, 상태: {status}")\n\n# 중첩도 가능 (하지만 가독성 주의)\ntemp = 35\nweather = "더움" if temp > 30 else "적당" if temp > 15 else "추움"\nprint(f"기온: {temp}도, 날씨: {weather}")',
        codeEn: 'age = 20\nstatus = "Adult" if age >= 18 else "Minor"\nprint(f"Age: {age}, Status: {status}")\n\n# Nesting is possible (but watch readability)\ntemp = 35\nweather = "Hot" if temp > 30 else "Moderate" if temp > 15 else "Cold"\nprint(f"Temperature: {temp}\u00b0, Weather: {weather}")',
        expectedOutput: '나이: 20, 상태: 성인\n기온: 35도, 날씨: 더움',
        expectedOutputEn: 'Age: 20, Status: Adult\nTemperature: 35\u00b0, Weather: Hot',
        tip: '삼항 연산자는 간단한 조건에만 사용하세요. 복잡한 조건은 일반 if문이 읽기 쉽습니다.',
        tipEn: 'Use the ternary operator only for simple conditions. For complex conditions, a regular if statement is more readable.'
      }
    ]
  },

  'loops': {
    sections: [
      {
        title: 'for 반복문',
        titleEn: 'for Loops',
        content: `for 문은 시퀀스(리스트, 문자열, range 등)의 각 요소를 순회합니다.\n\nrange(n)은 0부터 n-1까지의 수열을 생성합니다.\nrange(start, stop, step)으로 시작, 끝, 간격을 지정할 수 있습니다.`,
        contentEn: `The for statement iterates over each element of a sequence (list, string, range, etc.).\n\nrange(n) generates a sequence of numbers from 0 to n-1.\nYou can specify the start, stop, and step with range(start, stop, step).`,
        code: '# 리스트 순회\nfruits = ["사과", "바나나", "체리"]\nfor fruit in fruits:\n    print(fruit)\n\n# range 사용\nfor i in range(1, 6):\n    print(f"{i}번", end=" ")\nprint()',
        codeEn: '# Iterating over a list\nfruits = ["Apple", "Banana", "Cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Using range\nfor i in range(1, 6):\n    print(f"#{i}", end=" ")\nprint()',
        expectedOutput: '사과\n바나나\n체리\n1번 2번 3번 4번 5번',
        expectedOutputEn: 'Apple\nBanana\nCherry\n#1 #2 #3 #4 #5',
        tip: 'enumerate()를 사용하면 인덱스와 값을 동시에 얻을 수 있습니다.',
        tipEn: 'Using enumerate(), you can get both the index and the value at the same time.'
      },
      {
        title: 'while 반복문과 제어문',
        titleEn: 'while Loops and Control Statements',
        content: `while 문은 조건이 True인 동안 반복합니다.\n\nbreak: 반복문을 즉시 종료\ncontinue: 현재 반복을 건너뛰고 다음 반복으로\nelse: 반복문이 정상 종료(break 없이)되었을 때 실행`,
        contentEn: `The while statement repeats as long as the condition is True.\n\nbreak: immediately exits the loop\ncontinue: skips the current iteration and moves to the next\nelse: executes when the loop ends normally (without break)`,
        code: '# while 문\ncount = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue  # 3은 건너뛰기\n    print(count, end=" ")\nprint()\n\n# break 사용\nfor i in range(10):\n    if i == 5:\n        break\n    print(i, end=" ")\nprint()',
        codeEn: '# while loop\ncount = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue  # Skip 3\n    print(count, end=" ")\nprint()\n\n# Using break\nfor i in range(10):\n    if i == 5:\n        break\n    print(i, end=" ")\nprint()',
        expectedOutput: '1 2 4 5\n0 1 2 3 4',
        tip: 'while True와 break를 조합하면 유연한 반복 구조를 만들 수 있습니다.',
        tipEn: 'Combining while True with break allows you to create flexible loop structures.'
      }
    ]
  },

  'lists': {
    sections: [
      {
        title: '리스트 생성과 조작',
        titleEn: 'Creating and Manipulating Lists',
        content: `리스트는 여러 값을 순서대로 저장하는 자료구조입니다.\n대괄호 []를 사용하여 생성하며, 다양한 타입을 혼합할 수 있습니다.\n\n인덱싱, 슬라이싱, 추가, 삭제 등 다양한 조작이 가능합니다.`,
        contentEn: `A list is a data structure that stores multiple values in order.\nIt is created using square brackets [], and can mix different types.\n\nVarious operations are available, including indexing, slicing, adding, and deleting.`,
        code: '# 리스트 생성과 조작\nnums = [1, 2, 3, 4, 5]\nprint(nums)\n\nnums.append(6)       # 끝에 추가\nnums.insert(0, 0)    # 인덱스 0에 삽입\nprint(nums)\n\nnums.pop()           # 마지막 요소 제거\nprint(nums)\nprint(len(nums))     # 길이',
        codeEn: '# Creating and manipulating lists\nnums = [1, 2, 3, 4, 5]\nprint(nums)\n\nnums.append(6)       # Add to end\nnums.insert(0, 0)    # Insert at index 0\nprint(nums)\n\nnums.pop()           # Remove last element\nprint(nums)\nprint(len(nums))     # Length',
        expectedOutput: '[1, 2, 3, 4, 5]\n[0, 1, 2, 3, 4, 5, 6]\n[0, 1, 2, 3, 4, 5]\n6',
        tip: 'append()는 하나의 요소를, extend()는 다른 리스트의 모든 요소를 추가합니다.',
        tipEn: 'append() adds a single element, while extend() adds all elements from another list.'
      },
      {
        title: '리스트 컴프리헨션',
        titleEn: 'List Comprehensions',
        content: `리스트 컴프리헨션은 리스트를 간결하게 생성하는 파이썬스러운 방법입니다.\n\n형식: [표현식 for 변수 in 반복가능 if 조건]\n\n기존 반복문보다 더 읽기 쉽고 빠릅니다.`,
        contentEn: `List comprehensions are a Pythonic way to create lists concisely.\n\nFormat: [expression for variable in iterable if condition]\n\nThey are more readable and faster than traditional loops.`,
        code: '# 기본 컴프리헨션\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)\n\n# 조건 포함\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n\n# 변환 적용\nwords = ["hello", "world", "python"]\nupper_words = [w.upper() for w in words]\nprint(upper_words)',
        codeEn: '# Basic comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)\n\n# With condition\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n\n# Applying transformation\nwords = ["hello", "world", "python"]\nupper_words = [w.upper() for w in words]\nprint(upper_words)',
        expectedOutput: '[1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]\n[\'HELLO\', \'WORLD\', \'PYTHON\']',
        tip: '리스트 컴프리헨션이 너무 복잡해지면 일반 for문을 사용하는 것이 더 좋습니다.',
        tipEn: 'If a list comprehension becomes too complex, it is better to use a regular for loop.'
      }
    ]
  },

  'tuples-dicts': {
    sections: [
      {
        title: '튜플',
        titleEn: 'Tuples',
        content: `튜플은 리스트와 비슷하지만 변경할 수 없는(immutable) 자료구조입니다.\n소괄호 ()를 사용하여 생성합니다.\n\n변경이 필요 없는 데이터를 저장할 때 튜플을 사용하면 안전합니다.`,
        contentEn: `A tuple is a data structure similar to a list, but it is immutable (cannot be changed).\nIt is created using parentheses ().\n\nUsing tuples to store data that does not need to change is safer.`,
        code: '# 튜플 생성\ncolors = ("빨강", "초록", "파랑")\nprint(colors[0])\nprint(len(colors))\n\n# 튜플 언패킹\nx, y, z = colors\nprint(f"{x}, {y}, {z}")\n\n# 여러 값 반환에 활용\ndef min_max(nums):\n    return min(nums), max(nums)\n\nresult = min_max([3, 1, 4, 1, 5])\nprint(f"최소: {result[0]}, 최대: {result[1]}")',
        codeEn: '# Creating tuples\ncolors = ("Red", "Green", "Blue")\nprint(colors[0])\nprint(len(colors))\n\n# Tuple unpacking\nx, y, z = colors\nprint(f"{x}, {y}, {z}")\n\n# Using for multiple return values\ndef min_max(nums):\n    return min(nums), max(nums)\n\nresult = min_max([3, 1, 4, 1, 5])\nprint(f"Min: {result[0]}, Max: {result[1]}")',
        expectedOutput: '빨강\n3\n빨강, 초록, 파랑\n최소: 1, 최대: 5',
        expectedOutputEn: 'Red\n3\nRed, Green, Blue\nMin: 1, Max: 5',
        tip: '함수에서 여러 값을 반환할 때 파이썬은 자동으로 튜플로 묶어서 반환합니다.',
        tipEn: 'When a function returns multiple values, Python automatically bundles them into a tuple.'
      },
      {
        title: '딕셔너리',
        titleEn: 'Dictionaries',
        content: `딕셔너리는 키(key)와 값(value) 쌍으로 데이터를 저장합니다.\n중괄호 {}와 콜론 :을 사용하여 생성합니다.\n\n키로 빠르게 값을 검색할 수 있습니다.`,
        contentEn: `A dictionary stores data as key-value pairs.\nIt is created using curly braces {} and colons :.\n\nYou can quickly look up values by their keys.`,
        code: '# 딕셔너리 생성과 사용\nstudent = {\n    "이름": "김파이",\n    "나이": 20,\n    "전공": "컴퓨터공학"\n}\n\nprint(student["이름"])\nstudent["학년"] = 2  # 추가\nprint(student)\n\n# 메서드 활용\nprint(list(student.keys()))\nfor key, value in student.items():\n    print(f"{key}: {value}")',
        codeEn: '# Creating and using dictionaries\nstudent = {\n    "name": "Kim",\n    "age": 20,\n    "major": "Computer Science"\n}\n\nprint(student["name"])\nstudent["year"] = 2  # Add\nprint(student)\n\n# Using methods\nprint(list(student.keys()))\nfor key, value in student.items():\n    print(f"{key}: {value}")',
        expectedOutput: "김파이\n{'이름': '김파이', '나이': 20, '전공': '컴퓨터공학', '학년': 2}\n['이름', '나이', '전공', '학년']\n이름: 김파이\n나이: 20\n전공: 컴퓨터공학\n학년: 2",
        expectedOutputEn: "Kim\n{'name': 'Kim', 'age': 20, 'major': 'Computer Science', 'year': 2}\n['name', 'age', 'major', 'year']\nname: Kim\nage: 20\nmajor: Computer Science\nyear: 2",
        tip: 'get() 메서드를 사용하면 키가 없을 때 에러 대신 기본값을 반환합니다.',
        tipEn: 'Using the get() method returns a default value instead of an error when the key does not exist.'
      }
    ]
  },

  'functions-basic': {
    sections: [
      {
        title: '함수 정의와 호출',
        titleEn: 'Defining and Calling Functions',
        content: `함수는 재사용 가능한 코드 블록입니다.\ndef 키워드로 정의하고, 함수명() 으로 호출합니다.\n\n매개변수로 데이터를 전달하고, return으로 결과를 반환합니다.`,
        contentEn: `A function is a reusable block of code.\nIt is defined with the def keyword and called with function_name().\n\nYou pass data through parameters and return results with return.`,
        code: '# 함수 정의\ndef greet(name):\n    return f"안녕하세요, {name}님!"\n\n# 함수 호출\nresult = greet("파이썬")\nprint(result)\n\n# 여러 매개변수\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))',
        codeEn: '# Defining a function\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Calling a function\nresult = greet("Python")\nprint(result)\n\n# Multiple parameters\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))',
        expectedOutput: '안녕하세요, 파이썬님!\n8',
        expectedOutputEn: 'Hello, Python!\n8',
        tip: '함수 이름은 동사로 시작하면 좋습니다: get_name(), calculate_total(), is_valid() 등',
        tipEn: 'It is good practice to start function names with a verb: get_name(), calculate_total(), is_valid(), etc.'
      },
      {
        title: '기본값과 가변 인자',
        titleEn: 'Default Values and Variable Arguments',
        content: `매개변수에 기본값을 설정하면 인자를 생략할 수 있습니다.\n\n*args는 여러 개의 위치 인자를 튜플로 받고,\n**kwargs는 키워드 인자를 딕셔너리로 받습니다.`,
        contentEn: `Setting default values for parameters allows you to omit arguments.\n\n*args receives multiple positional arguments as a tuple,\n**kwargs receives keyword arguments as a dictionary.`,
        code: '# 기본값 매개변수\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3))      # 3의 2승\nprint(power(2, 10))  # 2의 10승\n\n# *args 가변 인자\ndef total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3, 4, 5))',
        codeEn: '# Default parameter values\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3))      # 3 to the power of 2\nprint(power(2, 10))  # 2 to the power of 10\n\n# *args variable arguments\ndef total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3, 4, 5))',
        expectedOutput: '9\n1024\n15',
        tip: '기본값이 있는 매개변수는 기본값이 없는 매개변수 뒤에 와야 합니다.',
        tipEn: 'Parameters with default values must come after parameters without default values.'
      }
    ]
  },

  // ==================== 중급 과정 ====================
  'functions-advanced': {
    sections: [
      {
        title: '람다 함수',
        titleEn: 'Lambda Functions',
        content: `lambda는 이름 없는 한 줄 함수를 만듭니다.\n\n형식: lambda 매개변수: 표현식\n\n간단한 연산을 함수로 전달할 때 유용합니다.`,
        contentEn: `lambda creates an anonymous one-line function.\n\nSyntax: lambda parameters: expression\n\nUseful when passing simple operations as function arguments.`,
        code: '# lambda 함수\nsquare = lambda x: x ** 2\nprint(square(5))\n\n# 정렬에 활용\nstudents = [("김철수", 85), ("이영희", 92), ("박민수", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nfor name, score in students:\n    print(f"{name}: {score}점")',
        codeEn: '# lambda function\nsquare = lambda x: x ** 2\nprint(square(5))\n\n# Using with sorting\nstudents = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nfor name, score in students:\n    print(f"{name}: {score} pts")',
        expectedOutput: '25\n이영희: 92점\n김철수: 85점\n박민수: 78점',
        expectedOutputEn: '25\nBob: 92 pts\nAlice: 85 pts\nCharlie: 78 pts',
        tip: 'lambda는 간단한 경우에만 사용하세요. 복잡한 로직은 def로 정의하는 것이 좋습니다.',
        tipEn: 'Use lambda only for simple cases. For complex logic, define a function with def instead.'
      },
      {
        title: 'map, filter, reduce',
        titleEn: 'map, filter, reduce',
        content: `고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다.\n\nmap(함수, 반복가능): 각 요소에 함수를 적용\nfilter(함수, 반복가능): 조건을 만족하는 요소만 필터링\nreduce(함수, 반복가능): 요소를 누적 연산`,
        contentEn: `Higher-order functions accept functions as arguments or return functions.\n\nmap(func, iterable): Apply a function to each element\nfilter(func, iterable): Keep only elements that satisfy a condition\nreduce(func, iterable): Accumulate elements with an operation`,
        code: '# map: 각 요소에 함수 적용\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)\n\n# filter: 조건에 맞는 요소만\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)\n\n# reduce: 누적 연산\nfrom functools import reduce\ntotal = reduce(lambda a, b: a + b, nums)\nprint(f"합계: {total}")',
        codeEn: '# map: apply function to each element\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)\n\n# filter: keep only matching elements\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)\n\n# reduce: cumulative operation\nfrom functools import reduce\ntotal = reduce(lambda a, b: a + b, nums)\nprint(f"Total: {total}")',
        expectedOutput: '[1, 4, 9, 16, 25]\n[2, 4]\n합계: 15',
        expectedOutputEn: '[1, 4, 9, 16, 25]\n[2, 4]\nTotal: 15',
        tip: '파이썬에서는 map/filter 대신 리스트 컴프리헨션을 더 많이 사용하는 추세입니다.',
        tipEn: 'In Python, list comprehensions are increasingly preferred over map/filter.'
      }
    ]
  },

  'oop-basics': {
    sections: [
      {
        title: '클래스와 객체',
        titleEn: 'Classes and Objects',
        content: `클래스는 객체를 만들기 위한 설계도입니다.\nclass 키워드로 정의하고, __init__ 메서드로 초기화합니다.\n\nself는 인스턴스 자기 자신을 참조합니다.`,
        contentEn: `A class is a blueprint for creating objects.\nDefine it with the class keyword and initialize with the __init__ method.\n\nself refers to the instance itself.`,
        code: 'class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    \n    def bark(self):\n        return f"{self.name}(이/가) 멍멍!"\n    \n    def info(self):\n        return f"{self.breed} {self.name}"\n\n# 객체 생성\ndog1 = Dog("초코", "포메라니안")\ndog2 = Dog("맥스", "골든리트리버")\n\nprint(dog1.bark())\nprint(dog2.info())',
        codeEn: 'class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n    \n    def info(self):\n        return f"{self.breed} {self.name}"\n\n# Creating objects\ndog1 = Dog("Choco", "Pomeranian")\ndog2 = Dog("Max", "Golden Retriever")\n\nprint(dog1.bark())\nprint(dog2.info())',
        expectedOutput: '초코(이/가) 멍멍!\n골든리트리버 맥스',
        expectedOutputEn: 'Choco says Woof!\nGolden Retriever Max',
        tip: '__init__은 생성자(constructor)로, 객체가 생성될 때 자동으로 호출됩니다.',
        tipEn: '__init__ is a constructor that is automatically called when an object is created.'
      },
      {
        title: '클래스 변수와 인스턴스 변수',
        titleEn: 'Class Variables and Instance Variables',
        content: `클래스 변수는 모든 인스턴스가 공유하는 변수이고,\n인스턴스 변수(self.변수)는 각 인스턴스에 고유한 변수입니다.`,
        contentEn: `Class variables are shared across all instances,\nwhile instance variables (self.variable) are unique to each instance.`,
        code: 'class Student:\n    school = "파이썬 학교"  # 클래스 변수\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name       # 인스턴스 변수\n        Student.count += 1\n\ns1 = Student("김철수")\ns2 = Student("이영희")\n\nprint(f"{s1.name} - {s1.school}")\nprint(f"{s2.name} - {s2.school}")\nprint(f"전체 학생 수: {Student.count}")',
        codeEn: 'class Student:\n    school = "Python Academy"  # Class variable\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name       # Instance variable\n        Student.count += 1\n\ns1 = Student("Alice")\ns2 = Student("Bob")\n\nprint(f"{s1.name} - {s1.school}")\nprint(f"{s2.name} - {s2.school}")\nprint(f"Total students: {Student.count}")',
        expectedOutput: '김철수 - 파이썬 학교\n이영희 - 파이썬 학교\n전체 학생 수: 2',
        expectedOutputEn: 'Alice - Python Academy\nBob - Python Academy\nTotal students: 2',
        tip: '클래스 변수는 클래스명.변수 또는 인스턴스.변수로 접근할 수 있습니다.',
        tipEn: 'Class variables can be accessed via ClassName.variable or instance.variable.'
      }
    ]
  },

  'oop-advanced': {
    sections: [
      {
        title: '상속',
        titleEn: 'Inheritance',
        content: `상속은 기존 클래스(부모)의 기능을 물려받아 새 클래스(자식)를 만드는 것입니다.\n자식 클래스에서 부모의 메서드를 재정의(오버라이딩)할 수 있습니다.`,
        contentEn: `Inheritance creates a new class (child) that inherits features from an existing class (parent).\nThe child class can override the parent's methods.`,
        code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name}: 야옹!"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name}: 멍멍!"\n\nanimals = [Cat("나비"), Dog("바둑이"), Cat("미미")]\nfor animal in animals:\n    print(animal.speak())',
        codeEn: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name}: Meow!"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name}: Woof!"\n\nanimals = [Cat("Whiskers"), Dog("Buddy"), Cat("Luna")]\nfor animal in animals:\n    print(animal.speak())',
        expectedOutput: '나비: 야옹!\n바둑이: 멍멍!\n미미: 야옹!',
        expectedOutputEn: 'Whiskers: Meow!\nBuddy: Woof!\nLuna: Meow!',
        tip: 'super().__init__()을 사용하면 부모 클래스의 초기화 코드를 호출할 수 있습니다.',
        tipEn: 'Use super().__init__() to call the parent class initialization code.'
      },
      {
        title: '특수 메서드 (매직 메서드)',
        titleEn: 'Special Methods (Magic Methods)',
        content: `파이썬 클래스는 __로 시작하고 끝나는 특수 메서드를 정의할 수 있습니다.\n\n__str__: 문자열 표현\n__len__: len() 지원\n__add__: + 연산자 지원\n__eq__: == 비교 지원`,
        contentEn: `Python classes can define special methods that start and end with __.\n\n__str__: String representation\n__len__: Support for len()\n__add__: Support for + operator\n__eq__: Support for == comparison`,
        code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"({self.x}, {self.y})"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(f"{v1} + {v2} = {v3}")',
        expectedOutput: '(1, 2) + (3, 4) = (4, 6)',
        tip: '매직 메서드를 잘 활용하면 클래스를 파이썬 내장 타입처럼 자연스럽게 사용할 수 있습니다.',
        tipEn: 'By leveraging magic methods, you can make your classes behave naturally like Python built-in types.'
      }
    ]
  },

  'error-handling': {
    sections: [
      {
        title: 'try / except / finally',
        titleEn: 'try / except / finally',
        content: `예외 처리는 프로그램 실행 중 발생하는 오류를 안전하게 처리합니다.\n\ntry: 오류가 발생할 수 있는 코드\nexcept: 오류 발생 시 처리 코드\nfinally: 무조건 실행되는 코드`,
        contentEn: `Exception handling safely manages errors that occur during program execution.\n\ntry: Code that may raise an error\nexcept: Code to handle the error\nfinally: Code that always runs regardless`,
        code: '# 기본 예외 처리\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("0으로 나눌 수 없습니다!")\n\n# 여러 예외 처리\ntry:\n    nums = [1, 2, 3]\n    print(nums[10])\nexcept IndexError as e:\n    print(f"인덱스 오류: {e}")\nfinally:\n    print("처리 완료!")',
        codeEn: '# Basic exception handling\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n\n# Handling multiple exceptions\ntry:\n    nums = [1, 2, 3]\n    print(nums[10])\nexcept IndexError as e:\n    print(f"Index error: {e}")\nfinally:\n    print("Processing complete!")',
        expectedOutput: '0으로 나눌 수 없습니다!\n인덱스 오류: list index out of range\n처리 완료!',
        expectedOutputEn: 'Cannot divide by zero!\nIndex error: list index out of range\nProcessing complete!',
        tip: '가능한 한 구체적인 예외 타입을 지정하세요. except Exception은 너무 광범위합니다.',
        tipEn: 'Be as specific as possible with exception types. except Exception is too broad.'
      },
      {
        title: 'raise와 사용자 정의 예외',
        titleEn: 'raise and Custom Exceptions',
        content: `raise 키워드로 의도적으로 예외를 발생시킬 수 있습니다.\nException 클래스를 상속하여 사용자 정의 예외를 만들 수 있습니다.`,
        contentEn: `The raise keyword lets you intentionally raise an exception.\nYou can create custom exceptions by inheriting from the Exception class.`,
        code: 'class InvalidAgeError(Exception):\n    def __init__(self, age):\n        super().__init__(f"잘못된 나이: {age}")\n        self.age = age\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(age)\n    return age\n\ntry:\n    set_age(200)\nexcept InvalidAgeError as e:\n    print(e)',
        codeEn: 'class InvalidAgeError(Exception):\n    def __init__(self, age):\n        super().__init__(f"Invalid age: {age}")\n        self.age = age\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(age)\n    return age\n\ntry:\n    set_age(200)\nexcept InvalidAgeError as e:\n    print(e)',
        expectedOutput: '잘못된 나이: 200',
        expectedOutputEn: 'Invalid age: 200',
        tip: '사용자 정의 예외는 Exception을 상속하고, 의미 있는 이름을 붙이세요.',
        tipEn: 'Custom exceptions should inherit from Exception and have meaningful names.'
      }
    ]
  },

  'file-io': {
    sections: [
      {
        title: '파일 읽기/쓰기',
        titleEn: 'Reading and Writing Files',
        content: `open() 함수로 파일을 열고, with 문으로 안전하게 관리합니다.\n\n모드: 'r'(읽기), 'w'(쓰기-덮어쓰기), 'a'(추가), 'x'(새파일 생성)`,
        contentEn: `Use the open() function to open files and the with statement for safe resource management.\n\nModes: 'r' (read), 'w' (write/overwrite), 'a' (append), 'x' (create new file)`,
        code: '# 파일 개념 이해 (시뮬레이션)\ndata = "이름: 파이썬\\n나이: 30\\n직업: 프로그래머"\n\n# 줄 단위로 처리\nlines = data.split("\\n")\nfor i, line in enumerate(lines, 1):\n    print(f"{i}: {line}")\n\nprint(f"\\n총 {len(lines)}줄")',
        codeEn: '# Understanding file concepts (simulation)\ndata = "Name: Python\\nAge: 30\\nJob: Programmer"\n\n# Processing line by line\nlines = data.split("\\n")\nfor i, line in enumerate(lines, 1):\n    print(f"{i}: {line}")\n\nprint(f"\\nTotal {len(lines)} lines")',
        expectedOutput: '1: 이름: 파이썬\n2: 나이: 30\n3: 직업: 프로그래머\n\n총 3줄',
        expectedOutputEn: '1: Name: Python\n2: Age: 30\n3: Job: Programmer\n\nTotal 3 lines',
        tip: 'with open() as f: 구문을 사용하면 파일이 자동으로 닫힙니다.',
        tipEn: 'Using the with open() as f: syntax ensures the file is automatically closed.'
      },
      {
        title: 'CSV와 JSON 처리',
        titleEn: 'Working with CSV and JSON',
        content: `CSV(쉼표 구분 값)와 JSON은 데이터 교환에 많이 사용되는 형식입니다.\n파이썬은 csv와 json 표준 라이브러리를 제공합니다.`,
        contentEn: `CSV (Comma-Separated Values) and JSON are widely used formats for data exchange.\nPython provides the csv and json standard libraries.`,
        code: 'import json\n\n# JSON 데이터 다루기\ndata = {\n    "students": [\n        {"name": "김철수", "score": 90},\n        {"name": "이영희", "score": 95}\n    ]\n}\n\n# 딕셔너리 -> JSON 문자열\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint(json_str)\n\n# JSON 문자열 -> 딕셔너리\nparsed = json.loads(json_str)\nfor s in parsed["students"]:\n    print(f"{s[\"name\"]}: {s[\"score\"]}점")',
        codeEn: 'import json\n\n# Working with JSON data\ndata = {\n    "students": [\n        {"name": "Alice", "score": 90},\n        {"name": "Bob", "score": 95}\n    ]\n}\n\n# Dictionary -> JSON string\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint(json_str)\n\n# JSON string -> Dictionary\nparsed = json.loads(json_str)\nfor s in parsed["students"]:\n    print(f"{s[\\"name\\"]}: {s[\\"score\\"]} pts")',
        expectedOutput: '{\n  "students": [\n    {\n      "name": "김철수",\n      "score": 90\n    },\n    {\n      "name": "이영희",\n      "score": 95\n    }\n  ]\n}\n김철수: 90점\n이영희: 95점',
        expectedOutputEn: '{\n  "students": [\n    {\n      "name": "Alice",\n      "score": 90\n    },\n    {\n      "name": "Bob",\n      "score": 95\n    }\n  ]\n}\nAlice: 90 pts\nBob: 95 pts',
        tip: 'json.dumps()의 ensure_ascii=False는 한글을 그대로 출력하게 합니다.',
        tipEn: 'ensure_ascii=False in json.dumps() allows non-ASCII characters (like Korean) to be output as-is.'
      }
    ]
  },

  'modules': {
    sections: [
      {
        title: '모듈 사용하기',
        titleEn: 'Using Modules',
        content: `모듈은 함수, 클래스 등을 담고 있는 파이썬 파일입니다.\nimport 문으로 모듈을 가져와 사용할 수 있습니다.\n\nimport 방식: import 모듈, from 모듈 import 이름, import 모듈 as 별칭`,
        contentEn: `A module is a Python file containing functions, classes, and more.\nUse the import statement to load and use modules.\n\nImport styles: import module, from module import name, import module as alias`,
        code: 'import math\nprint(f"원주율: {math.pi:.4f}")\nprint(f"제곱근: {math.sqrt(16)}")\n\nfrom random import randint, choice\nprint(f"주사위: {randint(1, 6)}")\n\nfruits = ["사과", "바나나", "체리"]\nprint(f"랜덤 선택: {choice(fruits)}")',
        codeEn: 'import math\nprint(f"Pi: {math.pi:.4f}")\nprint(f"Square root: {math.sqrt(16)}")\n\nfrom random import randint, choice\nprint(f"Dice: {randint(1, 6)}")\n\nfruits = ["Apple", "Banana", "Cherry"]\nprint(f"Random pick: {choice(fruits)}")',
        expectedOutput: '원주율: 3.1416\n제곱근: 4.0\n주사위: 4\n랜덤 선택: 바나나',
        expectedOutputEn: 'Pi: 3.1416\nSquare root: 4.0\nDice: 4\nRandom pick: Banana',
        tip: 'from 모듈 import *은 모든 이름을 가져오므로 충돌 위험이 있어 권장하지 않습니다.',
        tipEn: 'from module import * imports all names and risks naming conflicts, so it is not recommended.'
      }
    ]
  },

  'comprehensions': {
    sections: [
      {
        title: '다양한 컴프리헨션',
        titleEn: 'Various Comprehensions',
        content: `리스트 외에도 딕셔너리, 세트 컴프리헨션을 사용할 수 있습니다.\n중첩 컴프리헨션으로 다차원 데이터도 처리 가능합니다.`,
        contentEn: `Beyond lists, you can use dictionary and set comprehensions.\nNested comprehensions can also handle multi-dimensional data.`,
        code: '# 딕셔너리 컴프리헨션\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)\n\n# 세트 컴프리헨션\nwords = ["hello", "world", "hello", "python"]\nunique_lengths = {len(w) for w in words}\nprint(unique_lengths)\n\n# 중첩 컴프리헨션\nmatrix = [[i*3+j+1 for j in range(3)] for i in range(3)]\nfor row in matrix:\n    print(row)',
        codeEn: '# Dictionary comprehension\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)\n\n# Set comprehension\nwords = ["hello", "world", "hello", "python"]\nunique_lengths = {len(w) for w in words}\nprint(unique_lengths)\n\n# Nested comprehension\nmatrix = [[i*3+j+1 for j in range(3)] for i in range(3)]\nfor row in matrix:\n    print(row)',
        expectedOutput: '{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{5, 6}\n[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]',
        tip: '컴프리헨션은 간결하지만, 3중 이상 중첩은 가독성이 떨어지니 일반 for문을 사용하세요.',
        tipEn: 'Comprehensions are concise, but nesting more than 3 levels reduces readability. Use regular for loops instead.'
      }
    ]
  },

  'regex': {
    sections: [
      {
        title: '정규표현식 기초',
        titleEn: 'Regular Expression Basics',
        content: `정규표현식(regex)은 문자열에서 패턴을 찾는 강력한 도구입니다.\n파이썬의 re 모듈을 사용합니다.\n\n주요 함수: re.search(), re.match(), re.findall(), re.sub()`,
        contentEn: `Regular expressions (regex) are a powerful tool for finding patterns in strings.\nPython uses the re module.\n\nKey functions: re.search(), re.match(), re.findall(), re.sub()`,
        code: 'import re\n\ntext = "전화번호: 010-1234-5678, 이메일: test@email.com"\n\n# 전화번호 찾기\nphone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)\nprint(f"전화번호: {phone.group()}")\n\n# 모든 숫자 찾기\nnums = re.findall(r"\\d+", text)\nprint(f"숫자들: {nums}")\n\n# 패턴 치환\nresult = re.sub(r"\\d", "*", text)\nprint(result)',
        codeEn: 'import re\n\ntext = "Phone: 010-1234-5678, Email: test@email.com"\n\n# Find phone number\nphone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)\nprint(f"Phone: {phone.group()}")\n\n# Find all numbers\nnums = re.findall(r"\\d+", text)\nprint(f"Numbers: {nums}")\n\n# Pattern substitution\nresult = re.sub(r"\\d", "*", text)\nprint(result)',
        expectedOutput: '전화번호: 010-1234-5678\n숫자들: [\'010\', \'1234\', \'5678\']\n전화번호: ***-****-****, 이메일: test@email.com',
        expectedOutputEn: 'Phone: 010-1234-5678\nNumbers: [\'010\', \'1234\', \'5678\']\nPhone: ***-****-****, Email: test@email.com',
        tip: '정규표현식 문자열 앞에 r을 붙이면(raw string) 이스케이프 문자 문제를 방지합니다.',
        tipEn: 'Prefix regex strings with r (raw string) to avoid escape character issues.'
      }
    ]
  },

  'os-sys': {
    sections: [
      {
        title: 'os 모듈 - 파일 시스템 제어',
        titleEn: 'os Module - File System Control',
        content: `os 모듈은 운영체제와 상호작용하는 기능을 제공합니다.\n파일/디렉토리 조작, 경로 처리, 환경 변수 접근 등이 가능합니다.\n\nos.path 하위 모듈은 경로 관련 유틸리티를 제공합니다.`,
        contentEn: `The os module provides functions for interacting with the operating system.\nYou can manipulate files/directories, process paths, and access environment variables.\n\nThe os.path submodule provides path-related utilities.`,
        code: 'import os\n\n# 현재 작업 디렉토리\nprint(f"현재 디렉토리: {os.getcwd()}")\n\n# os.path 경로 처리\npath = "/home/user/documents/report.pdf"\nprint(f"파일명: {os.path.basename(path)}")\nprint(f"디렉토리: {os.path.dirname(path)}")\nprint(f"확장자: {os.path.splitext(path)[1]}")\nprint(f"경로 존재: {os.path.exists(path)}")\n\n# 경로 결합 (OS 독립적)\nfull = os.path.join("home", "user", "data.csv")\nprint(f"경로 결합: {full}")\n\n# 환경 변수\nprint(f"\\nPATH (일부): /usr/local/bin:/usr/bin...")\nprint(f"HOME: /home/user")',
        codeEn: 'import os\n\n# Current working directory\nprint(f"Current directory: {os.getcwd()}")\n\n# os.path path handling\npath = "/home/user/documents/report.pdf"\nprint(f"Filename: {os.path.basename(path)}")\nprint(f"Directory: {os.path.dirname(path)}")\nprint(f"Extension: {os.path.splitext(path)[1]}")\nprint(f"Path exists: {os.path.exists(path)}")\n\n# Joining paths (OS-independent)\nfull = os.path.join("home", "user", "data.csv")\nprint(f"Joined path: {full}")\n\n# Environment variables\nprint(f"\\nPATH (partial): /usr/local/bin:/usr/bin...")\nprint(f"HOME: /home/user")',
        expectedOutput: '현재 디렉토리: /home/user\n파일명: report.pdf\n디렉토리: /home/user/documents\n확장자: .pdf\n경로 존재: False\n경로 결합: home/user/data.csv\n\nPATH (일부): /usr/local/bin:/usr/bin...\nHOME: /home/user',
        expectedOutputEn: 'Current directory: /home/user\nFilename: report.pdf\nDirectory: /home/user/documents\nExtension: .pdf\nPath exists: False\nJoined path: home/user/data.csv\n\nPATH (partial): /usr/local/bin:/usr/bin...\nHOME: /home/user',
        tip: 'os.path.join()은 운영체제에 맞는 경로 구분자(/ 또는 \\)를 자동으로 사용합니다.',
        tipEn: 'os.path.join() automatically uses the correct path separator (/ or \\) for the operating system.'
      },
      {
        title: 'sys 모듈 - 시스템 정보와 제어',
        titleEn: 'sys Module - System Information and Control',
        content: `sys 모듈은 파이썬 인터프리터와 관련된 정보와 기능을 제공합니다.\n\n명령줄 인자(argv), 모듈 경로(path), 버전 정보 등을 다룹니다.`,
        contentEn: `The sys module provides information and functions related to the Python interpreter.\n\nIt handles command-line arguments (argv), module search paths (path), version info, and more.`,
        code: 'import sys\n\nprint("=== sys 모듈 주요 속성 ===")\nprint(f"파이썬 버전: 3.12.0")\nprint(f"플랫폼: linux")\nprint(f"정수 최대값: 9223372036854775807")\n\nprint("\\n=== 명령줄 인자 (sys.argv) ===")\nprint("# python script.py arg1 arg2")\nprint("# sys.argv → [\'script.py\', \'arg1\', \'arg2\']")\n\nprint("\\n=== 모듈 검색 경로 ===")\nprint("sys.path 예시:")\nprint("  /usr/lib/python3.12")\nprint("  /usr/lib/python3.12/lib-dynload")\n\nprint("\\n=== sys.exit() 종료 코드 ===")\nprint("sys.exit(0)  → 정상 종료")\nprint("sys.exit(1)  → 에러 종료")',
        codeEn: 'import sys\n\nprint("=== sys Module Key Attributes ===")\nprint(f"Python version: 3.12.0")\nprint(f"Platform: linux")\nprint(f"Max integer: 9223372036854775807")\n\nprint("\\n=== Command Line Arguments (sys.argv) ===")\nprint("# python script.py arg1 arg2")\nprint("# sys.argv → [\'script.py\', \'arg1\', \'arg2\']")\n\nprint("\\n=== Module Search Path ===")\nprint("sys.path example:")\nprint("  /usr/lib/python3.12")\nprint("  /usr/lib/python3.12/lib-dynload")\n\nprint("\\n=== sys.exit() Exit Codes ===")\nprint("sys.exit(0)  → Normal exit")\nprint("sys.exit(1)  → Error exit")',
        expectedOutput: '=== sys 모듈 주요 속성 ===\n파이썬 버전: 3.12.0\n플랫폼: linux\n정수 최대값: 9223372036854775807\n\n=== 명령줄 인자 (sys.argv) ===\n# python script.py arg1 arg2\n# sys.argv → [\'script.py\', \'arg1\', \'arg2\']\n\n=== 모듈 검색 경로 ===\nsys.path 예시:\n  /usr/lib/python3.12\n  /usr/lib/python3.12/lib-dynload\n\n=== sys.exit() 종료 코드 ===\nsys.exit(0)  → 정상 종료\nsys.exit(1)  → 에러 종료',
        expectedOutputEn: '=== sys Module Key Attributes ===\nPython version: 3.12.0\nPlatform: linux\nMax integer: 9223372036854775807\n\n=== Command Line Arguments (sys.argv) ===\n# python script.py arg1 arg2\n# sys.argv → [\'script.py\', \'arg1\', \'arg2\']\n\n=== Module Search Path ===\nsys.path example:\n  /usr/lib/python3.12\n  /usr/lib/python3.12/lib-dynload\n\n=== sys.exit() Exit Codes ===\nsys.exit(0)  → Normal exit\nsys.exit(1)  → Error exit',
        tip: 'sys.exit()으로 프로그램을 종료할 수 있습니다. 0은 정상 종료, 다른 값은 에러를 의미합니다.',
        tipEn: 'sys.exit() terminates the program. 0 means normal exit, any other value indicates an error.'
      },
      {
        title: 'os 모듈 실전 활용',
        titleEn: 'os Module - Practical Applications',
        content: `os 모듈을 활용한 실전 예제입니다.\n\n디렉토리 생성/삭제, 파일 목록 조회, 파일 정보 확인 등의 작업을 수행합니다.\nos.walk()를 사용하면 디렉토리를 재귀적으로 탐색할 수 있습니다.`,
        contentEn: `Practical examples using the os module.\n\nPerform tasks such as creating/deleting directories, listing files, and checking file info.\nos.walk() allows you to recursively traverse directories.`,
        code: 'import os\n\n# 디렉토리 조작 명령\nprint("=== 디렉토리 조작 ===")\nprint("os.mkdir(\'new_dir\')     → 디렉토리 생성")\nprint("os.makedirs(\'a/b/c\')   → 중첩 디렉토리 생성")\nprint("os.rmdir(\'new_dir\')    → 빈 디렉토리 삭제")\nprint("os.listdir(\'.\')        → 파일 목록 조회")\n\n# 파일 조작 명령\nprint("\\n=== 파일 조작 ===")\nprint("os.rename(\'old\', \'new\') → 이름 변경")\nprint("os.remove(\'file.txt\')  → 파일 삭제")\nprint("os.stat(\'file.txt\')    → 파일 정보")\n\n# 경로 처리 예제\npaths = [\n    "/home/user/photo.jpg",\n    "C:\\\\Users\\\\data.csv",\n    "/var/log/app.log",\n]\nprint("\\n=== 경로 분석 ===")\nfor p in paths:\n    name = os.path.basename(p)\n    base, ext = os.path.splitext(name)\n    print(f"  {name:15s} → 이름:{base}, 확장자:{ext}")\n\n# os.walk 재귀 탐색\nprint("\\n=== os.walk() 디렉토리 재귀 탐색 ===")\nprint("for root, dirs, files in os.walk(\'.\'):")\nprint("    print(root, dirs, files)")\nprint("# 하위 모든 디렉토리와 파일을 순회합니다")',
        codeEn: 'import os\n\n# Directory operations\nprint("=== Directory Operations ===")\nprint("os.mkdir(\'new_dir\')     → Create directory")\nprint("os.makedirs(\'a/b/c\')   → Create nested directories")\nprint("os.rmdir(\'new_dir\')    → Delete empty directory")\nprint("os.listdir(\'.\')        → List files")\n\n# File operations\nprint("\\n=== File Operations ===")\nprint("os.rename(\'old\', \'new\') → Rename")\nprint("os.remove(\'file.txt\')  → Delete file")\nprint("os.stat(\'file.txt\')    → File info")\n\n# Path handling examples\npaths = [\n    "/home/user/photo.jpg",\n    "C:\\\\Users\\\\data.csv",\n    "/var/log/app.log",\n]\nprint("\\n=== Path Analysis ===")\nfor p in paths:\n    name = os.path.basename(p)\n    base, ext = os.path.splitext(name)\n    print(f"  {name:15s} → name:{base}, ext:{ext}")\n\n# os.walk recursive traversal\nprint("\\n=== os.walk() Recursive Directory Traversal ===")\nprint("for root, dirs, files in os.walk(\'.\'):")\nprint("    print(root, dirs, files)")\nprint("# Traverses all subdirectories and files")',
        expectedOutput: '=== 디렉토리 조작 ===\nos.mkdir(\'new_dir\')     → 디렉토리 생성\nos.makedirs(\'a/b/c\')   → 중첩 디렉토리 생성\nos.rmdir(\'new_dir\')    → 빈 디렉토리 삭제\nos.listdir(\'.\')        → 파일 목록 조회\n\n=== 파일 조작 ===\nos.rename(\'old\', \'new\') → 이름 변경\nos.remove(\'file.txt\')  → 파일 삭제\nos.stat(\'file.txt\')    → 파일 정보\n\n=== 경로 분석 ===\n  photo.jpg       → 이름:photo, 확장자:.jpg\n  data.csv        → 이름:data, 확장자:.csv\n  app.log         → 이름:app, 확장자:.log\n\n=== os.walk() 디렉토리 재귀 탐색 ===\nfor root, dirs, files in os.walk(\'.\'):\n    print(root, dirs, files)\n# 하위 모든 디렉토리와 파일을 순회합니다',
        expectedOutputEn: '=== Directory Operations ===\nos.mkdir(\'new_dir\')     → Create directory\nos.makedirs(\'a/b/c\')   → Create nested directories\nos.rmdir(\'new_dir\')    → Delete empty directory\nos.listdir(\'.\')        → List files\n\n=== File Operations ===\nos.rename(\'old\', \'new\') → Rename\nos.remove(\'file.txt\')  → Delete file\nos.stat(\'file.txt\')    → File info\n\n=== Path Analysis ===\n  photo.jpg       → name:photo, ext:.jpg\n  data.csv        → name:data, ext:.csv\n  app.log         → name:app, ext:.log\n\n=== os.walk() Recursive Directory Traversal ===\nfor root, dirs, files in os.walk(\'.\'):\n    print(root, dirs, files)\n# Traverses all subdirectories and files',
        tip: 'pathlib 모듈은 os.path의 객체지향 대안입니다. Path("/home/user") / "data.csv" 형태로 경로를 조합할 수 있습니다.',
        tipEn: 'The pathlib module is an object-oriented alternative to os.path. You can combine paths like Path("/home/user") / "data.csv".'
      }
    ]
  },

  'math-cmath': {
    sections: [
      {
        title: 'math 모듈 - 수학 함수',
        titleEn: 'math Module - Mathematical Functions',
        content: `math 모듈은 C 표준 라이브러리의 수학 함수에 대한 접근을 제공합니다.\n\n상수: pi, e, inf, nan\n함수: sqrt, pow, log, sin, cos, tan, ceil, floor, factorial 등`,
        contentEn: `The math module provides access to mathematical functions from the C standard library.\n\nConstants: pi, e, inf, nan\nFunctions: sqrt, pow, log, sin, cos, tan, ceil, floor, factorial, etc.`,
        code: 'import math\n\n# 상수\nprint(f"원주율 (pi): {math.pi:.6f}")\nprint(f"자연 상수 (e): {math.e:.6f}")\n\n# 기본 수학 함수\nprint(f"\\n√16 = {math.sqrt(16)}")\nprint(f"2^10 = {math.pow(2, 10):.0f}")\nprint(f"10! = {math.factorial(10)}")\n\n# 올림/내림\nprint(f"\\nceil(3.2) = {math.ceil(3.2)}")\nprint(f"floor(3.8) = {math.floor(3.8)}")\n\n# 로그\nprint(f"\\nlog(100, 10) = {math.log(100, 10):.1f}")\nprint(f"log2(1024) = {math.log2(1024):.1f}")\nprint(f"ln(e) = {math.log(math.e):.1f}")',
        codeEn: 'import math\n\n# Constants\nprint(f"Pi: {math.pi:.6f}")\nprint(f"Euler\'s number (e): {math.e:.6f}")\n\n# Basic math functions\nprint(f"\\n√16 = {math.sqrt(16)}")\nprint(f"2^10 = {math.pow(2, 10):.0f}")\nprint(f"10! = {math.factorial(10)}")\n\n# Ceil/Floor\nprint(f"\\nceil(3.2) = {math.ceil(3.2)}")\nprint(f"floor(3.8) = {math.floor(3.8)}")\n\n# Logarithms\nprint(f"\\nlog(100, 10) = {math.log(100, 10):.1f}")\nprint(f"log2(1024) = {math.log2(1024):.1f}")\nprint(f"ln(e) = {math.log(math.e):.1f}")',
        expectedOutput: '원주율 (pi): 3.141593\n자연 상수 (e): 2.718282\n\n√16 = 4.0\n2^10 = 1024\n10! = 3628800\n\nceil(3.2) = 4\nfloor(3.8) = 3\n\nlog(100, 10) = 2.0\nlog2(1024) = 10.0\nln(e) = 1.0',
        expectedOutputEn: 'Pi: 3.141593\nEuler\'s number (e): 2.718282\n\n√16 = 4.0\n2^10 = 1024\n10! = 3628800\n\nceil(3.2) = 4\nfloor(3.8) = 3\n\nlog(100, 10) = 2.0\nlog2(1024) = 10.0\nln(e) = 1.0',
        tip: 'math.isclose(a, b)로 부동소수점 비교를 안전하게 할 수 있습니다. == 대신 사용하세요.',
        tipEn: 'Use math.isclose(a, b) for safe floating-point comparison instead of ==.'
      },
      {
        title: '삼각함수와 기하 계산',
        titleEn: 'Trigonometric Functions and Geometry',
        content: `math 모듈의 삼각함수를 활용하면 각도, 거리, 좌표 등을 계산할 수 있습니다.\n\nradians(): 도→라디안 변환\ndegrees(): 라디안→도 변환\nsin(), cos(), tan(): 삼각함수\nhypot(): 빗변 길이 (피타고라스)`,
        contentEn: `Using trigonometric functions from the math module, you can calculate angles, distances, coordinates, and more.\n\nradians(): Degrees to radians\ndegrees(): Radians to degrees\nsin(), cos(), tan(): Trigonometric functions\nhypot(): Hypotenuse length (Pythagorean theorem)`,
        code: 'import math\n\n# 삼각함수 기본\nprint("=== 삼각함수 ===")\nfor deg in [0, 30, 45, 60, 90]:\n    rad = math.radians(deg)\n    print(f"  sin({deg:2d}°) = {math.sin(rad):6.4f}  cos({deg:2d}°) = {math.cos(rad):6.4f}")\n\n# 피타고라스 정리\na, b = 3, 4\nc = math.hypot(a, b)\nprint(f"\\n직각삼각형 ({a}, {b}) → 빗변 = {c}")\n\n# 원의 넓이와 둘레\nr = 5\narea = math.pi * r ** 2\ncircumference = 2 * math.pi * r\nprint(f"\\n반지름 {r}인 원:")\nprint(f"  넓이 = {area:.2f}")\nprint(f"  둘레 = {circumference:.2f}")\n\n# GCD, LCM\nprint(f"\\nGCD(12,18) = {math.gcd(12, 18)}")\nprint(f"LCM(4,6) = {(4*6)//math.gcd(4,6)}")',
        codeEn: 'import math\n\n# Basic trigonometry\nprint("=== Trigonometric Functions ===")\nfor deg in [0, 30, 45, 60, 90]:\n    rad = math.radians(deg)\n    print(f"  sin({deg:2d}°) = {math.sin(rad):6.4f}  cos({deg:2d}°) = {math.cos(rad):6.4f}")\n\n# Pythagorean theorem\na, b = 3, 4\nc = math.hypot(a, b)\nprint(f"\\nRight triangle ({a}, {b}) → Hypotenuse = {c}")\n\n# Area and circumference of a circle\nr = 5\narea = math.pi * r ** 2\ncircumference = 2 * math.pi * r\nprint(f"\\nCircle with radius {r}:")\nprint(f"  Area = {area:.2f}")\nprint(f"  Circumference = {circumference:.2f}")\n\n# GCD, LCM\nprint(f"\\nGCD(12,18) = {math.gcd(12, 18)}")\nprint(f"LCM(4,6) = {(4*6)//math.gcd(4,6)}")',
        expectedOutput: '=== 삼각함수 ===\n  sin( 0°) = 0.0000  cos( 0°) = 1.0000\n  sin(30°) = 0.5000  cos(30°) = 0.8660\n  sin(45°) = 0.7071  cos(45°) = 0.7071\n  sin(60°) = 0.8660  cos(60°) = 0.5000\n  sin(90°) = 1.0000  cos(90°) = 0.0000\n\n직각삼각형 (3, 4) → 빗변 = 5.0\n\n반지름 5인 원:\n  넓이 = 78.54\n  둘레 = 31.42\n\nGCD(12,18) = 6\nLCM(4,6) = 12',
        expectedOutputEn: '=== Trigonometric Functions ===\n  sin( 0°) = 0.0000  cos( 0°) = 1.0000\n  sin(30°) = 0.5000  cos(30°) = 0.8660\n  sin(45°) = 0.7071  cos(45°) = 0.7071\n  sin(60°) = 0.8660  cos(60°) = 0.5000\n  sin(90°) = 1.0000  cos(90°) = 0.0000\n\nRight triangle (3, 4) → Hypotenuse = 5.0\n\nCircle with radius 5:\n  Area = 78.54\n  Circumference = 31.42\n\nGCD(12,18) = 6\nLCM(4,6) = 12',
        tip: 'math.hypot(a, b)는 √(a²+b²)를 계산합니다. 2D 거리 계산에 유용합니다.',
        tipEn: 'math.hypot(a, b) computes sqrt(a^2 + b^2). Useful for 2D distance calculations.'
      },
      {
        title: 'cmath 모듈 - 복소수 연산',
        titleEn: 'cmath Module - Complex Number Operations',
        content: `cmath 모듈은 복소수에 대한 수학 함수를 제공합니다.\n파이썬에서 복소수는 j(허수단위)를 사용하여 표현합니다.\n\n실수부: .real, 허수부: .imag, 절대값: abs()\n극좌표: polar(), rect()`,
        contentEn: `The cmath module provides mathematical functions for complex numbers.\nIn Python, complex numbers are expressed using j (imaginary unit).\n\nReal part: .real, Imaginary part: .imag, Absolute value: abs()\nPolar coordinates: polar(), rect()`,
        code: 'import math\n\n# 복소수 기초\nz1_real = 3\nz1_imag = 4\nz1_abs = math.sqrt(z1_real**2 + z1_imag**2)\n\nprint("=== 복소수 기초 ===")\nprint(f"z1 = {z1_real} + {z1_imag}j")\nprint(f"실수부: {z1_real}, 허수부: {z1_imag}")\nprint(f"|z1| = sqrt({z1_real}^2 + {z1_imag}^2) = {z1_abs}")\n\n# 극좌표\nphase = math.atan2(z1_imag, z1_real)\nprint(f"\\n=== 극좌표 변환 ===")\nprint(f"위상각: {phase:.4f} rad = {math.degrees(phase):.2f}°")\nprint(f"극좌표: (r={z1_abs:.2f}, θ={math.degrees(phase):.2f}°)")\n\n# 복원\nprint(f"\\n직교좌표 복원:")\nprint(f"  x = r·cos(θ) = {z1_abs * math.cos(phase):.4f}")\nprint(f"  y = r·sin(θ) = {z1_abs * math.sin(phase):.4f}")\n\n# 활용 예제: 2차 방정식\na, b, c = 1, 2, 5\ndisc = b**2 - 4*a*c\nprint(f"\\n=== 2차 방정식 x^2 + 2x + 5 = 0 ===")\nprint(f"판별식 = {disc} (음수 → 복소수 근)")\nprint(f"근: -1 ± 2j")',
        codeEn: 'import math\n\n# Complex number basics\nz1_real = 3\nz1_imag = 4\nz1_abs = math.sqrt(z1_real**2 + z1_imag**2)\n\nprint("=== Complex Number Basics ===")\nprint(f"z1 = {z1_real} + {z1_imag}j")\nprint(f"Real part: {z1_real}, Imaginary part: {z1_imag}")\nprint(f"|z1| = sqrt({z1_real}^2 + {z1_imag}^2) = {z1_abs}")\n\n# Polar coordinates\nphase = math.atan2(z1_imag, z1_real)\nprint(f"\\n=== Polar Coordinate Conversion ===")\nprint(f"Phase angle: {phase:.4f} rad = {math.degrees(phase):.2f}°")\nprint(f"Polar form: (r={z1_abs:.2f}, θ={math.degrees(phase):.2f}°)")\n\n# Reconstruction\nprint(f"\\nCartesian reconstruction:")\nprint(f"  x = r·cos(θ) = {z1_abs * math.cos(phase):.4f}")\nprint(f"  y = r·sin(θ) = {z1_abs * math.sin(phase):.4f}")\n\n# Application: quadratic equation\na, b, c = 1, 2, 5\ndisc = b**2 - 4*a*c\nprint(f"\\n=== Quadratic Equation x^2 + 2x + 5 = 0 ===")\nprint(f"Discriminant = {disc} (negative → complex roots)")\nprint(f"Roots: -1 ± 2j")',
        expectedOutput: '=== 복소수 기초 ===\nz1 = 3 + 4j\n실수부: 3, 허수부: 4\n|z1| = sqrt(3^2 + 4^2) = 5.0\n\n=== 극좌표 변환 ===\n위상각: 0.9273 rad = 53.13°\n극좌표: (r=5.00, θ=53.13°)\n\n직교좌표 복원:\n  x = r·cos(θ) = 3.0000\n  y = r·sin(θ) = 4.0000\n\n=== 2차 방정식 x^2 + 2x + 5 = 0 ===\n판별식 = -16 (음수 → 복소수 근)\n근: -1 ± 2j',
        expectedOutputEn: '=== Complex Number Basics ===\nz1 = 3 + 4j\nReal part: 3, Imaginary part: 4\n|z1| = sqrt(3^2 + 4^2) = 5.0\n\n=== Polar Coordinate Conversion ===\nPhase angle: 0.9273 rad = 53.13°\nPolar form: (r=5.00, θ=53.13°)\n\nCartesian reconstruction:\n  x = r·cos(θ) = 3.0000\n  y = r·sin(θ) = 4.0000\n\n=== Quadratic Equation x^2 + 2x + 5 = 0 ===\nDiscriminant = -16 (negative → complex roots)\nRoots: -1 ± 2j',
        tip: '복소수의 절대값(abs)은 원점에서의 거리, 위상각(phase)은 실수축과의 각도를 의미합니다.',
        tipEn: 'The absolute value (abs) of a complex number is the distance from the origin, and the phase is the angle from the real axis.'
      }
    ]
  },

  'json-module': {
    sections: [
      {
        title: 'JSON 직렬화/역직렬화',
        titleEn: 'JSON Serialization / Deserialization',
        content: `JSON(JavaScript Object Notation)은 데이터 교환의 표준 형식입니다.\n\njson.dumps(): 파이썬 객체 → JSON 문자열 (직렬화)\njson.loads(): JSON 문자열 → 파이썬 객체 (역직렬화)\njson.dump(): 파일에 쓰기\njson.load(): 파일에서 읽기`,
        contentEn: `JSON (JavaScript Object Notation) is the standard format for data exchange.\n\njson.dumps(): Python object -> JSON string (serialization)\njson.loads(): JSON string -> Python object (deserialization)\njson.dump(): Write to file\njson.load(): Read from file`,
        code: 'import json\n\n# 파이썬 객체 → JSON 문자열\ndata = {\n    "이름": "김파이",\n    "나이": 25,\n    "취미": ["코딩", "독서", "게임"],\n    "졸업": True,\n    "주소": None\n}\n\n# dumps: 직렬화 (문자열로)\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint("=== JSON 직렬화 ===")\nprint(json_str)\n\n# loads: 역직렬화 (파이썬 객체로)\nparsed = json.loads(json_str)\nprint(f"\\n=== 역직렬화 결과 ===")\nprint(f"이름: {parsed[\'이름\']}")\nprint(f"취미: {parsed[\'취미\']}")\nprint(f"타입: {type(parsed)}")',
        codeEn: 'import json\n\n# Python object → JSON string\ndata = {\n    "name": "Kim",\n    "age": 25,\n    "hobbies": ["coding", "reading", "gaming"],\n    "graduated": True,\n    "address": None\n}\n\n# dumps: serialization (to string)\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint("=== JSON Serialization ===")\nprint(json_str)\n\n# loads: deserialization (to Python object)\nparsed = json.loads(json_str)\nprint(f"\\n=== Deserialization Result ===")\nprint(f"Name: {parsed[\'name\']}")\nprint(f"Hobbies: {parsed[\'hobbies\']}")\nprint(f"Type: {type(parsed)}")',
        expectedOutput: '=== JSON 직렬화 ===\n{\n  "이름": "김파이",\n  "나이": 25,\n  "취미": [\n    "코딩",\n    "독서",\n    "게임"\n  ],\n  "졸업": true,\n  "주소": null\n}\n\n=== 역직렬화 결과 ===\n이름: 김파이\n취미: [\'코딩\', \'독서\', \'게임\']\n타입: <class \'dict\'>',
        expectedOutputEn: '=== JSON Serialization ===\n{\n  "name": "Kim",\n  "age": 25,\n  "hobbies": [\n    "coding",\n    "reading",\n    "gaming"\n  ],\n  "graduated": true,\n  "address": null\n}\n\n=== Deserialization Result ===\nName: Kim\nHobbies: [\'coding\', \'reading\', \'gaming\']\nType: <class \'dict\'>',
        tip: 'ensure_ascii=False로 한글을 그대로 출력하고, indent로 가독성을 높일 수 있습니다.',
        tipEn: 'Use ensure_ascii=False to output non-ASCII characters as-is, and indent for better readability.'
      },
      {
        title: 'JSON 활용 - API 응답 처리',
        titleEn: 'JSON in Practice - API Response Handling',
        content: `실제로 JSON은 웹 API에서 데이터를 주고받을 때 가장 많이 사용됩니다.\n\n파이썬 ↔ JSON 타입 매핑:\n- dict ↔ object, list ↔ array\n- str ↔ string, int/float ↔ number\n- True/False ↔ true/false, None ↔ null`,
        contentEn: `In practice, JSON is most commonly used for sending and receiving data via web APIs.\n\nPython <-> JSON type mapping:\n- dict <-> object, list <-> array\n- str <-> string, int/float <-> number\n- True/False <-> true/false, None <-> null`,
        code: 'import json\n\n# API 응답 시뮬레이션\napi_response = \'\'\'{\n    "status": "success",\n    "data": {\n        "users": [\n            {"id": 1, "name": "Alice", "active": true},\n            {"id": 2, "name": "Bob", "active": false},\n            {"id": 3, "name": "Charlie", "active": true}\n        ],\n        "total": 3\n    }\n}\'\'\'\n\n# JSON 파싱\nresult = json.loads(api_response)\n\nprint(f"상태: {result[\'status\']}")\nprint(f"총 사용자: {result[\'data\'][\'total\']}명\\n")\n\n# 활성 사용자만 필터링\nactive_users = [\n    user[\'name\'] \n    for user in result[\'data\'][\'users\'] \n    if user[\'active\']\n]\nprint(f"활성 사용자: {active_users}")\n\n# 타입 매핑 확인\nprint(f"\\n=== 타입 매핑 ===")\nprint(f"Python dict  → JSON object")\nprint(f"Python list  → JSON array")\nprint(f"Python True  → JSON true")\nprint(f"Python None  → JSON null")',
        codeEn: 'import json\n\n# API response simulation\napi_response = \'\'\'{\n    "status": "success",\n    "data": {\n        "users": [\n            {"id": 1, "name": "Alice", "active": true},\n            {"id": 2, "name": "Bob", "active": false},\n            {"id": 3, "name": "Charlie", "active": true}\n        ],\n        "total": 3\n    }\n}\'\'\'\n\n# JSON parsing\nresult = json.loads(api_response)\n\nprint(f"Status: {result[\'status\']}")\nprint(f"Total users: {result[\'data\'][\'total\']}\\n")\n\n# Filter active users only\nactive_users = [\n    user[\'name\'] \n    for user in result[\'data\'][\'users\'] \n    if user[\'active\']\n]\nprint(f"Active users: {active_users}")\n\n# Type mapping verification\nprint(f"\\n=== Type Mapping ===")\nprint(f"Python dict  → JSON object")\nprint(f"Python list  → JSON array")\nprint(f"Python True  → JSON true")\nprint(f"Python None  → JSON null")',
        expectedOutput: '상태: success\n총 사용자: 3명\n\n활성 사용자: [\'Alice\', \'Charlie\']\n\n=== 타입 매핑 ===\nPython dict  → JSON object\nPython list  → JSON array\nPython True  → JSON true\nPython None  → JSON null',
        expectedOutputEn: 'Status: success\nTotal users: 3\n\nActive users: [\'Alice\', \'Charlie\']\n\n=== Type Mapping ===\nPython dict  → JSON object\nPython list  → JSON array\nPython True  → JSON true\nPython None  → JSON null',
        tip: 'json.loads()는 문자열을, json.load()는 파일 객체를 받습니다. s가 붙으면 string!',
        tipEn: 'json.loads() takes a string, json.load() takes a file object. The "s" stands for string!'
      },
      {
        title: 'JSON 고급 활용',
        titleEn: 'Advanced JSON Usage',
        content: `JSON은 설정 파일, API 통신, 데이터 저장 등에 널리 사용됩니다.\n\ncustom encoder/decoder를 사용하면 파이썬 객체를 JSON으로 변환할 수 있습니다.\nsort_keys, separators 등 다양한 옵션을 활용할 수 있습니다.`,
        contentEn: `JSON is widely used for configuration files, API communication, and data storage.\n\nCustom encoders/decoders allow you to convert Python objects to/from JSON.\nVarious options like sort_keys and separators can be utilized.`,
        code: 'import json\n\n# 복잡한 JSON 데이터 처리\nshop_data = {\n    "가게": "파이썬 서점",\n    "개업일": "2024-01-15",\n    "책": [\n        {"제목": "파이썬 입문", "가격": 25000, "재고": 50},\n        {"제목": "데이터 분석", "가격": 32000, "재고": 30},\n        {"제목": "머신러닝", "가격": 45000, "재고": 15},\n        {"제목": "웹 개발", "가격": 28000, "재고": 0}\n    ]\n}\n\n# 재고가 있는 책만 필터링\navailable = [b for b in shop_data["책"] if b["재고"] > 0]\nprint(f"=== {shop_data[\'가게\']} ===")\nprint(f"재고 있는 책: {len(available)}/{len(shop_data[\'책\'])}권")\nfor b in available:\n    print(f"  {b[\'제목\']:10s} {b[\'가격\']:>6,}원 (재고: {b[\'재고\']})")\n\n# JSON 정렬 출력\nprint(f"\\n=== JSON 옵션 ===")\nprint("sort_keys=True  → 키 알파벳 정렬")\nprint("separators      → 구분자 커스터마이징")\nprint("default         → 변환 불가 객체 처리")\n\n# 총 재고 금액\ntotal = sum(b["가격"] * b["재고"] for b in shop_data["책"])\nprint(f"\\n총 재고 금액: {total:,}원")',
        codeEn: 'import json\n\n# Complex JSON data processing\nshop_data = {\n    "shop": "Python Bookstore",\n    "opened": "2024-01-15",\n    "books": [\n        {"title": "Python Intro", "price": 25000, "stock": 50},\n        {"title": "Data Analysis", "price": 32000, "stock": 30},\n        {"title": "Machine Learning", "price": 45000, "stock": 15},\n        {"title": "Web Development", "price": 28000, "stock": 0}\n    ]\n}\n\n# Filter books in stock\navailable = [b for b in shop_data["books"] if b["stock"] > 0]\nprint(f"=== {shop_data[\'shop\']} ===")\nprint(f"Books in stock: {len(available)}/{len(shop_data[\'books\'])}")\nfor b in available:\n    print(f"  {b[\'title\']:17s} {b[\'price\']:>6,} KRW (stock: {b[\'stock\']})")\n\n# JSON output options\nprint(f"\\n=== JSON Options ===")\nprint("sort_keys=True  → Sort keys alphabetically")\nprint("separators      → Customize delimiters")\nprint("default         → Handle non-serializable objects")\n\n# Total inventory value\ntotal = sum(b["price"] * b["stock"] for b in shop_data["books"])\nprint(f"\\nTotal inventory value: {total:,} KRW")',
        expectedOutput: '=== 파이썬 서점 ===\n재고 있는 책: 3/4권\n  파이썬 입문  25,000원 (재고: 50)\n  데이터 분석  32,000원 (재고: 30)\n  머신러닝    45,000원 (재고: 15)\n\n=== JSON 옵션 ===\nsort_keys=True  → 키 알파벳 정렬\nseparators      → 구분자 커스터마이징\ndefault         → 변환 불가 객체 처리\n\n총 재고 금액: 2,885,000원',
        expectedOutputEn: '=== Python Bookstore ===\nBooks in stock: 3/4\n  Python Intro      25,000 KRW (stock: 50)\n  Data Analysis     32,000 KRW (stock: 30)\n  Machine Learning  45,000 KRW (stock: 15)\n\n=== JSON Options ===\nsort_keys=True  → Sort keys alphabetically\nseparators      → Customize delimiters\ndefault         → Handle non-serializable objects\n\nTotal inventory value: 2,885,000 KRW',
        tip: 'API 개발 시 json.dumps(data, ensure_ascii=False, indent=2)를 자주 사용합니다.',
        tipEn: 'When developing APIs, json.dumps(data, ensure_ascii=False, indent=2) is frequently used.'
      }
    ]
  },

  'datetime-module': {
    sections: [
      {
        title: '날짜와 시간 생성',
        titleEn: 'Creating Dates and Times',
        content: `datetime 모듈은 날짜와 시간을 다루는 클래스를 제공합니다.\n\n주요 클래스:\n- date: 날짜 (년, 월, 일)\n- time: 시간 (시, 분, 초)\n- datetime: 날짜 + 시간\n- timedelta: 시간 차이`,
        contentEn: `The datetime module provides classes for handling dates and times.\n\nKey classes:\n- date: Date (year, month, day)\n- time: Time (hour, minute, second)\n- datetime: Date + Time\n- timedelta: Time difference`,
        code: 'from datetime import datetime, date, time, timedelta\n\n# 현재 날짜/시간\nnow = datetime.now()\nprint(f"현재: {now}")\nprint(f"날짜: {now.date()}")\nprint(f"시간: {now.time()}")\n\n# 특정 날짜 생성\nbirthday = date(2000, 5, 15)\nprint(f"\\n생일: {birthday}")\nprint(f"년: {birthday.year}, 월: {birthday.month}, 일: {birthday.day}")\nprint(f"요일: {birthday.strftime(\"%A\")}")\n\n# 특정 시간 생성\nmeeting = datetime(2026, 3, 20, 14, 30, 0)\nprint(f"\\n회의: {meeting}")\n\n# 오늘 날짜\ntoday = date.today()\nprint(f"\\n오늘: {today}")\nprint(f"생일로부터: {(today - birthday).days}일 경과")',
        codeEn: 'from datetime import datetime, date, time, timedelta\n\n# Current date/time\nnow = datetime.now()\nprint(f"Now: {now}")\nprint(f"Date: {now.date()}")\nprint(f"Time: {now.time()}")\n\n# Creating a specific date\nbirthday = date(2000, 5, 15)\nprint(f"\\nBirthday: {birthday}")\nprint(f"Year: {birthday.year}, Month: {birthday.month}, Day: {birthday.day}")\nprint(f"Weekday: {birthday.strftime(\"%A\")}")\n\n# Creating a specific datetime\nmeeting = datetime(2026, 3, 20, 14, 30, 0)\nprint(f"\\nMeeting: {meeting}")\n\n# Today\'s date\ntoday = date.today()\nprint(f"\\nToday: {today}")\nprint(f"Days since birthday: {(today - birthday).days} days")',
        expectedOutput: '현재: 2026-03-18 15:30:00.123456\n날짜: 2026-03-18\n시간: 15:30:00.123456\n\n생일: 2000-05-15\n년: 2000, 월: 5, 일: 15\n요일: Monday\n\n회의: 2026-03-20 14:30:00\n\n오늘: 2026-03-18\n생일로부터: 9438일 경과',
        expectedOutputEn: 'Now: 2026-03-18 15:30:00.123456\nDate: 2026-03-18\nTime: 15:30:00.123456\n\nBirthday: 2000-05-15\nYear: 2000, Month: 5, Day: 15\nWeekday: Monday\n\nMeeting: 2026-03-20 14:30:00\n\nToday: 2026-03-18\nDays since birthday: 9438 days',
        tip: 'datetime.now()은 로컬 시간, datetime.utcnow()은 UTC 시간을 반환합니다.',
        tipEn: 'datetime.now() returns local time, datetime.utcnow() returns UTC time.'
      },
      {
        title: '날짜 포매팅과 연산',
        titleEn: 'Date Formatting and Arithmetic',
        content: `strftime()으로 날짜를 원하는 형식의 문자열로 변환합니다.\nstrptime()으로 문자열을 datetime 객체로 파싱합니다.\n\ntimedelta로 날짜 간 계산을 수행합니다.`,
        contentEn: `strftime() converts a date into a formatted string.\nstrptime() parses a string into a datetime object.\n\ntimedelta performs date arithmetic.`,
        code: 'from datetime import datetime, timedelta\n\nnow = datetime.now()\n\n# strftime: datetime → 문자열\nprint("=== 날짜 포매팅 (strftime) ===")\nprint(f"기본:  {now.strftime(\"%Y-%m-%d %H:%M:%S\")}")\nprint(f"한국:  {now.strftime(\"%Y년 %m월 %d일\")}")\nprint(f"시간:  {now.strftime(\"%p %I:%M\")}")\nprint(f"요일:  {now.strftime(\"%A, %B %d\")}")\n\n# strptime: 문자열 → datetime\ndate_str = "2026-03-18 14:30:00"\nparsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")\nprint(f"\\n파싱 결과: {parsed}")\n\n# timedelta: 날짜 연산\nprint("\\n=== 날짜 연산 (timedelta) ===")\ntomorrow = now + timedelta(days=1)\nnext_week = now + timedelta(weeks=1)\nprint(f"내일: {tomorrow.strftime(\"%Y-%m-%d\")}")\nprint(f"다음 주: {next_week.strftime(\"%Y-%m-%d\")}")\nprint(f"100일 후: {(now + timedelta(days=100)).strftime(\"%Y-%m-%d\")}")\n\n# 두 날짜 간 차이\nstart = datetime(2026, 1, 1)\ndiff = now - start\nprint(f"\\n올해 경과: {diff.days}일")',
        codeEn: 'from datetime import datetime, timedelta\n\nnow = datetime.now()\n\n# strftime: datetime → string\nprint("=== Date Formatting (strftime) ===")\nprint(f"Default: {now.strftime(\"%Y-%m-%d %H:%M:%S\")}")\nprint(f"Custom:  {now.strftime(\"%B %d, %Y\")}")\nprint(f"Time:    {now.strftime(\"%p %I:%M\")}")\nprint(f"Weekday: {now.strftime(\"%A, %B %d\")}")\n\n# strptime: string → datetime\ndate_str = "2026-03-18 14:30:00"\nparsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")\nprint(f"\\nParsed: {parsed}")\n\n# timedelta: date arithmetic\nprint("\\n=== Date Arithmetic (timedelta) ===")\ntomorrow = now + timedelta(days=1)\nnext_week = now + timedelta(weeks=1)\nprint(f"Tomorrow: {tomorrow.strftime(\"%Y-%m-%d\")}")\nprint(f"Next week: {next_week.strftime(\"%Y-%m-%d\")}")\nprint(f"100 days later: {(now + timedelta(days=100)).strftime(\"%Y-%m-%d\")}")\n\n# Difference between two dates\nstart = datetime(2026, 1, 1)\ndiff = now - start\nprint(f"\\nDays elapsed this year: {diff.days}")',
        expectedOutput: '=== 날짜 포매팅 (strftime) ===\n기본:  2026-03-18 15:30:00\n한국:  2026년 03월 18일\n시간:  PM 03:30\n요일:  Wednesday, March 18\n\n파싱 결과: 2026-03-18 14:30:00\n\n=== 날짜 연산 (timedelta) ===\n내일: 2026-03-19\n다음 주: 2026-03-25\n100일 후: 2026-06-26\n\n올해 경과: 76일',
        expectedOutputEn: '=== Date Formatting (strftime) ===\nDefault: 2026-03-18 15:30:00\nCustom:  March 18, 2026\nTime:    PM 03:30\nWeekday: Wednesday, March 18\n\nParsed: 2026-03-18 14:30:00\n\n=== Date Arithmetic (timedelta) ===\nTomorrow: 2026-03-19\nNext week: 2026-03-25\n100 days later: 2026-06-26\n\nDays elapsed this year: 76',
        tip: '%Y=4자리 연도, %m=2자리 월, %d=2자리 일, %H=24시, %I=12시, %M=분, %S=초, %A=요일, %B=월이름',
        tipEn: '%Y=4-digit year, %m=2-digit month, %d=2-digit day, %H=24h, %I=12h, %M=minute, %S=second, %A=weekday, %B=month name'
      },
      {
        title: 'datetime 실전 활용',
        titleEn: 'datetime - Practical Applications',
        content: `datetime 모듈을 활용한 실전 예제입니다.\n\nD-Day 계산, 나이 계산, 요일 확인, 영업일 계산 등\n실생활에 유용한 날짜 처리 패턴을 학습합니다.`,
        contentEn: `Practical examples using the datetime module.\n\nLearn useful date-handling patterns for real life, including D-Day calculations, age calculations, weekday checks, and business day calculations.`,
        code: '# D-Day 계산기\ntarget_month = 12\ntarget_day = 25\ncurrent_month = 3\ncurrent_day = 18\n\n# 크리스마스까지 D-Day (2026년 기준)\ndays_in_months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\nremaining = -current_day\nfor m in range(current_month, target_month):\n    remaining += days_in_months[m]\nremaining += target_day\n\nprint("=== D-Day 계산기 ===")\nprint(f"오늘: 2026-03-18")\nprint(f"크리스마스: 2026-12-25")\nprint(f"D-{remaining}")\n\n# 나이 계산기\nbirth_year = 2000\nbirth_month = 5\nbirth_day = 15\ncurr_year = 2026\n\nage = curr_year - birth_year\nif current_month < birth_month:\n    age -= 1\nprint(f"\\n=== 나이 계산 ===")\nprint(f"생년월일: {birth_year}-{birth_month:02d}-{birth_day:02d}")\nprint(f"만 나이: {age}세")\nprint(f"한국 나이: {curr_year - birth_year + 1}세")\n\n# 요일 계산 (Zeller 공식 간략화)\nprint("\\n=== 2026년 3월 달력 ===")\nprint("월  화  수  목  금  토  일")\nprint("                 1   2   3")\nprint(" 4   5   6   7   8   9  10")\nprint("11  12  13  14  15  16  17")\nprint("18  19  20  21  22  23  24")\nprint("25  26  27  28  29  30  31")',
        codeEn: '# D-Day Calculator\ntarget_month = 12\ntarget_day = 25\ncurrent_month = 3\ncurrent_day = 18\n\n# D-Day until Christmas (based on 2026)\ndays_in_months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\nremaining = -current_day\nfor m in range(current_month, target_month):\n    remaining += days_in_months[m]\nremaining += target_day\n\nprint("=== D-Day Calculator ===")\nprint(f"Today: 2026-03-18")\nprint(f"Christmas: 2026-12-25")\nprint(f"D-{remaining}")\n\n# Age Calculator\nbirth_year = 2000\nbirth_month = 5\nbirth_day = 15\ncurr_year = 2026\n\nage = curr_year - birth_year\nif current_month < birth_month:\n    age -= 1\nprint(f"\\n=== Age Calculator ===")\nprint(f"Date of birth: {birth_year}-{birth_month:02d}-{birth_day:02d}")\nprint(f"Age: {age}")\nprint(f"Korean age: {curr_year - birth_year + 1}")\n\n# Calendar\nprint("\\n=== March 2026 Calendar ===")\nprint("Mon Tue Wed Thu Fri Sat Sun")\nprint("                 1   2   3")\nprint(" 4   5   6   7   8   9  10")\nprint("11  12  13  14  15  16  17")\nprint("18  19  20  21  22  23  24")\nprint("25  26  27  28  29  30  31")',
        expectedOutput: '=== D-Day 계산기 ===\n오늘: 2026-03-18\n크리스마스: 2026-12-25\nD-282\n\n=== 나이 계산 ===\n생년월일: 2000-05-15\n만 나이: 25세\n한국 나이: 27세\n\n=== 2026년 3월 달력 ===\n월  화  수  목  금  토  일\n                 1   2   3\n 4   5   6   7   8   9  10\n11  12  13  14  15  16  17\n18  19  20  21  22  23  24\n25  26  27  28  29  30  31',
        expectedOutputEn: '=== D-Day Calculator ===\nToday: 2026-03-18\nChristmas: 2026-12-25\nD-282\n\n=== Age Calculator ===\nDate of birth: 2000-05-15\nAge: 25\nKorean age: 27\n\n=== March 2026 Calendar ===\nMon Tue Wed Thu Fri Sat Sun\n                 1   2   3\n 4   5   6   7   8   9  10\n11  12  13  14  15  16  17\n18  19  20  21  22  23  24\n25  26  27  28  29  30  31',
        tip: 'calendar 모듈을 사용하면 달력을 쉽게 출력할 수 있습니다. calendar.month(2026, 3)으로 3월 달력을 생성합니다.',
        tipEn: 'The calendar module makes it easy to print calendars. Use calendar.month(2026, 3) to generate a March 2026 calendar.'
      }
    ]
  },

  'turtle-graphics': {
    sections: [
      {
        title: '정사각형 그리기',
        titleEn: 'Drawing a Square',
        content: `turtle 모듈은 파이썬의 거북이 그래픽 라이브러리입니다.\n화면 위의 거북이를 움직여 다양한 도형과 패턴을 그릴 수 있습니다.\n\n기본 명령어:\n- forward(거리): 앞으로 이동\n- backward(거리): 뒤로 이동\n- left(각도): 왼쪽 회전\n- right(각도): 오른쪽 회전\n\n아래 코드를 실행하면 SVG로 결과를 확인할 수 있습니다!`,
        contentEn: `The turtle module is Python's turtle graphics library.\nYou can draw various shapes and patterns by moving a turtle on the screen.\n\nBasic commands:\n- forward(distance): Move forward\n- backward(distance): Move backward\n- left(angle): Turn left\n- right(angle): Turn right\n\nRun the code below to see the result as SVG!`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\n# 정사각형 그리기\nfor i in range(4):\n    t.forward(100)\n    t.right(90)',
        expectedOutput: '',
        tip: '실행 버튼을 누르면 아래에 SVG 그래픽으로 결과가 표시됩니다!',
        tipEn: 'Press the Run button to see the result displayed as SVG graphics below!'
      },
      {
        title: '정다각형 그리기',
        titleEn: 'Drawing Regular Polygons',
        content: `정다각형은 반복문과 회전 각도 계산으로 쉽게 그릴 수 있습니다.\n\n정n각형의 외각 = 360 / n\n예: 삼각형=120°, 사각형=90°, 오각형=72°, 육각형=60°\n\n아래 코드는 삼각형, 사각형, 오각형, 육각형을 나란히 그립니다.`,
        contentEn: `Regular polygons can be easily drawn using loops and angle calculations.\n\nExterior angle of a regular n-gon = 360 / n\nExamples: triangle=120, square=90, pentagon=72, hexagon=60\n\nThe code below draws a triangle, square, pentagon, and hexagon side by side.`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\n# 삼각형\nt.pencolor("red")\nfor i in range(3):\n    t.forward(60)\n    t.right(120)\n\n# 이동\nt.penup()\nt.forward(80)\nt.pendown()\n\n# 사각형\nt.pencolor("blue")\nfor i in range(4):\n    t.forward(60)\n    t.right(90)\n\n# 이동\nt.penup()\nt.forward(80)\nt.pendown()\n\n# 오각형\nt.pencolor("green")\nfor i in range(5):\n    t.forward(50)\n    t.right(72)\n\n# 이동\nt.penup()\nt.forward(80)\nt.pendown()\n\n# 육각형\nt.pencolor("purple")\nfor i in range(6):\n    t.forward(45)\n    t.right(60)',
        expectedOutput: '',
        tip: '정n각형의 외각 합은 항상 360°입니다. 따라서 회전 각도 = 360/n 으로 모든 정다각형을 그릴 수 있습니다.',
        tipEn: 'The sum of exterior angles of any regular n-gon is always 360 degrees. So turn angle = 360/n draws any regular polygon.'
      },
      {
        title: '별 그리기',
        titleEn: 'Drawing Stars',
        content: `별 모양은 정다각형보다 큰 각도로 회전하면 만들어집니다.\n\n오각별: 144° 회전 (= 180 - 36)\n\n색상과 채우기를 활용하면 더 화려한 별을 그릴 수 있습니다.\nbegin_fill() / end_fill()로 도형 내부를 색칠합니다.`,
        contentEn: `Star shapes are created by turning at a larger angle than for regular polygons.\n\nFive-pointed star: 144 degree turn (= 180 - 36)\n\nUsing colors and fills makes stars more colorful.\nbegin_fill() / end_fill() fills the interior of a shape.`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\n# 채우기가 있는 별\nt.color("red", "gold")\nt.begin_fill()\nfor i in range(5):\n    t.forward(100)\n    t.right(144)\nt.end_fill()\n\n# 옆으로 이동\nt.penup()\nt.forward(150)\nt.pendown()\n\n# 파란 별\nt.color("blue", "cyan")\nt.begin_fill()\nfor i in range(5):\n    t.forward(80)\n    t.right(144)\nt.end_fill()',
        expectedOutput: '',
        tip: '오각별의 회전각도 144° = 360° × 2 / 5 입니다. 거북이가 꼭짓점을 하나 건너뛰며 이동하기 때문입니다.',
        tipEn: 'The star turn angle 144 = 360 x 2 / 5. The turtle skips one vertex as it moves.'
      },
      {
        title: '무지개 나선',
        titleEn: 'Rainbow Spiral',
        content: `반복문에서 색상을 바꾸면서 점점 크게 그리면 나선 모양이 됩니다.\n\n이 예제에서는 6가지 무지개 색상을 순환하면서\n점점 길어지는 선분을 약간 비틀린 각도로 그립니다.`,
        contentEn: `Changing colors while drawing increasingly larger shapes in a loop creates a spiral.\n\nThis example cycles through 6 rainbow colors while drawing progressively longer lines at a slightly offset angle.`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\ncolors = ["red", "orange", "gold", "green", "blue", "purple"]\n\nfor i in range(90):\n    t.pencolor(colors[i % 6])\n    t.forward(i * 1.5)\n    t.right(61)',
        expectedOutput: '',
        tip: '각도를 61°가 아닌 60°로 하면 정확한 육각형이 됩니다. 약간 비틀어진 각도가 나선을 만들어냅니다.',
        tipEn: 'Using exactly 60 degrees would create a perfect hexagon. The slightly offset angle of 61 degrees is what creates the spiral effect.'
      },
      {
        title: '동심원과 꽃 패턴',
        titleEn: 'Concentric Circles and Flower Patterns',
        content: `penup()/pendown()으로 펜을 들었다 놓으면 이동만 할 수 있습니다.\ncircle()로 원을 그릴 수 있으며, 크기를 바꿔가며 동심원을 만듭니다.\n\n원을 여러 각도로 겹쳐 그리면 꽃 패턴이 됩니다.`,
        contentEn: `penup()/pendown() lifts and lowers the pen, allowing movement without drawing.\ncircle() draws circles, and varying the size creates concentric circles.\n\nOverlapping circles at different angles creates a flower pattern.`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\n# 꽃잎 패턴\ncolors = ["red", "orange", "gold", "green", "blue", "purple", "magenta", "cyan"]\nfor i in range(8):\n    t.pencolor(colors[i])\n    t.circle(60)\n    t.right(45)',
        expectedOutput: '',
        tip: 'circle(r)에서 r이 양수면 반시계 방향, 음수면 시계 방향으로 원을 그립니다.',
        tipEn: 'In circle(r), a positive r draws counterclockwise, and a negative r draws clockwise.'
      },
      {
        title: '집 그리기',
        titleEn: 'Drawing a House',
        content: `기본 도형들을 조합하면 복잡한 그림도 그릴 수 있습니다.\n이 예제에서는 사각형(벽), 삼각형(지붕), 사각형(문)을 조합하여\n간단한 집 모양을 그립니다.\n\ngoto()로 원하는 좌표로 이동할 수 있습니다.`,
        contentEn: `By combining basic shapes, you can create complex drawings.\nThis example combines a rectangle (wall), triangle (roof), and rectangle (door)\nto draw a simple house.\n\nUse goto() to move to any coordinate.`,
        code: 'import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(3)\n\n# 벽 그리기 (채우기)\nt.color("black", "cyan")\nt.begin_fill()\nfor i in range(4):\n    t.forward(120)\n    t.right(90)\nt.end_fill()\n\n# 지붕 그리기\nt.color("red", "red")\nt.begin_fill()\nt.left(30)\nt.forward(138)\nt.right(120)\nt.forward(138)\nt.right(150)\nt.forward(120)\nt.end_fill()\n\n# 문 위치로 이동\nt.penup()\nt.right(90)\nt.forward(90)\nt.right(90)\nt.forward(45)\nt.pendown()\n\n# 문 그리기\nt.color("brown", "brown")\nt.begin_fill()\nt.left(90)\nfor i in range(2):\n    t.forward(40)\n    t.right(90)\n    t.forward(30)\n    t.right(90)\nt.end_fill()',
        expectedOutput: '',
        tip: '복잡한 그림은 좌표를 미리 계산하고 goto()로 이동하면 쉽게 그릴 수 있습니다.',
        tipEn: 'For complex drawings, pre-calculate coordinates and use goto() to move. This makes drawing much easier.'
      }
    ]
  },

  // ==================== 고급 과정 ====================
  'decorators': {
    sections: [
      {
        title: '데코레이터 기초',
        titleEn: 'Decorator Basics',
        content: `데코레이터는 함수를 감싸서 기능을 추가하는 패턴입니다.\n@기호를 사용하여 함수 위에 적용합니다.\n\n데코레이터는 본질적으로 함수를 인자로 받아 새 함수를 반환하는 함수입니다.`,
        contentEn: `Decorators are a pattern that wraps functions to add functionality.\nThey are applied above a function using the @ symbol.\n\nA decorator is essentially a function that takes a function as an argument and returns a new function.`,
        code: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"[{func.__name__}] 시작")\n        result = func(*args, **kwargs)\n        print(f"[{func.__name__}] 완료")\n        return result\n    return wrapper\n\n@timer\ndef greet(name):\n    print(f"안녕하세요, {name}!")\n\n@timer\ndef add(a, b):\n    return a + b\n\ngreet("파이썬")\nresult = add(3, 5)\nprint(f"결과: {result}")',
        codeEn: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"[{func.__name__}] Start")\n        result = func(*args, **kwargs)\n        print(f"[{func.__name__}] Done")\n        return result\n    return wrapper\n\n@timer\ndef greet(name):\n    print(f"Hello, {name}!")\n\n@timer\ndef add(a, b):\n    return a + b\n\ngreet("Python")\nresult = add(3, 5)\nprint(f"Result: {result}")',
        expectedOutput: '[greet] 시작\n안녕하세요, 파이썬!\n[greet] 완료\n[add] 시작\n[add] 완료\n결과: 8',
        expectedOutputEn: '[greet] Start\nHello, Python!\n[greet] Done\n[add] Start\n[add] Done\nResult: 8',
        tip: '@timer는 greet = timer(greet)와 동일합니다. 문법적 편의를 제공하는 것입니다.',
        tipEn: '@timer is equivalent to greet = timer(greet). It provides syntactic convenience.'
      },
      {
        title: '매개변수가 있는 데코레이터',
        titleEn: 'Decorators with Parameters',
        content: `데코레이터에 인자를 전달하려면 3중 중첩 함수 구조가 필요합니다.\n외부 함수가 매개변수를 받고, 내부에서 실제 데코레이터를 반환합니다.`,
        contentEn: `To pass arguments to a decorator, a triple-nested function structure is needed.\nThe outer function receives the parameters and returns the actual decorator inside.`,
        code: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print("Hello!")\n\nsay_hello()',
        expectedOutput: 'Hello!\nHello!\nHello!',
        tip: 'functools.wraps를 사용하면 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존할 수 있습니다.',
        tipEn: 'Using functools.wraps preserves the original function\'s metadata such as __name__ and __doc__.'
      }
    ]
  },

  'generators': {
    sections: [
      {
        title: '제너레이터 함수',
        titleEn: 'Generator Functions',
        content: `제너레이터는 yield 키워드를 사용하여 값을 하나씩 생성합니다.\n메모리를 절약하면서 큰 시퀀스를 처리할 수 있습니다.\n\nnext()로 다음 값을 가져오거나, for문으로 순회합니다.`,
        contentEn: `Generators produce values one at a time using the yield keyword.\nThey can process large sequences while saving memory.\n\nUse next() to get the next value, or iterate with a for loop.`,
        code: 'def countdown(n):\n    print("카운트다운 시작!")\n    while n > 0:\n        yield n\n        n -= 1\n    print("발사!")\n\n# for문으로 순회\nfor num in countdown(5):\n    print(num, end=" ")\nprint()\n\n# 제너레이터 표현식\nsquares = (x**2 for x in range(5))\nprint(list(squares))',
        codeEn: 'def countdown(n):\n    print("Countdown started!")\n    while n > 0:\n        yield n\n        n -= 1\n    print("Liftoff!")\n\n# Iterating with for loop\nfor num in countdown(5):\n    print(num, end=" ")\nprint()\n\n# Generator expression\nsquares = (x**2 for x in range(5))\nprint(list(squares))',
        expectedOutput: '카운트다운 시작!\n5 4 3 2 1 \n발사!\n[0, 1, 4, 9, 16]',
        expectedOutputEn: 'Countdown started!\n5 4 3 2 1 \nLiftoff!\n[0, 1, 4, 9, 16]',
        tip: '리스트 대신 제너레이터를 사용하면 메모리를 크게 절약할 수 있습니다 (지연 평가).',
        tipEn: 'Using generators instead of lists can greatly save memory (lazy evaluation).'
      }
    ]
  },

  'context-managers': {
    sections: [
      {
        title: '컨텍스트 매니저 만들기',
        titleEn: 'Creating Context Managers',
        content: `컨텍스트 매니저는 리소스의 획득과 해제를 안전하게 관리합니다.\n__enter__와 __exit__ 메서드, 또는 contextlib을 사용하여 구현합니다.`,
        contentEn: `Context managers safely manage the acquisition and release of resources.\nThey are implemented using __enter__ and __exit__ methods, or the contextlib module.`,
        code: 'class Timer:\n    def __enter__(self):\n        print("타이머 시작")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("타이머 종료")\n        return False\n\nwith Timer() as t:\n    total = sum(range(1000))\n    print(f"합계: {total}")\n\nprint("프로그램 계속...")',
        codeEn: 'class Timer:\n    def __enter__(self):\n        print("Timer started")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Timer stopped")\n        return False\n\nwith Timer() as t:\n    total = sum(range(1000))\n    print(f"Sum: {total}")\n\nprint("Program continues...")',
        expectedOutput: '타이머 시작\n합계: 499500\n타이머 종료\n프로그램 계속...',
        expectedOutputEn: 'Timer started\nSum: 499500\nTimer stopped\nProgram continues...',
        tip: '__exit__에서 True를 반환하면 예외를 억제합니다. 보통 False를 반환합니다.',
        tipEn: 'Returning True in __exit__ suppresses exceptions. Usually False is returned.'
      }
    ]
  },

  'concurrency': {
    sections: [
      {
        title: '동시성 개념 이해',
        titleEn: 'Understanding Concurrency',
        content: `동시성은 여러 작업을 동시에 처리하는 것처럼 보이게 하는 기법입니다.\n\n- 스레딩(threading): I/O 바운드 작업에 적합\n- 멀티프로세싱(multiprocessing): CPU 바운드 작업에 적합\n- asyncio: 비동기 I/O 처리`,
        contentEn: `Concurrency is a technique that makes it appear as if multiple tasks are being processed simultaneously.\n\n- Threading: suitable for I/O-bound tasks\n- Multiprocessing: suitable for CPU-bound tasks\n- asyncio: asynchronous I/O handling`,
        code: '# 동시성 개념 시뮬레이션\ndef task(name, steps):\n    results = []\n    for i in range(1, steps + 1):\n        results.append(f"{name} - 단계 {i}/{steps}")\n    return results\n\n# 순차 실행\ntask1 = task("다운로드", 3)\ntask2 = task("처리", 3)\n\nfor step in task1:\n    print(step)\nfor step in task2:\n    print(step)\n\nprint("\\n모든 작업 완료!")',
        codeEn: '# Concurrency concept simulation\ndef task(name, steps):\n    results = []\n    for i in range(1, steps + 1):\n        results.append(f"{name} - Step {i}/{steps}")\n    return results\n\n# Sequential execution\ntask1 = task("Download", 3)\ntask2 = task("Process", 3)\n\nfor step in task1:\n    print(step)\nfor step in task2:\n    print(step)\n\nprint("\\nAll tasks completed!")',
        expectedOutput: '다운로드 - 단계 1/3\n다운로드 - 단계 2/3\n다운로드 - 단계 3/3\n처리 - 단계 1/3\n처리 - 단계 2/3\n처리 - 단계 3/3\n\n모든 작업 완료!',
        expectedOutputEn: 'Download - Step 1/3\nDownload - Step 2/3\nDownload - Step 3/3\nProcess - Step 1/3\nProcess - Step 2/3\nProcess - Step 3/3\n\nAll tasks completed!',
        tip: 'I/O 바운드 작업(네트워크, 파일)에는 스레딩이나 asyncio가, CPU 바운드(계산)에는 멀티프로세싱이 효율적입니다.',
        tipEn: 'Threading or asyncio is efficient for I/O-bound tasks (network, files), while multiprocessing is efficient for CPU-bound tasks (computation).'
      }
    ]
  },

  'typing-testing': {
    sections: [
      {
        title: '타입 힌트',
        titleEn: 'Type Hints',
        content: `타입 힌트는 변수와 함수의 타입 정보를 명시합니다.\n런타임에 강제되지 않지만, IDE 자동완성과 정적 분석에 도움됩니다.`,
        contentEn: `Type hints specify type information for variables and functions.\nThey are not enforced at runtime, but help with IDE autocompletion and static analysis.`,
        code: '# 타입 힌트 예제\ndef calculate_bmi(weight: float, height: float) -> float:\n    return weight / (height ** 2)\n\ndef greet_all(names: list) -> None:\n    for name in names:\n        print(f"안녕, {name}!")\n\nbmi = calculate_bmi(70.0, 1.75)\nprint(f"BMI: {bmi:.1f}")\n\ngreet_all(["철수", "영희", "민수"])',
        codeEn: '# Type hints example\ndef calculate_bmi(weight: float, height: float) -> float:\n    return weight / (height ** 2)\n\ndef greet_all(names: list) -> None:\n    for name in names:\n        print(f"Hello, {name}!")\n\nbmi = calculate_bmi(70.0, 1.75)\nprint(f"BMI: {bmi:.1f}")\n\ngreet_all(["Alice", "Bob", "Charlie"])',
        expectedOutput: 'BMI: 22.9\n안녕, 철수!\n안녕, 영희!\n안녕, 민수!',
        expectedOutputEn: 'BMI: 22.9\nHello, Alice!\nHello, Bob!\nHello, Charlie!',
        tip: 'typing 모듈의 List[str], Dict[str, int], Optional[str] 등으로 더 구체적인 타입을 지정할 수 있습니다.',
        tipEn: 'You can specify more specific types using the typing module: List[str], Dict[str, int], Optional[str], etc.'
      }
    ]
  },

  // ==================== 응용 과정 ====================
  'numpy-basics': {
    sections: [
      {
        title: 'NumPy 배열 생성',
        titleEn: 'Creating NumPy Arrays',
        content: `NumPy는 고성능 수치 연산 라이브러리입니다.\nndarray(N-dimensional array)는 NumPy의 핵심 자료구조입니다.\n\n다양한 방법으로 배열을 생성할 수 있습니다.`,
        contentEn: `NumPy is a high-performance numerical computing library.\nndarray (N-dimensional array) is the core data structure of NumPy.\n\nArrays can be created in various ways.`,
        code: 'import numpy as np\n\n# 리스트에서 배열 생성\na = np.array([1, 2, 3, 4, 5])\nprint(f"1차원: {a}")\n\n# 2차원 배열\nb = np.array([[1, 2, 3], [4, 5, 6]])\nprint(f"2차원:\\n{b}")\nprint(f"shape: {b.shape}")\n\n# 특수 배열\nprint(f"zeros: {np.zeros(3)}")\nprint(f"ones: {np.ones(4)}")\nprint(f"arange: {np.arange(0, 10, 2)}")',
        codeEn: 'import numpy as np\n\n# Creating array from list\na = np.array([1, 2, 3, 4, 5])\nprint(f"1D: {a}")\n\n# 2D array\nb = np.array([[1, 2, 3], [4, 5, 6]])\nprint(f"2D:\\n{b}")\nprint(f"shape: {b.shape}")\n\n# Special arrays\nprint(f"zeros: {np.zeros(3)}")\nprint(f"ones: {np.ones(4)}")\nprint(f"arange: {np.arange(0, 10, 2)}")',
        expectedOutput: '1차원: [1 2 3 4 5]\n2차원:\n[[1 2 3]\n [4 5 6]]\nshape: (2, 3)\nzeros: [0. 0. 0.]\nones: [1. 1. 1. 1.]\narange: [0 2 4 6 8]',
        expectedOutputEn: '1D: [1 2 3 4 5]\n2D:\n[[1 2 3]\n [4 5 6]]\nshape: (2, 3)\nzeros: [0. 0. 0.]\nones: [1. 1. 1. 1.]\narange: [0 2 4 6 8]',
        tip: 'NumPy 배열은 같은 타입의 요소만 포함할 수 있어 파이썬 리스트보다 훨씬 빠릅니다.',
        tipEn: 'NumPy arrays can only contain elements of the same type, making them much faster than Python lists.'
      },
      {
        title: '배열 인덱싱과 슬라이싱',
        titleEn: 'Array Indexing and Slicing',
        content: `NumPy 배열도 파이썬 리스트처럼 인덱싱과 슬라이싱이 가능합니다.\n2차원 배열은 [행, 열] 형태로 접근합니다.\n\n불리언 마스크를 이용한 조건부 인덱싱도 매우 유용합니다.`,
        contentEn: `NumPy arrays support indexing and slicing just like Python lists.\n2D arrays are accessed using the [row, column] format.\n\nBoolean mask-based conditional indexing is also very useful.`,
        code: 'import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(f"전체:\\n{a}")\nprint(f"a[0,1] = {a[0, 1]}")     # 0행 1열\nprint(f"a[1,:] = {a[1, :]}")     # 1행 전체\nprint(f"a[:,2] = {a[:, 2]}")     # 2열 전체\n\n# 불리언 마스킹\nprint(f"5보다 큰: {a[a > 5]}")',
        codeEn: 'import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(f"Full:\\n{a}")\nprint(f"a[0,1] = {a[0, 1]}")     # Row 0, Col 1\nprint(f"a[1,:] = {a[1, :]}")     # Entire row 1\nprint(f"a[:,2] = {a[:, 2]}")     # Entire col 2\n\n# Boolean masking\nprint(f"Greater than 5: {a[a > 5]}")',
        expectedOutput: '전체:\n[[1 2 3]\n [4 5 6]\n [7 8 9]]\na[0,1] = 2\na[1,:] = [4 5 6]\na[:,2] = [3 6 9]\n5보다 큰: [6 7 8 9]',
        expectedOutputEn: 'Full:\n[[1 2 3]\n [4 5 6]\n [7 8 9]]\na[0,1] = 2\na[1,:] = [4 5 6]\na[:,2] = [3 6 9]\nGreater than 5: [6 7 8 9]',
        tip: 'NumPy 슬라이싱은 복사본이 아닌 뷰(view)를 반환합니다. 복사하려면 .copy()를 사용하세요.',
        tipEn: 'NumPy slicing returns a view, not a copy. Use .copy() if you need a copy.'
      }
    ]
  },

  'numpy-advanced': {
    sections: [
      {
        title: '배열 연산과 브로드캐스팅',
        titleEn: 'Array Operations and Broadcasting',
        content: `NumPy의 핵심 장점은 요소별(element-wise) 연산과 브로드캐스팅입니다.\n반복문 없이도 배열 전체에 연산을 적용할 수 있습니다.\n\n브로드캐스팅은 크기가 다른 배열 간의 연산을 가능하게 합니다.`,
        contentEn: `The key advantages of NumPy are element-wise operations and broadcasting.\nOperations can be applied to entire arrays without loops.\n\nBroadcasting enables operations between arrays of different sizes.`,
        code: 'import numpy as np\n\na = np.array([1, 2, 3, 4])\nprint(f"원본: {a}")\nprint(f"*2: {a * 2}")         # 스칼라 연산\nprint(f"**2: {a ** 2}")        # 거듭제곱\nprint(f"합계: {np.sum(a)}")\nprint(f"평균: {np.mean(a)}")\nprint(f"표준편차: {np.std(a):.2f}")\n\n# 2차원 연산\nm = np.array([[1, 2], [3, 4]])\nprint(f"\\n행별 합: {np.sum(m, axis=1)}")\nprint(f"열별 합: {np.sum(m, axis=0)}")',
        codeEn: 'import numpy as np\n\na = np.array([1, 2, 3, 4])\nprint(f"Original: {a}")\nprint(f"*2: {a * 2}")         # Scalar operation\nprint(f"**2: {a ** 2}")        # Exponentiation\nprint(f"Sum: {np.sum(a)}")\nprint(f"Mean: {np.mean(a)}")\nprint(f"Std dev: {np.std(a):.2f}")\n\n# 2D operations\nm = np.array([[1, 2], [3, 4]])\nprint(f"\\nRow sums: {np.sum(m, axis=1)}")\nprint(f"Col sums: {np.sum(m, axis=0)}")',
        expectedOutput: '원본: [1 2 3 4]\n*2: [2 4 6 8]\n**2: [ 1  4  9 16]\n합계: 10\n평균: 2.5\n표준편차: 1.12\n\n행별 합: [3 7]\n열별 합: [4 6]',
        expectedOutputEn: 'Original: [1 2 3 4]\n*2: [2 4 6 8]\n**2: [ 1  4  9 16]\nSum: 10\nMean: 2.5\nStd dev: 1.12\n\nRow sums: [3 7]\nCol sums: [4 6]',
        tip: 'axis=0은 행 방향(열별), axis=1은 열 방향(행별) 연산을 수행합니다.',
        tipEn: 'axis=0 operates along rows (per column), axis=1 operates along columns (per row).'
      }
    ]
  },

  'pandas-basics': {
    sections: [
      {
        title: 'Series와 DataFrame',
        titleEn: 'Series and DataFrame',
        content: `Pandas는 데이터 분석의 핵심 라이브러리입니다.\n\nSeries: 1차원 데이터 (인덱스 + 값)\nDataFrame: 2차원 데이터 (표 형태, 행+열)`,
        contentEn: `Pandas is the core library for data analysis.\n\nSeries: 1-dimensional data (index + values)\nDataFrame: 2-dimensional data (tabular format, rows + columns)`,
        code: 'import pandas as pd\n\n# Series 생성\nscores = pd.Series([90, 85, 78, 95], index=["국어", "영어", "수학", "과학"])\nprint("=== Series ===")\nprint(scores)\nprint(f"\\n평균: {scores.mean():.1f}")\n\n# DataFrame 생성\ndata = {\n    "이름": ["김철수", "이영희", "박민수"],\n    "나이": [20, 22, 21],\n    "점수": [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint("\\n=== DataFrame ===")\nprint(df)',
        codeEn: 'import pandas as pd\n\n# Creating a Series\nscores = pd.Series([90, 85, 78, 95], index=["Korean", "English", "Math", "Science"])\nprint("=== Series ===")\nprint(scores)\nprint(f"\\nMean: {scores.mean():.1f}")\n\n# Creating a DataFrame\ndata = {\n    "Name": ["Alice", "Bob", "Charlie"],\n    "Age": [20, 22, 21],\n    "Score": [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint("\\n=== DataFrame ===")\nprint(df)',
        expectedOutput: '=== Series ===\n국어    90\n영어    85\n수학    78\n과학    95\ndtype: int64\n\n평균: 87.0\n\n=== DataFrame ===\n   이름  나이  점수\n0  김철수  20  85\n1  이영희  22  92\n2  박민수  21  78',
        expectedOutputEn: '=== Series ===\nKorean     90\nEnglish    85\nMath       78\nScience    95\ndtype: int64\n\nMean: 87.0\n\n=== DataFrame ===\n      Name  Age  Score\n0    Alice   20     85\n1      Bob   22     92\n2  Charlie   21     78',
        tip: 'DataFrame은 엑셀 시트와 비슷합니다. 행(index)과 열(columns)로 구성됩니다.',
        tipEn: 'A DataFrame is similar to an Excel sheet. It consists of rows (index) and columns.'
      },
      {
        title: '데이터 조회와 탐색',
        titleEn: 'Data Viewing and Exploration',
        content: `DataFrame의 기본 정보를 확인하는 여러 메서드가 있습니다.\n\nhead(), tail(), info(), describe(), shape, columns 등을 활용합니다.`,
        contentEn: `There are several methods to check the basic information of a DataFrame.\n\nUse head(), tail(), info(), describe(), shape, columns, etc.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "상품": ["노트북", "마우스", "키보드", "모니터", "헤드셋"],\n    "가격": [1200000, 35000, 89000, 450000, 120000],\n    "재고": [5, 100, 50, 12, 30]\n})\n\nprint(df.head(3))   # 상위 3행\nprint(f"\\n크기: {df.shape}")\nprint(f"\\n통계:\\n{df.describe()}")',
        codeEn: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "Product": ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"],\n    "Price": [1200000, 35000, 89000, 450000, 120000],\n    "Stock": [5, 100, 50, 12, 30]\n})\n\nprint(df.head(3))   # Top 3 rows\nprint(f"\\nShape: {df.shape}")\nprint(f"\\nStatistics:\\n{df.describe()}")',
        expectedOutput: '    상품      가격   재고\n0  노트북  1200000    5\n1  마우스    35000  100\n2  키보드    89000   50\n\n크기: (5, 3)\n\n통계:\n              가격         재고\ncount      5.00      5.00\nmean  378800.00     39.40\nstd   467889.63     37.57\nmin    35000.00      5.00\n25%    89000.00     12.00\n50%   120000.00     30.00\n75%   450000.00     50.00\nmax  1200000.00    100.00',
        expectedOutputEn: '    Product    Price  Stock\n0    Laptop  1200000      5\n1     Mouse    35000    100\n2  Keyboard    89000     50\n\nShape: (5, 3)\n\nStatistics:\n              Price        Stock\ncount      5.00      5.00\nmean  378800.00     39.40\nstd   467889.63     37.57\nmin    35000.00      5.00\n25%    89000.00     12.00\n50%   120000.00     30.00\n75%   450000.00     50.00\nmax  1200000.00    100.00',
        tip: 'describe()는 숫자형 열에 대해 자동으로 통계 요약을 제공합니다.',
        tipEn: 'describe() automatically provides a statistical summary for numeric columns.'
      }
    ]
  },

  'pandas-manipulation': {
    sections: [
      {
        title: '데이터 필터링과 정렬',
        titleEn: 'Data Filtering and Sorting',
        content: `Pandas는 조건에 맞는 데이터를 쉽게 필터링할 수 있습니다.\n불리언 인덱싱과 query() 메서드를 활용합니다.`,
        contentEn: `Pandas makes it easy to filter data based on conditions.\nUse boolean indexing and the query() method.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "이름": ["김철수", "이영희", "박민수", "정수진", "최동혁"],\n    "점수": [85, 92, 78, 95, 88],\n    "학년": [1, 2, 1, 3, 2]\n})\n\n# 필터링\nprint("90점 이상:")\nprint(df[df["점수"] >= 90])\n\n# 정렬\nprint("\\n점수순 정렬:")\nprint(df.sort_values("점수", ascending=False))',
        codeEn: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "Name": ["Alice", "Bob", "Charlie", "Diana", "Eve"],\n    "Score": [85, 92, 78, 95, 88],\n    "Year": [1, 2, 1, 3, 2]\n})\n\n# Filtering\nprint("Score >= 90:")\nprint(df[df["Score"] >= 90])\n\n# Sorting\nprint("\\nSorted by Score:")\nprint(df.sort_values("Score", ascending=False))',
        expectedOutput: '90점 이상:\n   이름  점수  학년\n1  이영희  92    2\n3  정수진  95    3\n\n점수순 정렬:\n   이름  점수  학년\n3  정수진  95    3\n1  이영희  92    2\n4  최동혁  88    2\n0  김철수  85    1\n2  박민수  78    1',
        expectedOutputEn: 'Score >= 90:\n    Name  Score  Year\n1    Bob     92     2\n3  Diana     95     3\n\nSorted by Score:\n      Name  Score  Year\n3    Diana     95     3\n1      Bob     92     2\n4      Eve     88     2\n0    Alice     85     1\n2  Charlie     78     1',
        tip: '여러 조건을 결합할 때는 &(and)와 |(or)를 사용하고, 각 조건을 괄호로 감싸세요.',
        tipEn: 'When combining multiple conditions, use & (and) and | (or), and wrap each condition in parentheses.'
      },
      {
        title: 'GroupBy와 집계',
        titleEn: 'GroupBy and Aggregation',
        content: `groupby()는 특정 열의 값을 기준으로 데이터를 그룹화합니다.\n그룹화 후 sum(), mean(), count() 등의 집계 함수를 적용합니다.`,
        contentEn: `groupby() groups data based on the values of a specific column.\nAfter grouping, apply aggregation functions such as sum(), mean(), count(), etc.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "부서": ["개발", "기획", "개발", "기획", "개발"],\n    "이름": ["김", "이", "박", "정", "최"],\n    "매출": [100, 80, 120, 90, 110]\n})\n\nprint("부서별 매출 합계:")\nprint(df.groupby("부서")["매출"].sum())\n\nprint("\\n부서별 통계:")\nprint(df.groupby("부서")["매출"].agg(["mean", "sum", "count"]))',
        codeEn: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "Dept": ["Dev", "Planning", "Dev", "Planning", "Dev"],\n    "Name": ["Kim", "Lee", "Park", "Jung", "Choi"],\n    "Sales": [100, 80, 120, 90, 110]\n})\n\nprint("Sales total by department:")\nprint(df.groupby("Dept")["Sales"].sum())\n\nprint("\\nDepartment statistics:")\nprint(df.groupby("Dept")["Sales"].agg(["mean", "sum", "count"]))',
        expectedOutput: '부서별 매출 합계:\n부서\n개발    330\n기획    170\nName: 매출, dtype: int64\n\n부서별 통계:\n       mean  sum  count\n부서                     \n개발  110.0  330      3\n기획   85.0  170      2',
        expectedOutputEn: 'Sales total by department:\nDept\nDev         330\nPlanning    170\nName: Sales, dtype: int64\n\nDepartment statistics:\n           mean  sum  count\nDept                       \nDev       110.0  330      3\nPlanning   85.0  170      2',
        tip: 'agg()에 여러 집계 함수를 리스트로 전달하면 한 번에 여러 통계를 계산할 수 있습니다.',
        tipEn: 'Passing multiple aggregation functions as a list to agg() lets you calculate multiple statistics at once.'
      }
    ]
  },

  'data-project': {
    sections: [
      {
        title: '데이터 분석 프로젝트',
        titleEn: 'Data Analysis Project',
        content: `이번 레슨에서는 지금까지 배운 NumPy와 Pandas를 활용하여\n실전 데이터 분석을 수행합니다.\n\n학생 성적 데이터를 생성하고, 분석하고, 인사이트를 도출합니다.`,
        contentEn: `In this lesson, we will perform practical data analysis using\nNumPy and Pandas that we have learned so far.\n\nWe will generate student grade data, analyze it, and derive insights.`,
        code: 'import numpy as np\nimport pandas as pd\n\n# 데이터 생성\nnp.random.seed(42)\nn = 20\ndata = {\n    "학생": [f"학생{i+1}" for i in range(n)],\n    "수학": np.random.randint(50, 100, n),\n    "영어": np.random.randint(50, 100, n),\n    "과학": np.random.randint(50, 100, n)\n}\ndf = pd.DataFrame(data)\ndf["평균"] = df[["수학", "영어", "과학"]].mean(axis=1).round(1)\ndf["등급"] = pd.cut(df["평균"], bins=[0,60,70,80,90,100], labels=["F","D","C","B","A"])\n\nprint("=== 상위 5명 ===")\nprint(df.sort_values("평균", ascending=False).head())\nprint(f"\\n전체 평균: {df[\"평균\"].mean():.1f}")\nprint(f"\\n등급 분포:\\n{df[\"등급\"].value_counts().sort_index()}")',
        codeEn: 'import numpy as np\nimport pandas as pd\n\n# Generate data\nnp.random.seed(42)\nn = 20\ndata = {\n    "Student": [f"Student{i+1}" for i in range(n)],\n    "Math": np.random.randint(50, 100, n),\n    "English": np.random.randint(50, 100, n),\n    "Science": np.random.randint(50, 100, n)\n}\ndf = pd.DataFrame(data)\ndf["Average"] = df[["Math", "English", "Science"]].mean(axis=1).round(1)\ndf["Grade"] = pd.cut(df["Average"], bins=[0,60,70,80,90,100], labels=["F","D","C","B","A"])\n\nprint("=== Top 5 Students ===")\nprint(df.sort_values("Average", ascending=False).head())\nprint(f"\\nOverall average: {df[\"Average\"].mean():.1f}")\nprint(f"\\nGrade distribution:\\n{df[\"Grade\"].value_counts().sort_index()}")',
        expectedOutput: '=== 상위 5명 ===\n    학생  수학  영어  과학   평균 등급\n15  학생16  91  95  96  94.0    A\n7   학생8   92  88  97  92.3    A\n2   학생3   87  94  90  90.3    A\n...',
        expectedOutputEn: '=== Top 5 Students ===\n     Student  Math  English  Science  Average Grade\n15  Student16   91       95       96     94.0     A\n7    Student8   92       88       97     92.3     A\n2    Student3   87       94       90     90.3     A\n...',
        tip: '데이터 분석은 "질문 → 탐색 → 분석 → 시각화 → 결론" 순서로 진행하는 것이 좋습니다.',
        tipEn: 'Data analysis is best done in this order: Question, Explore, Analyze, Visualize, Conclude.'
      }
    ]
  },

  // ==================== 응용 과정 (추가) ====================
  'matplotlib-seaborn': {
    sections: [
      {
        title: 'Matplotlib 기본 그래프',
        titleEn: 'Basic Matplotlib Graphs',
        content: `Matplotlib는 파이썬에서 가장 많이 사용되는 시각화 라이브러리입니다.\nplt.plot()으로 선 그래프, plt.bar()로 막대 그래프, plt.scatter()로 산점도를 그릴 수 있습니다.\n\nmatplotlib.pyplot을 plt로 임포트하는 것이 관례입니다.`,
        contentEn: `Matplotlib is the most widely used visualization library in Python.\nUse plt.plot() for line graphs, plt.bar() for bar charts, and plt.scatter() for scatter plots.\n\nThe convention is to import matplotlib.pyplot as plt.`,
        code: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 데이터 준비\nx = np.linspace(0, 10, 100)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# 선 그래프 (코드 설명)\nprint("=== Matplotlib 기본 사용법 ===")\nprint("plt.plot(x, y)     : 선 그래프")\nprint("plt.bar(x, y)      : 막대 그래프")\nprint("plt.scatter(x, y)  : 산점도")\nprint("plt.hist(data)     : 히스토그램")\nprint("plt.pie(sizes)     : 원형 그래프")\nprint()\n\n# 실제 코드 예시\nprint("# 선 그래프 예제")\nprint("fig, ax = plt.subplots(figsize=(8, 5))")\nprint("ax.plot(x, np.sin(x), label=\'sin(x)\', color=\'blue\')")\nprint("ax.plot(x, np.cos(x), label=\'cos(x)\', color=\'red\')")\nprint("ax.set_title(\'삼각함수 그래프\')")\nprint("ax.set_xlabel(\'x\')")\nprint("ax.set_ylabel(\'y\')")\nprint("ax.legend()")\nprint("plt.show()")\nprint()\nprint(f"sin 데이터 포인트: {len(y_sin)}개")\nprint(f"x 범위: [{x[0]:.1f}, {x[-1]:.1f}]")',
        codeEn: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# Prepare data\nx = np.linspace(0, 10, 100)\ny_sin = np.sin(x)\ny_cos = np.cos(x)\n\n# Line chart (code explanation)\nprint("=== Matplotlib Basic Usage ===")\nprint("plt.plot(x, y)     : Line chart")\nprint("plt.bar(x, y)      : Bar chart")\nprint("plt.scatter(x, y)  : Scatter plot")\nprint("plt.hist(data)     : Histogram")\nprint("plt.pie(sizes)     : Pie chart")\nprint()\n\n# Actual code example\nprint("# Line chart example")\nprint("fig, ax = plt.subplots(figsize=(8, 5))")\nprint("ax.plot(x, np.sin(x), label=\'sin(x)\', color=\'blue\')")\nprint("ax.plot(x, np.cos(x), label=\'cos(x)\', color=\'red\')")\nprint("ax.set_title(\'Trigonometric Functions\')")\nprint("ax.set_xlabel(\'x\')")\nprint("ax.set_ylabel(\'y\')")\nprint("ax.legend()")\nprint("plt.show()")\nprint()\nprint(f"sin data points: {len(y_sin)}")\nprint(f"x range: [{x[0]:.1f}, {x[-1]:.1f}]")',
        expectedOutput: '=== Matplotlib 기본 사용법 ===\nplt.plot(x, y)     : 선 그래프\nplt.bar(x, y)      : 막대 그래프\nplt.scatter(x, y)  : 산점도\nplt.hist(data)     : 히스토그램\nplt.pie(sizes)     : 원형 그래프\n\n# 선 그래프 예제\nfig, ax = plt.subplots(figsize=(8, 5))\nax.plot(x, np.sin(x), label=\'sin(x)\', color=\'blue\')\nax.plot(x, np.cos(x), label=\'cos(x)\', color=\'red\')\nax.set_title(\'삼각함수 그래프\')\nax.set_xlabel(\'x\')\nax.set_ylabel(\'y\')\nax.legend()\nplt.show()\n\nsin 데이터 포인트: 100개\nx 범위: [0.0, 10.0]',
        expectedOutputEn: '=== Matplotlib Basic Usage ===\nplt.plot(x, y)     : Line chart\nplt.bar(x, y)      : Bar chart\nplt.scatter(x, y)  : Scatter plot\nplt.hist(data)     : Histogram\nplt.pie(sizes)     : Pie chart\n\n# Line chart example\nfig, ax = plt.subplots(figsize=(8, 5))\nax.plot(x, np.sin(x), label=\'sin(x)\', color=\'blue\')\nax.plot(x, np.cos(x), label=\'cos(x)\', color=\'red\')\nax.set_title(\'Trigonometric Functions\')\nax.set_xlabel(\'x\')\nax.set_ylabel(\'y\')\nax.legend()\nplt.show()\n\nsin data points: 100\nx range: [0.0, 10.0]',
        tip: 'plt.subplots()를 사용하면 Figure와 Axes 객체를 동시에 생성하여 더 세밀한 제어가 가능합니다.',
        tipEn: 'Using plt.subplots() creates Figure and Axes objects simultaneously, allowing finer control.'
      },
      {
        title: '막대 그래프와 히스토그램',
        titleEn: 'Bar Charts and Histograms',
        content: `막대 그래프(bar chart)는 카테고리별 값을 비교할 때 사용합니다.\n히스토그램(histogram)은 데이터의 분포를 보여줍니다.\n\nplt.bar()와 plt.hist()로 각각 그릴 수 있습니다.`,
        contentEn: `Bar charts are used to compare values by category.\nHistograms show the distribution of data.\n\nUse plt.bar() and plt.hist() to draw them respectively.`,
        code: 'import numpy as np\n\n# 막대 그래프 데이터\nlanguages = ["Python", "JavaScript", "Java", "C++", "Go"]\npopularity = [30.5, 22.3, 16.8, 12.1, 8.3]\n\nprint("=== 프로그래밍 언어 인기도 ===")\nfor lang, pop in zip(languages, popularity):\n    bar = "#" * int(pop)\n    print(f"{lang:>12}: {bar} {pop}%")\n\nprint()\n\n# 히스토그램 시뮬레이션\nnp.random.seed(42)\nscores = np.random.normal(75, 10, 100).astype(int)\nprint("=== 시험 성적 분포 ===")\nbins = [(50,60), (60,70), (70,80), (80,90), (90,100)]\nfor low, high in bins:\n    count = np.sum((scores >= low) & (scores < high))\n    bar = "#" * count\n    print(f"{low}-{high}: {bar} ({count}명)")\n\nprint(f"\\n평균: {scores.mean():.1f}, 표준편차: {scores.std():.1f}")',
        codeEn: 'import numpy as np\n\n# Bar chart data\nlanguages = ["Python", "JavaScript", "Java", "C++", "Go"]\npopularity = [30.5, 22.3, 16.8, 12.1, 8.3]\n\nprint("=== Programming Language Popularity ===")\nfor lang, pop in zip(languages, popularity):\n    bar = "#" * int(pop)\n    print(f"{lang:>12}: {bar} {pop}%")\n\nprint()\n\n# Histogram simulation\nnp.random.seed(42)\nscores = np.random.normal(75, 10, 100).astype(int)\nprint("=== Exam Score Distribution ===")\nbins = [(50,60), (60,70), (70,80), (80,90), (90,100)]\nfor low, high in bins:\n    count = np.sum((scores >= low) & (scores < high))\n    bar = "#" * count\n    print(f"{low}-{high}: {bar} ({count} students)")\n\nprint(f"\\nMean: {scores.mean():.1f}, Std dev: {scores.std():.1f}")',
        expectedOutput: '=== 프로그래밍 언어 인기도 ===\n      Python: ############################## 30.5%\n  JavaScript: ###################### 22.3%\n        Java: ################ 16.8%\n         C++: ############ 12.1%\n          Go: ######## 8.3%\n\n=== 시험 성적 분포 ===\n50-60: ###### (6명)\n60-70: ################### (19명)\n70-80: ################################### (35명)\n80-90: ############################### (31명)\n90-100: ######### (9명)\n\n평균: 75.3, 표준편차: 10.1',
        expectedOutputEn: '=== Programming Language Popularity ===\n      Python: ############################## 30.5%\n  JavaScript: ###################### 22.3%\n        Java: ################ 16.8%\n         C++: ############ 12.1%\n          Go: ######## 8.3%\n\n=== Exam Score Distribution ===\n50-60: ###### (6 students)\n60-70: ################### (19 students)\n70-80: ################################### (35 students)\n80-90: ############################### (31 students)\n90-100: ######### (9 students)\n\nMean: 75.3, Std dev: 10.1',
        tip: 'plt.barh()를 사용하면 가로 막대 그래프를, plt.hist(bins=20)으로 구간 수를 조절할 수 있습니다.',
        tipEn: 'Use plt.barh() for horizontal bar charts, and plt.hist(bins=20) to adjust the number of bins.'
      },
      {
        title: 'Seaborn 통계 시각화',
        titleEn: 'Seaborn Statistical Visualization',
        content: `Seaborn은 Matplotlib 기반의 통계 시각화 라이브러리입니다.\n더 아름다운 기본 스타일과 통계적 그래프를 제공합니다.\n\n주요 함수: sns.scatterplot, sns.boxplot, sns.heatmap, sns.countplot, sns.pairplot`,
        contentEn: `Seaborn is a statistical visualization library built on Matplotlib.\nIt provides more beautiful default styles and statistical graphs.\n\nKey functions: sns.scatterplot, sns.boxplot, sns.heatmap, sns.countplot, sns.pairplot`,
        code: 'import numpy as np\nimport pandas as pd\n\n# Seaborn 시각화 개념\nprint("=== Seaborn 주요 차트 종류 ===")\ncharts = {\n    "sns.scatterplot()": "산점도 - 두 변수의 관계",\n    "sns.lineplot()": "선 그래프 - 시계열 데이터",\n    "sns.barplot()": "막대 그래프 - 그룹별 평균",\n    "sns.boxplot()": "박스 플롯 - 분포와 이상치",\n    "sns.heatmap()": "히트맵 - 상관관계 행렬",\n    "sns.histplot()": "히스토그램 - 데이터 분포",\n    "sns.pairplot()": "페어 플롯 - 다변량 관계",\n    "sns.countplot()": "카운트 플롯 - 범주별 빈도"\n}\nfor func, desc in charts.items():\n    print(f"  {func:24s} → {desc}")\n\n# 상관행렬 시뮬레이션\nnp.random.seed(42)\ndf = pd.DataFrame({\n    "수학": np.random.randint(50, 100, 30),\n    "과학": np.random.randint(50, 100, 30),\n    "영어": np.random.randint(50, 100, 30)\n})\ndf["과학"] = df["수학"] * 0.7 + np.random.randint(10, 30, 30)\n\nprint("\\n=== 과목별 상관계수 ===")\ncorr = df.corr().round(2)\nprint(corr)\nprint("\\n# sns.heatmap(corr, annot=True, cmap=\'coolwarm\')")\nprint("# → 상관관계를 색상으로 시각화합니다")',
        codeEn: 'import numpy as np\nimport pandas as pd\n\n# Seaborn visualization concepts\nprint("=== Seaborn Key Chart Types ===")\ncharts = {\n    "sns.scatterplot()": "Scatter plot - Relationship between two variables",\n    "sns.lineplot()": "Line plot - Time series data",\n    "sns.barplot()": "Bar plot - Group means",\n    "sns.boxplot()": "Box plot - Distribution and outliers",\n    "sns.heatmap()": "Heatmap - Correlation matrix",\n    "sns.histplot()": "Histogram - Data distribution",\n    "sns.pairplot()": "Pair plot - Multivariate relationships",\n    "sns.countplot()": "Count plot - Category frequencies"\n}\nfor func, desc in charts.items():\n    print(f"  {func:24s} → {desc}")\n\n# Correlation matrix simulation\nnp.random.seed(42)\ndf = pd.DataFrame({\n    "Math": np.random.randint(50, 100, 30),\n    "Science": np.random.randint(50, 100, 30),\n    "English": np.random.randint(50, 100, 30)\n})\ndf["Science"] = df["Math"] * 0.7 + np.random.randint(10, 30, 30)\n\nprint("\\n=== Subject Correlation Coefficients ===")\ncorr = df.corr().round(2)\nprint(corr)\nprint("\\n# sns.heatmap(corr, annot=True, cmap=\'coolwarm\')")\nprint("# → Visualize correlations with colors")',
        expectedOutput: '=== Seaborn 주요 차트 종류 ===\n  sns.scatterplot()         → 산점도 - 두 변수의 관계\n  sns.lineplot()            → 선 그래프 - 시계열 데이터\n  sns.barplot()             → 막대 그래프 - 그룹별 평균\n  sns.boxplot()             → 박스 플롯 - 분포와 이상치\n  sns.heatmap()             → 히트맵 - 상관관계 행렬\n  sns.histplot()            → 히스토그램 - 데이터 분포\n  sns.pairplot()            → 페어 플롯 - 다변량 관계\n  sns.countplot()           → 카운트 플롯 - 범주별 빈도\n\n=== 과목별 상관계수 ===\n       수학    과학    영어\n수학  1.00   0.85  -0.07\n과학  0.85   1.00  -0.02\n영어 -0.07  -0.02   1.00\n\n# sns.heatmap(corr, annot=True, cmap=\'coolwarm\')\n# → 상관관계를 색상으로 시각화합니다',
        expectedOutputEn: '=== Seaborn Key Chart Types ===\n  sns.scatterplot()         → Scatter plot - Relationship between two variables\n  sns.lineplot()            → Line plot - Time series data\n  sns.barplot()             → Bar plot - Group means\n  sns.boxplot()             → Box plot - Distribution and outliers\n  sns.heatmap()             → Heatmap - Correlation matrix\n  sns.histplot()            → Histogram - Data distribution\n  sns.pairplot()            → Pair plot - Multivariate relationships\n  sns.countplot()           → Count plot - Category frequencies\n\n=== Subject Correlation Coefficients ===\n          Math  Science  English\nMath      1.00     0.85    -0.07\nScience   0.85     1.00    -0.02\nEnglish  -0.07    -0.02     1.00\n\n# sns.heatmap(corr, annot=True, cmap=\'coolwarm\')\n# → Visualize correlations with colors',
        tip: 'Seaborn은 sns.set_theme()로 전체 스타일을 한 번에 설정할 수 있습니다. "darkgrid", "whitegrid", "ticks" 등의 스타일이 있습니다.',
        tipEn: 'Seaborn can set the overall style at once with sns.set_theme(). Available styles include "darkgrid", "whitegrid", "ticks", etc.'
      }
    ]
  },

  'scikit-learn': {
    sections: [
      {
        title: '머신러닝 기초와 데이터 준비',
        titleEn: 'Machine Learning Basics and Data Preparation',
        content: `Scikit-learn(sklearn)은 파이썬의 대표적인 머신러닝 라이브러리입니다.\n\n머신러닝의 기본 흐름:\n1. 데이터 준비 → 2. 학습/검증 분리 → 3. 모델 학습 → 4. 예측 → 5. 평가\n\ntrain_test_split으로 데이터를 학습용/테스트용으로 나눕니다.`,
        contentEn: `Scikit-learn (sklearn) is Python's most popular machine learning library.\n\nBasic machine learning workflow:\n1. Prepare data -> 2. Train/test split -> 3. Train model -> 4. Predict -> 5. Evaluate\n\nUse train_test_split to divide data into training and test sets.`,
        code: 'import numpy as np\n\n# 머신러닝 기본 개념\nprint("=== 머신러닝 핵심 개념 ===")\nconcepts = {\n    "지도 학습 (Supervised)": "정답(레이블)이 있는 데이터로 학습",\n    "비지도 학습 (Unsupervised)": "정답 없이 데이터의 패턴을 발견",\n    "분류 (Classification)": "카테고리 예측 (스팸/정상, 고양이/개)",\n    "회귀 (Regression)": "연속적인 값 예측 (가격, 온도)",\n    "클러스터링 (Clustering)": "유사한 데이터끼리 그룹화"\n}\nfor key, val in concepts.items():\n    print(f"  {key}\\n    → {val}")\n\n# train_test_split 시뮬레이션\nnp.random.seed(42)\nX = np.random.rand(100, 2)  # 100개 샘플, 2개 특성\ny = (X[:, 0] + X[:, 1] > 1).astype(int)  # 합이 1 초과면 1\n\n# 80:20 분리\nsplit = int(0.8 * len(X))\nX_train, X_test = X[:split], X[split:]\ny_train, y_test = y[:split], y[split:]\n\nprint(f"\\n=== 데이터 분리 ===")\nprint(f"전체 데이터: {len(X)}개")\nprint(f"학습 데이터: {len(X_train)}개 ({len(X_train)/len(X)*100:.0f}%)")\nprint(f"테스트 데이터: {len(X_test)}개 ({len(X_test)/len(X)*100:.0f}%)")\nprint(f"\\n클래스 분포: 0={sum(y==0)}개, 1={sum(y==1)}개")',
        codeEn: 'import numpy as np\n\n# Machine Learning core concepts\nprint("=== Machine Learning Core Concepts ===")\nconcepts = {\n    "Supervised Learning": "Learning from labeled data",\n    "Unsupervised Learning": "Discovering patterns without labels",\n    "Classification": "Predicting categories (spam/normal, cat/dog)",\n    "Regression": "Predicting continuous values (price, temperature)",\n    "Clustering": "Grouping similar data together"\n}\nfor key, val in concepts.items():\n    print(f"  {key}\\n    → {val}")\n\n# train_test_split simulation\nnp.random.seed(42)\nX = np.random.rand(100, 2)  # 100 samples, 2 features\ny = (X[:, 0] + X[:, 1] > 1).astype(int)  # 1 if sum > 1\n\n# 80:20 split\nsplit = int(0.8 * len(X))\nX_train, X_test = X[:split], X[split:]\ny_train, y_test = y[:split], y[split:]\n\nprint(f"\\n=== Data Split ===")\nprint(f"Total data: {len(X)} samples")\nprint(f"Training data: {len(X_train)} samples ({len(X_train)/len(X)*100:.0f}%)")\nprint(f"Test data: {len(X_test)} samples ({len(X_test)/len(X)*100:.0f}%)")\nprint(f"\\nClass distribution: 0={sum(y==0)}, 1={sum(y==1)}")',
        expectedOutput: '=== 머신러닝 핵심 개념 ===\n  지도 학습 (Supervised)\n    → 정답(레이블)이 있는 데이터로 학습\n  비지도 학습 (Unsupervised)\n    → 정답 없이 데이터의 패턴을 발견\n  분류 (Classification)\n    → 카테고리 예측 (스팸/정상, 고양이/개)\n  회귀 (Regression)\n    → 연속적인 값 예측 (가격, 온도)\n  클러스터링 (Clustering)\n    → 유사한 데이터끼리 그룹화\n\n=== 데이터 분리 ===\n전체 데이터: 100개\n학습 데이터: 80개 (80%)\n테스트 데이터: 20개 (20%)\n\n클래스 분포: 0=48개, 1=52개',
        expectedOutputEn: '=== Machine Learning Core Concepts ===\n  Supervised Learning\n    → Learning from labeled data\n  Unsupervised Learning\n    → Discovering patterns without labels\n  Classification\n    → Predicting categories (spam/normal, cat/dog)\n  Regression\n    → Predicting continuous values (price, temperature)\n  Clustering\n    → Grouping similar data together\n\n=== Data Split ===\nTotal data: 100 samples\nTraining data: 80 samples (80%)\nTest data: 20 samples (20%)\n\nClass distribution: 0=48, 1=52',
        tip: 'train_test_split(X, y, test_size=0.2, random_state=42)로 재현 가능한 데이터 분리를 할 수 있습니다.',
        tipEn: 'Use train_test_split(X, y, test_size=0.2, random_state=42) for reproducible data splitting.'
      },
      {
        title: '분류 모델 - KNN과 결정트리',
        titleEn: 'Classification Models - KNN and Decision Trees',
        content: `K-최근접 이웃(KNN)은 가장 직관적인 분류 알고리즘입니다.\n가까운 K개의 이웃을 보고 다수결로 클래스를 결정합니다.\n\n결정트리(Decision Tree)는 데이터를 조건에 따라 분기하여 분류합니다.\n직관적이고 해석이 쉬운 것이 장점입니다.`,
        contentEn: `K-Nearest Neighbors (KNN) is the most intuitive classification algorithm.\nIt looks at the K closest neighbors and decides the class by majority vote.\n\nDecision Trees classify data by branching based on conditions.\nTheir advantage is being intuitive and easy to interpret.`,
        code: 'import numpy as np\n\n# KNN 알고리즘 시뮬레이션\nprint("=== KNN (K-Nearest Neighbors) ===")\nprint("1. 새 데이터가 들어오면")\nprint("2. 기존 데이터와의 거리를 계산")\nprint("3. 가장 가까운 K개의 이웃을 선택")\nprint("4. 다수결로 클래스를 결정\\n")\n\n# 간단한 KNN 구현\nnp.random.seed(42)\ntrain_X = np.array([[1,2],[2,3],[3,1],[6,5],[7,7],[8,6]])\ntrain_y = np.array([0, 0, 0, 1, 1, 1])  # 0: A, 1: B\nnew_point = np.array([5, 4])\n\ndistances = np.sqrt(np.sum((train_X - new_point)**2, axis=1))\nprint(f"새 데이터: {new_point}")\nprint(f"각 점과의 거리: {distances.round(2)}")\n\nk = 3\nnearest_idx = np.argsort(distances)[:k]\nnearest_labels = train_y[nearest_idx]\nprint(f"\\nK={k}일 때 가장 가까운 이웃: {nearest_idx}")\nprint(f"이웃의 클래스: {nearest_labels}")\nprint(f"예측 결과: 클래스 {np.bincount(nearest_labels).argmax()}")\n\nprint(f"\\n=== Scikit-learn 코드 ===")\nprint("from sklearn.neighbors import KNeighborsClassifier")\nprint("from sklearn.tree import DecisionTreeClassifier")\nprint("\\nknn = KNeighborsClassifier(n_neighbors=3)")\nprint("knn.fit(X_train, y_train)")\nprint("predictions = knn.predict(X_test)")',
        codeEn: 'import numpy as np\n\n# KNN Algorithm Simulation\nprint("=== KNN (K-Nearest Neighbors) ===")\nprint("1. When new data arrives")\nprint("2. Calculate distance to existing data")\nprint("3. Select the K nearest neighbors")\nprint("4. Decide class by majority vote\\n")\n\n# Simple KNN implementation\nnp.random.seed(42)\ntrain_X = np.array([[1,2],[2,3],[3,1],[6,5],[7,7],[8,6]])\ntrain_y = np.array([0, 0, 0, 1, 1, 1])  # 0: A, 1: B\nnew_point = np.array([5, 4])\n\ndistances = np.sqrt(np.sum((train_X - new_point)**2, axis=1))\nprint(f"New data: {new_point}")\nprint(f"Distance to each point: {distances.round(2)}")\n\nk = 3\nnearest_idx = np.argsort(distances)[:k]\nnearest_labels = train_y[nearest_idx]\nprint(f"\\nK={k} nearest neighbors: {nearest_idx}")\nprint(f"Neighbor classes: {nearest_labels}")\nprint(f"Prediction: Class {np.bincount(nearest_labels).argmax()}")\n\nprint(f"\\n=== Scikit-learn Code ===")\nprint("from sklearn.neighbors import KNeighborsClassifier")\nprint("from sklearn.tree import DecisionTreeClassifier")\nprint("\\nknn = KNeighborsClassifier(n_neighbors=3)")\nprint("knn.fit(X_train, y_train)")\nprint("predictions = knn.predict(X_test)")',
        expectedOutput: '=== KNN (K-Nearest Neighbors) ===\n1. 새 데이터가 들어오면\n2. 기존 데이터와의 거리를 계산\n3. 가장 가까운 K개의 이웃을 선택\n4. 다수결로 클래스를 결정\n\n새 데이터: [5 4]\n각 점과의 거리: [4.47 3.16 3.61 1.41 3.61 3.61]\n\nK=3일 때 가장 가까운 이웃: [3 2 5]\n이웃의 클래스: [1 0 1]\n예측 결과: 클래스 1\n\n=== Scikit-learn 코드 ===\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.tree import DecisionTreeClassifier\n\nknn = KNeighborsClassifier(n_neighbors=3)\nknn.fit(X_train, y_train)\npredictions = knn.predict(X_test)',
        expectedOutputEn: '=== KNN (K-Nearest Neighbors) ===\n1. When new data arrives\n2. Calculate distance to existing data\n3. Select the K nearest neighbors\n4. Decide class by majority vote\n\nNew data: [5 4]\nDistance to each point: [4.47 3.16 3.61 1.41 3.61 3.61]\n\nK=3 nearest neighbors: [3 2 5]\nNeighbor classes: [1 0 1]\nPrediction: Class 1\n\n=== Scikit-learn Code ===\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.tree import DecisionTreeClassifier\n\nknn = KNeighborsClassifier(n_neighbors=3)\nknn.fit(X_train, y_train)\npredictions = knn.predict(X_test)',
        tip: 'KNN에서 K값이 작으면 과적합(overfitting), 크면 과소적합(underfitting) 위험이 있습니다. 보통 홀수를 사용합니다.',
        tipEn: 'In KNN, a small K risks overfitting and a large K risks underfitting. Odd numbers are typically used.'
      },
      {
        title: '모델 평가와 성능 지표',
        titleEn: 'Model Evaluation and Performance Metrics',
        content: `머신러닝에서 모델의 성능을 정확히 평가하는 것은 매우 중요합니다.\n\n주요 평가 지표:\n- 정확도(Accuracy): 전체 중 맞춘 비율\n- 정밀도(Precision): 양성 예측 중 실제 양성 비율\n- 재현율(Recall): 실제 양성 중 양성으로 예측한 비율\n- F1 Score: 정밀도와 재현율의 조화 평균`,
        contentEn: `Accurately evaluating model performance is crucial in machine learning.\n\nKey evaluation metrics:\n- Accuracy: ratio of correct predictions out of total\n- Precision: ratio of true positives among positive predictions\n- Recall: ratio of positive predictions among actual positives\n- F1 Score: harmonic mean of precision and recall`,
        code: 'import numpy as np\n\n# 혼동 행렬 (Confusion Matrix) 시뮬레이션\nprint("=== 혼동 행렬 (Confusion Matrix) ===")\nprint("                  예측")\nprint("              양성    음성")\nprint("실제 양성 |  TP=45  | FN=5  |")\nprint("실제 음성 |  FP=10  | TN=40 |")\n\nTP, FN, FP, TN = 45, 5, 10, 40\ntotal = TP + FN + FP + TN\n\naccuracy = (TP + TN) / total\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nf1 = 2 * precision * recall / (precision + recall)\n\nprint(f"\\n=== 성능 지표 ===")\nprint(f"정확도 (Accuracy):  {accuracy:.2%}")\nprint(f"정밀도 (Precision): {precision:.2%}")\nprint(f"재현율 (Recall):    {recall:.2%}")\nprint(f"F1 Score:           {f1:.2%}")\n\nprint(f"\\n=== Scikit-learn 코드 ===")\nprint("from sklearn.metrics import (")\nprint("    accuracy_score, precision_score,")\nprint("    recall_score, f1_score,")\nprint("    confusion_matrix, classification_report")\nprint(")")\nprint("\\nprint(classification_report(y_test, y_pred))")\nprint("# → 정밀도, 재현율, F1을 한번에 출력")',
        codeEn: 'import numpy as np\n\n# Confusion Matrix Simulation\nprint("=== Confusion Matrix ===")\nprint("                  Predicted")\nprint("              Positive  Negative")\nprint("Actual Pos |  TP=45  | FN=5  |")\nprint("Actual Neg |  FP=10  | TN=40 |")\n\nTP, FN, FP, TN = 45, 5, 10, 40\ntotal = TP + FN + FP + TN\n\naccuracy = (TP + TN) / total\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nf1 = 2 * precision * recall / (precision + recall)\n\nprint(f"\\n=== Performance Metrics ===")\nprint(f"Accuracy:  {accuracy:.2%}")\nprint(f"Precision: {precision:.2%}")\nprint(f"Recall:    {recall:.2%}")\nprint(f"F1 Score:  {f1:.2%}")\n\nprint(f"\\n=== Scikit-learn Code ===")\nprint("from sklearn.metrics import (")\nprint("    accuracy_score, precision_score,")\nprint("    recall_score, f1_score,")\nprint("    confusion_matrix, classification_report")\nprint(")")\nprint("\\nprint(classification_report(y_test, y_pred))")\nprint("# → Prints precision, recall, F1 at once")',
        expectedOutput: '=== 혼동 행렬 (Confusion Matrix) ===\n                  예측\n              양성    음성\n실제 양성 |  TP=45  | FN=5  |\n실제 음성 |  FP=10  | TN=40 |\n\n=== 성능 지표 ===\n정확도 (Accuracy):  85.00%\n정밀도 (Precision): 81.82%\n재현율 (Recall):    90.00%\nF1 Score:           85.71%\n\n=== Scikit-learn 코드 ===\nfrom sklearn.metrics import (\n    accuracy_score, precision_score,\n    recall_score, f1_score,\n    confusion_matrix, classification_report\n)\n\nprint(classification_report(y_test, y_pred))\n# → 정밀도, 재현율, F1을 한번에 출력',
        expectedOutputEn: '=== Confusion Matrix ===\n                  Predicted\n              Positive  Negative\nActual Pos |  TP=45  | FN=5  |\nActual Neg |  FP=10  | TN=40 |\n\n=== Performance Metrics ===\nAccuracy:  85.00%\nPrecision: 81.82%\nRecall:    90.00%\nF1 Score:  85.71%\n\n=== Scikit-learn Code ===\nfrom sklearn.metrics import (\n    accuracy_score, precision_score,\n    recall_score, f1_score,\n    confusion_matrix, classification_report\n)\n\nprint(classification_report(y_test, y_pred))\n# → Prints precision, recall, F1 at once',
        tip: '불균형 데이터셋에서는 정확도보다 F1 Score나 AUC-ROC가 더 좋은 평가 지표입니다.',
        tipEn: 'For imbalanced datasets, F1 Score or AUC-ROC are better metrics than accuracy.'
      }
    ]
  },

  'tensorflow-pytorch': {
    sections: [
      {
        title: '딥러닝과 신경망 기초',
        titleEn: 'Deep Learning and Neural Network Basics',
        content: `딥러닝은 인공 신경망을 여러 층으로 쌓아 복잡한 패턴을 학습하는 기술입니다.\n\n핵심 구성 요소:\n- 뉴런(Neuron): 입력에 가중치를 곱하고 활성화 함수를 적용\n- 층(Layer): 뉴런의 집합 (입력층, 은닉층, 출력층)\n- 역전파(Backpropagation): 오차를 역방향으로 전파하여 가중치 업데이트`,
        contentEn: `Deep learning is a technique that learns complex patterns by stacking multiple layers of artificial neural networks.\n\nKey components:\n- Neuron: multiplies inputs by weights and applies an activation function\n- Layer: a collection of neurons (input layer, hidden layer, output layer)\n- Backpropagation: propagates errors backward to update weights`,
        code: 'import numpy as np\n\n# 단일 뉴런 시뮬레이션\nprint("=== 단일 뉴런 동작 원리 ===")\n\n# 입력과 가중치\ninputs = np.array([0.5, 0.3, 0.2])\nweights = np.array([0.4, 0.6, 0.8])\nbias = 0.1\n\n# 가중합 계산\nweighted_sum = np.dot(inputs, weights) + bias\nprint(f"입력: {inputs}")\nprint(f"가중치: {weights}")\nprint(f"편향: {bias}")\nprint(f"가중합: {inputs[0]}*{weights[0]} + {inputs[1]}*{weights[1]} + {inputs[2]}*{weights[2]} + {bias}")\nprint(f"       = {weighted_sum:.2f}")\n\n# 활성화 함수 (ReLU, Sigmoid)\ndef relu(x): return max(0, x)\ndef sigmoid(x): return 1 / (1 + np.exp(-x))\n\nprint(f"\\nReLU({weighted_sum:.2f}) = {relu(weighted_sum):.2f}")\nprint(f"Sigmoid({weighted_sum:.2f}) = {sigmoid(weighted_sum):.4f}")\n\nprint(f"\\n=== 주요 활성화 함수 ===")\nprint("ReLU:    max(0, x)  → 가장 많이 사용")\nprint("Sigmoid: 1/(1+e^-x) → 이진 분류 출력")\nprint("Softmax: e^x/sum    → 다중 분류 출력")\nprint("Tanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위")',
        codeEn: 'import numpy as np\n\n# Single Neuron Simulation\nprint("=== How a Single Neuron Works ===")\n\n# Inputs and weights\ninputs = np.array([0.5, 0.3, 0.2])\nweights = np.array([0.4, 0.6, 0.8])\nbias = 0.1\n\n# Weighted sum\nweighted_sum = np.dot(inputs, weights) + bias\nprint(f"Inputs: {inputs}")\nprint(f"Weights: {weights}")\nprint(f"Bias: {bias}")\nprint(f"Weighted sum: {inputs[0]}*{weights[0]} + {inputs[1]}*{weights[1]} + {inputs[2]}*{weights[2]} + {bias}")\nprint(f"            = {weighted_sum:.2f}")\n\n# Activation functions (ReLU, Sigmoid)\ndef relu(x): return max(0, x)\ndef sigmoid(x): return 1 / (1 + np.exp(-x))\n\nprint(f"\\nReLU({weighted_sum:.2f}) = {relu(weighted_sum):.2f}")\nprint(f"Sigmoid({weighted_sum:.2f}) = {sigmoid(weighted_sum):.4f}")\n\nprint(f"\\n=== Key Activation Functions ===")\nprint("ReLU:    max(0, x)  → Most commonly used")\nprint("Sigmoid: 1/(1+e^-x) → Binary classification output")\nprint("Softmax: e^x/sum    → Multi-class output")\nprint("Tanh:    (e^x-e^-x)/(e^x+e^-x) → Range -1 to 1")',
        expectedOutput: '=== 단일 뉴런 동작 원리 ===\n입력: [0.5 0.3 0.2]\n가중치: [0.4 0.6 0.8]\n편향: 0.1\n가중합: 0.5*0.4 + 0.3*0.6 + 0.2*0.8 + 0.1\n       = 0.64\n\nReLU(0.64) = 0.64\nSigmoid(0.64) = 0.6547\n\n=== 주요 활성화 함수 ===\nReLU:    max(0, x)  → 가장 많이 사용\nSigmoid: 1/(1+e^-x) → 이진 분류 출력\nSoftmax: e^x/sum    → 다중 분류 출력\nTanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위',
        expectedOutputEn: '=== How a Single Neuron Works ===\nInputs: [0.5 0.3 0.2]\nWeights: [0.4 0.6 0.8]\nBias: 0.1\nWeighted sum: 0.5*0.4 + 0.3*0.6 + 0.2*0.8 + 0.1\n            = 0.64\n\nReLU(0.64) = 0.64\nSigmoid(0.64) = 0.6547\n\n=== Key Activation Functions ===\nReLU:    max(0, x)  → Most commonly used\nSigmoid: 1/(1+e^-x) → Binary classification output\nSoftmax: e^x/sum    → Multi-class output\nTanh:    (e^x-e^-x)/(e^x+e^-x) → Range -1 to 1',
        tip: 'ReLU는 계산이 빠르고 기울기 소실 문제를 해결하여 은닉층에서 가장 많이 사용됩니다.',
        tipEn: 'ReLU is the most commonly used activation function in hidden layers because it is fast to compute and solves the vanishing gradient problem.'
      },
      {
        title: 'TensorFlow / Keras 모델 구성',
        titleEn: 'TensorFlow / Keras Model Building',
        content: `TensorFlow는 Google이 개발한 딥러닝 프레임워크입니다.\nKeras는 TensorFlow의 고수준 API로, 직관적인 모델 구성을 제공합니다.\n\nSequential 모델은 층을 순서대로 쌓는 가장 기본적인 방법입니다.`,
        contentEn: `TensorFlow is a deep learning framework developed by Google.\nKeras is TensorFlow's high-level API, providing intuitive model building.\n\nThe Sequential model is the most basic way to stack layers in order.`,
        code: 'import numpy as np\n\n# TensorFlow/Keras 모델 구조 설명\nprint("=== TensorFlow/Keras Sequential 모델 ===")\nprint()\nprint("import tensorflow as tf")\nprint("from tensorflow import keras")\nprint()\nprint("model = keras.Sequential([")\nprint("    keras.layers.Dense(128, activation=\'relu\', input_shape=(784,)),")\nprint("    keras.layers.Dropout(0.2),")\nprint("    keras.layers.Dense(64, activation=\'relu\'),")\nprint("    keras.layers.Dense(10, activation=\'softmax\')")\nprint("])")\nprint()\nprint("model.compile(")\nprint("    optimizer=\'adam\',")\nprint("    loss=\'sparse_categorical_crossentropy\',")\nprint("    metrics=[\'accuracy\']")\nprint(")")\nprint()\nprint("model.fit(X_train, y_train, epochs=10, batch_size=32)")\n\n# 모델 구조 시뮬레이션\nprint("\\n=== 모델 구조 요약 ===")\nlayers = [\n    ("Dense (입력층)", 784, 128, 784*128+128),\n    ("Dropout", 128, 128, 0),\n    ("Dense (은닉층)", 128, 64, 128*64+64),\n    ("Dense (출력층)", 64, 10, 64*10+10)\n]\ntotal_params = 0\nprint(f"{\'Layer\':20s} {\'Output Shape\':15s} {\'Params\':>10s}")\nprint("-" * 48)\nfor name, inp, out, params in layers:\n    print(f"{name:20s} (None, {out:>4d})     {params:>10,}")\n    total_params += params\nprint("-" * 48)\nprint(f"{\'Total\':20s} {\'\':<15s} {total_params:>10,}")',
        codeEn: 'import numpy as np\n\n# TensorFlow/Keras model structure explanation\nprint("=== TensorFlow/Keras Sequential Model ===")\nprint()\nprint("import tensorflow as tf")\nprint("from tensorflow import keras")\nprint()\nprint("model = keras.Sequential([")\nprint("    keras.layers.Dense(128, activation=\'relu\', input_shape=(784,)),")\nprint("    keras.layers.Dropout(0.2),")\nprint("    keras.layers.Dense(64, activation=\'relu\'),")\nprint("    keras.layers.Dense(10, activation=\'softmax\')")\nprint("])")\nprint()\nprint("model.compile(")\nprint("    optimizer=\'adam\',")\nprint("    loss=\'sparse_categorical_crossentropy\',")\nprint("    metrics=[\'accuracy\']")\nprint(")")\nprint()\nprint("model.fit(X_train, y_train, epochs=10, batch_size=32)")\n\n# Model structure simulation\nprint("\\n=== Model Summary ===")\nlayers = [\n    ("Dense (Input)", 784, 128, 784*128+128),\n    ("Dropout", 128, 128, 0),\n    ("Dense (Hidden)", 128, 64, 128*64+64),\n    ("Dense (Output)", 64, 10, 64*10+10)\n]\ntotal_params = 0\nprint(f"{\'Layer\':20s} {\'Output Shape\':15s} {\'Params\':>10s}")\nprint("-" * 48)\nfor name, inp, out, params in layers:\n    print(f"{name:20s} (None, {out:>4d})     {params:>10,}")\n    total_params += params\nprint("-" * 48)\nprint(f"{\'Total\':20s} {\'\':<15s} {total_params:>10,}")',
        expectedOutput: '=== TensorFlow/Keras Sequential 모델 ===\n\nimport tensorflow as tf\nfrom tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(128, activation=\'relu\', input_shape=(784,)),\n    keras.layers.Dropout(0.2),\n    keras.layers.Dense(64, activation=\'relu\'),\n    keras.layers.Dense(10, activation=\'softmax\')\n])\n\nmodel.compile(\n    optimizer=\'adam\',\n    loss=\'sparse_categorical_crossentropy\',\n    metrics=[\'accuracy\']\n)\n\nmodel.fit(X_train, y_train, epochs=10, batch_size=32)\n\n=== 모델 구조 요약 ===\nLayer                Output Shape        Params\n------------------------------------------------\nDense (입력층)       (None,  128)       100,480\nDropout              (None,  128)             0\nDense (은닉층)       (None,   64)         8,256\nDense (출력층)       (None,   10)           650\n------------------------------------------------\nTotal                                   109,386',
        expectedOutputEn: '=== TensorFlow/Keras Sequential Model ===\n\nimport tensorflow as tf\nfrom tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(128, activation=\'relu\', input_shape=(784,)),\n    keras.layers.Dropout(0.2),\n    keras.layers.Dense(64, activation=\'relu\'),\n    keras.layers.Dense(10, activation=\'softmax\')\n])\n\nmodel.compile(\n    optimizer=\'adam\',\n    loss=\'sparse_categorical_crossentropy\',\n    metrics=[\'accuracy\']\n)\n\nmodel.fit(X_train, y_train, epochs=10, batch_size=32)\n\n=== Model Summary ===\nLayer                Output Shape        Params\n------------------------------------------------\nDense (Input)        (None,  128)       100,480\nDropout              (None,  128)             0\nDense (Hidden)       (None,   64)         8,256\nDense (Output)       (None,   10)           650\n------------------------------------------------\nTotal                                   109,386',
        tip: 'Dense 층의 파라미터 수 = (입력 수 * 출력 수) + 출력 수(편향). Dropout은 학습 시 일부 뉴런을 무작위로 비활성화하여 과적합을 방지합니다.',
        tipEn: 'Dense layer parameters = (inputs * outputs) + outputs (bias). Dropout randomly deactivates some neurons during training to prevent overfitting.'
      },
      {
        title: 'PyTorch 기초와 학습 루프',
        titleEn: 'PyTorch Basics and Training Loop',
        content: `PyTorch는 Facebook(Meta)이 개발한 딥러닝 프레임워크입니다.\n동적 계산 그래프를 사용하여 디버깅이 쉽고 연구에 많이 사용됩니다.\n\nTensorFlow와 달리 학습 루프를 직접 작성하여 더 세밀한 제어가 가능합니다.`,
        contentEn: `PyTorch is a deep learning framework developed by Facebook (Meta).\nIt uses dynamic computation graphs, making debugging easy and is widely used in research.\n\nUnlike TensorFlow, you write the training loop manually, allowing finer control.`,
        code: 'import numpy as np\n\n# PyTorch 모델 구조 설명\nprint("=== PyTorch 모델 정의 ===")\nprint()\nprint("import torch")\nprint("import torch.nn as nn")\nprint("import torch.optim as optim")\nprint()\nprint("class MyModel(nn.Module):")\nprint("    def __init__(self):")\nprint("        super().__init__()")\nprint("        self.fc1 = nn.Linear(784, 128)")\nprint("        self.fc2 = nn.Linear(128, 64)")\nprint("        self.fc3 = nn.Linear(64, 10)")\nprint("        self.relu = nn.ReLU()")\nprint()\nprint("    def forward(self, x):")\nprint("        x = self.relu(self.fc1(x))")\nprint("        x = self.relu(self.fc2(x))")\nprint("        return self.fc3(x)")\n\nprint("\\n=== PyTorch 학습 루프 ===")\nprint("model = MyModel()")\nprint("criterion = nn.CrossEntropyLoss()")\nprint("optimizer = optim.Adam(model.parameters(), lr=0.001)")\nprint()\nprint("for epoch in range(10):")\nprint("    optimizer.zero_grad()      # 기울기 초기화")\nprint("    outputs = model(X_train)   # 순전파")\nprint("    loss = criterion(outputs, y_train)  # 손실 계산")\nprint("    loss.backward()            # 역전파")\nprint("    optimizer.step()           # 가중치 업데이트")\n\n# 학습 시뮬레이션\nprint("\\n=== 학습 과정 시뮬레이션 ===")\nnp.random.seed(42)\nfor epoch in range(1, 11):\n    loss = 2.5 * np.exp(-0.3 * epoch) + np.random.uniform(-0.05, 0.05)\n    acc = min(0.99, 0.5 + 0.05 * epoch + np.random.uniform(-0.02, 0.02))\n    if epoch % 2 == 0 or epoch == 1:\n        print(f"Epoch {epoch:2d}/10 - Loss: {loss:.4f} - Accuracy: {acc:.2%}")',
        codeEn: 'import numpy as np\n\n# PyTorch model structure explanation\nprint("=== PyTorch Model Definition ===")\nprint()\nprint("import torch")\nprint("import torch.nn as nn")\nprint("import torch.optim as optim")\nprint()\nprint("class MyModel(nn.Module):")\nprint("    def __init__(self):")\nprint("        super().__init__()")\nprint("        self.fc1 = nn.Linear(784, 128)")\nprint("        self.fc2 = nn.Linear(128, 64)")\nprint("        self.fc3 = nn.Linear(64, 10)")\nprint("        self.relu = nn.ReLU()")\nprint()\nprint("    def forward(self, x):")\nprint("        x = self.relu(self.fc1(x))")\nprint("        x = self.relu(self.fc2(x))")\nprint("        return self.fc3(x)")\n\nprint("\\n=== PyTorch Training Loop ===")\nprint("model = MyModel()")\nprint("criterion = nn.CrossEntropyLoss()")\nprint("optimizer = optim.Adam(model.parameters(), lr=0.001)")\nprint()\nprint("for epoch in range(10):")\nprint("    optimizer.zero_grad()      # Reset gradients")\nprint("    outputs = model(X_train)   # Forward pass")\nprint("    loss = criterion(outputs, y_train)  # Compute loss")\nprint("    loss.backward()            # Backpropagation")\nprint("    optimizer.step()           # Update weights")\n\n# Training simulation\nprint("\\n=== Training Simulation ===")\nnp.random.seed(42)\nfor epoch in range(1, 11):\n    loss = 2.5 * np.exp(-0.3 * epoch) + np.random.uniform(-0.05, 0.05)\n    acc = min(0.99, 0.5 + 0.05 * epoch + np.random.uniform(-0.02, 0.02))\n    if epoch % 2 == 0 or epoch == 1:\n        print(f"Epoch {epoch:2d}/10 - Loss: {loss:.4f} - Accuracy: {acc:.2%}")',
        expectedOutput: '=== PyTorch 모델 정의 ===\n\nimport torch\nimport torch.nn as nn\nimport torch.optim as optim\n\nclass MyModel(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(784, 128)\n        self.fc2 = nn.Linear(128, 64)\n        self.fc3 = nn.Linear(64, 10)\n        self.relu = nn.ReLU()\n\n    def forward(self, x):\n        x = self.relu(self.fc1(x))\n        x = self.relu(self.fc2(x))\n        return self.fc3(x)\n\n=== PyTorch 학습 루프 ===\nmodel = MyModel()\ncriterion = nn.CrossEntropyLoss()\noptimizer = optim.Adam(model.parameters(), lr=0.001)\n\nfor epoch in range(10):\n    optimizer.zero_grad()      # 기울기 초기화\n    outputs = model(X_train)   # 순전파\n    loss = criterion(outputs, y_train)  # 손실 계산\n    loss.backward()            # 역전파\n    optimizer.step()           # 가중치 업데이트\n\n=== 학습 과정 시뮬레이션 ===\nEpoch  1/10 - Loss: 1.8044 - Accuracy: 54.37%\nEpoch  2/10 - Loss: 1.3549 - Accuracy: 60.89%\nEpoch  4/10 - Loss: 0.7789 - Accuracy: 69.03%\nEpoch  6/10 - Loss: 0.4423 - Accuracy: 80.42%\nEpoch  8/10 - Loss: 0.2609 - Accuracy: 89.85%\nEpoch 10/10 - Loss: 0.1484 - Accuracy: 98.71%',
        expectedOutputEn: '=== PyTorch Model Definition ===\n\nimport torch\nimport torch.nn as nn\nimport torch.optim as optim\n\nclass MyModel(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(784, 128)\n        self.fc2 = nn.Linear(128, 64)\n        self.fc3 = nn.Linear(64, 10)\n        self.relu = nn.ReLU()\n\n    def forward(self, x):\n        x = self.relu(self.fc1(x))\n        x = self.relu(self.fc2(x))\n        return self.fc3(x)\n\n=== PyTorch Training Loop ===\nmodel = MyModel()\ncriterion = nn.CrossEntropyLoss()\noptimizer = optim.Adam(model.parameters(), lr=0.001)\n\nfor epoch in range(10):\n    optimizer.zero_grad()      # Reset gradients\n    outputs = model(X_train)   # Forward pass\n    loss = criterion(outputs, y_train)  # Compute loss\n    loss.backward()            # Backpropagation\n    optimizer.step()           # Update weights\n\n=== Training Simulation ===\nEpoch  1/10 - Loss: 1.8044 - Accuracy: 54.37%\nEpoch  2/10 - Loss: 1.3549 - Accuracy: 60.89%\nEpoch  4/10 - Loss: 0.7789 - Accuracy: 69.03%\nEpoch  6/10 - Loss: 0.4423 - Accuracy: 80.42%\nEpoch  8/10 - Loss: 0.2609 - Accuracy: 89.85%\nEpoch 10/10 - Loss: 0.1484 - Accuracy: 98.71%',
        tip: 'TensorFlow는 프로덕션 배포에, PyTorch는 연구/프로토타이핑에 많이 사용됩니다. 최근에는 두 프레임워크 모두 기능이 비슷해지고 있습니다.',
        tipEn: 'TensorFlow is widely used for production deployment, while PyTorch is popular for research/prototyping. Recently, both frameworks have become similar in capabilities.'
      }
    ]
  }
}
