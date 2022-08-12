const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// CONFIGURATION

//require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4001;

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMPORTING ROUTES
const productRoute = require("./controllers/productControllers");

// CONNECTING TO DATABASE
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET DB CONNECTION STATUS
let connectionDB = mongoose.connection;
connectionDB.on(`connected`, () => {
  console.log("Success");
});
connectionDB.on(`error`, () => {
  console.log("Fail");
});

// ROUTES
app.use("/api/products/", productRoute);

app.listen(PORT, () => console.log(`App running on ${PORT}`));