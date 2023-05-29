import { type PropsWithChildren, type FC, createContext, useState, useEffect } from 'react'
import { useAuthStore } from '../stores/auth'

interface AuthContextInterface {
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
  const user = useAuthStore((state) => state.user)

  useEffect(() => {
    try {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    } catch (e) {}
  }, [user])

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export default AuthProvider
