import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson11() {
  const { t, lang } = useLanguage();
  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 11: Lists & Multi-dimensional Lists' : '11주차: 리스트와 다차원 리스트'}</h1>
          <p>{lang === 'en' ? 'Data modeling with 1D, 2D, and 3D lists' : '1차원, 2차원, 3차원 리스트를 활용한 데이터 모델링'}</p>
        </div>
      </section>
      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {lang === 'en' ? (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.learningObjectives')}</h3>
                  <ul>
                    <li>Understand the concept and characteristics of the List data type</li>
                    <li>Create lists and perform access (indexing/slicing), modification, and deletion</li>
                    <li>Use key list methods (append, insert, remove, pop, sort, etc.)</li>
                    <li>Work with 2D and 3D lists to handle tables, matrices, and multi-dimensional data</li>
                    <li>Use list comprehensions to create lists concisely</li>
                  </ul>
                </div>

                {/* ========== 1. What is a List? ========== */}
                <h2>1. What is a List?</h2>

                <h3>1.1 Definition</h3>
                <p>
                  A List is a <strong>data structure that stores multiple data items in order</strong>.
                  It is enclosed in square brackets <code>[]</code> with elements separated by commas (,).
                  It is one of the most frequently used data types in Python.
                </p>

                <h3>1.2 Array vs List</h3>
                <p>
                  In languages like C and Java, arrays can only store data of the <strong>same type</strong> and have a <strong>fixed size</strong>.
                  In contrast, Python lists can store <strong>different data types</strong> together and their <strong>size changes dynamically</strong>.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>Property</th><th>Array (C, Java)</th><th>List (Python)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Data type</td><td>Same type only</td><td>Mixed types allowed</td></tr>
                    <tr><td>Size</td><td>Fixed at declaration</td><td>Dynamically changeable</td></tr>
                    <tr><td>Modification</td><td>Elements can be changed</td><td>Elements can be changed (mutable)</td></tr>
                    <tr><td>Declaration</td><td><code>int arr[5];</code></td><td><code>arr = [1, 2, 3, 4, 5]</code></td></tr>
                  </tbody>
                </table>

                <h3>1.3 Characteristics of Python Lists</h3>
                <ul>
                  <li><strong>Mutable:</strong> Elements can be added, modified, and deleted after creation</li>
                  <li><strong>Ordered:</strong> Element order is preserved and accessible by index</li>
                  <li><strong>Duplicates allowed:</strong> The same value can be stored multiple times</li>
                  <li><strong>Mixed types:</strong> Integers, floats, strings, booleans, etc. can be stored together</li>
                </ul>

                <h3>1.4 Why We Need Lists</h3>
              </>
            ) : (
              <>
                <div className="callout-box">
                  <h3>{t('pythonLearning.learningObjectives')}</h3>
                  <ul>
                    <li>리스트(List) 자료형의 개념과 특징을 이해한다</li>
                    <li>리스트의 생성, 접근(인덱싱/슬라이싱), 수정, 삭제를 수행할 수 있다</li>
                    <li>주요 리스트 메서드(append, insert, remove, pop, sort 등)를 활용한다</li>
                    <li>2차원 리스트와 3차원 리스트로 표/행렬/다차원 데이터를 다룬다</li>
                    <li>리스트 컴프리헨션으로 간결하게 리스트를 생성한다</li>
                  </ul>
                </div>

                {/* ========== 1. 리스트란? ========== */}
                <h2>1. 리스트(List)란?</h2>

                <h3>1.1 정의</h3>
                <p>
                  리스트(List)는 <strong>여러 데이터를 순서대로 저장하는 자료 구조</strong>입니다.
                  대괄호 <code>[]</code>로 감싸고 각 요소를 쉼표(,)로 구분합니다.
                  파이썬에서 가장 자주 사용되는 자료형 중 하나입니다.
                </p>

                <h3>1.2 배열(Array) vs 리스트(List)</h3>
                <p>
                  C, Java 등의 언어에서 배열(Array)은 <strong>같은 자료형</strong>의 데이터만 저장하고 <strong>크기가 고정</strong>됩니다.
                  반면 파이썬의 리스트는 <strong>서로 다른 자료형</strong>을 함께 저장할 수 있고 <strong>크기가 자유롭게 변합니다</strong>.
                </p>

                <table className="lesson-table">
                  <thead>
                    <tr><th>특성</th><th>배열 (C, Java)</th><th>리스트 (Python)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>자료형</td><td>동일 자료형만 가능</td><td>다양한 자료형 혼합 가능</td></tr>
                    <tr><td>크기</td><td>선언 시 고정</td><td>동적으로 변경 가능</td></tr>
                    <tr><td>수정</td><td>요소 변경 가능</td><td>요소 변경 가능 (가변, mutable)</td></tr>
                    <tr><td>선언</td><td><code>int arr[5];</code></td><td><code>arr = [1, 2, 3, 4, 5]</code></td></tr>
                  </tbody>
                </table>

                <h3>1.3 파이썬 리스트의 특징</h3>
                <ul>
                  <li><strong>가변(mutable):</strong> 생성 후에도 요소를 추가, 수정, 삭제할 수 있음</li>
                  <li><strong>순서 있음(ordered):</strong> 요소의 순서가 유지되며 인덱스로 접근 가능</li>
                  <li><strong>중복 허용:</strong> 같은 값을 여러 번 저장할 수 있음</li>
                  <li><strong>다양한 자료형 혼합:</strong> 정수, 실수, 문자열, 불리언 등을 함께 저장 가능</li>
                </ul>

                <h3>1.4 리스트가 필요한 이유</h3>
              </>
            )}

            {/* SHARED: Why we need lists code block */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '30 Variables vs 1 List' : '변수 30개 vs 리스트 1개'}</div>
              <pre><code>{`# 30명 학생의 점수를 변수로 관리? → 비현실적!
# score1 = 85
# score2 = 92
# score3 = 78
# ... (30개의 변수 선언)
# average = (score1 + score2 + ... + score30) / 30

# 리스트 하나로 깔끔하게 관리!
scores = [85, 92, 78, 96, 88, 73, 91, 84, 67, 95,
          82, 76, 89, 93, 71, 87, 90, 68, 94, 81,
          86, 77, 83, 98, 72, 88, 91, 74, 85, 79]

average = sum(scores) / len(scores)
print(f"학생 수: {len(scores)}명")
print(f"평균 점수: {average:.1f}점")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h2>2. Creating Lists</h2>
            ) : (
              <h2>2. 리스트 생성</h2>
            )}

            {/* SHARED: List creation methods */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'List Creation Methods' : '리스트 생성 방법'}</div>
              <pre><code>{`# 1. 대괄호 []로 직접 생성
fruits = ["사과", "바나나", "오렌지"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]  # 다양한 자료형 혼합

# 2. list() 함수로 다른 자료형에서 변환
chars = list("Hello")       # ['H', 'e', 'l', 'l', 'o']
nums = list(range(1, 6))    # [1, 2, 3, 4, 5]
tup_to_list = list((1, 2, 3))  # [1, 2, 3] (튜플 → 리스트)

# 3. 빈 리스트 생성
empty1 = []
empty2 = list()

# 4. 반복 생성 (연산자 *)
zeros = [0] * 5              # [0, 0, 0, 0, 0]
pattern = [1, 2] * 3         # [1, 2, 1, 2, 1, 2]

# 5. range()로 생성
one_to_ten = list(range(1, 11))    # [1, 2, 3, ..., 10]
evens = list(range(2, 21, 2))      # [2, 4, 6, ..., 20]
countdown = list(range(10, 0, -1)) # [10, 9, 8, ..., 1]

print(fruits)     # ['사과', '바나나', '오렌지']
print(zeros)      # [0, 0, 0, 0, 0]
print(one_to_ten) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 3. Indexing ========== */}
                <h2>3. Indexing</h2>

                <p>
                  Each element in a list is accessed by an <strong>index</strong> number.
                  Indices start from <strong>0</strong>, and negative indices count <strong>from the end</strong>.
                </p>

                <h3>3.1 Positive/Negative Index Mapping</h3>
              </>
            ) : (
              <>
                {/* ========== 3. 인덱싱 ========== */}
                <h2>3. 인덱싱 (Indexing)</h2>

                <p>
                  리스트의 각 요소는 <strong>인덱스(index)</strong>라는 번호로 접근합니다.
                  인덱스는 <strong>0부터 시작</strong>하며, 음수 인덱스는 <strong>뒤에서부터</strong> 셉니다.
                </p>

                <h3>3.1 양수/음수 인덱스 매핑</h3>
              </>
            )}

            {/* SHARED: Index structure */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Index Structure' : '인덱스 구조'}</div>
              <pre><code>{`# 리스트:      ["A",  "B",  "C",  "D",  "E"]
# 양수 인덱스:    0     1     2     3     4
# 음수 인덱스:   -5    -4    -3    -2    -1

letters = ["A", "B", "C", "D", "E"]

# 양수 인덱스 (왼쪽에서부터)
print(letters[0])   # A (첫 번째)
print(letters[2])   # C (세 번째)
print(letters[4])   # E (다섯 번째)

# 음수 인덱스 (오른쪽에서부터)
print(letters[-1])  # E (마지막)
print(letters[-2])  # D (뒤에서 두 번째)
print(letters[-5])  # A (뒤에서 다섯 번째 = 첫 번째)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>3.2 Modifying Values by Index</h3>
            ) : (
              <h3>3.2 인덱스로 값 수정</h3>
            )}

            {/* SHARED: Modifying values by index */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Modifying Values by Index' : '인덱스를 이용한 값 수정'}</div>
              <pre><code>{`scores = [85, 92, 78, 96, 88]
print(f"수정 전: {scores}")

# 인덱스로 특정 요소 수정
scores[2] = 80   # 78 → 80
scores[-1] = 90  # 88 → 90
print(f"수정 후: {scores}")  # [85, 92, 80, 96, 90]

# IndexError: 범위를 벗어난 인덱스 접근
# print(scores[10])  # IndexError: list index out of range`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 4. Slicing ========== */}
                <h2>4. Slicing</h2>

                <p>
                  Slicing extracts a <strong>portion (sub-list)</strong> of a list.
                  It uses the format <code>list[start:end:step]</code>.
                </p>
              </>
            ) : (
              <>
                {/* ========== 4. 슬라이싱 ========== */}
                <h2>4. 슬라이싱 (Slicing)</h2>

                <p>
                  슬라이싱은 리스트의 <strong>일부분(부분 리스트)</strong>을 추출하는 기능입니다.
                  <code>list[start:end:step]</code> 형태로 사용합니다.
                </p>
              </>
            )}

            {/* SHARED: Slicing syntax and examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Slicing Syntax and Examples' : '슬라이싱 문법과 예시'}</div>
              <pre><code>{`numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# list[start:end] → start부터 end-1까지
print(numbers[2:5])    # [2, 3, 4]
print(numbers[0:3])    # [0, 1, 2]

# start 생략: 처음부터
print(numbers[:4])     # [0, 1, 2, 3]

# end 생략: 끝까지
print(numbers[7:])     # [7, 8, 9]

# 둘 다 생략: 전체 복사
print(numbers[:])      # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# step 지정: 간격
print(numbers[::2])    # [0, 2, 4, 6, 8] (짝수 인덱스)
print(numbers[1::2])   # [1, 3, 5, 7, 9] (홀수 인덱스)

# 역순
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
print(numbers[7:2:-1]) # [7, 6, 5, 4, 3]

# 슬라이싱으로 부분 수정
numbers[1:4] = [10, 20, 30]
print(numbers)  # [0, 10, 20, 30, 4, 5, 6, 7, 8, 9]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 5. List Methods ========== */}
                <h2>5. List Methods</h2>

                <h3>5.1 Element Addition Methods</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Method</th><th>Description</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>append(x)</code></td><td>Add 1 element to the end</td><td><code>lst.append(4)</code></td></tr>
                    <tr><td><code>insert(i, x)</code></td><td>Insert at index i</td><td><code>lst.insert(0, "a")</code></td></tr>
                    <tr><td><code>extend(list)</code></td><td>Add elements from another list</td><td><code>lst.extend([4, 5])</code></td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                {/* ========== 5. 리스트 메서드 ========== */}
                <h2>5. 리스트 메서드</h2>

                <h3>5.1 요소 추가 메서드</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>메서드</th><th>설명</th><th>사용 예</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>append(x)</code></td><td>끝에 요소 1개 추가</td><td><code>lst.append(4)</code></td></tr>
                    <tr><td><code>insert(i, x)</code></td><td>인덱스 i 위치에 삽입</td><td><code>lst.insert(0, "a")</code></td></tr>
                    <tr><td><code>extend(list)</code></td><td>다른 리스트의 요소들을 추가</td><td><code>lst.extend([4, 5])</code></td></tr>
                  </tbody>
                </table>
              </>
            )}

            {/* SHARED: Addition methods examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Addition Method Examples' : '추가 메서드 예시'}</div>
              <pre><code>{`# append: 끝에 하나 추가
fruits = ["사과", "바나나"]
fruits.append("오렌지")
print(fruits)  # ['사과', '바나나', '오렌지']

# insert: 특정 위치에 삽입
fruits.insert(0, "포도")     # 맨 앞에 삽입
fruits.insert(2, "딸기")     # 인덱스 2 위치에 삽입
print(fruits)  # ['포도', '사과', '딸기', '바나나', '오렌지']

# extend: 다른 리스트의 요소들을 추가
fruits.extend(["망고", "키위"])
print(fruits)  # ['포도', '사과', '딸기', '바나나', '오렌지', '망고', '키위']

# ★ append vs extend 차이 (매우 중요!)
a = [1, 2, 3]
a.append([4, 5])   # 리스트 자체를 하나의 요소로 추가
print(a)  # [1, 2, 3, [4, 5]]  ← 중첩 리스트!

b = [1, 2, 3]
b.extend([4, 5])   # 각 요소를 개별적으로 추가
print(b)  # [1, 2, 3, 4, 5]  ← 평탄한 리스트`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                <h3>5.2 Element Deletion Methods</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Method</th><th>Description</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>remove(x)</code></td><td>Delete first element with value x</td><td><code>lst.remove("a")</code></td></tr>
                    <tr><td><code>pop(i)</code></td><td>Remove and return element at index i</td><td><code>lst.pop(0)</code></td></tr>
                    <tr><td><code>pop()</code></td><td>Remove and return the last element</td><td><code>lst.pop()</code></td></tr>
                    <tr><td><code>clear()</code></td><td>Delete all elements</td><td><code>lst.clear()</code></td></tr>
                    <tr><td><code>del list[i]</code></td><td>Delete element at index i (keyword)</td><td><code>del lst[0]</code></td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h3>5.2 요소 삭제 메서드</h3>
                <table className="lesson-table">
                  <thead>
                    <tr><th>방법</th><th>설명</th><th>사용 예</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>remove(x)</code></td><td>값이 x인 첫 번째 요소 삭제</td><td><code>lst.remove("a")</code></td></tr>
                    <tr><td><code>pop(i)</code></td><td>인덱스 i의 요소를 꺼냄 (반환 + 삭제)</td><td><code>lst.pop(0)</code></td></tr>
                    <tr><td><code>pop()</code></td><td>마지막 요소를 꺼냄</td><td><code>lst.pop()</code></td></tr>
                    <tr><td><code>clear()</code></td><td>모든 요소 삭제</td><td><code>lst.clear()</code></td></tr>
                    <tr><td><code>del list[i]</code></td><td>인덱스 i의 요소 삭제 (키워드)</td><td><code>del lst[0]</code></td></tr>
                  </tbody>
                </table>
              </>
            )}

            {/* SHARED: Deletion methods examples */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Deletion Method Examples' : '삭제 메서드 예시'}</div>
              <pre><code>{`numbers = [10, 20, 30, 20, 40, 50]

# remove: 값으로 삭제 (첫 번째만)
numbers.remove(20)
print(numbers)  # [10, 30, 20, 40, 50]  ← 첫 번째 20만 삭제됨

# pop: 인덱스로 꺼냄 (반환값 있음)
removed = numbers.pop(1)
print(f"꺼낸 값: {removed}")  # 꺼낸 값: 30
print(numbers)               # [10, 20, 40, 50]

# pop(): 마지막 요소 꺼냄
last = numbers.pop()
print(f"마지막 값: {last}")   # 마지막 값: 50
print(numbers)               # [10, 20, 40]

# del: 키워드로 삭제
del numbers[0]
print(numbers)  # [20, 40]

# clear: 전부 삭제
numbers.clear()
print(numbers)  # []`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>5.3 Search Methods</h3>
            ) : (
              <h3>5.3 탐색 메서드</h3>
            )}

            {/* SHARED: Search methods */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Search-Related Methods' : '탐색 관련 메서드'}</div>
              <pre><code>{`fruits = ["사과", "바나나", "오렌지", "바나나", "포도"]

# index: 값의 인덱스 반환 (첫 번째 발견 위치)
print(fruits.index("바나나"))   # 1
print(fruits.index("포도"))     # 4

# count: 값의 개수 반환
print(fruits.count("바나나"))   # 2
print(fruits.count("딸기"))     # 0

# in 연산자: 포함 여부 확인 (True/False)
print("사과" in fruits)         # True
print("딸기" in fruits)         # False
print("딸기" not in fruits)     # True`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>5.4 Sorting Methods</h3>
            ) : (
              <h3>5.4 정렬 메서드</h3>
            )}

            {/* SHARED: Sorting methods */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Sorting: sort() vs sorted()' : '정렬: sort() vs sorted()'}</div>
              <pre><code>{`numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# ★ sort(): 원본 리스트를 직접 정렬 (반환값: None)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

# 내림차순 정렬
numbers.sort(reverse=True)
print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]

# ★ sorted(): 정렬된 새 리스트 반환 (원본 변경 안 함)
original = [3, 1, 4, 1, 5, 9]
sorted_list = sorted(original)
print(f"원본: {original}")       # [3, 1, 4, 1, 5, 9] (변경 없음)
print(f"정렬: {sorted_list}")    # [1, 1, 3, 4, 5, 9]

# ★ sort() vs sorted() 핵심 차이
# sort() → 원본 변경, None 반환
# sorted() → 원본 유지, 새 리스트 반환

# reverse(): 순서 뒤집기 (정렬X, 단순히 뒤집기)
data = [1, 3, 2, 5, 4]
data.reverse()
print(data)  # [4, 5, 2, 3, 1]

# copy(): 리스트 복사
a = [1, 2, 3]
b = a.copy()   # 독립적인 복사본
b.append(4)
print(f"a: {a}")  # [1, 2, 3] (영향 없음)
print(f"b: {b}")  # [1, 2, 3, 4]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h2>6. List Iteration</h2>
            ) : (
              <h2>6. 리스트 순회 (Iteration)</h2>
            )}

            {/* SHARED: List iteration methods */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '4 Ways to Iterate Over a List' : '리스트 순회 방법 4가지'}</div>
              <pre><code>{`fruits = ["사과", "바나나", "오렌지", "포도", "딸기"]

# 방법 1: for item in list (가장 파이썬다운 방법)
print("=== 방법 1: 직접 순회 ===")
for fruit in fruits:
    print(f"  {fruit}")

# 방법 2: for i in range(len(list)) (인덱스가 필요할 때)
print("\\n=== 방법 2: 인덱스 순회 ===")
for i in range(len(fruits)):
    print(f"  [{i}] {fruits[i]}")

# 방법 3: for i, item in enumerate(list) (인덱스 + 값 동시)
print("\\n=== 방법 3: enumerate 순회 ===")
for i, fruit in enumerate(fruits):
    print(f"  {i + 1}번째: {fruit}")

# 방법 4: while문 (특별한 조건이 필요할 때)
print("\\n=== 방법 4: while 순회 ===")
i = 0
while i < len(fruits):
    print(f"  {fruits[i]}", end=" ")
    i += 1
print()`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h2>7. List Usage Patterns</h2>
            ) : (
              <h2>7. 리스트 활용 패턴</h2>
            )}

            {/* SHARED: Practical usage patterns */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Practical Usage Patterns' : '실전 활용 패턴'}</div>
              <pre><code>{`scores = [85, 92, 78, 96, 88, 73, 91, 84]

# 합계와 평균
total = sum(scores)
average = total / len(scores)
print(f"합계: {total}, 평균: {average:.1f}")

# 최대값과 최소값
print(f"최고점: {max(scores)}, 최저점: {min(scores)}")

# 필터링: 조건을 만족하는 요소만 추출
above_90 = []
for s in scores:
    if s >= 90:
        above_90.append(s)
print(f"90점 이상: {above_90}")  # [92, 96, 91]

# 변환: 각 요소에 연산 적용 (10점 보너스)
bonus_scores = []
for s in scores:
    bonus_scores.append(min(s + 10, 100))  # 100점 초과 방지
print(f"보너스 적용: {bonus_scores}")

# 정렬 후 상위 3명
top3 = sorted(scores, reverse=True)[:3]
print(f"상위 3명: {top3}")  # [96, 92, 91]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 8. 2D Lists ========== */}
                <h2>8. 2D Lists</h2>

                <h3>8.1 Concept</h3>
                <p>
                  A <strong>2D list</strong> is a <strong>list of lists</strong> that represents data in table or matrix form.
                  It has a structure of rows and columns, accessed with <code>list[row][col]</code>.
                </p>

                <h3>8.2 Creation and Access</h3>
              </>
            ) : (
              <>
                {/* ========== 8. 2차원 리스트 ========== */}
                <h2>8. 2차원 리스트</h2>

                <h3>8.1 개념</h3>
                <p>
                  <strong>2차원 리스트</strong>는 <strong>리스트의 리스트</strong>로, 표(table)나 행렬(matrix) 형태의 데이터를 표현합니다.
                  행(row)과 열(column)의 구조를 가지며 <code>list[행][열]</code>로 접근합니다.
                </p>

                <h3>8.2 생성과 접근</h3>
              </>
            )}

            {/* SHARED: 2D list creation and access */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '2D List Creation and Access' : '2차원 리스트 생성과 접근'}</div>
              <pre><code>{`# 3명의 학생 × 3과목 점수
grades = [
    [85, 90, 78],   # 학생 0 (홍길동): 국어, 영어, 수학
    [92, 88, 95],   # 학생 1 (김철수)
    [76, 82, 89]    # 학생 2 (이영희)
]

# 접근: grades[행][열]
print(grades[0][0])   # 85 (홍길동의 국어)
print(grades[1][2])   # 95 (김철수의 수학)
print(grades[2][1])   # 82 (이영희의 영어)

# 행 전체 접근
print(grades[0])      # [85, 90, 78] (홍길동의 모든 과목)

# 인덱스 구조 시각화:
#         열0(국어)  열1(영어)  열2(수학)
# 행0(홍길동)  85        90        78
# 행1(김철수)  92        88        95
# 행2(이영희)  76        82        89`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>8.3 Iterating with Nested for Loops</h3>
            ) : (
              <h3>8.3 이중 for문으로 순회</h3>
            )}

            {/* SHARED: 2D list iteration */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '2D List Iteration' : '2차원 리스트 순회'}</div>
              <pre><code>{`grades = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 82, 89]
]
students = ["홍길동", "김철수", "이영희"]
subjects = ["국어", "영어", "수학"]

# 전체 출력
print("===== 성적 현황 =====")
for i in range(len(grades)):
    print(f"{students[i]}: ", end="")
    for j in range(len(grades[i])):
        print(f"{subjects[j]}={grades[i][j]} ", end="")
    avg = sum(grades[i]) / len(grades[i])
    print(f"(평균: {avg:.1f})")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>8.4 Per-Student Average and Per-Subject Average</h3>
            ) : (
              <h3>8.4 학생별 평균, 과목별 평균</h3>
            )}

            {/* SHARED: Row/column processing */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Row/Column Processing' : '행별/열별 처리'}</div>
              <pre><code>{`grades = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 82, 89]
]
students = ["홍길동", "김철수", "이영희"]
subjects = ["국어", "영어", "수학"]

