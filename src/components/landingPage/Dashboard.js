import React from 'react';
import './Dashboard.css';

import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <>
<div className='dashboard-main'>
  {/* ------------- Navbar --------------- */}
  <div className='container'>

    <Header/>

<div className='fast-response'>
  <h6 className='fast-response-text'>Fast Response - Quality Works</h6></div>


{/* ------------ Dashboard Text ---------- */}
<div className='dashboard-text-area'>
<h1 className='main-heading'>Nonstop Services That Make Life Better.</h1>
</div>

{/* -------------- Search area ------------- */}
<div className='search-area'>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle selectBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-location-dot"></i> Select
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Indore</a></li>
    <li><a className="dropdown-item" href="#">Bhopal</a></li>
    <li><a className="dropdown-item" href="#">Guna</a></li>
  </ul>
</div>

<div className='search-bar'>
  <input type='text' placeholder='Find Your Services Here' className='search-input'></input>
  <button type='submit' className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
</div>

</div>


{/* ----------------- Suggestion Area ------------------ */}

<div className=' suggestion-main'>
<ul className='suggestion-area'>
<span className='suggest-head'>Suggested For You : </span>
  <li className='suggestion-btn'>Beauty & Salon</li>
  <li className='suggestion-btn'>Shifting</li>
  <li className='suggestion-btn'>AC Repair</li>
  <li className='suggestion-btn'>WallPainting</li>
</ul>
</div>

</div>
</div>


    </>
  )
}

export default Dashboard