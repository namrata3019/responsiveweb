import React, { useEffect, useState } from "react";
import { FormGroup, Row, Label, Input, Form, Button } from "reactstrap";
import { Col } from "reactstrap";
import "./userprofile.css";
import { editUser, fetchUser } from "../Service/userService";
import { axios } from "axios";
import CreateIcon from '@mui/icons-material/Create';
import EditOffIcon from '@mui/icons-material/EditOff';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

function UserProfile() {
  const [userinfo, setUserInfo] = useState({
    firstName:"Laksh",
   lastName:"Patidar"
  });

  const [isEditable, setIsEditable] = useState(false);
  const editable = ()=>{
    setIsEditable(!isEditable)
  }

  const onChange = (e) => {
    setUserInfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    userDetails();
  }, []);

  useEffect(() => {
    
  }, [isEditable]);

  

  const navigate = useNavigate()

  const userDetails = async () => {
    const response = await fetchUser(localStorage.getItem("user"));
    setUserInfo(response.data[0]);
    console.log("USER",response.data)
  };

  console.log("Hello mongo response", userinfo);

   const updateProfile = (e) => {
    editUser(localStorage.getItem("user"),userinfo)
      .then((response) => {
        if (response.status == 200) {
          console.log("Hello form Put", response.data);
          // navigate('/userprofile')
          setIsEditable(false);
        }
      })
      .catch((error) => {
        console.log("Error While Putting Data", error.message);
      });
  };

  var firstName = "Laksh"
  var lastName = "Patidar"
  var initials = firstName[0] + lastName[0]; 

  return (
    <div className="auth-wrapper auth-inner">
      <IconButton style={{alignSelf:"end" }}onClick={() => editable()}>
     {!isEditable ? <CreateIcon style={{ color: "blue"}}/>  : <EditOffIcon style={{ color: "blue"}}/>  }
        </IconButton>
      <Form className="box3">
        <div class="circle">
          <h1 className="letters">{userinfo ? userinfo.firstName[0].toUpperCase() + userinfo.lastName[0].toUpperCase() : ""}</h1>
        </div>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                id="Name"
                name="firstName"
                placeholder="FullName"
                type="name"
                value={userinfo.firstName}
                onChange={(e) => onChange(e)}
                disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"  }}

              />
              
              {/* <button
                id="Name"
                className="icn"
                onClick={ ()=> {editable()}}

              ></button> */}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                id="Name"
                name="lastName"
                placeholder="FullName"
                type="name"
                value={userinfo.lastName}
                onChange={(e) => onChange(e)}
                disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}

              />
              {/* <button
                id="Name"
                className="icn"
                onClick={ ()=> {editable()}}

              ></button> */}
            </FormGroup>
          </Col>
           
        </Row>
        <Row>
        
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                id="Email"
                name="email"
                placeholder="Email Address"
                type="email"
                value={userinfo.emailId}
                disabled={true}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}
              />
            </FormGroup>
          </Col>
           <Col md={6}>
            <FormGroup>
              <Label>Mobile No.</Label>
              <Input
                id="phone number"
                name="mobileNumber"
                placeholder="Phone no."
                type="contact"
                value={userinfo.mobileNumber}
                onChange={(e) => onChange(e)}
                disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}
              />
              {/* <button
                id="btn-mobileNumber"
                onClick={(e) => onClick(e)}
                className="icn"
              ></button> */}
            </FormGroup>
          </Col>
          
        </Row>
        <Row>
         
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input id="State" name="state" value={userinfo.state}
              onChange={(e) => onChange(e)
              }
              disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}
               />
              {/* <button
                id="state"
                onClick={(e) => onClick(e)}
                className="icn"
              ></button> */}
            </FormGroup>
          </Col>
           <Col md={4}>
            <FormGroup>
              <Label>City</Label>
              <Input id="City" name="city" value={userinfo.city}
              onChange={(e) => onChange(e)}
              disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}
             
               />
              {/* <button
                id="city"
                onClick={(e) => onClick(e)}
                className="icn"
              ></button> */}
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Country</Label>
              <Input id="Country" name="country" value={userinfo.country} 
                onChange={(e) => onChange(e)}
                disabled={!isEditable}
                readOnly={!isEditable}
                style={{border : isEditable ? "" : "0px"}}
              />
              {/* <button
                id="country"
                onClick={(e) => onClick(e)}
                className="icn"
              ></button> */}
            </FormGroup>
          </Col>
        </Row>
        </Form>
        <Button onClick={() => {updateProfile()}} style={{width:"29%" , alignSelf:"center"}}
           disabled={!isEditable}
           readOnly={!isEditable}
        >
    Update
  </Button>
    </div>
  );
}

export default UserProfile;
