import { Grid, Pagination } from "@mui/material";

const CustomPagination = (props) => {
  const handleChange = (event, value) => {
    props.setPage(value);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
    >
      <Grid item alignContent={"centre"}>
        <Pagination
          page={props.page}
          count={Math.round(props.courses.length / 6)}
          size="large"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default CustomPagination;
