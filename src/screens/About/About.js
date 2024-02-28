import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./About.css";
import Navbar from "../../directives/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboutUsImg from "../../assets/aboutUsImg.jpg";
import aboutUsImg2 from "../../assets/aboutUsImg2.jpg";
import serviceCard01 from "../../assets/serviceCard01.jpg";
import serviceCard02 from "../../assets/serviceCard02.jpg";
import serviceCard03 from "../../assets/serviceCard03.jpg";
import serviceCard04 from "../../assets/serviceCard04.jpg";
import Footer from "../../directives/footer/footer";
import { Link } from "react-router-dom";

const About = (props) => {
  const [content, setContent] = useState(null);
  const [secondContent, setSecondContent] = useState(null);
  // ============= Get API ============== //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goodvibes.digiatto.online/api/v1/customer/config/pages"
        );
        const data = await response.json();
        const aboutUsContent = data.content.about_us.value;
        const cleanedContent = stripHtmlEntities(aboutUsContent);
        setContent(cleanedContent);

        const secondContent = data.content.about_us.translations.find(
          (item) => item.locale === "en"
        ).value;

        const cleanedSecondContent = stripHtmlEntities(secondContent);
        setSecondContent(cleanedSecondContent);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  // Helper function to convert HTML entities to characters
  const stripHtmlEntities = (html) => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Navbar />
      <div className="pages-background">
        <h2>About Us</h2>
        <BreadCrumb pageTitle="About Us" />
      </div>

      <Container>
        <section className="section-padding">
          <div className="about-text-area">
            <h1>Welcome to GoodVibes</h1>
            <p>
              Lorem ipsum dolor sit amet, sumo iudicabit eu has, eligendi
              pertinax iracundia has id, no vis utamur vivendum. Eos ubique
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.
            </p>
          </div>
        </section>

        {/* ------------------- About-details ---------------------- */}

        <div className="about-details">
          <div className="about-row">
            <Row>
              <Col lg={4} md={4}>
                <div className="about-image">
                  <img src={aboutUsImg} className="about-spa"></img>
                </div>
              </Col>

              <Col lg={8} md={8}>
                <div className="about-right-area">
                  <h3>How GoodVibes Came to Life</h3>
                  {content && (
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                  )}
                  <Link to="/contactus">
                    {" "}
                    <btn className="about-book-btn">Know More</btn>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          {/* -------------------- About-details-2 --------------------- */}

          <div className="about-row">
            <Row>
              <Col lg={6} md={6}>
                <div className="about-right-area">
                  <h3>Spa Center</h3>
                  {secondContent && (
                    <p dangerouslySetInnerHTML={{ __html: secondContent }}></p>
                  )}
                </div>
              </Col>

              <Col lg={6} md={6}>
                <div className="about-image">
                  <img src={aboutUsImg2} className="about-spa"></img>
                </div>
              </Col>
            </Row>
          </div>

          <hr />
          {/* ------------------ Happy Clients ------------------- */}

          <div className="about-happy-clients">
            <h1>What Our Happy Customers Are Saying</h1>
            <p>
              {" "}
              Eos ubique tritani fierent ut, eum legimus intellegam ex, eu mel
              modus dolore iriure. Simul per omittantur voluptatibus viderer
              vero nam.
            </p>
          </div>

          <div className="happy-clients-carousel">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={2000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[" desktop", "tablet", "mobile"]}
              deviceType={props.deviceType}
              // dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding"
              arrows={false}
            >
              <div>
                <h5>
                  Eos tritani fierent ut, eum legimus intellegam ex, eu mel
                  modus dolore iriure. Simul per omittantur voluptatibus viderer
                  vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad
                  omnis dicit dolores, pri ne tation consul consequuntur.{" "}
                </h5>
                <p>Minim vitae quaerendum</p>
              </div>

              <div>
                {" "}
                <h5>
                  {" "}
                  ubique tritani fierent ut, eum legimus intellegam ex, eu mel
                  modus dolore iriure. Simul per omittantur voluptatibus viderer
                  vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad
                  omnis dicit dolores, pri ne tation consul consequuntur.{" "}
                </h5>
                <p> suscipit pertinacia</p>
              </div>

              <div>
                {" "}
                <h5>
                  tritani fierent ut, eum legimus intellegam ex, eu mel modus
                  dolore iriure. Simul per omittantur voluptatibus viderer vero
                  nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis
                  dicit dolores, pri ne tation consul consequuntur.{" "}
                </h5>
                <p> periculis veritus</p>
              </div>

              <div>
                {" "}
                <h5>
                  Eos ubique tritani fierent ut, eum legimus intellegam ex, eu
                  mel modus dolore iriure. Simul per omittantur voluptatibus
                  viderer vero nam.Lorem ipsum dolor sit amet, usu at dico
                  aeque. Ad omnis dicit dolores, pri ne tation consul
                  consequuntur.{" "}
                </h5>
                <p> vitae quaerendum</p>
              </div>
            </Carousel>
          </div>

          {/* ------------------- Our Posts ------------------- */}
          <section className="section-padding">
            <div className="about-our-post">
              <h1>Latest Posts</h1>
              <div className="latest-posts">
                <Row>
                  <Col lg={3} md={4} sm={6}>
                    <img src={serviceCard01} className="post-images"></img>
                  </Col>
                  <Col lg={3} md={4} sm={6}>
                    <img src={serviceCard02} className="post-images"></img>
                  </Col>
                  <Col lg={3} md={4} sm={6}>
                    <img src={serviceCard03} className="post-images"></img>
                  </Col>
                  <Col lg={3} md={4} sm={6}>
                    <img src={serviceCard04} className="post-images"></img>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
