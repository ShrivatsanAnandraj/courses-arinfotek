import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowLeft, ChevronDown, ChevronUp, Loader2, RefreshCw, Users, LogOut, Trash2 } from 'lucide-react'
import { languages } from '../Languages/languages'
import LanguageLogo from '../Languages/LanguageLogos'

const ADMIN_PASSWORD = 'arinfotek'
const COURSE_OPTIONS = [
  ...languages.map(l => ({ id: l.id, name: l.name, type: 'language' })),
  { id: 'cloud', name: 'Cloud Computing', type: 'cloud' }
]

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
            <button
              onClick={remove}
              disabled={removing}
              title={`Remove ${username}`}
              className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition disabled:opacity-50"
            >
              <Trash2 size={15} />
            </button>
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
            Manage Courses
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
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold border transition text-left ${
                  selected.includes(opt.id)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary/40'
                }`}
              >
                {opt.type === 'language' ? (
                  <LanguageLogo lang={opt.id} size={18} />
                ) : (
                  <ShieldCheck size={18} />
                )}
                <span className="truncate">{opt.name}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition">
              Cancel
            </button>
            <button onClick={save} disabled={saving} className="px-5 py-2 bg-accent text-white text-sm font-bold rounded-lg hover:opacity-90 transition disabled:opacity-60">
              {saving ? 'Saving...' : 'Save Courses'}
            </button>
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

  const options = useMemo(() => COURSE_OPTIONS, [])

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
    </div>
  )
}
