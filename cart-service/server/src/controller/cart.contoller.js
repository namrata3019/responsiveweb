const { response } = require("express")
const db = require("../models/cart.index")

const Cart =db.cart

const addCart = async(req,res) =>{
    console.log("Add cart");
    try {
        const existingCart = await Cart.find({learnerEmailId:req.body.learnerEmailId,})
        console.log(existingCart)
        if(existingCart.length > 0) {
            const upadatedCart = await Cart.findOneAndUpdate({
                learnerEmailId:req.body.learnerEmailId
            }, { $push: { ListOfCourses: req.body.ListOfCourses } })

            const data = await Cart.find({learnerEmailId:req.body.learnerEmailId,})
            res.send(data);
        } else {
            const cart= new Cart({
                learnerEmailId:req.body.learnerEmailId,
                coursePrice:req.body.coursePrice,
                ListOfCourses:[req.body.ListOfCourses]
                   
            })
            cart
            .save()
            .then((data) => {
            console.log(data)
              res.send(data);
            }).catch(error => console.error(error))
        }
        
        

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message || "Error Occured ",
    })
}
} 

const getCartDetails = (req, res) => {
    Cart.find({learnerEmailId:req.params.learnerEmailId})
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((error) => {
            res.status(500).json({
                message: error.message || "Error Occured while Retried data withe the",

            })
        })
}

const updateCartByLearnerenailId =async (req,res) => {
    console.log("updating cart ");
    try {
        const updateCart = await Cart.findOneAndUpdate({learnerEmailId:req.params.learnerEmailId},{ListOfCourses:req.body.ListOfCourses})
            res.send(updateCart)
        } catch (error) {
            res.status(500).json({
                message: error.message || "Error Occured while Retried data withe the",
            })
    
        }
}


const deleteCartBylearneremailId=async(req,res) => {
    
    try {
        const courseId = parseInt(req.params.courseId);
        
        const existingCart = await Cart.find({learnerEmailId:req.params.learnerEmailId})
        const ListOfCourses = existingCart[0].ListOfCourses
        const fiteredCourse = ListOfCourses.filter((course) => course.courseId != courseId); 

        await Cart.findOneAndUpdate({learnerEmailId:req.params.learnerEmailId} , {
            ListOfCourses:fiteredCourse
        })
        console.log("Deleting cart");
        const updateCart  = await Cart.find({learnerEmailId:req.params.learnerEmailId})
        console.log(fiteredCourse, courseId, updateCart)
        res.send(updateCart[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message || "Error Occured while Retried data withe the",
        })

    }

}

module.exports={addCart,updateCartByLearnerenailId,deleteCartBylearneremailId,getCartDetails}