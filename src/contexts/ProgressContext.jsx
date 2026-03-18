import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { lessons } from '../data/lessons'

const ProgressContext = createContext()

const STORAGE_KEY = 'pymaster-progress'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      return {
        completedLessons: new Set(data.completedLessons || []),
        quizScores: data.quizScores || {},
        codeRuns: data.codeRuns || 0,
        streak: data.streak || { count: 0, lastDate: null },
      }
    }
  } catch {}
  return {
    completedLessons: new Set(),
    quizScores: {},
    codeRuns: 0,
    streak: { count: 0, lastDate: null },
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadProgress)

  useEffect(() => {
    const data = {
      completedLessons: Array.from(state.completedLessons),
      quizScores: state.quizScores,
      codeRuns: state.codeRuns,
      streak: state.streak,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [state])

  const completeLesson = useCallback((lessonId) => {
    setState(prev => {
      const newCompleted = new Set(prev.completedLessons)
      newCompleted.add(lessonId)
      const today = new Date().toISOString().split('T')[0]
      let streak = { ...prev.streak }
      if (streak.lastDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        if (streak.lastDate === yesterday) {
          streak = { count: streak.count + 1, lastDate: today }
        } else {
          streak = { count: 1, lastDate: today }
        }
      }
      return { ...prev, completedLessons: newCompleted, streak }
    })
  }, [])

  const uncompleteLesson = useCallback((lessonId) => {
    setState(prev => {
      const newCompleted = new Set(prev.completedLessons)
      newCompleted.delete(lessonId)
      return { ...prev, completedLessons: newCompleted }
    })
  }, [])

  const saveQuizScore = useCallback((quizId, score) => {
    setState(prev => {
      const prevScore = prev.quizScores[quizId] || 0
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: Math.max(prevScore, score)
        }
      }
    })
  }, [])

  const incrementCodeRuns = useCallback(() => {
    setState(prev => ({ ...prev, codeRuns: prev.codeRuns + 1 }))
  }, [])

  const getTotalProgress = useCallback(() => {
    const total = Object.values(lessons).flat().length
    if (total === 0) return 0
    return Math.round((state.completedLessons.size / total) * 100)
  }, [state.completedLessons])

  const getLevelProgress = useCallback((level) => {
    const levelLessons = lessons[level] || []
    if (levelLessons.length === 0) return 0
    const completed = levelLessons.filter(l => state.completedLessons.has(l.id)).length
    return Math.round((completed / levelLessons.length) * 100)
  }, [state.completedLessons])

  const isLevelCompleted = useCallback((level) => {
    const levelLessons = lessons[level] || []
    return levelLessons.length > 0 && levelLessons.every(l => state.completedLessons.has(l.id))
  }, [state.completedLessons])

  return (
    <ProgressContext.Provider value={{
      completedLessons: state.completedLessons,
      quizScores: state.quizScores,
      codeRuns: state.codeRuns,
      streak: state.streak,
      completeLesson,
      uncompleteLesson,
      saveQuizScore,
      incrementCodeRuns,
      getTotalProgress,
      getLevelProgress,
      isLevelCompleted,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}
