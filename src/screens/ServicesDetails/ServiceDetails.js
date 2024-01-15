import React from "react";
import Header from "../../directives/header/header";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../directives/footer/footer";
import "./Services.css";

const Service = () => {
  const ContactDeatils = [
    {
      title: "",
      address: "",
    },
  ];
  return (
    <>
      <Header />
      <BreadCrumb homeTitle="Home" pageTitle="Services" />

      <Footer />
    </>
  );
};

export default Service;
