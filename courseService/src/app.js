const express=require("express");
require("./db/con");
const Course=require("./models/courses");
const router = require("./routes/courseRoute");
const app=express();
const port=process.env.PORT || 8087;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use("/brainzo",router);




  app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})