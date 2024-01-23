const Course = require("../models/courses");
const fs=require("fs");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

exports.post_courses = async (req, res) => {
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
  const course = await new Course({
    mentorEmailId: req.body.mentorEmailId,
    courseName: req.body.courseName,
    courseImage: base64,
    courseFee: req.body.courseFee,
    description: req.body.description,
    courseType: req.body.courseType,
    language:req.body.language
  });
  course
    .save()
    .then((result) => {
    
      res.status(201).json({
        message: "Created course successfully",
      
          mentorEmailId: result.mentorEmailId,
          courseName: result.courseName,
          courseId:result.courseId, 
          courseImage: result.courseImage,
          courseFee: result.courseFee,
          description: result.description,
          courseType: result.courseType, 
          language:result.language       
         
        
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};


exports.get_courses =async (req, res) => {
  try {      
    const name = req.params.name;
    const courseData = await Course.find({ name});
    if (!courseData) {
      return res.status(404).send();
    } else {
      res.send(courseData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}
// exports.get_courses = async (req, res, ) => {
//   await Course.find()
//     .select(
//       "courseId mentorEmailId courseName courseImage courseFee description courseType courseReview learner"
//     )
//     .exec()
//     .then((docs) => {
//       const response = {
//         count: docs.length,
//         courses: docs.map((doc) => {
//           return {
//             mentorEmailId: doc.mentorEmailId,
//             courseName: doc.courseName,
//             courseImage: doc.courseImage,
//             courseFee: doc.courseFee,
//             description: doc.description,
//             courseType: doc.courseType,
//             language:doc.language,     
//             request: {
//               type: "GET",
//               url: "http://localhost:8087/courses/" + doc._id,
//             },
//           };
//         }),
//       };
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

exports.get_coursesById = async (req, res) => {
  try {
    const id = req.params.courseId;
    const courseData = await Course.find({courseId:id});
    if (!courseData) {
      return res.status(404).send();
    } else {
      res.send(courseData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.update_courseLearner = async (req, res) => {
  try {
    const _id = req.params.courseId;
    const learnerObj = {
      learnerEmailId: req.body.learnerEmailId,
      learnerName: req.body.learnerName,
    };

    const updateCourse = await Course.findOneAndUpdate(
    {courseId:  _id},
      { $push: { learner: learnerObj } },
      {
        new: true,
      }
    );
    res.send(updateCourse);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.get_courseByLearner = async (req, res) => {
  try {
    console.log(Course);
    const name = req.params.name;
    const courseData = await Course.find({ name: new RegExp(name, "i") });
    if (!courseData) {
      return res.status(404).send();
    } else {
      res.send(courseData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.get_courseByMentor = async (req, res) => {
  try {
    const name = req.params.name;
    const courseData = await Course.find({ name });
    console.log(Course);
    if (!courseData) {
      return res.status(404).send();
    } else {
      res.send(courseData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
