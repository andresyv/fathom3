import { FastifyReply, FastifyRequest } from 'fastify'
import { findPosts } from '../../application/usecases/post/find-posts'
import { createPost } from '../../application/usecases/post/create-post'
import { Post } from '@prisma/client'
import { PaginationInterface } from '../../domain/interface/pagination.interface'
import { findPostById } from '../../application/usecases/post/find-post-by-id'

export default class PostController {
  static async find(request: FastifyRequest, reply: FastifyReply) {
    try {
      const query = request.query as PaginationInterface
      const cursor = query.cursor ?? null
      const results = query.results ?? 20

      const posts = await findPosts({ cursor, results })
      const nextCursor = posts.length === results ? posts[posts.length - 1].id : undefined
      return await reply.code(200).send({ message: 'success', data: posts, nextCursor })
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }

  static async finById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string }
      const post = await findPostById(id)

      return await reply.code(200).send({ message: 'success', data: post })
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }

  static async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const form = request.body as Post
      const post = await createPost(form)
      return await reply.code(200).send({ message: 'success', data: post })
    } catch (e: any) {
      return await reply.code(500).send({ message: e.message })
    }
  }
}
