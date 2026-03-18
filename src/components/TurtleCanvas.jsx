import { useState, useMemo } from 'react'

/**
 * TurtleCanvas - SVG 기반 Turtle Graphics 렌더러
 * turtle 명령어를 파싱하고 SVG로 시각화합니다.
 */

function parseTurtleCommands(code) {
  const lines = code.split('\n')
  const commands = []

  // 변수 저장소
  const vars = {}
  let inFor = false
  let forVar = ''
  let forStart = 0
  let forEnd = 0
  let forBody = []
  let inDef = false
  let defName = ''
  let defParams = []
  let defBody = []
  const functions = {}

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trim()

    if (!line || line.startsWith('#') || line.startsWith('import ') || line.startsWith('from ')) continue

    // 함수 정의 시작
    const defMatch = line.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/)
    if (defMatch && !inFor) {
      inDef = true
      defName = defMatch[1]
      defParams = defMatch[2].split(',').map(p => p.trim()).filter(Boolean)
      defBody = []
      continue
    }

    if (inDef) {
      if (raw.startsWith('    ') || raw.startsWith('\t')) {
        defBody.push(line)
        continue
      } else {
        functions[defName] = { params: defParams, body: defBody }
        inDef = false
      }
    }

    // for loop
    const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\(([^)]+)\)\s*:/)
    if (forMatch) {
      inFor = true
      forVar = forMatch[1]
      const rangeArgs = forMatch[2].split(',').map(a => {
        const trimmed = a.trim()
        return trimmed in vars ? vars[trimmed] : parseInt(trimmed) || 0
      })
      forStart = rangeArgs.length > 1 ? rangeArgs[0] : 0
      forEnd = rangeArgs.length > 1 ? rangeArgs[1] : rangeArgs[0]
      forBody = []
      continue
    }

    if (inFor) {
      if (raw.startsWith('    ') || raw.startsWith('\t')) {
        forBody.push(line)
        continue
      } else {
        // Execute for loop
        const maxIter = Math.min(forEnd, forStart + 500)
        for (let k = forStart; k < maxIter; k++) {
          const localVars = { ...vars, [forVar]: k }
          for (const bLine of forBody) {
            const cmd = parseSingleCommand(bLine, localVars, functions)
            if (cmd) commands.push(...(Array.isArray(cmd) ? cmd : [cmd]))
          }
        }
        inFor = false
        // Also parse the current line
      }
    }

    if (!inFor && !inDef) {
      // Variable assignment
      const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/)
      if (assignMatch && !line.includes('turtle') && !line.includes('.Turtle')) {
        const name = assignMatch[1]
        let val = assignMatch[2].trim()
        // Check if it's a list
        if (val.startsWith('[')) {
          try {
            vars[name] = JSON.parse(val.replace(/'/g, '"'))
          } catch {
            vars[name] = val
          }
        } else if (val.startsWith('"') || val.startsWith("'")) {
          vars[name] = val.slice(1, -1)
        } else {
          const resolved = resolveExpr(val, vars)
          vars[name] = resolved
        }
        continue
      }

      // Function call (user-defined)
      const funcCallMatch = line.match(/^(\w+)\s*\(([^)]*)\)$/)
      if (funcCallMatch && functions[funcCallMatch[1]]) {
        const fn = functions[funcCallMatch[1]]
        const args = funcCallMatch[2].split(',').map(a => resolveExpr(a.trim(), vars))
        const localVars = { ...vars }
        fn.params.forEach((p, idx) => { localVars[p] = args[idx] ?? 0 })
        for (const bLine of fn.body) {
          const cmd = parseSingleCommand(bLine, localVars, functions)
          if (cmd) commands.push(...(Array.isArray(cmd) ? cmd : [cmd]))
        }
        continue
      }

      const cmd = parseSingleCommand(line, vars, functions)
      if (cmd) commands.push(...(Array.isArray(cmd) ? cmd : [cmd]))
    }
  }

  // Handle trailing for loop
  if (inFor) {
    const maxIter = Math.min(forEnd, forStart + 500)
    for (let k = forStart; k < maxIter; k++) {
      const localVars = { ...vars, [forVar]: k }
      for (const bLine of forBody) {
        const cmd = parseSingleCommand(bLine, localVars, functions)
        if (cmd) commands.push(...(Array.isArray(cmd) ? cmd : [cmd]))
      }
    }
  }

  if (inDef) {
    functions[defName] = { params: defParams, body: defBody }
  }

  return commands
}

