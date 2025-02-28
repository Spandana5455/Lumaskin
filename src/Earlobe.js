import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Earlobe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p8 from './images/p8.png';

export default function Earlobe() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="earlobe-section">  
            <div className="container earlobe-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Ear Lobe Repair</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='ear-title'>Hygiene and Maintenance</h5>
                        <p className='ear-desc' data-aos="fade-right" data-aos-delay="300">
                        The ears are often overlooked during regular skincare routines, leading to a buildup of dead skin cells, oils, and dirt. professional cleaning can prevent clogged pores and improve the overall appearance.
                        </p>

                        <h5 className='ear-title'>Ear Lobe Services</h5>
                        <p className='ear-desc' data-aos="fade-right" data-aos-delay="300">
                        An Ear Label services in a skincare clinic typically refer to addressing skin concerns or treatments specifically around the ears. 
                        This involve cleaning, exfoliating, or treating issues such as acne, pigmentation, or skin tags in the ear area. 
                        This services ensures better hygiene, addresses skin concerns, and enhances overall aesthetics in an area that is easy to overlook.
                        </p>

                        <h5 className='ear-title'>Skin Concerns </h5>
                        <p className='ear-desc' data-aos="fade-right">
                        Our Clinics can help treat and prevent these around the ear area. We offer removal or lightening treatments. Professional exfoliation and moisturizing treatments can help.
                        </p>

                        <h5 className='ear-title'>Cosmetic Reasons</h5>
                        <p className='ear-desc' data-aos="fade-right">
                        For people who frequently wear earrings, treamets may enhance the skins appearance, ensuring smooth, healthy-looking ears.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p8} alt="Earlobe" className='ear-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}