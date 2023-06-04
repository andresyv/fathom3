import UserRepository from '../../../infrastructure/repositories/user.repository'
import PostRepository from '../../../infrastructure/repositories/post.repository'
import { NotFoundError } from '../../../domain/entities/errors/not-found.error'

export const findPostById = async (postId: string) => {
  const post = await PostRepository.getById(postId)
  if (post == null) {
    throw new NotFoundError('Post not found')
  }
  if (post?.creator != null) {
    UserRepository.exclude(post.creator, ['password'])
  }

  return post
}
