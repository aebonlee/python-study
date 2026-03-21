import { useState, useCallback } from 'react'
import { quizzes } from '../data/quizzes'
import { useProgress } from '../contexts/ProgressContext'
import QuizComponent from '../components/QuizComponent'
import { levelInfo } from '../data/lessons'

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  const yy = String(d.getFullYear()).slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yy}.${mm}.${dd}`
}

export default function QuizCenter() {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const { quizScores, getQuizBestScore, getQuizAttempts } = useProgress()
  const handleQuizComplete = useCallback(() => {}, [])

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
          <QuizComponent quiz={quiz} quizId={activeQuiz} onComplete={handleQuizComplete} />
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
              const bestScore = getQuizBestScore(quiz.id)
              const passed = bestScore !== undefined && bestScore >= quiz.passingScore
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
                    {bestScore !== undefined && (
                      <div className={`quiz-card-score ${passed ? 'passed' : 'failed'}`}>
                        최고 점수: {bestScore}점 {passed ? <><i className="fa-solid fa-check" /> 통과</> : <><i className="fa-solid fa-xmark" /> 미통과</>}
                      </div>
                    )}
                  </div>
                  <div className="quiz-card-action">
                    <span className="btn btn-primary btn-sm">
                      {bestScore !== undefined ? '다시 도전' : '시작하기'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="quiz-history-section">
        <div className="container">
          <h2 className="quiz-history-title">
            <i className="fa-solid fa-clipboard-list" /> 응시 기록
          </h2>
          <div className="quiz-history-table-wrap">
            <table className="quiz-history-table">
              <thead>
                <tr>
                  <th>퀴즈</th>
                  <th>1회차</th>
                  <th>2회차</th>
                  <th>3회차</th>
                  <th>최종 상태</th>
                  <th>최초 응시일</th>
                  <th>최종 응시일</th>
                </tr>
              </thead>
              <tbody>
                {quizList.map(quiz => {
                  const attempts = getQuizAttempts(quiz.id)
                  const bestScore = getQuizBestScore(quiz.id)
                  const recent3 = attempts.slice(-3)
                  const passed = bestScore !== undefined && bestScore >= quiz.passingScore
                  const firstDate = attempts.length > 0 ? attempts[0].date : null
                  const lastDate = attempts.length > 0 ? attempts[attempts.length - 1].date : null
                  return (
                    <tr key={quiz.id}>
                      <td className="quiz-name-cell">{quiz.title}</td>
                      {[0, 1, 2].map(i => (
                        <td key={i} className="quiz-attempt-cell">
                          {recent3[i] ? (
                            <span className={`quiz-attempt-score ${recent3[i].score >= quiz.passingScore ? 'passed' : 'failed'}`}>
                              {recent3[i].score}점
                            </span>
                          ) : (
                            <span className="quiz-attempt-score none">-</span>
                          )}
                        </td>
                      ))}
                      <td className="quiz-status-cell">
                        {bestScore === undefined ? (
                          <span className="quiz-status not-taken">미응시</span>
                        ) : passed ? (
                          <span className="quiz-status pass"><i className="fa-solid fa-circle-check" /> 통과</span>
                        ) : (
                          <span className="quiz-status fail"><i className="fa-solid fa-circle-xmark" /> 미통과</span>
                        )}
                      </td>
                      <td className="quiz-date-cell">{formatDate(firstDate)}</td>
                      <td className="quiz-date-cell">{formatDate(lastDate)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
