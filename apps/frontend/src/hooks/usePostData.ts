import { useQuery } from '@tanstack/react-query'
import postService from '../services/posts'

export const usePostData = (postId?: string) => {
  if (!postId) {
    throw new Error('No id provided')
  }
  return useQuery(['posts', postId], async () => await postService.getPostById(postId))
}
