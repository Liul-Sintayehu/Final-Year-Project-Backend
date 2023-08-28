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

const MelktModel = mongoose.model('Test1',melkSchema)


module.exports =  MelktModel
