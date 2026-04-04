import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const { error: err } = await resetPassword(email)
      if (err) throw err
      setSent(true)
    } catch (err) {
      setError((err as Error).message || '비밀번호 재설정 이메일 전송에 실패했습니다.')
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
          <p>비밀번호 찾기</p>
        </div>

        {error && (
          <div className="login-error">
            <i className="fa-solid fa-circle-exclamation" /> {error}
          </div>
        )}

        {sent ? (
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
            <p style={{ fontWeight: 600, marginBottom: '8px' }}>재설정 이메일이 발송되었습니다!</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              이메일을 확인하여 비밀번호를 재설정해주세요.
            </p>
            <Link to="/login" className="login-btn google-btn" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              로그인으로 돌아가기
            </Link>
          </div>
        ) : (
          <form className="auth-email-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="가입한 이메일 주소" required autoFocus />
            </div>
            <div className="auth-form-actions">
              <Link to="/login" className="auth-back-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>뒤로</Link>
              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? '보내는 중...' : '재설정 링크 보내기'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
