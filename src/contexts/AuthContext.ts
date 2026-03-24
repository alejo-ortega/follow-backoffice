import React from "react"

interface Auth {
  isAuthenticated: boolean
  isPending: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = React.createContext<Auth | null>(null)
