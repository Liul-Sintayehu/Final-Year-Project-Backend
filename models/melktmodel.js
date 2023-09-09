const mongoose = require('mongoose')

const melkSchema = new mongoose.Schema({
    senderName:String,
    teteri:String,
    info:String,
    gps:String
})

const MelktModel = mongoose.model('Melkt',melkSchema)


module.exports =  MelktModel
// [{
//     name:String,
//     address:String
// }]