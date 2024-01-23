import React from 'react';
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './viewDetailPage.css';
import { Container } from 'react-bootstrap';
import serviceDetailMain from '../../assets/serviceDetailMain.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const ViewDetailPage = () => {
  return (
    <>
      <Navbar/>
     
     <BreadCrumb homeTitle="Home" pageTitle="View Page Details" />
<div className='viewdetail-page'>
<section className="section-padding">
  <Container>
  <Row>
    <Col lg={8}>
      <div className='viewdetail-head'>
        <h2 className='service-detail-heading'>Service Details</h2>
        <h6><i class="fa-solid fa-location-arrow"></i>Indore,India</h6>
        <button className='service-detail-btn'>Beauty Salon</button>
      </div>

      {/* ------------- Detail Main Section ------------- */}
      <section className="section-padding">
      <div >
      <img src={serviceDetailMain} className='service-detail-main' ></img>
      </div>
      </section>

      {/* -------------- Service Detail Accordion ----------- */}
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Overview">
      offers a variety of cosmetic treatments and cosmetic services for men and women. Beauty salons may offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers.
      </Tab>
      <Tab eventKey="profile" title="Services Offered">
     <div className='service-offered'>
      <ul>
        <li>Facial</li>
        <li>Hair Cut</li>
        <li>Nail Arts</li>
        <li>Body Massage</li>
        <li>Makeup</li>
      </ul>
     </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Reviews">
       <div className='service-review'>
        <p>A very good unisex salon providing excellent services, good ambience & maintaining good hygiene. They provide great hair spas in a very relaxing environment</p>
       </div>
      </Tab>
     
    </Tabs>


    </Col>


    <Col lg={4}>
      <div className='service-charges'>
        <h4>$120</h4>
        <Button>Book Service</Button>
        
      </div>
    </Col>
  </Row>
  </Container>
  </section>
</div>

     <Footer />
    </>
  )
}

export default ViewDetailPage;