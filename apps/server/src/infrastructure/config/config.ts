import { envSchema } from '../../domain/entities/env'

const env = envSchema.parse(process.env)

export default { port: env.PORT, environment: env.ENVIRONMENT, POSTGRES_PASSWORD: env.POSTGRES_PASSWORD }
