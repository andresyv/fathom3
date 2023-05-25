import { FastifyReply, FastifyRequest } from 'fastify'
import { findUsers } from '../../application/usecases/user/find-users'

export default class UserController {
  static async find(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await findUsers()
      return await reply.code(200).send({ message: 'Success', data: users })
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }
}
