import React from "react";
import "./Features.css";
import carWashLogo from "../../../assets/icon/carWashLogo.svg";
import carpenterLogo from "../../../assets/icon/carpenterLogo.svg";
import cleaningLogo from "../../../assets/icon/cleaningLogo.svg";
import computerLogo from "../../../assets/icon/computerLogo.svg";
import constructionLogo from "../../../assets/icon/constructionLogo.svg";
import interiorLogo from "../../../assets/icon/interiorLogo.svg";
import plumbingLogo from "../../../assets/icon/plumbingLogo.svg";
import ElectricalLogo from "../../../assets/icon/ElectricalLogo.svg";

const Features = () => {
  return (
    <div>
      {/* Featured Categories */}

      <div className="container">
        <div className="featured-category">
          <div>
          <h2 className="category-head">Featured Categories</h2>
          {/* <p>What do you need to find?</p> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
                <div className="feature-icon">
                  <span className="feature-background">
                    <img src={carWashLogo} className="feature-logo"></img>
                  </span>
                  <h5>Car Wash</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={carpenterLogo} className="feature-logo"></img>
                  </span>
                  <h5>Carpentry</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={cleaningLogo} className="feature-logo"></img>
                  </span>
                  <h5>CLeaning</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={computerLogo} className="feature-logo"></img>
                  </span>
                  <h5>Computer</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={constructionLogo} className="feature-logo"></img>
                  </span>
                  <h5>Construction</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={ElectricalLogo} className="feature-logo"></img>
                  </span>
                  <h5>Electrical</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={interiorLogo} className="feature-logo"></img>
                  </span>
                  <h5>Interior</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={plumbingLogo} className="feature-logo"></img>
                  </span>
                  <h5>Plumbing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
