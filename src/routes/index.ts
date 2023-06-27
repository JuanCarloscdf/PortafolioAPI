import { Router } from 'express'
import { readdirSync } from 'fs'
const router = Router()
const DIR = __dirname

readdirSync(DIR).forEach((filename) => {
  const fixedFileName = filename.split('.')[0]
  if (fixedFileName !== 'index') {
    void import(`./${fixedFileName}.routes`).then((ElementRoute) => {
      router.use(`/${fixedFileName}`, ElementRoute.router)
    })
    console.log(fixedFileName)
  }
})

export { router }
