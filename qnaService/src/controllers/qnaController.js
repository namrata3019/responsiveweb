const QnA = require("../models/qna");


exports.post_qna = async (req, res) => {
  const qna = await new QnA(
    {
    courseId:req.body.courseId,
    username: req.body.username,
    question: req.body.question,
    dateofComment:new Date()
});
  qna.save().then(()=>{
    res.status(201).send(qna)
  }).catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.post_reply= async (req, res) => {
    try {
      const _id = req.params.commentId;
      const replyObj = {
        username: req.body.username,
        reply: req.body.reply,
        dateofComment:new Date()
      };
  
      const updateComment = await QnA.findOneAndUpdate(
        {commentId:_id},
        { $push: { replies: replyObj } },
        {
          new: true,
        }
      );
      res.send(updateComment);
    } catch (e) {
      res.status(400).send(e);
    }
  };

  exports.get_allCommentsByCourse = async (req, res) => {
    try {      
      const name = req.params.courseId;
      const commentData = await QnA.find({ courseId :name});
      if (!commentData) {
        return res.status(404).send();
      } else {
        res.send(commentData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  };
  