import { z } from 'zod'

export const UserValidator = z.object({
  id: z.string().uuid({ message: 'Invalid UUID' }),
  email: z.string().email({ message: 'Invalid email address' }).toLowerCase(),
  password: z.string().min(6, { message: 'Must be 6 or more characters long' }),
  createdAt: z.date(),
  updatedAt: z.date()
})

export type User = z.infer<typeof UserValidator>
