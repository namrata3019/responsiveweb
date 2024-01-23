const mongoose = require("mongoose")

module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        firstName:String,
        lastName:String,
        emailId:{
            type:String,
            unique:true
        },
        mobileNumber:String,
        password:String,
        roles: {
            type: String,
            enum : ['LEARNER','MENTOR'],
        },
        city:String,
        state:String,
        country:String

    
    })

    const User=mongoose.model("User",schema)
    return User
}