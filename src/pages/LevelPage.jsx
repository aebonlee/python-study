import { useParams } from 'react-router-dom'
import { lessons, levelInfo } from '../data/lessons'
import { useProgress } from '../contexts/ProgressContext'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'

export default function LevelPage() {
  const { level } = useParams()
  const { getLevelProgress } = useProgress()
  const info = levelInfo[level]
  const levelLessons = lessons[level] || []
  const progress = getLevelProgress(level)

  if (!info) {
    return (
      <div className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">과정을 찾을 수 없습니다</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="level-page">
      <section className="page-header" style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}>
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-icon">{info.icon}</span>
            <h1>{info.title} 과정</h1>
            <p>{info.description}</p>
            <div className="page-header-progress">
              <ProgressBar value={progress} color="#ffffff" showPercent={true} size="lg" />
              <span className="progress-detail">{levelLessons.filter(l => false).length} / {levelLessons.length} 완료</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lessons-section">
        <div className="container">
          <div className="lessons-grid">
            {levelLessons.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} level={level} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
