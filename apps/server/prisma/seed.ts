import { Post, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const amountOfPost = 10

async function main() {
  await prisma.post.deleteMany()
  const users = await prisma.user.findMany()
  const postPromises: Array<Promise<Post>> = []

  users.forEach((user) => {
    for (let i = 0; i < amountOfPost; i++) {
      postPromises.push(
        prisma.post.create({
          data: {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            creatorId: user.id,
            picture: faker.image.urlLoremFlickr({ category: 'abstract' })
          }
        })
      )
    }
  })

  await Promise.all(postPromises)
}

main().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})
