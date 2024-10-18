import React from 'react';
import './ReviewCard.scss';

function ReviewCard() {
  return (
    <div className="review-card">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
      <div className="details">
        <h3>Adam Clark</h3>
        <p>PHP Developer</p>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>
      <div className="location">
        <p>Pakistan</p>
        <div className="rating">
          <span>5.0</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
