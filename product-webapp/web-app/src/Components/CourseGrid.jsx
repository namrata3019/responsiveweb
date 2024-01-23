import { Grid } from "@mui/material";
import CourseCard from "./CourseCard";
import NotFound from "./NotFound";

const   CourseGrid = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="normal"
      alignItems="center"
      spacing={2}
      style={{
        minHeight:"400px"
      }}
      
    >
      {!(props.courses.length > 0) ? (
        <NotFound page={false} />
      ) : (
        props.courses
          .concat([...Array(6 - props.courses.length)])
          .map((value, index) => {
            return <CourseCard index={index} course={value} />;
          })
      )}
    </Grid>
  );
};

export default CourseGrid;
