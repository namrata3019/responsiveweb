const { mongo } = require("../db")
const { Schema, default: mongoose } = require("mongoose")

const paymentSchema = new Schema({
    orderId : {
        unique:true,
        type:String,
    },
    paymentId: String,
    status: String,
    receipt: String,
    mentorEmailId : String,
    learnerEmailId : String,
    courseName: String,
    courseId : Number,
    coursePrice : Number,
    courseImage : String,
});

const Payment = mongoose.model("Payment" , paymentSchema);

exports.Payment = Payment;