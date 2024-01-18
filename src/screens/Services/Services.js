import React from "react";
import Header from "../../directives/header/header";
import Navbar from "../../directives/Navbar/Navbar"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../directives/footer/footer";
import "./Services.css";
import serone from "../../assets/image/service-1.jpg";
import sertwo from "../../assets/image/service-2.jpg";
import serthree from "../../assets/image/service-3.jpg";
import serfour from "../../assets/image/service-4.jpg";
import IMG1 from "../../assets/image/img1.jpeg";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const popular = [
    {
      name: "Arrows hair & Beauty Zone.",
      title:
        "Hair Cutting , Hair Colouring , Hair Styling , Nail Treatment , Facial & Skincare , Tanning , Aromatherapy",
      image: IMG1,
    },
    {
      name: "Bellezza Salon and Laser Center",
      title:
        "Hair Cutting , Hair Colouring , Hair Styling , Waxing & Hair Removal , Nail Treatment , Facial & Skincare.",
      image: IMG1,
    },
    {
      name: "Empire the unisex salon",
      title:
        " Hair Cutting , Hair Colouring , Hair Styling , Waxing & Hair Removal , Nail Treatment , Facial & Skincare , Tanning.",
      image: IMG1,
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <BreadCrumb homeTitle="Home" pageTitle="Services" />
      <div className="container mt-5">
        <div
          className="service-selection wow animate fadeInUp"
          data-wow-delay="1800ms"
          data-wow-duration="1500ms"
        >
          <form action="#" method="post">
            <div className="row">
              <div className="col-lg-3">
                <div className="service-loc-selection">
                  <i>
                    <img src="assets/images/icons/location.svg" alt="" />
                  </i>
                  <div className=" css-1x8o21m-container">
                    <span
                      id="react-select-my-unique-id-live-region"
                      className="css-7pg0cj-a11yText"
                    />
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    />
                    <div className=" css-1vm2o4n-control">
                      <div className=" css-1tlhlrk">
                        <div
                          className=" css-ecoabs-placeholder"
                          id="react-select-my-unique-id-placeholder"
                        >
                          Select
                        </div>
                        <div className=" css-19bb58m" data-value>
                          <input
                            className
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-my-unique-id-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-describedby="react-select-my-unique-id-placeholder"
                            defaultValue
                            style={{
                              color: "inherit",
                              background: "0px center",
                              opacity: 1,
                              width: "100%",
                              gridArea: "1 / 2",
                              font: "inherit",
                              minWidth: "2px",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              padding: "0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <div
                          className=" css-yl5mvd-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height={20}
                            width={20}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="service-multi-slection">
                  <select
                    className="srv-select"
                    style={{
                      padding: "10px 20px",
                      border: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <option value="sda">Select Category</option>
                    <option value="Saloon">Saloon</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Ac repair">Ac repair</option>
                    <option value="Spa & beauty">Spa &amp; beauty</option>
                  </select>
                  <select
                    className="srv-select"
                    style={{
                      padding: "10px 20px",
                      border: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <option value="sda">Price Reange</option>
                    <option value="500-1000">500-1000</option>
                    <option value="1000-2000">1000-2000</option>
                    <option value="2000-5000">2000-5000</option>
                  </select>
                  <select
                    className="srv-select"
                    style={{
                      padding: "10px 20px",
                      border: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <option value="sda">Rating</option>
                    <option value="3.5 Star">3.5 Star</option>
                    <option value="4.5 Star">4.5 Star</option>
                    <option value="5 Star">5 Star</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <section className="section-padding card-sec">
          <Row>
            {popular.map((item, index) => (
              <Col lg={4} key={index}>
                <div className="Bs-cards">
                  <img src={item.image} />
                  <div className="Bs-date">
                    <Row>
                      <Col lg={4}>
                        <h5>Salon</h5>
                      </Col>
                      <Col lg={7}>
                        <i className="fa fa-heart-o" />
                      </Col>
                    </Row>
                  </div>
                  <div className="Bs-content">
                    <div className="text-center mb-3">
                      <h6>{item.name}</h6>
                      {[...Array(5)].map((_, i) => (
                        <a key={i}>
                          <i className="fa fa-star" />
                        </a>
                      ))}
                      (5\5)
                    </div>
                    <h4 className="text-center">{item.title}</h4>
                    <div className="Bs-content-detail">
                      <Link to="/service-details">
                        <h6>View Details</h6>
                      </Link>
                      <Link to="">
                        <h6>Starting from</h6>
                        {/* <p>₹ 999</p> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* <div className="text-center mt-2">
            <button class="button-77" role="button">
              View all services
            </button>
          </div> */}
        </section>
        <div
          class="paginatation wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <ul class="paginate">
            <li>
              <a href="">Previous</a>
            </li>
            <li>
              <a href="">01</a>
            </li>
            <li class="active">
              <a href="">02</a>
            </li>
            <li>
              <a href="">03</a>
            </li>
            <li>
              <a href="">Next</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
