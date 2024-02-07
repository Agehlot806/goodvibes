import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProductSection.css";
import IMG1 from "../../../assets/image/img1.jpeg";
import applestore from "../../../assets/image/appstore.png";
import playstore from "../../../assets/image/playmarket.png";
import blogone from "../../../assets/image/blog-1.jpg";
import blogtwo from "../../../assets/image/blog-2.jpg";
import blogthree from "../../../assets/image/blog-3.jpg";
import productone from "../../../assets/image/Shampoo1.jpg";
import producttwo from "../../../assets/image/sampoo2.jpg";
import productthree from "../../../assets/image/shampoo3.jpg";
import { Link } from "react-router-dom";
const Product = () => {
  const ProductDetails = [
    { title: "Hair Fall Rescue Shampoo for Weak Hairo", image: productone },
    { title: "Lusciously Thick & Long Shampoo", image: producttwo },
    {
      title: "Tresemme Hair Conditioner with Strong Hair",
      image: productthree,
    },
  ];
  return (
    <>
      <section className="section-padding">
        <Container>
          <div className="main-heading">
            <h2>Top Products</h2>
          </div>
          <div className="row g-4">
            {/* <div
              className="col-md-6 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            > */}
            {/* <div className="single-blog layout-3"> */}
            {/*  <div className="blog-thumb">
                  <a href="/blog-details">
                    <img src={blogone} alt="" />
                  </a>
                </div>
                <div className="blog-inner">
                  <h4>Hair Fall Rescue Shampoo for Weak Hair</h4>
                  
                </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div
              className="col-md-6 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-blog layout-3">
                <div className="blog-thumb">
                  <a href="/blog-details">
                    <img src={blogtwo} alt="" />
                  </a>
                </div>
                <div className="blog-inner">
                  <h4>Lusciously Thick & Long Shampoo</h4>
                  
                  
                </div>
              </div>
            </div> */}
            {ProductDetails.map((item, index) => (
              <div
                className="col-md-6 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="single-blog layout-3">
                  <div className="blog-thumb">
                    <a href="/blog-details">
                      <img src={item.image} alt="" />
                    </a>
                  </div>
                  <div className="blog-inner">
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
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
