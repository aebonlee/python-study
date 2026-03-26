import{r as h,u as z,e as I,b as B,j as n,d as X,l as G,L as P,c as Y}from"./index-2qF5436M.js";import{u as V}from"./useCodeRunner-CqSDQaI4.js";const $={"hello-python":{sections:[{title:"print() 함수로 출력하기",titleEn:"Printing with print()",content:`파이썬에서 가장 먼저 배우는 것은 화면에 텍스트를 출력하는 것입니다.
print() 함수를 사용하면 원하는 내용을 콘솔에 출력할 수 있습니다.

문자열은 작은따옴표(') 또는 큰따옴표(")로 감싸서 표현합니다.`,contentEn:`The first thing you learn in Python is how to output text to the screen.
Using the print() function, you can display any content to the console.

Strings are expressed by wrapping them in single quotes (') or double quotes (").`,code:`# 첫 번째 파이썬 프로그램!
print("Hello, Python!")
print('반갑습니다!')`,codeEn:`# My first Python program!
print("Hello, Python!")
print('Nice to meet you!')`,expectedOutput:`Hello, Python!
반갑습니다!`,expectedOutputEn:`Hello, Python!
Nice to meet you!`,tip:"print() 함수는 괄호 안의 내용을 콘솔에 출력합니다. 문자열은 따옴표로 감싸야 합니다.",tipEn:"The print() function outputs the content inside the parentheses to the console. Strings must be wrapped in quotes."},{title:"여러 값 출력하기",titleEn:"Printing Multiple Values",content:`print() 함수에 여러 값을 쉼표로 구분하여 전달할 수 있습니다.
기본적으로 각 값 사이에 공백이 추가됩니다.

sep 매개변수로 구분자를, end 매개변수로 줄끝 문자를 변경할 수 있습니다.`,contentEn:`You can pass multiple values to the print() function, separated by commas.
By default, a space is added between each value.

You can change the separator with the sep parameter and the line ending character with the end parameter.`,code:`print("이름:", "파이썬")
print("버전:", 3.12)
print("A", "B", "C", sep="-")
print("끝!", end=" 끝!")
print()`,codeEn:`print("Name:", "Python")
print("Version:", 3.12)
print("A", "B", "C", sep="-")
print("Done!", end=" Done!")
print()`,expectedOutput:`이름: 파이썬
버전: 3.12
A-B-C
끝! 끝!`,expectedOutputEn:`Name: Python
Version: 3.12
A-B-C
Done! Done!`,tip:"sep은 구분자(separator), end는 출력 끝에 붙는 문자를 지정합니다.",tipEn:"sep specifies the separator between values, and end specifies the character appended at the end of the output."},{title:"주석 작성하기",titleEn:"Writing Comments",content:`주석은 코드에 설명을 추가하는 방법입니다.
파이썬은 # 기호 뒤의 내용을 무시합니다.

여러 줄 주석은 큰따옴표 세 개(\\"\\"\\"...\\"\\"\\"\\")를 사용합니다.`,contentEn:`Comments are a way to add explanations to your code.
Python ignores everything after the # symbol.

Multi-line comments use triple double quotes (\\"\\"\\"...\\"\\"\\"\\").`,code:`# 이것은 한 줄 주석입니다
print("주석은 실행되지 않습니다")  # 코드 옆에도 가능

# 아래는 여러 줄 주석 예시
"""
이렇게 여러 줄에
걸쳐서 주석을
작성할 수 있습니다
"""
print("프로그램 완료!")`,codeEn:`# This is a single-line comment
print("Comments are not executed")  # Can also go next to code

# Below is a multi-line comment example
"""
You can write comments
that span multiple
lines like this
"""
print("Program complete!")`,expectedOutput:`주석은 실행되지 않습니다
프로그램 완료!`,expectedOutputEn:`Comments are not executed
Program complete!`,tip:'좋은 주석은 "왜" 그렇게 했는지를 설명합니다. 코드 자체가 "무엇을" 하는지는 이미 보여주니까요.',tipEn:'Good comments explain "why" something was done. The code itself already shows "what" it does.'}]},variables:{sections:[{title:"변수 선언과 할당",titleEn:"Variable Declaration and Assignment",content:`변수는 데이터를 저장하는 이름표입니다.
파이썬에서는 = 기호를 사용하여 변수에 값을 할당합니다.

다른 언어와 달리 파이썬은 변수의 타입을 미리 선언할 필요가 없습니다.`,contentEn:`A variable is a label that stores data.
In Python, you use the = sign to assign a value to a variable.

Unlike other languages, Python does not require you to declare the variable type in advance.`,code:`# 변수에 값 할당
name = "파이썬"
age = 30
pi = 3.14159
is_fun = True

print(name)
print(age)
print(pi)
print(is_fun)`,codeEn:`# Assigning values to variables
name = "Python"
age = 30
pi = 3.14159
is_fun = True

print(name)
print(age)
print(pi)
print(is_fun)`,expectedOutput:`파이썬
30
3.14159
True`,expectedOutputEn:`Python
30
3.14159
True`,tip:"변수 이름은 영문자, 숫자, 밑줄(_)을 사용할 수 있으며, 숫자로 시작할 수 없습니다.",tipEn:"Variable names can use letters, numbers, and underscores (_), but cannot start with a number."},{title:"기본 자료형",titleEn:"Basic Data Types",content:`파이썬의 기본 자료형은 다음과 같습니다:

- int: 정수 (1, 42, -10)
- float: 실수 (3.14, -0.5)
- str: 문자열 ("Hello")
- bool: 불리언 (True, False)
- NoneType: 값이 없음 (None)

type() 함수로 변수의 자료형을 확인할 수 있습니다.`,contentEn:`Python's basic data types are as follows:

- int: integers (1, 42, -10)
- float: floating-point numbers (3.14, -0.5)
- str: strings ("Hello")
- bool: booleans (True, False)
- NoneType: no value (None)

You can check a variable's data type using the type() function.`,code:`x = 42
y = 3.14
z = "Hello"
w = True
n = None

print(type(x))
print(type(y))
print(type(z))
print(type(w))
print(type(n))`,expectedOutput:`<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`,tip:"파이썬은 동적 타이핑 언어입니다. 같은 변수에 다른 타입의 값을 재할당할 수 있습니다.",tipEn:"Python is a dynamically typed language. You can reassign a different type of value to the same variable."},{title:"형 변환",titleEn:"Type Conversion",content:`서로 다른 자료형 간 변환이 필요할 때 형 변환 함수를 사용합니다.

- int(): 정수로 변환
- float(): 실수로 변환
- str(): 문자열로 변환
- bool(): 불리언으로 변환`,contentEn:`When you need to convert between different data types, use type conversion functions.

- int(): convert to integer
- float(): convert to floating-point number
- str(): convert to string
- bool(): convert to boolean`,code:`# 형 변환 예제
num_str = "42"
num = int(num_str)
print(num + 8)

pi = 3.14
print(int(pi))

result = str(100)
print("점수: " + result)`,codeEn:`# Type conversion example
num_str = "42"
num = int(num_str)
print(num + 8)

pi = 3.14
print(int(pi))

result = str(100)
print("Score: " + result)`,expectedOutput:`50
3
점수: 100`,expectedOutputEn:`50
3
Score: 100`,tip:"int()로 소수를 변환하면 소수점 이하가 버려집니다 (반올림이 아님).",tipEn:"When converting a decimal with int(), the fractional part is truncated (not rounded)."},{title:"input() 함수로 입력받기",titleEn:"Getting Input with input()",content:`input() 함수는 사용자로부터 키보드 입력을 받습니다.
항상 문자열(str)을 반환하므로, 숫자로 사용하려면 int()나 float()로 변환해야 합니다.

형식: 변수 = input("프롬프트 메시지")

아래 코드를 실행하면 입력 창이 나타납니다. 값을 입력해보세요!`,contentEn:`The input() function receives keyboard input from the user.
It always returns a string (str), so you need to convert it with int() or float() to use it as a number.

Format: variable = input("prompt message")

When you run the code below, an input field will appear. Try entering a value!`,code:`# input() 함수 사용법
name = input("이름을 입력하세요: ")
age = int(input("나이를 입력하세요: "))

print(f"안녕하세요, {name}님!")
print(f"내년에 {age + 1}살이 되시네요!")`,codeEn:`# How to use the input() function
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello, {name}!")
print(f"You will be {age + 1} years old next year!")`,expectedOutput:`안녕하세요, 파이썬님!
내년에 21살이 되시네요!`,expectedOutputEn:`Hello, Python!
You will be 21 years old next year!`,tip:"input()은 항상 문자열을 반환합니다. 숫자 계산이 필요하면 int() 또는 float()로 변환하세요.",tipEn:"input() always returns a string. If you need numerical calculations, convert it with int() or float()."}]},operators:{sections:[{title:"산술 연산자",titleEn:"Arithmetic Operators",content:`파이썬의 산술 연산자로 수학 계산을 수행할 수 있습니다.

+ 덧셈, - 뺄셈, * 곱셈, / 나눗셈
// 정수 나눗셈, % 나머지, ** 거듭제곱`,contentEn:`You can perform mathematical calculations using Python's arithmetic operators.

+ addition, - subtraction, * multiplication, / division
// floor division, % modulus (remainder), ** exponentiation`,code:`print(10 + 3)   # 덧셈
print(10 - 3)   # 뺄셈
print(10 * 3)   # 곱셈
print(10 / 3)   # 나눗셈
print(10 // 3)  # 정수 나눗셈
print(10 % 3)   # 나머지
print(2 ** 10)  # 거듭제곱`,codeEn:`print(10 + 3)   # Addition
print(10 - 3)   # Subtraction
print(10 * 3)   # Multiplication
print(10 / 3)   # Division
print(10 // 3)  # Floor division
print(10 % 3)   # Modulus
print(2 ** 10)  # Exponentiation`,expectedOutput:`13
7
30
3.3333333333333335
3
1
1024`,tip:"/ 는 항상 float을 반환하고, //는 정수 나눗셈(몫)을 반환합니다.",tipEn:"/ always returns a float, while // returns the floor division result (quotient)."},{title:"비교 및 논리 연산자",titleEn:"Comparison and Logical Operators",content:`비교 연산자는 두 값을 비교하여 True 또는 False를 반환합니다.

==  같다, != 다르다, > 크다, < 작다, >= 이상, <= 이하

논리 연산자: and, or, not`,contentEn:`Comparison operators compare two values and return True or False.

== equal to, != not equal to, > greater than, < less than, >= greater than or equal, <= less than or equal

Logical operators: and, or, not`,code:`x = 10
print(x > 5)
print(x == 10)
print(x != 5)

# 논리 연산자
print(x > 5 and x < 20)
print(x > 100 or x == 10)
print(not x > 100)`,codeEn:`x = 10
print(x > 5)
print(x == 10)
print(x != 5)

# Logical operators
print(x > 5 and x < 20)
print(x > 100 or x == 10)
print(not x > 100)`,expectedOutput:`True
True
True
True
True
True`,tip:"파이썬에서는 5 < x < 20처럼 연속 비교가 가능합니다!",tipEn:"In Python, chained comparisons like 5 < x < 20 are supported!"}]},strings:{sections:[{title:"문자열 인덱싱과 슬라이싱",titleEn:"String Indexing and Slicing",content:`문자열의 각 문자는 인덱스(위치 번호)로 접근할 수 있습니다.
인덱스는 0부터 시작하며, 음수 인덱스는 뒤에서부터 셉니다.

슬라이싱은 [시작:끝:간격] 형태로 부분 문자열을 추출합니다.`,contentEn:`Each character in a string can be accessed by its index (position number).
Indexing starts at 0, and negative indices count from the end.

Slicing extracts a substring using the format [start:end:step].`,code:`text = "Python"
print(text[0])    # 첫 번째 문자
print(text[-1])   # 마지막 문자
print(text[0:3])  # 슬라이싱
print(text[::2])  # 2칸씩 건너뛰기
print(text[::-1]) # 뒤집기`,codeEn:`text = "Python"
print(text[0])    # First character
print(text[-1])   # Last character
print(text[0:3])  # Slicing
print(text[::2])  # Every 2nd character
print(text[::-1]) # Reverse`,expectedOutput:`P
n
Pyt
Pto
nohtyP`,tip:"슬라이싱에서 끝 인덱스는 포함되지 않습니다. text[0:3]은 인덱스 0,1,2의 문자입니다.",tipEn:"In slicing, the end index is not included. text[0:3] gives the characters at indices 0, 1, and 2."},{title:"f-string 포매팅",titleEn:"f-string Formatting",content:`f-string은 파이썬 3.6+에서 도입된 문자열 포매팅 방법입니다.
문자열 앞에 f를 붙이고, 중괄호 {} 안에 변수나 표현식을 넣습니다.

서식 지정도 가능합니다: {값:서식}`,contentEn:`f-strings are a string formatting method introduced in Python 3.6+.
Prefix the string with f, and place variables or expressions inside curly braces {}.

Format specifiers are also supported: {value:format}`,code:`name = "파이썬"
version = 3.12

print(f"안녕, {name}!")
print(f"버전: {version}")
print(f"계산: {2 + 3 = }")
print(f"파이: {3.14159:.2f}")
print(f"이름: {name:>10}")`,codeEn:`name = "Python"
version = 3.12

print(f"Hello, {name}!")
print(f"Version: {version}")
print(f"Calculation: {2 + 3 = }")
print(f"Pi: {3.14159:.2f}")
print(f"Name: {name:>10}")`,expectedOutput:`안녕, 파이썬!
버전: 3.12
계산: 2 + 3 = 5
파이: 3.14
이름:       파이썬`,expectedOutputEn:`Hello, Python!
Version: 3.12
Calculation: 2 + 3 = 5
Pi: 3.14
Name:     Python`,tip:"f-string 안에서 표현식도 사용 가능합니다. {2+3}은 5로 치환됩니다.",tipEn:"Expressions can also be used inside f-strings. {2+3} is replaced with 5."},{title:"문자열 메서드",titleEn:"String Methods",content:`파이썬 문자열은 다양한 내장 메서드를 제공합니다.

주요 메서드: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,contentEn:`Python strings provide a variety of built-in methods.

Key methods: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,code:`text = "  Hello, Python World!  "
print(text.strip())
print(text.strip().upper())
print(text.strip().lower())
print(text.strip().split(", "))
print("-".join(["a", "b", "c"]))
print(text.count("l"))`,expectedOutput:`Hello, Python World!
HELLO, PYTHON WORLD!
hello, python world!
['Hello', 'Python World!']
a-b-c
3`,tip:"문자열 메서드는 원본을 변경하지 않고 새 문자열을 반환합니다.",tipEn:"String methods do not modify the original string; they return a new string."}]},conditionals:{sections:[{title:"if / elif / else",titleEn:"if / elif / else",content:`조건문은 조건에 따라 다른 코드를 실행합니다.
if 조건이 True이면 해당 블록을 실행하고, 아니면 elif나 else로 넘어갑니다.

파이썬은 들여쓰기(인덴트)로 코드 블록을 구분합니다.`,contentEn:`Conditional statements execute different code depending on conditions.
If the if condition is True, its block is executed; otherwise, it moves on to elif or else.

Python uses indentation to define code blocks.`,code:`score = 85

if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("재수강")

print(f"점수: {score}점")`,codeEn:`score = 85

if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
else:
    print("Retake")

print(f"Score: {score} points")`,expectedOutput:`B학점
점수: 85점`,expectedOutputEn:`Grade B
Score: 85 points`,tip:"파이썬은 중괄호 대신 들여쓰기(보통 스페이스 4칸)로 블록을 구분합니다.",tipEn:"Python uses indentation (usually 4 spaces) instead of curly braces to define blocks."},{title:"조건 표현식 (삼항 연산자)",titleEn:"Conditional Expression (Ternary Operator)",content:`파이썬의 삼항 연산자는 한 줄로 조건문을 작성할 수 있게 해줍니다.

형식: 값1 if 조건 else 값2`,contentEn:`Python's ternary operator allows you to write a conditional statement in a single line.

Format: value1 if condition else value2`,code:`age = 20
status = "성인" if age >= 18 else "미성년"
print(f"나이: {age}, 상태: {status}")

# 중첩도 가능 (하지만 가독성 주의)
temp = 35
weather = "더움" if temp > 30 else "적당" if temp > 15 else "추움"
print(f"기온: {temp}도, 날씨: {weather}")`,codeEn:`age = 20
status = "Adult" if age >= 18 else "Minor"
print(f"Age: {age}, Status: {status}")

# Nesting is possible (but watch readability)
temp = 35
weather = "Hot" if temp > 30 else "Moderate" if temp > 15 else "Cold"
print(f"Temperature: {temp}°, Weather: {weather}")`,expectedOutput:`나이: 20, 상태: 성인
기온: 35도, 날씨: 더움`,expectedOutputEn:`Age: 20, Status: Adult
Temperature: 35°, Weather: Hot`,tip:"삼항 연산자는 간단한 조건에만 사용하세요. 복잡한 조건은 일반 if문이 읽기 쉽습니다.",tipEn:"Use the ternary operator only for simple conditions. For complex conditions, a regular if statement is more readable."}]},loops:{sections:[{title:"for 반복문",titleEn:"for Loops",content:`for 문은 시퀀스(리스트, 문자열, range 등)의 각 요소를 순회합니다.

range(n)은 0부터 n-1까지의 수열을 생성합니다.
range(start, stop, step)으로 시작, 끝, 간격을 지정할 수 있습니다.`,contentEn:`The for statement iterates over each element of a sequence (list, string, range, etc.).

range(n) generates a sequence of numbers from 0 to n-1.
You can specify the start, stop, and step with range(start, stop, step).`,code:`# 리스트 순회
fruits = ["사과", "바나나", "체리"]
for fruit in fruits:
    print(fruit)

# range 사용
for i in range(1, 6):
    print(f"{i}번", end=" ")
print()`,codeEn:`# Iterating over a list
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)

# Using range
for i in range(1, 6):
    print(f"#{i}", end=" ")
print()`,expectedOutput:`사과
바나나
체리
1번 2번 3번 4번 5번`,expectedOutputEn:`Apple
Banana
Cherry
#1 #2 #3 #4 #5`,tip:"enumerate()를 사용하면 인덱스와 값을 동시에 얻을 수 있습니다.",tipEn:"Using enumerate(), you can get both the index and the value at the same time."},{title:"while 반복문과 제어문",titleEn:"while Loops and Control Statements",content:`while 문은 조건이 True인 동안 반복합니다.

break: 반복문을 즉시 종료
continue: 현재 반복을 건너뛰고 다음 반복으로
else: 반복문이 정상 종료(break 없이)되었을 때 실행`,contentEn:`The while statement repeats as long as the condition is True.

break: immediately exits the loop
continue: skips the current iteration and moves to the next
else: executes when the loop ends normally (without break)`,code:`# while 문
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # 3은 건너뛰기
    print(count, end=" ")
print()

# break 사용
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")
print()`,codeEn:`# while loop
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # Skip 3
    print(count, end=" ")
print()

# Using break
for i in range(10):
    if i == 5:
        break
    print(i, end=" ")
print()`,expectedOutput:`1 2 4 5
0 1 2 3 4`,tip:"while True와 break를 조합하면 유연한 반복 구조를 만들 수 있습니다.",tipEn:"Combining while True with break allows you to create flexible loop structures."}]},lists:{sections:[{title:"리스트 생성과 조작",titleEn:"Creating and Manipulating Lists",content:`리스트는 여러 값을 순서대로 저장하는 자료구조입니다.
대괄호 []를 사용하여 생성하며, 다양한 타입을 혼합할 수 있습니다.

인덱싱, 슬라이싱, 추가, 삭제 등 다양한 조작이 가능합니다.`,contentEn:`A list is a data structure that stores multiple values in order.
It is created using square brackets [], and can mix different types.

Various operations are available, including indexing, slicing, adding, and deleting.`,code:`# 리스트 생성과 조작
nums = [1, 2, 3, 4, 5]
print(nums)

nums.append(6)       # 끝에 추가
nums.insert(0, 0)    # 인덱스 0에 삽입
print(nums)

nums.pop()           # 마지막 요소 제거
print(nums)
print(len(nums))     # 길이`,codeEn:`# Creating and manipulating lists
nums = [1, 2, 3, 4, 5]
print(nums)

nums.append(6)       # Add to end
nums.insert(0, 0)    # Insert at index 0
print(nums)

nums.pop()           # Remove last element
print(nums)
print(len(nums))     # Length`,expectedOutput:`[1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5, 6]
[0, 1, 2, 3, 4, 5]
6`,tip:"append()는 하나의 요소를, extend()는 다른 리스트의 모든 요소를 추가합니다.",tipEn:"append() adds a single element, while extend() adds all elements from another list."},{title:"리스트 컴프리헨션",titleEn:"List Comprehensions",content:`리스트 컴프리헨션은 리스트를 간결하게 생성하는 파이썬스러운 방법입니다.

형식: [표현식 for 변수 in 반복가능 if 조건]

기존 반복문보다 더 읽기 쉽고 빠릅니다.`,contentEn:`List comprehensions are a Pythonic way to create lists concisely.

Format: [expression for variable in iterable if condition]

They are more readable and faster than traditional loops.`,code:`# 기본 컴프리헨션
squares = [x**2 for x in range(1, 6)]
print(squares)

# 조건 포함
evens = [x for x in range(10) if x % 2 == 0]
print(evens)

# 변환 적용
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)`,codeEn:`# Basic comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)

# Applying transformation
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)`,expectedOutput:`[1, 4, 9, 16, 25]
[0, 2, 4, 6, 8]
['HELLO', 'WORLD', 'PYTHON']`,tip:"리스트 컴프리헨션이 너무 복잡해지면 일반 for문을 사용하는 것이 더 좋습니다.",tipEn:"If a list comprehension becomes too complex, it is better to use a regular for loop."}]},"tuples-dicts":{sections:[{title:"튜플",titleEn:"Tuples",content:`튜플은 리스트와 비슷하지만 변경할 수 없는(immutable) 자료구조입니다.
소괄호 ()를 사용하여 생성합니다.

변경이 필요 없는 데이터를 저장할 때 튜플을 사용하면 안전합니다.`,contentEn:`A tuple is a data structure similar to a list, but it is immutable (cannot be changed).
It is created using parentheses ().

Using tuples to store data that does not need to change is safer.`,code:`# 튜플 생성
colors = ("빨강", "초록", "파랑")
print(colors[0])
print(len(colors))

# 튜플 언패킹
x, y, z = colors
print(f"{x}, {y}, {z}")

# 여러 값 반환에 활용
def min_max(nums):
    return min(nums), max(nums)

result = min_max([3, 1, 4, 1, 5])
print(f"최소: {result[0]}, 최대: {result[1]}")`,codeEn:`# Creating tuples
colors = ("Red", "Green", "Blue")
print(colors[0])
print(len(colors))

# Tuple unpacking
x, y, z = colors
print(f"{x}, {y}, {z}")

# Using for multiple return values
def min_max(nums):
    return min(nums), max(nums)

result = min_max([3, 1, 4, 1, 5])
print(f"Min: {result[0]}, Max: {result[1]}")`,expectedOutput:`빨강
3
빨강, 초록, 파랑
최소: 1, 최대: 5`,expectedOutputEn:`Red
3
Red, Green, Blue
Min: 1, Max: 5`,tip:"함수에서 여러 값을 반환할 때 파이썬은 자동으로 튜플로 묶어서 반환합니다.",tipEn:"When a function returns multiple values, Python automatically bundles them into a tuple."},{title:"딕셔너리",titleEn:"Dictionaries",content:`딕셔너리는 키(key)와 값(value) 쌍으로 데이터를 저장합니다.
중괄호 {}와 콜론 :을 사용하여 생성합니다.

키로 빠르게 값을 검색할 수 있습니다.`,contentEn:`A dictionary stores data as key-value pairs.
It is created using curly braces {} and colons :.

You can quickly look up values by their keys.`,code:`# 딕셔너리 생성과 사용
student = {
    "이름": "김파이",
    "나이": 20,
    "전공": "컴퓨터공학"
}

print(student["이름"])
student["학년"] = 2  # 추가
print(student)

# 메서드 활용
print(list(student.keys()))
for key, value in student.items():
    print(f"{key}: {value}")`,codeEn:`# Creating and using dictionaries
student = {
    "name": "Kim",
    "age": 20,
    "major": "Computer Science"
}

print(student["name"])
student["year"] = 2  # Add
print(student)

# Using methods
print(list(student.keys()))
for key, value in student.items():
    print(f"{key}: {value}")`,expectedOutput:`김파이
{'이름': '김파이', '나이': 20, '전공': '컴퓨터공학', '학년': 2}
['이름', '나이', '전공', '학년']
이름: 김파이
나이: 20
전공: 컴퓨터공학
학년: 2`,expectedOutputEn:`Kim
{'name': 'Kim', 'age': 20, 'major': 'Computer Science', 'year': 2}
['name', 'age', 'major', 'year']
name: Kim
age: 20
major: Computer Science
year: 2`,tip:"get() 메서드를 사용하면 키가 없을 때 에러 대신 기본값을 반환합니다.",tipEn:"Using the get() method returns a default value instead of an error when the key does not exist."}]},"functions-basic":{sections:[{title:"함수 정의와 호출",titleEn:"Defining and Calling Functions",content:`함수는 재사용 가능한 코드 블록입니다.
def 키워드로 정의하고, 함수명() 으로 호출합니다.

매개변수로 데이터를 전달하고, return으로 결과를 반환합니다.`,contentEn:`A function is a reusable block of code.
It is defined with the def keyword and called with function_name().

You pass data through parameters and return results with return.`,code:`# 함수 정의
def greet(name):
    return f"안녕하세요, {name}님!"

# 함수 호출
result = greet("파이썬")
print(result)

# 여러 매개변수
def add(a, b):
    return a + b

print(add(3, 5))`,codeEn:`# Defining a function
def greet(name):
    return f"Hello, {name}!"

# Calling a function
result = greet("Python")
print(result)

# Multiple parameters
def add(a, b):
    return a + b

print(add(3, 5))`,expectedOutput:`안녕하세요, 파이썬님!
8`,expectedOutputEn:`Hello, Python!
8`,tip:"함수 이름은 동사로 시작하면 좋습니다: get_name(), calculate_total(), is_valid() 등",tipEn:"It is good practice to start function names with a verb: get_name(), calculate_total(), is_valid(), etc."},{title:"기본값과 가변 인자",titleEn:"Default Values and Variable Arguments",content:`매개변수에 기본값을 설정하면 인자를 생략할 수 있습니다.

*args는 여러 개의 위치 인자를 튜플로 받고,
**kwargs는 키워드 인자를 딕셔너리로 받습니다.`,contentEn:`Setting default values for parameters allows you to omit arguments.

*args receives multiple positional arguments as a tuple,
**kwargs receives keyword arguments as a dictionary.`,code:`# 기본값 매개변수
def power(base, exp=2):
    return base ** exp

print(power(3))      # 3의 2승
print(power(2, 10))  # 2의 10승

# *args 가변 인자
def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4, 5))`,codeEn:`# Default parameter values
def power(base, exp=2):
    return base ** exp

print(power(3))      # 3 to the power of 2
print(power(2, 10))  # 2 to the power of 10

# *args variable arguments
def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4, 5))`,expectedOutput:`9
1024
15`,tip:"기본값이 있는 매개변수는 기본값이 없는 매개변수 뒤에 와야 합니다.",tipEn:"Parameters with default values must come after parameters without default values."}]},"functions-advanced":{sections:[{title:"람다 함수",titleEn:"Lambda Functions",content:`lambda는 이름 없는 한 줄 함수를 만듭니다.

형식: lambda 매개변수: 표현식

간단한 연산을 함수로 전달할 때 유용합니다.`,contentEn:`lambda creates an anonymous one-line function.

Syntax: lambda parameters: expression

Useful when passing simple operations as function arguments.`,code:`# lambda 함수
square = lambda x: x ** 2
print(square(5))

# 정렬에 활용
students = [("김철수", 85), ("이영희", 92), ("박민수", 78)]
students.sort(key=lambda s: s[1], reverse=True)
for name, score in students:
    print(f"{name}: {score}점")`,codeEn:`# lambda function
square = lambda x: x ** 2
print(square(5))

# Using with sorting
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda s: s[1], reverse=True)
for name, score in students:
    print(f"{name}: {score} pts")`,expectedOutput:`25
이영희: 92점
김철수: 85점
박민수: 78점`,expectedOutputEn:`25
Bob: 92 pts
Alice: 85 pts
Charlie: 78 pts`,tip:"lambda는 간단한 경우에만 사용하세요. 복잡한 로직은 def로 정의하는 것이 좋습니다.",tipEn:"Use lambda only for simple cases. For complex logic, define a function with def instead."},{title:"map, filter, reduce",titleEn:"map, filter, reduce",content:`고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다.

map(함수, 반복가능): 각 요소에 함수를 적용
filter(함수, 반복가능): 조건을 만족하는 요소만 필터링
reduce(함수, 반복가능): 요소를 누적 연산`,contentEn:`Higher-order functions accept functions as arguments or return functions.

map(func, iterable): Apply a function to each element
filter(func, iterable): Keep only elements that satisfy a condition
reduce(func, iterable): Accumulate elements with an operation`,code:`# map: 각 요소에 함수 적용
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
print(squared)

# filter: 조건에 맞는 요소만
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)

# reduce: 누적 연산
from functools import reduce
total = reduce(lambda a, b: a + b, nums)
print(f"합계: {total}")`,codeEn:`# map: apply function to each element
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
print(squared)

# filter: keep only matching elements
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)

# reduce: cumulative operation
from functools import reduce
total = reduce(lambda a, b: a + b, nums)
print(f"Total: {total}")`,expectedOutput:`[1, 4, 9, 16, 25]
[2, 4]
합계: 15`,expectedOutputEn:`[1, 4, 9, 16, 25]
[2, 4]
Total: 15`,tip:"파이썬에서는 map/filter 대신 리스트 컴프리헨션을 더 많이 사용하는 추세입니다.",tipEn:"In Python, list comprehensions are increasingly preferred over map/filter."}]},"oop-basics":{sections:[{title:"클래스와 객체",titleEn:"Classes and Objects",content:`클래스는 객체를 만들기 위한 설계도입니다.
class 키워드로 정의하고, __init__ 메서드로 초기화합니다.

self는 인스턴스 자기 자신을 참조합니다.`,contentEn:`A class is a blueprint for creating objects.
Define it with the class keyword and initialize with the __init__ method.

self refers to the instance itself.`,code:`class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name}(이/가) 멍멍!"
    
    def info(self):
        return f"{self.breed} {self.name}"

# 객체 생성
dog1 = Dog("초코", "포메라니안")
dog2 = Dog("맥스", "골든리트리버")

print(dog1.bark())
print(dog2.info())`,codeEn:`class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def info(self):
        return f"{self.breed} {self.name}"

# Creating objects
dog1 = Dog("Choco", "Pomeranian")
dog2 = Dog("Max", "Golden Retriever")

print(dog1.bark())
print(dog2.info())`,expectedOutput:`초코(이/가) 멍멍!
골든리트리버 맥스`,expectedOutputEn:`Choco says Woof!
Golden Retriever Max`,tip:"__init__은 생성자(constructor)로, 객체가 생성될 때 자동으로 호출됩니다.",tipEn:"__init__ is a constructor that is automatically called when an object is created."},{title:"클래스 변수와 인스턴스 변수",titleEn:"Class Variables and Instance Variables",content:`클래스 변수는 모든 인스턴스가 공유하는 변수이고,
인스턴스 변수(self.변수)는 각 인스턴스에 고유한 변수입니다.`,contentEn:`Class variables are shared across all instances,
while instance variables (self.variable) are unique to each instance.`,code:`class Student:
    school = "파이썬 학교"  # 클래스 변수
    count = 0
    
    def __init__(self, name):
        self.name = name       # 인스턴스 변수
        Student.count += 1

s1 = Student("김철수")
s2 = Student("이영희")

print(f"{s1.name} - {s1.school}")
print(f"{s2.name} - {s2.school}")
print(f"전체 학생 수: {Student.count}")`,codeEn:`class Student:
    school = "Python Academy"  # Class variable
    count = 0
    
    def __init__(self, name):
        self.name = name       # Instance variable
        Student.count += 1

s1 = Student("Alice")
s2 = Student("Bob")

print(f"{s1.name} - {s1.school}")
print(f"{s2.name} - {s2.school}")
print(f"Total students: {Student.count}")`,expectedOutput:`김철수 - 파이썬 학교
이영희 - 파이썬 학교
전체 학생 수: 2`,expectedOutputEn:`Alice - Python Academy
Bob - Python Academy
Total students: 2`,tip:"클래스 변수는 클래스명.변수 또는 인스턴스.변수로 접근할 수 있습니다.",tipEn:"Class variables can be accessed via ClassName.variable or instance.variable."}]},"oop-advanced":{sections:[{title:"상속",titleEn:"Inheritance",content:`상속은 기존 클래스(부모)의 기능을 물려받아 새 클래스(자식)를 만드는 것입니다.
자식 클래스에서 부모의 메서드를 재정의(오버라이딩)할 수 있습니다.`,contentEn:`Inheritance creates a new class (child) that inherits features from an existing class (parent).
The child class can override the parent's methods.`,code:`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Cat(Animal):
    def speak(self):
        return f"{self.name}: 야옹!"

class Dog(Animal):
    def speak(self):
        return f"{self.name}: 멍멍!"

animals = [Cat("나비"), Dog("바둑이"), Cat("미미")]
for animal in animals:
    print(animal.speak())`,codeEn:`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Cat(Animal):
    def speak(self):
        return f"{self.name}: Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name}: Woof!"

animals = [Cat("Whiskers"), Dog("Buddy"), Cat("Luna")]
for animal in animals:
    print(animal.speak())`,expectedOutput:`나비: 야옹!
바둑이: 멍멍!
미미: 야옹!`,expectedOutputEn:`Whiskers: Meow!
Buddy: Woof!
Luna: Meow!`,tip:"super().__init__()을 사용하면 부모 클래스의 초기화 코드를 호출할 수 있습니다.",tipEn:"Use super().__init__() to call the parent class initialization code."},{title:"특수 메서드 (매직 메서드)",titleEn:"Special Methods (Magic Methods)",content:`파이썬 클래스는 __로 시작하고 끝나는 특수 메서드를 정의할 수 있습니다.

__str__: 문자열 표현
__len__: len() 지원
__add__: + 연산자 지원
__eq__: == 비교 지원`,contentEn:`Python classes can define special methods that start and end with __.

__str__: String representation
__len__: Support for len()
__add__: Support for + operator
__eq__: Support for == comparison`,code:`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(f"{v1} + {v2} = {v3}")`,expectedOutput:"(1, 2) + (3, 4) = (4, 6)",tip:"매직 메서드를 잘 활용하면 클래스를 파이썬 내장 타입처럼 자연스럽게 사용할 수 있습니다.",tipEn:"By leveraging magic methods, you can make your classes behave naturally like Python built-in types."}]},"error-handling":{sections:[{title:"try / except / finally",titleEn:"try / except / finally",content:`예외 처리는 프로그램 실행 중 발생하는 오류를 안전하게 처리합니다.

try: 오류가 발생할 수 있는 코드
except: 오류 발생 시 처리 코드
finally: 무조건 실행되는 코드`,contentEn:`Exception handling safely manages errors that occur during program execution.

try: Code that may raise an error
except: Code to handle the error
finally: Code that always runs regardless`,code:`# 기본 예외 처리
try:
    result = 10 / 0
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다!")

# 여러 예외 처리
try:
    nums = [1, 2, 3]
    print(nums[10])
except IndexError as e:
    print(f"인덱스 오류: {e}")
finally:
    print("처리 완료!")`,codeEn:`# Basic exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Handling multiple exceptions
try:
    nums = [1, 2, 3]
    print(nums[10])
except IndexError as e:
    print(f"Index error: {e}")
finally:
    print("Processing complete!")`,expectedOutput:`0으로 나눌 수 없습니다!
인덱스 오류: list index out of range
처리 완료!`,expectedOutputEn:`Cannot divide by zero!
Index error: list index out of range
Processing complete!`,tip:"가능한 한 구체적인 예외 타입을 지정하세요. except Exception은 너무 광범위합니다.",tipEn:"Be as specific as possible with exception types. except Exception is too broad."},{title:"raise와 사용자 정의 예외",titleEn:"raise and Custom Exceptions",content:`raise 키워드로 의도적으로 예외를 발생시킬 수 있습니다.
Exception 클래스를 상속하여 사용자 정의 예외를 만들 수 있습니다.`,contentEn:`The raise keyword lets you intentionally raise an exception.
You can create custom exceptions by inheriting from the Exception class.`,code:`class InvalidAgeError(Exception):
    def __init__(self, age):
        super().__init__(f"잘못된 나이: {age}")
        self.age = age

def set_age(age):
    if age < 0 or age > 150:
        raise InvalidAgeError(age)
    return age

try:
    set_age(200)
except InvalidAgeError as e:
    print(e)`,codeEn:`class InvalidAgeError(Exception):
    def __init__(self, age):
        super().__init__(f"Invalid age: {age}")
        self.age = age

def set_age(age):
    if age < 0 or age > 150:
        raise InvalidAgeError(age)
    return age

try:
    set_age(200)
except InvalidAgeError as e:
    print(e)`,expectedOutput:"잘못된 나이: 200",expectedOutputEn:"Invalid age: 200",tip:"사용자 정의 예외는 Exception을 상속하고, 의미 있는 이름을 붙이세요.",tipEn:"Custom exceptions should inherit from Exception and have meaningful names."}]},"file-io":{sections:[{title:"파일 읽기/쓰기",titleEn:"Reading and Writing Files",content:`open() 함수로 파일을 열고, with 문으로 안전하게 관리합니다.

모드: 'r'(읽기), 'w'(쓰기-덮어쓰기), 'a'(추가), 'x'(새파일 생성)`,contentEn:`Use the open() function to open files and the with statement for safe resource management.

Modes: 'r' (read), 'w' (write/overwrite), 'a' (append), 'x' (create new file)`,code:`# 파일 개념 이해 (시뮬레이션)
data = "이름: 파이썬\\n나이: 30\\n직업: 프로그래머"

# 줄 단위로 처리
lines = data.split("\\n")
for i, line in enumerate(lines, 1):
    print(f"{i}: {line}")

print(f"\\n총 {len(lines)}줄")`,codeEn:`# Understanding file concepts (simulation)
data = "Name: Python\\nAge: 30\\nJob: Programmer"

# Processing line by line
lines = data.split("\\n")
for i, line in enumerate(lines, 1):
    print(f"{i}: {line}")

print(f"\\nTotal {len(lines)} lines")`,expectedOutput:`1: 이름: 파이썬
2: 나이: 30
3: 직업: 프로그래머

총 3줄`,expectedOutputEn:`1: Name: Python
2: Age: 30
3: Job: Programmer

Total 3 lines`,tip:"with open() as f: 구문을 사용하면 파일이 자동으로 닫힙니다.",tipEn:"Using the with open() as f: syntax ensures the file is automatically closed."},{title:"CSV와 JSON 처리",titleEn:"Working with CSV and JSON",content:`CSV(쉼표 구분 값)와 JSON은 데이터 교환에 많이 사용되는 형식입니다.
파이썬은 csv와 json 표준 라이브러리를 제공합니다.`,contentEn:`CSV (Comma-Separated Values) and JSON are widely used formats for data exchange.
Python provides the csv and json standard libraries.`,code:`import json

# JSON 데이터 다루기
data = {
    "students": [
        {"name": "김철수", "score": 90},
        {"name": "이영희", "score": 95}
    ]
}

# 딕셔너리 -> JSON 문자열
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print(json_str)

# JSON 문자열 -> 딕셔너리
parsed = json.loads(json_str)
for s in parsed["students"]:
    print(f"{s["name"]}: {s["score"]}점")`,codeEn:`import json

# Working with JSON data
data = {
    "students": [
        {"name": "Alice", "score": 90},
        {"name": "Bob", "score": 95}
    ]
}

# Dictionary -> JSON string
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print(json_str)

# JSON string -> Dictionary
parsed = json.loads(json_str)
for s in parsed["students"]:
    print(f"{s[\\"name\\"]}: {s[\\"score\\"]} pts")`,expectedOutput:`{
  "students": [
    {
      "name": "김철수",
      "score": 90
    },
    {
      "name": "이영희",
      "score": 95
    }
  ]
}
김철수: 90점
이영희: 95점`,expectedOutputEn:`{
  "students": [
    {
      "name": "Alice",
      "score": 90
    },
    {
      "name": "Bob",
      "score": 95
    }
  ]
}
Alice: 90 pts
Bob: 95 pts`,tip:"json.dumps()의 ensure_ascii=False는 한글을 그대로 출력하게 합니다.",tipEn:"ensure_ascii=False in json.dumps() allows non-ASCII characters (like Korean) to be output as-is."}]},modules:{sections:[{title:"모듈 사용하기",titleEn:"Using Modules",content:`모듈은 함수, 클래스 등을 담고 있는 파이썬 파일입니다.
import 문으로 모듈을 가져와 사용할 수 있습니다.

import 방식: import 모듈, from 모듈 import 이름, import 모듈 as 별칭`,contentEn:`A module is a Python file containing functions, classes, and more.
Use the import statement to load and use modules.

Import styles: import module, from module import name, import module as alias`,code:`import math
print(f"원주율: {math.pi:.4f}")
print(f"제곱근: {math.sqrt(16)}")

from random import randint, choice
print(f"주사위: {randint(1, 6)}")

fruits = ["사과", "바나나", "체리"]
print(f"랜덤 선택: {choice(fruits)}")`,codeEn:`import math
print(f"Pi: {math.pi:.4f}")
print(f"Square root: {math.sqrt(16)}")

from random import randint, choice
print(f"Dice: {randint(1, 6)}")

fruits = ["Apple", "Banana", "Cherry"]
print(f"Random pick: {choice(fruits)}")`,expectedOutput:`원주율: 3.1416
제곱근: 4.0
주사위: 4
랜덤 선택: 바나나`,expectedOutputEn:`Pi: 3.1416
Square root: 4.0
Dice: 4
Random pick: Banana`,tip:"from 모듈 import *은 모든 이름을 가져오므로 충돌 위험이 있어 권장하지 않습니다.",tipEn:"from module import * imports all names and risks naming conflicts, so it is not recommended."}]},comprehensions:{sections:[{title:"다양한 컴프리헨션",titleEn:"Various Comprehensions",content:`리스트 외에도 딕셔너리, 세트 컴프리헨션을 사용할 수 있습니다.
중첩 컴프리헨션으로 다차원 데이터도 처리 가능합니다.`,contentEn:`Beyond lists, you can use dictionary and set comprehensions.
Nested comprehensions can also handle multi-dimensional data.`,code:`# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# 세트 컴프리헨션
words = ["hello", "world", "hello", "python"]
unique_lengths = {len(w) for w in words}
print(unique_lengths)

# 중첩 컴프리헨션
matrix = [[i*3+j+1 for j in range(3)] for i in range(3)]
for row in matrix:
    print(row)`,codeEn:`# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# Set comprehension
words = ["hello", "world", "hello", "python"]
unique_lengths = {len(w) for w in words}
print(unique_lengths)

# Nested comprehension
matrix = [[i*3+j+1 for j in range(3)] for i in range(3)]
for row in matrix:
    print(row)`,expectedOutput:`{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
{5, 6}
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]`,tip:"컴프리헨션은 간결하지만, 3중 이상 중첩은 가독성이 떨어지니 일반 for문을 사용하세요.",tipEn:"Comprehensions are concise, but nesting more than 3 levels reduces readability. Use regular for loops instead."}]},regex:{sections:[{title:"정규표현식 기초",titleEn:"Regular Expression Basics",content:`정규표현식(regex)은 문자열에서 패턴을 찾는 강력한 도구입니다.
파이썬의 re 모듈을 사용합니다.

주요 함수: re.search(), re.match(), re.findall(), re.sub()`,contentEn:`Regular expressions (regex) are a powerful tool for finding patterns in strings.
Python uses the re module.

Key functions: re.search(), re.match(), re.findall(), re.sub()`,code:`import re

text = "전화번호: 010-1234-5678, 이메일: test@email.com"

# 전화번호 찾기
phone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)
print(f"전화번호: {phone.group()}")

# 모든 숫자 찾기
nums = re.findall(r"\\d+", text)
print(f"숫자들: {nums}")

# 패턴 치환
result = re.sub(r"\\d", "*", text)
print(result)`,codeEn:`import re

text = "Phone: 010-1234-5678, Email: test@email.com"

# Find phone number
phone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)
print(f"Phone: {phone.group()}")

# Find all numbers
nums = re.findall(r"\\d+", text)
print(f"Numbers: {nums}")

# Pattern substitution
result = re.sub(r"\\d", "*", text)
print(result)`,expectedOutput:`전화번호: 010-1234-5678
숫자들: ['010', '1234', '5678']
전화번호: ***-****-****, 이메일: test@email.com`,expectedOutputEn:`Phone: 010-1234-5678
Numbers: ['010', '1234', '5678']
Phone: ***-****-****, Email: test@email.com`,tip:"정규표현식 문자열 앞에 r을 붙이면(raw string) 이스케이프 문자 문제를 방지합니다.",tipEn:"Prefix regex strings with r (raw string) to avoid escape character issues."}]},"os-sys":{sections:[{title:"os 모듈 - 파일 시스템 제어",titleEn:"os Module - File System Control",content:`os 모듈은 운영체제와 상호작용하는 기능을 제공합니다.
파일/디렉토리 조작, 경로 처리, 환경 변수 접근 등이 가능합니다.

os.path 하위 모듈은 경로 관련 유틸리티를 제공합니다.`,contentEn:`The os module provides functions for interacting with the operating system.
You can manipulate files/directories, process paths, and access environment variables.

The os.path submodule provides path-related utilities.`,code:`import os

# 현재 작업 디렉토리
print(f"현재 디렉토리: {os.getcwd()}")

# os.path 경로 처리
path = "/home/user/documents/report.pdf"
print(f"파일명: {os.path.basename(path)}")
print(f"디렉토리: {os.path.dirname(path)}")
print(f"확장자: {os.path.splitext(path)[1]}")
print(f"경로 존재: {os.path.exists(path)}")

# 경로 결합 (OS 독립적)
full = os.path.join("home", "user", "data.csv")
print(f"경로 결합: {full}")

# 환경 변수
print(f"\\nPATH (일부): /usr/local/bin:/usr/bin...")
print(f"HOME: /home/user")`,codeEn:`import os

# Current working directory
print(f"Current directory: {os.getcwd()}")

# os.path path handling
path = "/home/user/documents/report.pdf"
print(f"Filename: {os.path.basename(path)}")
print(f"Directory: {os.path.dirname(path)}")
print(f"Extension: {os.path.splitext(path)[1]}")
print(f"Path exists: {os.path.exists(path)}")

# Joining paths (OS-independent)
full = os.path.join("home", "user", "data.csv")
print(f"Joined path: {full}")

# Environment variables
print(f"\\nPATH (partial): /usr/local/bin:/usr/bin...")
print(f"HOME: /home/user")`,expectedOutput:`현재 디렉토리: /home/user
파일명: report.pdf
디렉토리: /home/user/documents
확장자: .pdf
경로 존재: False
경로 결합: home/user/data.csv

PATH (일부): /usr/local/bin:/usr/bin...
HOME: /home/user`,expectedOutputEn:`Current directory: /home/user
Filename: report.pdf
Directory: /home/user/documents
Extension: .pdf
Path exists: False
Joined path: home/user/data.csv

PATH (partial): /usr/local/bin:/usr/bin...
HOME: /home/user`,tip:"os.path.join()은 운영체제에 맞는 경로 구분자(/ 또는 \\)를 자동으로 사용합니다.",tipEn:"os.path.join() automatically uses the correct path separator (/ or \\) for the operating system."},{title:"sys 모듈 - 시스템 정보와 제어",titleEn:"sys Module - System Information and Control",content:`sys 모듈은 파이썬 인터프리터와 관련된 정보와 기능을 제공합니다.

명령줄 인자(argv), 모듈 경로(path), 버전 정보 등을 다룹니다.`,contentEn:`The sys module provides information and functions related to the Python interpreter.

It handles command-line arguments (argv), module search paths (path), version info, and more.`,code:`import sys

print("=== sys 모듈 주요 속성 ===")
print(f"파이썬 버전: 3.12.0")
print(f"플랫폼: linux")
print(f"정수 최대값: 9223372036854775807")

print("\\n=== 명령줄 인자 (sys.argv) ===")
print("# python script.py arg1 arg2")
print("# sys.argv → ['script.py', 'arg1', 'arg2']")

print("\\n=== 모듈 검색 경로 ===")
print("sys.path 예시:")
print("  /usr/lib/python3.12")
print("  /usr/lib/python3.12/lib-dynload")

print("\\n=== sys.exit() 종료 코드 ===")
print("sys.exit(0)  → 정상 종료")
print("sys.exit(1)  → 에러 종료")`,codeEn:`import sys

print("=== sys Module Key Attributes ===")
print(f"Python version: 3.12.0")
print(f"Platform: linux")
print(f"Max integer: 9223372036854775807")

print("\\n=== Command Line Arguments (sys.argv) ===")
print("# python script.py arg1 arg2")
print("# sys.argv → ['script.py', 'arg1', 'arg2']")

print("\\n=== Module Search Path ===")
print("sys.path example:")
print("  /usr/lib/python3.12")
print("  /usr/lib/python3.12/lib-dynload")

print("\\n=== sys.exit() Exit Codes ===")
print("sys.exit(0)  → Normal exit")
print("sys.exit(1)  → Error exit")`,expectedOutput:`=== sys 모듈 주요 속성 ===
파이썬 버전: 3.12.0
플랫폼: linux
정수 최대값: 9223372036854775807

=== 명령줄 인자 (sys.argv) ===
# python script.py arg1 arg2
# sys.argv → ['script.py', 'arg1', 'arg2']

=== 모듈 검색 경로 ===
sys.path 예시:
  /usr/lib/python3.12
  /usr/lib/python3.12/lib-dynload

=== sys.exit() 종료 코드 ===
sys.exit(0)  → 정상 종료
sys.exit(1)  → 에러 종료`,expectedOutputEn:`=== sys Module Key Attributes ===
Python version: 3.12.0
Platform: linux
Max integer: 9223372036854775807

=== Command Line Arguments (sys.argv) ===
# python script.py arg1 arg2
# sys.argv → ['script.py', 'arg1', 'arg2']

=== Module Search Path ===
sys.path example:
  /usr/lib/python3.12
  /usr/lib/python3.12/lib-dynload

=== sys.exit() Exit Codes ===
sys.exit(0)  → Normal exit
sys.exit(1)  → Error exit`,tip:"sys.exit()으로 프로그램을 종료할 수 있습니다. 0은 정상 종료, 다른 값은 에러를 의미합니다.",tipEn:"sys.exit() terminates the program. 0 means normal exit, any other value indicates an error."},{title:"os 모듈 실전 활용",titleEn:"os Module - Practical Applications",content:`os 모듈을 활용한 실전 예제입니다.

디렉토리 생성/삭제, 파일 목록 조회, 파일 정보 확인 등의 작업을 수행합니다.
os.walk()를 사용하면 디렉토리를 재귀적으로 탐색할 수 있습니다.`,contentEn:`Practical examples using the os module.

Perform tasks such as creating/deleting directories, listing files, and checking file info.
os.walk() allows you to recursively traverse directories.`,code:`import os

# 디렉토리 조작 명령
print("=== 디렉토리 조작 ===")
print("os.mkdir('new_dir')     → 디렉토리 생성")
print("os.makedirs('a/b/c')   → 중첩 디렉토리 생성")
print("os.rmdir('new_dir')    → 빈 디렉토리 삭제")
print("os.listdir('.')        → 파일 목록 조회")

# 파일 조작 명령
print("\\n=== 파일 조작 ===")
print("os.rename('old', 'new') → 이름 변경")
print("os.remove('file.txt')  → 파일 삭제")
print("os.stat('file.txt')    → 파일 정보")

# 경로 처리 예제
paths = [
    "/home/user/photo.jpg",
    "C:\\\\Users\\\\data.csv",
    "/var/log/app.log",
]
print("\\n=== 경로 분석 ===")
for p in paths:
    name = os.path.basename(p)
    base, ext = os.path.splitext(name)
    print(f"  {name:15s} → 이름:{base}, 확장자:{ext}")

# os.walk 재귀 탐색
print("\\n=== os.walk() 디렉토리 재귀 탐색 ===")
print("for root, dirs, files in os.walk('.'):")
print("    print(root, dirs, files)")
print("# 하위 모든 디렉토리와 파일을 순회합니다")`,codeEn:`import os

# Directory operations
print("=== Directory Operations ===")
print("os.mkdir('new_dir')     → Create directory")
print("os.makedirs('a/b/c')   → Create nested directories")
print("os.rmdir('new_dir')    → Delete empty directory")
print("os.listdir('.')        → List files")

# File operations
print("\\n=== File Operations ===")
print("os.rename('old', 'new') → Rename")
print("os.remove('file.txt')  → Delete file")
print("os.stat('file.txt')    → File info")

# Path handling examples
paths = [
    "/home/user/photo.jpg",
    "C:\\\\Users\\\\data.csv",
    "/var/log/app.log",
]
print("\\n=== Path Analysis ===")
for p in paths:
    name = os.path.basename(p)
    base, ext = os.path.splitext(name)
    print(f"  {name:15s} → name:{base}, ext:{ext}")

# os.walk recursive traversal
print("\\n=== os.walk() Recursive Directory Traversal ===")
print("for root, dirs, files in os.walk('.'):")
print("    print(root, dirs, files)")
print("# Traverses all subdirectories and files")`,expectedOutput:`=== 디렉토리 조작 ===
os.mkdir('new_dir')     → 디렉토리 생성
os.makedirs('a/b/c')   → 중첩 디렉토리 생성
os.rmdir('new_dir')    → 빈 디렉토리 삭제
os.listdir('.')        → 파일 목록 조회

=== 파일 조작 ===
os.rename('old', 'new') → 이름 변경
os.remove('file.txt')  → 파일 삭제
os.stat('file.txt')    → 파일 정보

=== 경로 분석 ===
  photo.jpg       → 이름:photo, 확장자:.jpg
  data.csv        → 이름:data, 확장자:.csv
  app.log         → 이름:app, 확장자:.log

=== os.walk() 디렉토리 재귀 탐색 ===
for root, dirs, files in os.walk('.'):
    print(root, dirs, files)
# 하위 모든 디렉토리와 파일을 순회합니다`,expectedOutputEn:`=== Directory Operations ===
os.mkdir('new_dir')     → Create directory
os.makedirs('a/b/c')   → Create nested directories
os.rmdir('new_dir')    → Delete empty directory
os.listdir('.')        → List files

=== File Operations ===
os.rename('old', 'new') → Rename
os.remove('file.txt')  → Delete file
os.stat('file.txt')    → File info

=== Path Analysis ===
  photo.jpg       → name:photo, ext:.jpg
  data.csv        → name:data, ext:.csv
  app.log         → name:app, ext:.log

=== os.walk() Recursive Directory Traversal ===
for root, dirs, files in os.walk('.'):
    print(root, dirs, files)
# Traverses all subdirectories and files`,tip:'pathlib 모듈은 os.path의 객체지향 대안입니다. Path("/home/user") / "data.csv" 형태로 경로를 조합할 수 있습니다.',tipEn:'The pathlib module is an object-oriented alternative to os.path. You can combine paths like Path("/home/user") / "data.csv".'}]},"math-cmath":{sections:[{title:"math 모듈 - 수학 함수",titleEn:"math Module - Mathematical Functions",content:`math 모듈은 C 표준 라이브러리의 수학 함수에 대한 접근을 제공합니다.

상수: pi, e, inf, nan
함수: sqrt, pow, log, sin, cos, tan, ceil, floor, factorial 등`,contentEn:`The math module provides access to mathematical functions from the C standard library.

Constants: pi, e, inf, nan
Functions: sqrt, pow, log, sin, cos, tan, ceil, floor, factorial, etc.`,code:`import math

# 상수
print(f"원주율 (pi): {math.pi:.6f}")
print(f"자연 상수 (e): {math.e:.6f}")

# 기본 수학 함수
print(f"\\n√16 = {math.sqrt(16)}")
print(f"2^10 = {math.pow(2, 10):.0f}")
print(f"10! = {math.factorial(10)}")

# 올림/내림
print(f"\\nceil(3.2) = {math.ceil(3.2)}")
print(f"floor(3.8) = {math.floor(3.8)}")

# 로그
print(f"\\nlog(100, 10) = {math.log(100, 10):.1f}")
print(f"log2(1024) = {math.log2(1024):.1f}")
print(f"ln(e) = {math.log(math.e):.1f}")`,codeEn:`import math

# Constants
print(f"Pi: {math.pi:.6f}")
print(f"Euler's number (e): {math.e:.6f}")

# Basic math functions
print(f"\\n√16 = {math.sqrt(16)}")
print(f"2^10 = {math.pow(2, 10):.0f}")
print(f"10! = {math.factorial(10)}")

# Ceil/Floor
print(f"\\nceil(3.2) = {math.ceil(3.2)}")
print(f"floor(3.8) = {math.floor(3.8)}")

# Logarithms
print(f"\\nlog(100, 10) = {math.log(100, 10):.1f}")
print(f"log2(1024) = {math.log2(1024):.1f}")
print(f"ln(e) = {math.log(math.e):.1f}")`,expectedOutput:`원주율 (pi): 3.141593
자연 상수 (e): 2.718282

√16 = 4.0
2^10 = 1024
10! = 3628800

ceil(3.2) = 4
floor(3.8) = 3

log(100, 10) = 2.0
log2(1024) = 10.0
ln(e) = 1.0`,expectedOutputEn:`Pi: 3.141593
Euler's number (e): 2.718282

√16 = 4.0
2^10 = 1024
10! = 3628800

ceil(3.2) = 4
floor(3.8) = 3

log(100, 10) = 2.0
log2(1024) = 10.0
ln(e) = 1.0`,tip:"math.isclose(a, b)로 부동소수점 비교를 안전하게 할 수 있습니다. == 대신 사용하세요.",tipEn:"Use math.isclose(a, b) for safe floating-point comparison instead of ==."},{title:"삼각함수와 기하 계산",titleEn:"Trigonometric Functions and Geometry",content:`math 모듈의 삼각함수를 활용하면 각도, 거리, 좌표 등을 계산할 수 있습니다.

radians(): 도→라디안 변환
degrees(): 라디안→도 변환
sin(), cos(), tan(): 삼각함수
hypot(): 빗변 길이 (피타고라스)`,contentEn:`Using trigonometric functions from the math module, you can calculate angles, distances, coordinates, and more.

radians(): Degrees to radians
degrees(): Radians to degrees
sin(), cos(), tan(): Trigonometric functions
hypot(): Hypotenuse length (Pythagorean theorem)`,code:`import math

# 삼각함수 기본
print("=== 삼각함수 ===")
for deg in [0, 30, 45, 60, 90]:
    rad = math.radians(deg)
    print(f"  sin({deg:2d}°) = {math.sin(rad):6.4f}  cos({deg:2d}°) = {math.cos(rad):6.4f}")

# 피타고라스 정리
a, b = 3, 4
c = math.hypot(a, b)
print(f"\\n직각삼각형 ({a}, {b}) → 빗변 = {c}")

# 원의 넓이와 둘레
r = 5
area = math.pi * r ** 2
circumference = 2 * math.pi * r
print(f"\\n반지름 {r}인 원:")
print(f"  넓이 = {area:.2f}")
print(f"  둘레 = {circumference:.2f}")

# GCD, LCM
print(f"\\nGCD(12,18) = {math.gcd(12, 18)}")
print(f"LCM(4,6) = {(4*6)//math.gcd(4,6)}")`,codeEn:`import math

# Basic trigonometry
print("=== Trigonometric Functions ===")
for deg in [0, 30, 45, 60, 90]:
    rad = math.radians(deg)
    print(f"  sin({deg:2d}°) = {math.sin(rad):6.4f}  cos({deg:2d}°) = {math.cos(rad):6.4f}")

# Pythagorean theorem
a, b = 3, 4
c = math.hypot(a, b)
print(f"\\nRight triangle ({a}, {b}) → Hypotenuse = {c}")

# Area and circumference of a circle
r = 5
area = math.pi * r ** 2
circumference = 2 * math.pi * r
print(f"\\nCircle with radius {r}:")
print(f"  Area = {area:.2f}")
print(f"  Circumference = {circumference:.2f}")

# GCD, LCM
print(f"\\nGCD(12,18) = {math.gcd(12, 18)}")
print(f"LCM(4,6) = {(4*6)//math.gcd(4,6)}")`,expectedOutput:`=== 삼각함수 ===
  sin( 0°) = 0.0000  cos( 0°) = 1.0000
  sin(30°) = 0.5000  cos(30°) = 0.8660
  sin(45°) = 0.7071  cos(45°) = 0.7071
  sin(60°) = 0.8660  cos(60°) = 0.5000
  sin(90°) = 1.0000  cos(90°) = 0.0000

직각삼각형 (3, 4) → 빗변 = 5.0

반지름 5인 원:
  넓이 = 78.54
  둘레 = 31.42

GCD(12,18) = 6
LCM(4,6) = 12`,expectedOutputEn:`=== Trigonometric Functions ===
  sin( 0°) = 0.0000  cos( 0°) = 1.0000
  sin(30°) = 0.5000  cos(30°) = 0.8660
  sin(45°) = 0.7071  cos(45°) = 0.7071
  sin(60°) = 0.8660  cos(60°) = 0.5000
  sin(90°) = 1.0000  cos(90°) = 0.0000

Right triangle (3, 4) → Hypotenuse = 5.0

Circle with radius 5:
  Area = 78.54
  Circumference = 31.42

GCD(12,18) = 6
LCM(4,6) = 12`,tip:"math.hypot(a, b)는 √(a²+b²)를 계산합니다. 2D 거리 계산에 유용합니다.",tipEn:"math.hypot(a, b) computes sqrt(a^2 + b^2). Useful for 2D distance calculations."},{title:"cmath 모듈 - 복소수 연산",titleEn:"cmath Module - Complex Number Operations",content:`cmath 모듈은 복소수에 대한 수학 함수를 제공합니다.
파이썬에서 복소수는 j(허수단위)를 사용하여 표현합니다.

실수부: .real, 허수부: .imag, 절대값: abs()
극좌표: polar(), rect()`,contentEn:`The cmath module provides mathematical functions for complex numbers.
In Python, complex numbers are expressed using j (imaginary unit).

Real part: .real, Imaginary part: .imag, Absolute value: abs()
Polar coordinates: polar(), rect()`,code:`import math

# 복소수 기초
z1_real = 3
z1_imag = 4
z1_abs = math.sqrt(z1_real**2 + z1_imag**2)

print("=== 복소수 기초 ===")
print(f"z1 = {z1_real} + {z1_imag}j")
print(f"실수부: {z1_real}, 허수부: {z1_imag}")
print(f"|z1| = sqrt({z1_real}^2 + {z1_imag}^2) = {z1_abs}")

# 극좌표
phase = math.atan2(z1_imag, z1_real)
print(f"\\n=== 극좌표 변환 ===")
print(f"위상각: {phase:.4f} rad = {math.degrees(phase):.2f}°")
print(f"극좌표: (r={z1_abs:.2f}, θ={math.degrees(phase):.2f}°)")

# 복원
print(f"\\n직교좌표 복원:")
print(f"  x = r·cos(θ) = {z1_abs * math.cos(phase):.4f}")
print(f"  y = r·sin(θ) = {z1_abs * math.sin(phase):.4f}")

# 활용 예제: 2차 방정식
a, b, c = 1, 2, 5
disc = b**2 - 4*a*c
print(f"\\n=== 2차 방정식 x^2 + 2x + 5 = 0 ===")
print(f"판별식 = {disc} (음수 → 복소수 근)")
print(f"근: -1 ± 2j")`,codeEn:`import math

# Complex number basics
z1_real = 3
z1_imag = 4
z1_abs = math.sqrt(z1_real**2 + z1_imag**2)

print("=== Complex Number Basics ===")
print(f"z1 = {z1_real} + {z1_imag}j")
print(f"Real part: {z1_real}, Imaginary part: {z1_imag}")
print(f"|z1| = sqrt({z1_real}^2 + {z1_imag}^2) = {z1_abs}")

# Polar coordinates
phase = math.atan2(z1_imag, z1_real)
print(f"\\n=== Polar Coordinate Conversion ===")
print(f"Phase angle: {phase:.4f} rad = {math.degrees(phase):.2f}°")
print(f"Polar form: (r={z1_abs:.2f}, θ={math.degrees(phase):.2f}°)")

# Reconstruction
print(f"\\nCartesian reconstruction:")
print(f"  x = r·cos(θ) = {z1_abs * math.cos(phase):.4f}")
print(f"  y = r·sin(θ) = {z1_abs * math.sin(phase):.4f}")

# Application: quadratic equation
a, b, c = 1, 2, 5
disc = b**2 - 4*a*c
print(f"\\n=== Quadratic Equation x^2 + 2x + 5 = 0 ===")
print(f"Discriminant = {disc} (negative → complex roots)")
print(f"Roots: -1 ± 2j")`,expectedOutput:`=== 복소수 기초 ===
z1 = 3 + 4j
실수부: 3, 허수부: 4
|z1| = sqrt(3^2 + 4^2) = 5.0

=== 극좌표 변환 ===
위상각: 0.9273 rad = 53.13°
극좌표: (r=5.00, θ=53.13°)

직교좌표 복원:
  x = r·cos(θ) = 3.0000
  y = r·sin(θ) = 4.0000

=== 2차 방정식 x^2 + 2x + 5 = 0 ===
판별식 = -16 (음수 → 복소수 근)
근: -1 ± 2j`,expectedOutputEn:`=== Complex Number Basics ===
z1 = 3 + 4j
Real part: 3, Imaginary part: 4
|z1| = sqrt(3^2 + 4^2) = 5.0

=== Polar Coordinate Conversion ===
Phase angle: 0.9273 rad = 53.13°
Polar form: (r=5.00, θ=53.13°)

Cartesian reconstruction:
  x = r·cos(θ) = 3.0000
  y = r·sin(θ) = 4.0000

=== Quadratic Equation x^2 + 2x + 5 = 0 ===
Discriminant = -16 (negative → complex roots)
Roots: -1 ± 2j`,tip:"복소수의 절대값(abs)은 원점에서의 거리, 위상각(phase)은 실수축과의 각도를 의미합니다.",tipEn:"The absolute value (abs) of a complex number is the distance from the origin, and the phase is the angle from the real axis."}]},"json-module":{sections:[{title:"JSON 직렬화/역직렬화",titleEn:"JSON Serialization / Deserialization",content:`JSON(JavaScript Object Notation)은 데이터 교환의 표준 형식입니다.

json.dumps(): 파이썬 객체 → JSON 문자열 (직렬화)
json.loads(): JSON 문자열 → 파이썬 객체 (역직렬화)
json.dump(): 파일에 쓰기
json.load(): 파일에서 읽기`,contentEn:`JSON (JavaScript Object Notation) is the standard format for data exchange.

json.dumps(): Python object -> JSON string (serialization)
json.loads(): JSON string -> Python object (deserialization)
json.dump(): Write to file
json.load(): Read from file`,code:`import json

# 파이썬 객체 → JSON 문자열
data = {
    "이름": "김파이",
    "나이": 25,
    "취미": ["코딩", "독서", "게임"],
    "졸업": True,
    "주소": None
}

# dumps: 직렬화 (문자열로)
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print("=== JSON 직렬화 ===")
print(json_str)

# loads: 역직렬화 (파이썬 객체로)
parsed = json.loads(json_str)
print(f"\\n=== 역직렬화 결과 ===")
print(f"이름: {parsed['이름']}")
print(f"취미: {parsed['취미']}")
print(f"타입: {type(parsed)}")`,codeEn:`import json

# Python object → JSON string
data = {
    "name": "Kim",
    "age": 25,
    "hobbies": ["coding", "reading", "gaming"],
    "graduated": True,
    "address": None
}

# dumps: serialization (to string)
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print("=== JSON Serialization ===")
print(json_str)

# loads: deserialization (to Python object)
parsed = json.loads(json_str)
print(f"\\n=== Deserialization Result ===")
print(f"Name: {parsed['name']}")
print(f"Hobbies: {parsed['hobbies']}")
print(f"Type: {type(parsed)}")`,expectedOutput:`=== JSON 직렬화 ===
{
  "이름": "김파이",
  "나이": 25,
  "취미": [
    "코딩",
    "독서",
    "게임"
  ],
  "졸업": true,
  "주소": null
}

=== 역직렬화 결과 ===
이름: 김파이
취미: ['코딩', '독서', '게임']
타입: <class 'dict'>`,expectedOutputEn:`=== JSON Serialization ===
{
  "name": "Kim",
  "age": 25,
  "hobbies": [
    "coding",
    "reading",
    "gaming"
  ],
  "graduated": true,
  "address": null
}

=== Deserialization Result ===
Name: Kim
Hobbies: ['coding', 'reading', 'gaming']
Type: <class 'dict'>`,tip:"ensure_ascii=False로 한글을 그대로 출력하고, indent로 가독성을 높일 수 있습니다.",tipEn:"Use ensure_ascii=False to output non-ASCII characters as-is, and indent for better readability."},{title:"JSON 활용 - API 응답 처리",titleEn:"JSON in Practice - API Response Handling",content:`실제로 JSON은 웹 API에서 데이터를 주고받을 때 가장 많이 사용됩니다.

파이썬 ↔ JSON 타입 매핑:
- dict ↔ object, list ↔ array
- str ↔ string, int/float ↔ number
- True/False ↔ true/false, None ↔ null`,contentEn:`In practice, JSON is most commonly used for sending and receiving data via web APIs.

Python <-> JSON type mapping:
- dict <-> object, list <-> array
- str <-> string, int/float <-> number
- True/False <-> true/false, None <-> null`,code:`import json

# API 응답 시뮬레이션
api_response = '''{
    "status": "success",
    "data": {
        "users": [
            {"id": 1, "name": "Alice", "active": true},
            {"id": 2, "name": "Bob", "active": false},
            {"id": 3, "name": "Charlie", "active": true}
        ],
        "total": 3
    }
}'''

# JSON 파싱
result = json.loads(api_response)

print(f"상태: {result['status']}")
print(f"총 사용자: {result['data']['total']}명\\n")

# 활성 사용자만 필터링
active_users = [
    user['name'] 
    for user in result['data']['users'] 
    if user['active']
]
print(f"활성 사용자: {active_users}")

# 타입 매핑 확인
print(f"\\n=== 타입 매핑 ===")
print(f"Python dict  → JSON object")
print(f"Python list  → JSON array")
print(f"Python True  → JSON true")
print(f"Python None  → JSON null")`,codeEn:`import json

# API response simulation
api_response = '''{
    "status": "success",
    "data": {
        "users": [
            {"id": 1, "name": "Alice", "active": true},
            {"id": 2, "name": "Bob", "active": false},
            {"id": 3, "name": "Charlie", "active": true}
        ],
        "total": 3
    }
}'''

# JSON parsing
result = json.loads(api_response)

print(f"Status: {result['status']}")
print(f"Total users: {result['data']['total']}\\n")

# Filter active users only
active_users = [
    user['name'] 
    for user in result['data']['users'] 
    if user['active']
]
print(f"Active users: {active_users}")

# Type mapping verification
print(f"\\n=== Type Mapping ===")
print(f"Python dict  → JSON object")
print(f"Python list  → JSON array")
print(f"Python True  → JSON true")
print(f"Python None  → JSON null")`,expectedOutput:`상태: success
총 사용자: 3명

활성 사용자: ['Alice', 'Charlie']

=== 타입 매핑 ===
Python dict  → JSON object
Python list  → JSON array
Python True  → JSON true
Python None  → JSON null`,expectedOutputEn:`Status: success
Total users: 3

Active users: ['Alice', 'Charlie']

=== Type Mapping ===
Python dict  → JSON object
Python list  → JSON array
Python True  → JSON true
Python None  → JSON null`,tip:"json.loads()는 문자열을, json.load()는 파일 객체를 받습니다. s가 붙으면 string!",tipEn:'json.loads() takes a string, json.load() takes a file object. The "s" stands for string!'},{title:"JSON 고급 활용",titleEn:"Advanced JSON Usage",content:`JSON은 설정 파일, API 통신, 데이터 저장 등에 널리 사용됩니다.

custom encoder/decoder를 사용하면 파이썬 객체를 JSON으로 변환할 수 있습니다.
sort_keys, separators 등 다양한 옵션을 활용할 수 있습니다.`,contentEn:`JSON is widely used for configuration files, API communication, and data storage.

Custom encoders/decoders allow you to convert Python objects to/from JSON.
Various options like sort_keys and separators can be utilized.`,code:`import json

# 복잡한 JSON 데이터 처리
shop_data = {
    "가게": "파이썬 서점",
    "개업일": "2024-01-15",
    "책": [
        {"제목": "파이썬 입문", "가격": 25000, "재고": 50},
        {"제목": "데이터 분석", "가격": 32000, "재고": 30},
        {"제목": "머신러닝", "가격": 45000, "재고": 15},
        {"제목": "웹 개발", "가격": 28000, "재고": 0}
    ]
}

# 재고가 있는 책만 필터링
available = [b for b in shop_data["책"] if b["재고"] > 0]
print(f"=== {shop_data['가게']} ===")
print(f"재고 있는 책: {len(available)}/{len(shop_data['책'])}권")
for b in available:
    print(f"  {b['제목']:10s} {b['가격']:>6,}원 (재고: {b['재고']})")

# JSON 정렬 출력
print(f"\\n=== JSON 옵션 ===")
print("sort_keys=True  → 키 알파벳 정렬")
print("separators      → 구분자 커스터마이징")
print("default         → 변환 불가 객체 처리")

# 총 재고 금액
total = sum(b["가격"] * b["재고"] for b in shop_data["책"])
print(f"\\n총 재고 금액: {total:,}원")`,codeEn:`import json

# Complex JSON data processing
shop_data = {
    "shop": "Python Bookstore",
    "opened": "2024-01-15",
    "books": [
        {"title": "Python Intro", "price": 25000, "stock": 50},
        {"title": "Data Analysis", "price": 32000, "stock": 30},
        {"title": "Machine Learning", "price": 45000, "stock": 15},
        {"title": "Web Development", "price": 28000, "stock": 0}
    ]
}

# Filter books in stock
available = [b for b in shop_data["books"] if b["stock"] > 0]
print(f"=== {shop_data['shop']} ===")
print(f"Books in stock: {len(available)}/{len(shop_data['books'])}")
for b in available:
    print(f"  {b['title']:17s} {b['price']:>6,} KRW (stock: {b['stock']})")

# JSON output options
print(f"\\n=== JSON Options ===")
print("sort_keys=True  → Sort keys alphabetically")
print("separators      → Customize delimiters")
print("default         → Handle non-serializable objects")

# Total inventory value
total = sum(b["price"] * b["stock"] for b in shop_data["books"])
print(f"\\nTotal inventory value: {total:,} KRW")`,expectedOutput:`=== 파이썬 서점 ===
재고 있는 책: 3/4권
  파이썬 입문  25,000원 (재고: 50)
  데이터 분석  32,000원 (재고: 30)
  머신러닝    45,000원 (재고: 15)

=== JSON 옵션 ===
sort_keys=True  → 키 알파벳 정렬
separators      → 구분자 커스터마이징
default         → 변환 불가 객체 처리

총 재고 금액: 2,885,000원`,expectedOutputEn:`=== Python Bookstore ===
Books in stock: 3/4
  Python Intro      25,000 KRW (stock: 50)
  Data Analysis     32,000 KRW (stock: 30)
  Machine Learning  45,000 KRW (stock: 15)

=== JSON Options ===
sort_keys=True  → Sort keys alphabetically
separators      → Customize delimiters
default         → Handle non-serializable objects

Total inventory value: 2,885,000 KRW`,tip:"API 개발 시 json.dumps(data, ensure_ascii=False, indent=2)를 자주 사용합니다.",tipEn:"When developing APIs, json.dumps(data, ensure_ascii=False, indent=2) is frequently used."}]},"datetime-module":{sections:[{title:"날짜와 시간 생성",titleEn:"Creating Dates and Times",content:`datetime 모듈은 날짜와 시간을 다루는 클래스를 제공합니다.

주요 클래스:
- date: 날짜 (년, 월, 일)
- time: 시간 (시, 분, 초)
- datetime: 날짜 + 시간
- timedelta: 시간 차이`,contentEn:`The datetime module provides classes for handling dates and times.

Key classes:
- date: Date (year, month, day)
- time: Time (hour, minute, second)
- datetime: Date + Time
- timedelta: Time difference`,code:`from datetime import datetime, date, time, timedelta

# 현재 날짜/시간
now = datetime.now()
print(f"현재: {now}")
print(f"날짜: {now.date()}")
print(f"시간: {now.time()}")

# 특정 날짜 생성
birthday = date(2000, 5, 15)
print(f"\\n생일: {birthday}")
print(f"년: {birthday.year}, 월: {birthday.month}, 일: {birthday.day}")
print(f"요일: {birthday.strftime("%A")}")

# 특정 시간 생성
meeting = datetime(2026, 3, 20, 14, 30, 0)
print(f"\\n회의: {meeting}")

# 오늘 날짜
today = date.today()
print(f"\\n오늘: {today}")
print(f"생일로부터: {(today - birthday).days}일 경과")`,codeEn:`from datetime import datetime, date, time, timedelta

# Current date/time
now = datetime.now()
print(f"Now: {now}")
print(f"Date: {now.date()}")
print(f"Time: {now.time()}")

# Creating a specific date
birthday = date(2000, 5, 15)
print(f"\\nBirthday: {birthday}")
print(f"Year: {birthday.year}, Month: {birthday.month}, Day: {birthday.day}")
print(f"Weekday: {birthday.strftime("%A")}")

# Creating a specific datetime
meeting = datetime(2026, 3, 20, 14, 30, 0)
print(f"\\nMeeting: {meeting}")

# Today's date
today = date.today()
print(f"\\nToday: {today}")
print(f"Days since birthday: {(today - birthday).days} days")`,expectedOutput:`현재: 2026-03-18 15:30:00.123456
날짜: 2026-03-18
시간: 15:30:00.123456

생일: 2000-05-15
년: 2000, 월: 5, 일: 15
요일: Monday

회의: 2026-03-20 14:30:00

오늘: 2026-03-18
생일로부터: 9438일 경과`,expectedOutputEn:`Now: 2026-03-18 15:30:00.123456
Date: 2026-03-18
Time: 15:30:00.123456

Birthday: 2000-05-15
Year: 2000, Month: 5, Day: 15
Weekday: Monday

Meeting: 2026-03-20 14:30:00

Today: 2026-03-18
Days since birthday: 9438 days`,tip:"datetime.now()은 로컬 시간, datetime.utcnow()은 UTC 시간을 반환합니다.",tipEn:"datetime.now() returns local time, datetime.utcnow() returns UTC time."},{title:"날짜 포매팅과 연산",titleEn:"Date Formatting and Arithmetic",content:`strftime()으로 날짜를 원하는 형식의 문자열로 변환합니다.
strptime()으로 문자열을 datetime 객체로 파싱합니다.

timedelta로 날짜 간 계산을 수행합니다.`,contentEn:`strftime() converts a date into a formatted string.
strptime() parses a string into a datetime object.

timedelta performs date arithmetic.`,code:`from datetime import datetime, timedelta

now = datetime.now()

# strftime: datetime → 문자열
print("=== 날짜 포매팅 (strftime) ===")
print(f"기본:  {now.strftime("%Y-%m-%d %H:%M:%S")}")
print(f"한국:  {now.strftime("%Y년 %m월 %d일")}")
print(f"시간:  {now.strftime("%p %I:%M")}")
print(f"요일:  {now.strftime("%A, %B %d")}")

# strptime: 문자열 → datetime
date_str = "2026-03-18 14:30:00"
parsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
print(f"\\n파싱 결과: {parsed}")

# timedelta: 날짜 연산
print("\\n=== 날짜 연산 (timedelta) ===")
tomorrow = now + timedelta(days=1)
next_week = now + timedelta(weeks=1)
print(f"내일: {tomorrow.strftime("%Y-%m-%d")}")
print(f"다음 주: {next_week.strftime("%Y-%m-%d")}")
print(f"100일 후: {(now + timedelta(days=100)).strftime("%Y-%m-%d")}")

# 두 날짜 간 차이
start = datetime(2026, 1, 1)
diff = now - start
print(f"\\n올해 경과: {diff.days}일")`,codeEn:`from datetime import datetime, timedelta

now = datetime.now()

# strftime: datetime → string
print("=== Date Formatting (strftime) ===")
print(f"Default: {now.strftime("%Y-%m-%d %H:%M:%S")}")
print(f"Custom:  {now.strftime("%B %d, %Y")}")
print(f"Time:    {now.strftime("%p %I:%M")}")
print(f"Weekday: {now.strftime("%A, %B %d")}")

# strptime: string → datetime
date_str = "2026-03-18 14:30:00"
parsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
print(f"\\nParsed: {parsed}")

# timedelta: date arithmetic
print("\\n=== Date Arithmetic (timedelta) ===")
tomorrow = now + timedelta(days=1)
next_week = now + timedelta(weeks=1)
print(f"Tomorrow: {tomorrow.strftime("%Y-%m-%d")}")
print(f"Next week: {next_week.strftime("%Y-%m-%d")}")
print(f"100 days later: {(now + timedelta(days=100)).strftime("%Y-%m-%d")}")

# Difference between two dates
start = datetime(2026, 1, 1)
diff = now - start
print(f"\\nDays elapsed this year: {diff.days}")`,expectedOutput:`=== 날짜 포매팅 (strftime) ===
기본:  2026-03-18 15:30:00
한국:  2026년 03월 18일
시간:  PM 03:30
요일:  Wednesday, March 18

파싱 결과: 2026-03-18 14:30:00

=== 날짜 연산 (timedelta) ===
내일: 2026-03-19
다음 주: 2026-03-25
100일 후: 2026-06-26

올해 경과: 76일`,expectedOutputEn:`=== Date Formatting (strftime) ===
Default: 2026-03-18 15:30:00
Custom:  March 18, 2026
Time:    PM 03:30
Weekday: Wednesday, March 18

Parsed: 2026-03-18 14:30:00

=== Date Arithmetic (timedelta) ===
Tomorrow: 2026-03-19
Next week: 2026-03-25
100 days later: 2026-06-26

Days elapsed this year: 76`,tip:"%Y=4자리 연도, %m=2자리 월, %d=2자리 일, %H=24시, %I=12시, %M=분, %S=초, %A=요일, %B=월이름",tipEn:"%Y=4-digit year, %m=2-digit month, %d=2-digit day, %H=24h, %I=12h, %M=minute, %S=second, %A=weekday, %B=month name"},{title:"datetime 실전 활용",titleEn:"datetime - Practical Applications",content:`datetime 모듈을 활용한 실전 예제입니다.

D-Day 계산, 나이 계산, 요일 확인, 영업일 계산 등
실생활에 유용한 날짜 처리 패턴을 학습합니다.`,contentEn:`Practical examples using the datetime module.

Learn useful date-handling patterns for real life, including D-Day calculations, age calculations, weekday checks, and business day calculations.`,code:`# D-Day 계산기
target_month = 12
target_day = 25
current_month = 3
current_day = 18

# 크리스마스까지 D-Day (2026년 기준)
days_in_months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
remaining = -current_day
for m in range(current_month, target_month):
    remaining += days_in_months[m]
remaining += target_day

print("=== D-Day 계산기 ===")
print(f"오늘: 2026-03-18")
print(f"크리스마스: 2026-12-25")
print(f"D-{remaining}")

# 나이 계산기
birth_year = 2000
birth_month = 5
birth_day = 15
curr_year = 2026

age = curr_year - birth_year
if current_month < birth_month:
    age -= 1
print(f"\\n=== 나이 계산 ===")
print(f"생년월일: {birth_year}-{birth_month:02d}-{birth_day:02d}")
print(f"만 나이: {age}세")
print(f"한국 나이: {curr_year - birth_year + 1}세")

# 요일 계산 (Zeller 공식 간략화)
print("\\n=== 2026년 3월 달력 ===")
print("월  화  수  목  금  토  일")
print("                 1   2   3")
print(" 4   5   6   7   8   9  10")
print("11  12  13  14  15  16  17")
print("18  19  20  21  22  23  24")
print("25  26  27  28  29  30  31")`,codeEn:`# D-Day Calculator
target_month = 12
target_day = 25
current_month = 3
current_day = 18

# D-Day until Christmas (based on 2026)
days_in_months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
remaining = -current_day
for m in range(current_month, target_month):
    remaining += days_in_months[m]
remaining += target_day

print("=== D-Day Calculator ===")
print(f"Today: 2026-03-18")
print(f"Christmas: 2026-12-25")
print(f"D-{remaining}")

# Age Calculator
birth_year = 2000
birth_month = 5
birth_day = 15
curr_year = 2026

age = curr_year - birth_year
if current_month < birth_month:
    age -= 1
print(f"\\n=== Age Calculator ===")
print(f"Date of birth: {birth_year}-{birth_month:02d}-{birth_day:02d}")
print(f"Age: {age}")
print(f"Korean age: {curr_year - birth_year + 1}")

# Calendar
print("\\n=== March 2026 Calendar ===")
print("Mon Tue Wed Thu Fri Sat Sun")
print("                 1   2   3")
print(" 4   5   6   7   8   9  10")
print("11  12  13  14  15  16  17")
print("18  19  20  21  22  23  24")
print("25  26  27  28  29  30  31")`,expectedOutput:`=== D-Day 계산기 ===
오늘: 2026-03-18
크리스마스: 2026-12-25
D-282

=== 나이 계산 ===
생년월일: 2000-05-15
만 나이: 25세
한국 나이: 27세

=== 2026년 3월 달력 ===
월  화  수  목  금  토  일
                 1   2   3
 4   5   6   7   8   9  10
11  12  13  14  15  16  17
18  19  20  21  22  23  24
25  26  27  28  29  30  31`,expectedOutputEn:`=== D-Day Calculator ===
Today: 2026-03-18
Christmas: 2026-12-25
D-282

=== Age Calculator ===
Date of birth: 2000-05-15
Age: 25
Korean age: 27

=== March 2026 Calendar ===
Mon Tue Wed Thu Fri Sat Sun
                 1   2   3
 4   5   6   7   8   9  10
11  12  13  14  15  16  17
18  19  20  21  22  23  24
25  26  27  28  29  30  31`,tip:"calendar 모듈을 사용하면 달력을 쉽게 출력할 수 있습니다. calendar.month(2026, 3)으로 3월 달력을 생성합니다.",tipEn:"The calendar module makes it easy to print calendars. Use calendar.month(2026, 3) to generate a March 2026 calendar."}]},"turtle-graphics":{sections:[{title:"정사각형 그리기",titleEn:"Drawing a Square",content:`turtle 모듈은 파이썬의 거북이 그래픽 라이브러리입니다.
화면 위의 거북이를 움직여 다양한 도형과 패턴을 그릴 수 있습니다.

기본 명령어:
- forward(거리): 앞으로 이동
- backward(거리): 뒤로 이동
- left(각도): 왼쪽 회전
- right(각도): 오른쪽 회전

아래 코드를 실행하면 SVG로 결과를 확인할 수 있습니다!`,contentEn:`The turtle module is Python's turtle graphics library.
You can draw various shapes and patterns by moving a turtle on the screen.

Basic commands:
- forward(distance): Move forward
- backward(distance): Move backward
- left(angle): Turn left
- right(angle): Turn right

Run the code below to see the result as SVG!`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# 정사각형 그리기
for i in range(4):
    t.forward(100)
    t.right(90)`,expectedOutput:"",tip:"실행 버튼을 누르면 아래에 SVG 그래픽으로 결과가 표시됩니다!",tipEn:"Press the Run button to see the result displayed as SVG graphics below!"},{title:"정다각형 그리기",titleEn:"Drawing Regular Polygons",content:`정다각형은 반복문과 회전 각도 계산으로 쉽게 그릴 수 있습니다.

정n각형의 외각 = 360 / n
예: 삼각형=120°, 사각형=90°, 오각형=72°, 육각형=60°

아래 코드는 삼각형, 사각형, 오각형, 육각형을 나란히 그립니다.`,contentEn:`Regular polygons can be easily drawn using loops and angle calculations.

Exterior angle of a regular n-gon = 360 / n
Examples: triangle=120, square=90, pentagon=72, hexagon=60

The code below draws a triangle, square, pentagon, and hexagon side by side.`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# 삼각형
t.pencolor("red")
for i in range(3):
    t.forward(60)
    t.right(120)

# 이동
t.penup()
t.forward(80)
t.pendown()

# 사각형
t.pencolor("blue")
for i in range(4):
    t.forward(60)
    t.right(90)

# 이동
t.penup()
t.forward(80)
t.pendown()

# 오각형
t.pencolor("green")
for i in range(5):
    t.forward(50)
    t.right(72)

# 이동
t.penup()
t.forward(80)
t.pendown()

# 육각형
t.pencolor("purple")
for i in range(6):
    t.forward(45)
    t.right(60)`,expectedOutput:"",tip:"정n각형의 외각 합은 항상 360°입니다. 따라서 회전 각도 = 360/n 으로 모든 정다각형을 그릴 수 있습니다.",tipEn:"The sum of exterior angles of any regular n-gon is always 360 degrees. So turn angle = 360/n draws any regular polygon."},{title:"별 그리기",titleEn:"Drawing Stars",content:`별 모양은 정다각형보다 큰 각도로 회전하면 만들어집니다.

오각별: 144° 회전 (= 180 - 36)

색상과 채우기를 활용하면 더 화려한 별을 그릴 수 있습니다.
begin_fill() / end_fill()로 도형 내부를 색칠합니다.`,contentEn:`Star shapes are created by turning at a larger angle than for regular polygons.

Five-pointed star: 144 degree turn (= 180 - 36)

Using colors and fills makes stars more colorful.
begin_fill() / end_fill() fills the interior of a shape.`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# 채우기가 있는 별
t.color("red", "gold")
t.begin_fill()
for i in range(5):
    t.forward(100)
    t.right(144)
t.end_fill()

# 옆으로 이동
t.penup()
t.forward(150)
t.pendown()

# 파란 별
t.color("blue", "cyan")
t.begin_fill()
for i in range(5):
    t.forward(80)
    t.right(144)
t.end_fill()`,expectedOutput:"",tip:"오각별의 회전각도 144° = 360° × 2 / 5 입니다. 거북이가 꼭짓점을 하나 건너뛰며 이동하기 때문입니다.",tipEn:"The star turn angle 144 = 360 x 2 / 5. The turtle skips one vertex as it moves."},{title:"무지개 나선",titleEn:"Rainbow Spiral",content:`반복문에서 색상을 바꾸면서 점점 크게 그리면 나선 모양이 됩니다.

이 예제에서는 6가지 무지개 색상을 순환하면서
점점 길어지는 선분을 약간 비틀린 각도로 그립니다.`,contentEn:`Changing colors while drawing increasingly larger shapes in a loop creates a spiral.

This example cycles through 6 rainbow colors while drawing progressively longer lines at a slightly offset angle.`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

colors = ["red", "orange", "gold", "green", "blue", "purple"]

for i in range(90):
    t.pencolor(colors[i % 6])
    t.forward(i * 1.5)
    t.right(61)`,expectedOutput:"",tip:"각도를 61°가 아닌 60°로 하면 정확한 육각형이 됩니다. 약간 비틀어진 각도가 나선을 만들어냅니다.",tipEn:"Using exactly 60 degrees would create a perfect hexagon. The slightly offset angle of 61 degrees is what creates the spiral effect."},{title:"동심원과 꽃 패턴",titleEn:"Concentric Circles and Flower Patterns",content:`penup()/pendown()으로 펜을 들었다 놓으면 이동만 할 수 있습니다.
circle()로 원을 그릴 수 있으며, 크기를 바꿔가며 동심원을 만듭니다.

원을 여러 각도로 겹쳐 그리면 꽃 패턴이 됩니다.`,contentEn:`penup()/pendown() lifts and lowers the pen, allowing movement without drawing.
circle() draws circles, and varying the size creates concentric circles.

Overlapping circles at different angles creates a flower pattern.`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# 꽃잎 패턴
colors = ["red", "orange", "gold", "green", "blue", "purple", "magenta", "cyan"]
for i in range(8):
    t.pencolor(colors[i])
    t.circle(60)
    t.right(45)`,expectedOutput:"",tip:"circle(r)에서 r이 양수면 반시계 방향, 음수면 시계 방향으로 원을 그립니다.",tipEn:"In circle(r), a positive r draws counterclockwise, and a negative r draws clockwise."},{title:"집 그리기",titleEn:"Drawing a House",content:`기본 도형들을 조합하면 복잡한 그림도 그릴 수 있습니다.
이 예제에서는 사각형(벽), 삼각형(지붕), 사각형(문)을 조합하여
간단한 집 모양을 그립니다.

goto()로 원하는 좌표로 이동할 수 있습니다.`,contentEn:`By combining basic shapes, you can create complex drawings.
This example combines a rectangle (wall), triangle (roof), and rectangle (door)
to draw a simple house.

Use goto() to move to any coordinate.`,code:`import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(3)

# 벽 그리기 (채우기)
t.color("black", "cyan")
t.begin_fill()
for i in range(4):
    t.forward(120)
    t.right(90)
t.end_fill()

# 지붕 그리기
t.color("red", "red")
t.begin_fill()
t.left(30)
t.forward(138)
t.right(120)
t.forward(138)
t.right(150)
t.forward(120)
t.end_fill()

# 문 위치로 이동
t.penup()
t.right(90)
t.forward(90)
t.right(90)
t.forward(45)
t.pendown()

# 문 그리기
t.color("brown", "brown")
t.begin_fill()
t.left(90)
for i in range(2):
    t.forward(40)
    t.right(90)
    t.forward(30)
    t.right(90)
t.end_fill()`,expectedOutput:"",tip:"복잡한 그림은 좌표를 미리 계산하고 goto()로 이동하면 쉽게 그릴 수 있습니다.",tipEn:"For complex drawings, pre-calculate coordinates and use goto() to move. This makes drawing much easier."}]},decorators:{sections:[{title:"데코레이터 기초",titleEn:"Decorator Basics",content:`데코레이터는 함수를 감싸서 기능을 추가하는 패턴입니다.
@기호를 사용하여 함수 위에 적용합니다.

데코레이터는 본질적으로 함수를 인자로 받아 새 함수를 반환하는 함수입니다.`,contentEn:`Decorators are a pattern that wraps functions to add functionality.
They are applied above a function using the @ symbol.

A decorator is essentially a function that takes a function as an argument and returns a new function.`,code:`def timer(func):
    def wrapper(*args, **kwargs):
        print(f"[{func.__name__}] 시작")
        result = func(*args, **kwargs)
        print(f"[{func.__name__}] 완료")
        return result
    return wrapper

@timer
def greet(name):
    print(f"안녕하세요, {name}!")

@timer
def add(a, b):
    return a + b

greet("파이썬")
result = add(3, 5)
print(f"결과: {result}")`,codeEn:`def timer(func):
    def wrapper(*args, **kwargs):
        print(f"[{func.__name__}] Start")
        result = func(*args, **kwargs)
        print(f"[{func.__name__}] Done")
        return result
    return wrapper

@timer
def greet(name):
    print(f"Hello, {name}!")

@timer
def add(a, b):
    return a + b

greet("Python")
result = add(3, 5)
print(f"Result: {result}")`,expectedOutput:`[greet] 시작
안녕하세요, 파이썬!
[greet] 완료
[add] 시작
[add] 완료
결과: 8`,expectedOutputEn:`[greet] Start
Hello, Python!
[greet] Done
[add] Start
[add] Done
Result: 8`,tip:"@timer는 greet = timer(greet)와 동일합니다. 문법적 편의를 제공하는 것입니다.",tipEn:"@timer is equivalent to greet = timer(greet). It provides syntactic convenience."},{title:"매개변수가 있는 데코레이터",titleEn:"Decorators with Parameters",content:`데코레이터에 인자를 전달하려면 3중 중첩 함수 구조가 필요합니다.
외부 함수가 매개변수를 받고, 내부에서 실제 데코레이터를 반환합니다.`,contentEn:`To pass arguments to a decorator, a triple-nested function structure is needed.
The outer function receives the parameters and returns the actual decorator inside.`,code:`def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for i in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")

say_hello()`,expectedOutput:`Hello!
Hello!
Hello!`,tip:"functools.wraps를 사용하면 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존할 수 있습니다.",tipEn:"Using functools.wraps preserves the original function's metadata such as __name__ and __doc__."}]},generators:{sections:[{title:"제너레이터 함수",titleEn:"Generator Functions",content:`제너레이터는 yield 키워드를 사용하여 값을 하나씩 생성합니다.
메모리를 절약하면서 큰 시퀀스를 처리할 수 있습니다.

next()로 다음 값을 가져오거나, for문으로 순회합니다.`,contentEn:`Generators produce values one at a time using the yield keyword.
They can process large sequences while saving memory.

Use next() to get the next value, or iterate with a for loop.`,code:`def countdown(n):
    print("카운트다운 시작!")
    while n > 0:
        yield n
        n -= 1
    print("발사!")

# for문으로 순회
for num in countdown(5):
    print(num, end=" ")
print()

# 제너레이터 표현식
squares = (x**2 for x in range(5))
print(list(squares))`,codeEn:`def countdown(n):
    print("Countdown started!")
    while n > 0:
        yield n
        n -= 1
    print("Liftoff!")

# Iterating with for loop
for num in countdown(5):
    print(num, end=" ")
print()

# Generator expression
squares = (x**2 for x in range(5))
print(list(squares))`,expectedOutput:`카운트다운 시작!
5 4 3 2 1 
발사!
[0, 1, 4, 9, 16]`,expectedOutputEn:`Countdown started!
5 4 3 2 1 
Liftoff!
[0, 1, 4, 9, 16]`,tip:"리스트 대신 제너레이터를 사용하면 메모리를 크게 절약할 수 있습니다 (지연 평가).",tipEn:"Using generators instead of lists can greatly save memory (lazy evaluation)."}]},"context-managers":{sections:[{title:"컨텍스트 매니저 만들기",titleEn:"Creating Context Managers",content:`컨텍스트 매니저는 리소스의 획득과 해제를 안전하게 관리합니다.
__enter__와 __exit__ 메서드, 또는 contextlib을 사용하여 구현합니다.`,contentEn:`Context managers safely manage the acquisition and release of resources.
They are implemented using __enter__ and __exit__ methods, or the contextlib module.`,code:`class Timer:
    def __enter__(self):
        print("타이머 시작")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("타이머 종료")
        return False

with Timer() as t:
    total = sum(range(1000))
    print(f"합계: {total}")

print("프로그램 계속...")`,codeEn:`class Timer:
    def __enter__(self):
        print("Timer started")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Timer stopped")
        return False

with Timer() as t:
    total = sum(range(1000))
    print(f"Sum: {total}")

print("Program continues...")`,expectedOutput:`타이머 시작
합계: 499500
타이머 종료
프로그램 계속...`,expectedOutputEn:`Timer started
Sum: 499500
Timer stopped
Program continues...`,tip:"__exit__에서 True를 반환하면 예외를 억제합니다. 보통 False를 반환합니다.",tipEn:"Returning True in __exit__ suppresses exceptions. Usually False is returned."}]},concurrency:{sections:[{title:"동시성 개념 이해",titleEn:"Understanding Concurrency",content:`동시성은 여러 작업을 동시에 처리하는 것처럼 보이게 하는 기법입니다.

- 스레딩(threading): I/O 바운드 작업에 적합
- 멀티프로세싱(multiprocessing): CPU 바운드 작업에 적합
- asyncio: 비동기 I/O 처리`,contentEn:`Concurrency is a technique that makes it appear as if multiple tasks are being processed simultaneously.

- Threading: suitable for I/O-bound tasks
- Multiprocessing: suitable for CPU-bound tasks
- asyncio: asynchronous I/O handling`,code:`# 동시성 개념 시뮬레이션
def task(name, steps):
    results = []
    for i in range(1, steps + 1):
        results.append(f"{name} - 단계 {i}/{steps}")
    return results

# 순차 실행
task1 = task("다운로드", 3)
task2 = task("처리", 3)

for step in task1:
    print(step)
for step in task2:
    print(step)

print("\\n모든 작업 완료!")`,codeEn:`# Concurrency concept simulation
def task(name, steps):
    results = []
    for i in range(1, steps + 1):
        results.append(f"{name} - Step {i}/{steps}")
    return results

# Sequential execution
task1 = task("Download", 3)
task2 = task("Process", 3)

for step in task1:
    print(step)
for step in task2:
    print(step)

print("\\nAll tasks completed!")`,expectedOutput:`다운로드 - 단계 1/3
다운로드 - 단계 2/3
다운로드 - 단계 3/3
처리 - 단계 1/3
처리 - 단계 2/3
처리 - 단계 3/3

모든 작업 완료!`,expectedOutputEn:`Download - Step 1/3
Download - Step 2/3
Download - Step 3/3
Process - Step 1/3
Process - Step 2/3
Process - Step 3/3

All tasks completed!`,tip:"I/O 바운드 작업(네트워크, 파일)에는 스레딩이나 asyncio가, CPU 바운드(계산)에는 멀티프로세싱이 효율적입니다.",tipEn:"Threading or asyncio is efficient for I/O-bound tasks (network, files), while multiprocessing is efficient for CPU-bound tasks (computation)."}]},"typing-testing":{sections:[{title:"타입 힌트",titleEn:"Type Hints",content:`타입 힌트는 변수와 함수의 타입 정보를 명시합니다.
런타임에 강제되지 않지만, IDE 자동완성과 정적 분석에 도움됩니다.`,contentEn:`Type hints specify type information for variables and functions.
They are not enforced at runtime, but help with IDE autocompletion and static analysis.`,code:`# 타입 힌트 예제
def calculate_bmi(weight: float, height: float) -> float:
    return weight / (height ** 2)

def greet_all(names: list) -> None:
    for name in names:
        print(f"안녕, {name}!")

bmi = calculate_bmi(70.0, 1.75)
print(f"BMI: {bmi:.1f}")

greet_all(["철수", "영희", "민수"])`,codeEn:`# Type hints example
def calculate_bmi(weight: float, height: float) -> float:
    return weight / (height ** 2)

def greet_all(names: list) -> None:
    for name in names:
        print(f"Hello, {name}!")

bmi = calculate_bmi(70.0, 1.75)
print(f"BMI: {bmi:.1f}")

greet_all(["Alice", "Bob", "Charlie"])`,expectedOutput:`BMI: 22.9
안녕, 철수!
안녕, 영희!
안녕, 민수!`,expectedOutputEn:`BMI: 22.9
Hello, Alice!
Hello, Bob!
Hello, Charlie!`,tip:"typing 모듈의 List[str], Dict[str, int], Optional[str] 등으로 더 구체적인 타입을 지정할 수 있습니다.",tipEn:"You can specify more specific types using the typing module: List[str], Dict[str, int], Optional[str], etc."}]},"numpy-basics":{sections:[{title:"NumPy 배열 생성",titleEn:"Creating NumPy Arrays",content:`NumPy는 고성능 수치 연산 라이브러리입니다.
ndarray(N-dimensional array)는 NumPy의 핵심 자료구조입니다.

다양한 방법으로 배열을 생성할 수 있습니다.`,contentEn:`NumPy is a high-performance numerical computing library.
ndarray (N-dimensional array) is the core data structure of NumPy.

Arrays can be created in various ways.`,code:`import numpy as np

# 리스트에서 배열 생성
a = np.array([1, 2, 3, 4, 5])
print(f"1차원: {a}")

# 2차원 배열
b = np.array([[1, 2, 3], [4, 5, 6]])
print(f"2차원:\\n{b}")
print(f"shape: {b.shape}")

# 특수 배열
print(f"zeros: {np.zeros(3)}")
print(f"ones: {np.ones(4)}")
print(f"arange: {np.arange(0, 10, 2)}")`,codeEn:`import numpy as np

# Creating array from list
a = np.array([1, 2, 3, 4, 5])
print(f"1D: {a}")

# 2D array
b = np.array([[1, 2, 3], [4, 5, 6]])
print(f"2D:\\n{b}")
print(f"shape: {b.shape}")

# Special arrays
print(f"zeros: {np.zeros(3)}")
print(f"ones: {np.ones(4)}")
print(f"arange: {np.arange(0, 10, 2)}")`,expectedOutput:`1차원: [1 2 3 4 5]
2차원:
[[1 2 3]
 [4 5 6]]
shape: (2, 3)
zeros: [0. 0. 0.]
ones: [1. 1. 1. 1.]
arange: [0 2 4 6 8]`,expectedOutputEn:`1D: [1 2 3 4 5]
2D:
[[1 2 3]
 [4 5 6]]
shape: (2, 3)
zeros: [0. 0. 0.]
ones: [1. 1. 1. 1.]
arange: [0 2 4 6 8]`,tip:"NumPy 배열은 같은 타입의 요소만 포함할 수 있어 파이썬 리스트보다 훨씬 빠릅니다.",tipEn:"NumPy arrays can only contain elements of the same type, making them much faster than Python lists."},{title:"배열 인덱싱과 슬라이싱",titleEn:"Array Indexing and Slicing",content:`NumPy 배열도 파이썬 리스트처럼 인덱싱과 슬라이싱이 가능합니다.
2차원 배열은 [행, 열] 형태로 접근합니다.

불리언 마스크를 이용한 조건부 인덱싱도 매우 유용합니다.`,contentEn:`NumPy arrays support indexing and slicing just like Python lists.
2D arrays are accessed using the [row, column] format.

Boolean mask-based conditional indexing is also very useful.`,code:`import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"전체:\\n{a}")
print(f"a[0,1] = {a[0, 1]}")     # 0행 1열
print(f"a[1,:] = {a[1, :]}")     # 1행 전체
print(f"a[:,2] = {a[:, 2]}")     # 2열 전체

# 불리언 마스킹
print(f"5보다 큰: {a[a > 5]}")`,codeEn:`import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"Full:\\n{a}")
print(f"a[0,1] = {a[0, 1]}")     # Row 0, Col 1
print(f"a[1,:] = {a[1, :]}")     # Entire row 1
print(f"a[:,2] = {a[:, 2]}")     # Entire col 2

# Boolean masking
print(f"Greater than 5: {a[a > 5]}")`,expectedOutput:`전체:
[[1 2 3]
 [4 5 6]
 [7 8 9]]
a[0,1] = 2
a[1,:] = [4 5 6]
a[:,2] = [3 6 9]
5보다 큰: [6 7 8 9]`,expectedOutputEn:`Full:
[[1 2 3]
 [4 5 6]
 [7 8 9]]
a[0,1] = 2
a[1,:] = [4 5 6]
a[:,2] = [3 6 9]
Greater than 5: [6 7 8 9]`,tip:"NumPy 슬라이싱은 복사본이 아닌 뷰(view)를 반환합니다. 복사하려면 .copy()를 사용하세요.",tipEn:"NumPy slicing returns a view, not a copy. Use .copy() if you need a copy."}]},"numpy-advanced":{sections:[{title:"배열 연산과 브로드캐스팅",titleEn:"Array Operations and Broadcasting",content:`NumPy의 핵심 장점은 요소별(element-wise) 연산과 브로드캐스팅입니다.
반복문 없이도 배열 전체에 연산을 적용할 수 있습니다.

브로드캐스팅은 크기가 다른 배열 간의 연산을 가능하게 합니다.`,contentEn:`The key advantages of NumPy are element-wise operations and broadcasting.
Operations can be applied to entire arrays without loops.

Broadcasting enables operations between arrays of different sizes.`,code:`import numpy as np

a = np.array([1, 2, 3, 4])
print(f"원본: {a}")
print(f"*2: {a * 2}")         # 스칼라 연산
print(f"**2: {a ** 2}")        # 거듭제곱
print(f"합계: {np.sum(a)}")
print(f"평균: {np.mean(a)}")
print(f"표준편차: {np.std(a):.2f}")

# 2차원 연산
m = np.array([[1, 2], [3, 4]])
print(f"\\n행별 합: {np.sum(m, axis=1)}")
print(f"열별 합: {np.sum(m, axis=0)}")`,codeEn:`import numpy as np

a = np.array([1, 2, 3, 4])
print(f"Original: {a}")
print(f"*2: {a * 2}")         # Scalar operation
print(f"**2: {a ** 2}")        # Exponentiation
print(f"Sum: {np.sum(a)}")
print(f"Mean: {np.mean(a)}")
print(f"Std dev: {np.std(a):.2f}")

# 2D operations
m = np.array([[1, 2], [3, 4]])
print(f"\\nRow sums: {np.sum(m, axis=1)}")
print(f"Col sums: {np.sum(m, axis=0)}")`,expectedOutput:`원본: [1 2 3 4]
*2: [2 4 6 8]
**2: [ 1  4  9 16]
합계: 10
평균: 2.5
표준편차: 1.12

행별 합: [3 7]
열별 합: [4 6]`,expectedOutputEn:`Original: [1 2 3 4]
*2: [2 4 6 8]
**2: [ 1  4  9 16]
Sum: 10
Mean: 2.5
Std dev: 1.12

Row sums: [3 7]
Col sums: [4 6]`,tip:"axis=0은 행 방향(열별), axis=1은 열 방향(행별) 연산을 수행합니다.",tipEn:"axis=0 operates along rows (per column), axis=1 operates along columns (per row)."}]},"pandas-basics":{sections:[{title:"Series와 DataFrame",titleEn:"Series and DataFrame",content:`Pandas는 데이터 분석의 핵심 라이브러리입니다.

Series: 1차원 데이터 (인덱스 + 값)
DataFrame: 2차원 데이터 (표 형태, 행+열)`,contentEn:`Pandas is the core library for data analysis.

Series: 1-dimensional data (index + values)
DataFrame: 2-dimensional data (tabular format, rows + columns)`,code:`import pandas as pd

# Series 생성
scores = pd.Series([90, 85, 78, 95], index=["국어", "영어", "수학", "과학"])
print("=== Series ===")
print(scores)
print(f"\\n평균: {scores.mean():.1f}")

# DataFrame 생성
data = {
    "이름": ["김철수", "이영희", "박민수"],
    "나이": [20, 22, 21],
    "점수": [85, 92, 78]
}
df = pd.DataFrame(data)
print("\\n=== DataFrame ===")
print(df)`,codeEn:`import pandas as pd

# Creating a Series
scores = pd.Series([90, 85, 78, 95], index=["Korean", "English", "Math", "Science"])
print("=== Series ===")
print(scores)
print(f"\\nMean: {scores.mean():.1f}")

# Creating a DataFrame
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [20, 22, 21],
    "Score": [85, 92, 78]
}
df = pd.DataFrame(data)
print("\\n=== DataFrame ===")
print(df)`,expectedOutput:`=== Series ===
국어    90
영어    85
수학    78
과학    95
dtype: int64

평균: 87.0

=== DataFrame ===
   이름  나이  점수
0  김철수  20  85
1  이영희  22  92
2  박민수  21  78`,expectedOutputEn:`=== Series ===
Korean     90
English    85
Math       78
Science    95
dtype: int64

Mean: 87.0

=== DataFrame ===
      Name  Age  Score
0    Alice   20     85
1      Bob   22     92
2  Charlie   21     78`,tip:"DataFrame은 엑셀 시트와 비슷합니다. 행(index)과 열(columns)로 구성됩니다.",tipEn:"A DataFrame is similar to an Excel sheet. It consists of rows (index) and columns."},{title:"데이터 조회와 탐색",titleEn:"Data Viewing and Exploration",content:`DataFrame의 기본 정보를 확인하는 여러 메서드가 있습니다.

head(), tail(), info(), describe(), shape, columns 등을 활용합니다.`,contentEn:`There are several methods to check the basic information of a DataFrame.

Use head(), tail(), info(), describe(), shape, columns, etc.`,code:`import pandas as pd

df = pd.DataFrame({
    "상품": ["노트북", "마우스", "키보드", "모니터", "헤드셋"],
    "가격": [1200000, 35000, 89000, 450000, 120000],
    "재고": [5, 100, 50, 12, 30]
})

print(df.head(3))   # 상위 3행
print(f"\\n크기: {df.shape}")
print(f"\\n통계:\\n{df.describe()}")`,codeEn:`import pandas as pd

df = pd.DataFrame({
    "Product": ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"],
    "Price": [1200000, 35000, 89000, 450000, 120000],
    "Stock": [5, 100, 50, 12, 30]
})

print(df.head(3))   # Top 3 rows
print(f"\\nShape: {df.shape}")
print(f"\\nStatistics:\\n{df.describe()}")`,expectedOutput:`    상품      가격   재고
0  노트북  1200000    5
1  마우스    35000  100
2  키보드    89000   50

크기: (5, 3)

통계:
              가격         재고
count      5.00      5.00
mean  378800.00     39.40
std   467889.63     37.57
min    35000.00      5.00
25%    89000.00     12.00
50%   120000.00     30.00
75%   450000.00     50.00
max  1200000.00    100.00`,expectedOutputEn:`    Product    Price  Stock
0    Laptop  1200000      5
1     Mouse    35000    100
2  Keyboard    89000     50

Shape: (5, 3)

Statistics:
              Price        Stock
count      5.00      5.00
mean  378800.00     39.40
std   467889.63     37.57
min    35000.00      5.00
25%    89000.00     12.00
50%   120000.00     30.00
75%   450000.00     50.00
max  1200000.00    100.00`,tip:"describe()는 숫자형 열에 대해 자동으로 통계 요약을 제공합니다.",tipEn:"describe() automatically provides a statistical summary for numeric columns."}]},"pandas-manipulation":{sections:[{title:"데이터 필터링과 정렬",titleEn:"Data Filtering and Sorting",content:`Pandas는 조건에 맞는 데이터를 쉽게 필터링할 수 있습니다.
불리언 인덱싱과 query() 메서드를 활용합니다.`,contentEn:`Pandas makes it easy to filter data based on conditions.
Use boolean indexing and the query() method.`,code:`import pandas as pd

df = pd.DataFrame({
    "이름": ["김철수", "이영희", "박민수", "정수진", "최동혁"],
    "점수": [85, 92, 78, 95, 88],
    "학년": [1, 2, 1, 3, 2]
})

# 필터링
print("90점 이상:")
print(df[df["점수"] >= 90])

# 정렬
print("\\n점수순 정렬:")
print(df.sort_values("점수", ascending=False))`,codeEn:`import pandas as pd

df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "Score": [85, 92, 78, 95, 88],
    "Year": [1, 2, 1, 3, 2]
})

