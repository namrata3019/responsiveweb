const express = require("express");
const { default: mongoose } = require("mongoose");
const router = new express.Router();
const courseController = require("../controllers/courseController");
const multer = require("multer");

const Course = require("../models/courses");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/course",
  upload.single("courseImage"),
  courseController.post_courses
);

router.get("/courses", courseController.get_courses);
router.get("/courses/mentorEmailId/:mentorEmailId", courseController.get_courseByMentor);
router.get("/courses/:courseId", courseController.get_coursesById);
router.get(
  "/courses/learnerEmailId/:learnerEmailId",
  courseController.get_courseByLearner
);
router.patch("/courses/learner/:courseId", courseController.update_courseLearner);

module.exports = router;
