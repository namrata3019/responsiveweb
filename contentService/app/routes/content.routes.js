module.exports = (app) => {
  const contents = require("../controllers/content.controller");

  var router = require("express").Router();
  router.post("/addContent", contents.saveCourseContent);
  router.get("/getContent", contents.getAllContents);
  router.put("/updateVideo", contents.updateVideo);

  app.use("/brainzo/content", router);
};
