import { FC, PropsWithChildren, useEffect, Fragment } from 'react'
import { useAuthStore } from '../../stores/auth'
import {
  MdOutlineLogout as LogoutIcon,
  MdCreate as CreateIcon,
  MdOutlineAccountCircle as AccountIcon
} from 'react-icons/md'
import { IoLogoTwitter as TwitterIcon, IoLogoLinkedin as LinkedInIcon } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const getProfile = useAuthStore((state) => state.getProfile)
  const profile = useAuthStore((state) => state.profile)
  const logout = useAuthStore((state) => state.logout)
  const resetAuthStore = useAuthStore((state) => state.reset)

  useEffect(() => {
    if (!profile) {
      getProfile()
    }
  }, [getProfile, profile])

  const onSignOut = () => {
    logout()
    resetAuthStore()
    navigate('/')
  }

  return (
    <>
      <header className="bg-white border-b flex border-gray-100 h-[64px] px-6 top-0 justify-between items-center sticky">
        <Link className="cursor-pointer font-bold text-lg text-indigo-500" to="/">
          100Anuncios
        </Link>
        <div className="flex gap-4">
          <Link
            className="rounded-lg flex font-semibold bg-indigo-500 h-[40px] text-white p-2 gap-2 items-center"
            to="/post/create"
          >
            <CreateIcon className="h-4 w-4" />
            Publish
          </Link>
          <Menu as="div" className="flex text-left relative items-center">
            <div>
              <Menu.Button className="border rounded-lg flex border-gray-200 h-[40px] p-2 gap-2 items-center">
                <AccountIcon className="h-6 text-indigo-500 w-6" />
                {profile ? `${profile.userName}` : 'unknown'}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="ul"
                className="divide-y bg-white rounded-lg rounded-md divide-gray-100 shadow-lg ring-black mt-2 origin-top-right top-6 right-0 ring-1 ring-opacity-5 w-56 absolute focus:outline-none"
              >
                <div className="py-1 px-1 ">
                  <Menu.Item as="li" className="rounded-lg flex py-2 px-4 gap-2 items-center hover:bg-gray-100">
                    <Link className="flex gap-2 items-center w-full" to="/profile">
                      <AccountIcon />
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="rounded-lg flex py-2 px-4 gap-2 items-center hover:bg-gray-100"
                    onClick={onSignOut}
                  >
                    <LogoutIcon />
                    Sign out
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      {children}
      <footer className="bg-white border-b text-gray-400 flex border-gray-100 h-[64px] px-6 items-center justify-between">
        <span className="font-semibold">100Anuncios</span>
        <span>© {new Date().getFullYear()}</span>
        <div className="flex gap-4">
          <a href="#">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href="#">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default DefaultLayout
