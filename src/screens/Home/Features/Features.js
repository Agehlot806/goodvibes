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
      <section className="section-padding">
      <div className="container">
        <div className="featured-category">
          <div>
          <h2 className="main-heading">Featured Categories</h2>
          {/* <p>What do you need to find?</p> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
                <div className="feature-icon">
                  <span className="feature-background">
                    <img src={carWashLogo} className="feature-logo"></img>
                  </span>
                  <h5>Face Treatments</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={carpenterLogo} className="feature-logo"></img>
                  </span>
                  <h5>Hair Removal</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={cleaningLogo} className="feature-logo"></img>
                  </span>
                  <h5>Makeup</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={computerLogo} className="feature-logo"></img>
                  </span>
                  <h5>Med Spa</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={constructionLogo} className="feature-logo"></img>
                  </span>
                  <h5>Tanning</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={ElectricalLogo} className="feature-logo"></img>
                  </span>
                  <h5>Textured Hair</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={interiorLogo} className="feature-logo"></img>
                  </span>
                  <h5>Nails</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
              <div className="feature-icon">
                  <span className="feature-background">
                    <img src={plumbingLogo} className="feature-logo"></img>
                  </span>
                  <h5>Skin tightening</h5>
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
