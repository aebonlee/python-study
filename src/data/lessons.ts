// Level metadata
export const levelInfo = {
  basics: {
    title: '기초',
    titleEn: 'Basics',
    description: '파이썬의 핵심 문법과 기본 개념을 탄탄하게 다집니다',
    descriptionEn: 'Build a solid foundation in Python syntax and core concepts',
    icon: 'fa-solid fa-seedling',
    color: '#4B8BBE'
  },
  intermediate: {
    title: '중급',
    titleEn: 'Intermediate',
    description: '객체지향, 파일 처리, 예외 처리 등 실무 역량을 키웁니다',
    descriptionEn: 'Develop practical skills: OOP, file handling, exception handling',
    icon: 'fa-solid fa-rocket',
    color: '#306998'
  },
  advanced: {
    title: '고급',
    titleEn: 'Advanced',
    description: '데코레이터, 제너레이터, 동시성 등 고급 기법을 익힙니다',
    descriptionEn: 'Master decorators, generators, concurrency, and more',
    icon: 'fa-solid fa-bolt',
    color: '#1E4F72'
  },
  applied: {
    title: '응용',
    titleEn: 'Applied',
    description: 'NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow 등 데이터 과학 실습',
    descriptionEn: 'Data science with NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow',
    icon: 'fa-solid fa-microscope',
    color: '#D4A017'
  },
  'lib-standard': {
    title: '표준 라이브러리',
    titleEn: 'Standard Libraries',
    icon: 'fa-solid fa-terminal',
    color: '#6366F1'
  },
  'lib-turtle': {
    title: 'Turtle 그래픽',
    titleEn: 'Turtle Graphics',
    icon: 'fa-solid fa-pen-ruler',
    color: '#14B8A6'
  },
  'lib-data': {
    title: '데이터 분석',
    titleEn: 'Data Analytics',
    icon: 'fa-solid fa-chart-pie',
    color: '#F59E0B'
  },
  'lib-ai': {
    title: 'AI/머신러닝',
    titleEn: 'AI / ML',
    icon: 'fa-solid fa-brain',
    color: '#EC4899'
  }
}

