import { useEffect } from 'react'
import { usePosts } from '../hooks/usePosts'

export default function HomePage() {
  const { isLoading, isError, posts, fetchNextPage, hasNextPage } = usePosts()

  useEffect(() => {
    console.log(posts)
  }, [posts])

  const onLoadMore = () => {
    console.log('entroo')
    void fetchNextPage()
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Oops... Something went wrong</span>
  }
  return (
    <main className="flex flex-col h-main w-full">
      <h1>Home</h1>
      {posts.join(',')}
      <button onClick={onLoadMore} disabled={!hasNextPage}>
        load more
      </button>
    </main>
  )
}
