const a=[{name:"func1",title:"기본 함수 (매개변수 없음)",desc:"print_address() 정의·호출",code:`# === 기본 함수 (매개변수 없음) ===
# 함수를 정의(def)하고 호출하는 가장 기본적인 예제입니다.

def print_address():
    """주소를 출력하는 함수 (매개변수 없음)"""
    print("서울 특별시 종로구 1번지")
    print("파이썬 빌딩 7층")
    print("홍길동")

# 함수 호출
print_address()`},{name:"func2",title:"매개변수 있는 함수",desc:"print_address(name)",code:`# === 매개변수 있는 함수 ===
# 매개변수(parameter)를 통해 함수에 값을 전달합니다.

def print_address(name):
    """이름을 매개변수로 받아 주소를 출력하는 함수"""
    print("서울 특별시 종로구 1번지")
    print("파이썬 빌딩 7층")
    print(name)  # 전달받은 이름 출력

# "홍길동"을 인수(argument)로 전달하여 호출
print_address("홍길동")`},{name:"func3",title:"반환값 있는 함수",desc:"원의 넓이 계산 + return",code:`# === 반환값 있는 함수 ===
# return 키워드로 계산 결과를 반환합니다.

def calculate_area(radius):
    """반지름을 받아 원의 넓이를 반환하는 함수"""
    area = 3.14 * radius ** 2   # 원의 넓이 = π × r²
    return area                  # 계산 결과 반환

# 반지름 5.0으로 함수 호출, 반환값 출력
result = calculate_area(5.0)
print("원의 넓이:", result)`},{name:"paddr1",title:"주소 출력 함수",desc:"매개변수로 이름 전달",code:`# === 주소 출력 함수 ===
# func2.py와 동일한 패턴: 매개변수로 이름을 전달합니다.

def print_address(name):
    """이름을 받아 주소와 함께 출력"""
    print("서울 특별시 종로구 1번지")
    print("파이썬 빌딩 7층")
    print(name)

print_address("홍길동")`},{name:"get_sum",title:"범위 합산 함수",desc:"get_sum(start, end) 정의",code:`# === 범위 합산 함수 ===
# start부터 end까지의 합을 계산하여 반환합니다.

def get_sum(start, end):
    """start부터 end까지의 합을 계산하는 함수"""
    sum = 0
    for i in range(start, end + 1):  # start ~ end 반복
        sum += i                      # 누적 합산
    return sum

# 1부터 10까지의 합: 55
print("1~10의 합:", get_sum(1, 10))
print("1~100의 합:", get_sum(1, 100))`},{name:"default",title:"기본값 매개변수",desc:"msg 기본값 지정 함수",code:`# === 기본값 매개변수 ===
# 매개변수에 기본값을 지정하면, 인수를 생략할 수 있습니다.

def greet(name, msg="별일없죠?"):
    """인사 함수: msg를 생략하면 기본값 사용"""
    print("안녕", name + ', ' + msg)

greet("영희")                    # msg 생략 → 기본값 "별일없죠?" 사용
greet("철수", "오늘 뭐해?")     # msg에 "오늘 뭐해?" 전달`},{name:"max3",title:"세 수 최대값 함수",desc:"기본값 매개변수로 최대값",code:`# === 세 수 최대값 함수 ===
# 기본값 매개변수를 활용한 최대값 함수입니다.

def getMax(a, b, c=-10000):
    """최대 3개의 수 중 최대값을 반환 (c는 선택)"""
    if (a >= b) and (a >= c):
        largest = a
    elif (b >= a) and (b >= c):
        largest = b
    else:
        largest = c
    return largest

print(f"(10, 20, 50) 중에서 최대값: {getMax(10, 20, 50)}")
print(f"(10, 20) 중에서 최대값: {getMax(10, 20)}")  # c 생략`},{name:"keyword",title:"키워드 인수",desc:"순서와 무관한 인수 전달",code:`# === 키워드 인수 ===
# 키워드 인수를 사용하면 매개변수 이름으로 전달하여 순서가 달라도 됩니다.

def calc(x, y, z):
    """세 수의 합을 반환하는 함수"""
    return x + y + z

# 키워드 인수: 순서가 달라도 이름으로 매칭됨
result = calc(y=20, x=10, z=30)
print("결과:", result)  # 10 + 20 + 30 = 60`},{name:"global",title:"전역변수 접근",desc:"함수 내 전역변수 r 참조",code:`# === 전역변수 접근 ===
# 함수 안에서 전역변수를 읽을 수 있습니다 (수정은 불가).

def calculate_area():
    """전역변수 r을 사용하여 원의 넓이를 계산"""
    result = 3.14 * r ** 2   # 전역변수 r 참조
    return result

# r = float(input("원의 반지름: "))
r = 5.0  # 반지름 (직접 수정하여 테스트해보세요)

area = calculate_area()
print("원의 넓이:", area)`},{name:"global1",title:"지역/전역 변수 혼동",desc:"return 없는 오류 예제",code:`# === 지역/전역 변수 혼동 ===
# 함수 내에서 area에 값을 저장해도 전역변수 area는 변하지 않습니다.

def calculate_area(radius):
    area = 3.14 * radius ** 2   # 이것은 지역변수 area!
    # return이 없으므로 None을 반환
    return

area = 0  # 전역변수 area

# r = float(input("원의 반지름: "))
r = 5.0  # 반지름

calculate_area(r)
print("area =", area)  # 0 출력 (전역변수는 변하지 않음!)`},{name:"global2",title:"global 키워드",desc:"global 선언으로 전역변수 수정",code:`# === global 키워드 ===
# global 키워드를 사용하면 함수 안에서 전역변수를 수정할 수 있습니다.

def calculate_area(radius):
    global area                   # 전역변수 area를 사용하겠다고 선언
    area = 3.14 * radius ** 2    # 전역변수 area가 변경됨
    return

area = 0  # 전역변수 area

# r = float(input("원의 반지름: "))
r = 5.0  # 반지름

calculate_area(r)
print("area =", area)  # 78.5 출력 (전역변수가 변경됨!)`},{name:"var1",title:"지역변수 접근 오류",desc:"NameError 발생 예제",code:`# === 지역변수 접근 오류 ===
# 함수 안의 지역변수는 함수 밖에서 접근할 수 없습니다.

def calculate_area(radius):
    result = 3.14 * radius ** 2  # result는 지역변수
    return result

# r = float(input("원의 반지름: "))
r = 5.0  # 반지름

area = calculate_area(r)
print("area =", area)     # 정상 출력: 78.5

# 아래 줄은 NameError를 발생시킵니다!
# result는 함수 안의 지역변수이므로 함수 밖에서 접근 불가
# print(result)  # NameError: name 'result' is not defined
print("# print(result) → NameError 발생!")`},{name:"var2",title:"전역변수 참조 함수",desc:"전역 r로 원 넓이 계산",code:`# === 전역변수 참조 함수 ===
# 함수 안에서 전역변수를 읽어 사용하는 예제입니다.

def calculate_area():
    """전역변수 r을 참조하여 원의 넓이 계산"""
    result = 3.14 * r ** 2  # 전역변수 r 참조 (읽기만 가능)
    return result

# r = float(input("원의 반지름: "))
r = 5.0  # 반지름 (직접 수정하여 테스트해보세요)

area = calculate_area()
print("원의 넓이:", area)`},{name:"var3",title:"전역변수 미수정 예제",desc:"return 없이 지역변수만 변경",code:`# === 전역변수 미수정 예제 ===
# global 없이 함수 안에서 area에 값을 대입하면 지역변수가 됩니다.

def calculate_area(radius):
    area = 3.14 * radius ** 2  # 지역변수 area (전역변수와 별개!)
    # return 없음 → None 반환

area = 0  # 전역변수 area

# r = float(input("원의 반지름: "))
r = 5.0

calculate_area(r)
print("area =", area)  # 0 출력 (전역변수 area는 그대로)`},{name:"var4",title:"global로 전역 수정",desc:"global area로 직접 수정",code:`# === global로 전역변수 수정 ===
# global 키워드로 함수 안에서 전역변수를 직접 수정합니다.

def calculate_area(radius):
    global area                   # 전역변수 area 사용 선언
    area = 3.14 * radius ** 2    # 전역변수 area 수정

area = 0  # 전역변수 area

# r = float(input("원의 반지름: "))
r = 5.0

calculate_area(r)
print("area =", area)  # 78.5 출력 (global 덕분에 수정됨)`}];export{a as default};
