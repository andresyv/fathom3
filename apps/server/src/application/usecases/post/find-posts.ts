import { PaginationInterface } from '../../../domain/interface/pagination.interface'
import PostRepository from '../../../infrastructure/repositories/post.repository'
import { Post } from '@prisma/client'

export const findPosts = async (opts: PaginationInterface): Promise<Post[]> => {
  return await PostRepository.getAll(opts)
}
