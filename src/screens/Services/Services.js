import React from "react";
import Navbar from "../../directives/Navbar/Navbar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../directives/footer/footer";
import "./Services.css";
import serone from "../../assets/image/service-1.jpg";
import sertwo from "../../assets/image/service-2.jpg";
import serthree from "../../assets/image/service-3.jpg";
import serfour from "../../assets/image/service-4.jpg";
import IMG1 from "../../assets/image/img1.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appointment from "../../components/Appointment/Appointment";

const Service = () => {
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
      <Navbar />
      {/* <BreadCrumb homeTitle="Home" pageTitle="Services" /> */}
      <div className="service-bg-img"></div>
      <section className="section-padding">
        <Container>
          <div className="services-page">
            {/* ------- Service page heading -------- */}

            <div className="service-page-head">
              <h4>Our Services</h4>
              <h1>Your Satisfaction Is Our Priority</h1>
              <p>
                We performs a full spectrum of body contouring, facial plastic
                surgery, and enhancement procedures. We uses many sophisticated,
                customizable techniques to suit your specific needs and
                preferences.
              </p>
            </div>

            {/* ------------ Service page cards ------------ */}
            <section className="section-padding">
            <Row>
              <Col lg={4}>
                <div className="service-card">
                  <div className="service-card-01">
                    <span className="service-card-number">01</span>
                  </div>
                  <h5>Face Procedures</h5>
                  <ul>
                    <li>Facelift & Necklift</li>
                    <li>Eyelids | Nose | Ears | Lips</li>
                    <li>Browlift</li>
                  </ul>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-card">
                  <div className="service-card-02">
                    <span className="service-card-number">02</span>
                  </div>
                  <h5>Skincare</h5>
                  <ul>
                    <li>Peels & Micropeels</li>
                    <li>Facials</li>
                    <li>Waxing</li>
                  </ul>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-card">
                  <div className="service-card-03">
                    <span className="service-card-number">03</span>
                  </div>
                  <h5>Med spa</h5>
                  <ul>
                    <li>Laser Treatments</li>
                    <li>Botox & Dy spot</li>
                    <li>Scar Treatments</li>
                  </ul>
                </div>
              </Col>
            </Row>
            </section>
          </div>

          {/* ----------------- About our services ------------- */}
          <div className="about-our-services">
     <h4>About Our Services</h4>
     <h1>We Provide Spa & Beauty Treatments</h1>
     <p>Our professional staff will work with you to meet your needs. Whether you are new to massage & skin care treatments or a long time wellness enthusiast.</p>
     </div>

{/* ------------------ Appointment form ----------- */}
<section className="section-padding">
<Appointment/>
</section>

        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Service;
