import { Router } from 'express'
import * as fn from '../controllers/project.controllers'
import { checkZodSchema } from '../middlewares/checkZodSchema'
import { ProjectZodSchema } from '../Schema/projectSchema'
import { checkAuth } from '../middlewares/checkAuth'
const router = Router()
router.get('/:id', fn.getProject)
router.get('/', fn.getProjects)
router.post('/', checkAuth, checkZodSchema(ProjectZodSchema), fn.postProject)
router.put('/:id', fn.putProject)
router.delete('/:id', fn.deleteProject)
export { router }
