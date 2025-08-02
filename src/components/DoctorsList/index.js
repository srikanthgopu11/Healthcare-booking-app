// src/components/DoctorsList.js
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DoctorCard from '../DoctorCard';
import './index.css';

const DoctorsList = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="doctors-list-container">
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;