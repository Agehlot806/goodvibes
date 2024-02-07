import React from "react";
import "./MyProfile.css";
import Navbar from "../../directives/Navbar/Navbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";

const MyProfile = () => {
  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>My Profile</h2>
      </div>

      <Container>
        <section className="section-padding">
          <div className="my-profile-dashboard">
            <h2>Shristi Sharma</h2>
            <h4>Welcome to GoodVibes</h4>
          </div>
          <hr />

          <section className="section-padding">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav className="flex-column ">
                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="first">My Profile</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="second">Appointment History</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="third">Offers</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="fourth">Payment Details</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="fifth">Terms & Conditions</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="profile-tab-head">
                      <Nav.Link eventKey="sixth">Log Out</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {/* ----------- First Tab Content ---------- */}
                    <Tab.Pane eventKey="first">
                      <div className="profile-content">
                        <h4>Profile Details</h4>
                        <hr />
                        <table className="profile-infoTable">
                          <tbody>
                            <tr>
                              <td>Full Name</td>
                              <td>Shristi Sharma</td>
                            </tr>
                            <tr>
                              <td>Mobile Number</td>
                              <td>987654321</td>
                            </tr>
                            <tr>
                              <td>Email ID</td>
                              <td>Shrishtisharma1234@gmail.com</td>
                            </tr>
                            <tr>
                              <td>Gender</td>
                              <td>Female</td>
                            </tr>

                            <tr>
                                <td>Location</td>
                                <td>Guna, Madhya Pradesh</td>
                            </tr>

                    <tr>
                        <td>Date of Birth</td>
                        <td>04/02/1998</td>
                    </tr>
                    <tr>
                        <td>Alternate Mobile</td>
                        <td>987234598</td>
                    </tr>
                          </tbody>
                        </table>
                        <div className="profile-edit-btn">EDIT</div>
                      </div>
                    </Tab.Pane>

                    {/* ----------------- Second Tab Content -------------- */}
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="fifth">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="sixth">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </section>
        </section>
      </Container>
    </>
  );
};

export default MyProfile;
