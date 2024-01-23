import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WishListCard.css";
import wishlistone from "../../assets/image/wishlist-1.png";
import wishlisttwo from "../../assets/image/wishlist-2.png";
import wishlistthree from "../../assets/image/wishlist-3.png";
import { Link } from "react-router-dom";
const WishListCard = () => {
  const wishlistData = [
    {
      image: wishlistone,
      Service: "Beard Trim",
      category: "Service",
    },
    {
      image: wishlisttwo,
      Service: "Haircut",
      category: "Service",
    },
    {
      image: wishlistthree,
      Service: "Saloons",
      category: "Service",
    },
  ];
  return (
    <>
      <section className="section-padding">
        <Container>
          <div className="main-heading mt-5">
            <h2>Wish List</h2>
          </div>
          <div class="row g-4">
            {wishlistData.map((wishlist, index) => (
              <Col lg={4} key={index}>
                <div className="wishlist-BOX">
                  <Link to="/wishlists">
                    <img src={wishlist.image} alt="" />
                    <div className="wishlist-service mt-2">
                      <div>
                        <a>
                          <i className="fa-regular fa-user"></i>
                          <h2>{wishlist.Service}</h2>
                        </a>
                      </div>
                      <div>
                        <a>
                          <i class="fa-regular fa-heart"></i>
                          <span>{wishlist.category}</span>
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WishListCard;
