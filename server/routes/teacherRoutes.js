const express = require('express')
const router = express.Router()
const { regTeacher, loginTeacher, getMe } = require('../controllers/teacherController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', regTeacher)
router.post('/login', loginTeacher)
router.get('/me', protect, getMe)

module.exports = router