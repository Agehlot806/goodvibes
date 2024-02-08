import { useState } from 'react';
import "./slots.css";
import Footer from "../../directives/footer/footer";
import Form from "react-bootstrap/Form";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import NewNavbar from "../../directives/Navbar/Navbar";
import serviceCard02 from "../../assets/serviceCard02.jpg";
import { Link } from "react-router-dom";


const Slots = () => {

  return (
    <>
      <NewNavbar />
      <div className="pages-background">
        <h2>Slot Booking</h2>
      </div>
      <section className="section-padding">
        <Container>
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

                <div className="slot-price-box">
                  <span className="slot-price">$ 102</span>
                  <span className="slot-discount">70% OFF</span>
                  <span className="old-price">$ 200</span>
                </div>
              </div>
            </div>
          </section>

        

          <section className="section-padding">
            <div className="appointment-form-area">
              <h3 className="appointment-head">Book an Appointment</h3>
              <Row>
                <Col lg={6} md={6}>
                  <div className="appointment-detail-box">
                    <h5>Service Schedule</h5>
                    <div className="service-schedule">
                      <div>
                        {" "}
                        <h4>04 </h4>
                        <p>Sept, 2024</p>
                      </div>
                      <div className="vertical-line"></div>
                      <p>Thrusday </p>
                      <p>5:45pm </p>
                      <div className="notes-icon">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                    </div>
                  </div>

                  <div className="appointment-detail-box">
                    <h5>Service Address</h5>
                    <div className="service-schedule">
                      <div>
                        {" "}
                  <div>
                        <p><i class="fa-solid fa-user"></i> Shristi Sharma</p>
                      </div>
                      <p> <i class="fa-solid fa-phone"></i> +9876543271</p>
                    
<p>   <i class="fa-solid fa-location-dot"></i> Pincode 452010 Post Office Name Vijay Nagar District Indore State Madhya Pradesh</p></div>

                      <div className="notes-icon">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                    </div>
                  </div>

                  <div className="slot-coupon"><p>
                  <i class="fa-solid fa-ticket"></i> Apply Coupon
                    </p></div>
                </Col>

{/*  ---------------------- Cart Summary -----------------------  */}

                <Col lg={6} md={6}>
                  <div className="appointment-detail-box">
                    <h5>Cart Summary</h5>
                    <div className="cart-summary">
                  <div className="cart-price">
                  <p>Foot Massage</p>
                      <p>700$</p>
                    </div> 
                     <hr/>

                  <div className="cart-price">
                  <p>Sub-Total</p>
                      <p>700$</p>
                    </div> 
                    </div>

                    <div className="cart-price">
                  <p>Discount</p>
                      <p>50$</p>
                    </div> 

                    <div className="cart-price">
                  <p>Coupon Discount</p>
                      <p>60$</p>
                    </div> 
                 

                    <div className="cart-price">
                  <p>Service Fees</p>
                      <p>10$</p>
                    </div> 
              
<hr/>
                    <div className="cart-price">
                  <p className="grand-total">Grand Total</p>
                      <p>800$</p>
                    </div> 
                    </div>

                    <div className="agree-checkbox">
          <label> <input type="checkbox" /> I Agree with the Terms & Conditions</label>  
                    </div>
                
                </Col>
              </Row>

            </div>
            <div className="btndiv">
              <Link to="/AddToCart">
                <button className="slot-btn" role="button">
                  Add to Cart
                </button>
              </Link>
            </div>
          </section>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Slots;
