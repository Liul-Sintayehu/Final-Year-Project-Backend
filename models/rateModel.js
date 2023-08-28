const mongoose = require('mongoose')
const rateSchema = new mongoose.Schema({
    rate:Number
})

const RateModel = mongoose.model('Rate',rateSchema)

module.exports = RateModel
