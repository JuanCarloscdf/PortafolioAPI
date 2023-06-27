import express, { Router } from 'express'
import { UPLOAD_DIR } from '../uploads/dir'
const router = Router()
console.log('UPLOAD_DIR :>> ', UPLOAD_DIR)
router.use('/', express.static(UPLOAD_DIR))
export { router }
