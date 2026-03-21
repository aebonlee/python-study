import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useCommunity } from '../../hooks/useCommunity'

const CATEGORY_LABELS = { qna: 'Q&A', free: '자유게시판', code: '코드공유', review: '학습후기' }

// Python syntax highlighting tokens
const PYTHON_KEYWORDS = ['False','None','True','and','as','assert','async','await','break','class','continue','def','del','elif','else','except','finally','for','from','global','if','import','in','is','lambda','nonlocal','not','or','pass','raise','return','try','while','with','yield']
const PYTHON_BUILTINS = ['print','len','range','int','str','float','list','dict','set','tuple','type','input','open','map','filter','zip','enumerate','sorted','reversed','abs','max','min','sum','all','any','isinstance','issubclass','hasattr','getattr','setattr','super','property','staticmethod','classmethod']

function highlightPython(code) {
  // Escape HTML
  let html = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  // Comments
  html = html.replace(/(#.*)$/gm, '<span class="token comment">$1</span>')

  // Triple-quoted strings
  html = html.replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="token string">$1</span>')

  // Strings
  html = html.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="token string">$1</span>')

  // Numbers
  html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="token number">$1</span>')

  // Booleans
  html = html.replace(/\b(True|False|None)\b/g, '<span class="token boolean">$1</span>')

  // Decorators
  html = html.replace(/(@\w+)/g, '<span class="token decorator">$1</span>')

  // Keywords
  const kwPattern = new RegExp(`\\b(${PYTHON_KEYWORDS.filter(k => !['True','False','None'].includes(k)).join('|')})\\b`, 'g')
  html = html.replace(kwPattern, '<span class="token keyword">$1</span>')

  // Builtins
  const builtinPattern = new RegExp(`\\b(${PYTHON_BUILTINS.join('|')})(?=\\s*\\()`, 'g')
  html = html.replace(builtinPattern, '<span class="token builtin">$1</span>')

  // Function definitions
  html = html.replace(/\b(def|class)\b(\s+)(\w+)/g, '<span class="token keyword">$1</span>$2<span class="token function">$3</span>')

  return html
}

function renderContent(content) {
  const parts = content.split(/(```(\w*)\n[\s\S]*?```)/g)
  const elements = []

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (!part) continue

    const codeMatch = part.match(/^```(\w*)\n([\s\S]*?)```$/)
    if (codeMatch) {
      const lang = codeMatch[1] || 'python'
      const code = codeMatch[2].replace(/\n$/, '')
      const highlighted = lang === 'python' || !codeMatch[1] ? highlightPython(code) : code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      elements.push(
        <pre key={i} style={{ position: 'relative' }}>
          <span className="community-code-lang">{lang}</span>
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      )
      i++ // skip the language capture group
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

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return '방금 전'
  if (m < 60) return `${m}분 전`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}시간 전`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d}일 전`
  const mon = Math.floor(d / 30)
  if (mon < 12) return `${mon}개월 전`
  return `${Math.floor(mon / 12)}년 전`
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function CommunityPost() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const { user, isAuthenticated, requireAuth } = useAuth()
  const {
    post, comments, loading, error,
    fetchPost, fetchComments, createComment, deleteComment,
    toggleLike, checkLiked, toggleSolved, deletePost,
  } = useCommunity()

  const [liked, setLiked] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const commentInputRef = useRef(null)

  useEffect(() => {
    fetchPost(postId)
    fetchComments(postId)
  }, [postId, fetchPost, fetchComments])

  useEffect(() => {
    if (isAuthenticated && postId) {
      checkLiked(postId).then(setLiked)
    }
  }, [isAuthenticated, postId, checkLiked])

  const handleLike = async () => {
    requireAuth(async () => {
      const result = await toggleLike(postId)
      if (result !== null) setLiked(result)
    })
  }

  const handleComment = async (e) => {
    e.preventDefault()
    if (!commentText.trim() || submitting) return
    setSubmitting(true)
    await createComment(postId, commentText.trim())
    setCommentText('')
    setSubmitting(false)
  }

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      await deleteComment(commentId)
    }
  }

  const handleDeletePost = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      const ok = await deletePost(postId)
      if (ok) navigate('/community')
    }
  }

  const handleToggleSolved = async () => {
    await toggleSolved(postId, !post.is_solved)
  }

  const isAuthor = user && post?.author_id === user.id

  if (loading) {
    return (
      <div className="community-page">
        <section className="page-header">
          <div className="container">
            <div className="page-header-content">
              <button className="back-btn" onClick={() => navigate('/community')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                목록으로
              </button>
            </div>
          </div>
        </section>
        <div className="community-loading" style={{ paddingTop: 80 }}>
          <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(48,105,152,0.2)', borderTopColor: '#306998' }} />
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="community-page">
        <section className="page-header">
          <div className="container">
            <div className="page-header-content">
              <button className="back-btn" onClick={() => navigate('/community')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                목록으로
              </button>
            </div>
          </div>
        </section>
        <div className="community-error" style={{ paddingTop: 80 }}>
          <i className="fa-solid fa-triangle-exclamation" /> {error || '게시글을 찾을 수 없습니다.'}
        </div>
      </div>
    )
  }

  return (
    <div className="community-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <button className="back-btn" onClick={() => navigate('/community')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              목록으로
            </button>
            <div className="page-header-title-row">
              <div>
                <h1 style={{ fontSize: 22 }}>{post.title}</h1>
                <p>{CATEGORY_LABELS[post.category]} · {timeAgo(post.created_at)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-detail">
        <div className="container">
          <div className="community-detail-inner">
            {/* Post Content */}
            <div className="community-detail-card">
              <div className="community-detail-meta">
                <div className="community-detail-author">
                  {post.author_avatar ? (
                    <img src={post.author_avatar} alt="" className="community-detail-avatar" />
                  ) : (
                    <div className="community-detail-avatar-placeholder">
                      {post.author_name?.charAt(0)?.toUpperCase()}
                    </div>
                  )}
                  <div className="community-detail-author-info">
                    <span className="community-detail-author-name">{post.author_name}</span>
                    <span className="community-detail-date">{formatDate(post.created_at)}</span>
                  </div>
                </div>
                <span className={`community-card-badge community-badge-${post.category}`}>
                  {CATEGORY_LABELS[post.category]}
                </span>
                {post.is_solved && <span className="community-card-solved"><i className="fa-solid fa-check" /> 해결됨</span>}
              </div>

              {post.tags?.length > 0 && (
                <div className="community-detail-tags">
                  {post.tags.map(t => (
                    <Link key={t} to={`/community?tag=${encodeURIComponent(t)}`} className="community-tag">#{t}</Link>
                  ))}
                </div>
              )}

              <div className="community-detail-content">
                {renderContent(post.content)}
              </div>

              {/* Action Bar */}
              <div className="community-action-bar">
                <button className={`community-action-btn${liked ? ' liked' : ''}`} onClick={handleLike}>
                  <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`} /> {post.like_count || 0}
                </button>
                <span className="community-action-btn" style={{ cursor: 'default' }}>
                  <i className="fa-solid fa-eye" /> {post.view_count || 0}
                </span>

                {isAuthor && post.category === 'qna' && (
                  <button className={`community-action-btn${post.is_solved ? ' solved' : ''}`} onClick={handleToggleSolved}>
                    <i className="fa-solid fa-check-circle" /> {post.is_solved ? '해결됨' : '해결로 표시'}
                  </button>
                )}

                <span className="community-action-spacer" />

                {isAuthor && (
                  <>
                    <button className="community-action-btn" onClick={() => navigate(`/community/write?edit=${post.id}`)}>
                      <i className="fa-solid fa-pen-to-square" /> 수정
                    </button>
                    <button className="community-action-btn danger" onClick={handleDeletePost}>
                      <i className="fa-solid fa-trash" /> 삭제
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Comments */}
            <div className="community-comments-section">
              <h3 className="community-comments-title">
                <i className="fa-solid fa-comments" style={{ marginRight: 8, color: 'var(--primary)' }} />
                댓글 {comments.length > 0 && `(${comments.length})`}
              </h3>

              {comments.map(comment => (
                <div key={comment.id} className="community-comment">
                  <div className="community-comment-header">
                    {comment.author_avatar ? (
                      <img src={comment.author_avatar} alt="" className="community-comment-avatar" />
                    ) : (
                      <div className="community-comment-avatar-placeholder">
                        {comment.author_name?.charAt(0)?.toUpperCase()}
                      </div>
                    )}
                    <span className="community-comment-name">{comment.author_name}</span>
                    <span className="community-comment-date">{timeAgo(comment.created_at)}</span>
                    {user && comment.author_id === user.id && (
                      <button className="community-comment-delete" onClick={() => handleDeleteComment(comment.id)}>
                        <i className="fa-solid fa-trash" /> 삭제
                      </button>
                    )}
                  </div>
                  <div className="community-comment-content">{comment.content}</div>
                </div>
              ))}

              <form className="community-comment-form" onSubmit={(e) => {
                e.preventDefault()
                requireAuth(() => handleComment(e))
              }}>
                <textarea
                  ref={commentInputRef}
                  className="community-comment-input"
                  placeholder={isAuthenticated ? '댓글을 작성하세요...' : '로그인 후 댓글을 작성할 수 있습니다.'}
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  onFocus={() => { if (!isAuthenticated) requireAuth(() => {}) }}
                  rows={2}
                />
                <button
                  type="submit"
                  className="community-comment-submit"
                  disabled={!commentText.trim() || submitting}
                >
                  {submitting ? '등록 중...' : '댓글 등록'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
