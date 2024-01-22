import React from "react";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Signup = () => {
  return (
    <>
   
      <Navbar/>
     
      <BreadCrumb homeTitle="Home" pageTitle="Sign Up" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Sign Up</h3>
            <span>
              Do you already have an account? <a href="/login"> Log in here</a>
            </span>
            <form>
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-12">
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
                    Password*<i className="fa fa-eye-slash" id="togglePassword"></i>
                    <input
                      type="password"
                      name="email"
                      id="password"
                      placeholder="Type Your Password"
                    />
                  </label>
                  <label for="password">
              Confirm Password*<i className="fa fa-eye-slash" id="togglePassword"></i>
                    <input
                      type="password"
                      name="email"
                      id="password"
                      placeholder="Confirm Password"
                    />
                  </label>
                </div>
              </div>
            </form>

            <div className="other-signup">
              <h4>or Sign up WITH</h4>
              <div className="others-account">
                <a href="#" className="google">
                  <i className="fa fa-google"></i>Signup with google
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook-f"></i>Sign up with facebook
                </a>
              </div>
            </div>
            <p>
              By clicking the "Sign up" button, you create a Cobiro account, and
              you agree to Cobiro's
              <div >
               <a href="#">Terms & Conditions</a> &
              <a href="#">Privacy Policy.</a>
              </div>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;
