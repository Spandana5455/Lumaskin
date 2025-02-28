import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import S1 from './images/S1.png';
import S2 from './images/S2.png';
import S3 from './images/S3.png';
import S4 from './images/S4.png';
import S5 from './images/S5.png';
import S6 from './images/S6.png';
import S7 from './images/S7.png';
import S8 from './images/S8.png';
import S9 from './images/S9.png';
import S10 from './images/S10.png';
import S11 from './images/S11.png';
import S12 from './images/S12.png';

export const services = [
  { icon: S1, title: 'Permanent Eye Brow', link: "/services/permanent-eye-brow" },
  { icon: S2, title: 'Pigmentation And Pimple Treatment', link:"/services/pigmentation" },
  { icon: S3, title: 'Hydra And Oxy Facial', link:"/services/hydrafacial" },
  { icon: S4, title: 'BB Glow And CC Glow', link:"/services/bbandccglow"},
  { icon: S5, title: 'Warts And Skin Tan Removal', link:"/services/warts" },
  { icon: S6, title: 'Ear Lobe Repair', link:"/services/earlobe" },
  { icon: S7, title: 'Hair Fall And Dandruff Treatment', link:"/services/hairfall" },
  { icon: S8, title: 'Permanent Lip Coloring', link:"/services/permanentlip"},
  { icon: S9, title: 'Skin Tightening', link:"/services/skintightening" },
  { icon: S10, title: 'Wrinkle Treatment',link:"/services/wrinkletreatment" },
  { icon: S11, title: 'Tattoo Removal',link:"/services/tattooremoval" },
  { icon: S12, title: 'Carbon Peel And Photo Facial',link:"/services/carbonpeel" }
];

export default function Services() {
  return (
    <div className="main-container container py-5">
      <h2 className="mainheader text-center mb-4">Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <Link to={service.link ? service.link : `/services/${index}`} className="text-decoration-none">
              <div className="card text-center p-4 shadow-sm d-flex flex-column align-items-center custom-hover">
                <img src={service.icon} alt={service.title} className="image-style mb-3" />
                <h5 className="card-title">{service.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}



