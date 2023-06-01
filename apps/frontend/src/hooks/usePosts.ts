import { useInfiniteQuery } from '@tanstack/react-query'
import { Post } from '../models/post'
import postService from '../services/posts'

const PAGE_SIZE = 10

export const usePosts = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{
    nextCursor?: string
    posts: Post[]
  }>(
    ['posts'],
    async ({ pageParam }: { pageParam?: string }) =>
      await postService.getPosts({ cursor: pageParam, results: PAGE_SIZE }),
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3
    }
  )

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    posts: data?.pages.flatMap((page) => page.posts) ?? [],
    hasNextPage
  }
}
