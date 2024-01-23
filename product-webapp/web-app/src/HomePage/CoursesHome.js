import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "./Images/react.jpg";
import courseImg2 from "./Images/uiux.jpg";
import courseImg3 from "./Images/web.jpg";
import "./CourseHome.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Complete React Course 2022",
    subscribe: 9.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "UI/UX BootCamp for Beginners",
    subscribe: 6.4,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Web Development Bootcamp 2022 ",
    subscribe: 8.8,
    imgUrl: courseImg3,
  },
];

function CoursesHome(){
    return(
   <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Most Enrolled Courses</h2>
                <p>
                 These are our learners pick for the best BrainZo courses and Nanodegrees to take in the fast-changing career landscape of 2022!
                </p>
              </div>

              {/* <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    );
}

export default CoursesHome;