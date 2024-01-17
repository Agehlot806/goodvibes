import React from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../screens/WelcomeScreen/Welcome";
import Home from "../screens/Home/Home";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/SignUp/Signup";
import Shop from "../screens/Shop/Shop";
import Contactus from "../screens/ContactUs/Contact";
import Service from "../screens/Services/Services";
import Help from "../screens/Help/Help";
import Faqs from "../screens/FAQs/Faq";
import LoginOtp from "../Auth/Login/otp";
import Account from "../screens/Account/Account";
import Blog from "../screens/Blog/Blog";
import Blogdetails from "../screens/Blog/BlogDetails";
import Servicedetails from "../screens/ServiceDetails/Service";
import Addtocart from "../screens/Add to Cart/add-to-cart";
import Slots from "../screens/Slots/slots";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<Servicedetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<Blogdetails />} />

        <Route path="/help" element={<Help />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/add-to-cart" element={<Addtocart />} />
        <Route path="/slots" element={<Slots />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};
export default Routing;
