import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isActive: z.boolean()
})

export type User = z.infer<typeof UserSchema>
