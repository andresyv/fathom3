import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import ProfileController from '../controllers/profile.controller'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: () => void) {
  fastify.get('/', { onRequest: fastify.authenticate }, ProfileController.getProfile)
  done()
}

export default routes
