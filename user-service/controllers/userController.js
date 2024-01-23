const { response } = require("express");
const amqplib = require('amqplib');
const db = require("../model/user.index");
const Users = db.users;
console.log("db" + db.users);

// const users = async (req, res) => {
//     try {

//         console.log(req.body)
//         console.log(req.params)
//         console.log(req.query)
//         res.json("welcome user")

//     } catch (error) {

//         res.json(error)
//     }
// }

const queue = "RegisterationQueue";
let ch1;
const conn = amqplib.connect('amqp://localhost').then(async (conn)=> {
    console.log("connected to rabbitMq")
    ch1 = await conn.createChannel();

    ch1.assertQueue(queue);
});

const createAccount = async (req, res) => {
  console.log("Sign up for user" , req.body);

  try {
    const user = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      mobileNumber: req.body.mobileNumber,
      password: req.body.password,
      roles: req.body.role,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
    });

    console.log(user);
    user
      .save()
      .then((data) => {
        ch1.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        res.send(data);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({
          message: err.message || "Error Occured while creating contents",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error Occured while user signup",
    });
  }
};

const getUserDetails = (req, res) => {
  Users.find({
    emailId:req.params.emailId
  })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message || "Error Occured while Retried data withe the",
      });
    });
};

const updateUserDetail = async (req, res) => {
  console.log("updating user details by email id");

  try {
    const updateUser = await Users.update(
      { emailId: req.params.emailId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          mobileNumber: req.body.mobileNumber,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country,
        },
      }
    );
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};

const updateUserNameByEmailId = async (req, res) => {
  console.log("updating user name by email id");

  try {
    const updateUser = await Users.findOneAndUpdate(
      { emailId: req.params.emailId },
      { $set: { firstName: req.body.firstName, lastName: req.body.lastName } }
    );
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};

const updateMobileNumberEmailById = async (req, res) => {
  console.log("updating user mobile number by email id");
  try {
    const updateUser = await Users.findOneAndUpdate(
      { emailId: req.params.emailId },
      { mobileNumber: req.body.mobileNumber }
    );
    res.send(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};

const updateCityByEmailId = async (req, res) => {
  console.log("updating user city by email id");
  try {
    const updateUser = await Users.findOneAndUpdate(
      { emailId: req.params.emailId },
      { city: req.body.city }
    );
    res.send(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};

const updateStateByEmailId = async (req, res) => {
  console.log("updating user state by email id");
  try {
    const updateUser = await Users.findOneAndUpdate(
      { emailId: req.params.emailId },
      { state: req.body.state }
    );
    res.send(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};

const updateCountryByEmailId = async (req, res) => {
  console.log("updating user country by email id");
  try {
    const updateUser = await Users.findOneAndUpdate(
      { emailId: req.params.emailId },
      { country: req.body.country }
    );
    res.send(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error Occured while Retried data withe the",
    });
  }
};
module.exports = {
  createAccount,
  getUserDetails,
  updateUserNameByEmailId,
  updateStateByEmailId,
  updateCityByEmailId,
  updateCountryByEmailId,
  updateMobileNumberEmailById,
  updateUserDetail
};
