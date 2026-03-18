import{r as reactExports,u as useProgress,j as jsxRuntimeExports,c as useParams,l as lessons,L as Link,b as levelInfo}from"./index-BN3HCDxp.js";const lessonContents={"hello-python":{sections:[{title:"print() 함수로 출력하기",content:`파이썬에서 가장 먼저 배우는 것은 화면에 텍스트를 출력하는 것입니다.
print() 함수를 사용하면 원하는 내용을 콘솔에 출력할 수 있습니다.

문자열은 작은따옴표(') 또는 큰따옴표(")로 감싸서 표현합니다.`,code:`# 첫 번째 파이썬 프로그램!
print("Hello, Python!")
print('반갑습니다!')`,expectedOutput:`Hello, Python!
반갑습니다!`,tip:"print() 함수는 괄호 안의 내용을 콘솔에 출력합니다. 문자열은 따옴표로 감싸야 합니다."},{title:"여러 값 출력하기",content:`print() 함수에 여러 값을 쉼표로 구분하여 전달할 수 있습니다.
기본적으로 각 값 사이에 공백이 추가됩니다.

sep 매개변수로 구분자를, end 매개변수로 줄끝 문자를 변경할 수 있습니다.`,code:`print("이름:", "파이썬")
print("버전:", 3.12)
print("A", "B", "C", sep="-")
print("끝!", end=" 끝!")
print()`,expectedOutput:`이름: 파이썬
버전: 3.12
A-B-C
끝! 끝!`,tip:"sep은 구분자(separator), end는 출력 끝에 붙는 문자를 지정합니다."},{title:"주석 작성하기",content:`주석은 코드에 설명을 추가하는 방법입니다.
파이썬은 # 기호 뒤의 내용을 무시합니다.

여러 줄 주석은 큰따옴표 세 개(\\"\\"\\"...\\"\\"\\"\\")를 사용합니다.`,code:`# 이것은 한 줄 주석입니다
print("주석은 실행되지 않습니다")  # 코드 옆에도 가능

# 아래는 여러 줄 주석 예시
"""
이렇게 여러 줄에
걸쳐서 주석을
작성할 수 있습니다
"""
print("프로그램 완료!")`,expectedOutput:`주석은 실행되지 않습니다
프로그램 완료!`,tip:'좋은 주석은 "왜" 그렇게 했는지를 설명합니다. 코드 자체가 "무엇을" 하는지는 이미 보여주니까요.'}]},variables:{sections:[{title:"변수 선언과 할당",content:`변수는 데이터를 저장하는 이름표입니다.
파이썬에서는 = 기호를 사용하여 변수에 값을 할당합니다.

다른 언어와 달리 파이썬은 변수의 타입을 미리 선언할 필요가 없습니다.`,code:`# 변수에 값 할당
name = "파이썬"
age = 30
pi = 3.14159
is_fun = True

print(name)
print(age)
print(pi)
print(is_fun)`,expectedOutput:`파이썬
30
3.14159
True`,tip:"변수 이름은 영문자, 숫자, 밑줄(_)을 사용할 수 있으며, 숫자로 시작할 수 없습니다."},{title:"기본 자료형",content:`파이썬의 기본 자료형은 다음과 같습니다:

- int: 정수 (1, 42, -10)
- float: 실수 (3.14, -0.5)
- str: 문자열 ("Hello")
- bool: 불리언 (True, False)
- NoneType: 값이 없음 (None)

type() 함수로 변수의 자료형을 확인할 수 있습니다.`,code:`x = 42
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
<class 'NoneType'>`,tip:"파이썬은 동적 타이핑 언어입니다. 같은 변수에 다른 타입의 값을 재할당할 수 있습니다."},{title:"형 변환",content:`서로 다른 자료형 간 변환이 필요할 때 형 변환 함수를 사용합니다.

- int(): 정수로 변환
- float(): 실수로 변환
- str(): 문자열로 변환
- bool(): 불리언으로 변환`,code:`# 형 변환 예제
num_str = "42"
num = int(num_str)
print(num + 8)

pi = 3.14
print(int(pi))

result = str(100)
print("점수: " + result)`,expectedOutput:`50
3
점수: 100`,tip:"int()로 소수를 변환하면 소수점 이하가 버려집니다 (반올림이 아님)."}]},operators:{sections:[{title:"산술 연산자",content:`파이썬의 산술 연산자로 수학 계산을 수행할 수 있습니다.

+ 덧셈, - 뺄셈, * 곱셈, / 나눗셈
// 정수 나눗셈, % 나머지, ** 거듭제곱`,code:`print(10 + 3)   # 덧셈
print(10 - 3)   # 뺄셈
print(10 * 3)   # 곱셈
print(10 / 3)   # 나눗셈
print(10 // 3)  # 정수 나눗셈
print(10 % 3)   # 나머지
print(2 ** 10)  # 거듭제곱`,expectedOutput:`13
7
30
3.3333333333333335
3
1
1024`,tip:"/ 는 항상 float을 반환하고, //는 정수 나눗셈(몫)을 반환합니다."},{title:"비교 및 논리 연산자",content:`비교 연산자는 두 값을 비교하여 True 또는 False를 반환합니다.

==  같다, != 다르다, > 크다, < 작다, >= 이상, <= 이하

논리 연산자: and, or, not`,code:`x = 10
print(x > 5)
print(x == 10)
print(x != 5)

# 논리 연산자
print(x > 5 and x < 20)
print(x > 100 or x == 10)
print(not x > 100)`,expectedOutput:`True
True
True
True
True
True`,tip:"파이썬에서는 5 < x < 20처럼 연속 비교가 가능합니다!"}]},strings:{sections:[{title:"문자열 인덱싱과 슬라이싱",content:`문자열의 각 문자는 인덱스(위치 번호)로 접근할 수 있습니다.
인덱스는 0부터 시작하며, 음수 인덱스는 뒤에서부터 셉니다.

슬라이싱은 [시작:끝:간격] 형태로 부분 문자열을 추출합니다.`,code:`text = "Python"
print(text[0])    # 첫 번째 문자
print(text[-1])   # 마지막 문자
print(text[0:3])  # 슬라이싱
print(text[::2])  # 2칸씩 건너뛰기
print(text[::-1]) # 뒤집기`,expectedOutput:`P
n
Pyt
Pto
nohtyP`,tip:"슬라이싱에서 끝 인덱스는 포함되지 않습니다. text[0:3]은 인덱스 0,1,2의 문자입니다."},{title:"f-string 포매팅",content:`f-string은 파이썬 3.6+에서 도입된 문자열 포매팅 방법입니다.
문자열 앞에 f를 붙이고, 중괄호 {} 안에 변수나 표현식을 넣습니다.

서식 지정도 가능합니다: {값:서식}`,code:`name = "파이썬"
version = 3.12

print(f"안녕, {name}!")
print(f"버전: {version}")
print(f"계산: {2 + 3 = }")
print(f"파이: {3.14159:.2f}")
print(f"이름: {name:>10}")`,expectedOutput:`안녕, 파이썬!
버전: 3.12
계산: 2 + 3 = 5
파이: 3.14
이름:       파이썬`,tip:"f-string 안에서 표현식도 사용 가능합니다. {2+3}은 5로 치환됩니다."},{title:"문자열 메서드",content:`파이썬 문자열은 다양한 내장 메서드를 제공합니다.

주요 메서드: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,code:`text = "  Hello, Python World!  "
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
3`,tip:"문자열 메서드는 원본을 변경하지 않고 새 문자열을 반환합니다."}]},conditionals:{sections:[{title:"if / elif / else",content:`조건문은 조건에 따라 다른 코드를 실행합니다.
if 조건이 True이면 해당 블록을 실행하고, 아니면 elif나 else로 넘어갑니다.

파이썬은 들여쓰기(인덴트)로 코드 블록을 구분합니다.`,code:`score = 85

if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("재수강")

print(f"점수: {score}점")`,expectedOutput:`B학점
점수: 85점`,tip:"파이썬은 중괄호 대신 들여쓰기(보통 스페이스 4칸)로 블록을 구분합니다."},{title:"조건 표현식 (삼항 연산자)",content:`파이썬의 삼항 연산자는 한 줄로 조건문을 작성할 수 있게 해줍니다.

형식: 값1 if 조건 else 값2`,code:`age = 20
status = "성인" if age >= 18 else "미성년"
print(f"나이: {age}, 상태: {status}")

# 중첩도 가능 (하지만 가독성 주의)
temp = 35
weather = "더움" if temp > 30 else "적당" if temp > 15 else "추움"
print(f"기온: {temp}도, 날씨: {weather}")`,expectedOutput:`나이: 20, 상태: 성인
기온: 35도, 날씨: 더움`,tip:"삼항 연산자는 간단한 조건에만 사용하세요. 복잡한 조건은 일반 if문이 읽기 쉽습니다."}]},loops:{sections:[{title:"for 반복문",content:`for 문은 시퀀스(리스트, 문자열, range 등)의 각 요소를 순회합니다.

range(n)은 0부터 n-1까지의 수열을 생성합니다.
range(start, stop, step)으로 시작, 끝, 간격을 지정할 수 있습니다.`,code:`# 리스트 순회
fruits = ["사과", "바나나", "체리"]
for fruit in fruits:
    print(fruit)

# range 사용
for i in range(1, 6):
    print(f"{i}번", end=" ")
print()`,expectedOutput:`사과
바나나
체리
1번 2번 3번 4번 5번`,tip:"enumerate()를 사용하면 인덱스와 값을 동시에 얻을 수 있습니다."},{title:"while 반복문과 제어문",content:`while 문은 조건이 True인 동안 반복합니다.

break: 반복문을 즉시 종료
continue: 현재 반복을 건너뛰고 다음 반복으로
else: 반복문이 정상 종료(break 없이)되었을 때 실행`,code:`# while 문
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
print()`,expectedOutput:`1 2 4 5
0 1 2 3 4`,tip:"while True와 break를 조합하면 유연한 반복 구조를 만들 수 있습니다."}]},lists:{sections:[{title:"리스트 생성과 조작",content:`리스트는 여러 값을 순서대로 저장하는 자료구조입니다.
대괄호 []를 사용하여 생성하며, 다양한 타입을 혼합할 수 있습니다.

인덱싱, 슬라이싱, 추가, 삭제 등 다양한 조작이 가능합니다.`,code:`# 리스트 생성과 조작
nums = [1, 2, 3, 4, 5]
print(nums)

nums.append(6)       # 끝에 추가
nums.insert(0, 0)    # 인덱스 0에 삽입
print(nums)

nums.pop()           # 마지막 요소 제거
print(nums)
print(len(nums))     # 길이`,expectedOutput:`[1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5, 6]
[0, 1, 2, 3, 4, 5]
6`,tip:"append()는 하나의 요소를, extend()는 다른 리스트의 모든 요소를 추가합니다."},{title:"리스트 컴프리헨션",content:`리스트 컴프리헨션은 리스트를 간결하게 생성하는 파이썬스러운 방법입니다.

형식: [표현식 for 변수 in 반복가능 if 조건]

기존 반복문보다 더 읽기 쉽고 빠릅니다.`,code:`# 기본 컴프리헨션
squares = [x**2 for x in range(1, 6)]
print(squares)

# 조건 포함
evens = [x for x in range(10) if x % 2 == 0]
print(evens)

# 변환 적용
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)`,expectedOutput:`[1, 4, 9, 16, 25]
[0, 2, 4, 6, 8]
['HELLO', 'WORLD', 'PYTHON']`,tip:"리스트 컴프리헨션이 너무 복잡해지면 일반 for문을 사용하는 것이 더 좋습니다."}]},"tuples-dicts":{sections:[{title:"튜플",content:`튜플은 리스트와 비슷하지만 변경할 수 없는(immutable) 자료구조입니다.
소괄호 ()를 사용하여 생성합니다.

변경이 필요 없는 데이터를 저장할 때 튜플을 사용하면 안전합니다.`,code:`# 튜플 생성
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
print(f"최소: {result[0]}, 최대: {result[1]}")`,expectedOutput:`빨강
3
빨강, 초록, 파랑
최소: 1, 최대: 5`,tip:"함수에서 여러 값을 반환할 때 파이썬은 자동으로 튜플로 묶어서 반환합니다."},{title:"딕셔너리",content:`딕셔너리는 키(key)와 값(value) 쌍으로 데이터를 저장합니다.
중괄호 {}와 콜론 :을 사용하여 생성합니다.

키로 빠르게 값을 검색할 수 있습니다.`,code:`# 딕셔너리 생성과 사용
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
    print(f"{key}: {value}")`,expectedOutput:`김파이
{'이름': '김파이', '나이': 20, '전공': '컴퓨터공학', '학년': 2}
['이름', '나이', '전공', '학년']
이름: 김파이
나이: 20
전공: 컴퓨터공학
학년: 2`,tip:"get() 메서드를 사용하면 키가 없을 때 에러 대신 기본값을 반환합니다."}]},"functions-basic":{sections:[{title:"함수 정의와 호출",content:`함수는 재사용 가능한 코드 블록입니다.
def 키워드로 정의하고, 함수명() 으로 호출합니다.

매개변수로 데이터를 전달하고, return으로 결과를 반환합니다.`,code:`# 함수 정의
def greet(name):
    return f"안녕하세요, {name}님!"

# 함수 호출
result = greet("파이썬")
print(result)

# 여러 매개변수
def add(a, b):
    return a + b

print(add(3, 5))`,expectedOutput:`안녕하세요, 파이썬님!
8`,tip:"함수 이름은 동사로 시작하면 좋습니다: get_name(), calculate_total(), is_valid() 등"},{title:"기본값과 가변 인자",content:`매개변수에 기본값을 설정하면 인자를 생략할 수 있습니다.

*args는 여러 개의 위치 인자를 튜플로 받고,
**kwargs는 키워드 인자를 딕셔너리로 받습니다.`,code:`# 기본값 매개변수
def power(base, exp=2):
    return base ** exp

print(power(3))      # 3의 2승
print(power(2, 10))  # 2의 10승

# *args 가변 인자
def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4, 5))`,expectedOutput:`9
1024
15`,tip:"기본값이 있는 매개변수는 기본값이 없는 매개변수 뒤에 와야 합니다."}]},"functions-advanced":{sections:[{title:"람다 함수",content:`lambda는 이름 없는 한 줄 함수를 만듭니다.

형식: lambda 매개변수: 표현식

간단한 연산을 함수로 전달할 때 유용합니다.`,code:`# lambda 함수
square = lambda x: x ** 2
print(square(5))

# 정렬에 활용
students = [("김철수", 85), ("이영희", 92), ("박민수", 78)]
students.sort(key=lambda s: s[1], reverse=True)
for name, score in students:
    print(f"{name}: {score}점")`,expectedOutput:`25
이영희: 92점
김철수: 85점
박민수: 78점`,tip:"lambda는 간단한 경우에만 사용하세요. 복잡한 로직은 def로 정의하는 것이 좋습니다."},{title:"map, filter, reduce",content:`고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다.

map(함수, 반복가능): 각 요소에 함수를 적용
filter(함수, 반복가능): 조건을 만족하는 요소만 필터링
reduce(함수, 반복가능): 요소를 누적 연산`,code:`# map: 각 요소에 함수 적용
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
print(squared)

# filter: 조건에 맞는 요소만
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)

