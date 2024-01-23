require('dotenv').config()
const express = require('express');
const { Client } = require("minio");
const nodemail = require('nodemailer')
var cors = require('cors')

const server = express();

server.use(cors({
    origin:"*"
}))

const mo = new Client({
  endPoint: "127.0.0.1",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});



const transport = nodemail.createTransport({
    service:"gmail",
    auth:{
     
            pass:"jojspgrrglsdubfk",
            user:"kunalznk@gmail.com"
    }
})


server.use(express.json());

server.use(express.Router().post("/sendMail" , async (req , res) => {
    let httpReplyStatus = 200
    try {
        const { recieverEmail , messageBody ,  subject } = req.body;
        await transport.sendMail({
            to:recieverEmail,
            subject,
            text:`${messageBody}`
        })

        res.status(httpReplyStatus).json({
            message : "Email Sent Successfully"
        })

    } catch (error) {
        console.log(error)
        httpReplyStatus = 500;
        res.status(httpReplyStatus).json({
            message : "GENERAL SERVER ERROR"
        })
    }
}))

server.listen(process.env.PORT , () => {
    console.log("Server is listening on", process.env.PORT);
    console.log(`http://localhost:${process.env.PORT}`)
})