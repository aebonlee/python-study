import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import { useCodeRunner } from '../hooks/useCodeRunner'
import { stepMeta, stepLoaders } from '../data/pythonSteps/index.js'

/* ── 기본값→직접입력 자동 변환 ── */
function generateInputVersion(code) {
  const lines = code.split('\n')
  const result = []
  let changed = false
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()
    const commentMatch = trimmed.match(
      /^#\s*([\w]+)\s*=\s*(?:int|float|str)?\s*\(?\s*(?:input|(?:\w+\.)?(?:textinput|numinput))\s*\(/
    )
    if (commentMatch) {
      const varName = commentMatch[1]
      const indent = line.match(/^(\s*)/)[1]
      const uncommented = indent + trimmed.slice(1).trimStart()
      result.push(uncommented)
      changed = true
      if (i + 1 < lines.length) {
        const nextTrimmed = lines[i + 1].trim()
        const hardcodePattern = new RegExp(
          `^${varName}\\s*=\\s*(?!.*input\\s*\\().*`
        )
        if (hardcodePattern.test(nextTrimmed)) {
          i += 2
          continue
        }
      }
      i++
      continue
    }
    result.push(line)
    i++
  }
  return changed ? result.join('\n') : null
}

/* ── input() / textinput() / numinput() 감지 ── */
function detectInputPrompts(code) {
  const prompts = []
  for (const line of code.split('\n')) {
    if (line.trim().startsWith('#')) continue
    /* standard input("prompt") - exclude textinput/numinput */
    const inputMatches = [...line.matchAll(/(?<![a-zA-Z])input\s*\(\s*(?:["']([^"']*?)["'])?\s*\)/g)]
    for (const m of inputMatches) prompts.push(m[1] || '입력하세요:')
    /* turtle.textinput("title", "prompt") / turtle.numinput("title", "prompt") */
    const turtleMatches = [...line.matchAll(/(?:textinput|numinput)\s*\(\s*["'][^"']*["']\s*,\s*["']([^"']*?)["']/g)]
    for (const m of turtleMatches) prompts.push(m[1] || '입력하세요:')
  }
  return prompts
}

/* ── 미지원 모듈 패턴 ── */
const UNSUPPORTED_MODULES = [
  { pattern: /(?:^|\n)\s*(?:import\s+tkinter|from\s+tkinter\s)/, name: 'tkinter' },
  { pattern: /(?:^|\n)\s*(?:import\s+matplotlib|from\s+matplotlib\s)/, name: 'matplotlib' },
  { pattern: /(?:^|\n)\s*(?:import\s+pygame|from\s+pygame\s)/, name: 'pygame' },
]

/* ── 단계별 코드 실행 패널 ── */
const StepCodeRunner = ({ example, onReset }) => {
  const [code, setCode] = useState(example.code)
  const [copied, setCopied] = useState(false)
  const [unsupportedMsg, setUnsupportedMsg] = useState(null)
  const [inputPrompts, setInputPrompts] = useState([])
  const [inputValues, setInputValues] = useState([])
  const [waitingForInput, setWaitingForInput] = useState(false)
  const [codeMode, setCodeMode] = useState('default')
  const { status, output, errorMsg, runCode, resetOutput } = useCodeRunner()

  const inputVersion = useMemo(() => generateInputVersion(example.code), [example.code])
  const hasTabs = inputVersion !== null
  const baseCode = codeMode === 'input' ? inputVersion : example.code

  useEffect(() => {
    setCode(example.code)
    setCodeMode('default')
    resetOutput()
    setUnsupportedMsg(null)
    setWaitingForInput(false)
    setInputPrompts([])
    setInputValues([])
  }, [example, resetOutput])

  const switchMode = useCallback((mode) => {
    if (mode === codeMode) return
    setCodeMode(mode)
    setCode(mode === 'input' ? inputVersion : example.code)
    resetOutput()
    setUnsupportedMsg(null)
    setWaitingForInput(false)
    setInputPrompts([])
    setInputValues([])
  }, [codeMode, inputVersion, example.code, resetOutput])

  const handleRun = useCallback(() => {
    setUnsupportedMsg(null)
    setWaitingForInput(false)
    const found = UNSUPPORTED_MODULES.find(m => m.pattern.test(code))
    if (found) {
      resetOutput()
      setUnsupportedMsg(found.name)
      return
    }
    const prompts = detectInputPrompts(code)
    if (prompts.length > 0) {
      resetOutput()
      setInputPrompts(prompts)
      setInputValues(new Array(prompts.length).fill(''))
      setWaitingForInput(true)
      return
    }
    runCode(code)
  }, [runCode, code, resetOutput])

  const updateInputValue = useCallback((idx, val) => {
    setInputValues(prev => { const next = [...prev]; next[idx] = val; return next })
  }, [])

  const handleSubmitInputs = useCallback((e) => {
    e.preventDefault()
    setWaitingForInput(false)
    runCode(code, inputValues)
  }, [runCode, code, inputValues])

  const handleReset = useCallback(() => {
    setCode(codeMode === 'input' ? inputVersion : example.code)
    resetOutput()
    setUnsupportedMsg(null)
    setWaitingForInput(false)
    setInputPrompts([])
    setInputValues([])
  }, [codeMode, inputVersion, example.code, resetOutput])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [code])

  const handleDownload = useCallback(() => {
    const blob = new Blob([code], { type: 'text/x-python' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = example.name + '.py'
    a.click()
    URL.revokeObjectURL(url)
  }, [code, example.name])

  const handleClearOutput = useCallback(() => {
    resetOutput()
    setUnsupportedMsg(null)
  }, [resetOutput])

  const isRunning = status === 'loading' || status === 'running'
  const hasOutput = output || errorMsg || unsupportedMsg

  const lineCount = code.split('\n').length

  return (
    <div className="practice-step-runner">
      <div className="practice-runner-header">
        <span className="practice-runner-filename">
          <i className="fa-brands fa-python" /> {example.name}.py
          <span className="practice-runner-title">{example.title}</span>
        </span>
        <div className="practice-runner-actions">
          <button className={`editor-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
            {copied ? <><i className="fa-solid fa-check" /> 복사됨</> : <><i className="fa-regular fa-clipboard" /> 복사</>}
          </button>
          <button className="editor-btn" onClick={handleDownload}>
            <i className="fa-solid fa-download" /> 다운로드
          </button>
          <button className="editor-btn" onClick={onReset}>
            <i className="fa-solid fa-xmark" /> 닫기
          </button>
        </div>
      </div>

      {hasTabs && (
        <div className="practice-mode-tabs">
          <button
            className={`practice-mode-tab${codeMode === 'default' ? ' active' : ''}`}
            onClick={() => switchMode('default')}
          >
            <i className="fa-solid fa-play" /> 기본값 실행
          </button>
          <button
            className={`practice-mode-tab${codeMode === 'input' ? ' active' : ''}`}
            onClick={() => switchMode('input')}
          >
            <i className="fa-solid fa-keyboard" /> 직접 입력
          </button>
        </div>
      )}

      <div className="practice-editor-body">
        <div className="line-numbers">
          {Array.from({ length: lineCount }, (_, i) => (
            <span key={i + 1}>{i + 1}</span>
          ))}
        </div>
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              e.preventDefault()
              const start = e.target.selectionStart
              const end = e.target.selectionEnd
              setCode(code.substring(0, start) + '    ' + code.substring(end))
              setTimeout(() => { e.target.selectionStart = e.target.selectionEnd = start + 4 }, 0)
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleRun()
          }}
          spellCheck={false}
          disabled={isRunning}
        />
      </div>

      <div className="practice-toolbar">
        <button className="editor-btn run-btn" onClick={handleRun} disabled={isRunning}>
          {isRunning ? (
            <><div className="loading-spinner-small" /> {status === 'loading' ? 'Python 로딩 중...' : '실행 중...'}</>
          ) : (
            <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> 실행</>
          )}
        </button>
        <div className="practice-toolbar-right">
          <button className="editor-btn" onClick={handleReset} disabled={isRunning}>초기화</button>
          {hasOutput && (
            <button className="editor-btn" onClick={handleClearOutput} disabled={isRunning}>출력 지우기</button>
          )}
        </div>
      </div>

      {unsupportedMsg && (
        <div className="practice-output">
          <div className="practice-output-header">실행 결과</div>
          <div className="practice-unsupported">
            <i className="fa-solid fa-triangle-exclamation" />
            <div>
              <strong>{unsupportedMsg}</strong> 모듈은 브라우저에서 실행할 수 없습니다.
              <p>코드를 다운로드하여 PC의 Python IDLE 또는 VS Code에서 실행해 주세요.</p>
            </div>
          </div>
        </div>
      )}

      {waitingForInput && (
        <div className="practice-output">
          <div className="practice-output-header"><i className="fa-solid fa-keyboard" /> 입력값 입력</div>
          <form className="practice-input-form" onSubmit={handleSubmitInputs}>
            {inputPrompts.map((prompt, i) => (
              <div key={i} className="practice-input-row">
                <label>{prompt}</label>
                <input
                  className="practice-input-field"
                  value={inputValues[i] || ''}
                  onChange={e => updateInputValue(i, e.target.value)}
                  autoFocus={i === 0}
                />
              </div>
            ))}
            <button type="submit" className="editor-btn run-btn">
              <i className="fa-solid fa-play" /> 실행
            </button>
          </form>
        </div>
      )}

      {!unsupportedMsg && !waitingForInput && (status === 'done' || status === 'error' || output || errorMsg) && (() => {
        const SVG_MARKER = '__TURTLE_SVG__'
        const hasSvg = output && output.includes(SVG_MARKER)
        const textOutput = hasSvg ? output.substring(0, output.indexOf(SVG_MARKER)).trim() : output
        const svgHtml = hasSvg ? output.substring(output.indexOf(SVG_MARKER) + SVG_MARKER.length).trim() : ''

        return (
          <div className="practice-output">
            <div className="practice-output-header">실행 결과</div>
            <div className={`practice-output-content${status === 'error' ? ' has-error' : ''}`}>
              {textOutput && <pre className="practice-stdout">{textOutput}</pre>}
              {svgHtml && (
                <div className="practice-turtle-svg" dangerouslySetInnerHTML={{ __html: svgHtml }} />
              )}
              {errorMsg && <pre className="practice-stderr">{errorMsg}</pre>}
              {!output && !errorMsg && status === 'done' && (
                <span className="practice-no-output">(출력 없음)</span>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}

/* ── 예제 사이드바 항목 ── */
const ExampleItem = ({ example, isSelected, onClick }) => (
  <button className={`practice-example-item${isSelected ? ' active' : ''}`} onClick={onClick}>
    <span className="practice-example-name"><i className="fa-brands fa-python" /> {example.name}.py</span>
    <span className="practice-example-title">{example.title}</span>
  </button>
)

/* ── 단계 섹션 ── */
const StepSection = ({ meta }) => {
  const [examples, setExamples] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setSelectedIdx(null)
    stepLoaders[meta.step]()
      .then(mod => { if (!cancelled) { setExamples(mod.default); setLoading(false) } })
      .catch(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [meta.step])

  return (
    <div className="practice-step-layout">
      <aside className="practice-example-sidebar">
        <div className="practice-sidebar-header">
          <span className="practice-sidebar-icon"><i className={meta.icon} /></span>
          <div>
            <h3>{meta.title}</h3>
            <span className="practice-file-count">
              {examples ? examples.length : '..'}개 예제
            </span>
          </div>
        </div>

        {loading && (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.85rem' }}>
            로딩...
          </div>
        )}

        {examples && (
          <nav className="practice-example-nav">
            {examples.map((ex, idx) => (
              <ExampleItem
                key={ex.name}
                example={ex}
                isSelected={selectedIdx === idx}
                onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
              />
            ))}
          </nav>
        )}
      </aside>

      <div className="practice-runner-panel">
        {selectedIdx !== null && examples && examples[selectedIdx] ? (
          <StepCodeRunner
            example={examples[selectedIdx]}
            onReset={() => setSelectedIdx(null)}
          />
        ) : (
          <div className="practice-runner-empty">
            <i className="fa-solid fa-hand-point-left" />
            <p>예제를 선택하면 코드를 편집하고 실행할 수 있습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── 메인 페이지 ── */
export default function PythonPractice() {
  const [activeStep, setActiveStep] = useState(stepMeta[0].step)

  return (
    <div className="practice-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-title-row">
              <span className="page-header-icon"><i className="fa-solid fa-laptop-code" /></span>
              <div>
                <h1>파이썬 실습</h1>
                <p>소스 코드를 확인하고 편집하여 직접 실행해 보세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1240 }}>
          <div className="practice-step-tabs">
            <div className="practice-tab-row">
              {stepMeta.filter(s => s.step <= 6).map(s => (
                <button
                  key={s.step}
                  className={`practice-tab${activeStep === s.step ? ' active' : ''}`}
                  onClick={() => setActiveStep(s.step)}
                >
                  <span className="practice-tab-label">
                    <span className="practice-tab-step">{`${s.step}단계`}</span>
                    <span className="practice-tab-title">{s.title}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="practice-tab-row">
              {stepMeta.filter(s => s.step > 6).map(s => (
                <button
                  key={s.step}
                  className={`practice-tab${activeStep === s.step ? ' active' : ''}`}
                  onClick={() => setActiveStep(s.step)}
                >
                  <span className="practice-tab-label">
                    <span className="practice-tab-step">{s.step >= 98 ? `심화 ${s.step - 97}` : `${s.step}단계`}</span>
                    <span className="practice-tab-title">{s.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {stepMeta
            .filter(s => activeStep === s.step)
            .map((s) => (
              <StepSection key={s.step} meta={s} />
            ))}
        </div>
      </section>

    </div>
  )
}