# reduce: 누적 연산
from functools import reduce
total = reduce(lambda a, b: a + b, nums)
print(f"합계: {total}")`,expectedOutput:`[1, 4, 9, 16, 25]
[2, 4]
합계: 15`,tip:"파이썬에서는 map/filter 대신 리스트 컴프리헨션을 더 많이 사용하는 추세입니다."}]},"oop-basics":{sections:[{title:"클래스와 객체",content:`클래스는 객체를 만들기 위한 설계도입니다.
class 키워드로 정의하고, __init__ 메서드로 초기화합니다.

self는 인스턴스 자기 자신을 참조합니다.`,code:`class Dog:
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
print(dog2.info())`,expectedOutput:`초코(이/가) 멍멍!
골든리트리버 맥스`,tip:"__init__은 생성자(constructor)로, 객체가 생성될 때 자동으로 호출됩니다."},{title:"클래스 변수와 인스턴스 변수",content:`클래스 변수는 모든 인스턴스가 공유하는 변수이고,
인스턴스 변수(self.변수)는 각 인스턴스에 고유한 변수입니다.`,code:`class Student:
    school = "파이썬 학교"  # 클래스 변수
    count = 0
    
    def __init__(self, name):
        self.name = name       # 인스턴스 변수
        Student.count += 1

