const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        pokedex: {type: Number, required: true},
        price: {type: Number, required: true},
        type: {type: Array},
        productImage: {type: Array}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)