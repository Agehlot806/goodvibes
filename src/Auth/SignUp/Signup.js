import React from "react";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Signup = () => {
  return (
    <>
      <Header />
      {/* <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h2>Sign Up</h2>
                <span>
                  <a href="/">Home</a>
                  <i className="fa fa-chevron-right"></i>Sign Up
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
      <BreadCrumb homeTitle="Home" pageTitle="Sign Up" />
      <section id="down" class="login-area sec-p">
        <div class="container">
          <div class="login-form">
            <h3>Sign Up</h3>
            <span>
              Do you already have an account? <a href="/login"> Log in here</a>
            </span>
            <form>
              <div class="row">
                <div class="col-md-6">
                  <label for="fname">
                    Frist Name*
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                    />
                  </label>
                </div>
                <div class="col-md-6">
                  <label for="lname">
                    Last Name*
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="last Name"
                    />
                  </label>
                </div>
                <div class="col-12">
                  <label for="email">
                    Email*
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email Here"
                    />
                  </label>
                  <label for="password">
                    Password*<i class="fa fa-eye-slash" id="togglePassword"></i>
                    <input
                      type="password"
                      name="email"
                      id="password"
                      placeholder="Type Your Password"
                    />
                  </label>
                </div>
              </div>
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

export default Signup;