s1 = Student("김철수")
s2 = Student("이영희")

print(f"{s1.name} - {s1.school}")
print(f"{s2.name} - {s2.school}")
print(f"전체 학생 수: {Student.count}")`,expectedOutput:`김철수 - 파이썬 학교
이영희 - 파이썬 학교
전체 학생 수: 2`,tip:"클래스 변수는 클래스명.변수 또는 인스턴스.변수로 접근할 수 있습니다."}]},"oop-advanced":{sections:[{title:"상속",content:`상속은 기존 클래스(부모)의 기능을 물려받아 새 클래스(자식)를 만드는 것입니다.
자식 클래스에서 부모의 메서드를 재정의(오버라이딩)할 수 있습니다.`,code:`class Animal:
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
    print(animal.speak())`,expectedOutput:`나비: 야옹!
바둑이: 멍멍!
미미: 야옹!`,tip:"super().__init__()을 사용하면 부모 클래스의 초기화 코드를 호출할 수 있습니다."},{title:"특수 메서드 (매직 메서드)",content:`파이썬 클래스는 __로 시작하고 끝나는 특수 메서드를 정의할 수 있습니다.

__str__: 문자열 표현
__len__: len() 지원
__add__: + 연산자 지원
__eq__: == 비교 지원`,code:`class Vector:
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
print(f"{v1} + {v2} = {v3}")`,expectedOutput:"(1, 2) + (3, 4) = (4, 6)",tip:"매직 메서드를 잘 활용하면 클래스를 파이썬 내장 타입처럼 자연스럽게 사용할 수 있습니다."}]},"error-handling":{sections:[{title:"try / except / finally",content:`예외 처리는 프로그램 실행 중 발생하는 오류를 안전하게 처리합니다.

