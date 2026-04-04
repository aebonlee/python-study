import { useState, useEffect, useCallback, Fragment } from 'react'
import { lessons, levelInfo } from '../data/lessons'
import { quizzes } from '../data/quizzes'
import { badges } from '../data/badges'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import BadgeCard from '../components/BadgeCard'
import { useLanguage } from '../contexts/LanguageContext'

const ADMIN_EMAIL = 'aebon@kakao.com'

function timeAgo(dateStr, lang) {
  if (!dateStr) return '-'
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return lang === 'en' ? 'Just now' : '방금 전'
  if (m < 60) return lang === 'en' ? `${m}m ago` : `${m}분 전`
  const h = Math.floor(m / 60)
  if (h < 24) return lang === 'en' ? `${h}h ago` : `${h}시간 전`
  const d = Math.floor(h / 24)
  if (d < 30) return lang === 'en' ? `${d}d ago` : `${d}일 전`
  return lang === 'en' ? `${Math.floor(d / 30)}mo ago` : `${Math.floor(d / 30)}개월 전`
}

function formatDate(dateStr, lang) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  if (lang === 'en') {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  }
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function AdminPage() {
  const { t, lang, localizedField } = useLanguage()

  const [activeTab, setActiveTab] = useState('stats')
  const [communityPosts, setCommunityPosts] = useState([])
  const [communityLoading, setCommunityLoading] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  // Member management state
  const [members, setMembers] = useState([])
  const [membersLoading, setMembersLoading] = useState(false)

  // Student detail modal state
  const [selectedMember, setSelectedMember] = useState(null)
  const [memberProgress, setMemberProgress] = useState(null)
  const [memberProgressLoading, setMemberProgressLoading] = useState(false)

  // Role toggling state
  const [roleToggling, setRoleToggling] = useState(null)

  // Dynamic tabs
  const ADMIN_TABS = [
    { key: 'stats', label: t('admin.siteStats'), icon: 'fa-solid fa-chart-pie' },
    { key: 'content', label: t('admin.contentOverview'), icon: 'fa-solid fa-folder-tree' },
    { key: 'community', label: t('admin.communityManagement'), icon: 'fa-solid fa-comments' },
    { key: 'members', label: t('admin.memberManagement'), icon: 'fa-solid fa-user-group' },
  ]

  // Dynamic category labels
  const CATEGORY_LABELS = {
    qna: t('community.qnaShort'),
    free: t('community.freeShort'),
    code: t('community.codeShort'),
    review: t('community.reviewShort'),
  }

  // Static stats
  const totalLessons = Object.values(lessons).flat().length
  const totalQuizzes = Object.keys(quizzes).length
  const totalBadges = badges.length
  const totalQuestions = Object.values(quizzes).reduce((sum, q) => sum + q.questions.length, 0)

  const levelStats = Object.entries(lessons)
    .filter(([key]) => levelInfo[key])
    .map(([key, items]) => ({
      key,
      title: localizedField(levelInfo[key], 'title') || key,
      icon: levelInfo[key]?.icon || 'fa-solid fa-folder',
      color: levelInfo[key]?.color || '#666',
      lessonCount: items.length,
    }))

  const quizStats = Object.entries(quizzes).map(([id, quiz]) => ({
    id,
    title: localizedField(quiz, 'title'),
    questionCount: quiz.questions.length,
    passingScore: quiz.passingScore || 70,
    timeLimit: quiz.timeLimit,
  }))

  const fetchCommunityPosts = useCallback(async () => {
    if (!isSupabaseEnabled()) return
    setCommunityLoading(true)
    try {
      const { data, error } = await supabase
        .from(TABLES.COMMUNITY_POSTS)
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) throw error
      setCommunityPosts(data || [])
    } catch (err: any) {
      console.error('게시글 조회 오류:', err.message)
    } finally {
      setCommunityLoading(false)
    }
  }, [])

  const fetchMembers = useCallback(async () => {
    if (!isSupabaseEnabled()) return
    setMembersLoading(true)
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .order('updated_at', { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (err: any) {
      console.error('회원 조회 오류:', err.message)
    } finally {
      setMembersLoading(false)
    }
  }, [])

  const fetchMemberProgress = useCallback(async (member) => {
    if (!isSupabaseEnabled()) return
    setSelectedMember(member)
    setMemberProgress(null)
    setMemberProgressLoading(true)

    const emptyProgress = {
      completed_lessons: [],
      code_runs: 0,
      streak_count: 0,
      streak_last_date: null,
      earned_badges: [],
      quiz_data: {},
    }

    try {
      // 두 테이블에서 동시 조회
      const [progressRes, scoresRes] = await Promise.all([
        supabase
          .from(TABLES.USER_PROGRESS)
          .select('*')
          .eq('user_id', member.id)
          .single(),
        supabase
          .from(TABLES.QUIZ_SCORES)
          .select('*')
          .eq('user_id', member.id),
      ])

      const progress = (progressRes.error && progressRes.error.code === 'PGRST116')
        ? emptyProgress
        : (progressRes.data || emptyProgress)

      // quiz_data가 비어있으면 pymaster_quiz_scores에서 폴백
      let quizData = progress.quiz_data || {}
      const hasQuizData = Object.keys(quizData).length > 0
      const legacyScores = scoresRes.data || []

      if (!hasQuizData && legacyScores.length > 0) {
        // quiz_scores 테이블에서 폴백 데이터 구성
        quizData = {}
        for (const s of legacyScores) {
          quizData[s.quiz_id] = {
            attempts: [{ score: s.score, date: s.updated_at }],
            bestScore: s.score,
          }
        }
      } else if (hasQuizData && legacyScores.length > 0) {
        // quiz_data에 없지만 quiz_scores에 있는 퀴즈 보충
        for (const s of legacyScores) {
          if (!quizData[s.quiz_id]) {
            quizData[s.quiz_id] = {
              attempts: [{ score: s.score, date: s.updated_at }],
              bestScore: s.score,
            }
          }
        }
      }

      setMemberProgress({ ...progress, quiz_data: quizData })
    } catch (err: any) {
      console.error('학생 데이터 조회 오류:', err.message)
      setMemberProgress(emptyProgress)
    } finally {
      setMemberProgressLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeTab === 'community') fetchCommunityPosts()
    if (activeTab === 'members') fetchMembers()
  }, [activeTab, fetchCommunityPosts, fetchMembers])

  const handleDeletePost = async (postId) => {
    if (!isSupabaseEnabled()) return
    try {
      const { error } = await supabase
        .from(TABLES.COMMUNITY_POSTS)
        .delete()
        .eq('id', postId)

      if (error) throw error
      setCommunityPosts(prev => prev.filter(p => p.id !== postId))
      setDeleteConfirm(null)
    } catch (err: any) {
      console.error('삭제 오류:', err.message)
    }
  }

  const getProviderLabel = (provider) => {
    if (provider === 'google') return 'Google'
    if (provider === 'kakao') return 'Kakao'
    return provider || '-'
  }

  const getProviderIcon = (provider) => {
    if (provider === 'google') return 'fa-brands fa-google'
    if (provider === 'kakao') return 'fa-solid fa-comment'
    return 'fa-solid fa-user'
  }

  const handleRoleToggle = async (e, member) => {
    e.stopPropagation()
    if (roleToggling) return
    const newRole = member.role === 'teacher' ? 'student' : 'teacher'
    setRoleToggling(member.id)
    try {
      const { error } = await supabase.rpc('set_user_role', {
        target_user_id: member.id,
        new_role: newRole,
      })
      if (error) throw error
      setMembers(prev => prev.map(m =>
        m.id === member.id ? { ...m, role: newRole } : m
      ))
    } catch (err: any) {
      console.error('역할 변경 오류:', err.message)
    } finally {
      setRoleToggling(null)
    }
  }

  // Build student quiz list from progress data
  const getStudentQuizList = (progress) => {
    const quizData = progress?.quiz_data || {}
    return Object.entries(quizzes).map(([id, quiz]) => {
      const data = quizData[id]
      const bestScore = data?.bestScore
      const attempts = data?.attempts || []
      const passed = bestScore !== undefined && bestScore >= (quiz.passingScore || 70)
      return { id, quiz, title: localizedField(quiz, 'title'), bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
    })
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1 className="admin-title">
          <i className="fa-solid fa-shield-halved" /> {t('admin.title')}
        </h1>

        {/* Tab Navigation */}
        <div className="admin-tabs">
          {ADMIN_TABS.map(tab => (
            <button
              key={tab.key}
              className={`admin-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={tab.icon} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Site Stats */}
        {activeTab === 'stats' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-chart-pie" /> {t('admin.siteStats')}
            </h2>
            <div className="admin-stats-grid">
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                  <i className="fa-solid fa-book" />
                </div>
                <div className="admin-stat-value">{totalLessons}</div>
                <div className="admin-stat-label">{t('admin.totalLessons')}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                  <i className="fa-solid fa-pen-to-square" />
                </div>
                <div className="admin-stat-value">{totalQuizzes}</div>
                <div className="admin-stat-label">{t('admin.totalQuizzes')}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                  <i className="fa-solid fa-question-circle" />
                </div>
                <div className="admin-stat-value">{totalQuestions}</div>
                <div className="admin-stat-label">{t('admin.totalQuestions')}</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                  <i className="fa-solid fa-medal" />
                </div>
                <div className="admin-stat-value">{totalBadges}</div>
                <div className="admin-stat-label">{t('admin.totalBadges')}</div>
              </div>
            </div>
          </section>
        )}

        {/* Content Overview */}
        {activeTab === 'content' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-folder-tree" /> {t('admin.contentOverview')}
            </h2>

            <div className="admin-content-tables">
              <div className="admin-table-wrap">
                <h3 className="admin-table-heading">{t('admin.levelLessonCount')}</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>{t('admin.level')}</th><th>{t('admin.lessonCount')}</th></tr>
                  </thead>
                  <tbody>
                    {levelStats.map(l => (
                      <tr key={l.key}>
                        <td><i className={l.icon} style={{ color: l.color, marginRight: 8 }} />{l.title}</td>
                        <td>{l.lessonCount}{lang === 'en' ? '' : '개'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="admin-table-wrap">
                <h3 className="admin-table-heading">{t('admin.quizQuestionCount')}</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>{t('admin.quiz')}</th><th>{t('admin.questionCount')}</th><th>{t('admin.passingScore')}</th><th>{t('admin.timeLimit')}</th></tr>
                  </thead>
                  <tbody>
                    {quizStats.map(q => (
                      <tr key={q.id}>
                        <td>{q.title}</td>
                        <td>{q.questionCount}{lang === 'en' ? '' : '문제'}</td>
                        <td>{q.passingScore}{lang === 'en' ? 'pts' : '점'}</td>
                        <td>{Math.floor(q.timeLimit / 60)}{lang === 'en' ? 'min' : '분'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Community Management */}
        {activeTab === 'community' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-comments" /> {t('admin.communityManagement')}
              <button className="admin-refresh-btn" onClick={fetchCommunityPosts} disabled={communityLoading}>
                <i className={`fa-solid fa-rotate-right${communityLoading ? ' fa-spin' : ''}`} />
              </button>
            </h2>

            {communityLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>{t('admin.loadingPosts')}</span>
              </div>
            ) : communityPosts.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-inbox" />
                <p>{t('admin.noPosts')}</p>
              </div>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table admin-community-table">
                  <thead>
                    <tr>
                      <th>{t('admin.category')}</th>
                      <th>{t('admin.postTitle')}</th>
                      <th>{t('admin.author')}</th>
                      <th>{t('admin.date')}</th>
                      <th>{t('admin.views')}</th>
                      <th>{t('admin.manage')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {communityPosts.map(post => (
                      <tr key={post.id}>
                        <td>
                          <span className="admin-category-badge">
                            {CATEGORY_LABELS[post.category] || post.category}
                          </span>
                        </td>
                        <td className="admin-post-title">{post.title}</td>
                        <td className="admin-post-author">{post.author_name || post.author_email?.split('@')[0] || '-'}</td>
                        <td className="admin-post-date">{timeAgo(post.created_at, lang)}</td>
                        <td className="admin-post-views">{post.view_count || 0}</td>
                        <td>
                          {deleteConfirm === post.id ? (
                            <div className="admin-delete-confirm">
                              <button className="admin-btn-confirm" onClick={() => handleDeletePost(post.id)}>{t('admin.confirm')}</button>
                              <button className="admin-btn-cancel" onClick={() => setDeleteConfirm(null)}>{t('admin.cancel')}</button>
                            </div>
                          ) : (
                            <button className="admin-btn-delete" onClick={() => setDeleteConfirm(post.id)}>
                              <i className="fa-solid fa-trash" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Member Management */}
        {activeTab === 'members' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-user-group" /> {t('admin.memberManagement')}
              <span className="admin-member-count">{members.length}{lang === 'en' ? '' : '명'}</span>
              <button className="admin-refresh-btn" onClick={fetchMembers} disabled={membersLoading}>
                <i className={`fa-solid fa-rotate-right${membersLoading ? ' fa-spin' : ''}`} />
              </button>
            </h2>

            {membersLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>{t('admin.loadingMembers')}</span>
              </div>
            ) : members.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-users" />
                <p>{t('admin.noMembers')}</p>
              </div>
            ) : (
              <div className="admin-table-wrap admin-members-table">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('admin.num')}</th>
                      <th>{t('admin.name')}</th>
                      <th>{t('admin.email')}</th>
                      <th>{t('admin.role')}</th>
                      <th>{t('admin.loginMethod')}</th>
                      <th>{t('admin.joinDate')}</th>
                      <th>{t('admin.lastAccess')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, idx) => (
                      <tr
                        key={member.id}
                        className="admin-member-row"
                        onClick={() => fetchMemberProgress(member)}
                      >
                        <td className="admin-member-num">{idx + 1}</td>
                        <td className="admin-member-name">{member.name || '-'}</td>
                        <td className="admin-member-email">{member.email || '-'}</td>
                        <td>
                          {member.email === ADMIN_EMAIL ? (
                            <span className="admin-role-badge admin"><i className="fa-solid fa-shield-halved" /> {t('admin.administrator')}</span>
                          ) : (
                            <button
                              className={`admin-role-toggle ${member.role === 'teacher' ? 'teacher' : 'student'}`}
                              onClick={(e) => handleRoleToggle(e, member)}
                              disabled={roleToggling === member.id}
                            >
                              {roleToggling === member.id ? (
                                <><i className="fa-solid fa-spinner fa-spin" /> {t('admin.changingRole')}</>
                              ) : member.role === 'teacher' ? (
                                <><i className="fa-solid fa-chalkboard-user" /> {t('admin.teacher')}</>
                              ) : (
                                <><i className="fa-solid fa-user" /> {t('admin.student')}</>
                              )}
                            </button>
                          )}
                        </td>
                        <td>
                          <span className="admin-provider-badge">
                            <i className={getProviderIcon(member.provider)} /> {getProviderLabel(member.provider)}
                          </span>
                        </td>
                        <td className="admin-member-date">{formatDate(member.created_at, lang)}</td>
                        <td className="admin-member-date">{timeAgo(member.updated_at, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Student Detail Modal */}
      {selectedMember && (
        <div className="student-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="student-modal" onClick={e => e.stopPropagation()}>
            <button className="student-modal-close" onClick={() => setSelectedMember(null)}>
              <i className="fa-solid fa-xmark" />
            </button>

            {memberProgressLoading ? (
              <div className="admin-loading" style={{ minHeight: 200 }}>
                <div className="loading-spinner-small" style={{ width: 28, height: 28, borderWidth: 3 }} />
                <span>{t('admin.loadingStudentData')}</span>
              </div>
            ) : memberProgress && (() => {
              const progress = memberProgress
              const completedCount = progress.completed_lessons?.length || 0
              const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
              const studentQuizList = getStudentQuizList(progress)
              const takenQuizzes = studentQuizList.filter(q => q.bestScore !== undefined)
              const quizAvg = takenQuizzes.length > 0
                ? Math.round(takenQuizzes.reduce((sum, q) => sum + q.bestScore, 0) / takenQuizzes.length)
                : 0
              const earnedBadgeData = badges.filter(b => (progress.earned_badges || []).includes(b.id))

              return (
                <>
                  {/* Profile Card */}
                  <div className="mypage-profile-card">
                    <div className="mypage-avatar-wrap">
                      {selectedMember.avatar_url ? (
                        <img src={selectedMember.avatar_url} alt={selectedMember.name} className="mypage-avatar" />
                      ) : (
                        <div className="mypage-avatar mypage-avatar-placeholder">
                          {selectedMember.name?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                      )}
                    </div>
                    <div className="mypage-profile-info">
                      <h2 className="mypage-name">{selectedMember.name || '-'}</h2>
                      <p className="mypage-email">{selectedMember.email || '-'}</p>
                      <span className="mypage-provider">
                        <i className={getProviderIcon(selectedMember.provider)} /> {getProviderLabel(selectedMember.provider)} {t('admin.loginSuffix')}
                      </span>
                    </div>
                  </div>

                  {/* Learning Stats */}
                  <h2 className="mypage-section-title">
                    <i className="fa-solid fa-chart-line" /> {t('admin.learningStats')}
                  </h2>
                  <div className="mypage-stats-grid">
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                        <i className="fa-solid fa-book-open" />
                      </div>
                      <div className="mypage-stat-value">{completedCount}<span className="mypage-stat-unit">/{totalLessons}</span></div>
                      <div className="mypage-stat-label">{t('admin.completedLessons')}</div>
                      <div className="mypage-stat-bar">
                        <div className="mypage-stat-bar-fill" style={{ width: `${progressPct}%`, background: '#4B8BBE' }} />
                      </div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                        <i className="fa-solid fa-trophy" />
                      </div>
                      <div className="mypage-stat-value">{quizAvg}<span className="mypage-stat-unit">{lang === 'en' ? 'pts' : '점'}</span></div>
                      <div className="mypage-stat-label">{t('admin.quizAvgScore')}</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                        <i className="fa-solid fa-play" />
                      </div>
                      <div className="mypage-stat-value">{progress.code_runs || 0}<span className="mypage-stat-unit">{lang === 'en' ? '' : '회'}</span></div>
                      <div className="mypage-stat-label">{t('admin.codeRunCount')}</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                        <i className="fa-solid fa-fire" />
                      </div>
                      <div className="mypage-stat-value">{progress.streak_count || 0}<span className="mypage-stat-unit">{lang === 'en' ? 'd' : '일'}</span></div>
                      <div className="mypage-stat-label">{t('admin.streakDays')}</div>
                    </div>
                  </div>

                  {/* Earned Badges */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
                    <i className="fa-solid fa-medal" /> {t('admin.earnedBadges')} <span className="mypage-badge-count">{earnedBadgeData.length}{lang === 'en' ? '' : '개'}</span>
                  </h2>
                  {earnedBadgeData.length > 0 ? (
                    <div className="mypage-badge-grid">
                      {earnedBadgeData.map(badge => (
                        <BadgeCard key={badge.id} badge={{ ...badge, title: localizedField(badge, 'title'), description: localizedField(badge, 'description') }} />
                      ))}
                    </div>
                  ) : (
                    <div className="mypage-empty">
                      <i className="fa-solid fa-lock" />
                      <p>{t('admin.noBadgesEarned')}</p>
                    </div>
                  )}

                  {/* Quiz Scores */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
                    <i className="fa-solid fa-clipboard-check" /> {t('admin.quizScorecard')}
                  </h2>
                  <div className="mypage-quiz-table-wrap">
                    <table className="mypage-quiz-table">
                      <thead>
                        <tr>
                          <th>{t('admin.quiz')}</th>
                          <th>{t('admin.attempt1')}</th>
                          <th>{t('admin.attempt2')}</th>
                          <th>{t('admin.attempt3')}</th>
                          <th>{t('admin.finalStatus')}</th>
                          <th>{t('admin.firstDate')}</th>
                          <th>{t('admin.lastDate')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentQuizList.map(q => {
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
                                      {recent3[i].score}{lang === 'en' ? 'pts' : '점'}
                                    </span>
                                  ) : (
                                    <span className="quiz-attempt-score none">-</span>
                                  )}
                                </td>
                              ))}
                              <td className="quiz-status-cell">
                                {q.bestScore === undefined ? (
                                  <span className="quiz-status not-taken">{t('admin.notTaken')}</span>
                                ) : q.passed ? (
                                  <span className="quiz-status pass"><i className="fa-solid fa-circle-check" /> {t('admin.pass')}</span>
                                ) : (
                                  <span className="quiz-status fail"><i className="fa-solid fa-circle-xmark" /> {t('admin.fail')}</span>
                                )}
                              </td>
                              <td className="quiz-date-cell">{formatDate(firstDate, lang)}</td>
                              <td className="quiz-date-cell">{formatDate(lastDate, lang)}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
