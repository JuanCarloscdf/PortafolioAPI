import { type UserInput } from '../types/user.types'
import User from '../models/user.model'
import { hashPass } from '../utils/bcrypt.handler'
import { servErrorHandler } from '../utils/services.error.handler'
// 🅶🅴🆃 🆄🆂🅴🆁 🅳🅰🆃🅰
export const getUserServ = async (id: string): Promise<any> => {
  try {
    const dbResponse = await User.findById(id)
    const toSend = {
      message: 'user data obtained',
      data: dbResponse
    }
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
// 🅶🅴🆃 🆄🆂🅴🆁🆂 🅳🅰🆃🅰
export const getUsersServ = async (): Promise<any> => {
  try {
    const dbResponse = await User.find({})
    const toSend = {
      message: 'obtained users',
      data: dbResponse
    }
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
/* 🅲🆁🅴🅰🆃🅴 🆄🆂🅴🆁 */
export const postUserServ = async (newUser: UserInput): Promise<any> => {
  try {
    const hashedPass = await hashPass(newUser.password)
    newUser.password = hashedPass
    const dbResponse = await User.create(newUser)
    const toSend = {
      message: 'user added',
      data: dbResponse
    }
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
// 🅳🅴🅻🅴🆃🅴 🆄🆂🅴🆁
export const deleteUserServ = async (id: string): Promise<any> => {
  try {
    const dbResponse = await User.findByIdAndDelete(id)
    const toSend = {
      message: 'user deleted',
      data: dbResponse
    }
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
