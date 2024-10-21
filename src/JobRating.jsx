import React from 'react';
import './JobRating.scss';

const JobRating = () => {
  const aspects = [
    "Work Life Balance",
    "Skill Development",
    "Salary & Benefits",
    "Job Security",
    "Career Growth"
  ];

  return (
    <div className="job-rating">
      <h2 className="rating-title">
        <span className="rating-icon">⭐</span>
        Rating
      </h2>
      <form className="rating-form">
        {aspects.map((aspect, index) => (
          <div key={index} className="rating-item">
            <label htmlFor={aspect.toLowerCase().replace(/\s/g, '-')}>{aspect}</label>
            <select id={aspect.toLowerCase().replace(/\s/g, '-')} defaultValue="">
              <option value="" disabled>Select</option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        ))}
      </form>
    </div>
  );
};

export default JobRating;
