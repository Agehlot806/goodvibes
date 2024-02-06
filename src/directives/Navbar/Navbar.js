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
                <Link to="/shop">
                  <h6>Shop</h6>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/service">
                  <h6>Services</h6>
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                {" "}
                <Link to="/login">Login</Link>
              </Nav.Link> */}

              <Nav.Link>
                {" "}
                <Link to="/contactus">
                  <h6>Contact us</h6>
                </Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <div className="more-option-area">
                  <h6 className="more-options">
                    More
                    <i class="fa-solid fa-caret-down"></i>
                  </h6>
                  <div className="dropdown-menu">
                    <Link to="/About">
                      {" "}
                      <a href="#">About Us</a>
                    </Link>
                    <Link to="/OurTeam">
                      {" "}
                      <a href="#">Our Team</a>
                    </Link>
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
              <Nav.Link href="">
                <Link to="/add-to-cart">
                  <i className="fa-solid fa-cart-shopping" />
                </Link>
              </Nav.Link>
              {/* <Nav.Link eventKey={2}>
                <Link to="/account">
                  <button className="my-account-btn">My Account</button>
                </Link>
              </Nav.Link> */}
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
                    <button className="register-nav-btn">Register</button>
                  </Link>
                </Nav.Link>
                <Link to="/login">
                  <button className="login-nav-btn" role="button">
                    Login
                  </button>
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
