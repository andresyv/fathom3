import { Profile } from '../models/profile'
import { User } from '../models/user'
import { LoginFormFields } from '../types'
import customFetch from './custom-fetch'

const BASE_URL = 'http://localhost:8080'

async function login(form: LoginFormFields): Promise<User> {
  const res = await customFetch.fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(form)
  })
  const { data } = await res.json()
  getMyProfile()
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
  getMyProfile
}

export default authService
