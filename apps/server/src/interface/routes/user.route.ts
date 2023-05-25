import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import UserController from '../controllers/user.controller'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: () => void) {
  fastify.get('/', { onRequest: fastify.authenticate }, UserController.find)
  done()
}

export default routes
