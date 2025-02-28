import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PermanentEyebrow.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';
import p1 from './images/p1.png';

export default function PermanentEyeBrow() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
    }, []);

    return (
        <div className="permanent-eyebrow-section">  
            <div className="container permanent-eyebrow-content">
            <Link to="/services" className="back-arrow">
                    <FaArrowLeft className="back-icon" /> 
                </Link>
                <h2 className="text-center main-heading">Permanent Eyebrow Treatment</h2> 
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-start">
                        <h5 className='peb-title'>Enhanced Aesthetic</h5>
                        <p className='peb-desc' data-aos="fade-right" data-aos-delay="300">
                            Permanent eyebrows provide a well-defined, symmetrical, and natural look tailored to your face shape and preference.
                        </p>

                        <h5 className='peb-title'>Customizable Results</h5>
                        <p className='peb-desc' data-aos="fade-right" data-aos-delay="300">
                            At our clinic, we design your brows based on your facial features, skin tone, and personal style.
                            Techniques like microblading or powder brows ensure you get a look that suits your needs.
                        </p>

                        <h5 className='peb-title'>Waterproof and Sweatproof</h5>
                        <p className='peb-desc' data-aos="fade-right">
                            Permanent brows are resistant to smudging, making them perfect for active lifestyles, workouts, or swimming.
                        </p>

                        <h5 className='peb-title'>Long-Lasting Solution</h5>
                        <p className='peb-desc' data-aos="fade-right">
                            Once done, permanent eyebrows can last 1-3 years, depending on the technique used and your skin type.
                            It reduces the need for frequent touch-ups or product purchases.
                        </p>

                        <h5 className='peb-title'>Confidence Boost</h5>
                        <p className='peb-desc' data-aos="fade-right">
                            A consistent and polished look enhances self-esteem, particularly for those who feel self-conscious about their natural eyebrows.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <img src={p1} alt="Permanent Eye Brow" className='peb-image' data-aos="fade-left" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}





