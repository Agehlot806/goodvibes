import React from 'react';
import './DownloadApp.css';
import { Col, Row } from 'react-bootstrap';
import mobileApp from "../../../assets/mobileApp.png";
import applestore from "../../../assets/image/appstore.png";
import playstore from "../../../assets/image/playmarket.png";

const DownloadApp = () => {
  return (
    <>
     <div className='container'>
    
      <section className="section-padding">
      <div className='download-app-area'>
        <Row>
          <Col lg={6}>
            <div className='mobile-app-img'>
            <img src={mobileApp} alt='mobile-img'></img>
            </div>
          </Col>
          <Col lg={6}>
            <h4 className='download-app-head'>Download Our App</h4>
            <p>Vix te soleat eirmod civibus. Ius ad autem dicam exerci, sed et erremasc simulacrum phaedrum, ex latine minimum has. No mei case possit reformidans assenna. Mea nobis sum putent discere no. Duo ea sum homero senserit mea fugit.</p>
<div className='playstore-app'>
            <img src={applestore}  className="apple-store-img"/>
            <img src={playstore} className="play-store-img" />
            </div>
          </Col>
        </Row>
      </div>
      </section>
      </div>   
    </>
  )
}

export default DownloadApp