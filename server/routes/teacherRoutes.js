const express = require('express')
const router = express.Router()
const { regTeacher, loginTeacher, getMe } = require('../controllers/teacherController')

router.post('/', regTeacher)
router.post('/login', loginTeacher)
router.get('/me', getMe)

module.exports = router