import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Permanentlip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p11 from './images/p11.png';

export default function Permanentlip() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="permanentlip-section">  
            <div className="container permanentlip-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Permanent Lip Coloring</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='lip-title'>Lip Coloring</h5>
                        <p className='lip-desc' data-aos="fade-right" data-aos-delay="300">
                        Lip Coloring, also Known as lip blush cosmetic procedure that enhances the natural color, shape, and  definition of the lips.
                        </p>

                        <h5 className='lip-title'>Enhance Natural Lip Color</h5>
                        <p className='lip-desc' data-aos="fade-right" data-aos-delay="300">
                        Improves dull or pale lip tones, givingg lips a more vibrant, healthy appearance.
                        </p>

                        <h5 className='lip-title'>Address Pigmentation Issues</h5>
                        <p className='lip-desc' data-aos="fade-right">
                        Helps lighten dark or discolored lips caused by genetics, smoking, or other factors.
                        </p>

                        <h5 className='lip-title'>Long-Lasting Solution</h5>
                        <p className='lip-desc' data-aos="fade-right">
                        Provides a semi-permanent solution that lasts 1-3 years, depending on the individual’s skin and lifestyle
                        </p>

                        <h5 className='lip-title'>Confidence Boost</h5>
                        <p className='lip-desc' data-aos="fade-right">
                        Gives a polished and natural look without heavy makeup.
                        </p>

                        <h5 className='lip-title'>Save Time</h5>
                        <p className='lip-desc' data-aos="fade-right">
                        Reduces the need helps lighten dark or discolored lips caused by  genetics, smoking, or other factors.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p11} alt="Permanentlip" className='lip-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}