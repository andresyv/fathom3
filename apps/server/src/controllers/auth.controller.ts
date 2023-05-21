import { FastifyReply, FastifyRequest } from 'fastify'

const getProfile = async (_request: FastifyRequest, _reply: FastifyReply) => {
  return { hello: 'world' }
}

export default {
  getProfile
}
