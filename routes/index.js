'use strict'
const express = require('express')
const app = express.Router()
const auth = require('../middleware/auth')
const controllers = require('../controllers')

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    next()
})

app.get('/', (request, response) => {
    return response.status(200).send('API REST Doshop!!')
})

// ROUTES
app.use('/access', controllers.access)
app.use('/user', controllers.user)
app.use('/store', controllers.store)
app.use('/category', controllers.category)
app.use('/product', controllers.product)
app.use('/permission', controllers.permission)
app.use('/master', controllers.master)

module.exports = app
