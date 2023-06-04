import fastifyPlugin from 'fastify-plugin'
import cookie from '@fastify/cookie'
import config from '../config/config'

const CookiesPlugin = fastifyPlugin(async function (fastify, opts) {
  fastify.register(cookie, {
    secret: config.SECRET_KEY, // for cookies signature
    parseOptions: {
      path: '/'
    }
  })
})

export default CookiesPlugin
