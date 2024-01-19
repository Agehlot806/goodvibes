import React from "react";
import "./Home.css";
import Navbar from "../../directives/Navbar/Navbar";
import "../../components/CarouselSlider/mainslider.css";
import BestService from "../../components/HomePageComponent/BestService/BestService";
import Product from "../../components/HomePageComponent/ProductSection/ProductSection";
import PopularServices from "../../components/HomePageComponent/PopularServices/PopularServices";
import Footer from "../../directives/footer/footer";
import Blog from "../../components/HomePageComponent/BlogSection/Blog";
import WhyChooseUs from "../../components/HomePageComponent/WhyChooseUs/WhyChooseUs";
import SalonBlackImg from "../../assets/SalonBlackImg.jpg";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <div>
        <img src={SalonBlackImg}></img>
      </div>

      {/* Best Service Area */}
      {/* <BestService /> */}

      {/* Featured Categories */}
      <div className="container">
        <div className="featured-category">
          <h2 className="category-head">Featured Categories</h2>
          <p>What do you need to find?</p>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box">
                <div className="car-wash">
                  <h5>Car Wash</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="category-box"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Service Area */}
      <PopularServices />
      {/* <Product /> */}

      {/* Blog Area */}
      <Blog />

      <Footer />
    </div>
  );
};

export default Home;
