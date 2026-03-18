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
