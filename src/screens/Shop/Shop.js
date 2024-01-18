import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import productone from "../../assets/image/Shampoo1.jpg";
import producttwo from "../../assets/image/sampoo2.jpg";
import productthree from "../../assets/image/shampoo3.jpg";
import "./Shop.css";
import Skeletoncom from "../../components/Skeleton/Skeleton";
import Navbar from "../../directives/Navbar/Navbar"
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

const Shop = () => {
  const isLoading = false;
  const ProductDetails = [
    { title: "Hair Fall Rescue Shampoo for Weak Hairo", image: productone },
    { title: "Lusciously Thick & Long Shampoo", image: producttwo },
    {
      title: "Tresemme Hair Conditioner with Strong Hair",
      image: productthree,
    },
  ];
  const filtermenu = [
    { title: "Shampoo" },
    { title: "Hair Creams & Mask" },
    { title: "Conditioner" },
    { title: "Hair Serum" },
    { title: "Face Wash" },
  ];
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <BreadCrumb homeTitle="Home" pageTitle="Shop" />
      <section className="section-padding">
        <Container>
          {/* <div className="main-heading">
            <h2>Top Products</h2>
          </div> */}
          <Row>
            {/*  */}
            <Col lg={3}>
              <div className="shop-filter">
                <ul>
                  {isLoading
                    ? filtermenu.map((item, index) => (
                        <li key={index}>
                          <Skeletoncom variant="text" width={200} />
                        </li>
                      ))
                    : filtermenu.map((item, index) => (
                        <li key={index}>{item.title}</li>
                      ))}
                </ul>
              </div>
            </Col>
            {/*  */}
            <Col lg={9}>
              <div class="row justify-content-center">
                {isLoading
                  ? // Render Skeletons while loading
                    ProductDetails.map((item, index) => (
                      <div
                        class="col-md-4 col-lg-4 wow animate fadeInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                        key={index}
                      >
                        <Skeletoncom
                          variant="rectangular"
                          width={400}
                          height={250}
                        />
                        <Skeletoncom variant="text" width={250} />
                        <Skeletoncom variant="text" width={150} />
                        <Skeletoncom variant="circle" width={30} height={30} />
                        <Skeletoncom
                          variant="rectangular"
                          width={100}
                          height={40}
                        />{" "}
                      </div>
                    ))
                  : // Render actual product details when loaded
                    ProductDetails.map((item, index) => (
                      <div
                        class="col-md-9 col-lg-4 wow animate fadeInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                        key={index}
                      >
                        <div class="single-blog layout-3">
                          <div class="blog-thumb">
                            <a href="/blog-details">
                              <img src={item.image} alt="" />
                            </a>
                          </div>
                          <div class="blog-inner">
                            <h4>{item.title}</h4>
                            <div className="text-center">
                              {[...Array(5)].map((_, i) => (
                                <a key={i}>
                                  <i className="fa fa-star" />
                                </a>
                              ))}
                              (5\5)
                            </div>
                            <div className="price-text">
                              <div>
                                <p>$20</p>
                              </div>
                              <div>
                                <h6>$10</h6>
                              </div>
                            </div>
                            <Button>Add</Button>
                            {/* <p>
              Aenean fermentum sapien ac aliquet thoseneni gravida. Fusce
              a ipsum metus answerala onike.
            </p> */}
                            {/* <a href="/blog-details">
              Read more
              <span>
                <i class="bi bi-arrow-right"></i>
              </span>
            </a> */}
                          </div>
                        </div>
                      </div>
                    ))}
                {/* {ProductDetails.map((item, index) => (
                  <div
                    class="col-md-9 col-lg-4 wow animate fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                    key={index}
                  >
                    <div class="single-blog layout-3">
                      <div class="blog-thumb">
                        <a href="/blog-details">
                          <img src={item.image} alt="" />
                        </a>
                      </div>
                      <div class="blog-inner">
                        <h4>{item.title}</h4>
                        <div className="text-center">
                          {[...Array(5)].map((_, i) => (
                            <a key={i}>
                              <i className="fa fa-star" />
                            </a>
                          ))}
                          (5\5)
                        </div>
                        <div className="price-text">
                          <div>
                            <p>$20</p>
                          </div>
                          <div>
                            <h6>$10</h6>
                          </div>
                        </div>
                        <Button>Add</Button>
                        {/* <p>
                    Aenean fermentum sapien ac aliquet thoseneni gravida. Fusce
                    a ipsum metus answerala onike.
                  </p> 
                        <a href="/blog-details">
                    Read more
                    <span>
                      <i class="bi bi-arrow-right"></i>
                    </span>
                  </a>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
