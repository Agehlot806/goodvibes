import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";


const WhyChooseUs = () => {
  const why = [
    {
      title: "Online Booking",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
    {
      title: "24/7 Supports",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
    {
      title: "Sanitising Hands",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
    {
      title: "Ensuring Gloves",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
    {
      title: "Any Services",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
    {
      title: "Delivery In 2 Hour",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi."
     
    },
  ];
  return (
    <>
      <div className=" ">
        <Container fluid className="p-0">
         
          <div className="whychoose-bg">
            <div className="manage-heading-para">
              <div className="main-heading text-white">
                <h2>Why Choose Us</h2>
                <p className="text-white">
                  Aenean fermentum sapien ac aliquet gravida. Fusce a ipsum
                  metus. answerala Suspendisse oi potenti. Nullam ac lorem ex.
                  Ut feugiat maximus ante, vel gravida ex.
                </p>
              </div>
            </div>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Row>
                  {why.map((whychoose, index) => (
                    <Col key={index} lg={6} sm={6}>
                      <div className="whychoose-content">
                       
                        <div className="whyChoose-text">
                          <h4 className="text-white">{whychoose.title}</h4>
                          <p className="text-white">{whychoose.subtitle}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
      
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUs;
