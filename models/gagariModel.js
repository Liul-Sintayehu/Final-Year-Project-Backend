const mongoose = require('mongoose')

const gagariSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    subcity:String,
    payment:String,
    experiance:Number
})

const GagariModel = mongoose.model('Gagari',gagariSchema)

module.exports = GagariModel