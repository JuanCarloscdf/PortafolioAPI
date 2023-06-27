import { type Payload, type Login } from '../types/login.types'
import { servErrorHandler } from '../utils/services.error.handler'
import { comparePass } from '../utils/bcrypt.handler'
import User from '../models/user.model'
import { jwtSign } from '../utils/jwt.handler'
export const postLoginServ = async (loginData: Login): Promise<any> => {
  try {
    console.log(loginData)
    const { password, passwordConfirmation, email } = loginData
    const user = await User.findOne({ email })
    console.log('user :>> ', user)
    const toSend = {
      message: '',
      data: null
    }
    if (user == null) {
      toSend.message = 'user not found'
      toSend.data = [] as any
      return toSend
    }
    if (password !== passwordConfirmation) {
      toSend.message = 'passwords do not match'
      toSend.data = [] as any
      return toSend
    }
    const isCorrectPassword = await comparePass(password, user.password)
    if (!isCorrectPassword) {
      toSend.message = 'icorrect password'
      toSend.data = [] as any
      return toSend
    }
    const payload: Payload = {
      first_name: user.first_name,
      email: user.email,
      user_id: user._id
    }
    const token = jwtSign(payload)
    toSend.message = 'login successfully'
    toSend.data = {
      token: `bearer ${token}`,
      user_id: user._id
    } as any
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
