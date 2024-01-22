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
    </>
  );
};

export default BreadCrumb;
