import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { badges } from '../data/badges'
import { quizzes } from '../data/quizzes'
import { lessons } from '../data/lessons'
import BadgeCard from '../components/BadgeCard'

export default function MyPage() {
  const { user } = useAuth()
  const { completedLessons, quizScores, codeRuns, streak, getTotalProgress } = useProgress()
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
    const score = quizScores[id]
    const passed = score !== undefined && score >= (quiz.passingScore || 70)
    return { id, title: quiz.title, score, passed, passingScore: quiz.passingScore || 70 }
  })

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
                {quizList.filter(q => q.score !== undefined).length > 0
                  ? Math.round(quizList.filter(q => q.score !== undefined).reduce((sum, q) => sum + q.score, 0) / quizList.filter(q => q.score !== undefined).length)
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
                  <th>최고 점수</th>
                  <th>통과 기준</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {quizList.map(q => (
                  <tr key={q.id}>
                    <td className="quiz-name-cell">{q.title}</td>
                    <td className="quiz-score-cell">
                      {q.score !== undefined ? (
                        <span className={`quiz-score ${q.passed ? 'passed' : 'failed'}`}>{q.score}점</span>
                      ) : (
                        <span className="quiz-score none">-</span>
                      )}
                    </td>
                    <td className="quiz-passing-cell">{q.passingScore}점</td>
                    <td className="quiz-status-cell">
                      {q.score === undefined ? (
                        <span className="quiz-status not-taken">미응시</span>
                      ) : q.passed ? (
                        <span className="quiz-status pass"><i className="fa-solid fa-circle-check" /> 통과</span>
                      ) : (
                        <span className="quiz-status fail"><i className="fa-solid fa-circle-xmark" /> 미통과</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
