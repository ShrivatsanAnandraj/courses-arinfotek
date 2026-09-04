import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('codelearn_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (username, password) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')
      setUser(data.user)
      localStorage.setItem('codelearn_user', JSON.stringify(data.user))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const signup = async (username, email, password) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'signup', username, email, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Signup failed')
      setUser(data.user)
      localStorage.setItem('codelearn_user', JSON.stringify(data.user))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('codelearn_user')
  }

  const persistUser = (u) => {
    setUser(u)
    localStorage.setItem('codelearn_user', JSON.stringify(u))
  }

  const hasAccess = (course) => {
    if (!user) return false
    const activated = Array.isArray(user.activated) ? user.activated : []
    return activated.includes(course)
  }

  const refreshActivations = async () => {
    if (!user) return
    try {
      const res = await fetch(`/api/auth?user_id=${user.id}`, { method: 'GET' })
      const data = await res.json()
      if (res.ok && Array.isArray(data.activated)) {
        persistUser({ ...user, activated: data.activated })
      }
    } catch (error) {
      console.error('Refresh activations error:', error)
    }
  }

  const setActivated = (courses) => {
    if (user) persistUser({ ...user, activated: courses || [] })
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, hasAccess, refreshActivations, setActivated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
