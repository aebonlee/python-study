import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { badges } from '../data/badges'
import { useProgress } from './ProgressContext'
import { lessons } from '../data/lessons'

const BadgeContext = createContext()

const STORAGE_KEY = 'pymaster-badges'

export function BadgeProvider({ children }) {
  const [earnedBadges, setEarnedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  const [newBadge, setNewBadge] = useState(null)

  const { completedLessons, quizScores, codeRuns, streak, isLevelCompleted } = useProgress()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges))
  }, [earnedBadges])

  // Evaluate badge conditions
  useEffect(() => {
    const newlyEarned = []

    for (const badge of badges) {
      if (earnedBadges.includes(badge.id)) continue

      const { condition } = badge
      let earned = false

      switch (condition.type) {
        case 'lessons_completed':
          earned = completedLessons.size >= condition.count
          break
        case 'level_completed':
          earned = isLevelCompleted(condition.level)
          break
        case 'quiz_passed':
          earned = quizScores[condition.quizId] !== undefined && quizScores[condition.quizId] >= condition.minScore
          break
        case 'quiz_perfect':
          earned = quizScores[condition.quizId] === 100
          break
        case 'all_quizzes_passed':
          earned = Object.keys(quizScores).length >= 8 && Object.values(quizScores).every(s => s >= 70)
          break
        case 'all_quizzes_perfect':
          earned = Object.keys(quizScores).length >= 8 && Object.values(quizScores).every(s => s === 100)
          break
        case 'lib_quizzes_passed':
          earned = ['lib-standard', 'lib-turtle', 'lib-data', 'lib-ai'].every(id => quizScores[id] !== undefined && quizScores[id] >= 70)
          break
        case 'lib_quizzes_perfect':
          earned = ['lib-standard', 'lib-turtle', 'lib-data', 'lib-ai'].every(id => quizScores[id] === 100)
          break
        case 'code_runs':
          earned = codeRuns >= condition.count
          break
        case 'streak':
          earned = streak.count >= condition.days
          break
        case 'all_completed':
          earned = Object.keys(lessons).every(level => isLevelCompleted(level))
          break
        case 'specific_lessons':
          earned = condition.lessonIds.every(id => completedLessons.has(id))
          break
        default:
          break
      }

      if (earned) newlyEarned.push(badge.id)
    }

    if (newlyEarned.length > 0) {
      setEarnedBadges(prev => [...prev, ...newlyEarned])
      // Show the first new badge notification
      const badgeData = badges.find(b => b.id === newlyEarned[0])
      if (badgeData) setNewBadge(badgeData)
    }
  }, [completedLessons, quizScores, codeRuns, streak, earnedBadges, isLevelCompleted])

  const dismissBadgeNotification = useCallback(() => {
    setNewBadge(null)
  }, [])

  return (
    <BadgeContext.Provider value={{ earnedBadges, newBadge, dismissBadgeNotification }}>
      {children}
      {/* Badge notification popup */}
      {newBadge && (
        <div className="badge-notification" onClick={dismissBadgeNotification}>
          <div className="badge-notification-content">
            <div className="badge-notification-icon"><i className={newBadge.icon} /></div>
            <div className="badge-notification-text">
              <span className="badge-notification-label">새 배지 획득!</span>
              <span className="badge-notification-title">{newBadge.title}</span>
              <span className="badge-notification-desc">{newBadge.description}</span>
            </div>
          </div>
        </div>
      )}
    </BadgeContext.Provider>
  )
}

export function useBadge() {
  const context = useContext(BadgeContext)
  if (!context) throw new Error('useBadge must be used within BadgeProvider')
  return context
}
