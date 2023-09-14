const mongoose = require('mongoose')
const feedbackSchema = new mongoose.Schema({
    email:String,
    subject:String,
    message:String
})

const FeedbackModel = mongoose.model('Feedback',feedbackSchema)

module.exports = FeedbackModel
