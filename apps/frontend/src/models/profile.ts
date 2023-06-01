import { z } from 'zod'

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  userName: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable()
})

export type Profile = z.infer<typeof ProfileSchema>
