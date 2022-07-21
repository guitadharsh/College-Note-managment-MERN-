const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema(
    {
        name : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'Teacher'
        },

        email : {
            type : String,
            required : true
        },

        password : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model ('Teacher' , teacherSchema )