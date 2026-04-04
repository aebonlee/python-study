import { useParams } from 'react-router-dom'
import { lessons, levelInfo } from '../data/lessons'
import { useProgress } from '../contexts/ProgressContext'
import { useLanguage } from '../contexts/LanguageContext'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'

export default function LevelPage() {
  const { level } = useParams()
  const { getLevelProgress } = useProgress()
  const { t, localizedField } = useLanguage()
  const info = levelInfo[level]
  const levelLessons = lessons[level] || []
  const progress = getLevelProgress(level)

  if (!info) {
    return (
      <div className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">{t('notFound.title')}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="level-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className={info.icon} /></span>
              <div>
                <h1>{localizedField(info, 'title')} {t('level.course')}</h1>
                <p>{localizedField(info, 'description')}</p>
              </div>
            </div>
            <div className="page-header-progress">
              <ProgressBar value={progress} color="#ffffff" showPercent={true} size="lg" />
              <span className="progress-detail">{levelLessons.filter(l => false).length} / {levelLessons.length} {t('level.completed')}</span>
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
