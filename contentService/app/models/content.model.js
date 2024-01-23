const mongoose = require("mongoose");
module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    contentId: Number,
    courseName: String,
    userEmailId: String,
    video: [
      {
        videoId: Number,
        videoTitle: String,
        videoCode: String,
      },
    ],
  });

  const courseContents = mongoose.model("contents", schema);
  return courseContents;
};
