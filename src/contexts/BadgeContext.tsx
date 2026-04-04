import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { badges } from '../data/badges'
import { useProgress } from './ProgressContext'
import { useLanguage } from './LanguageContext'
import { lessons } from '../data/lessons'

interface Badge {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: string
  tier: string
  condition: {
    type: string
    count?: number
    level?: string
    quizId?: string
    minScore?: number
    days?: number
    lessonIds?: string[]
  }
}

interface BadgeContextType {
  earnedBadges: string[]
  newBadge: Badge | null
  dismissBadgeNotification: () => void
}

const BadgeContext = createContext<BadgeContextType | null>(null)

const STORAGE_KEY = 'pymaster-badges'

export function BadgeProvider({ children }: { children: ReactNode }) {
  const [earnedBadges, setEarnedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  const [newBadge, setNewBadge] = useState<Badge | null>(null)

  const { completedLessons, quizScores, codeRuns, streak, isLevelCompleted, getQuizBestScore } = useProgress()
  const { lang, localizedField } = useLanguage()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges))
  }, [earnedBadges])

  // 배지 동기화는 ProgressContext의 syncToSupabase가 localStorage에서 읽어서 함께 처리

  // Evaluate badge conditions
  useEffect(() => {
    const newlyEarned: string[] = []

    for (const badge of badges as Badge[]) {
      if (earnedBadges.includes(badge.id)) continue

      const { condition } = badge
      let earned = false

      switch (condition.type) {
        case 'lessons_completed':
          earned = completedLessons.size >= (condition.count || 0)
          break
        case 'level_completed':
          earned = isLevelCompleted(condition.level || '')
          break
        case 'quiz_passed': {
          const bs = getQuizBestScore(condition.quizId || '')
          earned = bs !== undefined && bs >= (condition.minScore || 0)
          break
        }
        case 'quiz_perfect':
          earned = getQuizBestScore(condition.quizId || '') === 100
          break
        case 'all_quizzes_passed':
          earned = Object.keys(quizScores).length >= 8 && Object.values(quizScores).every(s => s?.bestScore >= 70)
          break
        case 'all_quizzes_perfect':
          earned = Object.keys(quizScores).length >= 8 && Object.values(quizScores).every(s => s?.bestScore === 100)
          break
        case 'lib_quizzes_passed':
          earned = ['lib-standard', 'lib-turtle', 'lib-data', 'lib-ai'].every(id => { const bs = getQuizBestScore(id); return bs !== undefined && bs >= 70 })
          break
        case 'lib_quizzes_perfect':
          earned = ['lib-standard', 'lib-turtle', 'lib-data', 'lib-ai'].every(id => getQuizBestScore(id) === 100)
          break
        case 'code_runs':
          earned = codeRuns >= (condition.count || 0)
          break
        case 'streak':
          earned = streak.count >= (condition.days || 0)
          break
        case 'all_completed':
          earned = Object.keys(lessons).every(level => isLevelCompleted(level))
          break
        case 'specific_lessons':
          earned = (condition.lessonIds || []).every(id => completedLessons.has(id))
          break
        default:
          break
      }

      if (earned) newlyEarned.push(badge.id)
    }

    if (newlyEarned.length > 0) {
      setEarnedBadges(prev => [...prev, ...newlyEarned])
      // Show the first new badge notification
      const badgeData = (badges as Badge[]).find(b => b.id === newlyEarned[0])
      if (badgeData) setNewBadge(badgeData)
    }
  }, [completedLessons, quizScores, codeRuns, streak, earnedBadges, isLevelCompleted, getQuizBestScore])

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
              <span className="badge-notification-label">{lang === 'en' ? 'New Badge Earned!' : '새 배지 획득!'}</span>
              <span className="badge-notification-title">{localizedField(newBadge, 'title')}</span>
              <span className="badge-notification-desc">{localizedField(newBadge, 'description')}</span>
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
