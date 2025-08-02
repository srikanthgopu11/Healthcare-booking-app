// src/components/BookingForm.js
import React, { useState } from 'react';
import './index.css';

const BookingForm = ({ doctorName }) => {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      doctorName,
      patientName,
      email,
      dateTime
    });
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="confirmation-message">
        <h3>Appointment Confirmed!</h3>
        <p>Thank you, {patientName}. Your appointment with {doctorName} has been scheduled.</p>
        <p>A confirmation has been sent to {email}.</p>
      </div>
    );
  }

  return (
    <div className="booking-form-modal">
      <div className="booking-form-content">
        <h3>Book Appointment with {doctorName}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={patientName} onChange={e => setPatientName(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="datetime-local" value={dateTime} onChange={e => setDateTime(e.target.value)} required />
          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;