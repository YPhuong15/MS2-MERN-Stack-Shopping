const express = require('express')
const router = express.Router()
const {getProducts, getProduct} = require('../controllers/productControllers')

router.get('/', getProduct => {
    res.send('Product page')
})

module.exports = router