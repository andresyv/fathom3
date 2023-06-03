import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
