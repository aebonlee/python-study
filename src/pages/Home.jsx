import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { lessons, levelInfo } from '../data/lessons'
import ProgressBar from '../components/ProgressBar'

export default function Home() {
  const { completedLessons, getTotalProgress, getLevelProgress } = useProgress()
  const { earnedBadges } = useBadge()

  const totalLessons = Object.values(lessons).flat().length
  const totalProgress = getTotalProgress()

  const features = [
    { icon: '🌱', title: '기초부터 탄탄하게', desc: '변수, 자료형, 반복문 등 핵심 문법을 단계별로 학습' },
    { icon: '🚀', title: '실력 향상', desc: '객체지향, 함수형 프로그래밍, 정규식 등 중급 과정' },
    { icon: '⚡', title: '고급 테크닉', desc: '데코레이터, 메타클래스, 동시성 프로그래밍' },
    { icon: '🔬', title: 'NumPy & Pandas', desc: '데이터 분석의 핵심 라이브러리 실습' },
    { icon: '🏆', title: '도장깨기', desc: '배지 시스템으로 학습 성과를 확인하고 동기 부여' },
    { icon: '✍️', title: '퀴즈 & 테스트', desc: '단계별 테스트로 이해도를 점검' },
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
            <span className="title-line">파이썬을</span>
            <span className="title-line">
              <span className="highlight">마스터</span>하는 가장 빠른 길
            </span>
          </h1>
          <p className="hero-description">
            기초 문법부터 NumPy·Pandas 데이터 분석까지,
            도장깨기 배지 시스템과 실시간 코드 에디터로
            체계적으로 파이썬을 정복하세요.
          </p>
          <div className="hero-buttons">
            <Link to="/basics" className="btn btn-primary">학습 시작하기</Link>
            <Link to="/badges" className="btn btn-secondary">도장깨기 보기</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{totalLessons}</span>
              <span className="stat-label">학습 레슨</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">학습 단계</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">수집 가능 배지</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">40+</span>
              <span className="stat-label">퀴즈 문제</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">왜 PyMaster인가요?</h2>
            <p className="section-subtitle">체계적인 커리큘럼, 실습 중심의 학습, 동기부여 시스템</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="feature-icon">{f.icon}</span>
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
            <h2 className="section-title">학습 경로</h2>
            <p className="section-subtitle">단계별로 파이썬을 정복하세요</p>
          </div>
          <div className="path-grid">
            {Object.entries(levelInfo).map(([key, info]) => {
              const levelLessons = lessons[key] || []
              const progress = getLevelProgress(key)
              return (
                <Link to={`/${key}`} key={key} className="path-card">
                  <div className="path-card-icon" style={{ background: `${info.color}15`, color: info.color }}>
                    {info.icon}
                  </div>
                  <h3 className="path-card-title">{info.title} 과정</h3>
                  <p className="path-card-desc">{info.description}</p>
                  <div className="path-card-info">
                    <span>{levelLessons.length}개 레슨</span>
                    <span style={{ color: info.color }}>{progress}% 완료</span>
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
              <h2 className="section-title">나의 학습 현황</h2>
            </div>
            <div className="overview-grid">
              <div className="overview-card">
                <h4>전체 진도</h4>
                <div className="overview-big-number">{totalProgress}%</div>
                <ProgressBar value={totalProgress} color="var(--primary-blue)" />
                <p>{completedLessons.size} / {totalLessons} 레슨 완료</p>
              </div>
              <div className="overview-card">
                <h4>획득 배지</h4>
                <div className="overview-big-number">{earnedBadges.length}</div>
                <p>도장깨기 배지를 모아보세요</p>
                <Link to="/badges" className="btn-link">배지 보기 →</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>지금 바로 파이썬 학습을 시작하세요</h2>
            <p>무료로 제공되는 모든 강의와 실습을 즐겨보세요</p>
            <Link to="/basics" className="btn btn-primary">무료로 시작하기</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
