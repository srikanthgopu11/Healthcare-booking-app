// src/components/SearchBar.js
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './index.css';

const SearchBar = () => {
  const { handleSearch } = useContext(AppContext);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by doctor's name or specialization..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;