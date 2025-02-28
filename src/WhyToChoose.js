import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhyToChoose.css';
import E1 from './images/E1.png'
import E2 from './images/E2.png';
import E3 from './images/E3.png';
import E4 from './images/E4.png';

const WhyChooseUs = () => {
  const items = [
    {
      path:E1,
      title: 'One On One Consultation',
    },
    {
      path:E2,
      title: 'Various Treatment Options',
    },
    {
      path:E3,
      title: 'Certified And Experienced Therapist',
    },
    {
      path:E4,
      title: 'Various Range Of Treatments To Choose',
    },
  ];

  return (
    <div className="container my-5 text-center">
      <h2 className="main-header mb-4">Why To Choose</h2>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card border-0">
              <img src={item.path} className="card-img-top rounded-circle" alt={item.title} />
              <div className="card-body">
                <p className="card-text fw-bold">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
