const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require("cors")
const connectDB = require('./config/db')
const postRoutes = require("./routes/postRoutes")
const authRoutes = require("./routes/authRoutes")
const bidRoutes = require("./routes/bidRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddlerware.js')

dotenv.config();


connectDB()

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/bids', bidRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5005;


app.listen(
    PORT,
    console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);

module.exports = app;