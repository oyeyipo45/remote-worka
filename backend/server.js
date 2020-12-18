const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require("cors")
const connectDB = require('./config/db')
const postRoutes = require("./routes/postRoutes")
const authRoutes = require("./routes/authRoutes")
const bidRoutes = require("./routes/bidRoutes")
const fileUploadRoutes = require("./routes/fileUploadRoute")
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')
const { notFound, errorHandler } = require('./middleware/errorMiddlerware.js')

dotenv.config();


connectDB()

const app = express();
app.use(cors())
app.use(express.json())


// Sanitize data
app.use(mongoSanitize())

// Set Security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Rate Limiting for Api requests
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, //10 mins
	max: 100
});

app.use(limiter)

//Prevent HTTP params pollution
app.use(hpp())

app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/bids', bidRoutes)
app.use('/api/v1/uploads', fileUploadRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5005;


app.listen(
    PORT,
    console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);

module.exports = app;