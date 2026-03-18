import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { levelInfo } from '../data/lessons'

export default function LessonCard({ lesson, level }) {
  const { completedLessons } = useProgress()
  const isCompleted = completedLessons.has(lesson.id)

  const color = levelInfo[level]?.color || '#306998'

  return (
    <Link to={`/${level}/${lesson.id}`} className={`lesson-card${isCompleted ? ' completed' : ''}`}>
      <div className="lesson-card-header">
        <span className="lesson-icon"><i className={lesson.icon} /></span>
        {isCompleted && (
          <span className="lesson-complete-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
        )}
      </div>

      <h3 className="lesson-card-title">{lesson.title}</h3>
      <p className="lesson-card-desc">{lesson.description}</p>

      <div className="lesson-card-meta">
        <span className="lesson-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {lesson.estimatedTime}분
        </span>
        <span className="lesson-topics">{lesson.topics?.length || 0}개 주제</span>
      </div>

      <div className="lesson-card-level" style={{ background: `${color}15`, color }}>
        {Array.from({ length: 3 }, (_, i) => (
          <i key={i} className={i < lesson.difficulty ? 'fa-solid fa-star' : 'fa-regular fa-star'} />
        ))}
      </div>
    </Link>
  )
}
