import { useState, useRef, useMemo } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import { useCodeRunner } from '../hooks/useCodeRunner'

const SVG_MARKER = '__TURTLE_SVG__'

export default function CodeEditor({ initialCode = '', expectedOutput = '', lessonId = '' }) {
  const [code, setCode] = useState(initialCode)
  const [showHint, setShowHint] = useState(false)
  const [inputValues, setInputValues] = useState([])
  const [showInputPanel, setShowInputPanel] = useState(false)
  const textareaRef = useRef(null)
  const { incrementCodeRuns } = useProgress()
  const { status, output, errorMsg, runCode, resetOutput } = useCodeRunner()

  const isRunning = status === 'loading' || status === 'running'

  // Detect input(), textinput(), numinput() calls in code
  const inputPrompts = useMemo(() => {
    const prompts = []
    const lines = code.split('\n')
    let idx = 0
    for (const line of lines) {
      const matches = [...line.matchAll(/(?:text)?(?:num)?input\s*\(\s*(?:["']([^"']*)["']|([^)]*))\s*\)/g)]
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

  // Parse output for SVG content
  const hasSvg = output && output.includes(SVG_MARKER)
  const textOutput = hasSvg ? output.substring(0, output.indexOf(SVG_MARKER)).trim() : output
  const svgHtml = hasSvg ? output.substring(output.indexOf(SVG_MARKER) + SVG_MARKER.length).trim() : ''

  const handleRun = async () => {
    // If code has input() calls and user hasn't provided values yet
    if (inputPrompts.length > 0 && !showInputPanel) {
      setShowInputPanel(true)
      setInputValues(prev => {
        const arr = [...prev]
        while (arr.length < inputPrompts.length) arr.push('')
        return arr
      })
      return
    }

    setShowInputPanel(false)
    await runCode(code, inputValues)
    incrementCodeRuns()
  }

  const handleRunWithInputs = async () => {
    setShowInputPanel(false)
    await runCode(code, inputValues)
    incrementCodeRuns()
  }

  const handleReset = () => {
    setCode(initialCode)
    setInputValues([])
    setShowInputPanel(false)
    resetOutput()
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
  const hasOutput = status === 'done' || status === 'error' || output || errorMsg

  return (
    <div className="code-editor">
      <div className="editor-toolbar">
        <div className="editor-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          <span>Python Editor</span>
          {status === 'loading' && (
            <span className="editor-badge">Python 로딩 중...</span>
          )}
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
                  onChange={(e) => setInputValues(prev => {
                    const arr = [...prev]
                    arr[i] = e.target.value
                    return arr
                  })}
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

      {hasOutput && (
        <div className="editor-output">
          <div className="output-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>출력 결과</span>
            {expectedOutput && textOutput && textOutput.trim() === expectedOutput.trim() && (
              <span className="output-correct">정답!</span>
            )}
          </div>
          <div className={`editor-output-content${status === 'error' ? ' has-error' : ''}`}>
            {textOutput && <pre className="output-content">{textOutput}</pre>}
            {svgHtml && (
              <div className="editor-turtle-svg" dangerouslySetInnerHTML={{ __html: svgHtml }} />
            )}
            {errorMsg && <pre className="output-content editor-error">{errorMsg}</pre>}
            {!output && !errorMsg && status === 'done' && (
              <span className="editor-no-output">(출력 없음)</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
