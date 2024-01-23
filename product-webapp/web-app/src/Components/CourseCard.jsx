import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Icon,
} from "@mui/material";
import CurrencyRupeeIcon from "../Images/rupee.png";
import "../App.css";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      style={{minHeight:"350x" , maxHeight:"350x",}}
    >
      {course ? (
        <Card className="card">
          <Link to={`${course.courseId}`}>
          <CardMedia
              component="img"              
              src={`data:image/png;base64,${course.courseImage}`}
              style={{
                justifyContent: "center",
                position:"relative",
                height: "200px",
                width: "100%",
                borderRadius: "22px",
                alignContent:"center",
                
              }}
            />
            </Link>
          <CardContent>
          <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  fontSize: "16px",
                  fontWeight: "700",
                  height:"38px"
                }}
              >
                {course.courseName}
              </Typography>
              </Grid>
              <Grid item>
                <Typography
                gutterBottom
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontSize: "13px",
                  fontWeight: "300",
                  height:"40px",
                  fontColor: "#443f3f",
                }}
              >
               {course.description}
              </Typography>
              </Grid>
              
              <Grid item>
                <Typography
                gutterBottom
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontSize: "14px",
                  fontWeight: "200",
                  height:"20px",
                  borderRadius:20,
              }}
              >
                {course.courseType !== "RECORDED" ? `Live Session` : `Created`}
                {" by "}
                {course.mentorEmailId}
              </Typography>
              </Grid>
              <Typography 
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontSize: "16px",
                  fontWeight: "700",
                  verticalAlign:"middle",
                  marginTop:"8px"
                }}
              >
                  <img
                    src={CurrencyRupeeIcon}
                    style={{
                      height:"16px",
                      verticalAlign: "middle",
                      marginBottom: 4,
                    }}
                  />
                  {course.courseFee}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      ) : null}
    </Grid>
  );
};

export default CourseCard;
