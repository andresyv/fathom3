import { Post } from './models/post'

export interface LoginFormFields {
  email: string
  password: string
}

export type CreatePostFormType = Pick<Post, 'title' | 'description' | 'price' | 'picture' | 'creatorId'>
