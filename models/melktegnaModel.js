const mongoose = require('mongoose')

const melktegnaSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    subcity:String
})

const MelktegnaModel = mongoose.model('Melktegna',melktegnaSchema)

module.exports = MelktegnaModel