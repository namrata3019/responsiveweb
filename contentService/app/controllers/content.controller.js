const db = require("../models");
const Contents = db.contents;
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

exports.saveCourseContent = (req, res) => {
  console.log("create message from controller");
  const contents = new Contents({
    contentId: req.body.contentId,
    courseName: req.body.courseName,
    userEmailId: req.body.userEmailId,
    video: req.body.video,
  });

  contents
    .save(contents)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured while creating contents",
      });
    });
};

exports.getAllContents = (req, res) => {
  Contents.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured while Retried data withe the",
        userEmail,
      });
    });
};

exports.updateVideo = (req, res) => {
  console.log("req.params._id", req.params);
  const id = (req.query.contentId);
  const title = req.query.videoTitle;

  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/search/",
    params: { q: title, hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "78a069165fmshfb32876cb72ab5cp12c804jsn7cb078f356bc",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("Video data", response.data.contents[0].video.title);
      let title = response.data.contents[0].video.title;
      console.log("Code", response.data.contents[0].video.videoId);
      let code = response.data.contents[0].video.videoId;
      const videoObj = {
        videoTitle: title,
        videoCode: code,
      };
      Contents.findOneAndUpdate({contentId:id}, { $push: { video: videoObj } })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({});
        });
      console.log("video object", videoObj);
    })
    .catch(function (error) {
      console.error(error);
    });

  // console.log("content ID", id)
  // console.log("video object",videoObj)
};
