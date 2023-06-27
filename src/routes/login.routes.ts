import { Router } from 'express'
import { postLogin } from '../controllers/login.controllers'
import { userLginSchema } from '../Schema/userSchema'
import { checkZodSchema } from '../middlewares/checkZodSchema'
const router = Router()
/**
 * @swagger
 * /login:
 *  post:
 *   summary: login
 *   requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *             type: string
 *            password:
 *             type: string
 *            passwordConfirmation:
 *             type: string
 *   responses:
 *     '200':
 *       description: ok
 *     '400':
 *       description: bad request
 *     '500':
 *       description: server error
 */
router.post('/', checkZodSchema(userLginSchema), postLogin)
export { router }
