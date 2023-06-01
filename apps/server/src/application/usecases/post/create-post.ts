import { Post } from '@prisma/client'
import PostRepository from '../../../infrastructure/repositories/post.repository'

export const createPost = async (post: Post): Promise<Post> => {
  return await PostRepository.save(post)
}
