import { env } from '../../config.env'
import mongoose from 'mongoose'

const URI: string = env.NODE_MODE === 'test' ? env.URI_TEST_MONGO : env.URI_MONGO
console.log('env.NODE :>> ', URI)

export const conectToMongo = async (): Promise<void> => {
  try {
    const options = {
      authSource: 'admin'
    }
    await mongoose.connect(URI, options)
    console.log('🅲 🅾 🅽 🅽 🅴 🅲 🆃 🅴 🅳  🆃 🅾  🅼 🅾 🅽 🅶 🅾')
  } catch (error) {
    console.log(error)
  }
}
