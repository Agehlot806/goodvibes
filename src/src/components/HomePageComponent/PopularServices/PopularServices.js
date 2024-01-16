import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PopularServices.css";
import IMG1 from "../../../assets/image/img1.jpeg";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const popular = [
    {
      name: "Arrows hair & Beauty Zone.",
      title:
        "Hair Cutting , Hair Colouring , Hair Styling , Nail Treatment , Facial & Skincare , Tanning , Aromatherapy",
      image: IMG1,
    },
    {
      name: "Bellezza Salon and Laser Center",
      title:
        "Hair Cutting , Hair Colouring , Hair Styling , Waxing & Hair Removal , Nail Treatment , Facial & Skincare.",
      image: IMG1,
    },
    {
      name: "Empire the unisex salon",
      title:
        " Hair Cutting , Hair Colouring , Hair Styling , Waxing & Hair Removal , Nail Treatment , Facial & Skincare , Tanning.",
      image: IMG1,
    },
  ];
  return (
    <>
      <section className="section-padding Massage-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="main-heading">
                <h2>Popular Services</h2>
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
              {popular.map((item, index) => (
                <Col lg={4} key={index}>
                  <div className="Bs-cards">
                    <img src={item.image} />
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
                        <h6>{item.name}</h6>
                        {[...Array(5)].map((_, i) => (
                          <a key={i}>
                            <i className="fa fa-star" />
                          </a>
                        ))}
                        (5\5)
                      </div>
                      <h4 className="text-center">{item.title}</h4>
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
              ))}
            </Row>
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

export default PopularServices;