try: 오류가 발생할 수 있는 코드
except: 오류 발생 시 처리 코드
finally: 무조건 실행되는 코드`,code:`# 기본 예외 처리
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
    print("처리 완료!")`,expectedOutput:`0으로 나눌 수 없습니다!
인덱스 오류: list index out of range
처리 완료!`,tip:"가능한 한 구체적인 예외 타입을 지정하세요. except Exception은 너무 광범위합니다."},{title:"raise와 사용자 정의 예외",content:`raise 키워드로 의도적으로 예외를 발생시킬 수 있습니다.
Exception 클래스를 상속하여 사용자 정의 예외를 만들 수 있습니다.`,code:`class InvalidAgeError(Exception):
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
    print(e)`,expectedOutput:"잘못된 나이: 200",tip:"사용자 정의 예외는 Exception을 상속하고, 의미 있는 이름을 붙이세요."}]},"file-io":{sections:[{title:"파일 읽기/쓰기",content:`open() 함수로 파일을 열고, with 문으로 안전하게 관리합니다.

모드: 'r'(읽기), 'w'(쓰기-덮어쓰기), 'a'(추가), 'x'(새파일 생성)`,code:`# 파일 개념 이해 (시뮬레이션)
data = "이름: 파이썬\\n나이: 30\\n직업: 프로그래머"

# 줄 단위로 처리
lines = data.split("\\n")
for i, line in enumerate(lines, 1):
    print(f"{i}: {line}")

print(f"\\n총 {len(lines)}줄")`,expectedOutput:`1: 이름: 파이썬
2: 나이: 30
3: 직업: 프로그래머

총 3줄`,tip:"with open() as f: 구문을 사용하면 파일이 자동으로 닫힙니다."},{title:"CSV와 JSON 처리",content:`CSV(쉼표 구분 값)와 JSON은 데이터 교환에 많이 사용되는 형식입니다.
파이썬은 csv와 json 표준 라이브러리를 제공합니다.`,code:`import json

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
    print(f"{s["name"]}: {s["score"]}점")`,expectedOutput:`{
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
이영희: 95점`,tip:"json.dumps()의 ensure_ascii=False는 한글을 그대로 출력하게 합니다."}]},modules:{sections:[{title:"모듈 사용하기",content:`모듈은 함수, 클래스 등을 담고 있는 파이썬 파일입니다.
import 문으로 모듈을 가져와 사용할 수 있습니다.

import 방식: import 모듈, from 모듈 import 이름, import 모듈 as 별칭`,code:`import math
print(f"원주율: {math.pi:.4f}")
print(f"제곱근: {math.sqrt(16)}")

from random import randint, choice
print(f"주사위: {randint(1, 6)}")

fruits = ["사과", "바나나", "체리"]
print(f"랜덤 선택: {choice(fruits)}")`,expectedOutput:`원주율: 3.1416
제곱근: 4.0
주사위: 4
랜덤 선택: 바나나`,tip:"from 모듈 import *은 모든 이름을 가져오므로 충돌 위험이 있어 권장하지 않습니다."}]},comprehensions:{sections:[{title:"다양한 컴프리헨션",content:`리스트 외에도 딕셔너리, 세트 컴프리헨션을 사용할 수 있습니다.
중첩 컴프리헨션으로 다차원 데이터도 처리 가능합니다.`,code:`# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# 세트 컴프리헨션
words = ["hello", "world", "hello", "python"]
unique_lengths = {len(w) for w in words}
print(unique_lengths)

# 중첩 컴프리헨션
matrix = [[i*3+j+1 for j in range(3)] for i in range(3)]
for row in matrix:
    print(row)`,expectedOutput:`{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
{5, 6}
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]`,tip:"컴프리헨션은 간결하지만, 3중 이상 중첩은 가독성이 떨어지니 일반 for문을 사용하세요."}]},regex:{sections:[{title:"정규표현식 기초",content:`정규표현식(regex)은 문자열에서 패턴을 찾는 강력한 도구입니다.
파이썬의 re 모듈을 사용합니다.

주요 함수: re.search(), re.match(), re.findall(), re.sub()`,code:`import re

text = "전화번호: 010-1234-5678, 이메일: test@email.com"

# 전화번호 찾기
phone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)
print(f"전화번호: {phone.group()}")

# 모든 숫자 찾기
nums = re.findall(r"\\d+", text)
print(f"숫자들: {nums}")

# 패턴 치환
result = re.sub(r"\\d", "*", text)
print(result)`,expectedOutput:`전화번호: 010-1234-5678
숫자들: ['010', '1234', '5678']
전화번호: ***-****-****, 이메일: test@email.com`,tip:"정규표현식 문자열 앞에 r을 붙이면(raw string) 이스케이프 문자 문제를 방지합니다."}]},decorators:{sections:[{title:"데코레이터 기초",content:`데코레이터는 함수를 감싸서 기능을 추가하는 패턴입니다.
@기호를 사용하여 함수 위에 적용합니다.

