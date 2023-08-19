const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name:'String',
    email:'String',
    password:'String'
})

const model = mongoose.model('User',userData)

module.exports = model