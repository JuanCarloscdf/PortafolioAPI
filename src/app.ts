import { env } from '../config.env'
import express from 'express'
import { conectToMongo } from './config/mongo'
import { connectToRedis } from './config/redis'
import morgan from 'morgan'
import cors from 'cors'
import { swaggerDocs } from './config/swagger'
// import routes
import { router } from './routes'

// conenct to databases
void connectToRedis()
void conectToMongo()

// express config
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// routes
app.use(router)
// 404

// listenner
const server = app.listen(env.PORT, () => {
  console.log(`listening on port ${env.PORT}`)
  swaggerDocs(app)
})

export { app, server }
