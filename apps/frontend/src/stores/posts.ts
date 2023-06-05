import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'
import { Post } from '../models/post'

interface PostsState {
  savedPosts: Post[]
  savePost: (post: Post) => void
  postIsSaved: (postId: string) => boolean
  reset: () => void
}

export const usePostsStore = create<PostsState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          savedPosts: [],
          savePost: (post) => {
            const { postIsSaved } = get()
            if (postIsSaved(post.id)) {
              set((state) => ({
                savedPosts: state.savedPosts.filter((p) => p.id !== post.id)
              }))
            } else {
              set((state) => ({ savedPosts: [...state.savedPosts, post] }))
            }
          },
          postIsSaved: (postId) => {
            const { savedPosts } = get()
            return savedPosts.some((post) => post.id === postId)
          },
          reset() {
            set({ savedPosts: [] })
            localStorage.removeItem('posts')
          }
        }
      },
      {
        name: 'posts',
        partialize: (state) => ({ savedPosts: state.savedPosts }),
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)
