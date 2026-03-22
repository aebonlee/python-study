export const quizzes = {
  basics: {
    title: '파이썬 기초 퀴즈',
    titleEn: 'Python Basics Quiz',
    description: '변수, 자료형, 조건문, 반복문, 리스트 등 기초 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of variables, data types, conditionals, loops, and lists',
    timeLimit: 600, // 10분
    passingScore: 70,
    questions: [
      {
        question: '다음 중 파이썬에서 올바른 변수 선언은?',
        questionEn: 'Which of the following is a correct variable declaration in Python?',
        options: ['int x = 10', 'x = 10', 'var x = 10', 'let x = 10'],
        optionsEn: ['int x = 10', 'x = 10', 'var x = 10', 'let x = 10'],
        correct: 1,
        explanation: '파이썬은 변수 선언 시 타입을 명시하지 않습니다. x = 10처럼 바로 값을 할당합니다.',
        explanationEn: 'Python does not require explicit type declaration for variables. You simply assign a value like x = 10.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'print(type(3.14))',
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        optionsEn: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        correct: 1,
        explanation: '3.14는 소수점이 있으므로 float(부동소수점) 타입입니다.',
        explanationEn: '3.14 has a decimal point, so it is a float (floating-point) type.'
      },
      {
        question: "다음 코드의 출력 결과는?",
        questionEn: 'What is the output of the following code?',
        code: 'x = "Python"\nprint(x[0:3])',
        options: ['Pyt', 'Pyth', 'yth', 'ytho'],
        optionsEn: ['Pyt', 'Pyth', 'yth', 'ytho'],
        correct: 0,
        explanation: '슬라이싱 [0:3]은 인덱스 0부터 2까지(3 미포함)의 문자를 추출합니다.',
        explanationEn: 'Slicing [0:3] extracts characters from index 0 to 2 (3 is excluded).'
      },
      {
        question: '파이썬에서 리스트에 요소를 추가하는 메서드는?',
        questionEn: 'Which method adds an element to a list in Python?',
        options: ['add()', 'push()', 'append()', 'insert_end()'],
        optionsEn: ['add()', 'push()', 'append()', 'insert_end()'],
        correct: 2,
        explanation: 'append()는 리스트의 끝에 요소를 추가하는 메서드입니다.',
        explanationEn: 'append() is the method that adds an element to the end of a list.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'for i in range(1, 6, 2):\n    print(i, end=" ")',
        options: ['1 2 3 4 5', '1 3 5', '2 4 6', '1 2 3'],
        optionsEn: ['1 2 3 4 5', '1 3 5', '2 4 6', '1 2 3'],
        correct: 1,
        explanation: 'range(1, 6, 2)는 1부터 시작하여 2씩 증가하며 6 미만까지의 수열(1, 3, 5)을 생성합니다.',
        explanationEn: 'range(1, 6, 2) generates a sequence starting from 1, incrementing by 2, up to but not including 6: (1, 3, 5).'
      },
      {
        question: '다음 중 딕셔너리를 올바르게 생성하는 코드는?',
        questionEn: 'Which of the following correctly creates a dictionary?',
        options: [
          "d = ['name': 'Kim']",
          "d = {'name': 'Kim'}",
          "d = ('name': 'Kim')",
          "d = <'name': 'Kim'>"
        ],
        optionsEn: [
          "d = ['name': 'Kim']",
          "d = {'name': 'Kim'}",
          "d = ('name': 'Kim')",
          "d = <'name': 'Kim'>"
        ],
        correct: 1,
        explanation: '딕셔너리는 중괄호 {}를 사용하고 키:값 쌍으로 구성됩니다.',
        explanationEn: 'Dictionaries use curly braces {} and consist of key:value pairs.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'x = [1, 2, 3, 4, 5]\nprint(x[-2])',
        options: ['2', '3', '4', '5'],
        optionsEn: ['2', '3', '4', '5'],
        correct: 2,
        explanation: '음수 인덱스는 뒤에서부터 세며, -1은 마지막, -2는 끝에서 두 번째 요소(4)입니다.',
        explanationEn: 'Negative indices count from the end. -1 is the last element, -2 is the second to last element (4).'
      },
      {
        question: '다음 중 파이썬의 논리 연산자가 아닌 것은?',
        questionEn: 'Which of the following is NOT a Python logical operator?',
        options: ['and', 'or', 'not', '&&'],
        optionsEn: ['and', 'or', 'not', '&&'],
        correct: 3,
        explanation: '파이썬은 &&, ||, ! 대신 and, or, not 키워드를 논리 연산자로 사용합니다.',
        explanationEn: 'Python uses the keywords and, or, not as logical operators instead of &&, ||, !.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: "name = '파이썬'\nprint(f'안녕, {name}!')",
        options: ["안녕, {name}!", "안녕, 파이썬!", "f'안녕, 파이썬!'", "에러 발생"],
        optionsEn: ["안녕, {name}!", "안녕, 파이썬!", "f'안녕, 파이썬!'", "Error"],
        correct: 1,
        explanation: "f-string은 중괄호 안의 변수를 실제 값으로 치환합니다.",
        explanationEn: "f-strings replace variables inside curly braces with their actual values."
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'nums = [1, 2, 3]\nnums.append([4, 5])\nprint(len(nums))',
        options: ['3', '4', '5', '에러 발생'],
        optionsEn: ['3', '4', '5', 'Error'],
        correct: 1,
        explanation: 'append는 [4, 5] 리스트를 하나의 요소로 추가합니다. 결과는 [1, 2, 3, [4, 5]]로 길이 4입니다.',
        explanationEn: 'append adds the list [4, 5] as a single element. The result is [1, 2, 3, [4, 5]] with length 4.'
      }
    ]
  },

  intermediate: {
    title: '파이썬 중급 퀴즈',
    titleEn: 'Python Intermediate Quiz',
    description: 'OOP, 예외 처리, 파일 I/O, 컴프리헨션 등 중급 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of OOP, exception handling, file I/O, and comprehensions',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: '클래스에서 인스턴스 메서드의 첫 번째 매개변수는?',
        questionEn: 'What is the first parameter of an instance method in a class?',
        options: ['this', 'self', 'cls', 'instance'],
        optionsEn: ['this', 'self', 'cls', 'instance'],
        correct: 1,
        explanation: '파이썬의 인스턴스 메서드는 관례적으로 첫 번째 매개변수로 self를 사용합니다.',
        explanationEn: 'By convention, Python instance methods use self as the first parameter.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f"Dog: {self.name}"\n\nd = Dog("멍멍이")\nprint(d)',
        options: ['Dog: 멍멍이', '<Dog object>', 'Dog(멍멍이)', '에러 발생'],
        optionsEn: ['Dog: 멍멍이', '<Dog object>', 'Dog(멍멍이)', 'Error'],
        correct: 0,
        explanation: '__str__ 메서드는 print() 호출 시 객체를 문자열로 표현하는 방법을 정의합니다.',
        explanationEn: 'The __str__ method defines how an object is represented as a string when print() is called.'
      },
      {
        question: '다음 중 리스트 컴프리헨션의 올바른 사용은?',
        questionEn: 'Which of the following is a correct use of list comprehension?',
        code: '# 1~10의 짝수만 포함하는 리스트',
        options: [
          '[x for x in range(1,11) if x % 2 == 0]',
          '[x if x % 2 == 0 for x in range(1,11)]',
          '[for x in range(1,11) if x % 2 == 0: x]',
          'list(x for x in range(1,11) where x % 2 == 0)'
        ],
        optionsEn: [
          '[x for x in range(1,11) if x % 2 == 0]',
          '[x if x % 2 == 0 for x in range(1,11)]',
          '[for x in range(1,11) if x % 2 == 0: x]',
          'list(x for x in range(1,11) where x % 2 == 0)'
        ],
        correct: 0,
        explanation: '리스트 컴프리헨션의 조건절은 for 절 뒤에 위치합니다: [표현식 for 변수 in 반복가능 if 조건]',
        explanationEn: 'The condition clause in list comprehension comes after the for clause: [expression for variable in iterable if condition]'
      },
      {
        question: 'try-except에서 finally 블록의 특징은?',
        questionEn: 'What is the characteristic of the finally block in try-except?',
        options: [
          '예외가 발생했을 때만 실행된다',
          '예외가 발생하지 않았을 때만 실행된다',
          '항상 실행된다',
          'return 문이 있으면 실행되지 않는다'
        ],
        optionsEn: [
          'It only executes when an exception occurs',
          'It only executes when no exception occurs',
          'It always executes',
          'It does not execute if there is a return statement'
        ],
        correct: 2,
        explanation: 'finally 블록은 예외 발생 여부와 관계없이 항상 실행됩니다. 주로 리소스 정리에 사용합니다.',
        explanationEn: 'The finally block always executes regardless of whether an exception occurred. It is mainly used for resource cleanup.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'def greet(name, greeting="안녕"):\n    return f"{greeting}, {name}!"\n\nprint(greet("철수"))',
        options: ['안녕, 철수!', '에러 발생', 'None, 철수!', 'greeting, 철수!'],
        optionsEn: ['안녕, 철수!', 'Error', 'None, 철수!', 'greeting, 철수!'],
        correct: 0,
        explanation: 'greeting 매개변수에 기본값 "안녕"이 설정되어 있어, 인자를 전달하지 않으면 기본값이 사용됩니다.',
        explanationEn: 'The greeting parameter has a default value of "안녕", so if no argument is passed, the default value is used.'
      },
      {
        question: '파이썬에서 with 문의 주요 목적은?',
        questionEn: 'What is the main purpose of the with statement in Python?',
        options: [
          '반복문을 간결하게 작성',
          '리소스의 자동 관리 (열기/닫기)',
          '조건문 대체',
          '클래스 상속'
        ],
        optionsEn: [
          'Writing loops concisely',
          'Automatic resource management (open/close)',
          'Replacing conditionals',
          'Class inheritance'
        ],
        correct: 1,
        explanation: 'with 문은 컨텍스트 매니저를 활용하여 파일 등의 리소스를 자동으로 열고 닫아줍니다.',
        explanationEn: 'The with statement uses context managers to automatically open and close resources such as files.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'nums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x: x > 3, nums))\nprint(result)',
        options: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[True, True]'],
        optionsEn: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[True, True]'],
        correct: 1,
        explanation: 'filter()는 조건을 만족하는 요소만 걸러냅니다. x > 3인 요소는 4와 5입니다.',
        explanationEn: 'filter() keeps only the elements that satisfy the condition. Elements where x > 3 are 4 and 5.'
      },
      {
        question: '다음 중 상속에서 부모 클래스의 메서드를 호출하는 방법은?',
        questionEn: 'How do you call a parent class method in inheritance?',
        options: ['parent.method()', 'super().method()', 'base.method()', 'this.parent.method()'],
        optionsEn: ['parent.method()', 'super().method()', 'base.method()', 'this.parent.method()'],
        correct: 1,
        explanation: 'super()는 부모 클래스의 인스턴스를 반환하며, 이를 통해 부모 메서드를 호출합니다.',
        explanationEn: 'super() returns an instance of the parent class, through which you can call parent methods.'
      },
      {
        question: 'JSON 파일을 읽어 파이썬 딕셔너리로 변환하는 코드는?',
        questionEn: 'Which code reads a JSON file and converts it to a Python dictionary?',
        code: 'import json',
        options: [
          'json.parse(file.read())',
          'json.load(file)',
          'json.decode(file)',
          'json.from_file(file)'
        ],
        optionsEn: [
          'json.parse(file.read())',
          'json.load(file)',
          'json.decode(file)',
          'json.from_file(file)'
        ],
        correct: 1,
        explanation: 'json.load()는 파일 객체에서 JSON 데이터를 읽어 파이썬 객체로 변환합니다.',
        explanationEn: 'json.load() reads JSON data from a file object and converts it to a Python object.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'd = {"a": 1, "b": 2, "c": 3}\nresult = {k: v*2 for k, v in d.items()}\nprint(result)',
        options: [
          "{'a': 2, 'b': 4, 'c': 6}",
          "{'a': 1, 'b': 2, 'c': 3}",
          "[2, 4, 6]",
          "에러 발생"
        ],
        optionsEn: [
          "{'a': 2, 'b': 4, 'c': 6}",
          "{'a': 1, 'b': 2, 'c': 3}",
          "[2, 4, 6]",
          "Error"
        ],
        correct: 0,
        explanation: '딕셔너리 컴프리헨션으로 각 값을 2배로 만든 새 딕셔너리를 생성합니다.',
        explanationEn: 'A dictionary comprehension creates a new dictionary with each value doubled.'
      }
    ]
  },

  advanced: {
    title: '파이썬 고급 퀴즈',
    titleEn: 'Python Advanced Quiz',
    description: '데코레이터, 제너레이터, 동시성 등 고급 주제를 테스트합니다',
    descriptionEn: 'Test your knowledge of decorators, generators, concurrency, and more',
    timeLimit: 720, // 12분
    passingScore: 70,
    questions: [
      {
        question: '데코레이터의 주요 목적은?',
        questionEn: 'What is the main purpose of decorators?',
        options: [
          '코드의 실행 속도를 높인다',
          '함수나 클래스의 동작을 수정/확장한다',
          '메모리 사용량을 줄인다',
          '타입 체크를 수행한다'
        ],
        optionsEn: [
          'Increase code execution speed',
          'Modify/extend the behavior of functions or classes',
          'Reduce memory usage',
          'Perform type checking'
        ],
        correct: 1,
        explanation: '데코레이터는 기존 함수나 클래스의 코드를 수정하지 않고 동작을 추가하거나 변경하는 패턴입니다.',
        explanationEn: 'Decorators are a pattern that adds or modifies behavior without changing the original function or class code.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'def make_doubler():\n    def doubler(x):\n        return x * 2\n    return doubler\n\nf = make_doubler()\nprint(f(5))',
        options: ['5', '10', '에러 발생', 'None'],
        optionsEn: ['5', '10', 'Error', 'None'],
        correct: 1,
        explanation: 'make_doubler는 내부 함수 doubler를 반환합니다. f(5)는 doubler(5)로 5*2=10을 반환합니다.',
        explanationEn: 'make_doubler returns the inner function doubler. f(5) calls doubler(5) which returns 5*2=10.'
      },
      {
        question: '제너레이터에서 yield 키워드의 역할은?',
        questionEn: 'What is the role of the yield keyword in generators?',
        options: [
          '함수를 즉시 종료한다',
          '값을 반환하고 함수 상태를 유지한다',
          '예외를 발생시킨다',
          '반복문을 중단한다'
        ],
        optionsEn: [
          'Immediately terminates the function',
          'Returns a value and preserves the function state',
          'Raises an exception',
          'Breaks out of a loop'
        ],
        correct: 1,
        explanation: 'yield는 값을 반환하면서도 함수의 상태를 보존하여, 다음 호출 시 이어서 실행합니다.',
        explanationEn: 'yield returns a value while preserving the function state, so execution resumes from where it left off on the next call.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'def gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = gen()\nprint(next(g))\nprint(next(g))',
        options: ['1\\n1', '1\\n2', '1\\n3', '에러 발생'],
        optionsEn: ['1\\n1', '1\\n2', '1\\n3', 'Error'],
        correct: 1,
        explanation: 'next()를 호출할 때마다 다음 yield까지 실행됩니다. 첫 번째 호출에서 1, 두 번째에서 2를 반환합니다.',
        explanationEn: 'Each call to next() executes until the next yield. The first call returns 1, the second returns 2.'
      },
      {
        question: 'functools.wraps를 데코레이터에 사용하는 이유는?',
        questionEn: 'Why is functools.wraps used in decorators?',
        options: [
          '실행 속도를 높이기 위해',
          '원래 함수의 메타데이터를 보존하기 위해',
          '에러를 방지하기 위해',
          '재귀 호출을 가능하게 하기 위해'
        ],
        optionsEn: [
          'To increase execution speed',
          'To preserve the metadata of the original function',
          'To prevent errors',
          'To enable recursive calls'
        ],
        correct: 1,
        explanation: '@wraps(func)는 데코레이터가 감싼 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존합니다.',
        explanationEn: '@wraps(func) preserves the metadata such as __name__ and __doc__ of the original function wrapped by the decorator.'
      },
      {
        question: '파이썬의 GIL(Global Interpreter Lock)에 대한 설명으로 올바른 것은?',
        questionEn: 'Which statement about Python\'s GIL (Global Interpreter Lock) is correct?',
        options: [
          '멀티스레딩을 완전히 불가능하게 한다',
          '한 번에 하나의 스레드만 파이썬 바이트코드를 실행하게 한다',
          '멀티프로세싱에도 영향을 미친다',
          'asyncio에서만 작동한다'
        ],
        optionsEn: [
          'It completely prevents multithreading',
          'It allows only one thread to execute Python bytecode at a time',
          'It also affects multiprocessing',
          'It only works with asyncio'
        ],
        correct: 1,
        explanation: 'GIL은 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제한합니다. I/O 바운드 작업에서는 여전히 멀티스레딩이 유용합니다.',
        explanationEn: 'The GIL restricts only one thread to execute Python bytecode at a time. Multithreading is still useful for I/O-bound tasks.'
      },
      {
        question: '다음 중 컨텍스트 매니저를 구현하기 위해 필요한 매직 메서드는?',
        questionEn: 'Which magic methods are needed to implement a context manager?',
        options: [
          '__init__과 __del__',
          '__enter__과 __exit__',
          '__get__과 __set__',
          '__call__과 __return__'
        ],
        optionsEn: [
          '__init__ and __del__',
          '__enter__ and __exit__',
          '__get__ and __set__',
          '__call__ and __return__'
        ],
        correct: 1,
        explanation: '컨텍스트 매니저는 __enter__(진입 시)와 __exit__(종료 시) 메서드를 구현해야 합니다.',
        explanationEn: 'A context manager must implement __enter__ (on entry) and __exit__ (on exit) methods.'
      },
      {
        question: '다음 데코레이터의 동작 결과는?',
        questionEn: 'What is the result of the following decorator?',
        code: 'def twice(func):\n    def wrapper(*args):\n        func(*args)\n        func(*args)\n    return wrapper\n\n@twice\ndef say(msg):\n    print(msg)\n\nsay("Hi")',
        options: ['Hi', 'Hi\\nHi', 'Hi Hi', '에러 발생'],
        optionsEn: ['Hi', 'Hi\\nHi', 'Hi Hi', 'Error'],
        correct: 1,
        explanation: '@twice 데코레이터는 원래 함수를 두 번 호출합니다. "Hi"가 두 번 출력됩니다.',
        explanationEn: 'The @twice decorator calls the original function twice. "Hi" is printed two times.'
      },
      {
        question: 'async/await 구문에 대한 설명으로 올바른 것은?',
        questionEn: 'Which statement about async/await syntax is correct?',
        options: [
          'async 함수는 자동으로 병렬 실행된다',
          'await는 동기 함수에서도 사용할 수 있다',
          'async 함수는 코루틴 객체를 반환한다',
          'asyncio는 멀티스레딩과 같다'
        ],
        optionsEn: [
          'async functions automatically run in parallel',
          'await can be used in synchronous functions',
          'async functions return a coroutine object',
          'asyncio is the same as multithreading'
        ],
        correct: 2,
        explanation: 'async def로 정의된 함수를 호출하면 코루틴 객체가 반환되며, await나 이벤트 루프를 통해 실행합니다.',
        explanationEn: 'Calling a function defined with async def returns a coroutine object, which is executed through await or an event loop.'
      },
      {
        question: '타입 힌트에 대한 설명으로 올바른 것은?',
        questionEn: 'Which statement about type hints is correct?',
        code: 'def add(a: int, b: int) -> int:\n    return a + b',
        options: [
          '런타임에 타입을 강제한다',
          '잘못된 타입 전달 시 에러가 발생한다',
          '코드 가독성과 정적 분석 도구에 도움을 준다',
          '파이썬 2에서도 사용할 수 있다'
        ],
        optionsEn: [
          'They enforce types at runtime',
          'An error occurs when wrong types are passed',
          'They help with code readability and static analysis tools',
          'They can be used in Python 2'
        ],
        correct: 2,
        explanation: '파이썬의 타입 힌트는 런타임에 강제되지 않으며, 코드 문서화와 mypy 같은 정적 분석 도구에 활용됩니다.',
        explanationEn: 'Python type hints are not enforced at runtime and are used for code documentation and static analysis tools like mypy.'
      }
    ]
  },

  applied: {
    title: '응용 (NumPy & Pandas) 퀴즈',
    titleEn: 'Applied (NumPy & Pandas) Quiz',
    description: 'NumPy 배열 연산과 Pandas 데이터 처리 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of NumPy array operations and Pandas data processing',
    timeLimit: 720,
    passingScore: 70,
    questions: [
      {
        question: 'NumPy 배열을 생성하는 올바른 코드는?',
        questionEn: 'Which code correctly creates a NumPy array?',
        code: 'import numpy as np',
        options: [
          'np.array([1, 2, 3])',
          'np.list([1, 2, 3])',
          'np.create([1, 2, 3])',
          'np.new_array([1, 2, 3])'
        ],
        optionsEn: [
          'np.array([1, 2, 3])',
          'np.list([1, 2, 3])',
          'np.create([1, 2, 3])',
          'np.new_array([1, 2, 3])'
        ],
        correct: 0,
        explanation: 'np.array()는 파이썬 리스트를 NumPy 배열(ndarray)로 변환하는 기본 방법입니다.',
        explanationEn: 'np.array() is the standard way to convert a Python list into a NumPy array (ndarray).'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a + b)',
        options: ['[1, 2, 3, 4, 5, 6]', '[5 7 9]', '에러 발생', '15'],
        optionsEn: ['[1, 2, 3, 4, 5, 6]', '[5 7 9]', 'Error', '15'],
        correct: 1,
        explanation: 'NumPy 배열의 덧셈은 요소별(element-wise) 연산을 수행합니다. [1+4, 2+5, 3+6] = [5, 7, 9]',
        explanationEn: 'NumPy array addition performs element-wise operations. [1+4, 2+5, 3+6] = [5, 7, 9]'
      },
      {
        question: 'NumPy에서 3x3 영행렬을 만드는 코드는?',
        questionEn: 'Which code creates a 3x3 zero matrix in NumPy?',
        options: [
          'np.zeros(3, 3)',
          'np.zeros((3, 3))',
          'np.empty(3, 3)',
          'np.matrix(3, 3, 0)'
        ],
        optionsEn: [
          'np.zeros(3, 3)',
          'np.zeros((3, 3))',
          'np.empty(3, 3)',
          'np.matrix(3, 3, 0)'
        ],
        correct: 1,
        explanation: 'np.zeros()는 튜플로 shape를 받습니다. (3, 3)은 3행 3열 배열을 의미합니다.',
        explanationEn: 'np.zeros() takes a tuple for the shape. (3, 3) means a 3-row, 3-column array.'
      },
      {
        question: 'Pandas DataFrame을 생성하는 올바른 코드는?',
        questionEn: 'Which code correctly creates a Pandas DataFrame?',
        code: 'import pandas as pd',
        options: [
          "pd.DataFrame({'A': [1,2], 'B': [3,4]})",
          "pd.Table({'A': [1,2], 'B': [3,4]})",
          "pd.create_df({'A': [1,2], 'B': [3,4]})",
          "pd.Data({'A': [1,2], 'B': [3,4]})"
        ],
        optionsEn: [
          "pd.DataFrame({'A': [1,2], 'B': [3,4]})",
          "pd.Table({'A': [1,2], 'B': [3,4]})",
          "pd.create_df({'A': [1,2], 'B': [3,4]})",
          "pd.Data({'A': [1,2], 'B': [3,4]})"
        ],
        correct: 0,
        explanation: 'pd.DataFrame()은 딕셔너리를 받아 DataFrame을 생성합니다. 키가 열 이름, 값이 데이터가 됩니다.',
        explanationEn: 'pd.DataFrame() takes a dictionary to create a DataFrame. Keys become column names and values become the data.'
      },
      {
        question: 'Pandas에서 결측치를 확인하는 메서드는?',
        questionEn: 'Which method checks for missing values in Pandas?',
        options: ['df.empty()', 'df.isnull()', 'df.missing()', 'df.check_na()'],
        optionsEn: ['df.empty()', 'df.isnull()', 'df.missing()', 'df.check_na()'],
        correct: 1,
        explanation: 'df.isnull() 또는 df.isna()는 각 셀의 결측치 여부를 불리언으로 반환합니다.',
        explanationEn: 'df.isnull() or df.isna() returns a boolean for each cell indicating whether it is a missing value.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: 'import numpy as np\na = np.array([[1,2],[3,4]])\nprint(a.shape)',
        options: ['(4,)', '(2, 2)', '[2, 2]', '4'],
        optionsEn: ['(4,)', '(2, 2)', '[2, 2]', '4'],
        correct: 1,
        explanation: 'shape 속성은 배열의 차원을 튜플로 반환합니다. 2x2 배열이므로 (2, 2)입니다.',
        explanationEn: 'The shape attribute returns the dimensions of the array as a tuple. Since it is a 2x2 array, it is (2, 2).'
      },
      {
        question: 'NumPy 브로드캐스팅에 대한 설명으로 올바른 것은?',
        questionEn: 'Which statement about NumPy broadcasting is correct?',
        options: [
          '같은 크기의 배열만 연산할 수 있다',
          '다른 크기의 배열 간 연산 시 자동으로 크기를 맞춘다',
          '항상 에러가 발생한다',
          '1차원 배열에서만 작동한다'
        ],
        optionsEn: [
          'Only arrays of the same size can be used in operations',
          'It automatically matches sizes when operating on arrays of different sizes',
          'It always raises an error',
          'It only works with 1-dimensional arrays'
        ],
        correct: 1,
        explanation: '브로드캐스팅은 형상이 다른 배열 간 연산 시, 작은 배열을 큰 배열에 맞게 자동 확장하는 규칙입니다.',
        explanationEn: 'Broadcasting is a rule that automatically expands smaller arrays to match larger arrays when operating on arrays with different shapes.'
      },
      {
        question: 'Pandas에서 DataFrame의 특정 열로 그룹화하는 코드는?',
        questionEn: 'Which code groups a DataFrame by a specific column in Pandas?',
        code: "df = pd.DataFrame({'city': ['서울','부산','서울'], 'sales': [100,200,300]})",
        options: [
          "df.group('city').sum()",
          "df.groupby('city').sum()",
          "df.aggregate('city').sum()",
          "df.pivot('city').sum()"
        ],
        optionsEn: [
          "df.group('city').sum()",
          "df.groupby('city').sum()",
          "df.aggregate('city').sum()",
          "df.pivot('city').sum()"
        ],
        correct: 1,
        explanation: "groupby()는 지정한 열의 값을 기준으로 데이터를 그룹화합니다.",
        explanationEn: "groupby() groups data based on the values of the specified column."
      },
      {
        question: 'Pandas에서 CSV 파일을 읽어오는 함수는?',
        questionEn: 'Which function reads a CSV file in Pandas?',
        options: ['pd.open_csv()', 'pd.load_csv()', 'pd.read_csv()', 'pd.import_csv()'],
        optionsEn: ['pd.open_csv()', 'pd.load_csv()', 'pd.read_csv()', 'pd.import_csv()'],
        correct: 2,
        explanation: 'pd.read_csv()는 CSV 파일을 DataFrame으로 읽어오는 함수입니다.',
        explanationEn: 'pd.read_csv() is the function that reads a CSV file into a DataFrame.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        questionEn: 'What is the output of the following code?',
        code: "import numpy as np\na = np.arange(10)\nprint(a[a > 5])",
        options: ['[True, True, True, True]', '[6 7 8 9]', '[5 6 7 8 9]', '에러 발생'],
        optionsEn: ['[True, True, True, True]', '[6 7 8 9]', '[5 6 7 8 9]', 'Error'],
        correct: 1,
        explanation: 'a > 5는 불리언 마스크를 생성하고, 이를 인덱싱에 사용하면 조건을 만족하는 요소만 추출합니다.',
        explanationEn: 'a > 5 creates a boolean mask, and using it for indexing extracts only elements that satisfy the condition.'
      },
      {
        question: 'Matplotlib에서 선 그래프를 그리는 함수는?',
        questionEn: 'Which function draws a line graph in Matplotlib?',
        options: ['plt.bar()', 'plt.plot()', 'plt.scatter()', 'plt.line()'],
        optionsEn: ['plt.bar()', 'plt.plot()', 'plt.scatter()', 'plt.line()'],
        correct: 1,
        explanation: 'plt.plot()은 선 그래프를 그리는 기본 함수입니다. x, y 데이터를 전달하여 사용합니다.',
        explanationEn: 'plt.plot() is the basic function for drawing line graphs. You pass x and y data to use it.'
      },
      {
        question: 'Seaborn에서 상관관계를 색상으로 시각화하는 차트는?',
        questionEn: 'Which Seaborn chart visualizes correlations using colors?',
        options: ['sns.barplot()', 'sns.boxplot()', 'sns.heatmap()', 'sns.pairplot()'],
        optionsEn: ['sns.barplot()', 'sns.boxplot()', 'sns.heatmap()', 'sns.pairplot()'],
        correct: 2,
        explanation: 'sns.heatmap()은 행렬 데이터를 색상으로 시각화하며, 상관관계 분석에 자주 사용됩니다.',
        explanationEn: 'sns.heatmap() visualizes matrix data with colors and is commonly used for correlation analysis.'
      },
      {
        question: 'Scikit-learn에서 데이터를 학습/테스트로 나누는 함수는?',
        questionEn: 'Which function splits data into training/test sets in Scikit-learn?',
        code: 'from sklearn.model_selection import ???',
        options: ['data_split', 'train_test_split', 'split_data', 'cross_validate'],
        optionsEn: ['data_split', 'train_test_split', 'split_data', 'cross_validate'],
        correct: 1,
        explanation: 'train_test_split()은 데이터를 학습용과 테스트용으로 분리하는 함수입니다.',
        explanationEn: 'train_test_split() is the function that separates data into training and test sets.'
      },
      {
        question: '머신러닝에서 모델이 학습 데이터에만 너무 맞춰지는 현상은?',
        questionEn: 'What is the phenomenon where a model fits too closely to training data?',
        options: ['과소적합 (Underfitting)', '과적합 (Overfitting)', '정규화 (Normalization)', '교차검증 (Cross-validation)'],
        optionsEn: ['Underfitting', 'Overfitting', 'Normalization', 'Cross-validation'],
        correct: 1,
        explanation: '과적합(Overfitting)은 모델이 학습 데이터를 "암기"하여 새로운 데이터에 대한 일반화 능력이 떨어지는 현상입니다.',
        explanationEn: 'Overfitting occurs when a model "memorizes" the training data, resulting in poor generalization ability on new data.'
      },
      {
        question: 'TensorFlow/Keras에서 Sequential 모델에 층을 추가하는 올바른 코드는?',
        questionEn: 'Which code correctly adds a layer to a Sequential model in TensorFlow/Keras?',
        options: [
          'model.add(keras.layers.Dense(128))',
          'model.layer(Dense(128))',
          'model.append(Layer(128))',
          'model.insert(Dense(128))'
        ],
        optionsEn: [
          'model.add(keras.layers.Dense(128))',
          'model.layer(Dense(128))',
          'model.append(Layer(128))',
          'model.insert(Dense(128))'
        ],
        correct: 0,
        explanation: 'Sequential 모델은 model.add()로 층을 하나씩 추가하거나, 리스트로 한번에 전달할 수 있습니다.',
        explanationEn: 'Sequential models add layers one at a time using model.add(), or you can pass them all at once as a list.'
      },
      {
        question: 'PyTorch에서 역전파(Backpropagation)를 수행하는 메서드는?',
        questionEn: 'Which method performs backpropagation in PyTorch?',
        options: ['loss.backward()', 'loss.backprop()', 'model.backward()', 'optimizer.backward()'],
        optionsEn: ['loss.backward()', 'loss.backprop()', 'model.backward()', 'optimizer.backward()'],
        correct: 0,
        explanation: 'loss.backward()는 손실값에서 역전파를 수행하여 각 파라미터의 기울기(gradient)를 계산합니다.',
        explanationEn: 'loss.backward() performs backpropagation from the loss value and computes the gradient for each parameter.'
      },
      {
        question: '딥러닝에서 가장 많이 사용되는 은닉층 활성화 함수는?',
        questionEn: 'What is the most commonly used activation function for hidden layers in deep learning?',
        options: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
        optionsEn: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
        correct: 2,
        explanation: 'ReLU(Rectified Linear Unit)는 max(0, x)로 계산이 빠르고 기울기 소실 문제를 해결하여 은닉층에서 가장 많이 사용됩니다.',
        explanationEn: 'ReLU (Rectified Linear Unit) computes max(0, x), is fast to calculate, and solves the vanishing gradient problem, making it the most widely used in hidden layers.'
      }
    ]
  },

  'lib-standard': {
    title: '표준 라이브러리 퀴즈',
    titleEn: 'Standard Library Quiz',
    description: 'os/sys, math/cmath, json, datetime 등 파이썬 표준 라이브러리 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of os/sys, math/cmath, json, datetime standard libraries',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'os.path.join()의 주요 용도는?',
        questionEn: 'What is the main use of os.path.join()?',
        code: "import os\npath = os.path.join('home', 'user', 'file.txt')",
        options: [
          '파일을 병합한다',
          '운영체제에 맞는 경로 구분자로 경로를 결합한다',
          '파일 확장자를 결합한다',
          '디렉토리를 생성한다'
        ],
        optionsEn: [
          'Merges files',
          'Joins paths using OS-appropriate path separators',
          'Joins file extensions',
          'Creates directories'
        ],
        correct: 1,
        explanation: 'os.path.join()은 운영체제에 맞는 구분자(/, \\)를 사용하여 경로를 안전하게 결합합니다.',
        explanationEn: 'os.path.join() safely joins paths using the OS-appropriate separator (/ or \\).'
      },
      {
        question: 'sys.argv는 무엇을 담고 있는가?',
        questionEn: 'What does sys.argv contain?',
        code: 'import sys\nprint(sys.argv)',
        options: [
          '현재 파이썬 버전 정보',
          '명령줄에서 전달된 인자 리스트',
          '시스템 환경 변수 목록',
          '설치된 모듈 리스트'
        ],
        optionsEn: [
          'Current Python version information',
          'A list of arguments passed from the command line',
          'A list of system environment variables',
          'A list of installed modules'
        ],
        correct: 1,
        explanation: 'sys.argv는 스크립트 실행 시 명령줄에서 전달된 인자들을 리스트로 담고 있으며, argv[0]은 스크립트 이름입니다.',
        explanationEn: 'sys.argv contains the arguments passed from the command line as a list. argv[0] is the script name.'
      },
      {
        question: 'os.listdir() 함수의 반환값 타입은?',
        questionEn: 'What is the return type of the os.listdir() function?',
        code: "import os\nresult = os.listdir('.')",
        options: [
          '튜플 (tuple)',
          '딕셔너리 (dict)',
          '리스트 (list)',
          '제너레이터 (generator)'
        ],
        optionsEn: [
          'Tuple',
          'Dictionary',
          'List',
          'Generator'
        ],
        correct: 2,
        explanation: 'os.listdir()는 지정 디렉토리의 파일/폴더 이름을 문자열 리스트로 반환합니다.',
        explanationEn: 'os.listdir() returns the file/folder names in the specified directory as a list of strings.'
      },
      {
        question: 'math.sqrt(16)의 결과는?',
        questionEn: 'What is the result of math.sqrt(16)?',
        code: 'import math\nprint(math.sqrt(16))',
        options: ['4', '4.0', '16', '256'],
        optionsEn: ['4', '4.0', '16', '256'],
        correct: 1,
        explanation: 'math.sqrt()는 항상 float를 반환합니다. sqrt(16)은 4.0입니다.',
        explanationEn: 'math.sqrt() always returns a float. sqrt(16) is 4.0.'
      },
      {
        question: 'math.pi의 값으로 올바른 것은?',
        questionEn: 'Which is the correct value of math.pi?',
        options: ['3.14', '3.141592653589793', '3.1416', '정수 3'],
        optionsEn: ['3.14', '3.141592653589793', '3.1416', 'Integer 3'],
        correct: 1,
        explanation: 'math.pi는 원주율을 가능한 최대 정밀도로 제공하며, 약 3.141592653589793입니다.',
        explanationEn: 'math.pi provides the value of pi with maximum available precision, approximately 3.141592653589793.'
      },
      {
        question: 'cmath 모듈이 math 모듈과 다른 점은?',
        questionEn: 'How does the cmath module differ from the math module?',
        options: [
          '더 빠른 연산을 제공한다',
          '복소수(complex number) 연산을 지원한다',
          'C 언어로 작성되었다',
          '정수만 처리할 수 있다'
        ],
        optionsEn: [
          'It provides faster operations',
          'It supports complex number operations',
          'It is written in C',
          'It can only process integers'
        ],
        correct: 1,
        explanation: 'cmath는 복소수 연산을 지원합니다. 예를 들어 cmath.sqrt(-1)은 1j를 반환합니다.',
        explanationEn: 'cmath supports complex number operations. For example, cmath.sqrt(-1) returns 1j.'
      },
      {
        question: 'json.dumps()와 json.dump()의 차이는?',
        questionEn: 'What is the difference between json.dumps() and json.dump()?',
        code: 'import json\ndata = {"name": "Kim"}',
        options: [
          'dumps()는 파일에, dump()는 문자열로 변환',
          'dumps()는 문자열로 반환, dump()는 파일에 작성',
          '차이가 없다',
          'dumps()는 리스트만, dump()는 딕셔너리만 처리'
        ],
        optionsEn: [
          'dumps() writes to a file, dump() converts to a string',
          'dumps() returns a string, dump() writes to a file',
          'There is no difference',
          'dumps() only handles lists, dump() only handles dictionaries'
        ],
        correct: 1,
        explanation: 'json.dumps()는 JSON 문자열을 반환(s=string)하고, json.dump()는 파일 객체에 직접 씁니다.',
        explanationEn: 'json.dumps() returns a JSON string (s=string), while json.dump() writes directly to a file object.'
      },
      {
        question: 'json.loads()의 반환 타입으로 올바른 것은?',
        questionEn: 'What is the correct return type of json.loads()?',
        code: 'import json\nresult = json.loads(\'{"a": 1, "b": [2, 3]}\')',
        options: [
          '항상 문자열',
          'JSON 객체',
          '파이썬 딕셔너리 (또는 리스트 등 파이썬 객체)',
          '항상 리스트'
        ],
        optionsEn: [
          'Always a string',
          'A JSON object',
          'A Python dictionary (or list or other Python object)',
          'Always a list'
        ],
        correct: 2,
        explanation: 'json.loads()는 JSON 문자열을 파이썬 객체로 변환합니다. JSON 객체는 dict, 배열은 list가 됩니다.',
        explanationEn: 'json.loads() converts a JSON string into a Python object. JSON objects become dicts, arrays become lists.'
      },
      {
        question: '현재 날짜와 시간을 가져오는 올바른 코드는?',
        questionEn: 'Which code correctly gets the current date and time?',
        code: 'from datetime import datetime',
        options: [
          'datetime.now()',
          'datetime.current()',
          'datetime.today_time()',
          'datetime.get_now()'
        ],
        optionsEn: [
          'datetime.now()',
          'datetime.current()',
          'datetime.today_time()',
          'datetime.get_now()'
        ],
        correct: 0,
        explanation: 'datetime.now()는 현재 날짜와 시간을 datetime 객체로 반환합니다.',
        explanationEn: 'datetime.now() returns the current date and time as a datetime object.'
      },
      {
        question: 'timedelta를 사용한 날짜 연산의 결과는?',
        questionEn: 'What is the result of this date calculation using timedelta?',
        code: 'from datetime import datetime, timedelta\ntoday = datetime(2024, 1, 1)\nresult = today + timedelta(days=7)\nprint(result.strftime("%Y-%m-%d"))',
        options: ['2024-01-07', '2024-01-08', '2024-07-01', '에러 발생'],
        optionsEn: ['2024-01-07', '2024-01-08', '2024-07-01', 'Error'],
        correct: 1,
        explanation: 'timedelta(days=7)은 7일을 더합니다. 1월 1일 + 7일 = 1월 8일입니다.',
        explanationEn: 'timedelta(days=7) adds 7 days. January 1 + 7 days = January 8.'
      }
    ]
  },

  'lib-turtle': {
    title: 'Turtle 그래픽 퀴즈',
    titleEn: 'Turtle Graphics Quiz',
    description: 'turtle 모듈을 활용한 그래픽 프로그래밍 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of graphics programming with the turtle module',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'turtle로 정사각형을 그리는 올바른 코드는?',
        questionEn: 'Which code correctly draws a square with turtle?',
        code: 'import turtle\nt = turtle.Turtle()',
        options: [
          'for i in range(4):\n    t.forward(100)\n    t.right(90)',
          'for i in range(4):\n    t.forward(100)\n    t.right(60)',
          'for i in range(4):\n    t.forward(100)\n    t.left(45)',
          't.square(100)'
        ],
        optionsEn: [
          'for i in range(4):\n    t.forward(100)\n    t.right(90)',
          'for i in range(4):\n    t.forward(100)\n    t.right(60)',
          'for i in range(4):\n    t.forward(100)\n    t.left(45)',
          't.square(100)'
        ],
        correct: 0,
        explanation: '정사각형은 4번 반복하며 100만큼 전진 후 90도 회전하면 됩니다. 외각이 90도입니다.',
        explanationEn: 'A square is drawn by repeating 4 times: move forward 100 and turn 90 degrees. The exterior angle is 90 degrees.'
      },
      {
        question: 'turtle.circle() 함수의 매개변수 의미는?',
        questionEn: 'What does the parameter of turtle.circle() mean?',
        code: 't.circle(50)',
        options: [
          'circle(지름)',
          'circle(반지름)',
          'circle(넓이)',
          'circle(둘레)'
        ],
        optionsEn: [
          'circle(diameter)',
          'circle(radius)',
          'circle(area)',
          'circle(circumference)'
        ],
        correct: 1,
        explanation: 'turtle.circle(radius)에서 매개변수는 반지름입니다. circle(50)은 반지름 50인 원을 그립니다.',
        explanationEn: 'In turtle.circle(radius), the parameter is the radius. circle(50) draws a circle with radius 50.'
      },
      {
        question: 'begin_fill()과 end_fill()의 역할은?',
        questionEn: 'What is the role of begin_fill() and end_fill()?',
        code: 't.fillcolor("red")\nt.begin_fill()\nt.circle(50)\nt.end_fill()',
        options: [
          '도형의 윤곽선 색을 설정한다',
          '도형 내부를 지정한 색으로 채운다',
          '배경색을 변경한다',
          '텍스트를 채운다'
        ],
        optionsEn: [
          'Sets the outline color of shapes',
          'Fills the inside of shapes with a specified color',
          'Changes the background color',
          'Fills text'
        ],
        correct: 1,
        explanation: 'begin_fill()과 end_fill() 사이에 그린 도형을 fillcolor로 지정한 색으로 채웁니다.',
        explanationEn: 'Shapes drawn between begin_fill() and end_fill() are filled with the color specified by fillcolor.'
      },
      {
        question: 'penup()과 pendown()의 역할은?',
        questionEn: 'What is the role of penup() and pendown()?',
        options: [
          '펜의 굵기를 조절한다',
          '펜의 색상을 변경한다',
          '이동 시 선을 그리지 않거나 / 다시 그리게 한다',
          '펜의 모양을 변경한다'
        ],
        optionsEn: [
          'Adjusts the pen thickness',
          'Changes the pen color',
          'Stops drawing when moving / resumes drawing',
          'Changes the pen shape'
        ],
        correct: 2,
        explanation: 'penup()은 펜을 들어 이동 시 선을 그리지 않고, pendown()은 펜을 내려 다시 선을 그립니다.',
        explanationEn: 'penup() lifts the pen so no line is drawn when moving, and pendown() lowers the pen to resume drawing.'
      },
      {
        question: 'speed(0)의 의미는?',
        questionEn: 'What does speed(0) mean?',
        options: [
          '거북이가 멈춘다',
          '가장 느린 속도',
          '가장 빠른 속도 (애니메이션 없음)',
          '기본 속도'
        ],
        optionsEn: [
          'The turtle stops',
          'Slowest speed',
          'Fastest speed (no animation)',
          'Default speed'
        ],
        correct: 2,
        explanation: 'speed(0)은 가장 빠른 속도로, 애니메이션 없이 즉시 그립니다. speed(1)이 가장 느립니다.',
        explanationEn: 'speed(0) is the fastest speed, drawing instantly with no animation. speed(1) is the slowest.'
      },
      {
        question: 'onscreenclick 이벤트의 사용법으로 올바른 것은?',
        questionEn: 'Which is the correct usage of the onscreenclick event?',
        code: 'import turtle\nscreen = turtle.Screen()',
        options: [
          'screen.onscreenclick(lambda x, y: t.goto(x, y))',
          'screen.onclick(t.goto)',
          'screen.click_event(t.goto)',
          'screen.addEventListener("click", t.goto)'
        ],
        optionsEn: [
          'screen.onscreenclick(lambda x, y: t.goto(x, y))',
          'screen.onclick(t.goto)',
          'screen.click_event(t.goto)',
          'screen.addEventListener("click", t.goto)'
        ],
        correct: 0,
        explanation: 'onscreenclick()은 화면 클릭 시 콜백 함수를 호출하며, x, y 좌표가 전달됩니다.',
        explanationEn: 'onscreenclick() calls a callback function when the screen is clicked, passing the x and y coordinates.'
      },
      {
        question: '별(★)을 그릴 때 각 꼭짓점에서 회전해야 하는 각도는?',
        questionEn: 'What angle should you turn at each vertex when drawing a star?',
        code: '# 오각별 그리기\nfor i in range(5):\n    t.forward(100)\n    t.right(???)',
        options: ['72도', '108도', '144도', '120도'],
        optionsEn: ['72 degrees', '108 degrees', '144 degrees', '120 degrees'],
        correct: 2,
        explanation: '오각별은 각 꼭짓점에서 144도(= 180 - 36)를 회전합니다. 외각의 합이 720도(2바퀴)입니다.',
        explanationEn: 'A five-pointed star turns 144 degrees (= 180 - 36) at each vertex. The sum of exterior angles is 720 degrees (2 full turns).'
      },
      {
        question: 'goto(x, y) 함수의 동작은?',
        questionEn: 'What does the goto(x, y) function do?',
        code: 't.goto(100, 200)',
        options: [
          '현재 위치에서 (100, 200)만큼 상대 이동',
          '절대 좌표 (100, 200)으로 이동',
          '100픽셀 전진 후 200도 회전',
          '속도를 100으로 설정하고 200만큼 이동'
        ],
        optionsEn: [
          'Moves relatively by (100, 200) from current position',
          'Moves to absolute coordinates (100, 200)',
          'Moves forward 100 pixels then rotates 200 degrees',
          'Sets speed to 100 and moves 200 units'
        ],
        correct: 1,
        explanation: 'goto(x, y)는 절대 좌표 (x, y)로 거북이를 이동시킵니다. penup 상태가 아니면 선이 그려집니다.',
        explanationEn: 'goto(x, y) moves the turtle to absolute coordinates (x, y). A line is drawn unless the pen is up.'
      },
      {
        question: 'screen.setup()의 매개변수 의미는?',
        questionEn: 'What do the parameters of screen.setup() mean?',
        code: 'screen.setup(width=800, height=600)',
        options: [
          '거북이 크기 설정',
          '캔버스(창) 크기를 픽셀 단위로 설정',
          '펜 굵기와 색상 설정',
          '그리기 속도 설정'
        ],
        optionsEn: [
          'Sets the turtle size',
          'Sets the canvas (window) size in pixels',
          'Sets pen thickness and color',
          'Sets drawing speed'
        ],
        correct: 1,
        explanation: 'screen.setup(width, height)는 turtle 그래픽 창의 크기를 픽셀 단위로 설정합니다.',
        explanationEn: 'screen.setup(width, height) sets the turtle graphics window size in pixels.'
      },
      {
        question: 'shape() 함수에 사용할 수 있는 기본 모양이 아닌 것은?',
        questionEn: 'Which is NOT a built-in shape available for the shape() function?',
        code: 't.shape("turtle")',
        options: ['"arrow"', '"turtle"', '"star"', '"circle"'],
        optionsEn: ['"arrow"', '"turtle"', '"star"', '"circle"'],
        correct: 2,
        explanation: '기본 제공 모양은 "arrow", "turtle", "circle", "square", "triangle", "classic"입니다. "star"는 기본 제공되지 않습니다.',
        explanationEn: 'The built-in shapes are "arrow", "turtle", "circle", "square", "triangle", and "classic". "star" is not provided by default.'
      }
    ]
  },

  'lib-data': {
    title: '데이터 분석 퀴즈',
    titleEn: 'Data Analysis Quiz',
    description: 'NumPy, Pandas, Matplotlib/Seaborn 등 데이터 분석 라이브러리를 테스트합니다',
    descriptionEn: 'Test your knowledge of NumPy, Pandas, Matplotlib/Seaborn data analysis libraries',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'np.linspace()와 np.arange()의 차이는?',
        questionEn: 'What is the difference between np.linspace() and np.arange()?',
        code: 'import numpy as np\na = np.linspace(0, 1, 5)\nb = np.arange(0, 1, 0.25)',
        options: [
          '차이가 없다',
          'linspace는 개수를, arange는 간격을 지정한다',
          'linspace는 정수만, arange는 실수만 생성한다',
          'linspace는 2차원, arange는 1차원 배열을 생성한다'
        ],
        optionsEn: [
          'There is no difference',
          'linspace specifies the count, arange specifies the step',
          'linspace creates only integers, arange creates only floats',
          'linspace creates 2D arrays, arange creates 1D arrays'
        ],
        correct: 1,
        explanation: 'np.linspace(start, stop, num)은 원소 개수를, np.arange(start, stop, step)은 간격을 지정합니다.',
        explanationEn: 'np.linspace(start, stop, num) specifies the number of elements, while np.arange(start, stop, step) specifies the step size.'
      },
      {
        question: 'np.reshape()의 올바른 사용법은?',
        questionEn: 'Which is the correct usage of np.reshape()?',
        code: 'import numpy as np\na = np.arange(12)',
        options: [
          'a.reshape(3, 4)',
          'a.reshape(3)',
          'a.reshape(5, 3)',
          'a.reshape(2, 2)'
        ],
        optionsEn: [
          'a.reshape(3, 4)',
          'a.reshape(3)',
          'a.reshape(5, 3)',
          'a.reshape(2, 2)'
        ],
        correct: 0,
        explanation: 'reshape의 전체 원소 수가 일치해야 합니다. 12개 원소는 (3,4), (4,3), (2,6), (6,2) 등으로 변환 가능합니다.',
        explanationEn: 'The total number of elements must match for reshape. 12 elements can be reshaped to (3,4), (4,3), (2,6), (6,2), etc.'
      },
      {
        question: 'ndarray.dtype 속성은 무엇을 나타내는가?',
        questionEn: 'What does the ndarray.dtype attribute represent?',
        code: 'import numpy as np\na = np.array([1.0, 2.0, 3.0])\nprint(a.dtype)',
        options: [
          '배열의 차원 수',
          '배열의 크기 (원소 개수)',
          '배열 원소의 데이터 타입',
          '배열의 메모리 주소'
        ],
        optionsEn: [
          'The number of dimensions of the array',
          'The size of the array (number of elements)',
          'The data type of the array elements',
          'The memory address of the array'
        ],
        correct: 2,
        explanation: 'dtype은 배열 원소의 데이터 타입(int32, float64 등)을 나타냅니다.',
        explanationEn: 'dtype represents the data type of array elements (int32, float64, etc.).'
      },
      {
        question: 'pd.Series와 pd.DataFrame의 관계로 올바른 것은?',
        questionEn: 'Which statement about the relationship between pd.Series and pd.DataFrame is correct?',
        options: [
          'Series는 2차원, DataFrame은 1차원이다',
          'Series는 1차원이고, DataFrame은 여러 Series로 구성된 2차원 구조이다',
          'Series와 DataFrame은 동일하다',
          'Series는 숫자만, DataFrame은 문자만 저장한다'
        ],
        optionsEn: [
          'Series is 2D, DataFrame is 1D',
          'Series is 1D, and DataFrame is a 2D structure composed of multiple Series',
          'Series and DataFrame are identical',
          'Series stores only numbers, DataFrame stores only strings'
        ],
        correct: 1,
        explanation: 'Series는 인덱스가 있는 1차원 배열이고, DataFrame은 여러 Series(열)로 구성된 2차원 테이블입니다.',
        explanationEn: 'Series is a 1D array with an index, and DataFrame is a 2D table composed of multiple Series (columns).'
      },
      {
        question: 'df.describe()가 반환하는 정보가 아닌 것은?',
        questionEn: 'Which information is NOT returned by df.describe()?',
        code: 'import pandas as pd\ndf = pd.DataFrame({"A": [1,2,3,4,5]})\nprint(df.describe())',
        options: [
          '평균 (mean)',
          '표준편차 (std)',
          '중앙값 (50%)',
          '최빈값 (mode)'
        ],
        optionsEn: [
          'Mean',
          'Standard deviation (std)',
          'Median (50%)',
          'Mode'
        ],
        correct: 3,
        explanation: 'df.describe()는 count, mean, std, min, 25%, 50%, 75%, max를 반환합니다. 최빈값(mode)은 포함되지 않습니다.',
        explanationEn: 'df.describe() returns count, mean, std, min, 25%, 50%, 75%, and max. Mode is not included.'
      },
      {
        question: 'df.dropna()와 df.fillna()의 차이는?',
        questionEn: 'What is the difference between df.dropna() and df.fillna()?',
        options: [
          '둘 다 결측치를 삭제한다',
          'dropna는 결측치 행/열을 삭제하고, fillna는 결측치를 지정 값으로 대체한다',
          'dropna는 0으로, fillna는 NaN으로 채운다',
          '차이가 없다'
        ],
        optionsEn: [
          'Both delete missing values',
          'dropna deletes rows/columns with missing values, fillna replaces missing values with a specified value',
          'dropna fills with 0, fillna fills with NaN',
          'There is no difference'
        ],
        correct: 1,
        explanation: 'dropna()는 NaN이 있는 행/열을 삭제하고, fillna(value)는 NaN을 지정한 값으로 대체합니다.',
        explanationEn: 'dropna() removes rows/columns containing NaN, and fillna(value) replaces NaN with the specified value.'
      },
      {
        question: 'df.merge()에서 how 매개변수의 기본값은?',
        questionEn: 'What is the default value of the how parameter in df.merge()?',
        code: "pd.merge(df1, df2, on='key')",
        options: [
          "'left'",
          "'right'",
          "'inner'",
          "'outer'"
        ],
        optionsEn: [
          "'left'",
          "'right'",
          "'inner'",
          "'outer'"
        ],
        correct: 2,
        explanation: "merge()의 how 기본값은 'inner'로, 양쪽 DataFrame에 모두 존재하는 키만 결합합니다.",
        explanationEn: "The default value of how in merge() is 'inner', which only joins keys that exist in both DataFrames."
      },
      {
        question: 'plt.subplot()의 매개변수 의미는?',
        questionEn: 'What do the parameters of plt.subplot() mean?',
        code: 'import matplotlib.pyplot as plt\nplt.subplot(2, 3, 1)',
        options: [
          '2행 3열 격자의 1번째 위치',
          '2개의 그래프를 3:1 비율로',
          'x축 2, y축 3, 데이터 1',
          '2번째 행, 3번째 열, 1번째 그래프'
        ],
        optionsEn: [
          '1st position in a 2-row, 3-column grid',
          '2 graphs in 3:1 ratio',
          'x-axis 2, y-axis 3, data 1',
          '2nd row, 3rd column, 1st graph'
        ],
        correct: 0,
        explanation: 'subplot(rows, cols, index)는 rows×cols 격자에서 index 위치에 서브플롯을 생성합니다. 인덱스는 1부터 시작합니다.',
        explanationEn: 'subplot(rows, cols, index) creates a subplot at the index position in a rows x cols grid. The index starts from 1.'
      },
      {
        question: 'plt.savefig()의 용도는?',
        questionEn: 'What is plt.savefig() used for?',
        code: "plt.savefig('chart.png', dpi=300)",
        options: [
          '그래프를 화면에 표시한다',
          '그래프를 이미지 파일로 저장한다',
          '데이터를 파일로 저장한다',
          '그래프 설정을 저장한다'
        ],
        optionsEn: [
          'Displays the graph on screen',
          'Saves the graph as an image file',
          'Saves data to a file',
          'Saves graph settings'
        ],
        correct: 1,
        explanation: 'plt.savefig()는 현재 그래프를 PNG, PDF, SVG 등의 이미지 파일로 저장합니다.',
        explanationEn: 'plt.savefig() saves the current graph as an image file in PNG, PDF, SVG, or other formats.'
      },
      {
        question: 'sns.pairplot()의 용도는?',
        questionEn: 'What is sns.pairplot() used for?',
        code: 'import seaborn as sns\nsns.pairplot(df)',
        options: [
          '두 변수 간의 막대그래프를 그린다',
          '데이터프레임의 모든 수치형 변수 쌍의 산점도를 한번에 시각화한다',
          '히트맵을 그린다',
          '박스플롯을 그린다'
        ],
        optionsEn: [
          'Draws bar charts between two variables',
          'Visualizes scatter plots for all numeric variable pairs in a DataFrame at once',
          'Draws a heatmap',
          'Draws a box plot'
        ],
        correct: 1,
        explanation: 'sns.pairplot()은 데이터프레임의 모든 수치형 열 쌍에 대해 산점도(대각선은 히스토그램)를 한번에 그립니다.',
        explanationEn: 'sns.pairplot() draws scatter plots for all numeric column pairs (histograms on the diagonal) in a DataFrame at once.'
      }
    ]
  },

  'lib-ai': {
    title: 'AI/머신러닝 퀴즈',
    titleEn: 'AI/ML Quiz',
    description: 'Scikit-learn, TensorFlow, PyTorch 등 AI/ML 라이브러리 지식을 테스트합니다',
    descriptionEn: 'Test your knowledge of Scikit-learn, TensorFlow, PyTorch AI/ML libraries',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: '지도학습과 비지도학습의 차이로 올바른 것은?',
        questionEn: 'Which statement about the difference between supervised and unsupervised learning is correct?',
        options: [
          '지도학습은 빠르고, 비지도학습은 느리다',
          '지도학습은 정답(레이블)이 있는 데이터로, 비지도학습은 정답 없이 학습한다',
          '지도학습은 분류만, 비지도학습은 회귀만 가능하다',
          '지도학습은 딥러닝, 비지도학습은 전통 머신러닝이다'
        ],
        optionsEn: [
          'Supervised learning is fast, unsupervised learning is slow',
          'Supervised learning uses labeled data, unsupervised learning learns without labels',
          'Supervised learning can only classify, unsupervised learning can only regress',
          'Supervised learning is deep learning, unsupervised learning is traditional ML'
        ],
        correct: 1,
        explanation: '지도학습(Supervised)은 입력-출력 쌍으로 학습하고, 비지도학습(Unsupervised)은 레이블 없이 데이터의 구조를 파악합니다.',
        explanationEn: 'Supervised learning trains with input-output pairs, while unsupervised learning discovers data structure without labels.'
      },
      {
        question: 'KNN(K-Nearest Neighbors) 알고리즘의 원리는?',
        questionEn: 'What is the principle of the KNN (K-Nearest Neighbors) algorithm?',
        options: [
          '데이터를 트리 구조로 분할한다',
          '새 데이터와 가장 가까운 K개의 이웃을 찾아 다수결로 분류한다',
          '가중치를 역전파로 학습한다',
          '데이터를 군집으로 묶는다'
        ],
        optionsEn: [
          'Splits data into a tree structure',
          'Finds the K nearest neighbors to new data and classifies by majority vote',
          'Learns weights through backpropagation',
          'Groups data into clusters'
        ],
        correct: 1,
        explanation: 'KNN은 새로운 데이터 포인트에서 가장 가까운 K개의 이웃을 찾고, 다수결(분류) 또는 평균(회귀)으로 예측합니다.',
        explanationEn: 'KNN finds the K nearest neighbors to a new data point and predicts by majority vote (classification) or average (regression).'
      },
      {
        question: 'DecisionTree(결정트리)의 장점이 아닌 것은?',
        questionEn: 'Which is NOT an advantage of DecisionTree?',
        options: [
          '결과를 시각적으로 해석하기 쉽다',
          '특성 스케일링이 불필요하다',
          '과적합에 강하다',
          '범주형과 수치형 데이터 모두 처리 가능하다'
        ],
        optionsEn: [
          'Results are easy to interpret visually',
          'Feature scaling is not required',
          'It is resistant to overfitting',
          'It can handle both categorical and numerical data'
        ],
        correct: 2,
        explanation: '결정트리는 해석이 쉽고 스케일링이 불필요하지만, 과적합(overfitting)에 취약하다는 단점이 있습니다.',
        explanationEn: 'Decision trees are easy to interpret and do not require scaling, but they are prone to overfitting.'
      },
      {
        question: 'confusion_matrix에서 True Positive(TP)의 의미는?',
        questionEn: 'What does True Positive (TP) mean in a confusion matrix?',
        code: 'from sklearn.metrics import confusion_matrix',
        options: [
          '실제 양성을 양성으로 올바르게 예측',
          '실제 음성을 양성으로 잘못 예측',
          '실제 양성을 음성으로 잘못 예측',
          '실제 음성을 음성으로 올바르게 예측'
        ],
        optionsEn: [
          'Correctly predicted actual positive as positive',
          'Incorrectly predicted actual negative as positive',
          'Incorrectly predicted actual positive as negative',
          'Correctly predicted actual negative as negative'
        ],
        correct: 0,
        explanation: 'True Positive는 실제 양성(Positive)인 데이터를 양성으로 올바르게(True) 예측한 경우입니다.',
        explanationEn: 'True Positive is when actual positive data is correctly (True) predicted as positive.'
      },
      {
        question: 'accuracy_score의 계산 방법은?',
        questionEn: 'How is accuracy_score calculated?',
        code: 'from sklearn.metrics import accuracy_score\naccuracy_score(y_true, y_pred)',
        options: [
          'TP / (TP + FP)',
          'TP / (TP + FN)',
          '(TP + TN) / 전체 샘플 수',
          'TN / (TN + FP)'
        ],
        optionsEn: [
          'TP / (TP + FP)',
          'TP / (TP + FN)',
          '(TP + TN) / Total number of samples',
          'TN / (TN + FP)'
        ],
        correct: 2,
        explanation: 'accuracy = (TP + TN) / 전체 = 올바르게 예측한 수 / 전체 샘플 수 입니다.',
        explanationEn: 'accuracy = (TP + TN) / total = number of correct predictions / total number of samples.'
      },
      {
        question: 'Keras model.compile()의 필수 매개변수가 아닌 것은?',
        questionEn: 'Which is NOT a required parameter of Keras model.compile()?',
        code: "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])",
        options: [
          'optimizer',
          'loss',
          'metrics',
          'batch_size'
        ],
        optionsEn: [
          'optimizer',
          'loss',
          'metrics',
          'batch_size'
        ],
        correct: 3,
        explanation: 'compile()에는 optimizer와 loss가 필수이고 metrics는 선택입니다. batch_size는 fit()의 매개변수입니다.',
        explanationEn: 'compile() requires optimizer and loss, while metrics is optional. batch_size is a parameter of fit().'
      },
      {
        question: 'Adam optimizer의 특징으로 올바른 것은?',
        questionEn: 'Which statement about the Adam optimizer is correct?',
        options: [
          '항상 SGD보다 느리다',
          'Momentum과 RMSProp을 결합한 적응적 학습률 옵티마이저이다',
          '학습률을 수동으로 조정해야 한다',
          '이진 분류에서만 사용할 수 있다'
        ],
        optionsEn: [
          'It is always slower than SGD',
          'It is an adaptive learning rate optimizer combining Momentum and RMSProp',
          'The learning rate must be manually adjusted',
          'It can only be used for binary classification'
        ],
        correct: 1,
        explanation: 'Adam은 Momentum(관성)과 RMSProp(적응적 학습률)을 결합하여, 매개변수별로 학습률을 자동 조정합니다.',
        explanationEn: 'Adam combines Momentum and RMSProp (adaptive learning rate) to automatically adjust the learning rate for each parameter.'
      },
      {
        question: 'loss function 선택 기준으로 올바른 것은?',
        questionEn: 'Which is the correct criterion for choosing a loss function?',
        options: [
          '이진 분류: categorical_crossentropy',
          '다중 분류: binary_crossentropy',
          '이진 분류: binary_crossentropy, 다중 분류: categorical_crossentropy',
          '회귀: crossentropy'
        ],
        optionsEn: [
          'Binary classification: categorical_crossentropy',
          'Multi-class classification: binary_crossentropy',
          'Binary classification: binary_crossentropy, Multi-class: categorical_crossentropy',
          'Regression: crossentropy'
        ],
        correct: 2,
        explanation: '이진 분류는 binary_crossentropy, 다중 분류는 categorical_crossentropy, 회귀는 mse 등을 사용합니다.',
        explanationEn: 'Binary classification uses binary_crossentropy, multi-class uses categorical_crossentropy, and regression uses mse, etc.'
      },
      {
        question: 'epoch와 batch의 차이는?',
        questionEn: 'What is the difference between epoch and batch?',
        code: 'model.fit(X, y, epochs=10, batch_size=32)',
        options: [
          'epoch는 미니배치 크기, batch는 전체 반복 횟수',
          'epoch는 전체 데이터를 한 번 학습하는 것, batch는 한 번에 처리하는 데이터 묶음',
          'epoch와 batch는 같은 의미이다',
          'epoch는 레이어 수, batch는 뉴런 수이다'
        ],
        optionsEn: [
          'Epoch is the mini-batch size, batch is the total number of iterations',
          'Epoch is one pass through the entire dataset, batch is a group of data processed at once',
          'Epoch and batch mean the same thing',
          'Epoch is the number of layers, batch is the number of neurons'
        ],
        correct: 1,
        explanation: 'epoch는 전체 학습 데이터를 한 바퀴 도는 것이고, batch_size는 한 번의 가중치 업데이트에 사용하는 샘플 수입니다.',
        explanationEn: 'An epoch is one complete pass through the entire training dataset, and batch_size is the number of samples used for one weight update.'
      },
      {
        question: 'torch.tensor와 np.array의 핵심 차이는?',
        questionEn: 'What is the key difference between torch.tensor and np.array?',
        code: 'import torch\nimport numpy as np\nt = torch.tensor([1, 2, 3])\na = np.array([1, 2, 3])',
        options: [
          '저장하는 데이터 타입이 다르다',
          'torch.tensor는 GPU 연산과 자동 미분(autograd)을 지원한다',
          'np.array가 더 빠르다',
          'torch.tensor는 1차원만 가능하다'
        ],
        optionsEn: [
          'They store different data types',
          'torch.tensor supports GPU computation and automatic differentiation (autograd)',
          'np.array is faster',
          'torch.tensor can only be 1-dimensional'
        ],
        correct: 1,
        explanation: 'torch.tensor는 GPU 가속과 자동 미분(requires_grad)을 지원하여 딥러닝 학습에 최적화되어 있습니다.',
        explanationEn: 'torch.tensor supports GPU acceleration and automatic differentiation (requires_grad), making it optimized for deep learning training.'
      }
    ]
  }
}
