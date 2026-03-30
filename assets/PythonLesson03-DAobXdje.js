import{b as d,j as e,L as r}from"./index-17giRN1s.js";function c(){const{t:n,lang:s}=d();return e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:s==="en"?"Week 3: Data Types & Arithmetic":"3주차: Data Type과 산술연산"}),e.jsx("p",{children:s==="en"?"Mastering integers, floats, strings, booleans, and arithmetic operators":"정수, 실수, 문자열, 논리형과 산술연산자 완전 정복"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n("pythonLearning.learningObjectives")}),s==="en"?e.jsxs("ul",{children:[e.jsx("li",{children:"Understand and distinguish the 4 basic data types in Python (int, float, str, bool)."}),e.jsx("li",{children:"Use type() and isinstance() functions to check data types."}),e.jsx("li",{children:"Understand and apply the difference between implicit and explicit type conversion."}),e.jsx("li",{children:"Master the 7 arithmetic operators and operator precedence."}),e.jsx("li",{children:"Use string operations and key string methods."})]}):e.jsxs("ul",{children:[e.jsx("li",{children:"파이썬의 4가지 기본 자료형(int, float, str, bool)을 이해하고 구분한다."}),e.jsx("li",{children:"type()과 isinstance() 함수를 활용하여 자료형을 확인한다."}),e.jsx("li",{children:"암시적 형변환과 명시적 형변환의 차이를 이해하고 적용한다."}),e.jsx("li",{children:"7가지 산술연산자와 연산자 우선순위를 파악한다."}),e.jsx("li",{children:"문자열 연산과 주요 문자열 메서드를 활용한다."})]})]}),e.jsx("h2",{children:s==="en"?"1. Data Type Overview":"1. 자료형(Data Type) 개요"}),e.jsx("h3",{children:s==="en"?"1.1 What is a Data Type?":"1.1 자료형이란?"}),s==="en"?e.jsxs("p",{children:["A ",e.jsx("strong",{children:"data type"})," is a classification system that defines the ",e.jsx("strong",{children:"kind and size"})," of data handled in a program. Since computers store all data as 0s and 1s, data types determine how to interpret the bits stored in memory. For example, the same bit pattern can be a number when interpreted as an integer, or a character when interpreted as a string."]}):e.jsxs("p",{children:[e.jsx("strong",{children:"자료형(Data Type)"}),"이란 프로그램에서 다루는 데이터의 ",e.jsx("strong",{children:"종류와 크기"}),"를 정의하는 분류 체계입니다. 컴퓨터는 모든 데이터를 0과 1로 저장하기 때문에, 자료형을 통해 메모리에 저장된 비트(bit)를 어떻게 해석할지 결정합니다. 예를 들어 같은 비트 패턴이라도 정수로 해석하면 숫자가 되고, 문자열로 해석하면 글자가 됩니다."]}),e.jsx("h3",{children:s==="en"?"1.2 Static Typing vs Dynamic Typing":"1.2 정적 타이핑 vs 동적 타이핑"}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Static Typing"}),e.jsx("th",{children:"Dynamic Typing"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Type declaration"})}),e.jsx("td",{children:"Must specify type at declaration"}),e.jsx("td",{children:"No type specification needed, auto-determined"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Type change"})}),e.jsx("td",{children:"Cannot change once declared"}),e.jsx("td",{children:"Can assign different type values anytime"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Error detection"})}),e.jsx("td",{children:"At compile time (before execution)"}),e.jsx("td",{children:"At runtime (during execution)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Representative languages"})}),e.jsx("td",{children:"C, C++, Java"}),e.jsx("td",{children:"Python, JavaScript, Ruby"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Example"})}),e.jsx("td",{children:e.jsx("code",{children:"int x = 10;"})}),e.jsx("td",{children:e.jsx("code",{children:"x = 10"})})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"정적 타이핑 (Static Typing)"}),e.jsx("th",{children:"동적 타이핑 (Dynamic Typing)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자료형 선언"})}),e.jsx("td",{children:"변수 선언 시 자료형 명시 필요"}),e.jsx("td",{children:"자료형 명시 불필요, 자동 결정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자료형 변경"})}),e.jsx("td",{children:"한 번 선언하면 변경 불가"}),e.jsx("td",{children:"언제든 다른 자료형의 값 할당 가능"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"오류 발견 시점"})}),e.jsx("td",{children:"컴파일 시 (실행 전)"}),e.jsx("td",{children:"런타임 시 (실행 중)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"대표 언어"})}),e.jsx("td",{children:"C, C++, Java"}),e.jsx("td",{children:"Python, JavaScript, Ruby"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"예시"})}),e.jsx("td",{children:e.jsx("code",{children:"int x = 10;"})}),e.jsx("td",{children:e.jsx("code",{children:"x = 10"})})]})]})]}),e.jsx("h3",{children:s==="en"?"1.3 Python Data Type Classification":"1.3 파이썬 자료형 분류"}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"Numeric"})}),e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"Integer"}),e.jsx("td",{children:e.jsx("code",{children:"42, -3, 0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"Float (floating point)"}),e.jsx("td",{children:e.jsx("code",{children:"3.14, -0.5, 1.0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"complex"})}),e.jsx("td",{children:"Complex number"}),e.jsx("td",{children:e.jsx("code",{children:"3+4j, 1j"})})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"Sequence"})}),e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:"String"}),e.jsx("td",{children:e.jsx("code",{children:`"hello", 'Python'`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"list"})}),e.jsx("td",{children:"List (mutable)"}),e.jsx("td",{children:e.jsx("code",{children:"[1, 2, 3]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tuple"})}),e.jsx("td",{children:"Tuple (immutable)"}),e.jsx("td",{children:e.jsx("code",{children:"(1, 2, 3)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mapping"})}),e.jsx("td",{children:e.jsx("code",{children:"dict"})}),e.jsx("td",{children:"Dictionary (key-value pairs)"}),e.jsx("td",{children:e.jsxs("code",{children:["{",'name: "Alice"',"}"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Set"})}),e.jsx("td",{children:e.jsx("code",{children:"set"})}),e.jsx("td",{children:"Set (no duplicates)"}),e.jsx("td",{children:e.jsxs("code",{children:["{","1, 2, 3","}"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"True/False"}),e.jsx("td",{children:e.jsx("code",{children:"True, False"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Special"})}),e.jsx("td",{children:e.jsx("code",{children:"NoneType"})}),e.jsx("td",{children:"No value"}),e.jsx("td",{children:e.jsx("code",{children:"None"})})]})]})]}),e.jsxs("p",{children:["This week, we will focus on the 4 most fundamental data types: ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"float"}),", ",e.jsx("code",{children:"str"}),", and ",e.jsx("code",{children:"bool"}),". The remaining types (list, tuple, dict, set) will be covered in later weeks."]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"분류"}),e.jsx("th",{children:"자료형"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"수치형"})}),e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"정수"}),e.jsx("td",{children:e.jsx("code",{children:"42, -3, 0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"실수 (부동소수점)"}),e.jsx("td",{children:e.jsx("code",{children:"3.14, -0.5, 1.0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"complex"})}),e.jsx("td",{children:"복소수"}),e.jsx("td",{children:e.jsx("code",{children:"3+4j, 1j"})})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"시퀀스형"})}),e.jsx("td",{children:e.jsx("code",{children:"str"})}),e.jsx("td",{children:"문자열"}),e.jsx("td",{children:e.jsx("code",{children:`"hello", '파이썬'`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"list"})}),e.jsx("td",{children:"리스트 (가변)"}),e.jsx("td",{children:e.jsx("code",{children:"[1, 2, 3]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tuple"})}),e.jsx("td",{children:"튜플 (불변)"}),e.jsx("td",{children:e.jsx("code",{children:"(1, 2, 3)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"매핑형"})}),e.jsx("td",{children:e.jsx("code",{children:"dict"})}),e.jsx("td",{children:"딕셔너리 (키-값 쌍)"}),e.jsx("td",{children:e.jsxs("code",{children:["{",'name: "홍길동"',"}"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"집합형"})}),e.jsx("td",{children:e.jsx("code",{children:"set"})}),e.jsx("td",{children:"집합 (중복 없음)"}),e.jsx("td",{children:e.jsxs("code",{children:["{","1, 2, 3","}"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"논리형"})}),e.jsx("td",{children:e.jsx("code",{children:"bool"})}),e.jsx("td",{children:"참/거짓"}),e.jsx("td",{children:e.jsx("code",{children:"True, False"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"특수형"})}),e.jsx("td",{children:e.jsx("code",{children:"NoneType"})}),e.jsx("td",{children:"값 없음"}),e.jsx("td",{children:e.jsx("code",{children:"None"})})]})]})]}),e.jsxs("p",{children:["이번 주차에서는 가장 기본이 되는 4가지 자료형인 ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"float"}),", ",e.jsx("code",{children:"str"}),", ",e.jsx("code",{children:"bool"}),"을 집중적으로 학습합니다. 나머지 자료형(list, tuple, dict, set)은 이후 주차에서 다룹니다."]})]}),e.jsx("h2",{children:s==="en"?"2. Integer Type (int)":"2. 정수형 (int)"}),e.jsx("h3",{children:s==="en"?"2.1 Characteristics of Integers":"2.1 정수형의 특징"}),s==="en"?e.jsxs("p",{children:["The integer type (",e.jsx("code",{children:"int"}),") represents positive numbers, negative numbers, and zero without decimal points. Python integers support ",e.jsx("strong",{children:"arbitrary precision"}),", meaning unlike C or Java,",e.jsx("strong",{children:"there is no limit on the size of integers."}),"Any number, no matter how large, can be represented exactly as long as memory allows."]}):e.jsxs("p",{children:["정수형(",e.jsx("code",{children:"int"}),")은 소수점이 없는 양수, 음수, 0을 나타내는 자료형입니다. 파이썬의 정수는 ",e.jsx("strong",{children:"임의 정밀도(arbitrary precision)"}),"를 지원하여, C나 Java와 달리 ",e.jsx("strong",{children:"정수의 크기에 제한이 없습니다."}),"메모리가 허용하는 한 아무리 큰 수도 정확하게 표현할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Integer basics":"정수형 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 정수
a = 42
b = -17
c = 0
print(type(a))    # <class 'int'>

# 파이썬은 큰 정수도 제한 없이 처리
big_num = 999999999999999999999999999999
print(big_num)    # 정확히 출력됨!
print(type(big_num))  # <class 'int'>

# 정수끼리의 연산 결과도 정수 (나눗셈 제외)
print(10 + 3)     # 13 (int)
print(10 * 3)     # 30 (int)
print(10 / 3)     # 3.333... (float! 주의)`})})]}),e.jsx("h3",{children:s==="en"?"2.2 Various Number Base Representations":"2.2 다양한 진법 표현"}),s==="en"?e.jsx("p",{children:"In Python, you can directly represent numbers in binary, octal, and hexadecimal in addition to decimal. Prefixes are used to distinguish the number base."}):e.jsx("p",{children:"파이썬에서는 10진수 외에도 2진수, 8진수, 16진수를 직접 표현할 수 있습니다. 접두사를 붙여 진법을 구분합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Number base representation and conversion":"진법 표현과 변환"}),e.jsx("pre",{children:e.jsx("code",{children:`# 다양한 진법 리터럴
decimal = 42        # 10진수
binary = 0b101010   # 2진수 (0b 접두사)
octal = 0o52        # 8진수 (0o 접두사)
hexa = 0x2A         # 16진수 (0x 접두사)

# 모두 같은 값 (42)
print(decimal)      # 42
print(binary)       # 42
print(octal)        # 42
print(hexa)         # 42

# 진법 변환 함수
print(bin(42))      # 0b101010  (10진수 → 2진수)
print(oct(42))      # 0o52      (10진수 → 8진수)
print(hex(42))      # 0x2a      (10진수 → 16진수)

# 변환 함수의 결과는 문자열
print(type(bin(42)))  # <class 'str'>`})})]}),e.jsx("h3",{children:s==="en"?"2.3 Underscore Separator":"2.3 언더스코어 구분자"}),s==="en"?e.jsxs("p",{children:["To improve readability of large numbers, you can use ",e.jsx("strong",{children:"underscores (_)"})," as digit separators. Underscores do not affect the value."]}):e.jsxs("p",{children:["큰 숫자의 가독성을 높이기 위해 ",e.jsx("strong",{children:"밑줄(_)"}),"을 자릿수 구분자로 사용할 수 있습니다. 밑줄은 값에 영향을 주지 않습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Underscore separator":"언더스코어 구분자"}),e.jsx("pre",{children:e.jsx("code",{children:`# 큰 숫자를 읽기 쉽게
population = 51_780_000       # 5천 1백 78만
budget = 1_000_000_000        # 10억
print(population)              # 51780000
print(budget)                  # 1000000000

# 2진수에서도 사용 가능
flags = 0b1111_0000_1010_0101
print(flags)                   # 61605`})})]}),e.jsx("h2",{children:s==="en"?"3. Float Type (float)":"3. 실수형 (float)"}),e.jsx("h3",{children:s==="en"?"3.1 Characteristics of Floats":"3.1 실수형의 특징"}),s==="en"?e.jsxs("p",{children:["The float type (",e.jsx("code",{children:"float"}),") represents numbers with decimal points. Internally, they are stored in ",e.jsx("strong",{children:"IEEE 754 double-precision floating-point"})," format, which can represent approximately 15-17 significant digits."]}):e.jsxs("p",{children:["실수형(",e.jsx("code",{children:"float"}),")은 소수점이 있는 수를 나타내는 자료형입니다. 내부적으로 ",e.jsx("strong",{children:"IEEE 754 배정밀도 부동소수점"})," 형식으로 저장되며, 약 15~17자리의 유효숫자를 표현할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Float basics":"실수형 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# 실수 선언
pi = 3.141592653589793
temperature = -12.5
height = 175.0         # 정수 값이지만 소수점이 있으므로 float

print(type(pi))        # <class 'float'>
print(type(height))    # <class 'float'>`})})]}),e.jsx("h3",{children:s==="en"?"3.2 Floating-Point Precision Issue":"3.2 부동소수점 오차 문제"}),s==="en"?e.jsxs("p",{children:["Computers store real numbers by converting them to binary, but some decimal fractions cannot be represented exactly in binary. This causes ",e.jsx("strong",{children:"floating-point precision errors"}),". This is not a Python-specific issue but a fundamental problem in all programming languages that use the IEEE 754 standard."]}):e.jsxs("p",{children:["컴퓨터는 실수를 2진수로 변환하여 저장하는데, 일부 10진 소수는 2진수로 정확히 표현할 수 없습니다. 이로 인해 ",e.jsx("strong",{children:"부동소수점 오차"}),"가 발생합니다. 이것은 파이썬만의 문제가 아니라 IEEE 754 표준을 사용하는 모든 프로그래밍 언어에서 발생하는 근본적인 문제입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Floating-point precision (very important!)":"부동소수점 오차 (매우 중요!)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 0.1 + 0.2는 정확히 0.3이 아님!
print(0.1 + 0.2)          # 0.30000000000000004
print(0.1 + 0.2 == 0.3)   # False  (주의!)

# 왜 이런 일이 발생할까?
# 0.1은 2진수로 0.0001100110011... (무한소수)
# 컴퓨터는 유한한 비트로 저장하므로 근사값이 됨

# 해결 방법 1: round() 함수
print(round(0.1 + 0.2, 1) == 0.3)   # True

# 해결 방법 2: 오차 범위(epsilon) 비교
import math
print(math.isclose(0.1 + 0.2, 0.3)) # True

# 해결 방법 3: decimal 모듈 사용 (정밀 계산 필요 시)
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3`})})]}),e.jsx("h3",{children:s==="en"?"3.3 Scientific Notation and Special Values":"3.3 과학적 표기법과 특수 값"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Scientific notation and special values":"과학적 표기법과 특수 값"}),e.jsx("pre",{children:e.jsx("code",{children:`# 과학적 표기법 (e 또는 E)
speed_of_light = 3e8       # 3 × 10^8 = 300000000.0
tiny = 1.5e-10             # 1.5 × 10^(-10) = 0.00000000015
print(speed_of_light)      # 300000000.0
print(tiny)                # 1.5e-10

# 특수 값
positive_inf = float('inf')    # 양의 무한대
negative_inf = float('-inf')   # 음의 무한대
not_a_number = float('nan')    # 숫자가 아님 (Not a Number)

print(positive_inf > 999999999)     # True
print(positive_inf + 1)             # inf
print(not_a_number == not_a_number) # False (nan은 자기 자신과도 같지 않음!)

# round() 함수: 반올림
print(round(3.14159))         # 3
print(round(3.14159, 2))      # 3.14
print(round(3.14159, 4))      # 3.1416
print(round(2.5))             # 2 (은행원 반올림: 짝수로 반올림)
print(round(3.5))             # 4`})})]}),e.jsx("h2",{children:s==="en"?"4. String Type (str)":"4. 문자열형 (str)"}),e.jsx("h3",{children:s==="en"?"4.1 Creating Strings":"4.1 문자열 생성"}),s==="en"?e.jsxs("p",{children:["A string (",e.jsx("code",{children:"str"}),") is an ordered sequence of characters. It is created by enclosing characters in single quotes (",e.jsx("code",{children:"'"}),") or double quotes (",e.jsx("code",{children:'"'}),"), and in Python there is no functional difference between the two."]}):e.jsxs("p",{children:["문자열(",e.jsx("code",{children:"str"}),")은 문자들의 순서 있는 나열입니다. 작은따옴표(",e.jsx("code",{children:"'"}),") 또는 큰따옴표(",e.jsx("code",{children:'"'}),")로 감싸서 생성하며, 파이썬에서는 두 방식에 기능상 차이가 없습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"String creation methods":"문자열 생성 방법"}),e.jsx("pre",{children:e.jsx("code",{children:`# 작은따옴표
name = '홍길동'

# 큰따옴표
greeting = "안녕하세요"

# 따옴표 안에 따옴표
msg1 = "It's Python!"         # 큰따옴표 안에 작은따옴표
msg2 = '그가 "안녕"이라고 말했다'  # 작은따옴표 안에 큰따옴표

# 삼중 따옴표: 여러 줄 문자열
poem = """장미는 빨갛고
제비꽃은 파랗고
파이썬은 아름답다"""
print(poem)

# 삼중 따옴표 (작은따옴표도 가능)
info = '''이름: 홍길동
나이: 20세
전공: 컴퓨터공학'''
print(info)`})})]}),e.jsx("h3",{children:s==="en"?"4.2 Strings are Immutable":"4.2 문자열은 불변(Immutable)"}),s==="en"?e.jsxs("p",{children:["Python strings are ",e.jsx("strong",{children:"immutable"})," objects. You cannot directly modify individual characters of a string once created. To change a string, you must create a new string."]}):e.jsxs("p",{children:["파이썬의 문자열은 ",e.jsx("strong",{children:"불변(Immutable)"})," 객체입니다. 한 번 생성된 문자열의 개별 문자를 직접 변경할 수 없습니다. 문자열을 변경하려면 새로운 문자열을 생성해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"String immutability":"문자열의 불변성"}),e.jsx("pre",{children:e.jsx("code",{children:`text = "Hello"

# 인덱스로 개별 문자 읽기는 가능
print(text[0])        # H

# 개별 문자 변경은 불가!
# text[0] = "h"       # TypeError: 'str' does not support item assignment

# 새로운 문자열을 생성하여 변경
text = "h" + text[1:]  # 새 문자열 생성
print(text)            # hello`})})]}),e.jsx("h3",{children:s==="en"?"4.3 Indexing":"4.3 인덱싱 (Indexing)"}),s==="en"?e.jsxs("p",{children:["Each character in a string can be accessed by its ",e.jsx("strong",{children:"index"})," number. Indices ",e.jsx("strong",{children:"start from 0"}),", and negative indices allow access from the end."]}):e.jsxs("p",{children:["문자열의 각 문자는 ",e.jsx("strong",{children:"인덱스(index)"}),"라는 번호로 접근할 수 있습니다. 인덱스는 ",e.jsx("strong",{children:"0부터 시작"}),"하며, 음수 인덱스를 사용하면 뒤에서부터 접근합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Indexing":"인덱싱"}),e.jsx("pre",{children:e.jsx("code",{children:`text = "Python"
# 인덱스:  0  1  2  3  4  5
# 문자:    P  y  t  h  o  n
# 음수:   -6 -5 -4 -3 -2 -1

# 양수 인덱스 (앞에서부터, 0부터 시작)
print(text[0])      # P (첫 번째 문자)
print(text[1])      # y
print(text[5])      # n (마지막 문자)

# 음수 인덱스 (뒤에서부터, -1부터 시작)
print(text[-1])     # n (마지막 문자)
print(text[-2])     # o
print(text[-6])     # P (첫 번째 문자)

# 범위를 벗어나면 오류
# print(text[6])    # IndexError: string index out of range`})})]}),e.jsx("h3",{children:s==="en"?"4.4 Slicing":"4.4 슬라이싱 (Slicing)"}),s==="en"?e.jsxs("p",{children:["Slicing allows you to extract a portion of a string. The syntax is ",e.jsx("code",{children:"[start:end:step]"}),", where ",e.jsx("strong",{children:"start is inclusive and end is exclusive"}),"."]}):e.jsxs("p",{children:["슬라이싱을 사용하면 문자열의 일부분을 추출할 수 있습니다.",e.jsx("code",{children:"[start:end:step]"})," 형태로 사용하며, ",e.jsx("strong",{children:"start는 포함, end는 미포함"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Slicing":"슬라이싱"}),e.jsx("pre",{children:e.jsx("code",{children:`text = "Hello, Python!"
# 인덱스: 0123456789...

# [start:end] - start부터 end-1까지
print(text[0:5])      # Hello
print(text[7:13])     # Python

# start 생략: 처음부터
print(text[:5])       # Hello

# end 생략: 끝까지
print(text[7:])       # Python!

# 둘 다 생략: 전체 복사
print(text[:])        # Hello, Python!

# 음수 인덱스 활용
print(text[-7:-1])    # Python

# [start:end:step] - step 간격으로 추출
print(text[::2])      # Hlo yhn  (2칸씩 건너뛰기)

# 문자열 뒤집기 (★ 자주 사용!)
print(text[::-1])     # !nohtyP ,olleH

# 실용적 예시
phone = "010-1234-5678"
print(phone[:3])      # 010 (통신사 번호)
print(phone[4:8])     # 1234 (중간 번호)
print(phone[9:])      # 5678 (끝 번호)`})})]}),e.jsx("h2",{children:s==="en"?"5. Boolean Type (bool)":"5. 논리형 (bool)"}),e.jsx("h3",{children:s==="en"?"5.1 Boolean Basics":"5.1 논리형 기본"}),s==="en"?e.jsxs("p",{children:["The boolean type (",e.jsx("code",{children:"bool"}),") has only two values: ",e.jsx("strong",{children:"True"})," and ",e.jsx("strong",{children:"False"}),". Note that the ",e.jsx("strong",{children:"first letter must be uppercase"}),". ",e.jsx("code",{children:"true"})," and ",e.jsx("code",{children:"false"})," are not recognized in Python. Booleans play a crucial role in conditional statements (",e.jsx("code",{children:"if"}),") and loops (",e.jsx("code",{children:"while"}),")."]}):e.jsxs("p",{children:["논리형(",e.jsx("code",{children:"bool"}),")은 ",e.jsx("strong",{children:"참(True)"}),"과 ",e.jsx("strong",{children:"거짓(False)"})," 두 가지 값만 가지는 자료형입니다. 주의할 점은 반드시 ",e.jsx("strong",{children:"첫 글자가 대문자"}),"여야 합니다. ",e.jsx("code",{children:"true"}),", ",e.jsx("code",{children:"false"}),"는 파이썬에서 인식되지 않습니다. 논리형은 조건문(",e.jsx("code",{children:"if"}),")과 반복문(",e.jsx("code",{children:"while"}),")에서 핵심적인 역할을 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Boolean basics":"논리형 기본"}),e.jsx("pre",{children:e.jsx("code",{children:`# bool 값
is_student = True
is_graduated = False

print(type(is_student))    # <class 'bool'>
print(is_student)          # True

# 비교 연산의 결과는 bool
print(10 > 5)              # True
print(10 < 5)              # False
print(10 == 10)            # True
print(10 != 5)             # True
print("abc" == "abc")      # True`})})]}),e.jsx("h3",{children:s==="en"?"5.2 Logical Operators: and, or, not":"5.2 논리 연산자: and, or, not"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Logical operators":"논리 연산자"}),e.jsx("pre",{children:e.jsx("code",{children:`# and: 둘 다 True일 때만 True
print(True and True)       # True
print(True and False)      # False
print(False and True)      # False
print(False and False)     # False

# or: 하나라도 True이면 True
print(True or True)        # True
print(True or False)       # True
print(False or True)       # True
print(False or False)      # False

# not: 반대로 뒤집기
print(not True)            # False
print(not False)           # True

# 실용적 예시
age = 20
score = 85
print(age >= 18 and score >= 80)   # True (성인이고 점수 80 이상)
print(age < 18 or score >= 90)     # False`})})]}),e.jsx("h3",{children:s==="en"?"5.3 Truthy and Falsy Values":"5.3 Truthy와 Falsy 값"}),s==="en"?e.jsxs("p",{children:["In Python, values that are not of type ",e.jsx("code",{children:"bool"})," can also be evaluated as ",e.jsx("strong",{children:"True"})," or ",e.jsx("strong",{children:"False"})," in a boolean context. Empty or zero values are ",e.jsx("strong",{children:"Falsy (evaluated as False)"}),", while everything else is ",e.jsx("strong",{children:"Truthy (evaluated as True)"}),"."]}):e.jsxs("p",{children:["파이썬에서는 ",e.jsx("code",{children:"bool"})," 타입이 아닌 값도 논리적 맥락에서 ",e.jsx("strong",{children:"True"})," 또는 ",e.jsx("strong",{children:"False"}),"로 평가됩니다. 비어있거나 0인 값은 ",e.jsx("strong",{children:"Falsy(거짓으로 평가)"}),", 나머지는 모두 ",e.jsx("strong",{children:"Truthy(참으로 평가)"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Truthy and Falsy":"Truthy와 Falsy"}),e.jsx("pre",{children:e.jsx("code",{children:`# Falsy 값들 (False로 평가됨)
print(bool(0))         # False (정수 0)
print(bool(0.0))       # False (실수 0.0)
print(bool(""))        # False (빈 문자열)
print(bool([]))        # False (빈 리스트)
print(bool(None))      # False (None)

# Truthy 값들 (True로 평가됨)
print(bool(1))         # True (0이 아닌 정수)
print(bool(-5))        # True (음수도 True)
print(bool(3.14))      # True (0.0이 아닌 실수)
print(bool("hello"))   # True (비어있지 않은 문자열)
print(bool(" "))       # True (공백도 문자!)
print(bool([1, 2]))    # True (비어있지 않은 리스트)`})})]}),e.jsx("h2",{children:s==="en"?"6. type() and isinstance()":"6. type()과 isinstance()"}),e.jsx("h3",{children:s==="en"?"6.1 The type() Function":"6.1 type() 함수"}),s==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"type()"})," function ",e.jsx("strong",{children:"returns the data type"})," of a given value (object). It is frequently used for debugging and type checking."]}):e.jsxs("p",{children:[e.jsx("code",{children:"type()"})," 함수는 주어진 값(객체)의 ",e.jsx("strong",{children:"자료형을 반환"}),"합니다. 디버깅이나 자료형 확인에 자주 사용됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"type() function":"type() 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# 각 자료형의 type() 결과
print(type(42))           # <class 'int'>
print(type(3.14))         # <class 'float'>
print(type("Hello"))      # <class 'str'>
print(type(True))         # <class 'bool'>
print(type(None))         # <class 'NoneType'>

# type()으로 자료형 비교
x = 42
print(type(x) == int)     # True
print(type(x) == float)   # False

# 변수의 자료형 출력
age = 20
name = "홍길동"
print(f"age의 자료형: {type(age)}")      # <class 'int'>
print(f"name의 자료형: {type(name)}")    # <class 'str'>`})})]}),e.jsx("h3",{children:s==="en"?"6.2 The isinstance() Function":"6.2 isinstance() 함수"}),s==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"isinstance()"})," function returns ",e.jsx("strong",{children:"True/False"})," indicating whether a given object belongs to a specific type (or a tuple of types). Unlike ",e.jsx("code",{children:"type()"}),", it also recognizes inheritance relationships."]}):e.jsxs("p",{children:[e.jsx("code",{children:"isinstance()"})," 함수는 주어진 객체가 특정 자료형(또는 자료형의 튜플)에 해당하는지",e.jsx("strong",{children:"True/False"}),"로 반환합니다. ",e.jsx("code",{children:"type()"}),"과 달리 상속 관계도 인식합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"isinstance() function":"isinstance() 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# isinstance(객체, 자료형) → True/False
print(isinstance(42, int))       # True
print(isinstance(3.14, float))   # True
print(isinstance("Hi", str))     # True
print(isinstance(True, bool))    # True

# bool은 int의 하위 클래스!
print(isinstance(True, int))     # True  ← type()과의 차이!
print(type(True) == int)         # False ← type()은 정확한 자료형만 비교

# 여러 자료형 중 하나인지 확인 (튜플로 전달)
x = 42
print(isinstance(x, (int, float)))  # True (int 또는 float인지)

# 실용적 활용
def check_type(value):
    if isinstance(value, int):
        print(f"{value}은(는) 정수입니다.")
    elif isinstance(value, float):
        print(f"{value}은(는) 실수입니다.")
    elif isinstance(value, str):
        print(f"'{value}'은(는) 문자열입니다.")

check_type(42)       # 42은(는) 정수입니다.
check_type(3.14)     # 3.14은(는) 실수입니다.
check_type("파이썬") # '파이썬'은(는) 문자열입니다.`})})]}),e.jsx("h3",{children:s==="en"?"6.3 Difference Between type() and isinstance()":"6.3 type()과 isinstance()의 차이"}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"type()"}),e.jsx("th",{children:"isinstance()"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Return value"})}),e.jsx("td",{children:"Type class object"}),e.jsx("td",{children:"True or False"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Inheritance"})}),e.jsx("td",{children:"Compares exact type only"}),e.jsx("td",{children:"Recognizes inheritance relationships"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Use case"})}),e.jsx("td",{children:"Type checking/display"}),e.jsx("td",{children:"Type validation/conditional branching"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Recommended for"})}),e.jsx("td",{children:"Debugging, displaying types"}),e.jsx("td",{children:"Type comparison/validation"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"type()"}),e.jsx("th",{children:"isinstance()"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"반환값"})}),e.jsx("td",{children:"자료형 클래스 객체"}),e.jsx("td",{children:"True 또는 False"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상속 인식"})}),e.jsx("td",{children:"정확한 자료형만 비교"}),e.jsx("td",{children:"상속 관계도 인식"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용 목적"})}),e.jsx("td",{children:"자료형 확인/출력"}),e.jsx("td",{children:"자료형 검증/조건 분기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"권장 사용"})}),e.jsx("td",{children:"디버깅, 자료형 표시"}),e.jsx("td",{children:"자료형 비교/검증"})]})]})]}),e.jsx("h2",{children:s==="en"?"7. Type Conversion":"7. 형변환 (Type Conversion)"}),e.jsx("h3",{children:s==="en"?"7.1 Implicit Conversion":"7.1 암시적 형변환 (Implicit Conversion)"}),s==="en"?e.jsxs("p",{children:["Implicit conversion is when Python ",e.jsx("strong",{children:"automatically"})," converts data types. Conversion happens in the direction that prevents data loss (e.g., int → float)."]}):e.jsxs("p",{children:["파이썬이 ",e.jsx("strong",{children:"자동으로"})," 자료형을 변환하는 것을 암시적 형변환이라고 합니다. 데이터 손실이 없는 방향으로 변환됩니다 (예: int → float)."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Implicit conversion":"암시적 형변환"}),e.jsx("pre",{children:e.jsx("code",{children:`# int + float → float (자동 변환)
result = 10 + 3.5
print(result)          # 13.5
print(type(result))    # <class 'float'>

# int + bool → int (True=1, False=0)
result = 10 + True
print(result)          # 11
print(type(result))    # <class 'int'>

# bool + float → float
result = True + 2.5
print(result)          # 3.5
print(type(result))    # <class 'float'>

# 주의: str + int → 자동 변환 안 됨! (오류)
# result = "나이: " + 20  # TypeError!`})})]}),e.jsx("h3",{children:s==="en"?"7.2 Explicit Conversion":"7.2 명시적 형변환 (Explicit Conversion)"}),s==="en"?e.jsxs("p",{children:["Explicit conversion is when the programmer ",e.jsx("strong",{children:"manually"})," uses conversion functions to change data types."]}):e.jsxs("p",{children:["프로그래머가 ",e.jsx("strong",{children:"직접"})," 변환 함수를 사용하여 자료형을 변환하는 것을 명시적 형변환이라고 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Explicit conversion":"명시적 형변환"}),e.jsx("pre",{children:e.jsx("code",{children:`# int(): 정수로 변환
print(int(3.7))        # 3    (소수점 이하 버림, 반올림 아님!)
print(int(3.2))        # 3
print(int(-3.7))       # -3   (0 방향으로 버림)
print(int("42"))       # 42   (문자열 → 정수)
print(int(True))       # 1
print(int(False))      # 0

# float(): 실수로 변환
print(float(42))       # 42.0
print(float("3.14"))   # 3.14
print(float("42"))     # 42.0
print(float(True))     # 1.0

# str(): 문자열로 변환
print(str(42))         # "42"
print(str(3.14))       # "3.14"
print(str(True))       # "True"
print("나이: " + str(20))  # "나이: 20"

# bool(): 논리형으로 변환
print(bool(0))         # False
print(bool(1))         # True
print(bool(""))        # False
print(bool("hello"))   # True`})})]}),e.jsx("h3",{children:s==="en"?"7.3 Type Conversion Cautions":"7.3 형변환 시 주의사항"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Conversion errors (ValueError)":"형변환 오류 (ValueError)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 변환 불가능한 경우 → ValueError
# int("hello")      # ValueError: invalid literal for int()
# int("3.14")       # ValueError: int()에 소수점 문자열 불가!
# float("abc")      # ValueError: could not convert string to float

# 해결: 소수점 문자열 → 정수로 변환하려면 2단계
text = "3.14"
# int(text)         # ValueError!
result = int(float(text))  # 먼저 float으로, 그 다음 int로
print(result)       # 3`})})]}),e.jsx("h3",{children:s==="en"?"7.4 Type Conversion Compatibility":"7.4 형변환 가능 여부"}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Conversion Direction"}),e.jsx("th",{children:"Possible?"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Note"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"int → float"}),e.jsx("td",{children:"Always possible"}),e.jsxs("td",{children:[e.jsx("code",{children:"float(42)"})," → ",e.jsx("code",{children:"42.0"})]}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"float → int"}),e.jsx("td",{children:"Always possible"}),e.jsxs("td",{children:[e.jsx("code",{children:"int(3.7)"})," → ",e.jsx("code",{children:"3"})]}),e.jsx("td",{children:"Truncates decimal part"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"str → int"}),e.jsx("td",{children:"Conditional"}),e.jsxs("td",{children:[e.jsx("code",{children:'int("42")'})," → ",e.jsx("code",{children:"42"})]}),e.jsx("td",{children:"Only integer-format strings"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"str → float"}),e.jsx("td",{children:"Conditional"}),e.jsxs("td",{children:[e.jsx("code",{children:'float("3.14")'})," → ",e.jsx("code",{children:"3.14"})]}),e.jsx("td",{children:"Only number-format strings"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"int/float → str"}),e.jsx("td",{children:"Always possible"}),e.jsxs("td",{children:[e.jsx("code",{children:"str(42)"})," → ",e.jsx("code",{children:'"42"'})]}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Any type → bool"}),e.jsx("td",{children:"Always possible"}),e.jsxs("td",{children:[e.jsx("code",{children:"bool(0)"})," → ",e.jsx("code",{children:"False"})]}),e.jsx("td",{children:"Truthy/Falsy rules"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"변환 방향"}),e.jsx("th",{children:"가능 여부"}),e.jsx("th",{children:"예시"}),e.jsx("th",{children:"주의사항"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"int → float"}),e.jsx("td",{children:"항상 가능"}),e.jsxs("td",{children:[e.jsx("code",{children:"float(42)"})," → ",e.jsx("code",{children:"42.0"})]}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"float → int"}),e.jsx("td",{children:"항상 가능"}),e.jsxs("td",{children:[e.jsx("code",{children:"int(3.7)"})," → ",e.jsx("code",{children:"3"})]}),e.jsx("td",{children:"소수점 이하 버림"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"str → int"}),e.jsx("td",{children:"조건부"}),e.jsxs("td",{children:[e.jsx("code",{children:'int("42")'})," → ",e.jsx("code",{children:"42"})]}),e.jsx("td",{children:"정수 형태 문자열만"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"str → float"}),e.jsx("td",{children:"조건부"}),e.jsxs("td",{children:[e.jsx("code",{children:'float("3.14")'})," → ",e.jsx("code",{children:"3.14"})]}),e.jsx("td",{children:"숫자 형태 문자열만"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"int/float → str"}),e.jsx("td",{children:"항상 가능"}),e.jsxs("td",{children:[e.jsx("code",{children:"str(42)"})," → ",e.jsx("code",{children:'"42"'})]}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"모든 타입 → bool"}),e.jsx("td",{children:"항상 가능"}),e.jsxs("td",{children:[e.jsx("code",{children:"bool(0)"})," → ",e.jsx("code",{children:"False"})]}),e.jsx("td",{children:"Truthy/Falsy 규칙"})]})]})]}),e.jsx("h2",{children:s==="en"?"8. Mastering Arithmetic Operators":"8. 산술연산자 완전 정복"}),e.jsx("h3",{children:s==="en"?"8.1 Seven Arithmetic Operators":"8.1 7가지 산술연산자"}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Result"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsx("td",{children:"Addition"}),e.jsx("td",{children:e.jsx("code",{children:"10 + 3"})}),e.jsx("td",{children:e.jsx("code",{children:"13"})}),e.jsx("td",{children:"Sum of two numbers"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-"})}),e.jsx("td",{children:"Subtraction"}),e.jsx("td",{children:e.jsx("code",{children:"10 - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"7"})}),e.jsx("td",{children:"Difference of two numbers"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*"})}),e.jsx("td",{children:"Multiplication"}),e.jsx("td",{children:e.jsx("code",{children:"10 * 3"})}),e.jsx("td",{children:e.jsx("code",{children:"30"})}),e.jsx("td",{children:"Product of two numbers"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/"})}),e.jsx("td",{children:"Division"}),e.jsx("td",{children:e.jsx("code",{children:"10 / 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3.333..."})}),e.jsx("td",{children:"Always returns float"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"//"})}),e.jsx("td",{children:"Floor division"}),e.jsx("td",{children:e.jsx("code",{children:"10 // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3"})}),e.jsx("td",{children:"Discards decimal part"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%"})}),e.jsx("td",{children:"Modulo"}),e.jsx("td",{children:e.jsx("code",{children:"10 % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})}),e.jsx("td",{children:"Remainder after division"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"**"})}),e.jsx("td",{children:"Exponentiation"}),e.jsx("td",{children:e.jsx("code",{children:"2 ** 10"})}),e.jsx("td",{children:e.jsx("code",{children:"1024"})}),e.jsx("td",{children:"Power (square, cube, etc.)"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"예시"}),e.jsx("th",{children:"결과"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsx("td",{children:"덧셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 + 3"})}),e.jsx("td",{children:e.jsx("code",{children:"13"})}),e.jsx("td",{children:"두 수의 합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-"})}),e.jsx("td",{children:"뺄셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"7"})}),e.jsx("td",{children:"두 수의 차"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*"})}),e.jsx("td",{children:"곱셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 * 3"})}),e.jsx("td",{children:e.jsx("code",{children:"30"})}),e.jsx("td",{children:"두 수의 곱"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/"})}),e.jsx("td",{children:"나눗셈"}),e.jsx("td",{children:e.jsx("code",{children:"10 / 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3.333..."})}),e.jsx("td",{children:"항상 float 반환"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"//"})}),e.jsx("td",{children:"몫 (정수 나눗셈)"}),e.jsx("td",{children:e.jsx("code",{children:"10 // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3"})}),e.jsx("td",{children:"소수점 이하 버림"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%"})}),e.jsx("td",{children:"나머지"}),e.jsx("td",{children:e.jsx("code",{children:"10 % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})}),e.jsx("td",{children:"나눈 나머지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"**"})}),e.jsx("td",{children:"거듭제곱"}),e.jsx("td",{children:e.jsx("code",{children:"2 ** 10"})}),e.jsx("td",{children:e.jsx("code",{children:"1024"})}),e.jsx("td",{children:"제곱, 세제곱 등"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Arithmetic operator examples":"산술연산자 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`a = 17
b = 5

print(f"{a} + {b} = {a + b}")     # 17 + 5 = 22
print(f"{a} - {b} = {a - b}")     # 17 - 5 = 12
print(f"{a} * {b} = {a * b}")     # 17 * 5 = 85
print(f"{a} / {b} = {a / b}")     # 17 / 5 = 3.4
print(f"{a} // {b} = {a // b}")   # 17 // 5 = 3
print(f"{a} % {b} = {a % b}")     # 17 % 5 = 2
print(f"{a} ** {b} = {a ** b}")   # 17 ** 5 = 1419857`})})]}),e.jsx("h3",{children:s==="en"?"8.2 Division (/) vs Floor Division (//)":"8.2 나눗셈(/) vs 몫 나눗셈(//) 차이"}),s==="en"?e.jsxs("p",{children:[e.jsx("code",{children:"/"})," (division) ",e.jsx("strong",{children:"always returns a float"}),", while",e.jsx("code",{children:"//"})," (floor division) returns the result with the decimal part discarded."]}):e.jsxs("p",{children:[e.jsx("code",{children:"/"})," (나눗셈)은 ",e.jsx("strong",{children:"항상 float"}),"를 반환하고,",e.jsx("code",{children:"//"})," (몫 나눗셈)은 소수점 이하를 버린 결과를 반환합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Division comparison":"나눗셈 비교"}),e.jsx("pre",{children:e.jsx("code",{children:`# / (나눗셈): 항상 float 반환
print(10 / 3)       # 3.3333333333333335
print(10 / 2)       # 5.0 (나누어 떨어져도 float!)
print(type(10 / 2)) # <class 'float'>

# // (몫 나눗셈): 소수점 이하 버림
print(10 // 3)      # 3
print(10 // 2)      # 5
print(type(10 // 2))# <class 'int'>

# float끼리의 // 연산
print(10.0 // 3)    # 3.0 (float // → float)
print(7.5 // 2)     # 3.0`})})]}),e.jsx("h3",{children:s==="en"?"8.3 Modulo (%) with Negative Numbers":"8.3 음수의 나머지(%) 연산"}),s==="en"?e.jsxs("p",{children:["The modulo operation with negative numbers can produce different results across languages, so caution is needed. In Python, the sign of the remainder follows the ",e.jsx("strong",{children:"sign of the divisor (the number you divide by)"}),"."]}):e.jsxs("p",{children:["음수의 나머지 연산은 언어마다 결과가 다를 수 있으므로 주의가 필요합니다. 파이썬에서는 나머지의 부호가 ",e.jsx("strong",{children:"제수(나누는 수)의 부호"}),"를 따릅니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Modulo with negative numbers":"음수의 나머지 연산"}),e.jsx("pre",{children:e.jsx("code",{children:`# 양수 % 양수
print(17 % 5)       # 2

# 음수 % 양수 (결과는 양수)
print(-17 % 5)      # 3  (C언어에서는 -2)
# 설명: -17 = 5 × (-4) + 3

# 양수 % 음수 (결과는 음수)
print(17 % -5)      # -3
# 설명: 17 = (-5) × (-4) + (-3)

# 참고: 파이썬에서 a % b의 결과 부호는 b와 같음
# a == (a // b) * b + (a % b) 가 항상 성립`})})]}),e.jsx("h3",{children:s==="en"?"8.4 The divmod() Function":"8.4 divmod() 함수"}),s==="en"?e.jsxs("p",{children:["The ",e.jsx("code",{children:"divmod()"})," function returns both the quotient and remainder ",e.jsx("strong",{children:"simultaneously"})," as a tuple."]}):e.jsxs("p",{children:[e.jsx("code",{children:"divmod()"})," 함수는 몫과 나머지를 ",e.jsx("strong",{children:"동시에"})," 튜플로 반환합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"divmod() function":"divmod() 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`# divmod(a, b) → (a // b, a % b) 동시 반환
quotient, remainder = divmod(17, 5)
print(f"몫: {quotient}, 나머지: {remainder}")
# 몫: 3, 나머지: 2

# 실용 예시: 분과 초 변환
total_seconds = 754
minutes, seconds = divmod(total_seconds, 60)
print(f"{total_seconds}초 = {minutes}분 {seconds}초")
# 754초 = 12분 34초

# 실용 예시: 시간 변환
total_minutes = 185
hours, mins = divmod(total_minutes, 60)
print(f"{total_minutes}분 = {hours}시간 {mins}분")
# 185분 = 3시간 5분`})})]}),e.jsx("h2",{children:s==="en"?"9. Operator Precedence":"9. 연산자 우선순위 (Operator Precedence)"}),e.jsx("h3",{children:s==="en"?"9.1 Precedence Table":"9.1 우선순위 표"}),s==="en"?e.jsx("p",{children:"When multiple operators appear in a single expression, these rules determine which operation is performed first."}):e.jsx("p",{children:"여러 연산자가 하나의 식에 함께 사용될 때, 어떤 연산이 먼저 수행되는지를 결정하는 규칙입니다."}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Associativity"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1 (highest)"}),e.jsx("td",{children:e.jsx("code",{children:"()"})}),e.jsx("td",{children:"Parentheses"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsx("code",{children:"**"})}),e.jsx("td",{children:"Exponentiation"}),e.jsx("td",{children:"Right → Left"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsxs("td",{children:[e.jsx("code",{children:"+x"}),", ",e.jsx("code",{children:"-x"})]}),e.jsx("td",{children:"Unary plus, minus"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsxs("td",{children:[e.jsx("code",{children:"*"}),", ",e.jsx("code",{children:"/"}),", ",e.jsx("code",{children:"//"}),", ",e.jsx("code",{children:"%"})]}),e.jsx("td",{children:"Multiplication, division, floor div, modulo"}),e.jsx("td",{children:"Left → Right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5 (lowest)"}),e.jsxs("td",{children:[e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"})]}),e.jsx("td",{children:"Addition, subtraction"}),e.jsx("td",{children:"Left → Right"})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"우선순위"}),e.jsx("th",{children:"연산자"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"결합 방향"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1 (높음)"}),e.jsx("td",{children:e.jsx("code",{children:"()"})}),e.jsx("td",{children:"괄호"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsx("code",{children:"**"})}),e.jsx("td",{children:"거듭제곱"}),e.jsx("td",{children:"오른쪽 → 왼쪽"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsxs("td",{children:[e.jsx("code",{children:"+x"}),", ",e.jsx("code",{children:"-x"})]}),e.jsx("td",{children:"단항 양수, 음수"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsxs("td",{children:[e.jsx("code",{children:"*"}),", ",e.jsx("code",{children:"/"}),", ",e.jsx("code",{children:"//"}),", ",e.jsx("code",{children:"%"})]}),e.jsx("td",{children:"곱셈, 나눗셈, 몫, 나머지"}),e.jsx("td",{children:"왼쪽 → 오른쪽"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5 (낮음)"}),e.jsxs("td",{children:[e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"})]}),e.jsx("td",{children:"덧셈, 뺄셈"}),e.jsx("td",{children:"왼쪽 → 오른쪽"})]})]})]}),e.jsx("h3",{children:s==="en"?"9.2 Precedence Examples":"9.2 우선순위 예시"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Operator precedence examples":"연산자 우선순위 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 기본 우선순위: * > +
print(2 + 3 * 4)          # 14 (3*4=12 먼저, 그 다음 2+12)
print((2 + 3) * 4)        # 20 (괄호 먼저!)

# ** > * > +
print(2 ** 3 * 4 + 1)     # 33 (8 * 4 + 1 = 33)
print(2 ** (3 * 4) + 1)   # 4097 (2^12 + 1)

# ** 의 결합 방향은 오른쪽 → 왼쪽
print(2 ** 3 ** 2)         # 512 (2 ** 9, 3**2=9가 먼저)
print((2 ** 3) ** 2)       # 64  (8 ** 2)

# 복잡한 식에는 괄호를 사용하자!
# 괄호를 사용하면 우선순위를 외우지 않아도 됨
a = 10
b = 3
c = 7
result = (a + b) * c - (a // b)
print(result)              # (13) * 7 - (3) = 91 - 3 = 88`})})]}),e.jsx("h2",{children:s==="en"?"10. Compound Assignment Operators":"10. 복합 대입 연산자"}),s==="en"?e.jsxs("p",{children:[e.jsx("strong",{children:"Compound assignment operators"})," are shorthand expressions that perform an arithmetic operation and assignment simultaneously. They make code more concise."]}):e.jsxs("p",{children:[e.jsx("strong",{children:"복합 대입 연산자"}),"는 산술연산과 대입을 동시에 수행하는 축약 표현입니다. 코드를 더 간결하게 작성할 수 있습니다."]}),s==="en"?e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Compound Operator"}),e.jsx("th",{children:"Equivalent"}),e.jsx("th",{children:"Example (x=10)"}),e.jsx("th",{children:"Result"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x += 5"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x + 5"})}),e.jsx("td",{children:e.jsx("code",{children:"10 + 5"})}),e.jsx("td",{children:e.jsx("code",{children:"15"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x -= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"7"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x *= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x * 2"})}),e.jsx("td",{children:e.jsx("code",{children:"10 * 2"})}),e.jsx("td",{children:e.jsx("code",{children:"20"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x /= 4"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x / 4"})}),e.jsx("td",{children:e.jsx("code",{children:"10 / 4"})}),e.jsx("td",{children:e.jsx("code",{children:"2.5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x //= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x %= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x **= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x ** 2"})}),e.jsx("td",{children:e.jsx("code",{children:"10 ** 2"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})})]})]})]}):e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"복합 대입 연산자"}),e.jsx("th",{children:"동일한 표현"}),e.jsx("th",{children:"예시 (x=10)"}),e.jsx("th",{children:"결과"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x += 5"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x + 5"})}),e.jsx("td",{children:e.jsx("code",{children:"10 + 5"})}),e.jsx("td",{children:e.jsx("code",{children:"15"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x -= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 - 3"})}),e.jsx("td",{children:e.jsx("code",{children:"7"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x *= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x * 2"})}),e.jsx("td",{children:e.jsx("code",{children:"10 * 2"})}),e.jsx("td",{children:e.jsx("code",{children:"20"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x /= 4"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x / 4"})}),e.jsx("td",{children:e.jsx("code",{children:"10 / 4"})}),e.jsx("td",{children:e.jsx("code",{children:"2.5"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x //= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 // 3"})}),e.jsx("td",{children:e.jsx("code",{children:"3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x %= 3"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"10 % 3"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"x **= 2"})}),e.jsx("td",{children:e.jsx("code",{children:"x = x ** 2"})}),e.jsx("td",{children:e.jsx("code",{children:"10 ** 2"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Compound assignment operator examples":"복합 대입 연산자 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 점수 누적 예시
score = 0
print(f"초기 점수: {score}")     # 0

score += 10                       # 10점 추가
print(f"+10점: {score}")          # 10

score += 25                       # 25점 추가
print(f"+25점: {score}")          # 35

score -= 5                        # 5점 감점
print(f"-5점: {score}")           # 30

score *= 2                        # 2배 보너스
print(f"x2 보너스: {score}")      # 60

# 문자열에서도 += 사용 가능
message = "Hello"
message += " "
message += "World"
print(message)                    # Hello World

# 주의: 파이썬에는 ++ 연산자가 없음!
# x++   # SyntaxError!
# x += 1 을 사용해야 함`})})]}),e.jsx("h2",{children:s==="en"?"11. String Operations":"11. 문자열 연산"}),e.jsx("h3",{children:s==="en"?"11.1 Basic String Operations":"11.1 문자열 기본 연산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"Basic string operations":"문자열 기본 연산"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 연결 (+)
first = "컴퓨팅"
second = "사고"
print(first + " " + second)    # 컴퓨팅 사고

# 문자열 반복 (*)
line = "=" * 30
print(line)                     # ==============================
star = "★ " * 5
print(star)                     # ★ ★ ★ ★ ★

# 문자열 길이 (len())
text = "Hello, Python!"
print(len(text))                # 14
korean = "안녕하세요"
print(len(korean))              # 5 (한글 한 글자 = 1)

# in / not in 연산자 (포함 여부 확인)
sentence = "파이썬은 재미있는 프로그래밍 언어입니다"
print("파이썬" in sentence)      # True
print("자바" in sentence)        # False
print("자바" not in sentence)    # True`})})]}),e.jsx("h3",{children:s==="en"?"11.2 Key String Methods":"11.2 주요 문자열 메서드"}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["String methods are built-in functions that can be called on string objects. They do not modify the original string but ",e.jsx("strong",{children:"return a new string"})," (since strings are immutable)."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Result"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"upper()"})}),e.jsx("td",{children:"All uppercase"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".upper()'})}),e.jsx("td",{children:e.jsx("code",{children:'"HELLO"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lower()"})}),e.jsx("td",{children:"All lowercase"}),e.jsx("td",{children:e.jsx("code",{children:'"HELLO".lower()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hello"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"strip()"})}),e.jsx("td",{children:"Remove whitespace from both ends"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".strip()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hi"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lstrip()"})}),e.jsx("td",{children:"Remove left whitespace"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".lstrip()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hi "'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rstrip()"})}),e.jsx("td",{children:"Remove right whitespace"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".rstrip()'})}),e.jsx("td",{children:e.jsx("code",{children:'" hi"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split()"})}),e.jsx("td",{children:"Split string (to list)"}),e.jsx("td",{children:e.jsx("code",{children:'"a b c".split()'})}),e.jsx("td",{children:e.jsx("code",{children:'["a","b","c"]'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"join()"})}),e.jsx("td",{children:"Join list into string"}),e.jsx("td",{children:e.jsx("code",{children:'"-".join(["a","b"])'})}),e.jsx("td",{children:e.jsx("code",{children:'"a-b"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"replace()"})}),e.jsx("td",{children:"Replace substring"}),e.jsx("td",{children:e.jsx("code",{children:'"abc".replace("a","x")'})}),e.jsx("td",{children:e.jsx("code",{children:'"xbc"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"find()"})}),e.jsx("td",{children:"Find position (-1 if not found)"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".find("ll")'})}),e.jsx("td",{children:e.jsx("code",{children:"2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"count()"})}),e.jsx("td",{children:"Count occurrences"}),e.jsx("td",{children:e.jsx("code",{children:'"banana".count("a")'})}),e.jsx("td",{children:e.jsx("code",{children:"3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"startswith()"})}),e.jsx("td",{children:"Check start string"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".startswith("he")'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"endswith()"})}),e.jsx("td",{children:"Check end string"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".endswith("lo")'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isdigit()"})}),e.jsx("td",{children:"All digits?"}),e.jsx("td",{children:e.jsx("code",{children:'"123".isdigit()'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isalpha()"})}),e.jsx("td",{children:"All letters?"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".isalpha()'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["문자열 메서드는 문자열 객체에서 호출할 수 있는 내장 함수입니다. 원본 문자열은 변경하지 않고 ",e.jsx("strong",{children:"새로운 문자열을 반환"}),"합니다 (문자열은 불변이므로)."]}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"메서드"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"}),e.jsx("th",{children:"결과"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"upper()"})}),e.jsx("td",{children:"모두 대문자로"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".upper()'})}),e.jsx("td",{children:e.jsx("code",{children:'"HELLO"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lower()"})}),e.jsx("td",{children:"모두 소문자로"}),e.jsx("td",{children:e.jsx("code",{children:'"HELLO".lower()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hello"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"strip()"})}),e.jsx("td",{children:"양쪽 공백 제거"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".strip()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hi"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lstrip()"})}),e.jsx("td",{children:"왼쪽 공백 제거"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".lstrip()'})}),e.jsx("td",{children:e.jsx("code",{children:'"hi "'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rstrip()"})}),e.jsx("td",{children:"오른쪽 공백 제거"}),e.jsx("td",{children:e.jsx("code",{children:'" hi ".rstrip()'})}),e.jsx("td",{children:e.jsx("code",{children:'" hi"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"split()"})}),e.jsx("td",{children:"문자열 분리 (리스트)"}),e.jsx("td",{children:e.jsx("code",{children:'"a b c".split()'})}),e.jsx("td",{children:e.jsx("code",{children:'["a","b","c"]'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"join()"})}),e.jsx("td",{children:"리스트를 문자열로 결합"}),e.jsx("td",{children:e.jsx("code",{children:'"-".join(["a","b"])'})}),e.jsx("td",{children:e.jsx("code",{children:'"a-b"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"replace()"})}),e.jsx("td",{children:"문자열 치환"}),e.jsx("td",{children:e.jsx("code",{children:'"abc".replace("a","x")'})}),e.jsx("td",{children:e.jsx("code",{children:'"xbc"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"find()"})}),e.jsx("td",{children:"위치 찾기 (없으면 -1)"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".find("ll")'})}),e.jsx("td",{children:e.jsx("code",{children:"2"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"count()"})}),e.jsx("td",{children:"등장 횟수"}),e.jsx("td",{children:e.jsx("code",{children:'"banana".count("a")'})}),e.jsx("td",{children:e.jsx("code",{children:"3"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"startswith()"})}),e.jsx("td",{children:"시작 문자열 확인"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".startswith("he")'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"endswith()"})}),e.jsx("td",{children:"끝 문자열 확인"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".endswith("lo")'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isdigit()"})}),e.jsx("td",{children:"숫자만으로 구성?"}),e.jsx("td",{children:e.jsx("code",{children:'"123".isdigit()'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isalpha()"})}),e.jsx("td",{children:"알파벳/한글만으로 구성?"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".isalpha()'})}),e.jsx("td",{children:e.jsx("code",{children:"True"})})]})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"String method examples (1)":"문자열 메서드 활용 예시 (1)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 대소문자 변환
text = "Hello, Python World!"
print(text.upper())        # HELLO, PYTHON WORLD!
print(text.lower())        # hello, python world!
print(text.title())        # Hello, Python World! (각 단어 첫 글자 대문자)
print(text.swapcase())     # hELLO, pYTHON wORLD! (대소문자 반전)

# 공백 제거
user_input = "   홍길동   "
print(f"원본: '{user_input}'")
print(f"strip: '{user_input.strip()}'")    # '홍길동'
print(f"lstrip: '{user_input.lstrip()}'")  # '홍길동   '
print(f"rstrip: '{user_input.rstrip()}'")  # '   홍길동'

# 문자열 분리와 결합
sentence = "파이썬은 재미있는 프로그래밍 언어입니다"
words = sentence.split()             # 공백 기준 분리
print(words)     # ['파이썬은', '재미있는', '프로그래밍', '언어입니다']
print(len(words))  # 4 (단어 수)

# 특정 구분자로 분리
date = "2025-03-01"
parts = date.split("-")
print(parts)     # ['2025', '03', '01']

# join(): 리스트를 문자열로 결합
result = "/".join(parts)
print(result)    # 2025/03/01`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:s==="en"?"String method examples (2)":"문자열 메서드 활용 예시 (2)"}),e.jsx("pre",{children:e.jsx("code",{children:`# 문자열 치환
text = "Hello, World!"
new_text = text.replace("World", "Python")
print(new_text)    # Hello, Python!

# 여러 번 치환
msg = "사과 바나나 사과 체리 사과"
print(msg.replace("사과", "포도"))         # 포도 바나나 포도 체리 포도
print(msg.replace("사과", "포도", 1))      # 포도 바나나 사과 체리 사과 (1번만)

# 검색
text = "Hello, Python Programming!"
print(text.find("Python"))       # 7 (인덱스 7에서 시작)
print(text.find("Java"))        # -1 (찾지 못함)
print(text.count("o"))          # 2 (o가 2번 등장)

# 시작/끝 확인
filename = "report.pdf"
print(filename.startswith("report"))  # True
print(filename.endswith(".pdf"))      # True
print(filename.endswith(".xlsx"))     # False

# 문자 종류 확인
print("12345".isdigit())       # True (숫자만)
print("12.34".isdigit())       # False (소수점 포함)
print("hello".isalpha())       # True (알파벳만)
print("hello123".isalpha())    # False (숫자 포함)
print("hello123".isalnum())    # True (알파벳+숫자)`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n("pythonLearning.keySummary")}),s==="en"?e.jsxs("ul",{children:[e.jsxs("li",{children:["Python's basic data types: ",e.jsx("code",{children:"int"})," (integer), ",e.jsx("code",{children:"float"})," (float), ",e.jsx("code",{children:"str"})," (string), ",e.jsx("code",{children:"bool"})," (boolean)"]}),e.jsxs("li",{children:["Python integers have ",e.jsx("strong",{children:"no size limit"}),", and floats have ",e.jsx("strong",{children:"floating-point precision errors"})," (",e.jsx("code",{children:"0.1 + 0.2 != 0.3"}),")."]}),e.jsxs("li",{children:["Strings are ",e.jsx("strong",{children:"immutable"}),", and can be accessed via indexing (",e.jsx("code",{children:"[0]"}),") and slicing (",e.jsx("code",{children:"[1:5]"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"type()"})," returns the data type, while ",e.jsx("code",{children:"isinstance()"})," returns True/False for type checking."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implicit conversion"})," is automatic (int+float→float), ",e.jsx("strong",{children:"explicit conversion"})," uses int(), float(), str()."]}),e.jsxs("li",{children:["Among the 7 arithmetic operators: ",e.jsx("code",{children:"/"})," always returns float, ",e.jsx("code",{children:"//"})," gives quotient, ",e.jsx("code",{children:"%"})," gives remainder, ",e.jsx("code",{children:"**"})," gives exponentiation."]}),e.jsxs("li",{children:["Operator precedence: ",e.jsx("code",{children:"()"})," > ",e.jsx("code",{children:"**"})," > ",e.jsx("code",{children:"*,/,//,%"})," > ",e.jsx("code",{children:"+,-"}),". When in doubt, use ",e.jsx("strong",{children:"parentheses"}),"."]}),e.jsxs("li",{children:["String methods (upper, split, replace, etc.) do not modify the original but ",e.jsx("strong",{children:"return a new string"}),"."]})]}):e.jsxs("ul",{children:[e.jsxs("li",{children:["파이썬의 기본 자료형: ",e.jsx("code",{children:"int"}),"(정수), ",e.jsx("code",{children:"float"}),"(실수), ",e.jsx("code",{children:"str"}),"(문자열), ",e.jsx("code",{children:"bool"}),"(논리형)"]}),e.jsxs("li",{children:["파이썬 정수는 ",e.jsx("strong",{children:"크기 제한이 없고"}),", 실수는 ",e.jsx("strong",{children:"부동소수점 오차"}),"가 있다 (",e.jsx("code",{children:"0.1 + 0.2 != 0.3"}),")."]}),e.jsxs("li",{children:["문자열은 ",e.jsx("strong",{children:"불변(immutable)"}),"이며, 인덱싱(",e.jsx("code",{children:"[0]"}),")과 슬라이싱(",e.jsx("code",{children:"[1:5]"}),")으로 접근한다."]}),e.jsxs("li",{children:[e.jsx("code",{children:"type()"}),"은 자료형을 반환하고, ",e.jsx("code",{children:"isinstance()"}),"는 자료형 여부를 True/False로 반환한다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"암시적 형변환"}),"은 자동(int+float→float), ",e.jsx("strong",{children:"명시적 형변환"}),"은 int(), float(), str() 사용."]}),e.jsxs("li",{children:["7가지 산술연산자 중 ",e.jsx("code",{children:"/"}),"는 항상 float, ",e.jsx("code",{children:"//"}),"는 몫, ",e.jsx("code",{children:"%"}),"는 나머지, ",e.jsx("code",{children:"**"}),"는 거듭제곱."]}),e.jsxs("li",{children:["연산자 우선순위: ",e.jsx("code",{children:"()"})," > ",e.jsx("code",{children:"**"})," > ",e.jsx("code",{children:"*,/,//,%"})," > ",e.jsx("code",{children:"+,-"}),". 헷갈리면 ",e.jsx("strong",{children:"괄호"}),"를 사용."]}),e.jsxs("li",{children:["문자열 메서드(upper, split, replace 등)는 원본을 변경하지 않고 ",e.jsx("strong",{children:"새 문자열을 반환"}),"한다."]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:n("pythonLearning.commonMistakes")}),s==="en"?e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"input() always returns str"}),": After ",e.jsx("code",{children:'num = input("Number: ")'}),", doing ",e.jsx("code",{children:"num + 10"})," causes TypeError! Always use ",e.jsx("code",{children:"int(input(...))"})," or ",e.jsx("code",{children:"float(input(...))"})," for conversion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Floating-point precision"}),":",e.jsx("code",{children:"0.1 + 0.2 == 0.3"})," is ",e.jsx("code",{children:"False"}),". For float comparison, use ",e.jsx("code",{children:"round()"})," or ",e.jsx("code",{children:"math.isclose()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cannot directly concatenate string + number"}),":",e.jsx("code",{children:'"Age: " + 20'})," causes TypeError! Use ",e.jsx("code",{children:'"Age: " + str(20)'})," or ",e.jsxs("code",{children:['f"Age: ',"{20}",'"']}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"int() truncates, not rounds"}),":",e.jsx("code",{children:"int(3.9)"})," is ",e.jsx("code",{children:"3"}),", not ",e.jsx("code",{children:"4"}),". For rounding, use ",e.jsx("code",{children:"round(3.9)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"True/False capitalization"}),":",e.jsx("code",{children:"true"})," and ",e.jsx("code",{children:"false"})," are not recognized. Always use ",e.jsx("code",{children:"True"})," and ",e.jsx("code",{children:"False"})," (capital first letter)."]})]}):e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"input() 반환값은 항상 str"}),":",e.jsx("code",{children:'num = input("숫자: ")'})," 후 ",e.jsx("code",{children:"num + 10"}),"을 하면 TypeError! 반드시 ",e.jsx("code",{children:"int(input(...))"})," 또는 ",e.jsx("code",{children:"float(input(...))"}),"로 형변환하세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"부동소수점 오차"}),":",e.jsx("code",{children:"0.1 + 0.2 == 0.3"}),"은 ",e.jsx("code",{children:"False"}),"입니다. 실수 비교는 ",e.jsx("code",{children:"round()"})," 또는 ",e.jsx("code",{children:"math.isclose()"}),"를 사용하세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"문자열 + 숫자 직접 연결 불가"}),":",e.jsx("code",{children:'"나이: " + 20'}),"은 TypeError! ",e.jsx("code",{children:'"나이: " + str(20)'})," 또는 ",e.jsxs("code",{children:['f"나이: ',"{20}",'"']}),"를 사용하세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"int()는 반올림이 아니라 버림"}),":",e.jsx("code",{children:"int(3.9)"}),"는 ",e.jsx("code",{children:"4"}),"가 아니라 ",e.jsx("code",{children:"3"}),"입니다. 반올림은 ",e.jsx("code",{children:"round(3.9)"}),"를 사용하세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"True/False 대소문자"}),":",e.jsx("code",{children:"true"}),"와 ",e.jsx("code",{children:"false"}),"는 인식되지 않습니다. 반드시 ",e.jsx("code",{children:"True"}),", ",e.jsx("code",{children:"False"})," (첫 글자 대문자)를 사용하세요."]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:n("pythonLearning.exercises")}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Exercise 1."})," Write a program that takes a circle's radius as input and calculates its circumference and area."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Circumference = 2 x pi x r"}),e.jsx("li",{children:"Area = pi x r^2"}),e.jsx("li",{children:"Use pi = 3.14159"}),e.jsx("li",{children:"Display results to two decimal places (using f-string)"})]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Exercise 2."})," Write a program that takes two integers as input and outputs all 7 arithmetic operation results."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Addition, subtraction, multiplication, division, floor division, modulo, exponentiation"}),e.jsxs("li",{children:["Output format: ",e.jsx("code",{children:"10 + 3 = 13"})," (using f-string)"]}),e.jsx("li",{children:"Display division result to two decimal places"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"과제 1."})," 원의 반지름을 입력받아 둘레와 넓이를 계산하는 프로그램을 작성하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"원의 둘레 = 2 x pi x r"}),e.jsx("li",{children:"원의 넓이 = pi x r^2"}),e.jsx("li",{children:"pi = 3.14159 사용"}),e.jsx("li",{children:"결과는 소수점 둘째 자리까지 출력 (f-string 활용)"})]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"과제 2."})," 두 정수를 입력받아 다음 7가지 연산 결과를 모두 출력하는 프로그램을 작성하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"덧셈, 뺄셈, 곱셈, 나눗셈, 몫, 나머지, 거듭제곱"}),e.jsxs("li",{children:["출력 형식: ",e.jsx("code",{children:"10 + 3 = 13"})," (f-string 활용)"]}),e.jsx("li",{children:"나눗셈 결과는 소수점 둘째 자리까지 표시"})]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:n("pythonLearning.advancedProblems")}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Advanced 1."})," Write a temperature converter program."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"User selects conversion direction: 1. Celsius to Fahrenheit, 2. Fahrenheit to Celsius"}),e.jsx("li",{children:"Celsius to Fahrenheit: F = C x 9/5 + 32"}),e.jsx("li",{children:"Fahrenheit to Celsius: C = (F - 32) x 5/9"}),e.jsx("li",{children:"Display result to one decimal place"})]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Advanced 2."})," Write a sentence analyzer using string methods."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Get one sentence as input from the user"}),e.jsx("li",{children:"Output: total character count, word count, occurrence count of a specific character (user input)"}),e.jsx("li",{children:"Output: converted to uppercase, reversed output (using slicing)"}),e.jsx("li",{children:"Format neatly using f-string"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"심화 1."})," 온도 변환기 프로그램을 작성하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"사용자가 변환 방향을 선택: 1. 섭씨 → 화씨, 2. 화씨 → 섭씨"}),e.jsx("li",{children:"섭씨 → 화씨: F = C x 9/5 + 32"}),e.jsx("li",{children:"화씨 → 섭씨: C = (F - 32) x 5/9"}),e.jsx("li",{children:"결과는 소수점 첫째 자리까지 출력"})]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"심화 2."})," 문자열 메서드를 활용한 문장 분석기를 작성하세요."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"사용자로부터 문장 하나를 입력받기"}),e.jsx("li",{children:"출력: 전체 문자 수, 단어 수, 특정 문자(사용자 입력)의 등장 횟수"}),e.jsx("li",{children:"출력: 대문자로 변환, 역순으로 출력 (슬라이싱 활용)"}),e.jsx("li",{children:"f-string으로 깔끔하게 정리하여 출력"})]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/python-learning/02",className:"lesson-nav-btn prev",children:["← ",s==="en"?"02: I/O & Variables":"02: 입출력과 변수"]}),e.jsxs(r,{to:"/python-learning/04",className:"lesson-nav-btn next",children:[s==="en"?"04: Input-Process-Output":"04: 입력-처리-출력"," →"]})]})]})})})]})}export{c as default};