function resolveExpr(expr, vars) {
  if (expr === undefined || expr === null) return 0
  expr = String(expr).trim()
  if (expr in vars) return vars[expr]
  // Simple math expressions
  let resolved = expr
  for (const [k, v] of Object.entries(vars)) {
    resolved = resolved.replace(new RegExp(`\\b${k}\\b`, 'g'), typeof v === 'number' ? v : `"${v}"`)
  }
  try {
    const result = Function('"use strict"; return (' + resolved + ')')()
    return typeof result === 'number' ? result : result
  } catch {
    return isNaN(Number(expr)) ? expr : Number(expr)
  }
}

function parseSingleCommand(line, vars, functions) {
  // Remove t. or turtle. prefix
  const cleaned = line.replace(/^(t|turtle)\s*\.\s*/, '').trim()

  // Skip non-turtle commands
  if (cleaned.startsWith('print') || cleaned.startsWith('screen') || cleaned.startsWith('wn')) return null

  const cmdMatch = cleaned.match(/^(\w+)\s*\(([^)]*)\)$/)
  if (!cmdMatch) return null

  const cmd = cmdMatch[1]
  const rawArgs = cmdMatch[2]
  const args = rawArgs ? rawArgs.split(',').map(a => {
    const trimmed = a.trim()
    if (trimmed.startsWith('"') || trimmed.startsWith("'")) return trimmed.slice(1, -1)
    return resolveExpr(trimmed, vars)
  }) : []

  // Map turtle commands
  switch (cmd) {
    case 'forward': case 'fd': return { type: 'forward', distance: Number(args[0]) || 0 }
    case 'backward': case 'bk': case 'back': return { type: 'forward', distance: -(Number(args[0]) || 0) }
    case 'left': case 'lt': return { type: 'left', angle: Number(args[0]) || 0 }
    case 'right': case 'rt': return { type: 'right', angle: Number(args[0]) || 0 }
    case 'penup': case 'pu': case 'up': return { type: 'penup' }
    case 'pendown': case 'pd': case 'down': return { type: 'pendown' }
    case 'goto': case 'setpos': case 'setposition':
      return { type: 'goto', x: Number(args[0]) || 0, y: Number(args[1]) || 0 }
    case 'setx': return { type: 'goto', x: Number(args[0]) || 0, y: null }
    case 'sety': return { type: 'goto', x: null, y: Number(args[0]) || 0 }
    case 'setheading': case 'seth': return { type: 'setheading', angle: Number(args[0]) || 0 }
    case 'home': return { type: 'home' }
    case 'circle':
      return { type: 'circle', radius: Number(args[0]) || 50, extent: args[1] !== undefined ? Number(args[1]) : 360, steps: args[2] !== undefined ? Number(args[2]) : null }
    case 'dot': return { type: 'dot', size: Number(args[0]) || 5 }
    case 'pensize': case 'width': return { type: 'pensize', width: Number(args[0]) || 1 }
    case 'pencolor': case 'color':
      if (cmd === 'color' && args.length >= 2) {
        return [
          { type: 'pencolor', color: String(args[0]) },
          { type: 'fillcolor', color: String(args[1]) }
        ]
      }
      return { type: 'pencolor', color: String(args[0] || 'black') }
    case 'fillcolor': return { type: 'fillcolor', color: String(args[0] || 'black') }
    case 'begin_fill': return { type: 'begin_fill' }
    case 'end_fill': return { type: 'end_fill' }
    case 'speed': return { type: 'speed', speed: Number(args[0]) || 0 }
    case 'hideturtle': case 'ht': return { type: 'hideturtle' }
    case 'showturtle': case 'st': return { type: 'showturtle' }
    default: return null
  }
}

