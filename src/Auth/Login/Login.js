import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Login = () => {
  return (
    <>
      <Header />
      {/* <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h2>Log In</h2>
                <span>
                  <a href="/">Home</a>
                  <i className="fa fa-chevron-right"></i>Log In
                </span>
                <div className="arrow-down">
                  <a href="#down">
                    <i className="fa fa-chevron-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <BreadCrumb homeTitle="Home" pageTitle="Log In" />
      <section id="down" class="login-area sec-p">
        <div class="container">
          <div class="login-form">
            <h3>Log In</h3>
            <span>
              New Member? <a href="/signup">SignUp here</a>
            </span>
            <form>
              <label for="email">
                Email*
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Here"
                />
              </label>
              <label>
                Password*<i class="fa fa-eye-slash" id="togglePassword"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type Your Password"
                />
              </label>
              <div class="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" />I agree to the{" "}
                  <a href="#">Terms & Policy</a>
                </p>
                <a href="#">Forgot Your Password</a>
              </div>
              <input type="submit" name="submit" placeholder="dasdasdasd" />
            </form>
            <div class="other-signup">
              <h4>or Sign up WITH</h4>
              <div class="others-account">
                <a href="#" class="google">
                  <i class="fa fa-google"></i>Signup with google
                </a>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook-f"></i>Sign up with facebook
                </a>
              </div>
            </div>
            <p>
              By clicking the "Sign up" button, you create a Cobiro account, and
              you agree to Cobiro's <a href="#">Terms & Conditions</a> &
              <a href="#">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
