const defaultHeaders = {
  'Content-Type': 'application/json'
}

class CustomFetch {
  fetch: typeof window.fetch
  #originalFetch: typeof window.fetch

  constructor() {
    this.#originalFetch = window.fetch.bind(window)

    this.fetch = async (resource, options) => {
      const req = new Request(resource, {
        headers: { ...options?.headers, ...defaultHeaders },
        ...options,
        credentials: 'include',
        mode: 'cors'
      })

      const response = await this.#originalFetch(req)

      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem('auth')
          localStorage.removeItem('posts')
          if (!window.location.href.includes('/auth/login')) {
            window.location.href = '/auth/login'
          }
        }
        const error = await response.json()
        return await Promise.reject(error)
      }

      return response
    }
  }
}

export default new CustomFetch()
