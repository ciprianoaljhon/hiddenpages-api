const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', require('./routes/rootRoute'))

mongoose.connect(MONGO_URI).then(
    console.log('Connected to Database')
).then(
    app.listen(PORT, (req, res) => {
        console.log('Listening at port: ' + PORT)
    }))