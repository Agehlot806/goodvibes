import React from "react";

const BreadCrumb = ({ homeTitle, pageTitle }) => {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h2>{pageTitle}</h2>
                <span>
                  <a href="/">{homeTitle}</a>
                  <i className="fa fa-chevron-right"></i>
                  {pageTitle}
                </span>
                <div className="arrow-down">
                  <a href="#down">
                    <i className="fa fa-chevron-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
