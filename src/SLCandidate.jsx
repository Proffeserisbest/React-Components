import React from 'react';
import './SLCandidate.scss';

function SLCandidate() {
  return (
    <div className="slcandidate-card">
      <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Profile" className="profile-image" />
      <div className="details">
        <h3 className="name">Adam Clark</h3>
        <p className="role">PHP Developer</p>
      </div>
      <div className="location-remove">
        <p className="location">Pakistan, Lahore</p>
        <button className="remove-btn">
          Remove <span className="remove-icon">✕</span>
        </button>
      </div>
    </div>
  );
}

export default SLCandidate;
