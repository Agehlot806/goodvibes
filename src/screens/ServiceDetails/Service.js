import React from "react";
import "./Service.css";
import PlumberImg from "../Assets02/PlumberImg.jpg";
import sellerLogo from "../Assets02/sellerLogo.png";

const Servicedetails = () => {
  return (
    <div>
      <div className="container">
        <section>
          <div className="row">
            <div className="col-8">
              <img src={PlumberImg} className="plumber-img"></img>

              <div className="heading-box">
                <h2 className="heading">
                  Cleaning Package (Bedroom + Sofa + Furniture + Bathroom)
                </h2>
              </div>
              <div className="service-box">
                <div className="service-tabs">
                  <ul
                    class="nav nav-pills mb-3 navbar-buttons "
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active pill-btn"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Overview
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link pill-btn"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Details
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link pill-btn"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Client Review
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link pill-btn"
                        id="pills-faq-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-faq"
                        type="button"
                        role="tab"
                        aria-controls="pills-faq"
                        aria-selected="false"
                      >
                        FAQs
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    {/* --------------------- Over-view Tab ------------------------ */}

                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0"
                    >
                      <h4>Plumbing Training</h4>
                      <p className="tab-content-para">
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>
                      <br />
                      <h4>Our Package</h4>
                      <ul>
                        <li>
                          <i class="fa-solid fa-check-double checkIcon"></i>{" "}
                          Page Load (time, size, number of requests).
                        </li>
                        <li>
                          <i class="fa-solid fa-check-double checkIcon"></i>{" "}
                          Adance Data analysis operation.
                        </li>
                      </ul>
                      <br />
                      <h4>What’s Included</h4>
                      <ul>
                        <li className="list-item">
                          {" "}
                          There are many variations of passages of Lorem Ipsum..
                        </li>
                        <li className="list-item">
                          {" "}
                          Water Heater Repair Services.
                        </li>
                        <li className="list-item"> Toilet Repair</li>
                      </ul>
                      <br />
                      <h4>What’s Excluded</h4>
                      <ul>
                        <li className="list-item">
                          {" "}
                          Price of additional materials or parts (if needed).
                        </li>
                        <li className="list-item">
                          {" "}
                          Transportation cost for carrying new materials/parts
                          (if applicable).
                        </li>
                      </ul>
                    </div>

                    {/* ----------------------- Details --------------------------- */}

                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
                      <h4>Our Package</h4>
                      <br />
                      <ul>
                        <li>
                          {" "}
                          <i class="fa-solid fa-check-double checkIcon"></i>Page
                          Load (time, size, number of requests).
                        </li>
                        <li>
                          {" "}
                          <i class="fa-solid fa-check-double checkIcon"></i>
                          Adance Data analysis operation.
                        </li>
                        <li>
                          {" "}
                          <i class="fa-solid fa-check-double checkIcon"></i>
                          Possible procured her trifling Obtain pain.
                        </li>
                      </ul>
                      <br />
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling Circumstances more than
                        some work um soluta nobis est eligendi optio cumque
                        nihil impedit quo minus id quodOne advanced diverted
                        domestic repeated bringing you old. Possible procured
                        her trifling Obtain pain of because is pain, but because
                        you nally circumstances more than some work um soluta
                        nobis est eligendi optio cumque nihil impedit quo minus
                        id quodOne advanced diverted domestic repeated bringing
                        you old. Possible procured her trifling
                      </p>
                    </div>

                    {/* -------------------------- Client Review ---------------------- */}
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
                      <h5>Review of Painting Services in Mirpur</h5>
                      <h6>Johan Martin</h6>
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>

                      <h6>kallu Martin</h6>
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>

                      <h6>ballu Martin</h6>
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>

                      <h6>lallu Martin</h6>
                      <p>
                        Obtain pain of because is pain, but because you nally
                        circumstances more than some work um soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quodOne
                        advanced diverted domestic repeated bringing you old.
                        Possible procured her trifling
                      </p>
                    </div>

                    {/* --------------------------- FAQ --------------------------------- */}

                    <div
                      class="tab-pane fade faq-area"
                      id="pills-faq"
                      role="tabpanel"
                      aria-labelledby="pills-faq-tab"
                      tabindex="0"
                    >
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <h5>01. How can OnDemand Services help me?</h5>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              Auction sites present consumers with a thrilling,
                              competitive way to buy the goods and services they
                              need most. But getting your own auction site up
                              and running has always required learning complex
                              coding languages, or hiring an expensive design.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <h5>02. What is the Printing Quality</h5>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              Auction sites present consumers with a thrilling,
                              competitive way to buy the goods and services they
                              need most. But getting your own auction site up
                              and running has always required learning complex
                              coding languages, or hiring an expensive design.
                            </div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <h5>
                                03. Can I Request a service with an on-site
                                consultant?
                              </h5>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              Auction sites present consumers with a thrilling,
                              competitive way to buy the goods and services they
                              need most. But getting your own auction site up
                              and running has always required learning complex
                              coding languages, or hiring an expensive design.
                            </div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <h5>
                                04. Who is the service provider for on-demand
                                delivery
                              </h5>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              Auction sites present consumers with a thrilling,
                              competitive way to buy the goods and services they
                              need most. But getting your own auction site up
                              and running has always required learning complex
                              coding languages, or hiring an expensive design.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------- Right Side -------------------- */}

            <div className="col-4">
              <div className="service-pack">
                <h5 className="service-price">
                  Service Price
                  <span className="">
                    <small>$</small>250
                  </span>
                </h5>
                <h4 className="our-package">Our Package</h4>
                <ul className="package-list">
                  <li>
                    {" "}
                    <i class="fa-solid fa-check-double checkIcon"></i> Garbage
                    Disposal Services{" "}
                  </li>
                  <li>
                    <i class="fa-solid fa-check-double checkIcon"></i> Water
                    Heater Repair Services
                  </li>
                  <li>
                    <i class="fa-solid fa-check-double checkIcon"></i> Toilet
                    Repair
                  </li>
                  <li>
                    <i class="fa-solid fa-check-double checkIcon"></i> Kitchen
                    Cleaner
                  </li>
                </ul>
                <div className="order-btn-main">
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
              <br />
              <div className="about-seller">
                <img src={sellerLogo} className="seller-logo"></img>
                <h4>About Seller</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  molestie adipiscing fermentum lectus.
                </p>
                <hr />

                <h5 className="order-complete">
                  Order Complete
                  <span>2500</span>
                </h5>
                <hr />

                <h5 className="seller-rating">
                  Seller Rating
                  <span>(5 / 5)</span>
                </h5>
                <hr />
                <div className="social-logos">
                  <i class="fa-brands fa-facebook logo"></i>
                  <i class="fa-brands fa-twitter logo"></i>
                  <i class="fa-brands fa-pinterest logo"></i>
                  <i class="fa-brands fa-square-instagram logo"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicedetails;
