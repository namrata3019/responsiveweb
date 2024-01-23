import {
  Box,
  Card,
  CardMedia,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import "./CourseCard.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { addLearner, fetchContentByCourseId, fetchCourseById } from "../Service/CourseService";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import CreateIcon from "@mui/icons-material/Create";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import axios from "axios";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Form from "react-bootstrap/Form";
import {Link,useNavigate} from "react-router-dom";
import { createOrder, updateOrder } from "../Service/PaymentService";
import { addCart, getCartDetails } from "../Service/CartService";


function TabPanel(props) {  
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Course = () => {
  const navigate = useNavigate(); 
  const [course, setCourse] = React.useState(-1);
  const [content , setContent] = React.useState(-1);
  const [cart , setCart] = React.useState(-1);
  const [cartOption , setCartOption] = React.useState("Add to Cart");
  const [courseOption, setCourseOption] = useState("Enroll")
  const { courseId } = useParams();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (course < 0) {
      fetchCourseById(courseId).then((resp) => {
        console.log("course-->",resp.data[0])
        
        if(localStorage.getItem("role") == "MENTOR"){
          setCourseOption("Join Session")
        } else {
          resp.data[0].learner.forEach(({learnerEmailId }) => {
            if(learnerEmailId === localStorage.getItem('user')){
              // set enroll or Start Learning
              if(resp.data[0].courseType === "RECORDED") {
                setCourseOption("Start Learning")
              } else {
                setCourseOption("Join Session")
               }
            };
          })
        }
        setCourse(resp.data[0]);

      });
    }

    if(cart < 0) {
      getCartDetails(localStorage.getItem("user")).then((resp) => {
        console.log(resp.data.length)
        if(resp.data.length > 0) {
          console.log(resp.data[0]);
          setCart(resp.data[0])
          for (let index = 0; index < resp.data[0].ListOfCourses.length; index++) {
            const course = resp.data[0].ListOfCourses[index];
            console.log(course.courseId ,courseId)
            if(course.courseId == courseId){
              setCartOption("Go To Cart")
            }
            
          }
          

        }
      }).catch((e) => console.error(e))
    }
  }, [courseId, courseOption]);

 useEffect(() => {
  if (content < 0 )
  fetchContentByCourseId(courseId).then((resp) => {
    console.log("content-->",resp.data[0])
    resp.data.forEach((content) => {
      if(content.contentId == courseId) {
        setContent(content);
      }
    })

  });
 } ,[content])


  const validationSchema = Yup.object().shape({
  email: Yup.string()
  .required("Email is required")
  .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Enter valid email"),
  });
const { register,handleSubmit,formState } = useForm({
      resolver: yupResolver(validationSchema)
});
const { errors } = formState;
const onSubmit=(data)=>{
  console.log(data.email);
  axios.post('https://brainzo.stackroute.io/email-service/sendMail', {
      "recieverEmail": data.email,
      "messageBody": "Hi, \nHope you are having a good day. Your friend just recommeded a course for enhancing your skills. Checkout this course at https://brainzo.stackroute.io/course-service/brainzo/courses/"+courseId+"\n Team Brainzo",
      "subject": "Hi Checkout the Course"
  })
  .then(function (response) {
      console.log(response);
  })
}
  return (
    <>
      {course.courseImage && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} >
              <Grid item md={7} style={{marginLeft:"40", marginTop:"20"}}>
                <Item>
                  <Box sx={{ width: "100%" }}>
                   
                      <CardMedia
                        component="img"
                        width = "100%"
                        margin="10px"
                        height="auto"
                        aspect-ratio= {16/7}
                        src={`data:image/png;base64,${course.courseImage}`}
                        alt="react"
                      />
                   
                  </Box>
                </Item>
              </Grid>
              <Grid item md={8}>
                <Item>
         
                  <Grid container spacing={1} columns={8}>
                    <Grid item xs={7} style={{marginLeft:"20", marginTop:"20"}}>
                      <item>
                                

                              <div className="tittle">
                                <h2>{course.courseName}</h2>
                              </div>
                      </item>
                            
                        </Grid>
                        <Grid item xs={1}>
                          <Item><Grid item xs={1}>
                                    <item>
                                  

                                  <div className="share">
                                  
                                    <Button onClick={toggle}>
                                    <IconButton aria-label="share">
                                                                    <ShareIcon />
                                                                    
                                                                  </IconButton>
                                    </Button>
                                    <Modal isOpen={modal} toggle={toggle}  centered={true}>
                                      <ModalHeader toggle={toggle}>Share</ModalHeader>
                                      <ModalBody>


                                      <Grid  className="shareBody">
            <div className="email" >
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label className="label">Share with Friends </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                        <p className="error">{errors.email?.message}</p>
                    <button className="btn" type="submit" style={{paddingLeft:5  , paddingRight:5}} onClick={toggle}>
                        Share
                    </button>
                    </Form>
                    </div>
                    </Grid>




                                     
                                      </ModalBody>
                                      
                                    </Modal>
                                  </div>
                                      
                                
                                 

                                
                                    </item>
                                  </Grid></Item>
                        </Grid>
                      </Grid>
 
                
                  <div className="created">
                    <h3>
                      <div
                        style={{
                          alignItems: "center",
                          flexWrap: "wrap",
                          paddingTop:5,
                          paddingBottom:5
                        }}
                      >
                        <CreateIcon /> Created By {course.mentorEmailId}
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          flexWrap: "wrap",
                          paddingTop:5,
                          paddingBottom:5
                        }}
                      >
                        <ClosedCaptionOffIcon /> Language : {course.language}
                      </div>
                      <div
                        style={{
                          alignItems: "center",
                          flexWrap: "wrap",
                          paddingTop:5,
                          paddingBottom:5
                        }}
                      >
                        <VideoLibraryIcon /> Course {course.courseType}{" "}
                      </div>
                    </h3>
                    <h2
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <br />
                      <br />
                      <CurrencyRupeeSharpIcon /> {course.courseFee}{" "}
                    </h2>
                   { ((localStorage.getItem("role") == "LEARNER" || localStorage.getItem("role") == "MENTOR" ) && courseOption != "Enroll") && <button  className="Btn-Login text-light course-button" type="submit" style={{paddingLeft:30  , paddingRight:30,
                    paddingTop:10,paddingBottom:10}}
                    onClick={(e) => {
    if(courseOption === "Enroll"){let payment = JSON.stringify({ mentorEmailId: course.mentorEmailId,
    learnerEmailId: "usereamil",
    courseId: course.courseId,
    courseName: course.courseName,
    coursePrice:course.courseFee
  });
    let file = new File([course.courseImage.data], "File name",{ type: "image/jpg" });
    const formData = new FormData();  
    formData.append("payment",payment);
    formData.append("file", file);
    createOrder(formData).then((response) => {
    var options = {
      "key": "rzp_test_VSXaldpnOyIKkN", 
      "amount": course.coursePrice, 
      "currency": "INR",
      "name": course.courseName,
      "description": "Course Description",
      
      "order_id": response.data.orderId,
      "prefill": {
          "name": "Gaurav Kumar",
          "email": localStorage.getItem("user"),
          "contact": "1234567890"
      },
      "notes": {
          "address": "Braizno Corporate Office"
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
        const {razorpay_order_id:orderId, razorpay_payment_id:paymentId } = resp;
        updateOrder({orderId,paymentId}).then((resp) => {
          addLearner({
            learnerEmailId : localStorage.getItem("user"),
          }, course.courseId).then((resp) => {
            // here change enroll to Learn more
            if(course.courseType === "RECORDED") {

              setCourseOption("Start Learning")

            } else {
              
              setCourseOption("Join Session")
            }
          })
        }).catch((e) => console.log(e));
      },
      "error":(resp) => {
        console.log("error ", resp)
      },
  };
  let rzp1 = window.Razorpay(options);
  rzp1.open();
  e.preventDefault();
  rzp1.on('payment.failed', function (response){
    console.log('payment.failed',response.error)
    
})
  });} else {
    if(course.courseType === "RECORDED") {

      navigate(`/courses/${course.courseId}/learning`)

    } else {
      
      navigate(`/meeting/nd5j-d0yu-3g25`)
    }
  }
  }}
                    type="submit" style={{paddingLeft:30  , paddingRight:30,
                    paddingTop:10,paddingBottom:10}}>
                      {courseOption}
                    </button>
                    }
                    { ((localStorage.getItem("role") == "LEARNER" ) && courseOption == "Enroll") && <button  className="Btn-Login text-light course-button" type="submit" style={{paddingLeft:30  , paddingRight:30,
                    paddingTop:10,paddingBottom:10}}
                    onClick={(e) => {
                      if(cartOption == "Add to Cart") {
                        addCart({
                          learnerEmailId:localStorage.getItem("user"),
                          coursePrice:course.courseFee,
                          ListOfCourses:course
                        }).then((data) => {
                          console.log(data);
                          setCourseOption("Enroll")
                          setCartOption("Go To Cart")
                        });
                      } else {
                        navigate("/cart")
                      }
                    }}
                    style={{paddingLeft:30  , paddingRight:30,
                    paddingTop:10,paddingBottom:10}}>
                      {cartOption}
                    </button>
                    }
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <>
            { content   && <Grid className="CourseContent">
              <br />
              <h3>Course Content</h3>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Overview" {...a11yProps(0)} />
                    {course.courseType === "RECORDED" &&   <Tab label="Topics" {...a11yProps(1)} /> }
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="description">
                    <h4>What you'll learn</h4>
                    {course.description}
                  </div>
                </TabPanel>
               {course.courseType === "RECORDED" && <TabPanel value={value} index={1}>
                  <div className="topics">
                  <ul>
                  {content.video && content.video.map((video, index) =>  <li key={index}>{video.videoTitle}</li>)}
                  </ul>
                  </div>
                </TabPanel>}
              </Box>
            </Grid>}
          </>
        </>
      )}
    </>
  );
};
export default Course;
