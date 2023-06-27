import { MongoError } from 'mongodb'
export const servErrorHandler = (error: any): any => {
  if (error instanceof MongoError) {
    console.log('service error :>> ', error)
    const toSend = {
      message: 'mongo error',
      data: error.message
    }
    return toSend
  }
  const toSend = {
    message: 'server error',
    data: error.message
  }
  console.log('service error :>> ', error)
  return toSend
}
