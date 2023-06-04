/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const ProtectedRoute = lazy(async () => await import('../components/ProtectedRoute'))
const HomePage = lazy(async () => await import('./Home'))
const CreatePage = lazy(async () => await import('./Create'))
const LoginPage = lazy(async () => await import('./auth/Login'))
const SignUpPage = lazy(async () => await import('./auth/SignUp'))
const PostPage = lazy(async () => await import('./PostView'))
const ProfilePage = lazy(async () => await import('./Profile'))

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
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    )
  },
  {
    path: '/post/create',
    element: (
      <ProtectedRoute>
        <CreatePage />
      </ProtectedRoute>
    )
  },
  {
    path: '/post/:id',
    element: (
      <ProtectedRoute>
        <PostPage />
      </ProtectedRoute>
    )
  },
  {
    path: '/auth/login',
    element: <LoginPage />
  },
  {
    path: '/auth/signup',
    element: <SignUpPage />
  }
])
