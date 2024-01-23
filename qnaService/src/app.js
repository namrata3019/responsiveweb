
const express=require("express");
require("./db/conn");
const router = require("./routes/routes");
const app=express();
const port=process.env.PORT || 8888;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use("/api/v1/brainzo/qna",router);




  app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})
