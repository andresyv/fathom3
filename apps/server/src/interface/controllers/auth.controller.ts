import dayjs from 'dayjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UserInterface } from '../../domain/interface/user.interface'
import { loginUser } from '../../application/usecases/auth/login-user'
import { createUser } from '../../application/usecases/auth/create-user'

export default class AuthController {
  static async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password } = request.body as UserInterface
      const user = await loginUser({ email, password })
      const token = await reply.jwtSign(user)

      reply.setCookie('api-auth', token, {
        secure: false,
        httpOnly: true,
        expires: dayjs().add(7, 'days').toDate()
      })
      return { message: 'login success', data: user, token }
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }

  static async signup(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password } = request.body as UserInterface
      const user = await createUser({ email, password })

      const token = await reply.jwtSign(user)
      reply.setCookie('api-auth', token, {
        secure: false,
        httpOnly: true,
        expires: dayjs().add(7, 'days').toDate()
      })

      return { message: 'Success', data: user }
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }
}
