const { Payment } = require("../model/paymentModel")
const fs = require("fs");
const Razorpay = require('razorpay');

const createOrder = async (req , res) => {
    let httpReplyStatus = 200
    try {
        
         const rp = new Razorpay({
            key_id: 'rzp_test_VSXaldpnOyIKkN',
            key_secret: '2T1gXyVH0GExedJkcNOnp8Tm',
          });

          const data = JSON.parse(req.body.payment);

            const rpOrder = await rp.orders.create({
            amount: data.coursePrice,
            currency: "INR",
            receipt: "receipt#1",
        })

        const readFile = new Promise((resolve , reject) => {
            fs.readFile(req.file.path, 'base64', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        })

        const base64 = await readFile;
        
        fs.rm(req.file.path , (err, data) => {
            if (err) {
                console.error("efmsm",err)
            } else {
                console.log(data)
            }
        })

        const newPayment = Payment({...data , courseImage : base64, orderId : rpOrder.id, paymentId : null});

        const order = await newPayment.save();

        res.status(httpReplyStatus).json(order);
        
    } catch (error) {
        console.log(error)
        httpReplyStatus = 500;
            res.status(httpReplyStatus).json({
                message : "GENERAL SERVER ERROR"
            })
    }
}

const updateOrder = async (req , res) => {
    let httpReplyStatus = 200
    try {
        
        const { paymentId , orderId } = req.body;
        const updatedOrder = await Payment.findOneAndUpdate({
            orderId
        }, {
            paymentId
        })

        res.status(httpReplyStatus).json(updatedOrder);
    } catch (error) {
        httpReplyStatus = 500;
            res.status(httpReplyStatus).json({
                message : "GENERAL SERVER ERROR"
            })
    }
}

module.exports = {
    createOrder,
    updateOrder
}

