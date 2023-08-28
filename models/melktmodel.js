const mongoose = require('mongoose')

const melkSchema = new mongoose.Schema({
    senderName:String,
    teteri:[{
        name:String,
        address:String
    }],
    info:String,
    gps:String
})

const MelktModel = mongoose.model('Melkt',melkSchema)


module.exports =  MelktModel
