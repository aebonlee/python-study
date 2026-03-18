import { useState, useRef, useMemo, useCallback } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import { useCodeRunner } from '../hooks/useCodeRunner'

const SVG_MARKER = '__TURTLE_SVG__'

export default function CodeEditor({ initialCode = '', expectedOutput = '', lessonId = '' }) {
  const [code, setCode] = useState(initialCode)
  const [showHint, setShowHint] = useState(false)
  const [inputValues, setInputValues] = useState([])
  const [waitingForInput, setWaitingForInput] = useState(false)
  const textareaRef = useRef(null)
  const { incrementCodeRuns } = useProgress()
  const { status, output, errorMsg, runCode, resetOutput } = useCodeRunner()

  const isRunning = status === 'loading' || status === 'running'

  // Detect input(), textinput(), numinput() calls in code
  const inputPrompts = useMemo(() => {
    const prompts = []
    for (const line of code.split('\n')) {
      if (line.trim().startsWith('#')) continue
      const inputMatches = [...line.matchAll(/(?<![a-zA-Z])input\s*\(\s*(?:["']([^"']*?)["'])?\s*\)/g)]
      for (const m of inputMatches) prompts.push(m[1] || '입력하세요:')
      const turtleMatches = [...line.matchAll(/(?:textinput|numinput)\s*\(\s*["'][^"']*["']\s*,\s*["']([^"']*?)["']/g)]
      for (const m of turtleMatches) prompts.push(m[1] || '입력하세요:')
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

  const handleRun = useCallback(() => {
    setWaitingForInput(false)
    // If code has input() calls, show input form
    const prompts = inputPrompts
    if (prompts.length > 0) {
      resetOutput()
      setInputValues(new Array(prompts.length).fill(''))
      setWaitingForInput(true)
      return
    }
    runCode(code)
    incrementCodeRuns()
  }, [runCode, code, inputPrompts, resetOutput, incrementCodeRuns])

  const handleSubmitInputs = useCallback((e) => {
    e.preventDefault()
    setWaitingForInput(false)
    runCode(code, inputValues)
    incrementCodeRuns()
  }, [runCode, code, inputValues, incrementCodeRuns])

  const handleReset = useCallback(() => {
    setCode(initialCode)
    setInputValues([])
    setWaitingForInput(false)
    resetOutput()
  }, [initialCode, resetOutput])

  const handleClearOutput = useCallback(() => {
    resetOutput()
    setWaitingForInput(false)
  }, [resetOutput])

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
  const hasOutput = output || errorMsg

  return (
    <div className="code-editor">
      {/* Header - matches practice-runner-header */}
      <div className="editor-header">
        <span className="editor-header-title">
          <i className="fa-brands fa-python" /> Python Editor
          {isTurtleCode && (
            <span className="editor-header-badge">Turtle</span>
          )}
        </span>
        <div className="editor-header-actions">
          {expectedOutput && (
            <button className={`editor-header-btn${showHint ? ' active' : ''}`} onClick={() => setShowHint(!showHint)}>
              <i className="fa-solid fa-lightbulb" /> 힌트
            </button>
          )}
        </div>
      </div>

      {/* Editor body - matches practice-editor-body */}
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
          disabled={isRunning}
          placeholder="# 파이썬 코드를 입력하세요..."
        />
      </div>

      {/* Bottom toolbar - matches practice-toolbar */}
      <div className="editor-toolbar-bottom">
        <button className="editor-btn run-btn" onClick={handleRun} disabled={isRunning}>
          {isRunning ? (
            <><div className="loading-spinner-small" /> {status === 'loading' ? 'Python 로딩 중...' : '실행 중...'}</>
          ) : (
            <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> 실행</>
          )}
        </button>
        <div className="editor-toolbar-right">
          <button className="editor-btn" onClick={handleReset} disabled={isRunning}>초기화</button>
          {hasOutput && (
            <button className="editor-btn" onClick={handleClearOutput} disabled={isRunning}>출력 지우기</button>
          )}
        </div>
      </div>

      {/* Hint */}
      {showHint && expectedOutput && (
        <div className="editor-hint">
          <strong>예상 출력:</strong> <code>{expectedOutput}</code>
        </div>
      )}

      {/* Input form - matches practice-input-form */}
      {waitingForInput && (
        <div className="editor-output">
          <div className="editor-output-header"><i className="fa-solid fa-keyboard" /> 입력값 입력</div>
          <form className="editor-input-form" onSubmit={handleSubmitInputs}>
            {inputPrompts.map((prompt, i) => (
              <div key={i} className="editor-input-row">
                <label>{prompt}</label>
                <input
                  className="editor-input-field"
                  value={inputValues[i] || ''}
                  onChange={e => {
                    const idx = i
                    setInputValues(prev => { const next = [...prev]; next[idx] = e.target.value; return next })
                  }}
                  autoFocus={i === 0}
                />
              </div>
            ))}
            <button type="submit" className="editor-btn run-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> 실행
            </button>
          </form>
        </div>
      )}

      {/* Output - matches practice-output */}
      {!waitingForInput && (status === 'done' || status === 'error' || output || errorMsg) && (
        <div className="editor-output">
          <div className="editor-output-header">
            실행 결과
            {expectedOutput && textOutput && textOutput.trim() === expectedOutput.trim() && (
              <span className="output-correct">정답!</span>
            )}
          </div>
          <div className={`editor-output-content${status === 'error' ? ' has-error' : ''}`}>
            {textOutput && <pre className="editor-stdout">{textOutput}</pre>}
            {svgHtml && (
              <div className="editor-turtle-svg" dangerouslySetInnerHTML={{ __html: svgHtml }} />
            )}
            {errorMsg && <pre className="editor-stderr">{errorMsg}</pre>}
            {!output && !errorMsg && status === 'done' && (
              <span className="editor-no-output">(출력 없음)</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
