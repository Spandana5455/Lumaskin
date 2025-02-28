import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Warts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p7 from './images/p7.png';

export default function Warts() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="warts-section">  
            <div className="container warts-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Warts and Skin Tan Removal</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='wat-title'>Warts Removal and Tan Removal</h5>
                        <p className='wat-desc' data-aos="fade-right" data-aos-delay="300">
                        We offer techniques like cryotherapy, laser therapy, or electrosurgery, ensuring minimal discomfort and better results compared to at-home remedies.
                        </p>
                        <p className='wat-desc' data-aos="fade-right" data-aos-delay="300">
                        Treatments like chemical peels, microdermabrasion, and laser therapy effectively address deep pigmentation, offering a rejuvenated complexion.
                        </p>

                        <h5 className='wat-title'>Skin Tan Removal</h5>
                        <p className='wat-desc' data-aos="fade-right" data-aos-delay="300">
                        Applying solutions like glycolic or salicylic acid to exfoliate and lighten the skin. Using laser light to target and reduce pigmentation. A procedure that exfoliates the skin to remove the outer, tanned layers. Uses of serums, masks, or creams with ingredients like vitamin C or Kojic acid.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p7} alt="Warts" className='wat-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}