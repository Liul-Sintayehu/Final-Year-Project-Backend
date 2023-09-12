const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    balance:Number
})

const model = mongoose.model('Auth',userData)

module.exports = model