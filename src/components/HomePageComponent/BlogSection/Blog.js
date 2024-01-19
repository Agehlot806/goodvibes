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
  const BlogData = [
    {
      image: blogone,
      admin: "Admin",
      date: "January 1, 2024",
      title: "The standard chunk of lorem Ipsum used reasonable.",
    },
    {
      image: blogone,
      admin: "Admin",
      date: "January 1, 2024",
      title: "The standard chunk of lorem Ipsum used reasonable.",
    },
    {
      image: blogone,
      admin: "Admin",
      date: "January 1, 2024",
      title: "The standard chunk of lorem Ipsum used reasonable.",
    },
  ];
  return (
    <>
      <section className="section-padding">
        <Container>
          <div className="main-heading">
            <h2>Our Blog</h2>
          </div>
          <div class="row g-4">
            {BlogData.map((blog, index) => (
              <Col lg={4} key={index}>
                <div className="blog-BOX">
                  <Link to="/blogs">
                    <img src={blog.image} alt="" />
                    <div className="blog-admin">
                      <div>
                        <a>
                          <i className="fa-regular fa-user"></i>
                          <span>{blog.admin}</span>
                        </a>
                      </div>
                      <div>
                        <a>
                          <i className="fa-regular fa-calendar"></i>
                          <span>{blog.date}</span>
                        </a>
                      </div>
                    </div>
                    <h4>{blog.title}</h4>
                  </Link>
                </div>
              </Col>
            ))}
          </div>

          {/* <div className="blog-heading mt-5">
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
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default Blog;
