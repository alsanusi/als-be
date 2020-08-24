const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// DB
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const config = require('./config')
const db_config = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.database
}

app.use(myConnection(mysql, db_config, 'pool'))

//CORS Setting
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Routing
const contactRoute = require('./routes/contact')
app.use('/api', contactRoute)

app.get('/', (req, res) => {
    res.send("Express API.")
})

// Default PORT
const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log('Server running at port:' + PORT)
})