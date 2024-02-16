import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booknow from "../../assets/book_now.png";
import Slot from "../../assets/slot-blocker.png";
import Packagebook from "../../assets/package-booking.png";
import Barbarshop from "../../assets/Barbar-Shops.png";
import Serviceathome from "../../assets/Service-At-Home.png";
import Truestedproducts from "../../assets/Truested-Products.png";
import "./CategorySection.css";
import "../../components/CarouselSlider/mainslider.css";

const CategorySection = () => {
  const categories = [
    { title: "Online Booking", image: Booknow },
    { title: "Slot Blockers", image: Slot },
    { title: "Package Booking", image: Packagebook },
    { title: "Barbar Shops", image: Barbarshop },
    { title: "Service At Home", image: Serviceathome },
    { title: "Truested Products", image: Truestedproducts },
    // Add more categories as needed
  ];

  const gradientColors = [
    "#ffc327",
    "#1b676b",
    "cc1b59",
    "#ff6635",
    "#54a15d",
    "#142935",
    // Add more gradient colors as needed
  ];

  return (
    <>
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="main-heading">
                <h2>Why is it so great?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {categories.map((category, index) => (
              <Col lg={2} sm={4} xs={6} key={index} className="mb-4">
                <div className="category-slide">
                  <div
                    className="thumb"
                    style={{
                      background: gradientColors[index % gradientColors.length],
                    }}
                  >
                    <img src={category.image} alt={category.title} />
                  </div>
                  <h4>{category.title}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} className="align-self-center">
              <div className="Category-home-text">
                <h1>Beauty Salons</h1>
                <p>
                  Beauty salons are not left out of the benefits of working with
                  Salonist. This advanced appointment scheduling system has a
                  seamless payment feature. You can take advantage of this.
                </p>
                <button className="Category-btn">
                  Find Salon & Specialist
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Categories-image">
                <img src={Categoriesimgbarbar} alt="barbar" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default CategorySection;
