import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Wrinkletreatment.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p4 from './images/p4.png';

export default function Wrinkletreatment() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="wrinkletreatment-section">  
            <div className="container wrinkletreatment-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center mainh">Wrinkle Treatment</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='wrn-title'>Wrinkle Treatment</h5>
                        <p className='wrn-desc' data-aos="fade-right" data-aos-delay="300">
                        As we age, the skin loses elasticity and collagen, leading to wrinkles. 
                        Treatments can help combat these effects. Sun exposure, pollution and 
                        lifestyle habits can cause premature wrinkles, which professional treatments can address. 
                        Clinics offer advanced procedures to smooth, tighten and rejuvenate skin.
                        <p className='wrn-desc' data-aos="fade-right" data-aos-delay="300">Dermatologists and skincare specialists provide tailored solutions based on skin type and concerns. 
                        Professional treatments often deliver more effective and longer-lasting outcomes compared to over-the-counter products.
                        Expertise in handling sensitive skin issues. Use of advanced technology for safe and effective results.  
                        We Guide on maintaining results and enhancing overall skin health.
                        </p>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p4} alt="Wrinkle Treatment" className='wrn-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
