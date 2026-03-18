export const lessonContents = {
  // ==================== 기초 과정 ====================
  'hello-python': {
    sections: [
      {
        title: 'print() 함수로 출력하기',
        content: `파이썬에서 가장 먼저 배우는 것은 화면에 텍스트를 출력하는 것입니다.\nprint() 함수를 사용하면 원하는 내용을 콘솔에 출력할 수 있습니다.\n\n문자열은 작은따옴표(\') 또는 큰따옴표(\")로 감싸서 표현합니다.`,
        code: '# 첫 번째 파이썬 프로그램!\nprint("Hello, Python!")\nprint(\'반갑습니다!\')',
        expectedOutput: 'Hello, Python!\n반갑습니다!',
        tip: 'print() 함수는 괄호 안의 내용을 콘솔에 출력합니다. 문자열은 따옴표로 감싸야 합니다.'
      },
      {
        title: '여러 값 출력하기',
        content: `print() 함수에 여러 값을 쉼표로 구분하여 전달할 수 있습니다.\n기본적으로 각 값 사이에 공백이 추가됩니다.\n\nsep 매개변수로 구분자를, end 매개변수로 줄끝 문자를 변경할 수 있습니다.`,
        code: 'print("이름:", "파이썬")\nprint("버전:", 3.12)\nprint("A", "B", "C", sep="-")\nprint("끝!", end=" 끝!")\nprint()',
        expectedOutput: '이름: 파이썬\n버전: 3.12\nA-B-C\n끝! 끝!',
        tip: 'sep은 구분자(separator), end는 출력 끝에 붙는 문자를 지정합니다.'
      },
      {
        title: '주석 작성하기',
        content: `주석은 코드에 설명을 추가하는 방법입니다.\n파이썬은 # 기호 뒤의 내용을 무시합니다.\n\n여러 줄 주석은 큰따옴표 세 개(\\"\\"\\"...\\"\\"\\"\\")를 사용합니다.`,
        code: '# 이것은 한 줄 주석입니다\nprint("주석은 실행되지 않습니다")  # 코드 옆에도 가능\n\n# 아래는 여러 줄 주석 예시\n"""\n이렇게 여러 줄에\n걸쳐서 주석을\n작성할 수 있습니다\n"""\nprint("프로그램 완료!")',
        expectedOutput: '주석은 실행되지 않습니다\n프로그램 완료!',
        tip: '좋은 주석은 "왜" 그렇게 했는지를 설명합니다. 코드 자체가 "무엇을" 하는지는 이미 보여주니까요.'
      }
    ]
  },

  'variables': {
    sections: [
      {
        title: '변수 선언과 할당',
        content: `변수는 데이터를 저장하는 이름표입니다.\n파이썬에서는 = 기호를 사용하여 변수에 값을 할당합니다.\n\n다른 언어와 달리 파이썬은 변수의 타입을 미리 선언할 필요가 없습니다.`,
        code: '# 변수에 값 할당\nname = "파이썬"\nage = 30\npi = 3.14159\nis_fun = True\n\nprint(name)\nprint(age)\nprint(pi)\nprint(is_fun)',
        expectedOutput: '파이썬\n30\n3.14159\nTrue',
        tip: '변수 이름은 영문자, 숫자, 밑줄(_)을 사용할 수 있으며, 숫자로 시작할 수 없습니다.'
      },
      {
        title: '기본 자료형',
        content: `파이썬의 기본 자료형은 다음과 같습니다:\n\n- int: 정수 (1, 42, -10)\n- float: 실수 (3.14, -0.5)\n- str: 문자열 ("Hello")\n- bool: 불리언 (True, False)\n- NoneType: 값이 없음 (None)\n\ntype() 함수로 변수의 자료형을 확인할 수 있습니다.`,
        code: 'x = 42\ny = 3.14\nz = "Hello"\nw = True\nn = None\n\nprint(type(x))\nprint(type(y))\nprint(type(z))\nprint(type(w))\nprint(type(n))',
        expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>\n<class 'NoneType'>",
        tip: '파이썬은 동적 타이핑 언어입니다. 같은 변수에 다른 타입의 값을 재할당할 수 있습니다.'
      },
      {
        title: '형 변환',
        content: `서로 다른 자료형 간 변환이 필요할 때 형 변환 함수를 사용합니다.\n\n- int(): 정수로 변환\n- float(): 실수로 변환\n- str(): 문자열로 변환\n- bool(): 불리언으로 변환`,
        code: '# 형 변환 예제\nnum_str = "42"\nnum = int(num_str)\nprint(num + 8)\n\npi = 3.14\nprint(int(pi))\n\nresult = str(100)\nprint("점수: " + result)',
        expectedOutput: '50\n3\n점수: 100',
        tip: 'int()로 소수를 변환하면 소수점 이하가 버려집니다 (반올림이 아님).'
      }
    ]
  },

  'operators': {
    sections: [
      {
        title: '산술 연산자',
        content: `파이썬의 산술 연산자로 수학 계산을 수행할 수 있습니다.\n\n+ 덧셈, - 뺄셈, * 곱셈, / 나눗셈\n// 정수 나눗셈, % 나머지, ** 거듭제곱`,
        code: 'print(10 + 3)   # 덧셈\nprint(10 - 3)   # 뺄셈\nprint(10 * 3)   # 곱셈\nprint(10 / 3)   # 나눗셈\nprint(10 // 3)  # 정수 나눗셈\nprint(10 % 3)   # 나머지\nprint(2 ** 10)  # 거듭제곱',
        expectedOutput: '13\n7\n30\n3.3333333333333335\n3\n1\n1024',
        tip: '/ 는 항상 float을 반환하고, //는 정수 나눗셈(몫)을 반환합니다.'
      },
      {
        title: '비교 및 논리 연산자',
        content: `비교 연산자는 두 값을 비교하여 True 또는 False를 반환합니다.\n\n==  같다, != 다르다, > 크다, < 작다, >= 이상, <= 이하\n\n논리 연산자: and, or, not`,
        code: 'x = 10\nprint(x > 5)\nprint(x == 10)\nprint(x != 5)\n\n# 논리 연산자\nprint(x > 5 and x < 20)\nprint(x > 100 or x == 10)\nprint(not x > 100)',
        expectedOutput: 'True\nTrue\nTrue\nTrue\nTrue\nTrue',
        tip: '파이썬에서는 5 < x < 20처럼 연속 비교가 가능합니다!'
      }
    ]
  },

  'strings': {
    sections: [
      {
        title: '문자열 인덱싱과 슬라이싱',
        content: `문자열의 각 문자는 인덱스(위치 번호)로 접근할 수 있습니다.\n인덱스는 0부터 시작하며, 음수 인덱스는 뒤에서부터 셉니다.\n\n슬라이싱은 [시작:끝:간격] 형태로 부분 문자열을 추출합니다.`,
        code: 'text = "Python"\nprint(text[0])    # 첫 번째 문자\nprint(text[-1])   # 마지막 문자\nprint(text[0:3])  # 슬라이싱\nprint(text[::2])  # 2칸씩 건너뛰기\nprint(text[::-1]) # 뒤집기',
        expectedOutput: 'P\nn\nPyt\nPto\nnohtyP',
        tip: '슬라이싱에서 끝 인덱스는 포함되지 않습니다. text[0:3]은 인덱스 0,1,2의 문자입니다.'
      },
      {
        title: 'f-string 포매팅',
        content: `f-string은 파이썬 3.6+에서 도입된 문자열 포매팅 방법입니다.\n문자열 앞에 f를 붙이고, 중괄호 {} 안에 변수나 표현식을 넣습니다.\n\n서식 지정도 가능합니다: {값:서식}`,
        code: 'name = "파이썬"\nversion = 3.12\n\nprint(f"안녕, {name}!")\nprint(f"버전: {version}")\nprint(f"계산: {2 + 3 = }")\nprint(f"파이: {3.14159:.2f}")\nprint(f"이름: {name:>10}")',
        expectedOutput: '안녕, 파이썬!\n버전: 3.12\n계산: 2 + 3 = 5\n파이: 3.14\n이름:       파이썬',
        tip: 'f-string 안에서 표현식도 사용 가능합니다. {2+3}은 5로 치환됩니다.'
      },
      {
        title: '문자열 메서드',
        content: `파이썬 문자열은 다양한 내장 메서드를 제공합니다.\n\n주요 메서드: upper(), lower(), strip(), split(), join(), replace(), find(), count()`,
        code: 'text = "  Hello, Python World!  "\nprint(text.strip())\nprint(text.strip().upper())\nprint(text.strip().lower())\nprint(text.strip().split(", "))\nprint("-".join(["a", "b", "c"]))\nprint(text.count("l"))',
        expectedOutput: 'Hello, Python World!\nHELLO, PYTHON WORLD!\nhello, python world!\n[\'Hello\', \'Python World!\']\na-b-c\n3',
        tip: '문자열 메서드는 원본을 변경하지 않고 새 문자열을 반환합니다.'
      }
    ]
  },

  'conditionals': {
    sections: [
      {
        title: 'if / elif / else',
        content: `조건문은 조건에 따라 다른 코드를 실행합니다.\nif 조건이 True이면 해당 블록을 실행하고, 아니면 elif나 else로 넘어갑니다.\n\n파이썬은 들여쓰기(인덴트)로 코드 블록을 구분합니다.`,
        code: 'score = 85\n\nif score >= 90:\n    print("A학점")\nelif score >= 80:\n    print("B학점")\nelif score >= 70:\n    print("C학점")\nelse:\n    print("재수강")\n\nprint(f"점수: {score}점")',
        expectedOutput: 'B학점\n점수: 85점',
        tip: '파이썬은 중괄호 대신 들여쓰기(보통 스페이스 4칸)로 블록을 구분합니다.'
      },
      {
        title: '조건 표현식 (삼항 연산자)',
        content: `파이썬의 삼항 연산자는 한 줄로 조건문을 작성할 수 있게 해줍니다.\n\n형식: 값1 if 조건 else 값2`,
        code: 'age = 20\nstatus = "성인" if age >= 18 else "미성년"\nprint(f"나이: {age}, 상태: {status}")\n\n# 중첩도 가능 (하지만 가독성 주의)\ntemp = 35\nweather = "더움" if temp > 30 else "적당" if temp > 15 else "추움"\nprint(f"기온: {temp}도, 날씨: {weather}")',
        expectedOutput: '나이: 20, 상태: 성인\n기온: 35도, 날씨: 더움',
        tip: '삼항 연산자는 간단한 조건에만 사용하세요. 복잡한 조건은 일반 if문이 읽기 쉽습니다.'
      }
    ]
  },

  'loops': {
    sections: [
      {
        title: 'for 반복문',
        content: `for 문은 시퀀스(리스트, 문자열, range 등)의 각 요소를 순회합니다.\n\nrange(n)은 0부터 n-1까지의 수열을 생성합니다.\nrange(start, stop, step)으로 시작, 끝, 간격을 지정할 수 있습니다.`,
        code: '# 리스트 순회\nfruits = ["사과", "바나나", "체리"]\nfor fruit in fruits:\n    print(fruit)\n\n# range 사용\nfor i in range(1, 6):\n    print(f"{i}번", end=" ")\nprint()',
        expectedOutput: '사과\n바나나\n체리\n1번 2번 3번 4번 5번',
        tip: 'enumerate()를 사용하면 인덱스와 값을 동시에 얻을 수 있습니다.'
      },
      {
        title: 'while 반복문과 제어문',
        content: `while 문은 조건이 True인 동안 반복합니다.\n\nbreak: 반복문을 즉시 종료\ncontinue: 현재 반복을 건너뛰고 다음 반복으로\nelse: 반복문이 정상 종료(break 없이)되었을 때 실행`,
        code: '# while 문\ncount = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue  # 3은 건너뛰기\n    print(count, end=" ")\nprint()\n\n# break 사용\nfor i in range(10):\n    if i == 5:\n        break\n    print(i, end=" ")\nprint()',
        expectedOutput: '1 2 4 5\n0 1 2 3 4',
        tip: 'while True와 break를 조합하면 유연한 반복 구조를 만들 수 있습니다.'
      }
    ]
  },

  'lists': {
    sections: [
      {
        title: '리스트 생성과 조작',
        content: `리스트는 여러 값을 순서대로 저장하는 자료구조입니다.\n대괄호 []를 사용하여 생성하며, 다양한 타입을 혼합할 수 있습니다.\n\n인덱싱, 슬라이싱, 추가, 삭제 등 다양한 조작이 가능합니다.`,
        code: '# 리스트 생성과 조작\nnums = [1, 2, 3, 4, 5]\nprint(nums)\n\nnums.append(6)       # 끝에 추가\nnums.insert(0, 0)    # 인덱스 0에 삽입\nprint(nums)\n\nnums.pop()           # 마지막 요소 제거\nprint(nums)\nprint(len(nums))     # 길이',
        expectedOutput: '[1, 2, 3, 4, 5]\n[0, 1, 2, 3, 4, 5, 6]\n[0, 1, 2, 3, 4, 5]\n6',
        tip: 'append()는 하나의 요소를, extend()는 다른 리스트의 모든 요소를 추가합니다.'
      },
      {
        title: '리스트 컴프리헨션',
        content: `리스트 컴프리헨션은 리스트를 간결하게 생성하는 파이썬스러운 방법입니다.\n\n형식: [표현식 for 변수 in 반복가능 if 조건]\n\n기존 반복문보다 더 읽기 쉽고 빠릅니다.`,
        code: '# 기본 컴프리헨션\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)\n\n# 조건 포함\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n\n# 변환 적용\nwords = ["hello", "world", "python"]\nupper_words = [w.upper() for w in words]\nprint(upper_words)',
        expectedOutput: '[1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]\n[\'HELLO\', \'WORLD\', \'PYTHON\']',
        tip: '리스트 컴프리헨션이 너무 복잡해지면 일반 for문을 사용하는 것이 더 좋습니다.'
      }
    ]
  },

  'tuples-dicts': {
    sections: [
      {
        title: '튜플',
        content: `튜플은 리스트와 비슷하지만 변경할 수 없는(immutable) 자료구조입니다.\n소괄호 ()를 사용하여 생성합니다.\n\n변경이 필요 없는 데이터를 저장할 때 튜플을 사용하면 안전합니다.`,
        code: '# 튜플 생성\ncolors = ("빨강", "초록", "파랑")\nprint(colors[0])\nprint(len(colors))\n\n# 튜플 언패킹\nx, y, z = colors\nprint(f"{x}, {y}, {z}")\n\n# 여러 값 반환에 활용\ndef min_max(nums):\n    return min(nums), max(nums)\n\nresult = min_max([3, 1, 4, 1, 5])\nprint(f"최소: {result[0]}, 최대: {result[1]}")',
        expectedOutput: '빨강\n3\n빨강, 초록, 파랑\n최소: 1, 최대: 5',
        tip: '함수에서 여러 값을 반환할 때 파이썬은 자동으로 튜플로 묶어서 반환합니다.'
      },
      {
        title: '딕셔너리',
        content: `딕셔너리는 키(key)와 값(value) 쌍으로 데이터를 저장합니다.\n중괄호 {}와 콜론 :을 사용하여 생성합니다.\n\n키로 빠르게 값을 검색할 수 있습니다.`,
        code: '# 딕셔너리 생성과 사용\nstudent = {\n    "이름": "김파이",\n    "나이": 20,\n    "전공": "컴퓨터공학"\n}\n\nprint(student["이름"])\nstudent["학년"] = 2  # 추가\nprint(student)\n\n# 메서드 활용\nprint(list(student.keys()))\nfor key, value in student.items():\n    print(f"{key}: {value}")',
        expectedOutput: "김파이\n{'이름': '김파이', '나이': 20, '전공': '컴퓨터공학', '학년': 2}\n['이름', '나이', '전공', '학년']\n이름: 김파이\n나이: 20\n전공: 컴퓨터공학\n학년: 2",
        tip: 'get() 메서드를 사용하면 키가 없을 때 에러 대신 기본값을 반환합니다.'
      }
    ]
  },

  'functions-basic': {
    sections: [
      {
        title: '함수 정의와 호출',
        content: `함수는 재사용 가능한 코드 블록입니다.\ndef 키워드로 정의하고, 함수명() 으로 호출합니다.\n\n매개변수로 데이터를 전달하고, return으로 결과를 반환합니다.`,
        code: '# 함수 정의\ndef greet(name):\n    return f"안녕하세요, {name}님!"\n\n# 함수 호출\nresult = greet("파이썬")\nprint(result)\n\n# 여러 매개변수\ndef add(a, b):\n    return a + b\n\nprint(add(3, 5))',
        expectedOutput: '안녕하세요, 파이썬님!\n8',
        tip: '함수 이름은 동사로 시작하면 좋습니다: get_name(), calculate_total(), is_valid() 등'
      },
      {
        title: '기본값과 가변 인자',
        content: `매개변수에 기본값을 설정하면 인자를 생략할 수 있습니다.\n\n*args는 여러 개의 위치 인자를 튜플로 받고,\n**kwargs는 키워드 인자를 딕셔너리로 받습니다.`,
        code: '# 기본값 매개변수\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3))      # 3의 2승\nprint(power(2, 10))  # 2의 10승\n\n# *args 가변 인자\ndef total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3, 4, 5))',
        expectedOutput: '9\n1024\n15',
        tip: '기본값이 있는 매개변수는 기본값이 없는 매개변수 뒤에 와야 합니다.'
      }
    ]
  },

  // ==================== 중급 과정 ====================
  'functions-advanced': {
    sections: [
      {
        title: '람다 함수',
        content: `lambda는 이름 없는 한 줄 함수를 만듭니다.\n\n형식: lambda 매개변수: 표현식\n\n간단한 연산을 함수로 전달할 때 유용합니다.`,
        code: '# lambda 함수\nsquare = lambda x: x ** 2\nprint(square(5))\n\n# 정렬에 활용\nstudents = [("김철수", 85), ("이영희", 92), ("박민수", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nfor name, score in students:\n    print(f"{name}: {score}점")',
        expectedOutput: '25\n이영희: 92점\n김철수: 85점\n박민수: 78점',
        tip: 'lambda는 간단한 경우에만 사용하세요. 복잡한 로직은 def로 정의하는 것이 좋습니다.'
      },
      {
        title: 'map, filter, reduce',
        content: `고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다.\n\nmap(함수, 반복가능): 각 요소에 함수를 적용\nfilter(함수, 반복가능): 조건을 만족하는 요소만 필터링\nreduce(함수, 반복가능): 요소를 누적 연산`,
        code: '# map: 각 요소에 함수 적용\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)\n\n# filter: 조건에 맞는 요소만\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)\n\n# reduce: 누적 연산\nfrom functools import reduce\ntotal = reduce(lambda a, b: a + b, nums)\nprint(f"합계: {total}")',
        expectedOutput: '[1, 4, 9, 16, 25]\n[2, 4]\n합계: 15',
        tip: '파이썬에서는 map/filter 대신 리스트 컴프리헨션을 더 많이 사용하는 추세입니다.'
      }
    ]
  },

  'oop-basics': {
    sections: [
      {
        title: '클래스와 객체',
        content: `클래스는 객체를 만들기 위한 설계도입니다.\nclass 키워드로 정의하고, __init__ 메서드로 초기화합니다.\n\nself는 인스턴스 자기 자신을 참조합니다.`,
        code: 'class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    \n    def bark(self):\n        return f"{self.name}(이/가) 멍멍!"\n    \n    def info(self):\n        return f"{self.breed} {self.name}"\n\n# 객체 생성\ndog1 = Dog("초코", "포메라니안")\ndog2 = Dog("맥스", "골든리트리버")\n\nprint(dog1.bark())\nprint(dog2.info())',
        expectedOutput: '초코(이/가) 멍멍!\n골든리트리버 맥스',
        tip: '__init__은 생성자(constructor)로, 객체가 생성될 때 자동으로 호출됩니다.'
      },
      {
        title: '클래스 변수와 인스턴스 변수',
        content: `클래스 변수는 모든 인스턴스가 공유하는 변수이고,\n인스턴스 변수(self.변수)는 각 인스턴스에 고유한 변수입니다.`,
        code: 'class Student:\n    school = "파이썬 학교"  # 클래스 변수\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name       # 인스턴스 변수\n        Student.count += 1\n\ns1 = Student("김철수")\ns2 = Student("이영희")\n\nprint(f"{s1.name} - {s1.school}")\nprint(f"{s2.name} - {s2.school}")\nprint(f"전체 학생 수: {Student.count}")',
        expectedOutput: '김철수 - 파이썬 학교\n이영희 - 파이썬 학교\n전체 학생 수: 2',
        tip: '클래스 변수는 클래스명.변수 또는 인스턴스.변수로 접근할 수 있습니다.'
      }
    ]
  },

  'oop-advanced': {
    sections: [
      {
        title: '상속',
        content: `상속은 기존 클래스(부모)의 기능을 물려받아 새 클래스(자식)를 만드는 것입니다.\n자식 클래스에서 부모의 메서드를 재정의(오버라이딩)할 수 있습니다.`,
        code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name}: 야옹!"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name}: 멍멍!"\n\nanimals = [Cat("나비"), Dog("바둑이"), Cat("미미")]\nfor animal in animals:\n    print(animal.speak())',
        expectedOutput: '나비: 야옹!\n바둑이: 멍멍!\n미미: 야옹!',
        tip: 'super().__init__()을 사용하면 부모 클래스의 초기화 코드를 호출할 수 있습니다.'
      },
      {
        title: '특수 메서드 (매직 메서드)',
        content: `파이썬 클래스는 __로 시작하고 끝나는 특수 메서드를 정의할 수 있습니다.\n\n__str__: 문자열 표현\n__len__: len() 지원\n__add__: + 연산자 지원\n__eq__: == 비교 지원`,
        code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"({self.x}, {self.y})"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(f"{v1} + {v2} = {v3}")',
        expectedOutput: '(1, 2) + (3, 4) = (4, 6)',
        tip: '매직 메서드를 잘 활용하면 클래스를 파이썬 내장 타입처럼 자연스럽게 사용할 수 있습니다.'
      }
    ]
  },

  'error-handling': {
    sections: [
      {
        title: 'try / except / finally',
        content: `예외 처리는 프로그램 실행 중 발생하는 오류를 안전하게 처리합니다.\n\ntry: 오류가 발생할 수 있는 코드\nexcept: 오류 발생 시 처리 코드\nfinally: 무조건 실행되는 코드`,
        code: '# 기본 예외 처리\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("0으로 나눌 수 없습니다!")\n\n# 여러 예외 처리\ntry:\n    nums = [1, 2, 3]\n    print(nums[10])\nexcept IndexError as e:\n    print(f"인덱스 오류: {e}")\nfinally:\n    print("처리 완료!")',
        expectedOutput: '0으로 나눌 수 없습니다!\n인덱스 오류: list index out of range\n처리 완료!',
        tip: '가능한 한 구체적인 예외 타입을 지정하세요. except Exception은 너무 광범위합니다.'
      },
      {
        title: 'raise와 사용자 정의 예외',
        content: `raise 키워드로 의도적으로 예외를 발생시킬 수 있습니다.\nException 클래스를 상속하여 사용자 정의 예외를 만들 수 있습니다.`,
        code: 'class InvalidAgeError(Exception):\n    def __init__(self, age):\n        super().__init__(f"잘못된 나이: {age}")\n        self.age = age\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(age)\n    return age\n\ntry:\n    set_age(200)\nexcept InvalidAgeError as e:\n    print(e)',
        expectedOutput: '잘못된 나이: 200',
        tip: '사용자 정의 예외는 Exception을 상속하고, 의미 있는 이름을 붙이세요.'
      }
    ]
  },

  'file-io': {
    sections: [
      {
        title: '파일 읽기/쓰기',
        content: `open() 함수로 파일을 열고, with 문으로 안전하게 관리합니다.\n\n모드: 'r'(읽기), 'w'(쓰기-덮어쓰기), 'a'(추가), 'x'(새파일 생성)`,
        code: '# 파일 개념 이해 (시뮬레이션)\ndata = "이름: 파이썬\\n나이: 30\\n직업: 프로그래머"\n\n# 줄 단위로 처리\nlines = data.split("\\n")\nfor i, line in enumerate(lines, 1):\n    print(f"{i}: {line}")\n\nprint(f"\\n총 {len(lines)}줄")',
        expectedOutput: '1: 이름: 파이썬\n2: 나이: 30\n3: 직업: 프로그래머\n\n총 3줄',
        tip: 'with open() as f: 구문을 사용하면 파일이 자동으로 닫힙니다.'
      },
      {
        title: 'CSV와 JSON 처리',
        content: `CSV(쉼표 구분 값)와 JSON은 데이터 교환에 많이 사용되는 형식입니다.\n파이썬은 csv와 json 표준 라이브러리를 제공합니다.`,
        code: 'import json\n\n# JSON 데이터 다루기\ndata = {\n    "students": [\n        {"name": "김철수", "score": 90},\n        {"name": "이영희", "score": 95}\n    ]\n}\n\n# 딕셔너리 -> JSON 문자열\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint(json_str)\n\n# JSON 문자열 -> 딕셔너리\nparsed = json.loads(json_str)\nfor s in parsed["students"]:\n    print(f"{s[\"name\"]}: {s[\"score\"]}점")',
        expectedOutput: '{\n  "students": [\n    {\n      "name": "김철수",\n      "score": 90\n    },\n    {\n      "name": "이영희",\n      "score": 95\n    }\n  ]\n}\n김철수: 90점\n이영희: 95점',
        tip: 'json.dumps()의 ensure_ascii=False는 한글을 그대로 출력하게 합니다.'
      }
    ]
  },

  'modules': {
    sections: [
      {
        title: '모듈 사용하기',
        content: `모듈은 함수, 클래스 등을 담고 있는 파이썬 파일입니다.\nimport 문으로 모듈을 가져와 사용할 수 있습니다.\n\nimport 방식: import 모듈, from 모듈 import 이름, import 모듈 as 별칭`,
        code: 'import math\nprint(f"원주율: {math.pi:.4f}")\nprint(f"제곱근: {math.sqrt(16)}")\n\nfrom random import randint, choice\nprint(f"주사위: {randint(1, 6)}")\n\nfruits = ["사과", "바나나", "체리"]\nprint(f"랜덤 선택: {choice(fruits)}")',
        expectedOutput: '원주율: 3.1416\n제곱근: 4.0\n주사위: 4\n랜덤 선택: 바나나',
        tip: 'from 모듈 import *은 모든 이름을 가져오므로 충돌 위험이 있어 권장하지 않습니다.'
      }
    ]
  },

  'comprehensions': {
    sections: [
      {
        title: '다양한 컴프리헨션',
        content: `리스트 외에도 딕셔너리, 세트 컴프리헨션을 사용할 수 있습니다.\n중첩 컴프리헨션으로 다차원 데이터도 처리 가능합니다.`,
        code: '# 딕셔너리 컴프리헨션\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)\n\n# 세트 컴프리헨션\nwords = ["hello", "world", "hello", "python"]\nunique_lengths = {len(w) for w in words}\nprint(unique_lengths)\n\n# 중첩 컴프리헨션\nmatrix = [[i*3+j+1 for j in range(3)] for i in range(3)]\nfor row in matrix:\n    print(row)',
        expectedOutput: '{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{5, 6}\n[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]',
        tip: '컴프리헨션은 간결하지만, 3중 이상 중첩은 가독성이 떨어지니 일반 for문을 사용하세요.'
      }
    ]
  },

  'regex': {
    sections: [
      {
        title: '정규표현식 기초',
        content: `정규표현식(regex)은 문자열에서 패턴을 찾는 강력한 도구입니다.\n파이썬의 re 모듈을 사용합니다.\n\n주요 함수: re.search(), re.match(), re.findall(), re.sub()`,
        code: 'import re\n\ntext = "전화번호: 010-1234-5678, 이메일: test@email.com"\n\n# 전화번호 찾기\nphone = re.search(r"\\d{3}-\\d{4}-\\d{4}", text)\nprint(f"전화번호: {phone.group()}")\n\n# 모든 숫자 찾기\nnums = re.findall(r"\\d+", text)\nprint(f"숫자들: {nums}")\n\n# 패턴 치환\nresult = re.sub(r"\\d", "*", text)\nprint(result)',
        expectedOutput: '전화번호: 010-1234-5678\n숫자들: [\'010\', \'1234\', \'5678\']\n전화번호: ***-****-****, 이메일: test@email.com',
        tip: '정규표현식 문자열 앞에 r을 붙이면(raw string) 이스케이프 문자 문제를 방지합니다.'
      }
    ]
  },

  // ==================== 고급 과정 ====================
  'decorators': {
    sections: [
      {
        title: '데코레이터 기초',
        content: `데코레이터는 함수를 감싸서 기능을 추가하는 패턴입니다.\n@기호를 사용하여 함수 위에 적용합니다.\n\n데코레이터는 본질적으로 함수를 인자로 받아 새 함수를 반환하는 함수입니다.`,
        code: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"[{func.__name__}] 시작")\n        result = func(*args, **kwargs)\n        print(f"[{func.__name__}] 완료")\n        return result\n    return wrapper\n\n@timer\ndef greet(name):\n    print(f"안녕하세요, {name}!")\n\n@timer\ndef add(a, b):\n    return a + b\n\ngreet("파이썬")\nresult = add(3, 5)\nprint(f"결과: {result}")',
        expectedOutput: '[greet] 시작\n안녕하세요, 파이썬!\n[greet] 완료\n[add] 시작\n[add] 완료\n결과: 8',
        tip: '@timer는 greet = timer(greet)와 동일합니다. 문법적 편의를 제공하는 것입니다.'
      },
      {
        title: '매개변수가 있는 데코레이터',
        content: `데코레이터에 인자를 전달하려면 3중 중첩 함수 구조가 필요합니다.\n외부 함수가 매개변수를 받고, 내부에서 실제 데코레이터를 반환합니다.`,
        code: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print("Hello!")\n\nsay_hello()',
        expectedOutput: 'Hello!\nHello!\nHello!',
        tip: 'functools.wraps를 사용하면 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존할 수 있습니다.'
      }
    ]
  },

  'generators': {
    sections: [
      {
        title: '제너레이터 함수',
        content: `제너레이터는 yield 키워드를 사용하여 값을 하나씩 생성합니다.\n메모리를 절약하면서 큰 시퀀스를 처리할 수 있습니다.\n\nnext()로 다음 값을 가져오거나, for문으로 순회합니다.`,
        code: 'def countdown(n):\n    print("카운트다운 시작!")\n    while n > 0:\n        yield n\n        n -= 1\n    print("발사!")\n\n# for문으로 순회\nfor num in countdown(5):\n    print(num, end=" ")\nprint()\n\n# 제너레이터 표현식\nsquares = (x**2 for x in range(5))\nprint(list(squares))',
        expectedOutput: '카운트다운 시작!\n5 4 3 2 1 \n발사!\n[0, 1, 4, 9, 16]',
        tip: '리스트 대신 제너레이터를 사용하면 메모리를 크게 절약할 수 있습니다 (지연 평가).'
      }
    ]
  },

  'context-managers': {
    sections: [
      {
        title: '컨텍스트 매니저 만들기',
        content: `컨텍스트 매니저는 리소스의 획득과 해제를 안전하게 관리합니다.\n__enter__와 __exit__ 메서드, 또는 contextlib을 사용하여 구현합니다.`,
        code: 'class Timer:\n    def __enter__(self):\n        print("타이머 시작")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("타이머 종료")\n        return False\n\nwith Timer() as t:\n    total = sum(range(1000))\n    print(f"합계: {total}")\n\nprint("프로그램 계속...")',
        expectedOutput: '타이머 시작\n합계: 499500\n타이머 종료\n프로그램 계속...',
        tip: '__exit__에서 True를 반환하면 예외를 억제합니다. 보통 False를 반환합니다.'
      }
    ]
  },

  'concurrency': {
    sections: [
      {
        title: '동시성 개념 이해',
        content: `동시성은 여러 작업을 동시에 처리하는 것처럼 보이게 하는 기법입니다.\n\n- 스레딩(threading): I/O 바운드 작업에 적합\n- 멀티프로세싱(multiprocessing): CPU 바운드 작업에 적합\n- asyncio: 비동기 I/O 처리`,
        code: '# 동시성 개념 시뮬레이션\ndef task(name, steps):\n    results = []\n    for i in range(1, steps + 1):\n        results.append(f"{name} - 단계 {i}/{steps}")\n    return results\n\n# 순차 실행\ntask1 = task("다운로드", 3)\ntask2 = task("처리", 3)\n\nfor step in task1:\n    print(step)\nfor step in task2:\n    print(step)\n\nprint("\\n모든 작업 완료!")',
        expectedOutput: '다운로드 - 단계 1/3\n다운로드 - 단계 2/3\n다운로드 - 단계 3/3\n처리 - 단계 1/3\n처리 - 단계 2/3\n처리 - 단계 3/3\n\n모든 작업 완료!',
        tip: 'I/O 바운드 작업(네트워크, 파일)에는 스레딩이나 asyncio가, CPU 바운드(계산)에는 멀티프로세싱이 효율적입니다.'
      }
    ]
  },

  'typing-testing': {
    sections: [
      {
        title: '타입 힌트',
        content: `타입 힌트는 변수와 함수의 타입 정보를 명시합니다.\n런타임에 강제되지 않지만, IDE 자동완성과 정적 분석에 도움됩니다.`,
        code: '# 타입 힌트 예제\ndef calculate_bmi(weight: float, height: float) -> float:\n    return weight / (height ** 2)\n\ndef greet_all(names: list) -> None:\n    for name in names:\n        print(f"안녕, {name}!")\n\nbmi = calculate_bmi(70.0, 1.75)\nprint(f"BMI: {bmi:.1f}")\n\ngreet_all(["철수", "영희", "민수"])',
        expectedOutput: 'BMI: 22.9\n안녕, 철수!\n안녕, 영희!\n안녕, 민수!',
        tip: 'typing 모듈의 List[str], Dict[str, int], Optional[str] 등으로 더 구체적인 타입을 지정할 수 있습니다.'
      }
    ]
  },

  // ==================== 응용 과정 ====================
  'numpy-basics': {
    sections: [
      {
        title: 'NumPy 배열 생성',
        content: `NumPy는 고성능 수치 연산 라이브러리입니다.\nndarray(N-dimensional array)는 NumPy의 핵심 자료구조입니다.\n\n다양한 방법으로 배열을 생성할 수 있습니다.`,
        code: 'import numpy as np\n\n# 리스트에서 배열 생성\na = np.array([1, 2, 3, 4, 5])\nprint(f"1차원: {a}")\n\n# 2차원 배열\nb = np.array([[1, 2, 3], [4, 5, 6]])\nprint(f"2차원:\\n{b}")\nprint(f"shape: {b.shape}")\n\n# 특수 배열\nprint(f"zeros: {np.zeros(3)}")\nprint(f"ones: {np.ones(4)}")\nprint(f"arange: {np.arange(0, 10, 2)}")',
        expectedOutput: '1차원: [1 2 3 4 5]\n2차원:\n[[1 2 3]\n [4 5 6]]\nshape: (2, 3)\nzeros: [0. 0. 0.]\nones: [1. 1. 1. 1.]\narange: [0 2 4 6 8]',
        tip: 'NumPy 배열은 같은 타입의 요소만 포함할 수 있어 파이썬 리스트보다 훨씬 빠릅니다.'
      },
      {
        title: '배열 인덱싱과 슬라이싱',
        content: `NumPy 배열도 파이썬 리스트처럼 인덱싱과 슬라이싱이 가능합니다.\n2차원 배열은 [행, 열] 형태로 접근합니다.\n\n불리언 마스크를 이용한 조건부 인덱싱도 매우 유용합니다.`,
        code: 'import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(f"전체:\\n{a}")\nprint(f"a[0,1] = {a[0, 1]}")     # 0행 1열\nprint(f"a[1,:] = {a[1, :]}")     # 1행 전체\nprint(f"a[:,2] = {a[:, 2]}")     # 2열 전체\n\n# 불리언 마스킹\nprint(f"5보다 큰: {a[a > 5]}")',
        expectedOutput: '전체:\n[[1 2 3]\n [4 5 6]\n [7 8 9]]\na[0,1] = 2\na[1,:] = [4 5 6]\na[:,2] = [3 6 9]\n5보다 큰: [6 7 8 9]',
        tip: 'NumPy 슬라이싱은 복사본이 아닌 뷰(view)를 반환합니다. 복사하려면 .copy()를 사용하세요.'
      }
    ]
  },

  'numpy-advanced': {
    sections: [
      {
        title: '배열 연산과 브로드캐스팅',
        content: `NumPy의 핵심 장점은 요소별(element-wise) 연산과 브로드캐스팅입니다.\n반복문 없이도 배열 전체에 연산을 적용할 수 있습니다.\n\n브로드캐스팅은 크기가 다른 배열 간의 연산을 가능하게 합니다.`,
        code: 'import numpy as np\n\na = np.array([1, 2, 3, 4])\nprint(f"원본: {a}")\nprint(f"*2: {a * 2}")         # 스칼라 연산\nprint(f"**2: {a ** 2}")        # 거듭제곱\nprint(f"합계: {np.sum(a)}")\nprint(f"평균: {np.mean(a)}")\nprint(f"표준편차: {np.std(a):.2f}")\n\n# 2차원 연산\nm = np.array([[1, 2], [3, 4]])\nprint(f"\\n행별 합: {np.sum(m, axis=1)}")\nprint(f"열별 합: {np.sum(m, axis=0)}")',
        expectedOutput: '원본: [1 2 3 4]\n*2: [2 4 6 8]\n**2: [ 1  4  9 16]\n합계: 10\n평균: 2.5\n표준편차: 1.12\n\n행별 합: [3 7]\n열별 합: [4 6]',
        tip: 'axis=0은 행 방향(열별), axis=1은 열 방향(행별) 연산을 수행합니다.'
      }
    ]
  },

  'pandas-basics': {
    sections: [
      {
        title: 'Series와 DataFrame',
        content: `Pandas는 데이터 분석의 핵심 라이브러리입니다.\n\nSeries: 1차원 데이터 (인덱스 + 값)\nDataFrame: 2차원 데이터 (표 형태, 행+열)`,
        code: 'import pandas as pd\n\n# Series 생성\nscores = pd.Series([90, 85, 78, 95], index=["국어", "영어", "수학", "과학"])\nprint("=== Series ===")\nprint(scores)\nprint(f"\\n평균: {scores.mean():.1f}")\n\n# DataFrame 생성\ndata = {\n    "이름": ["김철수", "이영희", "박민수"],\n    "나이": [20, 22, 21],\n    "점수": [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint("\\n=== DataFrame ===")\nprint(df)',
        expectedOutput: '=== Series ===\n국어    90\n영어    85\n수학    78\n과학    95\ndtype: int64\n\n평균: 87.0\n\n=== DataFrame ===\n   이름  나이  점수\n0  김철수  20  85\n1  이영희  22  92\n2  박민수  21  78',
        tip: 'DataFrame은 엑셀 시트와 비슷합니다. 행(index)과 열(columns)로 구성됩니다.'
      },
      {
        title: '데이터 조회와 탐색',
        content: `DataFrame의 기본 정보를 확인하는 여러 메서드가 있습니다.\n\nhead(), tail(), info(), describe(), shape, columns 등을 활용합니다.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "상품": ["노트북", "마우스", "키보드", "모니터", "헤드셋"],\n    "가격": [1200000, 35000, 89000, 450000, 120000],\n    "재고": [5, 100, 50, 12, 30]\n})\n\nprint(df.head(3))   # 상위 3행\nprint(f"\\n크기: {df.shape}")\nprint(f"\\n통계:\\n{df.describe()}")',
        expectedOutput: '    상품      가격   재고\n0  노트북  1200000    5\n1  마우스    35000  100\n2  키보드    89000   50\n\n크기: (5, 3)\n\n통계:\n              가격         재고\ncount      5.00      5.00\nmean  378800.00     39.40\nstd   467889.63     37.57\nmin    35000.00      5.00\n25%    89000.00     12.00\n50%   120000.00     30.00\n75%   450000.00     50.00\nmax  1200000.00    100.00',
        tip: 'describe()는 숫자형 열에 대해 자동으로 통계 요약을 제공합니다.'
      }
    ]
  },

  'pandas-manipulation': {
    sections: [
      {
        title: '데이터 필터링과 정렬',
        content: `Pandas는 조건에 맞는 데이터를 쉽게 필터링할 수 있습니다.\n불리언 인덱싱과 query() 메서드를 활용합니다.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "이름": ["김철수", "이영희", "박민수", "정수진", "최동혁"],\n    "점수": [85, 92, 78, 95, 88],\n    "학년": [1, 2, 1, 3, 2]\n})\n\n# 필터링\nprint("90점 이상:")\nprint(df[df["점수"] >= 90])\n\n# 정렬\nprint("\\n점수순 정렬:")\nprint(df.sort_values("점수", ascending=False))',
        expectedOutput: '90점 이상:\n   이름  점수  학년\n1  이영희  92    2\n3  정수진  95    3\n\n점수순 정렬:\n   이름  점수  학년\n3  정수진  95    3\n1  이영희  92    2\n4  최동혁  88    2\n0  김철수  85    1\n2  박민수  78    1',
        tip: '여러 조건을 결합할 때는 &(and)와 |(or)를 사용하고, 각 조건을 괄호로 감싸세요.'
      },
      {
        title: 'GroupBy와 집계',
        content: `groupby()는 특정 열의 값을 기준으로 데이터를 그룹화합니다.\n그룹화 후 sum(), mean(), count() 등의 집계 함수를 적용합니다.`,
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "부서": ["개발", "기획", "개발", "기획", "개발"],\n    "이름": ["김", "이", "박", "정", "최"],\n    "매출": [100, 80, 120, 90, 110]\n})\n\nprint("부서별 매출 합계:")\nprint(df.groupby("부서")["매출"].sum())\n\nprint("\\n부서별 통계:")\nprint(df.groupby("부서")["매출"].agg(["mean", "sum", "count"]))',
        expectedOutput: '부서별 매출 합계:\n부서\n개발    330\n기획    170\nName: 매출, dtype: int64\n\n부서별 통계:\n       mean  sum  count\n부서                     \n개발  110.0  330      3\n기획   85.0  170      2',
        tip: 'agg()에 여러 집계 함수를 리스트로 전달하면 한 번에 여러 통계를 계산할 수 있습니다.'
      }
    ]
  },

  'data-project': {
    sections: [
      {
        title: '데이터 분석 프로젝트',
        content: `이번 레슨에서는 지금까지 배운 NumPy와 Pandas를 활용하여\n실전 데이터 분석을 수행합니다.\n\n학생 성적 데이터를 생성하고, 분석하고, 인사이트를 도출합니다.`,
        code: 'import numpy as np\nimport pandas as pd\n\n# 데이터 생성\nnp.random.seed(42)\nn = 20\ndata = {\n    "학생": [f"학생{i+1}" for i in range(n)],\n    "수학": np.random.randint(50, 100, n),\n    "영어": np.random.randint(50, 100, n),\n    "과학": np.random.randint(50, 100, n)\n}\ndf = pd.DataFrame(data)\ndf["평균"] = df[["수학", "영어", "과학"]].mean(axis=1).round(1)\ndf["등급"] = pd.cut(df["평균"], bins=[0,60,70,80,90,100], labels=["F","D","C","B","A"])\n\nprint("=== 상위 5명 ===")\nprint(df.sort_values("평균", ascending=False).head())\nprint(f"\\n전체 평균: {df[\"평균\"].mean():.1f}")\nprint(f"\\n등급 분포:\\n{df[\"등급\"].value_counts().sort_index()}")',
        expectedOutput: '=== 상위 5명 ===\n    학생  수학  영어  과학   평균 등급\n15  학생16  91  95  96  94.0    A\n7   학생8   92  88  97  92.3    A\n2   학생3   87  94  90  90.3    A\n...',
        tip: '데이터 분석은 "질문 → 탐색 → 분석 → 시각화 → 결론" 순서로 진행하는 것이 좋습니다.'
      }
    ]
  }
}
