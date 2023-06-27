import { servErrorHandler } from '../utils/services.error.handler'

export const postUploadServ = async (): Promise<any> => {
  try {
    const dbResponst = 'postUploadServ'
    return dbResponst
  } catch (error) {
    servErrorHandler(error)
  }
}
