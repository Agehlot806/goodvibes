import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Button } from "react-bootstrap";
import { userLogin } from "../../redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLoginData, setuserLoginData] = useState({
    phone: "",
  });
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Dispatch the userLogin action creator
  //     await dispatch(userLogin({ mobile }));
  //     // If you want to navigate after a successful login, you can do it here
  //   } catch (error) {
  //     // Handle any error if needed
  //     console.error("Error during login:", error);
  //   }
  // };
  const handleSubmit = () => {
    if (userLoginData.email === "") {
      toast.error(user.message);
    } else {
      console.log("hh");
      const user = {
        phone: userLoginData.phone,
      };

      dispatch(userLogin(user));
    }
  };

  useEffect(() => {
    if (user?.success) {
      localStorage.setItem("phone", user.phone);
      // localStorage.setItem("userid", user.userid);
      toast.success(user.message);
      navigate("/");
    } else if (user?.success === false) {
      toast.error(user.message);
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />

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
                  // value={mobile}
                  onChange={(e) => {
                    setuserLoginData({
                      ...userLoginData,
                      phone: e.target.value,
                    });
                  }}
                />
              </label>

              <Button
                className="login-continue-btn"
                onClick={() => handleSubmit()}
              >
                continue
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
              <br />
              <a href="#" className="login-policy">
                Terms & Conditions
              </a>{" "}
              &
              <a href="#" className="login-policy">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
