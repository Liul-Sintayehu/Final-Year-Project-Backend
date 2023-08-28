const mongoose = require('mongoose')

const melktegnaSchema = new mongoose.Schema({
    name:String,
    rate:Number,
    phone:Number,
    subcity:String
})

const MelktegnaModel = mongoose.model('Test4',melktegnaSchema)

module.exports = MelktegnaModel