import * as serviceFn from '../services/user.services'
import { type Response, type Request } from 'express'
import { errorHandler } from '../utils/error.handler'
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceResponse = await serviceFn.getUserServ()
    res.send(serviceResponse)
  } catch (error) {
    errorHandler('error geting user', res, error)
  }
}
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceResponse = await serviceFn.getUsersServ()
    res.send(serviceResponse)
  } catch (error) {
    errorHandler('error geting users', res, error)
  }
}
export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceResponse = await serviceFn.postUserServ()
    res.send(serviceResponse)
  } catch (error) {
    errorHandler('error adding user', res, error)
  }
}
