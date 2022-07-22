const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            // ref : 'Teacher'
            // Teacher validation failed: name: Cast to ObjectId failed for value "Adharsh" (type string) at path "name" because of "BSONTypeError"
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