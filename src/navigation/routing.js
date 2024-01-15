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
import Blogs from "../screens/Blog/Blog";
import Help from "../screens/Help/Help";
import Faqs from "../screens/FAQs/Faq";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faqs" element={<Faqs />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};
export default Routing;
