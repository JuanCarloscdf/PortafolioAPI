import { z } from 'zod'

export const userZodSchema = z.object({
  body: z.object({
    first_name: z.string().nonempty('first name is required').min(2),
    last_name: z.string().nonempty('last name is required'),
    email: z.string().nonempty('email is required').email('type a correct email'),
    password: z.string().nonempty('password is required').min(6, 'password too short'),
    cellphone: z.string().nonempty('cellphone is required')
  }).strict()
})

export const userLginSchema = z.object({
  body: z.object({
    email: z.string().nonempty('email is required').email('insert a valid email'),
    password: z.string().nonempty('password is required').min(6, 'password too short'),
    passwordConfirmation: z.string().nonempty('password is required').min(6, 'password too short')
  }).refine((data) => data.password === data.passwordConfirmation, 'password do not match')
})
