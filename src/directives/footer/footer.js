import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import applestore from "../../assets/image/appstore.png";
import playstore from "../../assets/image/playmarket.png";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-lbl">
                <h4 className="footer-headings">Ultimate Salon</h4>
                <img src={applestore}  className="apple-store-img"/>
                <br />
                <img src={playstore} className="play-store-img" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-lbl">
                <h4 className="footer-headings">IMPORTANT LINKS</h4>

                <ul>
                  <li>About</li>
                  <li>The Blogs</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Legal Mentions</li>
                  <li>Cookies</li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-lbl">
                <h4 className="footer-headings">CONTACT</h4>
                <ul>
                  <li> Bangalore - India - 560034</li>
                  <li><i class="fa-solid fa-phone"></i> +91-987654321</li>
                  <li>support@initappz.com</li>
                  <li><i class="fa-solid fa-location-dot"></i> 68/170, Avenue 01, Mirpur DOHS, India</li>
                </ul>
              </div>
           
            </Col>
            <hr/>
           
          </Row>
          <Row>
            <Col lg={6}>
            <div className="footer-end">
              <p className="copyright">Copyright 2023 serve | Designed by 
        <span><a href="#" className="copyright-link">Good Vibes</a>   </span>
              </p>
            </div>
            </Col>
            <Col lg={6}>
              <div className="footer-logo">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
