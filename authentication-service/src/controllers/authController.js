const User = require("../model/UserModel")
const jwt = require("jsonwebtoken")

const addUser = async (req , res) => {
    let httpReplyStatus = 200;
    try {
        const { email , password , role } = req.body;

        const user = await User.create({
            email,
            user_role: Boolean(role == "LEARNER"),
            password
        });

        res.status(httpReplyStatus).json(user);

     } catch (e) {
        console.error(e);
        httpReplyStatus = 500;
        res.status(httpReplyStatus).json({
            message : "GENERAL SERVER ERROR",
            e
        })
    }
}

const authenticateUser = async (req , res) => {
    let httpReplyStatus = 200;
    try {
        
        const { email , password , user_role } = req.body;

        const user = await User.findOne({
            where: {
            email,
            password
            }
            
        });

        if(!user){
            
            httpReplyStatus = 404;
            let message = "Username Or EmailId is incorrect !"
            res.status(httpReplyStatus).json({
                message
            })
        }

        const token = jwt.sign(user.toJSON(), "kunalznk123455" , { 
            expiresIn:"2d"
        })
        
        res.status(httpReplyStatus).json({
            user : user.email,
            role: user.user_role ? "learner" : "mentor",
            token
        });

    } catch (e) {
        console.log(e)
        httpReplyStatus = 500;
        res.status(httpReplyStatus).json({
            message : "GENERAL SERVER ERROR"
        })
    }
}

module.exports = {
    addUser,
    authenticateUser
}