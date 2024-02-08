import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logodemo.png";
import "./Navbar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

const NewNavbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const header = document.querySelector(".header-3");

      if (offset > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`header-3 ${isSticky ? "sticky_top sticky" : ""}`}
      >
        <Container fluid>
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
                {" "}
                <div className="more-option-area">
                  <h6 className="more-options">
                    More
                    <i className="fa-solid fa-caret-down"></i>
                  </h6>
                  <div className="dropdown-menu">

                    <Link to="/blog">
                      <a href="#">Blog</a>
                    </Link>
                    <a href="#">Support</a>
                    <a href="#">Help</a>
                  </div>
                </div>
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
                  <Link to="/signup">
                    <button className="register-nav-btn">Signup/Login</button>
                  </Link>
                </Nav.Link>

              
        <Nav.Link onClick={handleShow} className="me-2">  
                    <div className="hamburger-menu">                
                        <i className="fa-solid fa-bars"></i>
                    </div>
                  </Nav.Link>
            
                <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
            <h3 className="hamburger-head">Welcome to GoodVibes</h3></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="hamburger-menu">
                  <h3> Menu</h3>
                  
                  <div className="hamburger-list-item">                
                <Link to="/MyProfile">
                <a href="#">My Profile</a>
                </Link>
                    </div>

                    <div className="hamburger-list-item">
                      <Link to="/contactus">
                      {" "}
                      <a href="#">Contact Us</a>
                      </Link>
                      </div>

                    <div className="hamburger-list-item">
                    <Link to="/blog">
                    {" "}
                      <a href="#">Terms & Conditions</a>
                    </Link>
                    </div>

                    <div className="hamburger-list-item">
                    <Link to="/blog">
                    {" "}
                      <a href="#">Refund Policy</a>
                    </Link>
                    </div>

                    <div className="hamburger-list-item">
                    <Link to="/blog">
                    {" "}
                      <a href="#">Log Out</a>
                    </Link>
                    </div>

                  </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NewNavbar;
