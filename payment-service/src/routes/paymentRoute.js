const { Router } = require("express");
const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })

const paymentController = require("../controller/paymentController")

const paymentRoutes = Router();

paymentRoutes.post("/payment", upload.single('file') , paymentController.createOrder)
paymentRoutes.put("/payment/update", upload.single('file') , paymentController.updateOrder)

module.exports = paymentRoutes; 