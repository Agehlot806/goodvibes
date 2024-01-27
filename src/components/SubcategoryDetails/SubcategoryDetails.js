import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import facial01 from "../../assets/FeatureImages/facial01.jpg";
import facial02 from "../../assets/FeatureImages/facial02.jpg";
import facial03 from "../../assets/FeatureImages/facial03.jpg";
import facial04 from "../../assets/FeatureImages/facial04.jpg";
import facial05 from "../../assets/FeatureImages/facial05.jpg";
import facialOfferBanner from "../../assets/FeatureImages/facialOfferBanner.jpg"
import facialOfferBanner02 from "../../assets/FeatureImages/facialOfferBanner02.jpg"
import facialOfferBanner03 from "../../assets/FeatureImages/facialOfferBanner03.jpg"
import facialOfferBanner04 from "../../assets/FeatureImages/facialOfferBanner04.jpg"
import "./SubcategoryDetails.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomTabTitle = ({ imageSrc, className, title }) => (
  <div className={`custom-tab-title ${className}`}>
    <img src={imageSrc} alt="Facial" className="custom-tab-image" />
    <div className="custom-tab-title-text">{title}</div>
  </div>
);

const SubcategoryDetails = () => {
  return (
    <div className="container">
      <section className="section-padding">

{/* ------------------- Offer Carousels ----------------- */}



        <div className="subcategory-area">
          <Tabs
            defaultActiveKey="All Skin Facial"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {/* ----------------- All Skin Facial --------------- */}
            <Tab
              eventKey="All Skin Facial"
              title={
                <CustomTabTitle
                  imageSrc={facial01}
                  className="custom-image-size"
                  title="All Skin Facial"
                />
              }
            >

     <div >
      <img src={facialOfferBanner} className="offer-banner" alt="banner"></img>
     </div>

              <section className="section-padding">

                <Row>
                  <Col lg={4} md={6}>
                    <div className="all-skin-card">
                      <img
                        src={facial05}
                        className="subcategory-card-img"
                      ></img>
                      <h4>VLCC Insta Glow Facial</h4>
                      <div className="amount-time">
                        <p>$44</p>
                        <h6>
                          <i className="fa-solid fa-clock"></i> 45 Minutes
                        </h6>
                      </div>
                      <div className="subcategory-buttons">
                      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 

                    <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4} md={6}>
                    <div className="all-skin-card">
                      <img
                        src={facial02}
                        className="subcategory-card-img"
                      ></img>
                      <h4>VLCC Insta Glow Facial</h4>
                      <div className="amount-time">
                        <p>$44</p>
                        <h6>
                          <i className="fa-solid fa-clock"></i> 45 Minutes
                        </h6>
                      </div>
                      <div className="subcategory-buttons">
                      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
  <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4} md={6}>
                    <div className="all-skin-card">
                      <img
                        src={facial03}
                        className="subcategory-card-img"
                      ></img>
                      <h4>VLCC Insta Glow Facial</h4>
                      <div className="amount-time">
                        <p>$44</p>
                        <h6>
                          <i className="fa-solid fa-clock"></i> 45 Minutes
                        </h6>
                      </div>

                      <div className="subcategory-buttons">
              
  <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link>            
  <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="all-skin-card">
                      <img
                        src={facial05}
                        className="subcategory-card-img"
                      ></img>
                      <h4>VLCC Insta Glow Facial</h4>
                      <div className="amount-time">
                        <p>$44</p>
                        <h6>
                          <i className="fa-solid fa-clock"></i> 45 Minutes
                        </h6>
                      </div>

                      <div className="subcategory-buttons">
                      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
  <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4} md={6}>
                    <div className="all-skin-card">
                      <img
                        src={facial02}
                        className="subcategory-card-img"
                      ></img>
                      <h4>VLCC Insta Glow Facial</h4>
                      <div className="amount-time">
                        <p>$44</p>
                        <h6>
                          <i className="fa-solid fa-clock"></i> 45 Minutes
                        </h6>
                      </div>

                      <div className="subcategory-buttons">
                      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
  <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </section>
            </Tab>

            {/* ---------------- Dry Skin Facial ---------------- */}
            <Tab
              eventKey="profile"
              title={
                <CustomTabTitle
                  imageSrc={facial02}
                  className="custom-image-size"
                  title="Dry Skin Facial"
                />
              }
            >
<div >
      <img src={facialOfferBanner03} className="offer-banner" alt="banner"></img>
     </div>

              <section className="section-padding">

<Row>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial03}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
</Row>
</section>
            </Tab>

            {/* -------------- Oily SKin Facial --------------  */}
            <Tab
              eventKey="contact"
              title={
                <CustomTabTitle
                  imageSrc={facial03}
                  className="custom-image-size"
                  title="Oily Skin Facial"
                />
              }
            >

<div >
      <img src={facialOfferBanner02} className="offer-banner" alt="banner"></img>
     </div>

            <section className="section-padding">

<Row>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial03}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
</Row>
</section>
            </Tab>

            {/* -------------------- Anti Aging Facial --------------- */}
            <Tab
              eventKey="sdsd"
              title={
                <CustomTabTitle
                  imageSrc={facial04}
                  className="custom-image-size"
                  title="Anti Aging Facial"
                />
              }
            >

<div >
      <img src={facialOfferBanner04} className="offer-banner" alt="banner"></img>
     </div>

              <section className="section-padding">

<Row>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial03}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
</Row>
</section>
            </Tab>

            {/* --------------- Clean Up ------------------- */}
            <Tab
              eventKey="dfdf"
              title={
                <CustomTabTitle
                  imageSrc={facial02}
                  className="custom-image-size"
                  title="Cleanup"
                />
              }
            >
              <section className="section-padding">

<Row>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>
      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial03}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial05}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>

  <Col lg={4} md={6}>
    <div className="all-skin-card">
      <img
        src={facial02}
        className="subcategory-card-img"
      ></img>
      <h4>VLCC Insta Glow Facial</h4>
      <div className="amount-time">
        <p>$44</p>
        <h6>
          <i className="fa-solid fa-clock"></i> 45 Minutes
        </h6>
      </div>

      <div className="subcategory-buttons">
      <Link to='/ViewDetailPage'>
  <button className="subcategory-details">View Details</button>
  </Link> 
      <Link to="/Addtocart">
                      <button className="subcategory-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>Add to Cart
                      </button>
                      </Link>
      </div>
    </div>
  </Col>
</Row>
</section>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SubcategoryDetails;
