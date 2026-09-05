import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowLeft, Loader2, RefreshCw, Users, LogOut, Trash2, ClipboardList, Bell, ShieldAlert } from 'lucide-react'
import { languages } from '../Languages/languages'

const ADMIN_PASSWORD = 'arinfotek'
const ASSESSMENT_URL = import.meta.env.VITE_ASSESSMENT_URL || 'https://assessment.arinfotek.co.in'
const LEVEL_OPTIONS = ['Beginner', 'Intermediate', 'Advanced']
const COURSE_OPTIONS = [
  ...languages.map(l => ({ id: l.id, name: l.name, type: 'language' })),
  { id: 'cloud', name: 'Cloud Computing', type: 'cloud' }
]

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

function TestsAdmin({ options }) {
  const [course, setCourse] = useState(options[0]?.id || 'python')
  const [level, setLevel] = useState('Beginner')
  const [topics, setTopics] = useState('')
  const [code, setCode] = useState('')
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const load = async () => {
    setLoading(true)
    try {
      const ids = options.map(o => o.id)
      const res = await fetch('/api/tests?action=list&courses=' + encodeURIComponent(ids.join(',')))
      const data = await res.json()
      if (res.ok) setTests(data.tests || [])
    } catch {
      setMessage('Error: Failed to load tests.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const generateCode = () => {
    const prefix = 'T' + String(Math.floor(Math.random() * 90) + 10)
    const suffix = String(Math.floor(Math.random() * 900) + 100)
    setCode((prefix + suffix).toUpperCase())
  }

  const makePaper = () => {
    if (!code.trim()) {
      setMessage('Error: Enter a test code first.')
      return
    }
    const courseName = options.find(o => o.id === course)?.name || course
    const base = ASSESSMENT_URL + '/'
    const params = new URLSearchParams({
      admin: '1',
      test_code: code.trim().toUpperCase(),
      subject: courseName,
      course,
      level,
      topics,
      return: window.location.href,
    })
    window.open(base + '?' + params.toString(), '_blank', 'noopener')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
        <h3 className="text-base font-black text-slate-800 mb-1">Create Test</h3>
        <p className="text-sm text-slate-500 mb-4">Enter the course details and test code, then build the question paper in the assessment page.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {options.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {LEVEL_OPTIONS.map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-600 mb-1">Topics <span className="text-slate-400 font-normal">(comma separated)</span></label>
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            placeholder="e.g. Arrays, Loops, Functions"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-600 mb-1">Test Code</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="e.g. PYT01"
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={generateCode}
              className="px-4 py-2.5 rounded-lg text-sm font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            >
              Generate
            </button>
          </div>
        </div>

        {message && <p className={`text-sm mb-3 ${message.startsWith('Error') ? 'text-red-500' : 'text-green-600'}`}>{message}</p>}

        <button
          onClick={makePaper}
          className="w-full py-3 rounded-xl font-bold text-base bg-gradient-to-r from-accent to-orange-600 text-white shadow-lg hover:shadow-orange-200 transition"
        >
          Make Question Paper
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-black text-slate-800">Existing Tests</h3>
          <button onClick={load} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition">
            <RefreshCw size={13} /> Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="animate-spin text-primary" size={28} />
          </div>
        ) : tests.length === 0 ? (
          <p className="text-sm text-slate-500 py-6 text-center">No tests found yet. Create one above.</p>
        ) : (
          <div className="space-y-2 max-h-[50vh] overflow-y-auto">
            {tests.map(t => {
              const topics = parseTopics(t.topics)
              return (
                <div key={t.id} className="flex flex-wrap items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="bg-primary text-white text-xs font-bold rounded-lg px-2.5 py-1 font-mono">{t.test_code}</span>
                  <div className="flex-1 min-w-[160px]">
                    <div className="text-sm font-bold text-slate-800">{t.title}</div>
                    <div className="text-xs text-slate-500 capitalize">{t.subject || t.course} {t.level ? '· ' + t.level : ''}</div>
                    {topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {topics.map((topic, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[11px] font-semibold">{topic}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function PasswordGate({ onAuth }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('arinfotek_admin_key', password)
      onAuth(password)
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8">
        <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 mx-auto">
          <ShieldCheck className="text-primary" size={28} />
        </div>
        <h1 className="text-xl font-black text-slate-800 text-center mb-1">Admin Access</h1>
        <p className="text-sm text-slate-500 text-center mb-6">Enter the admin password to continue</p>
        <form onSubmit={submit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-2 text-slate-800"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button type="submit" className="w-full py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition">
            Sign In
          </button>
        </form>
        <Link to="/home" className="block text-center text-sm text-slate-500 hover:text-primary mt-4">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

function StudentRow({ student, options, onSave, onRemove }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const [saving, setSaving] = useState(false)
  const [removing, setRemoving] = useState(false)

  const openEditor = () => {
    setSelected([...(student.activations || [])])
    setOpen(true)
  }

  const toggle = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const save = async () => {
    setSaving(true)
    await onSave(student.id, selected)
    setSaving(false)
    setOpen(false)
  }

  const remove = () => {
    if (!window.confirm(`Are you sure you want to remove this account (${username})?`)) return
    setRemoving(true)
    onRemove(student.id).finally(() => setRemoving(false))
  }

  const completedCount = Object.values(student.progress || {}).reduce((a, b) => a + b, 0)

  const username = student.username || student.email?.split('@')[0] || 'Student'

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 p-4">
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-black text-primary">
              {username.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="font-bold text-slate-800">{username}</div>
              <div className="text-xs text-slate-500">{student.email}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="font-mono text-sm bg-slate-100 px-3 py-1 rounded">{student.password}</div>
            <div className="text-[10px] text-slate-400 uppercase mt-0.5">Password</div>
          </div>
          <div className="text-center">
            <div className="font-black text-lg text-primary">{completedCount}</div>
            <div className="text-[10px] text-slate-400 uppercase">Topics Done</div>
          </div>
          <button
            onClick={openEditor}
            className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition"
          >
            View
          </button>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4 border-t border-slate-100 pt-4">
          <h4 className="text-sm font-bold text-slate-700 mb-1">Assign Courses</h4>
          <p className="text-xs text-slate-500 mb-3">Only activated courses will be visible to this student.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-4">
            {options.map(opt => (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition text-center ${
                  selected.includes(opt.id)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary/40'
                }`}
              >
                <span className="truncate">{opt.name}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <button onClick={remove} disabled={removing} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition disabled:opacity-60">
              <Trash2 size={14} /> {removing ? 'Removing...' : 'Remove Account'}
            </button>
            <div className="flex gap-2">
              <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition">
                Cancel
              </button>
              <button onClick={save} disabled={saving} className="px-5 py-2 bg-accent text-white text-sm font-bold rounded-lg hover:opacity-90 transition disabled:opacity-60">
                {saving ? 'Saving...' : 'Save Courses'}
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-700 mb-2">Progress by Course</h4>
            {Object.keys(student.progress || {}).length === 0 ? (
              <p className="text-xs text-slate-400">No progress recorded yet.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {Object.entries(student.progress || {}).map(([course, count]) => {
                  const full = languages.find(l => l.id === course)
                  const label = course === 'cloud' ? 'Cloud' : (full?.name || course)
                  return (
                    <span key={course} className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {label}: {count} topics
                    </span>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [key, setKey] = useState(() => sessionStorage.getItem('arinfotek_admin_key') || null)
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [section, setSection] = useState('students')
  const [flags, setFlags] = useState([])

  const options = useMemo(() => COURSE_OPTIONS, [])

  const fetchFlags = async () => {
    try {
      const res = await fetch('/api/tabflags?action=list')
      const data = await res.json()
      if (res.ok) setFlags(data.flags || [])
    } catch {}
  }

  useEffect(() => {
    fetchFlags()
    const id = setInterval(fetchFlags, 5000)
    return () => clearInterval(id)
  }, [])

  const approveFlag = async (id) => {
    try {
      const res = await fetch('/api/tabflags?action=resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      if (res.ok) setFlags(prev => prev.filter(f => f.id !== id))
    } catch {}
  }

  const load = async () => {
    if (!key) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin_users', {
        method: 'GET',
        headers: { 'x-admin-key': key }
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to load')
      setStudents(data.students || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (key) load() }, [key])

  const saveActivations = async (userId, courses) => {
    const res = await fetch('/api/admin_users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify({ user_id: userId, courses })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Failed to save')
    setStudents(data.students || [])
  }

  const removeStudent = async (userId) => {
    try {
      const res = await fetch('/api/admin_users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ user_id: userId })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to remove')
      setStudents(data.students || [])
    } catch (e) {
      alert(e.message)
    }
  }

  if (!key) return <PasswordGate onAuth={setKey} />

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/home" className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-sm mb-2 transition">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-black">Admin Panel</h1>
                <p className="text-blue-200 text-sm">Manage student access and view progress</p>
              </div>
            </div>
            <button
              onClick={() => { sessionStorage.removeItem('arinfotek_admin_key'); setKey(null) }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold transition"
            >
              <LogOut size={16} /> Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4">
        {flags.length > 0 && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-black text-red-700 flex items-center gap-2">
                <Bell size={16} /> Tab Change Alerts ({flags.length})
              </h3>
              <button
                onClick={fetchFlags}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-red-200 text-red-600 hover:bg-red-100 transition"
              >
                <RefreshCw size={12} /> Refresh
              </button>
            </div>
            <div className="space-y-2">
              {flags.map(flag => (
                <div key={flag.id} className="flex flex-wrap items-center gap-3 bg-white rounded-xl border border-red-100 p-3">
                  <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <ShieldAlert size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary text-white text-xs font-bold rounded-lg px-2.5 py-1 font-mono">{flag.test_code}</span>
                      <span className="text-sm font-bold text-slate-800">{flag.student_name}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Reg ID: <span className="font-mono">{flag.student_register_id}</span> &middot; {flag.reason} &middot; {new Date(flag.created_at).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => approveFlag(flag.id)}
                    className="shrink-0 px-4 py-2 rounded-lg text-xs font-bold bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 mb-4 bg-white rounded-xl shadow-sm border border-slate-100 p-1 w-fit">
          <button
            onClick={() => setSection('students')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition ${section === 'students' ? 'bg-primary text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Users size={15} /> Students
          </button>
          <button
            onClick={() => setSection('tests')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition ${section === 'tests' ? 'bg-primary text-white shadow' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <ClipboardList size={15} /> Tests
            {flags.length > 0 && (
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-black align-middle">
                {flags.length}
              </span>
            )}
          </button>
        </div>

        {section === 'tests' && <TestsAdmin options={options} />}

        {section === 'students' && (
          <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <Users size={18} className="text-primary" /> Students ({students.length})
          </h2>
          <button onClick={load} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition">
            <RefreshCw size={14} /> Refresh
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : students.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center text-slate-500">
            No students signed up yet.
          </div>
        ) : (
          <div className="space-y-3">
            {students.map(s => (
              <StudentRow key={s.id} student={s} options={options} onSave={saveActivations} onRemove={removeStudent} />
            ))}
          </div>
        )}
          </div>
        )}
      </div>
    </div>
  )
}
