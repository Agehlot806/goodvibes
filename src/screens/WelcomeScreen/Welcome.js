import React, { useState } from "react";
import "./Welcome.css";
import Navbar from "../../directives/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import beautySalonImg from "../../assets/beautySalonImg.jpg";
import googleMapImg from "../../assets/googleMapImg.png";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CategorySection from "../../components/WhyGreat/CategorySection";
import Blog from "../../components/HomePageComponent/BlogSection/Blog";
import Footer from "../../directives/footer/footer";
import WhyChooseUs from "../../components/HomePageComponent/WhyChooseUs/WhyChooseUs";
import { Link, useNavigate } from "react-router-dom";
import DownloadApp from "../../components/HomePageComponent/DownloadApp/DownloadApp";
import ServiceProvider from "../../components/ServiceProvider/ServiceProvider";
import axios from "axios";

function MyVerticallyCenteredModal({ show, onHide }) {
  const [address, setAddress] = useState("");

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch address information.");
            }
            const data = await response.json();
            console.log("data", data);

            let formattedAddress = "";
            if (data.city) {
              formattedAddress += `${data.city}, `;
            }
            if (data.locality) {
              formattedAddress += `${data.locality}, `;
            }
            if (data.street) {
              formattedAddress += `${data.street}, `;
            }
            if (data.colony) {
              formattedAddress += `${data.colony}, `;
            }
            if (data.buildingName) {
              formattedAddress += `${data.buildingName}, `;
            }
            if (data.county) {
              formattedAddress += `${data.county}, `;
            }
            if (data.region) {
              formattedAddress += `${data.region}, `;
            }
            if (data.countryName) {
              formattedAddress += `${data.countryName}`;
            }

            setAddress(formattedAddress.trim());
          } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address. Please try again.");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setAddress("Error getting location. Please try again.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  console.log("location", address);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="map-image-box">
          <img src={googleMapImg} className="google-map-img" alt="map"></img>
          <h4>Find Services Near You</h4>
          <p>Please Select the Location to start exploring available services near you</p>
          <h4>{address}</h4>
        </div>
        <div>
          <button className="current-location" onClick={handleClick}>
            <i className="fa-solid fa-location-crosshairs"></i> Use Current Location
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Welcome = () => {
  const [address, setAddress] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false); // Track when to show autocomplete suggestions
  const navigatehomepage = useNavigate();

  const searchoptions = {
    types: ["(regions)"],
    componentRestrictions: { country: "in" },
  };

  const handleSelect = (selectedAddress) => {
    setAddress(selectedAddress);
    localStorage.setItem("selectedAddress", selectedAddress);
  };

  const AddresspostApi = async () => {
    try {
      const selectedAddressData = localStorage.getItem("selectedAddress");

      const response = await axios.post(
        `https://goodvibes.digiatto.online/api/v1/customer/address`,
        { address: selectedAddressData }
      );

      console.log("Response:", response.data);
      localStorage.setItem("zoneid", response.data.content.zone_id);
      navigatehomepage("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-main">
        <div className="container">
         
          <div className="landing-page-location">
            <h2>Services, What You Deserve !</h2>
            <p>Order our services at anytime from anywhere</p>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              searchOptions={searchoptions}
              onSelect={handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <div className="search-area">
                    <div className="search-container">
                      <input
                        {...getInputProps({
                          placeholder: "Search Location Here...",
                          className: "search-input",
                        })}
                        onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
                        onBlur={() => setShowSuggestions(false)} // Hide suggestions when input is blurred
                      ></input>
                      <button
                        type="submit"
                        className="search-btn"
                        onClick={AddresspostApi}
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                    <span>
                      <p>or</p>
                    </span>
                    <span>
                      <Button
                        variant="primary"
                        className="pick-from-map"
                        onClick={() => setModalShow(true)}
                      >
                        Pick From Map
                      </Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </span>
                  </div>
                  {/* Render suggestions only if showSuggestions is true */}
                  {showSuggestions && (
                    <div className="autocomplete-dropdown-container">
                      {!loading && suggestions.length > 0 && (
                        <div className="suggestions-container">
                          {suggestions.map((suggestion) => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
      </div>
      <CategorySection />
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
                  <Link to="/ContactUs">
                    <button className="find-salon-btn">
                      Find Salon Specialist
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="salon-circle">
                  <img src={beautySalonImg} className="beauty-salon-img" alt="Salon" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <section className="section-padding">
        <WhyChooseUs />
      </section>
      <section className="section-padding">
        <DownloadApp />
      </section>
      <section className="section-padding">
        <ServiceProvider />
      </section>
      <Blog />
      <Footer />
    </>
  );
};

export default Welcome;