# Filtering
print("Score >= 90:")
print(df[df["Score"] >= 90])

# Sorting
print("\\nSorted by Score:")
print(df.sort_values("Score", ascending=False))`,expectedOutput:`90점 이상:
   이름  점수  학년
1  이영희  92    2
3  정수진  95    3

점수순 정렬:
   이름  점수  학년
3  정수진  95    3
1  이영희  92    2
4  최동혁  88    2
0  김철수  85    1
2  박민수  78    1`,expectedOutputEn:`Score >= 90:
    Name  Score  Year
1    Bob     92     2
3  Diana     95     3

Sorted by Score:
      Name  Score  Year
3    Diana     95     3
1      Bob     92     2
4      Eve     88     2
0    Alice     85     1
2  Charlie     78     1`,tip:"여러 조건을 결합할 때는 &(and)와 |(or)를 사용하고, 각 조건을 괄호로 감싸세요.",tipEn:"When combining multiple conditions, use & (and) and | (or), and wrap each condition in parentheses."},{title:"GroupBy와 집계",titleEn:"GroupBy and Aggregation",content:`groupby()는 특정 열의 값을 기준으로 데이터를 그룹화합니다.
그룹화 후 sum(), mean(), count() 등의 집계 함수를 적용합니다.`,contentEn:`groupby() groups data based on the values of a specific column.
After grouping, apply aggregation functions such as sum(), mean(), count(), etc.`,code:`import pandas as pd

