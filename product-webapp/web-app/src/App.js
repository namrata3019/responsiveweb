import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Courses from "./Pages/Courses";
import Course from "./components/CourseCard";
import Videoplayer from "./Components/Videoplayer";
import ErrorPage from "./Components/ErrorPage";
import NotFound from "./Components/NotFound";
import Home from './Pages/Home';
import NavBar from "./Components/NavBar";
import EmailVerify from "./Components/EmailVerify";
import Otp from "./Components/Otp";
import AddCourses from "./Components/AddCourses";
import Session from "./Pages/Session";
import MyCourses from "./Components/MyCourses";
import { useEffect } from "react";
import { useState } from "react";
import UserProfile from "./Components/UserProfile"
import Cart from "./Components/Cart";


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    console.log("loggedIn ==>", loggedIn);
    setLoggedIn(loggedIn);
  }, [isLoggedIn]);

  return (
    <>
    <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
    <Routes>
    
     <Route path="/" element={<Home />}></Route>
     <Route path="/mycourse" element={<MyCourses />}></Route>
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="/addcourses" element={<AddCourses/>}></Route>

      <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="/emailverify" element={<EmailVerify />}></Route>
      <Route path="/otp" element={<Otp/>}></Route>


      {/* <Route path="/courses" element={<TestPage />}></Route> */}
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/courses/:courseId" element={<Course />}></Route>
      <Route
        path="/courses/:courseId/learning"
        element={<Videoplayer />}
      ></Route>
      <Route path="/meeting/:meetingId" element={<Session />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
      <Route path="*" element={<NotFound page={true} />}></Route>
       <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
</>
  );
}

export default App;
