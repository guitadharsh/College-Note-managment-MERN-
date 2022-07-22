// const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const teacherReg = require('../models/teacherModel')


// @desc Register new user
// @route POST /api/teachers
// @access Public
const regTeacher = asyncHandler( async (req, res)=> {
    const { name, email, password } = req.body
    // to verify its correct details
    if(!name || !email || !password) {
        res.status(400)
        res.send("Fill all fields")
        throw new Error('Please add all feilds')
    }

    // to verify is the user is existed by email
    const teacherExist = await teacherReg.findOne({email})
    if(teacherExist){
        res.send("User already Existed")
        res.status(400)
        throw new Error("User already Existed")
    }

    // hashing the password by using bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create teacher in Mongo db
    const teacher = await teacherReg.create({
        name,
        email,
        password : hashedPassword
    })
   
    if(teacher) {
        res.status(201).json({
            _id : teacher.id,
            name : teacher.name,
            email : teacher.email,
            token : generateToken(teacher._id)
        })
        res.send("User Registered")
    }
    else {
        res.status(400)
        throw new Error("Invalid Teacher Data Created")
    }
})

// @desc Authentiacte a user
// @route POST/api/users/login
// @access Public
const loginTeacher = asyncHandler(async (req, res) =>{

    const {email, password} = req.body
    // checking user email id 
    const teacher = await teacherReg.findOne({email})
    // comparing email and password
    if(teacher && (await bcrypt.compare(password, teacher.password))){
        res.json({
            _id : teacher.id,
            name : teacher.name,
            email : teacher.email,
            token : generateToken(teacher._id)
        })
    } else{
        res.status(400)
        throw new Error("Invalid Cerdentials")
    }

})

// generate jsonwebtoken
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn : '1d'
    })
}

// @desc Get user data
// @route GET/api/users/,e
// @access protected
const getMe = asyncHandler(async (req, res) => {
    res.json({
        message : "Teacher upload options"
    })
})

module.exports = { regTeacher, loginTeacher, getMe };