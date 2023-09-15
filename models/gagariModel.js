const mongoose = require('mongoose')

const gagariSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:String,
    subcity:String,
})

const GagariModel = mongoose.model('Gagari',gagariSchema)

module.exports = GagariModel