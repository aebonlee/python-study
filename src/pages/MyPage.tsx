import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { badges } from '../data/badges'
import { quizzes } from '../data/quizzes'
import { lessons } from '../data/lessons'
import BadgeCard from '../components/BadgeCard'
import Certificate, { CERT_CONFIG } from '../components/Certificate'

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
  const { t, lang, localizedField } = useLanguage()

  // Class join state
  const [classCode, setClassCode] = useState('')
  const [joinLoading, setJoinLoading] = useState(false)
  const [joinMessage, setJoinMessage] = useState(null)
  const [myClasses, setMyClasses] = useState([])
  const [classesLoading, setClassesLoading] = useState(false)

  const fetchMyClasses = useCallback(async () => {
    if (!isSupabaseEnabled() || !user) return
    setClassesLoading(true)
    try {
      const { data: memberships, error } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .select('class_id, joined_at')
        .eq('student_id', user.id)

      if (error) throw error
      if (!memberships || memberships.length === 0) {
        setMyClasses([])
        setClassesLoading(false)
        return
      }

      const classIds = memberships.map(m => m.class_id)
      const { data: classData, error: classError } = await supabase
        .from(TABLES.CLASSES)
        .select('*')
        .in('id', classIds)

      if (classError) throw classError
      setMyClasses((classData || []).map(cls => {
        const membership = memberships.find(m => m.class_id === cls.id)
        return { ...cls, joined_at: membership?.joined_at }
      }))
    } catch (err: any) {
      console.error('Class fetch error:', err.message)
    } finally {
      setClassesLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (isAuthenticated) fetchMyClasses()
  }, [isAuthenticated, fetchMyClasses])

  const handleJoinClass = async () => {
    const code = classCode.trim().toUpperCase()
    if (!code || code.length !== 6 || !isSupabaseEnabled() || !user) return

    setJoinLoading(true)
    setJoinMessage(null)
    try {
      const { data: cls, error: lookupError } = await supabase
        .from(TABLES.CLASSES)
        .select('*')
        .eq('class_code', code)
        .single()

      if (lookupError || !cls) {
        setJoinMessage({ type: 'error', text: t('mypage.invalidCode') })
        setJoinLoading(false)
        return
      }

      const { data: existing } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .select('id')
        .eq('class_id', cls.id)
        .eq('student_id', user.id)
        .single()

      if (existing) {
        setJoinMessage({ type: 'error', text: t('mypage.alreadyJoined') })
        setJoinLoading(false)
        return
      }

      const { error: joinError } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .insert({ class_id: cls.id, student_id: user.id })

      if (joinError) throw joinError

      setJoinMessage({ type: 'success', text: `"${cls.class_name}" ${t('mypage.joinSuccess')}` })
      setClassCode('')
      fetchMyClasses()
    } catch (err: any) {
      console.error('Class join error:', err.message)
      setJoinMessage({ type: 'error', text: t('mypage.joinError') })
    } finally {
      setJoinLoading(false)
    }
  }

  const handleLeaveClass = async (classId) => {
    if (!isSupabaseEnabled() || !user) return
    try {
      const { error } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .delete()
        .eq('class_id', classId)
        .eq('student_id', user.id)

      if (error) throw error
      fetchMyClasses()
    } catch (err: any) {
      console.error('Class leave error:', err.message)
    }
  }

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
    return { id, title: quiz.title, titleEn: quiz.titleEn, bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
  })

  // Certificate eligibility
  const CERT_REQUIREMENTS = {
    bronze: { levels: ['basics'], quizzes: ['basics'] },
    silver: { levels: ['basics', 'intermediate'], quizzes: ['basics', 'intermediate'] },
    gold: { levels: ['basics', 'intermediate', 'advanced'], quizzes: ['basics', 'intermediate', 'advanced'] },
    master: {
      levels: ['basics', 'intermediate', 'advanced', 'applied'],
      quizzes: ['basics', 'intermediate', 'advanced', 'applied', 'lib-standard', 'lib-turtle', 'lib-data', 'lib-ai']
    }
  }

  const isLevelDone = (level) => {
    const levelLessons = lessons[level]
    if (!levelLessons) return true
    return levelLessons.every(l => completedLessons.has(l.id))
  }

  const isQuizPassed = (quizId) => {
    const best = getQuizBestScore(quizId)
    return best !== undefined && best >= (quizzes[quizId]?.passingScore || 70)
  }

  const checkCertificateEligibility = (type) => {
    const req = CERT_REQUIREMENTS[type]
    const levelsDone = req.levels.filter(l => isLevelDone(l))
    const quizzesPassed = req.quizzes.filter(q => isQuizPassed(q))
    const totalConditions = req.levels.length + req.quizzes.length
    const metConditions = levelsDone.length + quizzesPassed.length
    return {
      earned: metConditions === totalConditions,
      met: metConditions,
      total: totalConditions,
      missingLevels: req.levels.filter(l => !isLevelDone(l)),
      missingQuizzes: req.quizzes.filter(q => !isQuizPassed(q))
    }
  }

  const certTypes = ['bronze', 'silver', 'gold', 'master']
  const certStatus = certTypes.map(type => ({
    type,
    ...checkCertificateEligibility(type)
  }))

  const [previewCert, setPreviewCert] = useState(null)

  const levelLabels = {
    basics: t('levelInfo.basics.title'),
    intermediate: t('levelInfo.intermediate.title'),
    advanced: t('levelInfo.advanced.title'),
    applied: t('levelInfo.applied.title'),
    'lib-standard': t('levelInfo.lib-standard.title'),
    'lib-turtle': t('levelInfo.lib-turtle.title'),
    'lib-data': t('levelInfo.lib-data.title'),
    'lib-ai': t('levelInfo.lib-ai.title'),
  }

  const getCertStats = () => {
    const attempted = quizList.filter(q => q.bestScore !== undefined)
    const quizAvg = attempted.length > 0
      ? Math.round(attempted.reduce((s, q) => s + q.bestScore, 0) / attempted.length)
      : 0
    return { completedLessons: completedCount, totalLessons: totalLessons, quizAvg, progress: totalProgress }
  }

  if (!isAuthenticated) {
    return (
      <div className="mypage">
        <div className="container">
          <h1 className="mypage-title">
            <i className="fa-solid fa-user-circle" /> {t('mypage.title')}
          </h1>
          <div className="mypage-login-guide">
            <div className="mypage-login-guide-icon">
              <i className="fa-solid fa-lock" />
            </div>
            <h2>{t('mypage.loginRequired')}</h2>
            <p>{t('mypage.loginGuide')}</p>
            <div className="mypage-login-buttons">
              <button className="login-btn google-btn" onClick={signInWithGoogle}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {t('mypage.googleLogin')}
              </button>
              <button className="login-btn kakao-btn" onClick={signInWithKakao}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.75 4.93 4.38 6.24l-1.12 4.16c-.1.35.3.64.6.44l4.97-3.27c.38.03.77.05 1.17.05 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/>
                </svg>
                {t('mypage.kakaoLogin')}
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
          <i className="fa-solid fa-user-circle" /> {t('mypage.title')}
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
              <i className={providerIcon} /> {providerLabel} {t('mypage.loginLabel')}
            </span>
          </div>
        </section>

        {/* My Classes */}
        <section className="mypage-class-section">
          <h3 className="mypage-class-title">
            <i className="fa-solid fa-chalkboard" /> {t('mypage.myClass')}
          </h3>
          <div className="mypage-class-join-form">
            <input
              type="text"
              className="mypage-class-input"
              placeholder={t('mypage.classCodePlaceholder')}
              value={classCode}
              onChange={e => setClassCode(e.target.value.toUpperCase().slice(0, 6))}
              onKeyDown={e => e.key === 'Enter' && handleJoinClass()}
              maxLength={6}
            />
            <button
              className="mypage-class-join-btn"
              onClick={handleJoinClass}
              disabled={classCode.trim().length !== 6 || joinLoading}
            >
              {joinLoading ? t('mypage.joining') : <><i className="fa-solid fa-right-to-bracket" /> {t('mypage.join')}</>}
            </button>
          </div>
          {joinMessage && (
            <div className={`mypage-class-message ${joinMessage.type}`}>
              {joinMessage.text}
            </div>
          )}
          {myClasses.length > 0 && (
            <div className="mypage-class-list">
              <div className="mypage-class-list-title">{t('mypage.joinedClasses')}</div>
              {myClasses.map(cls => (
                <div key={cls.id} className="mypage-class-item">
                  <div className="mypage-class-item-info">
                    <span className="mypage-class-item-name">{cls.class_name}</span>
                    <span className="mypage-class-item-teacher">
                      <i className="fa-solid fa-chalkboard-user" /> {cls.teacher_email}
                    </span>
                  </div>
                  <button
                    className="mypage-class-leave-btn"
                    onClick={() => handleLeaveClass(cls.id)}
                  >
                    {t('mypage.leave')}
                  </button>
                </div>
              ))}
            </div>
          )}
          {myClasses.length === 0 && !classesLoading && (
            <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 8 }}>
              {t('mypage.noClasses')}
            </div>
          )}
        </section>

        {/* Learning Stats */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-chart-line" /> {t('mypage.learningStats')}
          </h2>
          <div className="mypage-stats-grid">
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                <i className="fa-solid fa-book-open" />
              </div>
              <div className="mypage-stat-value">{completedCount}<span className="mypage-stat-unit">/{totalLessons}</span></div>
              <div className="mypage-stat-label">{t('mypage.completedLessons')}</div>
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
                <span className="mypage-stat-unit">{t('mypage.points')}</span>
              </div>
              <div className="mypage-stat-label">{t('mypage.quizAvgScore')}</div>
            </div>
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                <i className="fa-solid fa-play" />
              </div>
              <div className="mypage-stat-value">{codeRuns}<span className="mypage-stat-unit">{t('mypage.times')}</span></div>
              <div className="mypage-stat-label">{t('mypage.codeRunCount')}</div>
            </div>
            <div className="mypage-stat-card">
              <div className="mypage-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                <i className="fa-solid fa-fire" />
              </div>
              <div className="mypage-stat-value">{streak.count}<span className="mypage-stat-unit">{t('mypage.days')}</span></div>
              <div className="mypage-stat-label">{t('mypage.streakDays')}</div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="mypage-section cert-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-scroll" /> {t('mypage.certificates')}
          </h2>
          <div className="cert-grid">
            {certStatus.map(cert => {
              const config = CERT_CONFIG[cert.type]
              return (
                <div
                  key={cert.type}
                  className={`cert-card cert-card--${cert.type} ${cert.earned ? 'earned' : 'locked'}`}
                >
                  <div className="cert-card-emoji">{config.emoji}</div>
                  <div className="cert-card-label">{config.label}</div>
                  {cert.earned ? (
                    <>
                      <div className="cert-card-status earned">
                        <i className="fa-solid fa-circle-check" /> {t('mypage.earned')}
                      </div>
                      <button
                        className="cert-card-action-btn"
                        onClick={() => setPreviewCert(prev => prev === cert.type ? null : cert.type)}
                      >
                        {previewCert === cert.type ? t('mypage.close') : t('mypage.viewDownload')}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="cert-card-status locked">
                        <i className="fa-solid fa-lock" /> {cert.met}/{cert.total} {t('mypage.conditions')}
                      </div>
                      <div className="cert-progress">
                        <div className="cert-progress-bar" style={{ width: `${Math.round(cert.met / cert.total * 100)}%` }} />
                      </div>
                      <div className="cert-card-missing">
                        {cert.missingLevels.map(l => (
                          <span key={l} className="cert-missing-tag level">
                            {levelLabels[l] || l} {t('mypage.lessonRequired')}
                          </span>
                        ))}
                        {cert.missingQuizzes.map(q => (
                          <span key={q} className="cert-missing-tag quiz">
                            {levelLabels[q] || q} {t('mypage.quizRequired')}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
          {previewCert && (
            <div className="cert-preview-wrap">
              <Certificate
                userName={userName}
                certificateType={previewCert}
                issueDate={new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ko-KR')}
                stats={getCertStats()}
              />
            </div>
          )}
        </section>

        {/* Earned Badges */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-medal" /> {t('mypage.earnedBadges')} <span className="mypage-badge-count">{earnedBadgeData.length}{t('mypage.badgeCount')}</span>
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
              <p>{t('mypage.noBadges')}</p>
            </div>
          )}
        </section>

        {/* Quiz Scores */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fa-solid fa-clipboard-check" /> {t('mypage.quizScorecard')}
          </h2>
          <div className="mypage-quiz-table-wrap">
            <table className="mypage-quiz-table">
              <thead>
                <tr>
                  <th>{t('mypage.quizName')}</th>
                  <th>{t('mypage.attempt1')}</th>
                  <th>{t('mypage.attempt2')}</th>
                  <th>{t('mypage.attempt3')}</th>
                  <th>{t('mypage.finalStatus')}</th>
                  <th>{t('mypage.firstAttemptDate')}</th>
                  <th>{t('mypage.lastAttemptDate')}</th>
                </tr>
              </thead>
              <tbody>
                {quizList.map(q => {
                  const recent3 = q.attempts.slice(-3)
                  const firstDate = q.attempts.length > 0 ? q.attempts[0].date : null
                  const lastDate = q.attempts.length > 0 ? q.attempts[q.attempts.length - 1].date : null
                  return (
                    <tr key={q.id}>
                      <td className="quiz-name-cell">{localizedField(q, 'title')}</td>
                      {[0, 1, 2].map(i => (
                        <td key={i} className="quiz-attempt-cell">
                          {recent3[i] ? (
                            <span className={`quiz-attempt-score ${recent3[i].score >= q.passingScore ? 'passed' : 'failed'}`}>
                              {recent3[i].score}{t('mypage.points') === '점' ? '점' : 'pts'}
                            </span>
                          ) : (
                            <span className="quiz-attempt-score none">-</span>
                          )}
                        </td>
                      ))}
                      <td className="quiz-status-cell">
                        {q.bestScore === undefined ? (
                          <span className="quiz-status not-taken">{t('mypage.notTaken')}</span>
                        ) : q.passed ? (
                          <span className="quiz-status pass"><i className="fa-solid fa-circle-check" /> {t('mypage.pass')}</span>
                        ) : (
                          <span className="quiz-status fail"><i className="fa-solid fa-circle-xmark" /> {t('mypage.fail')}</span>
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
