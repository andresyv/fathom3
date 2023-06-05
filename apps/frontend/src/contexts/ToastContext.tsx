import { type PropsWithChildren, type FC, createContext, useState, useRef } from 'react'
import Toast from '../components/Toast'
interface ToastContextInterface {
  toastOptions: ToastOptions
  showToast: (opts: { type: 'success' | 'error'; message: string }) => void
}
interface ToastOptions {
  type: 'success' | 'error'
  message: string
}
export const ToastContext = createContext<ToastContextInterface | null>(null)

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toastOptions, setToastOptions] = useState<ToastOptions>({ message: '', type: 'success' })
  const [show, setShow] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = (opts: ToastOptions) => {
    setToastOptions(opts)
    setShow(true)
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ showToast, toastOptions }}>
      <>
        {children}
        {show && (
          <Toast type={toastOptions.type}>
            <span>{toastOptions.message}</span>
          </Toast>
        )}
      </>
    </ToastContext.Provider>
  )
}

export default ToastProvider
