import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import router from './routes'
import DefaultLayout from './components/layouts/DefaultLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
          /
        </QueryClientProvider>
      </DefaultLayout>
    </AuthProvider>
  )
}

export default App
