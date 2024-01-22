// import React from "react";
// import "./Blog.css";
// import Hairwash from "../../assets/image/HairWash.jpg";
// import Cleaning from "../../assets/image/Cleaning.jpg";
// import PlumberImg from "../../assets/image/PlumberImg.jpg";
// import recentPost1 from "../../assets/image/recentPost1.jpg";
// import recentPost2 from "../../assets/image/recentPost2.jpg";
// import recentPost3 from "../../assets/image/recentPost3.jpg";
// import recentPost4 from "../../assets/image/recentPost4.jpg";
// import Header from "../../directives/header/header";
// import Footer from "../../directives/footer/footer";
// import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

// const Blog = () => {
//   return (
//     <>
//       <Header />
//       <BreadCrumb homeTitle="Home" pageTitle="Blogs" />
//       <div className="container">
//         <div className="blog-box">
//           <div className="row">
//             {/* ----------- Left Side ----------- */}
//             <div className="col-lg-8 col-12">
//               <div className="blog-sidebar-area">
//                 <div className="blog-sidebar-details">
//                   <a href="/blog-details">
//                     <img src={Hairwash} className="blog-img" alt="hairwash" />
//                   </a>
//                 </div>

//                 <div className="date-comment">
//                   <a href="/blog-standard#" className="date-text">
//                     <i class="fa-regular fa-calendar-days"></i>
//                     <p>25 January 2023</p> &nbsp;
//                   </a>

//                   <a href="/blog-standard#" className="comment-text">
//                     <i class="fa-solid fa-message"></i>
//                     <p>12 Comments</p>
//                   </a>
//                 </div>

//                 <div className="img-caption">
//                   <h4>
//                     A common form of Lorem ipsum reads: adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
//                   </h4>

//                   <p>
//                     Gochujang ugh viral, butcher pabst put a bird on it
//                     meditation austin craft beer banh. Distillery ramps af, goch
//                     ujang hell of VHS kitsch austin. Vegan air plant trust fund.
//                   </p>
//                 </div>

//                 <div className="view-post-and-social">
//                   <h5> Read More</h5>

//                   <ul className="social-icons">
//                     <li>
//                       {" "}
//                       <i class="fa-brands fa-facebook"></i>
//                     </li>
//                     <li>
//                       {" "}
//                       <i class="fa-brands fa-square-twitter"></i>
//                     </li>
//                     <li>
//                       {" "}
//                       <i class="fa-brands fa-pinterest"></i>
//                     </li>
//                     <li>
//                       <i class="fa-brands fa-square-instagram"></i>
//                     </li>
//                   </ul>
//                 </div>

//                 <section className="blog-box">
//                   <div className="blog-sidebar-details">
//                     <a href="/blog-details">
//                       <img src={Cleaning} className="blog-img" alt="hairwash" />
//                     </a>
//                   </div>

//                   <div className="date-comment">
//                     <a href="/blog-standard#" className="date-text">
//                       <i class="fa-regular fa-calendar-days"></i>
//                       <p>25 January 2023</p> &nbsp;
//                     </a>

//                     <a href="/blog-standard#" className="comment-text">
//                       <i class="fa-solid fa-message"></i>
//                       <p>12 Comments</p>
//                     </a>
//                   </div>

//                   <div className="img-caption">
//                     <h4>
//                       A common form of Lorem ipsum reads: adipiscing elit, sed
//                       do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.{" "}
//                     </h4>

//                     <p>
//                       Gochujang ugh viral, butcher pabst put a bird on it
//                       meditation austin craft beer banh. Distillery ramps af,
//                       goch ujang hell of VHS kitsch austin. Vegan air plant
//                       trust fund.
//                     </p>
//                   </div>

//                   <div className="view-post-and-social">
//                     <h5> Read More</h5>

//                     <ul className="social-icons">
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-facebook"></i>
//                       </li>
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-square-twitter"></i>
//                       </li>
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-pinterest"></i>
//                       </li>
//                       <li>
//                         <i class="fa-brands fa-square-instagram"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </section>

//                 <section className="blog-box">
//                   <div className="blog-sidebar-details">
//                     <a href="/blog-details">
//                       <img
//                         src={PlumberImg}
//                         className="blog-img"
//                         alt="hairwash"
//                       />
//                     </a>
//                   </div>

//                   <div className="date-comment">
//                     <a href="/blog-standard#" className="date-text">
//                       <i class="fa-regular fa-calendar-days"></i>
//                       <p>25 January 2023</p> &nbsp;
//                     </a>

//                     <a href="/blog-standard#" className="comment-text">
//                       <i class="fa-solid fa-message"></i>
//                       <p>12 Comments</p>
//                     </a>
//                   </div>

//                   <div className="img-caption">
//                     <h4>
//                       A common form of Lorem ipsum reads: adipiscing elit, sed
//                       do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.{" "}
//                     </h4>

//                     <p>
//                       Gochujang ugh viral, butcher pabst put a bird on it
//                       meditation austin craft beer banh. Distillery ramps af,
//                       goch ujang hell of VHS kitsch austin. Vegan air plant
//                       trust fund.
//                     </p>
//                   </div>

//                   <div className="view-post-and-social">
//                     <h5> Read More</h5>

