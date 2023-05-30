import { Profile } from '@prisma/client'
import db from '../database/prisma-connection'

export default class ProfileRepository {
  public static async findByUserId(userId: string): Promise<Profile | null> {
    return await db.profile.findUnique({ where: { userId } })
  }
}
