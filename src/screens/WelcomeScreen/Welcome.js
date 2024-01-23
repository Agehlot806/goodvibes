import React, { useState } from "react";
import "./Welcome.css";
import Navbar from "../../directives/Navbar/Navbar"
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import Location from "../../assets/location.png";
import beautySalonImg from "../../assets/beautySalonImg.jpg";
import nailArtImg from "../../assets/nailArtImg.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlacesAutocomplete, {geocodeByAddress,getLatLng,} from "react-places-autocomplete";
import CategorySection from "../../components/HomePageComponent/CategorySection";
import Blog from "../../components/HomePageComponent/BlogSection/Blog";
import Footer from "../../directives/footer/footer";
import BestService from "../../components/HomePageComponent/BestService/BestService";
import PopularServices from "../../components/HomePageComponent/PopularServices/PopularServices";
import WhyChooseUs from "../../components/HomePageComponent/WhyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const searchoptions = {
    types: ["(regions)"],
    componentRestrictions: { country: "in" },
  };

  const handleSelect = (selectedAddress) => {
    geocodeByAddress(selectedAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setAddress(selectedAddress);
        setLatitude(latLng.lat);
        setLongitude(latLng.lng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      {/*----------- Header Area --------------------*/}
      <Navbar/>
      <div className="dashboard-main">
    
      {/* ------------- Navbar --------------- */}
        <div className="container">

          <div className="fast-response">
            <h6 className="fast-response-text">
              Fast Response - Quality Works
            </h6>
          </div>

    {/* ------------ Dashboard Text ---------- */}
          <div className="dashboard-text-area">
            <h1 className="welcome-heading">
              Nonstop Services That Make Life Better.
            </h1>
          </div>

    {/* -------------- Search area ------------- */}

          <div className="search-area">
        <div className="search-container">
            <input
                type="text"
                placeholder="Find Your Services Here"
                className="search-input"
              ></input>
              <button type="submit" className="search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              </div>  
            </div>
          
          
          </div>         
        </div>
     
     
    {/* -------------------- Category Section --------------------- */}

      <CategorySection />

    {/*--------------------- Beauty Salon start --------------------- */}

      <div className="beautySalon-area">
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} sm={6} className="align-self-center">
              <div class="getapp_content">
                <h1>We Will Change Your Out Looks</h1>
                <p>
                  Experience beauty at its best in our salons. Explore
                  personalized treatments that enhance your natural glow. From
                  revitalizing facials to stylish hair services, our skilled
                  professionals ensure a luxurious experience, leaving you
                  feeling confident and gorgeous.
                </p>
                <button class="find-salon-btn">Find Salon Specialist</button>
              </div>
            </Col>
            <Col lg={6} sm={6} >
            <div className="salon-border">
              <img src={beautySalonImg} className="beauty-salon-img"/>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
      </div>

      {/* Why choose us Area */}
      <section className="section-padding">
      <WhyChooseUs /> 
      </section>

      {/* Blog Area */}

      <Blog />
      
      {/* Footer Area */}

      <Footer />
    </>
  );
};

export default Welcome;













