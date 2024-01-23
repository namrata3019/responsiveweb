require('dotenv').config()
const express = require('express');
var cors = require('cors')



const userRoute = require('./routes/route')


const server = express();

server.use(cors({
    origin:"*"
}))

server.use(express.json());
server.use("/api/brainzo/v1", userRoute)



server.listen(8089, () => {
    console.log("Server is listening on", 8089);
    console.log(`http://localhost:${8088}`)
})