import { type Response } from 'express'
export const errorHandler = (msg: string, res: Response, error?: any): any => {
  res.status(500).json({
    message: msg,
    error
  })
}
