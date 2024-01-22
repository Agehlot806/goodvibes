import React from "react";
import Footer from "../../directives/footer/footer";
import "./Shop.css";
import Navbar from "../../directives/Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bannerone from "../../assets/bannerone.jpg";
import banertwo from "../../assets/banertwo.jpg";
import bannerfour from "../../assets/bannerfour.jpg";
import bannerthree from "../../assets/bannerthree.jpg";

const Shop = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />

      <div className="shop-bg"></div>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* ---------------------- filter-sidebar ------------- */}

            <div className="col-lg-3 col-md-12">
              <div className="side-nav">
                <h2>Filter By</h2>

                <div className="shop-form">
                  <h5>What are you looking for ?</h5>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="shop-input"
                  />
                </div>

                <div className="shop-form">
                  <h5> Location</h5>
                  <input
                    type="text"
                    placeholder="Location"
                    className="shop-input"
                  />
                </div>

                <div className="shop-form">
                  <h5> Category</h5>
                  <input
                    type="text"
                    placeholder="Search by Category"
                    className="shop-input"
                  />
                </div>

                <button className="shop-search-btn">Search</button>
              </div>
            </div>

            {/* ---------------------- shop-sidebar ------------------- */}
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                  <p>Found 10 Results</p>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12 ">
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
                      <i class="fa-solid fa-table-cells shop-grid "></i>
                      <i class="fa-solid fa-list shop-list"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------------- Shop Cards -------------------- */}
              <section className="section-padding">
                <div className="row">
                  {/* ------- card-1 ------- */}
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerone}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={banertwo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerthree}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerfour}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerone}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={banertwo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerthree}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={bannerfour}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
