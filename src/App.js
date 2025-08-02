// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LandingPage from './Pages/LandingPage';
import ProfilePage from './Pages/ProfilePage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>Healthcare Appointment Booking</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/doctor/:id" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;