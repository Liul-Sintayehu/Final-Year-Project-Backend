const mongoose = require('mongoose')

const gagariSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    experiance:Number
})

const GagariModel = mongoose.model('Test3',gagariSchema)

module.exports = GagariModel