import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { CreatePostSchema, GetPostByIdSchema, GetPostsSchema } from '../../domain/schemas/post.schema'
import PostController from '../../interface/controllers/post.controller'
import { Post } from '@prisma/client'

async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: () => void) {
  fastify.get('/', { onRequest: fastify.authenticate, schema: GetPostsSchema }, PostController.find)
  fastify.get('/:id', { onRequest: fastify.authenticate, schema: GetPostByIdSchema }, PostController.finById)
  fastify.post<{ Body: Post }>(
    '/',
    { onRequest: fastify.authenticate, schema: CreatePostSchema },
    PostController.create
  )
  done()
}

export default routes
