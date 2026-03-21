import { useState, useEffect, useCallback, Fragment } from 'react'
import { lessons, levelInfo } from '../data/lessons'
import { quizzes } from '../data/quizzes'
import { badges } from '../data/badges'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import BadgeCard from '../components/BadgeCard'

const CATEGORY_LABELS = { qna: 'Q&A', free: '자유', code: '코드', review: '후기' }

const ADMIN_TABS = [
  { key: 'stats', label: '사이트 통계', icon: 'fa-solid fa-chart-pie' },
  { key: 'content', label: '콘텐츠 현황', icon: 'fa-solid fa-folder-tree' },
  { key: 'community', label: '커뮤니티 관리', icon: 'fa-solid fa-comments' },
  { key: 'members', label: '회원 관리', icon: 'fa-solid fa-user-group' },
]

function timeAgo(dateStr) {
  if (!dateStr) return '-'
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return '방금 전'
  if (m < 60) return `${m}분 전`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}시간 전`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}일 전`
  return `${Math.floor(d / 30)}개월 전`
}

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function AdminPage() {
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

  // Static stats
  const totalLessons = Object.values(lessons).flat().length
  const totalQuizzes = Object.keys(quizzes).length
  const totalBadges = badges.length
  const totalQuestions = Object.values(quizzes).reduce((sum, q) => sum + q.questions.length, 0)

  const levelStats = Object.entries(lessons)
    .filter(([key]) => levelInfo[key])
    .map(([key, items]) => ({
      key,
      title: levelInfo[key]?.title || key,
      icon: levelInfo[key]?.icon || 'fa-solid fa-folder',
      color: levelInfo[key]?.color || '#666',
      lessonCount: items.length,
    }))

  const quizStats = Object.entries(quizzes).map(([id, quiz]) => ({
    id,
    title: quiz.title,
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
    } catch (err) {
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
    } catch (err) {
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
    try {
      const { data, error } = await supabase
        .from(TABLES.USER_PROGRESS)
        .select('*')
        .eq('user_id', member.id)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      setMemberProgress(data || {
        completed_lessons: [],
        code_runs: 0,
        streak_count: 0,
        streak_last_date: null,
        earned_badges: [],
        quiz_data: {},
      })
    } catch (err) {
      console.error('학생 데이터 조회 오류:', err.message)
      setMemberProgress({
        completed_lessons: [],
        code_runs: 0,
        streak_count: 0,
        streak_last_date: null,
        earned_badges: [],
        quiz_data: {},
      })
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
    } catch (err) {
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

  // Build student quiz list from progress data
  const getStudentQuizList = (progress) => {
    const quizData = progress?.quiz_data || {}
    return Object.entries(quizzes).map(([id, quiz]) => {
      const data = quizData[id]
      const bestScore = data?.bestScore
      const attempts = data?.attempts || []
      const passed = bestScore !== undefined && bestScore >= (quiz.passingScore || 70)
      return { id, title: quiz.title, bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
    })
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1 className="admin-title">
          <i className="fa-solid fa-shield-halved" /> 관리자 대시보드
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
              <i className="fa-solid fa-chart-pie" /> 사이트 통계
            </h2>
            <div className="admin-stats-grid">
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                  <i className="fa-solid fa-book" />
                </div>
                <div className="admin-stat-value">{totalLessons}</div>
                <div className="admin-stat-label">총 레슨</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                  <i className="fa-solid fa-pen-to-square" />
                </div>
                <div className="admin-stat-value">{totalQuizzes}</div>
                <div className="admin-stat-label">총 퀴즈</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                  <i className="fa-solid fa-question-circle" />
                </div>
                <div className="admin-stat-value">{totalQuestions}</div>
                <div className="admin-stat-label">총 문제 수</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                  <i className="fa-solid fa-medal" />
                </div>
                <div className="admin-stat-value">{totalBadges}</div>
                <div className="admin-stat-label">총 배지</div>
              </div>
            </div>
          </section>
        )}

        {/* Content Overview */}
        {activeTab === 'content' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-folder-tree" /> 콘텐츠 현황
            </h2>

            <div className="admin-content-tables">
              <div className="admin-table-wrap">
                <h3 className="admin-table-heading">레벨별 레슨 수</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>레벨</th><th>레슨 수</th></tr>
                  </thead>
                  <tbody>
                    {levelStats.map(l => (
                      <tr key={l.key}>
                        <td><i className={l.icon} style={{ color: l.color, marginRight: 8 }} />{l.title}</td>
                        <td>{l.lessonCount}개</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="admin-table-wrap">
                <h3 className="admin-table-heading">퀴즈별 문제 수</h3>
                <table className="admin-table">
                  <thead>
                    <tr><th>퀴즈</th><th>문제 수</th><th>통과 기준</th><th>제한 시간</th></tr>
                  </thead>
                  <tbody>
                    {quizStats.map(q => (
                      <tr key={q.id}>
                        <td>{q.title}</td>
                        <td>{q.questionCount}문제</td>
                        <td>{q.passingScore}점</td>
                        <td>{Math.floor(q.timeLimit / 60)}분</td>
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
              <i className="fa-solid fa-comments" /> 커뮤니티 관리
              <button className="admin-refresh-btn" onClick={fetchCommunityPosts} disabled={communityLoading}>
                <i className={`fa-solid fa-rotate-right${communityLoading ? ' fa-spin' : ''}`} />
              </button>
            </h2>

            {communityLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>게시글 불러오는 중...</span>
              </div>
            ) : communityPosts.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-inbox" />
                <p>게시글이 없습니다</p>
              </div>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table admin-community-table">
                  <thead>
                    <tr>
                      <th>카테고리</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                      <th>조회</th>
                      <th>관리</th>
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
                        <td className="admin-post-date">{timeAgo(post.created_at)}</td>
                        <td className="admin-post-views">{post.view_count || 0}</td>
                        <td>
                          {deleteConfirm === post.id ? (
                            <div className="admin-delete-confirm">
                              <button className="admin-btn-confirm" onClick={() => handleDeletePost(post.id)}>확인</button>
                              <button className="admin-btn-cancel" onClick={() => setDeleteConfirm(null)}>취소</button>
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
              <i className="fa-solid fa-user-group" /> 회원 관리
              <span className="admin-member-count">{members.length}명</span>
              <button className="admin-refresh-btn" onClick={fetchMembers} disabled={membersLoading}>
                <i className={`fa-solid fa-rotate-right${membersLoading ? ' fa-spin' : ''}`} />
              </button>
            </h2>

            {membersLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>회원 불러오는 중...</span>
              </div>
            ) : members.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-users" />
                <p>등록된 회원이 없습니다</p>
              </div>
            ) : (
              <div className="admin-table-wrap admin-members-table">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>이름</th>
                      <th>이메일</th>
                      <th>로그인 방식</th>
                      <th>마지막 접속</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map(member => (
                      <tr
                        key={member.id}
                        className="admin-member-row"
                        onClick={() => fetchMemberProgress(member)}
                      >
                        <td className="admin-member-avatar-cell">
                          {member.avatar_url ? (
                            <img src={member.avatar_url} alt="" className="admin-member-avatar" />
                          ) : (
                            <div className="admin-member-avatar admin-member-avatar-placeholder">
                              {member.name?.charAt(0)?.toUpperCase() || '?'}
                            </div>
                          )}
                        </td>
                        <td className="admin-member-name">{member.name || '-'}</td>
                        <td className="admin-member-email">{member.email || '-'}</td>
                        <td>
                          <span className="admin-provider-badge">
                            <i className={getProviderIcon(member.provider)} /> {getProviderLabel(member.provider)}
                          </span>
                        </td>
                        <td className="admin-member-date">{timeAgo(member.updated_at)}</td>
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
                <span>학생 데이터 불러오는 중...</span>
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
                        <i className={getProviderIcon(selectedMember.provider)} /> {getProviderLabel(selectedMember.provider)} 로그인
                      </span>
                    </div>
                  </div>

                  {/* Learning Stats */}
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
                        <div className="mypage-stat-bar-fill" style={{ width: `${progressPct}%`, background: '#4B8BBE' }} />
                      </div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                        <i className="fa-solid fa-trophy" />
                      </div>
                      <div className="mypage-stat-value">{quizAvg}<span className="mypage-stat-unit">점</span></div>
                      <div className="mypage-stat-label">퀴즈 평균 점수</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                        <i className="fa-solid fa-play" />
                      </div>
                      <div className="mypage-stat-value">{progress.code_runs || 0}<span className="mypage-stat-unit">회</span></div>
                      <div className="mypage-stat-label">코드 실행 수</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                        <i className="fa-solid fa-fire" />
                      </div>
                      <div className="mypage-stat-value">{progress.streak_count || 0}<span className="mypage-stat-unit">일</span></div>
                      <div className="mypage-stat-label">연속 학습일</div>
                    </div>
                  </div>

                  {/* Earned Badges */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
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
                      <p>아직 획득한 배지가 없습니다.</p>
                    </div>
                  )}

                  {/* Quiz Scores */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
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
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
