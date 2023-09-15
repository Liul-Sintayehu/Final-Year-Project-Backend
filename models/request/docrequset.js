const mongoose = require('mongoose')

const DoctorRequest = new mongoose.Schema({
    name:String,
    email:String
})

const DoctorRequestModel = mongoose.model('RequestDoctor',DoctorRequest)

module.exports = DoctorRequestModel