import { useState, useEffect, useCallback } from 'react'
import { lessons, levelInfo } from '../data/lessons'
import { quizzes } from '../data/quizzes'
import { badges } from '../data/badges'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import BadgeCard from '../components/BadgeCard'

function formatDate(dateStr, lang) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  if (lang === 'en') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function generateClassCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export default function TeacherPage() {
  const { user } = useAuth()
  const { t, lang, localizedField } = useLanguage()
  const [activeTab, setActiveTab] = useState('classes')

  const TEACHER_TABS = [
    { key: 'classes', label: t('teacher.classManagement'), icon: 'fa-solid fa-chalkboard' },
    { key: 'students', label: t('teacher.studentList'), icon: 'fa-solid fa-user-group' },
    { key: 'stats', label: t('teacher.learningStats'), icon: 'fa-solid fa-chart-pie' },
  ]

  // Class management
  const [classes, setClasses] = useState([])
  const [classesLoading, setClassesLoading] = useState(false)
  const [newClassName, setNewClassName] = useState('')
  const [creating, setCreating] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [copiedCode, setCopiedCode] = useState(null)

  // Students
  const [classMembers, setClassMembers] = useState([])
  const [studentsLoading, setStudentsLoading] = useState(false)
  const [selectedClassFilter, setSelectedClassFilter] = useState('all')
  const [allStudents, setAllStudents] = useState([])

  // Student detail modal
  const [selectedMember, setSelectedMember] = useState(null)
  const [memberProgress, setMemberProgress] = useState(null)
  const [memberProgressLoading, setMemberProgressLoading] = useState(false)

  // Stats
  const [statsData, setStatsData] = useState(null)
  const [statsLoading, setStatsLoading] = useState(false)

  const totalLessons = Object.values(lessons).flat().length
  const totalQuizzes = Object.keys(quizzes).length

  // Fetch classes
  const fetchClasses = useCallback(async () => {
    if (!isSupabaseEnabled() || !user) return
    setClassesLoading(true)
    try {
      const { data, error } = await supabase
        .from(TABLES.CLASSES)
        .select('*')
        .eq('teacher_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setClasses(data || [])
    } catch (err: any) {
      console.error('클래스 조회 오류:', err.message)
    } finally {
      setClassesLoading(false)
    }
  }, [user])

  // Fetch students for all classes
  const fetchStudents = useCallback(async () => {
    if (!isSupabaseEnabled() || !user || classes.length === 0) {
      setAllStudents([])
      return
    }
    setStudentsLoading(true)
    try {
      const classIds = classes.map(c => c.id)
      const { data: members, error } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .select('*')
        .in('class_id', classIds)

      if (error) throw error
      setClassMembers(members || [])

      // Get unique student IDs
      const studentIds = [...new Set((members || []).map(m => m.student_id))]
      if (studentIds.length === 0) {
        setAllStudents([])
        setStudentsLoading(false)
        return
      }

      const { data: users, error: usersError } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .in('id', studentIds)

      if (usersError) throw usersError

      // Combine student data with class membership
      const studentsWithClass = (users || []).map(student => {
        const memberEntries = (members || []).filter(m => m.student_id === student.id)
        const studentClasses = memberEntries.map(m => {
          const cls = classes.find(c => c.id === m.class_id)
          return cls ? { ...cls, joined_at: m.joined_at } : null
        }).filter(Boolean)
        return { ...student, classes: studentClasses }
      })

      setAllStudents(studentsWithClass)
    } catch (err: any) {
      console.error('학생 조회 오류:', err.message)
    } finally {
      setStudentsLoading(false)
    }
  }, [user, classes])

  // Calculate stats
  const fetchStats = useCallback(async () => {
    if (!isSupabaseEnabled() || allStudents.length === 0) {
      setStatsData(null)
      return
    }
    setStatsLoading(true)
    try {
      const studentIds = allStudents.map(s => s.id)
      const { data: progressData, error } = await supabase
        .from(TABLES.USER_PROGRESS)
        .select('*')
        .in('user_id', studentIds)

      if (error) throw error

      const progresses = progressData || []

      // Calculate averages
      let totalCompletedLessons = 0
      let totalQuizAvg = 0
      let quizStudentCount = 0

      for (const p of progresses) {
        totalCompletedLessons += (p.completed_lessons?.length || 0)

        const quizData = p.quiz_data || {}
        const quizEntries = Object.values(quizData)
        if (quizEntries.length > 0) {
          const avg = quizEntries.reduce((sum: number, q: any) => sum + (q.bestScore || 0), 0) / quizEntries.length
          totalQuizAvg += avg
          quizStudentCount++
        }
      }

      const avgLessonCompletion = allStudents.length > 0
        ? Math.round((totalCompletedLessons / (allStudents.length * totalLessons)) * 100)
        : 0
      const avgQuizScore = quizStudentCount > 0
        ? Math.round(totalQuizAvg / quizStudentCount)
        : 0

      // Per-class summary
      const classSummary = classes.map(cls => {
        const memberIds = classMembers
          .filter(m => m.class_id === cls.id)
          .map(m => m.student_id)
        const classProgresses = progresses.filter(p => memberIds.includes(p.user_id))

        let classLessons = 0
        let classQuizTotal = 0
        let classQuizCount = 0

        for (const p of classProgresses) {
          classLessons += (p.completed_lessons?.length || 0)
          const quizData = p.quiz_data || {}
          const quizEntries = Object.values(quizData)
          if (quizEntries.length > 0) {
            classQuizTotal += quizEntries.reduce((sum: number, q: any) => sum + (q.bestScore || 0), 0) / quizEntries.length
            classQuizCount++
          }
        }

        return {
          ...cls,
          studentCount: memberIds.length,
          avgLessonPct: memberIds.length > 0 ? Math.round((classLessons / (memberIds.length * totalLessons)) * 100) : 0,
          avgQuizScore: classQuizCount > 0 ? Math.round(classQuizTotal / classQuizCount) : 0,
        }
      })

      setStatsData({
        totalStudents: allStudents.length,
        avgQuizScore,
        avgLessonCompletion,
        classSummary,
      })
    } catch (err: any) {
      console.error('통계 조회 오류:', err.message)
    } finally {
      setStatsLoading(false)
    }
  }, [allStudents, classes, classMembers, totalLessons])

  // Create class
  const handleCreateClass = async () => {
    if (!newClassName.trim() || !isSupabaseEnabled() || !user) return
    setCreating(true)
    try {
      const code = generateClassCode()
      const { error } = await supabase
        .from(TABLES.CLASSES)
        .insert({
          class_name: newClassName.trim(),
          class_code: code,
          teacher_id: user.id,
          teacher_email: user.email,
        })

      if (error) throw error
      setNewClassName('')
      fetchClasses()
    } catch (err: any) {
      console.error('클래스 생성 오류:', err.message)
      if (err.message?.includes('duplicate')) {
        // Code collision - retry
        handleCreateClass()
      }
    } finally {
      setCreating(false)
    }
  }

  // Delete class
  const handleDeleteClass = async (classId) => {
    if (!isSupabaseEnabled()) return
    try {
      const { error } = await supabase
        .from(TABLES.CLASSES)
        .delete()
        .eq('id', classId)

      if (error) throw error
      setClasses(prev => prev.filter(c => c.id !== classId))
      setDeleteConfirm(null)
    } catch (err: any) {
      console.error('클래스 삭제 오류:', err.message)
    }
  }

  // Copy class code
  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch {
      // Fallback
      const textarea = document.createElement('textarea')
      textarea.value = code
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    }
  }

  // Fetch member progress (for student detail modal)
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

      let quizData = progress.quiz_data || {}
      const hasQuizData = Object.keys(quizData).length > 0
      const legacyScores = scoresRes.data || []

      if (!hasQuizData && legacyScores.length > 0) {
        quizData = {}
        for (const s of legacyScores) {
          quizData[s.quiz_id] = {
            attempts: [{ score: s.score, date: s.updated_at }],
            bestScore: s.score,
          }
        }
      } else if (hasQuizData && legacyScores.length > 0) {
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

  const getStudentQuizList = (progress) => {
    const quizData = progress?.quiz_data || {}
    return Object.entries(quizzes).map(([id, quiz]) => {
      const data = quizData[id]
      const bestScore = data?.bestScore
      const attempts = data?.attempts || []
      const passed = bestScore !== undefined && bestScore >= (quiz.passingScore || 70)
      return { id, quiz, title: quiz.title, bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
    })
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

  // Load classes on mount
  useEffect(() => {
    fetchClasses()
  }, [fetchClasses])

  // Load students when switching to students/stats tab or classes change
  useEffect(() => {
    if (activeTab === 'students' || activeTab === 'stats') {
      fetchStudents()
    }
  }, [activeTab, classes, fetchStudents])

  // Load stats when on stats tab and students available
  useEffect(() => {
    if (activeTab === 'stats' && allStudents.length > 0) {
      fetchStats()
    }
  }, [activeTab, allStudents, fetchStats])

  // Filtered students
  const filteredStudents = selectedClassFilter === 'all'
    ? allStudents
    : allStudents.filter(s => s.classes.some(c => c.id === selectedClassFilter))

  // Remove student from class
  const handleRemoveStudent = async (studentId, classId) => {
    if (!isSupabaseEnabled()) return
    try {
      const { error } = await supabase
        .from(TABLES.CLASS_MEMBERS)
        .delete()
        .eq('student_id', studentId)
        .eq('class_id', classId)

      if (error) throw error
      fetchStudents()
    } catch (err: any) {
      console.error('학생 제거 오류:', err.message)
    }
  }

  return (
    <div className="admin-page teacher-page">
      <div className="container">
        <h1 className="admin-title">
          <i className="fa-solid fa-chalkboard-user" /> {t('teacher.title')}
        </h1>

        {/* Tab Navigation */}
        <div className="admin-tabs">
          {TEACHER_TABS.map(tab => (
            <button
              key={tab.key}
              className={`admin-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={tab.icon} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-chalkboard" /> {t('teacher.classManagement')}
            </h2>

            {/* Create Class Form */}
            <div className="teacher-create-form">
              <input
                type="text"
                className="teacher-input"
                placeholder={t('teacher.classNamePlaceholder')}
                value={newClassName}
                onChange={e => setNewClassName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCreateClass()}
                maxLength={30}
              />
              <button
                className="teacher-create-btn"
                onClick={handleCreateClass}
                disabled={!newClassName.trim() || creating}
              >
                {creating ? (
                  <><div className="loading-spinner-small" style={{ width: 16, height: 16, borderWidth: 2 }} /> {t('teacher.creating')}</>
                ) : (
                  <><i className="fa-solid fa-plus" /> {t('teacher.createClass')}</>
                )}
              </button>
            </div>

            {/* Classes List */}
            {classesLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>{t('teacher.loadingClasses')}</span>
              </div>
            ) : classes.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-chalkboard" />
                <p>{t('teacher.noClasses')}</p>
              </div>
            ) : (
              <div className="teacher-class-grid">
                {classes.map(cls => (
                  <div key={cls.id} className="teacher-class-card">
                    <div className="teacher-class-header">
                      <h3 className="teacher-class-name">{cls.class_name}</h3>
                      {deleteConfirm === cls.id ? (
                        <div className="admin-delete-confirm">
                          <button className="admin-btn-confirm" onClick={() => handleDeleteClass(cls.id)}>{t('teacher.delete')}</button>
                          <button className="admin-btn-cancel" onClick={() => setDeleteConfirm(null)}>{t('teacher.cancel')}</button>
                        </div>
                      ) : (
                        <button className="admin-btn-delete" onClick={() => setDeleteConfirm(cls.id)}>
                          <i className="fa-solid fa-trash" />
                        </button>
                      )}
                    </div>
                    <div className="teacher-class-code-wrap">
                      <span className="teacher-class-code-label">{t('teacher.classCode')}</span>
                      <div className="teacher-class-code-row">
                        <span className="teacher-class-code">{cls.class_code}</span>
                        <button
                          className={`teacher-copy-btn${copiedCode === cls.class_code ? ' copied' : ''}`}
                          onClick={() => handleCopyCode(cls.class_code)}
                        >
                          <i className={copiedCode === cls.class_code ? 'fa-solid fa-check' : 'fa-solid fa-copy'} />
                          {copiedCode === cls.class_code ? t('teacher.copied') : t('teacher.copy')}
                        </button>
                      </div>
                    </div>
                    <div className="teacher-class-meta">
                      <span><i className="fa-solid fa-calendar" /> {formatDate(cls.created_at, lang)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-user-group" /> {t('teacher.studentList')}
              <span className="admin-member-count">{filteredStudents.length}{lang === 'en' ? '' : '명'}</span>
              <button className="admin-refresh-btn" onClick={fetchStudents} disabled={studentsLoading}>
                <i className={`fa-solid fa-rotate-right${studentsLoading ? ' fa-spin' : ''}`} />
              </button>
            </h2>

            {/* Class Filter */}
            {classes.length > 0 && (
              <div className="teacher-filter-row">
                <select
                  className="teacher-filter-select"
                  value={selectedClassFilter}
                  onChange={e => setSelectedClassFilter(e.target.value)}
                >
                  <option value="all">{t('teacher.allClasses')}</option>
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.class_name}</option>
                  ))}
                </select>
              </div>
            )}

            {studentsLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>{t('teacher.loadingStudents')}</span>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="admin-empty">
                <i className="fa-solid fa-users" />
                <p>{t('teacher.noStudents')}</p>
              </div>
            ) : (
              <div className="admin-table-wrap admin-members-table">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('teacher.num')}</th>
                      <th>{t('teacher.name')}</th>
                      <th>{t('teacher.email')}</th>
                      <th>{t('teacher.class')}</th>
                      <th>{t('teacher.joinDate')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, idx) => (
                      <tr
                        key={student.id}
                        className="admin-member-row"
                        onClick={() => fetchMemberProgress(student)}
                      >
                        <td className="admin-member-num">{idx + 1}</td>
                        <td className="admin-member-name">{student.name || '-'}</td>
                        <td className="admin-member-email">{student.email || '-'}</td>
                        <td>
                          <div className="teacher-student-classes">
                            {student.classes.map(c => (
                              <span key={c.id} className="teacher-class-badge">{c.class_name}</span>
                            ))}
                          </div>
                        </td>
                        <td className="admin-member-date">{formatDate(student.created_at, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              <i className="fa-solid fa-chart-pie" /> {t('teacher.learningStats')}
            </h2>

            {statsLoading ? (
              <div className="admin-loading">
                <div className="loading-spinner-small" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>{t('teacher.loadingStats')}</span>
              </div>
            ) : !statsData ? (
              <div className="admin-empty">
                <i className="fa-solid fa-chart-bar" />
                <p>{t('teacher.noStatsAvailable')}</p>
              </div>
            ) : (
              <>
                <div className="admin-stats-grid">
                  <div className="admin-stat-card">
                    <div className="admin-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                      <i className="fa-solid fa-users" />
                    </div>
                    <div className="admin-stat-value">{statsData.totalStudents}</div>
                    <div className="admin-stat-label">{t('teacher.totalStudents')}</div>
                  </div>
                  <div className="admin-stat-card">
                    <div className="admin-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                      <i className="fa-solid fa-trophy" />
                    </div>
                    <div className="admin-stat-value">{statsData.avgQuizScore}<span style={{ fontSize: 16, fontWeight: 400 }}>{lang === 'en' ? 'pts' : '점'}</span></div>
                    <div className="admin-stat-label">{t('teacher.avgQuizScore')}</div>
                  </div>
                  <div className="admin-stat-card">
                    <div className="admin-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                      <i className="fa-solid fa-book-open" />
                    </div>
                    <div className="admin-stat-value">{statsData.avgLessonCompletion}<span style={{ fontSize: 16, fontWeight: 400 }}>%</span></div>
                    <div className="admin-stat-label">{t('teacher.avgLessonCompletion')}</div>
                  </div>
                  <div className="admin-stat-card">
                    <div className="admin-stat-icon" style={{ background: 'rgba(155,89,182,0.12)', color: '#9b59b6' }}>
                      <i className="fa-solid fa-chalkboard" />
                    </div>
                    <div className="admin-stat-value">{classes.length}</div>
                    <div className="admin-stat-label">{t('teacher.totalClasses')}</div>
                  </div>
                </div>

                {/* Per-class summary */}
                {statsData.classSummary.length > 0 && (
                  <div className="admin-table-wrap" style={{ marginTop: 24 }}>
                    <h3 className="admin-table-heading">{t('teacher.classSummary')}</h3>
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>{t('teacher.classLabel')}</th>
                          <th>{t('teacher.studentCount')}</th>
                          <th>{t('teacher.avgLessonPct')}</th>
                          <th>{t('teacher.avgQuizScoreLabel')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {statsData.classSummary.map(cls => (
                          <tr key={cls.id}>
                            <td style={{ fontWeight: 600 }}>{cls.class_name}</td>
                            <td>{cls.studentCount}{lang === 'en' ? '' : '명'}</td>
                            <td>{cls.avgLessonPct}%</td>
                            <td>{cls.avgQuizScore}{lang === 'en' ? 'pts' : '점'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
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
                <span>{t('teacher.loadingStudentData')}</span>
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
                        <i className={getProviderIcon(selectedMember.provider)} /> {getProviderLabel(selectedMember.provider)} {t('teacher.loginSuffix')}
                      </span>
                    </div>
                  </div>

                  {/* Learning Stats */}
                  <h2 className="mypage-section-title">
                    <i className="fa-solid fa-chart-line" /> {t('teacher.learningStats')}
                  </h2>
                  <div className="mypage-stats-grid">
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(75,139,190,0.12)', color: '#4B8BBE' }}>
                        <i className="fa-solid fa-book-open" />
                      </div>
                      <div className="mypage-stat-value">{completedCount}<span className="mypage-stat-unit">/{totalLessons}</span></div>
                      <div className="mypage-stat-label">{t('teacher.completedLessons')}</div>
                      <div className="mypage-stat-bar">
                        <div className="mypage-stat-bar-fill" style={{ width: `${progressPct}%`, background: '#4B8BBE' }} />
                      </div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(255,212,59,0.15)', color: '#D4A017' }}>
                        <i className="fa-solid fa-trophy" />
                      </div>
                      <div className="mypage-stat-value">{quizAvg}<span className="mypage-stat-unit">{lang === 'en' ? 'pts' : '점'}</span></div>
                      <div className="mypage-stat-label">{t('teacher.quizAvgScore')}</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ecc71' }}>
                        <i className="fa-solid fa-play" />
                      </div>
                      <div className="mypage-stat-value">{progress.code_runs || 0}<span className="mypage-stat-unit">{lang === 'en' ? 'runs' : '회'}</span></div>
                      <div className="mypage-stat-label">{t('teacher.codeRunCount')}</div>
                    </div>
                    <div className="mypage-stat-card">
                      <div className="mypage-stat-icon" style={{ background: 'rgba(231,76,60,0.12)', color: '#e74c3c' }}>
                        <i className="fa-solid fa-fire" />
                      </div>
                      <div className="mypage-stat-value">{progress.streak_count || 0}<span className="mypage-stat-unit">{lang === 'en' ? 'days' : '일'}</span></div>
                      <div className="mypage-stat-label">{t('teacher.streakDays')}</div>
                    </div>
                  </div>

                  {/* Earned Badges */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
                    <i className="fa-solid fa-medal" /> {t('teacher.earnedBadges')} <span className="mypage-badge-count">{earnedBadgeData.length}{lang === 'en' ? '' : '개'}</span>
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
                      <p>{t('teacher.noBadgesEarned')}</p>
                    </div>
                  )}

                  {/* Quiz Scores */}
                  <h2 className="mypage-section-title" style={{ marginTop: 28 }}>
                    <i className="fa-solid fa-clipboard-check" /> {t('teacher.quizScorecard')}
                  </h2>
                  <div className="mypage-quiz-table-wrap">
                    <table className="mypage-quiz-table">
                      <thead>
                        <tr>
                          <th>{t('teacher.quizScorecard').split(' ')[0] || (lang === 'en' ? 'Quiz' : '퀴즈')}</th>
                          <th>{t('teacher.attempt1')}</th>
                          <th>{t('teacher.attempt2')}</th>
                          <th>{t('teacher.attempt3')}</th>
                          <th>{t('teacher.finalStatus')}</th>
                          <th>{t('teacher.firstDate')}</th>
                          <th>{t('teacher.lastDate')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentQuizList.map(q => {
                          const recent3 = q.attempts.slice(-3)
                          const firstDate = q.attempts.length > 0 ? q.attempts[0].date : null
                          const lastDate = q.attempts.length > 0 ? q.attempts[q.attempts.length - 1].date : null
                          return (
                            <tr key={q.id}>
                              <td className="quiz-name-cell">{localizedField(q.quiz, 'title')}</td>
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
                                  <span className="quiz-status not-taken">{t('teacher.notTaken')}</span>
                                ) : q.passed ? (
                                  <span className="quiz-status pass"><i className="fa-solid fa-circle-check" /> {t('teacher.pass')}</span>
                                ) : (
                                  <span className="quiz-status fail"><i className="fa-solid fa-circle-xmark" /> {t('teacher.fail')}</span>
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
