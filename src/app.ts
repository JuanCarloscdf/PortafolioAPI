import { env } from '../config.env'
import express from 'express'
import { conectToMongo } from './config/mongo'
import { connectToRedis } from './config/redis'
import morgan from 'morgan'
import cors from 'cors'
// import routes
import { router } from './routes/user.routes'

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

app.listen(env.PORT, () => { console.log(`listening on port ${env.PORT}`) })
