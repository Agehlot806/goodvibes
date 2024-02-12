import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Slot/Slot-model.css";

const CustomTabTitle = ({  className, Day, Date,Month }) => (
    <div className={`custom-tab-title ${className}`}>
      <div className="custom-tab-title-text">
        <div className="line">{Day}</div>
      <div className="line">{Date}</div>
      <div className="line">{Month}</div></div>
    </div>
    );

function SlotModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      Select Date and Time
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Tabs
      defaultActiveKey="Slot1"
      id="uncontrolled-tab-example"
      className="slot-date-area mb-3 "
    >
      <Tab eventKey="Slot1" title=
      {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "9" Month="February"   
      />}
    
      >
       <div className='date-box'>
        <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div>
       
</div>
      </Tab>

      <Tab eventKey="Slot2" title= {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "10" Month="February"   
      />} >
        <div className='date-box'>  <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div></div>
      
      </Tab>
      <Tab eventKey="Slot3" title= {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "11" Month="February"   
      />} >
     <div className='date-box'>  <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div></div>  
      </Tab>

      <Tab eventKey="Slot4" title= {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "12" Month="February"   
      />}>
       <div className='date-box'> <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div></div>  
      </Tab>

      <Tab eventKey="Slot5" title= {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "13" Month="February"   
      />} >
       <div className='date-box'>  <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div></div>  
      </Tab>

      <Tab eventKey="Slot6" title= {<CustomTabTitle  className="slot-date-box"
        Day="Friday" Date= "14" Month="February"   
      />} >
        <div className='date-box'>  <div className='time-slot'>
            <Row>
<Col lg={3}><div className='time-slot-box'><p>09:00 AM - 10:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>10:00 AM - 11:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>12:00 AM - 01:00 AM</p></div></Col>
<Col lg={3}><div className='time-slot-box'><p>02:00 AM - 03:00 AM</p></div></Col>
            </Row>
        </div></div>  
      </Tab>
    </Tabs>

      </Modal.Body>
      <Modal.Footer>
      <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SlotModel;