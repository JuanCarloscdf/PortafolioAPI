import { verifyJwt } from '../utils/jwt.handler'
import { JsonWebTokenError } from 'jsonwebtoken'
import { type Response, type NextFunction } from 'express'
import { type RequestExt } from '../types/requestExt'
export const checkAuth = (req: RequestExt, res: Response, next: NextFunction): any => {
  try {
    const auth = req.get('Authorization')
    const token = auth?.split(' ')[1] as string
    const decoded = verifyJwt(token)
    req.userData = decoded
    next()
  } catch (error) {
    console.log('error :>> ', error)
    if (error instanceof JsonWebTokenError) {
      const toSend = {
        message: error.message,
        data: []
      }
      return res.status(404).json(toSend)
    }
    const toSend = {
      message: 'server error',
      data: []
    }
    res.status(500).send(toSend)
  }
}