df = pd.DataFrame({
    "부서": ["개발", "기획", "개발", "기획", "개발"],
    "이름": ["김", "이", "박", "정", "최"],
    "매출": [100, 80, 120, 90, 110]
})

print("부서별 매출 합계:")
print(df.groupby("부서")["매출"].sum())

print("\\n부서별 통계:")
print(df.groupby("부서")["매출"].agg(["mean", "sum", "count"]))`,codeEn:`import pandas as pd

df = pd.DataFrame({
    "Dept": ["Dev", "Planning", "Dev", "Planning", "Dev"],
    "Name": ["Kim", "Lee", "Park", "Jung", "Choi"],
    "Sales": [100, 80, 120, 90, 110]
})

print("Sales total by department:")
print(df.groupby("Dept")["Sales"].sum())

print("\\nDepartment statistics:")
print(df.groupby("Dept")["Sales"].agg(["mean", "sum", "count"]))`,expectedOutput:`부서별 매출 합계:
부서
개발    330
기획    170
Name: 매출, dtype: int64

부서별 통계:
       mean  sum  count
부서                     
개발  110.0  330      3
기획   85.0  170      2`,expectedOutputEn:`Sales total by department:
Dept
Dev         330
Planning    170
Name: Sales, dtype: int64

Department statistics:
           mean  sum  count
