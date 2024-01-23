import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import Image from "react-bootstrap/Image";
import Img from "./profile.png";
import Img1 from "./student.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React,{ useState ,useEffect} from "react";
import Toggle from "./Toggle";
import Register from "../Service/Register";
import {Link,useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import axios from "axios";


function SignUp({isLoggedIn , setLoggedIn}) {
  const navigate = useNavigate();  
  const location = useLocation();
  const getEmail=location.state.email;
 
  
  const [toggleData, settoggleData] = useState("learner");
 
  
  
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  
    mobilenumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
        "Enter valid phone number"
      ),
  
    firstname: Yup.string().required("Full name is required"),
    lastname: Yup.string().required("Full name is required"),
   
   

  });

  // get functions to build form with useForm() hook
  const { register, setValue, handleSubmit, formState } = useForm({
    mode: "onChange",
   
    resolver: yupResolver(validationSchema),
  });
  
  const { errors } = formState;
  const onSubmit = (data) => {

    setValue('role', toggleData);
console.log(data);

   const axiosrequest1 = axios.post("https://brainzo.stackroute.io/user-service/api/brainzo/v1/signup",{"firstName":data.firstname,
   "lastName": data.lastname,
   "emailId":getEmail,
   "mobileNumber": data.mobilenumber,
   "password": data.password,
   "role": toggleData.toUpperCase(),
   "city": "",
   "state":"",
   "country":""
  });
 
 
axios.all([axiosrequest1]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
 
 
  navigate('/login')

})).catch(errors => {
  console.log(errors)
})
  }

  console.log(errors);

  return (
    <div>
     
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="py-3">
              <Card style={{   'transform': 'none'
}}>
                <Row className="justify-content-between py-2 px-3">
                  <Col  className="intro text-center ">
                    <br />

                    <h2>Brainzo</h2>
                    <br />

                    <p>
                      An Interactive learning portal for students as well as
                      working professionals to enhance their skills. Find the
                      right instructor for you. Choose from many topics, skill
                      levels, and languages.......
                    </p>
                    <br />
                    <Image src={Img1} className="img-fluid p-2" />
                    <br />
                    <Link to="/">Want to know more about us?</Link>
                  </Col>

                  <Col lg={6}>
                    <div className="formarea">
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h3>SignUp</h3>
                        </Card.Title>
                        <Card.Text>
                          <div className="text-center">
                            <Image src={Img} roundedCircle />
                          </div>
                          <Form onSubmit={handleSubmit(onSubmit)}>

                          <Row className="justify-content-center ">
                                <Col lg={9} className="py-2 text-center" >
                                
                                <Toggle toggleData={settoggleData} {...register('role',{required:true}) }/>
                             
                                </Col>
                                </Row>
                            <Form.Group 
                             className="mb-3 text-left">
                             
                                <Row className="justify-content-center ">
                                <Col lg={5}>
                                  <Form.Label >First Name</Form.Label>
                                  <Form.Control 
                                    type="text"
                                    placeholder=" "
                                    {...register("firstname")}
                                    className={`form-control ${
                                      errors.firstname ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.firstname?.message}
                                  </p>
                                </Col>
                                <Col lg={5}>
                                  <Form.Label >Last Name</Form.Label>
                                  <Form.Control 
                                    type="text"
                                    placeholder=" "
                                    {...register("lastname")}
                                    className={`form-control ${
                                      errors.lastname ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.lastname?.message}
                                  </p>
                                </Col>
                             
                              </Row>
                              <Row className="justify-content-center">
                                <Col lg={5}>
                                  
                                        <Form.Label >Email address</Form.Label>
                               
                                        <Form.Control 
                                    type="email"
                                    value={location.state.email}
                                    placeholder=" "
                                    
                                    disabled
                                  />

                                     
                                </Col>
                                <Col lg={5}>
                                  <Form.Label >Phone Number</Form.Label>
                                  <Form.Control
                                  
                                    type="tel"
                                    placeholder=" "
                                    {...register("mobilenumber")}
                                    className={`form-control ${
                                      errors.mobilenumber ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.mobilenumber?.message}
                                  </p>
                                </Col>
                               
                            </Row>
                            </Form.Group>

                            <Form.Group className="mb-3 text-left">
                              <Row className="justify-content-center">
                                <Col lg={5}>
                                  <Form.Label >Password</Form.Label>
                                  <Form.Control
                                
                                    type="password"
                                    placeholder=" "
                                    {...register("password")}
                                    className={`form-control ${
                                      errors.password ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.password?.message}
                                  </p>
                                </Col>
                                <Col lg={5}>
                                  <Form.Label >Confirm Password</Form.Label>
                                  <Form.Control
                                  
                                    type="password"
                                    placeholder=" "
                                    {...register("confirmPassword")}
                                    className={`form-control ${
                                      errors.confirmPassword ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.confirmPassword?.message}
                                  </p>
                                </Col>
                        
                              </Row>
                            </Form.Group>

                            <div className="d-flex justify-content-center ">
                             
                           
                               

                              <Button className="btn-lg text-light" id="Btn-Submit" type="submit">
                                SignUp
                              </Button>
                            </div>

                            <br/>
                          </Form>
                          
                          <div className="text-center">
                      <p>Already an existing user?</p>
                      <Link to="/login" style={{'color':'blue','textDecoration':'none'}}>Login</Link>
                    </div>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
