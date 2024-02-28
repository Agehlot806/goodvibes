import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";


const WhyChooseUs = () => {
  const why = [
    {
      title: "Online Booking",
      subtitle:
        "Book your beauty and spa services conveniently online, anytime, anywhere."
     
    },
    {
      title: "24/7 Supports",
      subtitle:
      "We provide round-the-clock assistance to ensure your needs are met at any hour."
     
    },
    {
      title: "Sanitising Hands",
      subtitle:
      "We prioritize hygiene by rigorously sanitizing our hands before every service."
     
    },
    {
      title: "Ensuring Gloves",
      subtitle:
      "Our professionals wear gloves to maintain cleanliness and safety standards."
     
    },
    {
      title: "Wide Range of Services",
      subtitle:
      "Choose from a variety of beauty and spa services delivered to your doorstep."
     
    },
    {
      title: "Delivery In 2 Hour",
      subtitle:
     "Experience swift delivery of our services within just 2 hours of booking."
    
    
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
