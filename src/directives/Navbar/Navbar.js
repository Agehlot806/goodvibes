import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logodemo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NewNavbar = () => {
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
          <Navbar.Brand href="/">
            <img src={Logo} alt="nav-logo" className="newNav-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="newNav-menus">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/service">Services</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/signup">Signup</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/blog">Blog</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/contactus">Contact us</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <div>
                  <i class="fa-solid fa-phone-volume phoneIcon"></i>
                  +91-987654321
                </div>
              </Nav.Link>
              <Nav.Link>
                <i class="fa-regular fa-heart"></i>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/add-to-cart">
                  <i className="fa-solid fa-cart-shopping" />
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/account">
                  <button className="my-account-btn">My Account</button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NewNavbar;
