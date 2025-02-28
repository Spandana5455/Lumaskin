import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.css' // If you are using `react-slick`


// Import images statically
import l1 from "../src/images/l1.jpg";
import l2 from "../src/images/l2.jpg";
import l3 from "../src/images/l3.jpg";
import l4 from "../src/images/l4.jpg";
import l5 from "../src/images/l5.jpg";
import l6 from "../src/images/l6.jpg";

export default function HomeSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        waitForAnimate: false,
        pauseOnHover: false,
        appendDots: dots => (
            <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center" }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "white",
                    opacity: 2,
                    transition: "opacity 0.3s ease, transform 0.3s ease"
                }}
                className="dot"
            ></div>
        )
        
    };
     
    const data = [
        {  path: l1 },
        {  path: l2 },
        {  path: l3 },
        {  path: l4 },
        {  path: l5 },
        {  path: l6 },
    ];

    return (
        <div className="home-slider-container">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="home-slide">
                        <img src={item.path} alt='Slide' className="full-width-image" />
                        <div className="gradient-overlay" />  
                    </div>
                ))}
            </Slider>
        </div>
    );
}
