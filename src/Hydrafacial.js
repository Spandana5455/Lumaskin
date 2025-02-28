import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Hydrafacial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p3 from './images/p3.png';

export default function Hydrafacial() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="hydrafacial-section">  
            <div className="container hydrafacial-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-head">Hydra And Oxy Facial</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='hydra-title'>Hydra Facial</h5>
                        <p className='hydra-desc' data-aos="fade-right" data-aos-delay="300">
                        A HydraFacial is a multi-step, non-invasive facial treatment designed to cleanse, exfoliate, extract, and hydrate the skin using advanced technology.
                        </p>

                        <h5 className='hydra-title'>Deep Cleansing & Hydration</h5>
                        <p className='hydra-desc' data-aos="fade-right" data-aos-delay="300">
                        Removes impurities, dead cells, and excess oil. Gentle Exfoliation brightens the skin and improves its texture. 
                        Infuses the skin with serums containing hyaluronic acid, peptides, and antioxidants, leaving it plump and moisturized.
                        </p>

                        <h5 className='hydra-title'>Oxy Facial</h5>
                        <p className='hydra-desc' data-aos="fade-right">
                        Oxy Facial Deliver Oxygen and Nutrients to the skin to rejuvenate and revitalize it.
                        </p>

                        <h5 className='hydra-title'>Oxygenation</h5>
                        <p className='hydra-desc' data-aos="fade-right">
                        Enhance cell turnover by delivering oxygen deep into the skin layers. Boosts blood flow, giving the skin a natural glow. 
                         Reduces the apperance of wrinkles and fine lines.
                        </p>

                        <h5 className='hydra-title'>Gentle and Safe</h5>
                        <p className='hydra-desc' data-aos="fade-right">
                        Suitable for sensitive Skin With no harsh chemicals or abrasive techniques.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p3} alt="Hydrafacial" className='peb-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}