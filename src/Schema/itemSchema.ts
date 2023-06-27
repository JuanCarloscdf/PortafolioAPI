import { z } from 'zod'

export const ItemZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty('name is required'),
    brand: z.string().nonempty('brand is required'),
    price: z.number().positive('price must be positive'),
    discount: z.number().positive('price must be positive').min(0).max(100),
    images: z.string().array(),
    createdBy: z.string().nonempty().min(1)
  })
})
