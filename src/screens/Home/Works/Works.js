import React from "react";
import "./Works.css";
import workBox01 from "../../../assets/workBox01.svg";
import workBox02 from "../../../assets/workBox02.svg";
import workBox03 from "../../../assets/workBox03.svg";

const Works = () => {
  return (
    <>
      <section className="section-padding">
      <div className="home-work-page">
        <h2 className="main-heading"> How It Works</h2>
        <div className="container">
          <div className="row justify-content-center">
            {/* ---------- first-circle --------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-circle">
                <span>
                  <img src={workBox01} className="work-box-img"></img>
                </span>
                <div>
                  <h5 className="work-heading">Choose what to do</h5>
                  <p className="work-para">
                    Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                    et .
                  </p>
                </div>
              </div>
            </div>

            {/* --------------- second circle ----------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-circle">
                <span className="work-box-2">
                  <img src={workBox02} className="work-box-img"></img>
                </span>
                <div>
                <h5 className="work-heading">Search What You Find</h5>
        <p className="work-para">Lorem ipsum dolor amet, consectetur adipiscing tempor labore et .</p> 
                </div>
              </div>
            </div>

            {/* -------------- third circle ------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-circle">
            <span>
                <img src={workBox03} className="work-box-img"></img>
                </span>
            <div>
            <h5 className="work-heading">Know About us</h5>
        <p className="work-para">Lorem ipsum dolor amet, consectetur adipiscing tempor labore et .</p>         
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Works;
