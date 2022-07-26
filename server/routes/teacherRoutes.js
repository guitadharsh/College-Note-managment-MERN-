const express = require('express')
const router = express.Router()
const { regTeacher, loginTeacher, getMe, noteUpload } = require('../controllers/teacherController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', regTeacher)
router.post('/login', loginTeacher)
router.get('/me', protect, getMe)
router.post('/noteUpload' ,noteUpload)

module.exports = router