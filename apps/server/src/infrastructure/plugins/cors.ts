import fastifyPlugin from 'fastify-plugin'
import cors from '@fastify/cors'

const corsPlugin = fastifyPlugin(async function (fastify, opts) {
  fastify.register(cors, {
    origin: ['http://localhost:5173']
  })
})

export default corsPlugin
