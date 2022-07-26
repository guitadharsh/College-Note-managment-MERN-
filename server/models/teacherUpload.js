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
        type : Buffer,
        required : true
      }

})

module.exports = mongoose.model ('Notes', uploadSchema )