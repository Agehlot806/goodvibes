import React, { useState } from "react";
import "./Welcome.css";
import Header from "../../directives/header/header";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import Location from "../../assets/location.png";
import brautysalon from "../../assets/beautythree.png";
import brautysalonmassage from "../../assets/massageSpa.png";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
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
      {/* Header Area */}
      <Header />
      {/* Hero Area Start */}
      <div className="home-bg">
        <Container>
          <div className="section-padding">
            <div className="home-content ">
              <div class="typewriter-area">
                <h1 class="typewriter">
                  Nonstop Services That <br />
                  Make Life Better.
                </h1>
              </div>
              <Row className="justify-content-center">
                {/* <Col lg={2}> */}
                {/* <Form.Select aria-label="Default select example">
                    
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select> */}
                {/* </Col> */}
                <Col lg={6}>
                  <div class="location-form">
                    <form action="#" method="post">
                      {/* <input
                        type="text"
                        name="location"
                        placeholder="Find Your Services Here"
                      /> */}
                      {/* <button type="submit">
                        <i class="fa fa-search">a</i>
                      </button> */}
                      <PlacesAutocomplete
                        value={address}
                        onChange={handleChange}
                        searchOptions={searchoptions}
                        onSelect={handleSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading,
                        }) => (
                          <div>
                            <InputGroup className="mb-3 ">
                              <InputGroup.Text>
                                <i className="fa fa-map-marker" />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Choose Your Location"
                                aria-label="Choose Your Location"
                                aria-describedby="basic-addon2"
                                {...getInputProps({
                                  placeholder: "Choose Your Location",
                                  // className: "location-search-input",
                                })}
                              />
                              <InputGroup.Text id="basic-addon2">
                                <i class="fa fa-search"></i>
                              </InputGroup.Text>
                            </InputGroup>
                            {/*  */}
                            {/* <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <img className="locationicon" src={Location} />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            {...getInputProps({
                              placeholder: "Choose Your Location",
                              className: "location-search-input",
                            })}
                          />
                          <InputGroup.Text id="basic-addon1">
                            Locate me <i class="fa fa-search search-icon"></i>
                          </InputGroup.Text>
                        </InputGroup> */}
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer",
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer",
                                    };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style,
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                      {/*  */}
                    </form>
                  </div>
                  {/* <h1>Find Your Favourite </h1> */}
                  {/* <h3>Salon & Specialist</h3> */}

                  {/* <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    searchOptions={searchoptions}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <img className="locationicon" src={Location} />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            {...getInputProps({
                              placeholder: "Choose Your Location",
                              className: "location-search-input",
                            })}
                          />
                          <InputGroup.Text id="basic-addon1">
                            Locate me <i class="fa fa-search search-icon"></i>
                          </InputGroup.Text>
                        </InputGroup>
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer",
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer",
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete> */}
                </Col>
              </Row>
              <div className="home-list">
                <h6>Suggest For You:</h6>
                <Link>Beauty & Salon</Link>
                <Link>Shifting</Link>
                <Link>AC Repair</Link>
                <Link>WallPainting</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Hero Area End */}
      {/* Category Section */}
      <CategorySection />
      {/* Beauty Salon start */}
      <div className="section-padding beautySalon">
        <Container>
          <Row>
            <Col lg={6} className="align-self-center">
              <div class="getapp_content">
                <h1>Beauty Salons</h1>
                <p>
                  Experience beauty at its best in our salons. Explore
                  personalized treatments that enhance your natural glow. From
                  revitalizing facials to stylish hair services, our skilled
                  professionals ensure a luxurious experience, leaving you
                  feeling confident and gorgeous.
                </p>
                <button class="getapp_contentbtn">Find Salon Specialist</button>
              </div>
            </Col>
            <Col lg={6}>
              <img src={brautysalon} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding massageSpa">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={brautysalonmassage} />
            </Col>
            <Col lg={6} className="align-self-center">
              <div class="getapp_content">
                <h1>Massage & Spa Centers</h1>
                <p>
                  Experience blissful relaxation at our massage & spa centers.
                  Treat yourself to rejuvenating therapies and luxurious
                  treatments, crafted to soothe your mind and revitalize your
                  body.
                </p>
                <button class="getapp_contentbtn">Find Salon Specialist</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Beauty Salon end */}

      {/* Why choose us Area */}
      {/* <WhyChooseUs /> */}
      {/* Blog Area */}
      <Blog />
      {/* Footer Area */}
      <Footer />
    </>
  );
};

export default Welcome;
