import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuthStore } from '../../stores/auth'
import { MdOutlineLogout as LogoutIcon } from 'react-icons/md'
import Button from '../Button'

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const getProfile = useAuthStore((state) => state.getProfile)

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <>
      <header className="bg-white border-b flex border-gray-100 h-[64px] px-6 top-0 justify-between items-center sticky">
        <span className="font-bold text-lg text-indigo-500">100Anuncios</span>
        <Button variant="neutral" sm>
          <LogoutIcon />
        </Button>
      </header>
      {children}
      <footer className="bg-white border-b flex border-gray-100 h-[64px] px-6 items-center justify-between">
        footer
      </footer>
    </>
  )
}

export default DefaultLayout
