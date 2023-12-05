const express = require('express')
const router = express.Router()
const [getOne, getAll, getGenres] = require('../controllers/bookController.js')
router.get('/', getAll)
router.get('/:id', getOne)
router.get('/genres', getGenres)

module.exports = router