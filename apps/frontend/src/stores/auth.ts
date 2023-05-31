import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'
import { User } from '../models/user'
import { LoginFormFields } from '../types'
import authService from '../services/auth'

interface AuthState {
  user: User | null
  login: (form: LoginFormFields) => Promise<User | null>
  reset: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => {
        return {
          user: null,
          login: async (form) => {
            const user = await authService.login(form)
            set({ user }, false, 'DO_LOGIN')
            return user
          },
          reset: () => {
            set({ user: null }, false, 'RESET')
          }
        }
      },
      { name: 'auth', storage: createJSONStorage(() => sessionStorage) }
    )
  )
)