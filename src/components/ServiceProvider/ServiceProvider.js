import React from 'react';
import "./ServiceProvider.css";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ServiceProvider = () => {
  return (
    <div>
 
  <h2 className='service-provider-head'>Register as Service Provider</h2>

<div className='service-provider-page'>
<div className='serive-provider-box'>

<h5>If you're looking for a career in the spa industry, it can be helpful to create an application to register that showcases your skills and specializations in services like massage techniques. It can help you highlight your training and credentials, which can help you demonstrate why you're right for a role at a spa.</h5>

<Link to="VendorForm">
<button className="service-provider-btn" role="button">
          Register Here
           </button></Link>
</div>
</div>

        </div>
  )
}

export default ServiceProvider;