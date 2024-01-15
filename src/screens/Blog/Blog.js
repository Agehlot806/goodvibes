import React from "react";
import "./Blog.css";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import HairWash from "../../assets/image/HairWash.jpg";
import Cleaning from "../../assets/image/Cleaning.jpg";
import BlogAuthor from "../../assets/image/BlogAuthor.jpg";
import PlumberImg from "../../assets/image/PlumberImg.jpg";
import recentPost1 from "../../assets/image/recentPost1.jpg";
import recentPost2 from "../../assets/image/recentPost2.jpg";
import recentPost3 from "../../assets/image/recentPost3.jpg";
import recentPost4 from "../../assets/image/recentPost4.jpg";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Blogs = () => {
  return (
    <div>
      <Header />
      <BreadCrumb homeTitle="Home" pageTitle="Blogs" />
      <section id="down" className="blog-sidebar-area sec-m-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-sidebar-details">
                <div className="single-blog-standard">
                  <div
                    className="blog-standard-thumb wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <a href="/blog-details">
                      <img src={HairWash} alt="hairwash" />
                    </a>
                    <div className="blog-author">
                      <a href="/blog-details">
                        <img src={BlogAuthor} alt="BlogAuthor" />
                      </a>
                      <a href="/blog-details">Johan Martin JR</a>
                    </div>
                  </div>
                  <div
                    className="blog-inner wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="date-cmnt">
                      <a href="/blog-standard#">
                        <i class="fa fa-calendar-days"></i>
                        25 January 2023 &nbsp;
                      </a>
                      <a href="/blog-standard#">
                        <i class="fa-regular fa-comment-dots"></i>
                        15 Comments
                      </a>
                    </div>
                    <h4>
                      <a href="/blog-details">
                        Aliquam commodo suscipit voli neque. Ali quam erat utpat
                        stret ghts.
                      </a>
                    </h4>
                    <p>
                      Gochujang ugh viral, butcher pabst put a bird on it
                      meditation austin craft beer banh. Distillery ramps af,
                      goch ujang hell of VHS kitsch austin. Vegan air plant
                      trust fund.
                    </p>
                    <div className="view-post-and-socail">
                      <a href="/blog-details">
                        Read more
                        <span>
                          {/* <i className="bi bi-arrow-right" /> */}
                          <i className="fa fa-arrow-right"></i>
                        </span>
                      </a>
                      <ul className="author-social">
                        <li>
                          <a href="https://www.facebook.com">
                            <i className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-blog-standard">
                  <div
                    className="blog-standard-thumb wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <a href="/blog-details">
                      <img src={Cleaning} alt="Cleaning" />
                    </a>
                    <div className="blog-author">
                      <a href="/blog-details">
                        <img src={BlogAuthor} alt="BlogAuthor" />
                      </a>
                      <a href="/blog-details">Johan Martin JR</a>
                    </div>
                  </div>
                  <div
                    className="blog-inner wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="date-cmnt">
                      <a href="/blog-standard#">
                        <i class="fa fa-calendar-days"></i>
                        &nbsp;15 January 2023
                      </a>
                      <a href="/blog-standard#">
                        <i class="fa-regular fa-comment-dots"></i>
                        16 Comments
                      </a>
                    </div>
                    <h4>
                      <a href="/blog-details">
                        Show Your House Some Love with These Cleaning Tips for
                        the End of Winter.
                      </a>
                    </h4>
                    <p>
                      Gochujang ugh viral, butcher pabst put a bird on it
                      meditation austin craft beer banh. Distillery ramps af,
                      goch ujang hell of VHS kitsch austin. Vegan air plant
                      trust fund.
                    </p>
                    <div className="view-post-and-socail">
                      <a href="/blog-details">
                        Read more
                        <span>
                          <i className="fa fa-arrow-right"></i>
                        </span>
                      </a>
                      <ul className="author-social">
                        <li>
                          <a href="https://www.facebook.com">
                            <i className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-blog-standard">
                  <div
                    className="blog-standard-thumb wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <a href="/blog-details">
                      <img src={PlumberImg} alt="" />
                    </a>
                    <div className="blog-author">
                      <a href="/blog-details">
                        <img src={BlogAuthor} alt="BlogAuthor" />
                      </a>
                      <a href="/blog-details">Johan Martin JR</a>
                    </div>
                  </div>
                  <div
                    className="blog-inner wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="date-cmnt">
                      <a href="/blog-standard#">
                        <i class="fa fa-calendar-days"></i>8 January 2023&nbsp;
                      </a>
                      <a href="/blog-standard#">
                        <i class="fa-regular fa-comment-dots"></i>
                        15 Comments
                      </a>
                    </div>
                    <h4>
                      <a href="/blog-details">
                        New Year’s resolution: Stret ghts How to keep your home
                        clean all year round.
                      </a>
                    </h4>
                    <p>
                      Gochujang ugh viral, butcher pabst put a bird on it
                      meditation austin craft beer banh. Distillery ramps af,
                      goch ujang hell of VHS kitsch austin. Vegan air plant
                      trust fund.
                    </p>
                    <div className="view-post-and-socail">
                      <a href="/blog-details">
                        Read more
                        <span>
                          <i className="fa fa-arrow-right"></i>
                        </span>
                      </a>
                      <ul className="author-social">
                        <li>
                          <a href="https://www.facebook.com">
                            <i className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="paginatation wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <ul className="paginate">
                  <li>
                    <a href="#">Previous</a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li className="active">
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div
                  className="widget-search wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <form action="#" method="post">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search Here"
                    />
                    <button type="submit">
                      <i className="bi bi-search" />
                    </button>
                  </form>
                </div>
                <div
                  className="widget-sidebar wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <h4>Recent Post</h4>
                  <div className="recent-post">
                    <div className="recent-thumb">
                      <a href="/blog-details">
                        <img src={recentPost1} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-cnt">
                      <span>22 January 2023</span>
                      <h5>
                        <a href="/blog-details">
                          Born the Cloud The Next Generation.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-thumb">
                      <a href="/blog-details.htm">
                        <img src={recentPost2} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-cnt">
                      <span>01 February 2023</span>
                      <h5>
                        <a href="/blog-details">
                          App Development Step By Step Guide.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-thumb">
                      <a href="/blog-details">
                        <img src={recentPost3} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-cnt">
                      <span>12 January 2023</span>
                      <h5>
                        <a href="/blog-details">
                          On demand Service Allows end user to used.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-thumb">
                      <a href="/blog-details">
                        <img src={recentPost4} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-cnt">
                      <span>02 August 2023</span>
                      <h5>
                        <a href="/blog-details">
                          Cloud Computing Enables The easy Provision.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="widget-sidebar wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <h4>Category</h4>
                  <ul className="category-list">
                    <li>
                      <a href="/service-details">
                        Home Cleaning
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Painting & Renovation
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Cleaning & Pest Control
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Emergency Services
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Car Care Services
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Electric & Plumbing
                        <i class="fa fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget-sidebar wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <h4>Post Tag</h4>
                  <ul className="post-tags">
                    <li>
                      <a href="/blog-standard#">Cleaning</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Car Care</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Painting</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Plumbing</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Post Control</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Home</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Car Services</a>
                    </li>
                    <li>
                      <a href="/blog-standard#">Car Care</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
