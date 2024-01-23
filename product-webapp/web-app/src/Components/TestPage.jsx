import { Button, Paper, Snackbar , Alert } from "@mui/material"
import axios from "axios";
import { useState } from "react";


const TestPage = ({severity, messsage }) => {
  
  return <Paper>
    <Button 
    
    >
      Pay
    </Button>
  </Paper>
}

export default TestPage;
/*

import { SearchRounded } from "@material-ui/icons";
import CurrencyRupeeIcon from "../Images/rupee.png";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const TestPage = () => {
  return (
    <Paper
      container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        border: "2px dashed red",
      }}
    >
      <Grid
        item
        container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          border: "2px solid blue",
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
            console.log(e.target.value);
          }}
          variant="outlined"
          value={""}
          defaultValue={""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    console.log("Clicked", e);
                  }}
                >
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            ),
            style: { borderRadius: "50px" },
          }}
        />
      </Grid>
      <Grid
        item
        container
        overflow={"scroll"}
        padding={1}
        spacing="1px"
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100%",
          border: "2px solid green",
        }}
      >
        {[1,2,3,4,5,6].map(() =><Grid item xs={12} md={6} lg={3}
        sx={
          {
            border:"2px dashed blue",
            overflow:"hidden"
          }
        }
        >
          <Card
          sx={{
              justifyContent: "center",
              padding:1,
              width: "100%",
              border: "2px solid green",
            }}
          >
            <CardMedia
              component="img"
              src="https://img-b.udemycdn.com/course/480x270/394676_ce3d_5.jpg"
              style={{
                justifyContent: "center",
                position:"relative",
                height: "250px",
                width: "100%",
                padding: "10px",
                border: "2px solid green",
                borderRadius: "22px",
              }}
            />
            <CardContent>
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
                }}
              >
                The Complete React Native + Hooks Understand React Native with
                Hooks, Context, and React Navigation.
              </Typography>
              <Typography
                gutterBottom
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  fontSize: "13px",
                  fontWeight: "300",
                  fontColor: "#443f3f",
                }}
              >
                Create real-world native apps using React Native . Make truly
                reusable components that look great.Understand the terminology
                and concepts of Redux.Prototype and deploy your own applications
                to the Apple and Google Play Stores.Get up to speed with React
                design principles and methodologies.Discover mobile design
                patterns used by experienced engineers.
              </Typography>
              <Typography
                gutterBottom
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontSize: "11px",
                  fontWeight: "150",
                  color: "#443f3f",
                }}
              >
                Live Session / Course By -- instrcuit
              </Typography>
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
                  {500}
              </Typography>
            </CardContent>
          </Card>
        </Grid>)}
      </Grid>
      <Grid
        item
        container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          minHeight: "80px",
          border: "2px solid black",
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
            console.log(e.target.value);
          }}
          variant="outlined"
          value={""}
          defaultValue={""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    console.log("Clicked", e);
                  }}
                >
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            ),
            style: { borderRadius: "50px" },
          }}
        />
      </Grid>
    </Paper>
  );
};

export default TestPage;



/*
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
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                The Complete React Native + Hooks Understand React Native with
                Hooks, Context, and React Navigation.
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
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  fontSize: "13px",
                  fontWeight: "300",
                  fontColor: "#443f3f",
                }}
              >
                Create real-world native apps using React Native . Make truly
                reusable components that look great.Understand the terminology
                and concepts of Redux.Prototype and deploy your own applications
                to the Apple and Google Play Stores.Get up to speed with React
                design principles and methodologies.Discover mobile design
                patterns used by experienced engineers.
              </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="text.primary">
                  {course.courseType}
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
                  fontSize: "11px",
                  fontWeight: "150",
                  color: "#443f3f",
                }}
              >
                Live Session / Course By -- instrcuit
              </Typography>
              </Grid>
              <Grid item minWidth={50} style={{ verticalAlign: "middle" }}>
                
              </Grid>
            </Grid>



<Grid container item style={{ height: "100%", width: "100%" }} >
        {[1, 2, 3, 4].map((card) => (
          <Card
            style={{
              minWidth: "300px",
              minHeight: "400px",
              height: "50%",
              width: "33%",
            }}
            xs={12}
            md={12}
          >
            <CardMedia
              style={{ height: "50%", width: "100%" }}
              component="img"
              src="https://i.picsum.photos/id/997/200/300.jpg?hmac=NeXq5MvhpKvGEq_X3jULp2C3Lg-8IQK8bdtnyJeXDIQ"
            />
            <CardContent style={{ height: "50%", width: "100%" }}>
              Kunal
            </CardContent>
          </Card>
        ))}
      </Grid>



/////////////////////////////////////////////////////
Payment

    var options = {
    "key": "rzp_test_MQMXX4nrBFTO02", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "course Titile",
    "description": "course Transaction",
    
    "order_id": "order_KNej0bEna1M1G5", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "abc@xyz.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    },
    "modal":{
      "confirm_close" : true,
      "animation":true

    },
    "retry":{
      enabled:true,
      max_count:4
    },
    "timeout":300,
    "handler":(resp) => {
      console.log(resp)
      const {razorpay_order_id:orderId, razorpay_payment_id:paymentId } = resp;
      axios.put("http://localhost:8099/brainzo/payment/update" , {orderId,paymentId}).then((resp) => {
        console.log(resp.data);
        // redirect to courseLearningPage
      }).catch((e) => console.log(e));
    },
    "error":(resp) => {
      console.log("error ",resp)
    },
};
  return <Paper>
    <Button onClick={(e) => {
      console.log("Clicked")
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
      e.preventDefault();
      rzp1.on('payment.failed', function (response){
        console.log('payment.failed',response.error)
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    })

      // call API for orderCreation
      // after OrderCreation Call Razorpay with api options
      // handle Update on Success and Failure

    }}>
      Pay
    </Button>
  </Paper>

*/


