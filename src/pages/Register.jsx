import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Register() {
  const { signUpWithEmail, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    navigate('/', { replace: true })
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)) {
      setError('비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.')
      return
    }

    setLoading(true)
    try {
      const { error: err } = await signUpWithEmail(email, password, displayName)
      if (err) {
        setError(err.message)
      } else {
        setSuccess(true)
      }
    } catch {
      setError('회원가입 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>
            <span className="brand-py">Py</span>
            <span className="brand-master">Master</span>
          </h1>
          <p>PyMaster와 함께 학습을 시작하세요.</p>
        </div>

        {error && (
          <div className="login-error">
            <i className="fa-solid fa-circle-exclamation" /> {error}
          </div>
        )}

        {success ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.1)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
            }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#22c55e" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p style={{ fontWeight: 600, marginBottom: '8px' }}>회원가입이 완료되었습니다!</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              이메일을 확인해주세요.
            </p>
            <Link to="/login" className="login-btn google-btn" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              로그인으로 돌아가기
            </Link>
          </div>
        ) : (
          <form className="auth-email-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="이름" required autoFocus />
            </div>
            <div className="auth-field">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일 주소" required />
            </div>
            <div className="auth-field">
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호 (8자 이상, 영문+숫자)" required minLength={8} />
            </div>
            <div className="auth-field">
              <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="비밀번호 확인" required />
            </div>
            <button type="submit" className="login-btn google-btn" style={{ width: '100%' }} disabled={loading}>
              {loading ? '가입 중...' : '회원가입'}
            </button>
          </form>
        )}

        <div className="login-footer">
          <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
        </div>
      </div>
    </div>
  )
}
