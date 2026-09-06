import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { Code, LogOut, User, Home, ClipboardList, Sun, Moon } from 'lucide-react'

export default function Header() {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <Link to={user ? '/home' : '/login'} className="flex items-center hover:opacity-90 transition">
          <img
            src="/arinfotek_logo.png"
            alt="AR INFOTEK"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        
        {user && (
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1 rounded-full border border-slate-100 dark:border-slate-700">
            <Link
              to="/home"
              className="px-4 py-1.5 text-xs lg:text-sm font-bold text-primary rounded-full hover:bg-white hover:shadow-md transition flex items-center gap-1"
            >
              <Home size={14} />
              Home
            </Link>
            <Link
              to="/workspace"
              className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 rounded-full hover:bg-white dark:hover:text-white hover:shadow-md transition flex items-center gap-1"
            >
              <Code size={14} />
              Workspace
            </Link>
            <Link
              to="/tests"
              className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 rounded-full hover:bg-white dark:hover:text-white hover:shadow-md transition flex items-center gap-1"
            >
              <ClipboardList size={14} />
              Test
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 rounded-full hover:bg-white dark:hover:text-white hover:shadow-md transition flex items-center gap-1"
            >
              <User size={14} />
              Dashboard
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center w-8 h-8 rounded-full text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          {user ? (
            <>
              <span className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-300">
                Hi, {user.username}!
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-red-500 rounded-full hover:bg-red-50 transition"
              >
                <LogOut size={14} />
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1.5 text-xs font-bold text-white bg-primary rounded-full hover:bg-primary-dark transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