Dept                       
Dev       110.0  330      3
Planning   85.0  170      2`,tip:"agg()에 여러 집계 함수를 리스트로 전달하면 한 번에 여러 통계를 계산할 수 있습니다.",tipEn:"Passing multiple aggregation functions as a list to agg() lets you calculate multiple statistics at once."}]},"data-project":{sections:[{title:"데이터 분석 프로젝트",titleEn:"Data Analysis Project",content:`이번 레슨에서는 지금까지 배운 NumPy와 Pandas를 활용하여
실전 데이터 분석을 수행합니다.

학생 성적 데이터를 생성하고, 분석하고, 인사이트를 도출합니다.`,contentEn:`In this lesson, we will perform practical data analysis using
NumPy and Pandas that we have learned so far.

We will generate student grade data, analyze it, and derive insights.`,code:`import numpy as np
import pandas as pd

# 데이터 생성
np.random.seed(42)
n = 20
data = {
    "학생": [f"학생{i+1}" for i in range(n)],
    "수학": np.random.randint(50, 100, n),
    "영어": np.random.randint(50, 100, n),
    "과학": np.random.randint(50, 100, n)
}
df = pd.DataFrame(data)
df["평균"] = df[["수학", "영어", "과학"]].mean(axis=1).round(1)
df["등급"] = pd.cut(df["평균"], bins=[0,60,70,80,90,100], labels=["F","D","C","B","A"])

