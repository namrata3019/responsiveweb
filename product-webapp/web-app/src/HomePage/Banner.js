import React from "react";
import { Container, Row, Col } from "reactstrap";
import bannerImg from "./Images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <Container>
        <Row>
        <Col className="image" lg="6" md="6">
            <img src={bannerImg} alt="" className="w-100 img" />
          </Col>
          <Col lg="6" md="6">
         
            <div className="banner_content">
              <h2 className="mb-4 title banner_h2" >
               Learn at the <br /> Comfort of Your <br />  Own Home
              </h2>
              <p className="mb-5">
                “The biggest benefit of BrainZo is the utter lack of pressure. 
                Because you get to set your own schedule and study only when you have time, 
                BrainZo makes learning not something you have to get over with, but something you look forward to!
                 From experience, you learn more when you enjoy the process.”
              </p>
            </div>

          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
