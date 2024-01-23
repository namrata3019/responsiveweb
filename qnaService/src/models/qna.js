const mongoose=require("mongoose");


  
    autoIncrement = require('mongoose-auto-increment');

const qnaSchema=new mongoose.Schema({
  
    courseId:{
        type:Number,
    },
    username:{
        type:String,
    
    },

    replies: [{
        username:String,
        reply:String,
        dateofComment:String

    }],
    question:{
        type: String
    },
    dateofComment:{type:String}
    
})
autoIncrement.initialize(mongoose.connection);
qnaSchema.plugin(autoIncrement.plugin, { model: 'QnA', field: 'commentId', startAt: 1,
incrementBy: 1 ,unique: true});
const QnA=new mongoose.model('QnA',qnaSchema);

module.exports=QnA;