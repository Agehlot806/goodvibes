import React from "react";
import "./VendorForm.css";
import Navbar from "../../directives/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import vendorPartner from "../../assets/vendorPartner.jpg";
import vendorEarning from "../../assets/vendorEarning.jpg";
import vendorCertificate from "../../assets/vendorCertificate.jpg";
import womenEmpowerment from "../../assets/womenEmpowerment.jpg";
import Card from 'react-bootstrap/Card';


const VendorForm = () => {
  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Registration Form</h2>
      </div>
      <Container>
      <section className="section-padding">
        <div className="vendor-page-head">
          <h4>Registration Form</h4>
          <h1>Join Now India's No. 1 Beauty Home Service Provider</h1>
          <p>
            The continuous rise in the beauty and wellness industry speaks
            volumes that being a pro in this field, you can earn a good amount
            of money.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="vendor-form">
          <Row className="justify-content-center">
            <Col lg={8}>
              <form action="#" method="post">
                <Row>
                  <Col lg={6}>
                    <input type="text" name="name" placeholder="Your Name :" />
                  </Col>
                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email :"
                    />
                  </Col>

                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Contact Number :"
                    />
                  </Col>

                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Profession :"
                    />
                  </Col>

                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Years Of Experience :"
                    />
                  </Col>

                  <Col lg={6}>
                    <input type="email" name="email" placeholder="Comment :" />
                  </Col>

                  <Col lg={6}>
                    <h4>Are you comfortable for home services ?</h4>
                    <span className="gender-row">
                      <span className="gender">
                        <input
                          type="radio"
                          value="Yes"
                          defaultValue="yes"
                          defaultChecked=""
                          name="comfortabled"
                        />
                        <label htmlFor="Yes">Yes</label>
                      </span>
                      <span className="gender">
                        <input
                          id="nod"
                          type="radio"
                          defaultValue="no"
                          name="comfortabled"
                        />
                        <label htmlFor="nod">No</label>
                      </span>
                    </span>
                  </Col>

                  <Col lg={6}>
                  <h4>Gender</h4>
                    <span className="gender-row">
                      <span className="gender">
                        <input
                          type="radio"
                          value="Yes"
                          defaultValue="yes"
                          defaultChecked=""
                          name="comfortabled"
                        />
                        <label htmlFor="Yes">Male</label>
                      </span>
                      <span className="gender">
                        <input
                          id="nod"
                          type="radio"
                          defaultValue="no"
                          name="comfortabled"
                        />
                        <label htmlFor="nod">Female</label>
                      </span>
                    </span>
                  </Col>

                  <Col lg={12}>
                    <input type="submit" />
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      </section>

{/* -------------- Opportunity ------------ */}
<section className="section-padding">

 <h3 className="vendor-card-head">A world of opportunities awaits you!</h3>
 <Row>
    <Col lg={3} md={4} sm={6}>
 <Card style={{ width: '15rem', height:'250px' }}>
      <Card.Img variant="top" src={vendorPartner} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>3000+</Card.Title>
        <Card.Text>
        Working Partners
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={3} md={4} sm={6}>
 <Card style={{ width: '15rem' , height:'250px' }}>
      <Card.Img variant="top" src={vendorEarning} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Unlimited</Card.Title>
        <Card.Text>
          Earnings
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col lg={3} md={4} sm={6}>
 <Card style={{ width: '15rem' , height:'250px' }}>
      <Card.Img variant="top" src={vendorCertificate} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Certified </Card.Title>
        <Card.Text>
          Traning Program
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col lg={3} md={4} sm={6}>
 <Card style={{ width: '15rem' , height:'250px' }}>
      <Card.Img variant="top" src={womenEmpowerment} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Women </Card.Title>
        <Card.Text>
         Empowerment
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
 
    </section>

    <section className="section-padding"> 
    <h3>Why Join Good Vibes</h3>
    <Row>
        <Col lg={6} md={6} >
            <div className="why-join-box"></div>
        </Col>
        <Col lg={6} md={6} >
        <div className="why-join-box"></div>
        </Col>
        <Col lg={6} md={6} >
        <div className="why-join-box"></div>
        </Col>
        <Col lg={6} md={6} >
        <div className="why-join-box"></div>
        </Col>
    </Row>
    
      </section>
      </Container>
    </>
  );
};

export default VendorForm;
