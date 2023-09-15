const mongoose = require('mongoose')

const firstAiderSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:String,
    subcity:String,
    proffesion:String,
    payment:String,
    experiance:Number
})

const FirstAiderModel = mongoose.model('Firstaid',firstAiderSchema)

module.exports = FirstAiderModel