import { envSchema } from '../entities/schemas/env.schema'

const env = envSchema.parse(process.env)

export default { port: env.PORT, environment: env.ENVIRONMENT }
