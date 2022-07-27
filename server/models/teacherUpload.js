const mongoose = require('mongoose')
const uploadSchema = mongoose.Schema(
    {
        semester : {
            type : String,
            required : true,
        },

        subject : {
            type : String,
            required : true
        },

      modules : {
        type : String,
        required : true
      },

      file : {
        data : Buffer,
        contentType : String
      }

})

module.exports = mongoose.model ('Notes', uploadSchema )