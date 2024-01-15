import React from "react";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Help = () => {
  return (
    <div>
      <Header />
      <BreadCrumb homeTitle="Home" pageTitle="Help" />
      <Footer />
    </div>
  );
};

export default Help;
