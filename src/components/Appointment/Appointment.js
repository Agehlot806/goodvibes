import React from 'react';
import './Appointment.css';
import AppointmentImg from '../../assets/AppointmentImg.jpg'

const Appointment = () => {
  return (

    <>
    <div className='container'>
  <div className='appointment-page'>
    <div className='row'>
        <div className='col-6'>
    <img src={AppointmentImg} className='appoint-img'></img>    
        </div>
        <div className='col-6'>
        <div className='appointment-form'>
   <h4>Book an Appointment</h4>
   <h1>Select The Services You Need</h1>
   <form>
    <input type='text' placeholder='Name'></input>
    <input type='number' placeholder='Contact Number'></input>
    <input type='email' placeholder='Email'></input>
    <input type='date' placeholder='Contact Number'></input>
    <input type='text' placeholder='Contact Number'></input>
   </form>
        </div>
        </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Appointment;