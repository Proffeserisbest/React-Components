import React from 'react';
import './SinCard.scss';

const SinCard = () => {
  return (
    <div className="sin-card">
      <img src="logo.png" alt="Andropple lab logo" className="logo" />
      <div className="card-details">
        <div className="info">
          <span className="company-name">Andropple lab</span>
          <span className="country">Pakistan</span>
        </div>
        <div className="ratings">
          <span className="stars">★★★★★</span>
          <span className="rating">4.5</span>
          <span className="overall">Overall ratings</span>
        </div>
      </div>
    </div>
  );
};

export default SinCard;
