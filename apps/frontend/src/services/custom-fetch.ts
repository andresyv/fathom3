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
        headers: { ...options?.headers, ...defaultHeaders, mode: 'cors' },
        credentials: 'include',
        ...options
      })

      const response = await this.#originalFetch(req)

      if (response.status === 401) {
        sessionStorage.removeItem('auth')
      }

      return response
    }
  }
}

export default new CustomFetch()
