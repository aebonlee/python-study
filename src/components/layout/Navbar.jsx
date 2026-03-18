import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useProgress } from '../../contexts/ProgressContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const { getTotalProgress } = useProgress()
  const { user, isAuthenticated, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

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
    { to: '/basics', label: '기초' },
    { to: '/intermediate', label: '중급' },
    { to: '/advanced', label: '고급' },
    { to: '/applied', label: '응용' },
    { label: '라이브러리', children: [
      { to: '/intermediate/os-sys', label: 'os/sys', icon: 'fa-solid fa-terminal' },
      { to: '/intermediate/math-cmath', label: 'math', icon: 'fa-solid fa-square-root-variable' },
      { to: '/intermediate/json-module', label: 'json', icon: 'fa-solid fa-code' },
      { to: '/intermediate/datetime-module', label: 'datetime', icon: 'fa-solid fa-calendar-days' },
      { to: '/intermediate/turtle-graphics', label: 'turtle', icon: 'fa-solid fa-pen-ruler' },
      { to: '/applied/numpy-basics', label: 'NumPy', icon: 'fa-solid fa-calculator' },
      { to: '/applied/pandas-basics', label: 'Pandas', icon: 'fa-solid fa-table' },
      { to: '/applied/matplotlib-seaborn', label: 'Matplotlib', icon: 'fa-solid fa-chart-pie' },
      { to: '/applied/scikit-learn', label: 'Scikit-learn', icon: 'fa-solid fa-brain' },
      { to: '/applied/tensorflow-pytorch', label: 'TensorFlow', icon: 'fa-solid fa-network-wired' },
    ]},
    { to: '/quiz', label: '퀴즈' },
    { to: '/badges', label: '도장깨기' },
  ]

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]

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
                      <NavLink to={child.to}><i className={child.icon} /> {child.label}</NavLink>
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

          {/* Auth UI */}
          {isAuthenticated ? (
            <div className="nav-user-menu">
              {userAvatar ? (
                <img src={userAvatar} alt={userName} className="nav-user-avatar" />
              ) : (
                <div className="nav-user-avatar" style={{ background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 14, fontWeight: 700 }}>
                  {userName?.charAt(0)?.toUpperCase()}
                </div>
              )}
              <div className="nav-user-dropdown">
                <div className="nav-user-info">
                  <div className="nav-user-name">{userName}</div>
                  <div className="nav-user-email">{user?.email}</div>
                </div>
                <button onClick={() => { signOut(); navigate('/') }}>
                  <i className="fa-solid fa-right-from-bracket" /> 로그아웃
                </button>
              </div>
            </div>
          ) : (
            <button className="nav-login-btn" onClick={() => navigate('/login')}>
              <i className="fa-solid fa-user" /> 로그인
            </button>
          )}

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
