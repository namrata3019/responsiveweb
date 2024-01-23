
const express = require('express');
var cors = require('cors')



const cartRoute = require('./routes/route')


const server = express();

server.use(cors({
    origin:"*"
}))

server.use(express.json());
server.use("/api/v1", cartRoute)



server.listen(8083, () => {
    console.log("Server is listening on", 8083);
    console.log(`http://localhost:${8083}`)
})