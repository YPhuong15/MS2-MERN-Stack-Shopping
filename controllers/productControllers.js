const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const productDetail = await Product.findById(req.params);

//     res.send(productDetail);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json();
//   }
// });

module.exports = router;
