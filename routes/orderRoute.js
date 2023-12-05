const express = require('express')
const router = express.Router()
const [getOrders, placeOrder] = require('../controllers/orderController')


router.get('/get-orders/:userId', getOrders);
router.post('/place-order', placeOrder);
module.exports = router