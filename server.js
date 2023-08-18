const express = require('express')
const mongoose = require('mongoose');
const Router = require('./router');
const cors = require('cors')


const app = express()
app.use(cors())


//connections

const uri = "mongodb+srv://liul:eKwJXBaSPD6sHSCX@cluster0.up98o7c.mongodb.net/practice2?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true})
.then((res)=>{
    console.log('connected to db');
})
app.listen(3004,()=>{
    console.log('listening on port 3004');
})

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Router)