function executeTurtleCommands(commands) {
  let x = 0, y = 0, angle = 0 // angle: 0 = right (east), turtle default heading
  let penDown = true
  let penColor = '#000000'
  let fillColor = '#000000'
  let penWidth = 2
  let filling = false
  let fillPath = []
  let showTurtle = true

  const paths = []
  const dots = []
  const fills = []

  const colorMap = {
    red: '#E74C3C', blue: '#3498DB', green: '#27AE60', yellow: '#F1C40F',
    orange: '#E67E22', purple: '#9B59B6', cyan: '#1ABC9C', magenta: '#E91E63',
    black: '#2C3E50', white: '#ECF0F1', gold: '#F39C12', pink: '#FF69B4',
    brown: '#8B4513', gray: '#95A5A6', grey: '#95A5A6', navy: '#2C3E50',
    lime: '#2ECC71', violet: '#8E44AD', indigo: '#3F51B5', turquoise: '#1ABC9C'
  }

  const resolveColor = (c) => {
    if (!c) return '#2C3E50'
    const lower = String(c).toLowerCase()
    return colorMap[lower] || (lower.startsWith('#') ? lower : `${c}`)
  }

  for (const cmd of commands) {
    switch (cmd.type) {
      case 'forward': {
        const rad = (angle * Math.PI) / 180
        const nx = x + cmd.distance * Math.cos(rad)
        const ny = y + cmd.distance * Math.sin(rad)
        if (penDown) {
          paths.push({ x1: x, y1: y, x2: nx, y2: ny, color: resolveColor(penColor), width: penWidth })
        }
        if (filling) fillPath.push({ x: nx, y: ny })
        x = nx
        y = ny
        break
      }
      case 'left': angle -= cmd.angle; break
      case 'right': angle += cmd.angle; break
      case 'penup': penDown = false; break
      case 'pendown': penDown = true; break
      case 'goto': {
        const nx = cmd.x !== null ? cmd.x : x
        const ny = cmd.y !== null ? -(cmd.y !== null ? cmd.y : y) : y
        const targetY = cmd.y !== null ? -cmd.y : y
        if (penDown) {
          paths.push({ x1: x, y1: y, x2: nx, y2: targetY, color: resolveColor(penColor), width: penWidth })
        }
        if (filling) fillPath.push({ x: nx, y: targetY })
        x = nx
        y = targetY
        break
      }
      case 'home': {
        if (penDown) {
          paths.push({ x1: x, y1: y, x2: 0, y2: 0, color: resolveColor(penColor), width: penWidth })
        }
        x = 0; y = 0; angle = 0
        break
      }
      case 'setheading': angle = -cmd.angle + 90; break
      case 'circle': {
        const r = cmd.radius
        const extent = cmd.extent || 360
        const steps = cmd.steps || Math.max(Math.abs(Math.round(extent / 5)), 12)
        const stepAngle = extent / steps
        const stepDist = 2 * Math.abs(r) * Math.sin((Math.PI * Math.abs(stepAngle)) / (2 * steps * (360 / extent)))
        const sideLen = 2 * Math.abs(r) * Math.sin(Math.PI / steps * (extent / 360))

        for (let i = 0; i < Math.abs(steps); i++) {
          const rad = (angle * Math.PI) / 180
          const dist = 2 * Math.abs(r) * Math.sin((Math.PI * Math.abs(extent / steps)) / 360)
          const nx = x + dist * Math.cos(rad)
          const ny = y + dist * Math.sin(rad)
          if (penDown) {
            paths.push({ x1: x, y1: y, x2: nx, y2: ny, color: resolveColor(penColor), width: penWidth })
          }
          if (filling) fillPath.push({ x: nx, y: ny })
          x = nx
          y = ny
          angle += (r > 0 ? -1 : 1) * (extent / steps) * -1
        }
        break
      }
      case 'dot':
        dots.push({ x, y, size: cmd.size, color: resolveColor(penColor) })
        break
      case 'pensize': penWidth = cmd.width; break
      case 'pencolor': penColor = cmd.color; break
      case 'fillcolor': fillColor = cmd.color; break
      case 'begin_fill':
        filling = true
        fillPath = [{ x, y }]
        break
      case 'end_fill':
        if (fillPath.length > 2) {
          fills.push({ points: [...fillPath], color: resolveColor(fillColor) })
        }
        filling = false
        fillPath = []
        break
      case 'hideturtle': showTurtle = false; break
      case 'showturtle': showTurtle = true; break
      case 'speed': break
    }
  }

  return { paths, dots, fills, turtle: { x, y, angle, show: showTurtle } }
}

