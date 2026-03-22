// === 10단계: 리스트와 딕셔너리 ===
const step10 = [
  {
    name: 'list',
    title: '리스트 기초',
    desc: '생성, append, 인덱싱, in 연산자',
    code: `# === 리스트 기초 ===
# 리스트는 여러 값을 하나의 변수에 저장하는 자료구조입니다.

slist = ['영어', '수학', '사회', '과학']  # 문자열 리스트

print("과목 리스트:", slist)
print("첫 번째 과목:", slist[0])   # 인덱싱 (0부터 시작)
print("마지막 과목:", slist[-1])   # 음수 인덱스 (뒤에서부터)
print("과목 수:", len(slist))      # 리스트 길이`
  },
  {
    name: 'list1',
    title: '리스트 연산 모음',
    desc: '인덱싱, len(), in/not in',
    code: `# === 리스트 연산 모음 ===
# 리스트의 다양한 연산을 알아봅니다.

list1 = [1, 2, 3, 4, 5]       # 정수 리스트
list2 = ["a", "b", "c", "d"]  # 문자열 리스트

# 빈 리스트에 요소 추가 (append)
mylist = []
mylist.append(1)
mylist.append(2)
mylist.append(6)
mylist.append(3)
print("append 결과:", mylist)  # [1, 2, 6, 3]`
  },
  {
    name: 'list2',
    title: '리스트 메서드',
    desc: 'append, insert, remove, pop',
    code: `# === 리스트 메서드 ===
# 리스트의 주요 메서드를 알아봅니다.

slist = ['영어', '수학', '사회', '과학']
print("원본:", slist)

# 인덱싱
print("slist[0]:", slist[0])          # 첫 번째 요소

# len() - 리스트 길이
numbers = [1, 2, 3, 4, 5, 6]
print("numbers 길이:", len(numbers))

# in / not in - 포함 여부
print("6 in numbers:", 6 in numbers)       # True
print("10 in numbers:", 10 in numbers)     # False
print("10 not in numbers:", 10 not in numbers)  # True

# 문자열에서도 in 사용 가능
print("'e' in 'Hello':", 'e' in 'Hello')  # True`
  },
  {
    name: 'list3',
    title: '리스트 슬라이싱·집계',
    desc: '+, *, min/max/sum',
    code: `# === 리스트 슬라이싱·집계 ===
# 리스트 조작 메서드와 집계 함수를 알아봅니다.

myList = ["우유", "사과", "두부", "소고기"]

# for 루프로 순회
for item in myList:
    print(item)

# 인덱스로 순회
print("\\n인덱스로 순회:")
for i in range(len(myList)):
    print(f"  [{i}] {myList[i]}")

# 요소 수정
myList[1] = '커피'          # 인덱스 1 요소 변경
print("\\n수정 후:", myList)

# append, insert, remove, pop
myList.append("케이크")      # 맨 뒤에 추가
print("append 후:", myList)

myList.insert(1, "빵")       # 인덱스 1에 삽입
print("insert 후:", myList)

myList.remove("두부")        # 값으로 삭제
print("remove 후:", myList)

item = myList.pop(0)         # 인덱스 0 삭제 및 반환
print(f"pop(0) → '{item}', 남은 리스트:", myList)`
  },
  {
    name: 'list4',
    title: '리스트 정렬',
    desc: 'sort(), sorted(), reverse',
    code: `# === 리스트 정렬 ===
# 리스트 연산(+, *), 슬라이싱, 집계 함수

# 리스트 연결 (+)
myList = ["우유", "사과"]
yourList = ["두부", "소고기"]
print("+ 연산:", myList + yourList)

# 리스트 반복 (*)
print("* 연산:", myList * 2)

# 슬라이싱
letters = ['A', 'B', 'C', 'D', 'E', 'F']
print("letters[0:3]:", letters[0:3])  # ['A', 'B', 'C']
print("letters[:3]:", letters[:3])    # ['A', 'B', 'C']
print("letters[3:]:", letters[3:])    # ['D', 'E', 'F']

# 집계 함수: min, max, sum
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print("\\nmin:", min(numbers))   # 최솟값: 1
print("max:", max(numbers))     # 최댓값: 9
print("sum:", sum(numbers))     # 합계: 45

# 문자열/리스트에서도 min 사용 가능
print("min('abc..z'):", min("abcdefghijklmnopqrstuvwxyz"))
print("min(['dog','cat','tiger']):", min(["dog", "cat", "tiger"]))`
  },
  {
    name: 'dict1',
    title: '딕셔너리 기초',
    desc: '키로 값 조회·수정',
    code: `# === 리스트 정렬 ===
# sort(), sorted(), reverse 메서드

numbers = [9, 6, 7, 1, 8, 4, 5, 3, 2]

# sort() - 원본 리스트 변경 (오름차순)
numbers.sort()
print("sort() 후:", numbers)

# sorted() - 새 리스트 반환 (원본 유지)
numbers = [9, 6, 7, 1, 8, 4, 5, 3, 2]
new_list = sorted(numbers)
print("sorted():", new_list)

# 내림차순 정렬
numbers = [9, 6, 7, 1, 8, 4, 5, 3, 2]
new_list = sorted(numbers, reverse=True)
print("내림차순:", new_list)`
  },
  {
    name: 'dict2',
    title: '딕셔너리 생성·keys/values',
    desc: 'keys(), values() 메서드',
    code: `# === 딕셔너리 기초 ===
# 딕셔너리는 {키: 값} 쌍으로 데이터를 저장합니다.

phone_book = {'홍길동': '1234', '이순신': '1235', '강감찬': '1236'}

# 키로 값 조회
print("강감찬의 번호:", phone_book["강감찬"])

# 값 수정
phone_book["강감찬"] = '9999'
print("수정 후:", phone_book["강감찬"])`
  },
  {
    name: 'dict3',
    title: '딕셔너리 순회·삭제',
    desc: 'sorted(), pop(), clear()',
    code: `# === 딕셔너리 생성·keys/values ===
# 빈 딕셔너리에 항목을 추가하고, keys(), values() 사용법

phone_book = {}  # 빈 딕셔너리

# 항목 추가 (딕셔너리[키] = 값)
phone_book["홍길동"] = '1234'
phone_book["이순신"] = '1235'
phone_book["강감찬"] = '1236'
print("전화번호부:", phone_book)

# keys() - 모든 키 반환
print("키 목록:", phone_book.keys())

# values() - 모든 값 반환
print("값 목록:", phone_book.values())`
  },
  {
    name: 'eng_dict',
    title: '영어 사전 검색',
    desc: '딕셔너리로 영한 사전 구현',
    code: `# === 영어 사전 검색 ===
# 딕셔너리로 간단한 영한 사전을 구현합니다.

english_dict = {}

# 단어 등록
english_dict['one'] = '하나'
english_dict['two'] = '둘'
english_dict['three'] = '셋'
english_dict['four'] = '넷'
english_dict['five'] = '다섯'

# 검색할 단어 목록 (원래는 input()으로 반복 입력)
words_to_search = ["one", "three", "five"]

for word in words_to_search:
    if word in english_dict:
        print(f"{word} → {english_dict[word]}")
    else:
        print(f"{word} → 사전에 없는 단어입니다.")`
  },
  {
    name: 'schedule',
    title: '일정 관리',
    desc: '날짜-일정 딕셔너리 관리',
    code: `# === 일정 관리 프로그램 ===
# 딕셔너리로 날짜별 일정을 관리합니다.

mydict = {}

# 일정 데이터 (원래는 input()으로 반복 입력)
schedules = [
    ("3/15", "프로젝트 발표"),
    ("3/20", "중간고사"),
    ("4/01", "과제 제출"),
]

for date, job in schedules:
    if date not in mydict:
        mydict[date] = job           # 새 일정 추가
        print(f"일정 추가: {date} → {job}")
    else:
        print(f"오류: {date}에 이미 일정이 있습니다.")

print("\\n전체 일정:")
print(mydict)`
  },
  {
    name: 'stocks',
    title: '재고 검색',
    desc: '물건 재고 딕셔너리 조회',
    code: `# === 재고 검색 프로그램 ===
# 딕셔너리로 물건의 재고를 관리하고 조회합니다.

items = {
    "커피음료": 7,
    "펜": 3,
    "종이컵": 2,
    "우유": 1,
    "콜라": 4,
    "책": 5
}

# item = input("물건의 이름을 입력하시오: ")
search_items = ["콜라", "펜", "노트"]  # 검색할 목록

for item in search_items:
    if item in items:
        print(f"{item}의 재고: {items[item]}개")
    else:
        print(f"{item}: 등록되지 않은 물건입니다.")`
  },
  {
    name: 'stats',
    title: 'statistics 모듈',
    desc: 'mean, median, mode, stdev',
    code: `# === statistics 모듈 ===
# 통계 함수로 평균, 중간값, 최빈값, 표준편차를 구합니다.

import statistics

sample = [2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 6, 7]

print(f"입력 리스트={sample}")
print(f"평균={statistics.mean(sample)}")          # 산술 평균
print(f"중간값={statistics.median(sample)}")       # 중간값 (중앙값)
print(f"최빈값={statistics.mode(sample)}")         # 가장 자주 나오는 값
print(f"표준편차={statistics.stdev(sample):.4f}")  # 표본 표준편차`
  },
  {
    name: 'grades',
    title: '성적 처리',
    desc: '딕셔너리+리스트로 성적 관리',
    code: `# === 성적 처리 프로그램 ===
# 딕셔너리와 리스트를 활용하여 학생 성적을 관리합니다.

# 한글은 2칸, 영문/숫자는 1칸 차지 → 정렬 보정 함수
def rjust_kr(text, width):
    display_w = sum(2 if ord(c) > 127 else 1 for c in str(text))
    return " " * (width - display_w) + str(text)

students = [
    {"이름": "홍길동", "국어": 85, "영어": 92, "수학": 78},
    {"이름": "이순신", "국어": 90, "영어": 88, "수학": 95},
    {"이름": "강감찬", "국어": 72, "영어": 65, "수학": 80},
    {"이름": "유관순", "국어": 95, "영어": 97, "수학": 93},
    {"이름": "세종대왕", "국어": 88, "영어": 76, "수학": 90},
]

subjects = ["국어", "영어", "수학"]

print("=" * 55)
header = rjust_kr("이름", 10) + rjust_kr("국어", 6) + rjust_kr("영어", 6) + rjust_kr("수학", 6)
header += rjust_kr("합계", 6) + rjust_kr("평균", 8) + rjust_kr("등급", 8)
print(header)
print("=" * 55)

for s in students:
    total = sum(s[sub] for sub in subjects)  # 합계
    avg = total / len(subjects)              # 평균

    # 등급 판정
    if avg >= 90:
        grade = "A"
    elif avg >= 80:
        grade = "B"
    elif avg >= 70:
        grade = "C"
    else:
        grade = "D"

    row = rjust_kr(s["이름"], 10)
    row += f"{s['국어']:>6}{s['영어']:>6}{s['수학']:>6}"
    row += f"{total:>6}{avg:>8.1f}{grade:>8}"
    print(row)

# 과목별 평균
print("\\n[ 과목별 평균 ]")
for sub in subjects:
    sub_avg = sum(s[sub] for s in students) / len(students)
    print(f"  {sub}: {sub_avg:.1f}점")

# 전체 1등 찾기
top = max(students, key=lambda s: sum(s[sub] for sub in subjects))
print(f"\\n★ 전체 1등: {top['이름']} (합계 {sum(top[sub] for sub in subjects)}점)")`
  },
  {
    name: 'hangman',
    title: '행맨 게임',
    desc: '리스트로 글자 맞히기 게임',
    code: `# === 행맨 게임 ===
# 숨겨진 단어의 글자를 하나씩 맞히는 게임입니다.
# 원래는 input()으로 반복 입력하지만, 시뮬레이션합니다.

import random

# 단어 목록 (원래는 words.txt 파일에서 읽음)
words = ["python", "programming", "computer", "algorithm", "database"]
word = random.choice(words)

guesses = ''   # 추측한 글자들
turns = 10     # 남은 기회

# 시뮬레이션: 자동으로 글자 추측
all_letters = list("abcdefghijklmnopqrstuvwxyz")
random.shuffle(all_letters)

print(f"단어 길이: {len(word)}글자")
print(f"(테스트용 힌트: {word})\\n")

for guess in all_letters:
    if turns <= 0:
        break

    # 현재 상태 표시
    display = ""
    failed = 0
    for char in word:
        if char in guesses:
            display += char + " "
        else:
            display += "_ "
            failed += 1

    if failed == 0:
        print(f"\\n정답: {display}")
        print("사용자 승리!")
        break

    guesses += guess
    if guess not in word:
        turns -= 1
        print(f"추측: '{guess}' → 틀렸음! (남은 기회: {turns})")
    else:
        print(f"추측: '{guess}' → 맞았음! 현재: {display}")

if turns <= 0:
    print(f"\\n사용자 패배! 정답은 '{word}'")`
  },
];
export default step10;
