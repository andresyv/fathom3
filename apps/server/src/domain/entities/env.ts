import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.number().optional().default(8080),
  ENVIRONMENT: z.string().default('development'),
  POSTGRES_PASSWORD: z.string().optional(),
  POSTGRES_URL: z.string().optional()
})