import React, { createContext, useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
    setFilteredDoctors(doctorsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(lowercasedTerm) ||
      doctor.specialization.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredDoctors(filtered);
  };

  const getDoctorById = (id) => {
    return doctors.find(doctor => doctor.id === parseInt(id));
  };

  return (
    <AppContext.Provider value={{ doctors: filteredDoctors, handleSearch, getDoctorById }}>
      {children}
    </AppContext.Provider>
  );
};