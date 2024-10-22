import React from 'react';
import './PCard.scss';

const PCard = () => {
  return (
    <div className="p-card">
      <img
        src="profile-image-url"
        alt="Profile"
        className="profile-image"
      />
      <h2>Adam Clark</h2>
      <p>PHP Developer</p>
      <p>Pakistan, Lahore</p>
      <div className="skills">
        <span className="skill">PHP</span>
        <span className="skill">Database</span>
        <span className="skill">Dot Net</span>
        <span className="skill">...</span>
      </div>
    </div>
  );
};

export default PCard;
