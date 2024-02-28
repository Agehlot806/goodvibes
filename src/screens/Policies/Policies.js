import React, { useEffect, useState } from 'react';
import "./Policies.css";
import Navbar from "../../directives/Navbar/Navbar";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CKEditor from "../../components/CkEditor";
import { Container } from 'react-bootstrap';
import Footer from '../../directives/footer/footer';

const Policies = () => {
    const [privacy, setPrivacy] = useState("");
    const [policy, setPolicy] = useState("");
    const [cancelPolicy, setCancelPolicy] = useState("");

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
   const response = await fetch("https://goodvibes.digiatto.online/api/v1/customer/config/pages");
   const data = await response.json();
   const Privacycontent = data.content.privacy_policy.value;
  const content = data.content.refund_policy.value;
  const cancelContent = data.content.cancellation_policy.value;
  
  setPrivacy(Privacycontent);
  setPolicy(content);
  setCancelPolicy(cancelContent);
   }
            catch(error){
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[]);

  return (
    <div>
           <Navbar />
      <div className="pages-background">
        <h2> Policies</h2>
        <BreadCrumb pageTitle="Policies" />
      </div>
      <div className="privacy-policy-bg">
        <div className="privacy-policy-heading">
          <h5>Goodvibes Policies</h5>
          <h1>Welcome to the GoodVibes the on-demand salon service platform</h1>
          <p>
            Getting a facial is not only relaxing and rejuvinating to the face,
            but also the mind. Facials allow you to focus on your breathing and
            regain your confidence in having healthy beautiful skin.
          </p>
        </div>
      </div>
      <Container>
        <h3>Privacy Policy</h3>
        <div>
    <CKEditor content={privacy}/>
        </div>

        <h3>Refund Policy</h3>
      <div className="policy-content">
          <CKEditor content={policy} />
        </div>

        <h3>Cancellation Policy</h3>
        <div>
        <CKEditor content={cancelPolicy} />
        </div>
      </Container>

      <Footer/>
    </div>
  )
}

export default Policies