print("=== 상위 5명 ===")
print(df.sort_values("평균", ascending=False).head())
print(f"\\n전체 평균: {df["평균"].mean():.1f}")
print(f"\\n등급 분포:\\n{df["등급"].value_counts().sort_index()}")`,codeEn:`import numpy as np
import pandas as pd

# Generate data
np.random.seed(42)
n = 20
data = {
    "Student": [f"Student{i+1}" for i in range(n)],
    "Math": np.random.randint(50, 100, n),
    "English": np.random.randint(50, 100, n),
    "Science": np.random.randint(50, 100, n)
}
df = pd.DataFrame(data)
df["Average"] = df[["Math", "English", "Science"]].mean(axis=1).round(1)
df["Grade"] = pd.cut(df["Average"], bins=[0,60,70,80,90,100], labels=["F","D","C","B","A"])

print("=== Top 5 Students ===")
print(df.sort_values("Average", ascending=False).head())
print(f"\\nOverall average: {df["Average"].mean():.1f}")
print(f"\\nGrade distribution:\\n{df["Grade"].value_counts().sort_index()}")`,expectedOutput:`=== 상위 5명 ===
    학생  수학  영어  과학   평균 등급
15  학생16  91  95  96  94.0    A
7   학생8   92  88  97  92.3    A
2   학생3   87  94  90  90.3    A
...`,expectedOutputEn:`=== Top 5 Students ===
     Student  Math  English  Science  Average Grade
