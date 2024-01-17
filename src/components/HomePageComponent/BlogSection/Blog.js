import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blog.css";
import IMG1 from "../../../assets/image/img1.jpeg";
import applestore from "../../../assets/image/appstore.png";
import playstore from "../../../assets/image/playmarket.png";
import blogone from "../../../assets/image/blog-1.jpg";
import blogtwo from "../../../assets/image/blog-2.jpg";
import blogthree from "../../../assets/image/blog-3.jpg";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <section className="section-padding">
        <Container>
          <div className="main-heading">
            <h2>Our Blog</h2>
          </div>
          <div class="row g-4">
            <div
              class="col-md-6 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div class="single-blog layout-3">
                <div class="blog-thumb">
                  <a href="/Blogs">
                    <img src={blogone} alt="" />
                  </a>
                  <div class="date">
                    <span>6 April, 2023</span>
                  </div>
                </div>
                <div class="blog-inner">
                  <h4>
                    <a href="/Blogs">
                      Praesent at sem mollis nisijabi elementum lectus.
                    </a>
                  </h4>
                  <p>
                    Aenean fermentum sapien ac aliquet thoseneni gravida. Fusce
                    a ipsum metus answerala onike.
                  </p>
                  <a href="/Blogs">
                    Read more
                    <span>
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div class="single-blog layout-3">
                <div class="blog-thumb">
                  <a href="/Blogs">
                    <img src={blogtwo} alt="" />
                  </a>
                  <div class="date">
                    <span>6 April, 2023</span>
                  </div>
                </div>
                <div class="blog-inner">
                  <h4>
                    <a href="/Blogs">
                      Cleaning &amp; Renovation Service By Our Expert Cleaner.
                    </a>
                  </h4>
                  <p>
                    Aenean fermentum sapien ac aliquet thoseneni gravida. Fusce
                    a ipsum metus answerala onike.
                  </p>
                  <a href="/Blogs">
                    Read more
                    <span>
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div class="single-blog layout-3">
                <div class="blog-thumb">
                  <a href="/Blogs">
                    <img src={blogthree} alt="" />
                  </a>
                  <div class="date">
                    <span>6 April, 2023</span>
                  </div>
                </div>
                <div class="blog-inner">
                  <h4>
                    <a href="/Blogs">
                      Donec at laoreet augue est ai Etiam nunc erat.
                    </a>
                  </h4>
                  <p>
                    Aenean fermentum sapien ac aliquet thoseneni gravida. Fusce
                    a ipsum metus answerala onike.
                  </p>
                  <a href="/Blogs">
                    Read more
                    <span>
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <section className="section-padding card-sec">
            <Row>
              <Col lg={4}>
                <div className="blog-cards">
                  <img src={IMG1} />
                  <div className="blog-date">
                    <h4>
                      29 <br />
                      Oct
                    </h4>
                  </div>
                  <div className="blog-content">
                    <h5>4 Tips To Give Your</h5>
                    <p>At The Hair Company by The Skin & Body Spa, we und...</p>
                    <Link to="">Read More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </section> */}
          <div className="blog-heading mt-5">
            <h2>Why is it so great?</h2>
          </div>
          <div className="store">
            <img src={applestore} />
            <img src={playstore} />
          </div>
          <div className="blog-description">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </h5>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
