import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { lessons, levelInfo } from '../data/lessons'
import ProgressBar from '../components/ProgressBar'

export default function Home() {
  const { completedLessons, getTotalProgress, getLevelProgress } = useProgress()
  const { earnedBadges } = useBadge()
  const { t, lang } = useLanguage()

  const totalLessons = Object.values(lessons).flat().length
  const totalProgress = getTotalProgress()

  const features = [
    { icon: 'fa-solid fa-seedling', title: t('home.feature1Title'), desc: t('home.feature1Desc') },
    { icon: 'fa-solid fa-rocket', title: t('home.feature2Title'), desc: t('home.feature2Desc') },
    { icon: 'fa-solid fa-bolt', title: t('home.feature3Title'), desc: t('home.feature3Desc') },
    { icon: 'fa-solid fa-microscope', title: t('home.feature4Title'), desc: t('home.feature4Desc') },
    { icon: 'fa-solid fa-trophy', title: t('home.feature5Title'), desc: t('home.feature5Desc') },
    { icon: 'fa-solid fa-pen-nib', title: t('home.feature6Title'), desc: t('home.feature6Desc') },
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-effect">
          <div className="particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${3 + Math.random() * 5}px`,
                  height: `${3 + Math.random() * 5}px`,
                  '--duration': `${15 + Math.random() * 15}s`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          <div className="floating-code">
            <span className="code-line" style={{ top: '15%', left: '60%', animationDelay: '0s' }}>def learn_python():</span>
            <span className="code-line" style={{ top: '25%', left: '65%', animationDelay: '2s' }}>    return "Hello, World!"</span>
            <span className="code-line" style={{ top: '40%', left: '55%', animationDelay: '4s' }}>import numpy as np</span>
            <span className="code-line" style={{ top: '55%', left: '70%', animationDelay: '6s' }}>import pandas as pd</span>
            <span className="code-line" style={{ top: '70%', left: '58%', animationDelay: '8s' }}>for i in range(100):</span>
            <span className="code-line" style={{ top: '80%', left: '63%', animationDelay: '10s' }}>    print(f"Level {'{i}'}")</span>
          </div>
        </div>

        <div className="container hero-content">
          <h1 className="hero-title">
            {lang === 'en' ? (
              <>
                <span className="title-line">{t('home.heroTitle1')}</span>
                <span className="title-line">
                  <span className="highlight">{t('home.heroTitle2')}</span>{t('home.heroTitle3')}
                </span>
              </>
            ) : (
              <>
                <span className="title-line">{t('home.heroTitle1')}</span>
                <span className="title-line">
                  <span className="highlight">{t('home.heroTitle2')}</span>{t('home.heroTitle3')}
                </span>
              </>
            )}
          </h1>
          <p className="hero-description">
            {t('home.heroDesc')}
          </p>
          <div className="hero-buttons">
            <Link to="/basics" className="btn btn-primary">{t('home.startLearning')}</Link>
            <Link to="/badges" className="btn btn-secondary">{t('home.viewBadges')}</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{totalLessons}</span>
              <span className="stat-label">{t('home.lessonsCount')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">{t('home.stagesCount')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">{t('home.badgesCount')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">40+</span>
              <span className="stat-label">{t('home.quizCount')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.whyPyMaster')}</h2>
            <p className="section-subtitle">{t('home.whySubtitle')}</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="feature-icon"><i className={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="path-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.learningPath')}</h2>
            <p className="section-subtitle">{t('home.pathSubtitle')}</p>
          </div>
          <div className="path-grid">
            {Object.entries(levelInfo).filter(([key]) => ['basics','intermediate','advanced','applied'].includes(key)).map(([key, info]) => {
              const levelLessons = lessons[key] || []
              const progress = getLevelProgress(key)
              const title = t(`levelInfo.${key}.title`) || info.title
              const desc = t(`levelInfo.${key}.description`) || info.description
              return (
                <Link to={`/${key}`} key={key} className="path-card">
                  <div className="path-card-icon" style={{ background: `${info.color}15`, color: info.color }}>
                    <i className={info.icon} />
                  </div>
                  <h3 className="path-card-title">{title} {t('home.course')}</h3>
                  <p className="path-card-desc">{desc}</p>
                  <div className="path-card-info">
                    <span>{levelLessons.length}{t('home.lessons')}</span>
                    <span style={{ color: info.color }}>{progress}{t('home.completed')}</span>
                  </div>
                  <ProgressBar value={progress} color={info.color} showPercent={false} size="sm" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Progress Overview (if user has started) */}
      {completedLessons.size > 0 && (
        <section className="overview-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('home.myProgress')}</h2>
            </div>
            <div className="overview-grid">
              <div className="overview-card">
                <h4>{t('home.totalProgressLabel')}</h4>
                <div className="overview-big-number">{totalProgress}%</div>
                <ProgressBar value={totalProgress} color="var(--primary)" />
                <p>{completedLessons.size} / {totalLessons} {t('home.lessonsCompleted')}</p>
              </div>
              <div className="overview-card">
                <h4>{t('home.earnedBadgesLabel')}</h4>
                <div className="overview-big-number">{earnedBadges.length}</div>
                <p>{t('home.collectBadges')}</p>
                <Link to="/badges" className="btn-link">{t('home.viewBadgesLink')}</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaDesc')}</p>
            <Link to="/basics" className="btn btn-primary">{t('home.ctaButton')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
