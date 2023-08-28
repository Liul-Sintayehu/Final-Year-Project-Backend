const mongoose = require('mongoose')
const rateSchema = new mongoose.Schema({
    rate:Number
})

const RateModel = mongoose.model('Test2',rateSchema)

module.exports = RateModel
