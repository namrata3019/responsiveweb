import React from "react";
import { Col } from "reactstrap";
import MyCard from "./MyCard";


import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useEffect } from "react";
import { fetchCourse, fetchCourseByLearner, fetchCourseByMentor } from "../Service/CourseService";


function MyCourses(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (courses.length === 0) {
      if(localStorage.getItem("role")=="LEARNER"){
        fetchCourseByLearner()
        .then((resp) => {
          console.log(resp.data)
          setCourses(resp.data);
        })
        .catch((e) => {
          console.error(e);
        });
      }else{
        fetchCourseByMentor()
        .then((resp) => {
          console.log(resp.data)
          setCourses(resp.data);
        })
        .catch((e) => {
          console.error(e);
        });
      }
      
    }
  }, [courses]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === courses.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? courses.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = courses.map((item) => {
    return (
      <CarouselItem
        className="slides"
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={item.courseId}
      >
        <Col className="card" lg="4" md="6" sm="6">
          <MyCard key={item.courseId} item={item} />
        </Col>
      </CarouselItem>
    );
  });
  
 

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        className="controller"
        items={courses}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        className="arrow"
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        className="arrow"
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default MyCourses;
