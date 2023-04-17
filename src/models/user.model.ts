import { Schema, model } from 'mongoose'
import { type User } from '../types/user.types'

const userSchema = new Schema<User>({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  password: { type: String },
  cellphone: { type: String }
}, {
  timestamps: true
})

export default model('User', userSchema)
