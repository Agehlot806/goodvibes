import React from "react";
import "./Works.css";
import worksLoginImg from "../../../assets/worksLoginImg.jpg"
import WorkAppointment from "../../../assets/WorkAppointment.jpg"
import workServices from "../../../assets/workServices.jpg"
import { Col, Row } from "react-bootstrap";

const Works = () => {
  return (
    <>
      <section className="section-padding">
        <div className="how-it-works">
      <div className="container">
      <div className="home-work-page">

        {/* <div className="main-heading"></div> */}
        <h2 className="main-heading"> How It Works</h2>
        <p>Lorem ipsum dolor sit amet, eum modus ludus efficiendi ad, in sea ceteros postulant imperdiet, mel ei harum appellantur disputationi. Ridens pertinax eos ei, mel ad mazim nominati sensibus. Unum dolorum epicurei eum ne. Voluptaria quaerendum.</p>
        </div>
        <div className="container">

          <Row>
            {/* ---------- first-box --------- */}
            <Col lg={4} md={6} sm={6}>
              <div className="work-boxes">
                <img src={worksLoginImg} className="work-images"></img>
                <div className="work-content">
              <h5>Select Your Location</h5>   
              <p>Choose the location where you want to take the service from.It helps your get the service on best location.</p>
                </div>
              </div>
            </Col>

            {/* --------------- second box ----------- */}
            <Col lg={4} md={6} sm={6}>
            <div className="work-boxes">
                <img src={WorkAppointment} className="work-images"></img>
                <div className="work-content">
              <h5>Pick Your service and Set Schedule</h5>   
      <p>Choose the service you need from the category section. ANd choose the best suitable time.</p>
                </div>
              </div>
              </Col>

            {/* -------------- third box ------------- */}
            <Col lg={4} md={6} sm={6}>
            <div className="work-boxes">
                <img src={workServices} className="work-images"></img>
                <div className="work-content">
              <h5>Place your booking and Enjoy</h5>   
              <p>After that, place your booking request and enjoy the services by confirming your services.</p>
                </div>
              </div>
              </Col>

          </Row>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default Works;
