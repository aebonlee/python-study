import { useState, useEffect, useCallback } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useCommunity } from '../../hooks/useCommunity'

const POSTS_PER_PAGE = 12

function timeAgo(dateStr, lang) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return lang === 'en' ? 'Just now' : '방금 전'
  if (m < 60) return lang === 'en' ? `${m}m ago` : `${m}분 전`
  const h = Math.floor(m / 60)
  if (h < 24) return lang === 'en' ? `${h}h ago` : `${h}시간 전`
  const d = Math.floor(h / 24)
  if (d < 30) return lang === 'en' ? `${d}d ago` : `${d}일 전`
  const mon = Math.floor(d / 30)
  if (mon < 12) return lang === 'en' ? `${mon}mo ago` : `${mon}개월 전`
  return lang === 'en' ? `${Math.floor(mon / 12)}y ago` : `${Math.floor(mon / 12)}년 전`
}

function stripCodeBlocks(text, lang) {
  const codeLabel = lang === 'en' ? '[code]' : '[코드]'
  return text.replace(/```[\s\S]*?```/g, codeLabel).replace(/\n+/g, ' ').trim()
}

export default function Community() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { isAuthenticated, requireAuth } = useAuth()
  const { t, lang } = useLanguage()
  const { posts, totalCount, loading, error, fetchPosts } = useCommunity()

  const CATEGORIES = [
    { key: 'all', label: t('community.all') },
    { key: 'qna', label: t('community.qna') },
    { key: 'free', label: t('community.free') },
    { key: 'code', label: t('community.code') },
    { key: 'review', label: t('community.review') },
  ]

  const CATEGORY_LABELS = {
    qna: t('community.qnaShort'),
    free: t('community.freeShort'),
    code: t('community.codeShort'),
    review: t('community.reviewShort'),
  }

  const category = searchParams.get('category') || 'all'
  const search = searchParams.get('search') || ''
  const tag = searchParams.get('tag') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)
  const sortBy = searchParams.get('sort') || 'latest'

  const [searchInput, setSearchInput] = useState(search)

  useEffect(() => {
    fetchPosts({ category: category === 'all' ? null : category, search, tag, page, sortBy })
  }, [category, search, tag, page, sortBy, fetchPosts])

  const updateParams = useCallback((updates) => {
    const params = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([k, v]) => {
      if (v) params.set(k, v as string)
      else params.delete(k)
    })
    if (updates.category || updates.search || updates.tag) params.delete('page')
    setSearchParams(params)
  }, [searchParams, setSearchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    updateParams({ search: searchInput || null })
  }

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  const renderPagination = () => {
    if (totalPages <= 1) return null
    const pages = []
    const start = Math.max(1, page - 2)
    const end = Math.min(totalPages, page + 2)

    pages.push(
      <button key="prev" className="community-page-btn" disabled={page <= 1}
        onClick={() => updateParams({ page: String(page - 1) })}>
        <i className="fa-solid fa-chevron-left" style={{ fontSize: 12 }} />
      </button>
    )

    if (start > 1) {
      pages.push(<button key={1} className="community-page-btn" onClick={() => updateParams({ page: '1' })}>1</button>)
      if (start > 2) pages.push(<span key="d1" className="community-page-dots">...</span>)
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button key={i} className={`community-page-btn${i === page ? ' active' : ''}`}
          onClick={() => updateParams({ page: String(i) })}>{i}</button>
      )
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push(<span key="d2" className="community-page-dots">...</span>)
      pages.push(<button key={totalPages} className="community-page-btn" onClick={() => updateParams({ page: String(totalPages) })}>{totalPages}</button>)
    }

    pages.push(
      <button key="next" className="community-page-btn" disabled={page >= totalPages}
        onClick={() => updateParams({ page: String(page + 1) })}>
        <i className="fa-solid fa-chevron-right" style={{ fontSize: 12 }} />
      </button>
    )

    return <div className="community-pagination">{pages}</div>
  }

  return (
    <div className="community-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-solid fa-users" /></span>
              <div>
                <h1>{t('community.title')}</h1>
                <p>{t('community.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="container">
          {/* Category Tabs */}
          <div className="community-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`community-tab${category === cat.key ? ' active' : ''}`}
                onClick={() => updateParams({ category: cat.key === 'all' ? null : cat.key })}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="community-toolbar">
            <form className="community-search" onSubmit={handleSearch}>
              <i className="fa-solid fa-magnifying-glass" />
              <input
                type="text"
                placeholder={t('community.searchPlaceholder')}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
            </form>
            <button
              className="community-write-btn"
              onClick={() => requireAuth(() => navigate('/community/write'))}
            >
              <i className="fa-solid fa-pen" /> {t('community.write')}
            </button>
          </div>

          {/* Active Tag */}
          {tag && (
            <div className="community-active-tag">
              <i className="fa-solid fa-tag" /> {tag}
              <button onClick={() => updateParams({ tag: null })}>✕</button>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="community-loading">
              <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(48,105,152,0.2)', borderTopColor: '#306998' }} />
            </div>
          )}

          {/* Error */}
          {error && <div className="community-error"><i className="fa-solid fa-triangle-exclamation" /> {error}</div>}

          {/* Posts */}
          {!loading && !error && (
            <>
              {posts.length === 0 ? (
                <div className="community-empty">
                  <div className="community-empty-icon"><i className="fa-solid fa-comments" /></div>
                  <h3>{t('community.noPosts')}</h3>
                  <p>{search ? t('community.noSearchResults') : t('community.firstPostCTA')}</p>
                </div>
              ) : (
                <div className="community-posts-grid">
                  {posts.map(post => {
                    const preview = stripCodeBlocks(post.content, lang).slice(0, 120)
                    return (
                      <Link key={post.id} to={`/community/${post.id}`} className="community-card">
                        <div className="community-card-header">
                          <span className={`community-card-badge community-badge-${post.category}`}>
                            {CATEGORY_LABELS[post.category]}
                          </span>
                          {post.is_solved && <span className="community-card-solved"><i className="fa-solid fa-check" /> {t('community.solved')}</span>}
                        </div>
                        <div className="community-card-title">{post.title}</div>
                        {preview && <div className="community-card-preview">{preview}</div>}
                        {post.tags?.length > 0 && (
                          <div className="community-card-tags">
                            {post.tags.map(tg => (
                              <span key={tg} className="community-tag"
                                onClick={e => { e.preventDefault(); updateParams({ tag: tg }) }}>
                                #{tg}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="community-card-footer">
                          <div className="community-card-author">
                            {post.author_avatar ? (
                              <img src={post.author_avatar} alt="" className="community-card-avatar" />
                            ) : (
                              <div className="community-card-avatar-placeholder">
                                {post.author_name?.charAt(0)?.toUpperCase()}
                              </div>
                            )}
                            <span className="community-card-author-name">{post.author_name}</span>
                          </div>
                          <div className="community-card-meta">
                            <span>{timeAgo(post.created_at, lang)}</span>
                            <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
                            <span><i className="fa-solid fa-heart" /> {post.like_count || 0}</span>
                            <span><i className="fa-solid fa-comment" /> {post.comment_count || 0}</span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}

              {renderPagination()}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
