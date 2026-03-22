import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const lessonData = [
  { num: '01', path: '/python-learning/01', icon: 'fa-solid fa-desktop',         title: '파이썬 및 실습환경 안내',      titleEn: 'Python Setup & Environment',      desc: 'Python 설치, IDLE, VS Code 설정', descEn: 'Install Python, IDLE, VS Code setup' },
  { num: '02', path: '/python-learning/02', icon: 'fa-solid fa-keyboard',        title: '입출력과 변수',               titleEn: 'I/O & Variables',                desc: 'print(), input(), 변수, f-string', descEn: 'print(), input(), variables, f-string' },
  { num: '03', path: '/python-learning/03', icon: 'fa-solid fa-hashtag',         title: 'Data Type과 산술연산',        titleEn: 'Data Types & Arithmetic',        desc: '정수, 소수, 문자, 형변환, 연산자', descEn: 'int, float, str, type casting, operators' },
  { num: '04', path: '/python-learning/04', icon: 'fa-solid fa-clipboard-list',  title: '입력-처리-출력 개념',          titleEn: 'IPO Concept',                    desc: 'PDC 작성, IPO 구조 설계', descEn: 'PDC writing, IPO structure design' },
  { num: '05', path: '/python-learning/05', icon: 'fa-solid fa-palette',         title: 'Turtle과 함수(def)',          titleEn: 'Turtle & Functions (def)',        desc: 'Turtle 그래픽, 기능 단위 묶기', descEn: 'Turtle graphics, function grouping' },
  { num: '06', path: '/python-learning/06', icon: 'fa-solid fa-diagram-project', title: 'Flowgorithm 순서도',          titleEn: 'Flowgorithm Flowcharts',         desc: '논리적 사고, 순서도 그리기', descEn: 'Logical thinking, drawing flowcharts' },
  { num: '07', path: '/python-learning/07', icon: 'fa-solid fa-code-branch',     title: 'IF 조건문',                   titleEn: 'IF Conditionals',                desc: 'if, elif, else, 비교/논리 연산자', descEn: 'if, elif, else, comparison/logical ops' },
  { num: '08', path: '/python-learning/08', icon: 'fa-solid fa-repeat',          title: 'While 조건반복, For 횟수반복', titleEn: 'While & For Loops',              desc: 'while, for, break, continue', descEn: 'while, for, break, continue' },
  { num: '09', path: '/python-learning/09', icon: 'fa-solid fa-gears',           title: '함수와 매개변수',              titleEn: 'Functions & Parameters',         desc: 'def, 매개변수, return', descEn: 'def, parameters, return' },
  { num: '10', path: '/python-learning/10', icon: 'fa-solid fa-shield-halved',   title: 'Try-Except 예외처리',         titleEn: 'Try-Except Exception Handling',  desc: '오류 유형, try-except-finally', descEn: 'Error types, try-except-finally' },
  { num: '11', path: '/python-learning/11', icon: 'fa-solid fa-table-cells',     title: '2차원, 3차원 리스트',          titleEn: '2D & 3D Lists',                  desc: '다차원 리스트, 정보 모델링', descEn: 'Multi-dimensional lists, data modeling' },
]

export default function PythonLearning() {
  const { t, localizedField } = useLanguage()

  return (
    <div className="python-learning-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-brands fa-python" /></span>
              <div>
                <h1>{t('pythonLearning.title')}</h1>
                <p>{t('pythonLearning.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="python-lesson-grid">
            {lessonData.map((l) => (
              <Link to={l.path} key={l.num} className="python-lesson-card">
                <span className="python-lesson-card-number">{l.num}</span>
                <span className="python-lesson-card-icon"><i className={l.icon} /></span>
                <h3>{localizedField(l, 'title')}</h3>
                <p>{localizedField(l, 'desc')}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
