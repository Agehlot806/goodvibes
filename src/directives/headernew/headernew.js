import React from "react";
import "./header.css";
import Logo from "../../assets/logodemo.png";
const Header = () => {
  return (
    <header class="header-2 sticky_top">
      <div class="header-logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div class="main-menu">
        <nav class="main-nav">
          <div class="mobile-menu-logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
            <div class="remove">
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
          <ul>
            <li class="has-child active">
              <a href="/">Home</a>
              <i class="bi bi-chevron-down"></i>
              <ul class="sub-menu">
                <li>
                  <a class="" href="/">
                    Home 01
                  </a>
                </li>
                <li>
                  <a class="" href="/index2">
                    Home 02
                  </a>
                </li>
                <li>
                  <a class="" href="/index3">
                    Home 03
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="" href="/about">
                About Us
              </a>
            </li>
            <li class="has-child">
              <a class="active" href="/service">
                Services
              </a>
              <i class="bi bi-chevron-down"></i>
              <ul class="sub-menu">
                <li>
                  <a class="active" href="/service">
                    Services
                  </a>
                </li>
                <li>
                  <a class="" href="/service-details">
                    Service Details
                  </a>
                </li>
              </ul>
            </li>
            <li class="has-child">
              <a href="/blog">Blogs</a>
              <i class="bi bi-chevron-down"></i>
              <ul class="sub-menu">
                <li>
                  <a class="" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="" href="/blog-sidebar">
                    Blog Sidebar
                  </a>
                </li>
                <li>
                  <a class="" href="/blog-standard">
                    Blog Standard
                  </a>
                </li>
                <li>
                  <a class="" href="/blog-details">
                    Blog Details
                  </a>
                </li>
              </ul>
            </li>
            <li class="has-child">
              <a href="#">Pages</a>
              <i class="bi bi-chevron-down"></i>
              <ul class="sub-menu">
                <li>
                  <a class="" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a class="" href="/sign-up">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="/error">Error 404</a>
                </li>
                <li>
                  <a class="" href="/faq">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="" href="/account">
                    My Account
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="my-account">
            <a href="/account">My Account</a>
          </div>
        </nav>
      </div>
      <div class="header-right">
        <div class="phone">
          <div class="icon">
            {/* <img src="assets/images/icons/phone.svg" alt="" /> */}
          </div>
          <div class="phn-info">
            <span>Call Us Now</span>
            <a href="tel:01701111000">+880 170 1111 000</a>
          </div>
        </div>
        <div class="wishlist">
          <a href="/account">
            <i class="bi bi-suit-heart"></i>
          </a>
        </div>
        <div class="account-btn">
          <a href="/account">My Account</a>
        </div>
        <div class="mobile-menu">
          <a href="#" class="cross-btn">
            <span class="cross-top"></span>
            <span class="cross-middle"></span>
            <span class="cross-bottom"></span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
