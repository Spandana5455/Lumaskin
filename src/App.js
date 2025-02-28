import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails"; // Import ServiceDetails
import Contact from "./Contact";
import Doctor from "./Doctor"; 
import Appointment from './Appointment';
import PermanentEyeBrow from "./PermanentEyebrow";
import Pigmentation from "./Pigmentation";
import Hydrafacial from "./Hydrafacial";
import Wrinkletreatment from "./Wrinkletreatment";
import BBandCCglow from "./BBandCCglow";
import Warts from "./Warts";
import Earlobe from "./Earlobe";
import Hairfall from "./Hairfall";
import Permanentlip from "./Permanentlip";
import Skintightening from "./Skintightening";
import Tattooremoval from "./Tattooremoval";
import Carbonpeel from "./Carbonpeel";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} /> 
        <Route path="/services/permanent-eye-brow" element={<PermanentEyeBrow />} />
        <Route path="/services/pigmentation" element={<Pigmentation />} />
        <Route path="/services/hydrafacial" element={<Hydrafacial />} />
        <Route path="/services/wrinkletreatment" element={<Wrinkletreatment />} />
        <Route path="/services/bbandccglow" element={<BBandCCglow />} />
        <Route path="services/warts" element={<Warts />} />
        <Route path="/services/earlobe" element={<Earlobe />} />
        <Route path="/services/hairfall" element={<Hairfall />} />
        <Route path="/services/permanentlip" element={<Permanentlip />} />
        <Route path="/services/skintightening" element={<Skintightening />} />
        <Route path="/services/tattooremoval" element={<Tattooremoval />} />
        <Route path="/services/carbonpeel" element={<Carbonpeel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} /> 
        <Route path="/appointment" element={<Appointment />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

