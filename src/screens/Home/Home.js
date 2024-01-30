import React from "react";
import "./Home.css";
import Navbar from "../../directives/Navbar/Navbar";
import "../../components/CarouselSlider/mainslider.css";
import PopularServices from "../../components/HomePageComponent/PopularServices/PopularServices";
import Footer from "../../directives/footer/footer";
import facialOfferBanner from "../../assets/FeatureImages/facialOfferBanner.jpg"
import facialOfferBanner04 from "../../assets/FeatureImages/facialOfferBanner04.jpg"
import facialOfferBanner03 from "../../assets/FeatureImages/facialOfferBanner03.jpg"
import Features from "./Features/Features";
import Works from "./Works/Works";
import Carousel from 'react-bootstrap/Carousel';
import { FaceRetouchingNaturalRounded } from "@mui/icons-material";


const Home = () => {
  return (
    <div>
      {/*--------------- Header -----------------------*/}
      <Navbar />

      <Carousel>
      <Carousel.Item interval={1000}>
        <img src={facialOfferBanner} className="home-slider-img"  />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={facialOfferBanner04} className="home-slider-img" />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={facialOfferBanner03} className="home-slider-img" />
      
      </Carousel.Item>
    </Carousel>







      {/* Best Service Area */}
      {/* <BestService /> */}

      {/*---------- Featured Categories -----------------*/}
      <Features />

      {/*------------- Popular Service Area ---------------*/}
      <PopularServices />

      {/*-------------------- How It Works ----------------*/}
      <Works />

      <Footer />
    </div>
  );
};

export default Home;