// Lesson data per level
export const lessons = {
  basics: [
    {
      id: 'hello-python',
      title: 'Hello Python!',
      titleEn: 'Hello Python!',
      description: '파이썬 첫 프로그램 작성과 print 함수 사용법',
      descriptionEn: 'Write your first Python program and learn print()',
      icon: 'fa-solid fa-hand',
      estimatedTime: 15,
      difficulty: 1,
      topics: ['print()', '주석', '들여쓰기', '파이썬 실행']
    },
    {
      id: 'variables',
      title: '변수와 자료형',
      titleEn: 'Variables & Data Types',
      description: '변수 선언, 숫자, 문자열, 불리언 등 기본 자료형',
      descriptionEn: 'Variables, numbers, strings, booleans, and basic data types',
      icon: 'fa-solid fa-box',
      estimatedTime: 20,
      difficulty: 1,
      topics: ['변수', 'int', 'float', 'str', 'bool', 'type()']
    },
    {
      id: 'operators',
      title: '연산자',
      titleEn: 'Operators',
      description: '산술, 비교, 논리, 할당 연산자 완벽 정리',
      descriptionEn: 'Arithmetic, comparison, logical, and assignment operators',
      icon: 'fa-solid fa-hashtag',
      estimatedTime: 20,
      difficulty: 1,
      topics: ['산술 연산자', '비교 연산자', '논리 연산자', '할당 연산자']
    },
    {
      id: 'strings',
      title: '문자열 다루기',
      titleEn: 'Working with Strings',
      description: '문자열 인덱싱, 슬라이싱, 포매팅, 주요 메서드',
      descriptionEn: 'String indexing, slicing, formatting, and key methods',
      icon: 'fa-solid fa-pen-to-square',
      estimatedTime: 25,
      difficulty: 1,
      topics: ['인덱싱', '슬라이싱', 'f-string', 'format()', '문자열 메서드']
    },
    {
      id: 'conditionals',
      title: '조건문',
      titleEn: 'Conditionals',
      description: 'if, elif, else를 활용한 분기 처리',
      descriptionEn: 'Branching with if, elif, and else',
      icon: 'fa-solid fa-code-branch',
      estimatedTime: 20,
      difficulty: 1,
      topics: ['if', 'elif', 'else', '중첩 조건문', '삼항 연산자']
    },
    {
      id: 'loops',
      title: '반복문',
      titleEn: 'Loops',
      description: 'for, while 반복문과 break, continue 제어',
      descriptionEn: 'for, while loops with break and continue',
      icon: 'fa-solid fa-rotate',
      estimatedTime: 25,
      difficulty: 1,
      topics: ['for', 'while', 'range()', 'break', 'continue', 'enumerate']
    },
    {
      id: 'lists',
      title: '리스트',
      titleEn: 'Lists',
      description: '리스트 생성, 조작, 메서드, 리스트 컴프리헨션 기초',
      descriptionEn: 'Creating, manipulating lists and list comprehension basics',
      icon: 'fa-solid fa-list',
      estimatedTime: 25,
      difficulty: 1,
      topics: ['리스트 생성', 'append', 'pop', 'sort', '슬라이싱', '리스트 컴프리헨션']
    },
    {
      id: 'tuples-dicts',
      title: '튜플과 딕셔너리',
      titleEn: 'Tuples & Dictionaries',
      description: '튜플의 불변성, 딕셔너리의 키-값 구조 이해',
      descriptionEn: 'Tuple immutability and dictionary key-value structure',
      icon: 'fa-solid fa-folder-open',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['튜플', '딕셔너리', 'keys()', 'values()', 'items()', '집합(set)']
    },
    {
      id: 'functions-basic',
      title: '함수 기초',
      titleEn: 'Functions Basics',
      description: '함수 정의, 매개변수, 반환값, 기본값 인자',
      descriptionEn: 'Defining functions, parameters, return values, defaults',
      icon: 'fa-solid fa-gear',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['def', 'return', '매개변수', '기본값', '*args', '**kwargs']
    }
  ],

  intermediate: [
    {
      id: 'functions-advanced',
      title: '함수 심화',
      titleEn: 'Advanced Functions',
      description: '람다, 클로저, 고차 함수, map/filter/reduce',
      descriptionEn: 'Lambda, closures, higher-order functions, map/filter/reduce',
      icon: 'fa-solid fa-wrench',
      estimatedTime: 30,
      difficulty: 2,
      topics: ['lambda', 'map()', 'filter()', 'reduce()', '클로저', '고차 함수']
    },
    {
      id: 'oop-basics',
      title: '객체지향 프로그래밍 기초',
      titleEn: 'OOP Basics',
      description: '클래스, 인스턴스, 생성자, 메서드 이해',
      descriptionEn: 'Classes, instances, constructors, and methods',
      icon: 'fa-solid fa-cubes',
      estimatedTime: 35,
      difficulty: 2,
      topics: ['class', '__init__', 'self', '인스턴스 변수', '메서드', '속성']
    },
    {
      id: 'oop-advanced',
      title: '상속과 다형성',
      titleEn: 'Inheritance & Polymorphism',
      description: '클래스 상속, 메서드 오버라이딩, 다중 상속',
      descriptionEn: 'Class inheritance, method overriding, multiple inheritance',
      icon: 'fa-solid fa-dna',
      estimatedTime: 30,
      difficulty: 2,
      topics: ['상속', 'super()', '오버라이딩', '다중 상속', 'isinstance()', 'MRO']
    },
    {
      id: 'error-handling',
      title: '예외 처리',
      titleEn: 'Exception Handling',
      description: 'try/except, finally, 사용자 정의 예외',
      descriptionEn: 'try/except, finally, custom exceptions',
      icon: 'fa-solid fa-shield-halved',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['try', 'except', 'finally', 'raise', '사용자 정의 예외', 'with']
    },
    {
      id: 'file-io',
      title: '파일 입출력',
      titleEn: 'File I/O',
      description: '파일 읽기/쓰기, CSV, JSON 처리',
      descriptionEn: 'Reading/writing files, CSV, JSON processing',
      icon: 'fa-solid fa-folder',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['open()', 'read()', 'write()', 'with문', 'CSV', 'JSON']
    },
    {
      id: 'modules',
      title: '모듈과 패키지',
      titleEn: 'Modules & Packages',
      description: 'import, 표준 라이브러리, 패키지 구조',
      descriptionEn: 'import, standard library, package structure',
      icon: 'fa-solid fa-book',
      estimatedTime: 20,
      difficulty: 2,
      topics: ['import', 'from', 'as', '__name__', 'pip', '표준 라이브러리']
    },
    {
      id: 'comprehensions',
      title: '컴프리헨션 마스터',
      titleEn: 'Comprehension Mastery',
      description: '리스트, 딕셔너리, 세트 컴프리헨션 심화',
      descriptionEn: 'Advanced list, dict, and set comprehensions',
      icon: 'fa-solid fa-wand-magic-sparkles',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['리스트 컴프리헨션', '딕셔너리 컴프리헨션', '세트 컴프리헨션', '중첩', '조건부']
    },
    {
      id: 'regex',
      title: '정규표현식',
      titleEn: 'Regular Expressions',
      description: 're 모듈을 이용한 패턴 매칭과 텍스트 처리',
      descriptionEn: 'Pattern matching and text processing with the re module',
      icon: 'fa-solid fa-magnifying-glass',
      estimatedTime: 30,
      difficulty: 3,
      topics: ['re.match', 're.search', 're.findall', '패턴 문법', '그룹', 're.sub']
    },
    {
      id: 'os-sys',
      title: 'os/sys 모듈',
      titleEn: 'os/sys Module',
      description: '운영체제 기능, 파일 시스템 제어, 시스템 정보',
      descriptionEn: 'OS functions, file system control, system info',
      icon: 'fa-solid fa-terminal',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['os.path', 'os.listdir', 'os.makedirs', 'sys.argv', 'sys.path', '환경 변수']
    },
    {
      id: 'math-cmath',
      title: 'math/cmath 모듈',
      titleEn: 'math/cmath Module',
      description: '수학 연산, 삼각함수, 로그, 복소수 처리',
      descriptionEn: 'Math operations, trigonometry, logarithms, complex numbers',
      icon: 'fa-solid fa-square-root-variable',
      estimatedTime: 20,
      difficulty: 2,
      topics: ['math.sqrt', 'math.pi', 'math.log', '삼각함수', 'cmath', '복소수']
    },
    {
      id: 'json-module',
      title: 'json 모듈',
      titleEn: 'json Module',
      description: 'JSON 데이터 파싱, 생성, 파일 입출력',
      descriptionEn: 'JSON parsing, creation, and file I/O',
      icon: 'fa-solid fa-code',
      estimatedTime: 20,
      difficulty: 2,
      topics: ['json.dumps', 'json.loads', 'json.dump', 'json.load', 'indent', 'ensure_ascii']
    },
    {
      id: 'datetime-module',
      title: 'datetime 모듈',
      titleEn: 'datetime Module',
      description: '날짜와 시간 생성, 포매팅, 연산, 타임존',
      descriptionEn: 'Date/time creation, formatting, arithmetic, timezones',
      icon: 'fa-solid fa-calendar-days',
      estimatedTime: 25,
      difficulty: 2,
      topics: ['datetime.now', 'date', 'time', 'timedelta', 'strftime', 'strptime']
    },
    {
      id: 'turtle-graphics',
      title: 'Turtle Graphics',
      titleEn: 'Turtle Graphics',
      description: '거북이 그래픽으로 도형, 패턴, 프랙탈 그리기',
      descriptionEn: 'Drawing shapes, patterns, and fractals with turtle graphics',
      icon: 'fa-solid fa-pen-ruler',
      estimatedTime: 30,
      difficulty: 1,
      topics: ['forward', 'left/right', 'circle', 'color', 'fill', '정다각형', '별', '나선']
    }
  ],

  advanced: [
    {
      id: 'decorators',
      title: '데코레이터',
      titleEn: 'Decorators',
      description: '함수/클래스 데코레이터, functools.wraps, 매개변수 데코레이터',
      descriptionEn: 'Function/class decorators, functools.wraps, parameterized decorators',
      icon: 'fa-solid fa-at',
      estimatedTime: 35,
      difficulty: 3,
      topics: ['데코레이터 기초', 'functools.wraps', '매개변수 데코레이터', '클래스 데코레이터', '데코레이터 체이닝']
    },
    {
      id: 'generators',
      title: '제너레이터와 이터레이터',
      titleEn: 'Generators & Iterators',
      description: 'yield, 제너레이터 표현식, 이터레이터 프로토콜',
      descriptionEn: 'yield, generator expressions, iterator protocol',
      icon: 'fa-solid fa-battery-full',
      estimatedTime: 30,
      difficulty: 3,
      topics: ['yield', 'next()', '제너레이터 표현식', '__iter__', '__next__', 'itertools']
    },
    {
      id: 'context-managers',
      title: '컨텍스트 매니저',
      titleEn: 'Context Managers',
      description: 'with문, __enter__/__exit__, contextlib',
      descriptionEn: 'with statement, __enter__/__exit__, contextlib',
      icon: 'fa-solid fa-door-open',
      estimatedTime: 25,
      difficulty: 3,
      topics: ['with문', '__enter__', '__exit__', 'contextlib', '@contextmanager']
    },
    {
      id: 'concurrency',
      title: '동시성 프로그래밍',
      titleEn: 'Concurrency',
      description: '스레딩, 멀티프로세싱, asyncio 기초',
      descriptionEn: 'Threading, multiprocessing, asyncio basics',
      icon: 'fa-solid fa-diagram-project',
      estimatedTime: 40,
      difficulty: 3,
      topics: ['threading', 'multiprocessing', 'asyncio', 'async/await', 'GIL', 'concurrent.futures']
    },
    {
      id: 'typing-testing',
      title: '타입 힌트와 테스팅',
      titleEn: 'Type Hints & Testing',
      description: '타입 어노테이션, unittest, pytest 기초',
      descriptionEn: 'Type annotations, unittest, pytest basics',
      icon: 'fa-solid fa-flask',
      estimatedTime: 30,
      difficulty: 3,
      topics: ['타입 힌트', 'typing 모듈', 'unittest', 'pytest', 'assert', '테스트 전략']
    }
  ],

  applied: [
    {
      id: 'numpy-basics',
      title: 'NumPy 기초',
      titleEn: 'NumPy Basics',
      description: 'ndarray, 배열 생성, 인덱싱, 슬라이싱, 브로드캐스팅',
      descriptionEn: 'ndarray, array creation, indexing, slicing, broadcasting',
      icon: 'fa-solid fa-calculator',
      estimatedTime: 35,
      difficulty: 2,
      topics: ['ndarray', 'np.array', 'np.zeros', 'reshape', '인덱싱', '브로드캐스팅']
    },
    {
      id: 'numpy-advanced',
      title: 'NumPy 연산과 활용',
      titleEn: 'NumPy Operations',
      description: '배열 연산, 선형대수, 통계 함수, 난수 생성',
      descriptionEn: 'Array operations, linear algebra, statistics, random numbers',
      icon: 'fa-solid fa-chart-bar',
      estimatedTime: 35,
      difficulty: 3,
      topics: ['유니버설 함수', 'np.linalg', '통계 함수', 'np.random', '배열 결합', '마스킹']
    },
    {
      id: 'pandas-basics',
      title: 'Pandas 기초',
      titleEn: 'Pandas Basics',
      description: 'Series, DataFrame 생성, 인덱싱, 데이터 조회',
      descriptionEn: 'Series, DataFrame creation, indexing, data inspection',
      icon: 'fa-solid fa-table',
      estimatedTime: 35,
      difficulty: 2,
      topics: ['Series', 'DataFrame', 'read_csv', 'head()', 'info()', 'describe()']
    },
    {
      id: 'pandas-manipulation',
      title: 'Pandas 데이터 가공',
      titleEn: 'Pandas Data Wrangling',
      description: '필터링, 정렬, 그룹화, 결측치 처리, 병합',
      descriptionEn: 'Filtering, sorting, grouping, missing values, merging',
      icon: 'fa-solid fa-filter',
      estimatedTime: 40,
      difficulty: 3,
      topics: ['필터링', 'sort_values', 'groupby', 'fillna', 'merge', 'pivot_table']
    },
    {
      id: 'data-project',
      title: '데이터 분석 미니 프로젝트',
      titleEn: 'Data Analysis Mini Project',
      description: 'NumPy와 Pandas를 활용한 실전 데이터 분석',
      descriptionEn: 'Real-world data analysis using NumPy and Pandas',
      icon: 'fa-solid fa-chart-line',
      estimatedTime: 45,
      difficulty: 3,
      topics: ['데이터 로딩', '탐색적 분석', '데이터 정제', '통계 분석', '결과 해석']
    },
    {
      id: 'matplotlib-seaborn',
      title: 'Matplotlib & Seaborn',
      titleEn: 'Matplotlib & Seaborn',
      description: '데이터 시각화의 핵심, 다양한 그래프와 차트 작성법',
      descriptionEn: 'Core data visualization with various graphs and charts',
      icon: 'fa-solid fa-chart-pie',
      estimatedTime: 40,
      difficulty: 2,
      topics: ['plt.plot', 'plt.bar', 'plt.scatter', 'subplot', 'seaborn', 'heatmap']
    },
    {
      id: 'scikit-learn',
      title: 'Scikit-learn 머신러닝',
      titleEn: 'Scikit-learn ML',
      description: '분류, 회귀, 클러스터링 등 머신러닝 모델 구현',
      descriptionEn: 'Classification, regression, clustering ML models',
      icon: 'fa-solid fa-brain',
      estimatedTime: 45,
      difficulty: 3,
      topics: ['train_test_split', '분류', '회귀', 'KNN', '결정트리', '모델 평가']
    },
    {
      id: 'tensorflow-pytorch',
      title: 'TensorFlow & PyTorch',
      titleEn: 'TensorFlow & PyTorch',
      description: '딥러닝 프레임워크의 기초와 신경망 구현',
      descriptionEn: 'Deep learning framework basics and neural network implementation',
      icon: 'fa-solid fa-network-wired',
      estimatedTime: 45,
      difficulty: 3,
      topics: ['텐서', '신경망', 'Sequential', 'Layer', '학습 루프', '손실 함수']
    }
  ]
}
