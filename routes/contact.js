const express = require('express')
const app = express()

// Controller
const contactController = require('../controller/contact')

app.get('/contact', contactController.show)
app.post('/contact', contactController.store)

module.exports = app