import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson03() {
  const { t, lang } = useLanguage();

  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 3: Data Types & Arithmetic' : '3주차: Data Type과 산술연산'}</h1>
          <p>{lang === 'en' ? 'Mastering integers, floats, strings, booleans, and arithmetic operators' : '정수, 실수, 문자열, 논리형과 산술연산자 완전 정복'}</p>
        </div>
      </section>
      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('pythonLearning.learningObjectives')}</h3>
              {lang === 'en' ? (
                <ul>
                  <li>Understand and distinguish the 4 basic data types in Python (int, float, str, bool).</li>
                  <li>Use type() and isinstance() functions to check data types.</li>
                  <li>Understand and apply the difference between implicit and explicit type conversion.</li>
                  <li>Master the 7 arithmetic operators and operator precedence.</li>
                  <li>Use string operations and key string methods.</li>
                </ul>
              ) : (
                <ul>
                  <li>파이썬의 4가지 기본 자료형(int, float, str, bool)을 이해하고 구분한다.</li>
                  <li>type()과 isinstance() 함수를 활용하여 자료형을 확인한다.</li>
                  <li>암시적 형변환과 명시적 형변환의 차이를 이해하고 적용한다.</li>
                  <li>7가지 산술연산자와 연산자 우선순위를 파악한다.</li>
                  <li>문자열 연산과 주요 문자열 메서드를 활용한다.</li>
                </ul>
              )}
            </div>

            {/* ========== Data Type Overview ========== */}
            <h2>{lang === 'en' ? '1. Data Type Overview' : '1. 자료형(Data Type) 개요'}</h2>

            <h3>{lang === 'en' ? '1.1 What is a Data Type?' : '1.1 자료형이란?'}</h3>
            {lang === 'en' ? (
              <p>
                A <strong>data type</strong> is a classification system that defines the <strong>kind and size</strong> of data handled in a program.
                Since computers store all data as 0s and 1s, data types determine how to interpret the bits stored in memory.
                For example, the same bit pattern can be a number when interpreted as an integer, or a character when interpreted as a string.
              </p>
            ) : (
              <p>
                <strong>자료형(Data Type)</strong>이란 프로그램에서 다루는 데이터의 <strong>종류와 크기</strong>를 정의하는 분류 체계입니다.
                컴퓨터는 모든 데이터를 0과 1로 저장하기 때문에, 자료형을 통해 메모리에 저장된 비트(bit)를
                어떻게 해석할지 결정합니다. 예를 들어 같은 비트 패턴이라도 정수로 해석하면 숫자가 되고,
                문자열로 해석하면 글자가 됩니다.
              </p>
            )}

            <h3>{lang === 'en' ? '1.2 Static Typing vs Dynamic Typing' : '1.2 정적 타이핑 vs 동적 타이핑'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Category</th><th>Static Typing</th><th>Dynamic Typing</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Type declaration</strong></td><td>Must specify type at declaration</td><td>No type specification needed, auto-determined</td></tr>
                  <tr><td><strong>Type change</strong></td><td>Cannot change once declared</td><td>Can assign different type values anytime</td></tr>
                  <tr><td><strong>Error detection</strong></td><td>At compile time (before execution)</td><td>At runtime (during execution)</td></tr>
                  <tr><td><strong>Representative languages</strong></td><td>C, C++, Java</td><td>Python, JavaScript, Ruby</td></tr>
                  <tr><td><strong>Example</strong></td><td><code>int x = 10;</code></td><td><code>x = 10</code></td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>정적 타이핑 (Static Typing)</th><th>동적 타이핑 (Dynamic Typing)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>자료형 선언</strong></td><td>변수 선언 시 자료형 명시 필요</td><td>자료형 명시 불필요, 자동 결정</td></tr>
                  <tr><td><strong>자료형 변경</strong></td><td>한 번 선언하면 변경 불가</td><td>언제든 다른 자료형의 값 할당 가능</td></tr>
                  <tr><td><strong>오류 발견 시점</strong></td><td>컴파일 시 (실행 전)</td><td>런타임 시 (실행 중)</td></tr>
                  <tr><td><strong>대표 언어</strong></td><td>C, C++, Java</td><td>Python, JavaScript, Ruby</td></tr>
                  <tr><td><strong>예시</strong></td><td><code>int x = 10;</code></td><td><code>x = 10</code></td></tr>
                </tbody>
              </table>
            )}

            <h3>{lang === 'en' ? '1.3 Python Data Type Classification' : '1.3 파이썬 자료형 분류'}</h3>
            {lang === 'en' ? (
              <>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Category</th><th>Type</th><th>Description</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td rowSpan={3}><strong>Numeric</strong></td><td><code>int</code></td><td>Integer</td><td><code>42, -3, 0</code></td></tr>
                    <tr><td><code>float</code></td><td>Float (floating point)</td><td><code>3.14, -0.5, 1.0</code></td></tr>
                    <tr><td><code>complex</code></td><td>Complex number</td><td><code>3+4j, 1j</code></td></tr>
                    <tr><td rowSpan={3}><strong>Sequence</strong></td><td><code>str</code></td><td>String</td><td><code>"hello", 'Python'</code></td></tr>
                    <tr><td><code>list</code></td><td>List (mutable)</td><td><code>[1, 2, 3]</code></td></tr>
                    <tr><td><code>tuple</code></td><td>Tuple (immutable)</td><td><code>(1, 2, 3)</code></td></tr>
                    <tr><td><strong>Mapping</strong></td><td><code>dict</code></td><td>Dictionary (key-value pairs)</td><td><code>{'{'}name: "Alice"{'}'}</code></td></tr>
                    <tr><td><strong>Set</strong></td><td><code>set</code></td><td>Set (no duplicates)</td><td><code>{'{'}1, 2, 3{'}'}</code></td></tr>
                    <tr><td><strong>Boolean</strong></td><td><code>bool</code></td><td>True/False</td><td><code>True, False</code></td></tr>
                    <tr><td><strong>Special</strong></td><td><code>NoneType</code></td><td>No value</td><td><code>None</code></td></tr>
                  </tbody>
                </table>
                <p>
                  This week, we will focus on the 4 most fundamental data types: <code>int</code>, <code>float</code>, <code>str</code>, and <code>bool</code>.
                  The remaining types (list, tuple, dict, set) will be covered in later weeks.
                </p>
              </>
            ) : (
              <>
                <table className="lesson-table">
                  <thead>
                    <tr><th>분류</th><th>자료형</th><th>설명</th><th>예시</th></tr>
                  </thead>
                  <tbody>
                    <tr><td rowSpan={3}><strong>수치형</strong></td><td><code>int</code></td><td>정수</td><td><code>42, -3, 0</code></td></tr>
                    <tr><td><code>float</code></td><td>실수 (부동소수점)</td><td><code>3.14, -0.5, 1.0</code></td></tr>
                    <tr><td><code>complex</code></td><td>복소수</td><td><code>3+4j, 1j</code></td></tr>
                    <tr><td rowSpan={3}><strong>시퀀스형</strong></td><td><code>str</code></td><td>문자열</td><td><code>"hello", '파이썬'</code></td></tr>
                    <tr><td><code>list</code></td><td>리스트 (가변)</td><td><code>[1, 2, 3]</code></td></tr>
                    <tr><td><code>tuple</code></td><td>튜플 (불변)</td><td><code>(1, 2, 3)</code></td></tr>
                    <tr><td><strong>매핑형</strong></td><td><code>dict</code></td><td>딕셔너리 (키-값 쌍)</td><td><code>{'{'}name: "홍길동"{'}'}</code></td></tr>
                    <tr><td><strong>집합형</strong></td><td><code>set</code></td><td>집합 (중복 없음)</td><td><code>{'{'}1, 2, 3{'}'}</code></td></tr>
                    <tr><td><strong>논리형</strong></td><td><code>bool</code></td><td>참/거짓</td><td><code>True, False</code></td></tr>
                    <tr><td><strong>특수형</strong></td><td><code>NoneType</code></td><td>값 없음</td><td><code>None</code></td></tr>
                  </tbody>
                </table>
                <p>
                  이번 주차에서는 가장 기본이 되는 4가지 자료형인 <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>을
                  집중적으로 학습합니다. 나머지 자료형(list, tuple, dict, set)은 이후 주차에서 다룹니다.
                </p>
              </>
            )}

            {/* ========== Integer Type ========== */}
            <h2>{lang === 'en' ? '2. Integer Type (int)' : '2. 정수형 (int)'}</h2>

            <h3>{lang === 'en' ? '2.1 Characteristics of Integers' : '2.1 정수형의 특징'}</h3>
            {lang === 'en' ? (
              <p>
                The integer type (<code>int</code>) represents positive numbers, negative numbers, and zero without decimal points.
                Python integers support <strong>arbitrary precision</strong>, meaning unlike C or Java,
                <strong>there is no limit on the size of integers.</strong>
                Any number, no matter how large, can be represented exactly as long as memory allows.
              </p>
            ) : (
              <p>
                정수형(<code>int</code>)은 소수점이 없는 양수, 음수, 0을 나타내는 자료형입니다.
                파이썬의 정수는 <strong>임의 정밀도(arbitrary precision)</strong>를 지원하여,
                C나 Java와 달리 <strong>정수의 크기에 제한이 없습니다.</strong>
                메모리가 허용하는 한 아무리 큰 수도 정확하게 표현할 수 있습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Integer basics' : '정수형 기본'}</div>
              <pre><code>{`# 기본 정수
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
print(10 / 3)     # 3.333... (float! 주의)`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '2.2 Various Number Base Representations' : '2.2 다양한 진법 표현'}</h3>
            {lang === 'en' ? (
              <p>
                In Python, you can directly represent numbers in binary, octal, and hexadecimal in addition to decimal.
                Prefixes are used to distinguish the number base.
              </p>
            ) : (
              <p>
                파이썬에서는 10진수 외에도 2진수, 8진수, 16진수를 직접 표현할 수 있습니다.
                접두사를 붙여 진법을 구분합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Number base representation and conversion' : '진법 표현과 변환'}</div>
              <pre><code>{`# 다양한 진법 리터럴
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
print(type(bin(42)))  # <class 'str'>`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '2.3 Underscore Separator' : '2.3 언더스코어 구분자'}</h3>
            {lang === 'en' ? (
              <p>
                To improve readability of large numbers, you can use <strong>underscores (_)</strong> as digit separators.
                Underscores do not affect the value.
              </p>
            ) : (
              <p>
                큰 숫자의 가독성을 높이기 위해 <strong>밑줄(_)</strong>을 자릿수 구분자로 사용할 수 있습니다.
                밑줄은 값에 영향을 주지 않습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Underscore separator' : '언더스코어 구분자'}</div>
              <pre><code>{`# 큰 숫자를 읽기 쉽게
population = 51_780_000       # 5천 1백 78만
budget = 1_000_000_000        # 10억
print(population)              # 51780000
print(budget)                  # 1000000000

# 2진수에서도 사용 가능
flags = 0b1111_0000_1010_0101
print(flags)                   # 61605`}</code></pre>
            </div>

            {/* ========== Float Type ========== */}
            <h2>{lang === 'en' ? '3. Float Type (float)' : '3. 실수형 (float)'}</h2>

            <h3>{lang === 'en' ? '3.1 Characteristics of Floats' : '3.1 실수형의 특징'}</h3>
            {lang === 'en' ? (
              <p>
                The float type (<code>float</code>) represents numbers with decimal points.
                Internally, they are stored in <strong>IEEE 754 double-precision floating-point</strong> format,
                which can represent approximately 15-17 significant digits.
              </p>
            ) : (
              <p>
                실수형(<code>float</code>)은 소수점이 있는 수를 나타내는 자료형입니다.
                내부적으로 <strong>IEEE 754 배정밀도 부동소수점</strong> 형식으로 저장되며,
                약 15~17자리의 유효숫자를 표현할 수 있습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Float basics' : '실수형 기본'}</div>
              <pre><code>{`# 실수 선언
pi = 3.141592653589793
temperature = -12.5
height = 175.0         # 정수 값이지만 소수점이 있으므로 float

print(type(pi))        # <class 'float'>
print(type(height))    # <class 'float'>`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '3.2 Floating-Point Precision Issue' : '3.2 부동소수점 오차 문제'}</h3>
            {lang === 'en' ? (
              <p>
                Computers store real numbers by converting them to binary, but some decimal fractions cannot be represented exactly in binary.
                This causes <strong>floating-point precision errors</strong>. This is not a Python-specific issue but
                a fundamental problem in all programming languages that use the IEEE 754 standard.
              </p>
            ) : (
              <p>
                컴퓨터는 실수를 2진수로 변환하여 저장하는데, 일부 10진 소수는 2진수로 정확히 표현할 수 없습니다.
                이로 인해 <strong>부동소수점 오차</strong>가 발생합니다. 이것은 파이썬만의 문제가 아니라
                IEEE 754 표준을 사용하는 모든 프로그래밍 언어에서 발생하는 근본적인 문제입니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Floating-point precision (very important!)' : '부동소수점 오차 (매우 중요!)'}</div>
              <pre><code>{`# 0.1 + 0.2는 정확히 0.3이 아님!
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
print(Decimal('0.1') + Decimal('0.2'))  # 0.3`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '3.3 Scientific Notation and Special Values' : '3.3 과학적 표기법과 특수 값'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Scientific notation and special values' : '과학적 표기법과 특수 값'}</div>
              <pre><code>{`# 과학적 표기법 (e 또는 E)
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
print(round(3.5))             # 4`}</code></pre>
            </div>

            {/* ========== String Type ========== */}
            <h2>{lang === 'en' ? '4. String Type (str)' : '4. 문자열형 (str)'}</h2>

            <h3>{lang === 'en' ? '4.1 Creating Strings' : '4.1 문자열 생성'}</h3>
            {lang === 'en' ? (
              <p>
                A string (<code>str</code>) is an ordered sequence of characters.
                It is created by enclosing characters in single quotes (<code>'</code>) or double quotes (<code>"</code>),
                and in Python there is no functional difference between the two.
              </p>
            ) : (
              <p>
                문자열(<code>str</code>)은 문자들의 순서 있는 나열입니다.
                작은따옴표(<code>'</code>) 또는 큰따옴표(<code>"</code>)로 감싸서 생성하며,
                파이썬에서는 두 방식에 기능상 차이가 없습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'String creation methods' : '문자열 생성 방법'}</div>
              <pre><code>{`# 작은따옴표
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
print(info)`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '4.2 Strings are Immutable' : '4.2 문자열은 불변(Immutable)'}</h3>
            {lang === 'en' ? (
              <p>
                Python strings are <strong>immutable</strong> objects.
                You cannot directly modify individual characters of a string once created.
                To change a string, you must create a new string.
              </p>
            ) : (
              <p>
                파이썬의 문자열은 <strong>불변(Immutable)</strong> 객체입니다.
                한 번 생성된 문자열의 개별 문자를 직접 변경할 수 없습니다.
                문자열을 변경하려면 새로운 문자열을 생성해야 합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'String immutability' : '문자열의 불변성'}</div>
              <pre><code>{`text = "Hello"

# 인덱스로 개별 문자 읽기는 가능
print(text[0])        # H

# 개별 문자 변경은 불가!
# text[0] = "h"       # TypeError: 'str' does not support item assignment

# 새로운 문자열을 생성하여 변경
text = "h" + text[1:]  # 새 문자열 생성
print(text)            # hello`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '4.3 Indexing' : '4.3 인덱싱 (Indexing)'}</h3>
            {lang === 'en' ? (
              <p>
                Each character in a string can be accessed by its <strong>index</strong> number.
                Indices <strong>start from 0</strong>, and negative indices allow access from the end.
              </p>
            ) : (
              <p>
                문자열의 각 문자는 <strong>인덱스(index)</strong>라는 번호로 접근할 수 있습니다.
                인덱스는 <strong>0부터 시작</strong>하며, 음수 인덱스를 사용하면 뒤에서부터 접근합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Indexing' : '인덱싱'}</div>
              <pre><code>{`text = "Python"
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
# print(text[6])    # IndexError: string index out of range`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '4.4 Slicing' : '4.4 슬라이싱 (Slicing)'}</h3>
            {lang === 'en' ? (
              <p>
                Slicing allows you to extract a portion of a string.
                The syntax is <code>[start:end:step]</code>, where <strong>start is inclusive and end is exclusive</strong>.
              </p>
            ) : (
              <p>
                슬라이싱을 사용하면 문자열의 일부분을 추출할 수 있습니다.
                <code>[start:end:step]</code> 형태로 사용하며, <strong>start는 포함, end는 미포함</strong>입니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Slicing' : '슬라이싱'}</div>
              <pre><code>{`text = "Hello, Python!"
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
print(phone[9:])      # 5678 (끝 번호)`}</code></pre>
            </div>

            {/* ========== Boolean Type ========== */}
            <h2>{lang === 'en' ? '5. Boolean Type (bool)' : '5. 논리형 (bool)'}</h2>

            <h3>{lang === 'en' ? '5.1 Boolean Basics' : '5.1 논리형 기본'}</h3>
            {lang === 'en' ? (
              <p>
                The boolean type (<code>bool</code>) has only two values: <strong>True</strong> and <strong>False</strong>.
                Note that the <strong>first letter must be uppercase</strong>. <code>true</code> and <code>false</code> are not recognized in Python.
                Booleans play a crucial role in conditional statements (<code>if</code>) and loops (<code>while</code>).
              </p>
            ) : (
              <p>
                논리형(<code>bool</code>)은 <strong>참(True)</strong>과 <strong>거짓(False)</strong> 두 가지 값만 가지는 자료형입니다.
                주의할 점은 반드시 <strong>첫 글자가 대문자</strong>여야 합니다. <code>true</code>, <code>false</code>는 파이썬에서 인식되지 않습니다.
                논리형은 조건문(<code>if</code>)과 반복문(<code>while</code>)에서 핵심적인 역할을 합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Boolean basics' : '논리형 기본'}</div>
              <pre><code>{`# bool 값
is_student = True
is_graduated = False

print(type(is_student))    # <class 'bool'>
print(is_student)          # True

# 비교 연산의 결과는 bool
print(10 > 5)              # True
print(10 < 5)              # False
print(10 == 10)            # True
print(10 != 5)             # True
print("abc" == "abc")      # True`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '5.2 Logical Operators: and, or, not' : '5.2 논리 연산자: and, or, not'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Logical operators' : '논리 연산자'}</div>
              <pre><code>{`# and: 둘 다 True일 때만 True
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
print(age < 18 or score >= 90)     # False`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '5.3 Truthy and Falsy Values' : '5.3 Truthy와 Falsy 값'}</h3>
            {lang === 'en' ? (
              <p>
                In Python, values that are not of type <code>bool</code> can also be evaluated as <strong>True</strong> or <strong>False</strong> in a boolean context.
                Empty or zero values are <strong>Falsy (evaluated as False)</strong>, while everything else is <strong>Truthy (evaluated as True)</strong>.
              </p>
            ) : (
              <p>
                파이썬에서는 <code>bool</code> 타입이 아닌 값도 논리적 맥락에서 <strong>True</strong> 또는 <strong>False</strong>로 평가됩니다.
                비어있거나 0인 값은 <strong>Falsy(거짓으로 평가)</strong>, 나머지는 모두 <strong>Truthy(참으로 평가)</strong>입니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Truthy and Falsy' : 'Truthy와 Falsy'}</div>
              <pre><code>{`# Falsy 값들 (False로 평가됨)
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
print(bool([1, 2]))    # True (비어있지 않은 리스트)`}</code></pre>
            </div>

            {/* ========== type() and isinstance() ========== */}
            <h2>{lang === 'en' ? '6. type() and isinstance()' : '6. type()과 isinstance()'}</h2>

            <h3>{lang === 'en' ? '6.1 The type() Function' : '6.1 type() 함수'}</h3>
            {lang === 'en' ? (
              <p>
                The <code>type()</code> function <strong>returns the data type</strong> of a given value (object).
                It is frequently used for debugging and type checking.
              </p>
            ) : (
              <p>
                <code>type()</code> 함수는 주어진 값(객체)의 <strong>자료형을 반환</strong>합니다.
                디버깅이나 자료형 확인에 자주 사용됩니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'type() function' : 'type() 함수'}</div>
              <pre><code>{`# 각 자료형의 type() 결과
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
print(f"name의 자료형: {type(name)}")    # <class 'str'>`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '6.2 The isinstance() Function' : '6.2 isinstance() 함수'}</h3>
            {lang === 'en' ? (
              <p>
                The <code>isinstance()</code> function returns <strong>True/False</strong> indicating whether a given object belongs to
                a specific type (or a tuple of types). Unlike <code>type()</code>, it also recognizes inheritance relationships.
              </p>
            ) : (
              <p>
                <code>isinstance()</code> 함수는 주어진 객체가 특정 자료형(또는 자료형의 튜플)에 해당하는지
                <strong>True/False</strong>로 반환합니다. <code>type()</code>과 달리 상속 관계도 인식합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'isinstance() function' : 'isinstance() 함수'}</div>
              <pre><code>{`# isinstance(객체, 자료형) → True/False
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
check_type("파이썬") # '파이썬'은(는) 문자열입니다.`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '6.3 Difference Between type() and isinstance()' : '6.3 type()과 isinstance()의 차이'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Category</th><th>type()</th><th>isinstance()</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Return value</strong></td><td>Type class object</td><td>True or False</td></tr>
                  <tr><td><strong>Inheritance</strong></td><td>Compares exact type only</td><td>Recognizes inheritance relationships</td></tr>
                  <tr><td><strong>Use case</strong></td><td>Type checking/display</td><td>Type validation/conditional branching</td></tr>
                  <tr><td><strong>Recommended for</strong></td><td>Debugging, displaying types</td><td>Type comparison/validation</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>type()</th><th>isinstance()</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>반환값</strong></td><td>자료형 클래스 객체</td><td>True 또는 False</td></tr>
                  <tr><td><strong>상속 인식</strong></td><td>정확한 자료형만 비교</td><td>상속 관계도 인식</td></tr>
                  <tr><td><strong>사용 목적</strong></td><td>자료형 확인/출력</td><td>자료형 검증/조건 분기</td></tr>
                  <tr><td><strong>권장 사용</strong></td><td>디버깅, 자료형 표시</td><td>자료형 비교/검증</td></tr>
                </tbody>
              </table>
            )}

            {/* ========== Type Conversion ========== */}
            <h2>{lang === 'en' ? '7. Type Conversion' : '7. 형변환 (Type Conversion)'}</h2>

            <h3>{lang === 'en' ? '7.1 Implicit Conversion' : '7.1 암시적 형변환 (Implicit Conversion)'}</h3>
            {lang === 'en' ? (
              <p>
                Implicit conversion is when Python <strong>automatically</strong> converts data types.
                Conversion happens in the direction that prevents data loss (e.g., int &rarr; float).
              </p>
            ) : (
              <p>
                파이썬이 <strong>자동으로</strong> 자료형을 변환하는 것을 암시적 형변환이라고 합니다.
                데이터 손실이 없는 방향으로 변환됩니다 (예: int &rarr; float).
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Implicit conversion' : '암시적 형변환'}</div>
              <pre><code>{`# int + float → float (자동 변환)
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
# result = "나이: " + 20  # TypeError!`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '7.2 Explicit Conversion' : '7.2 명시적 형변환 (Explicit Conversion)'}</h3>
            {lang === 'en' ? (
              <p>
                Explicit conversion is when the programmer <strong>manually</strong> uses conversion functions to change data types.
              </p>
            ) : (
              <p>
                프로그래머가 <strong>직접</strong> 변환 함수를 사용하여 자료형을 변환하는 것을 명시적 형변환이라고 합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Explicit conversion' : '명시적 형변환'}</div>
              <pre><code>{`# int(): 정수로 변환
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
print(bool("hello"))   # True`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '7.3 Type Conversion Cautions' : '7.3 형변환 시 주의사항'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Conversion errors (ValueError)' : '형변환 오류 (ValueError)'}</div>
              <pre><code>{`# 변환 불가능한 경우 → ValueError
# int("hello")      # ValueError: invalid literal for int()
# int("3.14")       # ValueError: int()에 소수점 문자열 불가!
# float("abc")      # ValueError: could not convert string to float

# 해결: 소수점 문자열 → 정수로 변환하려면 2단계
text = "3.14"
# int(text)         # ValueError!
result = int(float(text))  # 먼저 float으로, 그 다음 int로
print(result)       # 3`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '7.4 Type Conversion Compatibility' : '7.4 형변환 가능 여부'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Conversion Direction</th><th>Possible?</th><th>Example</th><th>Note</th></tr>
                </thead>
                <tbody>
                  <tr><td>int &rarr; float</td><td>Always possible</td><td><code>float(42)</code> &rarr; <code>42.0</code></td><td>-</td></tr>
                  <tr><td>float &rarr; int</td><td>Always possible</td><td><code>int(3.7)</code> &rarr; <code>3</code></td><td>Truncates decimal part</td></tr>
                  <tr><td>str &rarr; int</td><td>Conditional</td><td><code>int("42")</code> &rarr; <code>42</code></td><td>Only integer-format strings</td></tr>
                  <tr><td>str &rarr; float</td><td>Conditional</td><td><code>float("3.14")</code> &rarr; <code>3.14</code></td><td>Only number-format strings</td></tr>
                  <tr><td>int/float &rarr; str</td><td>Always possible</td><td><code>str(42)</code> &rarr; <code>"42"</code></td><td>-</td></tr>
                  <tr><td>Any type &rarr; bool</td><td>Always possible</td><td><code>bool(0)</code> &rarr; <code>False</code></td><td>Truthy/Falsy rules</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>변환 방향</th><th>가능 여부</th><th>예시</th><th>주의사항</th></tr>
                </thead>
                <tbody>
                  <tr><td>int &rarr; float</td><td>항상 가능</td><td><code>float(42)</code> &rarr; <code>42.0</code></td><td>-</td></tr>
                  <tr><td>float &rarr; int</td><td>항상 가능</td><td><code>int(3.7)</code> &rarr; <code>3</code></td><td>소수점 이하 버림</td></tr>
                  <tr><td>str &rarr; int</td><td>조건부</td><td><code>int("42")</code> &rarr; <code>42</code></td><td>정수 형태 문자열만</td></tr>
                  <tr><td>str &rarr; float</td><td>조건부</td><td><code>float("3.14")</code> &rarr; <code>3.14</code></td><td>숫자 형태 문자열만</td></tr>
                  <tr><td>int/float &rarr; str</td><td>항상 가능</td><td><code>str(42)</code> &rarr; <code>"42"</code></td><td>-</td></tr>
                  <tr><td>모든 타입 &rarr; bool</td><td>항상 가능</td><td><code>bool(0)</code> &rarr; <code>False</code></td><td>Truthy/Falsy 규칙</td></tr>
                </tbody>
              </table>
            )}

            {/* ========== Arithmetic Operators ========== */}
            <h2>{lang === 'en' ? '8. Mastering Arithmetic Operators' : '8. 산술연산자 완전 정복'}</h2>

            <h3>{lang === 'en' ? '8.1 Seven Arithmetic Operators' : '8.1 7가지 산술연산자'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>+</code></td><td>Addition</td><td><code>10 + 3</code></td><td><code>13</code></td><td>Sum of two numbers</td></tr>
                  <tr><td><code>-</code></td><td>Subtraction</td><td><code>10 - 3</code></td><td><code>7</code></td><td>Difference of two numbers</td></tr>
                  <tr><td><code>*</code></td><td>Multiplication</td><td><code>10 * 3</code></td><td><code>30</code></td><td>Product of two numbers</td></tr>
                  <tr><td><code>/</code></td><td>Division</td><td><code>10 / 3</code></td><td><code>3.333...</code></td><td>Always returns float</td></tr>
                  <tr><td><code>//</code></td><td>Floor division</td><td><code>10 // 3</code></td><td><code>3</code></td><td>Discards decimal part</td></tr>
                  <tr><td><code>%</code></td><td>Modulo</td><td><code>10 % 3</code></td><td><code>1</code></td><td>Remainder after division</td></tr>
                  <tr><td><code>**</code></td><td>Exponentiation</td><td><code>2 ** 10</code></td><td><code>1024</code></td><td>Power (square, cube, etc.)</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>연산자</th><th>이름</th><th>예시</th><th>결과</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>+</code></td><td>덧셈</td><td><code>10 + 3</code></td><td><code>13</code></td><td>두 수의 합</td></tr>
                  <tr><td><code>-</code></td><td>뺄셈</td><td><code>10 - 3</code></td><td><code>7</code></td><td>두 수의 차</td></tr>
                  <tr><td><code>*</code></td><td>곱셈</td><td><code>10 * 3</code></td><td><code>30</code></td><td>두 수의 곱</td></tr>
                  <tr><td><code>/</code></td><td>나눗셈</td><td><code>10 / 3</code></td><td><code>3.333...</code></td><td>항상 float 반환</td></tr>
                  <tr><td><code>//</code></td><td>몫 (정수 나눗셈)</td><td><code>10 // 3</code></td><td><code>3</code></td><td>소수점 이하 버림</td></tr>
                  <tr><td><code>%</code></td><td>나머지</td><td><code>10 % 3</code></td><td><code>1</code></td><td>나눈 나머지</td></tr>
                  <tr><td><code>**</code></td><td>거듭제곱</td><td><code>2 ** 10</code></td><td><code>1024</code></td><td>제곱, 세제곱 등</td></tr>
                </tbody>
              </table>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Arithmetic operator examples' : '산술연산자 예시'}</div>
              <pre><code>{`a = 17
b = 5

print(f"{a} + {b} = {a + b}")     # 17 + 5 = 22
print(f"{a} - {b} = {a - b}")     # 17 - 5 = 12
print(f"{a} * {b} = {a * b}")     # 17 * 5 = 85
print(f"{a} / {b} = {a / b}")     # 17 / 5 = 3.4
print(f"{a} // {b} = {a // b}")   # 17 // 5 = 3
print(f"{a} % {b} = {a % b}")     # 17 % 5 = 2
print(f"{a} ** {b} = {a ** b}")   # 17 ** 5 = 1419857`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '8.2 Division (/) vs Floor Division (//)' : '8.2 나눗셈(/) vs 몫 나눗셈(//) 차이'}</h3>
            {lang === 'en' ? (
              <p>
                <code>/</code> (division) <strong>always returns a float</strong>, while
                <code>//</code> (floor division) returns the result with the decimal part discarded.
              </p>
            ) : (
              <p>
                <code>/</code> (나눗셈)은 <strong>항상 float</strong>를 반환하고,
                <code>//</code> (몫 나눗셈)은 소수점 이하를 버린 결과를 반환합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Division comparison' : '나눗셈 비교'}</div>
              <pre><code>{`# / (나눗셈): 항상 float 반환
print(10 / 3)       # 3.3333333333333335
print(10 / 2)       # 5.0 (나누어 떨어져도 float!)
print(type(10 / 2)) # <class 'float'>

# // (몫 나눗셈): 소수점 이하 버림
print(10 // 3)      # 3
print(10 // 2)      # 5
print(type(10 // 2))# <class 'int'>

# float끼리의 // 연산
print(10.0 // 3)    # 3.0 (float // → float)
print(7.5 // 2)     # 3.0`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '8.3 Modulo (%) with Negative Numbers' : '8.3 음수의 나머지(%) 연산'}</h3>
            {lang === 'en' ? (
              <p>
                The modulo operation with negative numbers can produce different results across languages, so caution is needed.
                In Python, the sign of the remainder follows the <strong>sign of the divisor (the number you divide by)</strong>.
              </p>
            ) : (
              <p>
                음수의 나머지 연산은 언어마다 결과가 다를 수 있으므로 주의가 필요합니다.
                파이썬에서는 나머지의 부호가 <strong>제수(나누는 수)의 부호</strong>를 따릅니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Modulo with negative numbers' : '음수의 나머지 연산'}</div>
              <pre><code>{`# 양수 % 양수
print(17 % 5)       # 2

# 음수 % 양수 (결과는 양수)
print(-17 % 5)      # 3  (C언어에서는 -2)
# 설명: -17 = 5 × (-4) + 3

# 양수 % 음수 (결과는 음수)
print(17 % -5)      # -3
# 설명: 17 = (-5) × (-4) + (-3)

# 참고: 파이썬에서 a % b의 결과 부호는 b와 같음
# a == (a // b) * b + (a % b) 가 항상 성립`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '8.4 The divmod() Function' : '8.4 divmod() 함수'}</h3>
            {lang === 'en' ? (
              <p>
                The <code>divmod()</code> function returns both the quotient and remainder <strong>simultaneously</strong> as a tuple.
              </p>
            ) : (
              <p>
                <code>divmod()</code> 함수는 몫과 나머지를 <strong>동시에</strong> 튜플로 반환합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'divmod() function' : 'divmod() 함수'}</div>
              <pre><code>{`# divmod(a, b) → (a // b, a % b) 동시 반환
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
# 185분 = 3시간 5분`}</code></pre>
            </div>

            {/* ========== Operator Precedence ========== */}
            <h2>{lang === 'en' ? '9. Operator Precedence' : '9. 연산자 우선순위 (Operator Precedence)'}</h2>

            <h3>{lang === 'en' ? '9.1 Precedence Table' : '9.1 우선순위 표'}</h3>
            {lang === 'en' ? (
              <p>When multiple operators appear in a single expression, these rules determine which operation is performed first.</p>
            ) : (
              <p>여러 연산자가 하나의 식에 함께 사용될 때, 어떤 연산이 먼저 수행되는지를 결정하는 규칙입니다.</p>
            )}
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Priority</th><th>Operator</th><th>Description</th><th>Associativity</th></tr>
                </thead>
                <tbody>
                  <tr><td>1 (highest)</td><td><code>()</code></td><td>Parentheses</td><td>-</td></tr>
                  <tr><td>2</td><td><code>**</code></td><td>Exponentiation</td><td>Right &rarr; Left</td></tr>
                  <tr><td>3</td><td><code>+x</code>, <code>-x</code></td><td>Unary plus, minus</td><td>-</td></tr>
                  <tr><td>4</td><td><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></td><td>Multiplication, division, floor div, modulo</td><td>Left &rarr; Right</td></tr>
                  <tr><td>5 (lowest)</td><td><code>+</code>, <code>-</code></td><td>Addition, subtraction</td><td>Left &rarr; Right</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>우선순위</th><th>연산자</th><th>설명</th><th>결합 방향</th></tr>
                </thead>
                <tbody>
                  <tr><td>1 (높음)</td><td><code>()</code></td><td>괄호</td><td>-</td></tr>
                  <tr><td>2</td><td><code>**</code></td><td>거듭제곱</td><td>오른쪽 &rarr; 왼쪽</td></tr>
                  <tr><td>3</td><td><code>+x</code>, <code>-x</code></td><td>단항 양수, 음수</td><td>-</td></tr>
                  <tr><td>4</td><td><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></td><td>곱셈, 나눗셈, 몫, 나머지</td><td>왼쪽 &rarr; 오른쪽</td></tr>
                  <tr><td>5 (낮음)</td><td><code>+</code>, <code>-</code></td><td>덧셈, 뺄셈</td><td>왼쪽 &rarr; 오른쪽</td></tr>
                </tbody>
              </table>
            )}

            <h3>{lang === 'en' ? '9.2 Precedence Examples' : '9.2 우선순위 예시'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Operator precedence examples' : '연산자 우선순위 예시'}</div>
              <pre><code>{`# 기본 우선순위: * > +
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
print(result)              # (13) * 7 - (3) = 91 - 3 = 88`}</code></pre>
            </div>

            {/* ========== Compound Assignment Operators ========== */}
            <h2>{lang === 'en' ? '10. Compound Assignment Operators' : '10. 복합 대입 연산자'}</h2>
            {lang === 'en' ? (
              <p>
                <strong>Compound assignment operators</strong> are shorthand expressions that perform an arithmetic operation and assignment simultaneously.
                They make code more concise.
              </p>
            ) : (
              <p>
                <strong>복합 대입 연산자</strong>는 산술연산과 대입을 동시에 수행하는 축약 표현입니다.
                코드를 더 간결하게 작성할 수 있습니다.
              </p>
            )}
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Compound Operator</th><th>Equivalent</th><th>Example (x=10)</th><th>Result</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>x += 5</code></td><td><code>x = x + 5</code></td><td><code>10 + 5</code></td><td><code>15</code></td></tr>
                  <tr><td><code>x -= 3</code></td><td><code>x = x - 3</code></td><td><code>10 - 3</code></td><td><code>7</code></td></tr>
                  <tr><td><code>x *= 2</code></td><td><code>x = x * 2</code></td><td><code>10 * 2</code></td><td><code>20</code></td></tr>
                  <tr><td><code>x /= 4</code></td><td><code>x = x / 4</code></td><td><code>10 / 4</code></td><td><code>2.5</code></td></tr>
                  <tr><td><code>x //= 3</code></td><td><code>x = x // 3</code></td><td><code>10 // 3</code></td><td><code>3</code></td></tr>
                  <tr><td><code>x %= 3</code></td><td><code>x = x % 3</code></td><td><code>10 % 3</code></td><td><code>1</code></td></tr>
                  <tr><td><code>x **= 2</code></td><td><code>x = x ** 2</code></td><td><code>10 ** 2</code></td><td><code>100</code></td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>복합 대입 연산자</th><th>동일한 표현</th><th>예시 (x=10)</th><th>결과</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>x += 5</code></td><td><code>x = x + 5</code></td><td><code>10 + 5</code></td><td><code>15</code></td></tr>
                  <tr><td><code>x -= 3</code></td><td><code>x = x - 3</code></td><td><code>10 - 3</code></td><td><code>7</code></td></tr>
                  <tr><td><code>x *= 2</code></td><td><code>x = x * 2</code></td><td><code>10 * 2</code></td><td><code>20</code></td></tr>
                  <tr><td><code>x /= 4</code></td><td><code>x = x / 4</code></td><td><code>10 / 4</code></td><td><code>2.5</code></td></tr>
                  <tr><td><code>x //= 3</code></td><td><code>x = x // 3</code></td><td><code>10 // 3</code></td><td><code>3</code></td></tr>
                  <tr><td><code>x %= 3</code></td><td><code>x = x % 3</code></td><td><code>10 % 3</code></td><td><code>1</code></td></tr>
                  <tr><td><code>x **= 2</code></td><td><code>x = x ** 2</code></td><td><code>10 ** 2</code></td><td><code>100</code></td></tr>
                </tbody>
              </table>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Compound assignment operator examples' : '복합 대입 연산자 예시'}</div>
              <pre><code>{`# 점수 누적 예시
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
# x += 1 을 사용해야 함`}</code></pre>
            </div>

            {/* ========== String Operations ========== */}
            <h2>{lang === 'en' ? '11. String Operations' : '11. 문자열 연산'}</h2>

            <h3>{lang === 'en' ? '11.1 Basic String Operations' : '11.1 문자열 기본 연산'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic string operations' : '문자열 기본 연산'}</div>
              <pre><code>{`# 문자열 연결 (+)
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
print("자바" not in sentence)    # True`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '11.2 Key String Methods' : '11.2 주요 문자열 메서드'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  String methods are built-in functions that can be called on string objects.
                  They do not modify the original string but <strong>return a new string</strong> (since strings are immutable).
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Method</th><th>Description</th><th>Example</th><th>Result</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>upper()</code></td><td>All uppercase</td><td><code>"hello".upper()</code></td><td><code>"HELLO"</code></td></tr>
                    <tr><td><code>lower()</code></td><td>All lowercase</td><td><code>"HELLO".lower()</code></td><td><code>"hello"</code></td></tr>
                    <tr><td><code>strip()</code></td><td>Remove whitespace from both ends</td><td><code>" hi ".strip()</code></td><td><code>"hi"</code></td></tr>
                    <tr><td><code>lstrip()</code></td><td>Remove left whitespace</td><td><code>" hi ".lstrip()</code></td><td><code>"hi "</code></td></tr>
                    <tr><td><code>rstrip()</code></td><td>Remove right whitespace</td><td><code>" hi ".rstrip()</code></td><td><code>" hi"</code></td></tr>
                    <tr><td><code>split()</code></td><td>Split string (to list)</td><td><code>"a b c".split()</code></td><td><code>["a","b","c"]</code></td></tr>
                    <tr><td><code>join()</code></td><td>Join list into string</td><td><code>"-".join(["a","b"])</code></td><td><code>"a-b"</code></td></tr>
                    <tr><td><code>replace()</code></td><td>Replace substring</td><td><code>"abc".replace("a","x")</code></td><td><code>"xbc"</code></td></tr>
                    <tr><td><code>find()</code></td><td>Find position (-1 if not found)</td><td><code>"hello".find("ll")</code></td><td><code>2</code></td></tr>
                    <tr><td><code>count()</code></td><td>Count occurrences</td><td><code>"banana".count("a")</code></td><td><code>3</code></td></tr>
                    <tr><td><code>startswith()</code></td><td>Check start string</td><td><code>"hello".startswith("he")</code></td><td><code>True</code></td></tr>
                    <tr><td><code>endswith()</code></td><td>Check end string</td><td><code>"hello".endswith("lo")</code></td><td><code>True</code></td></tr>
                    <tr><td><code>isdigit()</code></td><td>All digits?</td><td><code>"123".isdigit()</code></td><td><code>True</code></td></tr>
                    <tr><td><code>isalpha()</code></td><td>All letters?</td><td><code>"hello".isalpha()</code></td><td><code>True</code></td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <p>
                  문자열 메서드는 문자열 객체에서 호출할 수 있는 내장 함수입니다.
                  원본 문자열은 변경하지 않고 <strong>새로운 문자열을 반환</strong>합니다 (문자열은 불변이므로).
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>메서드</th><th>설명</th><th>예시</th><th>결과</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>upper()</code></td><td>모두 대문자로</td><td><code>"hello".upper()</code></td><td><code>"HELLO"</code></td></tr>
                    <tr><td><code>lower()</code></td><td>모두 소문자로</td><td><code>"HELLO".lower()</code></td><td><code>"hello"</code></td></tr>
                    <tr><td><code>strip()</code></td><td>양쪽 공백 제거</td><td><code>" hi ".strip()</code></td><td><code>"hi"</code></td></tr>
                    <tr><td><code>lstrip()</code></td><td>왼쪽 공백 제거</td><td><code>" hi ".lstrip()</code></td><td><code>"hi "</code></td></tr>
                    <tr><td><code>rstrip()</code></td><td>오른쪽 공백 제거</td><td><code>" hi ".rstrip()</code></td><td><code>" hi"</code></td></tr>
                    <tr><td><code>split()</code></td><td>문자열 분리 (리스트)</td><td><code>"a b c".split()</code></td><td><code>["a","b","c"]</code></td></tr>
                    <tr><td><code>join()</code></td><td>리스트를 문자열로 결합</td><td><code>"-".join(["a","b"])</code></td><td><code>"a-b"</code></td></tr>
                    <tr><td><code>replace()</code></td><td>문자열 치환</td><td><code>"abc".replace("a","x")</code></td><td><code>"xbc"</code></td></tr>
                    <tr><td><code>find()</code></td><td>위치 찾기 (없으면 -1)</td><td><code>"hello".find("ll")</code></td><td><code>2</code></td></tr>
                    <tr><td><code>count()</code></td><td>등장 횟수</td><td><code>"banana".count("a")</code></td><td><code>3</code></td></tr>
                    <tr><td><code>startswith()</code></td><td>시작 문자열 확인</td><td><code>"hello".startswith("he")</code></td><td><code>True</code></td></tr>
                    <tr><td><code>endswith()</code></td><td>끝 문자열 확인</td><td><code>"hello".endswith("lo")</code></td><td><code>True</code></td></tr>
                    <tr><td><code>isdigit()</code></td><td>숫자만으로 구성?</td><td><code>"123".isdigit()</code></td><td><code>True</code></td></tr>
                    <tr><td><code>isalpha()</code></td><td>알파벳/한글만으로 구성?</td><td><code>"hello".isalpha()</code></td><td><code>True</code></td></tr>
                  </tbody>
                </table>
              </>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'String method examples (1)' : '문자열 메서드 활용 예시 (1)'}</div>
              <pre><code>{`# 대소문자 변환
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
print(result)    # 2025/03/01`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'String method examples (2)' : '문자열 메서드 활용 예시 (2)'}</div>
              <pre><code>{`# 문자열 치환
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
print("hello123".isalnum())    # True (알파벳+숫자)`}</code></pre>
            </div>

            {/* ========== Key Summary ========== */}
            <div className="callout-box">
              <h3>{t('pythonLearning.keySummary')}</h3>
              {lang === 'en' ? (
                <ul>
                  <li>Python's basic data types: <code>int</code> (integer), <code>float</code> (float), <code>str</code> (string), <code>bool</code> (boolean)</li>
                  <li>Python integers have <strong>no size limit</strong>, and floats have <strong>floating-point precision errors</strong> (<code>0.1 + 0.2 != 0.3</code>).</li>
                  <li>Strings are <strong>immutable</strong>, and can be accessed via indexing (<code>[0]</code>) and slicing (<code>[1:5]</code>).</li>
                  <li><code>type()</code> returns the data type, while <code>isinstance()</code> returns True/False for type checking.</li>
                  <li><strong>Implicit conversion</strong> is automatic (int+float&rarr;float), <strong>explicit conversion</strong> uses int(), float(), str().</li>
                  <li>Among the 7 arithmetic operators: <code>/</code> always returns float, <code>//</code> gives quotient, <code>%</code> gives remainder, <code>**</code> gives exponentiation.</li>
                  <li>Operator precedence: <code>()</code> &gt; <code>**</code> &gt; <code>*,/,//,%</code> &gt; <code>+,-</code>. When in doubt, use <strong>parentheses</strong>.</li>
                  <li>String methods (upper, split, replace, etc.) do not modify the original but <strong>return a new string</strong>.</li>
                </ul>
              ) : (
                <ul>
                  <li>파이썬의 기본 자료형: <code>int</code>(정수), <code>float</code>(실수), <code>str</code>(문자열), <code>bool</code>(논리형)</li>
                  <li>파이썬 정수는 <strong>크기 제한이 없고</strong>, 실수는 <strong>부동소수점 오차</strong>가 있다 (<code>0.1 + 0.2 != 0.3</code>).</li>
                  <li>문자열은 <strong>불변(immutable)</strong>이며, 인덱싱(<code>[0]</code>)과 슬라이싱(<code>[1:5]</code>)으로 접근한다.</li>
                  <li><code>type()</code>은 자료형을 반환하고, <code>isinstance()</code>는 자료형 여부를 True/False로 반환한다.</li>
                  <li><strong>암시적 형변환</strong>은 자동(int+float&rarr;float), <strong>명시적 형변환</strong>은 int(), float(), str() 사용.</li>
                  <li>7가지 산술연산자 중 <code>/</code>는 항상 float, <code>//</code>는 몫, <code>%</code>는 나머지, <code>**</code>는 거듭제곱.</li>
                  <li>연산자 우선순위: <code>()</code> &gt; <code>**</code> &gt; <code>*,/,//,%</code> &gt; <code>+,-</code>. 헷갈리면 <strong>괄호</strong>를 사용.</li>
                  <li>문자열 메서드(upper, split, replace 등)는 원본을 변경하지 않고 <strong>새 문자열을 반환</strong>한다.</li>
                </ul>
              )}
            </div>

            {/* ========== Common Mistakes ========== */}
            <div className="callout-box">
              <h3>{t('pythonLearning.commonMistakes')}</h3>
              {lang === 'en' ? (
                <ul>
                  <li>
                    <strong>input() always returns str</strong>:
                    After <code>num = input("Number: ")</code>, doing <code>num + 10</code> causes TypeError!
                    Always use <code>int(input(...))</code> or <code>float(input(...))</code> for conversion.
                  </li>
                  <li>
                    <strong>Floating-point precision</strong>:
                    <code>0.1 + 0.2 == 0.3</code> is <code>False</code>.
                    For float comparison, use <code>round()</code> or <code>math.isclose()</code>.
                  </li>
                  <li>
                    <strong>Cannot directly concatenate string + number</strong>:
                    <code>"Age: " + 20</code> causes TypeError! Use <code>"Age: " + str(20)</code> or <code>f"Age: {'{20}'}"</code>.
                  </li>
                  <li>
                    <strong>int() truncates, not rounds</strong>:
                    <code>int(3.9)</code> is <code>3</code>, not <code>4</code>. For rounding, use <code>round(3.9)</code>.
                  </li>
                  <li>
                    <strong>True/False capitalization</strong>:
                    <code>true</code> and <code>false</code> are not recognized. Always use <code>True</code> and <code>False</code> (capital first letter).
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <strong>input() 반환값은 항상 str</strong>:
                    <code>num = input("숫자: ")</code> 후 <code>num + 10</code>을 하면 TypeError!
                    반드시 <code>int(input(...))</code> 또는 <code>float(input(...))</code>로 형변환하세요.
                  </li>
                  <li>
                    <strong>부동소수점 오차</strong>:
                    <code>0.1 + 0.2 == 0.3</code>은 <code>False</code>입니다.
                    실수 비교는 <code>round()</code> 또는 <code>math.isclose()</code>를 사용하세요.
                  </li>
                  <li>
                    <strong>문자열 + 숫자 직접 연결 불가</strong>:
                    <code>"나이: " + 20</code>은 TypeError! <code>"나이: " + str(20)</code> 또는 <code>f"나이: {'{20}'}"</code>를 사용하세요.
                  </li>
                  <li>
                    <strong>int()는 반올림이 아니라 버림</strong>:
                    <code>int(3.9)</code>는 <code>4</code>가 아니라 <code>3</code>입니다. 반올림은 <code>round(3.9)</code>를 사용하세요.
                  </li>
                  <li>
                    <strong>True/False 대소문자</strong>:
                    <code>true</code>와 <code>false</code>는 인식되지 않습니다. 반드시 <code>True</code>, <code>False</code> (첫 글자 대문자)를 사용하세요.
                  </li>
                </ul>
              )}
            </div>

            {/* ========== Exercises ========== */}
            <div className="exercise-box">
              <h3>{t('pythonLearning.exercises')}</h3>
              {lang === 'en' ? (
                <>
                  <p><strong>Exercise 1.</strong> Write a program that takes a circle's radius as input and calculates its circumference and area.</p>
                  <ul>
                    <li>Circumference = 2 x pi x r</li>
                    <li>Area = pi x r^2</li>
                    <li>Use pi = 3.14159</li>
                    <li>Display results to two decimal places (using f-string)</li>
                  </ul>
                  <br/>
                  <p><strong>Exercise 2.</strong> Write a program that takes two integers as input and outputs all 7 arithmetic operation results.</p>
                  <ul>
                    <li>Addition, subtraction, multiplication, division, floor division, modulo, exponentiation</li>
                    <li>Output format: <code>10 + 3 = 13</code> (using f-string)</li>
                    <li>Display division result to two decimal places</li>
                  </ul>
                </>
              ) : (
                <>
                  <p><strong>과제 1.</strong> 원의 반지름을 입력받아 둘레와 넓이를 계산하는 프로그램을 작성하세요.</p>
                  <ul>
                    <li>원의 둘레 = 2 x pi x r</li>
                    <li>원의 넓이 = pi x r^2</li>
                    <li>pi = 3.14159 사용</li>
                    <li>결과는 소수점 둘째 자리까지 출력 (f-string 활용)</li>
                  </ul>
                  <br/>
                  <p><strong>과제 2.</strong> 두 정수를 입력받아 다음 7가지 연산 결과를 모두 출력하는 프로그램을 작성하세요.</p>
                  <ul>
                    <li>덧셈, 뺄셈, 곱셈, 나눗셈, 몫, 나머지, 거듭제곱</li>
                    <li>출력 형식: <code>10 + 3 = 13</code> (f-string 활용)</li>
                    <li>나눗셈 결과는 소수점 둘째 자리까지 표시</li>
                  </ul>
                </>
              )}
            </div>

            <div className="exercise-box">
              <h3>{t('pythonLearning.advancedProblems')}</h3>
              {lang === 'en' ? (
                <>
                  <p><strong>Advanced 1.</strong> Write a temperature converter program.</p>
                  <ul>
                    <li>User selects conversion direction: 1. Celsius to Fahrenheit, 2. Fahrenheit to Celsius</li>
                    <li>Celsius to Fahrenheit: F = C x 9/5 + 32</li>
                    <li>Fahrenheit to Celsius: C = (F - 32) x 5/9</li>
                    <li>Display result to one decimal place</li>
                  </ul>
                  <br/>
                  <p><strong>Advanced 2.</strong> Write a sentence analyzer using string methods.</p>
                  <ul>
                    <li>Get one sentence as input from the user</li>
                    <li>Output: total character count, word count, occurrence count of a specific character (user input)</li>
                    <li>Output: converted to uppercase, reversed output (using slicing)</li>
                    <li>Format neatly using f-string</li>
                  </ul>
                </>
              ) : (
                <>
                  <p><strong>심화 1.</strong> 온도 변환기 프로그램을 작성하세요.</p>
                  <ul>
                    <li>사용자가 변환 방향을 선택: 1. 섭씨 → 화씨, 2. 화씨 → 섭씨</li>
                    <li>섭씨 → 화씨: F = C x 9/5 + 32</li>
                    <li>화씨 → 섭씨: C = (F - 32) x 5/9</li>
                    <li>결과는 소수점 첫째 자리까지 출력</li>
                  </ul>
                  <br/>
                  <p><strong>심화 2.</strong> 문자열 메서드를 활용한 문장 분석기를 작성하세요.</p>
                  <ul>
                    <li>사용자로부터 문장 하나를 입력받기</li>
                    <li>출력: 전체 문자 수, 단어 수, 특정 문자(사용자 입력)의 등장 횟수</li>
                    <li>출력: 대문자로 변환, 역순으로 출력 (슬라이싱 활용)</li>
                    <li>f-string으로 깔끔하게 정리하여 출력</li>
                  </ul>
                </>
              )}
            </div>

            <div className="lesson-nav">
              <Link to="/python-learning/02" className="lesson-nav-btn prev">
                ← {lang === 'en' ? '02: I/O & Variables' : '02: 입출력과 변수'}
              </Link>
              <Link to="/python-learning/04" className="lesson-nav-btn next">
                {lang === 'en' ? '04: Input-Process-Output' : '04: 입력-처리-출력'} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
