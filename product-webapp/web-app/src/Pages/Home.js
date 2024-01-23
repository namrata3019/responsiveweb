import React from "react";
import NavBar from "../Components/NavBar";
import AboutUs from "../HomePage/AboutUs";
import Banner from "../HomePage/Banner";
import CoursesHome from "../HomePage/CoursesHome";
import Footer from "../HomePage/Footer";
import WhyBrainzo from '../HomePage/WhyBrainzo';

function Home(){
    return(
      <>
<Banner/>
<CoursesHome/>
<WhyBrainzo/>
<AboutUs/>
<Footer/>

      </>
        
       
    );
}

export default Home;