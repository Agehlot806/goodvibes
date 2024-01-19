import React from 'react';
import './Works.css';
import workBox01 from '../../../assets/workBox01.svg';
import workBox02 from '../../../assets/workBox02.svg';
import workBox03 from '../../../assets/workBox03.svg';

const Works = () => {
  return (
    <>
     <div className='home-work-page'>
<h2> How It Works</h2>
<div className='container'>
    <div className='row'>
        {/* ---------- first-circle --------- */}
    <div className='col-lg-4 col-md-6 col-sm-12'>
<div className='work-circle'>
<img src={workBox01} className='work-box-img'></img>
</div>
    </div>

    {/* --------------- second circle ----------- */}
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className='work-circle'>
<div className='circle-img'>
<img src={workBox02} className='work-box-img'></img>
</div>
</div>
    </div>

    {/* -------------- third circle ------------- */}
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className='work-circle'>
    <img src={workBox03} className='work-box-img'></img>
</div>
    </div>
        
    
</div>
</div>
    </div>
    </>
  )
}

export default Works