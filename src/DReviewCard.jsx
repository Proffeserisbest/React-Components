import React from 'react';
import './DReviewCard.scss';

function DReviewCard() {
  return (
    <div className="dreview-card">
      <div className="title-rating">
        <h3>3.6 Career development</h3>
      </div>
      <div className="stars-section">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="overall-rating">
          <span className="rating-value">4.5</span> <p className='rate'>Overall ratings</p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
}

export default DReviewCard;
