import { errorHandler } from '../utils/error.handler'
import { postUploadServ } from '../services/upload.services'
import { type Request, type Response } from 'express'
import { env } from '../../config.env'
export const postUpload = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log(req.file)
    const filename = req.file?.filename as string
    const url = `http://localhost:${env.PORT}/public/${filename}`
    console.log('url :>> ', url)
    const servResponse = await postUploadServ()
    res.send(url)
  } catch (error) {
    errorHandler('post upload error', res, error)
  }
}
