import { useState, useRef, useMemo } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import TurtleCanvas from './TurtleCanvas'

export default function CodeEditor({ initialCode = '', expectedOutput = '', lessonId = '' }) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [inputValues, setInputValues] = useState({})
  const [showInputPanel, setShowInputPanel] = useState(false)
  const textareaRef = useRef(null)
  const { incrementCodeRuns } = useProgress()

  // Detect input() calls in code
  const inputPrompts = useMemo(() => {
    const prompts = []
    const lines = code.split('\n')
    let idx = 0
    for (const line of lines) {
      const matches = [...line.matchAll(/input\s*\(\s*(?:["']([^"']*)["']|([^)]*))\s*\)/g)]
      for (const m of matches) {
        const prompt = m[1] || m[2] || `입력 ${idx + 1}`
        prompts.push({ index: idx, prompt: prompt.trim() || `입력 ${idx + 1}`, line: line.trim() })
        idx++
      }
    }
    return prompts
  }, [code])

  // Check if code uses turtle
  const isTurtleCode = useMemo(() => {
    return /import\s+turtle|from\s+turtle\s+import|turtle\.Turtle/.test(code)
  }, [code])

  const simulatePythonExecution = (code, inputs = {}) => {
    let result = []
    const lines = code.split('\n')
    const variables = {}
    let inputIdx = 0

    // Replace input() calls with provided values
    const resolveInput = (expr) => {
      return expr.replace(/input\s*\(\s*(?:["'][^"']*["']|[^)]*)\s*\)/g, () => {
        const val = inputs[inputIdx] ?? ''
        inputIdx++
        return `"${val}"`
      })
    }

    try {
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim()
        if (!line || line.startsWith('#')) continue
        if (line.startsWith('import ') || line.startsWith('from ')) continue

        // Resolve any input() in the line
        if (line.includes('input(')) {
          line = resolveInput(line)
        }

        // Handle print statements
        const printMatch = line.match(/^print\s*\((.+)\)$/)
        if (printMatch) {
          let content = printMatch[1].trim()

          // f-string support
          if (content.startsWith('f"') || content.startsWith("f'")) {
            const quote = content[1]
            const str = content.slice(2, -1)
            const resolved = str.replace(/\{([^}]+)\}/g, (_, expr) => {
              expr = expr.trim()
              if (expr in variables) return variables[expr]
              try { return eval(expr) } catch { return `{${expr}}` }
            })
            result.push(resolved)
            continue
          }

          // String literals
          if ((content.startsWith('"') && content.endsWith('"')) ||
              (content.startsWith("'") && content.endsWith("'"))) {
            result.push(content.slice(1, -1))
            continue
          }

          // Multiple arguments
          if (content.includes(',')) {
            const args = content.split(',').map(a => {
              a = a.trim()
              if ((a.startsWith('"') && a.endsWith('"')) || (a.startsWith("'") && a.endsWith("'")))
                return a.slice(1, -1)
              if (a in variables) return String(variables[a])
              try { return String(eval(a)) } catch { return a }
            })
            result.push(args.join(' '))
            continue
          }

          // Variable or expression
          if (content in variables) {
            result.push(String(variables[content]))
            continue
          }
          try {
            result.push(String(eval(content)))
          } catch {
            result.push(content)
          }
          continue
        }

        // Variable assignment
        const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/)
        if (assignMatch) {
          const [, name, value] = assignMatch
          let val = value.trim()

          // Handle int(), float() conversion
          const intMatch = val.match(/^int\s*\((.+)\)$/)
          const floatMatch = val.match(/^float\s*\((.+)\)$/)
          if (intMatch) {
            const inner = intMatch[1].trim()
            if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
              variables[name] = parseInt(inner.slice(1, -1)) || 0
            } else if (inner in variables) {
              variables[name] = parseInt(variables[inner]) || 0
            } else {
              try { variables[name] = parseInt(eval(inner)) || 0 } catch { variables[name] = 0 }
            }
            continue
          }
          if (floatMatch) {
            const inner = floatMatch[1].trim()
            if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
              variables[name] = parseFloat(inner.slice(1, -1)) || 0
            } else if (inner in variables) {
              variables[name] = parseFloat(variables[inner]) || 0
            } else {
              try { variables[name] = parseFloat(eval(inner)) || 0 } catch { variables[name] = 0 }
            }
            continue
          }

          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            variables[name] = val.slice(1, -1)
          } else if (val.startsWith('[') && val.endsWith(']')) {
            try { variables[name] = JSON.parse(val) } catch { variables[name] = val }
          } else {
            // Replace variable names in expression
            let expr = val
            for (const [k, v] of Object.entries(variables)) {
              expr = expr.replace(new RegExp(`\\b${k}\\b`, 'g'), typeof v === 'string' ? `"${v}"` : v)
            }
            try { variables[name] = eval(expr) } catch { variables[name] = val }
          }
          continue
        }

        // For loop (simple)
        const forMatch = line.match(/^for\s+(\w+)\s+in\s+range\((\d+)(?:,\s*(\d+))?\)\s*:/)
        if (forMatch) {
          const [, varName, startOrEnd, end] = forMatch
          const start = end ? parseInt(startOrEnd) : 0
          const limit = end ? parseInt(end) : parseInt(startOrEnd)
          const loopBodyIdx = lines.indexOf(lines[i])
          const bodyLines = []
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].startsWith('    ') || lines[j].startsWith('\t')) {
              bodyLines.push(lines[j].trim())
            } else break
          }
          for (let k = start; k < Math.min(limit, 100); k++) {
            variables[varName] = k
            for (const bLine of bodyLines) {
              const bPrint = bLine.match(/^print\s*\((.+)\)$/)
              if (bPrint) {
                let c = bPrint[1].trim()
                if (c.startsWith('f"') || c.startsWith("f'")) {
                  const str = c.slice(2, -1)
                  result.push(str.replace(/\{([^}]+)\}/g, (_, e) => {
                    e = e.trim()
                    if (e in variables) return variables[e]
                    try { return eval(e) } catch { return `{${e}}` }
                  }))
                } else if (c in variables) {
                  result.push(String(variables[c]))
                } else {
                  let expr = c
                  for (const [k2, v2] of Object.entries(variables)) {
                    expr = expr.replace(new RegExp(`\\b${k2}\\b`, 'g'), typeof v2 === 'string' ? `"${v2}"` : v2)
                  }
                  try { result.push(String(eval(expr))) } catch { result.push(c) }
                }
              }
            }
          }
        }
      }

      return result.length > 0 ? result.join('\n') : '(출력 없음)'
    } catch (e) {
      return `Error: ${e.message}`
    }
  }

  const handleRun = () => {
    // If code has input() calls and user hasn't provided values yet
    if (inputPrompts.length > 0 && !showInputPanel) {
      setShowInputPanel(true)
      // Pre-fill empty values
      const initial = {}
      inputPrompts.forEach((p, i) => {
        if (!(i in inputValues)) initial[i] = ''
      })
      setInputValues(prev => ({ ...initial, ...prev }))
      return
    }

    setIsRunning(true)
    setOutput('')
    setShowInputPanel(false)

    setTimeout(() => {
      const result = simulatePythonExecution(code, inputValues)
      setOutput(result)
      setIsRunning(false)
      incrementCodeRuns()
    }, 500)
  }

  const handleRunWithInputs = () => {
    setIsRunning(true)
    setOutput('')
    setShowInputPanel(false)

    setTimeout(() => {
      const result = simulatePythonExecution(code, inputValues)
      setOutput(result)
      setIsRunning(false)
      incrementCodeRuns()
    }, 500)
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput('')
    setInputValues({})
    setShowInputPanel(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      const newCode = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newCode)
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4
      }, 0)
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleRun()
    }
  }

  const lineCount = code.split('\n').length

  return (
    <div className="code-editor">
      <div className="editor-toolbar">
        <div className="editor-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          <span>Python Editor</span>
          {inputPrompts.length > 0 && (
            <span className="editor-badge">input()</span>
          )}
          {isTurtleCode && (
            <span className="editor-badge turtle-badge">Turtle</span>
          )}
        </div>
        <div className="editor-actions">
          <button className="editor-btn hint-btn" onClick={() => setShowHint(!showHint)} title="힌트">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </button>
          <button className="editor-btn reset-btn" onClick={handleReset} title="초기화">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
            </svg>
          </button>
          <button className="editor-btn run-btn" onClick={handleRun} disabled={isRunning} title="실행 (Ctrl+Enter)">
            {isRunning ? (
              <div className="loading-spinner-small" />
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
            <span>{isRunning ? '실행 중...' : '실행'}</span>
          </button>
        </div>
      </div>

      <div className="editor-body">
        <div className="line-numbers">
          {Array.from({ length: lineCount }, (_, i) => (
            <span key={i + 1}>{i + 1}</span>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          placeholder="# 파이썬 코드를 입력하세요..."
        />
      </div>

      {/* Input Panel */}
      {showInputPanel && inputPrompts.length > 0 && (
        <div className="editor-input-panel">
          <div className="input-panel-header">
            <i className="fa-solid fa-keyboard" />
            <span>입력값을 입력하세요</span>
          </div>
          <div className="input-panel-body">
            {inputPrompts.map((p, i) => (
              <div key={i} className="input-field">
                <label>{p.prompt}</label>
                <input
                  type="text"
                  value={inputValues[i] || ''}
                  onChange={(e) => setInputValues(prev => ({ ...prev, [i]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleRunWithInputs()
                  }}
                  placeholder={`값을 입력하세요...`}
                  autoFocus={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="input-panel-actions">
            <button className="editor-btn" onClick={() => setShowInputPanel(false)}>취소</button>
            <button className="editor-btn run-btn" onClick={handleRunWithInputs}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>실행</span>
            </button>
          </div>
        </div>
      )}

      {showHint && expectedOutput && (
        <div className="editor-hint">
          <strong>예상 출력:</strong> <code>{expectedOutput}</code>
        </div>
      )}

      {output && (
        <div className="editor-output">
          <div className="output-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>출력 결과</span>
            {expectedOutput && output.trim() === expectedOutput.trim() && (
              <span className="output-correct">정답!</span>
            )}
          </div>
          <pre className="output-content">{output}</pre>
        </div>
      )}

      {/* Turtle SVG Canvas */}
      {isTurtleCode && <TurtleCanvas code={code} />}
    </div>
  )
}
