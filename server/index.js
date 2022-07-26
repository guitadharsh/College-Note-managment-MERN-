const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')

connectDB()

app.use(express.json())
app.use(cors());
// app.use(express.urlencoded({ extended : false }))


app.use('/api/teachers', require('./routes/teacherRoutes'))
app.use('api/students', require('./routes/studentRoutes'))

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)
})