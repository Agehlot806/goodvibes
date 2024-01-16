import React from "react";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Faqs = () => {
  return (
    <div>
      <Header />
      <BreadCrumb homeTitle="Home" pageTitle="FAQs" />
      <Footer />
    </div>
  );
};

export default Faqs;
