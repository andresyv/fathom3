import { FastifyReply, FastifyRequest } from 'fastify'
import { getMyProfile } from '../../application/usecases/profile/get-my-profile'

export default class ProfileController {
  static async getProfile(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user
    const profile = await getMyProfile(id)

    if (profile == null) {
      reply.code(401).send({ message: 'unauthorized' })
    }
    return { message: 'success', data: profile }
  }
}
