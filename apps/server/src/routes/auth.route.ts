import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import authController from '../controllers/auth.controller'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: () => void) {
  fastify.get('/profile', authController.getProfile)
  done()
}

export default routes
