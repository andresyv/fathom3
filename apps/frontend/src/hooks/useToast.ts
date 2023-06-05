import { useContext } from 'react'
import { ToastContext } from '../contexts/ToastContext'

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be use inside an ToastProvider')
  }
  return context
}
