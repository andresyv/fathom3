import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth()
  if (!auth.isLoggedIn) {
    return <Navigate to="/auth/login" replace />
  }
  return <>{children}</>
}

export default ProtectedRoute
