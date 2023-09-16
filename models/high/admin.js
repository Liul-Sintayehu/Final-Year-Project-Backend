const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const AdminModel = mongoose.model('Admins',adminSchema)

module.exports = AdminModel