import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { badges } from '../data/badges'
import { quizzes } from '../data/quizzes'
import { lessons } from '../data/lessons'
import BadgeCard from '../components/BadgeCard'

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  const yy = String(d.getFullYear()).slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yy}.${mm}.${dd}`
}

export default function MyPage() {
  const { user, isAuthenticated, requireAuth, signInWithGoogle, signInWithKakao } = useAuth()
  const { completedLessons, quizScores, codeRuns, streak, getTotalProgress, getQuizBestScore, getQuizAttempts } = useProgress()
  const { earnedBadges } = useBadge()

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]
  const userEmail = user?.email
  const provider = user?.app_metadata?.provider

  const providerLabel = provider === 'google' ? 'Google' : provider === 'kakao' ? 'Kakao' : provider || '-'
  const providerIcon = provider === 'google' ? 'fa-brands fa-google' : provider === 'kakao' ? 'fa-solid fa-comment' : 'fa-solid fa-user'

  const totalLessons = Object.values(lessons).flat().length
  const completedCount = completedLessons.size
  const totalProgress = getTotalProgress()

  const earnedBadgeData = badges.filter(b => earnedBadges.includes(b.id))

  const quizList = Object.entries(quizzes).map(([id, quiz]) => {
    const bestScore = getQuizBestScore(id)
    const attempts = getQuizAttempts(id)
    const passed = bestScore !== undefined && bestScore >= (quiz.passingScore || 70)
    return { id, title: quiz.title, bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
  })

  if (!isAuthenticated) {
    return (
      <div className="mypage">
        <div className="container">
          <h1 className="mypage-title">
            <i className="fa-solid fa-user-circle" /> 마이페이지
          </h1>
          <div className="mypage-login-guide">
            <div className="mypage-login-guide-icon">
              <i className="fa-solid fa-lock" />
            </div>
            <h2>로그인이 필요합니다</h2>
            <p>마이페이지에서 학습 통계, 퀴즈 성적, 획득 배지를 확인하려면 로그인해 주세요.</p>
            <div className="mypage-login-buttons">
              <button className="login-btn google-btn" onClick={signInWithGoogle}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google로 로그인
              </button>
              <button className="login-btn kakao-btn" onClick={signInWithKakao}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.75 4.93 4.38 6.24l-1.12 4.16c-.1.35.3.64.6.44l4.97-3.27c.38.03.77.05 1.17.05 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/>
                </svg>
                Kakao로 로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mypage">
      <div className="container">
        <h1 className="mypage-title">
          <i className="fa-solid fa-user-circle" /> 마이페이지
        </h1>

        {/* Profile Card */}
        <section className="mypage-profile-card">
          <div className="mypage-avatar-wrap">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="mypage-avatar" />
            ) : (
              <div className="mypage-avatar mypage-avatar-placeholder">
                {userName?.charAt(0)?.toUpperCase()}
              </div>
            )}
          </div>
          <div className="mypage-profile-info">
            <h2 className="mypage-name">{userName}</h2>
            <p className="mypage-email">{userEmail}</p>
            <span className="mypage-provider">
              <i className={providerIcon} /> {providerLabel} 로그인
            </span>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-chart-line" /> 학습 통계
          </h2>
          <div className="mypage-stats-grid">
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                <i className="fa-solid fa-book-open" />
              </div>
              <div className="mypage-stat-value">{completedCount}<span className="mypage-stat-unit">/{totalLessons}</span></div>
              <div className="mypage-stat-label">완료 레슨</div>
              <div className="mypage-stat-bar">
                <div className="mypage-stat-bar-fill" style={{ width: `${totalProgress}%`, background: '#4B8BBE' }} />
              </div>
            </div>
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                <i className="fa-solid fa-trophy" />
              </div>
              <div className="mypage-stat-value">
                {quizList.filter(q => q.bestScore !== undefined).length > 0
                  ? Math.round(quizList.filter(q => q.bestScore !== undefined).reduce((sum, q) => sum + q.bestScore, 0) / quizList.filter(q => q.bestScore !== undefined).length)
                  : 0}
                <span className="mypage-stat-unit">점</span>
              </div>
              <div className="mypage-stat-label">퀴즈 평균 점수</div>
            </div>
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                <i className="fa-solid fa-play" />
              </div>
              <div className="mypage-stat-value">{codeRuns}<span className="mypage-stat-unit">회</span></div>
              <div className="mypage-stat-label">코드 실행 수</div>
            </div>
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                <i className="fa-solid fa-fire" />
              </div>
              <div className="mypage-stat-value">{streak.count}<span className="mypage-stat-unit">일</span></div>
              <div className="mypage-stat-label">연속 학습일</div>
            </div>
          </div>
        </section>

        {/* Earned Badges */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-medal" /> 획득 배지 <span className="mypage-badge-count">{earnedBadgeData.length}개</span>
          </h2>
          {earnedBadgeData.length > 0 ? (
            <div className="mypage-badge-grid">
              {earnedBadgeData.map(badge => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          ) : (
            <div className="mypage-empty">
              <i className="fa-solid fa-lock" />
              <p>아직 획득한 배지가 없습니다. 학습을 시작해보세요!</p>
            </div>
          )}
        </section>

        {/* Quiz Scores */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-clipboard-check" /> 퀴즈 성적표
          </h2>
          <div className="mypage-quiz-table-wrap">
            <table className="mypage-quiz-table">
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
                {quizList.map(q => {
                  const recent3 = q.attempts.slice(-3)
                  const firstDate = q.attempts.length > 0 ? q.attempts[0].date : null
                  const lastDate = q.attempts.length > 0 ? q.attempts[q.attempts.length - 1].date : null
                  return (
                    <tr key={q.id}>
                      <td className="quiz-name-cell">{q.title}</td>
                      {[0, 1, 2].map(i => (
                        <td key={i} className="quiz-attempt-cell">
                          {recent3[i] ? (
                            <span className={`quiz-attempt-score ${recent3[i].score >= q.passingScore ? 'passed' : 'failed'}`}>
                              {recent3[i].score}점
                            </span>
                          ) : (
                            <span className="quiz-attempt-score none">-</span>
                          )}
                        </td>
                      ))}
                      <td className="quiz-status-cell">
                        {q.bestScore === undefined ? (
                          <span className="quiz-status not-taken">미응시</span>
                        ) : q.passed ? (
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
        </section>
      </div>
    </div>
  )
}
