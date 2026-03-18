import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, isSupabaseEnabled } from '../config/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseEnabled()) {
      setLoading(false)
      return
    }

    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // 인증 상태 변화 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) console.error('Google 로그인 오류:', error.message)
  }

  const signInWithKakao = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) console.error('Kakao 로그인 오류:', error.message)
  }

  const signOut = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signOut()
    if (error) console.error('로그아웃 오류:', error.message)
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithKakao,
    signOut,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
