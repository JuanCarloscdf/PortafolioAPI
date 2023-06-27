import { type Response } from 'express'
export const errorHandler = (msg: string, res: Response, error?: any): any => {
  return res.status(500).json({
    message: msg,
    error
  })
}
