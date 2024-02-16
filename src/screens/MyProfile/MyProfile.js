import React,{ useState, useEffect } from "react";
import "./MyProfile.css";
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
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Account = () => {
const [userData, setUserData] = useState(null);

useEffect(()=>{
  fetchUserData();
}, []);

 const fetchUserData = async () => {

  try{
    const response = await fetch(
      "https://goodvibes.digiatto.online/api/v1/customer/auth/userprofile/be7aeb93-3f40-4bc9-a2ee-3112ac0c922a"
    );
    const data = await response.json();
    setUserData(data.data[0]);
  }
  catch(error){
    console.error("Error fetch user data :", error);
  }
 };

  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>My Profile</h2>
      </div>

      <div className="container mt-5 ">
        {/* ----------------------------------------------- New -------------------------------------------------- */}

        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <div className="account-btn">
                  <Nav.Item className="all-btn">
                    <Nav.Link eventKey="0" className="btn-text">
                      <i className="fa-solid fa-house"></i> Dashboard
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="all-btn">
                    <Nav.Link eventKey="1" className="btn-text">
                      <i className="fa-solid fa-user"></i> My Profile
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item className="all-btn">
                    <Nav.Link eventKey="3" className="btn-text">
                      <i className="fa-solid fa-location-dot"></i> Address
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="all-btn">
                    <Nav.Link eventKey="2" className="btn-text">
                      <i className="fa-solid fa-bag-shopping"></i> All Order
                    </Nav.Link>
                  </Nav.Item>

                

                  <Nav.Item className="all-btn">
                    <Nav.Link eventKey="4" className="btn-text">
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Col>
            {/* --------------------- Navbar Content ------------------------ */}
            <Col sm={9}>
              <Tab.Content>
                {/* ------  Dashboard ------ */}
                <Tab.Pane eventKey="0">
                  <div className="dashboard-page">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="order-box">
                          <h5 className="dashboard-headings">Order Pending</h5>
                          <div className="box-inner">
                            <div className="icon">
    <img src="assets/images/icons/order-box-1.png"
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
                      <div className="col-lg-6">
                        <div className="order-box">
                          <h5 className="dashboard-headings">Order Complete</h5>
                          <div className="box-inner">
                            <div className="icon">
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

                      <div className="col-lg-6">
                        <div className="order-box">
                          <h5 className="dashboard-headings">Order Active</h5>
                          <div className="box-inner">
                            <div className="icon">
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
                      <div className="col-lg-6">
                        <div className="order-box">
                          <h5 className="dashboard-headings">Total Order</h5>
                          <div className="box-inner">
                            <div className="icon">
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
                <Tab.Pane eventKey="1">
                  {" "}
                  <div className="my-profile">
                    <div className="user-section">
                      <img src={userImg} className="user-img"></img>
                      <span>
                        {" "}
  <h3>{userData ? `${userData.first_name} ${userData.last_name}`: ''}</h3>
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
          value={userData ? userData.first_name : ''}
                          ></input>
                        </div>
                        <div className="col-6">
      <label className="last-name-text">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Your Last Name"
                            className="last-name"
          value={userData ? userData.last_name: ''}
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
            value={userData ? userData.phone : ''}
                          ></input>
                        </div>
                        <div className="col-6">
       <label className="last-name-text">E-mail</label>
                          <input
                            type="email"
                            placeholder="Your Email Address"
                            className="last-name"
                value={userData ? userData.email : ''}
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">

                        <div className="col-6">
                          <label>Date Of Birth</label>
                          <input
                            type="date"
                            placeholder="DD/MM/YYYY"
                            className="address"
              value={userData ? userData.date_of_birth : ''}
                          ></input>
                        </div>

                        <div className="col-6">
                          <label>Gender</label>
                          <input
                            type="text"
                            placeholder="Gender"
                            className="address"
            value={userData ? userData.gender: ''}
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

             
                {/* ---------------- Address --------------- */}
                <Tab.Pane eventKey="3">
                  {" "}
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

                   {/* ---------------- All Orders --------------- */}
                   <Tab.Pane eventKey="2">
                  {" "}
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
                                <i className="fa-solid fa-eye eyeIcon"></i>
                                <i className="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={tableData02}
                                className="table-data-img"
                              ></img>
                              Pedicure
                            </td>
                            <td>#200129875</td>
                            <td>1455.8768</td>
                            <td>Complete</td>
                            <td>
                              {" "}
                              <div className="table-img">
                                <i className="fa-solid fa-eye eyeIcon"></i>
                                <i className="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={tableData03}
                                className="table-data-img"
                              ></img>
                              Facial
                            </td>
                            <td>#200129875</td>
                            <td>1268.8955</td>
                            <td>Complete</td>
                            <td>
                              {" "}
                              <div className="table-img">
                                <i className="fa-solid fa-eye eyeIcon"></i>
                                <i className="fa-solid fa-trash-can deleteIcon"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Tab.Pane>


                {/* ---------- Logout ---------- */}
                <Tab.Pane eventKey="4">Second tab content</Tab.Pane>
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
