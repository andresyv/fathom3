import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuthStore } from '../../stores/auth'

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const getProfile = useAuthStore((state) => state.getProfile)

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <>
      <header className="border-b flex border-gray-100 h-[64px] px-6 top-0 justify-between items-center sticky">
        <span className="font-bold text-lg">100Anuncios</span>
        <button>logout</button>
      </header>
      {children}
      <footer className="border-b flex border-gray-100 h-[64px] px-6 bottom-0 items-center justify-between sticky">
        footer
      </footer>
    </>
  )
}

export default DefaultLayout
