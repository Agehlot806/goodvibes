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
import Slots from "../screens/Slots/slots";
import OurTeam from "../screens/OurTeam/OurTeam";
import FeatureSubCat from "../components/HomePageComponent/FeatureSubcategory/FeatureSubCat";
import SubcategoryDetails from "../components/SubcategoryDetails/SubcategoryDetails";
import AddToCart from "../screens/AddToCart/AddToCart";
import About from "../screens/About/About";
import DownloadApp from "../components/HomePageComponent/DownloadApp/DownloadApp";
import VendorForm from "../components/VendorForm/VendorForm";

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
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/FeatureSubCat" element={<FeatureSubCat />} />
        <Route path="/SubcategoryDetails" element={<SubcategoryDetails />} />
        <Route path="/DownloadApp" element={<DownloadApp />} />
        <Route path="/VendorForm" element={<VendorForm/>}/>
      </Routes>
    </Router>
  );
};
export default Routing;
