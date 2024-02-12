import React from 'react';
import './TermsConditions.css';
import Navbar from "../../directives/Navbar/Navbar";
import TermsConditionComponent from '../../components/Terms-condition';

const TermsConditions = () => {
  return (
    <div>
          <Navbar />
          <div className="pages-background">
        <h2>Terms & Conditions</h2>
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
        
<TermsConditionComponent/>

    </div>
  )
}

export default TermsConditions