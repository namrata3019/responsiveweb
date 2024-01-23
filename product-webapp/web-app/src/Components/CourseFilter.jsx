import { SearchRounded } from "@material-ui/icons";
import CurrencyRupeeIcon from "../Images/rupee.png";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const CourseFilters = (props) => {
  const [searchField, setsearchField] = useState("");
  const [courseType, setcourseType] = useState("All");
  const [ownedBy, setOnwedBy] = useState("All");

  const courseOwnedByOpt = [
    {
      key: "",
      value: "All",
    },
    {
      key: "User",
      value: "User",
    },
  ];

  const courseTypeOpt = [
    {
      key: "",
      value: "All",
    },
  ];

  let author = [];
  let type = [];
  props.courses.forEach((course) => {
    const { mentorEmailId, courseType } = course;
    author.push(mentorEmailId);
    type.push(courseType);
  });

  author = new Set(author);
  type = new Set(type);

  author.forEach((author) => {
    courseOwnedByOpt.push({
      key: author,
      value: author,
    });
  });

  type.forEach((type) => {
    courseTypeOpt.push({
      key: type,
      value: type,
    });
  });

  const applyFilter = async () => {
    const filteredCourse = props.courses;
    console.log(filteredCourse)
    if (searchField !== "") {
      let tempCourse = [];
      filteredCourse.forEach((course) => {
        const { courseId, courseName, description, courseFee, mentorEmailId } =
          course;        
            const arr = courseName.split(" ");
            for (let index = 0; index < arr.length; index++) {
              const element = arr[index];
              if (element.toLowerCase().includes(searchField.toLowerCase())) {
                tempCourse.push(course);
                break;
              }
            }
      });
      
      props.setfilterCourses(tempCourse.slice().reverse());
      
    } else {
      props.setfilterCourses(props.courses.slice().reverse());
    }
  };

  return (
      <Grid
        container
        item
        direction={"column"}
        md={12}
        justifyContent="flex-start"
        style={{
          maxHeight:"8%"
        }}
      >
        <Grid
        item
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          item
          style={{
            borderRadius: "50px",
            margin: "10px",
            minWidth: "280px",
            width: "40%",
          }}
          required
          id="outlined"
          onChange={(e) => {
            setsearchField(e.target.value);
          }}
          variant="outlined"
          value={searchField}
          defaultValue={""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    applyFilter()
                  }}
                >
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            ),
            style: { borderRadius: "50px"  },
          }}
        />
      </Grid>
      </Grid>
  );
};

export default CourseFilters;
