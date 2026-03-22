import { useRef, useEffect, useCallback } from 'react'

const CERT_CONFIG = {
  bronze: {
    label: '입문자 수료증',
    labelEn: 'Bronze',
    emoji: '\ud83e\udd49',
    borderColor: '#CD7F32',
    bgGradient: ['#FFF8F0', '#F5E6D3'],
    ribbonColor: '#CD7F32'
  },
  silver: {
    label: '중급자 수료증',
    labelEn: 'Silver',
    emoji: '\ud83e\udd48',
    borderColor: '#C0C0C0',
    bgGradient: ['#F8F8F8', '#E8E8E8'],
    ribbonColor: '#A0A0A0'
  },
  gold: {
    label: '고급자 수료증',
    labelEn: 'Gold',
    emoji: '\ud83e\udd47',
    borderColor: '#FFD700',
    bgGradient: ['#FFFDF0', '#FFF3C4'],
    ribbonColor: '#DAA520'
  },
  master: {
    label: '마스터 수료증',
    labelEn: 'Master',
    emoji: '\ud83d\udc51',
    borderColor: '#306998',
    bgGradient: ['#F0F6FF', '#D6E8FF'],
    ribbonColor: '#306998'
  }
}

function generateCertificate(canvas, { userName, certificateType, issueDate, stats }) {
  const ctx = canvas.getContext('2d')
  const W = 800
  const H = 566
  canvas.width = W
  canvas.height = H

  const config = CERT_CONFIG[certificateType]
  if (!config) return

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H)
  bgGrad.addColorStop(0, config.bgGradient[0])
  bgGrad.addColorStop(1, config.bgGradient[1])
  ctx.fillStyle = bgGrad
  ctx.fillRect(0, 0, W, H)

  // Outer border
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 6
  ctx.strokeRect(12, 12, W - 24, H - 24)

  // Inner border (double line effect)
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 1.5
  ctx.strokeRect(22, 22, W - 44, H - 44)

  // Decorative corner elements
  const cornerSize = 30
  const corners = [
    [28, 28], [W - 28, 28], [28, H - 28], [W - 28, H - 28]
  ]
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 2
  corners.forEach(([cx, cy]) => {
    ctx.beginPath()
    ctx.arc(cx, cy, cornerSize / 3, 0, Math.PI * 2)
    ctx.stroke()
  })

  // Top decorative line
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(100, 68)
  ctx.lineTo(W - 100, 68)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(120, 74)
  ctx.lineTo(W - 120, 74)
  ctx.stroke()

  // "CERTIFICATE" title
  ctx.fillStyle = '#333333'
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('CERTIFICATE', W / 2, 110)

  // "OF COMPLETION" subtitle
  ctx.fillStyle = '#666666'
  ctx.font = '18px "Segoe UI", Arial, sans-serif'
  ctx.fillText('OF COMPLETION', W / 2, 136)

  // PyMaster logo
  ctx.fillStyle = '#306998'
  ctx.font = 'bold 22px "Segoe UI", Arial, sans-serif'
  ctx.fillText('\u2500\u2500\u2500  PyMaster  \u2500\u2500\u2500', W / 2, 174)

  // "This certifies that"
  ctx.fillStyle = '#888888'
  ctx.font = '15px "Segoe UI", Arial, sans-serif'
  ctx.fillText('This certifies that', W / 2, 216)

  // User name
  ctx.fillStyle = '#1a1a1a'
  ctx.font = 'bold 32px "Segoe UI", Arial, sans-serif'
  ctx.fillText(userName || 'Student', W / 2, 260)

  // Underline under name
  const nameWidth = ctx.measureText(userName || 'Student').width
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(W / 2 - nameWidth / 2 - 20, 268)
  ctx.lineTo(W / 2 + nameWidth / 2 + 20, 268)
  ctx.stroke()

  // "has successfully completed"
  ctx.fillStyle = '#888888'
  ctx.font = '15px "Segoe UI", Arial, sans-serif'
  ctx.fillText('has successfully completed', W / 2, 300)

  // Certificate level
  ctx.fillStyle = config.borderColor
  ctx.font = 'bold 24px "Segoe UI", Arial, sans-serif'
  ctx.fillText(`${config.emoji} ${config.label}`, W / 2, 338)

  // Course name
  ctx.fillStyle = '#555555'
  ctx.font = '14px "Segoe UI", Arial, sans-serif'
  ctx.fillText(`${config.labelEn} Level — Python Programming Course`, W / 2, 366)

  // Stats line
  if (stats) {
    ctx.fillStyle = '#666666'
    ctx.font = '14px "Segoe UI", Arial, sans-serif'
    const statsText = `Lessons: ${stats.completedLessons}/${stats.totalLessons}  |  Quiz Avg: ${stats.quizAvg}\uc810  |  Progress: ${stats.progress}%`
    ctx.fillText(statsText, W / 2, 400)
  }

  // Issue date
  ctx.fillStyle = '#888888'
  ctx.font = '14px "Segoe UI", Arial, sans-serif'
  ctx.fillText(`Issued: ${issueDate}`, W / 2, 434)

  // Bottom decorative line
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(120, H - 74)
  ctx.lineTo(W - 120, H - 74)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(100, H - 68)
  ctx.lineTo(W - 100, H - 68)
  ctx.stroke()

  // Seal / stamp area
  ctx.beginPath()
  ctx.arc(W / 2, H - 44, 16, 0, Math.PI * 2)
  ctx.fillStyle = config.borderColor
  ctx.globalAlpha = 0.2
  ctx.fill()
  ctx.globalAlpha = 1.0
  ctx.strokeStyle = config.borderColor
  ctx.lineWidth = 1.5
  ctx.stroke()

  // Python logo colors accent at bottom
  ctx.fillStyle = '#306998'
  ctx.fillRect(W / 2 - 40, H - 28, 35, 4)
  ctx.fillStyle = '#FFD43B'
  ctx.fillRect(W / 2 + 5, H - 28, 35, 4)
}

export default function Certificate({ userName, certificateType, issueDate, stats }) {
  const canvasRef = useRef(null)

  const draw = useCallback(() => {
    if (!canvasRef.current) return
    generateCertificate(canvasRef.current, { userName, certificateType, issueDate, stats })
  }, [userName, certificateType, issueDate, stats])

  useEffect(() => {
    draw()
  }, [draw])

  const handleDownload = () => {
    if (!canvasRef.current) return
    const link = document.createElement('a')
    link.download = `PyMaster_${certificateType}_certificate.png`
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="cert-preview">
      <canvas
        ref={canvasRef}
        width={800}
        height={566}
        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
      />
      <button className="cert-download-btn" onClick={handleDownload}>
        <i className="fa-solid fa-download" /> PNG 다운로드
      </button>
    </div>
  )
}

export { CERT_CONFIG }
