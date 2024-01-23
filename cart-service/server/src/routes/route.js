const { Router } = require("express")
const CartContoller=require("../controller/cart.contoller")

const cartRoute=Router()

cartRoute.post("/addCart",CartContoller.addCart)
cartRoute.put("/updateCart/:learnerEmailId",CartContoller.updateCartByLearnerenailId)
cartRoute.get("/getCartDetails/:learnerEmailId",CartContoller.getCartDetails)
cartRoute.delete("/deleteCart/:learnerEmailId/:courseId",CartContoller.deleteCartBylearneremailId)

module.exports=cartRoute