import React,{ useState, useEffect } from "react";
import "./MyProfile.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import userSampleImg from "../../assets/userSampleImg.jpg";
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



const Account = () => {
const [firstname, setfirstname] = useState('');
const [email, setemail] = useState('');
const [phone, setphone] = useState('');
const [gender, setgender] = useState('');
const [dateofbirth, setdateofbirth] = useState('');
const [lastname, setlastname] = useState('');

useEffect(()=>{
  fetchUserData();
}, []);

 const fetchUserData = async () => {

  try{
    const response = await fetch(
 "https://goodvibes.digiatto.online/api/v1/customer/auth/userprofile/be7aeb93-3f40-4bc9-a2ee-3112ac0c922a"
    );
    const data = await response.json();
    setfirstname(data.data[0].first_name);
    setlastname(data.data[0].last_name);
    setdateofbirth(data.data[0].date_of_birth);
    setphone(data.data[0].phone);
    setemail(data.data[0].email);
    setgender(data.data[0].gender);
  }
  catch(error){
    console.error("Error fetch user data :", error);
  }
 };

 const handleUpdateProfile = async () => {
  try{
    const response = await fetch(
      "https://goodvibes.digiatto.online/api/v1/customer/auth/userprofile_update",
      {
        method: "POST",
        headers: {
    "Content-Type" : "application/json",
        },
    body:JSON.stringify(),
      }
    );
    const responseData = await response.json();
    if(response.ok){
      console.log("Profile updated sucessfully:", responseData);
    }
    else{
      console.error("error updating profile:", responseData.message);
    }
  }catch(error){
    console.error("Error updating profile:", error);
  }
 };

  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>My Profile</h2>
      </div>

      <div className="container mt-5 ">
        {/* --------------------------------------- New --------------------------------------- */}

        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row>
            <Col sm={4}>
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
            <Col sm={8}>
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
                    <div className='profile-imgArea'>
                                                        <div>
              <div className="profile-image">
          <img className="avater-image" src={userSampleImg} alt="img" />
        <div className="custom-fileuplode">
    <label htmlFor="fileuplode" className="file-uplode-btn bg-hover text-white">
    <i class="fa-solid fa-pen-to-square"></i>
           </label>
      <input type="file" id="fileuplode" name="image" accept="image/*" className="putImage1" onchange="previewFile(this)" />
    </div>
        </div>
        </div>
     <div className='align-self-center'>
   <h6>Select Your Picture</h6>
      <p>Accepted Image Files: JPEG, JPG, PNG</p>
         <p>Accepted Size: 300 x 300 (1MB)</p>
        </div>
         </div>
                    </div>
<hr/>
                    <form>
                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">
                          <i class="fa-solid fa-user"></i>  First Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Your First Name"
                            className="first-name"
          value={firstname}
                          ></input>
                        </div>
                        <div className="col-6">
      <label className="last-name-text">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Your Last Name"
                            className="last-name"
          value={lastname}
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">
                          <i class="fa-solid fa-phone"></i>     Contact Number
                          </label>
                          <input
                            type="number"
                            placeholder="+91"
                            className="first-name"
            value={phone}
                          ></input>
                        </div>
                        <div className="col-6">
       <label className="last-name-text">
        <i class="fa-solid fa-envelope"></i> E-mail</label>
                          <input
                            type="email"
                            placeholder="Your Email Address"
                            className="last-name"
                value={email}
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">

                        <div className="col-6">
                          <label><i class="fa-solid fa-cake-candles"></i> Date Of Birth</label>
                          <input
                            type="date"
                            placeholder="DD/MM/YYYY"
                            className="address"
              value={dateofbirth}
                          ></input>
                        </div>

                        <div className="col-6">
                          <label><i class="fa-solid fa-venus-mars"></i> Gender</label>
                          <input
                            type="text"
                            placeholder="Gender"
                            className="address"
            value={gender}
                          ></input>
                        </div>
                      </div>

                      <div className="form-btn name-row">
      <button className="update-btn" onClick={handleUpdateProfile}>Update Profile</button>
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
                   

                    <form className="address-form">
                      <div className="row name-row">
                        <div className="col-6">
                          <label className="first-name-text">
                          Contact Person Name
                          </label>
                          <input
                            type="text"
                            placeholder=" Contact Person Name"
                            className="first-name"
         
                          ></input>
                        </div>
                        <div className="col-6">
      <label className="last-name-text">Contact Number</label>
                          <input
                            type="tel"
                            placeholder="+91-"
                            className="last-name"
     
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">
                        <div className="col-12">
                          <label className="first-name-text">
                          Address
                          </label>
                          <input
                            type="text"
                            placeholder="Type Your Address Here"
                            className="first-name"
         
                          ></input>
                        </div>
                        <div className="col-6">
       <label className="last-name-text">Address Type</label>
                          <input
                            type="text"
                            placeholder="Address Type"
                            className="last-name"
                
                          ></input>
                        </div>

                        <div className="col-6">
       <label className="last-name-text">Address Label</label>
                          <input
                            type="text"
                            placeholder="Address Label"
                            className="last-name"
                
                          ></input>
                        </div>
                      </div>

                      <div className="row name-row">

                        <div className="col-6">
                          <label>Country</label>
                          <input
                            type="text"
                            placeholder="India"
                            className="address"></input>
                        </div>

                        <div className="col-6">
                          <label>City</label>
                          <input
                            type="text"
                            placeholder="City"
                            className="address"
         
                          ></input>
                        </div>

                        <div className="col-6">
                          <label>Street</label>
                          <input
                            type="text"
                            placeholder="Street"
                            className="address"
         
                          ></input>
                        </div>

                        <div className="col-6">
                          <label>Latitude</label>
                          <input
                            type="text"
                            placeholder="Latitude"
                            className="address"
         
                          ></input>
                        </div>

                        <div className="col-6">
                          <label>Longitude</label>
                          <input
                            type="text"
                            placeholder="Longitude"
                            className="address"
         
                          ></input>
                        </div>

                        <div className="col-6">
                          <label>House Number</label>
                          <input
                            type="text"
                            placeholder="House Number "
                            className="address"
         
                          ></input>
                        </div>
                      </div>

                      <div className="form-btn name-row">
                        <button className="update-btn">Update Address</button>
                        <button className="cancel-btn">Cancel</button>
                      </div>
                    </form>
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
