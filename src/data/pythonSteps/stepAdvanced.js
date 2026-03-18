// === 심화 1단계: GUI 프로그래밍 기초 (tkinter) ===
const stepAdvanced = [
  {
    name: 'window1',
    title: 'tkinter 기본 창',
    desc: '버튼 하나 있는 기본 GUI 창',
    code: `# === tkinter 기본 창 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()                          # 윈도우 생성
button = Button(window, text="클릭하세요!")  # 버튼 위젯 생성
button.pack()                          # 버튼을 윈도우에 배치

window.mainloop()                      # 이벤트 루프 시작`
  },
  {
    name: 'event1',
    title: 'tkinter 버튼 이벤트',
    desc: '클릭 시 메시지 출력',
    code: `# === tkinter 버튼 이벤트 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

def process():
    """버튼 클릭 시 호출되는 콜백 함수"""
    print("안녕하세요?")

window = Tk()
button = Button(window, text="클릭하세요!", command=process)  # command로 콜백 연결
button.pack()
window.mainloop()`
  },
  {
    name: 'absolute',
    title: 'tkinter 절대 배치',
    desc: 'place()로 레이블 절대 좌표 배치',
    code: `# === tkinter 절대 배치 (place) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()

# place()로 절대 좌표에 레이블 배치
w = Label(window, text="박스 #1", bg="red", fg="white")
w.place(x=0, y=0)       # (0, 0) 좌표

w = Label(window, text="박스 #2", bg="green", fg="black")
w.place(x=20, y=20)     # (20, 20) 좌표

w = Label(window, text="박스 #3", bg="blue", fg="white")
w.place(x=40, y=40)     # (40, 40) 좌표

window.mainloop()`
  },
  {
    name: 'place',
    title: 'tkinter place() 레이아웃',
    desc: '절대 좌표 레이아웃 예제',
    code: `# === tkinter place() 레이아웃 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()

# place(x, y)로 정확한 픽셀 좌표에 위젯 배치
w = Label(window, text="박스 #1", bg="red", fg="white")
w.place(x=0, y=0)

w = Label(window, text="박스 #2", bg="green", fg="black")
w.place(x=20, y=20)

w = Label(window, text="박스 #3", bg="blue", fg="white")
w.place(x=40, y=40)

window.mainloop()`
  },
  {
    name: 'temp1',
    title: '온도 변환 GUI (pack)',
    desc: 'pack() 레이아웃 온도 변환기',
    code: `# === 온도 변환 GUI (pack 레이아웃) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()

# pack()으로 위젯을 순서대로 배치
l1 = Label(window, text="화씨")     # 라벨 위젯
l2 = Label(window, text="섭씨")
l1.pack()
l2.pack()

e1 = Entry(window)                   # 입력 필드 위젯
e2 = Entry(window)
e1.pack()
e2.pack()

b1 = Button(window, text="화씨->섭씨")  # 버튼 위젯
b2 = Button(window, text="섭씨->화씨")
b1.pack()
b2.pack()

window.mainloop()`
  },
  {
    name: 'temp2',
    title: '온도 변환 GUI (grid)',
    desc: 'grid() 레이아웃 온도 변환기',
    code: `# === 온도 변환 GUI (grid 레이아웃) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()

# grid(row, column)으로 표 형태 레이아웃
l1 = Label(window, text="화씨")
l2 = Label(window, text="섭씨")
l1.grid(row=0, column=0)      # 0행 0열
l2.grid(row=1, column=0)      # 1행 0열

e1 = Entry(window)
e2 = Entry(window)
e1.grid(row=0, column=1)      # 0행 1열
e2.grid(row=1, column=1)      # 1행 1열

b1 = Button(window, text="화씨->섭씨")
b2 = Button(window, text="섭씨->화씨")
b1.grid(row=2, column=0)      # 2행 0열
b2.grid(row=2, column=1)      # 2행 1열

window.mainloop()`
  },
  {
    name: 'temp3',
    title: '온도 변환 GUI (이벤트)',
    desc: '버튼 클릭 이벤트 처리',
    code: `# === 온도 변환 GUI (이벤트 처리) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

def process():
    """버튼 클릭 시 섭씨 입력란에 '100' 입력"""
    e2.insert(0, "100")

window = Tk()

l1 = Label(window, text="화씨")
l2 = Label(window, text="섭씨")
l1.grid(row=0, column=0)
l2.grid(row=1, column=0)

e1 = Entry(window)
e2 = Entry(window)
e1.grid(row=0, column=1)
e2.grid(row=1, column=1)

# command=process로 콜백 함수 연결
b1 = Button(window, text="화씨->섭씨", command=process)
b2 = Button(window, text="섭씨->화씨")
b1.grid(row=2, column=0)
b2.grid(row=2, column=1)

window.mainloop()`
  },
  {
    name: 'temp4',
    title: '온도 변환 GUI (계산)',
    desc: '화씨→섭씨 실제 계산 완성',
    code: `# === 온도 변환 GUI (실제 계산) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

def process():
    """화씨 값을 읽어 섭씨로 변환"""
    temperature = float(e1.get())        # Entry에서 값 읽기
    mytemp = (temperature - 32) * 5 / 9  # 화씨→섭씨 변환
    e2.insert(0, str(mytemp))            # 결과를 Entry에 표시

window = Tk()

l1 = Label(window, text="화씨")
l2 = Label(window, text="섭씨")
l1.grid(row=0, column=0)
l2.grid(row=1, column=0)

e1 = Entry(window)
e2 = Entry(window)
e1.grid(row=0, column=1)
e2.grid(row=1, column=1)

b1 = Button(window, text="화씨->섭씨", command=process)
b2 = Button(window, text="섭씨->화씨")
b1.grid(row=2, column=0)
b2.grid(row=2, column=1)

window.mainloop()`
  },
  {
    name: 'temp5',
    title: '온도 변환 GUI (스타일)',
    desc: '폰트·배경 스타일 적용 완성판',
    code: `# === 온도 변환 GUI (스타일 적용) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

def process():
    temperature = float(e1.get())
    mytemp = (temperature - 32) * 5 / 9
    e2.insert(0, str(mytemp))

window = Tk()

# font, bg, fg 속성으로 스타일 적용
l1 = Label(window, text="화씨", font='helvetica 16 italic')
l2 = Label(window, text="섭씨", font='helvetica 16 italic')
l1.grid(row=0, column=0)
l2.grid(row=1, column=0)

e1 = Entry(window, bg="yellow", fg="black")   # 노란 배경
e2 = Entry(window, bg="yellow", fg="black")
e1.grid(row=0, column=1)
e2.grid(row=1, column=1)

b1 = Button(window, text="화씨->섭씨", command=process)
b2 = Button(window, text="섭씨->화씨")
b1.grid(row=2, column=0)
b2.grid(row=2, column=1)

window.mainloop()`
  },
  {
    name: 'calc1',
    title: '계산기 UI (버튼 배치)',
    desc: 'tkinter 그리드 계산기 레이아웃',
    code: `# === 계산기 UI (버튼 배치) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()
window.title("My Calculator")

# 디스플레이 (입력/결과 표시)
display = Entry(window, width=33, bg="yellow")
display.grid(row=0, column=0, columnspan=5)

# 버튼 목록
button_list = [
    '7', '8', '9', '/', 'C',
    '4', '5', '6', '*', ' ',
    '1', '2', '3', '-', ' ',
    '0', '.', '=', '+', ' '
]

def click(key):
    """버튼 클릭 시 디스플레이에 문자 추가"""
    display.insert(END, key)

# 버튼 배치 (grid 레이아웃)
row_index = 1
col_index = 0
for button_text in button_list:
    # 주의: command=click(button_text)는 즉시 실행됨 (오류 예제)
    Button(window, text=button_text, width=5,
           command=lambda t=button_text: click(t)
    ).grid(row=row_index, column=col_index)
    col_index += 1
    if col_index > 4:
        row_index += 1
        col_index = 0

window.mainloop()`
  },
  {
    name: 'calc2',
    title: '계산기 (이벤트 수정)',
    desc: '버튼 클릭 이벤트 올바른 바인딩',
    code: `# === 계산기 (이벤트 수정) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()
window.title("My Calculator")

display = Entry(window, width=33, bg="yellow")
display.grid(row=0, column=0, columnspan=5)

button_list = [
    '7', '8', '9', '/', 'C',
    '4', '5', '6', '*', ' ',
    '1', '2', '3', '-', ' ',
    '0', '.', '=', '+', ' '
]

def click(key):
    display.insert(END, key)

row_index = 1
col_index = 0
for button_text in button_list:
    # 클로저 문제 해결: 기본값 매개변수 사용
    def process(t=button_text):
        click(t)
    Button(window, text=button_text, width=5,
           command=process
    ).grid(row=row_index, column=col_index)
    col_index += 1
    if col_index > 4:
        row_index += 1
        col_index = 0

window.mainloop()`
  },
  {
    name: 'calc3',
    title: '계산기 (완성)',
    desc: 'eval()로 수식 계산 완성판',
    code: `# === 계산기 (완성) ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

window = Tk()
window.title("My Calculator")

display = Entry(window, width=33, bg="yellow")
display.grid(row=0, column=0, columnspan=5)

button_list = [
    '7', '8', '9', '/', 'C',
    '4', '5', '6', '*', ' ',
    '1', '2', '3', '-', ' ',
    '0', '.', '=', '+', ' '
]

def click(key):
    """키 입력 처리: '='이면 수식 계산"""
    if key == "=":
        result = eval(display.get())    # 수식 문자열을 계산
        s = str(result)
        display.insert(END, "=" + s)
    else:
        display.insert(END, key)

row_index = 1
col_index = 0
for button_text in button_list:
    def process(t=button_text):
        click(t)
    Button(window, text=button_text, width=5,
           command=process
    ).grid(row=row_index, column=col_index)
    col_index += 1
    if col_index > 4:
        row_index += 1
        col_index = 0

window.mainloop()`
  },
];
export default stepAdvanced;
