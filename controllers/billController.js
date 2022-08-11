const express = require('express')
const BillModel = require('../models/bill')
const router = express.Router()

router.post("/charge", async (req, res) => {
    try {
        const newBill = new BillModel(req.body)
        await newBill.save()
        res.send("Successfully placed order")
    }   catch (error) {
        res.status(500).json()
    }
})

module.exports = router