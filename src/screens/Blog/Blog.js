import React from "react";
import "./Blog.css";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import { Link } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Blog1 from "../../assets/image/HairWash.jpg";
import blogImg02 from "../../assets/blogImg02.jpg";
import blogImg03 from "../../assets/blogImg03.jpg";

function Blog() {
  return (
    <>
     <Navbar />
      <div className="pages-background"><h2>Blogs</h2></div>
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-area">
                <div className="blog-item">
                  <img src={Blog1} />
                  <h2>
                  Iceland Resort & Spa
                  </h2>
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    Getting hired as a programmer can be a challenge. There’s a
                    lot of talent out there, and there’s a lot of competition.
                    Many employers are wary of “paper programmers”; people who
                    have no programming ex...
                  </p>
            
                    Read More <i className="fa fa-long-arrow-right" />
               
                </div>
                <div className="blog-item">
                  <img src={blogImg02} />
                  <h2>
                  Wellness and Health
                  </h2>
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    MySQL and PostgreSQL are both leading database technologies
                    built on a foundation of SQL: Structured Query Language. SQL
                    forms the basis of how to create, access, update, and
                    otherwise interact with d...
                  </p>
                
                    Read More <i className="fa fa-long-arrow-right" />
                 
                </div>
                <div className="blog-item">
                  <img src={blogImg03} />
                  <h2>
                  Spa Treatments
                  </h2>
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    Java and Python are both excellent choices for a beginning
                    programmer. You really can’t go wrong by choosing either
                    one. Here are some things these languages have in common.
                    Both are popular and in hi...
                  </p>
                
                    Read More <i className="fa fa-long-arrow-right" />
              
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog-side">
                <div className="blog-sidebar-box">
                  <Form className="d-flex">
                    <InputGroup className="">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-search" />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search..."
                        aria-label="Search Course"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Form>
                </div>
                <div className="blog-sidebar-box">
                  <h5>Recent Blogs</h5>
                  <ul>
                    <li>
                      <div className="sidebar-blog-item d-flex">
                        <div>
                          <img src={Blog1} />
                        </div>
                        <div>
                          <h6>
                            60 Common C# Interview Questions in 2022: Ace Your
                            Next Interview
                          </h6>
                          <p>16 Jun, 2022</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-blog-item d-flex">
                        <div>
                          <img src={blogImg02} />
                        </div>
                        <div>
                          <h6>
                            PostgreSQL vs. MySQL: Which SQL Platform Should You
                            Use?
                          </h6>
                          <p>16 Jun, 2022</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-blog-item d-flex">
                        <div>
                          <img src={blogImg03} />
                        </div>
                        <div>
                          <h6>
                            Java vs. Python: Which Is the Best Programming
                            Language for You?
                          </h6>
                          <p>16 Jun, 2022</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog-sidebar-box blog-sidebar-Categories">
                  <h5>Categories</h5>
                  <ul>
                    <li>BEAUTY AND HEALTH</li>
                    <li>COSMETICS</li>
                    <li>MASSAGE TREATMENTS</li>
                    <li>MEDICAL SPA</li>
                    <li>SPA CENTER</li>
                    <li>SPA THERAPY</li>
                    <li>WELLNESS</li>
                  </ul>
                </div>
                <div className="blog-sidebar-box">
                  <h5>Tags</h5>
                  <ul className="blog-sidebar-tags">
                    <li>
                      <a>BODY</a>
                    </li>
                    <li>
                      <a>FACE</a>
                    </li>
                    <li>
                      <a>HAIR</a>{" "}
                    </li>
                    <li>
                      <a>MASSAGE</a>{" "}
                    </li>
                    <li>
                      <a>WELLNESS</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default Blog;
