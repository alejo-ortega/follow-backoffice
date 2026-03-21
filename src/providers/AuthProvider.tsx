import { useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isPending] = useState(false)
  const [isAuthenticated] = useState(false)

  const login = async () => {
    // TODO!
  }

  const logout = async () => {
    // TODO!
  }

  useEffect(() => {
    const init = async () => {
      // TODO!
    }

    init()
  }, [])

  return (
    <AuthContext.Provider value={{ isPending, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
