import { Link } from 'react-router-dom'

const lessons = [
  { num: '01', path: '/python-learning/01', icon: 'fa-solid fa-desktop',         title: '파이썬 및 실습환경 안내',      desc: 'Python 설치, IDLE, VS Code 설정' },
  { num: '02', path: '/python-learning/02', icon: 'fa-solid fa-keyboard',        title: '입출력과 변수',               desc: 'print(), input(), 변수, f-string' },
  { num: '03', path: '/python-learning/03', icon: 'fa-solid fa-hashtag',         title: 'Data Type과 산술연산',        desc: '정수, 소수, 문자, 형변환, 연산자' },
  { num: '04', path: '/python-learning/04', icon: 'fa-solid fa-clipboard-list',  title: '입력-처리-출력 개념',          desc: 'PDC 작성, IPO 구조 설계' },
  { num: '05', path: '/python-learning/05', icon: 'fa-solid fa-palette',         title: 'Turtle과 함수(def)',          desc: 'Turtle 그래픽, 기능 단위 묶기' },
  { num: '06', path: '/python-learning/06', icon: 'fa-solid fa-diagram-project', title: 'Flowgorithm 순서도',          desc: '논리적 사고, 순서도 그리기' },
  { num: '07', path: '/python-learning/07', icon: 'fa-solid fa-code-branch',     title: 'IF 조건문',                   desc: 'if, elif, else, 비교/논리 연산자' },
  { num: '08', path: '/python-learning/08', icon: 'fa-solid fa-repeat',          title: 'While 조건반복, For 횟수반복', desc: 'while, for, break, continue' },
  { num: '09', path: '/python-learning/09', icon: 'fa-solid fa-gears',           title: '함수와 매개변수',              desc: 'def, 매개변수, return' },
  { num: '10', path: '/python-learning/10', icon: 'fa-solid fa-shield-halved',   title: 'Try-Except 예외처리',         desc: '오류 유형, try-except-finally' },
  { num: '11', path: '/python-learning/11', icon: 'fa-solid fa-table-cells',     title: '2차원, 3차원 리스트',          desc: '다차원 리스트, 정보 모델링' },
]

export default function PythonLearning() {
  return (
    <div className="python-learning-page">
      <section className="page-header-section">
        <div className="container">
          <h1 className="page-title"><i className="fa-brands fa-python" /> 파이썬 학습</h1>
          <p className="page-subtitle">단계별로 파이썬 프로그래밍의 기초부터 심화까지 학습합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="python-lesson-grid">
            {lessons.map((l) => (
              <Link to={l.path} key={l.num} className="python-lesson-card">
                <span className="python-lesson-card-number">{l.num}</span>
                <span className="python-lesson-card-icon"><i className={l.icon} /></span>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
