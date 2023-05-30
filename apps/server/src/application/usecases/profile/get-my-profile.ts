import { Profile } from '@prisma/client'
import ProfileRepository from '../../../infrastructure/repositories/profile.repository'
export const getMyProfile = async (userId: string): Promise<Profile | null> => {
  return await ProfileRepository.findByUserId(userId)
}
