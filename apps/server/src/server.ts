import Dotenv from 'dotenv'
import App from './app'
import Routes from './routes'

Dotenv.config()

const app = new App({ routes: Routes, plugins: [] })

app.start()

// fastify.register(authController, { prefix: 'auth' })
