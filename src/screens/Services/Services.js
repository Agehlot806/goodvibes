import React from "react";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import facialOfferBanner from "../../assets/FeatureImages/facialOfferBanner.jpg";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";


const Service = () => {

  return (
    <>
      <Navbar />
      <div className="pages-background"><h2>Our Services</h2>
      <BreadCrumb pageTitle="Our Services" />
      </div>
  
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
                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <Link to="/service-details">
                      <div className="service-card-01">
                        <span className="service-card-number">01</span>
                      </div>
                      <h5>Face Procedures</h5>
                    </Link>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <div className="service-card-02">
                      <span className="service-card-number">02</span>
                    </div>
                    <h5>Skincare</h5>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <div className="service-card-03">
                      <span className="service-card-number">03</span>
                    </div>
                    <h5>Massage</h5>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <div className="service-card-04">
                      <span className="service-card-number">04</span>
                    </div>
                    <h5>Grooming</h5>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <div className="service-card-05">
                      <span className="service-card-number">05</span>
                    </div>
                    <h5>Tattoo / piercing</h5>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6}>
                  <div className="service-card">
                    <div className="service-card-06">
                      <span className="service-card-number">06</span>
                    </div>
                    <h5>Beauty Products</h5>
                  </div>
                </Col>
              </Row>
            </section>
          </div>

          <div>
                  <img
                    src={facialOfferBanner}
                    className="offer-banner"
                    alt="banner"
                  ></img>
                </div>

          {/* ----------------- About our services ------------- */}
          <div className="about-our-services">
            <h4>FAQs</h4>
            <h1>Frequently Asked Questions</h1>
            <p>
            Here you can find answers on frequently asked questions. If you cannot find the answer, feel free to contact us via email or phone.
            </p>
           
            <div className="faq-boxes">
           
                <div className="faq-area">
              <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Why choose at-home services?</Accordion.Header>
        <Accordion.Body>
        The lifestyle nowadays demands you to be on the go, fast, and effective. You are juggling between work, family, friends, and your personal goals. A little bit of pampering is all you need to revive, rejuvenate, and restore yourself! Yes Madam brings salon or home services experts to your doorstep so that you can enjoy a little me time. We fit ourselves into your crazy schedules, and leave you looking good & feeling relaxed!

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
             
              {/* --------------------------- 02 ------------------ */}
           
              <div className="faq-area">  
              <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Are your products branded and of good quality?</Accordion.Header>
        <Accordion.Body>
      Take pride in serving our customers with the best quality products. To ensure this we have tied up with some of the most renowned and trusted brands in the market like O3+, Vedic line, Rica, Sara, Inatur, Lotus, etc. All our products go through a round of quality checks before being used by our experts.

Also, for the cleaning services we use 100% branded and good quality products only that not only clean your place but also disinfect it.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  
              {/* --------------------- 03 -------------------- */}
             
              <div className="faq-area">  
              <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can I pay for the services?</Accordion.Header>
        <Accordion.Body>
        You can pay for the services opted in advance via the online payment modes, such as Paytm, Google Pay, debit/credit card, or you can pay after the service as well via cash, UPI, or PayTm.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
           
              {/* ---------------------- 04 ------------------ */}
             
              <div className="faq-area">    
               <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>When can I book an expert?</Accordion.Header>
        <Accordion.Body>
        To book a specific expert, check their availability and schedule your appointment accordingly. If you want to rebook a favorite professional, we recommend booking 1-2 days in advance. We offer various time slots to accommodate our customers and ensure prompt service.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    {/* ------------------------ 05 ---------------------- */}
           
              <div className="faq-area">   
                <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What if the expert reaches late?
</Accordion.Header>
        <Accordion.Body>
        Our motto is to serve our clients in the best possible manner, and our professionals take their sweet time while providing the services. There may be an instance where our expert isn`st able to reach on time because of some extra time consumed in the previous booking. In such a case, we present our sincere apologies and request you to kindly cooperate, if possible. If you are on a tight schedule and want to reschedule your booking, we would be happy to do it for you.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    {/* ----------------- 06 ------------------- */}

            <div className="faq-area"> 
              <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will there be any mess created during the service?</Accordion.Header>
        <Accordion.Body>
        No, we are known for giving hygienic and zero mess services; our professionals are highly trained with all the work ethics they are required to incorporate into their jobs. During training and skill development sessions we teach them how to make a customer feel blessed and bliss. Proper disposal in garbage bags, no mess, and cleanliness maintained are the qualities of our professionals you get to see. We assure no mess would be there during the service at your place.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
            </div>
            </div>

          {/* ------------------ Appointment form ----------- */}
          <section className="section-padding"></section>
        </Container>
      
      <Footer />
    </>
  );
};

export default Service;
