import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import AuthController from '../../interface/controllers/auth.controller'
import { UserInterface } from '../../domain/interface/user.interface'
import { LoginSchema, SignupSchema } from '../../domain/schemas/auth.schema'
import { LoginInterface } from '../../domain/interface/auth.interface'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: () => void) {
  fastify.post<{ Body: LoginInterface }>('/login', { schema: LoginSchema }, AuthController.login)
  fastify.post<{ Body: UserInterface }>('/signup', { schema: SignupSchema }, AuthController.signup)
  done()
}

export default routes
