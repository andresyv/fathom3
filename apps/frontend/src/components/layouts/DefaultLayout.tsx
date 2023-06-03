import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuthStore } from '../../stores/auth'
import { MdOutlineLogout as LogoutIcon, MdCreate as CreateIcon } from 'react-icons/md'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const getProfile = useAuthStore((state) => state.getProfile)
  const navigate = useNavigate()

  useEffect(() => {
    getProfile()
  }, [getProfile])

  const onCreate = () => {
    navigate('/post/create')
  }

  return (
    <>
      <header className="bg-white border-b flex border-gray-100 h-[64px] px-6 top-0 justify-between items-center sticky">
        <span className="cursor-pointer font-bold text-lg text-indigo-500" onClick={() => navigate('/')}>
          100Anuncios
        </span>
        <div className="flex gap-4">
          <Button sm onClick={onCreate}>
            <CreateIcon />
            Publicar
          </Button>
          <Button variant="neutral" sm>
            <LogoutIcon />
          </Button>
        </div>
      </header>
      {children}
      <footer className="bg-white border-b flex border-gray-100 h-[64px] px-6 items-center justify-between">
        footer
      </footer>
    </>
  )
}

export default DefaultLayout
