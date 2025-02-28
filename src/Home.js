import React from "react";
import HomeSlider from "./HomeSlider";
import About from './About';
import WhyChooseUs from "./WhyToChoose";
import Services from "./Services";
import Doctor from "./Doctor";
import Reviews from "./Reviews";


export default function Home() {
  return (
    <>
      <HomeSlider />
      <About />
      <WhyChooseUs />
      <Services />
      <Doctor />
      <div>
      <h2 className= "text-center p-4 fw-bold" style={{ color: '#583722' ,fontSize: '60px'}}>What Our Clients Say</h2>
      </div>
      <Reviews />
    </>
  );
}

