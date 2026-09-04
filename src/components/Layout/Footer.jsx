import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, X } from 'lucide-react'

const ADMIN_PASSWORD = 'arinfotek'

export default function Footer() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const openAdmin = () => {
    setPassword('')
    setError('')
    setShowModal(true)
  }

  const submit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('arinfotek_admin_key', password)
      setShowModal(false)
      navigate('/admin')
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <>
      <footer className="bg-primary text-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/arinfotek_logo.png" alt="AR INFOTEK" className="h-8 w-auto object-contain brightness-0 invert mb-3" />
              <p className="text-sm text-slate-300 leading-relaxed">Practical, mentor-led online IT training to accelerate your career.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-white">Programs</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">AWS Architect</a></li>
                <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">Data Science</a></li>
                <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">DevOps</a></li>
                <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">Python</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="https://arinfotek.co.in/#why" className="hover:text-white transition">Why Us</a></li>
                <li><a href="https://arinfotek.co.in/#internship" className="hover:text-white transition">Internship</a></li>
                <li><a href="https://arinfotek.co.in/#projects" className="hover:text-white transition">Innovation Labs</a></li>
                <li><a href="https://assessment.arinfotek.co.in" className="hover:text-white transition">Assessment</a></li>
                <li>
                  <button onClick={openAdmin} className="inline-flex items-center gap-1.5 hover:text-white transition">
                    <ShieldCheck size={14} /> Admin
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>admissions@arinfotek.co.in</li>
                <li>+91-9487107253</li>
                <li>WhatsApp: +91-9487107253</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-300/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-300">&copy; {new Date().getFullYear()} AR INFOTEK &ndash; All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} /> Admin Access
              </h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-700">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={submit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-2 text-slate-800"
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
