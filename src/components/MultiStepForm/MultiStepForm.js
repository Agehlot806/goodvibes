import React, { useState } from "react";
import "./MultiStepForm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [company_name, setCompany_name] = useState("");
  const [company_phone, setCompany_phone] = useState("");
  const [company_email, setCompany_email] = useState("");
  const [logo, setLogo] = useState(null);
  console.log("logoooo",logo)
  const [identity_images, setIdentity_images] = useState(null)
  const [company_address, setCompany_address] = useState("");
  const [contact_person_name, setContact_person_name] = useState("");
  const [contact_person_phone, setContact_person_phone] = useState("");
  const [contact_person_email, setContact_person_email] = useState("");
  const [zone_id, setZone_id] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [identification_number, setIdentification_number] = useState("");
  const [identification_type, setIdentification_type] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };


  console.log("formData", company_name);
  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    const formdata = new FormData();
    formdata.append("identity_images",identity_images)
    formdata.append("company_name",company_name)
    formdata.append("logo",logo)
   const headers = {
      "Content-Type": "application/json"
    }
    axios.post(`https://goodvibes.digiatto.online/api/v1/provider/auth/registration`,formdata,{
      headers:headers
    })
      .then((response) => {
        console.log("Success???:", response);

        // if (!response.ok) {
        //   throw new Error("Failed to submit form");
        // }
        // return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);

        if (error.response_code === "default_400" && error.errors) {
          error.errors.forEach((err) => {
            // Handle each error and display to the user
            console.log(err);
          });
        } else {
          // Handle other types of errors
          console.error("An error occurred:", error.message);
        }
      });
  };
  const imagehandler = (e) => {
    const files = e.target.files[0];
    setIdentity_images(files);
  
};
console.log("identity_images", identity_images);

  return (
    <div>
      <div className="multi-step-form">
        {/* Progress circles */}
        <div className="progress-circles">
          <div className={`multi-circle ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="form-bar"></div>
          <div className={`multi-circle ${step >= 2 ? "active" : ""}`}>2</div>
          <div className="form-bar"></div>
          <div className={`multi-circle ${step >= 3 ? "active" : ""}`}>3</div>
          <div className="form-bar"></div>
          <div className={`multi-circle ${step >= 4 ? "active" : ""}`}>4</div>
          {/* Add more circles if needed */}
        </div>

        <div className="multi-form-area">
          {/* ========================= First Section =========================== */}
          {step === 1 && (
            <Form>
              {/* ===================== First Form Info ================= */}
              <h2 className="vendor-form-head">General Information</h2>

              <Row>
                <Col lg={2}>
                  <div className="img-upload-container">
                    <label htmlFor="upload-img" className="upload-label">
                      <i class="fa-solid fa-upload"></i> Upload Image
                    </label>
                    <input
                      type="file"
              
                      onChange={imagehandler}
                     
                      className="upload-input"
                    />
                  </div>

                  {/* <input type="file"  onChange={imagehandler}/> */}
                  <input type="file" onChange={imagehandler} />
                </Col>
                <Col lg={10}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setCompany_name(e.target.value)}
                        value={company_name}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Company Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Company Phone "
                        onChange={(e) => setCompany_phone(e.target.value)}
                        value={company_phone}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label> Company E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                        onChange={(e)=>setCompany_email(e.target.value)}
                        value={company_email}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label> Select Zone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Zone"
                        onChange={(e)=>setZone_id(e.target.value)}
                        value={zone_id}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Apartment, studio, or floor"
                      onChange={(e)=>setCompany_address(e.target.value) }
                      value={company_address}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <button
                type="button"
                onClick={handleNext}
                className="Multi-form-btn"
              >
                Next
              </button>
            </Form>
          )}
<button onClick={handleSubmit}>demouser</button>
          {/* ========================= Second Section ======================== */}

          {step === 2 && (
            <Form>
              <h2 className="vendor-form-head">Contact Person Info</h2>

              <Row>
                <Col lg={2}>
                  <div className="img-upload-container">
                    <label htmlFor="upload-img" className="upload-label">
                      <i class="fa-solid fa-upload"></i> Upload Image logo
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleLogoChange}
                      // value={logo}
                      className="upload-input"
                    />
                  </div>
                </Col>
                <Col lg={10}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        onChange={(e)=>setContact_person_name(e.target.value)}
                        value={contact_person_name}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter Phone Number"
                        onChange={(e)=>setContact_person_phone(e.target.value)}
                        value={contact_person_phone}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e)=>setContact_person_email(e.target.value)}
                      value={contact_person_email}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Identity Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Identity Type"
                        onChange={(e)=>setIdentification_type(e.target.value)}
                        value={identification_type}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Identity Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Identity Number"
                        onChange={(e)=>setIdentification_number(e.target.value)}
                        value={identification_number}
                      />
                    </Form.Group>
                  </Row>
                </Col>
              </Row>

              <br />
              <button
                type="button"
                onClick={handlePrev}
                className="Multi-form-btn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="Multi-form-btn"
              >
                Next
              </button>
            </Form>
          )}

          {/* Add more steps similarly */}
          {/* ================================= Third Section ================================ */}

          {step === 3 && (
            <Form>
              <h2 className="vendor-form-head">Acount Information</h2>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e)=>setFirst_name(e.target.value)}
                    value={first_name}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e)=>setLast_name(e.target.value)}
                    value={last_name}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone"
                    onChange={(e)=>setPhone(e.target.value)}
                    value={phone}
                  />
                </Form.Group>

                {/* <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" 
                  onChange={handleChange}
                  />
                </Form.Group> */}
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e)=>setConfirm_password(e.target.value)}
                    value={confirm_password}
                  />
                </Form.Group>
              </Row>

              <br />
              <button
                type="button"
                onClick={handlePrev}
                className="Multi-form-btn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="Multi-form-btn"
              >
                Next
              </button>
            </Form>
          )}

          {/* =============================== Fourth section ========================== */}
          {step === 4 && (
            <Form>
              <h2 className="vendor-form-head">Address Information</h2>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Latitude</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="Latitude"
                    onChange={(e)=>setLatitude(e.target.value)}
                    value={latitude}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    type="number"
                    step="any"
                    placeholder="Longitude"
                    onChange={(e)=>setLongitude(e.target.value)}
                    value={longitude}
                  />
                </Form.Group>
              </Row>

              <button
                type="button"
                onClick={handlePrev}
                className="Multi-form-btn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="Multi-form-btn"
              >
                Submit
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
