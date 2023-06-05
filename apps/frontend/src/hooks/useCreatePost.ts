import { useMutation, useQueryClient } from '@tanstack/react-query'
import postService from '../services/posts'
import { useToast } from './useToast'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  const { showToast } = useToast()
  const {
    mutate: createPost,
    isLoading,
    error,
    data
  } = useMutation(postService.createPost, {
    onError: (error: any, _variables) => {
      showToast({
        message: error.message,
        type: 'error'
      })
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['posts']
      })
    }
  })

  return {
    createPost,
    isLoading,
    error,
    post: data
  }
}
