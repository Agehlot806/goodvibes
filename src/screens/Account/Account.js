import React from "react";
import "./Account.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import userImg from "../../assets/image/account/userImg.jpg";
import tableData01 from "../../assets/image/account/tableData01.jpg";
import tableData02 from "../../assets/image/account/tableData02.jpg";
import tableData03 from "../../assets/image/account/tableData03.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Navbar from "../../directives/Navbar/Navbar"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../directives/footer/footer";

// pagination code
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Account = () => {
  return (
    <>
   
      <Navbar/>
      <BreadCrumb homeTitle="Home" pageTitle="Account" />
      <div className="container mt-5 ">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column ">
                <div className="account-btn">
                <Nav.Item className="all-btn">
                  <Nav.Link eventKey="first" className="btn-text">
                    <i class="fa-solid fa-house"></i> Dashboard
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="all-btn">
                  <Nav.Link eventKey="second" className="btn-text">
                    <i class="fa-solid fa-user"></i> My Profile
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="all-btn">
                  <Nav.Link eventKey="third" className="btn-text">
                    <i class="fa-solid fa-bag-shopping"></i> All Order
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="all-btn">
                  <Nav.Link eventKey="fourth" className="btn-text">
                    <i class="fa-solid fa-location-dot"></i> Address
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="all-btn">
                  <Nav.Link eventKey="fifth" className="btn-text">
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                  </Nav.Link>
                </Nav.Item>
                </div>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {/* ------  Dashboard ------ */}
                <Tab.Pane eventKey="first">
                  <div className="dashboard-page">
                    <div class="row g-4">
                      <div class="col-lg-6">
                        <div class="order-box">
                          <h5 className="dashboard-headings">Order Pending</h5>
                          <div class="box-inner">
                            <div class="icon">
                              <img
                                src="assets/images/icons/order-box-1.png"
                                alt=""
                              />
                            </div>
                            <h2>
                              {" "}
                              <span>223</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="order-box">
                          <h5 className="dashboard-headings">Order Complete</h5>
                          <div class="box-inner">
                            <div class="icon">
                              <img
                                src="assets/images/icons/order-box-2.png"
                                alt=""
                              />
                            </div>
                            <h2>
                              {" "}
                              <span>121</span>
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="order-box">
                          <h5 className="dashboard-headings">Order Active</h5>
                          <div class="box-inner">
                            <div class="icon">
                              <img
                                src="assets/images/icons/order-box-3.png"
                                alt=""
                              />
                            </div>
                            <h2>
                              {" "}
                              <span>2523</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="order-box">
                          <h5 className="dashboard-headings">Total Order</h5>
                          <div class="box-inner">
                            <div class="icon">
                              <img
                                src="assets/images/icons/order-box-4.png"
                                alt=""
                              />
                            </div>
                            <h2>
                              <span>23223</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                {/* -------- My Profile ------- */}
                <Tab.Pane eventKey="second">
                  <div className="my-profile">
                    <div className="user-section">
                      <img src={userImg} className="user-img"></img>
                      <span>
                        {" "}
                        <h4>Johan Martin SR-</h4>
                        <p>Co-Founder</p>
                      </span>
                    </div>

                    <form>
                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">
                            First Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Your First Name"
                            className="first-name"
                          ></input>
                        </div>
                        <div className="col-6">
                          <label className="last-name-text">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Your Last Name"
                            className="last-name"
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">
                            Contact Number
                          </label>
                          <input
                            type="number"
                            placeholder="+91"
                            className="first-name"
                          ></input>
                        </div>
                        <div className="col-6">
                          <label className="last-name-text">E-mail</label>
                          <input
                            type="email"
                            placeholder="Your Email Address"
                            className="last-name"
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-12">
                          <label>Address</label>
                          <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="address"
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">City</label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="City"
                            />

                            <DropdownButton
                              variant="outline-secondary"
                              title=""
                              id="input-group-dropdown-2"
                              align="end"
                            >
                              <Dropdown.Item href="#">Indore</Dropdown.Item>
                              <Dropdown.Item href="#">Bhopal</Dropdown.Item>
                              <Dropdown.Item href="#">Ujjain</Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>

                        <div className="col-6">
                          <label className="last-name-text">State</label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="State"
                            />

                            <DropdownButton
                              variant="outline-secondary"
                              title=""
                              id="input-group-dropdown-2"
                              align="end"
                            >
                              <Dropdown.Item href="#">
                                Madhya Pradesh
                              </Dropdown.Item>
                              <Dropdown.Item href="#">Gujrat</Dropdown.Item>
                              <Dropdown.Item href="#">
                                Uttar Pradesh
                              </Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">Zip Code</label>
                          <input
                            type="text"
                            placeholder="Your First Name"
                            className="first-name"
                          ></input>
                        </div>
                        <div className="col-6">
                          <label className="first-name-text">Country</label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="India"
                            />

                            <DropdownButton
                              variant="outline-secondary"
                              title=""
                              id="input-group-dropdown-2"
                              align="end"
                            >
                              <Dropdown.Item href="#">India</Dropdown.Item>
                              <Dropdown.Item href="#">Nepal</Dropdown.Item>
                              <Dropdown.Item href="#">Bhutan</Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-12">
                          <label>Password</label>
                          <input
                            type="Password"
                            placeholder="******"
                            className="address"
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-12">
                          <label>Confirm Password</label>
                          <input
                            type="Password"
                            placeholder="******"
                            className="address"
                          ></input>
                        </div>
                      </div>

                      <div className="form-btn name-row">
                        <button className="update-btn">Update Profile</button>
                        <button className="cancel-btn">Cancel</button>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>

                {/* ---------------- All Orders --------------- */}

                <Tab.Pane eventKey="third">
                  <div className="all-orders">
                    <div className="row">
                      <div className="col-6">
                        <h4>All Orders</h4>
                      </div>

                      <div className="col-6">
                        <Form.Select aria-label="Default select example">
                          <option>Show: Last 5 Order</option>
                          <option value="1">23</option>
                          <option value="2">45</option>
                          <option value="3">997</option>
                        </Form.Select>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="order-table">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Service Details</th>
                            <th>Order ID</th>
                            <th>Order Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={tableData01}
                                className="table-data-img"
                              ></img>
                              Hair Cut Service
                            </td>
                            <td>#200129875</td>
                            <td>1222.8365</td>
                            <td>Complete</td>
                            <td>
                              <div className="table-img">
                                <i class="fa-solid fa-eye eyeIcon"></i>
                                <i class="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={tableData02}
                                className="table-data-img"
                              ></img>
                              House Shift Service
                            </td>
                            <td>#200129875</td>
                            <td>1455.8768</td>
                            <td>Complete</td>
                            <td>
                              {" "}
                              <div className="table-img">
                                <i class="fa-solid fa-eye eyeIcon"></i>
                                <i class="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={tableData03}
                                className="table-data-img"
                              ></img>
                              Electric Line Services
                            </td>
                            <td>#200129875</td>
                            <td>1268.8955</td>
                            <td>Complete</td>
                            <td>
                              {" "}
                              <div className="table-img">
                                <i class="fa-solid fa-eye eyeIcon"></i>
                                <i class="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="pages">
                      <div className="row">
                        <div className="col-6">
                          <h5>Showing 10 To 20 Of 1 Entries</h5>
                        </div>

                        <div className="col-6">
                          <Pagination>{items}</Pagination>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                {/* ---------------- Address --------------- */}

                <Tab.Pane eventKey="fourth">
                  <div className="address-page">
                    <h2>Save Your Address</h2>
                    <p>
                      A common form of Lorem ipsum reads: Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="address-box">
                      <div className="home-address">
                        <p>At Home</p>
                      </div>

                      <div className="office-address">
                        <p>At Office</p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                {/* ---------- Logout ---------- */}

                <Tab.Pane eventKey="fifth">fifth tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
      </div>
      <Footer />
    </>
  );
};

export default Account;
