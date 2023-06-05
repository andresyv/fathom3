import type { FC, PropsWithChildren } from 'react'

const Toast: FC<PropsWithChildren & { type: 'success' | 'error' }> = ({ children, type = 'success' }) => {
  return (
    <div className="bg-white rounded-xl flex font-semibold h-24 shadow-xl text-black px-6 right-12 bottom-12 w-96 z-50 gap-2 fixed items-center">
      {type === 'success' ? '✅' : '❌'}
      {children}
    </div>
  )
}

export default Toast
