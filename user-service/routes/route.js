const { Router } = require("express")
const userController=require("../controllers/userController")

const userRoute=Router()


userRoute.post("/signup",userController.createAccount)
userRoute.get("/getUserDetails/:emailId",userController.getUserDetails)
userRoute.put("/updateUserDetail/:emailId" , userController.updateUserDetail)


module.exports=userRoute