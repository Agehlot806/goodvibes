import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = ({ homeTitle, pageTitle, down }) => {
  return (
    <>
      <div className="all-bg-banner">
        <Container>
          <div className="all-bg-content">
            <h2>{pageTitle}</h2>
            <Link to="/">{homeTitle}</Link>{" "}
            <span>
              <i className="fa fa-chevron-right" /> {pageTitle}
            </span>
          </div>
        </Container>
      </div>
      {/* <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h2>{pageTitle}</h2>
                <Link to="/">{homeTitle}</Link>{" "}
                <span>
                  <i className="fa fa-chevron-right" />
                  {pageTitle}
                </span>
                <span>
                  <a href="/">{homeTitle}</a>
                </span>
                <div className="arrow-down">
                  <a href={down}>
                    <i className="fa fa-chevron-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BreadCrumb;
