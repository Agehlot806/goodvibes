import React from "react";
import Footer from "../../directives/footer/footer";
import "./Shop.css";
import Form from "react-bootstrap/Form";
import Navbar from "../../directives/Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import shampoo01 from "../../assets/shampoo01.jpg"
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Service Details</h2>
      </div>
      <section className="section-padding">
        <Container>
          <Row>
            {/* ---------------------- filter-sidebar ------------- */}

            <Col lg={3} md={3} sm={6}>
              <div className="side-nav">
                <h2>Filter By</h2>

                <div className="shop-form">
                  <h5>Keyword</h5>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="shop-input"
                  />
                </div>

                <div className="shop-form">
                  <h5> Sort By</h5>
                  <Form.Select aria-label="Default select example">
                    <option>Sort By</option>
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to Low</option>
                    <option value="3">Newest</option>
                  </Form.Select>
                </div>

                <div className="shop-form">
                  <h5> Category</h5>
                  <Form.Select aria-label="Default select example">
                    <option>All Categories</option>
                    <option value="1">Hair Products</option>
                    <option value="2">Skin Care</option>
                    <option value="3">Spa Creams</option>
                    <option value="3">Nail Arts</option>
                    <option value="3">Setting Sprays</option>
                    <option value="3">New Produts</option>
                  </Form.Select>
                </div>

                <div className="shop-form">
                  <h5>Select Sub Category</h5>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">Shampoo</option>
                    <option value="2">Sunscreen</option>
                    <option value="3">Nail Paints</option>
                  </Form.Select>
                </div>

                <div className="shop-form">
                  <h5>Price Range</h5>
                  <Form.Label>$50 - $500</Form.Label>
                  <Form.Range />
                </div>

                <button className="shop-search-btn">Search</button>
              </div>
            </Col>

            {/* ---------------------- shop-sidebar ------------------- */}
            <Col lg={9} md={9} sm={6}>
             
             <div className="shop-filters">
                  <p>Found 10 Results</p>
     
                  <div className="shop-grid-view">
                    <Dropdown className="shop-dropdown">
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Highest Rated
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <div className="grid-icons">
                      <i className="fa-solid fa-table-cells shop-grid "></i>
                      <i className="fa-solid fa-list shop-list"></i>
                    </div>
                  </div>
                  </div>

              {/* ------------------- Shop Cards -------------------- */}

              <section className="section-padding">
                <div className="row">
                  {/* ------- card-1 ------- */}

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Pure Cider Vinegar Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Hairfall Rescue Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Tresseme Keratin Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Loreal Paris Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Moroccan Argan</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Pantene Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={4} md={6} sm={6} mb-4>
                    <div className="shop-cards">
                      <Card style={{ width: "17rem" }}>
                        <Card.Img
                          variant="top"
                          src={shampoo01}
                          className="shop-card-img"
                        />
                        <div className="shop-card-body">
                          <Card.Body>
                            <Card.Title>Dove Shampoo</Card.Title>
                            <Card.Text>
                              Shampoo is a hair care product, typically in the
                            </Card.Text>
                            <h6>Starting at $50</h6>
                            <div className="shop-add-btn">
                              <Button>Add to Cart</Button>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </div>
                  </Col>
                </div>
              </section>
            </Col>

          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
