import { User } from '@prisma/client'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: () => void
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { id: string } // payload type is used for signing and verifying
    user: {
      id: string
      name: string
      email: string
    } // user type is return type of `request.user` object
  }
}

export type UserWithoutPassword = Omit<User, 'password'>
