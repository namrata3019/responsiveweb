const { Router } = require('express');
const authController = require('../controllers/authController')

const userRoutes = Router();

userRoutes.post("/authenticate" , authController.authenticateUser)
userRoutes.post("/addUser" , authController.addUser)

module.exports = userRoutes;