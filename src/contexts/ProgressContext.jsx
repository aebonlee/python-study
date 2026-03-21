import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { lessons } from '../data/lessons'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { useAuth } from './AuthContext'

const ProgressContext = createContext()

const STORAGE_KEY = 'pymaster-progress'

function migrateQuizScores(quizScores) {
  if (!quizScores) return {}
  const migrated = {}
  for (const [quizId, value] of Object.entries(quizScores)) {
    if (typeof value === 'number') {
      // 기존 형식: { quizId: bestScore } → 새 형식으로 변환 (날짜 정보 없음)
      migrated[quizId] = { attempts: [], bestScore: value }
    } else if (value && typeof value === 'object' && typeof value.bestScore === 'number') {
      migrated[quizId] = value
    }
  }
  return migrated
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      return {
        completedLessons: new Set(data.completedLessons || []),
        quizScores: migrateQuizScores(data.quizScores),
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
  const { user } = useAuth()
  const [state, setState] = useState(loadProgress)
  const quizScoresRef = useRef(state.quizScores)
  quizScoresRef.current = state.quizScores

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
    const now = new Date().toISOString()
    setState(prev => {
      const existing = prev.quizScores[quizId] || { attempts: [], bestScore: 0 }
      const newAttempts = [...existing.attempts, { score, date: now }]
      const bestScore = Math.max(existing.bestScore, score)
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: { attempts: newAttempts, bestScore }
        }
      }
    })

    // Sync to Supabase for logged-in users (bestScore only)
    if (user && isSupabaseEnabled()) {
      const existing = quizScoresRef.current[quizId]
      const prevBest = existing?.bestScore || 0
      const bestScore = Math.max(prevBest, score)
      supabase.from(TABLES.QUIZ_SCORES).upsert({
        user_id: user.id,
        quiz_id: quizId,
        score: bestScore,
        max_score: 100,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,quiz_id' }).then(({ error }) => {
        if (error) console.error('퀴즈 점수 저장 오류:', error.message)
      }).catch(err => {
        console.error('퀴즈 점수 저장 오류:', err)
      })
    }
  }, [user])

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

  const getQuizBestScore = useCallback((quizId) => {
    const data = state.quizScores[quizId]
    return data?.bestScore
  }, [state.quizScores])

  const getQuizAttempts = useCallback((quizId) => {
    const data = state.quizScores[quizId]
    return data?.attempts || []
  }, [state.quizScores])

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
      getQuizBestScore,
      getQuizAttempts,
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
