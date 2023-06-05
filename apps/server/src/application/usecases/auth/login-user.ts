import UserRepository from '../../../infrastructure/repositories/user.repository'
import { LoginInterface } from '../../../domain/interface/auth.interface'
import SessionManager from '../../crypto/session-manager'
import { NotFoundError } from '../../../domain/entities/errors/not-found.error'

export const loginUser = async ({ email, password }: LoginInterface) => {
  const user = await UserRepository.findByEmail(email)

  if (user === null) {
    throw new NotFoundError('User not found')
  }

  const passwordsMatch = await SessionManager.comparePassword(password, user.password)

  if (!passwordsMatch) {
    throw new Error('Invalid email or password')
  }

  return UserRepository.exclude(user, ['password'])
}
