import { FastifyReply, FastifyRequest } from 'fastify'
import { getMyProfile } from '../../application/usecases/profile/get-my-profile'
import { NotFoundError } from '../../domain/entities/errors/not-found.error'

export default class ProfileController {
  static async getProfile(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user
    const profile = await getMyProfile(id)

    if (profile == null) {
      throw new NotFoundError('Profile not found')
    }
    return { message: 'success', data: profile }
  }
}
