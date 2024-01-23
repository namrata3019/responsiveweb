require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')

const paymentRoute = require('./routes/paymentRoute')

const server = express();

server.use(cors({
    origin:"*"
}))

server.use(express.json());
server.use("/brainzo", paymentRoute)



server.listen(process.env.PORT , () => {
    console.log("Server is listening on", process.env.PORT);
    console.log(`http://localhost:${process.env.PORT}`)
})