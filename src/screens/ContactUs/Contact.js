import React from "react";
import Navbar from "../../directives/Navbar/Navbar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../directives/footer/footer";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";

const Contactus = () => {
  const ContactDeatils = [
    {
      title: "Location",
      address: "168/170, Ave 01, York Drive Rich Mirpur, Dhaka-1216",
      icon: "fa fa-map-marker",
    },
    {
      title: "Phone",
      mobile: "+880 176 1111 555",
      icon: "fa fa-phone",
    },
    {
      title: "Message Us",
      email: "info@cominfo@support.com",
      icon: "fa fa-envelope",
    },
  ];
  return (
    <>
      <Navbar />
      <BreadCrumb homeTitle="Home" pageTitle="Contact Us" />
      <section id="down" class="contact-us-area sec-m">
        <div class="container">
          <div class="contact-info">
            <div class="row gy-4 align-items-center">
              {ContactDeatils.map((item, index) => (
                <div class="col-md-6 col-lg-4 col-sm-3" key={index}>
                  <div class="info">
                    <div class="icon">
                      <i class={item.icon}></i>
                    </div>
                    <div class="desc">
                      <h4>{item.title}</h4>
                      <p>{item.address}</p>
                      <p>{item.mobile}</p>
                      <p>{item.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="section-padding">
      <div className="contact-page-head">
            <span>We’re Ready To Help You</span>
            <h1>Send Us Message</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              eiusmodesmu.
            </p>
            </div>
            </section>

          <div class="contact-form">
          
            <Row className="justify-content-center">
              <Col lg={8}>
              <form action="#" method="post">
              <div class="row">
                <div class="col-lg-6">
                  <input type="text" name="name" placeholder="Your Name :" />
                </div>
                <div class="col-lg-6">
                  <input type="email" name="email" placeholder="Your Email :" />
                </div>
               
                <div class="col-12">
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea
                    name="message"
                    cols="10"
                    rows="3"
                    placeholder="Write Message :"
                  ></textarea>
                  <input type="submit" />
                </div>
              </div>
            </form>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
