import React from "react";
import "./slots.css";
import Footer from "../../directives/footer/footer";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import NewNavbar from "../../directives/Navbar/Navbar";
import SalonBlackImg from "../../assets/SalonBlackImg.jpg";

const Slots = () => {
  return (
    <>
      <NewNavbar />
      <div className="salon-img">
        <img src={SalonBlackImg}></img>
      </div>
      <section className="section-padding">
        <Container>
          <div className="slot-area mt-5">
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
              <h5>Service Slot</h5>
            </div>
            {/*  */}
            <div class="app-time">
              <div>
                <p>Select Your Slot</p>
                <p>Week</p>
                <div class="app-check">
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">Sunday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    disabled
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label"> Monday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">Tuesday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">Wednesday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">Thursday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">Friday</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">Saturday</label>
                  </div>
                </div>
              </div>
              {/* <div>
                <p>Timings</p>
                <p>1:00PM to 5:00PM</p>
                <div class="app-check">
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">1:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">1:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">2:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">2:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">3:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">3:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">4:00 PM</label>
                  </div>

                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">4:30 PM</label>
                  </div>
                </div>
              </div> */}
            </div>
            {/*  */}
            <hr />
            <div className="select-date">
              <h5>Select Date and Time</h5>
            </div>
            {/*  */}
            <div class="app-time">
              <div>
                <p>Timings</p>
                <p>9:00AM to 12:00PM</p>
                <div class="app-check">
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">9:00 AM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    disabled
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">9:30 AM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">10:00 AM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">10:30 AM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">11:00 AM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">11:30 AM</label>
                  </div>
                </div>
              </div>

              {/* <div>
                <p>Timings</p>
                <p>1:00PM to 5:00PM</p>
                <div class="app-check">
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">1:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">1:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">2:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">2:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">3:00 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">3:30 PM</label>
                  </div>
                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                  />
                  <div class="app-border">
                    <label class="app-label">4:00 PM</label>
                  </div>

                  <input
                    type="radio"
                    class="option-input radio"
                    name="example"
                    disabled
                  />
                  <div class="app-border">
                    <label class="app-label">4:30 PM</label>
                  </div>
                </div>
              </div> */}
            </div>
            {/*  */}
            <div className="btndiv">
              <button className="button-87 " role="button">
                Continue
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Slots;
