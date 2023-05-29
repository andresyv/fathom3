import { User } from '@prisma/client'
import db from '../database/prisma-connection'
import type { UserWithoutPassword } from '../../domain/entities/types'

export default class UserRepository {
  public static async save({ email, password }: Pick<User, 'email' | 'password'>) {
    const userName = email.replace(/^(.+)@(.+)$/g, '$1')

    return await db.user.create({
      data: {
        email,
        password,
        profile: {
          create: { userName }
        }
      },
      include: {
        profile: true
      }
    })
  }

  public static async getAll(): Promise<UserWithoutPassword[]> {
    const users = await db.user.findMany()
    return users.map((user) => this.exclude(user, ['password']))
  }

  public static async findByEmail(email: string): Promise<User | null> {
    return await db.user.findUnique({
      where: {
        email
      }
    })
  }

  public static exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
    for (const key of keys) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete user[key]
    }
    return user
  }
}
