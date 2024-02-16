import React from "react";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Contact Us</h2>
        <BreadCrumb pageTitle="Contact Us" />
      </div>

      <Container>
      <section className="section-padding">
        <div className="contact-detail-box">
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="contact-box">
              <i class="fa-solid fa-mobile"></i>
              <h5>Contact</h5>
              <ul>
                <li>+9876543211</li>
                <li>spa.london@office.com</li>
              </ul>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
            <div className="contact-box">
            <i class="fa-solid fa-clock"></i>
            <h5>Hours</h5>
              <ul>
              <li>Monday – Friday 09:00 – 22:00</li>
                <li>Saturday 09:00 – 17:00</li>
                
              </ul></div></Col>


            <Col lg={4} md={4} sm={6}>
            <div className="contact-box">
            <i class="fa-solid fa-location-dot"></i>
            <h5>Location</h5>
              <ul>
              <li>3 Wakehurst Street New York, NY 10002</li>
            
              </ul></div></Col>
          </Row>
        </div>
        </section>
        </Container>

        <section className="section-padding">
          <div className="contact-page-head">
            <span>We’re Ready To Help You</span>
            <h1>Send Us Message</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              eiusmodesmu.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="contact-form">
            <Row className="justify-content-center">
              <Col lg={8}>
                <form action="#" method="post">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name :"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email :"
                      />
                    </Col>

                    <Col lg={12}>
                      <input type="text" name="subject" placeholder="Subject" />
                      <textarea
                        name="message"
                        cols="10"
                        rows="3"
                        placeholder="Write Message :"
                      ></textarea>
                      <input  type="submit" />
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </section>
   

      <Footer />
    </>
  );
};

export default Contactus;
