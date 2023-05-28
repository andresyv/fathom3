import { type PropsWithChildren, type FC, createContext, useState } from 'react'

interface AuthContextInterface {
  isLoggedIn: boolean
  setLoggedIn: (logged: boolean) => void
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>{children}</AuthContext.Provider>
}

export default AuthProvider
