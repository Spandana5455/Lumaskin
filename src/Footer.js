import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import logo from './images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-dark py-5" style={{ backgroundColor: '#D9BAA6'}}>
      <Container>
        <Row className="align-items-center">
          <Col md={1} className="text-center">
            <img src={logo} alt="Luma Skin Logo" className="img-fluid"/>
          </Col>
          <Col md={6}>
            <p className="text">
            Luma Skin provides personalized skincare services, backed by experienced professionals, to address various skin concerns, rejuvenate, reduce aging signs, and rejuvenate your skin in a relaxing environment.
            </p>
          </Col>
          <Col md={5} className="text-center">
            <h5 className="contactstyle">Contact</h5>
            <p className="phone"><FaPhone /> +91 9876543210</p>
            <p className="mail"><FaEnvelope /> lumaskin@gmail.com</p>
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col>
            <h5 className="followstyle fw-bold">Follow Us</h5>
            <FaXTwitter className="mx-2" size={24} />
            <FaInstagram className="mx-2" size={24} />
            <FaFacebook className="mx-2" size={24} />
          </Col>
        </Row>
       

        <Row className="text-center">
          <Col>
            <p className="policy">&copy; 2023 Luma Skin. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

