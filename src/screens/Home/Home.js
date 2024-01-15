import React from "react";
import Header from "../../directives/header/header";
// import Header from "../../directives/headernew/headernew";
import SliderComponent from "../../components/CarouselSlider/MainSlider";
import { Container } from "react-bootstrap";
import "../../components/CarouselSlider/mainslider.css";
import BestService from "../../components/HomePageComponent/BestService/BestService";
import Product from "../../components/HomePageComponent/ProductSection/ProductSection";
import PopularServices from "../../components/HomePageComponent/PopularServices/PopularServices";
import Footer from "../../directives/footer/footer";
import Blog from "../../components/HomePageComponent/BlogSection/Blog";
import WhyChooseUs from "../../components/HomePageComponent/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const imageUrls = [
    "https://as2.ftcdn.net/v2/jpg/04/83/71/95/1000_F_483719567_tRNWJWCE2H2nKAEqEQjStfhBbqrfBkaJ.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/04/21/54/69/1000_F_421546924_ier1so1zCu2uENgFzGUMilGo3LDqs6gQ.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
  ];
  const data = {
    swipeable: false,
    draggable: false,
    showDots: true,
    responsive: responsive,
    ssr: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
  };
  // 2
  const responsiveservices = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const serviceimageUrls = [
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/04/77/09/1000_F_204770911_qZbSg6Pd0bV26HjsOW8v29rz2Ud8wzYd.jpg",
  ];
  const servicesdata = {
    swipeable: false,
    draggable: false,
    showDots: true,
    responsive: responsiveservices,
    ssr: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 1000,
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
  };
  return (
    <div>
      {/* Header Area */}
      {/* <Header /> */}
      <Header />
      {/*  */}
      <Container fluid className="p-0">
        <SliderComponent imageUrls={imageUrls} {...data} />
      </Container>
      {/* <section className="section-padding "> */}
      <Container></Container>
      {/* </section> */}
      {/* <Container>
        <SliderComponent
          customMainSliderClass="service-custom-slider"
          imageUrls={serviceimageUrls}
          {...servicesdata}
        />
      </Container> */}
      {/* Best Service Area */}
      <BestService />
      {/* Popular Service Area */}
      <PopularServices />
      <Product />
      {/* Why choose us Area */}
      <WhyChooseUs />
      {/* Blog Area */}
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
