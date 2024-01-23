const mongoose=require("mongoose");
const validator=require("validator");

  
    autoIncrement = require('mongoose-auto-increment');

const courseSchema=new mongoose.Schema({
   
    mentorEmailId:{
        type:String,
    
    },
    courseName:{
        type:String,
        
    },
    courseImage: { 
        type: String},

    courseFee:{
        type:String     
    },
    language:{
        type:String 
    },
    description:{
        type:String 
    },
 

    courseReview: [{
        type: String
    }],
    courseType:{
        type: String
    },
    learner:[{
        learnerEmailId: String ,
        learnerName: String
    }]
})
autoIncrement.initialize(mongoose.connection);
courseSchema.plugin(autoIncrement.plugin, { model: 'Course', field: 'courseId', startAt: 1,
incrementBy: 1 ,unique: true});
const Course=new mongoose.model('Course',courseSchema);

module.exports=Course;