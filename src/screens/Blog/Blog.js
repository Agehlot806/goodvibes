import React from "react";
import "./Blog.css";
import Hairwash from "../../assets/image/HairWash.jpg";
import Cleaning from "../../assets/image/Cleaning.jpg";
import PlumberImg from "../../assets/image/PlumberImg.jpg";
import recentPost1 from "../../assets/image/recentPost1.jpg";
import recentPost2 from "../../assets/image/recentPost2.jpg";
import recentPost3 from "../../assets/image/recentPost3.jpg";
import recentPost4 from "../../assets/image/recentPost4.jpg";

const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="blog-box">
          <div className="row">
            {/* ----------- Left Side ----------- */}
            <div className="col-lg-8 col-12">
              <div className="blog-sidebar-area">
                <div className="blog-sidebar-details">
                  <a href="/blog-details">
                    <img src={Hairwash} className="blog-img" alt="hairwash" />
                  </a>
                </div>

                <div className="date-comment">
                  <a href="/blog-standard#" className="date-text">
                    <i class="fa-regular fa-calendar-days"></i>
                    <p>25 January 2023</p> &nbsp;
                  </a>

                  <a href="/blog-standard#" className="comment-text">
                    <i class="fa-solid fa-message"></i>
                    <p>12 Comments</p>
                  </a>
                </div>

                <div className="img-caption">
                  <h4>
                    A common form of Lorem ipsum reads: adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  </h4>

                  <p>
                    Gochujang ugh viral, butcher pabst put a bird on it
                    meditation austin craft beer banh. Distillery ramps af, goch
                    ujang hell of VHS kitsch austin. Vegan air plant trust fund.
                  </p>
                </div>

                <div className="view-post-and-social">
                  <h5> Read More</h5>

                  <ul className="social-icons">
                    <li>
                      {" "}
                      <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      {" "}
                      <i class="fa-brands fa-square-twitter"></i>
                    </li>
                    <li>
                      {" "}
                      <i class="fa-brands fa-pinterest"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-square-instagram"></i>
                    </li>
                  </ul>
                </div>

                <section className="blog-box">
                  <div className="blog-sidebar-details">
                    <a href="/blog-details">
                      <img src={Cleaning} className="blog-img" alt="hairwash" />
                    </a>
                  </div>

                  <div className="date-comment">
                    <a href="/blog-standard#" className="date-text">
                      <i class="fa-regular fa-calendar-days"></i>
                      <p>25 January 2023</p> &nbsp;
                    </a>

                    <a href="/blog-standard#" className="comment-text">
                      <i class="fa-solid fa-message"></i>
                      <p>12 Comments</p>
                    </a>
                  </div>

                  <div className="img-caption">
                    <h4>
                      A common form of Lorem ipsum reads: adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </h4>

                    <p>
                      Gochujang ugh viral, butcher pabst put a bird on it
                      meditation austin craft beer banh. Distillery ramps af,
                      goch ujang hell of VHS kitsch austin. Vegan air plant
                      trust fund.
                    </p>
                  </div>

                  <div className="view-post-and-social">
                    <h5> Read More</h5>

                    <ul className="social-icons">
                      <li>
                        {" "}
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        {" "}
                        <i class="fa-brands fa-square-twitter"></i>
                      </li>
                      <li>
                        {" "}
                        <i class="fa-brands fa-pinterest"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-square-instagram"></i>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="blog-box">
                  <div className="blog-sidebar-details">
                    <a href="/blog-details">
                      <img
                        src={PlumberImg}
                        className="blog-img"
                        alt="hairwash"
                      />
                    </a>
                  </div>

                  <div className="date-comment">
                    <a href="/blog-standard#" className="date-text">
                      <i class="fa-regular fa-calendar-days"></i>
                      <p>25 January 2023</p> &nbsp;
                    </a>

                    <a href="/blog-standard#" className="comment-text">
                      <i class="fa-solid fa-message"></i>
                      <p>12 Comments</p>
                    </a>
                  </div>

                  <div className="img-caption">
                    <h4>
                      A common form of Lorem ipsum reads: adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </h4>

                    <p>
                      Gochujang ugh viral, butcher pabst put a bird on it
                      meditation austin craft beer banh. Distillery ramps af,
                      goch ujang hell of VHS kitsch austin. Vegan air plant
                      trust fund.
                    </p>
                  </div>

                  <div className="view-post-and-social">
                    <h5> Read More</h5>

                    <ul className="social-icons">
                      <li>
                        {" "}
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        {" "}
                        <i class="fa-brands fa-square-twitter"></i>
                      </li>
                      <li>
                        {" "}
                        <i class="fa-brands fa-pinterest"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-square-instagram"></i>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            {/* ----------- Right side ----------- */}

            <div className="col-lg-4 col-12">
              <form>
                <input
                  type="text"
                  placeholder="Search here"
                  className="blog-search-bar"
                ></input>
                {/* <button className='blog-search-btn'><i class="fa-solid fa-magnifying-glass"></i></button> */}
              </form>

              {/* ----------- Recent Post Box ------------- */}
              <div className="recent-post-box">
                <h4 className="recent-heading">Recent Post</h4>
                <div className="blog-post-one">
                  <img src={recentPost1} className="recentPost1"></img>
                  <div>
                    <p className="recent-post-date">22 Jaunary 2023</p>
                    <h6 className="recent-post-head">
                      Born the Cloud The Next Generation.
                    </h6>
                  </div>
                </div>

                <div className="blog-post-one">
                  <img src={recentPost2} className="recentPost1"></img>
                  <div>
                    <p className="recent-post-date">1 February 2023</p>
                    <h6 className="recent-post-head">
                      On Demand Services you can find here.
                    </h6>
                  </div>
                </div>

                <div className="blog-post-one">
                  <img src={recentPost3} className="recentPost1"></img>
                  <div>
                    <p className="recent-post-date">4 September 2023</p>
                    <h6 className="recent-post-head">
                      All kind of service providers are present here.
                    </h6>
                  </div>
                </div>

                <div className="blog-post-one">
                  <img src={recentPost4} className="recentPost1"></img>
                  <div>
                    <p className="recent-post-date">1 July 2023</p>
                    <h6 className="recent-post-head">
                      pabst put a bird on it meditation austin craft beer banh.
                    </h6>
                  </div>
                </div>
              </div>

              {/* --------- Category ------------ */}

              <div className="category">
                <h4 className="category-head">Category</h4>
                <ul className="category-list">
                  <li>Home Cleaning</li>
                  <li>Painting & Renovation</li>
                  <li>Cleaning & Pest Control</li>
                  <li>Emergency Services</li>
                  <li>Car Care Services</li>
                  <li>Electric & Plumbing</li>
                </ul>
              </div>

              {/* ---------- Post Tag --------- */}

              <div className="post-tag">
                <h4>Post Tag</h4>
                <ul className="tag-lists">
                  <li>
                    <a href="#">Cleaning</a>{" "}
                  </li>
                  <li>
                    <a href="#">Car Care</a>
                  </li>

                  <li>
                    {" "}
                    <a href="#">Painting</a>
                  </li>
                  <li>
                    <a href="#">Plumbing</a>
                  </li>
                  <li>
                    <a href="#">Post Control</a>
                  </li>
                  <li>
                    <a href="#">Car</a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Car Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
