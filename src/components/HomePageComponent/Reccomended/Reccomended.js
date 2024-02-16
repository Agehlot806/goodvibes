import React from "react";
import "./Reccomended.css";
import { Col, Container, Row } from "react-bootstrap";
import salonExpert from "../../../assets/salonExpert.jpg";
import salonExpert02 from "../../../assets/salonExpert02.jpg";
import salonExpert03 from "../../../assets/salonExpert03.jpg";
import salonExpert04 from "../../../assets/salonExpert04.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reccomended = (props) => {
  return (
    <div>
      <Container>
        <section className="section-padding">
          <div className="recommended-experts">
            <h2>Reccomended Experts</h2>
          
            <Row>
              <Col lg={4} md={4} >
                <div className="create-experts-post">
                  <h5>Post For Customise Services</h5>
                  <p>
                    By understanding each client's unique needs and desires, you
                    can create hairstyles that not only meet their expectations
                    but also exceed them.{" "}
                  </p>
     <Link to="/service"> <button className="main-button">Our Services</button></Link> 
                </div>
              </Col>

              <Col lg={8} md={8} >
               
                <div className="experts-profile">
                  <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .9"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div>
                      <div className="expert-cards">
                        <img src={salonExpert} alt="salon-expert"></img>
                        <div>
                          <h5>Vikas Marwah</h5>
                          <p>Vikas Marwah's Salon and Academy</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="expert-cards">
                        <img src={salonExpert02} alt="salon-expert"></img>
                        <div>
                          <h5>Sapna Moti Bhavnani</h5>
                          <p>Mad o Wot</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="expert-cards">
                        <img src={salonExpert03} alt="salon-expert"></img>
                        <div>
                          <h5>Jawed Habib</h5>
                          <p>Jawed Habib Hair and Beauty Ltd</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="expert-cards">
                        <img src={salonExpert04} alt="salon-expert"></img>
                        <div>
                          <h5>Sachin Dakoji</h5>
                          <p>Salon and Academy</p>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Reccomended;