데코레이터는 본질적으로 함수를 인자로 받아 새 함수를 반환하는 함수입니다.`,code:`def timer(func):
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
print(f"결과: {result}")`,expectedOutput:`[greet] 시작
안녕하세요, 파이썬!
[greet] 완료
[add] 시작
[add] 완료
결과: 8`,tip:"@timer는 greet = timer(greet)와 동일합니다. 문법적 편의를 제공하는 것입니다."},{title:"매개변수가 있는 데코레이터",content:`데코레이터에 인자를 전달하려면 3중 중첩 함수 구조가 필요합니다.
외부 함수가 매개변수를 받고, 내부에서 실제 데코레이터를 반환합니다.`,code:`def repeat(n):
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
Hello!`,tip:"functools.wraps를 사용하면 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존할 수 있습니다."}]},generators:{sections:[{title:"제너레이터 함수",content:`제너레이터는 yield 키워드를 사용하여 값을 하나씩 생성합니다.
메모리를 절약하면서 큰 시퀀스를 처리할 수 있습니다.

next()로 다음 값을 가져오거나, for문으로 순회합니다.`,code:`def countdown(n):
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
print(list(squares))`,expectedOutput:`카운트다운 시작!
5 4 3 2 1 
발사!
[0, 1, 4, 9, 16]`,tip:"리스트 대신 제너레이터를 사용하면 메모리를 크게 절약할 수 있습니다 (지연 평가)."}]},"context-managers":{sections:[{title:"컨텍스트 매니저 만들기",content:`컨텍스트 매니저는 리소스의 획득과 해제를 안전하게 관리합니다.
__enter__와 __exit__ 메서드, 또는 contextlib을 사용하여 구현합니다.`,code:`class Timer:
    def __enter__(self):
        print("타이머 시작")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("타이머 종료")
        return False

with Timer() as t:
    total = sum(range(1000))
    print(f"합계: {total}")

print("프로그램 계속...")`,expectedOutput:`타이머 시작
합계: 499500
타이머 종료
프로그램 계속...`,tip:"__exit__에서 True를 반환하면 예외를 억제합니다. 보통 False를 반환합니다."}]},concurrency:{sections:[{title:"동시성 개념 이해",content:`동시성은 여러 작업을 동시에 처리하는 것처럼 보이게 하는 기법입니다.

- 스레딩(threading): I/O 바운드 작업에 적합
- 멀티프로세싱(multiprocessing): CPU 바운드 작업에 적합
- asyncio: 비동기 I/O 처리`,code:`# 동시성 개념 시뮬레이션
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

print("\\n모든 작업 완료!")`,expectedOutput:`다운로드 - 단계 1/3
다운로드 - 단계 2/3
다운로드 - 단계 3/3
처리 - 단계 1/3
처리 - 단계 2/3
처리 - 단계 3/3

모든 작업 완료!`,tip:"I/O 바운드 작업(네트워크, 파일)에는 스레딩이나 asyncio가, CPU 바운드(계산)에는 멀티프로세싱이 효율적입니다."}]},"typing-testing":{sections:[{title:"타입 힌트",content:`타입 힌트는 변수와 함수의 타입 정보를 명시합니다.
런타임에 강제되지 않지만, IDE 자동완성과 정적 분석에 도움됩니다.`,code:`# 타입 힌트 예제
def calculate_bmi(weight: float, height: float) -> float:
    return weight / (height ** 2)

def greet_all(names: list) -> None:
    for name in names:
        print(f"안녕, {name}!")

bmi = calculate_bmi(70.0, 1.75)
print(f"BMI: {bmi:.1f}")

greet_all(["철수", "영희", "민수"])`,expectedOutput:`BMI: 22.9
안녕, 철수!
안녕, 영희!
안녕, 민수!`,tip:"typing 모듈의 List[str], Dict[str, int], Optional[str] 등으로 더 구체적인 타입을 지정할 수 있습니다."}]},"numpy-basics":{sections:[{title:"NumPy 배열 생성",content:`NumPy는 고성능 수치 연산 라이브러리입니다.
ndarray(N-dimensional array)는 NumPy의 핵심 자료구조입니다.

다양한 방법으로 배열을 생성할 수 있습니다.`,code:`import numpy as np

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
print(f"arange: {np.arange(0, 10, 2)}")`,expectedOutput:`1차원: [1 2 3 4 5]
2차원:
[[1 2 3]
 [4 5 6]]
shape: (2, 3)
zeros: [0. 0. 0.]
ones: [1. 1. 1. 1.]
arange: [0 2 4 6 8]`,tip:"NumPy 배열은 같은 타입의 요소만 포함할 수 있어 파이썬 리스트보다 훨씬 빠릅니다."},{title:"배열 인덱싱과 슬라이싱",content:`NumPy 배열도 파이썬 리스트처럼 인덱싱과 슬라이싱이 가능합니다.
2차원 배열은 [행, 열] 형태로 접근합니다.

불리언 마스크를 이용한 조건부 인덱싱도 매우 유용합니다.`,code:`import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"전체:\\n{a}")
print(f"a[0,1] = {a[0, 1]}")     # 0행 1열
print(f"a[1,:] = {a[1, :]}")     # 1행 전체
print(f"a[:,2] = {a[:, 2]}")     # 2열 전체

# 불리언 마스킹
print(f"5보다 큰: {a[a > 5]}")`,expectedOutput:`전체:
[[1 2 3]
 [4 5 6]
 [7 8 9]]
a[0,1] = 2
a[1,:] = [4 5 6]
a[:,2] = [3 6 9]
5보다 큰: [6 7 8 9]`,tip:"NumPy 슬라이싱은 복사본이 아닌 뷰(view)를 반환합니다. 복사하려면 .copy()를 사용하세요."}]},"numpy-advanced":{sections:[{title:"배열 연산과 브로드캐스팅",content:`NumPy의 핵심 장점은 요소별(element-wise) 연산과 브로드캐스팅입니다.
반복문 없이도 배열 전체에 연산을 적용할 수 있습니다.

