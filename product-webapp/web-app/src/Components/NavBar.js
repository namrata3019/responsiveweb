import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import Img from "./logo1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShoppingCart} from "react-icons/ai";



function NavBar({isLoggedIn , setLoggedIn}) {
  const navigate = useNavigate();
  const location = useLocation();
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [authenticated, ssetauthenticated] = useState(null);
  // const loggedInUser = localStorage.getItem("authenticated");
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    console.log("loggedIn ==>", loggedIn , isLoggedIn);
    setLoggedIn(loggedIn);
  }, [isLoggedIn]);


  // const renderAuthButton = () => {
  //   if (isLoggedIn) {
  //     return (
  //       <>
  //         <Avatar name="Namrata Singh" round={true} size="60px" color="pink" />{" "}
  //         {" ."}
  //         {" ."}
  //         <Button variant="light">Logout</Button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Button variant="outline-light ">
  //           <Link
  //             to={"/login"}
  //             style={{ color: "white", textDecoration: "none" }}
  //           >
  //             Login
  //           </Link>
  //         </Button>
  //         {"  ."}
  //         <Button variant="outline-light ">
  //           <Link
  //             to="/emailVerify"
  //             style={{ color: "white", textDecoration: "none" }}
  //           >
  //             SignUp
  //           </Link>
  //         </Button>
  //       </>
  //     );
  //   }
  // };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" navbar-custom py-3"
      variant="dark"
      
    >
      
      <Container className="m-auto" >
{/*      
    <  FiMenu  onClick={handleShow} style={{ color: "white", fontSize: "1.5em" , cursor: "pointer"}}/>
   

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BrainZO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {isLoggedIn && localStorage.getItem("role")=="MENTOR"?(<>
            <Nav.Link href="#home">Add Courses</Nav.Link>
            <Nav.Link href="#features">My Courses</Nav.Link>
           </>):isLoggedIn && localStorage.getItem("role")=="LEARNER"?
            (<>
              <Nav.Link href="#home">All Courses</Nav.Link>
              <Nav.Link href="#features">My Courses</Nav.Link>
             </>):<Nav.Link>Sign In to explore more </Nav.Link>
          }
        </Offcanvas.Body>
      </Offcanvas> */}

        <Navbar.Brand  ><Link to="/"   style={{ color: "white", textDecoration: "none" }}>
        <img
              alt=""
              src={Img}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            </Link></Navbar.Brand>
           
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
      
          </Nav>
          {/* <Nav className="me-auto">  */}
            {/* <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Web-Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Programming
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Networking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Placement Prep
              </NavDropdown.Item>
            </NavDropdown> */}
          {/* </Nav> */}

          <Nav>
            {isLoggedIn ? (
              <>
              <Link 
              to={"/userprofile"}>
                <Avatar
                  name={localStorage.getItem("user")}
                  round={true}
                  size="50px"
                  color="pink"
                /></Link>{" "}
                {" ."}
                {" ."}
              
             
               
              </>
            ) : (
              <>
                {" "}
                <Button variant="outline-light " id="Nav-Btn" style={{backgroundColor:"white",color:"#5824d4"}}>
                  <Link
                    to={"/login"}
                    id="Nav-Link"
                    style={{ textDecoration: "none" ,color:"#5824d4"}}
                  >
                    Login
                  </Link>
                </Button>
                {"  ."}
                <Button variant="outline-light " id="Nav-Btn" style={{backgroundColor:"white",color:"#5824d4"}}>
                  <Link
                    to={"/emailVerify"}
                    id="Nav-Link"
                    style={{ textDecoration: "none" ,color:"#5824d4"}}
                  >
                    SignUp
                  </Link>
                </Button>

              </>
            )}
               <NavDropdown title={<div style={{display: "inline-block"}}>  <BsThreeDotsVertical size={25} style={{color:"white",margin:"auto"}}/></div>} id="collasible-nav-dropdown">
               {isLoggedIn && localStorage.getItem("role")=="MENTOR"?(<>
                <NavDropdown.Item ><Link to="/userprofile" style={{ textDecoration: "none" ,color:"black"
                    }}> My Profile</Link> </NavDropdown.Item>
                <NavDropdown.Item ><Link to="/addcourses" style={{ textDecoration: "none" ,color:"black"
                    }}> Add Courses</Link> </NavDropdown.Item>
                     <NavDropdown.Item ><Link to="/courses" style={{ textDecoration: "none" ,color:"black"
                    }}> All Courses</Link> </NavDropdown.Item>                    
            
         <NavDropdown.Item ><Link to="/mycourse" style={{ textDecoration: "none" ,color:"black"
                    }}> My Courses</Link> </NavDropdown.Item>
                     <NavDropdown.Item >
                    
              <Button variant="light" onClick={() => {
                  localStorage.clear();
                  setLoggedIn(false);
                }}>Logout</Button>
              </NavDropdown.Item>
            
           </>):isLoggedIn && localStorage.getItem("role")=="LEARNER"?
            (<>
             <NavDropdown.Item ><Link to="/userprofile" style={{ textDecoration: "none" ,color:"black"
                    }}> My Profile</Link> </NavDropdown.Item>
               <NavDropdown.Item ><Link to="/courses" style={{ textDecoration: "none" ,color:"black"
                    }}> All Courses</Link> </NavDropdown.Item>
         <NavDropdown.Item ><Link to="/mycourse" style={{ textDecoration: "none" ,color:"black"
                    }}> My Courses</Link> </NavDropdown.Item>
                     <NavDropdown.Item >
              <Button variant="light" onClick={() => {
                  localStorage.clear();
                  setLoggedIn(false);
                }}>Logout</Button>
              </NavDropdown.Item>
             </>):<NavDropdown.Item > <Link  to="/emailVerify" style={{ textDecoration: "none" ,color:"black"
                    }}>Sign Up to explore more </Link>
                    </NavDropdown.Item>
          }
            </NavDropdown>
{            (isLoggedIn && localStorage.getItem("role") == "LEARNER")  && <Nav.Item><Link to={"/cart"}><AiOutlineShoppingCart color="white" size="40px" style={{"paddingTop":"8px"}}/></Link></Nav.Item>
}          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;