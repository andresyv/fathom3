import { z } from 'zod'

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  userName: z.string(),
  firstname: z.string().optional(),
  lastname: z.string().optional()
})

export type Profile = z.infer<typeof ProfileSchema>
