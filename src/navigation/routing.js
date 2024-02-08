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
import SubcategoryDetails from "../components/SubcategoryDetails/SubcategoryDetails";
import AddToCart from "../screens/AddToCart/AddToCart";
import About from "../screens/About/About";
import DownloadApp from "../components/HomePageComponent/DownloadApp/DownloadApp";
import VendorForm from "../components/VendorForm/VendorForm";
import MyProfile from "../screens/MyProfile/MyProfile";

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
        <Route path="/about" element={<About />} />
        <Route path="/SubcategoryDetails" element={<SubcategoryDetails />} />
        <Route path="/DownloadApp" element={<DownloadApp />} />
        <Route path="/VendorForm" element={<VendorForm/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
      </Routes>
    </Router>
  );
};
export default Routing;
