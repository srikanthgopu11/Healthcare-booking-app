// src/components/DoctorProfile.js
import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import BookingForm from '../BookingForm';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const { getDoctorById } = useContext(AppContext);
  const [doctor, setDoctor] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    setDoctor(getDoctorById(id));
  }, [id, getDoctorById]);

  if (!doctor) {
    return <p>Doctor not found.</p>;
  }

  return (
    <div className="profile-container">
      <Link to="/" className="back-link">← Back to Doctors List</Link>
      <div className="profile-card">
        <img src={process.env.PUBLIC_URL + doctor.image} alt={doctor.name} className="profile-image-large" />
        <h2>{doctor.name}</h2>
        <p className="specialization">{doctor.specialization}</p>
        <div className="schedule">
          <h3>Availability Schedule</h3>
          {doctor.schedule.length > 0 ? (
            <ul>
              {doctor.schedule.map((item, index) => (
                <li key={index}><strong>{item.day}:</strong> {item.time}</li>
              ))}
            </ul>
          ) : (
            <p>Not available</p>
          )}
        </div>
        <button className="book-appointment-button" onClick={() => setShowBookingForm(true)}>
          Book Appointment
        </button>
      </div>
      {showBookingForm && <BookingForm doctorName={doctor.name} />}
    </div>
  );
};

export default DoctorProfile;