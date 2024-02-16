import React,{ useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import { Button, Container } from "react-bootstrap";

const Login = () => {
  const [phone , setMobile] = useState("");
  const loginotp =useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('phone', phone);

    try {
      const response = await fetch
      ('https://goodvibes.digiatto.online/api/v1/customer/auth/userlogin', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        loginotp('/loginotp')
        console.log("data????",data.phone);
        localStorage.setItem("phonenumber",data.phone) 
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="pages-background"><h2>Login</h2></div>
     
      <section id="down" className="login-area sec-p">
        <Container>
          <div className="login-form">
            <h3>Log In</h3>
          
            <form onSubmit={handleSubmit}>
              <label for="mobile">
                Mobile*
                <input
                  type="number"
              
                  placeholder="Enter Your Number Here"
                  className="login-input"
                value={phone}
                onChange={(e)=>setMobile(e.target.value)}
                />
              </label>

        
   <Button type="submit" className="login-continue-btn">
                continue
              </Button>
           
            </form>
           
            <p>
          <Link to="/TermsConditions">

              <a href="#" className="login-policy">
              <input type="checkbox"></input>  Terms & Conditions
              </a>{" "}
              </Link>
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Login;
