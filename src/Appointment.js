import React from "react";
import "./Appointment.css";

export default function Appointment() {
  return (
    <div className="appointment-container d-flex flex-column align-items-center">
      <h2 className="appointment-title">Book Your Appointment</h2>
      <div className="appointment-form border rounded p-4">
        <input type="text" className="form-control mb-3" placeholder="Enter your name" />
        <input type="text" className="form-control mb-3" placeholder="Enter your mobile number" />
        <input type="text" className="form-control mb-3" placeholder="Add your Location" />
        <input type="text" className="form-control mb-3" placeholder="Name the treatment" />
        <button className="btn btn-primary book-btn">Book Now</button>
      </div>
    </div>
  );
}
