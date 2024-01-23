require('dotenv').config()
const express = require('express');
const amqplib = require('amqplib');
var cors = require('cors')
const sequelize = require("./db")

const userRoute = require('./routes/UserRoute');
const User = require('./model/UserModel');

const server = express();

server.use(cors({
    origin:"*"
}))

sequelize.sync()
server.use(express.json());
server.use("/api/v1", userRoute)

const queue = "RegisterationQueue"
amqplib.connect('amqp://localhost').then(async (conn) => {
    console.log("coneected rabbit mq")
    const ch1 = await conn.createChannel();
    ch1.assertQueue(queue);
    ch1.consume(queue, async (msg) => {
      try {
        const { emailId , password , roles } = JSON.parse(msg.content.toString());
        console.log( msg.content.toString())
        if (msg !== null) {
          await User.create({
            email: emailId,
            user_role: Boolean(roles == "LEARNER"),
            password
          })
          ch1.ack(msg);
        } else {
          console.log('Consumer cancelled by server');
        }
      } catch (error) {
        console.log(error)
      }
    });
});


server.listen(process.env.PORT , () => {
    console.log("Server is listening on", process.env.PORT);
    console.log(`http://localhost:${process.env.PORT}`)
})
