import React from "react";
import "./slots.css";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const Slots = () => {
  return (
    <div>
      <Header />
      <section className="section-padding">
        <Container>
          <div className="slot-area">
            <Row>
              <Col lg={9}>
                <h5>Address</h5>
                <p>
                  J127, Ansar Colony, Raj Nagar, Indore, Madhya Pradesh 452008,
                  India, J127, Ansar Colony, Raj Nagar, Indore, Madhya Pradesh
                  452008, India
                </p>
              </Col>
              <Col lg={3}>
                <Button>Change Address</Button>
              </Col>
            </Row>
            <hr />
            <div className="select-date">
              <h5>Select Date and Time</h5>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Slots;
