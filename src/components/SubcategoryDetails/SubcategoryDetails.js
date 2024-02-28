import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../directives/Navbar/Navbar";
import facial01 from "../../assets/FeatureImages/facial01.jpg";
import facial02 from "../../assets/FeatureImages/facial02.jpg";
import facial03 from "../../assets/FeatureImages/facial03.jpg";
import facial04 from "../../assets/FeatureImages/facial04.jpg";
import facial05 from "../../assets/FeatureImages/facial05.jpg";
import serviceCard02 from "../../assets/serviceCard02.jpg";
import "./SubcategoryDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Modal from 'react-bootstrap/Modal';
import Footer from '../../directives/footer/footer';

const CustomTabTitle = ({ imageSrc, className, title }) => (
  <div className={`custom-tab-title ${className}`}>
    <img src={imageSrc} alt="Facial" className="custom-tab-image" />
    <div className="custom-tab-title-text">{title}</div>
  </div>
);


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view-detail-card">
              <img src={serviceCard02} className="modal-images"></img>

              <div className="view-detail-content">
                <h4>VlCC massage facial</h4>
                <ul>
                  <li>For normal, dry and combination skin.</li>
                  <li>Best for lightening and brightening the skin.</li>
                  <li>Frequency - 25 to 30 days</li>
                </ul>

                <div className="view-detail-price">
                  <span className="slot-price">$ 102</span>
                  <span className="slot-discount">70% OFF</span>
                  <span className="old-price">$ 200</span>
                </div>
              </div>
            </div>

        <div className="view-detail-card">
        <div className="view-detail-content">
                <h4>BENEFITS</h4>
                <ul>
                  <li>Reduces wrinkles & fine lines, improves elasticity</li>
                  <li>Best for lightening and brightening the skin.</li>
                  <li>Gold facial has anti-inflammatory properties</li>
                </ul>
              </div>
          
        </div>

        <div className="view-detail-card">
        <div className="view-detail-content">
                <h4>STEPS</h4>
                <ul>
                  <li>Cleanser</li>
                  <li>Lactic Peel</li>
                  <li>Massage Gel
</li>
                  <li>Massage Cream
</li>
                  <li>Cream Mask
</li>
                  <li>Eye mask
</li>
                  <li>Serum</li>
                  <li>Mould Mask
</li>
                  <li>Sunscreen</li>
             
                </ul>
              </div>
          
        </div>

        <div className="view-detail-card">
        <div className="view-detail-content">
                <h4>PRECAUTION</h4>
                <ul>
                  <li>Bleach is not recommended with this facial when using Peel.</li>
                  <li>Apply peel after 30 days in case bleach used.</li>
                </ul>
              </div>
              </div>
      
      </Modal.Body>
      <Modal.Footer>
      <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
      </Modal.Footer>
    </Modal>
  );
}


