import { type Request } from 'express'
import { type Payload } from './login.types'

export interface RequestExt extends Request {
  userData?: Payload
}
