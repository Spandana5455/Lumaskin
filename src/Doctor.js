import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Doctor.css'
import D1 from './images/D1.png'

export default function Doctor() {
  return(
    <div className="container py-5 d-flex flex-column align-items-center">
      <h2 className=" heading mb-3">Doctor</h2>
      <div className="text-center p-4" style={{ maxWidth: '500px' }}>
        <img src={D1} alt="Doctor" className="style-img rounded mb-3"/>
        <h2 className="name">Name : Dr.T.Shravani</h2>
        <h2 className='experience'>Experience : 5 Years</h2>
      </div>
    </div>
  )
}