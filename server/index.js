const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()

connectDB()

app.use(express.json())
// app.use(express.urlencoded({ extended : false }))


app.use('/api/teachers', require('./routes/teacherRoutes'))

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)
})