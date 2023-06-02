import { useEffect, useRef } from 'react'
import { usePosts } from '../hooks/usePosts'
import PostCard from '../components/PostCard'

export default function HomePage() {
  const { isLoading, isError, posts, fetchNextPage } = usePosts()
  const observerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    document.title = '100Anuncios - Publica tu anuncio gratis!'
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          void fetchNextPage()
        }
      },
      {
        rootMargin: '100px'
      }
    )

    if (observerRef.current == null) {
      return
    }

    observer.observe(observerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [isLoading, fetchNextPage])

  if (isError) {
    return <span>Oops... Something went wrong</span>
  }
  return (
    <main className="flex flex-col w-full py-4 px-4 gap-10 items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      {isLoading ? (
        <div>
          <div className="flex space-x-2 animate-bounce items-center justify-center">
            <div className="rounded-full bg-indigo-300 h-2 ease-in-out w-2" />
            <div className="rounded-full bg-indigo-400 h-2 ease-in-out w-2" />
            <div className="rounded-full bg-indigo-300 h-2 ease-in-out w-2" />
          </div>
          <div className="text-center">Loading...</div>
        </div>
      ) : (
        <span ref={observerRef}>.</span>
      )}
    </main>
  )
}
