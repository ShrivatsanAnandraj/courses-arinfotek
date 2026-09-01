import { useState, useRef } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { Play, Save, FolderOpen, Trash2, Plus, ArrowLeft, Terminal, X, Download, Eye, Code2 } from 'lucide-react'
import { languages } from '../Languages/languages'
import LanguageLogo from '../Languages/LanguageLogos'
import { executeCode } from '../Tutorial/codeExecutor'

const LANGUAGE_MAP = {
  python: 'python',
  javascript: 'javascript',
  html: 'html',
  css: 'css',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  csharp: 'csharp',
  ruby: 'ruby',
  kotlin: 'kotlin',
  typescript: 'typescript',
  go: 'go',
  linux: 'shell'
}

const DEFAULT_CODE = {
  python: `# Write your Python code here\nprint("Hello, World!")`,
  javascript: `// Write your JavaScript code here\nconsole.log("Hello, World!");`,
  html: `<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>`,
  css: `/* Write your CSS here */\nbody {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}\n\nh1 {\n    color: #1e5aa8;\n    text-align: center;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
  csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`,
  ruby: `# Write your Ruby code here\nputs "Hello, World!"`,
  kotlin: `fun main() {\n    println("Hello, World!")\n}`,
  typescript: `// Write your TypeScript code here\nconsole.log("Hello, World!");`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
  linux: `#!/bin/bash\necho "Hello from Linux!"\nwhoami\nhostname`
}

