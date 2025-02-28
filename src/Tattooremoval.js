import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tattooremoval.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';
import p9 from './images/p9.png';

export default function Tattooremoval() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="tattooremoval-section">  
            <div className="container tattooremoval-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Tattoo Removal</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='tattoo-title'>Most Effective</h5>
                        <p className='tattoo-desc' data-aos="fade-right" data-aos-delay="300">
                        Break down ink particles into tiny fragments, allowing the body to naturally eliminate them.
                        Works well on both old and new tattoos, can remove or significantly fade tattoos over multiple sessions.
                        </p>

                        <h5 className='tattoo-title'>Safe & minimally Invasive</h5>
                        <p className='tattoo-desc' data-aos="fade-right" data-aos-delay="300">
                        Unlike surgical removal, no cutting or stitches are required. Minimal risk of infection when performed by professionals, Suitable for most skin types.
                        </p>

                        <h5 className='tattoo-title'>Gradual Fading for Natural Results</h5>
                        <p className='tattoo-desc' data-aos="fade-right">
                        The tattoo fades over time , giving the skin a more natural look. Can be used for complete removal or lightening a tattoo before cover-uo design.
                        </p>

                        <h5 className='tattoo-title'>How Many Sessions Needed</h5>
                        <p className='tattoo-desc' data-aos="fade-right">
                        5-10 sessions for most tattoos, spaced 4-8 weeks apart for skin healing.Older tattoos or faded ink may required fewer sessions.Multi-colored or  deep tattoos may need more treatments.
                        </p>

                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p9} alt="Tattoo Removal" className='tattoo-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}