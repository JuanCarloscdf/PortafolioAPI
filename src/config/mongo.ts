import { env } from '../../config.env'
import mongoose from 'mongoose'

export const conectToMongo = async (): Promise<void> => {
  try {
    const URI = env.URI_MONGO
    const options = {
      authSource: 'admin'
    }
    await mongoose.connect(URI, options)
    console.log('🅲 🅾 🅽 🅽 🅴 🅲 🆃 🅴 🅳  🆃 🅾  🅼 🅾 🅽 🅶 🅾')
  } catch (error) {
    console.log(error)
  }
}
