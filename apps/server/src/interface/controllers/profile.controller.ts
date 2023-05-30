import { FastifyReply, FastifyRequest } from 'fastify'
import { getMyProfile } from '../../application/usecases/profile/get-my-profile'

export default class ProfileController {
  static async getProfile(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.user
      const profile = await getMyProfile(id)
      return await reply.code(200).send({ message: 'success', data: profile })
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }
}