const SubcategoryDetails = () => {

    const [modalShow, setModalShow] = React.useState(false);
  const AllSkinFacial =  [
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", },
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", },
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", },
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", },
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", },
 {image: facial01,title:"VLCC Insta Glow Facial", price:"$44", time:"45 Minutes", }
  ]

 const DrySkinFacial = [
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",},
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",},
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",},
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",},
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",},
    {image: facial02, title:"High-Frequency Facial", price:"$55", time:"50 Minutes",}
   ]

  const OilySkinFacial = [
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"},
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"},
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"},
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"},
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"},
    {image:facial03,title:"Brigntning Facial", price:"$66", time:"30 Minutes"}
  ]

  const AntiAgingFacial = [
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"},
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"},
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"},
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"},
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"},
    {image: facial04, title:"SkinCeuticals Soothing Facial", price:"$56", time:"40 Minutes"}
  ]

  const CleanUp = [
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"},
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"},
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"},
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"},
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"},
    {image:facial05, title:"Clear Skin CLeanUp", price:"$78", time:"35 Minutes"}
  ]

  return (
    <>
      <Navbar />
      <div className="pages-background">
        <h2>Sub-Categories</h2>
        <BreadCrumb pageTitle="Sub-Categories" />
      </div>

      
      <div className="inner-subCat-bg">
          <div className="subcategory-heading">
            <h5>Sub-Categories</h5>
            <h1>We Provide Diffrent Kinds Of Facials Which Suits Your Skin</h1>
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
        <section className="section-padding">
          {/* ------------------- Offer Carousels ----------------- */}

          <div className="subcategory-area">
            <Tabs
              defaultActiveKey="All Skin Facial"
              id="uncontrolled-tab-example"
              className="subcategory-tab mb-3"
            >
              {/* ----------------- All Skin Facial --------------- */}
              <Tab
                eventKey="All Skin Facial"
                title={
                  <CustomTabTitle
                    imageSrc={facial01}
                    className="custom-image-size"
                    title="All Skin Facial"
                  />
                }
              >
               
                <section className="section-padding">
                  <Row>

    { AllSkinFacial.map((item,index)=>(<Col lg={4} md={6} key={index}>
                     <div  className="all-skin-card">
                        <img
                          src={item.image}
                          className="subcategory-card-img"
                        ></img>
                        <h4>VLCC Insta Glow Facial</h4>
                        <div className="amount-time">
                          <p>$44</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> 45 Minutes
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                          {/* ------ modal button ------ */}
                          <Button variant="primary" onClick={() => setModalShow(true)}>
                          view details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                         
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>))}                
                  </Row> </section>
              </Tab>

              {/* ---------------- Dry Skin Facial ---------------- */}
              <Tab
                eventKey="profile"
                title={
                  <CustomTabTitle
                    imageSrc={facial02}
                    className="custom-image-size"
                    title="Dry Skin Facial"
                  />
                }
              >

                <section className="section-padding">
                  <Row>
    {DrySkinFacial.map((item,index)=> (<Col lg={4} md={6} key={index}>
                      <div className="all-skin-card">
                        <img
                          src={item.image}
                          className="subcategory-card-img"
                        ></img>
                        <h4>{item.title}</h4>
                        <div className="amount-time">
                          <p>{item.price}</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i> {item.time}
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
    <Button variant="primary" onClick={() => setModalShow(true)}>
                         view details
                          </Button>
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>))}

                  </Row>
                </section>
              </Tab>

              {/* -------------- Oily SKin Facial --------------  */}
              <Tab
                eventKey="contact"
                title={
                  <CustomTabTitle
                    imageSrc={facial03}
                    className="custom-image-size"
                    title="Oily Skin Facial"
                  />
                }
              >
                
                <section className="section-padding">
                  <Row>
                    {OilySkinFacial.map((item,index)=>(<Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={item.image}
                          className="subcategory-card-img"
                        ></img>
                        <h4>{item.title}</h4>
                        <div className="amount-time">
                          <p>{item.price}</p>
                          <h6>
                            <i className="fa-solid fa-clock"></i>{item.time}
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button variant="primary" onClick={() => setModalShow(true)} >
                         view details
                          </Button>
                         <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>))} 

                  </Row>
                </section>
              </Tab>

              {/* -------------------- Anti Aging Facial --------------- */}
              <Tab
                eventKey="sdsd"
                title={
                  <CustomTabTitle
                    imageSrc={facial04}
                    className="custom-image-size"
                    title="Anti Aging Facial"/>  }
              >

                <section className="section-padding">
                  <Row>
                    {AntiAgingFacial.map((item,index)=>(<Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={item.image}
                          className="subcategory-card-img"
                        ></img>
                        <h4>{item.title}</h4>
                        <div className="amount-time">
                          <p>{item.price}</p>
                          <h6>
        <i className="fa-solid fa-clock"></i>{item.time} </h6>
                        </div>
                        <div className="subcategory-buttons">
    <Button variant="primary" onClick={() => setModalShow(true)}>
                         view details
                          </Button>

                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>))}

                  </Row>
                </section>
              </Tab>

              {/* --------------- Clean Up ------------------- */}
              <Tab
                eventKey="dfdf"
                title={
                  <CustomTabTitle
                    imageSrc={facial02}
                    className="custom-image-size"
                    title="Cleanup"
                  />
                }
              >
                <section className="section-padding">
                  <Row>
               {CleanUp.map((item,index)=>(<Col lg={4} md={6}>
                      <div className="all-skin-card">
                        <img
                          src={item.image}
                          className="subcategory-card-img"
                        ></img>
                        <h4>{item.title}</h4>
                        <div className="amount-time">
                          <p>{item.price}</p>
                          <h6>
          <i className="fa-solid fa-clock"></i> {item.time}
                          </h6>
                        </div>
                        <div className="subcategory-buttons">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                         view details
                          </Button>
   
                          <Link to="/slots">
                            <button className="subcategory-cart-btn">
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>))} 
                  </Row>
                </section>
              </Tab>
            </Tabs>
          </div>
        </section>
      </Container>
 <Footer/>

    </>
  );
};

export default SubcategoryDetails;