# 학생별(행별) 평균
print("=== 학생별 평균 ===")
for i in range(len(grades)):
    avg = sum(grades[i]) / len(grades[i])
    print(f"  {students[i]}: {avg:.1f}")

# 과목별(열별) 평균
print("\\n=== 과목별 평균 ===")
for j in range(len(subjects)):
    total = 0
    for i in range(len(grades)):
        total += grades[i][j]
    avg = total / len(grades)
    print(f"  {subjects[j]}: {avg:.1f}")

# 전체 최고/최저 점수 찾기
print("\\n=== 전체 최고/최저 ===")
max_score = grades[0][0]
min_score = grades[0][0]
max_student, max_subject = 0, 0
min_student, min_subject = 0, 0

for i in range(len(grades)):
    for j in range(len(grades[i])):
        if grades[i][j] > max_score:
            max_score = grades[i][j]
            max_student, max_subject = i, j
        if grades[i][j] < min_score:
            min_score = grades[i][j]
            min_student, min_subject = i, j

print(f"  최고: {students[max_student]}의 {subjects[max_subject]} = {max_score}점")
print(f"  최저: {students[min_student]}의 {subjects[min_subject]} = {min_score}점")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h2>9. 2D List Application: Report Card Program</h2>
            ) : (
              <h2>9. 2차원 리스트 활용: 성적표 프로그램</h2>
            )}

            {/* SHARED: Complete report card program */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Complete Report Card Program' : '완성된 성적표 프로그램'}</div>
              <pre><code>{`# 성적 데이터: [이름, 국어, 영어, 수학]
students = [
    ["홍길동", 85, 90, 78],
    ["김철수", 92, 88, 95],
    ["이영희", 76, 82, 89],
    ["박민수", 88, 75, 93],
    ["최지은", 95, 91, 87]
]

subjects = ["국어", "영어", "수학"]

# ---- 성적표 출력 ----
print("=" * 55)
print(f"{'이름':^8}{'국어':^8}{'영어':^8}{'수학':^8}{'평균':^8}{'등급':^8}")
print("=" * 55)

# 학생별 출력
total_all = 0
count_all = 0
for s in students:
    name = s[0]
    scores = s[1:]
    avg = sum(scores) / len(scores)
    total_all += sum(scores)
    count_all += len(scores)

    # 등급 판정
    if avg >= 90: grade = "A"
    elif avg >= 80: grade = "B"
    elif avg >= 70: grade = "C"
    elif avg >= 60: grade = "D"
    else: grade = "F"

    print(f"{name:^8}{s[1]:^8}{s[2]:^8}{s[3]:^8}{avg:^8.1f}{grade:^8}")

print("=" * 55)

# 과목별 평균
print(f"{'과목평균':^8}", end="")
for j in range(len(subjects)):
    subj_total = sum(s[j + 1] for s in students)
    subj_avg = subj_total / len(students)
    print(f"{subj_avg:^8.1f}", end="")
print(f"{total_all / count_all:^8.1f}")
print("=" * 55)`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 10. 3D Lists ========== */}
                <h2>10. 3D Lists</h2>

                <h3>10.1 Concept</h3>
                <p>
                  A <strong>3D list</strong> is a <strong>list of lists of lists</strong>.
                  For example, it is used to manage subject scores for students across multiple classes.
                  Access with <code>list[dim1][dim2][dim3]</code>.
                </p>

                <h3>10.2 Creation and Iteration</h3>
              </>
            ) : (
              <>
                {/* ========== 10. 3차원 리스트 ========== */}
                <h2>10. 3차원 리스트</h2>

                <h3>10.1 개념</h3>
                <p>
                  <strong>3차원 리스트</strong>는 <strong>리스트의 리스트의 리스트</strong>입니다.
                  예를 들어 여러 반(클래스)의 학생들의 과목별 점수를 관리할 때 사용합니다.
                  <code>list[차원1][차원2][차원3]</code>으로 접근합니다.
                </p>

                <h3>10.2 생성과 순회</h3>
              </>
            )}

            {/* SHARED: 3D list example */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? '3D List: 2 Classes x 3 Students x 3 Subjects' : '3차원 리스트: 2개 반 x 3명 학생 x 3과목'}</div>
              <pre><code>{`# 2개 반 × 3명 학생 × 3과목 점수
all_grades = [
    # 1반
    [
        [85, 90, 78],   # 1반 학생1
        [92, 88, 95],   # 1반 학생2
        [76, 82, 89]    # 1반 학생3
    ],
    # 2반
    [
        [88, 75, 93],   # 2반 학생1
        [91, 84, 87],   # 2반 학생2
        [79, 95, 82]    # 2반 학생3
    ]
]

# 접근: all_grades[반][학생][과목]
print(all_grades[0][0][0])  # 85 (1반, 학생1, 국어)
print(all_grades[1][2][1])  # 95 (2반, 학생3, 영어)

# 3중 for문으로 순회: 반별 평균 비교
class_names = ["1반", "2반"]
subjects = ["국어", "영어", "수학"]

for c in range(len(all_grades)):
    total = 0
    count = 0
    print(f"\\n=== {class_names[c]} ===")
    for s in range(len(all_grades[c])):
        student_scores = all_grades[c][s]
        avg = sum(student_scores) / len(student_scores)
        total += sum(student_scores)
        count += len(student_scores)
        print(f"  학생{s + 1}: {student_scores} (평균: {avg:.1f})")
    class_avg = total / count
    print(f"  → {class_names[c]} 전체 평균: {class_avg:.1f}")

# 반 간 비교
print("\\n=== 반별 평균 비교 ===")
for c in range(len(all_grades)):
    total = sum(sum(student) for student in all_grades[c])
    count = sum(len(student) for student in all_grades[c])
    avg = total / count
    print(f"  {class_names[c]}: {avg:.1f}")`}</code></pre>
            </div>

            {lang === 'en' ? (
              <>
                {/* ========== 11. List Comprehension ========== */}
                <h2>11. List Comprehension</h2>

                <h3>11.1 Basic Syntax</h3>
                <p>
                  List comprehension is a powerful Python syntax for <strong>creating lists concisely in a single line</strong>.
                  It allows you to write shorter, more readable code compared to traditional for loops.
                </p>
              </>
            ) : (
              <>
                {/* ========== 11. 리스트 컴프리헨션 ========== */}
                <h2>11. 리스트 컴프리헨션 (List Comprehension)</h2>

                <h3>11.1 기본 문법</h3>
                <p>
                  리스트 컴프리헨션은 <strong>한 줄로 간결하게 리스트를 생성</strong>하는 파이썬의 강력한 문법입니다.
                  기존 for문보다 짧고 읽기 쉬운 코드를 작성할 수 있습니다.
                </p>
              </>
            )}

            {/* SHARED: List comprehension syntax */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'List Comprehension Syntax' : '리스트 컴프리헨션 문법'}</div>
              <pre><code>{`# 기본 형태:  [표현식 for 변수 in 시퀀스]
# 조건 포함:  [표현식 for 변수 in 시퀀스 if 조건]

# === 일반 for문 vs 컴프리헨션 비교 ===

# 예시 1: 1~10의 제곱수 리스트
# for문 방식
squares_loop = []
for i in range(1, 11):
    squares_loop.append(i ** 2)

# 컴프리헨션 방식
squares_comp = [i ** 2 for i in range(1, 11)]

print(squares_loop)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print(squares_comp)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>11.2 Conditional Comprehensions</h3>
            ) : (
              <h3>11.2 조건부 컴프리헨션</h3>
            )}

            {/* SHARED: Conditional comprehensions */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'List Comprehension with Conditions' : '조건이 있는 리스트 컴프리헨션'}</div>
              <pre><code>{`# 짝수만 필터링
evens = [x for x in range(1, 21) if x % 2 == 0]
print(f"짝수: {evens}")  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 80점 이상만 추출
scores = [85, 62, 78, 96, 45, 88, 73, 91]
high_scores = [s for s in scores if s >= 80]
print(f"80점 이상: {high_scores}")  # [85, 96, 88, 91]

# 문자열에서 모음만 추출
text = "Hello World"
vowels = [c for c in text if c.lower() in "aeiou"]
print(f"모음: {vowels}")  # ['e', 'o', 'o']

# 양수만 추출
numbers = [-3, 5, -1, 7, 0, -8, 4, 2]
positives = [n for n in numbers if n > 0]
print(f"양수: {positives}")  # [5, 7, 4, 2]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>11.3 Nested Comprehensions</h3>
            ) : (
              <h3>11.3 중첩 컴프리헨션</h3>
            )}

            {/* SHARED: Nested comprehensions */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Nested List Comprehensions' : '중첩 리스트 컴프리헨션'}</div>
              <pre><code>{`# 이중 for문 → 컴프리헨션
# 구구단 2~9단의 5번째 값
gugu5 = [f"{i}x5={i*5}" for i in range(2, 10)]
print(gugu5)
# ['2x5=10', '3x5=15', '4x5=20', ..., '9x5=45']

# 좌표 쌍 생성
pairs = [(x, y) for x in range(3) for y in range(3)]
print(pairs)
# [(0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)]`}</code></pre>
            </div>

            {lang === 'en' ? (
              <h3>11.4 Creating 2D Lists with Comprehensions</h3>
            ) : (
              <h3>11.4 2차원 리스트 생성</h3>
            )}

            {/* SHARED: Creating 2D lists with comprehensions */}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Creating 2D Lists with Comprehensions' : '컴프리헨션으로 2차원 리스트 생성'}</div>
              <pre><code>{`# 3x4 행렬 (모두 0)
rows, cols = 3, 4
matrix = [[0 for j in range(cols)] for i in range(rows)]
print(matrix)
# [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

# 단위 행렬 (대각선만 1)
n = 3
identity = [[1 if i == j else 0 for j in range(n)] for i in range(n)]
for row in identity:
    print(row)
# [1, 0, 0]
# [0, 1, 0]
# [0, 0, 1]

# 구구단 표 (2차원)
gugu = [[i * j for j in range(1, 10)] for i in range(2, 10)]
print(f"3 x 7 = {gugu[1][6]}")  # 3 x 7 = 21
print(f"5 x 8 = {gugu[3][7]}")  # 5 x 8 = 40

# ★ 주의: [[0]*3]*3 은 잘못된 방법!
bad_matrix = [[0] * 3] * 3  # 같은 리스트를 3번 참조!
bad_matrix[0][0] = 99
print(bad_matrix)  # [[99, 0, 0], [99, 0, 0], [99, 0, 0]] ← 전부 바뀜!

# 올바른 방법
good_matrix = [[0] * 3 for _ in range(3)]
good_matrix[0][0] = 99
print(good_matrix)  # [[99, 0, 0], [0, 0, 0], [0, 0, 0]] ← 첫 행만 바뀜`}</code></pre>
            </div>

            {/* ========== Key Summary ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li>A <strong>list</strong> is a mutable data structure that stores multiple data items in order</li>
                  <li><strong>Indexing</strong>: <code>list[i]</code> (starts from 0, negative indices count from the end)</li>
                  <li><strong>Slicing</strong>: <code>list[start:end:step]</code> extracts a sub-list</li>
                  <li><strong>Adding</strong>: <code>append()</code> (add 1), <code>extend()</code> (add multiple), <code>insert()</code> (at position)</li>
                  <li><strong>Deleting</strong>: <code>remove()</code> (by value), <code>pop()</code> (by index, returns item), <code>del</code> (keyword)</li>
                  <li><code>sort()</code> sorts the original (returns None); <code>sorted()</code> returns a new list (original unchanged)</li>
                  <li><strong>2D list</strong>: <code>list[row][col]</code> &mdash; used for tables, matrices, report cards, etc.</li>
                  <li><strong>3D list</strong>: <code>list[dim1][dim2][dim3]</code> &mdash; used for class-based grades, etc.</li>
                  <li><strong>List comprehension</strong>: <code>[expression for var in sequence if condition]</code> for concise creation</li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.keySummary')}</h3>
                <ul>
                  <li><strong>리스트</strong>는 여러 데이터를 순서대로 저장하는 가변(mutable) 자료 구조이다</li>
                  <li><strong>인덱싱</strong>: <code>list[i]</code> (0부터 시작, 음수는 뒤에서부터)</li>
                  <li><strong>슬라이싱</strong>: <code>list[start:end:step]</code>으로 부분 리스트를 추출한다</li>
                  <li><strong>추가</strong>: <code>append()</code> (1개 추가), <code>extend()</code> (여러 개 추가), <code>insert()</code> (위치 지정)</li>
                  <li><strong>삭제</strong>: <code>remove()</code> (값으로), <code>pop()</code> (인덱스로 꺼냄), <code>del</code> (키워드)</li>
                  <li><code>sort()</code>는 원본을 정렬(반환 None), <code>sorted()</code>는 새 리스트 반환(원본 유지)</li>
                  <li><strong>2차원 리스트</strong>: <code>list[행][열]</code> &mdash; 표, 행렬, 성적표 등에 활용</li>
                  <li><strong>3차원 리스트</strong>: <code>list[차원1][차원2][차원3]</code> &mdash; 반별 성적 등에 활용</li>
                  <li><strong>리스트 컴프리헨션</strong>: <code>[표현식 for 변수 in 시퀀스 if 조건]</code>으로 간결하게 생성</li>
                </ul>
              </div>
            )}

            {/* ========== Common Mistakes ========== */}
            {lang === 'en' ? (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li><strong>Index out of range:</strong> <code>IndexError</code> &mdash; Always check the list length with <code>len()</code></li>
                  <li><strong>Shallow copy issue:</strong> <code>b = a</code> references the same list. For an independent copy, use <code>b = a.copy()</code> or <code>b = a[:]</code></li>
                  <li><strong><code>[[0]*3]*3</code> trap:</strong> References the same inner list 3 times, so changing one changes all. Use <code>[[0]*3 for _ in range(3)]</code> instead</li>
                  <li><strong><code>sort()</code> returns None:</strong> <code>result = list.sort()</code> puts None in result. If you need a return value, use <code>sorted()</code></li>
                  <li><strong>append vs extend confusion:</strong> <code>append([4,5])</code> adds the list as a single element, while <code>extend([4,5])</code> adds each element individually</li>
                </ul>
              </div>
            ) : (
              <div className="callout-box">
                <h3>{t('pythonLearning.commonMistakes')}</h3>
                <ul>
                  <li><strong>인덱스 범위 초과:</strong> <code>IndexError</code> &mdash; 리스트 길이를 <code>len()</code>으로 확인하자</li>
                  <li><strong>얕은 복사 문제:</strong> <code>b = a</code>는 같은 리스트를 참조한다. 독립 복사는 <code>b = a.copy()</code> 또는 <code>b = a[:]</code> 사용</li>
                  <li><strong><code>[[0]*3]*3</code> 함정:</strong> 같은 내부 리스트를 3번 참조하여 하나를 바꾸면 전부 바뀐다. <code>[[0]*3 for _ in range(3)]</code>을 사용하자</li>
                  <li><strong><code>sort()</code>의 반환값은 None:</strong> <code>result = list.sort()</code>로 하면 result에 None이 들어간다. 반환값이 필요하면 <code>sorted()</code>를 사용하자</li>
                  <li><strong>append vs extend 혼동:</strong> <code>append([4,5])</code>는 리스트를 하나의 요소로 추가하고, <code>extend([4,5])</code>는 각 요소를 개별 추가한다</li>
                </ul>
              </div>
            )}

            {/* ========== Exercises ========== */}
            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p>
                  <strong>Exercise 1: Grade Analysis Program</strong><br/>
                  Store scores for 5 students across 3 subjects (Korean, English, Math) in a 2D list,
                  and write a program that prints each student's average and each subject's average.<br/><br/>
                  <strong>Exercise 2: List Comprehension Practice</strong><br/>
                  Use list comprehension to extract common multiples of 3 and 5 (multiples of 15) between 1 and 100.
                  Result: [15, 30, 45, 60, 75, 90]
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.exercises')}</h3>
                <p>
                  <strong>과제 1: 성적 분석 프로그램</strong><br/>
                  5명 학생의 3과목(국어, 영어, 수학) 점수를 2차원 리스트에 저장하고,
                  각 학생의 평균과 각 과목의 평균을 출력하는 프로그램을 작성하세요.<br/><br/>
                  <strong>과제 2: 리스트 컴프리헨션 활용</strong><br/>
                  리스트 컴프리헨션을 사용하여 1부터 100 사이에서 3과 5의 공배수(15의 배수)를 추출하는 코드를 작성하세요.
                  결과: [15, 30, 45, 60, 75, 90]
                </p>
              </div>
            )}

            {lang === 'en' ? (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p>
                  <strong>Problem 1: Complete Grade Management System</strong><br/>
                  Write a menu-based program to manage student grades.<br/>
                  - 1. Enter grades (name, Korean, English, Math)<br/>
                  - 2. View all grades (table format output)<br/>
                  - 3. View statistics (per-student avg, per-subject avg, highest/lowest scores)<br/>
                  - 4. Calculate class ranking (sort by average in descending order)<br/>
                  - 0. Exit
                </p>
                <p>
                  <strong>Problem 2: Tic-Tac-Toe Game Board</strong><br/>
                  Implement a tic-tac-toe game using a 3x3 2D list.<br/>
                  - A function to display the game board on screen<br/>
                  - Players take turns placing O and X<br/>
                  - Win condition check (horizontal, vertical, diagonal)<br/>
                  - Draw detection
                </p>
              </div>
            ) : (
              <div className="exercise-box">
                <h3>{t('pythonLearning.advancedProblems')}</h3>
                <p>
                  <strong>문제 1: 전체 성적 관리 시스템</strong><br/>
                  사용자 메뉴 기반으로 학생 성적을 관리하는 프로그램을 작성하세요.<br/>
                  - 1.성적 입력 (이름, 국어, 영어, 수학)<br/>
                  - 2.전체 성적 조회 (표 형태 출력)<br/>
                  - 3.통계 보기 (학생별 평균, 과목별 평균, 최고점/최저점)<br/>
                  - 4.석차 구하기 (평균 기준 내림차순 정렬)<br/>
                  - 0.종료
                </p>
                <p>
                  <strong>문제 2: 틱택토(Tic-Tac-Toe) 게임판</strong><br/>
                  3x3 2차원 리스트를 사용한 틱택토 게임을 구현하세요.<br/>
                  - 게임판을 화면에 출력하는 함수<br/>
                  - 플레이어가 번갈아 O, X를 놓는 기능<br/>
                  - 승리 조건 확인 (가로, 세로, 대각선)<br/>
                  - 무승부 판정
                </p>
              </div>
            )}

            <div className="lesson-nav">
              <Link to="/python-learning/10" className="lesson-nav-btn prev">← 10: Try-Except</Link>
              <Link to="/python-learning" className="lesson-nav-btn next">{lang === 'en' ? 'List' : '목록으로'} →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
