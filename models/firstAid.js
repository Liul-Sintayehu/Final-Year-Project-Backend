const mongoose = require('mongoose')

const firstAiderSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    subcity:String,
    proffesion:String,
    experiance:Number
})

const FirstAiderModel = mongoose.model('Firstaid',firstAiderSchema)

module.exports = FirstAiderModel