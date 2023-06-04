import fastify, { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
import config from '../infrastructure/config/config'

interface AuthRoutes {
  routes: FastifyPluginAsync<FastifyPluginOptions>
  prefix: string
}

export default class App {
  public app: FastifyInstance
  public port: number

  constructor(opts: { plugins: Array<FastifyPluginAsync<FastifyPluginOptions>>; routes: AuthRoutes[] }) {
    this.port = parseInt(config.port)
    this.app = fastify({
      logger: true
    })
    this.registerPlugins(opts.plugins)
    this.registerRoutes(opts.routes)
  }

  private registerPlugins(plugins: Array<FastifyPluginAsync<FastifyPluginOptions>>) {
    plugins.forEach((plugin) => {
      this.app.register(plugin)
    })
  }

  private registerRoutes(routes: AuthRoutes[]) {
    routes.forEach((route) => {
      this.app.register(route.routes, { prefix: route.prefix })
    })
  }

  public async start() {
    try {
      await this.app.listen({ port: this.port, host: '0.0.0.0' })
    } catch (err) {
      this.app.log.error(err)
      process.exit(1)
    }
  }
}
