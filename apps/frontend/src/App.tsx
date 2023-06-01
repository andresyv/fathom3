import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import router from './routes'
import DefaultLayout from './components/layouts/DefaultLayout'

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </DefaultLayout>
    </AuthProvider>
  )
}

export default App
