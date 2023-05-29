import { User } from '../models/user'
import { LoginFormFields } from '../types'
import customFetch from './custom-fetch'

const BASE_URL = 'http://localhost:8080'

async function login(form: LoginFormFields): Promise<User> {
  const res = await customFetch.fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(form)
  })
  const { user } = await res.json()

  return user
}

const authService = {
  login
}

export default authService
