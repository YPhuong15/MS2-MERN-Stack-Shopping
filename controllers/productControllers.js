const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Cart = require('../models/cart')

router.get('/getProducts', async (req, res) => {
    try {
    const products = await Product.find()
    console.log("Getting Products")
    res.send(products)
    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})

router.get('/getCart', async (req, res) => {
    try {
    const cartItems = await Cart.find()
    console.log("Getting Cart Items")
    res.send(cartItems)
    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})

router.post('/search', async (req, res) => {
    const search = await Product.find(req)
    console.log(`Getting search ${req}`)
    res.send(search)
})

module.exports = router