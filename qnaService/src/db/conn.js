const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/QnAService").then(()=>{
console.log("connection is successful")
}).catch((e)=>{
    console.log(e)
});