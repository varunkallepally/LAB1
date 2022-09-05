const express = require('express')
const mongoose = require('mongoose')

const app = express()

const url = 'mongodb://localhost/stuDB'
mongoose.connect(url)

const con = mongoose.connection
con.on('open',(req,res)=> {
    console.log("connected to database")
})

app.use(express.json())
const StuRouter = require('./routes/students')
app.use('/stud',StuRouter)

app.listen(9000,()=> {
    console.log("server started")
})

 