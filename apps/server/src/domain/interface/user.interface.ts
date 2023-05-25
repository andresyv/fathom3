export interface UserInterface {
  id: string
  email: string
  password: string
  createdAt: Date
  updatedAt?: Date
  isActive: boolean
  profile?: unknown
}
