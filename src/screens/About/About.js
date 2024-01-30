import React from "react";
import "./About.css";
import Navbar from "../../directives/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboutUsImg from "../../assets/aboutUsImg.jpg";
import aboutUsImg2 from "../../assets/aboutUsImg2.jpg";
import serviceCard01 from "../../assets/serviceCard01.jpg"
import serviceCard02 from "../../assets/serviceCard02.jpg"
import serviceCard03 from "../../assets/serviceCard03.jpg"
import serviceCard04 from "../../assets/serviceCard04.jpg"
import Footer from "../../directives/footer/footer";

const About = (props) => {
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <div>
      <Navbar />
      <div className="pages-background"><h2>About Us</h2></div>

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
 
            <Col lg={6}>

              <div className="about-image">
                <img src={aboutUsImg} className="about-spa"></img>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about-right-area">
                <h3>How GoodVibes Came to Life</h3>
                <p>
                  Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit
                  dolores, pri ne tation consul consequuntur. Per sum possit
                  detracto percipit. At his habemus albucius corpora euripidis,
                  quo oratio volumus detracto omittantur cu vim.
                </p>
                <btn className="about-book-btn">Book Now</btn>
              </div>
            </Col>
          
            </Row>
            </div>
        {/* -------------------- About-details-2 --------------------- */}

        <div className="about-row">
        <Row>
            <Col lg={6}>

              <div className="about-right-area">
                <h3>Spa Center</h3>
                <p>
                  Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit
                  dolores, pri ne tation consul consequuntur. Per sum possit
                  detracto percipit. At his habemus albucius corpora euripidis,
                  quo oratio volumus detracto omittantur cu vim.
                </p>
              <ul>
                <li>Minim vitae quaerendum</li>
                <li>Sit no suscipit pertinacia</li>
                <li>Ius tollit periculis veritus</li>
                <li>ne tation consul consequuntur</li>
              </ul>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about-image">
                <img src={aboutUsImg2} className="about-spa"></img>
              </div>
            </Col>
        
          </Row>
          </div>

<hr/>
          {/* ------------------ Happy Clients ------------------- */}

         <div className="about-happy-clients">
          <h1>What Our Happy Customers Are Saying</h1>
          <p> Eos ubique
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.</p>
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


  <div >
    <h4>Eos 
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit dolores, pri ne tation consul consequuntur. </h4>
              <p>Minim vitae quaerendum</p></div>

  <div > <h4> ubique
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit dolores, pri ne tation consul consequuntur. </h4>
              <p> suscipit pertinacia</p></div>

  <div > <h4>
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit dolores, pri ne tation consul consequuntur. </h4>
              <p>  periculis veritus</p>
              </div>


  <div > <h4>Eos ubique
              tritani fierent ut, eum legimus intellegam ex, eu mel modus dolore
              iriure. Simul per omittantur voluptatibus viderer vero nam.Lorem ipsum dolor sit amet, usu at dico aeque. Ad omnis dicit dolores, pri ne tation consul consequuntur. </h4>
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
      <Col lg={3}><img src={serviceCard01} className="post-images"></img> 
      </Col>
      <Col lg={3}><img src={serviceCard02} className="post-images"></img></Col>
      <Col lg={3}><img src={serviceCard03} className="post-images"></img></Col>
      <Col lg={3}><img src={serviceCard04} className="post-images"></img></Col>
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
