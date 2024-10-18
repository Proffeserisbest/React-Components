import React from 'react';
import './Date.scss';

function Date() {
  return (
    <div className="date-card">
      <img src="https://via.placeholder.com/150" alt="Andropple Logo" className="logo" />
      <div className="content">
        <h3>Andropple Soft</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
        <button className="fame-button">Go to hall of fame</button>
        <div className="feedback">
          <div className="feedback-item">
            <span role="img" aria-label="thumbs down">👎</span> 18
          </div>
          <div className="feedback-item">
            <span role="img" aria-label="thumbs up">👍</span> 150
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;