import { Router } from 'express'
import * as controllerFn from '../controllers/user.controllers'
const router = Router()

router.get('/user/:id', controllerFn.getUser)
router.get('/user', controllerFn.getUsers)
router.post('/user', controllerFn.postUser)

export { router }
