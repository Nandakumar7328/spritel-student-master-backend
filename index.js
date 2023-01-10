const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const Master = require('./model')
const Student = require('./modelStudent')
const MasterQuestions = require('./modelMasterQuestion')
const StudentAnswer = require('./modelStudentAnswer')
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://NandaKumar:Nanda7328@cluster0.9j7nchf.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log("DB Connected .....!")
).catch(err => console.log(err,"DB"))
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/add-master',async(request,response) => {
    const {username,email,password,id} = request.body 
    try{
    const checkUsername = await Master.find()
    let result = null
    checkUsername.map(eachData => {
        if(username === eachData.username){  
            result = true
        }
    }) 
    if (result === true){
        const output = {status:false,msg:"User Exists"}
        response.send(output)
        response.status(400)
       
      }else{
        const newData = new Master({username,email,password,id})
        await newData.save()
        const output = {status:true,msg:"User Add success"}
        response.send(output)
      }
} 
catch(err){
    console.log(err.message)
}
})

app.post('/add-student',async(request,response) => {
    const {username,email,password,id} = request.body 
    try{
    const checkUsername = await Student.find()
    let result = null
    checkUsername.map(eachData => {
        if(username === eachData.username){  
            result = true
        }
    }) 
    if (result === true){
        const output = {status:false,msg:"User Exists"}
        response.send(output)
        response.status(400)
       
      }else{
        const newData = new Student({username,email,password,id})
        await newData.save()
        const output = {status:true,msg:"User Add success"}
        response.send(output)
      }
} 
catch(err){
    console.log(err.message)
}
})

app.post('/login-master',async(request,response) => {
    const {username,password} = request.body 
    try{
    const checkUsername = await Master.find()
    let result = null
    let id = null
    checkUsername.map(eachData => {
        if(username === eachData.username && password === eachData.password){ 
            id = eachData.id
            result = true
        }
    }) 
    if (result === true){
        const output = {status:true,msg:"login success",id:id}
        response.send(output)
       
      }else{
        const output = {status:false,msg:"Invalid user"}
        response.send(output)
        response.status(400)
      }
} 
catch(err){
    console.log(err.message)
}
})

app.post('/login-student',async(request,response) => {
    const {username,password} = request.body 
    try{
    const checkUsername = await Student.find()
    let result = null
    let id = null
    checkUsername.map(eachData => {
        if(username === eachData.username && password === eachData.password){ 
            id = eachData.id
            result = true
        }
    }) 
    if (result === true){
        const output = {status:true,msg:"login success",id:id}
        response.send(output)
       
      }else{
        const output = {status:false,msg:"Invalid user"}
        response.send(output)
        response.status(400)
      }
} 
catch(err){
    console.log(err.message)
}
})

app.post('/master-questions/send',async(request,response) => {
    const {id,question,masterId,masterName} = request.body 
    try{
        const newData = new MasterQuestions({id,question,masterId,masterName})
        await newData.save()
        const output = {status:true,msg:"question sent"}
        response.send(output)
} 
catch(err){
    console.log(err.message)
}
})

app.post('/student-answer/send',async(request,response) => {
    const {id,question,studentId,studentName,answer} = request.body 
    try{
        const newData = new StudentAnswer({id,question,studentId,studentName,answer})
        await newData.save()
        const output = {status:true,msg:"Answer sent"}
        response.send(output)
} 
catch(err){
    console.log(err.message)
}
})

app.get('/all/questions',async(request,response)=> {
    try{
        const allQuestions = await MasterQuestions.find()
        response.send(allQuestions)
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/all/answers',async(request,response)=> {
    try{
        const allAnswer = await StudentAnswer.find()
        response.send(allAnswer)
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/get/master/question/:id',async(request,response)=> {
    const {id} = request.params
    console.log(id)
    try{
        const oneMasterQuestion = await MasterQuestions.find({id:id})
        response.send(oneMasterQuestion)
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/get/master/name/:id',async(request,response)=> {
    const {id} = request.params
    try{
        const oneMaster = await Master.find({id:id})
        response.send(oneMaster.map(each => each.username))
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/get/student/name/:id',async(request,response)=> {
    const {id} = request.params
    try{
        const oneStudent = await Student.find({id:id})
        response.send(oneStudent.map(each => each.username))
    }
    catch(err){
        console.log(err.message)
    }
})





