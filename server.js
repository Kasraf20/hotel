const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

const PORT = process.env.PORT || 8080

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.send("welcome to this website")
})

const personRoute = require('./routes/personRoutes')
app.use('/person',personRoute)

const menuRoute = require('./routes/menuRoutes')
app.use('/menu',menuRoute)


app.listen(PORT,()=>{
    console.log("app running fine")
})
