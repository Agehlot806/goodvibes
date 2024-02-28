import React, { useEffect, useState } from 'react';
import './TermsConditions.css';
import Navbar from "../../directives/Navbar/Navbar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Container } from 'react-bootstrap';
import CKEditor from '../../components/CkEditor';
import Footer from '../../directives/footer/footer';

const TermsConditions = () => {
  const [termsAndCondition, setTermsAndCondition] = useState("")

// ------------------- Get API Integration of terms & condition --------------------//
  useEffect(()=>{
    const fetchData = async() => {
      try{
        const response = await fetch("https://goodvibes.digiatto.online/api/v1/customer/config/pages");
        const data = await response.json();
        const content =data.content.terms_and_conditions.value;
        // Removing HTML tags
        const formattedContent = content.replace(/<[^>]*>/g, '');
        setTermsAndCondition(content);
      }catch (error){
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
   },[]);
  return (
    <div>
          <Navbar />
          <div className="pages-background">
        <h2>Terms & Conditions</h2>
        <BreadCrumb pageTitle="Terms & Conditions" />  
      </div>
     
      <div className="Terms-condition-bg">
          <div className="terms-condition-heading">
            <h5>Terms And Conditions</h5>
            <h1>Welcome to the GoodVibes the on-demand salon service platform</h1>
            <p>
              Getting a facial is not only relaxing and rejuvinating to the
              face, but also the mind. Facials allow you to focus on your
              breathing and regain your confidence in having healthy beautiful
              skin. Monthly facials help to support your at home skincare
              program to achieve the healthiest skin possible.
            </p>
          </div>
        </div>

        <Container>
          <div className='terms-condition-box'>
        <h4>DISCLAIMER:</h4> 
        <p>PLEASE TAKE NOTE THAT ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE  WWW.YESMADAM.COM  MOBILE APPLICATION OR PURCHASES MADE OTHERWISE FROM NOTION ONLINE SOLUTIONS PRIVATE LIMITED INDICATES YOUR AGREEMENT TO THESE USER TERMS AND CONDITIONS OF USE SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING.</p>
          </div>

         <div className='terms-condition-box'>
          {/* =================== Api Data here ================= */}
         <CKEditor content={termsAndCondition}/>
          </div>


      </Container>
        
<Footer/>
    </div>
  )
}

export default TermsConditions