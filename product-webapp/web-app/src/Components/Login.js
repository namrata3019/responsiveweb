import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Image from "react-bootstrap/Image";
import Img from "./profile.png";
import Img1 from "./student.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Authentication from "../Service/Authentication";
import React,{ useState,useEffect } from "react";
import {Link,useNavigate,useLocation} from "react-router-dom";





function Login({isLoggedIn , setLoggedIn}) {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
   
    email: Yup.string()
      .required("Email is required")
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Enter valid email"),
  });

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;
  

            
  const onSubmit = (udata) => {

  
    
    Authentication(udata).then((data) => {
      console.log(data.data.role);
      localStorage.setItem("isLoggedIn" , true)
      localStorage.setItem("user" , udata.email)
      localStorage.setItem("role" , data.data.role.toUpperCase())
  
      setLoggedIn(true);
      {if(data.data.role=="mentor"){
        navigate("/addcourses");
      }else{
        navigate("/courses");
      }}
    
    }).catch((e) => {
      console.log(e)

    });
  };

  useEffect(() => {
    console.log(isLoggedIn , "login")
  }, [isLoggedIn])

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="py-3">
              <Card style={{ transform: "none" }}>
                <Row className=" py-2 px-3">
                  <Col md={6} className="intro text-center ">
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

                  <Col md={{ span: 4, offset: 1 }}>
                    <div className="formarea ">
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h3>Login</h3>
                        </Card.Title>
                        <Card.Text>
                          <div className="text-center">
                            <Image src={Img} roundedCircle />
                          </div>

                          <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3 text-left py-4">
                              <Row className="justify-content-center">
                                <Col sm={8}>
                                  <Form.Label column>Email </Form.Label>

                                  <Form.Control
                                    type="text"
                                    placeholder=" "
                                    {...register("email")}
                                    className={`form-control ${
                                      errors.email ? "is-invalid" : ""
                                    }`}
                                  />
                                  <p className="error">
                                    {errors.email?.message}
                                  </p>

                                
                                  

                                  <Form.Label column>Password </Form.Label>

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
                              </Row>
                            </Form.Group>

                            <div className="d-flex justify-content-center">                                               
                                <Button className=" btn-lg text-light" id="Btn-Login" type="submit">
                                Login
                              </Button>
                            </div>
                          </Form>

                          <div className="text-center">
                            <p>Not an existing user?</p>
                            <Link
                              to="/emailVerify"
                              style={{ color: "blue", textDecoration: "none" }}
                            >
                              SignUp
                            </Link>
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


export default Login;
