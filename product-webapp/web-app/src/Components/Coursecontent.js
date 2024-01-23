import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import "../css/content.css";
import "../css/video.css";
// import playIcon from "./images/play.svg"

// function generate(element) {
//   return [0, 1, 2, 4,5,6].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

function Coursecontent(props) {
  const { setvideoId, contents } = props;

  console.log(props);

  return (
    <Box className="content" sx={{ flexGrow: 2, maxWidth: 1120 }}>
      <List>
        <li>
          <Button className="course-btn" sx={{ mt: 2 }}>
            Course Content
          </Button>
        </li>
        {/* {generate( */}
        {/* <ListItem>
                    <ListItemText primary="Lession 1" />
            <IconButton edge="end" npmaria-label="play">
              <PlayCircleIcon />
            </IconButton>
          </ListItem> */}
        <div>
          {contents.map((cont) => {
            console.log({ cont });
            return (
              <ListItem value={cont.value}>
                <ListItemText className="courseName" value={cont.value}>{cont.videoTitle}</ListItemText>
                <button 
                className="playIcon"
                  value={cont.videoCode}
                  onClick={(e) => {
                    console.log("onCliick", e.target.value);
                    setvideoId(e.target.value);
                  }}
                  edge="end"
                  npmaria-label="play"
                ><span class="icon"></span>
                </button>
              </ListItem>
            );
          })}
        </div>
        {/* )} */}
      </List>
    </Box>
  );
}
export default Coursecontent;
