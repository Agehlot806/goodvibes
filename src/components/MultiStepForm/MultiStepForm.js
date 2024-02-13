import React, { useState } from 'react';
import "./MultiStepForm.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(step =>step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

        <div className='multi-step-form'>

  {/* Progress circles */}
  <div className="progress-circles">
        <div className={`multi-circle ${step >= 1 ? 'active' : ''}`}><i class="fa-solid fa-check"></i></div>
        <div className='form-bar'></div>
        <div className={`multi-circle ${step >= 2 ? 'active' : ''}`}><i class="fa-solid fa-check"></i></div>
        <div className='form-bar'></div>
        <div className={`multi-circle ${step >= 3 ? 'active' : ''}`}><i class="fa-solid fa-check"></i></div>
        {/* Add more circles if needed */}
      </div>



      {step === 1 && (
       
  <Form onSubmit={handleSubmit}>
    <h2>General Information</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Company / Individual Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Company / Individual Form</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label> Company / Individual E-mail</Form.Label>
        <Form.Control placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Company / Individual Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>


      <button type="button" onClick={handleNext} className='Multi-form-btn'>Next</button>
      </Form>

   
      )}


      {step === 2 && (
        <Form onSubmit={handleSubmit}>
          <h2>Contact Person Info</h2>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last Name" />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="telephone" placeholder="Enter Phone Number" />
         
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" /> 
        </Form.Group>
        </Row>
          <br />
          <button type="button" onClick={handlePrev} className='Multi-form-btn'>Previous</button>
          <button type="button" onClick={handleNext} className='Multi-form-btn'>Next</button>
        </Form>
  

      )}

      {/* Add more steps similarly */}

      {step === 3 && (
        <Form onSubmit={handleSubmit}>
          <h2>Order Details</h2>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
          <br />
          <button type="button" onClick={handlePrev} className='Multi-form-btn'>Previous</button>
          <button type="submit" className='Multi-form-btn'>Submit</button>
        </Form>
      )}

</div>
    </div>
  );
}

export default MultiStepForm;
