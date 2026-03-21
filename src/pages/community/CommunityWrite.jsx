import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useCommunity } from '../../hooks/useCommunity'

const CATEGORIES = [
  { key: 'qna', label: '질문답변', color: 'var(--info)' },
  { key: 'free', label: '자유게시판', color: 'var(--success)' },
  { key: 'code', label: '코드공유', color: 'var(--primary)' },
  { key: 'review', label: '학습후기', color: 'var(--warning)' },
]

function renderPreview(content) {
  const parts = content.split(/(```(\w*)\n[\s\S]*?```)/g)
  const elements = []

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (!part) continue

    const codeMatch = part.match(/^```(\w*)\n([\s\S]*?)```$/)
    if (codeMatch) {
      const lang = codeMatch[1] || 'python'
      const code = codeMatch[2].replace(/\n$/, '')
      elements.push(
        <pre key={i}>
          <code>{code}</code>
        </pre>
      )
      i++
    } else {
      const lines = part.split('\n')
      const textParts = []
      let currentParagraph = []

      lines.forEach((line, li) => {
        if (line.trim() === '') {
          if (currentParagraph.length > 0) {
            textParts.push(<p key={`p-${i}-${li}`}>{currentParagraph.join('\n')}</p>)
            currentParagraph = []
          }
        } else {
          currentParagraph.push(line)
        }
      })
      if (currentParagraph.length > 0) {
        textParts.push(<p key={`p-${i}-end`}>{currentParagraph.join('\n')}</p>)
      }
      elements.push(...textParts)
    }
  }

  return elements
}

export default function CommunityWrite() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, isAuthenticated, requireAuth } = useAuth()
  const { fetchPost, createPost, updatePost, post, error } = useCommunity()

  const editId = searchParams.get('edit')
  const isEdit = !!editId

  const [category, setCategory] = useState('free')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // 비로그인 시 로그인 팝업 표시
  useEffect(() => {
    if (!isAuthenticated) requireAuth(() => {})
  }, [isAuthenticated, requireAuth])

  // 수정 모드: 기존 데이터 로드
  useEffect(() => {
    if (editId) fetchPost(editId)
  }, [editId, fetchPost])

  useEffect(() => {
    if (isEdit && post) {
      setCategory(post.category)
      setTitle(post.title)
      setContent(post.content)
      setTags(post.tags || [])
    }
  }, [isEdit, post])

  const insertCodeBlock = useCallback(() => {
    const codeTemplate = '\n```python\n# 여기에 코드를 작성하세요\n\n```\n'
    setContent(prev => prev + codeTemplate)
    setShowPreview(false)
  }, [])

  const handleTagAdd = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const tag = tagInput.trim().replace(/^#/, '')
      if (tag && tags.length < 5 && !tags.includes(tag)) {
        setTags(prev => [...prev, tag])
      }
      setTagInput('')
    }
  }

  const handleTagRemove = (tagToRemove) => {
    setTags(prev => prev.filter(t => t !== tagToRemove))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim() || submitting) return
    setSubmitting(true)

    let result
    if (isEdit) {
      result = await updatePost(editId, { category, title: title.trim(), content: content.trim(), tags })
    } else {
      result = await createPost({ category, title: title.trim(), content: content.trim(), tags })
    }

    setSubmitting(false)
    if (result) navigate(`/community/${result.id}`)
  }

  return (
    <div className="community-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              돌아가기
            </button>
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-solid fa-pen" /></span>
              <div>
                <h1>{isEdit ? '글 수정' : '글 작성'}</h1>
                <p>커뮤니티에 새 글을 {isEdit ? '수정' : '작성'}합니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-write">
        <div className="container">
          <div className="community-write-inner">
            <form className="community-write-card" onSubmit={handleSubmit}>
              {/* Category */}
              <div className="community-form-group">
                <label className="community-form-label">카테고리</label>
                <div className="community-category-selector">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.key}
                      type="button"
                      className={`community-category-btn${category === cat.key ? ' active' : ''}`}
                      data-category={cat.key}
                      onClick={() => setCategory(cat.key)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div className="community-form-group">
                <label className="community-form-label">제목</label>
                <input
                  type="text"
                  className="community-form-input"
                  placeholder="제목을 입력하세요"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  maxLength={200}
                />
              </div>

              {/* Content */}
              <div className="community-form-group">
                <label className="community-form-label">내용</label>
                <div className="community-editor-toolbar">
                  <button
                    type="button"
                    className="community-toolbar-btn"
                    onClick={insertCodeBlock}
                    title="코드 블록 삽입"
                  >
                    <i className="fa-solid fa-code" /> 코드 삽입
                  </button>
                  <button
                    type="button"
                    className={`community-toolbar-btn${showPreview ? ' active' : ''}`}
                    onClick={() => setShowPreview(!showPreview)}
                  >
                    <i className="fa-solid fa-eye" /> {showPreview ? '편집' : '미리보기'}
                  </button>
                </div>
                {showPreview ? (
                  <div className="community-preview">
                    {content ? renderPreview(content) : <p style={{ color: 'var(--text-light)' }}>내용을 입력하면 미리보기가 표시됩니다.</p>}
                  </div>
                ) : (
                  <textarea
                    className="community-textarea"
                    placeholder="내용을 입력하세요. 코드 블록은 ```python ... ``` 으로 감싸주세요."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
                )}
              </div>

              {/* Tags */}
              <div className="community-form-group">
                <label className="community-form-label">태그 (최대 5개)</label>
                <div className="community-tag-input-wrapper">
                  {tags.map(tag => (
                    <span key={tag} className="community-tag-item">
                      #{tag}
                      <span className="community-tag-remove" onClick={() => handleTagRemove(tag)}>✕</span>
                    </span>
                  ))}
                  {tags.length < 5 && (
                    <input
                      type="text"
                      className="community-tag-input"
                      placeholder="태그 입력 후 Enter"
                      value={tagInput}
                      onChange={e => setTagInput(e.target.value)}
                      onKeyDown={handleTagAdd}
                    />
                  )}
                </div>
                <div className="community-tag-hint">Enter 키를 눌러 태그를 추가하세요</div>
              </div>

              {/* Error */}
              {error && <div className="community-error" style={{ textAlign: 'left', padding: '12px 0' }}><i className="fa-solid fa-triangle-exclamation" /> {error}</div>}

              {/* Actions */}
              <div className="community-form-actions">
                <button type="button" className="community-cancel-btn" onClick={() => navigate(-1)}>취소</button>
                <button
                  type="submit"
                  className="community-submit-btn"
                  disabled={!title.trim() || !content.trim() || submitting}
                >
                  {submitting ? '저장 중...' : isEdit ? '수정 완료' : '글 작성'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
