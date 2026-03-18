import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'public', 'og-image.png')

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#306998"/>
      <stop offset="50%" stop-color="#1E4F72"/>
      <stop offset="100%" stop-color="#0D2137"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFD43B"/>
      <stop offset="100%" stop-color="#FFE873"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Grid pattern -->
  <g opacity="0.05">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${height}" stroke="white" stroke-width="1"/>`).join('')}
    ${Array.from({length: 11}, (_, i) => `<line x1="0" y1="${i * 60}" x2="${width}" y2="${i * 60}" stroke="white" stroke-width="1"/>`).join('')}
  </g>

  <!-- Python logo circle -->
  <circle cx="600" cy="240" r="80" fill="none" stroke="url(#accent)" stroke-width="3" opacity="0.3"/>
  <circle cx="600" cy="240" r="60" fill="none" stroke="url(#accent)" stroke-width="2" opacity="0.2"/>

  <!-- Code decorations -->
  <text x="80" y="120" font-family="monospace" font-size="16" fill="white" opacity="0.15">def learn_python():</text>
  <text x="80" y="145" font-family="monospace" font-size="16" fill="white" opacity="0.1">    return "mastery"</text>
  <text x="900" y="520" font-family="monospace" font-size="16" fill="white" opacity="0.15">import numpy as np</text>
  <text x="900" y="545" font-family="monospace" font-size="16" fill="white" opacity="0.1">import pandas as pd</text>

  <!-- Accent line -->
  <rect x="520" y="200" width="160" height="4" rx="2" fill="url(#accent)"/>

  <!-- Title -->
  <text x="600" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white">
    <tspan fill="#FFD43B">Py</tspan><tspan>Master</tspan>
  </text>

  <!-- Subtitle -->
  <text x="600" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="white" opacity="0.85">
    파이썬 전문 학습 플랫폼
  </text>

  <!-- Features -->
  <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="white" opacity="0.6">
    기초 · 중급 · 고급 · NumPy · Pandas · 도장깨기
  </text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${height - 6}" width="${width}" height="6" fill="url(#accent)"/>
</svg>`

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath)
    console.log(`OG image generated: ${outputPath}`)
  } catch (err) {
    console.error('Failed to generate OG image:', err)
    process.exit(1)
  }
}

generate()
