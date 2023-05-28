import { LoginFormFields } from '../types'
import customFetch from './custom-fetch'

const BASE_URL = 'http://localhost:8080'

export async function login(form: LoginFormFields) {
  try {
    const res = await customFetch.fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(form)
    })
    const { token } = await res.json()
    if (token) {
      customFetch.setToken(token)
    }
  } catch (e) {
    console.log(e)
  }
}
