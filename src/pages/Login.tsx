import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import { isSupabaseEnabled } from '../config/supabase'

export default function Login() {
  const { signInWithGoogle, signInWithKakao, signInWithEmail, isAuthenticated, loading } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [step, setStep] = useState('method')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const errorCode = params.get('error')
    const errorDesc = params.get('error_description')
    if (errorCode) {
      setError(errorDesc || `로그인 오류: ${errorCode}`)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  const handleGoogleLogin = async () => {
    setError('')
    if (!isSupabaseEnabled()) {
      setError(t('login.serverError'))
      return
    }
    await signInWithGoogle()
  }

  const handleKakaoLogin = async () => {
    setError('')
    if (!isSupabaseEnabled()) {
      setError(t('login.serverError'))
      return
    }
    await signInWithKakao()
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const { error: err } = await signInWithEmail(email, password)
      if (err) setError(err.message === 'Invalid login credentials' ? '이메일 또는 비밀번호가 올바르지 않습니다.' : err.message)
    } catch {
      setError('로그인 중 오류가 발생했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="login-page">
        <div className="login-card" style={{ display: 'flex', justifyContent: 'center', padding: '60px 40px' }}>
          <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(48,105,152,0.2)', borderTopColor: '#306998' }} />
        </div>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>
            <span className="brand-py">Py</span>
            <span className="brand-master">Master</span>
          </h1>
          <p>{t('login.subtitle')}</p>
        </div>

        {error && (
          <div className="login-error">
            <i className="fa-solid fa-circle-exclamation" /> {error}
          </div>
        )}

        {step === 'method' ? (
          <>
            <div className="login-buttons">
              <button className="login-btn google-btn" onClick={handleGoogleLogin}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {t('login.googleLogin')}
              </button>

              <button className="login-btn kakao-btn" onClick={handleKakaoLogin}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.724 1.8 5.112 4.508 6.459-.196.735-.712 2.665-.815 3.079-.128.514.189.507.396.369.163-.108 2.593-1.76 3.648-2.476.735.108 1.494.165 2.263.165 5.523 0 10-3.463 10-7.596C22 6.463 17.523 3 12 3z" fill="#3C1E1E"/>
                </svg>
                {t('login.kakaoLogin')}
              </button>

              <button className="login-btn email-btn" onClick={() => setStep('email')}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                이메일로 로그인
              </button>
            </div>

            <div className="login-footer">
              <p>계정이 없으신가요? <Link to="/register">회원가입</Link></p>
            </div>
          </>
        ) : (
          <>
            <form className="auth-email-form" onSubmit={handleEmailLogin}>
              <div className="auth-field">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일 주소" required autoFocus />
              </div>
              <div className="auth-field">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" required />
              </div>
              <div className="auth-form-actions">
                <button type="button" className="auth-back-btn" onClick={() => { setStep('method'); setError('') }}>뒤로</button>
                <button type="submit" className="auth-submit-btn" disabled={submitting}>
                  {submitting ? '로그인 중...' : '로그인'}
                </button>
              </div>
            </form>

            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <Link to="/forgot-password" style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <div className="login-footer">
              <p>계정이 없으신가요? <Link to="/register">회원가입</Link></p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
