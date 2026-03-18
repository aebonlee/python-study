import { Link } from 'react-router-dom'

const quickLinks = [
  { path: '/python-learning', label: '파이썬 학습' },
  { path: '/python-practice', label: '파이썬 실습' },
  { path: '/basics', label: '기초 과정' },
  { path: '/intermediate', label: '중급 과정' },
  { path: '/advanced', label: '고급 과정' },
  { path: '/applied', label: '응용 과정' },
  { path: '/quiz', label: '퀴즈 센터' },
  { path: '/badges', label: '도장깨기' },
]

const familySites = [
  { name: 'Coding Study', url: 'https://coding.dreamitbiz.com' },
  { name: 'DreamIT Biz', url: 'https://dreamitbiz.com' },
]

export default function Footer() {
  const handleFamilySite = (e) => {
    const url = e.target.value
    if (url) {
      window.open(url, '_blank', 'noopener')
      e.target.value = ''
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="brand-py">Py</span><span className="brand-master">Master</span>
            </h3>
            <p>파이썬 전문 학습 플랫폼</p>
            <p className="footer-desc">기초부터 고급, NumPy·Pandas 실습까지 체계적으로 학습하세요.</p>
            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>Family Site</option>
                {familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">바로가기</h4>
            <ul className="footer-quick-links">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>010-3700-0629</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span>카카오톡: aebon</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>평일 09:00 ~ 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 드림아이티비즈(DreamIT Biz). All rights reserved.</p>
          <p className="footer-meta">
            Designed by Ph.D Aebon Lee | 대표이사: 이애본 | 사업자등록번호: 601-45-20154 | 통신판매신고번호: 제2024-수원팔달-0584호 | 출판사 신고번호: 제2026-000026호
          </p>
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
