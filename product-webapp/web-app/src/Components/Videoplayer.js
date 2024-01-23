import React from "react";
import "../css/video.css";
import { CardContent, Typography } from "@material-ui/core";
import Coursecontent from "./Coursecontent";
import Reviews from "./Reviews";
import QNA from "./QNA";
import "../css/reviews.css";
import { useState } from "react";
import { useEffect } from "react";
import { getAllContents } from "../Service/api.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

function Videoplayer() {
  const [videoId, setvideoId] = useState(" ");
  const [contents, setContent] = useState([]);
  const { courseId } = useParams();
  const [contentId,setContentId]=useState();

  useEffect(() => {
    if (contents.length === 0) {
    axios.get(`https://brainzo.stackroute.io/content-service/brainzo/content/getContent`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Mongo API CourseContent", response.data);
          response.data.forEach((content) => {
            if(content.contentId == courseId) {
              setContentId(content.contentId);
              console.log(content.contentId, courseId)
              setContent(content.video);
              setvideoId(content.video[0].videoCode);
            }
          }
          )
          

        }
      });
    }
  }, [contents]);

  useEffect(() => {
    console.log("videoId", videoId);
  }, [videoId]);
  useEffect(() => {
    console.log("contentId",contentId);
  }, [contentId]);

  return (
    <div>
      <CardContent className="player">
        <Typography component="h5" variant="h5">
          {/* {props.data.title} */}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {/* {props.data.video} */}
        </Typography>
        <iframe
          style={{ border: "3px solid indigo" }}
          id="video"
          width="70%"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Coursecontent setvideoId={setvideoId} contents={contents} />
      </CardContent>
      <Box className="reviews" sx={{ width: "68.6%", typography: "body1" }}>
        <QNA contentId={courseId} />
      </Box>
      {/* <Reviews /> */}
    </div>
  );
}

export default Videoplayer;
