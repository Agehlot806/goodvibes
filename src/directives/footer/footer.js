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
                <h4>Ultimate Salon</h4>
                <img src={applestore} />
                <br />
                <img src={playstore} />
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-lbl">
                <h4>IMPORTANT LINKS</h4>

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
                <h4>CONTACT</h4>
                <ul>
                  <li> Bangalore - India - 560034</li>
                  <li>9999999999</li>
                  <li>support@initappz.com</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
