import { useEffect, useState } from "react"
import { AuthContext } from "@/contexts/AuthContext"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isPending, setIsPending] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async () => {
    localStorage.setItem("ACCESS_TOKEN", "01234567890123456789012345678901")
    setIsAuthenticated(true)
  }

  const logout = async () => {
    localStorage.removeItem("ACCESS_TOKEN")
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const init = async () => {
      const accessToken = localStorage.getItem("ACCESS_TOKEN")

      if (accessToken) {
        setIsAuthenticated(true)
      }

      setIsPending(false)
    }

    init()
  }, [])

  return (
    <AuthContext.Provider value={{ isPending, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
