export const quizzes = {
  basics: {
    title: '파이썬 기초 퀴즈',
    description: '변수, 자료형, 조건문, 반복문, 리스트 등 기초 지식을 테스트합니다',
    timeLimit: 600, // 10분
    passingScore: 70,
    questions: [
      {
        question: '다음 중 파이썬에서 올바른 변수 선언은?',
        options: ['int x = 10', 'x = 10', 'var x = 10', 'let x = 10'],
        correct: 1,
        explanation: '파이썬은 변수 선언 시 타입을 명시하지 않습니다. x = 10처럼 바로 값을 할당합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'print(type(3.14))',
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        correct: 1,
        explanation: '3.14는 소수점이 있으므로 float(부동소수점) 타입입니다.'
      },
      {
        question: "다음 코드의 출력 결과는?",
        code: 'x = "Python"\nprint(x[0:3])',
        options: ['Pyt', 'Pyth', 'yth', 'ytho'],
        correct: 0,
        explanation: '슬라이싱 [0:3]은 인덱스 0부터 2까지(3 미포함)의 문자를 추출합니다.'
      },
      {
        question: '파이썬에서 리스트에 요소를 추가하는 메서드는?',
        options: ['add()', 'push()', 'append()', 'insert_end()'],
        correct: 2,
        explanation: 'append()는 리스트의 끝에 요소를 추가하는 메서드입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'for i in range(1, 6, 2):\n    print(i, end=" ")',
        options: ['1 2 3 4 5', '1 3 5', '2 4 6', '1 2 3'],
        correct: 1,
        explanation: 'range(1, 6, 2)는 1부터 시작하여 2씩 증가하며 6 미만까지의 수열(1, 3, 5)을 생성합니다.'
      },
      {
        question: '다음 중 딕셔너리를 올바르게 생성하는 코드는?',
        options: [
          "d = ['name': 'Kim']",
          "d = {'name': 'Kim'}",
          "d = ('name': 'Kim')",
          "d = <'name': 'Kim'>"
        ],
        correct: 1,
        explanation: '딕셔너리는 중괄호 {}를 사용하고 키:값 쌍으로 구성됩니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'x = [1, 2, 3, 4, 5]\nprint(x[-2])',
        options: ['2', '3', '4', '5'],
        correct: 2,
        explanation: '음수 인덱스는 뒤에서부터 세며, -1은 마지막, -2는 끝에서 두 번째 요소(4)입니다.'
      },
      {
        question: '다음 중 파이썬의 논리 연산자가 아닌 것은?',
        options: ['and', 'or', 'not', '&&'],
        correct: 3,
        explanation: '파이썬은 &&, ||, ! 대신 and, or, not 키워드를 논리 연산자로 사용합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: "name = '파이썬'\nprint(f'안녕, {name}!')",
        options: ["안녕, {name}!", "안녕, 파이썬!", "f'안녕, 파이썬!'", "에러 발생"],
        correct: 1,
        explanation: "f-string은 중괄호 안의 변수를 실제 값으로 치환합니다."
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'nums = [1, 2, 3]\nnums.append([4, 5])\nprint(len(nums))',
        options: ['3', '4', '5', '에러 발생'],
        correct: 1,
        explanation: 'append는 [4, 5] 리스트를 하나의 요소로 추가합니다. 결과는 [1, 2, 3, [4, 5]]로 길이 4입니다.'
      }
    ]
  },

  intermediate: {
    title: '파이썬 중급 퀴즈',
    description: 'OOP, 예외 처리, 파일 I/O, 컴프리헨션 등 중급 지식을 테스트합니다',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: '클래스에서 인스턴스 메서드의 첫 번째 매개변수는?',
        options: ['this', 'self', 'cls', 'instance'],
        correct: 1,
        explanation: '파이썬의 인스턴스 메서드는 관례적으로 첫 번째 매개변수로 self를 사용합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f"Dog: {self.name}"\n\nd = Dog("멍멍이")\nprint(d)',
        options: ['Dog: 멍멍이', '<Dog object>', 'Dog(멍멍이)', '에러 발생'],
        correct: 0,
        explanation: '__str__ 메서드는 print() 호출 시 객체를 문자열로 표현하는 방법을 정의합니다.'
      },
      {
        question: '다음 중 리스트 컴프리헨션의 올바른 사용은?',
        code: '# 1~10의 짝수만 포함하는 리스트',
        options: [
          '[x for x in range(1,11) if x % 2 == 0]',
          '[x if x % 2 == 0 for x in range(1,11)]',
          '[for x in range(1,11) if x % 2 == 0: x]',
          'list(x for x in range(1,11) where x % 2 == 0)'
        ],
        correct: 0,
        explanation: '리스트 컴프리헨션의 조건절은 for 절 뒤에 위치합니다: [표현식 for 변수 in 반복가능 if 조건]'
      },
      {
        question: 'try-except에서 finally 블록의 특징은?',
        options: [
          '예외가 발생했을 때만 실행된다',
          '예외가 발생하지 않았을 때만 실행된다',
          '항상 실행된다',
          'return 문이 있으면 실행되지 않는다'
        ],
        correct: 2,
        explanation: 'finally 블록은 예외 발생 여부와 관계없이 항상 실행됩니다. 주로 리소스 정리에 사용합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'def greet(name, greeting="안녕"):\n    return f"{greeting}, {name}!"\n\nprint(greet("철수"))',
        options: ['안녕, 철수!', '에러 발생', 'None, 철수!', 'greeting, 철수!'],
        correct: 0,
        explanation: 'greeting 매개변수에 기본값 "안녕"이 설정되어 있어, 인자를 전달하지 않으면 기본값이 사용됩니다.'
      },
      {
        question: '파이썬에서 with 문의 주요 목적은?',
        options: [
          '반복문을 간결하게 작성',
          '리소스의 자동 관리 (열기/닫기)',
          '조건문 대체',
          '클래스 상속'
        ],
        correct: 1,
        explanation: 'with 문은 컨텍스트 매니저를 활용하여 파일 등의 리소스를 자동으로 열고 닫아줍니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'nums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x: x > 3, nums))\nprint(result)',
        options: ['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[True, True]'],
        correct: 1,
        explanation: 'filter()는 조건을 만족하는 요소만 걸러냅니다. x > 3인 요소는 4와 5입니다.'
      },
      {
        question: '다음 중 상속에서 부모 클래스의 메서드를 호출하는 방법은?',
        options: ['parent.method()', 'super().method()', 'base.method()', 'this.parent.method()'],
        correct: 1,
        explanation: 'super()는 부모 클래스의 인스턴스를 반환하며, 이를 통해 부모 메서드를 호출합니다.'
      },
      {
        question: 'JSON 파일을 읽어 파이썬 딕셔너리로 변환하는 코드는?',
        code: 'import json',
        options: [
          'json.parse(file.read())',
          'json.load(file)',
          'json.decode(file)',
          'json.from_file(file)'
        ],
        correct: 1,
        explanation: 'json.load()는 파일 객체에서 JSON 데이터를 읽어 파이썬 객체로 변환합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'd = {"a": 1, "b": 2, "c": 3}\nresult = {k: v*2 for k, v in d.items()}\nprint(result)',
        options: [
          "{'a': 2, 'b': 4, 'c': 6}",
          "{'a': 1, 'b': 2, 'c': 3}",
          "[2, 4, 6]",
          "에러 발생"
        ],
        correct: 0,
        explanation: '딕셔너리 컴프리헨션으로 각 값을 2배로 만든 새 딕셔너리를 생성합니다.'
      }
    ]
  },

  advanced: {
    title: '파이썬 고급 퀴즈',
    description: '데코레이터, 제너레이터, 동시성 등 고급 주제를 테스트합니다',
    timeLimit: 720, // 12분
    passingScore: 70,
    questions: [
      {
        question: '데코레이터의 주요 목적은?',
        options: [
          '코드의 실행 속도를 높인다',
          '함수나 클래스의 동작을 수정/확장한다',
          '메모리 사용량을 줄인다',
          '타입 체크를 수행한다'
        ],
        correct: 1,
        explanation: '데코레이터는 기존 함수나 클래스의 코드를 수정하지 않고 동작을 추가하거나 변경하는 패턴입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'def make_doubler():\n    def doubler(x):\n        return x * 2\n    return doubler\n\nf = make_doubler()\nprint(f(5))',
        options: ['5', '10', '에러 발생', 'None'],
        correct: 1,
        explanation: 'make_doubler는 내부 함수 doubler를 반환합니다. f(5)는 doubler(5)로 5*2=10을 반환합니다.'
      },
      {
        question: '제너레이터에서 yield 키워드의 역할은?',
        options: [
          '함수를 즉시 종료한다',
          '값을 반환하고 함수 상태를 유지한다',
          '예외를 발생시킨다',
          '반복문을 중단한다'
        ],
        correct: 1,
        explanation: 'yield는 값을 반환하면서도 함수의 상태를 보존하여, 다음 호출 시 이어서 실행합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'def gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = gen()\nprint(next(g))\nprint(next(g))',
        options: ['1\\n1', '1\\n2', '1\\n3', '에러 발생'],
        correct: 1,
        explanation: 'next()를 호출할 때마다 다음 yield까지 실행됩니다. 첫 번째 호출에서 1, 두 번째에서 2를 반환합니다.'
      },
      {
        question: 'functools.wraps를 데코레이터에 사용하는 이유는?',
        options: [
          '실행 속도를 높이기 위해',
          '원래 함수의 메타데이터를 보존하기 위해',
          '에러를 방지하기 위해',
          '재귀 호출을 가능하게 하기 위해'
        ],
        correct: 1,
        explanation: '@wraps(func)는 데코레이터가 감싼 원래 함수의 __name__, __doc__ 등의 메타데이터를 보존합니다.'
      },
      {
        question: '파이썬의 GIL(Global Interpreter Lock)에 대한 설명으로 올바른 것은?',
        options: [
          '멀티스레딩을 완전히 불가능하게 한다',
          '한 번에 하나의 스레드만 파이썬 바이트코드를 실행하게 한다',
          '멀티프로세싱에도 영향을 미친다',
          'asyncio에서만 작동한다'
        ],
        correct: 1,
        explanation: 'GIL은 한 번에 하나의 스레드만 파이썬 바이트코드를 실행하도록 제한합니다. I/O 바운드 작업에서는 여전히 멀티스레딩이 유용합니다.'
      },
      {
        question: '다음 중 컨텍스트 매니저를 구현하기 위해 필요한 매직 메서드는?',
        options: [
          '__init__과 __del__',
          '__enter__과 __exit__',
          '__get__과 __set__',
          '__call__과 __return__'
        ],
        correct: 1,
        explanation: '컨텍스트 매니저는 __enter__(진입 시)와 __exit__(종료 시) 메서드를 구현해야 합니다.'
      },
      {
        question: '다음 데코레이터의 동작 결과는?',
        code: 'def twice(func):\n    def wrapper(*args):\n        func(*args)\n        func(*args)\n    return wrapper\n\n@twice\ndef say(msg):\n    print(msg)\n\nsay("Hi")',
        options: ['Hi', 'Hi\\nHi', 'Hi Hi', '에러 발생'],
        correct: 1,
        explanation: '@twice 데코레이터는 원래 함수를 두 번 호출합니다. "Hi"가 두 번 출력됩니다.'
      },
      {
        question: 'async/await 구문에 대한 설명으로 올바른 것은?',
        options: [
          'async 함수는 자동으로 병렬 실행된다',
          'await는 동기 함수에서도 사용할 수 있다',
          'async 함수는 코루틴 객체를 반환한다',
          'asyncio는 멀티스레딩과 같다'
        ],
        correct: 2,
        explanation: 'async def로 정의된 함수를 호출하면 코루틴 객체가 반환되며, await나 이벤트 루프를 통해 실행합니다.'
      },
      {
        question: '타입 힌트에 대한 설명으로 올바른 것은?',
        code: 'def add(a: int, b: int) -> int:\n    return a + b',
        options: [
          '런타임에 타입을 강제한다',
          '잘못된 타입 전달 시 에러가 발생한다',
          '코드 가독성과 정적 분석 도구에 도움을 준다',
          '파이썬 2에서도 사용할 수 있다'
        ],
        correct: 2,
        explanation: '파이썬의 타입 힌트는 런타임에 강제되지 않으며, 코드 문서화와 mypy 같은 정적 분석 도구에 활용됩니다.'
      }
    ]
  },

  applied: {
    title: '응용 (NumPy & Pandas) 퀴즈',
    description: 'NumPy 배열 연산과 Pandas 데이터 처리 지식을 테스트합니다',
    timeLimit: 720,
    passingScore: 70,
    questions: [
      {
        question: 'NumPy 배열을 생성하는 올바른 코드는?',
        code: 'import numpy as np',
        options: [
          'np.array([1, 2, 3])',
          'np.list([1, 2, 3])',
          'np.create([1, 2, 3])',
          'np.new_array([1, 2, 3])'
        ],
        correct: 0,
        explanation: 'np.array()는 파이썬 리스트를 NumPy 배열(ndarray)로 변환하는 기본 방법입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a + b)',
        options: ['[1, 2, 3, 4, 5, 6]', '[5 7 9]', '에러 발생', '15'],
        correct: 1,
        explanation: 'NumPy 배열의 덧셈은 요소별(element-wise) 연산을 수행합니다. [1+4, 2+5, 3+6] = [5, 7, 9]'
      },
      {
        question: 'NumPy에서 3x3 영행렬을 만드는 코드는?',
        options: [
          'np.zeros(3, 3)',
          'np.zeros((3, 3))',
          'np.empty(3, 3)',
          'np.matrix(3, 3, 0)'
        ],
        correct: 1,
        explanation: 'np.zeros()는 튜플로 shape를 받습니다. (3, 3)은 3행 3열 배열을 의미합니다.'
      },
      {
        question: 'Pandas DataFrame을 생성하는 올바른 코드는?',
        code: 'import pandas as pd',
        options: [
          "pd.DataFrame({'A': [1,2], 'B': [3,4]})",
          "pd.Table({'A': [1,2], 'B': [3,4]})",
          "pd.create_df({'A': [1,2], 'B': [3,4]})",
          "pd.Data({'A': [1,2], 'B': [3,4]})"
        ],
        correct: 0,
        explanation: 'pd.DataFrame()은 딕셔너리를 받아 DataFrame을 생성합니다. 키가 열 이름, 값이 데이터가 됩니다.'
      },
      {
        question: 'Pandas에서 결측치를 확인하는 메서드는?',
        options: ['df.empty()', 'df.isnull()', 'df.missing()', 'df.check_na()'],
        correct: 1,
        explanation: 'df.isnull() 또는 df.isna()는 각 셀의 결측치 여부를 불리언으로 반환합니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: 'import numpy as np\na = np.array([[1,2],[3,4]])\nprint(a.shape)',
        options: ['(4,)', '(2, 2)', '[2, 2]', '4'],
        correct: 1,
        explanation: 'shape 속성은 배열의 차원을 튜플로 반환합니다. 2x2 배열이므로 (2, 2)입니다.'
      },
      {
        question: 'NumPy 브로드캐스팅에 대한 설명으로 올바른 것은?',
        options: [
          '같은 크기의 배열만 연산할 수 있다',
          '다른 크기의 배열 간 연산 시 자동으로 크기를 맞춘다',
          '항상 에러가 발생한다',
          '1차원 배열에서만 작동한다'
        ],
        correct: 1,
        explanation: '브로드캐스팅은 형상이 다른 배열 간 연산 시, 작은 배열을 큰 배열에 맞게 자동 확장하는 규칙입니다.'
      },
      {
        question: 'Pandas에서 DataFrame의 특정 열로 그룹화하는 코드는?',
        code: "df = pd.DataFrame({'city': ['서울','부산','서울'], 'sales': [100,200,300]})",
        options: [
          "df.group('city').sum()",
          "df.groupby('city').sum()",
          "df.aggregate('city').sum()",
          "df.pivot('city').sum()"
        ],
        correct: 1,
        explanation: "groupby()는 지정한 열의 값을 기준으로 데이터를 그룹화합니다."
      },
      {
        question: 'Pandas에서 CSV 파일을 읽어오는 함수는?',
        options: ['pd.open_csv()', 'pd.load_csv()', 'pd.read_csv()', 'pd.import_csv()'],
        correct: 2,
        explanation: 'pd.read_csv()는 CSV 파일을 DataFrame으로 읽어오는 함수입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?',
        code: "import numpy as np\na = np.arange(10)\nprint(a[a > 5])",
        options: ['[True, True, True, True]', '[6 7 8 9]', '[5 6 7 8 9]', '에러 발생'],
        correct: 1,
        explanation: 'a > 5는 불리언 마스크를 생성하고, 이를 인덱싱에 사용하면 조건을 만족하는 요소만 추출합니다.'
      },
      {
        question: 'Matplotlib에서 선 그래프를 그리는 함수는?',
        options: ['plt.bar()', 'plt.plot()', 'plt.scatter()', 'plt.line()'],
        correct: 1,
        explanation: 'plt.plot()은 선 그래프를 그리는 기본 함수입니다. x, y 데이터를 전달하여 사용합니다.'
      },
      {
        question: 'Seaborn에서 상관관계를 색상으로 시각화하는 차트는?',
        options: ['sns.barplot()', 'sns.boxplot()', 'sns.heatmap()', 'sns.pairplot()'],
        correct: 2,
        explanation: 'sns.heatmap()은 행렬 데이터를 색상으로 시각화하며, 상관관계 분석에 자주 사용됩니다.'
      },
      {
        question: 'Scikit-learn에서 데이터를 학습/테스트로 나누는 함수는?',
        code: 'from sklearn.model_selection import ???',
        options: ['data_split', 'train_test_split', 'split_data', 'cross_validate'],
        correct: 1,
        explanation: 'train_test_split()은 데이터를 학습용과 테스트용으로 분리하는 함수입니다.'
      },
      {
        question: '머신러닝에서 모델이 학습 데이터에만 너무 맞춰지는 현상은?',
        options: ['과소적합 (Underfitting)', '과적합 (Overfitting)', '정규화 (Normalization)', '교차검증 (Cross-validation)'],
        correct: 1,
        explanation: '과적합(Overfitting)은 모델이 학습 데이터를 "암기"하여 새로운 데이터에 대한 일반화 능력이 떨어지는 현상입니다.'
      },
      {
        question: 'TensorFlow/Keras에서 Sequential 모델에 층을 추가하는 올바른 코드는?',
        options: [
          'model.add(keras.layers.Dense(128))',
          'model.layer(Dense(128))',
          'model.append(Layer(128))',
          'model.insert(Dense(128))'
        ],
        correct: 0,
        explanation: 'Sequential 모델은 model.add()로 층을 하나씩 추가하거나, 리스트로 한번에 전달할 수 있습니다.'
      },
      {
        question: 'PyTorch에서 역전파(Backpropagation)를 수행하는 메서드는?',
        options: ['loss.backward()', 'loss.backprop()', 'model.backward()', 'optimizer.backward()'],
        correct: 0,
        explanation: 'loss.backward()는 손실값에서 역전파를 수행하여 각 파라미터의 기울기(gradient)를 계산합니다.'
      },
      {
        question: '딥러닝에서 가장 많이 사용되는 은닉층 활성화 함수는?',
        options: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
        correct: 2,
        explanation: 'ReLU(Rectified Linear Unit)는 max(0, x)로 계산이 빠르고 기울기 소실 문제를 해결하여 은닉층에서 가장 많이 사용됩니다.'
      }
    ]
  },

  'lib-standard': {
    title: '표준 라이브러리 퀴즈',
    description: 'os/sys, math/cmath, json, datetime 등 파이썬 표준 라이브러리 지식을 테스트합니다',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'os.path.join()의 주요 용도는?',
        code: "import os\npath = os.path.join('home', 'user', 'file.txt')",
        options: [
          '파일을 병합한다',
          '운영체제에 맞는 경로 구분자로 경로를 결합한다',
          '파일 확장자를 결합한다',
          '디렉토리를 생성한다'
        ],
        correct: 1,
        explanation: 'os.path.join()은 운영체제에 맞는 구분자(/, \\)를 사용하여 경로를 안전하게 결합합니다.'
      },
      {
        question: 'sys.argv는 무엇을 담고 있는가?',
        code: 'import sys\nprint(sys.argv)',
        options: [
          '현재 파이썬 버전 정보',
          '명령줄에서 전달된 인자 리스트',
          '시스템 환경 변수 목록',
          '설치된 모듈 리스트'
        ],
        correct: 1,
        explanation: 'sys.argv는 스크립트 실행 시 명령줄에서 전달된 인자들을 리스트로 담고 있으며, argv[0]은 스크립트 이름입니다.'
      },
      {
        question: 'os.listdir() 함수의 반환값 타입은?',
        code: "import os\nresult = os.listdir('.')",
        options: [
          '튜플 (tuple)',
          '딕셔너리 (dict)',
          '리스트 (list)',
          '제너레이터 (generator)'
        ],
        correct: 2,
        explanation: 'os.listdir()는 지정 디렉토리의 파일/폴더 이름을 문자열 리스트로 반환합니다.'
      },
      {
        question: 'math.sqrt(16)의 결과는?',
        code: 'import math\nprint(math.sqrt(16))',
        options: ['4', '4.0', '16', '256'],
        correct: 1,
        explanation: 'math.sqrt()는 항상 float를 반환합니다. sqrt(16)은 4.0입니다.'
      },
      {
        question: 'math.pi의 값으로 올바른 것은?',
        options: ['3.14', '3.141592653589793', '3.1416', '정수 3'],
        correct: 1,
        explanation: 'math.pi는 원주율을 가능한 최대 정밀도로 제공하며, 약 3.141592653589793입니다.'
      },
      {
        question: 'cmath 모듈이 math 모듈과 다른 점은?',
        options: [
          '더 빠른 연산을 제공한다',
          '복소수(complex number) 연산을 지원한다',
          'C 언어로 작성되었다',
          '정수만 처리할 수 있다'
        ],
        correct: 1,
        explanation: 'cmath는 복소수 연산을 지원합니다. 예를 들어 cmath.sqrt(-1)은 1j를 반환합니다.'
      },
      {
        question: 'json.dumps()와 json.dump()의 차이는?',
        code: 'import json\ndata = {"name": "Kim"}',
        options: [
          'dumps()는 파일에, dump()는 문자열로 변환',
          'dumps()는 문자열로 반환, dump()는 파일에 작성',
          '차이가 없다',
          'dumps()는 리스트만, dump()는 딕셔너리만 처리'
        ],
        correct: 1,
        explanation: 'json.dumps()는 JSON 문자열을 반환(s=string)하고, json.dump()는 파일 객체에 직접 씁니다.'
      },
      {
        question: 'json.loads()의 반환 타입으로 올바른 것은?',
        code: 'import json\nresult = json.loads(\'{"a": 1, "b": [2, 3]}\')',
        options: [
          '항상 문자열',
          'JSON 객체',
          '파이썬 딕셔너리 (또는 리스트 등 파이썬 객체)',
          '항상 리스트'
        ],
        correct: 2,
        explanation: 'json.loads()는 JSON 문자열을 파이썬 객체로 변환합니다. JSON 객체는 dict, 배열은 list가 됩니다.'
      },
      {
        question: '현재 날짜와 시간을 가져오는 올바른 코드는?',
        code: 'from datetime import datetime',
        options: [
          'datetime.now()',
          'datetime.current()',
          'datetime.today_time()',
          'datetime.get_now()'
        ],
        correct: 0,
        explanation: 'datetime.now()는 현재 날짜와 시간을 datetime 객체로 반환합니다.'
      },
      {
        question: 'timedelta를 사용한 날짜 연산의 결과는?',
        code: 'from datetime import datetime, timedelta\ntoday = datetime(2024, 1, 1)\nresult = today + timedelta(days=7)\nprint(result.strftime("%Y-%m-%d"))',
        options: ['2024-01-07', '2024-01-08', '2024-07-01', '에러 발생'],
        correct: 1,
        explanation: 'timedelta(days=7)은 7일을 더합니다. 1월 1일 + 7일 = 1월 8일입니다.'
      }
    ]
  },

  'lib-turtle': {
    title: 'Turtle 그래픽 퀴즈',
    description: 'turtle 모듈을 활용한 그래픽 프로그래밍 지식을 테스트합니다',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'turtle로 정사각형을 그리는 올바른 코드는?',
        code: 'import turtle\nt = turtle.Turtle()',
        options: [
          'for i in range(4):\n    t.forward(100)\n    t.right(90)',
          'for i in range(4):\n    t.forward(100)\n    t.right(60)',
          'for i in range(4):\n    t.forward(100)\n    t.left(45)',
          't.square(100)'
        ],
        correct: 0,
        explanation: '정사각형은 4번 반복하며 100만큼 전진 후 90도 회전하면 됩니다. 외각이 90도입니다.'
      },
      {
        question: 'turtle.circle() 함수의 매개변수 의미는?',
        code: 't.circle(50)',
        options: [
          'circle(지름)',
          'circle(반지름)',
          'circle(넓이)',
          'circle(둘레)'
        ],
        correct: 1,
        explanation: 'turtle.circle(radius)에서 매개변수는 반지름입니다. circle(50)은 반지름 50인 원을 그립니다.'
      },
      {
        question: 'begin_fill()과 end_fill()의 역할은?',
        code: 't.fillcolor("red")\nt.begin_fill()\nt.circle(50)\nt.end_fill()',
        options: [
          '도형의 윤곽선 색을 설정한다',
          '도형 내부를 지정한 색으로 채운다',
          '배경색을 변경한다',
          '텍스트를 채운다'
        ],
        correct: 1,
        explanation: 'begin_fill()과 end_fill() 사이에 그린 도형을 fillcolor로 지정한 색으로 채웁니다.'
      },
      {
        question: 'penup()과 pendown()의 역할은?',
        options: [
          '펜의 굵기를 조절한다',
          '펜의 색상을 변경한다',
          '이동 시 선을 그리지 않거나 / 다시 그리게 한다',
          '펜의 모양을 변경한다'
        ],
        correct: 2,
        explanation: 'penup()은 펜을 들어 이동 시 선을 그리지 않고, pendown()은 펜을 내려 다시 선을 그립니다.'
      },
      {
        question: 'speed(0)의 의미는?',
        options: [
          '거북이가 멈춘다',
          '가장 느린 속도',
          '가장 빠른 속도 (애니메이션 없음)',
          '기본 속도'
        ],
        correct: 2,
        explanation: 'speed(0)은 가장 빠른 속도로, 애니메이션 없이 즉시 그립니다. speed(1)이 가장 느립니다.'
      },
      {
        question: 'onscreenclick 이벤트의 사용법으로 올바른 것은?',
        code: 'import turtle\nscreen = turtle.Screen()',
        options: [
          'screen.onscreenclick(lambda x, y: t.goto(x, y))',
          'screen.onclick(t.goto)',
          'screen.click_event(t.goto)',
          'screen.addEventListener("click", t.goto)'
        ],
        correct: 0,
        explanation: 'onscreenclick()은 화면 클릭 시 콜백 함수를 호출하며, x, y 좌표가 전달됩니다.'
      },
      {
        question: '별(★)을 그릴 때 각 꼭짓점에서 회전해야 하는 각도는?',
        code: '# 오각별 그리기\nfor i in range(5):\n    t.forward(100)\n    t.right(???)',
        options: ['72도', '108도', '144도', '120도'],
        correct: 2,
        explanation: '오각별은 각 꼭짓점에서 144도(= 180 - 36)를 회전합니다. 외각의 합이 720도(2바퀴)입니다.'
      },
      {
        question: 'goto(x, y) 함수의 동작은?',
        code: 't.goto(100, 200)',
        options: [
          '현재 위치에서 (100, 200)만큼 상대 이동',
          '절대 좌표 (100, 200)으로 이동',
          '100픽셀 전진 후 200도 회전',
          '속도를 100으로 설정하고 200만큼 이동'
        ],
        correct: 1,
        explanation: 'goto(x, y)는 절대 좌표 (x, y)로 거북이를 이동시킵니다. penup 상태가 아니면 선이 그려집니다.'
      },
      {
        question: 'screen.setup()의 매개변수 의미는?',
        code: 'screen.setup(width=800, height=600)',
        options: [
          '거북이 크기 설정',
          '캔버스(창) 크기를 픽셀 단위로 설정',
          '펜 굵기와 색상 설정',
          '그리기 속도 설정'
        ],
        correct: 1,
        explanation: 'screen.setup(width, height)는 turtle 그래픽 창의 크기를 픽셀 단위로 설정합니다.'
      },
      {
        question: 'shape() 함수에 사용할 수 있는 기본 모양이 아닌 것은?',
        code: 't.shape("turtle")',
        options: ['"arrow"', '"turtle"', '"star"', '"circle"'],
        correct: 2,
        explanation: '기본 제공 모양은 "arrow", "turtle", "circle", "square", "triangle", "classic"입니다. "star"는 기본 제공되지 않습니다.'
      }
    ]
  },

  'lib-data': {
    title: '데이터 분석 퀴즈',
    description: 'NumPy, Pandas, Matplotlib/Seaborn 등 데이터 분석 라이브러리를 테스트합니다',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: 'np.linspace()와 np.arange()의 차이는?',
        code: 'import numpy as np\na = np.linspace(0, 1, 5)\nb = np.arange(0, 1, 0.25)',
        options: [
          '차이가 없다',
          'linspace는 개수를, arange는 간격을 지정한다',
          'linspace는 정수만, arange는 실수만 생성한다',
          'linspace는 2차원, arange는 1차원 배열을 생성한다'
        ],
        correct: 1,
        explanation: 'np.linspace(start, stop, num)은 원소 개수를, np.arange(start, stop, step)은 간격을 지정합니다.'
      },
      {
        question: 'np.reshape()의 올바른 사용법은?',
        code: 'import numpy as np\na = np.arange(12)',
        options: [
          'a.reshape(3, 4)',
          'a.reshape(3)',
          'a.reshape(5, 3)',
          'a.reshape(2, 2)'
        ],
        correct: 0,
        explanation: 'reshape의 전체 원소 수가 일치해야 합니다. 12개 원소는 (3,4), (4,3), (2,6), (6,2) 등으로 변환 가능합니다.'
      },
      {
        question: 'ndarray.dtype 속성은 무엇을 나타내는가?',
        code: 'import numpy as np\na = np.array([1.0, 2.0, 3.0])\nprint(a.dtype)',
        options: [
          '배열의 차원 수',
          '배열의 크기 (원소 개수)',
          '배열 원소의 데이터 타입',
          '배열의 메모리 주소'
        ],
        correct: 2,
        explanation: 'dtype은 배열 원소의 데이터 타입(int32, float64 등)을 나타냅니다.'
      },
      {
        question: 'pd.Series와 pd.DataFrame의 관계로 올바른 것은?',
        options: [
          'Series는 2차원, DataFrame은 1차원이다',
          'Series는 1차원이고, DataFrame은 여러 Series로 구성된 2차원 구조이다',
          'Series와 DataFrame은 동일하다',
          'Series는 숫자만, DataFrame은 문자만 저장한다'
        ],
        correct: 1,
        explanation: 'Series는 인덱스가 있는 1차원 배열이고, DataFrame은 여러 Series(열)로 구성된 2차원 테이블입니다.'
      },
      {
        question: 'df.describe()가 반환하는 정보가 아닌 것은?',
        code: 'import pandas as pd\ndf = pd.DataFrame({"A": [1,2,3,4,5]})\nprint(df.describe())',
        options: [
          '평균 (mean)',
          '표준편차 (std)',
          '중앙값 (50%)',
          '최빈값 (mode)'
        ],
        correct: 3,
        explanation: 'df.describe()는 count, mean, std, min, 25%, 50%, 75%, max를 반환합니다. 최빈값(mode)은 포함되지 않습니다.'
      },
      {
        question: 'df.dropna()와 df.fillna()의 차이는?',
        options: [
          '둘 다 결측치를 삭제한다',
          'dropna는 결측치 행/열을 삭제하고, fillna는 결측치를 지정 값으로 대체한다',
          'dropna는 0으로, fillna는 NaN으로 채운다',
          '차이가 없다'
        ],
        correct: 1,
        explanation: 'dropna()는 NaN이 있는 행/열을 삭제하고, fillna(value)는 NaN을 지정한 값으로 대체합니다.'
      },
      {
        question: 'df.merge()에서 how 매개변수의 기본값은?',
        code: "pd.merge(df1, df2, on='key')",
        options: [
          "'left'",
          "'right'",
          "'inner'",
          "'outer'"
        ],
        correct: 2,
        explanation: "merge()의 how 기본값은 'inner'로, 양쪽 DataFrame에 모두 존재하는 키만 결합합니다."
      },
      {
        question: 'plt.subplot()의 매개변수 의미는?',
        code: 'import matplotlib.pyplot as plt\nplt.subplot(2, 3, 1)',
        options: [
          '2행 3열 격자의 1번째 위치',
          '2개의 그래프를 3:1 비율로',
          'x축 2, y축 3, 데이터 1',
          '2번째 행, 3번째 열, 1번째 그래프'
        ],
        correct: 0,
        explanation: 'subplot(rows, cols, index)는 rows×cols 격자에서 index 위치에 서브플롯을 생성합니다. 인덱스는 1부터 시작합니다.'
      },
      {
        question: 'plt.savefig()의 용도는?',
        code: "plt.savefig('chart.png', dpi=300)",
        options: [
          '그래프를 화면에 표시한다',
          '그래프를 이미지 파일로 저장한다',
          '데이터를 파일로 저장한다',
          '그래프 설정을 저장한다'
        ],
        correct: 1,
        explanation: 'plt.savefig()는 현재 그래프를 PNG, PDF, SVG 등의 이미지 파일로 저장합니다.'
      },
      {
        question: 'sns.pairplot()의 용도는?',
        code: 'import seaborn as sns\nsns.pairplot(df)',
        options: [
          '두 변수 간의 막대그래프를 그린다',
          '데이터프레임의 모든 수치형 변수 쌍의 산점도를 한번에 시각화한다',
          '히트맵을 그린다',
          '박스플롯을 그린다'
        ],
        correct: 1,
        explanation: 'sns.pairplot()은 데이터프레임의 모든 수치형 열 쌍에 대해 산점도(대각선은 히스토그램)를 한번에 그립니다.'
      }
    ]
  },

  'lib-ai': {
    title: 'AI/머신러닝 퀴즈',
    description: 'Scikit-learn, TensorFlow, PyTorch 등 AI/ML 라이브러리 지식을 테스트합니다',
    timeLimit: 600,
    passingScore: 70,
    questions: [
      {
        question: '지도학습과 비지도학습의 차이로 올바른 것은?',
        options: [
          '지도학습은 빠르고, 비지도학습은 느리다',
          '지도학습은 정답(레이블)이 있는 데이터로, 비지도학습은 정답 없이 학습한다',
          '지도학습은 분류만, 비지도학습은 회귀만 가능하다',
          '지도학습은 딥러닝, 비지도학습은 전통 머신러닝이다'
        ],
        correct: 1,
        explanation: '지도학습(Supervised)은 입력-출력 쌍으로 학습하고, 비지도학습(Unsupervised)은 레이블 없이 데이터의 구조를 파악합니다.'
      },
      {
        question: 'KNN(K-Nearest Neighbors) 알고리즘의 원리는?',
        options: [
          '데이터를 트리 구조로 분할한다',
          '새 데이터와 가장 가까운 K개의 이웃을 찾아 다수결로 분류한다',
          '가중치를 역전파로 학습한다',
          '데이터를 군집으로 묶는다'
        ],
        correct: 1,
        explanation: 'KNN은 새로운 데이터 포인트에서 가장 가까운 K개의 이웃을 찾고, 다수결(분류) 또는 평균(회귀)으로 예측합니다.'
      },
      {
        question: 'DecisionTree(결정트리)의 장점이 아닌 것은?',
        options: [
          '결과를 시각적으로 해석하기 쉽다',
          '특성 스케일링이 불필요하다',
          '과적합에 강하다',
          '범주형과 수치형 데이터 모두 처리 가능하다'
        ],
        correct: 2,
        explanation: '결정트리는 해석이 쉽고 스케일링이 불필요하지만, 과적합(overfitting)에 취약하다는 단점이 있습니다.'
      },
      {
        question: 'confusion_matrix에서 True Positive(TP)의 의미는?',
        code: 'from sklearn.metrics import confusion_matrix',
        options: [
          '실제 양성을 양성으로 올바르게 예측',
          '실제 음성을 양성으로 잘못 예측',
          '실제 양성을 음성으로 잘못 예측',
          '실제 음성을 음성으로 올바르게 예측'
        ],
        correct: 0,
        explanation: 'True Positive는 실제 양성(Positive)인 데이터를 양성으로 올바르게(True) 예측한 경우입니다.'
      },
      {
        question: 'accuracy_score의 계산 방법은?',
        code: 'from sklearn.metrics import accuracy_score\naccuracy_score(y_true, y_pred)',
        options: [
          'TP / (TP + FP)',
          'TP / (TP + FN)',
          '(TP + TN) / 전체 샘플 수',
          'TN / (TN + FP)'
        ],
        correct: 2,
        explanation: 'accuracy = (TP + TN) / 전체 = 올바르게 예측한 수 / 전체 샘플 수 입니다.'
      },
      {
        question: 'Keras model.compile()의 필수 매개변수가 아닌 것은?',
        code: "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])",
        options: [
          'optimizer',
          'loss',
          'metrics',
          'batch_size'
        ],
        correct: 3,
        explanation: 'compile()에는 optimizer와 loss가 필수이고 metrics는 선택입니다. batch_size는 fit()의 매개변수입니다.'
      },
      {
        question: 'Adam optimizer의 특징으로 올바른 것은?',
        options: [
          '항상 SGD보다 느리다',
          'Momentum과 RMSProp을 결합한 적응적 학습률 옵티마이저이다',
          '학습률을 수동으로 조정해야 한다',
          '이진 분류에서만 사용할 수 있다'
        ],
        correct: 1,
        explanation: 'Adam은 Momentum(관성)과 RMSProp(적응적 학습률)을 결합하여, 매개변수별로 학습률을 자동 조정합니다.'
      },
      {
        question: 'loss function 선택 기준으로 올바른 것은?',
        options: [
          '이진 분류: categorical_crossentropy',
          '다중 분류: binary_crossentropy',
          '이진 분류: binary_crossentropy, 다중 분류: categorical_crossentropy',
          '회귀: crossentropy'
        ],
        correct: 2,
        explanation: '이진 분류는 binary_crossentropy, 다중 분류는 categorical_crossentropy, 회귀는 mse 등을 사용합니다.'
      },
      {
        question: 'epoch와 batch의 차이는?',
        code: 'model.fit(X, y, epochs=10, batch_size=32)',
        options: [
          'epoch는 미니배치 크기, batch는 전체 반복 횟수',
          'epoch는 전체 데이터를 한 번 학습하는 것, batch는 한 번에 처리하는 데이터 묶음',
          'epoch와 batch는 같은 의미이다',
          'epoch는 레이어 수, batch는 뉴런 수이다'
        ],
        correct: 1,
        explanation: 'epoch는 전체 학습 데이터를 한 바퀴 도는 것이고, batch_size는 한 번의 가중치 업데이트에 사용하는 샘플 수입니다.'
      },
      {
        question: 'torch.tensor와 np.array의 핵심 차이는?',
        code: 'import torch\nimport numpy as np\nt = torch.tensor([1, 2, 3])\na = np.array([1, 2, 3])',
        options: [
          '저장하는 데이터 타입이 다르다',
          'torch.tensor는 GPU 연산과 자동 미분(autograd)을 지원한다',
          'np.array가 더 빠르다',
          'torch.tensor는 1차원만 가능하다'
        ],
        correct: 1,
        explanation: 'torch.tensor는 GPU 가속과 자동 미분(requires_grad)을 지원하여 딥러닝 학습에 최적화되어 있습니다.'
      }
    ]
  }
}
