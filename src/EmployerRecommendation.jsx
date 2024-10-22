import React, { useState } from 'react';
import './EmployerRecommendation.scss';

function EmployerRecommendation() {
  const [recommendation, setRecommendation] = useState(null);

  return (
    <div className="employer-recommendation">
      <div className="recommendation-header">
        <img src="/thumbs-up-icon.png" alt="Thumbs up" className="thumbs-up-icon" />
        <h2>You Recommend this employer ?</h2>
      </div>
      <div className="recommendation-options">
        <label className="radio-label">
          <input
            type="radio"
            name="recommendation"
            value="yes"
            checked={recommendation === 'yes'}
            onChange={() => setRecommendation('yes')}
          />
          <span className="custom-radio"></span>
          Yes I Recommend this employer
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="recommendation"
            value="no"
            checked={recommendation === 'no'}
            onChange={() => setRecommendation('no')}
          />
          <span className="custom-radio"></span>
          Not recommend
        </label>
      </div>
    </div>
  );
}

export default EmployerRecommendation;