import { Router } from 'express'
import * as controllerFn from '../controllers/user.controllers'
import { checkZodSchema } from '../middlewares/checkZodSchema'
import { userZodSchema } from '../Schema/userSchema'
import { checkAuth } from '../middlewares/checkAuth'
const router = Router()

router.get('/:id', controllerFn.getUser)
router.get('/', checkAuth, controllerFn.getUsers)
router.post('/', checkZodSchema(userZodSchema), controllerFn.postUser)
router.delete('/:id', controllerFn.deleteUser)

export { router }
