import React from 'react';
import './RatingList.scss';

const RatingList = () => {
  const ratings = [
    { stars: 5, count: 1850 },
    { stars: 4, count: 1850 },
    { stars: 3, count: 1850 },
    { stars: 2, count: 1850 },
    { stars: 1, count: 1850 },
  ];

  const renderStars = (count) => {
    return (
      <>
        {[...Array(count)].map((_, index) => (
          <span key={index} className="star filled">★</span>
        ))}
        {[...Array(5 - count)].map((_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </>
    );
  };

  return (
    <div className="rating-list">
      <h3>Rating</h3>
      {ratings.map((rating, index) => (
        <div key={index} className="rating-item">
          <span className="checkmark">✔</span>
          <div className="stars">{renderStars(rating.stars)}</div>
          <div className="rating-count">{rating.count}</div>
        </div>
      ))}
    </div>
  );
};

export default RatingList;
