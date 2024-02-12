import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logodemo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";


 const CurrentAddressNavbar =() =>{
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="current-address-nav">
      <Container>
   
      <Navbar.Text>
        <i class="fa-solid fa-location-dot"></i> Vijay Nagar, Indore. MP
        </Navbar.Text>

        <Navbar.Text>
        <i class="fa-solid fa-envelope"></i> goodvibes@gmail.com
        </Navbar.Text>

      <Navbar.Text>
        <i class="fa-solid fa-phone"></i> +91-9876543211
        </Navbar.Text>

      
   
      </Container>
    </Navbar>
  )
 };

 const MainNavbar =() => {
    return(
  <Navbar
  collapseOnSelect
  expand="lg"
  className="header-3 sticky_top sticky"
  style={{ marginTop: "40px" }}
>
     
  <Container>
    <Link to="/">
      <Navbar.Brand>
        <img src={Logo} alt="nav-logo" className="newNav-logo"></img>
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="newNav-menus">
      <Nav className="me-auto">
        <Nav.Link>
          {" "}
          <Link to="/home">
            <h6>Home</h6>
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/service">
            <h6>Services</h6>
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/About">
            <h6>About Us</h6>
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/contactus">
            <h6>Contact Us</h6>
          </Link>
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link
          eventKey={2}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Nav.Link>
            <Link to="/login">
              <button className="register-nav-btn">Login</button>
            </Link>
          </Nav.Link>

       
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
 };

// ------------------------------ Main
const NewNavbar = () => {


  return (
    <div>
      
   <CurrentAddressNavbar />
   <MainNavbar />

    </div>
  );
};

export default NewNavbar;
