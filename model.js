const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    balance:Number,
    notification:String
})

const model = mongoose.model('Auth',userData)

module.exports = model