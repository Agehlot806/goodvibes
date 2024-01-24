import React from 'react'
import './SubcategoryDetails.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const SubcategoryDetails = () => {
  return (
    <div>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="All Skin Facial" title="Home">
        Tab content for Home
      </Tab>

      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>

      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>

      <Tab eventKey="sdsd" title="Contact" >
        Tab content for Contact
      </Tab>

      <Tab eventKey="dfdf" title="Contact" >
        Tab content for Contact
      </Tab>

     
    </Tabs>
    </div>
  )
}

export default SubcategoryDetails;