export default function TurtleCanvas({ code }) {
  const [zoom, setZoom] = useState(1)

  const result = useMemo(() => {
    try {
      const commands = parseTurtleCommands(code)
      return executeTurtleCommands(commands)
    } catch {
      return { paths: [], dots: [], fills: [], turtle: { x: 0, y: 0, angle: 0, show: true } }
    }
  }, [code])

  const { paths, dots, fills, turtle } = result

  // Calculate bounds
  let minX = 0, maxX = 0, minY = 0, maxY = 0
  for (const p of paths) {
    minX = Math.min(minX, p.x1, p.x2)
    maxX = Math.max(maxX, p.x1, p.x2)
    minY = Math.min(minY, p.y1, p.y2)
    maxY = Math.max(maxY, p.y1, p.y2)
  }
  for (const d of dots) {
    minX = Math.min(minX, d.x - d.size)
    maxX = Math.max(maxX, d.x + d.size)
    minY = Math.min(minY, d.y - d.size)
    maxY = Math.max(maxY, d.y + d.size)
  }

  const padding = 40
  const width = Math.max(maxX - minX + padding * 2, 300)
  const height = Math.max(maxY - minY + padding * 2, 200)
  const cx = -minX + padding
  const cy = -minY + padding

  const hasPaths = paths.length > 0 || dots.length > 0 || fills.length > 0

  if (!hasPaths) return null

  return (
    <div className="turtle-canvas-wrapper">
      <div className="turtle-canvas-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        <span>Turtle Graphics 실행 결과</span>
        <div className="turtle-zoom">
          <button onClick={() => setZoom(z => Math.max(0.3, z - 0.2))} title="축소">-</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.min(3, z + 0.2))} title="확대">+</button>
          <button onClick={() => setZoom(1)} title="원래 크기">1:1</button>
        </div>
      </div>
      <div className="turtle-canvas-body" style={{ overflow: 'auto' }}>
        <svg
          width={width * zoom}
          height={height * zoom}
          viewBox={`0 0 ${width} ${height}`}
          style={{ background: '#FEFEFE', display: 'block', margin: '0 auto', borderRadius: 8 }}
        >
          {/* Grid */}
          <defs>
            <pattern id="turtleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width={width} height={height} fill="url(#turtleGrid)" />

          {/* Origin crosshair */}
          <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke="#ccc" strokeWidth="0.5" />
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} stroke="#ccc" strokeWidth="0.5" />

          {/* Fills */}
          {fills.map((f, i) => (
            <polygon
              key={`fill-${i}`}
              points={f.points.map(p => `${p.x + cx},${p.y + cy}`).join(' ')}
              fill={f.color}
              fillOpacity={0.6}
              stroke="none"
            />
          ))}

          {/* Paths */}
          {paths.map((p, i) => (
            <line
              key={`path-${i}`}
              x1={p.x1 + cx} y1={p.y1 + cy}
              x2={p.x2 + cx} y2={p.y2 + cy}
              stroke={p.color}
              strokeWidth={p.width}
              strokeLinecap="round"
            />
          ))}

          {/* Dots */}
          {dots.map((d, i) => (
            <circle
              key={`dot-${i}`}
              cx={d.x + cx} cy={d.y + cy}
              r={d.size / 2}
              fill={d.color}
            />
          ))}

          {/* Turtle arrow */}
          {turtle.show && (
            <g transform={`translate(${turtle.x + cx}, ${turtle.y + cy}) rotate(${turtle.angle})`}>
              <polygon
                points="12,0 -6,-6 -3,0 -6,6"
                fill="var(--primary, #306998)"
                stroke="var(--primary-dark, #1E4F72)"
                strokeWidth="1"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
