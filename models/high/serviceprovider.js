const mongoose = require('mongoose')
const serviceSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const ServiceModel = mongoose.model('ServiceProvider',serviceSchema)

module.exports = ServiceModel