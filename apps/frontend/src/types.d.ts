import { Post } from './models/post'

export interface LoginFormFields {
  email: string
  password: string
}

export interface SignUpFields {
  email: string
  password: string
  repeatPassword: string
}

export type CreatePostFormType = Pick<Post, 'title' | 'description' | 'price' | 'picture' | 'creatorId'>
