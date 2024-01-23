import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Navbar from "../../directives/Navbar/Navbar"
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Navbar/>
     
      <BreadCrumb homeTitle="Home" pageTitle="Log In" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Log In</h3>
            <span>
              New Member? <a href="/signup">SignUp here</a>
            </span>
            <form>
              <label for="mobile">
                Mobile*
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Number Here"
                  className="login-mobile-number"
                />
              </label>
             
              <Button>
      <Link to="/loginotp" className="login-continue-btn">continue</Link>
              </Button>
            </form>
            <div className="other-signup">
              <h4>or Sign up With</h4>
              <div className="others-account">
                <a href="#" className="google-login">
                <i className="fa-brands fa-google"></i>Signup with google
                </a>
                <a href="#" className="facebook-login">
                <i className="fa-brands fa-facebook"></i>Sign up with facebook
                </a>
              </div>
            </div>
            <p>
              By clicking the "Sign up" button, you create a Cobiro account, and
              you agree to Cobiro's.
              <br/>
               <a href="#" className="login-policy">Terms & Conditions</a> &
              <a href="#" className="login-policy">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
