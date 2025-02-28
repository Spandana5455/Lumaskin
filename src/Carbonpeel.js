import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carbonpeel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';
import p10 from './images/p10.png';

export default function Carbonpeel() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="carbonpeel-section">  
            <div className="container carbonpeel-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Carbon Peel & Photo Facial</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='car-title'>Acne & Blackhead Reduction</h5>
                        <p className='car-desc' data-aos="fade-right" data-aos-delay="300">
                        Helps reduce active acne, Blackheads, and whiteheads. Kills acne-causing bacteria, preventing future breakouts.
                        </p>

                        <h5 className='car-title'>Controls Excess Oil (Sebum)</h5>
                        <p className='car-desc' data-aos="fade-right" data-aos-delay="300">
                        Ideal for oily skin, as it shrinks sebaceous (oil) glands.Prevents clogged pores that lead to acne.
                        Helps in reducing mild melasma  and hyperpigmentation.
                        </p>

                        <p className='car-desc' data-aos="fade-right" data-aos-delay="300">
                        Stimulates collagen production, improving skin elasticity and reducing signs of aging.
                        </p>

                        <h5 className='car-title'>Brightens & Evens Skin Tone</h5>
                        <p className='car-desc' data-aos="fade-right">
                        Targets sun damage, age spots, and melasma. Helps fade freckles, uneven skin tone, and redness.
                        </p>

                        <h5 className='car-title'>Quick, Safe & Minimal Downtime</h5>
                        <p className='car-desc' data-aos="fade-right">
                        Painless procedure with no injections or surgery, can resume daily activities immediately after treatment.
                        </p>

                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p10} alt="Carbon peel" className='car-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}