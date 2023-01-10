const mongoose = require('mongoose')

const StudentAnswer = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("studentAnswer",StudentAnswer)

