import React from 'react';
import './SearchBar.scss';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search by name & keyword..." className="search-input" />
      </div>
      <div className="divider"></div>
      <div className="location-input-wrapper">
        <FaMapMarkerAlt className="icon" />
        <input type="text" placeholder="Choose Location..." className="location-input" />
      </div>
      <button type="button" className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;