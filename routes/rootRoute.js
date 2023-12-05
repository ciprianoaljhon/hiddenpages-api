const express = require('express')
const router = express.Router()
const authRoute = require('./authRoute.js')
const bookRoute = require('./bookRoute.js')
const userRoute = require('./userRoute.js')
const profileRoute = require('./profileRoute.js')
const orderRoute = require('./orderRoute.js')
router.use('/cart', userRoute)
router.use('/books', bookRoute)
router.use('/auth', authRoute)
router.use('/profile', profileRoute)
router.use('/orders', orderRoute)
router.get('/', (req, res) => {
    console.log(req)
})

module.exports = router