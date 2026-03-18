import { useBadge } from '../contexts/BadgeContext'
import { badges } from '../data/badges'
import BadgeCard from '../components/BadgeCard'

export default function BadgeCollection() {
  const { earnedBadges } = useBadge()

  const tiers = ['platinum', 'gold', 'silver', 'bronze']
  const tierNames = {
    platinum: { icon: 'fa-solid fa-gem', label: '플래티넘', color: 'var(--primary-light)' },
    gold: { icon: 'fa-solid fa-award', label: '골드', color: 'var(--tier-gold)' },
    silver: { icon: 'fa-solid fa-award', label: '실버', color: 'var(--tier-silver)' },
    bronze: { icon: 'fa-solid fa-award', label: '브론즈', color: 'var(--tier-bronze)' }
  }

  const earned = badges.filter(b => earnedBadges.includes(b.id))
  const locked = badges.filter(b => !earnedBadges.includes(b.id))

  return (
    <div className="badge-page">
      <section className="page-header badge-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-icon"><i className="fa-solid fa-trophy" /></span>
            <h1>도장깨기</h1>
            <p>학습 성과를 배지로 수집하세요. 모든 배지를 모아 파이썬 마스터가 되어보세요!</p>
            <div className="badge-overview-stats">
              <div className="badge-stat">
                <span className="badge-stat-num">{earned.length}</span>
                <span className="badge-stat-label">획득</span>
              </div>
              <div className="badge-stat">
                <span className="badge-stat-num">{badges.length}</span>
                <span className="badge-stat-label">전체</span>
              </div>
              <div className="badge-stat">
                <span className="badge-stat-num">{Math.round((earned.length / badges.length) * 100)}%</span>
                <span className="badge-stat-label">달성률</span>
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
                획득한 배지 ({earned.length})
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
                  {tierInfo.label} 등급 ({tierBadges.length}개 남음)
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
