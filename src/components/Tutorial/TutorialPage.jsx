import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { Play, ChevronRight, ChevronDown, BookOpen, ArrowLeft, CheckCircle, Terminal, X, RotateCcw, Loader2, Eye } from 'lucide-react'
import { languages } from '../Languages/languages'
import { topicContent } from '../Languages/content'
import LanguageLogo from '../Languages/LanguageLogos'
import { defaultCode } from '../Languages/defaultCode'
import { executeCode, isBrowserLanguage } from './codeExecutor'

function getDefaultCode(lang, topicId) {
  return defaultCode[lang]?.[topicId] || defaultCode[lang]?.intro || `// ${lang} code\nconsole.log("Hello!")`
}

export default function TutorialPage() {
  const { language } = useParams()
  const lang = languages.find(l => l.id === language)
  const content = topicContent[language]

  const [activeTopic, setActiveTopic] = useState(() => lang?.topics?.[0] || null)
  const [showCompiler, setShowCompiler] = useState(false)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [htmlPreview, setHtmlPreview] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const previewRef = useRef(null)
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem(`codelearn_progress_${language}`)
    return saved ? JSON.parse(saved) : []
  })
  const [expandedCategories, setExpandedCategories] = useState(() => {
    const cats = {}
    if (lang) {
      const uniqueCats = [...new Set(lang.topics.map(t => t.category))]
      uniqueCats.forEach(c => { cats[c] = false })
    }
    return cats
  })

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

  const categories = {}
  lang.topics.forEach(t => {
    if (!categories[t.category]) categories[t.category] = []
    categories[t.category].push(t)
  })

  const handleTryIt = (topicId, exCode) => {
    setCode(exCode || getDefaultCode(language, topicId))
    setOutput('')
    setShowCompiler(true)
  }

  const markCompleted = (topicId) => {
    const newCompleted = completedTopics.includes(topicId)
      ? completedTopics.filter(id => id !== topicId)
      : [...completedTopics, topicId]
    setCompletedTopics(newCompleted)
    localStorage.setItem(`codelearn_progress_${language}`, JSON.stringify(newCompleted))
  }

  const toggleCategory = (cat) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }))
  }

  const goToTopic = (direction) => {
    const idx = lang.topics.findIndex(t => t.id === activeTopic.id)
    const nextIdx = direction === 'next' ? idx + 1 : idx - 1
    if (nextIdx >= 0 && nextIdx < lang.topics.length) {
      setActiveTopic(lang.topics[nextIdx])
    }
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running...')
    setHtmlPreview('')
    setShowPreview(false)
    try {
      const result = await executeCode(language, code)
      if (result.html) {
        setHtmlPreview(result.html)
        setShowPreview(true)
        setOutput('Preview rendered on the right panel.')
      } else if (result.error) {
        setOutput(result.error)
      } else {
        setOutput(result.output || 'No output')
      }
    } catch (e) {
      setOutput(`Error: ${e.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const progress = Math.round((completedTopics.length / lang.topics.length) * 100)

  const topicData = activeTopic ? content?.[activeTopic.id] : null

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-4">
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
        <div className="flex gap-6">
          {/* LEFT SIDEBAR - Topics */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-3 border-b bg-slate-50">
                <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <BookOpen size={14} /> {lang.name} Tutorial
                </span>
              </div>
              <div className="max-h-[calc(100vh-180px)] overflow-y-auto">
                {Object.entries(categories).map(([cat, topics]) => (
                  <div key={cat}>
                    <button onClick={() => toggleCategory(cat)} className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-wider">
                      <span>{cat}</span>
                      <ChevronDown size={12} className={`transition-transform ${expandedCategories[cat] === false ? '-rotate-90' : ''}`} />
                    </button>
                    <div className={`${expandedCategories[cat] === false ? 'hidden' : ''}`}>
                      {topics.map((topic) => (
                        <button key={topic.id} onClick={() => setActiveTopic(topic)} className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-slate-50 transition ${activeTopic?.id === topic.id ? 'bg-primary/5 text-primary border-l-3 border-primary font-semibold' : 'text-slate-600'}`}>
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${completedTopics.includes(topic.id) ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {completedTopics.includes(topic.id) ? <CheckCircle size={10} /> : topics.indexOf(topic) + 1}
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            {/* Mobile topic selector */}
            <div className="lg:hidden mb-4">
              <select value={activeTopic?.id || ''} onChange={e => setActiveTopic(lang.topics.find(t => t.id === e.target.value))} className="w-full p-3 border rounded-lg text-sm font-medium bg-white">
                {Object.entries(categories).map(([cat, topics]) => (
                  <optgroup key={cat} label={cat}>
                    {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>

            {activeTopic && topicData ? (
              <div className="bg-white rounded-xl shadow-md">
                {/* Topic Header */}
                <div className="p-5 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black text-slate-800">{activeTopic.title}</h2>
                    <button onClick={() => handleTryIt(activeTopic.id)} className="flex items-center gap-1 px-4 py-2 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-dark transition">
                      <Play size={14} /> Try it Yourself
                    </button>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">{activeTopic.content}</p>
                </div>

                {/* Content Sections - w3schools style */}
                <div className="p-5 space-y-6">
                  {/* Definition */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{activeTopic.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{topicData.definition}</p>
                  </div>

                  {/* Why / Use case */}
                  {topicData.whyUse && (
                    <div>
                      <p className="text-slate-600 leading-relaxed">{topicData.whyUse}</p>
                    </div>
                  )}

                  {/* Explanation */}
                  {topicData.explanation && (
                    <div>
                      <p className="text-slate-600 leading-relaxed">{topicData.explanation}</p>
                    </div>
                  )}

                  {/* Examples - w3schools style */}
                  {topicData.examples?.map((ex, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-slate-800 mb-2">{ex.title}</h4>
                      <div className="relative group">
                        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto font-mono"><code>{ex.code}</code></pre>
                        <button onClick={() => handleTryIt(activeTopic.id, ex.code)} className="absolute top-2 right-2 px-3 py-1 bg-accent text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition">
                          Try it Yourself
                        </button>
                      </div>
                      {ex.output && (
                        <div className="mt-2 bg-slate-100 border-l-4 border-green-500 p-3 rounded-r">
                          <span className="text-xs font-bold text-slate-500 uppercase">Output:</span>
                          <pre className="text-sm text-slate-700 font-mono mt-1">{ex.output}</pre>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Note box - w3schools style */}
                  {topicData.keyPoints && topicData.keyPoints.length > 0 && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-green-700 mb-2">Note:</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        {topicData.keyPoints.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  )}

                  {/* Common Mistakes - w3schools "Warning" style */}
                  {topicData.commonMistakes && topicData.commonMistakes.length > 0 && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-red-700 mb-2">Warning:</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        {topicData.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                  )}

                  {/* Pro Tips */}
                  {topicData.proTips && topicData.proTips.length > 0 && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-blue-700 mb-2">Tip:</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        {topicData.proTips.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  )}

                  {/* Exercise section - w3schools style */}
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Exercise:</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Click "Try it Yourself" to edit the code and experiment with {activeTopic.title.toLowerCase()}. See what happens when you change the values.
                    </p>
                    <button onClick={() => handleTryIt(activeTopic.id)} className="flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition">
                      <Play size={14} /> Try it Yourself
                    </button>
                  </div>
                </div>

                {/* Prev / Next Navigation - w3schools style */}
                <div className="p-5 border-t flex items-center justify-between">
                  {lang.topics.findIndex(t => t.id === activeTopic.id) > 0 ? (
                    <button onClick={() => goToTopic('prev')} className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition">
                      <ArrowLeft size={14} /> Previous
                    </button>
                  ) : <div />}
                  <button onClick={() => markCompleted(activeTopic.id)} className={`px-4 py-2 rounded-lg font-bold text-sm transition ${completedTopics.includes(activeTopic.id) ? 'bg-green-100 text-green-600' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                    {completedTopics.includes(activeTopic.id) ? 'Completed' : 'Mark Complete'}
                  </button>
                  {lang.topics.findIndex(t => t.id === activeTopic.id) < lang.topics.length - 1 ? (
                    <button onClick={() => goToTopic('next')} className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition">
                      Next <ChevronRight size={14} />
                    </button>
                  ) : <div />}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Select a Topic</h3>
                <p className="text-sm text-slate-500">Choose a topic from the sidebar to start learning {lang.name}</p>
              </div>
            )}
          </div>

          {/* RIGHT: Compiler Panel */}
          {showCompiler && (
            <div className="w-[420px] flex-shrink-0 hidden xl:flex flex-col bg-slate-900 rounded-xl overflow-hidden" style={{ height: 'calc(100vh - 180px)', minHeight: '500px', position: 'sticky', top: '4px' }}>
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
                <Editor
                  height="100%"
                  language={language === 'csharp' ? 'csharp' : language === 'cpp' ? 'cpp' : language}
                  value={code}
                  onChange={v => setCode(v || '')}
                  theme="vs-dark"
                  options={{ minimap: { enabled: false }, fontSize: 13, padding: { top: 8 }, scrollBeyondLastLine: false, automaticLayout: true }}
                />
              </div>
              <div className="border-t border-slate-700 flex-1 min-h-0 flex flex-col">
                <div className="flex items-center justify-between px-4 py-1.5 bg-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    {showPreview ? <><Eye size={12} /> Preview</> : 'Output'}
                  </span>
                  <div className="flex items-center gap-2">
                    {showPreview && <button onClick={() => setShowPreview(false)} className="text-[10px] text-slate-500 hover:text-white">Hide Preview</button>}
                    <button onClick={() => { setOutput(''); setHtmlPreview(''); setShowPreview(false) }} className="text-[10px] text-slate-500 hover:text-white">Clear</button>
                    <button onClick={runCode} disabled={isRunning} className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded hover:bg-green-500 disabled:opacity-50">
                      {isRunning ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} />}
                      {isRunning ? 'Running...' : 'Run'}
                    </button>
                  </div>
                </div>
                {showPreview && htmlPreview ? (
                  <div className="flex-1 min-h-0 flex flex-col">
                    <div className="flex-1 min-h-0 bg-white">
                      <iframe ref={previewRef} srcDoc={htmlPreview} title="Preview" className="w-full h-full border-0" style={{ height: '100%', minHeight: '160px' }} />
                    </div>
                    <pre className="p-2 text-[10px] text-green-400 font-mono overflow-auto bg-slate-950 border-t border-slate-700" style={{ maxHeight: '60px' }}>
                      {output}
                    </pre>
                  </div>
                ) : (
                  <pre className="p-3 text-xs text-green-400 font-mono overflow-auto bg-slate-950 flex-1">
                    {output || 'Click Run to execute your code...'}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
