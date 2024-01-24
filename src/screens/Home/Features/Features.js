import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";
import dTanImage from "../../../assets/FeatureImages/dTanImage.jpg";
import facialImg from "../../../assets/FeatureImages/facialImg.jpg";
import ManiPadicure from "../../../assets/FeatureImages/ManiPadicure.jpg";
import HairCare from "../../../assets/FeatureImages/HairCare.jpg";
import preBridal from "../../../assets/FeatureImages/preBridal.jpg";
import nails from "../../../assets/FeatureImages/nails.jpg";
import bodyMassage from "../../../assets/FeatureImages/bodyMassage.jpg";
import threading from "../../../assets/FeatureImages/threading.jpg";



const Features = () => {
  return (
    <div>
      {/* Featured Categories */}
      <section className="section-padding">
      <div className="container">
        <div className="featured-category">
          <div>
          <h2 className="main-heading">Featured Categories</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
           
              <div className="category-box">
              <Link to="/FeatureSubCat">
                <div className="feature-icon">
                  <span className="feature-background">
                    <img src={facialImg} className="feature-logo"></img>
                  </span>
                  <h5 className="feature-headings">Facial & Cleanup</h5>
                </div>
                </Link>
              </div>
              
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={dTanImage} className="feature-logo"></img>
                  </span>
                  <h5>Bleach & D-Tan</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={ManiPadicure} className="feature-logo"></img>
                  </span>
                  <h5>Mani-Padi</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={HairCare} className="feature-logo"></img>
                  </span>
                  <h5>Hair Care</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={preBridal} className="feature-logo"></img>
                  </span>
                  <h5>Pre-Bridal</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={threading} className="feature-logo"></img>
                  </span>
                  <h5>Threading</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={nails} className="feature-logo"></img>
                  </span>
                  <h5>Nails</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={bodyMassage} className="feature-logo"></img>
                  </span>
                  <h5>Body Deals</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Features;
