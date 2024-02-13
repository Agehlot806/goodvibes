import React from "react";
import "./VendorForm.css";
import Navbar from "../../directives/Navbar/Navbar";
import Footer from "../../directives/footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import vendorPartner from "../../assets/vendorPartner.jpg";
import vendorEarning from "../../assets/vendorEarning.jpg";
import vendorCertificate from "../../assets/vendorCertificate.jpg";
import womenEmpowerment from "../../assets/womenEmpowerment.jpg";
import happyPartner01 from "../../assets/happyPartner01.jpg"
import happyPartner02 from "../../assets/happyPartner02.jpg"
import happyPartner03 from "../../assets/happyPartner03.jpg"
import Card from 'react-bootstrap/Card';

const VendorForm = () => {

let currentPage = 1;

const movePage=()=>{
const prevBtn = document.querySelector(".vendor-prev");

const nextBtn = document.querySelector(".vendor-next");

const activePage = document.querySelector(".vendor-pagination .active");

if(!prevBtn || !nextBtn || !activePage)return;
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  if(currentPage === 1){
    prevBtn.disabled = true;
  }
  else if(currentPage === 4){
  nextBtn.disabled = true;
  }

  document.querySelector(".vendor-pagination .active ").classList.remove("active");

  document.querySelectorAll(".vendor-pagination .number ").forEach((el)=>{
    el.classList.add("active")
  });


  const stepNode = document.querySelector(" .vendor-steps .vendor-step ");

  const width = (currentPage-1)*stepNode.offsetWidth*-1+"px";
  stepNode.parentNode.style.marginLeft = width;
}

const handlePrevClick =()=>{
  currentPage -=1;
  movePage();
};

const handleNextClick=()=>{
  currentPage +=1;
  movePage();
};

  
  
  return ( 
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Registration Form</h2>
      </div>
      <Container>
      <section className="section-padding">
        <div className="vendor-page-head">
          <h4>Registration Form</h4>
          <h1>Join Now India's No. 1 Beauty Home Service Provider</h1>
          <p>
            The continuous rise in the beauty and wellness industry speaks
            volumes that being a pro in this field, you can earn a good amount
            of money.
          </p>
        </div>
      </section>

  {/* ------------------- Vendor Form Area ---------------- */}
     
<div className="vendor-form-area">
 <div className="vendor-form">
  <div className="vendor-header">
    <h4>Vendor Form</h4> 
  </div>
  <div className="vendor-body">
    <div className="vendor-pagination">
{[1,2,3,4].map((number)=>(
  <React.Fragment key={number}>
    <div className={`vendor-number ${number === currentPage ? 'active' : ''}`}>{number}</div>
    {number < 4 && <div className="vendor-bar"></div>}
  </React.Fragment>
))}

    </div>

    <div className="vendor-steps">
      <div className="vendor-step">
        <h4>Contact Details</h4>
        <div className="vendor-grid">
      <div className="vendor-col">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
      </div>

      <div className="vendor-col">
        <label htmlFor="email">Email</label>
        <input type="text" id="name"></input>
      </div>

      <div className="vendor-col">
        <label htmlFor="email">Phone</label>
        <input type="text" id="name"></input>
      </div>
        </div>
      </div>

      <div className="vendor-step">
        <h4>Experience</h4>
        <div className="vendor-grid">
      <div className="vendor-col">
        <input type="text" placeholder="years"></input>
        </div>  

        <div className="vendor-col">
        <input type="text" placeholder="months"></input>
        </div> 

        <div className="vendor-col">
        <input type="text" placeholder="field"></input>
        </div> 
        </div>
      </div>

      <div className="vendor-step">
        <h4>details</h4>
        <div className="vendor-grid">
      <div className="vendor-col">
        <input type="text" placeholder="phone number"></input>
        </div>  

        <div className="vendor-col">
        <input type="text" placeholder="reason to join"></input>
        </div> 

        <div className="vendor-col">
        <input type="text" placeholder="password"></input>
        </div> 
        </div>
      </div>

<div className="vendor-step">
  <div className="vendor-confirmation">
  <h4>kjhgfd</h4>
  <div className="vendor-grid">
      <div className="vendor-col">
        <input type="text" placeholder="asdfghj"></input>
        </div>  

        <div className="vendor-col">
        <input type="text" placeholder="kjhgf"></input>
        </div> 

        <div className="vendor-col">
        <input type="text" placeholder="uytre"></input>
        </div> 
        </div>
  </div>
</div>

    </div>

  </div>
  <div className="vendor-footer">
  <button className="vendor-prev" onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
  <button className="vendor-next" onClick={handleNextClick} disabled ={currentPage === 4} >Next</button>
 </div>
 </div>
</div>


{/* -------------- Opportunity ------------ */}
<section className="section-padding">

 <h3 className="vendor-card-head">A world of opportunities awaits you!</h3>
 <Row>
    <Col lg={3} md={4} sm={6}>
      <div className="vendor-cards">
 <Card style={{ height:'250px' }}>
      <Card.Img variant="top" src={vendorPartner} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>3000+</Card.Title>
        <Card.Text>
        Working Partners
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Col>
    <Col lg={3} md={4} sm={6}>
    <div className="vendor-cards">
 <Card style={{ height:'250px' }}>
      <Card.Img variant="top" src={vendorEarning} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Unlimited</Card.Title>
        <Card.Text>
          Earnings
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Col>

    <Col lg={3} md={4} sm={6}>
    <div className="vendor-cards">
 <Card style={{  height:'250px' }}>
      <Card.Img variant="top" src={vendorCertificate} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Certified </Card.Title>
        <Card.Text>
          Traning Program
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Col>

    <Col lg={3} md={4} sm={6}>
    <div className="vendor-cards">
 <Card style={{  height:'250px' }}>
      <Card.Img variant="top" src={womenEmpowerment} className="vendor-card-images" />
      <Card.Body>
        <Card.Title>Women </Card.Title>
        <Card.Text>
         Empowerment
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Col>
    </Row>
 
    </section>

    <section className="section-padding"> 
    <h3 className="vendor-why-join">Why Join Good Vibes</h3>
    <Row>
        <Col lg={6} md={6} >
            <div className="why-join-box">
            <div className="vendor-join-head">
            <i className="fa-solid fa-user"></i>
            <h4>Be a pro at your work:</h4>
            </div>
            <p>Goodvibes will train you to be a certified Service Professional in the beauty and wellness industry. We will give you an opportunity to earn from day one and gain a lot of experience in your field. Also, you will stay updated with the latest trends in the industry.</p>
            </div>
        </Col>
        <Col lg={6} md={6} >
        <div className="why-join-box">
          <div className="vendor-join-head">
     <i className="fa-solid fa-calendar-check"></i>
        <h4>Work at your convenience:</h4>
        </div>
            <p>Unlike traditional salons, GoodVibes liberates you to choose the working hours and area preference as per your convenience. Once done, you will be able to access all the job details handy at Yes Madam Partner App.</p>
        </div>
        </Col>

        <Col lg={6} md={6} >
        <div className="why-join-box">

        <div className="vendor-join-head">
        <i className="fa-solid fa-gears"></i>
        <h4>Enhance your skill:</h4>
        </div>
            <p>We offer different types of beauty and wellness services like Female Spa, Male Grooming, Male Massage, LED Facial, Hair Services etc. So, you can choose your desired category of services, get training and brush up your skill.</p>
        </div>
        </Col>

        <Col lg={6} md={6} >
        <div className="why-join-box">
        <div className="vendor-join-head">
        <i className="fa-solid fa-wallet"></i>
        <h4>Great source of income:</h4>
        </div>
            <p>The continuous rise in the beauty and wellness industry speaks volumes that being a pro in this field, you can earn a good amount of money. At Yes madam, we never refrain you from your earning growth. The more you work, the higher you can earn.</p>
        </div>
        </Col>
    </Row>
    
 <div className="any-query-box">
  <h4>For any queries, feel free to get in touch with us at +91 9876544321</h4>
 </div>

 <section className="section-padding"> 
 <div className="happy-partners">
  <h3>Our Happy Partners</h3>
  <Row>
    <Col lg={4} md={4} >
      <div className="vendor-happy-partner">
    <img src={happyPartner01} alt="happy-partner"></img>
    <p>Thanks to Yes Madam, I am now financially independent. My husband and I contribute equally in household expenses.</p>
    <h6>Edla Varsha,

Hyderabad</h6>
      </div>
    </Col>
    <Col lg={4} md={4} >
    <div className="vendor-happy-partner">
    <img src={happyPartner02} alt="happy-partner"></img>
    <p>After joining Yes Madam I started enjoying my work. We are working in a very good working atmosphere. Thanks Yes Madam.

</p>
    <h6>Suman Lata,

Noida</h6>
        </div>
    </Col>
    <Col lg={4} md={4} >
    <div className="vendor-happy-partner">
    <img src={happyPartner03} alt="happy-partner"></img>
    <p>I'm completely satisfied with my work & earnings with Yes Madam. I feel proud in supporting my husband & giving a better life to my child.</p>
    <h6>Nasreen,

Indirapuram</h6>
        </div>
    </Col>
  </Row>
 </div>
 </section>

      </section>

      </Container>
      <Footer />
    </>
  );
};

export default VendorForm;
