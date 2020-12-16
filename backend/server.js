const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require("cors")
const connectDB = require('./config/db')




dotenv.config();


connectDB()

const app = express();
app.use(cors())
app.use(express.json())




const PORT = process.env.PORT || 5005;


app.listen(
    PORT,
    console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);

module.exports = app;