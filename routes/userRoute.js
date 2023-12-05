const express = require('express')
const router = express.Router()
const [addToCart, clearCart, getCart, removeItem] = require('../controllers/userController')
router.post('/get/:tempAuthID', getCart)
router.post('/add', addToCart)
router.patch('/clear', clearCart)
router.patch('/remove/:id', removeItem)


module.exports = router;