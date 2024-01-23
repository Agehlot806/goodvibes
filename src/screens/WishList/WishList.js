import React from "react";
import Footer from "../../directives/footer/footer";
import Navbar from "../../directives/Navbar/Navbar";
import CardWishList from "../../components/WishlistCard/wishlistCards";
const WishList = () => {
  return (
    <>
      <Navbar />
      {/* <BreadC homeTitle="Home" pageTitle="Wish List " /> */}
      <CardWishList />
      <Footer />
    </>
  );
};

export default WishList;
