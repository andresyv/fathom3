import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ToastProvider from './contexts/ToastContext'

const queryClient = new QueryClient()

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
