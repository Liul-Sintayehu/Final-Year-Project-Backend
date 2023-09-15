const mongoose = require('mongoose')

const GagariRequest = new mongoose.Schema({
    name:String,
    email:String
})

const GagariRequestModel = mongoose.model('RequestGagari',GagariRequest)

module.exports = GagariRequestModel