const e=[{name:"file1",title:"파일 전체 읽기 (read)",desc:"read()로 phones.txt 읽기",code:`# === 파일 전체 읽기 (read) ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.
# io.StringIO를 사용하여 가상 파일로 시뮬레이션합니다.

import io

# 가상 파일 데이터 (원래는 phones.txt 파일)
file_content = """홍길동 010-1234-5678
김철수 010-1234-5679
김영희 010-1234-5680"""

# io.StringIO로 가상 파일 객체 생성
infile = io.StringIO(file_content)

# read()로 파일 전체 읽기
lines = infile.read()
print(lines)`},{name:"file2",title:"줄 단위 읽기 (readlines)",desc:"readlines()로 리스트 반환",code:`# === 줄 단위 읽기 (readlines) ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.
# io.StringIO를 사용하여 가상 파일로 시뮬레이션합니다.

import io

file_content = """홍길동 010-1234-5678
김철수 010-1234-5679
김영희 010-1234-5680"""

infile = io.StringIO(file_content)

# readlines()는 각 줄을 요소로 갖는 리스트를 반환합니다.
lines = infile.readlines()
print(lines)  # ['홍길동 010-1234-5678\\n', ...]`},{name:"readline",title:"한 줄씩 읽기 (readline)",desc:"while+readline() 반복",code:`# === 한 줄씩 읽기 (readline) ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.

import io

file_content = """홍길동 010-1234-5678
김철수 010-1234-5679
김영희 010-1234-5680"""

infile = io.StringIO(file_content)

# readline()으로 한 줄씩 읽기
line = infile.readline().rstrip()   # 오른쪽 공백/줄바꿈 제거
while line != "":
    print(line)
    line = infile.readline().rstrip()

infile.close()`},{name:"file6",title:"파일 쓰기 (write)",desc:"write()로 전화번호 기록",code:`# === 파일 쓰기 (write) ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.
# io.StringIO로 가상 파일에 쓰기를 시뮬레이션합니다.

import io

outfile = io.StringIO()  # 가상 출력 파일

outfile.write("홍길동 010-1234-5678\\n")
outfile.write("김철수 010-1234-5679\\n")
outfile.write("김영희 010-1234-5680\\n")

# 쓴 내용 확인
print("파일에 기록된 내용:")
print(outfile.getvalue())   # StringIO의 내용 출력

outfile.close()`},{name:"fwrite",title:"파일 쓰기 예제",desc:"phones1.txt에 데이터 기록",code:`# === 파일 쓰기 예제 ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.

import io

outfile = io.StringIO()

# write() 메서드로 데이터 기록
outfile.write("홍길동 010-1234-5678\\n")
outfile.write("김철수 010-1234-5679\\n")
outfile.write("김영희 010-1234-5680\\n")

print("파일에 기록된 내용:")
print(outfile.getvalue())
outfile.close()`},{name:"fappend",title:"파일 추가 모드",desc:"'a' 모드로 데이터 추가",code:`# === 파일 추가 모드 ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.
# 'a' 모드: 기존 내용 뒤에 새 데이터를 추가합니다.

import io

# 기존 파일 내용 시뮬레이션
existing = "홍길동 010-1234-5678\\n김철수 010-1234-5679\\n"
outfile = io.StringIO(existing)
outfile.seek(0, 2)  # 파일 끝으로 이동 (append 모드 시뮬레이션)

# 새 데이터 추가
outfile.write("강감찬 010-1234-5681\\n")
outfile.write("김유신 010-1234-5682\\n")
outfile.write("정약용 010-1234-5683\\n")

print("추가 후 전체 내용:")
print(outfile.getvalue())
outfile.close()`},{name:"fcopy",title:"파일 복사 프로그램",desc:"입출력 파일명 받아 복사",code:`# === 파일 복사 프로그램 ===
# [주의] 파일 I/O는 브라우저에서 직접 실행할 수 없습니다.
# io.StringIO로 시뮬레이션합니다.

import io

# 원본 파일 시뮬레이션
original = """첫 번째 줄입니다.
두 번째 줄입니다.
세 번째 줄입니다."""

infile = io.StringIO(original)   # 입력 파일
outfile = io.StringIO()          # 출력 파일

# 파일 전체를 읽어서 복사
s = infile.read()
outfile.write(s)

print("원본 파일 내용:")
print(original)
print("\\n복사된 파일 내용:")
print(outfile.getvalue())

infile.close()
outfile.close()`},{name:"grep",title:"파일 키워드 검색",desc:"텍스트 파일에서 Python 검색",code:`# === 파일 키워드 검색 ===
# [주의] 파일 I/O와 os.listdir()는 브라우저에서 실행할 수 없습니다.
# 가상 데이터로 시뮬레이션합니다.

# 가상 파일 데이터
files = {
    "readme.txt": "Welcome to Python programming!\\nPython is easy to learn.",
    "notes.txt": "Java and C++ are also popular.\\nBut Python is my favorite.",
    "data.txt": "This file has no keyword."
}

keyword = "Python"  # 검색할 키워드

# 각 파일에서 키워드 검색
for filename, content in files.items():
    for line in content.split("\\n"):
        if keyword in line:
            print(f"{filename} : {line}")`},{name:"split",title:"파일 검색 (split)",desc:"split() 활용 키워드 검색",code:`# === 파일 검색 (split 활용) ===
# [주의] 파일 I/O는 브라우저에서 실행할 수 없습니다.

# 가상 파일 데이터
files = {
    "readme.txt": "Welcome to Python programming!\\nPython is easy.",
    "notes.txt": "Java and C++ are popular.\\nPython is my favorite."
}

keyword = "Python"

for filename, content in files.items():
    for line in content.split("\\n"):
        line = line.rstrip()       # 오른쪽 공백 제거
        if keyword in line:
            print(f"{filename} : {line}")`},{name:"cipher",title:"시저 암호화 (파일)",desc:"파일 읽어 3칸 이동 암호화",code:`# === 시저 암호화 ===
# 알파벳을 n칸 이동시켜 암호화합니다. (시저 암호)

key = 'abcdefghijklmnopqrstuvwxyz'  # 알파벳 키

def encrypt(n, plaintext):
    """n칸 이동 시저 암호화 함수"""
    result = ''
    for l in plaintext.lower():      # 소문자로 변환 후 처리
        try:
            i = (key.index(l) + n) % 26  # 알파벳 인덱스 + n
            result += key[i]
        except ValueError:
            result += l                   # 알파벳이 아니면 그대로
    return result.lower()

# 원래는 파일에서 읽지만, 문자열로 대체합니다.
s = "hello python world"

encrypted = encrypt(3, s)         # 3칸 이동 암호화
print('평문:', s)
print('암호문:', encrypted)

# 복호화: -3칸 이동
decrypted = encrypt(-3, encrypted)
print('복호화:', decrypted)`},{name:"fzip",title:"gzip 파일 압축",desc:"gzip 모듈로 압축·읽기",code:`# === gzip 파일 압축 ===
# [주의] 파일 I/O는 브라우저에서 실행할 수 없습니다.
# gzip 모듈의 사용법을 보여주는 코드입니다.

# gzip 모듈은 파일 시스템 접근이 필요하므로 코드만 확인하세요.
# 아래는 gzip의 기본 사용법입니다.

data = """You said some winds blow forever
And I didn't understand
But you saw my eyes were asking
And smiling you took my hand
So we walked along the seaside"""

print("원본 데이터:")
print(data)
print(f"\\n원본 크기: {len(data.encode('UTF-8'))} bytes")

# 실제 gzip 사용법 (파일 시스템 필요):
# import gzip
# f = gzip.open('data.gz', 'wb')
# f.write(data.encode('UTF-8'))
# f.close()
#
# f = gzip.open('data.gz', 'rb')
# result = f.read().decode('UTF-8')
# print(result)
# f.close()`},{name:"csv1",title:"CSV 읽기 (기본)",desc:"csv.reader()로 전체 출력",code:`# === CSV 읽기 (기본) ===
# csv 모듈로 CSV 형식 데이터를 읽습니다.
# io.StringIO를 사용하여 가상 CSV 파일을 시뮬레이션합니다.

import csv
import io

# 가상 CSV 데이터 (weather.csv 시뮬레이션)
csv_data = """날짜,최고기온,최저기온,평균기온
2024-01-01,5.2,-2.1,1.5
2024-01-02,3.8,-3.5,0.2
2024-01-03,7.1,-1.0,3.1
2024-01-04,2.5,-4.2,-0.9"""

f = io.StringIO(csv_data)
data = csv.reader(f)             # csv.reader()로 읽기

for row in data:
    print(row)                    # 각 행을 리스트로 출력

f.close()`},{name:"csv2",title:"CSV 읽기 (헤더 제거)",desc:"next()로 헤더 건너뛰기",code:`# === CSV 읽기 (헤더 제거) ===
# next()로 첫 행(헤더)을 건너뛰고 데이터만 읽습니다.

import csv
import io

csv_data = """날짜,최고기온,최저기온,평균기온
2024-01-01,5.2,-2.1,1.5
2024-01-02,3.8,-3.5,0.2
2024-01-03,7.1,-1.0,3.1
2024-01-04,2.5,-4.2,-0.9"""

f = io.StringIO(csv_data)
data = csv.reader(f)

header = next(data)               # 첫 행(헤더) 건너뛰기
print("헤더:", header)

for row in data:                  # 데이터 행만 출력
    print(row)

f.close()`},{name:"csv3",title:"CSV 최솟값 찾기",desc:"float 변환 후 최솟값 분석",code:`# === CSV 최솟값 찾기 ===
# CSV 데이터에서 특정 열의 최솟값을 찾습니다.

import csv
import io

csv_data = """날짜,최고기온,최저기온,평균기온
2024-01-01,5.2,-2.1,1.5
2024-01-02,3.8,-3.5,0.2
2024-01-03,7.1,-1.0,3.1
2024-01-04,2.5,-4.2,-0.9"""

f = io.StringIO(csv_data)
data = csv.reader(f)
header = next(data)               # 헤더 건너뛰기

temp = 1000                        # 최솟값 초기값 (충분히 큰 수)
for row in data:
    if temp > float(row[3]):      # 평균기온(4번째 열)과 비교
        temp = float(row[3])

print(f"평균기온 최솟값: {temp}")

f.close()`}];export{e as default};
