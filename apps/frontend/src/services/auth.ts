import { Profile } from '../models/profile'
import { User } from '../models/user'
import { LoginFormFields, SignUpFields } from '../types'
import customFetch from './custom-fetch'

const BASE_URL = import.meta.env.VITE_API_URL

async function login(form: LoginFormFields): Promise<User> {
  const res = await customFetch.fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(form)
  })
  const { data } = await res.json()
  return data
}

async function signup(form: SignUpFields): Promise<User> {
  const res = await customFetch.fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(form)
  })
  const { data } = await res.json()
  return data
}

async function getMyProfile(): Promise<Profile> {
  const res = await customFetch.fetch(`${BASE_URL}/profile`, {
    method: 'GET'
  })
  const { data } = await res.json()
  return data
}

const authService = {
  login,
  signup,
  getMyProfile
}

export default authService
