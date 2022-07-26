const express = require('express')
const router = express.Router()
const noteDownload = require('../controllers/studentController')

router.post('/noteDownload', (req,res)=>{noteDownload})

module.exports = router;