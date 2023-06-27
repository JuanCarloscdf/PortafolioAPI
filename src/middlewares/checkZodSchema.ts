import { type Request, type Response, type NextFunction } from 'express'
import { type AnyZodObject, ZodError } from 'zod'

export const checkZodSchema = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    /*     console.log('req.body :>> ', req.body) */
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query
    })
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      console.log('error.issues :>> ', error.issues)
      return res.status(400).json(error.issues.map((item) => { return { message: item.message, data: item.path } }))
    }
    res.status(500).json({ message: 'internal server error' })
  }
}
