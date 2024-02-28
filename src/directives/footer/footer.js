import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import GoodVibesWhiteLogo from "../../assets/GoodVibesWhiteLogo.png";
import applestore from "../../assets/image/appstore.png";
import playstore from "../../assets/image/playmarket.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6}>
              <div className="goodvibes-footer-info">
                <img src={GoodVibesWhiteLogo} className="good-vibes-logo"></img>
                <p>
                  Step into an oasis of magnificence we devised for your new
                  beauty center, resort or spa site. We are sure you’ll love
                  your time with GoodVibes.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} sm={6}>
              <div className="footer-lbl">
                <h4 className="footer-headings">IMPORTANT LINKS</h4>

                <ul>
                  <Link to="/VendorForm"><li>Become a Provider</li></Link>

                  <Link to="/TermsConditions">
                    <li>Terms & Conditions</li></Link>

                  <Link to="/blog">
                    <li>Blogs</li>
                  </Link>
                  <Link to="/Policies">
                    {" "}
                    <li>Policies</li>
                  </Link>
              
                  <Link to="/shop">
                    <li> Shop</li>
                  </Link>

                  <Link to="/MyProfile">
                    <li>My Profile</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="footer-lbl">
                <h4 className="footer-headings">CONTACT</h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-address-book"></i> Indore- India -
                    560034
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i> +91-987654321
                  </li>
                  <li>
                    <i className="fa-regular fa-envelope"></i>{" "}
                    support@initappz.com
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i> Vijyanagar,
                    PU4, Behind C21 Mall, Madhya Pradesh, India
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="footer-lbl">
                <div className="footer-right">
                  <h4 className="footer-headings">Ultimate Salon</h4>
                  <div className="download-store-img">
                    <img src={applestore} className="apple-store-img" />
                    <br />
                    <img src={playstore} className="play-store-img" />
                  </div>
                  <div className="footer-logo">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </Col>
            <p></p>
          </Row>

          {/* ------------ Footer-end ------------- */}
          <div className="footer-end-area">
            <div className="footer-end">
              <p className="copyright">
                <i class="fa-solid fa-copyright"></i> Copyright 2023 serve |
                Designed by
                <span>
                  <a href="#" className="copyright-link">
                    Good Vibes
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
