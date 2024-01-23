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
import {useLocation, useNavigate,Link } from 'react-router-dom';

function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const getotp=  location.state.otp;
const  userEmail=location.state.email;

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
        .required('OTP is required')
        .matches(getotp,'incorrect OTP')
      
   

        
});
 



  // get functions to build form with useForm() hook
  const { register,handleSubmit,formState } = useForm({
  
    resolver: yupResolver(validationSchema)
  });
  const { errors } = formState;
  const onSubmit=(data)=>{
  
    console.log(data);
    console.log(getotp);
  
        navigate('/signup',{state:{email:userEmail}});      

      
    
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
                          <h3>Verify Your Email</h3>
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
                             
                              
                                  <Form.Label column sm={{ span: 8, offset: 2 }}>Enter OTP sent to:
                                  {location.state.email}
                                  </Form.Label>
                                  
                                  <Col sm={{ span: 8, offset: 2 }}>
                                  <Form.Control
                                    type="text"
                                    placeholder=" "
                                    {...register('otp')} className={`form-control ${errors.otp? 'is-invalid' : ''}`} 
                                  /><p className="error">{errors.otp?.message}</p>
                              
                               </Col>
                               
                                
                             
                            
                              
                            </Form.Group>
                            
                            
                            <div className="d-flex justify-content-center">
                            
                           
                         
                          
                              <Button className="text-light" id="Btn-Login" type="submit">
                                Verify OTP
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

export default Otp;
