import 'dotenv/config'
import { type Env } from './src/types/env.types'
export const env: Env = {
  PORT: process.env.PORT ?? '3200',
  URI_MONGO: process.env.URI_MONGO ?? 'mongodb://user:password@localhost:27017/nodeApi',
  URI_TEST_MONGO: process.env.URI_TEST_MONGO ?? 'mongodb://user:password@localhost:27017/test',
  NODE_MODE: process.env.NODE_MODE ?? 'dev',
  JWT_KEY: process.env.JWT_KEY ?? 'security key',
  JWT_TIME: process.env.JWT_TIME ?? '24'
}
