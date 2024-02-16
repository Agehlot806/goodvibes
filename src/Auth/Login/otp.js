import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import OtpInput from "react-otp-input";
import Navbar from "../../directives/Navbar/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";

const LoginOtp = () => {
  
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
const navigatepage = useNavigate()
const [otp, setOtp] = useState("");
const phone =localStorage.getItem("phonenumber")
console.log("phone???otp",otp);
console.log("phone???",phone);
const verifyOTP = async () => {
 try{
  const response = await fetch(
    "https://goodvibes.digiatto.online/api/v1/customer/auth/otp_verify",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
    body: JSON.stringify({
      phone,
      otp,
    }),
    }
  );
  const data =await response.json();
  console.log("data",data.data);
  localStorage.setItem("name",data.data.first_name)
  localStorage.setItem("id",data.data.id)
  localStorage.setItem("email",data.data.email)
  navigatepage("/")
 }
 catch (error){
  console.error("Error verifying OTP:", error);
 }
};

  // const resendOTP = () => {
  
  //   setMinutes(1);
  //   setSeconds(30);
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }

  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(interval);
  //       } else {
  //         setSeconds(59);
  //         setMinutes(minutes - 1);
  //       }
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [seconds]);
  return (
    <>

   <Navbar />

   <div className="pages-background"><h2>OTP Verification</h2></div>
      <section id="down" className="login-area sec-p">
        <Container>
          <div className="login-form">
            <h3>OTP</h3>
            <span>Verify your mobile number</span>
            <p>An OTP has been sent to your mobile number</p>
            <form className="otp-area" 
            
         >
              <OtpInput
                value={otp}
                containerStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "33px",
                }}
                otpType="number"
                onChange={(otp) =>setOtp(otp)} 
                OTPLength={4}
                autoFocus
                renderInput={(props) => <input {...props} />}
              />

              <div className="countdown-text mt-5">
                <Row>
                  <Col lg={6}>
                    <div>
                      {seconds > 0 || minutes > 0 ? (
                        <h5>
                          Time Remaining:{" "}
                          {minutes < 10 ? `0${minutes}` : minutes}:
                          {seconds < 10 ? `0${seconds}` : seconds}
                        </h5>
                      ) : (
                        <h6>Didn't recieve code?</h6>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <button
                      // disabled={seconds > 0 || minutes > 0}
                      // onClick={(e) => resendOTP(e)}
                      className="resend-otp"
                    > Resend OTP
                    </button>
                  </Col>
                </Row>
              </div>
              <Button className="mt-5" onClick={verifyOTP}>
                Log In
              </Button>
            </form>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default LoginOtp;
