const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  // userId: {
  //   type: String,
  // },
  // items: [
  //   {
  //     product: {
  //       type: String,
  //     },
  //     quantity: {
  //       type: Number,
  //       required: true,
  //       default: 1,
  //     },
  //     price: { type: Number, required: true },
  //   },
  //   { timestamps: true },
  // ],
  
    name: { type: String, required: true, unique: true },
    pokedex: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: Array, required: true },
  },
  {
    timestamps: true,
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
