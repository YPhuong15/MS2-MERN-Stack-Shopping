const mongoose = require('mongoose')
const {Schema} = mongoose

const billSchema = new Schema({
    customerName: {type: String, required: true},
    customerPhone: {type: Number, required: true},
    totalAmount: {type: Number, required: true},
    tax: {type: Number, required: true}, 
    subTotal: {type: Number, required: true},
    cartItems: {type: Array, required: true}
},
{timestamps: true}
)

const billModel = mongoose.model("Bills", billSchema)
module.exports = billModel;