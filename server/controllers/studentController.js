const asyncHandler = require('express-async-handler')
const notesUpload = require('../models/teacherUpload')


const noteDownload = asyncHandler( async (req,res) => {
    const { semester, subject,  modules } = req.body

    const notes = await notesUpload.find({}, {projection : {semester : semester, subject : subject, modules : modules, file }}).toArray((err,result)=>{
        if(notes){
            res.status(200, notes)
        }
    })
})


module.exports = { noteDownload }
