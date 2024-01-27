import React from "react";
import "./FeatureSubCat.css";
import { Link } from "react-router-dom";
import Navbar from "../../../directives/Navbar/Navbar";
import { Col, Row } from "react-bootstrap";
import facial01 from "../../../assets/FeatureImages/facial01.jpg";
import facial02 from "../../../assets/FeatureImages/facial02.jpg";
import facial03 from "../../../assets/FeatureImages/facial03.jpg";
import facial04 from "../../../assets/FeatureImages/facial04.jpg";

const FeatureSubCat = () => {
  return (
    <>
      <Navbar />
      <div className="feature-subcategory-bg"> </div>

      <div className="container">
        <div className="inner-subCat-bg">
          <div className="subcategory-heading">
            <h5>Sub-Categories</h5>
            <h1>We Provide Diffrent Kinds Of Facials Which Suits Your Skin</h1>
            <p>
              Getting a facial is not only relaxing and rejuvinating to the
              face, but also the mind. Facials allow you to focus on your
              breathing and regain your confidence in having healthy beautiful
              skin. Monthly facials help to support your at home skincare
              program to achieve the healthiest skin possible.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="category-type">
            <Row>
              <Col lg={4}>
              <div className="subcategory-img-box">
                <div className="subcategory-box">
          <img src={facial01} alt="facial" className="sub-images"/>
          <h6>All Skin Facial</h6>
          </div>
                 <div className="sub-text-box">
        <Link to="/SubcategoryDetails"><div className="sub-text">All Skin Facial</div></Link>   
               </div>
               </div>
              </Col>

              <Col lg={4}>
              <div className="subcategory-img-box">
              <div className="subcategory-box">
          <img src={facial02} alt="facial" className="sub-images"/>
          <h6>Anti Aging Facial</h6>
          </div>

                 <div className="sub-text-box">
 <Link to="/SubcategoryDetails"><div className="sub-text">Anti Aging Facial</div></Link>
               </div>
               </div>
              </Col>

              <Col lg={4}>
              <div className="subcategory-img-box">
              <div className="subcategory-box">
          <img src={facial03} alt="facial" className="sub-images"/>
          <h6>Dry Skin Facial</h6>
          </div>

                 <div className="sub-text-box">
   <Link to="/SubcategoryDetails"> <div className="sub-text">Dry Skin Facial</div></Link>
               </div>
               </div>
              </Col>

              <Col lg={4}>
              <div className="subcategory-img-box">
              <div className="subcategory-box">
          <img src={facial04} alt="facial" className="sub-images"/>
          <h6>Oily Skin Facial</h6>
          </div>

                 <div className="sub-text-box">
  <Link to="/SubcategoryDetails">  <div className="sub-text">Oily Skin Facial</div></Link>
               </div>
               </div>
              </Col>

              <Col lg={4}>
              <div className="subcategory-img-box">
              <div className="subcategory-box">
          <img src={facial01} alt="facial" className="sub-images"/>
          <h6>Cleanup</h6>
          </div>

                 <div className="sub-text-box">
  <Link to="/SubcategoryDetails"> <div className="sub-text">Clean Up</div></Link>
               </div>
               </div>
              </Col>

              <Col lg={4}>
              <div className="subcategory-img-box">
              <div className="subcategory-box">
          <img src={facial02} alt="facial" className="sub-images"/>
          <h6>Massage</h6>
          </div>
                 <div className="sub-text-box">
<Link to="/SubcategoryDetails">  <div className="sub-text">Massage</div></Link>
               </div>
               </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeatureSubCat;
