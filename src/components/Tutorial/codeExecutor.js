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

let inputHandler = null

export function setInputHandler(fn) {
  inputHandler = fn
}

export function clearPendingInputs() {
  window.__codelearnValue = null
}

function ensurePromptBridge() {
  if (window.__codelearnSet) return
  window.__codelearnValue = null
  window.__codelearnSet = (prompt) => {
    window.__codelearnValue = null
    if (typeof inputHandler === 'function') {
      inputHandler(String(prompt) || '', (val) => { window.__codelearnValue = String(val == null ? '' : val) })
    } else {
      const val = window.prompt(String(prompt) || 'Enter value:')
      window.__codelearnValue = val == null ? '' : val
    }
  }
  window.__codelearnPoll = () => {
    const v = window.__codelearnValue
    window.__codelearnValue = null
    return v
  }
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
  let pyodide = null
  try {
    pyodide = await loadPyodide()
    ensurePromptBridge()
    pyodide.runPython(`
import sys
from io import StringIO
import builtins
from js import window
_sys_stdout = sys.stdout
sys.stdout = StringIO()
async def _cookie_input(prompt=""):
    import asyncio
    if prompt:
        sys.stdout.write(str(prompt))
        sys.stdout.flush()
    window.__codelearnSet(str(prompt) if prompt else '')
    while True:
        _val = window.__codelearnPoll()
        if _val is not None:
            sys.stdout.write(_val + '\\n')
            return _val
        await asyncio.sleep(0.02)
builtins.input = _cookie_input
    `)
    pyodide.runPython(`
import ast
_code = ${JSON.stringify(code)}
_src = ''
_sy_err = ''
try:
    _tree = ast.parse(_code)
    class _Find(ast.NodeVisitor):
        def __init__(self):
            self._async_names = set()
        def _has_input(self, node):
            return any(
                isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'input'
                for n in ast.walk(node)
            )
        def visit_FunctionDef(self, node):
            if self._has_input(node):
                self._async_names.add(node.name)
            self.generic_visit(node)
    _finder = _Find()
    _finder.visit(_tree)
    _async_names = _finder._async_names
    _used_input = bool(_async_names) or any(
        isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == 'input'
        for n in ast.walk(_tree)
    )
    class _T(ast.NodeTransformer):
        def visit_Call(self, node):
            node = self.generic_visit(node)
            if isinstance(node.func, ast.Name):
                if node.func.id == 'input' or node.func.id in _async_names:
                    return ast.copy_location(ast.Await(value=node), node)
            return node
        def visit_FunctionDef(self, node):
            node = self.generic_visit(node)
            if node.name in _async_names:
                new = ast.AsyncFunctionDef(
                    name=node.name, args=node.args, body=node.body,
                    decorator_list=node.decorator_list,
                    returns=node.returns, type_comment=node.type_comment
                )
                ast.copy_location(new, node)
                ast.fix_missing_locations(new)
                return new
            return node
    _tree = _T().visit(_tree)
    ast.fix_missing_locations(_tree)
    _src = ast.unparse(_tree)
except Exception as _e:
    _sy_err = type(_e).__name__ + ': ' + str(_e)
    `)
    const syErr = pyodide.globals.get('_sy_err').toString()
    if (syErr) {
      pyodide.runPython('sys.stdout = _sys_stdout')
      return { output: '', error: syErr }
    }
    const src = pyodide.globals.get('_src').toString()
    const usedInput = Boolean(pyodide.globals.get('_used_input'))
    if (!usedInput) {
      try {
        pyodide.runPython(code)
        const output = pyodide.runPython('sys.stdout.getvalue()')
        pyodide.runPython('sys.stdout = _sys_stdout')
        return { output: output || 'Code executed successfully.', error: '' }
      } catch (e) {
        pyodide.runPython('sys.stdout = _sys_stdout')
        return { output: '', error: e.message }
      }
    }
    if (!src.trim()) {
      pyodide.runPython('sys.stdout = _sys_stdout')
      return { output: 'Code executed successfully.', error: '' }
    }
    const indented = src.split('\n').map(l => '    ' + l).join('\n')
    await pyodide.runPythonAsync(`async def __codelearn_main():\n${indented}\nawait __codelearn_main()`)
    const output = pyodide.runPython('sys.stdout.getvalue()')
    pyodide.runPython('sys.stdout = _sys_stdout')
    return { output: output || 'Code executed successfully.', error: '' }
  } catch (e) {
    try { pyodide && pyodide.runPython('sys.stdout = _sys_stdout') } catch (_) { /* ignore */ }
    const errMsg = e.message || String(e)
    return { output: '', error: errMsg }
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
    case 'linux':
      return executeViaJDoodle('bash', code)
    default:
      return executeViaJDoodle(language, code)
  }
}
