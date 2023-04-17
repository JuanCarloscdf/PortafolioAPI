import 'dotenv/config'
import { type Env } from './src/types/env.types'
export const env: Env = {
  PORT: process.env.PORT ?? '3200',
  URI_MONGO: process.env.URI_MONGO ?? 'mongodb://user:password@localhost:27017/nodeApi'
}
