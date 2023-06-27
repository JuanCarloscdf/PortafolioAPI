import { hash, compare, genSalt } from 'bcryptjs'

export const hashPass = async (password: string): Promise<string> => {
  const salt = await genSalt(10)
  const hashPass = await hash(password, salt)
  return hashPass
}

export const comparePass = async (password: string, hashPass: string): Promise<boolean> => {
  const isCorrect = await compare(password, hashPass)
  return isCorrect
}
