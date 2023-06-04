import { Post, User } from '@prisma/client'
import db from '../database/prisma-connection'
import { PaginationInterface } from '../../domain/interface/pagination.interface'

export default class PostRepository {
  public static async save(post: Post): Promise<Post> {
    return await db.post.create({
      data: post
    })
  }

  public static async getAll({ cursor, results }: PaginationInterface): Promise<Post[]> {
    const cursorObj = cursor === null ? undefined : { id: cursor }

    return await db.post.findMany({
      skip: cursorObj == null ? 0 : 1,
      cursor: cursorObj,
      take: results,
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }]
    })
  }

  public static async getById(postId: string): Promise<(Post & { creator: User }) | null> {
    return await db.post.findUnique({
      where: { id: postId },
      include: {
        creator: {
          include: { profile: true }
        }
      }
    })
  }
}
