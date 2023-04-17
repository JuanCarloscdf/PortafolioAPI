import { createClient } from 'redis'
export const connectToRedis = async (): Promise<void> => {
  try {
    const redisClient = createClient({
      url: 'redis://default:yourpassword@localhost:6379'
    })
    redisClient.on('error', err => { console.log('Redis Client Error', err) })
    await redisClient.connect()
    console.log('🅒 🅞 🅝 🅝 🅔 🅒 🅣 🅔 🅓  🅣 🅞  🅡 🅔 🅓 🅘 🅢')
  } catch (error) {
    console.log(error)
  }
}
