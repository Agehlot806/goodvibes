import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Button, Container } from "react-bootstrap";
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

      <div className="pages-background"><h2>Login</h2></div>
     
      <section id="down" className="login-area sec-p">
        <Container>
          <div className="login-form">
            <h3>Log In</h3>
          
            <form>
              <label for="mobile">
                Mobile*
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Number Here"
                  className="login-input"
                  // value={mobile}
                  onChange={(e) => {
                    setuserLoginData({
                      ...userLoginData,
                      phone: e.target.value,
                    });
                  }}
                />
              </label>

        <Link to="/LoginOtp">   <Button
                className="login-continue-btn"
                onClick={() => handleSubmit()}
              >
                continue
              </Button>
              </Link>   
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
          
              <a href="#" className="login-policy">
                Terms & Conditions
              </a>{" "}
              &
              <a href="#" className="login-policy">
                Privacy Policy.
              </a>
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Login;
