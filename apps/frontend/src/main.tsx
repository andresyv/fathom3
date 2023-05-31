import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import router from './routes'
import './index.css'
import DefaultLayout from './components/layouts/DefaultLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <DefaultLayout>
        <RouterProvider router={router} />
      </DefaultLayout>
    </AuthProvider>
  </React.StrictMode>
)
