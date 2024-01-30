import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./PopularServices.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import serviceCard01 from "../../../assets/serviceCard01.jpg"
import serviceCard02 from "../../../assets/serviceCard02.jpg"
import serviceCard03 from "../../../assets/serviceCard03.jpg"
import serviceCard04 from "../../../assets/serviceCard04.jpg"


const PopularServices = (props) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
 
  return (
    <>
    <section className="section-padding">
        <div className="container">
          <h2 className="main-heading">Our Services</h2>
         
          <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="home-service-card">
    <img src={serviceCard01} ></img>
  </div>
  <div className="home-service-card"> <img src={serviceCard02} ></img></div>
  <div className="home-service-card"> <img src={serviceCard03} ></img></div>
  <div className="home-service-card"> <img src={serviceCard04} ></img></div>
</Carousel>


        </div>
      </section>
    </>
  );
};

export default PopularServices;
