import { z } from 'zod'

export const ProjectZodSchema = z.object({
  body: z.object({
    userId: z.string().nonempty('userId is required').min(6),
    gitLink: z.string().nonempty('getLink is required').min(6),
    cards: z.array(z.object({
      title: z.string(),
      description: z.string(),
      img: z.string()
    })).min(1).nonempty('cards is required')
  })
})
