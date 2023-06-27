import { type Types } from 'mongoose'
export interface Login {
  email: string
  password: string
  passwordConfirmation: string
}

export interface Payload {
  first_name: string
  email: string
  user_id: Types.ObjectId
}
