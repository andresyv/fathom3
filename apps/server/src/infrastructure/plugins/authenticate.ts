import fastifyPlugin from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'
import { FastifyReply, FastifyRequest } from 'fastify'

const AuthenticatePlugin = fastifyPlugin(async function (fastify, opts) {
  fastify.register(fastifyJwt, {
    secret: 'supersecret',
    cookie: {
      cookieName: 'api-auth',
      signed: false
    }
  })

  fastify.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})

export default AuthenticatePlugin
