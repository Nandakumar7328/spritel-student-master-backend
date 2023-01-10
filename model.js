const mongoose = require('mongoose')

const Master = mongoose.Schema({
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

module.exports = mongoose.model("master",Master)

