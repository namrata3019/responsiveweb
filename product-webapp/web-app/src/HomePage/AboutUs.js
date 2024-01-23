import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "./Images/AboutUs.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Teaching is one of the most challenging and complex jobs on the planet.
                 Our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices.
                 They are useful in any type of teaching moment and many can be used to support national education standards! <br/>
                 We continue to provide academically sound content of the highest caliber and welcome input from our users as we address issues of equity,
                  diversity, inclusivity and representation. Since we know there are many different approaches to teaching and education, 
                  we develop our materials to complement these different philosophies across subjects and grades.
              </p>

              {/* <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
