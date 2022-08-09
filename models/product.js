const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema(
    {
        name: {type: String, required: true, unique: true},
        pokedex: {type: Number, required: true},
        price: {type: Number, required: true},
        productImage: {type: Array, required: true},
        category: {type: Array, required: true},
    },
    {
        timestamps: true
    }
)

const Products = mongoose.model('Products', productSchema)
module.exports = Products