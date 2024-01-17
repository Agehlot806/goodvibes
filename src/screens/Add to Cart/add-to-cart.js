import React from "react";
import "./add-to-cart.css";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import Product from "../../assets/Barbar-Shops.png";
import { Link } from "react-router-dom";

const Addtocart = () => {
  return (
    <div>
      <Header />
      <section className="section-padding add-cart-area">
        <Container>
          <Row>
            <Col lg={2}>
              <img src={Product} />
            </Col>
            <Col lg={6} className="align-self-center">
              <h4>Product Name</h4>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a typ
              </p>
            </Col>
            <Col lg={3} sm={3} xs={9} className="align-self-center">
              <h3>₹750</h3>
              <div className="quantity-btn">
                <button>
                  <i className="fa fa-minus" />
                </button>
                <form>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Quantity"
                      autoComplete="new-number"
                      defaultValue={1}
                    />
                  </div>
                </form>
                <button>
                  <i className="fa fa-plus" />
                </button>
              </div>
            </Col>
            <Col lg={1} sm={1} xs={3} className="align-self-center">
              <div className="delete-icon">
                <i className="fa-solid fa-trash"></i>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={2}>
              <img src={Product} />
            </Col>
            <Col lg={6} className="align-self-center">
              <h4>Product Name</h4>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a typ
              </p>
            </Col>
            <Col lg={3} sm={3} xs={9} className="align-self-center">
              <h3>₹750</h3>
              <div className="quantity-btn">
                <button>
                  <i className="fa fa-minus" />
                </button>
                <form>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Quantity"
                      autoComplete="new-number"
                      defaultValue={1}
                    />
                  </div>
                </form>
                <button>
                  <i className="fa fa-plus" />
                </button>
              </div>
            </Col>
            <Col lg={1} sm={1} xs={3} className="align-self-center">
              <div className="delete-icon">
                <i className="fa-solid fa-trash"></i>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={2}>
              <img src={Product} />
            </Col>
            <Col lg={6} className="align-self-center">
              <h4>Product Name</h4>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a typ
              </p>
            </Col>
            <Col lg={3} sm={3} xs={9} className="align-self-center">
              <h3>₹750</h3>
              <div className="quantity-btn">
                <button>
                  <i className="fa fa-minus" />
                </button>
                <form>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Quantity"
                      autoComplete="new-number"
                      defaultValue={1}
                    />
                  </div>
                </form>
                <button>
                  <i className="fa fa-plus" />
                </button>
              </div>
            </Col>
            <Col lg={1} sm={1} xs={3} className="align-self-center">
              <div className="delete-icon">
                <i className="fa-solid fa-trash"></i>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        <div className="add-btns">
          <Button>Continue</Button>
          <Link to="/slots">
            <Button>Checkout</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Addtocart;