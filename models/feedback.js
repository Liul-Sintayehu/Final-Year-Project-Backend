const mongoose = require('mongoose')
const feedbackSchema = new mongoose.Schema({
    email:String,
    subject:String,
    message:String
})

const FeebbackModel = mongoose.model('Feedback',feedbackSchema)

module.exports = FeebbackModel
