import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddCourses.css";
import Image from "react-bootstrap/Image";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React,{ useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import Message from "./Message";

function AddCourses() {
  const navigate = useNavigate();  
  const [selectedFile, setSelectedFile] = React.useState(null);
const [udata, setData] = useState({
  "mentorEmailId": localStorage.getItem("user"),
  "courseName": " ",
  "courseFee": " ",
  "description": " ",
  "courseType": " ",
   "language": " ",
   "learner":[]
})

  const handleChange = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setData({...udata,[name]:value})
  };
  
  const handleSubmit = async(event) =>{
    event.preventDefault();
    const formData = new FormData();
    console.log(udata);
  
    formData.append("mentorEmailId",JSON.stringify(localStorage.getItem("user")));   
    formData.append("courseName",udata.courseName);
    formData.append("courseFee",udata.courseFee);
    formData.append("description",udata.description);
    formData.append("courseType",udata.courseType);
    formData.append("language",udata.language);
    formData.append("learner",[]);
    formData.append("courseImage", selectedFile);


    try {
      const response = await axios({
        method: "post",
        url: "https://brainzo.stackroute.io/course-service/brainzo/course",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.courseId);
      var data = JSON.stringify({
        "contentId": response.data.courseId,
        "courseName": response.data.courseName,
        "userEmailId": localStorage.getItem("user"),
        "video": [
         
        ]
      });
      
      var config = {
        method: 'post',
        url: 'https://brainzo.stackroute.io/content-service/brainzo/content/addContent',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      const response2 = await axios(config);
      console.log(response2);    
      navigate("/mycourse")
    } catch(error) {
      console.log(error)
    }
  
  
  }


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])

    console.log(selectedFile);
  }

  return (
    <div>
     
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="py-3">
              <Card style={{   'transform': 'none'
}}>
                <Row className=" py-2 px-3 ">
              
                 
                  <Col  >
                    <div className="formarea ">
                      <Card.Body>
                        <Card.Title className="text-center">
                          <h3>Add Course</h3>
                        </Card.Title>
                        <Card.Text>
                         
                        
                          <Form onSubmit={handleSubmit} className="text-dark font-weight-bold">
                         
                            <Form.Group
                              className="mb-3 text-left py-4"
                              
                            > 
                             <Row className="justify-content-center">
                             <Col sm={12} >
                             
                                  <Form.Label column >Course Name </Form.Label>
                                 
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter course name"
                                    name="courseName"
                                    onChange={handleChange}
                                    value={udata.courseName}
                                   
                                  />
                               
                              
                               
                               
                              
                             
                            
                              
                                  <Form.Label column >Course Description </Form.Label>
                                  
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Description"
                                    name="description"
                                    onChange={handleChange}
                                    value={udata.description}
                                     />


                                  <Form.Label column >Course Fee </Form.Label>
                                 
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter course fee"
                                    name="courseFee"
                                    onChange={handleChange}
                                    value={udata.courseFee}                                   
                                  />
                                
                                  <Form.Label column >Course Type </Form.Label>
                                

                               
                                <Form.Select aria-label="select "
                                name="courseType"
                                onChange={handleChange}
                                value={udata.courseType}                               
                                 >
                                    <option>select </option>
                                    <option value="RECORDED">Record</option>
                                    <option value="LIVE">Live</option>
                                    
                                  </Form.Select>
                                  <Form.Label column >Language </Form.Label>
                                  <Form.Select aria-label="select "
                                name="language"
                                onChange={handleChange}
                                value={udata.language}                               
                                 >
                                    <option>select </option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    
                                  </Form.Select>
                              
                            
                            <Form.Label>Course Image</Form.Label>
                            <Form.Control type="file" 
                            onChange={handleFileSelect}
                               />
                           
                       
                              
                                </Col>
                              </Row>
                            </Form.Group>
                          
                           
                            
                            <div className="d-flex justify-content-center">
                            
                           
                          
                          
                              <Button className="btn-lg text-light" id="Btn-Add" type="submit">
                                Add Course
                              </Button>
                            </div>

                            <br />
                          </Form>
                          
                        
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

export default AddCourses;