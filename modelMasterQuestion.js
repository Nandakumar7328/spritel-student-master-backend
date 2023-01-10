const mongoose = require('mongoose')

const MasterQuestions = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    masterId:{
        type:String,
        required:true
    },
    masterName:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("masterQuestions",MasterQuestions)

