import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { lessons, levelInfo } from '../data/lessons'
import { lessonContents } from '../data/lessonContents'
import { useProgress } from '../contexts/ProgressContext'
import CodeEditor from '../components/CodeEditor'

export default function LessonPage() {
  const { level, lessonId } = useParams()
  const { completedLessons, completeLesson } = useProgress()
  const [activeSection, setActiveSection] = useState(0)

  const info = levelInfo[level]
  const levelLessons = lessons[level] || []
  const lesson = levelLessons.find(l => l.id === lessonId)
  const content = lessonContents[lessonId]
  const isCompleted = completedLessons.has(lessonId)

  // Find prev/next lessons
  const currentIdx = levelLessons.findIndex(l => l.id === lessonId)
  const prevLesson = currentIdx > 0 ? levelLessons[currentIdx - 1] : null
  const nextLesson = currentIdx < levelLessons.length - 1 ? levelLessons[currentIdx + 1] : null

  if (!lesson || !info) {
    return (
      <div className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">레슨을 찾을 수 없습니다</h2>
          <Link to={`/${level}`} className="btn btn-primary">목록으로 돌아가기</Link>
        </div>
      </div>
    )
  }

  const sections = content?.sections || [
    {
      title: lesson.title,
      content: `이 레슨에서는 ${lesson.description}에 대해 학습합니다.`,
      code: '# 예제 코드\nprint("Hello, Python!")',
      expectedOutput: 'Hello, Python!'
    }
  ]

  return (
    <div className="lesson-page">
      {/* Page Header */}
      <section className="page-header" style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <span>/</span>
            <Link to={`/${level}`}>{info.title} 과정</Link>
            <span>/</span>
            <span>{lesson.title}</span>
          </div>
          <div className="page-header-content">
            <span className="page-header-icon">{lesson.icon}</span>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            <div className="lesson-meta-bar">
              <span>⏱️ 약 {lesson.estimatedTime}분</span>
              <span>📋 {lesson.topics?.length || 0}개 주제</span>
              <span>{'⭐'.repeat(lesson.difficulty)}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="lesson-layout container">
        {/* Sidebar */}
        <aside className="lesson-sidebar">
          <h3>학습 목차</h3>
          <ul className="lesson-toc">
            {sections.map((sec, i) => (
              <li key={i}>
                <button
                  className={`toc-item${activeSection === i ? ' active' : ''}`}
                  onClick={() => setActiveSection(i)}
                >
                  <span className="toc-number">{i + 1}</span>
                  <span className="toc-title">{sec.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {lesson.topics && (
            <div className="lesson-topics-list">
              <h4>학습 주제</h4>
              {lesson.topics.map((topic, i) => (
                <span key={i} className="topic-tag">{topic}</span>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="lesson-content">
          <div className="lesson-section">
            <h2>{sections[activeSection]?.title}</h2>
            <div className="lesson-text" dangerouslySetInnerHTML={{
              __html: sections[activeSection]?.content?.replace(/\n/g, '<br/>')
            }} />

            {sections[activeSection]?.code && (
              <div className="lesson-practice">
                <h3>직접 실습해보세요</h3>
                <CodeEditor
                  initialCode={sections[activeSection].code}
                  expectedOutput={sections[activeSection].expectedOutput || ''}
                  lessonId={lessonId}
                />
              </div>
            )}

            {sections[activeSection]?.tip && (
              <div className="lesson-tip">
                <span className="tip-icon">💡</span>
                <div>
                  <strong>팁:</strong> {sections[activeSection].tip}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="lesson-nav">
            <div className="lesson-nav-left">
              {prevLesson && (
                <Link to={`/${level}/${prevLesson.id}`} className="lesson-nav-btn prev">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                  <div>
                    <span className="nav-label">이전 레슨</span>
                    <span className="nav-title">{prevLesson.title}</span>
                  </div>
                </Link>
              )}
            </div>

            {!isCompleted && (
              <button className="btn btn-accent complete-btn" onClick={() => completeLesson(lessonId)}>
                ✓ 학습 완료
              </button>
            )}
            {isCompleted && (
              <span className="completed-badge-inline">✓ 완료됨</span>
            )}

            <div className="lesson-nav-right">
              {nextLesson && (
                <Link to={`/${level}/${nextLesson.id}`} className="lesson-nav-btn next">
                  <div>
                    <span className="nav-label">다음 레슨</span>
                    <span className="nav-title">{nextLesson.title}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
