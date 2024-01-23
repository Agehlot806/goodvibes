import React from "react";
import Footer from "../../directives/footer/footer";
import "./Shop.css";
import Form from 'react-bootstrap/Form';
import Navbar from "../../directives/Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MamaEarthShampoo from '../../assets/Shampooshop_files/MamaEarthShampoo.jpg';
import loveButterShampoo from '../../assets/Shampooshop_files/loveButterShampoo.jpg';
import HairfallRescueShampoo from '../../assets/Shampooshop_files/HairfallRescueShampoo.jpg';
import doveShampoo from '../../assets/Shampooshop_files/doveShampoo.jpg';
import PanteneShampoo from '../../assets/Shampooshop_files/PanteneShampoo.jpg';

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
                          src={loveButterShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
            <Card.Title>Love Butter Shampoo</Card.Title>
                          <Card.Text>
                            
                          </Card.Text>
                  <div className="shop-add-btn">
                          <Button >Add</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={MamaEarthShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Pure Cider Vinegar Shampoo</Card.Title>
                          <Card.Text>
                            
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={HairfallRescueShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Hairfall Rescue Shampoo</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={doveShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Tresseme Keratin Shampoo</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={loveButterShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Loreal Paris Shampoo</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={PanteneShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Moroccan Argan</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={PanteneShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Pantene Shampoo</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="shop-cards">
                      <Card style={{ width: "15rem" }}>
                        <Card.Img
                          variant="top"
                          src={PanteneShampoo}
                          className="shop-card-img"
                        />
                        <Card.Body>
                          <Card.Title>Dove Shampoo</Card.Title>
                          <Card.Text>
                          </Card.Text>
                          <Button variant="primary">Add</Button>
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
