import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pigmentation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';
import p2 from './images/p2.png';

export default function Pigmentation() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="pigmentation-section">  
            <div className="container pigmentation-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center mainheading">Pigmentation and Pimple Treatment</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='pgt-title'>Professional Diagnosis</h5>
                        <p className='pgt-desc' data-aos="fade-right" data-aos-delay="300">
                        Our Skincare professionals can accurately identify the root causes of pigmentation and pimples, such as hormonal imbalance, lifestyle factors, or underlying skin conditions.
                        </p>

                        <h5 className='pgt-title'>Customized Treatments</h5>
                        <p className='pgt-desc' data-aos="fade-right" data-aos-delay="300">
                        Our Clinic offer personalized treatments tailored to your skin type, severity of the issue, and medical history. 
                        This ensures optimal results compared to generic products.
                        </p>

                        <h5 className='pgt-title'>Quick and Long-Lasting Results</h5>
                        <p className='pgt-desc' data-aos="fade-right">
                        Professional treatment often yield quicker and Longer-lasting results, saving you time and reducing the risk of recurrence.
                        </p>

                        <h5 className='pgt-title'>Safe and Controlled Environment</h5>
                        <p className='pgt-desc' data-aos="fade-right">
                        Treatments are performed under sterile and controlled conditions, minimizing the risk of infection or side effects.
                        </p>

                        <h5 className='pgt-title'>Expert Guidance</h5>
                        <p className='pgt-desc' data-aos="fade-right">
                        Post-treatment care and preventive strategies provided by our experts help maintain healthy, glowing skin over the long term.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p2} alt="Pigmentation" className='pgt-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
