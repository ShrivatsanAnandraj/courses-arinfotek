// Python modules/patterns that don't work in Pyodide (browser Wasm)
const UNSUPPORTED_PYTHON_PATTERNS = [
  'import os', 'from os',
  'import subprocess', 'from subprocess',
  'import socket', 'from socket',
  'import sqlite3', 'from sqlite3',
  'import threading', 'from threading',
  'import multiprocessing', 'from multiprocessing',
  'import ctypes', 'from ctypes',
  'import cffi', 'from cffi',
  'import pip', 'from pip',
  'import setuptools', 'from setuptools',
  'import _thread', 'from _thread',
  'import tkinter', 'from tkinter',
  'import django', 'from django',
  'import flask', 'from flask',
  'import requests', 'from requests',
  'import urllib', 'from urllib',
  'import http', 'from http',
  'import ftplib', 'from ftplib',
  'import smtplib', 'from smtplib',
  'import imaplib', 'from imaplib',
  'import poplib', 'from poplib',
  'import xmlrpc', 'from xmlrpc',
  'import asyncio', 'from asyncio',
  'import signal', 'from signal',
  'import mmap', 'from mmap',
]

function needsServerExecution(code) {
  // Check for unsupported module imports
  if (UNSUPPORTED_PYTHON_PATTERNS.some(pattern => code.includes(pattern))) {
    return true
  }
  // Check for file I/O operations using open()
  if (/\bopen\s*\(/.test(code)) {
    return true
  }
  return false
}

let pyodideInstance = null
let pyodideLoading = false

async function loadPyodide() {
  if (pyodideInstance) return pyodideInstance
  if (pyodideLoading) {
    await new Promise(r => {
      const check = setInterval(() => {
        if (pyodideInstance) { clearInterval(check); r() }
      }, 100)
    })
    return pyodideInstance
  }
  pyodideLoading = true
  if (!window.loadPyodide) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
      s.onload = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
  }
  pyodideInstance = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' })
  return pyodideInstance
}

function executeJavaScript(code) {
  return new Promise((resolve) => {
    const logs = []
    const origLog = console.log
    const origError = console.error
    const origWarn = console.warn
    const origInfo = console.info
    console.log = (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '))
    console.error = (...args) => logs.push('[Error] ' + args.map(String).join(' '))
    console.warn = (...args) => logs.push('[Warn] ' + args.map(String).join(' '))
    console.info = (...args) => logs.push(args.map(String).join(' '))
    try {
      const result = new Function(code)()
      if (result !== undefined && logs.length === 0) logs.push(String(result))
      resolve({ output: logs.join('\n') || 'Code executed successfully.', error: '' })
    } catch (e) {
      resolve({ output: logs.join('\n'), error: e.message })
    } finally {
      console.log = origLog
      console.error = origError
      console.warn = origWarn
      console.info = origInfo
    }
  })
}

function executeTypeScript(code) {
  return new Promise((resolve) => {
    if (!window.ts) {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/typescript@5.4.5/lib/typescript.min.js'
      s.onload = () => compileAndRun()
      s.onerror = () => resolve({ output: '', error: 'Failed to load TypeScript compiler' })
      document.head.appendChild(s)
      return
    }
    compileAndRun()

    function compileAndRun() {
      try {
        const jsCode = window.ts.transpileModule(code, {
          compilerOptions: {
            module: window.ts.ModuleKind.None,
            target: window.ts.ScriptTarget.ES2020,
            strict: false,
          }
        }).outputText
        executeJavaScript(jsCode).then(resolve)
      } catch (e) {
        resolve({ output: '', error: 'TypeScript compilation error: ' + e.message })
      }
    }
  })
}

async function executePython(code) {
  try {
    const pyodide = await loadPyodide()
    pyodide.runPython(`
import sys
from io import StringIO
_sys_stdout = sys.stdout
sys.stdout = StringIO()
    `)
    try {
      pyodide.runPython(code)
      const output = pyodide.runPython('sys.stdout.getvalue()')
      pyodide.runPython('sys.stdout = _sys_stdout')
      return { output: output || 'Code executed successfully.', error: '' }
    } catch (e) {
      pyodide.runPython('sys.stdout = _sys_stdout')
      const errMsg = e.message
      const pyTrace = errMsg.includes('Traceback') ? errMsg : errMsg
      return { output: '', error: pyTrace }
    }
  } catch (e) {
    return { output: '', error: 'Python runtime error: ' + e.message }
  }
}

async function executePythonViaOneCompiler(code) {
  try {
    const res = await fetch('/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: 'python', code, executor: 'onecompiler' })
    })
    const result = await res.json()
    if (!res.ok) throw new Error(result.error || `API error (${res.status})`)
    return { output: result.output || result.error || 'No output', error: result.error || '' }
  } catch (e) {
    return { output: '', error: `OneCompiler API error: ${e.message}` }
  }
}

function executeHTML(code) {
  return { output: '__HTML_PREVIEW__', html: code, error: '' }
}

function executeCSS(code) {
  const html = `<!DOCTYPE html>
<html>
<head><style>${code}</style></head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample paragraph.</p>
  <div class="container">
    <button>Click Me</button>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</body>
</html>`
  return { output: '__HTML_PREVIEW__', html, error: '' }
}

async function executeViaJDoodle(language, code) {
  const res = await fetch('/api/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language, code })
  })
  const result = await res.json()
  if (!res.ok) throw new Error(result.error || `API error (${res.status})`)
  return { output: result.output || result.error || 'No output', error: result.error || '' }
}

const browserLanguages = new Set(['python', 'javascript', 'typescript', 'html', 'css'])

export function isBrowserLanguage(lang) {
  return browserLanguages.has(lang)
}

export async function executeCode(language, code) {
  switch (language) {
    case 'python':
      if (needsServerExecution(code)) {
        return executePythonViaOneCompiler(code)
      }
      return executePython(code)
    case 'javascript':
      return executeJavaScript(code)
    case 'typescript':
      return executeTypeScript(code)
    case 'html':
      return executeHTML(code)
    case 'css':
      return executeCSS(code)
    default:
      return executeViaJDoodle(language, code)
  }
}
