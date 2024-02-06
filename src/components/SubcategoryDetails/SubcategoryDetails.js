import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../directives/Navbar/Navbar";
import facial01 from "../../assets/FeatureImages/facial01.jpg";
import facial02 from "../../assets/FeatureImages/facial02.jpg";
import facial03 from "../../assets/FeatureImages/facial03.jpg";
import facial04 from "../../assets/FeatureImages/facial04.jpg";
import facial05 from "../../assets/FeatureImages/facial05.jpg";
import facialOfferBanner from "../../assets/FeatureImages/facialOfferBanner.jpg";
import facialOfferBanner02 from "../../assets/FeatureImages/facialOfferBanner02.jpg";
import facialOfferBanner03 from "../../assets/FeatureImages/facialOfferBanner03.jpg";
import facialOfferBanner04 from "../../assets/FeatureImages/facialOfferBanner04.jpg";
import "./SubcategoryDetails.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import serviceDetailMain from '../../assets/serviceDetailMain.jpg';

const CustomTabTitle = ({ imageSrc, className, title }) => (
  <div className={`custom-tab-title ${className}`}>
    <img src={imageSrc} alt="Facial" className="custom-tab-image" />
    <div className="custom-tab-title-text">{title}</div>
  </div>
);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        <div className='viewdetail-head'>
        <h2 className='service-detail-heading'>Service Details</h2>
        <h6><i class="fa-solid fa-location-arrow"></i>Indore,India</h6>
      </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-area">
       <img src={serviceDetailMain} className='service-detail-main'></img>
        <p>
        Offers a variety of cosmetic treatments and cosmetic services for men and women. Beauty salons may offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers.
        </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const SubcategoryDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Sub-Categories Details</h2>
      </div>

      <div className="container">
        <section className="section-padding">
          {/* ------------------- Offer Carousels ----------------- */}

          <div className="subcategory-area">
            <Tabs
              defaultActiveKey="All Skin Facial"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {/* ----------------- All Skin Facial --------------- */}
              <Tab
                eventKey="All Skin Facial"
                title={
                  <CustomTabTitle
                    imageSrc={facial01}
                    className="custom-image-size"
                    title="All Skin Facial"
                  />
                }
              >
                <div>
                  <img
                    src={facialOfferBanner}
                    className="offer-banner"
                    alt="banner"
                  ></img>
                </div>

                <section className="section-padding">
                  <Row>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                          {/* ------ modal button ------ */}
                          <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />

                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial03}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </Tab>

              {/* ---------------- Dry Skin Facial ---------------- */}
              <Tab
                eventKey="profile"
                title={
                  <CustomTabTitle
                    imageSrc={facial02}
                    className="custom-image-size"
                    title="Dry Skin Facial"
                  />
                }
              >
                <div>
                  <img
                    src={facialOfferBanner03}
                    className="offer-banner"
                    alt="banner"
                  ></img>
                </div>

                <section className="section-padding">
                  <Row>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />

                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial03}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </Tab>

              {/* -------------- Oily SKin Facial --------------  */}
              <Tab
                eventKey="contact"
                title={
                  <CustomTabTitle
                    imageSrc={facial03}
                    className="custom-image-size"
                    title="Oily Skin Facial"
                  />
                }
              >
                <div>
                  <img
                    src={facialOfferBanner02}
                    className="offer-banner"
                    alt="banner"
                  ></img>
                </div>

                <section className="section-padding">
                  <Row>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial03}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </Tab>

              {/* -------------------- Anti Aging Facial --------------- */}
              <Tab
                eventKey="sdsd"
                title={
                  <CustomTabTitle
                    imageSrc={facial04}
                    className="custom-image-size"
                    title="Anti Aging Facial"
                  />
                }
              >
                <div>
                  <img
                    src={facialOfferBanner04}
                    className="offer-banner"
                    alt="banner"
                  ></img>
                </div>

                <section className="section-padding">
                  <Row>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial03}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </Tab>

              {/* --------------- Clean Up ------------------- */}
              <Tab
                eventKey="dfdf"
                title={
                  <CustomTabTitle
                    imageSrc={facial02}
                    className="custom-image-size"
                    title="Cleanup"
                  />
                }
              >
                <section className="section-padding">
                  <Row>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial03}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial05}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={facial02}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>

                        <div className="subcategory-buttons">
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                          >
                         view details
                          </Button>

                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default SubcategoryDetails;
