import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Hairfall.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p6 from './images/p6.png';

export default function Hairfall() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="hairfall-section">  
            <div className="container hairfall-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Hair Fall and Dandruff Treatment</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='hair-title'>Hair Fall and Dandruff</h5>
                        <p className='hair-desc' data-aos="fade-right" data-aos-delay="300">
                        Involves addressing the Underlying causes of excessive hair loss and flaky scalp issues to restore hair health and scalp balance. These treatments vary based on the severity of the problem and individual needs.
                        </p>

                        <h5 className='hair-title'>Treatments for Hair Fall and Dandruff</h5>
                        <p className='hair-desc' data-aos="fade-right" data-aos-delay="300">
                        Our Clinic offer specialized treatments tailored to the root causes of hair and scalp problems. Dermatologist examine the scalp and hair condition to identify underlying causes.
                        </p>

                        <h5 className='hair-title'>Fungal Infection Treamtment</h5>
                        <p className='hair-desc' data-aos="fade-right">
                        Oral or topical antifungal medications to combat dandruff caused by fungal infections.
                        </p>

                        <h5 className='hair-title'>Scalp Peels</h5>
                        <p className='hair-desc' data-aos="fade-right">
                        Exfoliating treatments to remove dead skin and improve scalp health.
                        </p>

                        <h5 className='hair-title'>Dietary and Lifestyle Counseling</h5>
                        <p className='hair-desc' data-aos="fade-right">
                        Advice on a balanced diet, proper hydration, and stress management.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p6} alt="Hairfall" className='hair-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}