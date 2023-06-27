import { Schema, model } from 'mongoose'
import { type UserInput } from '../types/user.types'

const userSchema = new Schema<UserInput>({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cellphone: { type: String, unique: true }
}, {
  timestamps: true
})

export default model('User', userSchema)
