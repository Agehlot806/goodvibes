import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MassageSpaImg from "../../../assets/image/MassageSpa-home.jpg";
import "./BestService.css";
import IMG1 from "../../../assets/image/img1.jpeg";
import { Link } from "react-router-dom";

const BestService = () => {
  const BestService = [
    { name: "", title: "" },
    { name: "", title: "" },
    { name: "", title: "" },
  ];
  return (
    <>
      <section className="section-padding Massage-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="main-heading">
                <h2>Best Services</h2>
                <p>
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metus. answerala Suspendisse oi potenti. Nullam ac lorem ex.
                  Ut feugiat maximus ante, vel gravida ex.
                </p>
              </div>
            </Col>
          </Row>

          <section className="section-padding card-sec">
            <Row>
              <Col lg={4}>
                <div className="Bs-cards">
                  <img src={IMG1} />
                  <div className="Bs-date">
                    <Row>
                      <Col lg={4}>
                        <h5>Salon</h5>
                      </Col>
                      <Col lg={7}>
                        <i className="fa fa-heart-o" />
                      </Col>
                    </Row>
                  </div>
                  <div className="Bs-content">
                    <div className="text-center mb-3">
                      <h6>Egens Lab</h6>
                    </div>
                    <h4>Sed Elit Massa, Maximus Quisen Fermentum Auctor.</h4>
                    <div className="Bs-content-detail">
                      <Link to="">
                        <h6>View Details</h6>
                      </Link>
                      <Link to="">
                        <h6>Starting from</h6>
                        {/* <p>₹ 999</p> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <div className="bs-btn-area">
              <button className="bs-btn">View all services </button>
            </div> */}
            <div className="text-center mt-2">
              <button class="button-77" role="button">
                View all services
              </button>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default BestService;
