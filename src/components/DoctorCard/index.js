// src/components/DoctorCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={process.env.PUBLIC_URL + doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-details">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p className={`availability ${doctor.availability.toLowerCase().replace(' ', '-')}`}>
          {doctor.availability}
        </p>
        <Link to={`/doctor/${doctor.id}`} className="view-profile-button">View Profile</Link>
      </div>
    </div>
  );
};

export default DoctorCard;