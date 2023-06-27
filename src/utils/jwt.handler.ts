import { sign, verify } from 'jsonwebtoken'
import { type Payload } from '../types/login.types'
import { env } from '../../config.env'
export const jwtSign = (payload: Payload): string => {
  const token = sign(payload, env.JWT_KEY, { expiresIn: 60 * 60 * Number(env.JWT_TIME) })
  return token
}

export const verifyJwt = (token: string): Payload => {
  const decoded = verify(token, env.JWT_KEY) as Payload
  return decoded
}
