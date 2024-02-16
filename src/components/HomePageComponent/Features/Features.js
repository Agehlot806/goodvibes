import React, { useState, useEffect } from "react";
import "./Features.css";
import { Link } from "react-router-dom";
import dTanImage from "../../../assets/FeatureImages/dTanImage.jpg";
import facialImg from "../../../assets/FeatureImages/facialImg.jpg";
import ManiPadicure from "../../../assets/FeatureImages/ManiPadicure.jpg";
import HairCare from "../../../assets/FeatureImages/HairCare.jpg";
import preBridal from "../../../assets/FeatureImages/preBridal.jpg";
import waxing from "../../../assets/FeatureImages/waxing.jpg";
import bodyMassage from "../../../assets/FeatureImages/bodyMassage.jpg";
import threading from "../../../assets/FeatureImages/threading.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Features = () => {

  const FeatureCategory= [
    {image: facialImg, title: "Facial & Cleanup" },
    {image: dTanImage, title: "Bleach & D-Tan" },
    {image: ManiPadicure, title: "Mani-Padi" },
    {image: HairCare, title: "Hair Care" },
    {image: preBridal, title: "Pre-Bridal" },
    {image: threading, title: "Threading" },
    {image: waxing, title: "waxing" },
    {image: bodyMassage, title: "bodyMassage" }
  ];
  const [featureCategories, setFeatureCategories] = useState([]);

  useEffect(() => {
    fetch("https://nagarsathi.hirectjob.in/api/v1/customer/category?limit=10&offset=10")
      .then((response) => response.json())
      .then((data) => {
       
          setFeatureCategories(data.content);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* ------------ Featured Categories ------------------- */}

      <section className="section-padding">
        <Container>
          <div className="featured-category">
            <div>
              <h2 className="main-heading">Featured Categories</h2>
            </div>

            <Row>

            {featureCategories && 
            featureCategories.links &&
            featureCategories.links.map((items)=>(
            <div key={items.data}>

                <h1>{items.data}</h1>
              
            </div>
          ))}
      {FeatureCategory.map((item,index)=>
      ( <Col lg={3} md={4} sm={6} key={index}>
      <div className="category-box">
      <Link to="/SubcategoryDetails">
     <div className="feature-icon">
    <span className="feature-background">
    <img src={item.image} className="feature-logo"></img>
     </span>
      <h5>{item.title}</h5>
                    </div>
                  </Link>
                </div>
              </Col>))} 

              </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Features;
