import { useState, useRef, useCallback } from 'react';

let workerInstance = null;
let workerIdCounter = 0;

function getPyodideWorker() {
  if (!workerInstance) {
    workerInstance = new Worker(
      new URL('../workers/pyodide.worker.js', import.meta.url),
      { type: 'classic' }
    );
  }
  return workerInstance;
}

function runPython(code, inputs) {
  return new Promise((resolve) => {
    const worker = getPyodideWorker();
    const id = ++workerIdCounter;

    const handler = (e) => {
      if (e.data.id === id) {
        worker.removeEventListener('message', handler);
        resolve(e.data);
      }
    };
    worker.addEventListener('message', handler);
    worker.postMessage({ id, code, inputs });
  });
}

export function useCodeRunner() {
  const [status, setStatus] = useState('idle');
  const [output, setOutput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const abortRef = useRef(false);

  const runCode = useCallback(async (code, inputs) => {
    abortRef.current = false;
    setOutput('');
    setErrorMsg('');
    setStatus('loading');

    try {
      setStatus('running');
      const result = await runPython(code, inputs);

      if (abortRef.current) return;

      if (result.success) {
        setOutput(result.output);
        setErrorMsg(result.stderr || '');
        setStatus('done');
      } else {
        setOutput(result.output || '');
        setErrorMsg(result.stderr);
        setStatus('error');
      }
    } catch (err) {
      if (abortRef.current) return;
      setErrorMsg(err.message || 'Unknown error');
      setStatus('error');
    }
  }, []);

  const resetOutput = useCallback(() => {
    abortRef.current = true;
    setStatus('idle');
    setOutput('');
    setErrorMsg('');
  }, []);

  return { status, output, errorMsg, runCode, resetOutput };
}
