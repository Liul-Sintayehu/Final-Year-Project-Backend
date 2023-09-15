const mongoose = require('mongoose')

const melktegnaSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:String,
    subcity:String,
    payment:String,
    method:String,
    experiance:String
})

const MelktegnaModel = mongoose.model('Melktegna',melktegnaSchema)

module.exports = MelktegnaModel