15  Student16   91       95       96     94.0     A
7    Student8   92       88       97     92.3     A
2    Student3   87       94       90     90.3     A
...`,tip:'데이터 분석은 "질문 → 탐색 → 분석 → 시각화 → 결론" 순서로 진행하는 것이 좋습니다.',tipEn:"Data analysis is best done in this order: Question, Explore, Analyze, Visualize, Conclude."}]},"matplotlib-seaborn":{sections:[{title:"Matplotlib 기본 그래프",titleEn:"Basic Matplotlib Graphs",content:`Matplotlib는 파이썬에서 가장 많이 사용되는 시각화 라이브러리입니다.
plt.plot()으로 선 그래프, plt.bar()로 막대 그래프, plt.scatter()로 산점도를 그릴 수 있습니다.

matplotlib.pyplot을 plt로 임포트하는 것이 관례입니다.`,contentEn:`Matplotlib is the most widely used visualization library in Python.
Use plt.plot() for line graphs, plt.bar() for bar charts, and plt.scatter() for scatter plots.

The convention is to import matplotlib.pyplot as plt.`,code:`import matplotlib.pyplot as plt
import numpy as np

# 데이터 준비
x = np.linspace(0, 10, 100)
y_sin = np.sin(x)
y_cos = np.cos(x)

# 선 그래프 (코드 설명)
print("=== Matplotlib 기본 사용법 ===")
print("plt.plot(x, y)     : 선 그래프")
print("plt.bar(x, y)      : 막대 그래프")
print("plt.scatter(x, y)  : 산점도")
print("plt.hist(data)     : 히스토그램")
print("plt.pie(sizes)     : 원형 그래프")
print()

# 실제 코드 예시
print("# 선 그래프 예제")
print("fig, ax = plt.subplots(figsize=(8, 5))")
print("ax.plot(x, np.sin(x), label='sin(x)', color='blue')")
print("ax.plot(x, np.cos(x), label='cos(x)', color='red')")
print("ax.set_title('삼각함수 그래프')")
print("ax.set_xlabel('x')")
print("ax.set_ylabel('y')")
print("ax.legend()")
print("plt.show()")
print()
print(f"sin 데이터 포인트: {len(y_sin)}개")
print(f"x 범위: [{x[0]:.1f}, {x[-1]:.1f}]")`,codeEn:`import matplotlib.pyplot as plt
import numpy as np

# Prepare data
x = np.linspace(0, 10, 100)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Line chart (code explanation)
print("=== Matplotlib Basic Usage ===")
print("plt.plot(x, y)     : Line chart")
print("plt.bar(x, y)      : Bar chart")
print("plt.scatter(x, y)  : Scatter plot")
print("plt.hist(data)     : Histogram")
print("plt.pie(sizes)     : Pie chart")
print()

# Actual code example
print("# Line chart example")
print("fig, ax = plt.subplots(figsize=(8, 5))")
print("ax.plot(x, np.sin(x), label='sin(x)', color='blue')")
print("ax.plot(x, np.cos(x), label='cos(x)', color='red')")
print("ax.set_title('Trigonometric Functions')")
print("ax.set_xlabel('x')")
print("ax.set_ylabel('y')")
print("ax.legend()")
print("plt.show()")
print()
print(f"sin data points: {len(y_sin)}")
print(f"x range: [{x[0]:.1f}, {x[-1]:.1f}]")`,expectedOutput:`=== Matplotlib 기본 사용법 ===
plt.plot(x, y)     : 선 그래프
plt.bar(x, y)      : 막대 그래프
plt.scatter(x, y)  : 산점도
plt.hist(data)     : 히스토그램
plt.pie(sizes)     : 원형 그래프

# 선 그래프 예제
fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(x, np.sin(x), label='sin(x)', color='blue')
ax.plot(x, np.cos(x), label='cos(x)', color='red')
ax.set_title('삼각함수 그래프')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.legend()
plt.show()

sin 데이터 포인트: 100개
x 범위: [0.0, 10.0]`,expectedOutputEn:`=== Matplotlib Basic Usage ===
plt.plot(x, y)     : Line chart
plt.bar(x, y)      : Bar chart
plt.scatter(x, y)  : Scatter plot
plt.hist(data)     : Histogram
plt.pie(sizes)     : Pie chart

# Line chart example
fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(x, np.sin(x), label='sin(x)', color='blue')
ax.plot(x, np.cos(x), label='cos(x)', color='red')
ax.set_title('Trigonometric Functions')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.legend()
plt.show()

sin data points: 100
x range: [0.0, 10.0]`,tip:"plt.subplots()를 사용하면 Figure와 Axes 객체를 동시에 생성하여 더 세밀한 제어가 가능합니다.",tipEn:"Using plt.subplots() creates Figure and Axes objects simultaneously, allowing finer control."},{title:"막대 그래프와 히스토그램",titleEn:"Bar Charts and Histograms",content:`막대 그래프(bar chart)는 카테고리별 값을 비교할 때 사용합니다.
히스토그램(histogram)은 데이터의 분포를 보여줍니다.

plt.bar()와 plt.hist()로 각각 그릴 수 있습니다.`,contentEn:`Bar charts are used to compare values by category.
Histograms show the distribution of data.

Use plt.bar() and plt.hist() to draw them respectively.`,code:`import numpy as np

# 막대 그래프 데이터
languages = ["Python", "JavaScript", "Java", "C++", "Go"]
popularity = [30.5, 22.3, 16.8, 12.1, 8.3]

print("=== 프로그래밍 언어 인기도 ===")
for lang, pop in zip(languages, popularity):
    bar = "#" * int(pop)
    print(f"{lang:>12}: {bar} {pop}%")

print()

# 히스토그램 시뮬레이션
np.random.seed(42)
scores = np.random.normal(75, 10, 100).astype(int)
print("=== 시험 성적 분포 ===")
bins = [(50,60), (60,70), (70,80), (80,90), (90,100)]
for low, high in bins:
    count = np.sum((scores >= low) & (scores < high))
    bar = "#" * count
    print(f"{low}-{high}: {bar} ({count}명)")

print(f"\\n평균: {scores.mean():.1f}, 표준편차: {scores.std():.1f}")`,codeEn:`import numpy as np

# Bar chart data
languages = ["Python", "JavaScript", "Java", "C++", "Go"]
popularity = [30.5, 22.3, 16.8, 12.1, 8.3]

print("=== Programming Language Popularity ===")
for lang, pop in zip(languages, popularity):
    bar = "#" * int(pop)
    print(f"{lang:>12}: {bar} {pop}%")

print()

# Histogram simulation
np.random.seed(42)
scores = np.random.normal(75, 10, 100).astype(int)
print("=== Exam Score Distribution ===")
bins = [(50,60), (60,70), (70,80), (80,90), (90,100)]
for low, high in bins:
    count = np.sum((scores >= low) & (scores < high))
    bar = "#" * count
    print(f"{low}-{high}: {bar} ({count} students)")

print(f"\\nMean: {scores.mean():.1f}, Std dev: {scores.std():.1f}")`,expectedOutput:`=== 프로그래밍 언어 인기도 ===
      Python: ############################## 30.5%
  JavaScript: ###################### 22.3%
        Java: ################ 16.8%
         C++: ############ 12.1%
          Go: ######## 8.3%

=== 시험 성적 분포 ===
50-60: ###### (6명)
60-70: ################### (19명)
70-80: ################################### (35명)
80-90: ############################### (31명)
90-100: ######### (9명)

평균: 75.3, 표준편차: 10.1`,expectedOutputEn:`=== Programming Language Popularity ===
      Python: ############################## 30.5%
  JavaScript: ###################### 22.3%
        Java: ################ 16.8%
         C++: ############ 12.1%
          Go: ######## 8.3%

=== Exam Score Distribution ===
50-60: ###### (6 students)
60-70: ################### (19 students)
70-80: ################################### (35 students)
80-90: ############################### (31 students)
90-100: ######### (9 students)

Mean: 75.3, Std dev: 10.1`,tip:"plt.barh()를 사용하면 가로 막대 그래프를, plt.hist(bins=20)으로 구간 수를 조절할 수 있습니다.",tipEn:"Use plt.barh() for horizontal bar charts, and plt.hist(bins=20) to adjust the number of bins."},{title:"Seaborn 통계 시각화",titleEn:"Seaborn Statistical Visualization",content:`Seaborn은 Matplotlib 기반의 통계 시각화 라이브러리입니다.
더 아름다운 기본 스타일과 통계적 그래프를 제공합니다.

주요 함수: sns.scatterplot, sns.boxplot, sns.heatmap, sns.countplot, sns.pairplot`,contentEn:`Seaborn is a statistical visualization library built on Matplotlib.
It provides more beautiful default styles and statistical graphs.

Key functions: sns.scatterplot, sns.boxplot, sns.heatmap, sns.countplot, sns.pairplot`,code:`import numpy as np
import pandas as pd

# Seaborn 시각화 개념
print("=== Seaborn 주요 차트 종류 ===")
charts = {
    "sns.scatterplot()": "산점도 - 두 변수의 관계",
    "sns.lineplot()": "선 그래프 - 시계열 데이터",
    "sns.barplot()": "막대 그래프 - 그룹별 평균",
    "sns.boxplot()": "박스 플롯 - 분포와 이상치",
    "sns.heatmap()": "히트맵 - 상관관계 행렬",
    "sns.histplot()": "히스토그램 - 데이터 분포",
    "sns.pairplot()": "페어 플롯 - 다변량 관계",
    "sns.countplot()": "카운트 플롯 - 범주별 빈도"
}
for func, desc in charts.items():
    print(f"  {func:24s} → {desc}")

# 상관행렬 시뮬레이션
np.random.seed(42)
df = pd.DataFrame({
    "수학": np.random.randint(50, 100, 30),
    "과학": np.random.randint(50, 100, 30),
    "영어": np.random.randint(50, 100, 30)
})
df["과학"] = df["수학"] * 0.7 + np.random.randint(10, 30, 30)

print("\\n=== 과목별 상관계수 ===")
corr = df.corr().round(2)
print(corr)
print("\\n# sns.heatmap(corr, annot=True, cmap='coolwarm')")
print("# → 상관관계를 색상으로 시각화합니다")`,codeEn:`import numpy as np
import pandas as pd

