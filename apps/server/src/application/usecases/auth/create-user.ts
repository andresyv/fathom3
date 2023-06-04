import SessionManager from '../../crypto/session-manager'
import UserRepository from '../../../infrastructure/repositories/user.repository'
import { UserInterface } from '../../../domain/interface/user.interface'

export const createUser = async ({ email, password }: Pick<UserInterface, 'email' | 'password'>) => {
  const existingUser = await UserRepository.findByEmail(email)

  if (existingUser != null) {
    throw new Error('Email already exist!')
  }
  const _password = await SessionManager.hashPassword(password)
  const user = await UserRepository.save({ email, password: _password })
  UserRepository.exclude(user, ['password'])
  return user
}
