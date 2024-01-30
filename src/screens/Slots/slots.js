import React from "react";
import "./slots.css";
import Footer from "../../directives/footer/footer";
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import NewNavbar from "../../directives/Navbar/Navbar";
import serviceCard02 from "../../assets/serviceCard02.jpg";
import { Link } from "react-router-dom";

const Slots = () => {
  return (
    <>
      <NewNavbar />
      <div className="pages-background"><h2>Slot Booking</h2></div>
      <section className="section-padding">
        <Container>
      <Row>
        <Col lg={5}>
        <section className="section-padding">
        <div className="slot-card-box">
          
              <img src={serviceCard02} className="slot-images"></img>
           
              <div className="slot-box-content">
              <h5>VlCC massage facial</h5>
              <ul>
                <li>For normal, dry and combination skin.</li>
                <li>Best for lightening and brightening the skin.</li>
                <li>Frequency - 25 to 30 days</li>
                </ul>
                </div>

              <div className="slot-price-box">
                <span className="slot-price">$ 102</span>
                <span className="slot-discount">70% OFF</span>
                <span className="old-price">$ 200</span>
          
              </div>
          
        </div>
        </section>
        </Col>


        <Col lg={7}>
        <section className="section-padding">  
        <h3>Book an Appointment</h3>
        <div className="slot-form">
       <input type="text" placeholder="First Name" ></input>
       <input type="text" placeholder="Last Name"  ></input>
<input type="number" placeholder="Contact Number"  ></input>
<input type="date"></input>
<textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Enter Your Address">
</textarea>


</div>
           
            <div className="btndiv">
            <Link to="/AddToCart"> <button className="slot-btn " role="button">
              Add to Cart
              </button>
              </Link>
            </div>
            </section>
          </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Slots;
