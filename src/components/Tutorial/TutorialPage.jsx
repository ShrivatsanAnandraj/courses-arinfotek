import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { Play, ChevronRight, ChevronDown, BookOpen, ArrowLeft, CheckCircle, Terminal, X, RotateCcw, Loader2 } from 'lucide-react'
import { languages } from '../Languages/languages'
import { topicContent } from '../Languages/content'
import LanguageLogo from '../Languages/LanguageLogos'
import { defaultCode } from '../Languages/defaultCode'

const PISTON_LANG = { python: 'python', javascript: 'javascript', java: 'java', c: 'c', cpp: 'cpp', csharp: 'csharp', ruby: 'ruby', go: 'go', kotlin: 'kotlin', typescript: 'typescript', html: 'html', css: 'css' }

export default function TutorialPage() {
  const { language } = useParams()
  const [activeTopic, setActiveTopic] = useState(null)
  const [showCompiler, setShowCompiler] = useState(false)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem(`codelearn_progress_${language}`)
    return saved ? JSON.parse(saved) : []
  })
  const [expandedCategories, setExpandedCategories] = useState({})

  const lang = languages.find(l => l.id === language)
  const content = topicContent[language]

  if (!lang) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Language not found</h2>
          <Link to="/home" className="text-primary font-bold hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  const handleTryIt = (topic) => {
    const topicData = content?.[topic.id]
    const exampleCode = topicData?.examples?.[0]?.code || getDefaultCode(language, topic.id)
    setCode(exampleCode)
    setOutput('')
    setShowCompiler(true)
  }

  const markCompleted = (topicId) => {
    const newCompleted = [...completedTopics, topicId]
    setCompletedTopics(newCompleted)
    localStorage.setItem(`codelearn_progress_${language}`, JSON.stringify(newCompleted))
  }

  const toggleCategory = (cat) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }))
  }

  const runCode = async () => {
    if (language === 'html') {
      const w = window.open('', '_blank')
      w.document.write(code)
      w.document.close()
      setOutput('HTML preview opened in new tab.')
      return
    }
    if (language === 'css') {
      setOutput('CSS is a styling language. Apply it to HTML to see results.')
      return
    }
    setIsRunning(true)
    setOutput('Running...')
    try {
      const res = await fetch('https://emkc.org/piston/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: PISTON_LANG[language] || 'javascript', version: 'latest', files: [{ content: code }] })
      })
      if (!res.ok) throw new Error('Execution failed')
      const result = await res.json()
      setOutput(result.run?.output || 'No output')
    } catch (e) {
      setOutput(`Error: ${e.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const progress = Math.round((completedTopics.length / lang.topics.length) * 100)

  const categories = {}
  lang.topics.forEach(t => {
    if (!categories[t.category]) categories[t.category] = []
    categories[t.category].push(t)
  })

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/home" className="inline-flex items-center gap-1 text-blue-200 hover:text-white mb-2 transition text-sm">
            <ArrowLeft size={14} /> Back to Languages
          </Link>
          <div className="flex items-center gap-3">
            <LanguageLogo lang={language} size={40} />
            <div>
              <h1 className="text-2xl font-black">{lang.name}</h1>
              <p className="text-blue-200 text-sm">{lang.shortDescription}</p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="bg-white/20 rounded-full h-2 w-32 hidden sm:block">
                <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-xs font-medium">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={`grid gap-6 ${showCompiler ? 'lg:grid-cols-2' : ''}`}>

          {/* LEFT: Topics + Content */}
          <div className={`${showCompiler ? 'lg:col-span-1' : ''} space-y-4`}>
            {/* Collapsible Topics */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <button onClick={() => toggleCategory('all')} className="w-full flex items-center justify-between p-4 hover:bg-slate-50">
                <span className="font-bold text-slate-800 flex items-center gap-2">
                  <BookOpen size={16} /> Topics ({lang.topics.length})
                </span>
                <ChevronDown size={16} className={`transition-transform ${expandedCategories['all'] !== false ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${expandedCategories['all'] === false ? 'hidden' : ''} border-t`}>
                {Object.entries(categories).map(([cat, topics]) => (
                  <div key={cat}>
                    <button onClick={() => toggleCategory(cat)} className="w-full flex items-center justify-between px-4 py-2 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-wider">
                      <span>{cat}</span>
                      <ChevronDown size={12} className={`transition-transform ${expandedCategories[cat] === false ? '-rotate-90' : ''}`} />
                    </button>
                    <div className={`${expandedCategories[cat] === false ? 'hidden' : ''}`}>
                      {topics.map((topic, i) => (
                        <button key={topic.id} onClick={() => { setActiveTopic(topic); if (!showCompiler) {} }} className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-slate-50 ${activeTopic?.id === topic.id ? 'bg-primary/5 text-primary border-l-3 border-primary' : 'text-slate-700'}`}>
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${completedTopics.includes(topic.id) ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                            {completedTopics.includes(topic.id) ? <CheckCircle size={10} /> : i + 1}
                          </span>
                          <span className="flex-1 truncate">{topic.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Content */}
            {activeTopic && (
              <div className="bg-white rounded-xl shadow-md p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-black text-slate-800">{activeTopic.title}</h2>
                  <button onClick={() => handleTryIt(activeTopic)} className="flex items-center gap-1 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-lg hover:bg-accent-dark transition">
                    <Play size={12} /> Try It Yourself
                  </button>
                </div>

                {content?.[activeTopic.id] ? (
                  <div className="space-y-4 text-sm">
                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
                      <h4 className="font-bold text-primary mb-1">Definition</h4>
                      <p className="text-slate-700">{content[activeTopic.id].definition}</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-green-700 mb-1">Why Learn This?</h4>
                      <p className="text-slate-700">{content[activeTopic.id].whyUse}</p>
                    </div>

                    {content[activeTopic.id].syntax && (
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Syntax</h4>
                        <p className="text-slate-600 mb-2">{content[activeTopic.id].syntax.description}</p>
                        <pre className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs overflow-x-auto"><code>{content[activeTopic.id].syntax.code}</code></pre>
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Explanation</h4>
                      <p className="text-slate-600 leading-relaxed">{content[activeTopic.id].explanation}</p>
                    </div>

                    {content[activeTopic.id].examples?.map((ex, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-slate-800">{ex.title}</h4>
                          <button onClick={() => { setCode(ex.code); setOutput(''); setShowCompiler(true) }} className="text-xs text-primary hover:underline font-bold">Run this</button>
                        </div>
                        <pre className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs overflow-x-auto"><code>{ex.code}</code></pre>
                        {ex.output && <p className="text-xs text-slate-500 mt-1">Output: {ex.output}</p>}
                      </div>
                    ))}

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-amber-700 mb-1">Key Points</h4>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        {content[activeTopic.id].keyPoints.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>

                    {content[activeTopic.id].commonMistakes && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h4 className="font-bold text-red-700 mb-1">Common Mistakes</h4>
                        <ul className="list-disc list-inside text-slate-700 space-y-1">
                          {content[activeTopic.id].commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                        </ul>
                      </div>
                    )}

                    {content[activeTopic.id].proTips && (
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                        <h4 className="font-bold text-purple-700 mb-1">Pro Tips</h4>
                        <ul className="list-disc list-inside text-slate-700 space-y-1">
                          {content[activeTopic.id].proTips.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-slate-500">{activeTopic.content}</div>
                )}

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <button onClick={() => { const idx = lang.topics.findIndex(t => t.id === activeTopic.id); if (idx < lang.topics.length - 1) setActiveTopic(lang.topics[idx + 1]) }} className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary">
                    Next <ChevronRight size={14} />
                  </button>
                  <button onClick={() => markCompleted(activeTopic.id)} className={`px-4 py-1.5 rounded-lg font-bold text-sm transition ${completedTopics.includes(activeTopic.id) ? 'bg-green-100 text-green-600' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                    {completedTopics.includes(activeTopic.id) ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>
              </div>
            )}

            {!activeTopic && (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Select a Topic</h3>
                <p className="text-sm text-slate-500">Choose a topic from the sidebar to start learning {lang.name}</p>
              </div>
            )}
          </div>

          {/* RIGHT: Compiler + Terminal */}
          {showCompiler && (
            <div className="lg:col-span-1 flex flex-col bg-slate-900 rounded-xl overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '500px' }}>
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal size={12} /> Code Editor
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setCode(getDefaultCode(language, activeTopic?.id || 'intro')); setOutput('') }} className="p-1 text-slate-400 hover:text-white" title="Reset"><RotateCcw size={14} /></button>
                  <button onClick={() => setShowCompiler(false)} className="p-1 text-slate-400 hover:text-white" title="Close"><X size={14} /></button>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <Editor height="100%" language={PISTON_LANG[language] || 'javascript'} value={code} onChange={v => setCode(v || '')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 13, padding: { top: 8 }, scrollBeyondLastLine: false, automaticLayout: true }} />
              </div>
              <div className="border-t border-slate-700">
                <div className="flex items-center justify-between px-4 py-1.5 bg-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Output</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setOutput('')} className="text-[10px] text-slate-500 hover:text-white">Clear</button>
                    <button onClick={runCode} disabled={isRunning} className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded hover:bg-green-500 disabled:opacity-50">
                      {isRunning ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} />}
                      {isRunning ? 'Running...' : 'Run'}
                    </button>
                  </div>
                </div>
                <pre className="p-3 text-xs text-green-400 font-mono overflow-auto bg-slate-950" style={{ height: '180px' }}>
                  {output || 'Click Run to execute your code...'}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function getDefaultCode(lang, topicId) {
  return defaultCode[lang]?.[topicId] || defaultCode[lang]?.intro || `// ${lang} code\nconsole.log("Hello!")`
}
