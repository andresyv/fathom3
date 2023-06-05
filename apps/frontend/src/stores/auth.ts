import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'
import { User, UserSchema } from '../models/user'
import { LoginFormFields, SignUpFields } from '../types'
import authService from '../services/auth'
import { Profile, ProfileSchema } from '../models/profile'
import { usePostsStore } from './posts'

interface AuthState {
  user: User | null
  profile: Profile | null
  login: (form: LoginFormFields) => Promise<User | null>
  signUp: (form: SignUpFields) => Promise<User | null>
  getProfile: () => Promise<Profile | null>
  logout: () => void
  reset: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          user: null,
          profile: null,
          login: async (form) => {
            const user = UserSchema.parse(await authService.login(form))
            set({ user }, false, 'DO_LOGIN')
            return user
          },
          signUp: async (form) => {
            const user = UserSchema.parse(await authService.signup(form))
            set({ user }, false, 'DO_SIGNUP')
            return user
          },
          getProfile: async () => {
            const profile = ProfileSchema.parse(await authService.getMyProfile())
            set({ profile }, false, 'GET_PROFILE')
            return profile
          },
          logout: () => {
            const { reset } = get()
            reset()
          },
          reset: () => {
            set({ user: null }, false, 'RESET')
            sessionStorage.removeItem('auth')
            usePostsStore.getState().reset()
          }
        }
      },
      { name: 'auth', partialize: (state) => ({ user: state.user }), storage: createJSONStorage(() => sessionStorage) }
    )
  )
)
