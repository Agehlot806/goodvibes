import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import GoodVibesLogo from "../../assets/GoodVibesLogo.png"
import applestore from "../../assets/image/appstore.png";
import playstore from "../../assets/image/playmarket.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <Container>

          <Row>

          <Col lg={3} md={4}  sm={6}>
       
            <div className="goodvibes-footer-info">
            <img src={GoodVibesLogo} className="good-vibes-logo"></img>
            <p>Step into an oasis of magnificence we devised for your new beauty center, resort or spa site. We are sure you’ll love your time with GoodVibes.</p>
            </div>
       
          </Col>

            <Col lg={3} md={4} sm={6}>
            <div className="footer-lbl">
                <h4 className="footer-headings">IMPORTANT LINKS</h4>

                <ul>
                <Link to="/About"> <li>About</li></Link>
                  <Link to="/blog"><li>Blogs</li></Link>  
                  <Link to="/contactus"> <li>Contact Us</li></Link>  
                  <li>FAQ</li>
                  <li>Legal Mentions</li>
                  <li>Cookies</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={4}  sm={6}>
            <div className="footer-lbl">
                <h4 className="footer-headings">CONTACT</h4>
                <ul>
                  <li> Bangalore - India - 560034</li>
                  <li><i class="fa-solid fa-phone"></i> +91-987654321</li>
        <li><i class="fa-regular fa-envelope"></i> support@initappz.com</li>
      <li><i class="fa-solid fa-location-dot"></i> 68/170, Avenue 01, Mirpur DOHS, India</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={4}  sm={6} >
            <div className="footer-lbl">
            <div className="footer-right"> 
                <h4 className="footer-headings">Ultimate Salon</h4>
                <div className="download-store-img">
                <img src={applestore}  className="apple-store-img"/>
                <br />
                <img src={playstore} className="play-store-img" />
                </div>
                <div className="footer-logo">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>

                </div> 
              </div>
           
            </Col>
          <p></p>
           
          </Row>

          {/* ------------ Footer-end ------------- */}
         <div className="footer-end-area">          
            <div className="footer-end">
              <p className="copyright">Copyright 2023 serve | Designed by 
        <span><a href="#" className="copyright-link">Good Vibes</a>   </span>
              </p>
            </div>
            </div>
        
        </Container>
      </div>
    </>
  );
};

export default Footer;
