import * as serviceFn from '../services/user.services'
import { type Response } from 'express'
import { errorHandler } from '../utils/error.handler'
import { type RequestExt } from '../types/requestExt'
export const getUser = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const serviceResponse = await serviceFn.getUserServ(id)
    if (serviceResponse.message === 'mongo error') {
      return res.status(409).json(serviceResponse)
    }
    if (serviceResponse.message === 'server error') {
      return res.status(500).json(serviceResponse)
    }
    res.status(200).send(serviceResponse)
  } catch (error) {
    errorHandler('error geting user', res, error)
  }
}
export const getUsers = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const serviceResponse = await serviceFn.getUsersServ()
    if (serviceResponse.message === 'mongo error') {
      return res.status(409).json(serviceResponse)
    }
    if (serviceResponse.message === 'server error') {
      return res.status(500).json(serviceResponse)
    }
    res.status(200).send(serviceResponse)
  } catch (error) {
    errorHandler('error geting users', res, error)
  }
}
export const postUser = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const newUser = req.body
    const serviceResponse = await serviceFn.postUserServ(newUser)
    if (serviceResponse.message === 'mongo error') {
      return res.status(409).json(serviceResponse)
    }
    console.log(serviceResponse)

    res.status(200).send(serviceResponse)
  } catch (error) {
    errorHandler('error adding user', res, error)
  }
}
export const deleteUser = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const serviceResponse = await serviceFn.deleteUserServ(id)
    if (serviceResponse.message === 'mongo error') {
      return res.status(409).json(serviceResponse)
    }
    if (serviceResponse.message === 'server error') {
      return res.status(500).json(serviceResponse)
    }
    res.status(200).send(serviceResponse)
  } catch (error) {
    errorHandler('error geting users', res, error)
  }
}
