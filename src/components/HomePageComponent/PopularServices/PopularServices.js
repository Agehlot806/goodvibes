import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PopularServices.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cleaning from "../../../assets/cleaning.jpg";
import houseShift from "../../../assets/houseShift.jpg";
import interior from "../../../assets/interior.jpg";
import construction from "../../../assets/construction.jpg";
import carWash from "../../../assets/carWash.jpg";
import service from "../../../assets/image/service-1.jpg";

const PopularServices = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <section className="section-padding">
        <div className="container">
          <h2 className="main-heading">Our Services</h2>
          <Carousel responsive={responsive}>
            {/* ------------------ Card-1 --------------- */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={cleaning}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>

            {/* ------------- Card-2 ------------------ */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={houseShift}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>

            {/* ---------------- Card-3 -------------- */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={interior}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>

            {/* ---------------- Card-4 ---------------- */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={construction}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>

            {/* ------------------ Card-5 -------------- */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={carWash}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>

            {/* -------------------- Card-6 ------------- */}
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={service}
                  className="service-card-img"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the
                  </Card.Text>
                  <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default PopularServices;
