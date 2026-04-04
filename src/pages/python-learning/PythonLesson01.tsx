import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PythonLesson01() {
  const { t, lang } = useLanguage();

  return (
    <div className="python-lesson-detail" style={{ marginTop: 'var(--nav-height)' }}>
      <section className="page-header">
        <div className="container">
          <h1>{lang === 'en' ? 'Week 1: Python Setup & Environment' : '1주차: 파이썬 및 실습환경 안내'}</h1>
          <p>{lang === 'en' ? 'Python installation, IDLE & VS Code development environment setup' : 'Python 설치, IDLE 및 VS Code 개발환경 구성'}</p>
        </div>
      </section>
      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>{t('pythonLearning.learningObjectives')}</h3>
              {lang === 'en' ? (
                <ul>
                  <li>Understand the concept and four core elements of Computational Thinking.</li>
                  <li>Learn the history, features, and application areas of the Python language.</li>
                  <li>Set up Python installation and development environments (IDLE, VS Code).</li>
                  <li>Understand and use the difference between interactive mode and script mode.</li>
                  <li>Write and run your first Python program (Hello, World!).</li>
                </ul>
              ) : (
                <ul>
                  <li>컴퓨팅 사고(Computational Thinking)의 개념과 4가지 핵심 요소를 이해한다.</li>
                  <li>파이썬 언어의 역사, 특징, 활용 분야를 파악한다.</li>
                  <li>파이썬 설치 및 개발환경(IDLE, VS Code)을 구축한다.</li>
                  <li>대화형 모드와 스크립트 모드의 차이를 이해하고 활용한다.</li>
                  <li>첫 번째 파이썬 프로그램(Hello, World!)을 작성하고 실행한다.</li>
                </ul>
              )}
            </div>

            {/* ========== Computational Thinking ========== */}
            <h2>{lang === 'en' ? '1. What is Computational Thinking?' : '1. 컴퓨팅 사고(Computational Thinking)란?'}</h2>

            <h3>{lang === 'en' ? '1.1 Definition' : '1.1 정의'}</h3>
            {lang === 'en' ? (
              <p>
                Computational Thinking (CT) is a concept proposed by Professor <strong>Jeannette Wing</strong> of Carnegie Mellon University in 2006.
                It refers to <strong>"the ability to solve problems, design systems, and understand human behavior by leveraging the fundamental concepts of computer science."</strong>
                It is not merely about being good at programming, but rather a way of thinking that systematically analyzes complex problems and designs efficient solutions.
              </p>
            ) : (
              <p>
                컴퓨팅 사고(Computational Thinking, CT)는 2006년 카네기멜론 대학교의 <strong>지넷 윙(Jeannette Wing)</strong> 교수가
                제안한 개념으로, <strong>"컴퓨터 과학의 기본 개념을 활용하여 문제를 해결하고, 시스템을 설계하며, 인간 행동을 이해하는 사고 능력"</strong>을
                의미합니다. 단순히 프로그래밍을 잘하는 것이 아니라, 복잡한 문제를 체계적으로 분석하고 효율적인 해결 방법을 설계하는 사고방식입니다.
              </p>
            )}

            <h3>{lang === 'en' ? '1.2 Four Core Elements' : '1.2 4가지 핵심 요소'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Core Element</th><th>Description</th><th>Everyday Example</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Decomposition</strong></td>
                    <td>Breaking down complex problems into smaller parts</td>
                    <td>Dividing a recipe into step-by-step instructions when cooking</td>
                  </tr>
                  <tr>
                    <td><strong>Pattern Recognition</strong></td>
                    <td>Finding regularities and similarities in data</td>
                    <td>Analyzing weather patterns to predict tomorrow's weather</td>
                  </tr>
                  <tr>
                    <td><strong>Abstraction</strong></td>
                    <td>Removing unnecessary details and focusing on the essentials</td>
                    <td>A subway map showing only station connections instead of actual distances</td>
                  </tr>
                  <tr>
                    <td><strong>Algorithm Design</strong></td>
                    <td>Creating step-by-step procedures to solve problems</td>
                    <td>Finding the fastest route to school</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>핵심 요소</th><th>영문</th><th>설명</th><th>일상생활 예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>분해</strong></td>
                    <td>Decomposition</td>
                    <td>복잡한 문제를 작은 단위로 나누기</td>
                    <td>요리할 때 레시피를 단계별로 나누기</td>
                  </tr>
                  <tr>
                    <td><strong>패턴 인식</strong></td>
                    <td>Pattern Recognition</td>
                    <td>데이터에서 규칙성과 유사성 찾기</td>
                    <td>날씨 패턴을 분석하여 내일 날씨 예측</td>
                  </tr>
                  <tr>
                    <td><strong>추상화</strong></td>
                    <td>Abstraction</td>
                    <td>불필요한 세부사항을 제거하고 핵심에 집중</td>
                    <td>지하철 노선도에서 실제 거리 대신 역 연결만 표시</td>
                  </tr>
                  <tr>
                    <td><strong>알고리즘 설계</strong></td>
                    <td>Algorithm Design</td>
                    <td>문제 해결을 위한 단계적 절차 수립</td>
                    <td>학교까지 가장 빠른 경로를 찾는 방법</td>
                  </tr>
                </tbody>
              </table>
            )}

            <h3>{lang === 'en' ? '1.3 Why Computational Thinking is Needed' : '1.3 컴퓨팅 사고가 필요한 이유'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  In the era of the Fourth Industrial Revolution, technologies such as AI, big data, and IoT are permeating every field.
                  Computational thinking is a core competency of <strong>Digital Literacy</strong> regardless of your major,
                  and is essential for logically analyzing problems and designing automatable solutions.
                  In fact, major countries such as the US, UK, and Japan have introduced computational thinking education as a mandatory course from elementary school,
                  and at universities it has become a required liberal arts course across all majors.
                </p>
                <ul>
                  <li><strong>Improved problem-solving skills</strong>: Developing a habit of approaching complex problems systematically</li>
                  <li><strong>Enhanced logical thinking</strong>: Step-by-step and clear thinking practice</li>
                  <li><strong>Creative design</strong>: The ability to design efficient systems and processes</li>
                  <li><strong>Digital age adaptation</strong>: Securing foundational skills to understand and utilize technology</li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  4차 산업혁명 시대에는 인공지능, 빅데이터, 사물인터넷(IoT) 등 기술이 모든 분야에 스며들고 있습니다.
                  컴퓨팅 사고는 전공과 관계없이 <strong>디지털 리터러시(Digital Literacy)</strong>의 핵심 역량으로,
                  문제를 논리적으로 분석하고 자동화 가능한 해결책을 설계하는 데 필수적입니다.
                  실제로 미국, 영국, 일본 등 주요 국가에서는 초등학교부터 컴퓨팅 사고 교육을 필수 과정으로 도입하고 있으며,
                  대학에서는 전공 불문 교양 필수 과목으로 자리잡고 있습니다.
                </p>
                <ul>
                  <li><strong>문제 해결 능력 향상</strong>: 복잡한 문제를 체계적으로 접근하는 습관 형성</li>
                  <li><strong>논리적 사고력 강화</strong>: 단계적이고 명확한 사고 훈련</li>
                  <li><strong>창의적 설계</strong>: 효율적인 시스템과 프로세스를 설계하는 능력</li>
                  <li><strong>디지털 시대 적응</strong>: 기술을 이해하고 활용할 수 있는 기초 역량 확보</li>
                </ul>
              </>
            )}

            {/* ========== Understanding Programming Languages ========== */}
            <h2>{lang === 'en' ? '2. Understanding Programming Languages' : '2. 프로그래밍 언어의 이해'}</h2>

            <h3>{lang === 'en' ? '2.1 Evolution of Programming Languages' : '2.1 프로그래밍 언어의 발전'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  Computers can fundamentally only understand <strong>machine language</strong>, which consists of 0s and 1s.
                  Programming languages have evolved to allow humans to give instructions to computers, and can be broadly divided into three generations.
                </p>
                <ul>
                  <li><strong>1st Generation - Machine Language</strong>: Language consisting of binary (0s and 1s). Directly understood by computers but very difficult for humans to read.</li>
                  <li><strong>2nd Generation - Assembly Language</strong>: Machine language represented with symbols (MOV, ADD, etc.). Converted to machine language through an assembler.</li>
                  <li><strong>3rd Generation - High-level Language</strong>: Written in human-readable syntax. Includes Python, Java, C, etc. Converted to machine language through compilers or interpreters.</li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  컴퓨터는 기본적으로 0과 1로 이루어진 <strong>기계어(Machine Language)</strong>만 이해할 수 있습니다.
                  프로그래밍 언어는 인간이 컴퓨터에게 명령을 내리기 위해 발전해 왔으며, 크게 세 세대로 나눌 수 있습니다.
                </p>
                <ul>
                  <li><strong>1세대 - 기계어(Machine Language)</strong>: 0과 1의 이진수로 구성된 언어. 컴퓨터가 직접 이해하지만 사람이 읽기 매우 어려움.</li>
                  <li><strong>2세대 - 어셈블리어(Assembly Language)</strong>: 기계어를 기호(MOV, ADD 등)로 표현. 어셈블러(Assembler)를 통해 기계어로 변환.</li>
                  <li><strong>3세대 - 고급 언어(High-level Language)</strong>: 사람이 이해하기 쉬운 문법으로 작성. Python, Java, C 등. 컴파일러 또는 인터프리터를 통해 기계어로 변환.</li>
                </ul>
              </>
            )}

            <h3>{lang === 'en' ? '2.2 Compiler vs Interpreter' : '2.2 컴파일러 vs 인터프리터'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  There are two main methods for converting source code written in high-level languages into machine language.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Category</th><th>Compiler</th><th>Interpreter</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Translation Method</strong></td><td>Translates entire source code at once</td><td>Translates and executes source code line by line</td></tr>
                    <tr><td><strong>Execution Speed</strong></td><td>Fast (runs pre-translated code)</td><td>Relatively slow (translates during execution)</td></tr>
                    <tr><td><strong>Error Detection</strong></td><td>Shows all errors at once during translation</td><td>Stops immediately at the line with an error</td></tr>
                    <tr><td><strong>Executable File</strong></td><td>Creates standalone executable file</td><td>No separate executable file</td></tr>
                    <tr><td><strong>Representative Languages</strong></td><td>C, C++, Java (partially compiled)</td><td>Python, JavaScript, Ruby</td></tr>
                    <tr><td><strong>Development Convenience</strong></td><td>Requires recompilation after changes</td><td>Can run immediately after changes</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <p>
                  고급 언어로 작성된 소스 코드를 기계어로 변환하는 방식에는 크게 두 가지가 있습니다.
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>구분</th><th>컴파일러 (Compiler)</th><th>인터프리터 (Interpreter)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>번역 방식</strong></td><td>소스 코드 전체를 한 번에 번역</td><td>소스 코드를 한 줄씩 번역하며 실행</td></tr>
                    <tr><td><strong>실행 속도</strong></td><td>빠름 (미리 번역된 코드 실행)</td><td>상대적으로 느림 (실행 중 번역)</td></tr>
                    <tr><td><strong>오류 발견</strong></td><td>번역 시 모든 오류를 한꺼번에 표시</td><td>오류가 있는 줄에서 즉시 중단</td></tr>
                    <tr><td><strong>실행 파일</strong></td><td>독립 실행 파일 생성</td><td>별도 실행 파일 없음</td></tr>
                    <tr><td><strong>대표 언어</strong></td><td>C, C++, Java(부분 컴파일)</td><td>Python, JavaScript, Ruby</td></tr>
                    <tr><td><strong>개발 편의성</strong></td><td>수정 후 재컴파일 필요</td><td>수정 후 바로 실행 가능</td></tr>
                  </tbody>
                </table>
              </>
            )}

            <h3>{lang === 'en' ? '2.3 Comparison of Major Programming Languages' : '2.3 주요 프로그래밍 언어 비교'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Language</th><th>Primary Use</th><th>Features</th><th>Learning Difficulty</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Python</strong></td><td>Data analysis, AI, web, automation</td><td>Concise syntax, rich libraries</td><td>Easy</td></tr>
                  <tr><td><strong>Java</strong></td><td>Enterprise systems, Android apps</td><td>Platform-independent, object-oriented</td><td>Medium</td></tr>
                  <tr><td><strong>C</strong></td><td>System programming, embedded</td><td>Direct hardware control, fast speed</td><td>Hard</td></tr>
                  <tr><td><strong>JavaScript</strong></td><td>Web frontend/backend</td><td>Runs in browser, dynamic web</td><td>Medium</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>언어</th><th>주요 용도</th><th>특징</th><th>학습 난이도</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Python</strong></td><td>데이터 분석, AI, 웹, 자동화</td><td>간결한 문법, 풍부한 라이브러리</td><td>쉬움</td></tr>
                  <tr><td><strong>Java</strong></td><td>기업 시스템, 안드로이드 앱</td><td>플랫폼 독립적, 객체지향</td><td>중간</td></tr>
                  <tr><td><strong>C</strong></td><td>시스템 프로그래밍, 임베디드</td><td>하드웨어 직접 제어, 빠른 속도</td><td>어려움</td></tr>
                  <tr><td><strong>JavaScript</strong></td><td>웹 프론트/백엔드</td><td>브라우저에서 실행, 동적 웹</td><td>중간</td></tr>
                </tbody>
              </table>
            )}

            {/* ========== Python Introduction ========== */}
            <h2>{lang === 'en' ? '3. Introduction to Python' : '3. 파이썬(Python) 소개'}</h2>

            <h3>{lang === 'en' ? '3.1 History of Python' : '3.1 파이썬의 역사'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  Python is a programming language that Dutch programmer <strong>Guido van Rossum</strong> began developing as a hobby project during the Christmas holidays in 1989,
                  and released the first version (0.9.0) in <strong>1991</strong>.
                  The name "Python" comes from the British BBC comedy series <strong>"Monty Python's Flying Circus"</strong> that Guido van Rossum enjoyed, and is unrelated to snakes.
                </p>
                <ul>
                  <li><strong>1991</strong>: Python 0.9.0 released (including functions, exception handling, core data types)</li>
                  <li><strong>2000</strong>: Python 2.0 released (list comprehensions, garbage collection introduced)</li>
                  <li><strong>2008</strong>: Python 3.0 released (major overhaul abandoning backward compatibility)</li>
                  <li><strong>2020</strong>: Python 2 official support ended (End of Life)</li>
                  <li><strong>Present</strong>: Python 3.12+ is the latest, with new minor versions released annually</li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  파이썬은 네덜란드 프로그래머 <strong>귀도 반 로섬(Guido van Rossum)</strong>이 1989년 크리스마스 휴가 기간에
                  취미 프로젝트로 개발을 시작하여, <strong>1991년</strong>에 첫 번째 버전(0.9.0)을 공개한 프로그래밍 언어입니다.
                  "파이썬(Python)"이라는 이름은 귀도 반 로섬이 좋아하던 영국 BBC 코미디 시리즈
                  <strong>"Monty Python's Flying Circus"</strong>에서 따온 것으로, 뱀과는 무관합니다.
                </p>
                <ul>
                  <li><strong>1991년</strong>: Python 0.9.0 공개 (함수, 예외처리, 핵심 자료형 포함)</li>
                  <li><strong>2000년</strong>: Python 2.0 출시 (리스트 컴프리헨션, 가비지 컬렉션 도입)</li>
                  <li><strong>2008년</strong>: Python 3.0 출시 (하위 호환성을 포기한 대대적 개선)</li>
                  <li><strong>2020년</strong>: Python 2 공식 지원 종료 (End of Life)</li>
                  <li><strong>현재</strong>: Python 3.12+ 버전이 최신, 매년 새로운 마이너 버전 출시</li>
                </ul>
              </>
            )}

            <h3>{lang === 'en' ? '3.2 Python Philosophy: The Zen of Python' : '3.2 파이썬의 철학: The Zen of Python'}</h3>
            {lang === 'en' ? (
              <p>
                Python has a built-in set of design principles called <strong>"The Zen of Python"</strong>.
                You can view it by running <code>import this</code> in the Python interpreter.
                Let's look at a few key principles.
              </p>
            ) : (
              <p>
                파이썬에는 언어 설계 철학을 담은 <strong>"The Zen of Python"</strong>이 내장되어 있습니다.
                파이썬 인터프리터에서 <code>import this</code>를 실행하면 확인할 수 있습니다.
                핵심 원칙 몇 가지를 살펴보겠습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Viewing The Zen of Python' : 'The Zen of Python 확인'}</div>
              <pre><code>{`>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.        # 아름다운 것이 추한 것보다 낫다
Explicit is better than implicit.     # 명시적인 것이 암시적인 것보다 낫다
Simple is better than complex.        # 단순한 것이 복잡한 것보다 낫다
Readability counts.                   # 가독성은 중요하다
...`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '3.3 Python 2 vs Python 3' : '3.3 파이썬 2 vs 파이썬 3'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  Python 3 was released in 2008, abandoning backward compatibility with Python 2 in pursuit of language consistency and modernization.
                  Since official support for Python 2 ended on January 1, 2020, <strong>all new projects must use Python 3.</strong>
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Category</th><th>Python 2</th><th>Python 3</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>print statement</td><td><code>print "Hello"</code></td><td><code>print("Hello")</code></td></tr>
                    <tr><td>Integer division</td><td><code>3/2 = 1</code></td><td><code>3/2 = 1.5</code></td></tr>
                    <tr><td>Strings</td><td>Default ASCII</td><td>Default Unicode (UTF-8)</td></tr>
                    <tr><td>Support status</td><td>Support ended in 2020</td><td>Currently under active development</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <p>
                  파이썬 3은 2008년에 출시되었으며, 파이썬 2와의 하위 호환성을 포기하고 언어의 일관성과 현대화를 추구했습니다.
                  2020년 1월 1일부로 파이썬 2의 공식 지원이 종료되었으므로, <strong>모든 새 프로젝트는 반드시 파이썬 3을 사용해야 합니다.</strong>
                </p>
                <table className="lesson-table">
                  <thead>
                    <tr><th>구분</th><th>Python 2</th><th>Python 3</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>print 문</td><td><code>print "Hello"</code></td><td><code>print("Hello")</code></td></tr>
                    <tr><td>정수 나눗셈</td><td><code>3/2 = 1</code></td><td><code>3/2 = 1.5</code></td></tr>
                    <tr><td>문자열</td><td>기본 ASCII</td><td>기본 유니코드(UTF-8)</td></tr>
                    <tr><td>지원 상태</td><td>2020년 지원 종료</td><td>현재 활발히 개발 중</td></tr>
                  </tbody>
                </table>
              </>
            )}

            <h3>{lang === 'en' ? '3.4 Key Features of Python' : '3.4 파이썬의 주요 특징'}</h3>
            {lang === 'en' ? (
              <ul>
                <li><strong>Readable syntax</strong>: Uses keywords similar to English and distinguishes code blocks by indentation for excellent readability</li>
                <li><strong>Interpreted language</strong>: Interprets and executes code line by line, allowing immediate results without a separate compilation process</li>
                <li><strong>Dynamic Typing</strong>: No need to specify data types when declaring variables; types are automatically determined when values are assigned</li>
                <li><strong>Automatic memory management</strong>: A garbage collector automatically reclaims unused memory</li>
                <li><strong>Rich standard library</strong>: Various features are built-in following the "Batteries included" philosophy</li>
                <li><strong>Cross-platform</strong>: Works identically on various operating systems including Windows, macOS, and Linux</li>
                <li><strong>Open source</strong>: Free to use, with an active global developer community</li>
              </ul>
            ) : (
              <ul>
                <li><strong>읽기 쉬운 문법</strong>: 영어와 유사한 키워드를 사용하며, 들여쓰기로 코드 블록을 구분하여 가독성이 뛰어남</li>
                <li><strong>인터프리터 언어</strong>: 코드를 한 줄씩 해석하여 실행하므로 별도의 컴파일 과정 없이 바로 결과 확인 가능</li>
                <li><strong>동적 타이핑(Dynamic Typing)</strong>: 변수 선언 시 자료형을 미리 지정할 필요 없이, 값을 할당하면 자동으로 자료형이 결정됨</li>
                <li><strong>자동 메모리 관리</strong>: 가비지 컬렉터(Garbage Collector)가 사용하지 않는 메모리를 자동으로 회수</li>
                <li><strong>풍부한 표준 라이브러리</strong>: "Batteries included" 철학에 따라 다양한 기능이 기본 내장</li>
                <li><strong>크로스 플랫폼</strong>: Windows, macOS, Linux 등 다양한 운영체제에서 동일하게 동작</li>
                <li><strong>오픈소스</strong>: 무료로 사용 가능하며, 전 세계 개발자 커뮤니티가 활발히 기여</li>
              </ul>
            )}

            <h3>{lang === 'en' ? '3.5 Python Application Areas' : '3.5 파이썬의 활용 분야'}</h3>
            {lang === 'en' ? (
              <>
                <table className="lesson-table">
                  <thead>
                    <tr><th>Application Area</th><th>Key Libraries/Frameworks</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Web Development</strong></td><td>Django, Flask, FastAPI</td><td>Building web applications and REST APIs</td></tr>
                    <tr><td><strong>Data Analysis</strong></td><td>Pandas, NumPy, Matplotlib</td><td>Large-scale data processing, visualization, statistical analysis</td></tr>
                    <tr><td><strong>AI / Machine Learning</strong></td><td>TensorFlow, PyTorch, scikit-learn</td><td>Building and training deep learning models</td></tr>
                    <tr><td><strong>Automation / Scripting</strong></td><td>Selenium, BeautifulSoup, os</td><td>Automating repetitive tasks, web scraping</td></tr>
                    <tr><td><strong>Game Development</strong></td><td>Pygame, Arcade</td><td>Creating 2D games and simulations</td></tr>
                    <tr><td><strong>IoT / Embedded</strong></td><td>MicroPython, RPi.GPIO</td><td>Controlling small devices like Raspberry Pi</td></tr>
                    <tr><td><strong>Science / Engineering</strong></td><td>SciPy, SymPy</td><td>Numerical analysis, symbolic computation, scientific calculations</td></tr>
                  </tbody>
                </table>
                <p>
                  Python has held the #1 spot in the <strong>TIOBE Index</strong>, a programming language popularity ranking, since 2021,
                  and has consistently been chosen as the most desired language to learn in the Stack Overflow Developer Survey.
                </p>
              </>
            ) : (
              <>
                <table className="lesson-table">
                  <thead>
                    <tr><th>활용 분야</th><th>주요 라이브러리/프레임워크</th><th>설명</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>웹 개발</strong></td><td>Django, Flask, FastAPI</td><td>웹 애플리케이션 및 REST API 구축</td></tr>
                    <tr><td><strong>데이터 분석</strong></td><td>Pandas, NumPy, Matplotlib</td><td>대규모 데이터 처리, 시각화, 통계 분석</td></tr>
                    <tr><td><strong>인공지능/머신러닝</strong></td><td>TensorFlow, PyTorch, scikit-learn</td><td>딥러닝 모델 구축 및 학습</td></tr>
                    <tr><td><strong>자동화/스크립팅</strong></td><td>Selenium, BeautifulSoup, os</td><td>반복 업무 자동화, 웹 크롤링</td></tr>
                    <tr><td><strong>게임 개발</strong></td><td>Pygame, Arcade</td><td>2D 게임 및 시뮬레이션 제작</td></tr>
                    <tr><td><strong>IoT/임베디드</strong></td><td>MicroPython, RPi.GPIO</td><td>라즈베리 파이 등 소형 기기 제어</td></tr>
                    <tr><td><strong>과학/공학</strong></td><td>SciPy, SymPy</td><td>수치 해석, 기호 연산, 과학 계산</td></tr>
                  </tbody>
                </table>
                <p>
                  파이썬은 프로그래밍 언어 인기 순위인 <strong>TIOBE Index</strong>에서 2021년부터 1위를 차지하고 있으며,
                  Stack Overflow 개발자 설문에서도 가장 배우고 싶은 언어로 지속적으로 선정되고 있습니다.
                </p>
              </>
            )}

            {/* ========== Installing Python ========== */}
            <h2>{lang === 'en' ? '4. Installing Python' : '4. 파이썬 설치하기'}</h2>

            <h3>{lang === 'en' ? '4.1 Installation Process (Windows)' : '4.1 설치 과정 (Windows 기준)'}</h3>
            {lang === 'en' ? (
              <ol>
                <li>
                  <strong>Download</strong>: Visit <code>https://www.python.org/downloads/</code> in a web browser
                  and download the latest version of the Python installer.
                </li>
                <li>
                  <strong>Start installation</strong>: Run the downloaded installer. <strong>Make sure to check the "Add Python to PATH" checkbox</strong> at the bottom of the installer. (Very important!)
                </li>
                <li>
                  <strong>Choose install options</strong>: Click "Install Now" to install with default settings.
                  Advanced users can select "Customize installation" to change the installation path, etc.
                </li>
                <li>
                  <strong>Installation complete</strong>: When installation is complete, a "Setup was successful" message will appear.
                  If the "Disable path length limit" option appears, click it to remove the path length restriction.
                </li>
                <li>
                  <strong>Verify installation</strong>: Open Command Prompt (cmd) or PowerShell to verify that the installation was successful.
                </li>
              </ol>
            ) : (
              <ol>
                <li>
                  <strong>다운로드</strong>: 웹 브라우저에서 <code>https://www.python.org/downloads/</code>에 접속하여
                  최신 버전의 Python 설치 파일을 다운로드합니다.
                </li>
                <li>
                  <strong>설치 시작</strong>: 다운로드한 설치 파일을 실행합니다. 설치 화면 하단의
                  <strong> "Add Python to PATH" 체크박스를 반드시 체크</strong>합니다. (매우 중요!)
                </li>
                <li>
                  <strong>설치 옵션 선택</strong>: "Install Now"를 클릭하면 기본 설정으로 설치됩니다.
                  고급 사용자는 "Customize installation"을 선택하여 설치 경로 등을 변경할 수 있습니다.
                </li>
                <li>
                  <strong>설치 완료</strong>: 설치가 완료되면 "Setup was successful" 메시지가 표시됩니다.
                  "Disable path length limit" 옵션이 나타나면 클릭하여 경로 길이 제한을 해제합니다.
                </li>
                <li>
                  <strong>설치 확인</strong>: 명령 프롬프트(cmd) 또는 PowerShell을 열어 설치가 정상적으로 되었는지 확인합니다.
                </li>
              </ol>
            )}

            <h3>{lang === 'en' ? '4.2 What is the PATH Environment Variable?' : '4.2 PATH 환경변수란?'}</h3>
            {lang === 'en' ? (
              <p>
                <strong>PATH</strong> is a list of directories where the operating system looks for programs.
                Checking "Add Python to PATH" allows you to use the <code>python</code> command from any location.
                Without it, you would need to type the full path to the Python installation folder every time, so <strong>it must be checked.</strong>
              </p>
            ) : (
              <p>
                <strong>PATH</strong>는 운영체제가 프로그램을 찾는 경로 목록입니다.
                "Add Python to PATH"를 체크하면 어느 위치에서든 <code>python</code> 명령어를 사용할 수 있게 됩니다.
                체크하지 않으면 파이썬 설치 폴더의 전체 경로를 매번 입력해야 하므로, <strong>반드시 체크해야 합니다.</strong>
              </p>
            )}

            <h3>{lang === 'en' ? '4.3 Verifying Installation' : '4.3 설치 확인'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Verifying Python installation in terminal' : '터미널에서 파이썬 설치 확인'}</div>
              <pre><code>{`# 파이썬 버전 확인
python --version
# Python 3.12.x

# pip (패키지 관리자) 버전 확인
pip --version
# pip 24.x.x from ... (python 3.12)

# 파이썬 대화형 모드 진입
python
# Python 3.12.x ...
# Type "help", "copyright", "credits" or "license" for more information.
# >>>`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '4.4 pip Package Manager' : '4.4 pip 패키지 관리자'}</h3>
            {lang === 'en' ? (
              <p>
                <strong>pip</strong> is a tool for installing and managing Python packages (libraries).
                It has been included by default since Python 3.4.
              </p>
            ) : (
              <p>
                <strong>pip</strong>는 파이썬 패키지(라이브러리)를 설치하고 관리하는 도구입니다.
                파이썬 3.4 이상부터 기본으로 포함되어 있습니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic pip usage' : 'pip 기본 사용법'}</div>
              <pre><code>{`# 패키지 설치
pip install 패키지이름

# 패키지 목록 확인
pip list

# 패키지 삭제
pip uninstall 패키지이름

# 예: numpy 설치
pip install numpy`}</code></pre>
            </div>

            {/* ========== IDLE Development Environment ========== */}
            <h2>{lang === 'en' ? '5. IDLE Development Environment' : '5. IDLE 개발환경'}</h2>

            <h3>{lang === 'en' ? '5.1 What is IDLE?' : '5.1 IDLE이란?'}</h3>
            {lang === 'en' ? (
              <p>
                <strong>IDLE (Integrated Development and Learning Environment)</strong> is the default integrated development environment
                that comes bundled with Python. It allows you to write and run Python code immediately without any additional installation,
                making it suitable for beginners. The name IDLE is also a nod to <strong>Eric Idle</strong>,
                a member of the Monty Python comedy group from which Python gets its name.
              </p>
            ) : (
              <p>
                <strong>IDLE(Integrated Development and Learning Environment)</strong>은 파이썬을 설치하면
                함께 제공되는 기본 통합 개발 환경입니다. 별도의 설치 없이 바로 파이썬 코드를 작성하고 실행할 수 있어
                입문자에게 적합합니다. IDLE이라는 이름은 파이썬의 이름 유래인 Monty Python 멤버
                <strong>Eric Idle</strong>의 이름에서 따온 것이기도 합니다.
              </p>
            )}

            <h3>{lang === 'en' ? '5.2 Interactive Mode (Shell)' : '5.2 대화형 모드 (Interactive Mode / Shell)'}</h3>
            {lang === 'en' ? (
              <p>
                When you launch IDLE, a <strong>Shell window</strong> opens by default.
                You can enter code one line at a time at the <code>&gt;&gt;&gt;</code> prompt and immediately see the results.
                This is very useful for simple calculations and testing functions.
              </p>
            ) : (
              <p>
                IDLE을 실행하면 기본으로 <strong>Shell 창</strong>이 열립니다.
                <code>&gt;&gt;&gt;</code> 프롬프트에 코드를 한 줄씩 입력하면 즉시 결과를 확인할 수 있습니다.
                간단한 계산이나 함수 테스트에 매우 유용합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'IDLE Shell - Interactive Mode Example' : 'IDLE Shell - 대화형 모드 예시'}</div>
              <pre><code>{`>>> print("Hello, Python!")
Hello, Python!

>>> 2 + 3
5

>>> 100 / 7
14.285714285714286

>>> "Python" * 3
'PythonPythonPython'

>>> x = 10
>>> x + 20
30

>>> help(print)
Help on built-in function print in module builtins:
print(...)
    print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)
    ...`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '5.3 Script Mode' : '5.3 스크립트 모드 (Script Mode)'}</h3>
            {lang === 'en' ? (
              <p>
                To write multiple lines of code, save them, and run them repeatedly, use <strong>script mode</strong>.
                Select <code>File &gt; New File</code> in IDLE to open a new editor window.
                Write your code, save it with a <code>.py</code> extension, and press <strong>F5</strong> to run it.
              </p>
            ) : (
              <p>
                여러 줄의 코드를 작성하고 저장하여 반복 실행하려면 <strong>스크립트 모드</strong>를 사용합니다.
                IDLE에서 <code>File &gt; New File</code>을 선택하면 새로운 편집 창이 열립니다.
                코드를 작성한 후 <code>.py</code> 확장자로 저장하고, <strong>F5 키</strong>를 눌러 실행합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Script file example (my_first.py)' : '스크립트 파일 작성 예시 (my_first.py)'}</div>
              <pre><code>{`# my_first.py - 나의 첫 번째 스크립트 파일
# 작성일: 2025년 3월

print("=" * 30)
print("  나의 첫 파이썬 프로그램")
print("=" * 30)
print("이름: 홍길동")
print("학번: 2025001234")
print("전공: 컴퓨터공학과")
print()
print("파이썬 학습을 시작합니다!")`}</code></pre>
            </div>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Output after running with F5 (Shell window)' : 'F5로 실행한 결과 (Shell 창에 출력)'}</div>
              <pre><code>{`==============================
  나의 첫 파이썬 프로그램
==============================
이름: 홍길동
학번: 2025001234
전공: 컴퓨터공학과

파이썬 학습을 시작합니다!`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '5.4 Interactive Mode vs Script Mode Comparison' : '5.4 대화형 모드 vs 스크립트 모드 비교'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Category</th><th>Interactive Mode (Shell)</th><th>Script Mode</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Input method</strong></td><td>Enter one line at a time, immediate execution</td><td>Write multiple lines in a file, batch execution</td></tr>
                  <tr><td><strong>Result viewing</strong></td><td>Instant output upon input</td><td>Output after complete execution</td></tr>
                  <tr><td><strong>Code saving</strong></td><td>Cannot save (one-time use)</td><td>Saveable as .py file</td></tr>
                  <tr><td><strong>Best for</strong></td><td>Simple tests, calculations, learning</td><td>Projects, repeated execution, sharing</td></tr>
                  <tr><td><strong>Advantages</strong></td><td>Quick feedback, easy experimentation</td><td>Code reuse, systematic management</td></tr>
                  <tr><td><strong>Disadvantages</strong></td><td>Inconvenient for long code</td><td>Requires extra step to execute</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>대화형 모드 (Shell)</th><th>스크립트 모드</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>입력 방식</strong></td><td>한 줄씩 입력, 즉시 실행</td><td>여러 줄을 파일에 작성 후 일괄 실행</td></tr>
                  <tr><td><strong>결과 확인</strong></td><td>입력 즉시 결과 출력</td><td>전체 실행 후 결과 출력</td></tr>
                  <tr><td><strong>코드 저장</strong></td><td>저장 불가 (일회성)</td><td>.py 파일로 저장 가능</td></tr>
                  <tr><td><strong>적합한 용도</strong></td><td>간단한 테스트, 계산, 학습</td><td>프로젝트, 반복 실행, 공유</td></tr>
                  <tr><td><strong>장점</strong></td><td>빠른 피드백, 실험 용이</td><td>코드 재사용, 체계적 관리</td></tr>
                  <tr><td><strong>단점</strong></td><td>긴 코드 작성 불편</td><td>실행까지 한 단계 더 필요</td></tr>
                </tbody>
              </table>
            )}

            <h3>{lang === 'en' ? '5.5 Useful IDLE Features' : '5.5 IDLE의 유용한 기능'}</h3>
            {lang === 'en' ? (
              <ul>
                <li><strong>Syntax Highlighting</strong>: Enhances code readability by color-coding keywords, strings, comments, etc.</li>
                <li><strong>Auto Indentation</strong>: Automatically applies indentation after block statements like <code>if</code>, <code>for</code></li>
                <li><strong>Auto Complete</strong>: Press the <strong>Tab key</strong> to auto-complete variable names, function names, etc.</li>
                <li><strong>Code Checking</strong>: Use <code>Run &gt; Check Module</code> to check for syntax errors before running</li>
              </ul>
            ) : (
              <ul>
                <li><strong>구문 강조(Syntax Highlighting)</strong>: 키워드, 문자열, 주석 등을 색상으로 구분하여 코드 가독성을 높임</li>
                <li><strong>자동 들여쓰기(Auto Indentation)</strong>: <code>if</code>, <code>for</code> 등의 블록 문 다음에 자동으로 들여쓰기 적용</li>
                <li><strong>자동 완성(Auto Complete)</strong>: <strong>Tab 키</strong>를 누르면 변수명, 함수명 등을 자동 완성</li>
                <li><strong>코드 검사</strong>: <code>Run &gt; Check Module</code>로 문법 오류를 실행 전에 확인 가능</li>
              </ul>
            )}

            {/* ========== VS Code Development Environment ========== */}
            <h2>{lang === 'en' ? '6. VS Code Development Environment' : '6. VS Code 개발환경'}</h2>

            <h3>{lang === 'en' ? '6.1 VS Code Introduction' : '6.1 VS Code 소개'}</h3>
            {lang === 'en' ? (
              <p>
                <strong>Visual Studio Code (VS Code)</strong> is a <strong>free, open-source</strong> code editor developed by Microsoft.
                It is lightweight and fast while offering powerful features, and has consistently ranked #1 as the most used editor
                by developers in the Stack Overflow survey. It supports almost all programming languages including Python, JavaScript, Java, and C++.
              </p>
            ) : (
              <p>
                <strong>Visual Studio Code(VS Code)</strong>는 Microsoft에서 개발한 <strong>무료 오픈소스</strong> 코드 편집기입니다.
                가볍고 빠르면서도 강력한 기능을 제공하며, Stack Overflow 설문에서 개발자들이 가장 많이 사용하는 편집기로
                꾸준히 1위를 차지하고 있습니다. 파이썬뿐만 아니라 JavaScript, Java, C++ 등 거의 모든 프로그래밍 언어를 지원합니다.
              </p>
            )}

            <h3>{lang === 'en' ? '6.2 Installation Process' : '6.2 설치 과정'}</h3>
            {lang === 'en' ? (
              <ol>
                <li><strong>Download</strong>: Visit <code>https://code.visualstudio.com/</code> and download the installer for your operating system.</li>
                <li><strong>Install</strong>: Run the installer and proceed with default settings. Checking the "Open with Code" option lets you open VS Code from the right-click context menu in File Explorer.</li>
                <li><strong>Install Python Extension</strong>: After launching VS Code, click the Extensions icon (four squares) on the left sidebar and search for "Python" to install the Microsoft Python extension.</li>
              </ol>
            ) : (
              <ol>
                <li><strong>다운로드</strong>: <code>https://code.visualstudio.com/</code>에 접속하여 운영체제에 맞는 설치 파일을 다운로드합니다.</li>
                <li><strong>설치</strong>: 설치 파일을 실행하고 기본 설정으로 설치합니다. "Open with Code" 옵션을 체크하면 파일 탐색기에서 우클릭으로 VS Code를 열 수 있어 편리합니다.</li>
                <li><strong>Python 확장(Extension) 설치</strong>: VS Code를 실행한 후, 왼쪽 사이드바의 확장(Extensions) 아이콘(네모 4개 모양)을 클릭하고 "Python"을 검색하여 Microsoft에서 제공하는 Python 확장을 설치합니다.</li>
              </ol>
            )}

            <h3>{lang === 'en' ? '6.3 Writing and Running Code' : '6.3 코드 작성 및 실행'}</h3>
            {lang === 'en' ? (
              <>
                <p>
                  There are several ways to run Python code in VS Code.
                </p>
                <ul>
                  <li><strong>Method 1</strong>: Click the <strong>Run button (triangular play icon)</strong> at the top-right of the editor</li>
                  <li><strong>Method 2</strong>: Open the integrated terminal (<code>Ctrl + `</code>) and run <code>python filename.py</code></li>
                  <li><strong>Method 3</strong>: Press <code>F5</code> to run in debug mode</li>
                  <li><strong>Method 4</strong>: Select code and press <code>Shift + Enter</code> to run just the selected area</li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  VS Code에서 파이썬 코드를 실행하는 방법은 여러 가지가 있습니다.
                </p>
                <ul>
                  <li><strong>방법 1</strong>: 편집기 우측 상단의 <strong>실행 버튼(▷)</strong>을 클릭</li>
                  <li><strong>방법 2</strong>: 통합 터미널(<code>Ctrl + `</code>)을 열어 <code>python 파일명.py</code> 명령 실행</li>
                  <li><strong>방법 3</strong>: <code>F5</code> 키로 디버그 모드 실행</li>
                  <li><strong>방법 4</strong>: 코드 선택 후 <code>Shift + Enter</code>로 선택 영역만 실행</li>
                </ul>
              </>
            )}

            <h3>{lang === 'en' ? '6.4 Useful VS Code Features' : '6.4 VS Code의 유용한 기능'}</h3>
            {lang === 'en' ? (
              <ul>
                <li><strong>IntelliSense</strong>: Code auto-completion, function signature display, documentation preview</li>
                <li><strong>Debugger</strong>: Breakpoint setting, variable tracking, step-by-step execution</li>
                <li><strong>Integrated Terminal</strong>: Use the terminal directly within the editor</li>
                <li><strong>Extension ecosystem</strong>: Extend functionality infinitely with tens of thousands of extensions</li>
                <li><strong>Git integration</strong>: Perform version control directly within the editor</li>
              </ul>
            ) : (
              <ul>
                <li><strong>IntelliSense</strong>: 코드 자동 완성, 함수 시그니처 표시, 문서 미리보기</li>
                <li><strong>디버거(Debugger)</strong>: 중단점(Breakpoint) 설정, 변수 값 추적, 단계별 실행</li>
                <li><strong>통합 터미널(Integrated Terminal)</strong>: 편집기 내에서 바로 터미널 사용 가능</li>
                <li><strong>확장 생태계</strong>: 수만 개의 확장 프로그램으로 기능 무한 확장</li>
                <li><strong>Git 통합</strong>: 버전 관리를 편집기 내에서 직접 수행</li>
              </ul>
            )}

            <h3>{lang === 'en' ? '6.5 VS Code Basic Shortcuts' : '6.5 VS Code 기본 단축키'}</h3>
            {lang === 'en' ? (
              <table className="lesson-table">
                <thead>
                  <tr><th>Shortcut</th><th>Function</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>Ctrl + S</code></td><td>Save</td><td>Save current file</td></tr>
                  <tr><td><code>Ctrl + N</code></td><td>New file</td><td>Create a new blank file</td></tr>
                  <tr><td><code>Ctrl + `</code></td><td>Toggle terminal</td><td>Open/close integrated terminal</td></tr>
                  <tr><td><code>Ctrl + /</code></td><td>Toggle comment</td><td>Comment/uncomment selected area</td></tr>
                  <tr><td><code>Ctrl + D</code></td><td>Select same word</td><td>Additionally select matching words</td></tr>
                  <tr><td><code>Ctrl + Shift + P</code></td><td>Command Palette</td><td>Search and execute any command</td></tr>
                  <tr><td><code>Alt + Up/Down</code></td><td>Move line</td><td>Move current line up/down</td></tr>
                  <tr><td><code>F5</code></td><td>Debug run</td><td>Run in debug mode</td></tr>
                </tbody>
              </table>
            ) : (
              <table className="lesson-table">
                <thead>
                  <tr><th>단축키</th><th>기능</th><th>설명</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>Ctrl + S</code></td><td>저장</td><td>현재 파일 저장</td></tr>
                  <tr><td><code>Ctrl + N</code></td><td>새 파일</td><td>새 빈 파일 생성</td></tr>
                  <tr><td><code>Ctrl + `</code></td><td>터미널 토글</td><td>통합 터미널 열기/닫기</td></tr>
                  <tr><td><code>Ctrl + /</code></td><td>주석 토글</td><td>선택 영역 주석 처리/해제</td></tr>
                  <tr><td><code>Ctrl + D</code></td><td>동일 단어 선택</td><td>같은 단어를 추가로 선택</td></tr>
                  <tr><td><code>Ctrl + Shift + P</code></td><td>명령 팔레트</td><td>모든 명령 검색 및 실행</td></tr>
                  <tr><td><code>Alt + Up/Down</code></td><td>줄 이동</td><td>현재 줄을 위/아래로 이동</td></tr>
                  <tr><td><code>F5</code></td><td>디버그 실행</td><td>디버그 모드로 실행</td></tr>
                </tbody>
              </table>
            )}

            {/* ========== First Program ========== */}
            <h2>{lang === 'en' ? '7. First Program: Hello, World!' : '7. 첫 번째 프로그램: Hello, World!'}</h2>

            <h3>{lang === 'en' ? '7.1 Origin of the Hello World Tradition' : '7.1 Hello World 전통의 유래'}</h3>
            {lang === 'en' ? (
              <p>
                The "Hello, World!" program is a traditional first step in learning programming.
                This tradition began in the 1978 book <strong>"The C Programming Language"</strong> by <strong>Brian Kernighan</strong> and Dennis Ritchie.
                Since then, it has been used as the first example in introductory books for nearly every programming language.
              </p>
            ) : (
              <p>
                "Hello, World!"를 출력하는 프로그램은 프로그래밍 학습의 전통적인 첫 걸음입니다.
                이 전통은 1978년 <strong>브라이언 커니핸(Brian Kernighan)</strong>과 데니스 리치(Dennis Ritchie)가
                저술한 <strong>"The C Programming Language"</strong>라는 책에서 시작되었습니다.
                이후 거의 모든 프로그래밍 언어의 입문서에서 첫 예제로 사용되고 있습니다.
              </p>
            )}

            <h3>{lang === 'en' ? '7.2 Writing hello.py' : '7.2 hello.py 작성'}</h3>
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'hello.py - My first Python program' : 'hello.py - 나의 첫 파이썬 프로그램'}</div>
              <pre><code>{`# hello.py
# 나의 첫 번째 파이썬 프로그램
# 작성자: (자신의 이름)

print("Hello, World!")
print("안녕하세요, 파이썬!")
print("컴퓨팅 사고 수업에 오신 것을 환영합니다!")`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '7.3 Comments' : '7.3 주석(Comment)'}</h3>
            {lang === 'en' ? (
              <p>
                A <strong>comment</strong> is explanatory text that does not affect program execution.
                It records the purpose and behavior of code, making it easier for yourself and other developers to understand the code.
              </p>
            ) : (
              <p>
                <strong>주석</strong>은 프로그램 실행에 영향을 주지 않는 설명 텍스트입니다.
                코드의 목적, 동작 방식 등을 기록하여 자신과 다른 개발자가 코드를 이해하기 쉽게 만들어 줍니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'How to use comments' : '주석 사용법'}</div>
              <pre><code>{`# 한 줄 주석: # 기호 뒤에 작성
# 이 줄은 실행되지 않습니다

print("이 줄은 실행됩니다")  # 코드 뒤에도 주석 가능

# 여러 줄 주석 (방법 1): 각 줄에 # 사용
# 이것은
# 여러 줄
# 주석입니다

# 여러 줄 주석 (방법 2): 삼중 따옴표 사용
"""
이것은 여러 줄에 걸친
설명을 작성할 때 사용합니다.
문서화 문자열(Docstring)로도 활용됩니다.
"""

'''
작은따옴표 삼중 따옴표도
같은 역할을 합니다.
'''`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '7.4 Basic Usage of print()' : '7.4 print() 함수 기본 사용법'}</h3>
            {lang === 'en' ? (
              <p>
                <code>print()</code> is the most basic function for displaying values on the screen.
                Simply put the value you want to output inside the parentheses.
              </p>
            ) : (
              <p>
                <code>print()</code>는 화면에 값을 출력하는 가장 기본적인 함수입니다.
                괄호 안에 출력하고 싶은 값을 넣으면 됩니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Various print() usage examples' : 'print() 다양한 사용 예시'}</div>
              <pre><code>{`# 문자열 출력
print("Hello, Python!")
print('작은따옴표도 가능합니다')

# 숫자 출력
print(42)
print(3.14)

# 계산 결과 출력
print(10 + 20)
print(2 ** 10)

# 여러 값 출력 (쉼표로 구분, 자동 공백)
print("이름:", "홍길동")
print("합계:", 10 + 20 + 30)

# 빈 줄 출력
print()

# 여러 줄 출력 (이스케이프 시퀀스 \\n)
print("첫 번째 줄\\n두 번째 줄\\n세 번째 줄")`}</code></pre>
            </div>

            {/* ========== Python Coding Basic Rules ========== */}
            <h2>{lang === 'en' ? '8. Python Coding Basic Rules' : '8. 파이썬 코딩 기본 규칙'}</h2>

            <h3>{lang === 'en' ? '8.1 Indentation' : '8.1 들여쓰기 (Indentation)'}</h3>
            {lang === 'en' ? (
              <p>
                Unlike other languages, Python uses <strong>indentation</strong> instead of curly braces (<code>{'{}'}</code>) to define code blocks.
                This is a unique feature of Python that greatly contributes to code readability.
                <strong>4 spaces</strong> is the standard, and mixing tabs and spaces will cause errors.
              </p>
            ) : (
              <p>
                파이썬은 다른 언어와 달리 중괄호(<code>{'{}'}</code>) 대신 <strong>들여쓰기</strong>로 코드 블록을 구분합니다.
                이것은 파이썬만의 독특한 특징으로, 코드의 가독성을 높이는 데 크게 기여합니다.
                <strong>공백 4칸(스페이스 4개)</strong>이 표준이며, 탭과 스페이스를 혼용하면 오류가 발생합니다.
              </p>
            )}
            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Indentation example' : '들여쓰기 예시'}</div>
              <pre><code>{`# 올바른 들여쓰기 (4칸 스페이스)
if True:
    print("이것은 if 블록 안에 있습니다")
    print("같은 블록은 같은 들여쓰기")

# 잘못된 들여쓰기 → IndentationError 발생!
# if True:
# print("들여쓰기 없음")  # 오류!

# if True:
#     print("4칸")
#       print("6칸")  # 오류! 같은 블록에서 들여쓰기가 다름`}</code></pre>
            </div>

            <h3>{lang === 'en' ? '8.2 Other Basic Rules' : '8.2 기타 기본 규칙'}</h3>
            {lang === 'en' ? (
              <ul>
                <li><strong>Case sensitivity</strong>: <code>Print</code> and <code>print</code> are different. Python keywords and function names require exact casing.</li>
                <li><strong>One statement per line</strong>: For readability, the principle is to write one statement per line.</li>
                <li><strong>No semicolons (;) needed</strong>: Unlike C or Java, you do not need to add a semicolon at the end of a statement. (It won't cause an error, but it's not Pythonic.)</li>
                <li><strong>File naming rules</strong>: Python files use the <code>.py</code> extension. File names should use lowercase letters, numbers, and underscores (_). Avoid spaces or non-ASCII characters.</li>
                <li><strong>UTF-8 encoding</strong>: Python 3 uses UTF-8 encoding by default, so you can freely use Unicode characters.</li>
              </ul>
            ) : (
              <ul>
                <li><strong>대소문자 구분</strong>: <code>Print</code>와 <code>print</code>는 다릅니다. 파이썬 키워드와 함수명은 정확한 대소문자를 사용해야 합니다.</li>
                <li><strong>한 줄에 하나의 명령문</strong>: 가독성을 위해 한 줄에 하나의 명령문을 작성하는 것이 원칙입니다.</li>
                <li><strong>세미콜론(;) 불필요</strong>: C나 Java와 달리 문장 끝에 세미콜론을 붙이지 않습니다. (붙여도 오류는 아니지만 파이썬답지 않은 코드입니다.)</li>
                <li><strong>파일명 규칙</strong>: 파이썬 파일은 <code>.py</code> 확장자를 사용하며, 파일명에는 영문 소문자, 숫자, 밑줄(_)을 사용합니다. 공백이나 한글은 피하는 것이 좋습니다.</li>
                <li><strong>UTF-8 인코딩</strong>: 파이썬 3은 기본적으로 UTF-8 인코딩을 사용하므로 한글을 자유롭게 사용할 수 있습니다.</li>
              </ul>
            )}

            <div className="code-block">
              <div className="code-header">{lang === 'en' ? 'Basic rules example' : '기본 규칙 예시'}</div>
              <pre><code>{`# 대소문자 구분
print("소문자 print만 동작합니다")
# Print("대문자 Print는 오류!")  # NameError

# 한 줄에 하나의 명령문
name = "홍길동"
age = 20
print(name, age)

# 세미콜론은 필요 없음 (쓰더라도 동작하지만 권장하지 않음)
# x = 10; y = 20; print(x + y)  # 동작하지만 비추천

# 긴 줄은 역슬래시(\\\\)로 나눔
total = 1 + 2 + 3 + \\\\
        4 + 5 + 6
print(total)  # 21`}</code></pre>
            </div>

            {/* ========== Key Summary ========== */}
            <div className="callout-box">
              <h3>{t('pythonLearning.keySummary')}</h3>
              {lang === 'en' ? (
                <ul>
                  <li><strong>Computational Thinking</strong> is a problem-solving mindset composed of four core elements: decomposition, pattern recognition, abstraction, and algorithm design.</li>
                  <li><strong>Python</strong> is an interpreted language developed by Guido van Rossum in 1991, characterized by concise syntax and rich libraries.</li>
                  <li>When installing Python, you must check <strong>"Add Python to PATH"</strong> to use it directly from the terminal.</li>
                  <li><strong>IDLE</strong> is the default development environment included with Python, supporting both interactive and script modes.</li>
                  <li><strong>VS Code</strong> becomes a powerful Python development environment with the Python extension installed.</li>
                  <li>The <strong>print()</strong> function outputs values to the screen, and <strong>#</strong> is used for comments.</li>
                  <li>Python uses <strong>indentation</strong> to define code blocks, with <strong>4 spaces</strong> being the standard.</li>
                </ul>
              ) : (
                <ul>
                  <li><strong>컴퓨팅 사고</strong>는 분해, 패턴 인식, 추상화, 알고리즘 설계의 4가지 핵심 요소로 구성된 문제 해결 사고방식이다.</li>
                  <li><strong>파이썬</strong>은 1991년 귀도 반 로섬이 개발한 인터프리터 언어로, 간결한 문법과 풍부한 라이브러리가 특징이다.</li>
                  <li>파이썬 설치 시 <strong>"Add Python to PATH"</strong>를 반드시 체크해야 터미널에서 바로 사용 가능하다.</li>
                  <li><strong>IDLE</strong>은 파이썬 기본 제공 개발 환경으로, 대화형 모드와 스크립트 모드를 지원한다.</li>
                  <li><strong>VS Code</strong>는 Python 확장을 설치하면 강력한 파이썬 개발 환경이 된다.</li>
                  <li><strong>print()</strong> 함수로 화면에 값을 출력하며, <strong>#</strong>으로 주석을 작성한다.</li>
                  <li>파이썬은 <strong>들여쓰기</strong>로 코드 블록을 구분하며, <strong>4칸 스페이스</strong>가 표준이다.</li>
                </ul>
              )}
            </div>

            {/* ========== Exercises ========== */}
            <div className="exercise-box">
              <h3>{t('pythonLearning.exercises')}</h3>
              {lang === 'en' ? (
                <>
                  <p><strong>Exercise 1.</strong> Write a self-introduction program. Use the <code>print()</code> function to output the following information.</p>
                  <ul>
                    <li>Name, student ID, major</li>
                    <li>Use separator lines (<code>=</code> or <code>-</code>) to make it look neat</li>
                    <li>Use blank lines to improve readability</li>
                  </ul>
                  <p><strong>Exercise 2.</strong> Write a program that prints 5 of your favorite things.</p>
                  <ul>
                    <li>Print with numbering (1. Music, 2. Movies ...)</li>
                    <li>Include a title and separator lines for a clean layout</li>
                  </ul>
                </>
              ) : (
                <>
                  <p><strong>과제 1.</strong> 자기소개 프로그램을 작성하세요. 다음 정보를 <code>print()</code> 함수를 사용하여 출력합니다.</p>
                  <ul>
                    <li>이름, 학번, 전공</li>
                    <li>구분선(<code>=</code> 또는 <code>-</code>)을 사용하여 깔끔하게 꾸미기</li>
                    <li>빈 줄을 활용하여 가독성 높이기</li>
                  </ul>
                  <p><strong>과제 2.</strong> 자신이 좋아하는 것 5가지를 출력하는 프로그램을 작성하세요.</p>
                  <ul>
                    <li>번호를 붙여 출력 (1. 음악, 2. 영화 ...)</li>
                    <li>제목과 구분선을 포함하여 보기 좋게 구성</li>
                  </ul>
                </>
              )}
            </div>

            <div className="exercise-box">
              <h3>{t('pythonLearning.advancedProblems')}</h3>
              {lang === 'en' ? (
                <>
                  <p><strong>Advanced 1.</strong> Run <code>import this</code> in the IDLE Shell to view "The Zen of Python."
                  Choose 3 principles you like most from the output and create a Python file with your own interpretation written as comments.</p>
                  <p><strong>Advanced 2.</strong> Run the same program in both IDLE script mode and VS Code, then write a Python file comparing the differences between the two environments (ease of use, features, execution methods, etc.) as comments.</p>
                </>
              ) : (
                <>
                  <p><strong>심화 1.</strong> IDLE Shell에서 <code>import this</code>를 실행하여 "The Zen of Python"을 확인하세요.
                  출력된 내용 중 가장 마음에 드는 원칙 3가지를 골라 자신만의 해석을 주석으로 작성한 파이썬 파일을 만들어 보세요.</p>
                  <p><strong>심화 2.</strong> 같은 프로그램을 IDLE 스크립트 모드와 VS Code에서 각각 실행해 보고, 두 환경의 차이점(사용 편의성, 기능, 실행 방법 등)을 비교하여 주석으로 정리한 파이썬 파일을 작성하세요.</p>
                </>
              )}
            </div>

            <div className="lesson-nav">
              <Link to="/python-learning" className="lesson-nav-btn prev">{t('pythonLearning.backToList')}</Link>
              <Link to="/python-learning/02" className="lesson-nav-btn next">
                {lang === 'en' ? '02: I/O & Variables' : '02: 입출력과 변수'} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
