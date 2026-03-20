import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { supabase, isSupabaseEnabled } from '../config/supabase'

const AuthContext = createContext()

const SESSION_DURATION = 30 * 60 * 1000 // 30분
const WARNING_THRESHOLD = 5 * 60 * 1000 // 5분
const SESSION_EXPIRY_KEY = 'pymaster-session-expiry'
const ADMIN_EMAILS = ['aebon@kakao.com']

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionTimeLeft, setSessionTimeLeft] = useState(null)
  const intervalRef = useRef(null)

  const getSessionExpiry = () => {
    try {
      const val = localStorage.getItem(SESSION_EXPIRY_KEY)
      return val ? parseInt(val, 10) : null
    } catch { return null }
  }

  const setSessionExpiry = (expiry) => {
    if (expiry) {
      localStorage.setItem(SESSION_EXPIRY_KEY, String(expiry))
    } else {
      localStorage.removeItem(SESSION_EXPIRY_KEY)
    }
  }

  const clearSessionTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setSessionTimeLeft(null)
    setSessionExpiry(null)
  }, [])

  const doSignOut = useCallback(async () => {
    clearSessionTimer()
    if (isSupabaseEnabled()) {
      await supabase.auth.signOut()
    }
  }, [clearSessionTimer])

  const startSessionTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const expiry = getSessionExpiry()
      if (!expiry) return
      const left = expiry - Date.now()
      if (left <= 0) {
        doSignOut()
      } else {
        setSessionTimeLeft(left)
      }
    }, 1000)
  }, [doSignOut])

  const extendSession = useCallback(() => {
    const newExpiry = Date.now() + SESSION_DURATION
    setSessionExpiry(newExpiry)
    setSessionTimeLeft(SESSION_DURATION)
  }, [])

  useEffect(() => {
    if (!isSupabaseEnabled()) {
      console.warn('Supabase가 설정되지 않았습니다. VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 확인하세요.')
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        const existingExpiry = getSessionExpiry()
        if (existingExpiry && existingExpiry > Date.now()) {
          setSessionTimeLeft(existingExpiry - Date.now())
        } else {
          const newExpiry = Date.now() + SESSION_DURATION
          setSessionExpiry(newExpiry)
          setSessionTimeLeft(SESSION_DURATION)
        }
        startSessionTimer()
      }
      setLoading(false)
    }).catch((err) => {
      console.error('세션 확인 오류:', err)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        const newExpiry = Date.now() + SESSION_DURATION
        setSessionExpiry(newExpiry)
        setSessionTimeLeft(SESSION_DURATION)
        startSessionTimer()
      } else {
        clearSessionTimer()
      }
    })

    return () => {
      subscription.unsubscribe()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const signInWithGoogle = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) console.error('Google 로그인 오류:', error.message)
  }

  const signInWithKakao = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: window.location.origin },
    })
    if (error) console.error('Kakao 로그인 오류:', error.message)
  }

  const signOut = doSignOut

  const isAdmin = ADMIN_EMAILS.includes(user?.email)
  const showSessionWarning = sessionTimeLeft !== null && sessionTimeLeft <= WARNING_THRESHOLD && sessionTimeLeft > 0

  const formatTimeLeft = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    isAuthenticated: !!user,
    isAdmin,
    sessionTimeLeft,
    showSessionWarning,
    extendSession,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
      {showSessionWarning && (
        <div className="session-warning">
          <div className="session-warning-content">
            <i className="fa-solid fa-clock" />
            <span>세션이 <strong>{formatTimeLeft(sessionTimeLeft)}</strong> 후 만료됩니다</span>
            <button className="session-extend-btn" onClick={extendSession}>
              <i className="fa-solid fa-rotate-right" /> 연장하기
            </button>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
