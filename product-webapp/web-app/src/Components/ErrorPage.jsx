import { CardMedia, Grid, Typography, Paper } from "@mui/material";
import errorPage from "../Images/error.jpg";

const ErrorPage = (props) => {
  const image = errorPage;
  const message = "Server Error !!!";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Paper
        style={{
          marginTop: "90px",
        }}
      >
        <CardMedia component={"img"} image={image} height={800} />
        <Typography variant="h3" textAlign={"center"}>
          {message}
        </Typography>
        <br />
        <br />
      </Paper>
    </div>
  );
};

export default ErrorPage;
