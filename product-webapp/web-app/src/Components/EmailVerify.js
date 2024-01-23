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
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React,{ createContext, useState,useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";




function EmailVerify() {
  const navigate = useNavigate();  
  const axios = require('axios')

 
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .required("Email is required")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Enter valid email"),
      
   

        
});
const otpemail = Math.floor(1000 + Math.random() * 9000);

 

  // get functions to build form with useForm() hook
  const { register,handleSubmit,formState } = useForm({
   
    resolver: yupResolver(validationSchema)
  });
  const { errors } = formState;
  const onSubmit=(data)=>{
   
    console.log(data.email);

  axios.post('https://brainzo.stackroute.io/email-service/sendMail', {
    "recieverEmail": data.email,
     "messageBody": otpemail,
    "subject": " otp for brainzo"
  })
  .then(function (response) {
    console.log(response);
  })

    navigate('/otp',{state:{email:data.email,otp:otpemail}});  
   
   
  };

  console.log(errors);
  

  return (
    <div>
  
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="py-3">
              <Card style={{   'transform': 'none'
}}>
                <Row className=" py-2 px-3">
              
                  <Col md={5} className="intro text-center ">
                    <br/>
                    
                    <h2>Brainzo</h2>
                  <br/>
                 
                    <p>
                      An Interactive learning portal for students as well as
                      working professionals to enhance their skills. Find the right instructor for you. Choose from many topics, skill levels, and languages.......
                    </p><br/>
                    <Image src={Img1} className="img-fluid p-2" /><br/>
                    <Link to="/">Want to know more about us?</Link>
                  </Col>
                
                  <Col md={{ span: 4, offset: 2 }}>
                    <div className="formarea ">
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h3>Let us know about you</h3>
                        </Card.Title>
                        <Card.Text>
                          <div className="text-center">
                            <Image src={Img} roundedCircle />
                          </div>
                        
                          <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group
                            as={Row} 
                              className="mb-3 text-center py-4"
                              
                            > 
                             
                              
                                  <Form.Label column sm={{ span: 8, offset: 2 }}>Enter your email to proceed:</Form.Label>
                                  <Col sm={{ span: 8, offset: 2 }}>
                                  <Form.Control
                                    type="email"
                                    placeholder=" "
                                    {...register('email')} className={`form-control ${errors.email? 'is-invalid' : ''}`} 
                                  /><p className="error">{errors.email?.message}</p>
                              
                               </Col>
                               
                                
                             
                            
                              
                            </Form.Group>
                            
                            
                            <div className="d-flex justify-content-center">
                            
                           
                          
                          
                              <Button className=" text-light" id="Btn-Login" type="submit">
                                Submit
                              </Button>
                            </div>

                            <br />
                          </Form>
                          <br />
                          
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

export default EmailVerify;
