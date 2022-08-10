const express = require('express')

// CONFIGURATION
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const app = express();
const PORT = process.env.PORT || 4001;

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//ROUTES
app.use(require('./routes/productRoute'))

// GET DB CONNECTION STATUS

const dbo = require("./db/conn");

app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${PORT}`);
});

