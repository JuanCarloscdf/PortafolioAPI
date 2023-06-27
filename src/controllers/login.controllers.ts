import { type Response, type Request } from 'express'
import { errorHandler } from '../utils/error.handler'
import { postLoginServ } from '../services/login.services'
export const postLogin = async (req: Request, res: Response): Promise<any> => {
  try {
    const loginData = req.body
    const serviceResponse = await postLoginServ(loginData)

    console.log('object :>> ', serviceResponse)
    if (serviceResponse.message === 'mongo error') {
      return res.status(409).json(serviceResponse)
    }
    if (serviceResponse.message === 'server error') {
      return res.status(500).json(serviceResponse)
    }
    if (serviceResponse.message === 'user not found') {
      return res.status(404).json(serviceResponse)
    }
    if (serviceResponse.message === 'passwords do not match') {
      return res.status(400).json(serviceResponse)
    }
    if (serviceResponse.message === 'icorrect password') {
      return res.status(400).json(serviceResponse)
    }
    res.status(200).send(serviceResponse)
  } catch (error) {
    errorHandler('session error', res, error)
  }
}
