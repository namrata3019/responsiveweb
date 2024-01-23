
const mongoose = require("mongoose")

module.exports = (mongoose) => {
    var schema = mongoose.Schema({

        learnerEmailId:{
            type:String,
            unique:true
        },
        courseprice:Number,

        ListOfCourses: {
            type : [
                {
                    mentorEmailId:String,
                    courseName: String,
                    courseImage:String,
                    courseFee: Number,
                    description: String,
                    courseType: String,
                    courseId: { type : Number , unique:true }
                }
            ],
            default: []
        }
    })

    const Cart=mongoose.model("Cart",schema)
    return Cart
}