export default function Workspace() {
  const { language: langParam } = useParams()
  const location = useLocation()
  const topic = location.state?.topic
  const navigate = useNavigate()

  const [selectedLanguage, setSelectedLanguage] = useState(langParam || null)
  const [code, setCode] = useState(() => {
    if (langParam) {
      const topicCode = topic ? getDefaultCodeForTopic(langParam, topic.id) : null
      return topicCode || DEFAULT_CODE[langParam] || DEFAULT_CODE.javascript
    }
    return ''
  })
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showTerminal, setShowTerminal] = useState(true)
  const [htmlPreview, setHtmlPreview] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [files, setFiles] = useState(() => {
    const saved = localStorage.getItem('codelearn_files')
    return saved ? JSON.parse(saved) : []
  })
  const [currentFile, setCurrentFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [showFileModal, setShowFileModal] = useState(false)
  const editorRef = useRef(null)
  const previewRef = useRef(null)

  const currentLanguage = selectedLanguage || 'javascript'
  const lang = languages.find(l => l.id === currentLanguage)

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  const selectLanguage = (langId) => {
    setSelectedLanguage(langId)
    setCode(DEFAULT_CODE[langId] || '')
    setOutput('')
    setHtmlPreview('')
    setShowPreview(false)
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running...')
    setHtmlPreview('')
    setShowPreview(false)
    try {
      const result = await executeCode(currentLanguage, code)
      if (result.html) {
        setHtmlPreview(result.html)
        setShowPreview(true)
        setOutput('Preview rendered on the right panel.')
      } else if (result.error) {
        setOutput(result.error)
      } else {
        setOutput(result.output || 'No output')
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const saveFile = () => {
    if (!fileName.trim()) {
      alert('Please enter a file name')
      return
    }
    const newFile = {
      id: Date.now(),
      name: fileName,
      language: currentLanguage,
      content: code,
      createdAt: new Date().toISOString()
    }
    const updatedFiles = [...files, newFile]
    setFiles(updatedFiles)
    localStorage.setItem('codelearn_files', JSON.stringify(updatedFiles))
    setCurrentFile(newFile)
    setFileName('')
    setShowFileModal(false)
  }

  const loadFile = (file) => {
    setCode(file.content)
    setSelectedLanguage(file.language)
    setCurrentFile(file)
    setShowFileModal(false)
  }

  const deleteFile = (fileId) => {
    if (confirm('Are you sure you want to delete this file?')) {
      const updatedFiles = files.filter(f => f.id !== fileId)
      setFiles(updatedFiles)
      localStorage.setItem('codelearn_files', JSON.stringify(updatedFiles))
      if (currentFile?.id === fileId) setCurrentFile(null)
    }
  }

  const downloadFile = () => {
    const extensions = {
      python: '.py', javascript: '.js', html: '.html', css: '.css',
      java: '.java', c: '.c', cpp: '.cpp', csharp: '.cs',
      ruby: '.rb', kotlin: '.kt', typescript: '.ts', go: '.go', linux: '.sh'
    }
    const ext = extensions[currentLanguage] || '.txt'
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentFile?.name || 'code'}${ext}`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Language selector screen
  if (!selectedLanguage) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <Link to="/home" className="text-slate-400 hover:text-white transition">
              <ArrowLeft size={18} />
            </Link>
            <Code2 className="text-accent" size={22} />
            <span className="text-white font-bold text-lg">Code Workspace</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">Choose a Language</h2>
              <p className="text-slate-400">Select a language to start coding in the workspace</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {languages.map(l => {
                const isBrowser = ['python', 'javascript', 'typescript', 'html', 'css'].includes(l.id)
                return (
                  <button
                    key={l.id}
                    onClick={() => selectLanguage(l.id)}
                    className="bg-slate-800/50 border border-slate-700 hover:border-accent/50 hover:bg-slate-800 rounded-xl p-4 flex flex-col items-center gap-2 transition group"
                  >
                    <LanguageLogo lang={l.id} size={36} />
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition">{l.name}</span>
                    {isBrowser && (
                      <span className="text-[9px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">IN-BROWSER</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col bg-slate-900">
      {/* Toolbar */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <button onClick={() => { setSelectedLanguage(null); setOutput(''); setHtmlPreview(''); setShowPreview(false) }} className="text-slate-400 hover:text-white transition">
            <ArrowLeft size={18} />
          </button>
          <LanguageLogo lang={currentLanguage} size={24} />
          <span className="text-white font-bold flex items-center gap-2">
            {lang?.name || 'Code'} Workspace
          </span>
          {currentFile && (
            <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{currentFile.name}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowFileModal(true)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-300 bg-slate-700 rounded-lg hover:bg-slate-600 transition">
            <FolderOpen size={14} /> Files
          </button>
          <button onClick={() => setShowTerminal(!showTerminal)} className={`flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg transition ${showTerminal ? 'bg-primary text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
            <Terminal size={14} /> Terminal
          </button>
          <button onClick={downloadFile} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-300 bg-slate-700 rounded-lg hover:bg-slate-600 transition">
            <Download size={14} /> Export
          </button>
          <button onClick={runCode} disabled={isRunning} className="flex items-center gap-1 px-4 py-1.5 text-xs font-bold text-white bg-green-600 rounded-lg hover:bg-green-500 transition disabled:opacity-50">
            <Play size={14} />
            {isRunning ? 'Running...' : 'Run'}
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Editor */}
        <div className="flex-1 min-h-[400px]">
          <Editor
            height="100%"
            language={LANGUAGE_MAP[currentLanguage] || 'javascript'}
            value={code}
            onChange={(value) => setCode(value || '')}
            onMount={handleEditorDidMount}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              padding: { top: 16 },
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />
        </div>

        {/* Terminal/Output + Preview */}
        {showTerminal && (
          <div className="lg:w-96 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-700 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                {showPreview ? <><Eye size={12} /> Preview</> : 'Output'}
              </span>
              <div className="flex items-center gap-2">
                {showPreview && (
                  <button onClick={() => setShowPreview(false)} className="text-[10px] text-slate-500 hover:text-white">Hide Preview</button>
                )}
                <button onClick={() => { setOutput(''); setHtmlPreview(''); setShowPreview(false) }} className="text-xs text-slate-500 hover:text-white transition">Clear</button>
              </div>
            </div>
            {showPreview && htmlPreview ? (
              <div className="flex-1 min-h-0 flex flex-col">
                <div className="flex-1 min-h-0 bg-white">
                  <iframe ref={previewRef} srcDoc={htmlPreview} title="Preview" className="w-full h-full border-0" style={{ minHeight: '200px' }} />
                </div>
                <pre className="p-2 text-[10px] text-green-400 font-mono overflow-auto border-t border-slate-700" style={{ maxHeight: '60px' }}>
                  {output}
                </pre>
              </div>
            ) : (
              <pre className="flex-1 p-4 text-sm text-green-400 font-mono overflow-auto whitespace-pre-wrap">
                {output || 'Click "Run" to execute your code...'}
              </pre>
            )}
          </div>
        )}
      </div>

      {/* File Modal */}
      {showFileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-slate-800">My Files</h3>
              <button onClick={() => setShowFileModal(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <div className="p-4 border-b">
              <div className="flex gap-2">
                <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="Enter file name" className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <button onClick={saveFile} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition flex items-center gap-1">
                  <Save size={14} /> Save
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto max-h-[400px]">
              {files.length === 0 ? (
                <p className="text-center text-slate-500 py-8">No saved files yet</p>
              ) : (
                <div className="space-y-2">
                  {files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                      <button onClick={() => loadFile(file)} className="flex-1 text-left">
                        <p className="font-medium text-slate-800 text-sm">{file.name}</p>
                        <p className="text-xs text-slate-500">{file.language} • {new Date(file.createdAt).toLocaleDateString()}</p>
                      </button>
                      <button onClick={() => deleteFile(file.id)} className="p-1 text-red-400 hover:text-red-600 transition">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function getDefaultCodeForTopic(language, topicId) {
  const topicExamples = {
    python: {
      intro: `print("Hello, World!")`,
      variables: `# Variables\nname = "Alice"\nage = 25\nprint(f"Name: {name}, Age: {age}")`,
      operators: `a = 10\nb = 3\nprint(f"Add: {a + b}")\nprint(f"Subtract: {a - b}")`,
      conditionals: `age = 18\nif age >= 18:\n    print("You can vote!")\nelse:\n    print("Too young")`,
      loops: `for i in range(5):\n    print(i)`,
      lists: `fruits = ["apple", "banana", "cherry"]\nprint(fruits)`,
      dicts: `person = {"name": "John", "age": 30}\nprint(person["name"])`,
      functions: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`,
      classes: `class Dog:\n    def __init__(self, name):\n        self.name = name\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy")\nprint(my_dog.bark())`,
    },
    javascript: {
      intro: `console.log("Hello, World!");`,
      variables: `let name = "Alice";\nconst age = 25;\nconsole.log(name, age);`,
      operators: `let a = 10, b = 3;\nconsole.log("Add:", a + b);`,
      conditionals: `let age = 18;\nif (age >= 18) {\n    console.log("You can vote!");\n}`,
      loops: `for (let i = 0; i < 5; i++) {\n    console.log(i);\n}`,
      arrays: `let fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits);`,
      objects: `let person = {name: "John", age: 30};\nconsole.log(person.name);`,
      functions: `function greet(name) {\n    return \`Hello, \${name}!\`;\n}\nconsole.log(greet("World"));`,
    }
  }
  return topicExamples[language]?.[topicId] || null
}
