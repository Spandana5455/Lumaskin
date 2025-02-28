import React from 'react';
import Slider from "react-slick";
import './Reviews.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';

function SampleNextArrow(props) {
  const { className, style,  } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
    
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Reviews() {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };
  return (
    <>
   
      <div className="slider-container container">
        <Slider {...settings}  >
          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img2} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Vasavi Gopichand</h3>
                    <div>⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p> Amazing Experience!
                    "I've been visiting this skin clinic for a few months now, and I couldn't be more pleased with the results. 
                    The staff is incredibly friendly and professional, and they took the time to explain every step of my treatment. 
                    My skin has improved significantly, and I've never felt more confident. Highly recommend this clinic to anyone looking to improve their skin health!"</p>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img1} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Spandana</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p> Life-Changing Results!
                    After struggling with acne for years, I finally decided to give this clinic a try, and I'm so glad I did. 
                    The treatments were tailored to my specific skin needs, and I saw noticeable improvements within weeks. 
                    The team is knowledgeable, and I always feel comfortable during my visits. My skin has never looked better</p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img3} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Sirisha Sabbu</h3>
                    <div>⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p>Not Worth the Money
                    "I paid a lot for my treatment here, but I didn't see any improvements in my skin. 
                    I expected better results for the price I paid. The staff was nice, but the treatment didn't live up to the promises</p>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img4} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Rohini Gopiraj</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p>This clinic is exceptional! 
                    From the moment I walked in, I felt welcomed and at ease. The staff is professional, and the dermatologist I saw was thorough and attentive, explaining everything clearly. 
                    My skin has never looked so healthy, and I'm beyond happy with the care I received here! </p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="review-parent">
              <div className="review-card-main" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img5} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Tejaswini Venkatesh</h3>
                    <div>⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p>Unpleasant Staff Interaction
                    While the clinic itself is nice, my experience with the staff was not great. 
                    I felt rushed during my appointment, and the receptionist wasn't very helpful when I had questions. 
                    I also didn't appreciate how little time the doctor spent with me. Unfortunately, the treatment didn't work as expected, and I won't be returning.</p>
                </div>
              </div>

              <div className="review-card-main d-none d-md-block" >
                <div className="presonal-data-review">
                  <div className="review-user-pic">
                    <img src={img6} alt="" className='rounded-circle user-pic-in-review' />
                  </div>
                  <div className="user-name">
                    <h3>Mamatha N</h3>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <div className="review-cards">
                  <p>I came here for a consultation about my skin concerns, and I'm so glad I did. 
                    The staff is friendly, the doctor was incredibly knowledgeable, and the treatments they recommended have worked wonders. 
                    My skin looks and feels amazing now. I can't thank them enough for the great service!</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}


