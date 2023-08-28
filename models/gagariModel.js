const mongoose = require('mongoose')

const gagariSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    experiance:Number
})

const GagariModel = mongoose.model('Gagari',gagariSchema)

module.exports = GagariModel