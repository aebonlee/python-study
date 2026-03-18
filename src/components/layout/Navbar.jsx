import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useProgress } from '../../contexts/ProgressContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const { getTotalProgress } = useProgress()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const totalProgress = getTotalProgress()

  const navItems = [
    {
      label: '학습 경로',
      children: [
        { to: '/basics', label: '🌱 기초 과정' },
        { to: '/intermediate', label: '🚀 중급 과정' },
        { to: '/advanced', label: '⚡ 고급 과정' },
        { to: '/applied', label: '🔬 응용 과정' },
      ]
    },
    {
      label: '실습',
      children: [
        { to: '/applied/numpy-basics', label: '🔢 NumPy 실습' },
        { to: '/applied/pandas-basics', label: '🐼 Pandas 실습' },
        { to: '/applied/data-visualization', label: '📊 데이터 시각화' },
      ]
    },
    { to: '/quiz', label: '퀴즈' },
    { to: '/badges', label: '도장깨기' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          <h1>
            <span className="brand-py">Py</span>
            <span className="brand-master">Master</span>
          </h1>
        </Link>

        <ul className={`nav-menu${mobileOpen ? ' active' : ''}`}>
          {navItems.map((item, i) =>
            item.children ? (
              <li
                key={i}
                className="nav-item-dropdown"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link nav-link-dropdown">
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft: 4}}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <ul className={`dropdown-menu${activeDropdown === i ? ' active' : ''}`}>
                  {item.children.map(child => (
                    <li key={child.to}>
                      <NavLink to={child.to}>{child.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to} className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="nav-actions">
          <div className="nav-progress-badge" title={`전체 진도: ${totalProgress}%`}>
            <svg width="28" height="28" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border-light)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.5" fill="none"
                stroke="var(--accent-yellow)" strokeWidth="3"
                strokeDasharray={`${totalProgress * 0.9738} 97.38`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <span className="progress-text">{totalProgress}%</span>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="테마 전환"
            data-mode={theme}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
