import React from "react";
import "./Home.css";
import Navbar from "../../directives/Navbar/Navbar";
import "../../components/CarouselSlider/mainslider.css";
import PopularServices from "../../components/HomePageComponent/PopularServices/PopularServices";
import Footer from "../../directives/footer/footer";
import SalonBlackImg from "../../assets/SalonBlackImg.jpg";
import Features from "./Features/Features";
import Works from "./Works/Works";

const Home = () => {
  return (
    <div>
      {/*--------------- Header -----------------------*/}
      <Navbar />

      <div className="salon-img">
        <img src={SalonBlackImg}></img>
      </div>

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
