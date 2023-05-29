import fastifyPlugin from 'fastify-plugin'
import cookie from '@fastify/cookie'

const CookiesPlugin = fastifyPlugin(async function (fastify, opts) {
  fastify.register(cookie, {
    secret: 'supersecret', // for cookies signature
    parseOptions: {}
  })
})

export default CookiesPlugin
