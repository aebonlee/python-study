import{r as reactExports,u as useProgress,j as jsxRuntimeExports,c as useParams,l as lessons,L as Link,b as levelInfo}from"./index-CeyYU55m.js";const lessonContents={"hello-python":{sections:[{title:"print() 함수로 출력하기",content:`파이썬에서 가장 먼저 배우는 것은 화면에 텍스트를 출력하는 것입니다.
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
전화번호: ***-****-****, 이메일: test@email.com`,tip:"정규표현식 문자열 앞에 r을 붙이면(raw string) 이스케이프 문자 문제를 방지합니다."}]},"os-sys":{sections:[{title:"os 모듈 - 파일 시스템 제어",content:`os 모듈은 운영체제와 상호작용하는 기능을 제공합니다.
파일/디렉토리 조작, 경로 처리, 환경 변수 접근 등이 가능합니다.

os.path 하위 모듈은 경로 관련 유틸리티를 제공합니다.`,code:`import os

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
print(f"\\nPATH 환경 변수 일부: {os.environ.get("PATH", "미설정")[:50]}...")
print(f"HOME: {os.environ.get("HOME", os.environ.get("USERPROFILE", "미설정"))}")`,expectedOutput:`현재 디렉토리: /home/user
파일명: report.pdf
디렉토리: /home/user/documents
확장자: .pdf
경로 존재: False
경로 결합: home/user/data.csv

PATH 환경 변수 일부: /usr/local/bin:/usr/bin...
HOME: /home/user`,tip:"os.path.join()은 운영체제에 맞는 경로 구분자(/ 또는 \\)를 자동으로 사용합니다."},{title:"sys 모듈 - 시스템 정보와 제어",content:`sys 모듈은 파이썬 인터프리터와 관련된 정보와 기능을 제공합니다.

명령줄 인자(argv), 모듈 경로(path), 버전 정보 등을 다룹니다.`,code:`import sys

# 파이썬 버전
print(f"파이썬 버전: {sys.version}")
print(f"버전 정보: {sys.version_info.major}.{sys.version_info.minor}")

# 플랫폼
print(f"플랫폼: {sys.platform}")

# 정수 최대값
print(f"정수 최대값: {sys.maxsize}")

# 모듈 검색 경로 (처음 3개)
print(f"\\n모듈 경로 (상위 3개):")
for p in sys.path[:3]:
    print(f"  {p}")

# 명령줄 인자 예시
print(f"\\n명령줄 인자: {sys.argv}")
print("# python script.py arg1 arg2 → ['script.py', 'arg1', 'arg2']")`,expectedOutput:`파이썬 버전: 3.12.0 (main, ...)
버전 정보: 3.12
플랫폼: linux
정수 최대값: 9223372036854775807

모듈 경로 (상위 3개):
  
  /usr/lib/python3.12
  /usr/lib/python3.12/lib-dynload

명령줄 인자: ['']
# python script.py arg1 arg2 → ['script.py', 'arg1', 'arg2']`,tip:"sys.exit()으로 프로그램을 종료할 수 있습니다. 0은 정상 종료, 다른 값은 에러를 의미합니다."}]},"math-cmath":{sections:[{title:"math 모듈 - 수학 함수",content:`math 모듈은 C 표준 라이브러리의 수학 함수에 대한 접근을 제공합니다.

상수: pi, e, inf, nan
함수: sqrt, pow, log, sin, cos, tan, ceil, floor, factorial 등`,code:`import math

# 상수
print(f"원주율 (pi): {math.pi:.6f}")
print(f"자연 상수 (e): {math.e:.6f}")

# 기본 수학 함수
print(f"\\n√16 = {math.sqrt(16)}")
print(f"2^10 = {math.pow(2, 10):.0f}")
print(f"10! = {math.factorial(10)}")

# 올림/내림/반올림
print(f"\\nceil(3.2) = {math.ceil(3.2)}")
print(f"floor(3.8) = {math.floor(3.8)}")

# 로그
print(f"\\nlog(100, 10) = {math.log(100, 10):.1f}")  # 상용 로그
print(f"log2(1024) = {math.log2(1024):.1f}")
print(f"ln(e) = {math.log(math.e):.1f}")  # 자연 로그

# 삼각함수
angle = math.radians(30)  # 30도를 라디안으로
print(f"\\nsin(30°) = {math.sin(angle):.4f}")
print(f"cos(30°) = {math.cos(angle):.4f}")`,expectedOutput:`원주율 (pi): 3.141593
자연 상수 (e): 2.718282

√16 = 4.0
2^10 = 1024
10! = 3628800

ceil(3.2) = 4
floor(3.8) = 3

log(100, 10) = 2.0
log2(1024) = 10.0
ln(e) = 1.0

sin(30°) = 0.5000
cos(30°) = 0.8660`,tip:"math.isclose(a, b)로 부동소수점 비교를 안전하게 할 수 있습니다. == 대신 사용하세요."},{title:"cmath 모듈 - 복소수 연산",content:`cmath 모듈은 복소수에 대한 수학 함수를 제공합니다.
파이썬에서 복소수는 j(허수단위)를 사용하여 표현합니다.

실수부: .real, 허수부: .imag, 절대값: abs()`,code:`import cmath
import math

# 복소수 기초
z1 = 3 + 4j
z2 = 1 - 2j

print(f"z1 = {z1}")
print(f"실수부: {z1.real}, 허수부: {z1.imag}")
print(f"절대값(크기): {abs(z1)}")  # √(3²+4²) = 5
print(f"켤레 복소수: {z1.conjugate()}")

# 복소수 연산
print(f"\\nz1 + z2 = {z1 + z2}")
print(f"z1 * z2 = {z1 * z2}")

# cmath 함수
print(f"\\n위상각(phase): {cmath.phase(z1):.4f} 라디안")
print(f"위상각(도): {math.degrees(cmath.phase(z1)):.2f}°")

# 극좌표 변환
r, phi = cmath.polar(z1)
print(f"\\n극좌표: r={r:.2f}, θ={math.degrees(phi):.2f}°")
print(f"직교좌표 복원: {cmath.rect(r, phi)}")`,expectedOutput:`z1 = (3+4j)
실수부: 3.0, 허수부: 4.0
절대값(크기): 5.0
켤레 복소수: (3-4j)

z1 + z2 = (4+2j)
z1 * z2 = (11-2j)

위상각(phase): 0.9273 라디안
위상각(도): 53.13°

극좌표: r=5.00, θ=53.13°
직교좌표 복원: (3.0000000000000004+3.9999999999999996j)`,tip:"복소수의 절대값(abs)은 원점에서의 거리, 위상각(phase)은 실수축과의 각도를 의미합니다."}]},"json-module":{sections:[{title:"JSON 직렬화/역직렬화",content:`JSON(JavaScript Object Notation)은 데이터 교환의 표준 형식입니다.

json.dumps(): 파이썬 객체 → JSON 문자열 (직렬화)
json.loads(): JSON 문자열 → 파이썬 객체 (역직렬화)
json.dump(): 파일에 쓰기
json.load(): 파일에서 읽기`,code:`import json

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
print(f"타입: {type(parsed)}")`,expectedOutput:`=== JSON 직렬화 ===
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
타입: <class 'dict'>`,tip:"ensure_ascii=False로 한글을 그대로 출력하고, indent로 가독성을 높일 수 있습니다."},{title:"JSON 활용 - API 응답 처리",content:`실제로 JSON은 웹 API에서 데이터를 주고받을 때 가장 많이 사용됩니다.

파이썬 ↔ JSON 타입 매핑:
- dict ↔ object, list ↔ array
- str ↔ string, int/float ↔ number
- True/False ↔ true/false, None ↔ null`,code:`import json

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
print(f"Python None  → JSON null")`,expectedOutput:`상태: success
총 사용자: 3명

활성 사용자: ['Alice', 'Charlie']

=== 타입 매핑 ===
Python dict  → JSON object
Python list  → JSON array
Python True  → JSON true
Python None  → JSON null`,tip:"json.loads()는 문자열을, json.load()는 파일 객체를 받습니다. s가 붙으면 string!"}]},"datetime-module":{sections:[{title:"날짜와 시간 생성",content:`datetime 모듈은 날짜와 시간을 다루는 클래스를 제공합니다.

주요 클래스:
- date: 날짜 (년, 월, 일)
- time: 시간 (시, 분, 초)
- datetime: 날짜 + 시간
- timedelta: 시간 차이`,code:`from datetime import datetime, date, time, timedelta

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
print(f"생일로부터: {(today - birthday).days}일 경과")`,expectedOutput:`현재: 2026-03-18 15:30:00.123456
날짜: 2026-03-18
시간: 15:30:00.123456

생일: 2000-05-15
년: 2000, 월: 5, 일: 15
요일: Monday

회의: 2026-03-20 14:30:00

오늘: 2026-03-18
생일로부터: 9438일 경과`,tip:"datetime.now()은 로컬 시간, datetime.utcnow()은 UTC 시간을 반환합니다."},{title:"날짜 포매팅과 연산",content:`strftime()으로 날짜를 원하는 형식의 문자열로 변환합니다.
strptime()으로 문자열을 datetime 객체로 파싱합니다.

timedelta로 날짜 간 계산을 수행합니다.`,code:`from datetime import datetime, timedelta

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
print(f"\\n올해 경과: {diff.days}일")`,expectedOutput:`=== 날짜 포매팅 (strftime) ===
기본:  2026-03-18 15:30:00
한국:  2026년 03월 18일
시간:  PM 03:30
요일:  Wednesday, March 18

파싱 결과: 2026-03-18 14:30:00

=== 날짜 연산 (timedelta) ===
내일: 2026-03-19
다음 주: 2026-03-25
100일 후: 2026-06-26

올해 경과: 76일`,tip:"%Y=4자리 연도, %m=2자리 월, %d=2자리 일, %H=24시, %I=12시, %M=분, %S=초, %A=요일, %B=월이름"}]},"turtle-graphics":{sections:[{title:"Turtle 기본 명령어",content:`turtle 모듈은 파이썬의 거북이 그래픽 라이브러리입니다.
화면 위의 거북이를 움직여 다양한 도형과 패턴을 그릴 수 있습니다.

기본 명령어:
- forward(거리): 앞으로 이동
- backward(거리): 뒤로 이동
- left(각도): 왼쪽 회전
- right(각도): 오른쪽 회전
- penup(): 펜 올리기 (이동만)
- pendown(): 펜 내리기 (그리기)`,code:`import turtle

# Turtle 기본 명령어 안내
print("=== Turtle Graphics 기본 명령어 ===")
commands = {
    "forward(100)": "앞으로 100픽셀 이동",
    "backward(50)": "뒤로 50픽셀 이동",
    "left(90)": "왼쪽으로 90도 회전",
    "right(45)": "오른쪽으로 45도 회전",
    "penup()": "펜 올리기 (선 안 그림)",
    "pendown()": "펜 내리기 (선 그림)",
    "goto(x, y)": "좌표 (x, y)로 이동",
    "home()": "원점 (0, 0)으로 이동",
    "circle(50)": "반지름 50인 원 그리기",
    "dot(10)": "크기 10인 점 찍기",
}

for cmd, desc in commands.items():
    print(f"  {cmd:20s} → {desc}")

print("\\n=== 정사각형 그리기 예제 ===")
print("import turtle")
print("t = turtle.Turtle()")
print()
print("for i in range(4):")
print("    t.forward(100)   # 100픽셀 전진")
print("    t.right(90)      # 오른쪽 90도 회전")
print()
print("turtle.done()        # 창 유지")

# 정사각형의 둘레와 면적
side = 100
print(f"\\n정사각형 둘레: {side * 4}px")
print(f"정사각형 면적: {side ** 2}px²")`,expectedOutput:`=== Turtle Graphics 기본 명령어 ===
  forward(100)         → 앞으로 100픽셀 이동
  backward(50)         → 뒤로 50픽셀 이동
  left(90)             → 왼쪽으로 90도 회전
  right(45)            → 오른쪽으로 45도 회전
  penup()              → 펜 올리기 (선 안 그림)
  pendown()            → 펜 내리기 (선 그림)
  goto(x, y)           → 좌표 (x, y)로 이동
  home()               → 원점 (0, 0)으로 이동
  circle(50)           → 반지름 50인 원 그리기
  dot(10)              → 크기 10인 점 찍기

=== 정사각형 그리기 예제 ===
import turtle
t = turtle.Turtle()

for i in range(4):
    t.forward(100)   # 100픽셀 전진
    t.right(90)      # 오른쪽 90도 회전

turtle.done()        # 창 유지

정사각형 둘레: 400px
정사각형 면적: 10000px²`,tip:"turtle.done()을 호출하면 그래픽 창이 닫히지 않고 유지됩니다. 파이썬 설치 후 로컬에서 실행해보세요!"},{title:"정다각형과 별 그리기",content:`정다각형은 반복문과 회전 각도 계산으로 쉽게 그릴 수 있습니다.

정n각형의 외각 = 360 / n
별(n꼭지)의 회전 각도 = 180 - (180 / n)

circle(반지름, 각도, 변수)로 정다각형을 간편하게 그릴 수도 있습니다.`,code:`import math

# 정다각형 그리기 코드
print("=== 정다각형 그리기 ===")
for n in [3, 4, 5, 6, 8]:
    angle = 360 / n
    names = {3:"삼각형", 4:"사각형", 5:"오각형", 6:"육각형", 8:"팔각형"}
    print(f"정{names[n]} (n={n}): 외각 = {angle:.1f}°")

print("\\n# 코드:")
print("def polygon(t, n, size):")
print("    angle = 360 / n")
print("    for i in range(n):")
print("        t.forward(size)")
print("        t.right(angle)")

print("\\n=== 별 그리기 ===")
for n in [5, 6, 8]:
    angle = 180 - 180/n
    inner = 180 - 2*angle if n == 5 else 360/n
    print(f"{n}꼭지 별: 회전각 = {180 - 180/n:.1f}°")

print("\\n# 오각별 코드:")
print("def star(t, size):")
print("    for i in range(5):")
print("        t.forward(size)")
print("        t.right(144)  # 180 - 36 = 144°")

print("\\n=== 동심원 그리기 ===")
print("# 코드:")
print("for r in range(20, 120, 20):")
print("    t.penup()")
print("    t.goto(0, -r)     # 원의 아래쪽에서 시작")
print("    t.pendown()")
print("    t.circle(r)       # 원 그리기")
for r in range(20, 120, 20):
    circumference = 2 * math.pi * r
    print(f"  반지름 {r:3d}px → 둘레 {circumference:.1f}px")`,expectedOutput:`=== 정다각형 그리기 ===
정삼각형 (n=3): 외각 = 120.0°
정사각형 (n=4): 외각 = 90.0°
정오각형 (n=5): 외각 = 72.0°
정육각형 (n=6): 외각 = 60.0°
정팔각형 (n=8): 외각 = 45.0°

# 코드:
def polygon(t, n, size):
    angle = 360 / n
    for i in range(n):
        t.forward(size)
        t.right(angle)

=== 별 그리기 ===
5꼭지 별: 회전각 = 144.0°
6꼭지 별: 회전각 = 150.0°
8꼭지 별: 회전각 = 157.5°

# 오각별 코드:
def star(t, size):
    for i in range(5):
        t.forward(size)
        t.right(144)  # 180 - 36 = 144°

=== 동심원 그리기 ===
# 코드:
for r in range(20, 120, 20):
    t.penup()
    t.goto(0, -r)     # 원의 아래쪽에서 시작
    t.pendown()
    t.circle(r)       # 원 그리기
  반지름  20px → 둘레 125.7px
  반지름  40px → 둘레 251.3px
  반지름  60px → 둘레 376.9px
  반지름  80px → 둘레 502.7px
  반지름 100px → 둘레 628.3px`,tip:"정n각형의 외각 합은 항상 360°입니다. 따라서 회전 각도 = 360/n 으로 모든 정다각형을 그릴 수 있습니다."},{title:"색상과 채우기",content:`turtle에서 다양한 색상을 사용하여 화려한 그림을 그릴 수 있습니다.

색상 설정:
- pencolor("red"): 펜 색상
- fillcolor("yellow"): 채우기 색상
- color("red", "yellow"): 펜+채우기 동시 설정

begin_fill() / end_fill()로 도형을 색칠합니다.`,code:`# Turtle 색상 및 채우기 예제 코드
print("=== 색상 지원 ===")
colors = [
    ("red", "빨강"), ("blue", "파랑"), ("green", "초록"),
    ("yellow", "노랑"), ("purple", "보라"), ("orange", "주황"),
    ("cyan", "청록"), ("magenta", "자홍"), ("gold", "금색"),
]
for eng, kor in colors:
    bar = "█" * 8
    print(f"  {kor:4s} ({eng:8s}): {bar}")

print("\\n=== 채우기 사각형 코드 ===")
print("t.color('black', 'red')  # 펜:검정, 채우기:빨강")
print("t.begin_fill()")
print("for i in range(4):")
print("    t.forward(100)")
print("    t.right(90)")
print("t.end_fill()")

print("\\n=== 무지개 나선 코드 ===")
print("import turtle")
print("t = turtle.Turtle()")
print("t.speed(0)  # 가장 빠른 속도")
print("colors = ['red', 'orange', 'yellow',") 
print("          'green', 'blue', 'purple']")
print()
print("for i in range(180):")
print("    t.pencolor(colors[i % 6])")
print("    t.forward(i * 0.5)")
print("    t.right(59)  # 약간 비틀어진 각도")

print("\\n=== 태극 무늬 코드 ===")
print("def yin_yang(t, r):")
print("    t.color('red', 'red')")
print("    t.begin_fill()")
print("    t.circle(r/2, 180)    # 큰 반원")
print("    t.circle(r, 180)")
print("    t.circle(-r/2, 180)   # 작은 역반원")
print("    t.end_fill()")

print("\\n# 실행하면 태극 무늬가 그려집니다!")`,expectedOutput:`=== 색상 지원 ===
  빨강 (red     ): ████████
  파랑 (blue    ): ████████
  초록 (green   ): ████████
  노랑 (yellow  ): ████████
  보라 (purple  ): ████████
  주황 (orange  ): ████████
  청록 (cyan    ): ████████
  자홍 (magenta ): ████████
  금색 (gold    ): ████████

=== 채우기 사각형 코드 ===
t.color('black', 'red')  # 펜:검정, 채우기:빨강
t.begin_fill()
for i in range(4):
    t.forward(100)
    t.right(90)
t.end_fill()

=== 무지개 나선 코드 ===
import turtle
t = turtle.Turtle()
t.speed(0)  # 가장 빠른 속도
colors = ['red', 'orange', 'yellow',
          'green', 'blue', 'purple']

for i in range(180):
    t.pencolor(colors[i % 6])
    t.forward(i * 0.5)
    t.right(59)  # 약간 비틀어진 각도

=== 태극 무늬 코드 ===
def yin_yang(t, r):
    t.color('red', 'red')
    t.begin_fill()
    t.circle(r/2, 180)    # 큰 반원
    t.circle(r, 180)
    t.circle(-r/2, 180)   # 작은 역반원
    t.end_fill()

# 실행하면 태극 무늬가 그려집니다!`,tip:"speed(0)은 가장 빠른 속도, speed(1)은 가장 느린 속도입니다. 복잡한 패턴은 speed(0)으로 설정하세요."},{title:"재귀 프랙탈 그리기",content:`재귀 함수를 활용하면 프랙탈(fractal) 도형을 그릴 수 있습니다.

대표적인 프랙탈:
- 코흐 눈송이(Koch Snowflake)
- 시어핀스키 삼각형(Sierpinski Triangle)
- 드래곤 커브(Dragon Curve)
- 프랙탈 나무(Fractal Tree)`,code:`# 프랙탈 도형 코드 모음
print("=== 1. 코흐 눈송이 (Koch Snowflake) ===")
print("def koch(t, length, depth):")
print("    if depth == 0:")
print("        t.forward(length)")
print("    else:")
print("        for angle in [60, -120, 60, 0]:")
print("            koch(t, length/3, depth-1)")
print("            t.left(angle)")
print()
print("# 눈송이 실행:")
print("for i in range(3):")
print("    koch(t, 300, 4)  # depth=4")
print("    t.right(120)")

print("\\n=== 2. 프랙탈 나무 (Fractal Tree) ===")
print("def tree(t, length, depth):")
print("    if depth == 0:")
print("        return")
print("    t.forward(length)")
print("    t.left(30)           # 왼쪽 가지")
print("    tree(t, length*0.7, depth-1)")
print("    t.right(60)          # 오른쪽 가지")
print("    tree(t, length*0.7, depth-1)")
print("    t.left(30)           # 원래 방향")
print("    t.backward(length)   # 되돌아오기")
print()
print("# 나무 실행:")
print("t.left(90)   # 위를 향하도록")
print("tree(t, 100, 8)")

print("\\n=== 3. 시어핀스키 삼각형 ===")
print("def sierpinski(t, length, depth):")
print("    if depth == 0:")
print("        for _ in range(3):")
print("            t.forward(length)")
print("            t.left(120)")
print("    else:")
print("        sierpinski(t, length/2, depth-1)")
print("        t.forward(length/2)")
print("        sierpinski(t, length/2, depth-1)")
print("        t.backward(length/2)")
print("        t.left(60)")
print("        t.forward(length/2)")
print("        t.right(60)")
print("        sierpinski(t, length/2, depth-1)")
print("        t.left(60)")
print("        t.backward(length/2)")
print("        t.right(60)")

# 재귀 깊이와 도형 복잡도
print("\\n=== 재귀 깊이별 복잡도 ===")
for d in range(7):
    segments = 4 ** d  # 코흐 곡선
    print(f"  depth={d}: 코흐 선분 {segments:>6}개, 나무 가지 {2**d:>4}개")`,expectedOutput:`=== 1. 코흐 눈송이 (Koch Snowflake) ===
def koch(t, length, depth):
    if depth == 0:
        t.forward(length)
    else:
        for angle in [60, -120, 60, 0]:
            koch(t, length/3, depth-1)
            t.left(angle)

# 눈송이 실행:
for i in range(3):
    koch(t, 300, 4)  # depth=4
    t.right(120)

=== 2. 프랙탈 나무 (Fractal Tree) ===
def tree(t, length, depth):
    if depth == 0:
        return
    t.forward(length)
    t.left(30)           # 왼쪽 가지
    tree(t, length*0.7, depth-1)
    t.right(60)          # 오른쪽 가지
    tree(t, length*0.7, depth-1)
    t.left(30)           # 원래 방향
    t.backward(length)   # 되돌아오기

# 나무 실행:
t.left(90)   # 위를 향하도록
tree(t, 100, 8)

=== 3. 시어핀스키 삼각형 ===
def sierpinski(t, length, depth):
    if depth == 0:
        for _ in range(3):
            t.forward(length)
            t.left(120)
    else:
        sierpinski(t, length/2, depth-1)
        t.forward(length/2)
        sierpinski(t, length/2, depth-1)
        t.backward(length/2)
        t.left(60)
        t.forward(length/2)
        t.right(60)
        sierpinski(t, length/2, depth-1)
        t.left(60)
        t.backward(length/2)
        t.right(60)

=== 재귀 깊이별 복잡도 ===
  depth=0: 코흐 선분      1개, 나무 가지    1개
  depth=1: 코흐 선분      4개, 나무 가지    2개
  depth=2: 코흐 선분     16개, 나무 가지    4개
  depth=3: 코흐 선분     64개, 나무 가지    8개
  depth=4: 코흐 선분    256개, 나무 가지   16개
  depth=5: 코흐 선분   1024개, 나무 가지   32개
  depth=6: 코흐 선분   4096개, 나무 가지   64개`,tip:"파이썬을 로컬에 설치하고 이 코드들을 .py 파일로 저장하여 실행해보세요! python fractal.py로 아름다운 프랙탈을 직접 볼 수 있습니다."}]},decorators:{sections:[{title:"데코레이터 기초",content:`데코레이터는 함수를 감싸서 기능을 추가하는 패턴입니다.
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
...`,tip:'데이터 분석은 "질문 → 탐색 → 분석 → 시각화 → 결론" 순서로 진행하는 것이 좋습니다.'}]},"matplotlib-seaborn":{sections:[{title:"Matplotlib 기본 그래프",content:`Matplotlib는 파이썬에서 가장 많이 사용되는 시각화 라이브러리입니다.
plt.plot()으로 선 그래프, plt.bar()로 막대 그래프, plt.scatter()로 산점도를 그릴 수 있습니다.

matplotlib.pyplot을 plt로 임포트하는 것이 관례입니다.`,code:`import matplotlib.pyplot as plt
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
print(f"x 범위: [{x[0]:.1f}, {x[-1]:.1f}]")`,expectedOutput:`=== Matplotlib 기본 사용법 ===
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
x 범위: [0.0, 10.0]`,tip:"plt.subplots()를 사용하면 Figure와 Axes 객체를 동시에 생성하여 더 세밀한 제어가 가능합니다."},{title:"막대 그래프와 히스토그램",content:`막대 그래프(bar chart)는 카테고리별 값을 비교할 때 사용합니다.
히스토그램(histogram)은 데이터의 분포를 보여줍니다.

plt.bar()와 plt.hist()로 각각 그릴 수 있습니다.`,code:`import numpy as np

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

print(f"\\n평균: {scores.mean():.1f}, 표준편차: {scores.std():.1f}")`,expectedOutput:`=== 프로그래밍 언어 인기도 ===
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

평균: 75.3, 표준편차: 10.1`,tip:"plt.barh()를 사용하면 가로 막대 그래프를, plt.hist(bins=20)으로 구간 수를 조절할 수 있습니다."},{title:"Seaborn 통계 시각화",content:`Seaborn은 Matplotlib 기반의 통계 시각화 라이브러리입니다.
더 아름다운 기본 스타일과 통계적 그래프를 제공합니다.

주요 함수: sns.scatterplot, sns.boxplot, sns.heatmap, sns.countplot, sns.pairplot`,code:`import numpy as np
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
print("# → 상관관계를 색상으로 시각화합니다")`,expectedOutput:`=== Seaborn 주요 차트 종류 ===
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
# → 상관관계를 색상으로 시각화합니다`,tip:'Seaborn은 sns.set_theme()로 전체 스타일을 한 번에 설정할 수 있습니다. "darkgrid", "whitegrid", "ticks" 등의 스타일이 있습니다.'}]},"scikit-learn":{sections:[{title:"머신러닝 기초와 데이터 준비",content:`Scikit-learn(sklearn)은 파이썬의 대표적인 머신러닝 라이브러리입니다.

머신러닝의 기본 흐름:
1. 데이터 준비 → 2. 학습/검증 분리 → 3. 모델 학습 → 4. 예측 → 5. 평가

train_test_split으로 데이터를 학습용/테스트용으로 나눕니다.`,code:`import numpy as np

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
print(f"\\n클래스 분포: 0={sum(y==0)}개, 1={sum(y==1)}개")`,expectedOutput:`=== 머신러닝 핵심 개념 ===
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

클래스 분포: 0=48개, 1=52개`,tip:"train_test_split(X, y, test_size=0.2, random_state=42)로 재현 가능한 데이터 분리를 할 수 있습니다."},{title:"분류 모델 - KNN과 결정트리",content:`K-최근접 이웃(KNN)은 가장 직관적인 분류 알고리즘입니다.
가까운 K개의 이웃을 보고 다수결로 클래스를 결정합니다.

결정트리(Decision Tree)는 데이터를 조건에 따라 분기하여 분류합니다.
직관적이고 해석이 쉬운 것이 장점입니다.`,code:`import numpy as np

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
predictions = knn.predict(X_test)`,tip:"KNN에서 K값이 작으면 과적합(overfitting), 크면 과소적합(underfitting) 위험이 있습니다. 보통 홀수를 사용합니다."},{title:"모델 평가와 성능 지표",content:`머신러닝에서 모델의 성능을 정확히 평가하는 것은 매우 중요합니다.

주요 평가 지표:
- 정확도(Accuracy): 전체 중 맞춘 비율
- 정밀도(Precision): 양성 예측 중 실제 양성 비율
- 재현율(Recall): 실제 양성 중 양성으로 예측한 비율
- F1 Score: 정밀도와 재현율의 조화 평균`,code:`import numpy as np

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
print("# → 정밀도, 재현율, F1을 한번에 출력")`,expectedOutput:`=== 혼동 행렬 (Confusion Matrix) ===
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
# → 정밀도, 재현율, F1을 한번에 출력`,tip:"불균형 데이터셋에서는 정확도보다 F1 Score나 AUC-ROC가 더 좋은 평가 지표입니다."}]},"tensorflow-pytorch":{sections:[{title:"딥러닝과 신경망 기초",content:`딥러닝은 인공 신경망을 여러 층으로 쌓아 복잡한 패턴을 학습하는 기술입니다.

핵심 구성 요소:
- 뉴런(Neuron): 입력에 가중치를 곱하고 활성화 함수를 적용
- 층(Layer): 뉴런의 집합 (입력층, 은닉층, 출력층)
- 역전파(Backpropagation): 오차를 역방향으로 전파하여 가중치 업데이트`,code:`import numpy as np

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
print("Tanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위")`,expectedOutput:`=== 단일 뉴런 동작 원리 ===
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
Tanh:    (e^x-e^-x)/(e^x+e^-x) → -1~1 범위`,tip:"ReLU는 계산이 빠르고 기울기 소실 문제를 해결하여 은닉층에서 가장 많이 사용됩니다."},{title:"TensorFlow / Keras 모델 구성",content:`TensorFlow는 Google이 개발한 딥러닝 프레임워크입니다.
Keras는 TensorFlow의 고수준 API로, 직관적인 모델 구성을 제공합니다.

Sequential 모델은 층을 순서대로 쌓는 가장 기본적인 방법입니다.`,code:`import numpy as np

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
Total                                   109,386`,tip:"Dense 층의 파라미터 수 = (입력 수 * 출력 수) + 출력 수(편향). Dropout은 학습 시 일부 뉴런을 무작위로 비활성화하여 과적합을 방지합니다."},{title:"PyTorch 기초와 학습 루프",content:`PyTorch는 Facebook(Meta)이 개발한 딥러닝 프레임워크입니다.
동적 계산 그래프를 사용하여 디버깅이 쉽고 연구에 많이 사용됩니다.

TensorFlow와 달리 학습 루프를 직접 작성하여 더 세밀한 제어가 가능합니다.`,code:`import numpy as np

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
Epoch 10/10 - Loss: 0.1484 - Accuracy: 98.71%`,tip:"TensorFlow는 프로덕션 배포에, PyTorch는 연구/프로토타이핑에 많이 사용됩니다. 최근에는 두 프레임워크 모두 기능이 비슷해지고 있습니다."}]}};function CodeEditor({initialCode="",expectedOutput="",lessonId=""}){const[code,setCode]=reactExports.useState(initialCode),[output,setOutput]=reactExports.useState(""),[isRunning,setIsRunning]=reactExports.useState(!1),[showHint,setShowHint]=reactExports.useState(!1),textareaRef=reactExports.useRef(null),{incrementCodeRuns}=useProgress(),simulatePythonExecution=code=>{let result=[];const lines=code.split(`
`),variables={};try{for(let line of lines){if(line=line.trim(),!line||line.startsWith("#"))continue;const printMatch=line.match(/^print\s*\((.+)\)$/);if(printMatch){let content=printMatch[1].trim();if(content.startsWith('f"')||content.startsWith("f'")){const quote=content[1],str=content.slice(2,-1),resolved=str.replace(/\{([^}]+)\}/g,(_,expr)=>{if(expr=expr.trim(),expr in variables)return variables[expr];try{return eval(expr)}catch{return`{${expr}}`}});result.push(resolved);continue}if(content.startsWith('"')&&content.endsWith('"')||content.startsWith("'")&&content.endsWith("'")){result.push(content.slice(1,-1));continue}if(content.includes(",")){const args=content.split(",").map(a=>{if(a=a.trim(),a.startsWith('"')&&a.endsWith('"')||a.startsWith("'")&&a.endsWith("'"))return a.slice(1,-1);if(a in variables)return String(variables[a]);try{return String(eval(a))}catch{return a}});result.push(args.join(" "));continue}if(content in variables){result.push(String(variables[content]));continue}try{result.push(String(eval(content)))}catch{result.push(content)}continue}const assignMatch=line.match(/^(\w+)\s*=\s*(.+)$/);if(assignMatch){const[,name,value]=assignMatch;let val=value.trim();if(val.startsWith('"')&&val.endsWith('"')||val.startsWith("'")&&val.endsWith("'"))variables[name]=val.slice(1,-1);else if(val.startsWith("[")&&val.endsWith("]"))try{variables[name]=JSON.parse(val)}catch{variables[name]=val}else{let expr=val;for(const[n,t]of Object.entries(variables))expr=expr.replace(new RegExp(`\\b${n}\\b`,"g"),typeof t=="string"?`"${t}"`:t);try{variables[name]=eval(expr)}catch{variables[name]=val}}continue}const forMatch=line.match(/^for\s+(\w+)\s+in\s+range\((\d+)(?:,\s*(\d+))?\)\s*:/);if(forMatch){const[,varName,startOrEnd,end]=forMatch,start=end?parseInt(startOrEnd):0,limit=parseInt(end||startOrEnd),loopBodyIdx=lines.indexOf(line),bodyLines=[];for(let n=loopBodyIdx+1;n<lines.length&&(lines[n].startsWith("    ")||lines[n].startsWith("	"));n++)bodyLines.push(lines[n].trim());for(let k=start;k<Math.min(limit,100);k++){variables[varName]=k;for(const bLine of bodyLines){const bPrint=bLine.match(/^print\s*\((.+)\)$/);if(bPrint){let c=bPrint[1].trim();if(c.startsWith('f"')||c.startsWith("f'")){const str=c.slice(2,-1);result.push(str.replace(/\{([^}]+)\}/g,(_,e)=>{if(e=e.trim(),e in variables)return variables[e];try{return eval(e)}catch{return`{${e}}`}}))}else if(c in variables)result.push(String(variables[c]));else{let expr=c;for(const[n,t]of Object.entries(variables))expr=expr.replace(new RegExp(`\\b${n}\\b`,"g"),typeof t=="string"?`"${t}"`:t);try{result.push(String(eval(expr)))}catch{result.push(c)}}}}}}}return result.length>0?result.join(`
`):"(출력 없음)"}catch(n){return`Error: ${n.message}`}},handleRun=()=>{setIsRunning(!0),setOutput(""),setTimeout(()=>{const n=simulatePythonExecution(code);setOutput(n),setIsRunning(!1),incrementCodeRuns()},500)},handleReset=()=>{setCode(initialCode),setOutput("")},handleKeyDown=n=>{if(n.key==="Tab"){n.preventDefault();const t=n.target.selectionStart,m=n.target.selectionEnd,f=code.substring(0,t)+"    "+code.substring(m);setCode(f),setTimeout(()=>{n.target.selectionStart=n.target.selectionEnd=t+4},0)}(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&handleRun()},lineCount=code.split(`
`).length;return jsxRuntimeExports.jsxs("div",{className:"code-editor",children:[jsxRuntimeExports.jsxs("div",{className:"editor-toolbar",children:[jsxRuntimeExports.jsxs("div",{className:"editor-title",children:[jsxRuntimeExports.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("polyline",{points:"16 18 22 12 16 6"}),jsxRuntimeExports.jsx("polyline",{points:"8 6 2 12 8 18"})]}),jsxRuntimeExports.jsx("span",{children:"Python Editor"})]}),jsxRuntimeExports.jsxs("div",{className:"editor-actions",children:[jsxRuntimeExports.jsx("button",{className:"editor-btn hint-btn",onClick:()=>setShowHint(!showHint),title:"힌트",children:jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("circle",{cx:"12",cy:"12",r:"10"}),jsxRuntimeExports.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),jsxRuntimeExports.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),jsxRuntimeExports.jsx("button",{className:"editor-btn reset-btn",onClick:handleReset,title:"초기화",children:jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("polyline",{points:"1 4 1 10 7 10"}),jsxRuntimeExports.jsx("path",{d:"M3.51 15a9 9 0 102.13-9.36L1 10"})]})}),jsxRuntimeExports.jsxs("button",{className:"editor-btn run-btn",onClick:handleRun,disabled:isRunning,title:"실행 (Ctrl+Enter)",children:[isRunning?jsxRuntimeExports.jsx("div",{className:"loading-spinner-small"}):jsxRuntimeExports.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:jsxRuntimeExports.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),jsxRuntimeExports.jsx("span",{children:isRunning?"실행 중...":"실행"})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"editor-body",children:[jsxRuntimeExports.jsx("div",{className:"line-numbers",children:Array.from({length:lineCount},(n,t)=>jsxRuntimeExports.jsx("span",{children:t+1},t+1))}),jsxRuntimeExports.jsx("textarea",{ref:textareaRef,className:"code-input",value:code,onChange:n=>setCode(n.target.value),onKeyDown:handleKeyDown,spellCheck:!1,placeholder:"# 파이썬 코드를 입력하세요..."})]}),showHint&&expectedOutput&&jsxRuntimeExports.jsxs("div",{className:"editor-hint",children:[jsxRuntimeExports.jsx("strong",{children:"예상 출력:"})," ",jsxRuntimeExports.jsx("code",{children:expectedOutput})]}),output&&jsxRuntimeExports.jsxs("div",{className:"editor-output",children:[jsxRuntimeExports.jsxs("div",{className:"output-header",children:[jsxRuntimeExports.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[jsxRuntimeExports.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),jsxRuntimeExports.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),jsxRuntimeExports.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),jsxRuntimeExports.jsx("span",{children:"출력 결과"}),expectedOutput&&output.trim()===expectedOutput.trim()&&jsxRuntimeExports.jsx("span",{className:"output-correct",children:"정답!"})]}),jsxRuntimeExports.jsx("pre",{className:"output-content",children:output})]})]})}function LessonPage(){const{level:n,lessonId:t}=useParams(),{completedLessons:m,completeLesson:f}=useProgress(),[s,y]=reactExports.useState(0),d=levelInfo[n],l=lessons[n]||[],r=l.find(p=>p.id===t),j=lessonContents[t],g=m.has(t),u=l.findIndex(p=>p.id===t),x=u>0?l[u-1]:null,h=u<l.length-1?l[u+1]:null;if(!r||!d)return jsxRuntimeExports.jsx("div",{className:"not-found-page",children:jsxRuntimeExports.jsxs("div",{className:"not-found-content",children:[jsxRuntimeExports.jsx("div",{className:"not-found-code",children:"404"}),jsxRuntimeExports.jsx("h2",{className:"not-found-title",children:"레슨을 찾을 수 없습니다"}),jsxRuntimeExports.jsx(Link,{to:`/${n}`,className:"btn btn-primary",children:"목록으로 돌아가기"})]})});const o=j?.sections||[{title:r.title,content:`이 레슨에서는 ${r.description}에 대해 학습합니다.`,code:`# 예제 코드
print("Hello, Python!")`,expectedOutput:"Hello, Python!"}];return jsxRuntimeExports.jsxs("div",{className:"lesson-page",children:[jsxRuntimeExports.jsx("section",{className:"page-header",style:{background:`linear-gradient(135deg, ${d.color}, ${d.color}dd)`},children:jsxRuntimeExports.jsxs("div",{className:"container",children:[jsxRuntimeExports.jsxs("div",{className:"breadcrumb",children:[jsxRuntimeExports.jsx(Link,{to:"/",children:"홈"}),jsxRuntimeExports.jsx("span",{children:"/"}),jsxRuntimeExports.jsxs(Link,{to:`/${n}`,children:[d.title," 과정"]}),jsxRuntimeExports.jsx("span",{children:"/"}),jsxRuntimeExports.jsx("span",{children:r.title})]}),jsxRuntimeExports.jsxs("div",{className:"page-header-content",children:[jsxRuntimeExports.jsx("span",{className:"page-header-icon",children:jsxRuntimeExports.jsx("i",{className:r.icon})}),jsxRuntimeExports.jsx("h1",{children:r.title}),jsxRuntimeExports.jsx("p",{children:r.description}),jsxRuntimeExports.jsxs("div",{className:"lesson-meta-bar",children:[jsxRuntimeExports.jsxs("span",{children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-clock"})," 약 ",r.estimatedTime,"분"]}),jsxRuntimeExports.jsxs("span",{children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-clipboard"})," ",r.topics?.length||0,"개 주제"]}),jsxRuntimeExports.jsx("span",{children:Array.from({length:3},(p,i)=>jsxRuntimeExports.jsx("i",{className:i<r.difficulty?"fa-solid fa-star":"fa-regular fa-star"},i))})]})]})]})}),jsxRuntimeExports.jsxs("div",{className:"lesson-layout container",children:[jsxRuntimeExports.jsxs("aside",{className:"lesson-sidebar",children:[jsxRuntimeExports.jsx("h3",{children:"학습 목차"}),jsxRuntimeExports.jsx("ul",{className:"lesson-toc",children:o.map((p,i)=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsxs("button",{className:`toc-item${s===i?" active":""}`,onClick:()=>y(i),children:[jsxRuntimeExports.jsx("span",{className:"toc-number",children:i+1}),jsxRuntimeExports.jsx("span",{className:"toc-title",children:p.title})]})},i))}),r.topics&&jsxRuntimeExports.jsxs("div",{className:"lesson-topics-list",children:[jsxRuntimeExports.jsx("h4",{children:"학습 주제"}),r.topics.map((p,i)=>jsxRuntimeExports.jsx("span",{className:"topic-tag",children:p},i))]})]}),jsxRuntimeExports.jsxs("main",{className:"lesson-content",children:[jsxRuntimeExports.jsxs("div",{className:"lesson-section",children:[jsxRuntimeExports.jsx("h2",{children:o[s]?.title}),jsxRuntimeExports.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:o[s]?.content?.replace(/\n/g,"<br/>")}}),o[s]?.code&&jsxRuntimeExports.jsxs("div",{className:"lesson-practice",children:[jsxRuntimeExports.jsx("h3",{children:"직접 실습해보세요"}),jsxRuntimeExports.jsx(CodeEditor,{initialCode:o[s].code,expectedOutput:o[s].expectedOutput||"",lessonId:t})]}),o[s]?.tip&&jsxRuntimeExports.jsxs("div",{className:"lesson-tip",children:[jsxRuntimeExports.jsx("span",{className:"tip-icon",children:jsxRuntimeExports.jsx("i",{className:"fa-solid fa-lightbulb"})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("strong",{children:"팁:"})," ",o[s].tip]})]})]}),jsxRuntimeExports.jsxs("div",{className:"lesson-nav",children:[jsxRuntimeExports.jsx("div",{className:"lesson-nav-left",children:x&&jsxRuntimeExports.jsxs(Link,{to:`/${n}/${x.id}`,className:"lesson-nav-btn prev",children:[jsxRuntimeExports.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:jsxRuntimeExports.jsx("polyline",{points:"15 18 9 12 15 6"})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("span",{className:"nav-label",children:"이전 레슨"}),jsxRuntimeExports.jsx("span",{className:"nav-title",children:x.title})]})]})}),!g&&jsxRuntimeExports.jsxs("button",{className:"btn btn-accent complete-btn",onClick:()=>f(t),children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-check"})," 학습 완료"]}),g&&jsxRuntimeExports.jsxs("span",{className:"completed-badge-inline",children:[jsxRuntimeExports.jsx("i",{className:"fa-solid fa-check"})," 완료됨"]}),jsxRuntimeExports.jsx("div",{className:"lesson-nav-right",children:h&&jsxRuntimeExports.jsxs(Link,{to:`/${n}/${h.id}`,className:"lesson-nav-btn next",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("span",{className:"nav-label",children:"다음 레슨"}),jsxRuntimeExports.jsx("span",{className:"nav-title",children:h.title})]}),jsxRuntimeExports.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:jsxRuntimeExports.jsx("polyline",{points:"9 18 15 12 9 6"})})]})})]})]})]})]})}export{LessonPage as default};
