// src/pages/LandingPage.js
import React from 'react';
import SearchBar from '../../components/SearchBar';
import DoctorsList from '../../components/DoctorsList';

const LandingPage = () => {
  return (
    <div>
      <SearchBar />
      <DoctorsList />
    </div>
  );
};

export default LandingPage;