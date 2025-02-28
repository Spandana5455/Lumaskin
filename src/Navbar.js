import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container ms-0">
        {/* Logo */}
        <img src={logo} alt="Logo" className="navbar-logo" onClick={() => { navigate('/')}}/>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/"> HOME</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/about">ABOUT</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/services">SERIVCES</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/contact">CONTACT</Link></li>
            <li className="nav-item"><Link className="nav-link mx-3 me-4" to="/doctor">DOCTORS</Link></li> 
          </ul>
        </div>
      </div>
      <Link to="/appointment"><button className="custombutton me-4">APPOINTMENT</button></Link>
    </nav>
  );
};

export default Navbar;


