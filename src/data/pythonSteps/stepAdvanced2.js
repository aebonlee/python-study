// === 심화 2단계: GUI 응용 & 그래프 & 라이브러리 활용 ===
const stepAdvanced2 = [
  {
    name: 'image',
    title: '이미지 변경 GUI',
    desc: 'PhotoImage로 GIF 표시·교체',
    code: `# === 이미지 변경 GUI ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.
# (GIF 이미지 파일이 같은 폴더에 필요합니다)

from tkinter import *

def change_img():
    """입력 필드의 파일명으로 이미지 변경"""
    path = inputBox.get()
    img = PhotoImage(file=path)
    imageLabel.configure(image=img)
    imageLabel.image = img          # 참조 유지 (GC 방지)

window = Tk()

photo = PhotoImage(file="wl.gif")   # 초기 이미지 로드
imageLabel = Label(window, image=photo)
imageLabel.pack()

inputBox = Entry(window)             # 파일명 입력 필드
inputBox.pack()

button = Button(window, text='Submit', command=change_img)
button.pack()

window.mainloop()`
  },
  {
    name: 'mypaint',
    title: '마우스 그림판',
    desc: 'Canvas 드래그로 선 그리기',
    code: `# === 마우스 그림판 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

mycolor = "blue"  # 기본 그리기 색상

def paint(event):
    """마우스 드래그 시 점 그리기"""
    x1, y1 = (event.x - 1), (event.y + 1)
    x2, y2 = (event.x - 1), (event.y + 1)
    canvas.create_oval(x1, y1, x2, y2, fill=mycolor)

def change_color():
    """색상을 빨강으로 변경"""
    global mycolor
    mycolor = "red"

window = Tk()
canvas = Canvas(window)              # 캔버스 위젯
canvas.pack()
canvas.bind("<B1-Motion>", paint)    # 마우스 드래그 이벤트 바인딩

button = Button(window, text="빨강색", command=change_color)
button.pack()

window.mainloop()`
  },
  {
    name: 'mypaint2',
    title: '색상 버튼 그림판',
    desc: '색상 선택 버튼 추가 그림판',
    code: `# === 색상 버튼 그림판 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *

mycolor = "blue"

def paint(event):
    x1, y1 = (event.x - 1), (event.y + 1)
    x2, y2 = (event.x - 1), (event.y + 1)
    canvas.create_oval(x1, y1, x2, y2, fill=mycolor, outline=mycolor)

def change_color():
    global mycolor
    mycolor = "red"

window = Tk()
canvas = Canvas(window)
canvas.pack()
canvas.bind("<B1-Motion>", paint)

button = Button(window, text="빨강색", command=change_color)
button.pack()

window.mainloop()`
  },
  {
    name: 'filename',
    title: '파일 대화상자',
    desc: 'askopenfilename 파일 선택',
    code: `# === 파일 대화상자 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *
from tkinter.filedialog import askopenfilename

# askopenfilename()으로 파일 선택 대화상자를 열고
# 선택한 파일의 내용을 읽어 출력합니다.

readFile = askopenfilename()    # 파일 선택 대화상자

if readFile != None:
    infile = open(readFile, "r")
    for line in infile.readlines():
        line = line.strip()
        print(line)
    infile.close()`
  },
  {
    name: 'memo',
    title: 'tkinter 메모장',
    desc: '열기·저장·종료 메뉴 메모장',
    code: `# === tkinter 메모장 ===
# [주의] tkinter는 브라우저에서 실행할 수 없습니다.
# 코드를 다운로드하여 IDLE 또는 VS Code에서 실행하세요.

from tkinter import *
from tkinter import filedialog, messagebox

def open_file():
    """파일 열기"""
    file = filedialog.askopenfile(parent=window, mode='r')
    if file != None:
        lines = file.read()
        text.insert('1.0', lines)
        file.close()

def save_file():
    """파일 저장"""
    file = filedialog.asksaveasfile(parent=window, mode='w')
    if file != None:
        lines = text.get('1.0', END + '-1c')
        file.write(lines)
        file.close()

def exit_app():
    """종료"""
    if messagebox.askokcancel("Quit", "종료하시겠습니까?"):
        window.destroy()

def about():
    """프로그램 정보"""
    messagebox.showinfo("About", "메모장 프로그램")

window = Tk()
text = Text(window, height=30, width=80)  # 텍스트 편집 영역
text.pack()

# 메뉴 바 구성
menu = Menu(window)
window.config(menu=menu)

filemenu = Menu(menu)
menu.add_cascade(label="파일", menu=filemenu)
filemenu.add_command(label="열기", command=open_file)
filemenu.add_command(label="저장하기", command=save_file)
filemenu.add_command(label="종료", command=exit_app)

helpmenu = Menu(menu)
menu.add_cascade(label="도움말", menu=helpmenu)
helpmenu.add_command(label="프로그램 정보", command=about)

window.mainloop()`
  },
  {
    name: 'pillow5',
    title: 'Pillow 이미지 편집기',
    desc: '회전·흐리기 등 영상처리 GUI',
    code: `# === Pillow 이미지 편집기 ===
# [주의] tkinter + Pillow는 브라우저에서 실행할 수 없습니다.
# pip install Pillow 후 IDLE 또는 VS Code에서 실행하세요.

from PIL import Image, ImageTk, ImageFilter
import tkinter as tk
from tkinter import filedialog as fd

im = None
tk_img = None

def open_image():
    global im, tk_img
    fname = fd.askopenfilename()             # 파일 선택
    im = Image.open(fname)                   # 이미지 열기
    tk_img = ImageTk.PhotoImage(im)          # tkinter 호환 이미지
    canvas.create_image(250, 250, image=tk_img)
    window.update()

def image_rotate():
    global im, tk_img
    out = im.rotate(45)                      # 45도 회전
    tk_img = ImageTk.PhotoImage(out)
    canvas.create_image(250, 250, image=tk_img)
    window.update()

def image_blur():
    global im, tk_img
    out = im.filter(ImageFilter.BLUR)        # 블러 필터
    tk_img = ImageTk.PhotoImage(out)
    canvas.create_image(250, 250, image=tk_img)
    window.update()

window = tk.Tk()
canvas = tk.Canvas(window, width=500, height=500)
canvas.pack()

# 메뉴 구성
menubar = tk.Menu(window)
filemenu = tk.Menu(menubar)
ipmenu = tk.Menu(menubar)
filemenu.add_command(label="열기", command=open_image)
filemenu.add_command(label="종료", command=window.quit)
ipmenu.add_command(label="영상회전", command=image_rotate)
ipmenu.add_command(label="영상흐리게", command=image_blur)
menubar.add_cascade(label="파일", menu=filemenu)
menubar.add_cascade(label="영상처리", menu=ipmenu)

window.config(menu=menubar)
window.mainloop()`
  },
  {
    name: 'plot',
    title: '난수 선 그래프',
    desc: 'matplotlib 기본 선 그래프',
    code: `# === 난수 선 그래프 ===
# [주의] matplotlib는 브라우저에서 실행할 수 없습니다.
# pip install matplotlib 후 IDLE 또는 VS Code에서 실행하세요.

import random

# matplotlib 없이 데이터만 출력합니다.
numbers = []
for i in range(10):
    numbers.append(random.randint(1, 10))

print("생성된 난수 데이터:", numbers)
print("\\n[matplotlib 코드]")
print("import matplotlib.pyplot as plt")
print("plt.plot(numbers)")
print("plt.ylabel('some random numbers')")
print("plt.show()")`
  },
  {
    name: 'plot1',
    title: '요일별 기온 그래프',
    desc: 'X·Y 데이터 선 그래프',
    code: `# === 요일별 기온 그래프 ===
# [주의] matplotlib는 브라우저에서 실행할 수 없습니다.
# pip install matplotlib 후 IDLE 또는 VS Code에서 실행하세요.

X = [1, 2, 3, 4, 5, 6, 7]
Y = [15.6, 14.2, 16.3, 18.2, 17.1, 20.2, 22.4]

print("요일별 기온 데이터:")
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
for i in range(len(days)):
    bar = "*" * int(Y[i])     # 간단한 텍스트 막대
    print(f"  {days[i]}: {Y[i]:5.1f}도 {bar}")

print("\\n[matplotlib 코드]")
print("plt.plot(X, Y)")
print("plt.show()")`
  },
  {
    name: 'plot2',
    title: '두 도시 기온 비교',
    desc: '두 선을 하나의 그래프에',
    code: `# === 두 도시 기온 비교 ===
# [주의] matplotlib는 브라우저에서 실행할 수 없습니다.

X = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
Y1 = [15.6, 14.2, 16.3, 18.2, 17.1, 20.2, 22.4]  # 서울
Y2 = [20.1, 23.1, 23.8, 25.9, 23.4, 25.1, 26.3]  # 부산

print("서울 vs 부산 기온 비교:")
print(f"{'요일':>5} {'서울':>6} {'부산':>6}")
print("-" * 20)
for i in range(len(X)):
    print(f"{X[i]:>5} {Y1[i]:>6.1f} {Y2[i]:>6.1f}")

print("\\n[matplotlib 코드]")
print('plt.plot(X, Y1, X, Y2)')
print('plt.xlabel("day")')
print('plt.ylabel("temperature")')
print("plt.show()")`
  },
  {
    name: 'plot3',
    title: '레전드·제목 그래프',
    desc: 'label, legend, title 완성판',
    code: `# === 레전드·제목 그래프 ===
# [주의] matplotlib는 브라우저에서 실행할 수 없습니다.

X = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
Y1 = [15.6, 14.2, 16.3, 18.2, 17.1, 20.2, 22.4]  # Seoul
Y2 = [20.1, 23.1, 23.8, 25.9, 23.4, 25.1, 26.3]  # Busan

print("=== Temperatures of Cities ===")
print(f"{'Day':>5} {'Seoul':>7} {'Busan':>7}")
print("-" * 22)
for i in range(len(X)):
    print(f"{X[i]:>5} {Y1[i]:>7.1f} {Y2[i]:>7.1f}")

print("\\n[matplotlib 코드]")
print('plt.plot(X, Y1, label="Seoul")')
print('plt.plot(X, Y2, label="Busan")')
print('plt.legend(loc="upper left")')
print('plt.title("Temperatures of Cities")')
print("plt.show()")`
  },
  {
    name: 'graph',
    title: '2차 함수 그래프',
    desc: 'ax\u00B2+bx+c 그래프 그리기',
    code: `# === 2차 함수 그래프 ===
# [주의] matplotlib는 브라우저에서 실행할 수 없습니다.

# a = int(input("a : "))
a = 1   # a 계수 (직접 수정하여 테스트해보세요)
# b = int(input("b : "))
b = 0   # b 계수
# c = int(input("c : "))
c = -4  # c 계수

# x값 생성: -10.0 ~ 9.9
xlist = []
for i in range(-100, 100):
    xlist.append(i / 10.0)

# y = ax² + bx + c 계산
ylist = []
for i in xlist:
    ylist.append(a * i ** 2 + b * i + c)

# 텍스트로 간단히 표시
print(f"함수: y = {a}x² + {b}x + {c}")
print(f"x 범위: {xlist[0]} ~ {xlist[-1]}")
print(f"y 범위: {min(ylist):.1f} ~ {max(ylist):.1f}")

# 일부 값 출력
print("\\n일부 계산 결과:")
for x in [-5, -2, 0, 2, 5]:
    y = a * x ** 2 + b * x + c
    print(f"  x={x:3d} → y={y:6.1f}")

print("\\n[matplotlib 코드]")
print("plt.plot(xlist, ylist)")
print("plt.show()")`
  },
  {
    name: 'datediff',
    title: '날짜 차이 계산',
    desc: 'datetime 모듈 활용',
    code: `# === 날짜 차이 계산 ===
# datetime 모듈로 두 날짜 사이의 일수를 계산합니다.

import datetime

x = datetime.datetime(2022, 9, 1)     # 시작 날짜
y = datetime.datetime.now()            # 현재 날짜/시간

delta = y - x                          # 날짜 차이 계산

print("시작일:", str(x))
print("현재:", str(y))
print("경과 일수:", str(delta.days) + "일")`
  },
  {
    name: 'webopen',
    title: '웹브라우저 열기',
    desc: 'webbrowser.open() 사용',
    code: `# === 웹브라우저 열기 ===
# [주의] webbrowser 모듈은 브라우저(Pyodide) 환경에서 실행할 수 없습니다.
# IDLE 또는 VS Code에서 실행하세요.

# import webbrowser
# url = input("웹 사이트 URL을 입력하시오: ")
url = "google"
full_url = "https://www." + url + ".com"

print(f"열려는 URL: {full_url}")
print("# webbrowser.open(full_url)  ← 데스크톱에서 실행하세요")`
  },
  {
    name: 'webopen1',
    title: '구글 번역기 열기',
    desc: 'URL 조합 후 브라우저 열기',
    code: `# === 구글 번역기 열기 ===
# [주의] webbrowser 모듈은 브라우저(Pyodide) 환경에서 실행할 수 없습니다.

# import webbrowser
# s = input("번역할 영어 문장을 입력하시오: ")
s = "Hello World"
url = "https://translate.google.co.kr/#en/ko/" + s

print(f"번역할 문장: {s}")
print(f"구글 번역 URL: {url}")
print("# webbrowser.open(url)  ← 데스크톱에서 실행하세요")`
  },
  {
    name: 'tts',
    title: '텍스트 음성 변환',
    desc: 'gTTS로 mp3 변환·재생',
    code: `# === 텍스트 음성 변환 (TTS) ===
# [주의] gTTS 모듈은 브라우저에서 실행할 수 없습니다.
# pip install gTTS 후 IDLE 또는 VS Code에서 실행하세요.

# from gtts import gTTS
# import os

text = "안녕하세요, 여러분. 파이썬은 재미있습니다."

print(f"변환할 텍스트: {text}")
print()
print("# [gTTS 사용법]")
print("# tts = gTTS(text=text, lang='ko')")
print("# tts.save('output.mp3')")
print("# os.system('output.mp3')  ← 생성된 mp3 재생")`
  },
];
export default stepAdvanced2;
