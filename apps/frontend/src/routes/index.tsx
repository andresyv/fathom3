import { createBrowserRouter } from 'react-router-dom'
import HomePage from './Home'
import LoginPage from './auth/Login'
import ProtectedRoute from '../components/ProtectedRoute'

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    )
  },
  {
    path: '/auth/login',
    element: <LoginPage />
  }
])
