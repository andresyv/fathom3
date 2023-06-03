import { Post } from '../models/post'
import { CreatePostFormType } from '../types'
import customFetch from './custom-fetch'

const BASE_URL = 'http://localhost:8080'

async function getPosts({
  cursor,
  results
}: {
  cursor?: string
  results: number
}): Promise<{ posts: Post[]; nextCursor?: string }> {
  const url = new URL(`${BASE_URL}/posts/`)
  url.searchParams.set('results', `${results}`)
  if (cursor) {
    url.searchParams.set('cursor', cursor)
  }
  const res = await customFetch.fetch(url)
  const { data, nextCursor } = await res.json()
  return { posts: data, nextCursor }
}

async function createPost(form: CreatePostFormType): Promise<Post> {
  const res = await customFetch.fetch(`${BASE_URL}/posts/`, {
    method: 'POST',
    body: JSON.stringify(form)
  })

  const { data } = await res.json()
  return data
}

const postService = {
  getPosts,
  createPost
}

export default postService
