import { z } from 'zod'
import { UserWithProfileSchema } from './user'

export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(4),
  description: z.string().min(4),
  creatorId: z.string().uuid(),
  price: z.number().optional(),
  picture: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  isArchived: z.boolean()
})

export const PostWithCreatorSchema = PostSchema.extend({
  creator: UserWithProfileSchema
})

export type Post = z.infer<typeof PostSchema>
export type PostWithCreator = z.infer<typeof PostWithCreatorSchema>
