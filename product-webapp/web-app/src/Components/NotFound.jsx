import { CardMedia, Grid, Typography } from "@mui/material";
import notFound from "../Images/NotFound.jpg";
import emptyPage from "../Images/empty.jpg";

const NotFound = (props) => {
  const image = props.page ? notFound : emptyPage;
  const message = props.page ? "Page Not Found !!!" : "Courses Not Found !!!";
  return (
    <Grid container item justifyContent={"center"} alignContent="center">
      <Grid container fullWidth justifyContent={"center"} alignContent="center">
        <Grid item>
      <CardMedia component={"img"} image={image} height={"500px"} width={500} />
      <Typography variant="h3" textAlign={"center"}>
        {message}
      </Typography>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default NotFound;
