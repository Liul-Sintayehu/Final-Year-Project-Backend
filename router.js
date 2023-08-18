const express = require('express')
const { Signup, Login } = require('./controller')

const Router = express.Router()

Router.post('/signup',Signup)
Router.post('/login',Login)

module.exports = Router