브로드캐스팅은 크기가 다른 배열 간의 연산을 가능하게 합니다.`,code:`import numpy as np

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
print(f"열별 합: {np.sum(m, axis=0)}")`,expectedOutput:`원본: [1 2 3 4]
*2: [2 4 6 8]
**2: [ 1  4  9 16]
합계: 10
평균: 2.5
표준편차: 1.12

행별 합: [3 7]
열별 합: [4 6]`,tip:"axis=0은 행 방향(열별), axis=1은 열 방향(행별) 연산을 수행합니다."}]},"pandas-basics":{sections:[{title:"Series와 DataFrame",content:`Pandas는 데이터 분석의 핵심 라이브러리입니다.

Series: 1차원 데이터 (인덱스 + 값)
DataFrame: 2차원 데이터 (표 형태, 행+열)`,code:`import pandas as pd

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
2  박민수  21  78`,tip:"DataFrame은 엑셀 시트와 비슷합니다. 행(index)과 열(columns)로 구성됩니다."},{title:"데이터 조회와 탐색",content:`DataFrame의 기본 정보를 확인하는 여러 메서드가 있습니다.

head(), tail(), info(), describe(), shape, columns 등을 활용합니다.`,code:`import pandas as pd

df = pd.DataFrame({
    "상품": ["노트북", "마우스", "키보드", "모니터", "헤드셋"],
    "가격": [1200000, 35000, 89000, 450000, 120000],
    "재고": [5, 100, 50, 12, 30]
})

print(df.head(3))   # 상위 3행
print(f"\\n크기: {df.shape}")
print(f"\\n통계:\\n{df.describe()}")`,expectedOutput:`    상품      가격   재고
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
max  1200000.00    100.00`,tip:"describe()는 숫자형 열에 대해 자동으로 통계 요약을 제공합니다."}]},"pandas-manipulation":{sections:[{title:"데이터 필터링과 정렬",content:`Pandas는 조건에 맞는 데이터를 쉽게 필터링할 수 있습니다.
불리언 인덱싱과 query() 메서드를 활용합니다.`,code:`import pandas as pd

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
print(df.sort_values("점수", ascending=False))`,expectedOutput:`90점 이상:
   이름  점수  학년
1  이영희  92    2
3  정수진  95    3

점수순 정렬:
   이름  점수  학년
3  정수진  95    3
1  이영희  92    2
4  최동혁  88    2
0  김철수  85    1
2  박민수  78    1`,tip:"여러 조건을 결합할 때는 &(and)와 |(or)를 사용하고, 각 조건을 괄호로 감싸세요."},{title:"GroupBy와 집계",content:`groupby()는 특정 열의 값을 기준으로 데이터를 그룹화합니다.
그룹화 후 sum(), mean(), count() 등의 집계 함수를 적용합니다.`,code:`import pandas as pd

df = pd.DataFrame({
    "부서": ["개발", "기획", "개발", "기획", "개발"],
    "이름": ["김", "이", "박", "정", "최"],
    "매출": [100, 80, 120, 90, 110]
})

print("부서별 매출 합계:")
print(df.groupby("부서")["매출"].sum())

print("\\n부서별 통계:")
print(df.groupby("부서")["매출"].agg(["mean", "sum", "count"]))`,expectedOutput:`부서별 매출 합계:
부서
개발    330
기획    170
Name: 매출, dtype: int64

부서별 통계:
       mean  sum  count
부서                     
개발  110.0  330      3
기획   85.0  170      2`,tip:"agg()에 여러 집계 함수를 리스트로 전달하면 한 번에 여러 통계를 계산할 수 있습니다."}]},"data-project":{sections:[{title:"데이터 분석 프로젝트",content:`이번 레슨에서는 지금까지 배운 NumPy와 Pandas를 활용하여
실전 데이터 분석을 수행합니다.

학생 성적 데이터를 생성하고, 분석하고, 인사이트를 도출합니다.`,code:`import numpy as np
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
print(f"\\n등급 분포:\\n{df["등급"].value_counts().sort_index()}")`,expectedOutput:`=== 상위 5명 ===
    학생  수학  영어  과학   평균 등급
