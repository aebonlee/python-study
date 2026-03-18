import { useState } from 'react'
import { quizzes } from '../data/quizzes'
import { useProgress } from '../contexts/ProgressContext'
import QuizComponent from '../components/QuizComponent'
import { levelInfo } from '../data/lessons'

export default function QuizCenter() {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const { quizScores } = useProgress()

  const quizList = Object.entries(quizzes).map(([key, quiz]) => ({
    id: key,
    ...quiz,
    info: levelInfo[key]
  }))

  if (activeQuiz) {
    const quiz = quizzes[activeQuiz]
    return (
      <div className="quiz-page">
        <section className="page-header quiz-header">
          <div className="container">
            <div className="page-header-content">
              <button className="back-btn" onClick={() => setActiveQuiz(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                퀴즈 목록
              </button>
              <div className="page-header-title-row">
                <div>
                  <h1>{quiz.title}</h1>
                  <p>{quiz.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container quiz-content-wrapper">
          <QuizComponent quiz={quiz} quizId={activeQuiz} onComplete={() => {}} />
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <section className="page-header quiz-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-solid fa-pen-nib" /></span>
              <div>
                <h1>퀴즈 센터</h1>
                <p>단계별 테스트로 파이썬 실력을 검증하세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quiz-list-section">
        <div className="container">
          <div className="quiz-cards-grid">
            {quizList.map(quiz => {
              const score = quizScores[quiz.id]
              const passed = score !== undefined && score >= quiz.passingScore
              return (
                <div key={quiz.id} className="quiz-card" onClick={() => setActiveQuiz(quiz.id)}>
                  <div className="quiz-card-header" style={{ background: quiz.info?.color || 'var(--primary)' }}>
                    <span className="quiz-card-icon">
                      <i className={quiz.info?.icon || 'fa-solid fa-file-lines'} />
                    </span>
                    <h3>{quiz.title}</h3>
                  </div>
                  <div className="quiz-card-body">
                    <p>{quiz.description}</p>
                    <div className="quiz-card-meta">
                      <span><i className="fa-solid fa-file-lines" /> {quiz.questions.length}문제</span>
                      <span><i className="fa-solid fa-clock" /> {Math.floor(quiz.timeLimit / 60)}분</span>
                      <span><i className="fa-solid fa-circle-check" /> {quiz.passingScore}점 이상</span>
                    </div>
                    {score !== undefined && (
                      <div className={`quiz-card-score ${passed ? 'passed' : 'failed'}`}>
                        최고 점수: {score}점 {passed ? <><i className="fa-solid fa-check" /> 통과</> : <><i className="fa-solid fa-xmark" /> 미통과</>}
                      </div>
                    )}
                  </div>
                  <div className="quiz-card-action">
                    <span className="btn btn-primary btn-sm">
                      {score !== undefined ? '다시 도전' : '시작하기'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
