import { z } from 'zod'
import { ProfileSchema } from './profile'

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isActive: z.boolean()
})

export const UserWithProfileSchema = UserSchema.extend({
  profile: ProfileSchema
})

export type User = z.infer<typeof UserSchema>
export type UserWithProfile = z.infer<typeof UserWithProfileSchema>
