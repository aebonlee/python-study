import{j as e,L as r}from"./index-eHKQFx1z.js";const i=()=>e.jsxs("div",{className:"python-lesson-detail",style:{marginTop:"var(--nav-height)"},children:[e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"10주차: Try-Except 예외처리"}),e.jsx("p",{children:"오류의 종류와 예외처리, 디버깅 기법"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"프로그램 오류의 3가지 유형(구문 오류, 런타임 오류, 논리 오류)을 구분한다"}),e.jsx("li",{children:"파이썬의 주요 런타임 예외(Exception)의 종류와 원인을 파악한다"}),e.jsxs("li",{children:[e.jsx("code",{children:"try-except"})," 구문으로 예외를 처리하여 프로그램의 비정상 종료를 방지한다"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"}),"와 ",e.jsx("code",{children:"finally"}),"를 활용한 완전한 예외처리 구조를 작성한다"]}),e.jsx("li",{children:"안전한 프로그래밍 습관과 기본적인 디버깅 기법을 익힌다"})]})]}),e.jsx("h2",{children:"1. 프로그램 오류(Error)의 이해"}),e.jsx("h3",{children:"1.1 버그(Bug)의 유래"}),e.jsxs("p",{children:["1947년, 컴퓨터 과학자 ",e.jsx("strong",{children:"그레이스 호퍼(Grace Hopper)"}),"가 하버드 대학의 Mark II 컴퓨터에서 오작동의 원인을 찾던 중 릴레이 접점에 끼어 있는 ",e.jsx("strong",{children:"나방(moth)"}),"을 발견했습니다. 이 사건 이후로 프로그램의 오류를 ",e.jsx("strong",{children:'"버그(bug)"'}),", 오류를 찾아 수정하는 과정을 ",e.jsx("strong",{children:'"디버깅(debugging)"'}),"이라 부르게 되었습니다."]}),e.jsx("h3",{children:"1.2 오류의 3가지 분류"}),e.jsx("p",{children:"프로그래밍에서 발생하는 오류는 크게 세 가지로 분류됩니다."}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"구문 오류 (Syntax Error)"}),e.jsx("th",{children:"런타임 오류 (Runtime Error)"}),e.jsx("th",{children:"논리 오류 (Logic Error)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"발생 시점"})}),e.jsx("td",{children:"코드 분석(파싱) 단계"}),e.jsx("td",{children:"프로그램 실행 중"}),e.jsx("td",{children:"실행 완료 후 결과 확인 시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실행 여부"})}),e.jsx("td",{children:"실행 자체가 안 됨"}),e.jsx("td",{children:"실행 중 중단됨"}),e.jsx("td",{children:"정상 실행됨 (결과만 틀림)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"발견 난이도"})}),e.jsx("td",{children:"쉬움 (에러 메시지 명확)"}),e.jsx("td",{children:"보통 (에러 메시지 있음)"}),e.jsx("td",{children:"어려움 (에러 메시지 없음)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"해결 방법"})}),e.jsx("td",{children:"문법 수정"}),e.jsx("td",{children:"예외처리 (try-except)"}),e.jsx("td",{children:"테스트, 코드 리뷰, 디버깅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"예시"})}),e.jsx("td",{children:"괄호 누락, 콜론 빠짐"}),e.jsx("td",{children:"0 나누기, 잘못된 형변환"}),e.jsx("td",{children:"평균 계산 시 합계만 출력"})]})]})]}),e.jsx("h2",{children:"2. 구문 오류 (Syntax Error) 상세"}),e.jsxs("p",{children:[e.jsx("strong",{children:"구문 오류"}),"는 파이썬 인터프리터가 코드를 분석하는 단계에서 발견되는 오류입니다. 문법 규칙을 위반한 코드이므로 ",e.jsx("strong",{children:"프로그램이 아예 실행되지 않습니다"}),". 다행히 오류 메시지가 명확하여 비교적 쉽게 찾아 고칠 수 있습니다."]}),e.jsx("h3",{children:"2.1 흔한 구문 오류 목록"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"오류 유형"}),e.jsx("th",{children:"잘못된 코드"}),e.jsx("th",{children:"올바른 코드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"괄호 미닫기"}),e.jsx("td",{children:e.jsx("code",{children:'print("hello"'})}),e.jsx("td",{children:e.jsx("code",{children:'print("hello")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"콜론(:) 누락"}),e.jsx("td",{children:e.jsx("code",{children:"if x > 0"})}),e.jsx("td",{children:e.jsx("code",{children:"if x > 0:"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"들여쓰기 오류"}),e.jsx("td",{children:e.jsx("code",{children:'def f():\\\\nprint("hi")'})}),e.jsx("td",{children:e.jsx("code",{children:'def f():\\\\n    print("hi")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"잘못된 변수명"}),e.jsx("td",{children:e.jsx("code",{children:'2name = "홍길동"'})}),e.jsx("td",{children:e.jsx("code",{children:'name2 = "홍길동"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"따옴표 불일치"}),e.jsx("td",{children:e.jsx("code",{children:`print("hello')`})}),e.jsx("td",{children:e.jsx("code",{children:'print("hello")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"키워드 오타"}),e.jsx("td",{children:e.jsx("code",{children:"whille True:"})}),e.jsx("td",{children:e.jsx("code",{children:"while True:"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"대입 연산자 오류"}),e.jsx("td",{children:e.jsx("code",{children:"if x = 5:"})}),e.jsx("td",{children:e.jsx("code",{children:"if x == 5:"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"잘못된 문자열 연결"}),e.jsx("td",{children:e.jsx("code",{children:'print("나이: " + 20)'})}),e.jsx("td",{children:e.jsx("code",{children:'print("나이: " + str(20))'})})]})]})]}),e.jsx("h3",{children:"2.2 오류 메시지 읽는 법"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"오류 메시지 해석"}),e.jsx("pre",{children:e.jsx("code",{children:`# 아래 코드를 실행하면:
# print("안녕하세요"

# 오류 메시지:
#   File "example.py", line 1     ← 파일명과 줄 번호
#     print("안녕하세요"           ← 문제가 있는 코드
#                       ^         ← 캐럿(^): 오류 위치
# SyntaxError: '(' was never closed  ← 오류 유형과 설명

# 해결: 닫는 괄호를 추가
print("안녕하세요")`})})]}),e.jsx("h2",{children:"3. 런타임 오류 (Exception) 상세"}),e.jsx("h3",{children:"3.1 예외(Exception)란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"예외(Exception)"}),"란 문법적으로는 올바르지만 ",e.jsx("strong",{children:"실행 중에 발생하는 오류 상황"}),"을 말합니다. 예외가 처리되지 않으면 프로그램이 비정상적으로 종료됩니다. 파이썬에서는 ",e.jsx("code",{children:"try-except"}),"를 사용하여 예외를 처리할 수 있습니다."]}),e.jsx("h3",{children:"3.2 주요 예외 유형"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"예외"}),e.jsx("th",{children:"원인"}),e.jsx("th",{children:"발생 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ZeroDivisionError"})}),e.jsx("td",{children:"0으로 나누기"}),e.jsx("td",{children:e.jsx("code",{children:"10 / 0"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ValueError"})}),e.jsx("td",{children:"잘못된 값으로 형변환"}),e.jsx("td",{children:e.jsx("code",{children:'int("abc")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"TypeError"})}),e.jsx("td",{children:"잘못된 자료형 연산"}),e.jsx("td",{children:e.jsx("code",{children:'"hello" + 5'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"NameError"})}),e.jsx("td",{children:"정의되지 않은 변수 사용"}),e.jsx("td",{children:e.jsx("code",{children:"print(xyz)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"IndexError"})}),e.jsx("td",{children:"리스트 인덱스 범위 초과"}),e.jsx("td",{children:e.jsx("code",{children:"[1,2,3][5]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"KeyError"})}),e.jsx("td",{children:"딕셔너리에 없는 키 접근"}),e.jsx("td",{children:e.jsxs("code",{children:["{}",".get 대신 직접 접근"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"FileNotFoundError"})}),e.jsx("td",{children:"존재하지 않는 파일 열기"}),e.jsx("td",{children:e.jsx("code",{children:'open("없는파일.txt")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"AttributeError"})}),e.jsx("td",{children:"없는 속성/메서드 접근"}),e.jsx("td",{children:e.jsx("code",{children:'"hello".push("!")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"OverflowError"})}),e.jsx("td",{children:"수치 연산 결과가 너무 큼"}),e.jsx("td",{children:e.jsx("code",{children:"float(10 ** 400)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"RecursionError"})}),e.jsx("td",{children:"재귀 깊이 한계 초과"}),e.jsx("td",{children:"무한 재귀 함수"})]})]})]}),e.jsx("h3",{children:"3.3 각 예외별 발생 코드 예시"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"주요 예외 발생 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 1. ZeroDivisionError: 0으로 나누기
# result = 10 / 0
# ZeroDivisionError: division by zero

# 2. ValueError: 잘못된 형변환
# num = int("hello")
# ValueError: invalid literal for int() with base 10: 'hello'

# 3. TypeError: 자료형 불일치 연산
# result = "나이: " + 20
# TypeError: can only concatenate str (not "int") to str

# 4. NameError: 정의되지 않은 변수
# print(undefined_variable)
# NameError: name 'undefined_variable' is not defined

# 5. IndexError: 인덱스 범위 초과
# numbers = [1, 2, 3]
# print(numbers[10])
# IndexError: list index out of range

# 6. KeyError: 존재하지 않는 딕셔너리 키
# student = {"name": "홍길동"}
# print(student["age"])
# KeyError: 'age'

# 7. FileNotFoundError: 파일을 찾을 수 없음
# f = open("없는파일.txt", "r")
# FileNotFoundError: [Errno 2] No such file or directory

# 8. AttributeError: 존재하지 않는 속성/메서드
# x = 10
# x.append(5)
# AttributeError: 'int' object has no attribute 'append'`})})]}),e.jsx("h3",{children:"3.4 예외 계층 구조"}),e.jsxs("p",{children:["파이썬의 모든 예외는 계층 구조를 이루고 있습니다. 최상위에 ",e.jsx("code",{children:"BaseException"}),"이 있고, 일반적인 예외는 ",e.jsx("code",{children:"Exception"}),"을 상속합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"예외 계층 구조 (주요 부분)"}),e.jsx("pre",{children:e.jsx("code",{children:`# BaseException
#  ├── KeyboardInterrupt    (Ctrl+C)
#  ├── SystemExit           (sys.exit())
#  └── Exception            (일반 예외의 부모)
#       ├── ValueError
#       ├── TypeError
#       ├── NameError
#       ├── IndexError
#       ├── KeyError
#       ├── ZeroDivisionError
#       ├── FileNotFoundError
#       ├── AttributeError
#       ├── OverflowError
#       └── RecursionError

# except Exception: 으로 대부분의 일반 예외를 잡을 수 있음
# 단, KeyboardInterrupt, SystemExit 등은 잡히지 않음`})})]}),e.jsx("h2",{children:"4. 논리 오류 (Logic Error)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"논리 오류"}),"는 프로그램이 정상적으로 실행되지만 ",e.jsx("strong",{children:"결과가 예상과 다른"})," 경우입니다. 오류 메시지가 발생하지 않기 때문에 ",e.jsx("strong",{children:"가장 찾기 어려운 오류"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"논리 오류 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 예시 1: 평균 계산 실수
scores = [80, 90, 85]

# 잘못된 코드: 괄호 없이 나누기
wrong_avg = sum(scores) / len(scores) + 1  # 의도: (합/개수)+1이 아님
# 실제 계산: (255/3) + 1 = 86.0 (덧셈이 의도치 않게 포함)

# 올바른 코드
correct_avg = sum(scores) / len(scores)  # 85.0

# 예시 2: 부등호 방향 오류
def is_adult(age):
    return age < 18   # 잘못됨! 18 미만이면 True (미성년자)
    # return age >= 18  # 올바른 코드

# 예시 3: off-by-one 오류 (경계값 실수)
# 1부터 10까지 합을 구하려는데
total = 0
for i in range(1, 10):   # range(1, 10)은 1~9! 10이 빠짐
    total += i
print(total)  # 45 (올바른 결과는 55)

# 올바른 코드
total = 0
for i in range(1, 11):   # range(1, 11)은 1~10
    total += i
print(total)  # 55`})})]}),e.jsxs("p",{children:["논리 오류의 해결법: ",e.jsx("strong",{children:"테스트 케이스"})," 작성, ",e.jsx("strong",{children:"print 디버깅"}),"으로 중간값 확인,",e.jsx("strong",{children:"코드 리뷰"}),"를 통한 검증이 필요합니다."]}),e.jsx("h2",{children:"5. try-except 기본 구조"}),e.jsx("h3",{children:"5.1 문법"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except 기본 문법"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    # 오류가 발생할 수 있는 코드
    위험한_코드
except:
    # 오류가 발생했을 때 실행할 코드
    오류_처리_코드`})})]}),e.jsx("h3",{children:"5.2 동작 원리"}),e.jsxs("p",{children:[e.jsx("strong",{children:"1)"})," ",e.jsx("code",{children:"try"})," 블록의 코드를 실행합니다.",e.jsx("br",{}),e.jsx("strong",{children:"2)"})," 오류가 ",e.jsx("strong",{children:"없으면"})," → ",e.jsx("code",{children:"except"})," 블록을 건너뛰고 계속 진행합니다.",e.jsx("br",{}),e.jsx("strong",{children:"3)"})," 오류가 ",e.jsx("strong",{children:"발생하면"})," → ",e.jsx("code",{children:"try"})," 블록의 나머지 코드를 건너뛰고 ",e.jsx("code",{children:"except"})," 블록을 실행합니다.",e.jsx("br",{}),e.jsx("strong",{children:"4)"})," 어느 경우든 ",e.jsx("code",{children:"except"})," 블록 이후의 코드는 정상적으로 실행됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except 기본 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 예제 1: 숫자 입력받기
try:
    num = int(input("숫자를 입력하세요: "))
    print(f"입력한 숫자: {num}")
except:
    print("숫자가 아닌 값을 입력했습니다.")

print("프로그램을 계속 진행합니다.")

# 예제 2: 나눗셈
try:
    a = 10
    b = 0
    result = a / b
    print(f"결과: {result}")
except:
    print("오류가 발생했습니다!")

print("프로그램이 정상 종료됩니다.")

# 예제 3: 리스트 인덱스 접근
try:
    numbers = [10, 20, 30]
    index = int(input("인덱스를 입력하세요 (0~2): "))
    print(f"numbers[{index}] = {numbers[index]}")
except:
    print("잘못된 접근입니다.")`})})]}),e.jsx("h2",{children:"6. 특정 예외 처리"}),e.jsx("h3",{children:"6.1 except ExceptionType"}),e.jsx("p",{children:"특정 예외 유형만 처리하면 어떤 오류가 발생했는지 구분하여 적절한 대응이 가능합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"특정 예외 처리"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    a = int(input("분자: "))
    b = int(input("분모: "))
    result = a / b
    print(f"결과: {result:.2f}")
except ValueError:
    print("오류: 숫자를 입력해주세요.")
except ZeroDivisionError:
    print("오류: 0으로 나눌 수 없습니다.")`})})]}),e.jsx("h3",{children:"6.2 여러 예외를 하나로 묶기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"여러 예외를 하나의 except로"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    num = int(input("숫자: "))
    result = 100 / num
    print(f"결과: {result}")
except (ValueError, ZeroDivisionError):
    print("올바른 숫자(0 제외)를 입력해주세요.")`})})]}),e.jsx("h3",{children:"6.3 오류 메시지 활용 (as e)"}),e.jsxs("p",{children:[e.jsx("code",{children:"except ExceptionType as e"})," 형태로 오류 객체를 변수에 받아 상세 메시지를 활용할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"as e로 오류 메시지 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    num = int(input("숫자를 입력하세요: "))
    result = 100 / num
    print(f"100 / {num} = {result:.2f}")
except ValueError as e:
    print(f"ValueError 발생: {e}")
    # 예: ValueError 발생: invalid literal for int() with base 10: 'abc'
except ZeroDivisionError as e:
    print(f"ZeroDivisionError 발생: {e}")
    # 예: ZeroDivisionError 발생: division by zero
except Exception as e:
    print(f"예상치 못한 오류: {type(e).__name__}: {e}")`})})]}),e.jsx("h2",{children:"7. else와 finally"}),e.jsx("h3",{children:"7.1 else 블록"}),e.jsxs("p",{children:[e.jsx("code",{children:"else"})," 블록은 ",e.jsx("code",{children:"try"})," 블록이 ",e.jsx("strong",{children:"오류 없이 완료"}),"되었을 때 실행됩니다. 오류가 발생할 수 있는 코드와 오류 없을 때의 후속 처리를 분리할 수 있습니다."]}),e.jsx("h3",{children:"7.2 finally 블록"}),e.jsxs("p",{children:[e.jsx("code",{children:"finally"})," 블록은 오류 발생 여부에 ",e.jsx("strong",{children:"관계없이 항상"})," 실행됩니다. 파일 닫기, 네트워크 연결 해제 등 ",e.jsx("strong",{children:"자원 정리(cleanup)"}),"에 주로 사용합니다."]}),e.jsx("h3",{children:"7.3 완전한 구조: try-except-else-finally"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except-else-finally 구조"}),e.jsx("pre",{children:e.jsx("code",{children:`try:
    # 오류가 발생할 수 있는 코드
    위험한_코드
except ExceptionType:
    # 오류 발생 시 실행
    오류_처리
else:
    # 오류 없이 성공 시 실행
    성공_후속_처리
finally:
    # 오류 여부 관계없이 항상 실행
    자원_정리`})})]}),e.jsx("h3",{children:"7.4 실행 순서 (4가지 시나리오)"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"시나리오"}),e.jsx("th",{children:"try"}),e.jsx("th",{children:"except"}),e.jsx("th",{children:"else"}),e.jsx("th",{children:"finally"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"오류 없음"}),e.jsx("td",{children:"실행"}),e.jsx("td",{children:"건너뜀"}),e.jsx("td",{children:"실행"}),e.jsx("td",{children:"실행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"오류 발생 (처리됨)"}),e.jsx("td",{children:"중단"}),e.jsx("td",{children:"실행"}),e.jsx("td",{children:"건너뜀"}),e.jsx("td",{children:"실행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"오류 발생 (미처리)"}),e.jsx("td",{children:"중단"}),e.jsx("td",{children:"건너뜀"}),e.jsx("td",{children:"건너뜀"}),e.jsx("td",{children:"실행 후 오류 전파"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"try에서 return"}),e.jsx("td",{children:"실행"}),e.jsx("td",{children:"해당 시"}),e.jsx("td",{children:"해당 시"}),e.jsx("td",{children:"실행 (return 전)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"try-except-else-finally 실전 예제"}),e.jsx("pre",{children:e.jsx("code",{children:`# 시나리오 1: 오류 없는 경우
print("=== 시나리오 1: 정상 입력 ===")
try:
    num = int("42")  # 정상 변환
    result = 100 / num
except ValueError:
    print("ValueError 발생!")
except ZeroDivisionError:
    print("ZeroDivisionError 발생!")
else:
    print(f"계산 성공: {result:.2f}")  # 이 줄 실행됨
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 계산 성공: 2.38
# 작업 완료 (항상 실행)

print()

# 시나리오 2: ValueError 발생
print("=== 시나리오 2: ValueError ===")
try:
    num = int("abc")  # ValueError 발생!
    result = 100 / num
except ValueError:
    print("숫자를 입력해주세요.")  # 이 줄 실행됨
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
else:
    print(f"계산 성공: {result:.2f}")
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 숫자를 입력해주세요.
# 작업 완료 (항상 실행)

print()

# 시나리오 3: ZeroDivisionError 발생
print("=== 시나리오 3: ZeroDivisionError ===")
try:
    num = int("0")   # 변환 성공
    result = 100 / num  # ZeroDivisionError 발생!
except ValueError:
    print("숫자를 입력해주세요.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")  # 이 줄 실행됨
else:
    print(f"계산 성공: {result:.2f}")
finally:
    print("작업 완료 (항상 실행)")
# 출력:
# 0으로 나눌 수 없습니다.
# 작업 완료 (항상 실행)`})})]}),e.jsx("h2",{children:"8. 예외 처리 활용 패턴"}),e.jsx("h3",{children:"패턴 1: 안전한 정수 입력 받기"}),e.jsxs("p",{children:["사용자에게 올바른 정수를 입력받을 때까지 반복하는 패턴입니다.",e.jsx("code",{children:"while True"}),"와 ",e.jsx("code",{children:"try-except"}),"를 조합합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"안전한 정수 입력 함수"}),e.jsx("pre",{children:e.jsx("code",{children:`def safe_int_input(prompt):
    """올바른 정수가 입력될 때까지 반복하여 받음"""
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("  오류: 올바른 정수를 입력해주세요.")

# 사용
age = safe_int_input("나이를 입력하세요: ")
print(f"입력한 나이: {age}")

# 범위 제한까지 포함한 버전
def safe_int_range(prompt, low, high):
    """low 이상 high 이하의 정수를 받음"""
    while True:
        try:
            value = int(input(prompt))
            if low <= value <= high:
                return value
            else:
                print(f"  오류: {low}~{high} 사이의 값을 입력해주세요.")
        except ValueError:
            print("  오류: 올바른 정수를 입력해주세요.")

# 사용
score = safe_int_range("점수 (0~100): ", 0, 100)
print(f"입력한 점수: {score}")`})})]}),e.jsx("h3",{children:"패턴 2: 안전한 나눗셈 함수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"안전한 나눗셈"}),e.jsx("pre",{children:e.jsx("code",{children:`def safe_divide(a, b):
    """안전한 나눗셈: 오류 시 None 반환"""
    try:
        return a / b
    except ZeroDivisionError:
        print("  경고: 0으로 나눌 수 없습니다.")
        return None
    except TypeError:
        print("  경고: 숫자만 나눌 수 있습니다.")
        return None

# 테스트
print(safe_divide(10, 3))     # 3.333...
print(safe_divide(10, 0))     # 경고 메시지 + None
print(safe_divide("a", 3))   # 경고 메시지 + None`})})]}),e.jsx("h3",{children:"패턴 3: 메뉴 기반 프로그램의 입력 검증"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"메뉴 선택 입력 검증"}),e.jsx("pre",{children:e.jsx("code",{children:`def get_menu_choice():
    """1~4 사이의 메뉴 번호를 안전하게 입력받음"""
    print("\\n===== 메뉴 =====")
    print("1. 더하기")
    print("2. 빼기")
    print("3. 곱하기")
    print("4. 나누기")
    print("0. 종료")
    print("================")

    while True:
        try:
            choice = int(input("메뉴를 선택하세요: "))
            if 0 <= choice <= 4:
                return choice
            else:
                print("  0~4 사이의 번호를 입력해주세요.")
        except ValueError:
            print("  숫자를 입력해주세요.")`})})]}),e.jsx("h3",{children:"패턴 4: 파일 존재 여부 확인"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"파일 열기 예외처리"}),e.jsx("pre",{children:e.jsx("code",{children:`def read_file(filename):
    """파일 내용을 안전하게 읽어서 반환"""
    try:
        f = open(filename, "r", encoding="utf-8")
        content = f.read()
        f.close()
        return content
    except FileNotFoundError:
        print(f"  오류: '{filename}' 파일을 찾을 수 없습니다.")
        return None
    except PermissionError:
        print(f"  오류: '{filename}' 파일에 접근 권한이 없습니다.")
        return None

# 사용
content = read_file("data.txt")
if content is not None:
    print(f"파일 내용:\\n{content}")
else:
    print("파일을 읽지 못했습니다.")`})})]}),e.jsx("h2",{children:"9. raise로 예외 발생시키기"}),e.jsxs("p",{children:[e.jsx("code",{children:"raise"})," 키워드를 사용하면 프로그래머가 ",e.jsx("strong",{children:"직접 예외를 발생"}),"시킬 수 있습니다. 입력값 검증 등에서 잘못된 값이 들어왔을 때 명시적으로 오류를 일으킬 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"raise 사용 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`def set_age(age):
    """나이를 설정 (0~150 사이만 허용)"""
    if not isinstance(age, int):
        raise TypeError("나이는 정수여야 합니다.")
    if age < 0 or age > 150:
        raise ValueError(f"나이는 0~150 사이여야 합니다. (입력값: {age})")
    print(f"나이가 {age}으로 설정되었습니다.")

# 정상 호출
set_age(20)  # 나이가 20으로 설정되었습니다.

# 예외 발생
try:
    set_age(-5)
except ValueError as e:
    print(f"오류: {e}")
# 오류: 나이는 0~150 사이여야 합니다. (입력값: -5)

try:
    set_age("스물")
except TypeError as e:
    print(f"오류: {e}")
# 오류: 나이는 정수여야 합니다.`})})]}),e.jsx("h2",{children:"10. 디버깅 기법"}),e.jsx("h3",{children:"10.1 print 디버깅"}),e.jsxs("p",{children:["가장 간단한 디버깅 방법으로, 코드 중간에 ",e.jsx("code",{children:"print()"}),"를 삽입하여 변수의 값이나 실행 흐름을 추적합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"print 디버깅 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`def calculate_average(scores):
    """점수 리스트의 평균을 계산"""
    print(f"[DEBUG] 입력된 scores: {scores}")  # 디버깅용
    total = 0
    for i, score in enumerate(scores):
        total += score
        print(f"[DEBUG] i={i}, score={score}, total={total}")  # 디버깅용
    average = total / len(scores)
    print(f"[DEBUG] 최종 average: {average}")  # 디버깅용
    return average

result = calculate_average([80, 90, 85])
print(f"평균: {result}")
# 디버깅이 완료되면 [DEBUG] print문을 제거합니다.`})})]}),e.jsx("h3",{children:"10.2 이진 탐색 디버깅"}),e.jsxs("p",{children:["코드가 길 때 전체를 한 줄씩 확인하는 대신, ",e.jsx("strong",{children:"코드의 중간 지점"}),"에서 상태를 확인하고 오류 범위를 ",e.jsx("strong",{children:"절반씩 줄여가는"})," 방법입니다."]}),e.jsx("h3",{children:"10.3 고무 오리 디버깅 (Rubber Duck Debugging)"}),e.jsxs("p",{children:["코드의 동작을 ",e.jsx("strong",{children:"누군가(또는 고무 오리)에게 한 줄씩 설명"}),"하면서 논리적 오류를 찾는 방법입니다. 코드를 말로 설명하는 과정에서 잘못된 부분을 스스로 발견하게 되는 경우가 많습니다."]}),e.jsx("h3",{children:"10.4 VS Code 디버거"}),e.jsxs("p",{children:["VS Code의 디버거를 사용하면 ",e.jsx("strong",{children:"중단점(Breakpoint)"}),'을 설정하고 한 줄씩 실행하며 변수 값을 실시간으로 확인할 수 있습니다. 좌측 사이드바의 "실행 및 디버그" 메뉴에서 사용합니다.']}),e.jsx("h2",{children:"11. 종합 실습 예제"}),e.jsx("h3",{children:"예제 1: 안전한 계산기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"예외처리가 포함된 사칙연산 계산기"}),e.jsx("pre",{children:e.jsx("code",{children:`def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("0으로 나눌 수 없습니다.")
    return a / b

def calculator():
    """예외처리가 포함된 계산기 프로그램"""
    operations = {1: ("덧셈", add), 2: ("뺄셈", subtract),
                  3: ("곱셈", multiply), 4: ("나눗셈", divide)}

    while True:
        print("\\n===== 계산기 =====")
        print("1. 덧셈  2. 뺄셈")
        print("3. 곱셈  4. 나눗셈")
        print("0. 종료")
        print("==================")

        try:
            choice = int(input("메뉴 선택: "))
        except ValueError:
            print("숫자를 입력해주세요.")
            continue

        if choice == 0:
            print("계산기를 종료합니다.")
            break

        if choice not in operations:
            print("1~4 사이의 번호를 선택해주세요.")
            continue

        try:
            a = float(input("첫 번째 수: "))
            b = float(input("두 번째 수: "))
            name, func = operations[choice]
            result = func(a, b)
            print(f"결과: {a} {name} {b} = {result}")
        except ValueError:
            print("올바른 숫자를 입력해주세요.")
        except ZeroDivisionError as e:
            print(f"오류: {e}")

calculator()`})})]}),e.jsx("h3",{children:"예제 2: 안전한 성적 입력 프로그램"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"범위 검증 + 형변환 검증이 포함된 성적 프로그램"}),e.jsx("pre",{children:e.jsx("code",{children:`def get_score(subject):
    """과목 점수를 안전하게 입력받음 (0~100)"""
    while True:
        try:
            score = int(input(f"  {subject} 점수 (0~100): "))
            if 0 <= score <= 100:
                return score
            else:
                print("    → 0~100 사이의 값을 입력해주세요.")
        except ValueError:
            print("    → 숫자를 입력해주세요.")

def get_grade(avg):
    """평균 점수에 따른 등급 반환"""
    if avg >= 90: return "A"
    elif avg >= 80: return "B"
    elif avg >= 70: return "C"
    elif avg >= 60: return "D"
    else: return "F"

# 메인 프로그램
subjects = ["국어", "영어", "수학"]
print("=== 성적 입력 프로그램 ===")

try:
    name = input("학생 이름: ")
    scores = []
    for subj in subjects:
        score = get_score(subj)
        scores.append(score)

    total = sum(scores)
    average = total / len(scores)
    grade = get_grade(average)

    print(f"\\n=== {name}의 성적표 ===")
    for i, subj in enumerate(subjects):
        print(f"  {subj}: {scores[i]}점")
    print(f"  합계: {total}점")
    print(f"  평균: {average:.1f}점")
    print(f"  등급: {grade}")
except KeyboardInterrupt:
    print("\\n입력이 취소되었습니다.")`})})]}),e.jsx("h3",{children:"예제 3: 숫자 맞추기 게임 (예외처리 포함)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"숫자 맞추기 게임"}),e.jsx("pre",{children:e.jsx("code",{children:`import random

def number_guessing_game():
    """1~100 사이 랜덤 숫자 맞추기 게임"""
    secret = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    print("=== 숫자 맞추기 게임 ===")
    print(f"1~100 사이의 숫자를 맞춰보세요! (최대 {max_attempts}회)")

    while attempts < max_attempts:
        try:
            guess = int(input(f"\\n[{attempts + 1}/{max_attempts}] 숫자 입력: "))

            if guess < 1 or guess > 100:
                print("  1~100 사이의 숫자를 입력해주세요.")
                continue

            attempts += 1

            if guess == secret:
                print(f"  정답입니다! {attempts}번 만에 맞추셨습니다!")
                return
            elif guess < secret:
                print("  더 큰 수입니다. ↑")
            else:
                print("  더 작은 수입니다. ↓")

        except ValueError:
            print("  숫자를 입력해주세요.")

    print(f"\\n아쉽습니다! 정답은 {secret}이었습니다.")

number_guessing_game()`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 정리"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["오류는 ",e.jsx("strong",{children:"구문 오류"}),"(실행 불가), ",e.jsx("strong",{children:"런타임 오류"}),"(실행 중 중단), ",e.jsx("strong",{children:"논리 오류"}),"(결과 틀림) 3가지로 분류된다"]}),e.jsxs("li",{children:["런타임 오류(예외)는 ",e.jsx("code",{children:"try-except"}),"로 처리하여 프로그램의 비정상 종료를 방지한다"]}),e.jsxs("li",{children:[e.jsx("code",{children:"except ExceptionType"}),"으로 특정 예외만 처리하고, ",e.jsx("code",{children:"as e"}),"로 오류 메시지를 받을 수 있다"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"}),"는 오류 없을 때, ",e.jsx("code",{children:"finally"}),"는 항상 실행된다"]}),e.jsxs("li",{children:[e.jsx("code",{children:"raise"}),"로 직접 예외를 발생시켜 입력값을 검증할 수 있다"]}),e.jsxs("li",{children:[e.jsx("code",{children:"while True"})," + ",e.jsx("code",{children:"try-except"})," 조합은 안전한 입력을 받는 핵심 패턴이다"]}),e.jsx("li",{children:"print 디버깅, 이진 탐색 디버깅, 고무 오리 디버깅 등 다양한 디버깅 기법을 활용하자"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"자주 하는 실수"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"bare except 남용:"})," ",e.jsx("code",{children:"except:"}),"로 모든 예외를 잡으면 ",e.jsx("code",{children:"KeyboardInterrupt"}),"나 ",e.jsx("code",{children:"SystemExit"}),"까지 잡혀 프로그램 종료가 안 될 수 있다. ",e.jsx("code",{children:"except Exception:"}),"을 사용하거나 특정 예외를 명시하자"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"except에서 pass만 쓰기:"})," 오류를 무시하면 문제의 원인을 찾기 어렵다. 최소한 오류 로그를 남기자"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"너무 넓은 try 블록:"})," try 안에 코드가 너무 많으면 어느 줄에서 오류가 발생했는지 파악하기 어렵다. 오류 가능한 코드만 try에 넣자"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"오류 메시지를 읽지 않기:"})," 파이썬의 오류 메시지는 매우 유용하다. 예외 유형, 발생 줄 번호, 설명을 꼼꼼히 읽자"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 과제"}),e.jsxs("p",{children:[e.jsx("strong",{children:"과제 1: 점수 입력 프로그램"}),e.jsx("br",{}),"사용자로부터 점수(0~100)를 입력받아 등급을 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),'- 숫자가 아닌 입력 시 "숫자를 입력해주세요" 메시지 출력',e.jsx("br",{}),'- 범위(0~100)를 벗어나면 "0~100 사이의 값을 입력해주세요" 메시지 출력',e.jsx("br",{}),"- 올바른 입력이 될 때까지 반복",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"과제 2: 두 수의 나눗셈"}),e.jsx("br",{}),"두 수를 입력받아 나눗셈 결과를 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),"- 숫자가 아닌 입력 시 예외처리",e.jsx("br",{}),"- 0으로 나누기 예외처리",e.jsx("br",{}),'- "다시 계산하시겠습니까? (y/n)" 기능 추가']})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"심화 문제"}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 1: 간이 은행 시스템"}),e.jsx("br",{}),"잔액 확인, 입금, 출금 기능을 가진 간이 은행 프로그램을 작성하세요.",e.jsx("br",{}),"- 모든 사용자 입력에 예외처리 적용 (숫자 검증, 범위 검증)",e.jsx("br",{}),"- 출금 시 잔액 부족 검증",e.jsx("br",{}),"- 음수 금액 입금/출금 방지",e.jsx("br",{}),"- 메뉴: 1.잔액확인, 2.입금, 3.출금, 0.종료"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"문제 2: 파일 읽기 시뮬레이션"}),e.jsx("br",{}),"사용자에게 파일명을 입력받아 파일 내용을 출력하는 프로그램을 작성하세요.",e.jsx("br",{}),"- FileNotFoundError 처리 (파일이 없을 때)",e.jsx("br",{}),"- PermissionError 처리 (권한이 없을 때)",e.jsx("br",{}),'- finally로 "파일 작업 완료" 메시지 항상 출력']})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/python-learning/09",className:"lesson-nav-btn prev",children:"← 09: 함수"}),e.jsx(r,{to:"/python-learning/11",className:"lesson-nav-btn next",children:"11: 리스트 →"})]})]})})})]});export{i as default};
