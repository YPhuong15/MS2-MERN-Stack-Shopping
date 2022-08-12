const express = require("express");
const router = express.Router();

router.get('/getCart', async (req, res) => {
    try {
        const cartItems = await Cart.find()
        console.log("Getting Cart Items")
        res.send(cartItems)
    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
});

module.exports = router;
