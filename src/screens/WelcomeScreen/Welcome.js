import React, { useState } from "react";
import "./Welcome.css";
import Navbar from "../../directives/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import beautySalonImg from "../../assets/beautySalonImg.jpg";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import CategorySection from "../../components/HomePageComponent/CategorySection";
import Blog from "../../components/HomePageComponent/BlogSection/Blog";
import Footer from "../../directives/footer/footer";
import WhyChooseUs from "../../components/HomePageComponent/WhyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";
import DownloadApp from "../../components/HomePageComponent/DownloadApp/DownloadApp";
import ServiceProvider from "../../components/ServiceProvider/ServiceProvider";

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
      <Navbar />
      <div className="dashboard-main">
        {/* ------------- Navbar --------------- */}
        <div className="container">
          <div className="fast-response">
            <h6 className="fast-response-text">
              Fast Response - Quality Works
            </h6>
          </div>

          {/* -------------- Search area ------------- */}

          <div className="landing-page-location">
            <h2>SERVICES, WHAT YOU DESERVE !</h2>
            <p>Order our services at anytime from anywhere</p>
            <div className="search-area">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Location Here"
                  className="search-input"
                ></input>
                <button type="submit" className="search-btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <span>
                <p>or</p>
              </span>
              <span>
                <button className="pick-from-map">Pick From Map</button>{" "}
              </span>
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
              <Col lg={6} md={6} sm={12} className="align-self-center">
                <div className="getapp_content">
                  <h2>We Will Change Your Out Looks</h2>
                  <p>
                    Experience beauty at its best in our salons. Explore
                    personalized treatments that enhance your natural glow. From
                    revitalizing facials to stylish hair services, our skilled
                    professionals ensure a luxurious experience, leaving you
                    feeling confident and gorgeous.
                  </p>
                  <Link to="/OurTeam">
                    <button className="find-salon-btn">
                      Find Salon Specialist
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
              <div className="salon-circle">
                  <img src={beautySalonImg} className="beauty-salon-img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/*------------- Why choose us Area ----------------*/}
      <section className="section-padding">
        <WhyChooseUs />
      </section>

      {/* -------------- Download our App --------------- */}
      <section className="section-padding">
        <DownloadApp />
      </section>

      {/* ---------------- Register as Service Provider ------------- */}
      <section className="section-padding">
        <ServiceProvider />
      </section>

      {/*------------------ Blog Area --------------------*/}

      <Blog />

      {/*------------------- Footer Area --------------------*/}

      <Footer />
    </>
  );
};

export default Welcome;
