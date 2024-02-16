import React, { useEffect } from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Welcome from "../screens/WelcomeScreen/Welcome";
import Home from "../screens/Home/Home";
import Login from "../Auth/Login/Login";
import Shop from "../screens/Shop/Shop";
import Contactus from "../screens/ContactUs/Contact";
import Service from "../screens/Services/Services";
import LoginOtp from "../Auth/Login/otp";
import Blog from "../screens/Blog/Blog";
import Slots from "../screens/Slots/slots";
import SubcategoryDetails from "../components/SubcategoryDetails/SubcategoryDetails";
import AddToCart from "../screens/AddToCart/AddToCart";
import About from "../screens/About/About";
import DownloadApp from "../components/HomePageComponent/DownloadApp/DownloadApp";
import VendorForm from "../screens/VendorForm/VendorForm";
import TermsConditions from "../screens/TermsConditions/TermsConditions";
import MyProfile from "../screens/MyProfile/MyProfile";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import Map from "../components/Map";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Routing = () => {
  return (
    <Router>
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/about" element={<About />} />
        <Route path="/SubcategoryDetails" element={<SubcategoryDetails />} />
        <Route path="/DownloadApp" element={<DownloadApp />} />
        <Route path="/VendorForm" element={<VendorForm/>}/>
       <Route path="/MyProfile" element={<MyProfile/>}/>
        <Route path="/TermsConditions" element={<TermsConditions />}/>
        <Route path="/MultiStepForm" element={<MultiStepForm />}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </Router>
  );
};
export default Routing;
