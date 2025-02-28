import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact border">
      <div className="contact-inner container">
        <h1 className="contactus text-center">Contact Us</h1>
        <div className="contact-main">
          <div className="contactus-inner text-center border rounded p-3">
            <h3 className="contact-heading">Address</h3>
            <p className="contact-content">
              4-81, Panchavati colony, Peerzadiguda, Hyderabad, Telangana 500039.
            </p>
          </div>

          <div className="contactus-inner text-center border rounded p-3">
            <h3 className="contact-heading">Details</h3>
            <p className="contact-content">Contact: +91 9876543210</p>
            <p className="contact-content2">Email: lumaskin@gmail.com</p>
          </div>

          <div className="contactus-inner text-center border rounded p-3">
            <h3 className="contact-heading">Opening Hours</h3>
            <p className="contact-content">Monday to Friday - 9:00AM - 10:00PM</p>
            <p className="contact-content2">Saturday & Sunday - 10:00AM - 10:00PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}




