import React from "react";
import { useParams } from "react-router-dom";
import { services } from "./Services"; // Import the services list

export default function ServiceDetails() {
  const { serviceId } = useParams(); // Get the service ID from the URL
  const service = services[serviceId]; // Find the service based on the ID

  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  return (
    <div className="container py-5 text-center">
      <h2>{service.title}</h2>
      <img src={service.icon} alt={service.title} className="image-style mb-3" />
      <p className="mt-3">
        This is a detailed description of <b>{service.title}</b>. You can add more info here.
      </p>
    </div>
  );
}
