import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>
              <span className="brand-py">Py</span>
              <span className="brand-master">Master</span>
            </h2>
            <p>파이썬 전문 학습 플랫폼</p>
            <p className="footer-desc">기초부터 고급, NumPy·Pandas 실습까지 체계적으로 학습하세요.</p>
          </div>

          <div className="footer-col">
            <h3>학습 경로</h3>
            <ul>
              <li><Link to="/basics">기초 과정</Link></li>
              <li><Link to="/intermediate">중급 과정</Link></li>
              <li><Link to="/advanced">고급 과정</Link></li>
              <li><Link to="/applied">응용 과정</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>실습 & 도구</h3>
            <ul>
              <li><Link to="/applied/numpy-basics">NumPy 실습</Link></li>
              <li><Link to="/applied/pandas-basics">Pandas 실습</Link></li>
              <li><Link to="/applied/data-visualization">데이터 시각화</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>도전</h3>
            <ul>
              <li><Link to="/quiz">퀴즈 센터</Link></li>
              <li><Link to="/badges">도장깨기</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 PyMaster. 파이썬 학습을 위한 오픈소스 프로젝트</p>
          <div className="footer-links">
            <a href="https://github.com/aebonlee/python-study" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="맨 위로">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </footer>
  )
}
