import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { ClipboardList, Clock, Loader2, PlayCircle } from 'lucide-react'

const ASSESSMENT_URL = import.meta.env.VITE_ASSESSMENT_URL || 'https://assessment.arinfotek.co.in'

function parseTopics(topics) {
  if (Array.isArray(topics)) return topics
  if (typeof topics === 'string') {
    try {
      const parsed = JSON.parse(topics)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }
  return []
}

export default function TestsPage() {
  const { user, refreshActivations } = useAuth()
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      await refreshActivations()
      const courses = Array.isArray(user?.activated) ? user.activated : []
      if (courses.length === 0) {
        setTests([])
        setLoading(false)
        return
      }
      try {
        const res = await fetch('/api/tests?action=list&courses=' + encodeURIComponent(courses.join(',')))
        const data = await res.json()
        if (res.ok) {
          setTests(data.tests || [])
        } else {
          setError(data.error || 'Failed to load tests')
        }
      } catch {
        setError('Failed to connect. Please try again.')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const takeTest = (test) => {
    const base = ASSESSMENT_URL + '/'
    const registerId = user?.username || user?.email?.split('@')[0] || ''
    const params = new URLSearchParams({
      name: user?.username || '',
      reg: registerId,
      code: test.test_code,
      auto: '1',
    })
    window.open(base + '?' + params.toString(), '_blank', 'noopener')
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-black flex items-center gap-2">
            <ClipboardList size={24} />
            My Tests
          </h1>
          <p className="text-blue-200 text-sm mt-1">Tests assigned for your enrolled courses</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4">
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : tests.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList size={28} className="text-slate-400" />
            </div>
            <h2 className="text-lg font-black text-slate-800 mb-1">No tests assigned yet</h2>
            <p className="text-sm text-slate-500">Your trainer has not added any tests for your course yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => {
              const topics = parseTopics(test.topics)
              return (
                <div key={test.id} className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary text-white text-xs font-bold rounded-lg px-2.5 py-1 font-mono">{test.test_code}</span>
                        {(test.level || '') && (
                          <span className="bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg px-2 py-1">{test.level}</span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-800 truncate">{test.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 capitalize">{test.subject || test.course || 'General'}</p>
                    </div>
                  </div>

                  {topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {topics.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-semibold">{t}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                    <Clock size={13} />
                    {test.duration_minutes} minutes
                  </div>

                  <button
                    onClick={() => takeTest(test)}
                    className="mt-auto w-full py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-accent to-orange-600 text-white shadow-lg hover:shadow-orange-200 transition flex items-center justify-center gap-2"
                  >
                    <PlayCircle size={16} />
                    Take Test
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}