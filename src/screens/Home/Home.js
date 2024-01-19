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
import Works from "./Works/Works";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <div className="salon-img">
        <img src={SalonBlackImg}></img>
      </div>

      {/* Best Service Area */}
      {/* <BestService /> */}
      {/* Featured Categories */}
      <Features />

      {/* Popular Service Area */}
      <PopularServices />
      
      {/* How It Works */}
      <Works/>

      {/* Blog Area */}
      <Blog />

      <Footer />
    </div>
  );
};

export default Home;
