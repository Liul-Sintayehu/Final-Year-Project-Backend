const express = require('express')
const mongoose = require('mongoose');
const Router = require('./router');
const cors = require('cors')


const app = express()
app.use(cors())


//connections
//url2 = 'mongodb://127.0.0.1/test'
//atlas = mongodb+srv://liul:eKwJXBaSPD6sHSCX@cluster0.up98o7c.mongodb.net/practice2?retryWrites=true&w=majority
const uri = "mongodb+srv://liul:eKwJXBaSPD6sHSCX@cluster0.up98o7c.mongodb.net/HuluBebete?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true})
.then((res)=>{
    console.log('connected to db');
})
app.listen(45963,()=>{
    console.log('listening on port 45963');
})

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Router)
app.use(express.static(__dirname+'/Public'))
