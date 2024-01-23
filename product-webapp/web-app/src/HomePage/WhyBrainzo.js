import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "./Images/student.jpg";
import "./why.css";


function WhyBrainzo(){
     const [showVideo, setShowVideo] = useState(false);
    return(
<section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why BrainZo</h2>
              <p>
               We Provide Recorded sessions of our Live classes,
               Some of the benefits of Recorded Sessions are obvious.
               Lecture capture is incredibly useful when students have to miss a class, 
               such as if they get sick or have to go to a job interview. 
               Some people need to hear information more than once for it to sink in. 
               Others get new information that recontextualizes earlier material, 
               and need to go back and get everything to fit.

              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=EfYSL50_H5I&ab_channel="
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <button className="play__icon"
                onClick={() => setShowVideo(!showVideo)}
                >
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
    
}

export default WhyBrainzo;