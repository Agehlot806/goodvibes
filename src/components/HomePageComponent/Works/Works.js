import React from "react";
import "./Works.css";
import worksLoginImg from "../../../assets/worksLoginImg.jpg"
import WorkAppointment from "../../../assets/WorkAppointment.jpg"
import workServices from "../../../assets/workServices.jpg"
import { Col, Row } from "react-bootstrap";

const Works = () => {
  const workData =[
    {heading : "Select Your Location", description:"Choose the location where you want to take the service from.It helps your get the service on best location.", img:worksLoginImg},
    {heading : "Pick Your service and Set Schedule", description:"Choose the service you need from the category section. ANd choose the best suitable time.", img:WorkAppointment},
    {heading : "Place your booking and Enjoy", description:"After that, place your booking request and enjoy the services by confirming your services.", img:workServices},
  ]
  
  
  return (
    <>
      <section className="section-padding">
        <div className="how-it-works">
      <div className="container">
      <div className="home-work-page">

        <h2 className="main-heading"> How It Works</h2>
        <p>Lorem ipsum dolor sit amet, eum modus ludus efficiendi ad, in sea ceteros postulant imperdiet, mel ei harum appellantur disputationi. Ridens pertinax eos ei, mel ad mazim nominati sensibus. Unum dolorum epicurei eum ne. Voluptaria quaerendum.</p>
        </div>
        <div className="container">

          <Row>
            {/* ---------- first-box --------- */}
           {workData.map((item,index)=>( <Col lg={4} md={6} sm={6} key={index}>
              <div className="work-boxes">
                <img src={item.img} className="work-images"></img>
                <div className="work-content">
              <h5>{item.heading}</h5>   
              <p>{item.description}</p>
                </div>
              </div>
            </Col>))}

          </Row>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default Works;
