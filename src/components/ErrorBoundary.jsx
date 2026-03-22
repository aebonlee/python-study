import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      const lang = localStorage.getItem('pymaster-lang') || 'ko'
      const isEn = lang === 'en'
      return (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          minHeight: '60vh', padding: '40px', textAlign: 'center'
        }}>
          <div style={{ maxWidth: '480px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>!</div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
              {isEn ? 'Something went wrong' : '문제가 발생했습니다'}
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px', lineHeight: 1.6 }}>
              {isEn
                ? 'An error occurred while loading the page. Please try again.'
                : '페이지를 불러오는 중 오류가 발생했습니다.\n아래 버튼으로 다시 시도해 주세요.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={this.handleReset}
                style={{
                  padding: '10px 20px', borderRadius: '8px', fontWeight: 600,
                  background: '#306998', color: 'white', border: 'none', cursor: 'pointer'
                }}
              >
                {isEn ? 'Try Again' : '다시 시도'}
              </button>
              <button
                onClick={this.handleReload}
                style={{
                  padding: '10px 20px', borderRadius: '8px', fontWeight: 600,
                  background: 'transparent', color: '#306998', border: '2px solid #306998', cursor: 'pointer'
                }}
              >
                {isEn ? 'Reload' : '새로고침'}
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
