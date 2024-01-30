import React from "react";
import "./Blog.css";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import { Link } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Blog1 from "../../assets/image/HairWash.jpg";
import Blog2 from "../../assets/image/Cleaning.jpg";
import Blog3 from "../../assets/image/PlumberImg.jpg";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
function Blogdetails() {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <BreadCrumb homeTitle="Home" pageTitle="Blog Details" />
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-area">
                <div className="blog-item">
                  <img src={Blog1} />
                  <h2>
                    60 Common C# Interview Questions in 2022: Ace Your Next
                    Interview
                  </h2>
                  <p>Administration / 16 Jun, 2022</p>
                  <p>
                    Getting hired as a programmer can be a challenge. There’s a
                    lot of talent out there, and there’s a lot of competition.
                    Many employers are wary of “paper programmers”; people who
                    have no programming experience but just a degree. Because of
                    this, they often ask in-depth programming questions during
                    their interview. These questions can be hard to answer if
                    you haven’t properly prepared. In this article, I’ll help
                    you prepare to ace your next interview with these questions
                    related to the C# programming language. At the same time,
                    you might want to practice with some C# projects. These 50
                    essential C# questions and answers will help you understand
                    the technical concepts of the language. You’ll walk into a
                    meeting with the hiring manager with confidence. As a
                    developer myself, I use these concepts daily.
                  </p>
                  <span>0 Comments</span>
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
                          <img src={Blog2} />
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
                          <img src={Blog3} />
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
                    <li>Development (3)</li>
                    <li>IT & Software (1)</li>
                    <li>Data Science (0)</li>
                    <li>Soft Skills (0)</li>
                    <li>Business (0)</li>
                    <li>Marketing (0)</li>
                    <li>Design (0)</li>
                  </ul>
                </div>
                <div className="blog-sidebar-box">
                  <h5>Tags</h5>
                  <ul className="blog-sidebar-tags">
                    <li>
                      <a>English tutors</a>
                    </li>
                    <li>
                      <a>Spanish tutors</a>
                    </li>
                    <li>
                      <a>French tutors</a>{" "}
                    </li>
                    <li>
                      <a>German tutors</a>{" "}
                    </li>
                    <li>
                      <a>Italian tutors</a>{" "}
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
export default Blogdetails;
