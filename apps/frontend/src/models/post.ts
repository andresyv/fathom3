import { z } from 'zod'

export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(4),
  description: z.string().min(4),
  creatorId: z.string().uuid(),
  price: z.number().optional(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  isArchived: z.boolean()
})

export type Post = z.infer<typeof PostSchema>
