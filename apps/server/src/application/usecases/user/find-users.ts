import UserRepository from '../../../infrastructure/repositories/user.repository'
import { UserWithoutPassword } from '../../../domain/entities/types'

export const findUsers = async (): Promise<UserWithoutPassword[]> => {
  return await UserRepository.getAll()
}