# Seaborn visualization concepts
print("=== Seaborn Key Chart Types ===")
charts = {
    "sns.scatterplot()": "Scatter plot - Relationship between two variables",
    "sns.lineplot()": "Line plot - Time series data",
    "sns.barplot()": "Bar plot - Group means",
    "sns.boxplot()": "Box plot - Distribution and outliers",
    "sns.heatmap()": "Heatmap - Correlation matrix",
    "sns.histplot()": "Histogram - Data distribution",
    "sns.pairplot()": "Pair plot - Multivariate relationships",
    "sns.countplot()": "Count plot - Category frequencies"
}
for func, desc in charts.items():
    print(f"  {func:24s} → {desc}")

# Correlation matrix simulation
np.random.seed(42)
df = pd.DataFrame({
    "Math": np.random.randint(50, 100, 30),
    "Science": np.random.randint(50, 100, 30),
    "English": np.random.randint(50, 100, 30)
})
df["Science"] = df["Math"] * 0.7 + np.random.randint(10, 30, 30)

print("\\n=== Subject Correlation Coefficients ===")
corr = df.corr().round(2)
print(corr)
print("\\n# sns.heatmap(corr, annot=True, cmap='coolwarm')")
print("# → Visualize correlations with colors")`,expectedOutput:`=== Seaborn 주요 차트 종류 ===
  sns.scatterplot()         → 산점도 - 두 변수의 관계
  sns.lineplot()            → 선 그래프 - 시계열 데이터
  sns.barplot()             → 막대 그래프 - 그룹별 평균
  sns.boxplot()             → 박스 플롯 - 분포와 이상치
  sns.heatmap()             → 히트맵 - 상관관계 행렬
  sns.histplot()            → 히스토그램 - 데이터 분포
  sns.pairplot()            → 페어 플롯 - 다변량 관계
  sns.countplot()           → 카운트 플롯 - 범주별 빈도

=== 과목별 상관계수 ===
       수학    과학    영어
수학  1.00   0.85  -0.07
과학  0.85   1.00  -0.02
영어 -0.07  -0.02   1.00

# sns.heatmap(corr, annot=True, cmap='coolwarm')
# → 상관관계를 색상으로 시각화합니다`,expectedOutputEn:`=== Seaborn Key Chart Types ===
  sns.scatterplot()         → Scatter plot - Relationship between two variables
  sns.lineplot()            → Line plot - Time series data
  sns.barplot()             → Bar plot - Group means
  sns.boxplot()             → Box plot - Distribution and outliers
  sns.heatmap()             → Heatmap - Correlation matrix
  sns.histplot()            → Histogram - Data distribution
  sns.pairplot()            → Pair plot - Multivariate relationships
  sns.countplot()           → Count plot - Category frequencies

=== Subject Correlation Coefficients ===
          Math  Science  English
Math      1.00     0.85    -0.07
Science   0.85     1.00    -0.02
English  -0.07    -0.02     1.00

# sns.heatmap(corr, annot=True, cmap='coolwarm')
# → Visualize correlations with colors`,tip:'Seaborn은 sns.set_theme()로 전체 스타일을 한 번에 설정할 수 있습니다. "darkgrid", "whitegrid", "ticks" 등의 스타일이 있습니다.',tipEn:'Seaborn can set the overall style at once with sns.set_theme(). Available styles include "darkgrid", "whitegrid", "ticks", etc.'}]},"scikit-learn":{sections:[{title:"머신러닝 기초와 데이터 준비",titleEn:"Machine Learning Basics and Data Preparation",content:`Scikit-learn(sklearn)은 파이썬의 대표적인 머신러닝 라이브러리입니다.

머신러닝의 기본 흐름:
1. 데이터 준비 → 2. 학습/검증 분리 → 3. 모델 학습 → 4. 예측 → 5. 평가

train_test_split으로 데이터를 학습용/테스트용으로 나눕니다.`,contentEn:`Scikit-learn (sklearn) is Python's most popular machine learning library.

Basic machine learning workflow:
1. Prepare data -> 2. Train/test split -> 3. Train model -> 4. Predict -> 5. Evaluate

Use train_test_split to divide data into training and test sets.`,code:`import numpy as np

# 머신러닝 기본 개념
print("=== 머신러닝 핵심 개념 ===")
concepts = {
    "지도 학습 (Supervised)": "정답(레이블)이 있는 데이터로 학습",
    "비지도 학습 (Unsupervised)": "정답 없이 데이터의 패턴을 발견",
    "분류 (Classification)": "카테고리 예측 (스팸/정상, 고양이/개)",
    "회귀 (Regression)": "연속적인 값 예측 (가격, 온도)",
    "클러스터링 (Clustering)": "유사한 데이터끼리 그룹화"
}
for key, val in concepts.items():
    print(f"  {key}\\n    → {val}")

# train_test_split 시뮬레이션
np.random.seed(42)
X = np.random.rand(100, 2)  # 100개 샘플, 2개 특성
y = (X[:, 0] + X[:, 1] > 1).astype(int)  # 합이 1 초과면 1

# 80:20 분리
split = int(0.8 * len(X))
X_train, X_test = X[:split], X[split:]
y_train, y_test = y[:split], y[split:]

print(f"\\n=== 데이터 분리 ===")
print(f"전체 데이터: {len(X)}개")
print(f"학습 데이터: {len(X_train)}개 ({len(X_train)/len(X)*100:.0f}%)")
print(f"테스트 데이터: {len(X_test)}개 ({len(X_test)/len(X)*100:.0f}%)")
print(f"\\n클래스 분포: 0={sum(y==0)}개, 1={sum(y==1)}개")`,codeEn:`import numpy as np

# Machine Learning core concepts
print("=== Machine Learning Core Concepts ===")
concepts = {
    "Supervised Learning": "Learning from labeled data",
    "Unsupervised Learning": "Discovering patterns without labels",
    "Classification": "Predicting categories (spam/normal, cat/dog)",
    "Regression": "Predicting continuous values (price, temperature)",
    "Clustering": "Grouping similar data together"
}
for key, val in concepts.items():
    print(f"  {key}\\n    → {val}")

# train_test_split simulation
np.random.seed(42)
X = np.random.rand(100, 2)  # 100 samples, 2 features
y = (X[:, 0] + X[:, 1] > 1).astype(int)  # 1 if sum > 1

# 80:20 split
split = int(0.8 * len(X))
X_train, X_test = X[:split], X[split:]
y_train, y_test = y[:split], y[split:]

print(f"\\n=== Data Split ===")
print(f"Total data: {len(X)} samples")
print(f"Training data: {len(X_train)} samples ({len(X_train)/len(X)*100:.0f}%)")
print(f"Test data: {len(X_test)} samples ({len(X_test)/len(X)*100:.0f}%)")
print(f"\\nClass distribution: 0={sum(y==0)}, 1={sum(y==1)}")`,expectedOutput:`=== 머신러닝 핵심 개념 ===
  지도 학습 (Supervised)
    → 정답(레이블)이 있는 데이터로 학습
  비지도 학습 (Unsupervised)
    → 정답 없이 데이터의 패턴을 발견
  분류 (Classification)
    → 카테고리 예측 (스팸/정상, 고양이/개)
  회귀 (Regression)
    → 연속적인 값 예측 (가격, 온도)
  클러스터링 (Clustering)
    → 유사한 데이터끼리 그룹화

=== 데이터 분리 ===
전체 데이터: 100개
학습 데이터: 80개 (80%)
테스트 데이터: 20개 (20%)

클래스 분포: 0=48개, 1=52개`,expectedOutputEn:`=== Machine Learning Core Concepts ===
  Supervised Learning
    → Learning from labeled data
  Unsupervised Learning
    → Discovering patterns without labels
  Classification
    → Predicting categories (spam/normal, cat/dog)
  Regression
    → Predicting continuous values (price, temperature)
  Clustering
    → Grouping similar data together

=== Data Split ===
Total data: 100 samples
Training data: 80 samples (80%)
Test data: 20 samples (20%)

Class distribution: 0=48, 1=52`,tip:"train_test_split(X, y, test_size=0.2, random_state=42)로 재현 가능한 데이터 분리를 할 수 있습니다.",tipEn:"Use train_test_split(X, y, test_size=0.2, random_state=42) for reproducible data splitting."},{title:"분류 모델 - KNN과 결정트리",titleEn:"Classification Models - KNN and Decision Trees",content:`K-최근접 이웃(KNN)은 가장 직관적인 분류 알고리즘입니다.
가까운 K개의 이웃을 보고 다수결로 클래스를 결정합니다.

결정트리(Decision Tree)는 데이터를 조건에 따라 분기하여 분류합니다.
직관적이고 해석이 쉬운 것이 장점입니다.`,contentEn:`K-Nearest Neighbors (KNN) is the most intuitive classification algorithm.
It looks at the K closest neighbors and decides the class by majority vote.

Decision Trees classify data by branching based on conditions.
Their advantage is being intuitive and easy to interpret.`,code:`import numpy as np

# KNN 알고리즘 시뮬레이션
print("=== KNN (K-Nearest Neighbors) ===")
print("1. 새 데이터가 들어오면")
print("2. 기존 데이터와의 거리를 계산")
print("3. 가장 가까운 K개의 이웃을 선택")
print("4. 다수결로 클래스를 결정\\n")

# 간단한 KNN 구현
np.random.seed(42)
train_X = np.array([[1,2],[2,3],[3,1],[6,5],[7,7],[8,6]])
train_y = np.array([0, 0, 0, 1, 1, 1])  # 0: A, 1: B
new_point = np.array([5, 4])

distances = np.sqrt(np.sum((train_X - new_point)**2, axis=1))
print(f"새 데이터: {new_point}")
print(f"각 점과의 거리: {distances.round(2)}")

k = 3
nearest_idx = np.argsort(distances)[:k]
nearest_labels = train_y[nearest_idx]
print(f"\\nK={k}일 때 가장 가까운 이웃: {nearest_idx}")
print(f"이웃의 클래스: {nearest_labels}")
print(f"예측 결과: 클래스 {np.bincount(nearest_labels).argmax()}")

print(f"\\n=== Scikit-learn 코드 ===")
print("from sklearn.neighbors import KNeighborsClassifier")
print("from sklearn.tree import DecisionTreeClassifier")
print("\\nknn = KNeighborsClassifier(n_neighbors=3)")
print("knn.fit(X_train, y_train)")
print("predictions = knn.predict(X_test)")`,codeEn:`import numpy as np

# KNN Algorithm Simulation
print("=== KNN (K-Nearest Neighbors) ===")
print("1. When new data arrives")
print("2. Calculate distance to existing data")
print("3. Select the K nearest neighbors")
print("4. Decide class by majority vote\\n")

# Simple KNN implementation
np.random.seed(42)
train_X = np.array([[1,2],[2,3],[3,1],[6,5],[7,7],[8,6]])
train_y = np.array([0, 0, 0, 1, 1, 1])  # 0: A, 1: B
new_point = np.array([5, 4])

distances = np.sqrt(np.sum((train_X - new_point)**2, axis=1))
print(f"New data: {new_point}")
print(f"Distance to each point: {distances.round(2)}")

k = 3
nearest_idx = np.argsort(distances)[:k]
nearest_labels = train_y[nearest_idx]
print(f"\\nK={k} nearest neighbors: {nearest_idx}")
print(f"Neighbor classes: {nearest_labels}")
print(f"Prediction: Class {np.bincount(nearest_labels).argmax()}")

print(f"\\n=== Scikit-learn Code ===")
print("from sklearn.neighbors import KNeighborsClassifier")
print("from sklearn.tree import DecisionTreeClassifier")
print("\\nknn = KNeighborsClassifier(n_neighbors=3)")
print("knn.fit(X_train, y_train)")
print("predictions = knn.predict(X_test)")`,expectedOutput:`=== KNN (K-Nearest Neighbors) ===
1. 새 데이터가 들어오면
2. 기존 데이터와의 거리를 계산
3. 가장 가까운 K개의 이웃을 선택
4. 다수결로 클래스를 결정

새 데이터: [5 4]
각 점과의 거리: [4.47 3.16 3.61 1.41 3.61 3.61]

K=3일 때 가장 가까운 이웃: [3 2 5]
이웃의 클래스: [1 0 1]
예측 결과: 클래스 1

=== Scikit-learn 코드 ===
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
predictions = knn.predict(X_test)`,expectedOutputEn:`=== KNN (K-Nearest Neighbors) ===
1. When new data arrives
2. Calculate distance to existing data
3. Select the K nearest neighbors
4. Decide class by majority vote

New data: [5 4]
Distance to each point: [4.47 3.16 3.61 1.41 3.61 3.61]

K=3 nearest neighbors: [3 2 5]
Neighbor classes: [1 0 1]
Prediction: Class 1

=== Scikit-learn Code ===
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
predictions = knn.predict(X_test)`,tip:"KNN에서 K값이 작으면 과적합(overfitting), 크면 과소적합(underfitting) 위험이 있습니다. 보통 홀수를 사용합니다.",tipEn:"In KNN, a small K risks overfitting and a large K risks underfitting. Odd numbers are typically used."},{title:"모델 평가와 성능 지표",titleEn:"Model Evaluation and Performance Metrics",content:`머신러닝에서 모델의 성능을 정확히 평가하는 것은 매우 중요합니다.

주요 평가 지표:
- 정확도(Accuracy): 전체 중 맞춘 비율
- 정밀도(Precision): 양성 예측 중 실제 양성 비율
- 재현율(Recall): 실제 양성 중 양성으로 예측한 비율
- F1 Score: 정밀도와 재현율의 조화 평균`,contentEn:`Accurately evaluating model performance is crucial in machine learning.

Key evaluation metrics:
- Accuracy: ratio of correct predictions out of total
- Precision: ratio of true positives among positive predictions
- Recall: ratio of positive predictions among actual positives
- F1 Score: harmonic mean of precision and recall`,code:`import numpy as np

# 혼동 행렬 (Confusion Matrix) 시뮬레이션
print("=== 혼동 행렬 (Confusion Matrix) ===")
print("                  예측")
print("              양성    음성")
print("실제 양성 |  TP=45  | FN=5  |")
print("실제 음성 |  FP=10  | TN=40 |")

TP, FN, FP, TN = 45, 5, 10, 40
total = TP + FN + FP + TN

accuracy = (TP + TN) / total
precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * precision * recall / (precision + recall)

print(f"\\n=== 성능 지표 ===")
print(f"정확도 (Accuracy):  {accuracy:.2%}")
print(f"정밀도 (Precision): {precision:.2%}")
print(f"재현율 (Recall):    {recall:.2%}")
print(f"F1 Score:           {f1:.2%}")

print(f"\\n=== Scikit-learn 코드 ===")
print("from sklearn.metrics import (")
print("    accuracy_score, precision_score,")
print("    recall_score, f1_score,")
print("    confusion_matrix, classification_report")
print(")")
print("\\nprint(classification_report(y_test, y_pred))")
print("# → 정밀도, 재현율, F1을 한번에 출력")`,codeEn:`import numpy as np

# Confusion Matrix Simulation
print("=== Confusion Matrix ===")
print("                  Predicted")
print("              Positive  Negative")
print("Actual Pos |  TP=45  | FN=5  |")
print("Actual Neg |  FP=10  | TN=40 |")

TP, FN, FP, TN = 45, 5, 10, 40
total = TP + FN + FP + TN

accuracy = (TP + TN) / total
precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * precision * recall / (precision + recall)

print(f"\\n=== Performance Metrics ===")
print(f"Accuracy:  {accuracy:.2%}")
print(f"Precision: {precision:.2%}")
print(f"Recall:    {recall:.2%}")
print(f"F1 Score:  {f1:.2%}")

print(f"\\n=== Scikit-learn Code ===")
print("from sklearn.metrics import (")
print("    accuracy_score, precision_score,")
print("    recall_score, f1_score,")
print("    confusion_matrix, classification_report")
print(")")
print("\\nprint(classification_report(y_test, y_pred))")
print("# → Prints precision, recall, F1 at once")`,expectedOutput:`=== 혼동 행렬 (Confusion Matrix) ===
                  예측
              양성    음성
실제 양성 |  TP=45  | FN=5  |
실제 음성 |  FP=10  | TN=40 |

=== 성능 지표 ===
정확도 (Accuracy):  85.00%
정밀도 (Precision): 81.82%
재현율 (Recall):    90.00%
F1 Score:           85.71%

=== Scikit-learn 코드 ===
from sklearn.metrics import (
    accuracy_score, precision_score,
    recall_score, f1_score,
    confusion_matrix, classification_report
)

print(classification_report(y_test, y_pred))
# → 정밀도, 재현율, F1을 한번에 출력`,expectedOutputEn:`=== Confusion Matrix ===
                  Predicted
              Positive  Negative
Actual Pos |  TP=45  | FN=5  |
Actual Neg |  FP=10  | TN=40 |

=== Performance Metrics ===
Accuracy:  85.00%
Precision: 81.82%
Recall:    90.00%
F1 Score:  85.71%

=== Scikit-learn Code ===
from sklearn.metrics import (
    accuracy_score, precision_score,
    recall_score, f1_score,
    confusion_matrix, classification_report
)

print(classification_report(y_test, y_pred))
# → Prints precision, recall, F1 at once`,tip:"불균형 데이터셋에서는 정확도보다 F1 Score나 AUC-ROC가 더 좋은 평가 지표입니다.",tipEn:"For imbalanced datasets, F1 Score or AUC-ROC are better metrics than accuracy."}]},"tensorflow-pytorch":{sections:[{title:"딥러닝과 신경망 기초",titleEn:"Deep Learning and Neural Network Basics",content:`딥러닝은 인공 신경망을 여러 층으로 쌓아 복잡한 패턴을 학습하는 기술입니다.

핵심 구성 요소:
- 뉴런(Neuron): 입력에 가중치를 곱하고 활성화 함수를 적용
- 층(Layer): 뉴런의 집합 (입력층, 은닉층, 출력층)
- 역전파(Backpropagation): 오차를 역방향으로 전파하여 가중치 업데이트`,contentEn:`Deep learning is a technique that learns complex patterns by stacking multiple layers of artificial neural networks.

Key components:
- Neuron: multiplies inputs by weights and applies an activation function
- Layer: a collection of neurons (input layer, hidden layer, output layer)
- Backpropagation: propagates errors backward to update weights`,code:`import numpy as np

# 단일 뉴런 시뮬레이션
print("=== 단일 뉴런 동작 원리 ===")

# 입력과 가중치
inputs = np.array([0.5, 0.3, 0.2])
weights = np.array([0.4, 0.6, 0.8])
bias = 0.1

# 가중합 계산
weighted_sum = np.dot(inputs, weights) + bias
print(f"입력: {inputs}")
print(f"가중치: {weights}")
print(f"편향: {bias}")
print(f"가중합: {inputs[0]}*{weights[0]} + {inputs[1]}*{weights[1]} + {inputs[2]}*{weights[2]} + {bias}")
print(f"       = {weighted_sum:.2f}")

# 활성화 함수 (ReLU, Sigmoid)
def relu(x): return max(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))

print(f"\\nReLU({weighted_sum:.2f}) = {relu(weighted_sum):.2f}")
print(f"Sigmoid({weighted_sum:.2f}) = {sigmoid(weighted_sum):.4f}")

print(f"\\n=== 주요 활성화 함수 ===")
print("ReLU:    max(0, x)  → 가장 많이 사용")
print("Sigmoid: 1/(1+e^-x) → 이진 분류 출력")
print("Softmax: e^x/sum    → 다중 분류 출력")
print("Tanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위")`,codeEn:`import numpy as np

# Single Neuron Simulation
print("=== How a Single Neuron Works ===")

# Inputs and weights
inputs = np.array([0.5, 0.3, 0.2])
weights = np.array([0.4, 0.6, 0.8])
bias = 0.1

# Weighted sum
weighted_sum = np.dot(inputs, weights) + bias
print(f"Inputs: {inputs}")
print(f"Weights: {weights}")
print(f"Bias: {bias}")
print(f"Weighted sum: {inputs[0]}*{weights[0]} + {inputs[1]}*{weights[1]} + {inputs[2]}*{weights[2]} + {bias}")
print(f"            = {weighted_sum:.2f}")

# Activation functions (ReLU, Sigmoid)
def relu(x): return max(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))

print(f"\\nReLU({weighted_sum:.2f}) = {relu(weighted_sum):.2f}")
print(f"Sigmoid({weighted_sum:.2f}) = {sigmoid(weighted_sum):.4f}")

print(f"\\n=== Key Activation Functions ===")
print("ReLU:    max(0, x)  → Most commonly used")
print("Sigmoid: 1/(1+e^-x) → Binary classification output")
print("Softmax: e^x/sum    → Multi-class output")
print("Tanh:    (e^x-e^-x)/(e^x+e^-x) → Range -1 to 1")`,expectedOutput:`=== 단일 뉴런 동작 원리 ===
입력: [0.5 0.3 0.2]
가중치: [0.4 0.6 0.8]
편향: 0.1
가중합: 0.5*0.4 + 0.3*0.6 + 0.2*0.8 + 0.1
       = 0.64

ReLU(0.64) = 0.64
Sigmoid(0.64) = 0.6547

=== 주요 활성화 함수 ===
ReLU:    max(0, x)  → 가장 많이 사용
Sigmoid: 1/(1+e^-x) → 이진 분류 출력
Softmax: e^x/sum    → 다중 분류 출력
Tanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위`,expectedOutputEn:`=== How a Single Neuron Works ===
Inputs: [0.5 0.3 0.2]
Weights: [0.4 0.6 0.8]
Bias: 0.1
Weighted sum: 0.5*0.4 + 0.3*0.6 + 0.2*0.8 + 0.1
            = 0.64

ReLU(0.64) = 0.64
Sigmoid(0.64) = 0.6547

=== Key Activation Functions ===
ReLU:    max(0, x)  → Most commonly used
Sigmoid: 1/(1+e^-x) → Binary classification output
Softmax: e^x/sum    → Multi-class output
Tanh:    (e^x-e^-x)/(e^x+e^-x) → Range -1 to 1`,tip:"ReLU는 계산이 빠르고 기울기 소실 문제를 해결하여 은닉층에서 가장 많이 사용됩니다.",tipEn:"ReLU is the most commonly used activation function in hidden layers because it is fast to compute and solves the vanishing gradient problem."},{title:"TensorFlow / Keras 모델 구성",titleEn:"TensorFlow / Keras Model Building",content:`TensorFlow는 Google이 개발한 딥러닝 프레임워크입니다.
Keras는 TensorFlow의 고수준 API로, 직관적인 모델 구성을 제공합니다.

