const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// CONNECTING TO DATABASE
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,}
);

let connectionDB = mongoose.connection

connectionDB.on(`connected`, () => {
    console.log('Success')
})

connectionDB.on(`error`, () => {
    console.log('Fail')
})

app.get('/', (req, res) => res.send('Hello World'))
app.listen(PORT, () => console.log(`App running on ${PORT}`)) 

