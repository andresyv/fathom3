const allowedOrigins = ['localhost:5173']

const defaultHeaders = {
  'Content-Type': 'application/json'
}
const sessionKey = 'fathom-auth-token'

class CustomFetch {
  #token?: string
  fetch: typeof window.fetch
  #originalFetch: typeof window.fetch

  constructor() {
    this.#originalFetch = window.fetch.bind(window)
    this.#loadToken()
    this.fetch = async (resource, options) => {
      const req = new Request(resource, {
        headers: { ...options?.headers, ...defaultHeaders, mode: 'cors' },
        ...options
      })
      const destOrigin = new URL(req.url).origin
      if (!this.#token) {
        this.#loadToken()
      }
      if (this.#token && allowedOrigins.includes(destOrigin)) {
        req.headers.set('Authorization', this.#token)
      }
      return await this.#originalFetch(req)
    }
  }

  setToken(token?: string) {
    if (token) {
      this.#token = token
      sessionStorage.setItem(sessionKey, token)
    }
  }

  #loadToken() {
    const token = sessionStorage.getItem(sessionKey)
    if (token) {
      this.#token = token
    }
  }
}

export default new CustomFetch()