Sequential 모델은 층을 순서대로 쌓는 가장 기본적인 방법입니다.`,contentEn:`TensorFlow is a deep learning framework developed by Google.
Keras is TensorFlow's high-level API, providing intuitive model building.

The Sequential model is the most basic way to stack layers in order.`,code:`import numpy as np

# TensorFlow/Keras 모델 구조 설명
print("=== TensorFlow/Keras Sequential 모델 ===")
print()
print("import tensorflow as tf")
print("from tensorflow import keras")
print()
print("model = keras.Sequential([")
print("    keras.layers.Dense(128, activation='relu', input_shape=(784,)),")
print("    keras.layers.Dropout(0.2),")
print("    keras.layers.Dense(64, activation='relu'),")
print("    keras.layers.Dense(10, activation='softmax')")
print("])")
print()
print("model.compile(")
print("    optimizer='adam',")
print("    loss='sparse_categorical_crossentropy',")
print("    metrics=['accuracy']")
print(")")
print()
print("model.fit(X_train, y_train, epochs=10, batch_size=32)")

# 모델 구조 시뮬레이션
print("\\n=== 모델 구조 요약 ===")
layers = [
    ("Dense (입력층)", 784, 128, 784*128+128),
    ("Dropout", 128, 128, 0),
    ("Dense (은닉층)", 128, 64, 128*64+64),
    ("Dense (출력층)", 64, 10, 64*10+10)
]
total_params = 0
print(f"{'Layer':20s} {'Output Shape':15s} {'Params':>10s}")
print("-" * 48)
for name, inp, out, params in layers:
    print(f"{name:20s} (None, {out:>4d})     {params:>10,}")
    total_params += params
print("-" * 48)
print(f"{'Total':20s} {'':<15s} {total_params:>10,}")`,codeEn:`import numpy as np

# TensorFlow/Keras model structure explanation
print("=== TensorFlow/Keras Sequential Model ===")
print()
print("import tensorflow as tf")
print("from tensorflow import keras")
print()
print("model = keras.Sequential([")
print("    keras.layers.Dense(128, activation='relu', input_shape=(784,)),")
print("    keras.layers.Dropout(0.2),")
print("    keras.layers.Dense(64, activation='relu'),")
print("    keras.layers.Dense(10, activation='softmax')")
print("])")
print()
print("model.compile(")
print("    optimizer='adam',")
print("    loss='sparse_categorical_crossentropy',")
print("    metrics=['accuracy']")
print(")")
print()
print("model.fit(X_train, y_train, epochs=10, batch_size=32)")

# Model structure simulation
print("\\n=== Model Summary ===")
layers = [
    ("Dense (Input)", 784, 128, 784*128+128),
    ("Dropout", 128, 128, 0),
    ("Dense (Hidden)", 128, 64, 128*64+64),
    ("Dense (Output)", 64, 10, 64*10+10)
]
total_params = 0
print(f"{'Layer':20s} {'Output Shape':15s} {'Params':>10s}")
print("-" * 48)
for name, inp, out, params in layers:
    print(f"{name:20s} (None, {out:>4d})     {params:>10,}")
    total_params += params
print("-" * 48)
print(f"{'Total':20s} {'':<15s} {total_params:>10,}")`,expectedOutput:`=== TensorFlow/Keras Sequential 모델 ===

import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, batch_size=32)

=== 모델 구조 요약 ===
Layer                Output Shape        Params
------------------------------------------------
Dense (입력층)       (None,  128)       100,480
Dropout              (None,  128)             0
Dense (은닉층)       (None,   64)         8,256
Dense (출력층)       (None,   10)           650
------------------------------------------------
Total                                   109,386`,expectedOutputEn:`=== TensorFlow/Keras Sequential Model ===

import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, batch_size=32)

=== Model Summary ===
Layer                Output Shape        Params
------------------------------------------------
Dense (Input)        (None,  128)       100,480
Dropout              (None,  128)             0
Dense (Hidden)       (None,   64)         8,256
Dense (Output)       (None,   10)           650
------------------------------------------------
Total                                   109,386`,tip:"Dense 층의 파라미터 수 = (입력 수 * 출력 수) + 출력 수(편향). Dropout은 학습 시 일부 뉴런을 무작위로 비활성화하여 과적합을 방지합니다.",tipEn:"Dense layer parameters = (inputs * outputs) + outputs (bias). Dropout randomly deactivates some neurons during training to prevent overfitting."},{title:"PyTorch 기초와 학습 루프",titleEn:"PyTorch Basics and Training Loop",content:`PyTorch는 Facebook(Meta)이 개발한 딥러닝 프레임워크입니다.
동적 계산 그래프를 사용하여 디버깅이 쉽고 연구에 많이 사용됩니다.

TensorFlow와 달리 학습 루프를 직접 작성하여 더 세밀한 제어가 가능합니다.`,contentEn:`PyTorch is a deep learning framework developed by Facebook (Meta).
It uses dynamic computation graphs, making debugging easy and is widely used in research.

Unlike TensorFlow, you write the training loop manually, allowing finer control.`,code:`import numpy as np

# PyTorch 모델 구조 설명
print("=== PyTorch 모델 정의 ===")
print()
print("import torch")
print("import torch.nn as nn")
print("import torch.optim as optim")
print()
print("class MyModel(nn.Module):")
print("    def __init__(self):")
print("        super().__init__()")
print("        self.fc1 = nn.Linear(784, 128)")
print("        self.fc2 = nn.Linear(128, 64)")
print("        self.fc3 = nn.Linear(64, 10)")
print("        self.relu = nn.ReLU()")
print()
print("    def forward(self, x):")
print("        x = self.relu(self.fc1(x))")
print("        x = self.relu(self.fc2(x))")
print("        return self.fc3(x)")

print("\\n=== PyTorch 학습 루프 ===")
print("model = MyModel()")
print("criterion = nn.CrossEntropyLoss()")
print("optimizer = optim.Adam(model.parameters(), lr=0.001)")
print()
print("for epoch in range(10):")
print("    optimizer.zero_grad()      # 기울기 초기화")
print("    outputs = model(X_train)   # 순전파")
print("    loss = criterion(outputs, y_train)  # 손실 계산")
print("    loss.backward()            # 역전파")
print("    optimizer.step()           # 가중치 업데이트")

# 학습 시뮬레이션
print("\\n=== 학습 과정 시뮬레이션 ===")
np.random.seed(42)
for epoch in range(1, 11):
    loss = 2.5 * np.exp(-0.3 * epoch) + np.random.uniform(-0.05, 0.05)
    acc = min(0.99, 0.5 + 0.05 * epoch + np.random.uniform(-0.02, 0.02))
    if epoch % 2 == 0 or epoch == 1:
        print(f"Epoch {epoch:2d}/10 - Loss: {loss:.4f} - Accuracy: {acc:.2%}")`,codeEn:`import numpy as np

# PyTorch model structure explanation
print("=== PyTorch Model Definition ===")
print()
print("import torch")
print("import torch.nn as nn")
print("import torch.optim as optim")
print()
print("class MyModel(nn.Module):")
print("    def __init__(self):")
print("        super().__init__()")
print("        self.fc1 = nn.Linear(784, 128)")
print("        self.fc2 = nn.Linear(128, 64)")
print("        self.fc3 = nn.Linear(64, 10)")
print("        self.relu = nn.ReLU()")
print()
print("    def forward(self, x):")
print("        x = self.relu(self.fc1(x))")
print("        x = self.relu(self.fc2(x))")
print("        return self.fc3(x)")

print("\\n=== PyTorch Training Loop ===")
print("model = MyModel()")
print("criterion = nn.CrossEntropyLoss()")
print("optimizer = optim.Adam(model.parameters(), lr=0.001)")
print()
print("for epoch in range(10):")
print("    optimizer.zero_grad()      # Reset gradients")
print("    outputs = model(X_train)   # Forward pass")
print("    loss = criterion(outputs, y_train)  # Compute loss")
print("    loss.backward()            # Backpropagation")
print("    optimizer.step()           # Update weights")

# Training simulation
print("\\n=== Training Simulation ===")
np.random.seed(42)
for epoch in range(1, 11):
    loss = 2.5 * np.exp(-0.3 * epoch) + np.random.uniform(-0.05, 0.05)
    acc = min(0.99, 0.5 + 0.05 * epoch + np.random.uniform(-0.02, 0.02))
    if epoch % 2 == 0 or epoch == 1:
        print(f"Epoch {epoch:2d}/10 - Loss: {loss:.4f} - Accuracy: {acc:.2%}")`,expectedOutput:`=== PyTorch 모델 정의 ===

import torch
import torch.nn as nn
import torch.optim as optim

class MyModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        return self.fc3(x)

=== PyTorch 학습 루프 ===
model = MyModel()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

for epoch in range(10):
    optimizer.zero_grad()      # 기울기 초기화
    outputs = model(X_train)   # 순전파
    loss = criterion(outputs, y_train)  # 손실 계산
    loss.backward()            # 역전파
    optimizer.step()           # 가중치 업데이트

=== 학습 과정 시뮬레이션 ===
Epoch  1/10 - Loss: 1.8044 - Accuracy: 54.37%
Epoch  2/10 - Loss: 1.3549 - Accuracy: 60.89%
Epoch  4/10 - Loss: 0.7789 - Accuracy: 69.03%
Epoch  6/10 - Loss: 0.4423 - Accuracy: 80.42%
Epoch  8/10 - Loss: 0.2609 - Accuracy: 89.85%
Epoch 10/10 - Loss: 0.1484 - Accuracy: 98.71%`,expectedOutputEn:`=== PyTorch Model Definition ===

import torch
import torch.nn as nn
import torch.optim as optim

class MyModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        return self.fc3(x)

=== PyTorch Training Loop ===
model = MyModel()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

for epoch in range(10):
    optimizer.zero_grad()      # Reset gradients
    outputs = model(X_train)   # Forward pass
    loss = criterion(outputs, y_train)  # Compute loss
    loss.backward()            # Backpropagation
    optimizer.step()           # Update weights

=== Training Simulation ===
Epoch  1/10 - Loss: 1.8044 - Accuracy: 54.37%
Epoch  2/10 - Loss: 1.3549 - Accuracy: 60.89%
Epoch  4/10 - Loss: 0.7789 - Accuracy: 69.03%
Epoch  6/10 - Loss: 0.4423 - Accuracy: 80.42%
Epoch  8/10 - Loss: 0.2609 - Accuracy: 89.85%
Epoch 10/10 - Loss: 0.1484 - Accuracy: 98.71%`,tip:"TensorFlow는 프로덕션 배포에, PyTorch는 연구/프로토타이핑에 많이 사용됩니다. 최근에는 두 프레임워크 모두 기능이 비슷해지고 있습니다.",tipEn:"TensorFlow is widely used for production deployment, while PyTorch is popular for research/prototyping. Recently, both frameworks have become similar in capabilities."}]}},C="__TURTLE_SVG__";function Z({initialCode:g="",expectedOutput:o="",lessonId:j=""}){const[p,v]=h.useState(g),[w,x]=h.useState(!1),[u,t]=h.useState([]),[m,_]=h.useState(!1),N=h.useRef(null),{incrementCodeRuns:y}=z(),{requireAuth:r}=I(),{t:i,lang:O}=B(),{status:f,output:l,errorMsg:b,runCode:d,resetOutput:a}=V(),s=f==="loading"||f==="running",D=h.useMemo(()=>{const e=[];for(const c of p.split(`
`)){if(c.trim().startsWith("#"))continue;const E=[...c.matchAll(new RegExp(`(?<![a-zA-Z])input\\s*\\(\\s*(?:["']([^"']*?)["'])?\\s*\\)`,"g"))];for(const k of E)e.push(k[1]||i("editor.inputPlaceholder"));const S=[...c.matchAll(/(?:textinput|numinput)\s*\(\s*["'][^"']*["']\s*,\s*["']([^"']*?)["']/g)];for(const k of S)e.push(k[1]||i("editor.inputPlaceholder"))}return e},[p,i]),R=h.useMemo(()=>/import\s+turtle|from\s+turtle\s+import|turtle\.Turtle/.test(p),[p]),A=l&&l.includes(C),T=A?l.substring(0,l.indexOf(C)).trim():l,M=A?l.substring(l.indexOf(C)+C.length).trim():"",F=h.useCallback(()=>{_(!1);const e=D;if(e.length>0){a(),t(new Array(e.length).fill("")),_(!0);return}d(p),y()},[d,p,D,a,y]),K=h.useCallback(e=>{e.preventDefault(),_(!1),d(p,u),y()},[d,p,u,y]),q=h.useCallback(()=>{v(g),t([]),_(!1),a()},[g,a]),H=h.useCallback(()=>{a(),_(!1)},[a]),U=e=>{if(e.key==="Tab"){e.preventDefault();const c=e.target.selectionStart,E=e.target.selectionEnd,S=p.substring(0,c)+"    "+p.substring(E);v(S),setTimeout(()=>{e.target.selectionStart=e.target.selectionEnd=c+4},0)}(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&F()},J=p.split(`
`).length,W=l||b;return n.jsxs("div",{className:"code-editor",children:[n.jsxs("div",{className:"editor-header",children:[n.jsxs("span",{className:"editor-header-title",children:[n.jsx("i",{className:"fa-brands fa-python"})," Python Editor",R&&n.jsx("span",{className:"editor-header-badge",children:"Turtle"})]}),n.jsx("div",{className:"editor-header-actions",children:o&&n.jsxs("button",{className:`editor-header-btn${w?" active":""}`,onClick:()=>x(!w),children:[n.jsx("i",{className:"fa-solid fa-lightbulb"})," ",i("editor.hint")]})})]}),n.jsxs("div",{className:"editor-body",children:[n.jsx("div",{className:"line-numbers",children:Array.from({length:J},(e,c)=>n.jsx("span",{children:c+1},c+1))}),n.jsx("textarea",{ref:N,className:"code-input",value:p,onChange:e=>v(e.target.value),onKeyDown:U,spellCheck:!1,disabled:s,placeholder:i("editor.placeholder")})]}),n.jsxs("div",{className:"editor-toolbar-bottom",children:[n.jsx("button",{className:"editor-btn run-btn",onClick:()=>r(F),disabled:s,children:s?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"loading-spinner-small"})," ",i(f==="loading"?"editor.loadingPython":"editor.running")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})," ",i("editor.run")]})}),n.jsxs("div",{className:"editor-toolbar-right",children:[n.jsx("button",{className:"editor-btn",onClick:q,disabled:s,children:i("editor.reset")}),W&&n.jsx("button",{className:"editor-btn",onClick:H,disabled:s,children:i("editor.clearOutput")})]})]}),w&&o&&n.jsxs("div",{className:"editor-hint",children:[n.jsx("strong",{children:i("editor.expectedOutput")})," ",n.jsx("code",{children:o})]}),m&&n.jsxs("div",{className:"editor-output",children:[n.jsxs("div",{className:"editor-output-header",children:[n.jsx("i",{className:"fa-solid fa-keyboard"})," ",i("editor.inputHeader")]}),n.jsxs("form",{className:"editor-input-form",onSubmit:K,children:[D.map((e,c)=>n.jsxs("div",{className:"editor-input-row",children:[n.jsx("label",{children:e}),n.jsx("input",{className:"editor-input-field",value:u[c]||"",onChange:E=>{const S=c;t(k=>{const L=[...k];return L[S]=E.target.value,L})},autoFocus:c===0})]},c)),n.jsxs("button",{type:"submit",className:"editor-btn run-btn",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})," ",i("editor.run")]})]})]}),!m&&(f==="done"||f==="error"||l||b)&&n.jsxs("div",{className:"editor-output",children:[n.jsxs("div",{className:"editor-output-header",children:[i("editor.result"),o&&T&&T.trim()===o.trim()&&n.jsx("span",{className:"output-correct",children:i("editor.correct")})]}),n.jsxs("div",{className:`editor-output-content${f==="error"?" has-error":""}`,children:[T&&n.jsx("pre",{className:"editor-stdout",children:T}),M&&n.jsx("div",{className:"editor-turtle-svg",dangerouslySetInnerHTML:{__html:M}}),b&&n.jsx("pre",{className:"editor-stderr",children:b}),!l&&!b&&f==="done"&&n.jsx("span",{className:"editor-no-output",children:i("editor.noOutput")})]})]})]})}function en(){const{level:g,lessonId:o}=X(),{completedLessons:j,completeLesson:p,uncompleteLesson:v}=z(),{requireAuth:w}=I(),{t:x,lang:u,localizedField:t}=B(),[m,_]=h.useState(0),N=Y[g],y=G[g]||[],r=y.find(a=>a.id===o),i=$[o],O=j.has(o),f=y.findIndex(a=>a.id===o),l=f>0?y[f-1]:null,b=f<y.length-1?y[f+1]:null;if(!r||!N)return n.jsx("div",{className:"not-found-page",children:n.jsxs("div",{className:"not-found-content",children:[n.jsx("div",{className:"not-found-code",children:"404"}),n.jsx("h2",{className:"not-found-title",children:x("notFound.title")}),n.jsx(P,{to:`/${g}`,className:"btn btn-primary",children:x("lesson.backToLevel")})]})});const d=i?.sections||[{title:t(r,"title"),content:u==="en"?`In this lesson, you will learn about ${t(r,"description")}.`:`이 레슨에서는 ${r.description}에 대해 학습합니다.`,code:`# 예제 코드
print("Hello, Python!")`,expectedOutput:"Hello, Python!"}];return n.jsxs("div",{className:"lesson-page",children:[n.jsx("section",{className:"page-header",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"breadcrumb",children:[n.jsx(P,{to:"/",children:u==="en"?"Home":"홈"}),n.jsx("span",{children:"/"}),n.jsxs(P,{to:`/${g}`,children:[t(N,"title")," ",x("level.course")]}),n.jsx("span",{children:"/"}),n.jsx("span",{children:t(r,"title")})]}),n.jsx("div",{className:"page-header-content",children:n.jsxs("div",{className:"page-header-title-row",children:[n.jsx("span",{className:"page-header-icon",children:n.jsx("i",{className:r.icon})}),n.jsxs("div",{children:[n.jsx("h1",{children:t(r,"title")}),n.jsx("p",{children:t(r,"description")}),n.jsxs("div",{className:"lesson-meta-bar",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-clock"})," ",u==="en"?`~${r.estimatedTime}min`:`약 ${r.estimatedTime}분`]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-clipboard"})," ",r.topics?.length||0," ",u==="en"?"topics":"개 주제"]}),n.jsx("span",{children:Array.from({length:3},(a,s)=>n.jsx("i",{className:s<r.difficulty?"fa-solid fa-star":"fa-regular fa-star"},s))})]})]})]})})]})}),n.jsxs("div",{className:"lesson-layout container",children:[n.jsxs("aside",{className:"lesson-sidebar",children:[n.jsx("h3",{children:u==="en"?"Contents":"학습 목차"}),n.jsx("ul",{className:"lesson-toc",children:d.map((a,s)=>n.jsx("li",{children:n.jsxs("button",{className:`toc-item${m===s?" active":""}`,onClick:()=>_(s),children:[n.jsx("span",{className:"toc-number",children:s+1}),n.jsx("span",{className:"toc-title",children:t(a,"title")})]})},s))}),r.topics&&n.jsxs("div",{className:"lesson-topics-list",children:[n.jsx("h4",{children:u==="en"?"Topics":"학습 주제"}),r.topics.map((a,s)=>n.jsx("span",{className:"topic-tag",children:a},s))]})]}),n.jsxs("main",{className:"lesson-content",children:[n.jsxs("div",{className:"lesson-section",children:[n.jsx("h2",{children:t(d[m],"title")}),n.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:t(d[m],"content")?.replace(/\n/g,"<br/>")}}),d[m]?.code&&n.jsxs("div",{className:"lesson-practice",children:[n.jsx("h3",{children:x("lesson.tryCode")}),n.jsx(Z,{initialCode:t(d[m],"code"),expectedOutput:t(d[m],"expectedOutput")||"",lessonId:o},`${o}-${m}`)]}),d[m]?.tip&&n.jsxs("div",{className:"lesson-tip",children:[n.jsx("span",{className:"tip-icon",children:n.jsx("i",{className:"fa-solid fa-lightbulb"})}),n.jsxs("div",{children:[n.jsx("strong",{children:u==="en"?"Tip:":"팁:"})," ",t(d[m],"tip")]})]})]}),n.jsxs("div",{className:"lesson-nav",children:[n.jsx("div",{className:"lesson-nav-left",children:l&&n.jsxs(P,{to:`/${g}/${l.id}`,className:"lesson-nav-btn prev",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),n.jsxs("div",{children:[n.jsx("span",{className:"nav-label",children:x("lesson.prevLesson")}),n.jsx("span",{className:"nav-title",children:t(l,"title")})]})]})}),!O&&n.jsxs("button",{className:"btn btn-accent complete-btn",onClick:()=>w(()=>p(o)),children:[n.jsx("i",{className:"fa-solid fa-check"})," ",x("lesson.completeLesson")]}),O&&n.jsxs("button",{className:"btn btn-outline complete-toggle-btn",onClick:()=>w(()=>v(o)),children:[n.jsx("i",{className:"fa-solid fa-rotate-left"})," ",u==="en"?"Undo Complete":"완료 취소"]}),n.jsx("div",{className:"lesson-nav-right",children:b&&n.jsxs(P,{to:`/${g}/${b.id}`,className:"lesson-nav-btn next",children:[n.jsxs("div",{children:[n.jsx("span",{className:"nav-label",children:x("lesson.nextLesson")}),n.jsx("span",{className:"nav-title",children:t(b,"title")})]}),n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]})})]})]})]})]})}export{en as default};