//                     <ul className="social-icons">
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-facebook"></i>
//                       </li>
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-square-twitter"></i>
//                       </li>
//                       <li>
//                         {" "}
//                         <i class="fa-brands fa-pinterest"></i>
//                       </li>
//                       <li>
//                         <i class="fa-brands fa-square-instagram"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             {/* ----------- Right side ----------- */}

//             <div className="col-lg-4 col-12">
//               <form>
//                 <input
//                   type="text"
//                   placeholder="Search here"
//                   className="blog-search-bar"
//                 ></input>
//                 {/* <button className='blog-search-btn'><i class="fa-solid fa-magnifying-glass"></i></button> */}
//               </form>

//               {/* ----------- Recent Post Box ------------- */}
//               <div className="recent-post-box">
//                 <h4 className="recent-heading">Recent Post</h4>
//                 <div className="blog-post-one">
//                   <img src={recentPost1} className="recentPost1"></img>
//                   <div>
//                     <p className="recent-post-date">22 Jaunary 2023</p>
//                     <h6 className="recent-post-head">
//                       Born the Cloud The Next Generation.
//                     </h6>
//                   </div>
//                 </div>

//                 <div className="blog-post-one">
//                   <img src={recentPost2} className="recentPost1"></img>
//                   <div>
//                     <p className="recent-post-date">1 February 2023</p>
//                     <h6 className="recent-post-head">
//                       On Demand Services you can find here.
//                     </h6>
//                   </div>
//                 </div>

//                 <div className="blog-post-one">
//                   <img src={recentPost3} className="recentPost1"></img>
//                   <div>
//                     <p className="recent-post-date">4 September 2023</p>
//                     <h6 className="recent-post-head">
//                       All kind of service providers are present here.
//                     </h6>
//                   </div>
//                 </div>

//                 <div className="blog-post-one">
//                   <img src={recentPost4} className="recentPost1"></img>
//                   <div>
//                     <p className="recent-post-date">1 July 2023</p>
//                     <h6 className="recent-post-head">
//                       pabst put a bird on it meditation austin craft beer banh.
//                     </h6>
//                   </div>
//                 </div>
//               </div>

//               {/* --------- Category ------------ */}

//               <div className="category">
//                 <h4 className="category-head">Category</h4>
//                 <ul className="category-list">
//                   <li>Home Cleaning</li>
//                   <li>Painting & Renovation</li>
//                   <li>Cleaning & Pest Control</li>
//                   <li>Emergency Services</li>
//                   <li>Car Care Services</li>
//                   <li>Electric & Plumbing</li>
//                 </ul>
//               </div>

//               {/* ---------- Post Tag --------- */}

//               <div className="post-tag">
//                 <h4>Post Tag</h4>
//                 <ul className="tag-lists">
//                   <li>
//                     <a href="">Cleaning</a>{" "}
//                   </li>
//                   <li>
//                     <a href="">Car Care</a>
//                   </li>

//                   <li>
//                     {" "}
//                     <a href="">Painting</a>
//                   </li>
//                   <li>
//                     <a href="">Plumbing</a>
//                   </li>
//                   <li>
//                     <a href="">Post Control</a>
//                   </li>
//                   <li>
//                     <a href="">Car</a>
//                   </li>
//                   <li>
//                     <a href="">Home</a>
//                   </li>
//                   <li>
//                     <a href="">Car Services</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Blog;
import React from "react";
import "./Blog.css";
// import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import { Link } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Blog1 from "../../assets/image/HairWash.jpg";
import Blog2 from "../../assets/image/Cleaning.jpg";
import Blog3 from "../../assets/image/PlumberImg.jpg";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
function Blog() {
  return (
    <>
      {/* <Header /> */}
      <BreadCrumb homeTitle="Home" pageTitle="Blog" />
      {/* <div className="gradient-bg">
        <div className="overlay-bg">
          <div className="all-bg">
            <h1>Blog</h1>
            <Link to="/">Home</Link> <span>/ Blog</span>
          </div>
        </div>
      </div> */}
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
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    Getting hired as a programmer can be a challenge. There’s a
                    lot of talent out there, and there’s a lot of competition.
                    Many employers are wary of “paper programmers”; people who
                    have no programming ex...
                  </p>
                  <Link to="/blog-details">
                    Read More <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
                <div className="blog-item">
                  <img src={Blog2} />
                  <h2>
                    PostgreSQL vs. MySQL: Which SQL Platform Should You Use?
                  </h2>
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    MySQL and PostgreSQL are both leading database technologies
                    built on a foundation of SQL: Structured Query Language. SQL
                    forms the basis of how to create, access, update, and
                    otherwise interact with d...
                  </p>
                  <Link to="/blog-details">
                    Read More <i className="fa fa-long-arrow-right" />
                  </Link>
                </div>
                <div className="blog-item">
                  <img src={Blog3} />
                  <h2>
                    Java vs. Python: Which Is the Best Programming Language for
                    You?
                  </h2>
                  <p>By: Administration / 16 Jun, 2022</p>
                  <p>
                    Java and Python are both excellent choices for a beginning
                    programmer. You really can’t go wrong by choosing either
                    one. Here are some things these languages have in common.
                    Both are popular and in hi...
                  </p>
                  <Link to="/blog-details">
                    Read More <i className="fa fa-long-arrow-right" />
                  </Link>
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
export default Blog;
