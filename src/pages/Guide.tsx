import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Guide() {
  const { t } = useLanguage()

  const sections = [
    { icon: 'fa-solid fa-right-to-bracket', title: t('guide.section1Title'), content: t('guide.section1Content'), link: { to: '/login', label: t('guide.section1Link') } },
    { icon: 'fa-solid fa-book-open', title: t('guide.section2Title'), content: t('guide.section2Content'), link: { to: '/python-learning', label: t('guide.section2Link') } },
    { icon: 'fa-solid fa-layer-group', title: t('guide.section3Title'), content: t('guide.section3Content'),
      links: [
        { to: '/basics', label: t('nav.basics') },
        { to: '/intermediate', label: t('nav.intermediate') },
        { to: '/advanced', label: t('nav.advanced') },
        { to: '/applied', label: t('nav.applied') },
      ]
    },
    { icon: 'fa-solid fa-puzzle-piece', title: t('guide.section4Title'), content: t('guide.section4Content'), link: { to: '/intermediate', label: t('guide.section4Link') } },
    { icon: 'fa-solid fa-terminal', title: t('guide.section5Title'), content: t('guide.section5Content'), link: { to: '/python-practice', label: t('guide.section5Link') } },
    { icon: 'fa-solid fa-clipboard-question', title: t('guide.section6Title'), content: t('guide.section6Content'), link: { to: '/quiz', label: t('guide.section6Link') } },
    { icon: 'fa-solid fa-medal', title: t('guide.section7Title'), content: t('guide.section7Content'), link: { to: '/badges', label: t('guide.section7Link') } },
    { icon: 'fa-solid fa-user-circle', title: t('guide.section8Title'), content: t('guide.section8Content'), link: { to: '/my', label: t('guide.section8Link') } },
    { icon: 'fa-solid fa-comments', title: t('guide.section9Title'), content: t('guide.section9Content'), link: { to: '/community', label: t('guide.section9Link') } },
    { icon: 'fa-solid fa-moon', title: t('guide.section10Title'), content: t('guide.section10Content'), link: null },
    { icon: 'fa-solid fa-chart-line', title: t('guide.section11Title'), content: t('guide.section11Content'), link: null },
    { icon: 'fa-solid fa-chalkboard-user', title: t('guide.section12Title'), content: t('guide.section12Content'), link: null },
  ]

  const faqs = [
    { q: t('guide.faq1Q'), a: t('guide.faq1A') },
    { q: t('guide.faq2Q'), a: t('guide.faq2A') },
    { q: t('guide.faq3Q'), a: t('guide.faq3A') },
    { q: t('guide.faq4Q'), a: t('guide.faq4A') },
  ]

  return (
    <div className="guide-page">
      <section className="guide-header">
        <div className="container">
          <h1 className="guide-title">
            <i className="fa-solid fa-book" /> {t('guide.title')}
          </h1>
          <p className="guide-subtitle">
            {t('guide.subtitle')}
          </p>
        </div>
      </section>

      <section className="guide-content">
        <div className="container">
          <div className="guide-grid">
            {sections.map((sec, i) => (
              <div key={i} className="guide-section-card">
                <div className="guide-card-icon">
                  <i className={sec.icon} />
                </div>
                <div className="guide-card-body">
                  <h3 className="guide-card-title">{sec.title}</h3>
                  <p className="guide-card-text">{sec.content}</p>
                  {sec.link && (
                    <Link to={sec.link.to} className="guide-card-link">
                      {sec.link.label} <i className="fa-solid fa-arrow-right" />
                    </Link>
                  )}
                  {sec.links && (
                    <div className="guide-card-links">
                      {sec.links.map((l, li) => (
                        <Link key={li} to={l.to} className="guide-card-link-chip">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="guide-faq">
            <h2 className="guide-faq-title">
              <i className="fa-solid fa-circle-question" /> {t('guide.faqTitle')}
            </h2>
            <div className="guide-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="guide-faq-item">
                  <div className="guide-faq-q">
                    <span className="guide-faq-badge">Q</span>
                    {faq.q}
                  </div>
                  <div className="guide-faq-a">
                    <span className="guide-faq-badge guide-faq-badge-a">A</span>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
