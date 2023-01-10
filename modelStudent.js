const mongoose = require('mongoose')
const Student = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("student",Student)