15  학생16  91  95  96  94.0    A
7   학생8   92  88  97  92.3    A
2   학생3   87  94  90  90.3    A
...`,tip:'데이터 분석은 "질문 → 탐색 → 분석 → 시각화 → 결론" 순서로 진행하는 것이 좋습니다.'}]}};function CodeEditor({initialCode="",expectedOutput="",lessonId=""}){const[code,setCode]=reactExports.useState(initialCode),[output,setOutput]=reactExports.useState(""),[isRunning,setIsRunning]=reactExports.useState(!1),[showHint,setShowHint]=reactExports.useState(!1),textareaRef=reactExports.useRef(null),{incrementCodeRuns}=useProgress(),simulatePythonExecution=code=>{let result=[];const lines=code.split(`
`),variables={};try{for(let line of lines){if(line=line.trim(),!line||line.startsWith("#"))continue;const printMatch=line.match(/^print\s*\((.+)\)$/);if(printMatch){let content=printMatch[1].trim();if(content.startsWith('f"')||content.startsWith("f'")){const quote=content[1],str=content.slice(2,-1),resolved=str.replace(/\{([^}]+)\}/g,(_,expr)=>{if(expr=expr.trim(),expr in variables)return variables[expr];try{return eval(expr)}catch{return`{${expr}}`}});result.push(resolved);continue}if(content.startsWith('"')&&content.endsWith('"')||content.startsWith("'")&&content.endsWith("'")){result.push(content.slice(1,-1));continue}if(content.includes(",")){const args=content.split(",").map(a=>{if(a=a.trim(),a.startsWith('"')&&a.endsWith('"')||a.startsWith("'")&&a.endsWith("'"))return a.slice(1,-1);if(a in variables)return String(variables[a]);try{return String(eval(a))}catch{return a}});result.push(args.join(" "));continue}if(content in variables){result.push(String(variables[content]));continue}try{result.push(String(eval(content)))}catch{result.push(content)}continue}const assignMatch=line.match(/^(\w+)\s*=\s*(.+)$/);if(assignMatch){const[,name,value]=assignMatch;let val=value.trim();if(val.startsWith('"')&&val.endsWith('"')||val.startsWith("'")&&val.endsWith("'"))variables[name]=val.slice(1,-1);else if(val.startsWith("[")&&val.endsWith("]"))try{variables[name]=JSON.parse(val)}catch{variables[name]=val}else{let expr=val;for(const[n,t]of Object.entries(variables))expr=expr.replace(new RegExp(`\\b${n}\\b`,"g"),typeof t=="string"?`"${t}"`:t);try{variables[name]=eval(expr)}catch{variables[name]=val}}continue}const forMatch=line.match(/^for\s+(\w+)\s+in\s+range\((\d+)(?:,\s*(\d+))?\)\s*:/);if(forMatch){const[,varName,startOrEnd,end]=forMatch,start=end?parseInt(startOrEnd):0,limit=parseInt(end||startOrEnd),loopBodyIdx=lines.indexOf(line),bodyLines=[];for(let n=loopBodyIdx+1;n<lines.length&&(lines[n].startsWith("    ")||lines[n].startsWith("	"));n++)bodyLines.push(lines[n].trim());for(let k=start;k<Math.min(limit,100);k++){variables[varName]=k;for(const bLine of bodyLines){const bPrint=bLine.match(/^print\s*\((.+)\)$/);if(bPrint){let c=bPrint[1].trim();if(c.startsWith('f"')||c.startsWith("f'")){const str=c.slice(2,-1);result.push(str.replace(/\{([^}]+)\}/g,(_,e)=>{if(e=e.trim(),e in variables)return variables[e];try{return eval(e)}catch{return`{${e}}`}}))}else if(c in variables)result.push(String(variables[c]));else{let expr=c;for(const[n,t]of Object.entries(variables))expr=expr.replace(new RegExp(`\\b${n}\\b`,"g"),typeof t=="string"?`"${t}"`:t);try{result.push(String(eval(expr)))}catch{result.push(c)}}}}}}}return result.length>0?result.join(`
`):"(출력 없음)"}catch(n){return`Error: ${n.message}`}},handleRun=()=>{setIsRunning(!0),setOutput(""),setTimeout(()=>{const n=simulatePythonExecution(code);setOutput(n),setIsRunning(!1),incrementCodeRuns()},500)},handleReset=()=>{setCode(initialCode),setOutput("")},handleKeyDown=n=>{if(n.key==="Tab"){n.preventDefault();const t=n.target.selectionStart,x=n.target.selectionEnd,m=code.substring(0,t)+"    "+code.substring(x);setCode(m),setTimeout(()=>{n.target.selectionStart=n.target.selectionEnd=t+4},0)}(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&handleRun()},lineCount=code.split(`
`).length;return jsxRuntimeExports.jsxs("div",{className:"code-editor",children:[jsxRuntimeExports.jsxs("div",{className:"editor-toolbar",children:[jsxRuntimeExports.jsxs("div",{className:"editor-title",children:[jsxRuntimeExports.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("polyline",{points:"16 18 22 12 16 6"}),jsxRuntimeExports.jsx("polyline",{points:"8 6 2 12 8 18"})]}),jsxRuntimeExports.jsx("span",{children:"Python Editor"})]}),jsxRuntimeExports.jsxs("div",{className:"editor-actions",children:[jsxRuntimeExports.jsx("button",{className:"editor-btn hint-btn",onClick:()=>setShowHint(!showHint),title:"힌트",children:jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("circle",{cx:"12",cy:"12",r:"10"}),jsxRuntimeExports.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),jsxRuntimeExports.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),jsxRuntimeExports.jsx("button",{className:"editor-btn reset-btn",onClick:handleReset,title:"초기화",children:jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("polyline",{points:"1 4 1 10 7 10"}),jsxRuntimeExports.jsx("path",{d:"M3.51 15a9 9 0 102.13-9.36L1 10"})]})}),jsxRuntimeExports.jsxs("button",{className:"editor-btn run-btn",onClick:handleRun,disabled:isRunning,title:"실행 (Ctrl+Enter)",children:[isRunning?jsxRuntimeExports.jsx("div",{className:"loading-spinner-small"}):jsxRuntimeExports.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:jsxRuntimeExports.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),jsxRuntimeExports.jsx("span",{children:isRunning?"실행 중...":"실행"})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"editor-body",children:[jsxRuntimeExports.jsx("div",{className:"line-numbers",children:Array.from({length:lineCount},(n,t)=>jsxRuntimeExports.jsx("span",{children:t+1},t+1))}),jsxRuntimeExports.jsx("textarea",{ref:textareaRef,className:"code-input",value:code,onChange:n=>setCode(n.target.value),onKeyDown:handleKeyDown,spellCheck:!1,placeholder:"# 파이썬 코드를 입력하세요..."})]}),showHint&&expectedOutput&&jsxRuntimeExports.jsxs("div",{className:"editor-hint",children:[jsxRuntimeExports.jsx("strong",{children:"예상 출력:"})," ",jsxRuntimeExports.jsx("code",{children:expectedOutput})]}),output&&jsxRuntimeExports.jsxs("div",{className:"editor-output",children:[jsxRuntimeExports.jsxs("div",{className:"output-header",children:[jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),jsxRuntimeExports.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),jsxRuntimeExports.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),jsxRuntimeExports.jsx("span",{children:"출력 결과"}),expectedOutput&&output.trim()===expectedOutput.trim()&&jsxRuntimeExports.jsx("span",{className:"output-correct",children:"정답!"})]}),jsxRuntimeExports.jsx("pre",{className:"output-content",children:output})]})]})}function LessonPage(){const{level:n,lessonId:t}=useParams(),{completedLessons:x,completeLesson:m}=useProgress(),[r,g]=reactExports.useState(0),d=levelInfo[n],l=lessons[n]||[],s=l.find(p=>p.id===t),v=lessonContents[t],j=x.has(t),u=l.findIndex(p=>p.id===t),f=u>0?l[u-1]:null,h=u<l.length-1?l[u+1]:null;if(!s||!d)return jsxRuntimeExports.jsx("div",{className:"not-found-page",children:jsxRuntimeExports.jsxs("div",{className:"not-found-content",children:[jsxRuntimeExports.jsx("div",{className:"not-found-code",children:"404"}),jsxRuntimeExports.jsx("h2",{className:"not-found-title",children:"레슨을 찾을 수 없습니다"}),jsxRuntimeExports.jsx(Link,{to:`/${n}`,className:"btn btn-primary",children:"목록으로 돌아가기"})]})});const o=v?.sections||[{title:s.title,content:`이 레슨에서는 ${s.description}에 대해 학습합니다.`,code:`# 예제 코드
print("Hello, Python!")`,expectedOutput:"Hello, Python!"}];return jsxRuntimeExports.jsxs("div",{className:"lesson-page",children:[jsxRuntimeExports.jsx("section",{className:"page-header",style:{background:`linear-gradient(135deg, ${d.color}, ${d.color}dd)`},children:jsxRuntimeExports.jsxs("div",{className:"container",children:[jsxRuntimeExports.jsxs("div",{className:"breadcrumb",children:[jsxRuntimeExports.jsx(Link,{to:"/",children:"홈"}),jsxRuntimeExports.jsx("span",{children:"/"}),jsxRuntimeExports.jsxs(Link,{to:`/${n}`,children:[d.title," 과정"]}),jsxRuntimeExports.jsx("span",{children:"/"}),jsxRuntimeExports.jsx("span",{children:s.title})]}),jsxRuntimeExports.jsxs("div",{className:"page-header-content",children:[jsxRuntimeExports.jsx("span",{className:"page-header-icon",children:jsxRuntimeExports.jsx("i",{className:s.icon})}),jsxRuntimeExports.jsx("h1",{children:s.title}),jsxRuntimeExports.jsx("p",{children:s.description}),jsxRuntimeExports.jsxs("div",{className:"lesson-meta-bar",children:[jsxRuntimeExports.jsxs("span",{children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-clock"})," 약 ",s.estimatedTime,"분"]}),jsxRuntimeExports.jsxs("span",{children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-clipboard"})," ",s.topics?.length||0,"개 주제"]}),jsxRuntimeExports.jsx("span",{children:Array.from({length:3},(p,i)=>jsxRuntimeExports.jsx("i",{className:i<s.difficulty?"fa-solid fa-star":"fa-regular fa-star"},i))})]})]})]})}),jsxRuntimeExports.jsxs("div",{className:"lesson-layout container",children:[jsxRuntimeExports.jsxs("aside",{className:"lesson-sidebar",children:[jsxRuntimeExports.jsx("h3",{children:"학습 목차"}),jsxRuntimeExports.jsx("ul",{className:"lesson-toc",children:o.map((p,i)=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsxs("button",{className:`toc-item${r===i?" active":""}`,onClick:()=>g(i),children:[jsxRuntimeExports.jsx("span",{className:"toc-number",children:i+1}),jsxRuntimeExports.jsx("span",{className:"toc-title",children:p.title})]})},i))}),s.topics&&jsxRuntimeExports.jsxs("div",{className:"lesson-topics-list",children:[jsxRuntimeExports.jsx("h4",{children:"학습 주제"}),s.topics.map((p,i)=>jsxRuntimeExports.jsx("span",{className:"topic-tag",children:p},i))]})]}),jsxRuntimeExports.jsxs("main",{className:"lesson-content",children:[jsxRuntimeExports.jsxs("div",{className:"lesson-section",children:[jsxRuntimeExports.jsx("h2",{children:o[r]?.title}),jsxRuntimeExports.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:o[r]?.content?.replace(/\n/g,"<br/>")}}),o[r]?.code&&jsxRuntimeExports.jsxs("div",{className:"lesson-practice",children:[jsxRuntimeExports.jsx("h3",{children:"직접 실습해보세요"}),jsxRuntimeExports.jsx(CodeEditor,{initialCode:o[r].code,expectedOutput:o[r].expectedOutput||"",lessonId:t})]}),o[r]?.tip&&jsxRuntimeExports.jsxs("div",{className:"lesson-tip",children:[jsxRuntimeExports.jsx("span",{className:"tip-icon",children:jsxRuntimeExports.jsx("i",{className:"fa-solid fa-lightbulb"})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("strong",{children:"팁:"})," ",o[r].tip]})]})]}),jsxRuntimeExports.jsxs("div",{className:"lesson-nav",children:[jsxRuntimeExports.jsx("div",{className:"lesson-nav-left",children:f&&jsxRuntimeExports.jsxs(Link,{to:`/${n}/${f.id}`,className:"lesson-nav-btn prev",children:[jsxRuntimeExports.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:jsxRuntimeExports.jsx("polyline",{points:"15 18 9 12 15 6"})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("span",{className:"nav-label",children:"이전 레슨"}),jsxRuntimeExports.jsx("span",{className:"nav-title",children:f.title})]})]})}),!j&&jsxRuntimeExports.jsxs("button",{className:"btn btn-accent complete-btn",onClick:()=>m(t),children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-check"})," 학습 완료"]}),j&&jsxRuntimeExports.jsxs("span",{className:"completed-badge-inline",children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-check"})," 완료됨"]}),jsxRuntimeExports.jsx("div",{className:"lesson-nav-right",children:h&&jsxRuntimeExports.jsxs(Link,{to:`/${n}/${h.id}`,className:"lesson-nav-btn next",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("span",{className:"nav-label",children:"다음 레슨"}),jsxRuntimeExports.jsx("span",{className:"nav-title",children:h.title})]}),jsxRuntimeExports.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:jsxRuntimeExports.jsx("polyline",{points:"9 18 15 12 9 6"})})]})})]})]})]})]})}export{LessonPage as default};
