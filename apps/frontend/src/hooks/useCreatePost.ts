import { useMutation, useQueryClient } from '@tanstack/react-query'
import postService from '../services/posts'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  const {
    mutate: createPost,
    isLoading,
    error
  } = useMutation(postService.createPost, {
    onError: (error, _variables) => {
      console.log(error)
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
    error
  }
}
