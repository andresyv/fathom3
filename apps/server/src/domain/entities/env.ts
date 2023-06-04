import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.string().optional().default('8080'),
  ENVIRONMENT: z.string().default('development'),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_URL: z.string(),
  SECRET_KEY: z.string()
})
