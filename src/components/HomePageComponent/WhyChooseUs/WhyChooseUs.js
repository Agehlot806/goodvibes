import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";
import whyChooseusImg from "../../../assets/image/why-choose.jpg";
import reasonone from "../../../assets/icon/choose-reason-1.png";
import reasontwo from "../../../assets/icon/choose-reason-2.png";
import reasonthree from "../../../assets/icon/choose-reason-3.png";
import reasonfour from "../../../assets/icon/choose-reason-4.png";
import reasonfive from "../../../assets/icon/choose-reason-5.png";
import reasonsix from "../../../assets/icon/choose-reason-6.png";

const WhyChooseUs = () => {
  const why = [
    {
      title: "Online Booking",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasonone,
    },
    {
      title: "24/7 Supports",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasontwo,
    },
    {
      title: "Sanitising Hands",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasonthree,
    },
    {
      title: "Ensuring Gloves",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasonfour,
    },
    {
      title: "Any Services",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasonfive,
    },
    {
      title: "Delivery In 2 Hour",
      subtitle:
        "Proin purus tortor, pharetra et fringilla id stil tempus egeti velitel. Integer at nisi.",
      image: reasonsix,
    },
  ];
  return (
    <>
      <div className=" ">
        <Container fluid className="p-0">
          {/* <Row>
      
            <Col lg={12} className="p-0"> */}
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
                    <Col key={index} lg={6}>
                      <div className="whychoose-content">
                        <div>
                          <img src={whychoose.image} />
                        </div>
                        <div>
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
          {/* </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUs;
