import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Skintightening.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';
import p12 from './images/p12.png';

export default function Skintightening() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="skintightening-section">  
            <div className="container skintightening-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Skin Tightening</h2>
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='skin-title'>Skin Tightening</h5>
                        <p className='skin-desc' data-aos="fade-right" data-aos-delay="300">
                        Skin tightening refers to cosmetic treatments aimed at improving skin elasticity and reducing sagging, wrinkles, or fine lines. These treatments stimulate collagen production, which helps restore firmness and give the skin a more youthful appearance.
                        </p>

                        <p className='skin-desc' data-aos="fade-right" data-aos-delay="300">
                        Skin tightening helps reduce sign of aging like sagging, wrinkles, and loose skin. Stimulates collagen and elastin production, improving the skin's firmness and texture.
                        </p>

                        <p className='skin-desc' data-aos="fade-right" data-aos-delay="300">
                        Our clinic offer advanced treatments like radiofrequency, ultrasound therapy, or laser treatments, which are non-invasive or minimally invasive compared to surgical methods. Enhanced skin appearance can make you feel more confident and youthful.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p12} alt="Skintightening" className='skin-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}