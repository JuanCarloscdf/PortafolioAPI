import { Router } from 'express'
import * as fn from '../controllers/upload.controllers'
import multer from 'multer'
import { UPLOAD_DIR } from '../uploads/dir'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    console.log('dasdasda', file)
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage })

const router = Router()
router.post('/', upload.single('myFile'), fn.postUpload)
export { router }
