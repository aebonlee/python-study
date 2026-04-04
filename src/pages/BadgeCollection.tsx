import { useBadge } from '../contexts/BadgeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { badges } from '../data/badges'
import BadgeCard from '../components/BadgeCard'

export default function BadgeCollection() {
  const { earnedBadges } = useBadge()
  const { t, localizedField } = useLanguage()

  const tiers = ['platinum', 'gold', 'silver', 'bronze']
  const tierNames = {
    platinum: { icon: 'fa-solid fa-gem', label: t('badge.platinum'), color: 'var(--primary-light)' },
    gold: { icon: 'fa-solid fa-award', label: t('badge.gold'), color: 'var(--tier-gold)' },
    silver: { icon: 'fa-solid fa-award', label: t('badge.silver'), color: 'var(--tier-silver)' },
    bronze: { icon: 'fa-solid fa-award', label: t('badge.bronze'), color: 'var(--tier-bronze)' }
  }

  const earned = badges.filter(b => earnedBadges.includes(b.id))
  const locked = badges.filter(b => !earnedBadges.includes(b.id))

  return (
    <div className="badge-page">
      <section className="page-header badge-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-solid fa-trophy" /></span>
              <div>
                <h1>{t('badge.title')}</h1>
                <p>{t('badge.subtitle')}</p>
              </div>
            </div>
            <div className="badge-overview-stats">
              <div className="badge-stat">
                <span className="badge-stat-num">{earned.length}</span>
                <span className="badge-stat-label">{t('badge.earned')}</span>
              </div>
              <div className="badge-stat">
                <span className="badge-stat-num">{badges.length}</span>
                <span className="badge-stat-label">{t('badge.total')}</span>
              </div>
              <div className="badge-stat">
                <span className="badge-stat-num">{Math.round((earned.length / badges.length) * 100)}%</span>
                <span className="badge-stat-label">{t('badge.rate')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="badge-collection-section">
        <div className="container">
          {/* Earned Badges */}
          {earned.length > 0 && (
            <div className="badge-group">
              <h2 className="badge-group-title">
                <span className="badge-group-icon"><i className="fa-solid fa-wand-magic-sparkles" /></span>
                {t('badge.earnedBadges')} ({earned.length})
              </h2>
              <div className="badge-grid">
                {earned.map(badge => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </div>
          )}

          {/* Locked Badges by Tier */}
          {tiers.map(tier => {
            const tierBadges = locked.filter(b => b.tier === tier)
            if (tierBadges.length === 0) return null
            const tierInfo = tierNames[tier]
            return (
              <div key={tier} className="badge-group">
                <h2 className="badge-group-title">
                  <span className="badge-group-icon" style={{color: tierInfo.color}}>
                    <i className={tierInfo.icon} />
                  </span>
                  {tierInfo.label} {t('badge.tier')} ({tierBadges.length}{t('badge.remaining')})
                </h2>
                <div className="badge-grid">
                  {tierBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
