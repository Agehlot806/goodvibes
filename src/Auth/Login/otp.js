import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import OtpInput from "react-otp-input";
import { Button, Col, Row } from "react-bootstrap";

const LoginOtp = () => {
  const [phone, setPhone] = useState("");
  // const [otp, setOtp] = useState(1234);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const resendOTP = (e) => {
    e.preventDefault();
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <>
    
      <BreadCrumb homeTitle="Home" pageTitle="OTP" />
      <section id="down" class="login-area sec-p">
        <div class="container">
          <div class="login-form">
            <h3>OTP</h3>
            <span>
              Verify your mobile number
            </span>
            <p>An OTP has been sent to your mobile number</p>
            <form className="otp-area">
              <OtpInput
                value={phone}
                containerStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  fontSize: "33px",
                }}
                otpType="number"
                onChange={(e) => {
                  const numericValue = e.replace(/\D/g, "");
                  setPhone(numericValue);
                }}
                OTPLength={4}
                autoFocus
                // renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />

              {/* <label for="mobile">
                Mobile*
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Number Here"
                />
              </label> */}
              {/* <label>
                Password*<i class="fa fa-eye-slash" id="togglePassword"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type Your Password"
                />
              </label> */}
              {/* <div class="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" />I agree to the{" "}
                  <a href="#">Terms & Policy</a>
                </p>
                <a href="#">Forgot Your Password</a>
              </div> */}
              {/* <input type="" name="continue" placeholder="continue" /> */}
              <div className="countdown-text mt-5">
                <Row>
                  <Col lg={6}>
                    <div>
                      {seconds > 0 || minutes > 0 ? (
                        <h6>
                          Time Remaining:{" "}
                          {minutes < 10 ? `0${minutes}` : minutes}:
                          {seconds < 10 ? `0${seconds}` : seconds}
                        </h6>
                      ) : (
                        <h6>Didn't recieve code?</h6>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <button
                      disabled={seconds > 0 || minutes > 0}
                      style={{
                        color: seconds > 0 || minutes > 0 ? "#000" : "red",
                      }}
                      onClick={(e) => resendOTP(e)}
                    >
                      Resend OTP
                    </button>
                  </Col>
                </Row>
              </div>
              <Button className="mt-5">
                <Link to="/">Log In</Link>
              </Button>
            </form>
            {/* <div class="other-signup">
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
            </p> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginOtp;
