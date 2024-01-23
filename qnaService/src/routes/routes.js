const express = require("express");
const { default: mongoose } = require("mongoose");
const router = new express.Router();
const QnA = require("../controllers/qnaController");


router.post(
  "/addcomment",
 QnA.post_qna
);
router.patch("/reply/:commentId", QnA.post_reply);
router.get("/allComments/:courseId",QnA.get_allCommentsByCourse);

module.exports = router;