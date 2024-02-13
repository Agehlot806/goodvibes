import React,{ useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import { Button, Container } from "react-bootstrap";

const Login = () => {
  const [mobile , setMobile] = useState("");

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
     const response = await fetch(
    "https://nagarsathi.hirectjob.in/api/v1/customer/auth/userlogin",
      
    {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({mobile}),
    }
     ) ;
     const data = await response.json();
     console.log(data);
    }
catch (error){
  console.log("Error:", error);
}
  };

  const handleMobileChange = (e)=>{
    setMobile(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="pages-background"><h2>Login</h2></div>
     
      <section id="down" className="login-area sec-p">
        <Container>
          <div className="login-form">
            <h3>Log In</h3>
          
            <form onSubmit={handleLogin}>
              <label for="mobile">
                Mobile*
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Number Here"
                  className="login-input"
                value={mobile}
                onChange={handleMobileChange}
                />
              </label>

        
   <Button type="submit" className="login-continue-btn">
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
