export interface UserInput {
  first_name: string
  last_name: string
  email: string
  password: string
  cellphone: string
}

export interface UserDocument extends UserInput {
  _id?: string
  createdAt: Date
  updatedAt: Date
}
