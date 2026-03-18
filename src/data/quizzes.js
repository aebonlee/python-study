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
  }
}
